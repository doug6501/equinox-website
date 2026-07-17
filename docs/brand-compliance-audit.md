# Equinox Brand Compliance Audit

**Date:** 2026-07-17 (updated — Human Voice Rewrite)  
**Against:** [brand-guidelines.md](brand-guidelines.md) · [marketing-guidelines.md](marketing-guidelines.md) · [design-system/MASTER.md](../design-system/MASTER.md)

---

## Summary

Quiet Room remains the visual system. **Human Voice Rewrite** completed: all 13 insight articles rebuilt in field-note voice; services verticals and dense geo leads tightened; marketing kill list expanded for AI tells.

| Area | Status |
|------|--------|
| Brand / marketing docs | Pass (v1.1 kill list) |
| Design-system export (Flow/ERP) | Pass |
| Agent rules (`.cursorrules`) | Pass |
| Palette / type / spacing tokens | Pass |
| Nav + sticky CTA lexicon | Pass |
| Article end-CTAs | Pass |
| Article body voice | Pass (rewritten) |
| Insights hub cards | Pass (titles/excerpts synced) |
| Services verticals | Pass |
| Geo leads / FAQs | Pass / light residual OK |
| Header ink wordmark | Pass (filter provisional) |
| Case studies / home | Pass (preserved) |

---

## Page-type matrix

| Page type | Brand visual | CTA lexicon | Voice | Notes |
|-----------|--------------|-------------|-------|-------|
| Home | Pass | Pass | Pass | Preserved |
| Work hub | Pass | Pass | Pass | One blurb cleaned |
| Case studies | Pass | Pass | Pass | Preserved on purpose |
| Services hub / verticals | Pass | Pass | Pass | Corporate/weddings/galas rewritten |
| About / Process | Pass | Pass | Pass | — |
| Contact / Thank-you | Pass | Pass | Pass | — |
| Insights hub | Pass | Pass | Pass | Cards synced to new H1s |
| Articles (13) | Pass | Pass | Pass | Deep rewrite; trends 2025≠2026 |
| Regions hub | Pass | Pass | Pass | — |
| Geo / av-services-* | Pass | Pass | Pass | Dense leads + FAQ light pass |
| Checklist / lead magnet | Pass | Pass | Pass | — |

---

## Completed this pass (Human Voice)

1. Expanded AI-tell kill list in `docs/marketing-guidelines.md` (v1.1)
2. Deep-rewrote all 13 `article-*.html` bodies; de-duplicated trends 2025/2026 ledes
3. Synced `insights.html` card titles and excerpts
4. Medium voice pass: `services-corporate`, `services-weddings`, `services-galas`
5. Geo: Berkshires, Albany, Manchester, Dorset, Burlington + light FAQ sweeps
6. Light hub touch: `work.html` blurb; corporate meta

---

## Remaining debt (optional)

| Item | Priority |
|------|----------|
| Export real `logo-wordmark-ink.png` | P1 |
| Delete dead legacy selectors in `stable-header.css` | P2 |
| Deeper unique geo paragraphs per remaining markets | P2 |
| Header/footer SSI to prevent chrome drift | P2 |
| Strip Fraunces from leftover Google Fonts links | P2 |

### Out of scope (unchanged)

- Case study narrative rewrites
- Equinox Flow app code
- Visual redesign

---

## Equinox Flow / ERP handoff

Import [`design-system/tokens.json`](../design-system/tokens.json) and follow [`marketing-guidelines.md`](marketing-guidelines.md) v1.1 kill list for any in-app marketing copy.
