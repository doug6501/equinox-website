# Equinox Audio Visuals — Factual Corrections + Phase 5 Polish

**Date:** April 25, 2026  
**Agent:** Claude 4.6 Sonnet  
**Scope:** Section 3 factual corrections (4 case study pages) + Section 4A run-of-show sticky guard + Section 4B contact promise + Section 4C Phase 5 polish (console.log sweep, PWA confirmation, footer label sweep).  
**Source of truth:** `EQUINOX_AUDIT_AND_REIMAGINING.md`

---

## Constraints Honored

- Zero gradient, shimmer, hover-lift, or glass introduced
- No new brand color. Ember is the only accent.
- 11 commented-out testimonials untouched
- `EQUINOX_AUDIT_AND_REIMAGINING.md` not modified in this tranche. (V2 prototype HTML files have since been removed from the repository.)
- Equinox founding year 2023 maintained throughout
- Doug Kunnath's personal career byline voice preserved
- All changes are exact find-and-replace per verified corrections — no paraphrasing

---

## Step 1 — Factual Corrections (Section 3 of Handoff)

All corrections are verified by Doug Kunnath on April 25, 2026. No interpretation applied.

---

### 3A. `work-equinox-wedding.html` — 4 changes

**Background:** The Equinox Resort tent wedding was always under the tent — both ceremony and reception. Rain occurred but was a non-event. The bride's music teacher performed live guitar and voice during the ceremony. Nothing moved indoors.

**Change 1 — Hero headline (rain removed as the lead):**

- *Before:* "One hundred and twenty guests. One tent. Rain that arrived ten minutes before the ceremony."
- *After:* "One hundred and twenty guests under a tent at the Equinox Resort. Every vow heard at every seat."

**Change 2 — Opening paragraph (indoor move framing corrected):**

- *Before:* "Our job was not to move the event indoors when the weather turned. Our job was to make sure moving indoors was never necessary."
- *After:* "The tent was always the plan. Our job was to make sure every one of a hundred and twenty guests heard every word of it."

**Change 3 — Music teacher paragraph (rain removed):**

- Removed: "in a tent in the rain" — the four words between "live," and "We ran"

**Change 4 — Reception paragraph (indoor move claim removed):**

- *Before:* "Reception moved to the resort's indoor space without ceremony."
- *After:* "The reception followed in the same space under the tent."

**Files changed:** `work-equinox-wedding.html`

---

### 3B. `work-svcc-women-leadership.html` — Name correction

**Background:** Keynote speaker's full public name is Deborah Slaner Larkin. Confirmed by Bennington Banner, Manchester Journal, and SVCC's own coverage.

Replace-all `Deborah Larkin` → `Deborah Slaner Larkin` — **4 instances corrected** (handoff cited 3 body-copy instances; a 4th appeared in the spec row and was also corrected):

1. Hero headline: "Deborah Slaner Larkin at the podium."
2. Body paragraph: "Keynote speaker Deborah Slaner Larkin —"
3. Run-of-show row: "Keynote begins · Deborah Slaner Larkin"
4. Spec row: "Deborah Slaner Larkin, Title IX Advocate"

**Files changed:** `work-svcc-women-leadership.html`

---

### 3C. `work-two-day-wedding.html` — Run-of-show correction

**Background:** Doug was NOT involved in the Day 2 ceremony at Hildene. He handled uplighting, stage lighting, and dance floor lighting for cocktail hour and reception only.

**Deleted the entire ceremony run-of-show row:**

```html
<div class="run-of-show__row">
    <span class="run-of-show__time">17:00</span>
    <span class="run-of-show__event">Ceremony · Lighting to preset</span>
</div>
```

The cocktail row at 18:00 is now the first Day 2 entry after load-in.

**Files changed:** `work-two-day-wedding.html`

---

### 3D. `work-crooked-ram.html` — 7 targeted changes

**Background:** The Crooked Ram event was the **rehearsal dinner** the night before a wedding, not the wedding itself. Equinox handled: video display, microphones for toasts, cocktail hour audio. No ceremony at The Crooked Ram.

| # | Change | Before | After |
|---|---|---|---|
| 1 | Hero image alt text | "A private wedding at The Crooked Ram..." | "A rehearsal dinner at The Crooked Ram..." |
| 2 | Run-of-show: ceremony row deleted | `16:00 · Ceremony · Wireless audio active` | *(removed)* |
| 3 | Run-of-show: reception renamed | "Reception · Video presentation cue" | "Rehearsal dinner · Video presentation cue" |
| 4 | Body paragraph: ceremony fabrication deleted | "The ceremony audio required the same precision..." | *(removed)* |
| 5 | Spec: event type corrected | "Private wedding" | "Private rehearsal dinner" |
| 6 | First body paragraph: "wedding" → "rehearsal dinner" | "every guest at the wedding" | "every guest at the rehearsal dinner" |
| 7 | Second body paragraph: "during the reception" → "at dinner" | "The video ran during the reception." | "The video ran at dinner." |

**Files changed:** `work-crooked-ram.html`

---

## Step 2 — Run-of-Show Sticky Column (Section 4A)

**Finding:** `position: sticky` and `top: calc(72px + var(--space-4))` were already present in `design-system-v2.css` (Section 15). The mobile override (`position: static` inside the tablet breakpoint) was also already correct.

**What was missing:** A `max-height` guard. On short viewports (laptop height, long run-of-show lists), the sticky sidebar can overflow below the viewport without it.

**Addition to `design-system-v2.css`:**

