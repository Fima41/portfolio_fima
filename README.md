# fima.dev — Portfolio

Personal portfolio of **Fima Sichone**, climate data scientist in Lusaka, Zambia.

Built with [Next.js](https://nextjs.org) (App Router, static export) with a markdown-powered blog.

**Live site:** https://fima41.github.io/portfolio_fima/

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the static export (with
`NEXT_PUBLIC_BASE_PATH` set to `/portfolio_fima`) and publishes it to GitHub Pages.

One-time setup: in the repo settings, set **Settings → Pages → Source** to **GitHub Actions**.

## Writing blog posts

Add a markdown file to `content/posts/` with frontmatter:

```markdown
---
title: "Post Title"
date: "2026-07-16"
tag: "climate"
excerpt: "One-line summary shown on the blog index."
---

Post body in markdown...
```
