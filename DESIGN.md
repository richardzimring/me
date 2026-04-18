# richardzimring.com — Design

The site is styled as **an engineer's terminal / notebook**. The whole page lives inside a macOS-window chrome (traffic lights, titlebar, vim-style statusbar), content is framed as shell output (`whoami`, `ls -lht`, `git log`, `cat`, `fortune`), and essay bodies break out of the mono UI into a proper serif reading column.

Dark is the native mode — it's a terminal. Light is a "paper notebook" variant: same vocabulary, warm cream background, ink-brown text, deeper accent hues. The theme toggle flips `data-theme` on `<html>` and persists to localStorage.

## Design principles

1. **Committed aesthetic, not skin-deep.** Every component reinforces the terminal/notebook conceit — filenames in the titlebar, shell prompts between sections, "mode" indicators in the statusbar. No generic tech-site patterns.
2. **Mono for UI, serif for reading.** JetBrains Mono for everything that's "the app" — titlebar, prompts, lists, project metadata, statusbar. Newsreader (variable serif with optical sizing) for essay and resume body text. A 15-minute essay in monospace is punishing; mono is for chrome, serif is for prose.
3. **Accents carry meaning, not decoration.** Amber = active/path/executable, mint = keys/values/success, rose = warnings/drafts. They're consistent across components so the same color never means two things.
4. **One font family per register.** Mono and serif only. No sans-serif display face. If it isn't mono or serif, it's an accident.
5. **Terminal decorations are structural.** Traffic lights, scanlines, the blinking cursor at the end of the page — these aren't ornament, they enforce the conceit and give the site a memorable silhouette.

## Type system

|                | Family                                         | Usage                                                                                              |
| -------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `--font-mono`  | JetBrains Mono                                 | UI chrome, prompts, `ls` table, git log, kvlist, statusbar, project metadata, resume `## HEADINGS` |
| `--font-serif` | Newsreader (opsz 6..72, wght 400..700, italic) | Whoami `h1`, essay body, resume role titles, fortune blockquote, `.post-title`                     |
| `--font-sans`  | system                                         | Reserved — not currently used in any component                                                     |

**Scales** are split: `--text-*` for mono UI (11–36px), `--prose-*` for serif body (19–22px + `clamp()` for titles). Essay bodies get `--leading-relaxed` (1.7), UI text gets `--leading-snug` (1.35).

## Color tokens

Both themes share the same token names; only the values change.

| Token                         | Dark                          | Light     | Use                                   |
| ----------------------------- | ----------------------------- | --------- | ------------------------------------- |
| `--bg`                        | `#0c0e12`                     | `#f1ebdd` | page background                       |
| `--bg-2`                      | `#14171d`                     | `#e8e1cf` | cards (whoami, ls, kvlist, fortune)   |
| `--bg-3`                      | `#1a1e26`                     | `#dfd6bf` | nested / inputs                       |
| `--text`                      | `#d6dde5`                     | `#1c1612` | body                                  |
| `--muted`                     | `#6a7381`                     | `#7a6e5e` | secondary / labels                    |
| `--rule`                      | `#232832`                     | `#c7b997` | card borders                          |
| `--hair`                      | `#1c2028`                     | `#d9ccae` | dashed inner rules (ls rows, kv rows) |
| `--amber`                     | `#f2b957`                     | `#a66a0e` | active tab, path, `cmd`               |
| `--mint`                      | `#7eddc1`                     | `#1d7a62` | `.k` keys, `ref`, `+` stack marker    |
| `--rose`                      | `#ea7385`                     | `#a8433a` | draft banner, warnings                |
| `--tl-red / -yellow / -green` | `#d05650 / #d9a545 / #5cb070` | (same)    | traffic-light circles                 |

**Invariant:** amber is always "you are here / this is active", mint is always "key or success", rose is always "attention".

## Layout primitives

- **`.window`** — `max-width: 960px`, centered, rounded corners, heavy shadow. Wraps everything below the `<body>`.
- **`.titlebar`** — grid: traffic lights (left) / path (center) / tabs + theme toggle (right). The path shows the "current file" (`~/`, `~/writing/foo.mdx`, `~/resume/`) and reinforces page context.
- **`.pane`** — main content area. Uses `--pane-pad-x: 44px` / `--pane-pad-y: 36px` on desktop.
- **`.statusbar`** — editor-style footer: `READ-ONLY` badge, `⎇ main · <file> · utf-8 · © year`, right-side `Minneapolis · MSP`. The badge was originally vim's `NORMAL` mode; swapped to `READ-ONLY` because it's instantly legible and accurate — the site is a file you're viewing, not editing.

## Component catalogue

Every content section follows the pattern `<prompt> <output>`:

