# Lightbox repair — April 2026

## Symptom

On v2 case study pages, opening the gallery lightbox scrolled the view to the bottom of the page, showed the enlarged image below the footer, and left the page effectively unscrollable until refresh.

## Root cause

**Malformed CSS in `design-system-v2.css`** in the editorial “Signal” block (around `.article-rail__read` / `.article-field`): orphaned declarations, a stray closing brace, and `.v2 .article-rail__read {` merged with `.v2 .article-field {` on consecutive lines.

In browsers with **native CSS nesting**, the parser treated a large portion of the following stylesheet as nested under `.v2 .article-rail__read`. Rules such as `.eq-lightbox { position: fixed; … }` then compiled to selectors like `.v2 .article-rail__read .eq-lightbox`, which **never match** the real `#eq-lightbox` node (a direct child of `body`). With no `position: fixed`, the lightbox stayed **in normal flow** at the end of the document (after the footer). `overflow: hidden` on the body still applied from the open handler, which produced the “stuck” scroll state.

Secondary factors addressed:

- **`overflow-x: clip` on `body.v2`** — moved horizontal containment to `html:has(body.v2) { overflow-x: hidden; }` and set `body.v2` to `overflow-x: visible` to reduce interaction with scroll locking and viewport-fixed UI.
- **Focus** — `focus({ preventScroll: true })` on the close control avoids the browser scrolling to bring a mispositioned focus target into view.
- **Scroll lock** — set/clear `overflow` on both `document.documentElement` and `document.body` when opening/closing.

## Changes

| Area | Change |
|------|--------|
| `design-system-v2.css` | Restored valid `.v2 .article-rail__read` and `.v2 .article-field` rules; removed orphan block. |
| `design-system-v2.css` | `html:has(body.v2) { overflow-x: hidden; }` + `body.v2 { overflow-x: visible; }` (removed `@supports` clip fallback tied to body). |
| `design-system-v2.css` | `.eq-lightbox` / chrome controls: `z-index: … !important` so stacking stays above header (1000) and rails (100). |
| `script.js` | `initEqCaseLightbox()` runs on `DOMContentLoaded`; builds lightbox only when gallery/narrative images exist; prepends overlay to `body`; improved lock/focus; `preventDefault` / `stopPropagation` on image click. |
| `script.js` | Selector: `.case-gallery .case-gallery__item img` and `.case-body__narrative img`. |
| `work-*.html` (14 files) | Bumped asset query strings (`design-system-v2.css?v=7`, `script.js?v=9`) for cache bust. |

## Verification

1. Open any `work-*.html` with a `.case-gallery`.
2. Click a gallery image (and any inline `.case-body__narrative img` if present).
3. Confirm: full-viewport overlay, image centered, scroll locked, Escape/close restores scroll.
4. Insights / article pages with `.article-layout`: rails and metadata should look correct again (fixed cascade).

## Model note (routing)

Treat as **Tier 3** (cross-file CSS parse + layout + JS). A high-context model is appropriate for tracing “invisible modal” bugs; the active model executed the fix in-repo.
