# Hallmark study — Signal Blue / Porcelain reference

**Date:** 2026-08-05  
**Source mode:** image  
**Source:** user brand-mood reference (swatch overlay on desk scene)  
**Refusal:** ok (public reference for user's brand exploration)

## Structured fields

```json
{
  "source_mode": "image",
  "source_url": null,
  "source": "public-reference",
  "refusal": "ok",
  "remote_safety": {
    "public_web_url": null,
    "scheme": null,
    "ip_literal_detected": null,
    "redirects_checked": null,
    "fetched": null,
    "scripts_ignored": null,
    "prompt_injection_detected": null
  },
  "macrostructure": "none (swatch card, not a page)",
  "macrostructure_alt": "would map to modern-minimal Marquee / Cobalt cousin if built as a page",
  "hero": {
    "archetype": "none — palette specimen cards over photographic atmosphere",
    "knobs": { "layout": "stacked-swatches-center", "photo": "full-bleed-desk-scene" }
  },
  "pitch": { "archetype": "none", "knobs": {} },
  "nav": { "archetype": "none", "knobs": {} },
  "footer": { "archetype": "none", "knobs": {} },
  "display_role": "soft geometric sans (labels on swatches)",
  "display_face": null,
  "body_role": "neutral grotesque (implied UI chrome on monitor)",
  "body_face": null,
  "label_role": "uppercase grotesque (swatch names)",
  "label_face": null,
  "pairing_logic": "single sans family for brand labels; photo does the atmosphere",
  "paper_band": "light >85",
  "paper_value": null,
  "paper_hue": "neutral-warm (Porcelain #F8F7F4 — slight warm off-white)",
  "accent_hue_band": "cyan-blue / indigo edge (#0057FF ≈ vivid royal)",
  "accent_value": null,
  "accent_footprint": "flood on top card (~50% of overlay); small in environment (monitor wallpaper only)",
  "density": "generous (large swatches, calm desk negative space)",
  "asymmetry": "centred (swatches) over right-biased subject",
  "treatments": ["photographic atmosphere", "rounded soft UI cards", "high-chroma brand flood"],
  "reveal": "not-visible",
  "motion_library": null,
  "anti_patterns": [
    "electric blue as primary brand flood (conflicts Equinox Quiet Room + legacy AV-blue ban)",
    "tech-startup desk aesthetic vs hospitality/event production temperament",
    "neon pink secondary in scene (do not carry)"
  ]
}
```

## Diagnosis report (image mode)

You sent me a **palette specimen**, not a page macrostructure — two stacked brand cards (Signal Blue `#0057FF` / Porcelain `#F8F7F4`) over a full-bleed modern desk photograph.

There is no hero / nav / footer archetype to extract. The visual argument is: **high-chroma cool blue on near-white paper**, soft rounded cards, geometric sans labels, tech-desk atmosphere.

Type roles on the cards: soft geometric / neutral grotesque sans. Candidates if rebuilding UI: Space Grotesk or Inter Tight for labels — Equinox already locks **Newsreader + Inter Tight + JetBrains Mono**, which should stay.

Surface: light paper, neutral-warm Porcelain. Accent: vivid cyan-blue used as a **flood** on the top swatch (loud). Density generous; composition centred for the cards.

Distinctive treatments: photographic lifestyle, soft card radii, monitor wallpaper echoing the blue. Pink neon in the room is noise — refuse.

Anti-patterns to skip for Equinox: Signal Blue as primary fill or canvas; startup-desk vibe as brand world; any purple/pink neon carry-over.

Closest Hallmark catalog cousin if building greenfield SaaS: **Cobalt** (modern-minimal, cool accent). **That cousin is wrong for Equinox's hospitality book** — Quiet Room / Specimen-adjacent editorial should remain the system of record.

### Carry vs refuse (Equinox)

| Carry | Refuse |
|-------|--------|
| High contrast ink-on-light discipline | `#0057FF` as primary brand / button fill |
| Clean two-token clarity (paper + one accent) | Porcelain replacing bone as a “new world” |
| Cool interactive accent *as a candidate* (links/focus only) | Tech-desk / neon lifestyle imagery as brand photography |
| Soft, readable sans for UI chrome (already Inter Tight) | Dropping Newsreader display |

### Recommended mapping

- **Porcelain `#F8F7F4`:** near-bone calibration only (`bone` stays `#F4EFE6` or shifts ≤2–3% lightness) — not a pivot.
- **Signal Blue `#0057FF`:** optional `--signal` interactive token (links, focus ring) **or** a dialed-down cooler cousin (~`#1A4FD6` / lower chroma) — never primary fill; keep ink fills + ember for hospitality warmth **or** replace ember only after decision gate.

Proceeding review with **hybrid lean (B)** per plan default.