- **`.prompt`** — two-row: `prompt-head` (`richard@zimring:~/path $`) + `prompt-cmd` (`cmd flag arg`). The user/path/command each have their own span classes so accent colors stay aligned (`--amber` for `cmd`, `--mint` for `flag`, base text for `arg`).
- **`.whoami`** — `/etc/about.txt` corner tag + mono `h1` (amber `name`, muted `::`, default-color `role` reading as a function signature) + mono body with a highlighted mint closing sentence in its own paragraph for spacing.
- **`.ls`** — 4-column grid (date / title / read / perms) with dashed row rules. Rows are `<a>` tags. Perms sit last because they're decorative — title and date carry the meaning. On mobile collapses to 2 columns (date / title); perms and read are hidden. `.draft` rows get a rose star.
- **`.gitlog`** — fake git graph: `.node` (circle) + `.line` (vertical rule). Each entry has hash (amber), ref (mint), tag (boxed mint), date (muted). Project title is serif.
- **`.kvlist`** — `key: value` rows with a "hint" chip on the right (`↗ open`, `→ local`). On mobile the hint is hidden and rows stack to one column.
- **`.fortune`** — 3px amber left border, `$ cat quote-of-the-day.txt` micro-label, serif italic body. Shared between `QuoteOfTheDay` and `WordOfTheDay` components (~1-in-3 days surfaces a word instead). CSS class is still `.fortune` (the Unix `fortune` command was the original inspiration) but the user-facing label uses `cat` to match the rest of the site's shell vocabulary.
- **`.cursor`** — 8×15px amber block at the tail prompt, blinks via `@keyframes blink`.
- **`.post-kicker`** — `$ cat <filename>.mdx` line above essay titles; the bridge between UI chrome and reading prose.
- **`.toc`** — right-rail outline on posts with h2+ headings. Styled as a file-tree listing.
- **Resume-specific:** `h2` is rendered as a terminal section marker (uppercased mono with a `## ` prefix, amber, with a rule underneath). Role timelines reuse `.timeline-*` classes from the existing `ExperienceTimeline.astro` — restyled as a git-graph-like dot + line.

## Responsive

One real breakpoint at **760px**, cleanup at **420px**.

Below 760px:

- Traffic lights hidden, path left-aligned and truncated with ellipsis
- Tabs: only those with `.tab-essential` (index + writing) remain; resume drops
- Prompts unstack into two rows
- `.ls` collapses to 2 columns (perms + read hidden)
- `.kv-row` stacks to one column, hint hidden
- Statusbar hides the right-side "Minneapolis · MSP"
- Prose drops to 17px

Below 420px the nav loses its non-essential tabs (done via `.tabs a:not(.tab-essential) { display: none }`).

**Important:** `.tab-essential` is applied _unconditionally_ to index and writing in `Header.astro`, not only when active — otherwise non-active tabs disappear on mobile.

## Files

| File                                                        | Role                                                                                                                                   |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `src/styles/global.css`                                     | All styles. Tokens → themes → window chrome → each component → responsive.                                                             |
| `src/layouts/BaseLayout.astro`                              | Wraps `<Header>` + `<main class="pane">` + `<Statusbar>` around the slot.                                                              |
| `src/layouts/PostLayout.astro`                              | Adds `$ cat <filename>.mdx` kicker, draft banner, meta line, TOC, prose.                                                               |
| `src/layouts/ResumeLayout.astro`                            | Adds `$ cat resume.mdx` prompt, serif `h1 "Richard Zimring"` + location line, then slots the MDX.                                      |
| `src/components/Header.astro`                               | Titlebar — traffic lights, path, tabs (`tab-essential` on index + writing), theme toggle.                                              |
| `src/components/Statusbar.astro`                            | Vim-style footer with `mode`, branch, file, year, location.                                                                            |
| `src/components/ThemeToggle.astro`                          | Sun/moon SVGs; flips `data-theme` and writes to localStorage.                                                                          |
| `src/components/QuoteOfTheDay.astro` / `WordOfTheDay.astro` | Both emit `.fortune` markup — different label and body structure.                                                                      |
| `src/pages/index.astro`                                     | Assembles whoami, ls posts (from content collection), git log projects (from data module), kvlist elsewhere, fortune, trailing cursor. |
| `src/pages/posts/index.astro`                               | `ls -lht posts/` table view of all posts.                                                                                              |
| `src/pages/posts/[...slug].astro`                           | Passes `post.id` as `slug` to `PostLayout` for the filename kicker.                                                                    |
| `src/pages/projects/index.astro`                            | `git log --oneline --graph` view of all projects.                                                                                      |
| `src/data/projects.ts`                                      | Project array shared between homepage and `/projects/`. Add new projects here.                                                         |

## Notes for future changes

- When adding a new section on the homepage, always lead with a `.prompt` block. The prompt → output rhythm _is_ the design.
- If you add a new accent color, add it to both themes. Never introduce a color that only exists in one mode.
- The project list lives in `src/data/projects.ts` (hash, ref, tag, date). When shipping a new project, add it to that array — don't invent a separate component. It's consumed by both `/` and `/projects/`.
- Reading time per essay is in the `estimateRead` map in `src/pages/index.astro`. Update it when new posts land.
- Resume content lives in `src/content/resume.mdx` (uses `ResumeLayout`). `h2`s there render as `## HEADING` terminal dividers — count on that when writing.
