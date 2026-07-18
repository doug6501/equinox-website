# Equinox Audio Visuals — Brand Guidelines

**Art direction:** Quiet Room (Direction A)  
**Version:** 1.0 — Full Lock  
**Audience:** Balanced book of business (weddings · galas · corporate / institutional)  
**Source of truth:** This document. CSS tokens live in `stable-header.css`. Components in `design-system-v2.css` (scoped to `body.v2`). Machine export: `design-system/tokens.json`.

---

## 1. Brand idea

**Event production with character.**

Equinox is a technical producer with a hospitality temperament: calm on show day, precise at the console, invisible when it matters. The brand does not compete on “gear lists” or startup gloss. It competes with boutique hospitality, editorial wedding houses, and New England cultural institutions — warmth, craft, and specificity.

**Personality**

| Always | Never |
|--------|--------|
| Specific, calm, hospitable | Hype, vendor-speak, quote-mill |
| Console-literate | Generic “professional AV services” as body copy |
| Named venues and numbers | Empty superlatives |
| One claim per surface | Stacked promises |

---

## 2. Logo

### Primary mark

- **Nav / header:** horizontal wordmark (`assets/logo-wordmark.png`), treated as **ink on bone**.
- **Footer:** text only — `footer-brand__name` (“Equinox Audio Visuals”). No inverted PNG.
- **Social / OG:** full-color `assets/logo.png`.

### Why the ink wordmark

On a bone header, a full-color wordmark reads as a sticker. The ink treatment (CSS filter until a dedicated `logo-wordmark-ink.png` ships) reinforces Quiet Room temperament and contrast. **Do not** restore a colorful nav mark. **Do not** use the stacked medallion in the hero or header.

### Clear space & size

| Context | Rule |
|---------|------|
| Clear space | ≈ 0.5× cap-height on all sides |
| Desktop nav height | ~28px |
| Mobile nav height | ~22px |
| Max width (nav) | ~160px |

### Colorways

| Surface | Treatment |
|---------|-----------|
| Bone header | Ink wordmark |
| Ink footer | Text brand name in bone/linen |
| Dark media / OG | Full-color logo |
| Favicon / app | Full-color or monochrome ink as needed |

### Don’t

- Stacked logo medallion in heroes
- Glass / drop-shadow “floating badge” treatments that fight bone chrome
- Client logo marquees as brand proof (portfolio and Event Spotlight carry proof)

---

## 3. Color

### Quiet Room palette (canonical)

| Token | Hex | Role |
|-------|-----|------|
| `--ink` | `#121212` | Primary type, primary button fills, structure |
| `--slate` | `#2A2A2A` | Secondary surfaces, subdued UI |
| `--bone` | `#F4EFE6` | Page canvas, header |
| `--linen` | `#E6DFD1` | Secondary canvas, soft bands |
| `--ember` | `#C2582A` | Hover, focus, links, live signal — **not** default button fill |
| `--brass` | `#B8985A` | Hairlines, rules, header top bar — sparingly |
| `--scope` | `#9FE870` | Reserved (run-of-show / live indicators); off marketing UI |

### Accent roles (strict)

- **Ink** = primary fills and body/heading type on bone
- **Ember** = interactive accent (hover underline, focus, CTA hover)
- **Brass** = ornament only (2px header bar, heading hairlines)
- **Scope** = internal/live tooling only

### Legacy (quarantined)

Do **not** use in new work: `#FF6B35`, `#FFD23F`, `#4169E1`, `#0A0A1A` navy glass stacks, gradient meshes. See `stable-header.css` legacy block.

---

## 4. Typography

| Role | Family | Notes |
|------|--------|-------|
| Headings / display | **Newsreader** | All `h1`–`h6`, display lines |
| Body | **Inter Tight** | Prose, UI labels |
| Meta / metrics | **JetBrains Mono** | Specs, times, venues, reading time |

**Deprecated:** Fraunces / `--font-display` for new surfaces. Map display to Newsreader (`--font-heading` on `.v2`).

### Scale (tokens)

`--scale-1` (13px mono) → `--scale-7` (clamp H1). Body ~`--scale-3` (18px). Measure: `--measure` 62ch.

---

## 5. Spacing & layout

Max Breath means **section padding**, not outer page margins.

| Tier | Token | Value | Use |
|------|-------|-------|-----|
| Micro | `--space-1`–`3` | 8–24px | Gaps, chips, button pad; touch ≥8px |
| Component | `--space-4`–`5` | 40–64px | Card internals, form stacks |
| Section standard | `--space-7` | 160px / 10rem | Default `.v2` content sections |
| Max Breath | `--space-8` | 240px / 15rem | Signature only: work hub, major CTA bands, deep service narrative |
| After-hero compress | — | 6rem top | First block after full-bleed hero |

**Horizontal:** gutters `--space-4` (40px); container `--container-v2` 1240px.

**Type rack:** `--space-h1-top/bottom`, `--space-h2/h3-top`, `--space-heading-hairline-gap`, `--space-p-bottom`.

---

## 6. Imagery & video

- One warm LUT sitewide (CSS filter tokens in `design-system-v2.css`).
- Every `<video>` requires a graded `poster`.
- Case studies: still opener by default; flythroughs secondary.
- No emoji as icons — crisp semantic SVGs only.
- Image containers need explicit aspect ratio or dimensions (no layout shift).

---

## 7. Motion

| Token / rule | Value |
|--------------|-------|
| View transitions | 350ms cross-document fade |
| `--dur-1` / `--dur-2` / `--dur-3` | 160 / 320 / 640ms |
| Easing | `--ease` cubic-bezier(0.2, 0.8, 0.2, 1) |

Honor `prefers-reduced-motion`. No infinite decorative loops, shimmer, or gradient keyframe chrome.

---

## 8. UI chrome

- **Header:** bone canvas, brass 2px top bar, ink nav → ember hover underline, CTA ink → ember on hover.
- **Primary button:** ink fill / bone text; ember on hover.
- **Ghost / text CTA:** underline style; “Start a project →”.
- **Cards:** only when the container is the interaction (work cards, service cards). No decorative card chrome in heroes.
- **Hero:** full-bleed media + one headline (+ mono eyebrow). No badges, chips, or floating stickers on hero media.
- **Insights articles:** horizontal byline only (no vertical meta rail); magazine figures (`.figure-bleed` / `.figure-full`). See `design-system/pages/insights.md`.

---

## 9. Anti-patterns (abort if detected)

- Content-first **dark mode** as default marketing canvas
- Neumorphism, heavy gradient meshes, glassmorphism headers
- AI indigo / purple-to-pink highlights
- Emoji-as-icon
- Layout shift from undimensioned media
- Client logo marquee / infinite proof strips
- Stacked logo medallion in hero
- Ember (or legacy orange) as default primary button fill
- Fraunces / Playfair / Amatic as heading swaps

---

## 10. Related documents

- [Marketing guidelines](marketing-guidelines.md)
- [Compliance audit](brand-compliance-audit.md)
- [Design system MASTER](../design-system/MASTER.md)
- [Insights magazine overrides](../design-system/pages/insights.md)
- [Tokens JSON](../design-system/tokens.json)
