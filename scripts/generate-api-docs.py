"""Generate API references from installed, matching public preview packages.

Run with the Python environment containing aster-rpc and pdoc 16.0.0.
Pass the installed @aster-rpc/aster directory and a TypeDoc 0.28.18 executable.
Generation completes in a temporary directory before replacing public assets.
"""

import argparse
import importlib.metadata
import json
from pathlib import Path
import shutil
import subprocess
import tempfile


def main():
    cli = argparse.ArgumentParser(description=__doc__)
    cli.add_argument("--version", required=True)
    cli.add_argument("--typescript-package", type=Path, required=True)
    cli.add_argument("--typedoc", type=Path, required=True)
    args = cli.parse_args()
    package = args.typescript_package.resolve(strict=True)
    typedoc = args.typedoc.resolve(strict=True)
    ts_version = json.loads((package / "package.json").read_text())["version"]
    py_version = importlib.metadata.version("aster-rpc")
    if ts_version != args.version or py_version != args.version:
        cli.error(f"Expected {args.version}; Python={py_version}, TypeScript={ts_version}")

    import aster.public
    import pdoc
    import pdoc.render

    with tempfile.TemporaryDirectory(prefix="aster-api-docs-") as staging:
        stage = Path(staging)
        # Replace only the curated module introduction, whose historical examples
        # can predate the package. All API declarations/docstrings come from it.
        aster.public.__doc__ = f"""Python API reference for Aster **{args.version}**.

Generated from the installed public preview package. Import from ``aster`` in
applications. Use the `tested quickstart <https://sdk.getaster.now/docs/quickstart/python/>`_
for a complete producer and consumer, and the
`compatibility guide <https://sdk.getaster.now/docs/reference/compatibility/>`_
for package and feature boundaries.
"""
        pdoc.render.configure(include_undocumented=False, show_source=False,
                              footer_text=f"Aster {args.version} public preview")
        pdoc.pdoc("aster.public", output_directory=stage / "python")
        for html in (stage / "python").rglob("*.html"):
            html.write_text("\n".join(line.rstrip() for line in html.read_text().splitlines()) + "\n")

        declaration = (package / "dist/public.d.ts").read_text()
        declaration = declaration[declaration.index("*/") + 2:]
        declaration = declaration.replace("from './", f"from '{(package / 'dist').as_posix()}/")
        entry = stage / "public-docs.d.ts"
        entry.write_text(f"""/**
 * API reference generated from the public {args.version} package.
 *
 * Import from `@aster-rpc/aster` in applications. Use the
 * [tested quickstart](https://sdk.getaster.now/docs/quickstart/python/)
 * for complete examples and the
 * [compatibility guide](https://sdk.getaster.now/docs/reference/compatibility/)
 * for package and lifecycle boundaries.
 * @packageDocumentation
 */
""" + declaration)
        tsconfig = stage / "tsconfig.json"
        tsconfig.write_text(json.dumps({"compilerOptions": {
            "target": "ES2022", "module": "Node16", "moduleResolution": "Node16",
            "strict": True, "skipLibCheck": True,
        }, "files": [str(entry)], "exclude": []}))
        links = {
            "DynamicTypeFactory": "https://sdk.getaster.now/docs/concepts/serialization/",
            "Expose": "https://sdk.getaster.now/docs/guides/expose/",
            "consoleSink": "https://sdk.getaster.now/docs/guides/observability/",
            "TraceContext": "https://sdk.getaster.now/docs/guides/observability/",
        }
        options = stage / "typedoc.json"
        options.write_text(json.dumps({
            "entryPoints": [str(entry)], "tsconfig": str(tsconfig),
            "out": str(stage / "typescript"),
            "name": f"Aster TypeScript {args.version}", "readme": "none",
            "excludePrivate": True, "excludeInternal": True, "disableSources": True,
            "hideGenerator": True, "categorizeByGroup": False,
            "externalPattern": [],
            "groupOrder": ["Server and Client", "Node", "Decorators", "Authorization",
                           "Serialization", "Interceptors", "Observability", "Logging",
                           "Metrics", "Tracing", "Errors", "*"],
            "sort": ["source-order"],
            "externalSymbolLinkMappings": {"@aster-rpc/aster": links, "*": links},
        }))
        subprocess.run([str(typedoc), "--options", str(options)], check=True)

        # Retain old inbound URLs for symbols removed from the released API.
        for name, destination in {
            "MetricsInterceptor": "/docs/guides/observability/",
            "DeadlineInterceptor": "/docs/bindings/typescript/client/",
        }.items():
            path = stage / "typescript/classes" / f"{name}.html"
            if not path.exists():
                path.write_text(f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<title>{name} — Aster API change</title>
<link rel="canonical" href="https://sdk.getaster.now{destination}">
<meta http-equiv="refresh" content="0;url={destination}"></head><body>
<h1>{name}</h1><p>This symbol is not exported by the {args.version} TypeScript package.
<a href="{destination}">Read the current guide</a>.</p></body></html>
""")

        root = Path(__file__).resolve().parent.parent / "public/api"
        for language in ("python", "typescript"):
            destination = root / language
            if destination.exists():
                shutil.rmtree(destination)
            shutil.copytree(stage / language, destination)
        (root / "version.json").write_text(json.dumps({
            "version": args.version, "python": py_version, "typescript": ts_version,
            "pdoc": importlib.metadata.version("pdoc"),
            "source": "Installed public packages; curated module introductions maintained by docs.",
        }, indent=2) + "\n")
        print(f"Generated Python and TypeScript API references for {args.version}.")


if __name__ == "__main__":
    main()
