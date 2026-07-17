# Quiet Room + Pro-Max Hybrid — Mockups

Isolated design experiments. **Not live.** Safe to delete this folder.

**Source of truth for brand/marketing:** [`docs/brand-guidelines.md`](../docs/brand-guidelines.md) · [`docs/marketing-guidelines.md`](../docs/marketing-guidelines.md) · [`design-system/MASTER.md`](../design-system/MASTER.md)

## Open

| Mock | URL (local server) | Compare |
|------|--------------------|---------|
| Homepage | `/mockups/home-quiet-room.html` | `/index.html` |
| WIL 2026 case | `/mockups/case-wil-2026-quiet-room.html` | `/work-women-in-leadership-2026.html` |

Serve from repo root, e.g. `python3 -m http.server 8765`.

## Hybrid rules (aligned with Full Lock)

1. **Art direction** — Quiet Room: `--bone` / `--ink` / `--ember` / `--brass`; Newsreader + Inter Tight + JetBrains Mono. Bone canvas, not dark mode.
2. **Homepage pattern** — Portfolio lean: hero thesis → event spotlight → selected work → process → one editorial quote → CTA.
3. **Hero** — Full-bleed brand video + one headline + mono eyebrow. No stacked-logo medallion. (WIL still rejected for homepage — video stays.)
4. **Case studies** — Still opener by default. No floating Prev/Next. Bottom “Next case” only.
5. **CTA voice** — “Start a project” sitewide (never “Get a Quote”).
6. **Logo** — Ink/warm wordmark on bone header (provisional CSS filter until real assets).
7. **Motion** — No infinite decorative loops; respect `prefers-reduced-motion`.
8. **Proof** — Event Spotlight is the homepage proof surface (do not add a second Ledger).
9. **Quotes** — One editorial pull-quote; do not invent personal names.
10. **Spacing** — `--space-7` default; `--space-8` Max Breath for signature sections only.

## Rejected

Soft UI / neumorphism, navy or wedding-pink palettes, Playfair/Amatic font swaps, glass/shimmer, legacy orange/blue.

## Files

- `home-quiet-room.html` — homepage proposal
- `case-wil-2026-quiet-room.html` — case-study proposal
- `mock-overrides.css` — scoped overrides only (not loaded on live pages)
