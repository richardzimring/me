# Style Guide

Bare aesthetic: typography-first, minimal chrome, light/dark themes.

## Color Tokens

| Token        | Usage                         |
| ------------ | ----------------------------- |
| `--bg`       | Page background               |
| `--text`     | Primary text and body copy    |
| `--muted`    | Soft UI (site name, eyebrows) |
| `--meta`     | Dates, labels, TOC            |
| `--rule`     | Hairline dividers             |
| `--code-bg`  | Inline and block code         |
| `--media-bg` | Video placeholder surface     |

## Typography

Two registers only:

- **Serif (Newsreader):** UI lists, titles, body
- **Sans (system):** meta — dates, labels, stack, TOC

| Token            | Size                          | Use                        |
| ---------------- | ----------------------------- | -------------------------- |
| `--text-meta`    | 0.75rem                       | Dates, labels, chrome      |
| `--text-ui`      | 1.05rem                       | Lists, site name           |
| `--text-body`    | 1.125rem                      | Bio, prose, project copy   |
| `--text-page`    | 1.2rem                        | List-page titles           |
| `--text-display` | `clamp(1.65rem, 4vw, 2.1rem)` | Post / project / resume h1 |
| `--text-section` | 1.25rem                       | Prose h2                   |

## Spacing

Use `--space-1` … `--space-9`. Page padding: `--page-pad-top` / `--page-pad-x` / `--page-pad-bottom`.

## Layout

- List pages: `--max-width` 480px
- Reading pages (posts, projects, resume): `--max-width-prose` 640px
- Links: no underline at rest; underline on hover (including prose)
- Shared patterns: `.page-title`, `.entry-eyebrow`, `.entry-title`, `.entry-dek`, `.entry-meta`, `.list`, `.list-meta`
- Detail shells: `.project` / `.essay` / `.resume` (eyebrow → title → [dek] → meta → body)

## Dark / Light Mode

- `localStorage` key `theme`
- Default light
- Blocking script in `<head>`; toggle in site bar
