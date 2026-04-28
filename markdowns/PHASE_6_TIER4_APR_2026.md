# Equinox Audio Visuals — Phase 6, Tier 4: Event Planning Checklist

**Date:** April 25, 2026  
**Agent:** Claude 4.6 Sonnet  
**Scope:** v2 design system migration — event-planning-checklist.html  
**Source of truth:** `EQUINOX_AUDIT_AND_REIMAGINING.md`

---

## Constraints Honored

- Zero gradient. Inline `<style>` body background gradient block deleted
- No new brand color. All hardcoded `#FF6B35` replaced with `var(--ember)` — 6 checklist SVG strokes + 1 success SVG + 3 inline link colors
- HubSpot form logic untouched (portal ID, form ID, API call, PDF download trigger, GA event)
- All body copy preserved verbatim
- Form `position:sticky` preserved

---

## Changes Applied

### Head
- Font `<link>` updated to full v2 stack (Fraunces + Inter Tight + JetBrains Mono)
- `<link href="design-system-v2.css?v=1">` added after stable-header.css

### Body
- `class="v2"` added to `<body>`

### Hero
- `<section class="lead-magnet-hero">` with inline gradient `<style>` block **replaced** with `.page-hero-v2--text`
- Eyebrow: "Free resource"
- Headline: "The 2026 Event Planner's Technical Checklist" (preserved verbatim)
- Subtitle "15 Things Your Venue Won't Tell You About AV" preserved as `<p>` below headline using `var(--slate)` color

### Form Card
- Background updated to `var(--linen)` via inline style
- Border-radius updated to `var(--radius-1)` via inline style
- Submit button: `background: var(--ember); color: var(--bone)` applied, `font-family: var(--font-mono)`, `border-radius: var(--radius-1)`

### SVG Colors
- All `stroke="#FF6B35"` attributes in checklist preview and success SVG → `stroke="var(--ember)"`

### Success State
- Dark-mode text colors (`rgba(245, 245, 245, ...)`, `white`) updated to `var(--ink)` / `var(--slate)` (matches linen card background)
- Link colors `#FF6B35` → `var(--ember)`

### Footer
- Old logo-image footer removed
- v2 footer inserted (footer-bug "EQ", 4-column: Navigate / Services / Regions / spec line)

---

## Phase 6 Complete — Final v2 Page Count

**48 pages** now carry `class="v2"` and `design-system-v2.css`:

- 1 home (index.html)
- 1 work hub (work.html)
- 14 case studies (work-*.html)
- 1 thank-you.html
- 1 regions.html
- 1 about.html
- 4 services pages (services.html + 3 verticals)
- 1 insights.html
- 1 contact.html
- 13 article pages (article-*.html)
- 9 geo pages (av-services-*.html)
- 1 event-planning-checklist.html

---

## Owner Action Items (Persistent)

1. 11 commented-out testimonials — supply attribution to restore when ready
2. Footer spec line — update to current show after next event
3. contact.html → thank-you.html redirect (not yet set up)
4. Real LUT + photography production pass (ongoing)
5. `event-planning-checklist.html` — consider updating the `stable-header.css`-era `.lead-magnet-section` layout CSS to native v2 grid tokens (current page still inherits old CSS for the two-column layout — it works but isn't pure v2)
