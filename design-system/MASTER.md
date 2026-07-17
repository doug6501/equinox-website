# Equinox Design System — MASTER

**Name:** Quiet Room  
**Product:** Equinox Audio Visuals (marketing site + Equinox Flow / ERP)  
**Canonical docs:** [`docs/brand-guidelines.md`](../docs/brand-guidelines.md) · [`docs/marketing-guidelines.md`](../docs/marketing-guidelines.md)  
**Machine tokens:** [`tokens.json`](tokens.json)

This file is the hierarchical source of truth for implementation. Page-specific overrides (if any) live under `design-system/pages/`.

---

## Pattern

- **Style:** Premium Service Minimalism / Quiet Room editorial
- **Canvas:** Bone light (`#F4EFE6`), not dark mode
- **Conversion:** Portfolio-first proof → consultative CTA (**Start a project**)
- **Reject:** Soft UI, navy/orange/blue legacy AV kits, Playfair/Amatic swaps, glass/shimmer, client logo marquees

---

## Color

| Role | Token | Hex |
|------|-------|-----|
| Ink / text / primary fill | `ink` | `#121212` |
| Slate | `slate` | `#2A2A2A` |
| Bone / canvas | `bone` | `#F4EFE6` |
| Linen | `linen` | `#E6DFD1` |
| Ember / interactive | `ember` | `#C2582A` |
| Brass / hairline | `brass` | `#B8985A` |
| Scope (reserved) | `scope` | `#9FE870` |

Accent discipline: ink fills · ember hover/focus · brass rules only.

---

## Typography

| Role | Family |
|------|--------|
| Heading / display | Newsreader |
| Body | Inter Tight |
| Mono | JetBrains Mono |

`--font-display` (Fraunces) is deprecated for new UI.

---

## Spacing

| Tier | Token | px |
|------|-------|-----|
| Micro | space-1 … 3 | 8–24 |
| Component | space-4 … 5 | 40–64 |
| Section | space-7 | 160 |
| Max Breath | space-8 | 240 |
| After-hero | — | 96 (6rem) top |

Container: 1240px. Measure: 62ch. Gutters: 40px.

---

## Motion

- View transition: 350ms
- dur-1 / dur-2 / dur-3: 160 / 320 / 640ms
- Prefer `prefers-reduced-motion`

---

## Components (marketing)

- Header: bone + brass bar + ink wordmark
- Nav CTA / sticky CTA: Start a project
- Buttons: primary ink; ghost underline
- Case study: still opener + run-of-show
- Footer: text brand name

---

## Anti-patterns

No neumorphism, gradient meshes, AI purple, emoji icons, undimensioned images, stacked logo medallions, Get a Quote CTAs, ghost testimonials.
