# 16 — Heading Font Swap

**Date:** April 28, 2026  
**Scope:** `design-system-v2.css`, `thank-you.html`  
**Note:** The site uses **Fraunces** as `--font-display` (not Cormorant). Editorial / pull-quote treatments stay on **Fraunces**.

## Objectives

1. Load **Newsreader** (variable axis Google Font) and use it for primary headings and service/CTA display lines.  
2. Use **font-weight 500–600** for a clearer, more “technical editorial” silhouette (cleaner capitals than Fraunces for problematic glyphs like **F**).  
3. Keep **Fraunces** where lowercase / pull-quote editorial tone should remain.  
4. Preserve **rack rhythm**: `--space-h2-top` / `--space-h3-top` (**1.25rem**) and related heading margins unchanged; only **line-height** was nudged slightly where metrics differ.

## Implementation

### Newsreader import

- At the **top** of `design-system-v2.css`:  
  `@import url("https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,200..800&display=swap");`

### Token

- On **`.v2`**: **`--font-heading: "Newsreader", Georgia, "Times New Roman", serif;`**  
  (Exception to the file comment that prefers tokens in `stable-header.css`, so Newsreader stays co-located with the `@import`.)

### `H1`–`H4`

- **Family:** `var(--font-heading)`  
- **Weights:** **`H1` → 600**; **`H2`–`H4` → 500** (via shared rule, `H1` overridden).  
- **Line-height:** **`H1` 1.05**, **`H2` 1.12**, **`H3` 1.22**, **`H4` 1.28** (slightly looser than pre–Newsreader where needed for vertical fit).  
- **Instruction 15** OpenType overrides on `H1`–`H3` were removed with the Fraunces-forward heading stack (Newsreader does not need that block).

### `H5`–`H6`

- Still **`var(--font-display)`** (Fraunces) at **400** for smaller meta-style headings.

### Components moved to `--font-heading`

Includes (non-exhaustive): **`.section-title`**, **`.display`**, home **`.hero__headline`**, **`.page-hero-v2__headline`** (600), **`.final-cta__headline`**, **`.cta-section-v2__headline`**, work preview/titles, service card titles, insight card titles, article layout **h2–h4**, case narrative headings, related-card titles, about team bios, footer brand name, process teaser/step/FAQ/trust/contact wizard headings, etc.

### Fraunces retained (`var(--font-display)`)

- **`.testimonial-editorial__quote`** — index-style pull quote.  
- **Ledger** entries, **story-beat** body (editorial display body).  
- **Footer “EQ” bug** (decorative).  
- **Article** lead paragraph + **drop cap** (`::first-letter`).  
- **`.pricing-approach__prose p:first-child`** — pricing intro line stays editorial serif.  
- **`.contact-page .testimonial-quote`** — sidebar quote.

### `font-display-v2` cleanup

- All **`var(--font-display-v2)`** usages in `design-system-v2.css` were replaced with **`--font-heading`** or **`--font-display`** as appropriate.  
- **`thank-you.html`** headline class now uses **`var(--font-heading)`** with **weight 600** (page already loads `design-system-v2.css`, so the token resolves).

## Visual audit (static)

- **index.html:** Section **h2** / **h3** and hero **h1** resolve to **Newsreader** through element rules and component classes; **testimonial** quote remains **Fraunces**.  
- **services-corporate.html:** Page hero **h1**, section **h2/h3**, service card titles, and CTA headline use **Newsreader**; pricing **first paragraph** stays **Fraunces**.

## Follow-up

- Bump **`?v=`** on `design-system-v2.css` links site-wide if you rely on aggressive CDN/browser cache invalidation after typography changes.
