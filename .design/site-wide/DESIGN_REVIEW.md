# Design Review: Equinox AV — Quiet Room + Pro-Max Hybrid

Reviewed against: Quiet Room (Direction A), ui-ux-pro-max structural/UX rules, frontend-design / brand skills  
Philosophy: Premium Service Minimalism · Portfolio-first · Newsreader + Inter Tight · bone/ink/ember/brass  
Date: 2026-07-15

## Verdict

**Keep Quiet Room as art direction.** Adopt Portfolio Grid + Exaggerated Minimalism / Editorial UX structure from ui-ux-pro-max. Reject Soft UI, navy/pink auto-palettes, and Playfair/Amatic font swaps.

## Screenshots Captured

Session review captures live under Cursor temp screenshots and mockups comparison. Key references:

| Artifact | Description |
|----------|-------------|
| `mockups/home-quiet-room.html` | Homepage hybrid proposal (still used as design lock) |
| `mockups/case-wil-2026-quiet-room.html` | Case-study still opener proposal |
| `mockups/README.md` | Hybrid rules checklist |

## Formal guidelines (source of truth — Full Lock 2026-07-16)

- [`docs/brand-guidelines.md`](../../docs/brand-guidelines.md)
- [`docs/marketing-guidelines.md`](../../docs/marketing-guidelines.md)
- [`design-system/MASTER.md`](../../design-system/MASTER.md)
- [`design-system/tokens.json`](../../design-system/tokens.json)
- Compliance: [`docs/brand-compliance-audit.md`](../../docs/brand-compliance-audit.md)

## Hybrid rules (still in force)

1. Quiet Room tokens and Newsreader/Inter Tight/JetBrains Mono (bone canvas — not dark mode)
2. Homepage: hero thesis → event spotlight → selected work → process → one editorial quote → CTA
3. Hero: brand video + one headline; no stacked-logo medallion (WIL still not used on homepage)
4. Case studies: still opener default; bottom case-nav only; no floating Prev/Next
5. CTA voice: “Start a project” sitewide
6. Ink/warm wordmark on bone header (CSS filter until real assets)
7. Motion: no infinite decorative loops; honor `prefers-reduced-motion`
8. Event Spotlight is the homepage proof surface (no second Ledger)
9. Spacing: `--space-7` default sections; `--space-8` Max Breath for signature only

## What shipped (live port)

### Brand fidelity
- Sticky mobile CTA: Get a Quote → **Start a project** (`script.js`)
- Ink wordmark treatment on `.v2 .logo-badge--wordmark` (`design-system-v2.css`)
- Contact wizard gradient: indigo → ink/slate Quiet Room tones

### Homepage
- Brand reel video restored as hero; center logo medallion stays removed; left-aligned headline kept
- Removed legacy testimonial slider and hidden client logo bar
- Meta title/description aligned to brand voice
- Newsreader loaded explicitly; CSS cache bumped

### Portfolio
- Eight looping video heroes converted to poster stills
- Footer brand unified to text `footer-brand__name` across case studies
- Floating next/prev injection disabled; `#project-nav-placeholder` suppressed

### System
- Nav CTA truncation guards at mid widths
- Homepage hero left-aligned thesis composition
- Reduced-motion guards extended

## Must fix later (out of this port)

1. Real ink/warm logo PNG assets (replace CSS filter)
2. Named personal attributions when clients approve names
3. Remaining page-hero videos on work/services hubs (optional consistency pass)
4. Quarantine/delete legacy orange/blue rules in `stable-header.css` fully
5. Formal `docs/brand-guidelines.md` sync — **done** (Full Lock)

## What works well

- Ownable thesis: “Event production with character.”
- WIL 2026 press photography elevates the portfolio grade
- Run-of-show case format remains the signature Control Room organ inside Quiet Room
- Mockups remain available for side-by-side comparison under `mockups/`

## Sitewide expansion (2026-07-15 evening)

Applied Quiet Room + Pro-Max hybrid patterns across remaining public HTML:

- Newsreader + Inter Tight + JetBrains Mono font link on all marketing pages
- `design-system-v2.css?v=15` / `stable-header.css?v=19` cache bump
- Footer stacked logo → text `footer-brand__name` on hubs, articles, regional, services, and case studies
- Titles/OG: `EQX AV — Technical Producer` → `Equinox Audio Visuals`
- Homepage keeps brand reel video (WIL still rejected); case studies keep still openers
- Hub page-hero videos retained (work / services / about / insights)
- Sticky CTA + floating prev/next already handled in `script.js` / CSS

Mockups under `mockups/` remain for comparison.
