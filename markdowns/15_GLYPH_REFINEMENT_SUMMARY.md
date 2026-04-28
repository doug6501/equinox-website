# 15 — Typography Glyph Refinement

**Date:** April 28, 2026  
**Scope:** `design-system-v2.css`  
**Display stack:** `--font-display` → **Fraunces** (see `stable-header.css`)

## Goal

Reduce overly stylized **uppercase F** (and similar display quirks) on headings so typography reads closer to a **technical producer** spec than editorial flair—by constraining OpenType alternates and ligatures before considering a **font swap**.

## CSS change

Immediately after the base **`.v2 h3`** block (typography §2), a shared rule was added for **`.v2 h1`**, **`.v2 h2`**, and **`.v2 h3`**:

```css
font-feature-settings: "salt" 0, "calt" 0, "liga" 0;
font-variant-ligatures: none;
```

- **`"salt" 0`** — stylistic alternates off (per brief).  
- **`"calt" 0`** — contextual alternates off.  
- **`"liga" 0`** — standard ligatures off.  
- **`font-variant-ligatures: none`** — disables ligature groups at the CSS level as a belt-and-suspenders pairing with the feature flags above.

**H4–H6** were left unchanged so smaller subheads can keep default font behavior unless you want the same restraint there later.

## Interaction with existing overrides

- **`.v2 .process-page-hero .page-hero-v2__headline`** still sets **`font-feature-settings: "ss01" 0, "swsh" 0`** — higher specificity on that element, so the process hero headline behavior is unchanged.

## Visual audit (static review)

| Page | Sample with **F** | Element | Notes |
|------|-------------------|---------|--------|
| **index.html** | No heading string **“Focus”** in the file. | — | N/A; other **h2**/**h3** (e.g. “**Insights** from the field”, work card titles) still use **h1–h3** rules where applicable. |
| **services-corporate.html** | **“How Pricing Works.”** | **`<h2>`** inside linen section | Picks up the new **h2** `font-feature-settings` + **`font-variant-ligatures`**. |

This is a **code-level** audit (markup search + selector coverage), not a rendered proof in a browser. **If** the **F** in **Fraunces** is still too decorative after ship, the brief’s **next step** is a **font swap** (e.g. change `--font-display` or branch headings to a second family).

## Font swap (not done here)

No change to **`--font-display`** or Google Fonts links in this pass.
