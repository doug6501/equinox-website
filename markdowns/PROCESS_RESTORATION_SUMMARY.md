# Process & homepage restoration — summary

## Problem

Global v2 rules—especially `.v2 h2 { text-align: center; border-bottom: … }` and `.v2 main p, .v2 main li { text-align: center; }`—were overriding the intended **left-aligned, multi-column process layout**. The homepage “Six steps” band (`.process-teaser`) and process page timeline (`.process-timeline`) lost clear structure, and neither section carried visible **background artwork** after the process band moved to flat color only.

## Approach

1. **Component classes**  
   - **`process-section`** — shared wrapper for bands that need a backdrop and layout shielding.  
   - **`assurance-ledger`** — paired with existing **`ledger`** on the homepage for the typographic ticker.

2. **Markup** (`index.html`, `process.html`)  
   - Ledger: `<section class="ledger assurance-ledger" …>`.  
   - Homepage process band: `<section class="process-section process-teaser …>` plus `<div class="process-section__backdrop" aria-hidden="true"></div>` before the inner grid.  
   - Process page: `<section class="process-section process-timeline …>` with the same backdrop pattern.  
   - Bumped stylesheet query to `design-system-v2.css?v=8` on both pages.

3. **Asset**  
   - Added **`assets/index-process.jpg`** (copy of `page-hero-background.jpg`) so the documented path resolves. Swap this file later for a dedicated process/ledger plate if desired.

4. **CSS** (`design-system-v2.css`, new block **§26b**)  
   - **`.process-section__backdrop`** — `position: absolute; inset: 0;` on a sibling of content; image `url('assets/index-process.jpg')`; **`::after`** dark atmospheric scrim (`linear-gradient` on charcoal).  
   - **`.process-section.process-teaser`** — transparent section background; inner grid **`display: grid`** with **`text-align: left`** on copy, list, and steps; **`justify-content: flex-start`** on step rows so **01–06** stay in the left rail.  
   - **`.process-section.process-timeline`** — transparent background, **`z-index`** stacking so steps sit above the scrim; **light type** on titles/body/detail for contrast; rail line and step borders tuned for dark plate.  
   - **`.ledger.assurance-ledger`** — relative section; **`::before`** low-opacity cover image; **`::after`** light scrim so **ink** ticker type stays readable; header and track at **`z-index: 2`**.

5. **Baseline shields** (existing §25)  
   - **`.v2 .process-step__title`** — explicit **`text-align: left`**, **`border-bottom: none`**, **`padding-bottom: 0`**.  
   - **`.v2 .process-step__body`** / **`.process-step__detail-text`** — **`text-align: left`** so `main p` centering does not apply.

## Files touched

| File | Change |
|------|--------|
| `design-system-v2.css` | §26b overrides + small §25 alignment fixes |
| `index.html` | `assurance-ledger`, `process-section` + backdrop, `?v=8` |
| `process.html` | `process-section` + backdrop, `?v=8` |
| `assets/index-process.jpg` | New image (placeholder from `page-hero-background.jpg`) |

## Verification checklist

- [ ] Homepage: Ledger still scrolls; header reads over subtle art.  
- [ ] Homepage: Process band shows image + scrim; two columns desktop; steps left-aligned with mono numbers.  
- [ ] `process.html`: Six steps in **three-column grid** (meta | title | body) on wide viewports; no centered brass rule on step titles.  
- [ ] Narrow breakpoints: existing §25 responsive rules still apply; §26b adds matching padding for `.process-section.process-timeline` inner.

## Optional follow-ups

- Replace `index-process.jpg` with a bespoke still (same filename, no HTML change).  
- If the FAQ block on `process.html` should be fully left editorial, add a scoped `text-align: left` for `.content-section-v2--linen` headings there.
