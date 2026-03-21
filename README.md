# Interactive Textbook (GitHub Pages)

This repo is a static interactive textbook site you can host on GitHub Pages with your custom domain.

## What it includes

- Chapter navigation with search
- Interactive chapter quizzes with instant feedback
- Local progress tracking (completion + quiz score)
- Chapter notes saved in browser local storage
- Responsive layout for desktop and mobile

## Run locally

Open `index.html` directly in your browser, or run a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish to GitHub Pages

1. Push this repo to GitHub.
2. In GitHub: `Settings -> Pages`.
3. Set source to `Deploy from a branch`.
4. Choose your default branch and root folder (`/`).
5. Save.

## Keep your custom domain

Create a file named `CNAME` in the repo root with exactly one line:

```text
yourdomain.com
```

Then confirm DNS:

- Apex/root domain (`yourdomain.com`) has A records pointed to GitHub Pages IPs.
- `www` has a CNAME record pointed to `<your-github-username>.github.io`.

## Customize textbook content

Edit the `textbook` object in `app.js`:

- Site title/subtitle
- Chapters
- Sections
- Activities
- Quiz questions/options/answers

No build step needed.
