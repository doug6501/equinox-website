# Contact wizard & About team layout — repair summary

## Problem

1. **contact.html** — `design-system-v2.css` §29 had replaced the legacy **dark, multi-step “wizard”** look with a **light card** (`#fff` form shell, bone section, ink type). That overrode `stable-header.css`’s dark gradient planner. Global **`.v2 main p`** / **`.v2 main li`** **center** alignment also leaked into step copy and descriptions.

2. **about.html** — “Meet the Team” used an **inline flex** block; global v2 **centering** and heading rules still produced a **stacked, centered** feel on many widths.

3. **HubSpot** — Already loaded **last** on `contact.html` with **`https://`** `src`; confirmed, no protocol change required.

## Solution

### Scoping classes

| Page        | `body` class                          | Purpose                                      |
|------------|----------------------------------------|----------------------------------------------|
| contact.html | `v2 contact-page`                    | All new wizard + prose overrides scoped here |
| about.html   | `v2 about-page`                      | Team prose left-align + future about shields |

### CSS (`design-system-v2.css` §29)

- Removed the **global** `.v2 .project-planner-section` / `.v2 .planner-form-container` / sidebar **light** overrides.
- Replaced with **`.v2.contact-page …`** rules only:
  - Section **dark gradient** background.
  - Form container **glass** (`rgba(255,255,255,0.05)`), light borders, depth shadow.
  - Promise strip, **progress** rail, **option** / **checkbox** cards, **inputs**, **nav buttons**, **sidebar** cards, testimonial, and **form-success** copy — all **light-on-dark**, **`text-align: left`** where appropriate for wizard steps.
  - Primary actions use **`var(--ember)`** (aligned with v2 tokens vs. legacy `#FF6B35`).
- **`.v2.contact-page main p, .v2.contact-page main li { text-align: left; }`** — isolates the planner from **`.v2 main p`** centering.

### About “Meet the Team”

- Markup: **`.about-team`** grid with **`.about-team__media`**, **`.about-team__bio`**, **`.about-team__role`**, **`.about-team__text`** (no inline styles).
- CSS: **`display: grid`**, `min(220px, 34vw)` + **`1fr`**, left-aligned bio; **`@media (max-width: 640px)`** single column, headshot capped at 200px width.
- **`.v2.about-page main .about-team p`** (and `li`) **left**-aligned.

### HTML / assets

- **contact.html**: `contact-page` on `body`; `design-system-v2.css?v=8`.
- **about.html**: `about-page` on `body`; semantic team block; `design-system-v2.css?v=8`.
- **HubSpot**: Still the **final** script before **`</body>`**, `src="https://js-na2.hs-scripts.com/243705543.js"`.

## Files changed

- `design-system-v2.css` — §29 rewrite + `.about-team` rules.
- `contact.html` — body class, CSS version.
- `about.html` — body class, team markup, CSS version.

## Verification

- [ ] contact: Hero unchanged; planner section **dark**; steps readable; inputs dark; sidebar matches.
- [ ] contact: Step titles and descriptions **left-aligned**; no forced centered paragraphs inside the form.
- [ ] about: Meet the Team shows **photo left / bio right** from ~641px up; narrow phones **stack** with bio still readable.
- [ ] Network tab: HubSpot loader **`https`** only.

## Tier note

**Tier 2** — page-scoped CSS and small HTML class/markup updates; no new JS or API changes.
