# richardzimring.com

My personal website — a writing-focused blog and resume, built with [Astro](https://astro.build/).

**Live site**: [richardzimring.com](https://richardzimring.com)

## Tech

- **Framework**: [Astro 5](https://astro.build/) with [MDX](https://mdxjs.com/) for content
- **Styling**: Vanilla CSS with custom properties — no frameworks, no Tailwind
- **Fonts**: [Newsreader](https://fonts.google.com/specimen/Newsreader) (serif) from Google Fonts
- **OG images**: Auto-generated at build time using [satori](https://github.com/vercel/satori) + [sharp](https://github.com/lovell/sharp)
- **Deployment**: GitHub Actions → GitHub Pages on every push to `main`

## Design

Minimalist, typography-first. Single-column layout centered around long-form reading. Dark/light mode.

## Project Structure

```
src/
├── content/posts/        # Blog posts (.mdx) — filename becomes URL slug
├── components/           # Astro components (Header, TOC, ThemeToggle, etc.)
├── layouts/              # BaseLayout, PostLayout, ResumeLayout
├── lib/og-image.ts       # OG image generator
├── pages/                # Routes: index, resume, posts/*
├── pages/og/             # Build-time OG image endpoints
└── styles/global.css     # All CSS: tokens, typography, dark/light themes
```

## Development

```sh
npm install
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview the build locally
npm run lint      # ESLint + Prettier check
npm run format    # Auto-format with Prettier
```

A pre-commit hook (Husky + lint-staged) auto-formats staged files on every commit.

## Adding a Post

Drop a `.mdx` file in `src/content/posts/`. The filename becomes the URL slug.

```yaml
---
title: 'Post Title'
description: 'Short description.'
date: 2026-03-10
draft: false # optional — hides post from listings when true
---
Your content here.
```

OG images are generated automatically from the title and description. Posts with `##` headings get a Table of Contents sidebar.
