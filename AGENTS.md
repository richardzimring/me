# Agent Guidelines

This is Richard Zimring's personal website built with Astro.

## Key Documentation

- **[docs/WEBSITE_STYLE.md](docs/WEBSITE_STYLE.md)** — Design tokens, color scheme, typography, component conventions, dark/light mode approach. Read this before creating or editing any visual component.
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
- **Domain**: `richardzimring.com` (custom domain via GitHub Pages)

## Project preview videos

Web project demos are fullscreen light-mode recordings from the **14" M1 MacBook Pro**. Do **not** use Chrome device mode or an external monitor (those came out soft / wrong size). Hide Chrome chrome, go fullscreen, zoom 100%.

### Capture

|              | Web (Courtside, Heatstrike)                                         | iOS (Gather)                                                        |
| ------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Source       | Fullscreen laptop screen recording (`.mov`)                         | Simulator / device, **portrait**                                    |
| Typical size | `3024 × 1898` (panel is 3024×1964; recordings are slightly shorter) | Phone aspect (e.g. 1206×2622 on 17 Pro)                             |
| Site fit     | `cover` (default)                                                   | `videoFit: 'device'` — official Apple iPhone 17 Black bezel overlay |

- Record in **light mode**, short muted loops (~15–30s), one product beat.
- macOS recordings often include a **1px black top row** — always crop it on encode (below).

### Encode (ffmpeg)

Outputs land at:

- `public/videos/projects/{slug}.mp4`
- `public/images/projects/{slug}-poster.jpg`

Shared CSS frame after encode: **`1512 / 948`** (see `.project-video` in `global.css`).

```bash
# From a 3024×1898 .mov in ~/Documents (or pass the path)
SRC="$HOME/Documents/your-recording.mov"
SLUG=heatstrike   # or courtside, gather, …

ffmpeg -y -i "$SRC" \
  -an \
  -vf "crop=iw:ih-2:0:2,scale=1512:-2,fps=30" \
  -c:v libx264 -pix_fmt yuv420p \
  -crf 26 -preset medium \
  -movflags +faststart \
  "public/videos/projects/${SLUG}.mp4"

ffmpeg -y -i "public/videos/projects/${SLUG}.mp4" \
  -ss 00:00:01 -frames:v 1 -update 1 \
  "public/images/projects/${SLUG}-poster.jpg"
```

| Flag / filter                      | Why                                            |
| ---------------------------------- | ---------------------------------------------- |
| `crop=iw:ih-2:0:2`                 | Drop the black top hairline from macOS capture |
| `scale=1512:-2`                    | Half-res; sharp at ~640px column, small file   |
| `fps=30`                           | Enough for UI; smaller than 60fps              |
| `-an`                              | Autoplay is muted                              |
| `crf 26` + `yuv420p` + `faststart` | Web-friendly H.264                             |

Wire the paths in `src/data/projects.ts` (`video`, `poster`, and `videoFit: 'device'` for Gather). UI: `ProjectVideo.astro` — muted loop autoplay inline; click opens a centered lightbox (blurred dim backdrop; click / Escape to close). Bezel asset: `public/images/devices/iphone-17-black.png` (from Apple Design Resources).

### iOS note

Portrait Gather clips use `videoFit: 'device'`: video sits in the bezel screen hole (`left/right 5.333%`, `top/bottom 2.5%`), Apple PNG overlays on top. Encode Gather to ~1080px wide without forcing the laptop aspect.

### OpenReadout note

The OpenReadout clip is the posted 4:5 launch video (`~/Documents/openreadout-notes/launch/v2/post/kit/02.mp4`), pillarboxed on encode with its own background color so it fills the shared `1512 / 948` frame with `cover`:

```bash
ffmpeg -y -i 02.mp4 -an \
  -vf "scale=758:948:flags=lanczos,pad=1512:948:(ow-iw)/2:0:color=0xF5F3EF,setsar=1,fps=30" \
  -c:v libx264 -pix_fmt yuv420p -crf 24 -preset medium -movflags +faststart \
  public/videos/projects/openreadout.mp4
```

## Linting & Formatting

- **Linter**: ESLint (`eslint.config.js`) — catches TypeScript and Astro issues
- **Formatter**: Prettier (`.prettierrc`) — enforces consistent style
- **Pre-commit hook**: Husky + lint-staged auto-formats staged files on commit

### Agent requirement

After making any code changes, **always run `npm run lint`** to verify there are no lint or formatting errors. Fix any issues before considering the task complete.
