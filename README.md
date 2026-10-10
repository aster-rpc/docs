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

The migration preserves existing public documentation, including existing
version and feature claims. Release content refinement is a separate pass.
Legacy Docusaurus sources in `docs/`, `static/`, and excluded React pages remain
for reference; edit the Starlight sources for the current site.

Internal notes under `_internal/` are ignored and are not published.

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
