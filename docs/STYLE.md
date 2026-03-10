# Style Guide

Design inspired by [darioamodei.com](https://www.darioamodei.com/) — minimalist, typography-first, editorial aesthetic.

## Color Tokens

All colors are CSS custom properties defined in `src/styles/global.css`.

### Light Mode (default)

| Token                    | Value     | Usage                   |
| ------------------------ | --------- | ----------------------- |
| `--color-bg`             | `#fafaf7` | Page background         |
| `--color-bg-alt`         | `#f0f0eb` | Code blocks, alt bg     |
| `--color-text`           | `#1a1a1a` | Body text               |
| `--color-text-secondary` | `#555550` | Subtitles, descriptions |
| `--color-text-tertiary`  | `#888883` | Dates, muted text       |
| `--color-heading`        | `#0a0a0a` | Headings                |
| `--color-link`           | `#1a1a1a` | Link text               |
| `--color-border`         | `#ddd`    | Borders, dividers       |

### Dark Mode

| Token                    | Value     | Usage                   |
| ------------------------ | --------- | ----------------------- |
| `--color-bg`             | `#161616` | Page background         |
| `--color-bg-alt`         | `#1e1e1e` | Code blocks, alt bg     |
| `--color-text`           | `#e0e0e0` | Body text               |
| `--color-text-secondary` | `#a0a0a0` | Subtitles, descriptions |
| `--color-text-tertiary`  | `#707070` | Dates, muted text       |
| `--color-heading`        | `#f0f0f0` | Headings                |
| `--color-link`           | `#e0e0e0` | Link text               |
| `--color-border`         | `#333`    | Borders, dividers       |

## Typography

- **Primary font**: `Newsreader` (Google Fonts) — used for headings and body text
- **Fallbacks**: Georgia, Times New Roman, serif
- **Monospace**: SF Mono, Fira Code, Roboto Mono
- **Base size**: 18px (`--text-base: 1.125rem`)
- **Line height**: 1.7 for body (`--leading-normal`), 1.2 for headings (`--leading-tight`)
- **Max prose width**: 680px (`--max-width-prose`)

### Scale

| Token         | Size | Usage              |
| ------------- | ---- | ------------------ |
| `--text-xs`   | 13px | Footer, fine print |
| `--text-sm`   | 15px | Dates, TOC, meta   |
| `--text-base` | 18px | Body text          |
| `--text-lg`   | 20px | Large body, h4     |
| `--text-xl`   | 24px | h3, section heads  |
| `--text-2xl`  | 32px | h2                 |
| `--text-3xl`  | 44px | Post titles        |
| `--text-4xl`  | 56px | Hero h1            |

## Spacing

| Token         | Value   |
| ------------- | ------- |
| `--space-xs`  | 0.25rem |
| `--space-sm`  | 0.5rem  |
| `--space-md`  | 1rem    |
| `--space-lg`  | 1.5rem  |
| `--space-xl`  | 2.5rem  |
| `--space-2xl` | 4rem    |
| `--space-3xl` | 6rem    |

## Component Conventions

- All styling uses CSS custom properties — no hardcoded colors or sizes
- Dark/light mode is driven by `data-theme` attribute on `<html>`
- Links are underlined with `text-underline-offset: 3px`
- No decorative elements — the design relies on typography and whitespace
- Layouts are centered single-column with generous margins
- The Table of Contents sidebar is fixed-position and hidden below 1100px viewport width

## Dark/Light Mode

- Toggle state is stored in `localStorage` under the key `theme`
- Falls back to `prefers-color-scheme` media query
- A blocking inline script in `<head>` prevents flash of wrong theme on load
- The toggle button is a circle with sun/moon SVG icons
