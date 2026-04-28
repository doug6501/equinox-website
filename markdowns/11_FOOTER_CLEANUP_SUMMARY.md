# 11 — Global Footer Cleanup

**Date:** April 28, 2026  
**Scope:** All site HTML at repo root using the v2 footer spec block; `design-system-v2.css`

## Objective

Remove the hardcoded **“Last show”** line (venue and date) so the footer stays evergreen and avoids stale event metadata.

## What was removed

Each v2 page had a first row inside `.footer-spec`:

```html
<div class="footer-spec__line">
    v2.0 &middot; Last show: Bennington Museum &middot; Apr 19, 2026
</div>
```

That **entire** `footer-spec__line` block was deleted on every affected page. The **copyright** row was kept:

```html
<div class="footer-spec__line">
    &copy; 2026 Equinox Audio Visuals
</div>
```

## Files touched

- **49** root-level `*.html` files that still use `.footer-spec` / `.footer-spec__line` (index, hub pages, articles, work case studies, regional AV pages, thank-you, etc.); each had the “Last show” row removed.
- **`_footer.html`** — unchanged (legacy footer; no “Last show” content).
- **`design-system-v2.css`** — `.v2 .footer-spec` `justify-content` updated from `space-between` to **`center`** so a single spec line stays visually balanced after the second column was removed.

## Accessibility and hidden text

- Searched HTML for **last show** / **Last show** / **last-show** after edits: **no matches** in `*.html`.
- No `aria-label` or `alt` attributes referenced “Last show”; removal was limited to visible footer copy.

## Historical docs

Older references in `markdowns/*.md` (project notes, handoffs) may still mention the old spec line; those were **not** edited as part of this pass.
