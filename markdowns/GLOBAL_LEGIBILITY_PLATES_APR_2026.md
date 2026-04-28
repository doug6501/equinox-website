# Global legibility plates — April 2026

Margin metadata on editorial articles (read time, category, author, date) now uses the same frosted “plate” language as the compass PREV/NEXT rails so type stays readable when sticky columns scroll over full-bleed photography.

## Tokens (scoped on `.v2 .article-layout`)

| Token | Value |
|-------|--------|
| `--v2-metadata-plate-bg` | `rgba(var(--bone-rgb), 0.85)` |
| `--v2-metadata-plate-padding` | `0.75rem 1rem` |
| `--v2-metadata-plate-radius` | `2px` |

Plate surfaces use **`backdrop-filter: blur(10px)`** (with `-webkit-backdrop-filter`) for consistency with the spec.

## Left column — `.article-rail__stack`

- Plate applied to the **stack** that wraps read time, **`article-rail__rule`**, and category.
- **`article-rail__rule`**: Brass hairline remains **inside** the padded plate, vertically centered between the two vertical labels (`align-self: center` on the rule).

## Right column — `.article-field`

- The aside itself carries the plate (`padding`, `border-radius`, background, blur).
- **`.article-field .field-note`**: `margin` reset to `0` so rhythm comes from the container padding.
- **`.article-field .field-note + .field-note`**: `margin-top: var(--space-2)` to separate **Date** from **By** within the plate.
- **`text-align: left`** preserved on the field and existing **`field-note`** / **`field-note__label`** rules.

## Z-index & layering

- **`.article-rail`** and **`.article-field`**: `z-index: 8` (raised from `1`).
- **`.article-rail__stack`**: `z-index: 2` inside the rail stacking context.
- Ordering intent: **full-bleed imagery** in the narrative stays near `0–1` → **margin metadata** at `8` → **compass rails** at `100` → **fixed header** at `1000` (`stable-header.css`).

## Files

- `design-system-v2.css` — only file changed for this task.
