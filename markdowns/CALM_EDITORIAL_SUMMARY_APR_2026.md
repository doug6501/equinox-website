# Calm editorial rhythm — Insights / article layout (April 2026)

## Goal

Reduce visual restlessness on v2 Insights and article pages by **anchoring prose to a single left rail** (62ch measure), **tightening vertical rhythm** via shared spacing tokens, **left-aligning margin-column metadata** (read/category rail and field notes), and **calibrating the lead drop cap** so the opening letter reads as structural ink—not a second accent color fighting the rails.

## Files changed

| File | Change |
|------|--------|
| `stable-header.css` | Compressed v2 typography rhythm tokens and hairline gap. |
| `design-system-v2.css` | Article grid: left rail, list tightness, mobile stack; lead **ink drop cap** (`::first-letter`); field notes / article rail left alignment. |

## `stable-header.css` — spacing tokens (“tight rack”)

| Token | New value |
|-------|-----------|
| `--space-h1-top` | `2rem` |
| `--space-h1-bottom` | `2rem` |
| `--space-h2-top` | `1.25rem` |
| `--space-h3-top` | `1.25rem` |
| `--space-p-bottom` | `0.75rem` |
| `--space-heading-hairline-gap` | `0.25rem` |

These tokens drive **global v2** H1/H2/H3 padding above brass hairlines and paragraph spacing site-wide on v2 pages, not only articles.

## `design-system-v2.css` — editorial rail & Insights body

### Vertical rail (62ch)

- Within `.article-layout .article-body` (and `.article-layout__body`), **h2, h3, and h4** use `text-align: left`, `max-width: var(--measure)` (62ch in `:root`), and **`margin-left: 0; margin-right: auto`** so headings share the **same left edge** as paragraphs and lists.
- **Lead paragraph** (`> p:first-of-type`) and **body `p` / `li`** use the same left alignment and auto right margin so they are not centered by `.v2 main p` / `li`.
- **`ul` / `ol`**: `margin-left: 0; margin-right: auto` so list blocks align with the prose column.
- **`.article-body ul li`**: `margin-bottom: 0.5rem` for tighter list grouping (descendant `li` under article lists).

### Margin columns & drop cap

- **Lead `p:first-of-type`** (`.article-layout .article-body` and `.article-layout__body`): restrained **float drop cap** via `::first-letter` with **`color: var(--ink)`** (display family, modest scale) so the opening letter reads as structure on the rail, not a competing accent.
- **`.article-field`**, **`.field-note`**, **`.field-note__label`**, **`.article-rail`**, **`.article-rail__stack`**: **left-aligned** in margin columns (`justify-self: start`, `align-items: flex-start`, `text-align: left`; **`.article-rail__rule`**: `align-self: flex-start`) so centered `main` prose does not cause horizontal bounce beside the 62ch column.
- **Mobile (`max-width: 899px`)**: rail stack uses **`justify-content: flex-start`** and left text alignment for a clean single-column stack.

### Breakout headings

- **`h2.breakout-full` / `.breakout-full--type`**: `text-align: left` so wide breakout headings match the editorial rail intent (full-width band, left-set type).

## Constraints respected

- **12-column grid** for article layout unchanged (body remains cols **3–10**; field notes **10–12**; margin column **2**; compass rails **1** and **12**).
- **Palette** untouched (`--bone`, `--linen`, `--ink`, `--ember`, `--brass`).
- **Brass hairline** under H2/H3 in article body retained; gap tightened via **`--space-heading-hairline-gap`**.

## QA suggestions

- Spot-check one **article** page at ≥1200px and &lt;900px: headings, lists, field notes, and read/category rail should read as one **left rail** with calmer vertical spacing.
- Confirm non-article v2 pages still read acceptably with slightly tighter H1/H2/H3 spacing (token change is global for v2).
