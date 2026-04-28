# Signal Polish — Final Pass (April 2026)

This pass aligns with the earlier “Signal Polish” work and adds site-wide protocol fixes, mobile overlay tuning, rail/plate tokens, and scroll-driven rail visibility tied to the article body.

## 1. HubSpot script (console / `file://` protocol)

- **Change**: Replaced every `src="//js-na2.hs-scripts.com/243705543.js"` with  
  `src="https://js-na2.hs-scripts.com/243705543.js"` across **all HTML templates** that embed the HubSpot tracking loader.
- **Why**: Protocol-relative URLs resolve to `file://js-na2...` when pages are opened from disk, which breaks loading and can surface console errors. Explicit `https` works for both local file testing and production.
- **Docs**: `markdowns/HUBSPOT_INTEGRATION_REFERENCE.md` updated to show the same URL in examples.

## 2. Mobile menu overlay (`.v2`)

- In **`design-system-v2.css`**, `body.v2.nav-open::before` (full-viewport override) now uses:
  - `background: rgba(0, 0, 0, 0.3)`
  - `backdrop-filter: blur(10px)` (and `-webkit-`)
- Overlay remains **full viewport** (`inset: 0`, `width`/`height` `100%`, `min-height: 100dvh`) so nothing reads as a narrow “gray slab.”

## 3. Compass rails and signal plate

- **`.compass-rail`**: `padding: 0 3.5rem`; `top: 220px` (sticky under fixed header).
- **`.compass-rail__link`**: `font-size: 1.1rem`; `font-weight: 600`.
- **`.compass-rail__plate`** (when **`.compass-rail.is-visible`** at `≥1200px`):  
  `background: rgba(var(--bone-rgb), 0.8)`; `backdrop-filter: blur(8px)`;  
  `padding: 1.2rem 0.6rem`; `border-radius: 4px`.

## 4. Scroll visibility (rails)

- **CSS** (unchanged behavior, reaffirmed): From `1200px` up, `.compass-rail` defaults to `opacity: 0`, `visibility: hidden`, `pointer-events: none`; **`.is-visible`** fades rails in (`transition` on opacity/visibility).
- **`script.js`** (`initArticleCompassRailReveal`): **`IntersectionObserver`** watches **`article.article-body`** inside `[data-compass-rails]` layouts. When the body **enters** the viewport (with header offset via `rootMargin`), rails get **`.is-visible`** — i.e. past the hero and **into** the narrative column. Below `1200px`, rails stay hidden (mobile uses the bottom compass bar).

## 5. Cache bust

- **`design-system-v2.css?v=5`** linked from all **13** `article-*.html` files plus **`index.html`**, **`work.html`**, and **`services.html`**.

## Files touched (summary)

| Area | Files |
|------|--------|
| HubSpot URL | All site HTML with the loader (~49 files); reference markdown |
| Styles | `design-system-v2.css` |
| Scroll logic | `script.js` |
| Stylesheet bump | `article-*.html` (×13), `index.html`, `work.html`, `services.html` |
| This doc | `markdowns/SIGNAL_POLISH_FINAL_APR_2026.md` |

Related earlier note: `markdowns/SIGNAL_POLISH_SUMMARY_APR_2026.md` describes the first polish iteration (hero-based reveal, earlier plate values). This document reflects the **final** HubSpot fix, overlay blur/dim values, `3.5rem` rail padding, plate math above, and **article-body**-based reveal.
