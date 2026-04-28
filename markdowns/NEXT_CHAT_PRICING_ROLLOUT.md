# Next Chat — Roll Out the Pricing Approach Section

## Task

Copy the "How Pricing Works" section from `services.html` to the three service sub-pages, lightly tailoring each one. **No dollar figures. No "Starting at" pricing.** That's Doug's firm rule.

## Source

`services.html` already has the pattern. Find the `<!-- HOW PRICING WORKS -->` comment and copy the whole `<section class="content-section-v2 content-section-v2--linen eq-reveal">` block. Insert it just before the closing `<section class="cta-section-v2">` on each target page.

## Target Files

1. `services-corporate.html`
2. `services-weddings.html`
3. `services-galas.html`

## What to Tailor Per Page

The core structure and promise stay identical. Change the **examples** and the **"What shapes the quote"** list to match the audience of each page.

### services-corporate.html

In the first paragraph of prose, change the wedding example to:

> A corporate annual meeting with one keynote isn't the same as a three-day conference with breakouts. A product launch with a live demo isn't the same as a Friday town hall over Zoom.

"What shapes the quote" list for this page:

- Number of speakers and presenters
- Audience size — in-room and remote
- Breakout rooms and parallel tracks
- Video and livestream requirements
- Rehearsal and tech-check time
- Multi-day events and overnight logistics

### services-weddings.html

In the first paragraph of prose, keep the wedding example but add:

> A wedding for 60 in a backyard isn't the same job as a wedding for 200 in a historic barn. A ceremony with a string trio isn't the same as one with a band and a dance floor that runs until 11.

"What shapes the quote" list for this page:

- Guest count and venue size
- Ceremony, cocktail, and reception spaces
- Live band or DJ coordination
- Specialty moments (first dance, toasts, fund-a-need style donations)
- String lights and uplighting
- Travel to rural venues

### services-galas.html

In the first paragraph of prose:

> A museum gala for 100 patrons isn't the same job as a hospital auction with a 500-person tent. A silent-auction-only evening isn't the same as one with a live paddle raise and a keynote speaker.

"What shapes the quote" list for this page:

- Guest count and venue layout
- Silent auction display and audio
- Live auction / paddle raise audio redundancy
- Keynote or headliner speaker support
- Fund-a-need video production
- Lighting for donor recognition moments

## Style Notes

- Do NOT add dollar figures anywhere.
- Do NOT use the phrase "Starting at."
- Keep the sticky "What shapes the quote" card on the right — it's load-bearing visually.
- The tone is the same as `services.html` — plainspoken, confident, specific.

## Verification

After each page is updated:

1. Visually check the page renders the pricing section correctly (responsive breakpoint at 820px).
2. Confirm no "Starting at" or "$" appears anywhere on the page.
3. Confirm the sticky card still positions correctly on desktop.

## Starter Prompt for the Next Chat

> I need you to roll out the "How Pricing Works" section (in `services.html`) to the three service sub-pages: `services-corporate.html`, `services-weddings.html`, and `services-galas.html`. Follow the tailoring instructions in `markdowns/NEXT_CHAT_PRICING_ROLLOUT.md`. No dollar figures, no "Starting at" language. Copy the CSS classes as-is — the styling is already defined in `design-system-v2.css` section 24.
