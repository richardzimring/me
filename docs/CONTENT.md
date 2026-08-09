# Content Guide

## Adding a New Blog Post

1. Create a new `.mdx` file in `src/content/posts/`. The filename becomes the URL slug (e.g., `my-post.mdx` → `/posts/my-post/`).

2. Add frontmatter at the top of the file:

```yaml
---
title: 'Your Post Title'
description: 'A 1-2 sentence summary for OG previews and the listing page.'
date: 2026-03-10
readMinutes: 6
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
| `description` | string  | yes      | Short summary — used as the essay eyebrow        |
| `date`        | date    | yes      | Publication date (YYYY-MM-DD)                    |
| `readMinutes` | number  | yes      | Estimated read time, shown in the essay meta row |
| `ogImage`     | string  | no       | Path to custom OG image (1200×630px recommended) |
| `draft`       | boolean | no       | If `true`, post won't appear in listings         |

## Editing the Resume

The resume lives at `src/pages/resume.mdx`. Edit it directly — the layout handles styling.

## Projects

Projects are defined in `src/data/projects.ts`. Each entry gets a page at `/projects/{slug}/`.

| Field         | Description                                |
| ------------- | ------------------------------------------ |
| `slug`        | URL path segment                           |
| `name`        | Display name                               |
| `tagline`     | Short label on home / projects index       |
| `description` | One-line summary (OG / meta)               |
| `body`        | Paragraphs for the project page            |
| `href`        | External link (App Store, live site, etc.) |
| `linkLabel`   | Label for that link (default: View)        |
| `stack`       | Tech stack line                            |
| `tag`         | Status chip text (e.g. `ios · live`)       |
| `video`       | Optional path to mp4 under `public/`       |
| `poster`      | Optional poster image under `public/`      |
| `videoFit`    | `cover` (default) or `contain` (phone)     |
| `icon`        | Optional app icon on the project page      |

Preview videos: drop muted-loop-friendly mp4s in `public/videos/projects/{slug}.mp4` and optional posters in `public/images/projects/{slug}-poster.jpg`. Pages autoplay muted, looping, inline. Use `videoFit: 'contain'` for portrait iOS recordings so they fill the shared 16:10 slot vertically and letterbox on the sides.

## OG Preview Images

OG images are **generated automatically at build time** using [satori](https://github.com/vercel/satori) + [sharp](https://github.com/lovell/sharp). Each post gets a card with its title and description rendered in Newsreader serif on an off-white background — matching the site's design.

- Generator source: `src/lib/og-image.ts`
- Post images: `src/pages/og/[...slug].png.ts` → `/og/{slug}.png`
- Default image: `src/pages/og/default.png.ts` → `/og/default.png`
- To override a post's OG image, set the `ogImage` frontmatter field to a custom path

## Content Tips

- Use `##` headings to create sections — these auto-generate the Table of Contents on post pages
- `###` headings appear indented in the TOC
- Links are automatically styled with underlines
