# 27 — Work case study init: Women in Leadership 2026

**Date:** May 14, 2026  
**Deliverable:** New Technical Producer–style project page and supporting asset path.

## What was added

| Item | Path / detail |
|------|----------------|
| Case study page | `work-women-in-leadership-2026.html` |
| Hero image (initial file at requested name) | `assets/hero-hildene-2026.jpg` — copied from `assets/hildene-svcc-women-leadership-01.jpg` as a stand-in until a dedicated 2026 plate is supplied |

## Structure and design system alignment

- **Body classes:** `v2 services-detail` plus scoped `work-wil-2026` for page-local hero and prose measure tweaks.
- **Vertical rhythm:** `body.v2.services-detail` rules in `design-system-v2.css` apply **15rem** top/bottom padding to `.content-section-v2` and `.cta-section-v2`; first section after the hero keeps the documented **6rem** top padding where the hero is immediately followed by `.content-section-v2`.
- **Newsreader headings:** Primary hero title uses `.page-hero-v2__headline`, which resolves to **`var(--font-heading)`** (Newsreader) via the v2 design system.
- **Hero:** `page-hero-v2 page-hero-v2--corporate-static` with full-bleed image `assets/hero-hildene-2026.jpg`, **H1** “Women in Leadership Luncheon 2026”, location line under the headline (mono-styled paragraph, not the default uppercase eyebrow, to preserve sentence case).
- **Narrative + technical aside:** `pricing-approach` / `pricing-approach__prose` + `pricing-approach__aside` (same grid as service detail “pricing approach” blocks). Prose paragraphs overridden to **max-width 62ch** on this page only.
- **Footer:** Standard v2 `main-footer` with **copyright-only** `footer-spec__line` — **no “Last show”** line (evergreen standard).

## Content captured

- Keynotes **Emily Bush** and **Rhoni Basden**.
- **Three 75&quot; displays**, looping visual continuity, and **holding slide** protocol between segments.
- Aside lists **Display** (3× 75″ 4K, dual stage + mid-room delay), **Audio** (6-speaker distributed: mains, center fills, delay line), **Control** (wireless presentation sync + dual fixture back-fill stage lighting).

## Optional follow-ups (not in scope unless requested)

- Link the new URL from `work.html` and/or adjacent case studies for navigation.
- Replace `assets/hero-hildene-2026.jpg` with the final 2026 photograph when available.
