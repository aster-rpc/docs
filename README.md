# Aster documentation

The public documentation at <https://docs.aster.site> uses Astro and Starlight.

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

Pushing `main` runs `.github/workflows/deploy.yml`. It installs with `npm ci`,
builds the site, and deploys `dist/` to GitHub Pages. `public/CNAME` preserves the
custom domain. The workflow can also be started manually.
