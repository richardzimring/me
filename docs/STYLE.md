# Style Guide

Minimalist, typography-first, editorial aesthetic.

## Color Tokens

All colors are CSS custom properties defined in `src/styles/global.css`.

### Semantic tokens (light/dark values defined per theme)

| Token                       | Usage                    |
| --------------------------- | ------------------------ |
| `--color-bg`                | Page background          |
| `--color-bg-alt`            | Code blocks, alt bg      |
| `--color-text`              | Body text                |
| `--color-text-secondary`    | Subtitles, descriptions  |
| `--color-text-tertiary`     | Dates, muted text        |
| `--color-heading`           | Headings                 |
| `--color-link`              | Link text                |
| `--color-link-hover`        | Link hover state         |
| `--color-border`            | Borders, dividers        |
| `--color-hr`                | Horizontal rules         |
| `--color-code-bg`           | Inline and block code bg |
| `--color-blockquote-border` | Blockquote left border   |
| `--color-blockquote-text`   | Blockquote text          |

## Typography

- **Serif**: `Newsreader` (Google Fonts) — used for headings and body text; fallbacks: Georgia, Times New Roman, serif
- **Sans**: system UI stack (`-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, Helvetica, Arial, sans-serif)
- **Monospace**: SF Mono, Fira Code, Fira Mono, Roboto Mono
- **Base size**: 20px (`--text-base: 1.25rem`)
- **Line heights**: 1.2 tight (`--leading-tight`), 1.5 normal (`--leading-normal`), 1.7 relaxed (`--leading-relaxed`)
- **Max prose width**: 680px (`--max-width-prose`)

### Scale

| Token         | Size | Usage              |
| ------------- | ---- | ------------------ |
| `--text-xs`   | 13px | Footer, fine print |
| `--text-sm`   | 15px | Dates, TOC, meta   |
| `--text-base` | 20px | Body text          |
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

## Layout

| Token               | Value  | Usage                        |
| ------------------- | ------ | ---------------------------- |
| `--max-width-prose` | 680px  | Article/prose content width  |
| `--max-width-page`  | 680px  | Overall page container width |
| `--page-padding`    | 1.5rem | Horizontal page padding      |

## Transitions

- `--transition-color` — smooth `color`, `background-color`, and `border-color` transitions (0.2s ease); applied to body, links, and interactive elements for theme switching

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
- The toggle button is a sun/moon SVG icon in the app bar
