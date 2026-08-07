# Equinox Audio Visuals — Logo Exploration

**Framework:** 7-step logo options  
**Date:** 2026-08-05  
**Art direction lock:** Quiet Room (bone / ink / ember / brass)  
**Chosen build:** Concept 1 — Quiet Peak (default per plan)

---

## 1/7 — Discovery (inferred from brand + site)

### Brand fill-in

> My business is **Equinox Audio Visuals**. We do **hospitality-minded event production — AV for weddings, galas, and conferences** for **venues, planners, and hosts across New England and beyond**. Our brand should feel **calm, crafted, and specific**.

### Locked answers (brand-doc defaults)

| Question | Answer |
|----------|--------|
| **Primary use pressure** | Website nav (ink-on-bone ~28px) first; social avatar + OG second; print/proposals third |
| **Must-keep** | Mountain / place metaphor (Vermont / Equinox peaks); “Equinox” as the readable hero word; quiet professionalism |
| **Must-drop** | Distressed vintage badge texture; teal/blue tech palette; stacked medallion in heroes; gear / waveform / “AV” monogram clichés |
| **Adjectives** | Calm · Crafted · Specific (hospitality temperament, console-literate) |
| **Never feel** | Hype vendor booth, startup gloss, rugged outdoor apparel, neon tech AV |
| **Name lock** | Full: Equinox Audio Visuals · Short: Equinox · Avoid stacking “Audio Visuals” as equal weight to Equinox |
| **Existing preference** | Geometric wordmark peaks are the evolution base; circular badge is OG-only legacy, not the system |

### Current asset audit

| Asset | Role | Verdict |
|-------|------|---------|
| `assets/logo-wordmark.png` | Nav | Keep *idea* (peaks + horizontal type); retire teal/blue for Quiet Room ink |
| `assets/logo-stacked.png` | Stacked | Reject for heroes/header (guidelines); optional social only if monogram fails |
| `assets/logo.png` | OG / social | Characterful but mismatched to Quiet Room; replace with system colorways |

---

## 2/7 — Industry sameness vs. how Equinox differs

### What AV logos usually look like

1. **Waveform / equalizer bars** as icon — “we do sound”
2. **Navy + orange / electric blue** kits — rental-house energy
3. **Abstract A/V lettermarks** or camera/mic silhouettes — gear-first
4. **Heavy sans + shield badges** — trade-show booth gravity
5. **Over-polished gradients / glass** — SaaS event-tech, not hospitality

### Exact difference for Equinox

| Them | Us |
|------|-----|
| Lead with gear | Lead with place + calm craft |
| Loud accent color as identity | Ink structure; ember only as live signal; brass as hairline |
| Badge / sticker on every surface | Ink wordmark on bone; text name in footer |
| “Professional AV services” vibe | Boutique hospitality / New England institution |
| Busy detail that dies at 28px | Geometry that holds at nav height |

**Ownable idea:** *Peaks as balance* — equinox as equal light/dark, production as invisible craft under a clear Vermont skyline. Not a park patch. Not a tech waveform.

---

## 3/7 — Three concepts

### Concept 1 — Quiet Peak *(chosen for build)*

- **Style:** Icon + wordmark (horizontal). Geometric twin-peak mark left of type.
- **Color psychology:** Ink = authority and calm; bone = hospitality canvas; brass tip = warmth without neon; ember reserved for UI, not the mark.
- **Font personality:** Confident geometric sans for EQUINOX (tight tracking); AUDIO VISUALS in lighter weight, wider tracking — supporting credit, not co-headline.
- **Emotion:** Steady, place-rooted, console-ready. “We belong at Hildene and the barn wedding.”

### Concept 2 — Horizon Wordmark

- **Style:** Pure wordmark. No icon. A single brass hairline through the word *Equinox* at optical midline (equal day/night).
- **Color psychology:** Ink type on bone; brass line as the only ornament — Quiet Room discipline.
- **Font personality:** Newsreader-adjacent serif for EQUINOX (editorial hospitality); small-caps or tracked sans for AUDIO VISUALS.
- **Emotion:** Gallery / institutional quiet. Least “outdoor brand,” most “editorial house.”

### Concept 3 — EQ Balance

- **Style:** Lettermark. Circular or square field with **E** split by a horizontal equinox line (or two mirrored arcs suggesting balance). Wordmark secondary.
- **Color psychology:** Ink mark; optional brass divider; monochrome-first for 40px social.
- **Font personality:** Custom geometric E; companion wordmark matches Concept 1 sans.
- **Emotion:** Compact, modern, profile-ready — strong avatar, softer Vermont story than peaks.

---

## 4–7/7 — Build status (Concept 1)

Deliverables live under `assets/logo-system/`:

| Step | File(s) |
|------|---------|
| 4 Full SVG | `quiet-peak-wordmark.svg`, `quiet-peak-mark.svg` |
| 5 Refine | Simpler 2-plane peaks; slightly heavier EQUINOX; warmer brass peak tip |
| 6 Colorways | `…-full-color.svg`, `…-knockout.svg`, `…-mono.svg` (+ HTML board) |
| 7 Social 1:1 | `quiet-peak-social.svg` — bold mark, readable ≤40px |

Preview board: [`logo-options.html`](../logo-options.html) (local open; not linked from nav).

### Implementation note

Site nav/OG still point at legacy PNGs until you approve a swap. This exploration does **not** change live header assets.
