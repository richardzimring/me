# Content Guide

## Adding a New Blog Post

1. Create a new `.mdx` file in `src/content/posts/`. The filename becomes the URL slug (e.g., `my-post.mdx` → `/posts/my-post/`).

2. Add frontmatter at the top of the file:

```yaml
---
title: 'Your Post Title'
description: 'A 1-2 sentence summary for OG previews and the listing page.'
date: 2026-03-10
ogImage: '/me/og/custom.png' # optional, auto-generated if omitted
draft: false # optional, set true to hide from listings
---
```

3. Write your content in Markdown. MDX also lets you import and use Astro/React components if needed.

4. Build and deploy: push to `main` and GitHub Actions handles the rest.

### Frontmatter Schema

| Field         | Type    | Required | Description                                      |
| ------------- | ------- | -------- | ------------------------------------------------ |
| `title`       | string  | yes      | Post title, shown on page and in OG tags         |
| `description` | string  | yes      | Short summary for listings and social previews   |
| `date`        | date    | yes      | Publication date (YYYY-MM-DD)                    |
| `ogImage`     | string  | no       | Path to custom OG image (1200×630px recommended) |
| `draft`       | boolean | no       | If `true`, post won't appear in listings         |

## Editing the Resume

The resume lives at `src/pages/resume.md`. It's a standard Markdown file with a frontmatter `layout` reference. Edit it directly — the layout handles styling.

## OG Preview Images

OG images are **generated automatically at build time** using [satori](https://github.com/vercel/satori) + [sharp](https://github.com/lovell/sharp). Each post gets a card with its title and description rendered in Newsreader serif on an off-white background — matching the site's design.

- Generator source: `src/lib/og-image.ts`
- Post images: `src/pages/og/[...slug].png.ts` → `/og/{slug}.png`
- Default image: `src/pages/og/default.png.ts` → `/og/default.png`
- To override a post's OG image, set the `ogImage` frontmatter field to a custom path

## Content Tips

- Use `##` headings to create sections — these auto-generate the Table of Contents on post pages
- `###` headings appear indented in the TOC
- Keep line lengths comfortable for reading (the CSS caps prose at 680px)
- Links are automatically styled with underlines
