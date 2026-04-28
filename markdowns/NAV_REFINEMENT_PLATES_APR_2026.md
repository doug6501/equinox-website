# Aperture rails — width, plates, scroll reveal, prose protection (April 2026)

## Summary

Refined the **split compass rails** (prev/next) so they sit **farther from the narrative** and **clear the fixed header**, read as **stronger navigation**, gain a **frosted “signal plate”** behind the vertical labels for legibility over photography, use a **shorter brass tick**, and **fade in via `.is-visible`** on each rail once **`article.article-body`** intersects the viewport (desktop only). Added **full-bleed image veiling** and a **soft bone text halo** on running copy when large breakouts exist.

## DOM

Rails remain **inside** `section.article-layout > .article-layout__inner`, **after** the hero block, as **siblings** of `article.article-body`. Each rail now wraps its link in **`<span class="compass-rail__plate">…</span>`** on all **13** `article-*.html` files.

## HTML (`article-*.html`)

| Pattern | Change |
|---------|--------|
| **`<nav class="compass-rail …">`** | Inner markup is **`<span class="compass-rail__plate"><a class="compass-rail__link">…</a></span>`** for both prev and next. |

## CSS (`design-system-v2.css`)

### Rails & typography

| Rule | Value |
|------|--------|
| **`.v2 .compass-rail`** | `padding: 0 **3rem**`; `top: **220px**` (sticky offset below header). |
| **`.v2 .compass-rail__link`** | `font-size: **1.1rem**`; `font-weight: **600**`; `letter-spacing: **0.05em**`. |
| **`.v2 .compass-rail__link::before`** | Fixed **`height: 60px`** brass segment (pointer, not a long vertical). |

### Signal plate

| Rule | Notes |
|------|--------|
| **`.v2 .compass-rail__plate`** | `background: rgba(244, 239, 230, 0.85)` (bone), **`backdrop-filter: blur(8px)`**, `padding: 1.5rem 0.5rem`, `border-radius: 4px`, `inline-flex` centering. |
| **`.v2 .compass-rail--next .compass-rail__plate`** | `align-self: flex-end` so the plate hugs the right rail. |

*(Uses literal RGB for `rgba()`; no new `:root` token.)*

### Scroll visibility (≥1200px)

| Selector | Behavior |
|----------|----------|
| **`.v2 .article-layout .compass-rail`** | Default **`opacity: 0`**, **`visibility: hidden`**, **`pointer-events: none`** + transition. |
| **`.v2 .article-layout .compass-rail.is-visible`** | Full opacity / interaction. |

Replaces the previous **`body.article-compass-rails-visible`** pattern.

### Prose & full-bleed imagery

| Rule | Behavior |
|------|----------|
| **`.article-body:has(.breakout-full)` / `:has(.media-break)`** on **`p` / `li`** | Soft **bone-coloured `text-shadow`** (double halo) so body copy stays readable when large images sit in the column. |
| **`.breakout-full:has(> img)::after`**, **`.media-break:has(> img)::after`** | **`background: rgba(18,18,18,0.1)`** full-bleed veil over the photo only when a direct **`img`** child exists. |
| **`.media-break img` / `.breakout-full img`** | **`position: relative; z-index: 0`** so the veil stacks above the bitmap. |

`:has()` is unsupported in very old browsers; rails and images still function without the halo/veil layers.

## JavaScript (`script.js`)

**`initArticleCompassRailReveal()`** now toggles **`.is-visible`** on **each** `layout.querySelectorAll('.compass-rail')` when **`article-body`** intersects (same **`IntersectionObserver`** / **`rootMargin`** / **`matchMedia(1200px)`** behavior as before). **No `body`** class. Fallback without **`IntersectionObserver`**: plates/rails shown (`is-visible` on).

## Mobile (`< 1200px`)

Unchanged: **`.compass-rail { display: none !important; }`**; bottom **`.article-compass-bar`** only.

## Files touched

- `design-system-v2.css` — rail metrics, plate, brass tick, `.is-visible` visibility, prose/veil.  
- `script.js` — rail class toggle.  
- All **13** `article-*.html` — **`compass-rail__plate`** wrappers.

## QA

- [ ] **≥1200px:** Scroll from hero into body → prev/next **fade in** with **frosted plates**; labels **larger / bolder**; brass is a **short tick**.  
- [ ] Scroll past full-bleed images: **PREV/NEXT** stay readable on the plate; body copy has a **light halo** on pages with breakouts.  
- [ ] **&lt;1200px:** Side rails **off**; bottom bar unchanged.
