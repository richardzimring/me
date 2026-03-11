# Agent Guidelines

This is Richard Zimring's personal website built with Astro.

## Key Documentation

- **[docs/WEBSITE_STYLE.md](docs/WEBSITE_STYLE.md)** — Design tokens, color scheme, typography, component conventions, dark/light mode approach. Read this before creating or editing any visual component.
- **[docs/WRITING_STYLE.md](docs/WRITING_STYLE.md)** — Detailed writing style, tone, voice, purpose, and patterns
- **[docs/CONTENT.md](docs/CONTENT.md)** — How to add blog posts, edit the resume, frontmatter schema, and content authoring guidelines.

## Project Structure

```
src/
├── content.config.ts          # Content collection schemas
├── content/posts/             # Blog posts (.mdx files) — just drop a file here
├── components/                # Reusable Astro components
├── layouts/                   # Page layouts (BaseLayout, PostLayout, ResumeLayout)
├── lib/og-image.ts            # OG image generator (satori + sharp)
├── pages/                     # Routes (index, resume, posts/*)
├── pages/og/                  # Build-time OG image endpoints
└── styles/global.css          # All CSS: tokens, typography, themes
```

## Quick Reference

- **Framework**: Astro 5 with MDX
- **Styling**: Vanilla CSS with custom properties (no Tailwind)
- **Fonts**: Newsreader (serif) from Google Fonts
- **Deployment**: GitHub Pages via GitHub Actions on push to `main`
- **Base path**: `/me` (configured in `astro.config.mjs`)

## Linting & Formatting

- **Linter**: ESLint (`eslint.config.js`) — catches TypeScript and Astro issues
- **Formatter**: Prettier (`.prettierrc`) — enforces consistent style
- **Pre-commit hook**: Husky + lint-staged auto-formats staged files on commit

### Agent requirement

After making any code changes, **always run `npm run lint`** to verify there are no lint or formatting errors. Fix any issues before considering the task complete.