```css
.v2 .run-of-show {
    position: sticky;
    top: calc(72px + var(--space-4));
    max-height: calc(100vh - 72px - var(--space-4) * 2);  /* ← added */
    overflow-y: auto;                                       /* ← added */
    background: var(--linen);
    ...
}
```

The `overflow-y: auto` scrollbar only appears if the sidebar content exceeds the viewport height — it does not affect short run-of-show lists.

**Files changed:** `design-system-v2.css`

---

## Step 3 — Contact Page Promise Line (Section 4B)

**Spec:** "You'll hear from us within 24 hours. If your event is within two weeks, we move faster than that."

**Placement:** Inside `.planner-form-container`, immediately above `.planner-progress` — the first thing a visitor sees as they prepare to start the form.

**Implementation:** A styled block using inline CSS (contact.html is not v2; no design-system-v2.css tokens available). Ember left-border, ember background tint, JetBrains Mono at 13px, ember text color — matches the brand voice register of the `thank-you.html` page that carries the same promise.

**Files changed:** `contact.html`

---

## Step 4 — Phase 5 Polish (Section 4C)

### 4C.1 — `console.log` removal

**Finding:** `script.js` contains **zero** `console.log` statements — already cleaned in a prior session. Five `console.error` calls remain in error handlers, which are appropriate and kept.

**Additional cleanup:** `contact.html`'s inline form script contained two debug `console.log` calls that were added during HubSpot integration development:

- `console.log('HubSpot Response Status:', response.status)` — removed
- `console.log('HubSpot Response Body:', ...)` — removed

The `console.error('Form submission error:', error)` handler was preserved.

**Files changed:** `contact.html`

---

### 4C.2 — PWA Retirement

**Finding:** Both `manifest.json` and `service-worker.js` have already been deleted (not present in the repo). No HTML page contains a `<link rel="manifest">` tag or a `serviceWorker.register()` call. `script.js` carries the comment `// Removed: Theme Toggle, Accessibility Menu, PWA, and Live Chat functions` at line 1656, which accurately documents the retirement.

**Action:** No further action required. PWA is fully retired.

---

### 4C.3 — Old-Style Footer Label Sweep

**Scope:** Non-v2 pages (all 13 article pages, 9 geo pages, services pages, contact, about, insights, event-planning-checklist) carried old-style inline footers where the Navigate column still read "Our Work" and "About Us" — inconsistent with the v2 nav reduction completed in Phase 4.

**Change:** Python regex replacement of exact footer link patterns:

| Before | After |
|---|---|
| `<a href="work.html">Our Work</a>` | `<a href="work.html">Work</a>` |
| `<a href="about.html">About Us</a>` | `<a href="about.html">About</a>` |

**Files updated: 31**

```
_footer.html (dead partial — updated for completeness)
about.html
article-av-trends-2025.html
article-av-trends-2026.html
article-breakout-management.html
article-choose-av-partner.html
article-conference-speaking.html
article-engaging-presentation.html
article-hire-av-lead.html
article-make-time-rehearsal.html
article-small-meetings.html
article-switch-av-partners.html
article-top-5-av-items.html
article-wedding-av-equipment.html
article-zoom-meeting-tips.html
av-services-albany-ny.html
av-services-bennington-vt.html
av-services-berkshires-ma.html
av-services-brattleboro-vt.html
av-services-burlington-vt.html
av-services-dorset-vt.html
av-services-keene-nh.html
av-services-manchester-vt.html
av-services-saratoga-springs-ny.html
contact.html
event-planning-checklist.html
insights.html
services-corporate.html
services-galas.html
services-weddings.html
services.html
```

**Verification:** Zero occurrences of `href="work.html">Our Work` or `href="about.html">About Us` remain in any HTML file.

---

## Files Changed This Session

| File | Type | Summary |
|---|---|---|
| `work-equinox-wedding.html` | Modified | 4 factual corrections: hero headline, opening ¶, music teacher ¶, reception ¶ |
| `work-svcc-women-leadership.html` | Modified | 4 instances of "Deborah Larkin" → "Deborah Slaner Larkin" |
| `work-two-day-wedding.html` | Modified | Ceremony run-of-show row deleted (Doug did not handle ceremony) |
| `work-crooked-ram.html` | Modified | 7 targeted changes converting event from "wedding" to "rehearsal dinner" |
| `design-system-v2.css` | Modified | `max-height` + `overflow-y: auto` guard added to `.v2 .run-of-show` |
| `contact.html` | Modified | 24-hour promise added above form; 2 `console.log` debug calls removed |
| 31 non-v2 HTML files | Modified | Footer Navigate labels: "Our Work" → "Work", "About Us" → "About" |

---

## Owner Action Items (Persistent, Unchanged from Prior Sessions)

1. **11 commented-out testimonials** — each has `<!-- TODO: supply real attribution to restore this testimonial -->`. Supply: first name + role + venue + date.
2. **Typography licensing** — Fraunces (Google Fonts, free) is current v2 display face. GT Sectra + Söhne are the premium replacements (~$900–$2,400 one-time web license).
3. **Footer spec line** — `v2.0 · Last show: Bennington Museum · Apr 19, 2026` is hardcoded on all v2 pages. Update after each new show.
4. **contact.html → thank-you.html redirect** — Wire the HubSpot form's success redirect URL to `thank-you.html`.
5. **Real LUT** — The CSS `--lut-filter` approximation is in `design-system-v2.css`. A real Lightroom/Capture One preset produces a `.cube` file for asset-level application.
6. **Photography production** — Each case study: one signature still (16:9), three supporting stills, one 15-second silent clip. New photography on a quarterly basis is the long-term plan.
