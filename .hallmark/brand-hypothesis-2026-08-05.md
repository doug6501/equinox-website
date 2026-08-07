# Brand hypothesis — Quiet Room vs Hybrid (2026-08-05)

**Sources:** `docs/brand-guidelines.md` v1.0 Full Lock · `design-system/MASTER.md` · Hallmark study Signal Blue/Porcelain · plan hybrid lean (B)

## Quiet Room today (system of record)

| Role | Token | Hex | Discipline |
|------|-------|-----|------------|
| Canvas | `--bone` | `#F4EFE6` | Page + header |
| Secondary | `--linen` | `#E6DFD1` | Soft bands |
| Type / primary fill | `--ink` | `#121212` | Buttons, headings |
| Interactive | `--ember` | `#C2582A` | Hover, focus, links — not default fill |
| Ornament | `--brass` | `#B8985A` | Hairlines only |
| Type | Newsreader + Inter Tight + JetBrains Mono | — | Locked |

**Positioning:** Event production with character — hospitality temperament, New England institutions, weddings/galas/corporate. Not startup gloss.

## Reference DNA (studied)

| Name | Hex | Role in reference |
|------|-----|-------------------|
| Signal Blue | `#0057FF` | Flood accent / brand chip |
| Porcelain | `#F8F7F4` | Near-white paper |

## Comparison

| Axis | Quiet Room | Signal/Porcelain world | Hybrid proposal |
|------|------------|------------------------|-----------------|
| Canvas | Warm bone | Cooler porcelain | Keep bone (or ±2% tint toward porcelain) |
| Primary fill | Ink | Would become Signal Blue | **Keep ink** |
| Interactive | Ember (warm) | Signal Blue (cool) | Optional `--signal` for links/focus only; ember retained for hospitality CTAs **or** A/B one accent |
| Temperament | Editorial hospitality | Tech/SaaS desk | Quiet Room wins; blue is a tool accent not the brand |
| Risk | — | Fights wedding/gala book; violates electric-blue ban | Contained if roles are strict |

## Verdict

**Improve Quiet Room; do not replace it.**

1. **Keep Quiet Room** — compliance + polish only; ignore Signal Blue for production.
2. **Hybrid (recommended lean)** — document `--signal: #0057FF` (or chroma-reduced `#1A4FD6`) as interactive-only; keep ink fills and Newsreader; leave bone; update brand guidelines + `.cursorrules` deliberately; never flood hero with blue.
3. **Deeper pivot** — rewrite MASTER to Porcelain + Signal Blue as brand world. **Not recommended** after study: wrong category temperament.

## Decision gate (user must choose before implementation)

Reply with **1 Keep** · **2 Hybrid** · **3 Pivot**.
