# 10 — Homepage Hero Refinement

**Date:** April 28, 2026  
**Scope:** `index.html`, `design-system-v2.css`

## Objectives

1. Center the primary hero headline (“Event production with character.”) for symmetrical composition (“aperture” alignment).
2. Remove the bottom-of-hero “Scroll” caption to simplify the viewport.

## Changes

### Markup (`index.html`)

- Replaced the inline-wrapped hero copy block with a semantic wrapper `div.hero__intro` (same max-width behavior as before, now in CSS).
- Removed `<div class="hero__caption mono">Scroll</div>` entirely (no separate arrow or mouse asset was present).
- Bumped `design-system-v2.css` query string on the homepage to `?v=9` for cache busting after stylesheet edits.

### Styles (`design-system-v2.css`)

- **`.v2 .hero__intro`:** `max-width: var(--container-v2)`, horizontal auto margins, `text-align: center` so the stack reads centered within the content column.
- **`.v2 .hero__eyebrow`:** `text-align: center` so the mono eyebrow aligns with the headline.
- **`.v2 .hero h1` / `.v2 .hero__headline`:** `margin-left: auto`, `margin-right: auto`, and `text-align: center` so the `max-width: 16ch` headline box is centered and lines are centered inside it.
- **Removed** `.v2 .hero__caption` rules (only referenced by the removed markup).

## Interaction with pass 01 (Six Steps)

The “Six steps. No mystery.” block lives in **`.process-section.process-teaser`** later on the page. It does not share classes or layout with `.hero` / `.hero__intro`. Grep confirms `.hero` and `.hero__eyebrow` appear only on the homepage, so process-teaser layout and typography are unchanged.

## Verification

- Hero: eyebrow + headline only; no scroll indicator.
- Headline: centered block + centered type within the constrained width.
