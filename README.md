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

## Contribution form configuration

The `/contribute/` page posts to `/api/contributions`, which sends structured email notifications through a provider-compatible HTTP API.

Default recipient:

- `contribute@agenticstandardmodel.ai`

Required environment variables:

- `EMAIL_API_KEY`
- `EMAIL_FROM`

Optional:

- `EMAIL_API_URL`
  - Defaults to `https://api.resend.com/emails`

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

## Release tags

GitHub Actions includes a release workflow at `.github/workflows/create-release-tag.yml`.

Automatic behavior:

- every push to `main` checks `package.json`
- if `package.json.version` resolves to a tag that does not already exist, the workflow creates that annotated tag
- the workflow pushes the tag to `origin`
- the workflow publishes a GitHub release with generated notes

This makes releases trunk-based and version-driven. To cut a new automatic release, bump `package.json.version` before merging or pushing to `main`.

Manual behavior:

You can also run it from the Actions tab to:

- create an annotated git tag
- push the tag to `origin`
- publish a GitHub release with generated notes

Inputs:

- `tag`
  - Example: `v0.1.0`
- `target`
  - Branch name or commit SHA to tag, defaults to `main`
- `release_name`
  - Optional title for the GitHub release
- `prerelease`
  - Marks the release as a prerelease when needed

## Legacy static prototype

The previous static prototype is archived at:

- `prototype/legacy-static/index.html`
- `prototype/legacy-static/styles.css`
- `prototype/legacy-static/app.js`
