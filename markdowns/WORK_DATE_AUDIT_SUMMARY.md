# Work section date and year accuracy — audit summary

**Date:** April 28, 2026  
**Source of truth:** Each project’s **Run of show** sidebar **`Date`** row (`run-of-show__spec-label` / `run-of-show__spec-value`) in the corresponding **`work-*.html`** file. For **Two-Day Wedding Weekend**, there is no **`Date`** spec row; the hero **`case-study-hero__venue`** line and run-of-show day headers (**AUG 22** / **AUG 23**) define **August 22–23, 2025**, which already matched **`work.html`**.

**Note:** **`work.html`** does not use the homepage **Assurance Ledger** markup; the audited “ledger” is the **work index** list of **`case-row`** entries (venue · location · date meta line).

## Rows verified with no change

| Case study | `work.html` meta (date portion) | Case study `Date` spec (or hero) |
|------------|----------------------------------|-----------------------------------|
| Two-Day Wedding Weekend | August 22–23, 2025 | Hero + run-of-show **Aug 22 / Aug 23, 2025** |
| Wedding at The Crooked Ram | August 2025 | **August 2025** |
| Hildene Lincoln Hall Wedding (work-hildene-wedding-2) | Fall 2024 | **Fall 2024** |
| Kimpton Taconic Wedding | Early 2025 | **Early 2025** |

## Updates applied to `work.html`

| # | Case | Was (`case-row__meta` date tail) | Now (aligned to case study) |
|---|------|-----------------------------------|-----------------------------|
| 01 | Equinox Resort Tent Wedding | August 2025 | **September 7, 2024** |
| 06 | Hildene Lincoln Hall Wedding (work-hildene) | 2023 | **Summer 2025** |
| 07 | Vanish Film Screening | April 2026 | **June 22, 2024** |
| 08 | Hildene Volunteer Appreciation Dinner | April 2026 | **August 28, 2025** |
| 09 | SVCC Women in Leadership Luncheon | May 2025 | **May 14, 2025** |
| 10 | SVCC Annual Membership Meeting | January 2026 | **January 31, 2025** |
| 11 | Northshire Day School Harvest Moon Gala | September 2025 | **September 16, 2025** (from spec: *Sept 16 (most recent)* within **2023–2025**) |
| 12 | Bennington Museum Gala | 2024 | **Annual · 2023–2025** |
| 13 | Bennington Museum Summer Celebration | June 2024 | **June 1, 2024** |
| 14 | Arlington Common Fly Fishing Festival | 2023, 2024, 2025 | **Annual · 2023–2025 (ongoing)** |

## Files touched

| File | Change |
|------|--------|
| `work.html` | Ten **`case-row__meta`** date strings updated as above. |
| `markdowns/WORK_DATE_AUDIT_SUMMARY.md` | This document. |

## Follow-up (optional)

- **Equinox** case study body copy still describes a **120-guest / August 2025**-style scenario while the sidebar **Date** is **September 7, 2024**; reconciling narrative vs. spec is a separate content edit if you want one consistent story.
- Re-run this audit whenever a **`work-*.html`** **Date** spec or hero venue line changes.
