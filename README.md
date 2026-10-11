# Aster documentation

The public documentation at <https://sdk.getaster.now/docs/> uses Astro and Starlight.

## Development

Use Node 22.12 or newer (deployment uses Node 24).

```sh
npm ci
npm run dev
```

Edit public pages under `src/content/docs/`. Explicit frontmatter slugs preserve
existing public URLs. Navigation is configured in `astro.config.mjs`; Aster
styles are in `src/styles/aster.css`.

```sh
npm run build
npm run preview
```

The static output is `dist/`. Search uses Pagefind and should be checked in the
production preview. Astro 7 starts preview in the background; stop it with
`npm exec astro preview stop`.

## Content and assets

`public/` contains fonts, images, generated Python and TypeScript API references,
and downloadable tutorial instructions. The two agent instructions are drafts
until they have been run in a fresh harness. Tutorial instructions and their
matching prose must stay aligned.

The documentation describes the current public preview. Feature and language claims
must distinguish released packages from newer source work. See `DOCS_PLAN.md`
for the page outline, evidence, and validation record.
Legacy Docusaurus sources in `docs/`, `static/`, and excluded React pages remain
for reference; edit the Starlight sources for the current site.

Internal notes under `_internal/` are ignored and are not published.

## Documentation checks

```sh
npm run build
npm run check:docs
npm run check:links
```

The first check validates rendered routes, anchors, assets, one page heading,
and search descriptions. The second also requests external links and reports
access blocks as failures requiring review. Python 3.9 or newer is needed for
these scripts. Keep Python API sidebar URLs absolute: Starlight normalizes
relative navigation links and removes the `.html` suffix used by pdoc.

Use a production preview to check Pagefind, tabs, diagrams, and light/dark
layouts at desktop and phone widths. Follow quickstarts using the published
packages in isolated projects; a site build does not validate SDK examples.

## Deployment

GitHub Actions validates the docs build on pushes to `main` and pull requests.
The `aster-rpc/website` repository owns publishing to Cloudflare Workers Static
Assets at <https://sdk.getaster.now>. It builds both repositories into one site,
including `/docs/`, `/api/`, Pagefind search and Go discovery.

The website publishing workflow checks for changed docs revisions every 15
minutes (GitHub scheduling can delay runs). For immediate publication, manually
run **Publish SDK site to Cloudflare** in `aster-rpc/website`. Website pushes
also publish the latest docs main revision. The deployed `/deployment.json`
records both source commits. This repository no longer deploys to GitHub Pages.

Docs emits its home at `/docs/`; existing `/docs/...` and `/api/...` routes
remain intact. Generated assets use `/_docs/` and bundled fonts use
`/docs-fonts/` to avoid collisions with the landing page.

See the [SDK site publishing runbook](https://github.com/aster-rpc/website/blob/main/DEPLOYMENT.md) for credentials, manual publication, verification and recovery. The successful Cloudflare CI run was verified on 10 October 2026.

## Generate API references

Generate from installed public packages of the same release, rather than an
unreleased SDK checkout. Use an isolated Python environment with `aster-rpc`
and `pdoc==16.0.0`, and a Node project with `@aster-rpc/aster`, TypeScript 5,
and `typedoc==0.28.18`. Run the script with that Python interpreter:

```sh
python scripts/generate-api-docs.py --version 0.3.893 \
  --typescript-package /path/to/node_modules/@aster-rpc/aster \
  --typedoc /path/to/node_modules/.bin/typedoc
```

The script checks both package versions, generates into temporary directories,
then replaces `public/api/python` and `public/api/typescript`. It preserves
old removed-symbol URLs as redirects and records provenance in
`public/api/version.json`. It replaces historical module introductions with
links to the tested quickstart; declarations and API docstrings come from the
packages. Review generator warnings for upstream comment links before release.
