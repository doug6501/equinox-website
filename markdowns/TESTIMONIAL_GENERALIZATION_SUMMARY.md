# Testimonial and quote generalization — summary

**Date:** April 28, 2026  
**Policy:** Remove **identifying personal names** from testimonials and **“In Their Words”** pull-quotes where consent is not documented. Keep **roles**, **organizations**, and **venue / date** context. **Author bylines** (e.g. “By Doug Kunnath” on Insights articles) and the **About** founder bio are **out of scope**—they are editorial attribution, not client testimonials.

## `index.html` (v2 — centered testimonial patterns unchanged)

| Location | Change |
|----------|--------|
| **Editorial testimonial** (`testimonial-editorial`) | Replaced **Dr. Seth Bongartz** + split name/title lines with a single line: **President — Hildene, The Lincoln Family Home**, plus **Manchester, Vermont** on the following line. Markup still uses `testimonial-editorial__inner` / `testimonial-editorial__attribution` (no layout/CSS edits). |
| **Slider** (slide 6, commented) | **Bride & Groom** → **Couple** so the template is role-based, not identity-based. Slides 1–5 were already generic titles (**Executive Director**, **Events Team**, etc.). |

## Active case study testimonials (`testimonial-editorial`)

| File | Change |
|------|--------|
| `work-bennington-museum.html` | **Executive Director — Bennington Museum**; second line: gala / location / year range. Removed **`draft-attribution`** placeholder. |
| `work-vanish-screening.html` | **Program Director — Bennington Museum**; second line: *Vanish* screening / location / date. Removed placeholder. |
| `work-hildene-volunteer.html` | **Leadership Team — Hildene, The Lincoln Family Home**; second line uses **August 28, 2025** (aligned with Run of show **Date**). |
| `work-svcc-women-leadership.html` | **Events Coordinator — Southwestern Vermont Chamber of Commerce**; venue line ends **May 14, 2025** (matches case **Date**). |
| `work-svcc-annual-meeting.html` | Same coordinator + org pattern; venue line **January 31, 2025** (matches case **Date**). |
| `work-hildene.html` | **`[Name]`** placeholder → **Couple**; retained private wedding / Lincoln Hall / season line. |

## Commented testimonial templates (`work-*.html`)

Blocks wrapped in `<!-- ... -->` were updated so a future uncomment does not reintroduce **`[Name]`** / **`[Role]`** placeholders:

- `work-two-day-wedding.html` — **Couple** + Hill Farm / Hildene / August 2025  
- `work-northshire-gala.html` — **Development Director** + school / Manchester / September 2025  
- `work-arlington.html` — **Festival Organizer** + Arlington Common / 2023–2025  
- `work-bennington-summer.html` — **Executive Director** + museum / June 2024  
- `work-hildene-wedding-2.html` — **Couple** + Hildene / Fall 2024  
- `work-crooked-ram.html` — **Couple** + Crooked Ram / August 2025  
- `work-equinox-wedding.html` — **Couple** + Equinox / **September 7, 2024**  
- `work-kimpton-taconic.html` — **Couple** + Kimpton Taconic / Early 2025  

## Unchanged (already generic or non-testimonial)

- **`contact.html`** — Sidebar quote already attributed to **Hildene, The Lincoln Family Home** (organization only).  
- **`services-corporate.html`**, **`services-galas.html`**, **`services-weddings.html`** — Inline **`<blockquote>`** copy is first-person **Equinox** voice; no client names.  
- **Insights `field-note` “By Doug Kunnath”** — retained across articles.  
- **`about.html`** — Founder name and bio retained.

## Typography / layout

No changes to **CSS** or structural classes for testimonials; **index** editorial block and **work** **`testimonial-editorial`** sections keep their existing v2 alignment (centered stack on homepage index pattern; case pages unchanged).

## Files touched

`index.html`, `work-bennington-museum.html`, `work-vanish-screening.html`, `work-hildene-volunteer.html`, `work-svcc-women-leadership.html`, `work-svcc-annual-meeting.html`, `work-hildene.html`, and eight **`work-*.html`** files with commented testimonial templates (`work-two-day-wedding.html`, `work-northshire-gala.html`, `work-arlington.html`, `work-bennington-summer.html`, `work-hildene-wedding-2.html`, `work-crooked-ram.html`, `work-equinox-wedding.html`, `work-kimpton-taconic.html`).
