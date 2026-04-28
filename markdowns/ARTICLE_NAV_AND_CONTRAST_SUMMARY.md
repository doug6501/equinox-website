# Aperture margin compass & list contrast — implementation summary

**Scope:** v2 insight articles (`body.v2`), `design-system-v2.css`, and all 13 `article-*.html` pages.  
**Status:** Implemented. Legacy `.article-compass` is not used; navigation is split rails + mobile bar.

---

## 1. Accessibility — list labels (WCAG AA)

**Problem:** `stable-header.css` styles `.article-body strong` with `var(--color-secondary)` (light orange/yellow), which fails contrast on `--bone` / `--linen`.

**Fix (v2 override in `design-system-v2.css`):**

- Selectors: `.v2 .article-layout .article-body ul|ol li strong` and `... li b`
- `color: var(--ember)` (`#C2582A`)
- `font-weight: 600`
- List markers: `ul`/`ol` `::marker` use `var(--ember)`; ordered lists `::marker` also `font-weight: 600`

These rules sit after global article styles so they win for v2 article pages.

---

## 2. Aperture — split margin compass (desktop ≥1200px)

**HTML (each article):** First child of `.article-layout__inner` is the **previous** rail; **next** rail is a sibling at the end of the main grid (before the fixed mobile bar).

- `<nav class="compass-rail compass-rail--prev">` — `PREV_INSIGHT`
- `.article-margin-left` — read time + category (`.article-rail`) only
- `.article-field`, `.article-body`, `<nav class="compass-rail compass-rail--next">` — `NEXT_INSIGHT`
- `<nav class="article-compass-bar">` — duplicate prev/next for small viewports

**12-column grid map**

| Columns | Content |
|--------|---------|
| 1 | `.compass-rail--prev` — far left |
| 2 | `.article-margin-left` — vertical read/category |
| 3–9 | `.article-body` — 7 columns of narrative |
| 10–11 | `.article-field` — field notes |
| 12 | `.compass-rail--next` — far right |

**CSS (high level):**

- Rails: `position: sticky; top: 50vh; transform: translateY(-50%);`
- Links: `font-family: var(--font-mono)`; `color: var(--ember)`; `font-size: 0.75rem`; `writing-mode: vertical-rl`
- Hairline: `.compass-rail__link::before` — `1px solid var(--brass)`, `height: 100vh`, aligned to the link’s left (prev) or right (next) edge

---

## 3. Mobile fallback (`max-width: 1199px`)

- `.compass-rail` — `display: none !important`
- `.article-compass-bar` — fixed to the bottom; bone background; `border-top: 1px solid var(--brass)`; mono PREV / NEXT
- `body.v2:has(.article-compass-bar) main` — extra `padding-bottom` so long copy does not sit under the bar (includes safe-area)

---

## 4. Hardcoded article loop (technical sequence)

**Next** order (cycle):

1. `article-av-trends-2026.html` → `article-av-trends-2025.html`
2. `article-av-trends-2025.html` → `article-top-5-av-items.html`
3. `article-top-5-av-items.html` → `article-choose-av-partner.html`
4. `article-choose-av-partner.html` → `article-switch-av-partners.html`
5. `article-switch-av-partners.html` → `article-hire-av-lead.html`
6. `article-hire-av-lead.html` → `article-make-time-rehearsal.html`
7. `article-make-time-rehearsal.html` → `article-breakout-management.html`
8. `article-breakout-management.html` → `article-engaging-presentation.html`
9. `article-engaging-presentation.html` → `article-conference-speaking.html`
10. `article-conference-speaking.html` → `article-small-meetings.html`
11. `article-small-meetings.html` → `article-zoom-meeting-tips.html`
12. `article-zoom-meeting-tips.html` → `article-wedding-av-equipment.html`
13. `article-wedding-av-equipment.html` → `article-av-trends-2026.html`

**Previous** is the reverse. Each file updates:

- `compass-rail--prev` / `compass-rail--next` (`href` + `aria-label`)
- `article-compass-bar` (same targets)
- `article-pagination` (optional prev/next band below the article)

---

## 5. Files modified

| File | Role |
|------|------|
| `design-system-v2.css` | Grid, Aperture rails, list contrast, mobile bar, main padding |
| `article-*.html` (×13) | Rail DOM order, `PREV_INSIGHT` / `NEXT_INSIGHT`, bar, pagination |

---

## 6. Quick QA

- [ ] Desktop ≥1200px: left rail, right rail, no horizontal scroll from breakouts
- [ ] List items: bold labels are **ember**, not yellow/orange
- [ ] &lt;1200px: no side rails; bottom bar tappable; last paragraph not hidden under bar
- [ ] Click **Next** through 2–3 articles: order matches the table above; from wedding, next returns to 2026
