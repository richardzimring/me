# richardzimring.com — Design

The site uses a **Bare** aesthetic: a narrow centered column, Newsreader for nearly everything, and almost no chrome. Light and dark themes share the same layout; only the palette flips.

## Principles

1. **As little UI as possible.** No window frames, prompts, or decorative accents.
2. **Two type registers.** Newsreader for reading and lists; system sans only for meta.
3. **One body color.** Reading copy uses `--text`, never a washed-out secondary gray. Meta stays `--meta`.
4. **One link behavior.** No underline at rest; underline on hover — including in prose.
5. **Shared patterns.** List pages use `.page-title` + `.list`. Detail pages use `.entry-title` / `.entry-meta`, with page-specific shells (`.project`, `.essay`, `.resume`).

## Type

| Role  | Family          | Usage                     |
| ----- | --------------- | ------------------------- |
| Serif | Newsreader      | Body, titles, list titles |
| Sans  | system UI stack | Dates, labels, TOC, stack |

## Color

| Token     | Light     | Dark      | Use                        |
| --------- | --------- | --------- | -------------------------- |
| `--bg`    | `#fff`    | `#111`    | Page background            |
| `--text`  | `#1a1a1a` | `#ececec` | Primary text and body copy |
| `--muted` | `#5c5c5c` | `#9a9a9a` | Soft UI / eyebrows         |
| `--meta`  | `#8a8a8a` | `#6e6e6e` | Dates, labels              |
| `--rule`  | `#ebebeb` | `#2a2a2a` | Dividers                   |

## Layout

- `.site-bar` — name link (subpages) + theme toggle
- `.page` (480px) / `.page--prose` (640px)
- `.list` + `.list-meta` — home, writing, projects index, favorites rows
- `.entry-*` — shared title / dek / meta on detail pages
- `.project` / `.essay` / `.resume` — page shells (eyebrow → title → meta → body)
- `.toc` — fixed left rail on wide screens for posts

## Theme

`localStorage.theme` → `data-theme`. Default light. Blocking script in `BaseHead`.

## Design previews

`/design/quiet/` and `/design/margin/` remain as alternate explorations.
