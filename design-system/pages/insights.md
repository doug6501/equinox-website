# Insights — page overrides

Hierarchical override of [`MASTER.md`](../MASTER.md) for the Insights hub and `article-*.html` longform.

## Pattern

**Editorial magazine / continuous read** — Quiet Room tokens. Not a card deck of micro-sections.

## Article chrome

- Horizontal **byline** only: `Category · N min read · By · Date`
- **No** vertical left rail (read time / category) — that caused overlap with the lead
- **No** frosted dual metadata plates flanking the body
- Fixed prev/next pills + bottom compass bar remain
- Lead: Newsreader + drop cap; no boxed/L-frame lead plate

## Sections

- Max **2–3 chapter `h2.is-chapter`** per article
- List pieces use **`h3.article-item__title`** (numbered items), not five brass-underlined H2s
- Prefer continuous paragraphs over header → one line → header

## Photography

| Class | Use |
|-------|-----|
| `.figure-bleed` | Asymmetric image breaking past the measure into the right gutter |
| `.figure-full` | Wide band between chapters (≈16:9) |

- Do **not** use floated `.breakout-right` as the default
- Placement: hero still → body → one mid figure after first chapter → optional second before CTA
- Explicit aspect-ratio; warm LUT; no polaroid / glass image frames

## Hub (`insights.html`)

- One **featured** card (`.insight-card-v2--featured`)
- Mix of **wide** (`.insight-card-v2--wide`) and standard cards on a 12-column grid
- Category filters unchanged
- Hover: title → ember; no layout-shifting scale

## Mobile (≤768 / ≤1199)

- Editorial heroes: full-bleed; tighter content padding; headline beats legacy `section h1 { 1.4rem !important }`
- Side rails hidden; fixed bottom compass bar with safe-area insets (44px min hit)
- Sitewide sticky CTA (`.mobile-action-bar`) uses Quiet Room bone/ink (not navy/orange); hidden on articles with compass
- Compass pills: ink fill + ember hover (not royal blue)
- Hub: featured stacks to one column; filter chips wrap with 44px min height
- `--space-7` / `--space-8` compress on phones; Event Spotlight pips ≥44px hit area

## Anti-patterns

- Vertical “Professional Tips” meta overlapping body text
- H2 hairline under every short tip
- Tiny floated insets “stuck” beside one sentence
