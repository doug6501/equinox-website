# UX, Copy, and Navigation Fixes — Apr 25, 2026

## Summary of Instructions

User provided four distinct corrections:

1. **"I wouldn't know for sure that is a contact us page"** — the "Start a project" nav CTA doesn't clearly signal where it goes. A plain "Contact" link needed to be added to the main navigation so visitors have an obvious path to the contact page.

2. **"These logos are too small and not interactive enough"** — the client logo strip on `work.html` had logos at 32px height with no link behavior. They needed to be larger and click through to the relevant case study.

3. **"'This is the most useful page on the site' is crazy to write on our page"** — the work page intro paragraph was written from an operator's perspective. It needed to be rewritten for the actual audience: event planners and clients browsing work samples.

4. **"If your event deserves a team that treats it like theirs......doesn't really read very well"** — the CTA headline on `about.html` was an incomplete-feeling conditional. It needed a full rewrite.

---

## Changes Made

### `work.html` — Intro paragraph rewrite

**Before:**
> Every event on this list is named. The venue, the date, what we were hired to do. If you're deciding whether Equinox is the right call for your event — this is the most useful page on the site.

**After:**
> A complete record of every event we've produced — named venues, real dates, what we were asked to do and what actually happened. Browse by category, or find one that looks like your event.

### `work.html` — Client logo strip improvements

- Logo height increased from **32px → 48px** (mobile: 24px → 36px)
- Max-width increased from **120px → 150px** (mobile: 90px → 110px)
- Added **`transform: scale(1.08)`** on hover alongside color reveal
- Wrapped each logo in an `<a>` tag linking to its respective case study page:
  - Hildene → `work-hildene.html`
  - Bennington Museum → `work-bennington-museum.html`
  - SVCC → `work-svcc-annual-meeting.html`
  - Kimpton Taconic → `work-kimpton-taconic.html`
  - Equinox Resort → `work-equinox-wedding.html`
  - Northshire Day School → `work-northshire-gala.html`
  - The Crooked Ram → `work-crooked-ram.html`
  - Arlington Common → `work-arlington.html`
  - The Inn at Manchester — no dedicated case study exists; left as non-linked image

### `about.html` — CTA headline rewrite

**Before:**
> If your event deserves a team that treats it like theirs.

**After:**
> Every event we've produced started with one phone call. Let's have ours.

### All 48 HTML pages + `_header_STABLE.html` — "Contact" added to main navigation

Added `<li><a href="contact.html">Contact</a></li>` after the Insights link in the `nav-links` unordered list across all pages. Contact also appears once in the footer Navigate column (was already in the same list structure; de-duplication handled automatically).

The "Start a project" CTA button remains in the header as a secondary conversion point. The new "Contact" nav link provides a discoverable, expected way for visitors to find the contact page without having to decode the button label.

---

## Files Modified

| File | Change |
|------|--------|
| `work.html` | Rewrote intro copy; upgraded logo CSS; wrapped logos in anchor tags |
| `about.html` | Rewrote CTA section headline |
| `_header_STABLE.html` | Added Contact nav link |
| All 48 `*.html` files | Batch-added Contact nav link via sed + Python dedup pass |

---

## Pending / Follow-Up

- **Contact vs. Start a Project page split**: If the user wants two separate pages (a simple contact form vs. a detailed project brief), `contact.html` currently serves both purposes. A potential future task would be duplicating and differentiating those two pages.
- **Inn at Manchester**: No dedicated case study page exists; consider adding one or removing the logo from the strip.
