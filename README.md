# Agentic Standard Model Interactive Textbook

Astro-based interactive textbook scaffold for `agenticstandardmodel.ai`.

## Stack

- Astro (static output)
- Markdown chapter content collections
- YAML data contracts for figures/elements/molecules/bonds
- Interactive figure embeds (phase 1 via iframe)
- Cloudflare Pages target deployment

## Local development

```bash
npm install
ASTRO_TELEMETRY_DISABLED=1 npm run dev
```

Build and validate:

```bash
ASTRO_TELEMETRY_DISABLED=1 npm run check
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

## Content architecture

### Chapters

- Location: `src/content/chapters/`
- Frontmatter fields:
  - `title`
  - `chapter_number`
  - `summary`
  - `status` (`placeholder`, `draft`, `published`)
  - `figure_ids` (array)

Routes are generated from file slugs, e.g.:
- `src/content/chapters/chapter-2-periodic-table.md` -> `/chapter-2-periodic-table/`

### Structured data

- `src/data/figures.yml`
- `src/data/elements.yml`
- `src/data/molecules.yml`
- `src/data/bonds.yml`

Figures have stable share routes at `/figures/<figure-id>/`.

## Interactive assets

- Existing standalone interactives live in `public/interactive/`
- Current integrated asset:
  - `public/interactive/asm_periodic_table.html`
- Placeholder for pending figures:
  - `public/interactive/placeholder-figure.html`

## Domain and canonical settings

- Canonical domain: `https://agenticstandardmodel.ai`
- Configured in `astro.config.mjs` (`site` field)
- `CNAME` is preserved for GitHub Pages compatibility
- Root `index.html` is a redirect to `.ai` to keep `github.io` fallback behavior

## Deployment (Cloudflare Pages)

Recommended build settings:

- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `20+`

Post-deploy checks:

1. Confirm apex and `www` DNS records in Cloudflare.
2. Redirect `www.agenticstandardmodel.ai` -> `agenticstandardmodel.ai`.
3. Verify canonical tags and OG URLs point to `.ai`.
4. Verify figure routes and chapter routes return 200.

## Legacy static prototype

The previous static prototype is archived at:

- `prototype/legacy-static/index.html`
- `prototype/legacy-static/styles.css`
- `prototype/legacy-static/app.js`
