"""Check built documentation routes, anchors, assets, and page metadata.

Run after `npm run build`. The website owns `/`; docs owns `/docs/`, `/api/`,
and its static assets. External URLs are reported separately with --external.
"""

import argparse
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import unquote, urljoin, urlsplit
from urllib.request import Request, urlopen


class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.ids = set()
        self.links = []
        self.h1 = 0
        self.description = False
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.add(attrs["id"])
        if tag == "h1":
            self.h1 += 1
        if tag == "meta" and attrs.get("name") == "description":
            self.description = bool(attrs.get("content", "").strip())
        for attr in ("href", "src", "poster"):
            if attrs.get(attr):
                self.links.append(attrs[attr])


def main():
    cli = argparse.ArgumentParser(description=__doc__)
    cli.add_argument("--external", action="store_true")
    args = cli.parse_args()
    root = Path(__file__).resolve().parent.parent / "dist"
    docs = sorted((root / "docs").rglob("index.html"))
    files = docs + sorted((root / "api").rglob("*.html"))
    if not docs:
        raise SystemExit("No built docs found. Run npm run build first.")
    parsed = {path: Page(path) for path in files}
    errors = set()
    external = set()
    checked = 0
    for path in files:
        page = parsed[path]
        route = "/" + path.relative_to(root).as_posix().removesuffix("index.html")
        if path in docs and page.h1 != 1:
            errors.add(f"{route}: expected one h1, found {page.h1}")
        if path in docs and not page.description:
            errors.add(f"{route}: missing description")
        for href in page.links:
            url = urlsplit(urljoin("https://sdk.getaster.now" + route, href))
            if url.scheme not in ("http", "https"):
                continue
            if url.netloc != "sdk.getaster.now":
                if "aster-rpc-internal" in url.path:
                    errors.add(f"{route}: private repository link {href}")
                external.add(url._replace(fragment="").geturl())
                continue
            if url.path in ("", "/"):
                continue  # Owned by the separately built website.
            target = root / unquote(url.path).lstrip("/")
            if target.is_dir():
                target /= "index.html"
            elif not target.exists() and not target.suffix:
                target /= "index.html"
            checked += 1
            if not target.is_file():
                errors.add(f"{route}: missing target {href}")
            elif url.fragment and target.suffix == ".html":
                if target not in parsed:
                    parsed[target] = Page(target)
                if unquote(url.fragment) not in parsed[target].ids:
                    errors.add(f"{route}: missing anchor {href}")
    for error in sorted(errors):
        print(error)
    print(f"Checked {len(files)} pages and {checked} internal links/assets; {len(errors)} errors.")
    if args.external:
        def check(url):
            try:
                with urlopen(Request(url, headers={"User-Agent": "AsterDocsLinkCheck/1.0"}), timeout=20) as response:
                    response.read(1)
                    return url, response.status
            except HTTPError as error:
                return url, error.code
            except (URLError, TimeoutError, OSError) as error:
                return url, str(error)

        with ThreadPoolExecutor(max_workers=8) as pool:
            results = list(pool.map(check, sorted(external)))
        failures = [(url, status) for url, status in results if status != 200]
        for url, status in failures:
            print(f"External review: {status} {url}")
        print(f"External URLs: {len(results)} checked, {len(failures)} need review (including access blocks).")
        errors.update(f"external {url}: {status}" for url, status in failures)
    raise SystemExit(bool(errors))


if __name__ == "__main__":
    main()
