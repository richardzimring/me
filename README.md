# Me

Personal website built with [Astro](https://astro.build/) and GitHub Actions.

## Development

```sh
npm install
npm run dev       # Start dev server at localhost:4321/me
npm run build     # Build to ./dist/
npm run preview   # Preview the build locally
```

## Adding a Post

Create a new `.mdx` file in `src/content/posts/`:

```yaml
---
title: 'Post Title'
description: 'Short description.'
date: 2026-03-10
---
Your content here.
```

## Editing Resume

Edit `src/pages/resume.md` directly.

## Documentation

- [AGENTS.md](AGENTS.md) — Agent guidelines and project overview
- [docs/STYLE.md](docs/STYLE.md) — Design tokens, colors, typography
- [docs/CONTENT.md](docs/CONTENT.md) — Content authoring guide
