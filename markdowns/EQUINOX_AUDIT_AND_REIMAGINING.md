# Equinox Audio Visuals — Audit & Reimagining

**A deep-dive audit of the current site and a strategic blueprint for elevating it from a credible professional presence to a "Category of One" premium agency experience built around the brand idea of *Character*.**

*Prepared as a read-only creative direction document. No files in the repository have been modified.*

---

## 0. Executive Summary

Equinox owns a rare, ownable brand idea — **"Event Production with Character"** — but the current website expresses that idea inside a generic 2020s dark-UI, gradient, and glassmorphism template. The copy is more distinctive than the design; the design is more ambitious than the runtime; the runtime is held together with stacked fixes that undercut the premium posture.

The path to "Category of One" is **not** more polish on the current recipe. It is a decisive art-direction choice that makes the brand **feel** like character at every pixel — warmth, craft, hospitality, precision — instead of feeling like a startup that happens to do AV.

Five things must be fixed before any redesign ships:

1. A broken `:root` brace in `stable-header.css` means spacing, radius, shadow, and transition tokens **do not cascade**.
2. `work-northshire-gala.html` references a `.JPG` as a `<video>` source. This is broken on a public page.
3. The homepage hero declares a `.mov` file as `type="video/mp4"`. Small, but visible to a discerning audit.
4. `work-hildene.html` canonicalizes to the homepage. That is an SEO self-harm on a flagship case study.
5. Asset filenames include spaces, leading spaces, "OLD," "2," UUIDs, and `Flythrough_Video_Generation_Request - Bennington Museum.mp4`. Premium brands do not have "_Generation_Request" in their portfolio URLs.

Five things must be *added* to make the brand unmistakable:

1. A single-source design-token layer that actually cascades, with premium typography that is not DM Serif + Inter.
2. **Named** testimonials everywhere. "Wedding Couple" and "Event Partner" must never appear on a premium site.
3. One signature interactive moment that only Equinox owns (proposed: *The Ledger* — a typographic running list of every named event ever produced).
4. A unified photography grade (one LUT), retiring all AI-generated hero imagery or regrading it to match.
5. A disciplined voice with a literal kill list and keep list, applied across meta, OG, case study attribution, and CTAs.

Two reimagined creative directions are proposed in Section 3. They are presented side by side so the choice is real, not rhetorical. The recommendation is **Direction A ("The Quiet Room") as primary brand, with one organ of Direction B ("The Control Room") — the run-of-show case-study format — transplanted into it.** The quiet room *with the control room visible through the doorway* is the true Category of One.

---

## 1. Current-State Audit

### 1.1 Visual system findings

**The live stylesheet is `stable-header.css`, not `production.css`.** Every HTML file at the repo root links `stable-header.css`. No HTML file links `production.css`. That makes `production.css` either legacy or a staging parallel — either way, a maintenance hazard.

**Canonical palette tokens (present in both sheets):**

| Token | Value | Intent |
|---|---|---|
| `--color-dark` | `#0A0A1A` | Deep navy canvas |
| `--color-light` | `#f5f5f5` | Off-white |
| `--color-primary` | `#FF6B35` | Hero orange |
| `--color-secondary` | `#FFD23F` | Gradient partner |
| `--color-accent` | `#4169E1` | Royal blue (literally) |
| `--color-charcoal` | `#2D3748` | Mid neutral |
| `--gradient-primary` | `linear-gradient(135deg, #FF6B35 0%, #FFD23F 100%)` | Used on H1, CTAs |

**Typography stack (loaded in [index.html](index.html) head):** DM Serif Display + Inter (400/500/700) + JetBrains Mono. This is arguably the single most common "credible + editorial + technical" pairing on the web in 2024–2026. It is not wrong. It is not *ownable*.

**The integrity problem.** Inside [stable-header.css](stable-header.css) the `--space-*`, `--radius-*`, `--shadow-*`, and `--transition-*` tokens live *outside* a `:root` block — they sit after a closed `body, …` rule with a stray `}` — so any rule calling `var(--space-lg)` on a page that only loads `stable-header.css` does not resolve as intended. The design system's aspiration exceeds its runtime. This is the single most important technical finding in this audit, because it means the "premium" feel is partly an accident of cascade rather than a designed result.

**Duplicate / conflicting CSS.** Inside [production.css](production.css), the `.section-title` rule exists twice (once plain, once with a `titleGlow` animation). `.btn::before` and `.btn-primary:hover` each appear twice with slightly different values. `@media (max-width: 768px)` blocks contradict each other on H1 sizing. The cascade wins, but the intent is muddled — the hallmark of iterative fixes stacked on top of each other rather than a single hand-tuned system.

**Two header implementations.** [index.html](index.html) and case-study pages embed a `header-stable` markup. [_header.html](_header.html) contains a **different** pattern (`header-v3`, centered list, hamburger with a different aria contract). [script.js](script.js) fetches `_header_STABLE.html` — not `_header.html` — when the placeholder is empty. So `_header.html` is effectively dead code that still ships.

**Two mobile menu code paths.** `script.js` contains `initHeaderFunctionality()` targeting `.main-header` / `nav-list` *and* a separate flow toggling `body.nav-open`. They cannot both be right.

**Two case-study orderings.** `script.js` defines a fixed `PROJECT_ORDER` array for prev/next navigation and a separate `caseStudyPages` list inside `createNextEventButton()`. The floating next/prev button and the bottom project strip can disagree.

**Premium effects in use:** glassmorphism header (`backdrop-filter: blur(10px)`), gradient text on H1 and `.section-title`, animated gradient overlay on `.hero::before` (keyframe `gradientShift`, 15s infinite), bento grid, subtle SVG grain on `.testimonial-section::before`, parallax via `background-attachment: fixed` and JS, infinite-scroll client logo marquee, hover card lift, shimmer on buttons.

**Honest read:** Every one of those effects is category-default for 2020–2023 dark-UI marketing sites. The execution is competent. The aesthetic is not ownable.

### 1.2 Content & voice findings

**The ten strongest lines on the site.** Each of these is defensible, ownable, and worth preserving through any redesign:

1. *"Event Production with Character."* — [index.html](index.html), hero H1
2. *"In an industry of black boxes and backstage crews, we bring a hospitality mindset to a tech-heavy world."* — [about.html](about.html)
3. *"The best AV is invisible. When everything works perfectly, nobody notices the technology — they only remember the message."* — [services-corporate.html](services-corporate.html)
4. *"The 'Invisible' Production Team."* — [services-weddings.html](services-weddings.html), H2
5. *"We hide the speakers behind floral arrangements, tape down every cable with color-matched gaff tape…"* — [services-weddings.html](services-weddings.html)
6. *"Crystal clear vows. Beautiful lighting. Zero stress."* — [services-weddings.html](services-weddings.html), hero sub
7. *"We understand the stakes of a live ask."* — [services-galas.html](services-galas.html)
8. *"Despite the rain that began during the event…"* — [work-equinox-wedding.html](work-equinox-wedding.html) (specificity is the whole game)
9. *"Cool kids, nice guys."* — [about.html](about.html)
10. *"Crafted in Manchester, VT and trusted at events around the world."* — [_footer.html](_footer.html)

**The ten weakest lines on the site.** Each reads as commodity category copy and erodes the premium positioning:

1. *"Professional audio visual production services for weddings, corporate events, and conferences…"* — homepage meta description
2. *"Transform your virtual meetings with professional audio visual techniques and equipment recommendations."* — insights teaser in [index.html](index.html)
3. *"Crystal-clear sound that captivates your audience, from intimate gatherings to large-scale events."* — [services.html](services.html)
4. *"High-definition visuals that bring your content to life with stunning clarity and impact."* — [services.html](services.html)
5. *"Why Choose Our Equipment?"* with bullets "Meticulously Maintained / Latest Technology" — [services.html](services.html)
6. *"Creating a magical atmosphere for a summer wedding at a historic Vermont venue."* — [work-hildene.html](work-hildene.html) (pleasant, generic)
7. *— Wedding Couple* (testimonial attribution) — [work-hildene.html](work-hildene.html)
8. *— Event Partner* (testimonial attribution) — [work-bennington-museum.html](work-bennington-museum.html)
9. *"View our event production work."* — case-study OG descriptions
10. *"Let's start the conversation. We're ready to listen and build a solution that fits your vision and your budget."* — repeated verbatim on [work.html](work.html) and [services.html](services.html)

**The pattern.** Voice is strongest in the verticals ([services-corporate.html](services-corporate.html), [services-weddings.html](services-weddings.html), [services-galas.html](services-galas.html)), on the about page, and on the deepest case study ([work-equinox-wedding.html](work-equinox-wedding.html)). Voice is weakest in three surfaces: the services hub (especially the rentals tab), the insights teaser copy, and the meta / OG / attribution layer — exactly the surfaces a time-pressed buyer sees first. The character-driven brand narrative is carried by the body copy; the spine of the site (meta, titles, CTAs, attribution) is still vendor-speak.

### 1.3 IA & UX findings

**Scale.** 51 HTML files in the repo: 1 home, 1 about, 4 services, 14 case studies (`work-*.html`), 13 articles (`article-*.html`), 9 SEO geo pages (`av-services-*.html`), utility pages, and partials.

**Primary nav.** Six items — Home, Our Work, Services, About, Insights, Contact. Tight and scannable. This is working.

**What is not working.**

- **Malformed article HTML.** [article-choose-av-partner.html](article-choose-av-partner.html) closes `</main>` and `</body>` **before** the main article body, which then appears after `</body>`. Invalid. Browsers recover. Audits do not.
- **Canonical inconsistency.** [work-hildene.html](work-hildene.html) canonicalizes to `https://www.equinoxaudiovisuals.com` (the homepage) rather than to itself. That tells Google "this page is a duplicate of home" and directly suppresses the ranking of a flagship case study.
- **No Regions hub.** Nine strong geo pages exist, but the footer links to only one of them (Manchester). Users who search "Keene NH AV company" land well; users who browse the site cannot find that Equinox serves Keene.
- **Nav label drift.** Header says "Contact Us." Footer says "Contact." Minor. Visible.
- **Case-study template drift.** Most case studies follow Vision → Solution → Sidebar → Gallery → Testimonial, but some use video heroes and some use inline-styled image heroes. Depth varies from long-form ([work-equinox-wedding.html](work-equinox-wedding.html)) to thin ([work-hildene.html](work-hildene.html)).
- **Console noise.** [script.js](script.js) contains `console.log` statements in the mobile menu and sticky action bar paths. Minor. Not "quiet luxury."
- **PWA residue.** [manifest.json](manifest.json) and [service-worker.js](service-worker.js) exist; `script.js` contains a comment indicating PWA features were removed. Either commit or retire.

**What is working.**

- Contact is a four-step HubSpot qualifier. Good lead quality for a premium agency.
- The event planner checklist is a substantive gated asset with a real PDF.
- A sticky mobile action bar surfaces the two highest-value CTAs on scroll, dismissible with localStorage persistence.
- The insights category filter and article prev/next controls are thoughtful.

### 1.4 Media & art direction findings

**Inventory.** 131 images (`.jpg` / `.JPG` / `.jpeg` / `.webp` / `.png` / `.svg`) and 14 video files (`.mp4` / `.mov` / `.MOV`) under `assets/`, including an `Old/` folder and an `Other Options/` folder.

**The filename liability.** Premium brands are recognizable by what users *never* see. On this site, users see — in the network tab, in "Save Image As," in share cards:

- Spaces in production asset paths: `Arlington Common - Flythrough.mp4`, `Northshire Day School - September 2025 - 01.JPG`, `kimpton taconic.png`, `bennington museum logo.webp`.
- Leading spaces in filenames: ` parallax-tech.jpg`, ` parallax-tech 2.jpg`.
- Versioning artifacts: `page-hero-background 2.jpg`, `story-team-home-new 2.jpg`, `insights-engaging-presentation old.jpg`, `insights-small-meetings OLD.jpg`.
- Tool-export names left live: `Flythrough_Video_Generation_Request - Bennington Museum.mp4`, `Venue_Fly_Through_Video_Generation.mp4`.
- UUIDs under `Other Options/`.
- Inconsistent extensions: `.JPG` vs `.jpg`, one `BenningtonMuseumGala2024 - 04.jpg` among `.JPG` siblings.

**The broken video source.**

```html
<source src="assets/Northshire Day School - September 2025 - 01.JPG" type="video/mp4"/>
```

A still image is being asked to play as an MP4. Location: [work-northshire-gala.html](work-northshire-gala.html).

**The MIME mismatch.**

```html
<video id="hero-video" ...>
    <source src="assets/Equinox AV Background and Logo 720p.mov" type="video/mp4">
</video>
```

A `.mov` declared as `video/mp4`. Location: [index.html](index.html). No `poster` attribute. No `poster` attribute exists anywhere in any HTML file in the repository.

**The logo bar.** Ten client logos in three formats (WEBP, PNG, JPEG) with four different naming conventions. Two SVCC marks (round + landscape) exist in `assets/`. Both NDS and `NDS-Logo.png` exist. A premium brand ships one mark per client, normalized clear space, normalized export.

**The art direction split.** [PHOTO_IMPLEMENTATION_GUIDE.md](PHOTO_IMPLEMENTATION_GUIDE.md) prescribes warm nostalgic film, faded orange / cream / dark brown, golden-hour bias. [AI_IMAGE_PROMPTS.md](AI_IMAGE_PROMPTS.md) prescribes cool cinematic blue and gold with dramatic overlays. The live site contains both grades side by side. Without a single LUT, the photography never reads as one studio.

---

## 2. The Strategic Idea: Character is the Category

The AV industry's dominant aesthetic is **black road cases, electric blue LEDs, and chromed flight rack photography.** Every competitor in the vertical signals the same thing: *we have gear, we have trucks, we have crew.* The category visual vocabulary is commodity.

Equinox's brand claim is different: *Character.* Hospitality. The invisible team. Gaff tape color-matched to the floral arrangements. Cool kids, nice guys. This is not a product claim. It is a **temperament** claim. It is the single most ownable positioning in the vertical because no competitor is making it.

A temperament claim must be expressed by a temperament, not by a logo. That means the site should not look like the AV category; it should look like the category Equinox *actually* competes with — boutique hospitality brands, editorial wedding houses, Michelin restaurant design systems, and the better New England cultural institutions (Hildene, Shelburne, the Clark). Those peers are where Equinox's clients already live, aesthetically.

So the strategic design instruction is this:

> **Build the site that the event planner at Hildene or the CMO of a $500M non-profit would recognize as one of their own** — not the site that another AV vendor would recognize as competent.

Everything that follows serves that single instruction.

---

## 3. Two Reimagined Creative Directions

Each direction is presented at equal depth. Direction A is the recommended primary. Direction B is included both as a genuine alternative and because one of its organs — the run-of-show case study format — should be transplanted into the final system regardless of which direction wins.

### Direction A — "The Quiet Room"

*Editorial · Hospitality · New England craft*

**Brand idea.** The calm before and during the show. The site feels like the green room of a great venue — warm wood, soft light, a hand-laid run sheet on the counter, reassurance you can lean against. It positions Equinox against the loud, chromed AV category by refusing to compete on volume. Audiences it lands for: weddings, galas, museums, resorts, private foundations, anything involving hospitality.

**Mood board references (to brief a designer with).** The Standard's editorial typography. Aesop's product pages (restrained, generous, confident). Kinfolk magazine at its editorial peak. Shinola's case study photography. The Four Seasons in print. Blackbird Studios and other New England craft portfolios. The common thread: restraint as luxury.

**Palette.**

| Role | Token | Hex |
|---|---|---|
| Canvas | `--ink` | `#121212` |
| Paper | `--bone` | `#F4EFE6` |
| Warm neutral | `--linen` | `#E6DFD1` |
| Signal (single accent) | `--ember` | `#C2582A` |
| Metallic | `--brass` | `#B8985A` |
| Utility dark | `--slate` | `#2A2A2A` |

Notably absent: any gradient, any electric blue, any glass, any orange→yellow transition. Ember replaces the current `#FF6B35`/`#FFD23F` gradient with one confident warm tone. Brass is used sparingly — a hairline rule under an H1, a single underline on a link, a logotype flourish. Nothing glows.

**Typography.**

- **Display:** GT Sectra (first choice), Editorial New (second), Libre Caslon Text self-hosted (budget fallback). A serif with a blade — not DM Serif's pillowy curves.
- **Body:** Söhne (first choice), Inter (budget fallback but set at 17–19px with 1.6–1.75 leading instead of 16/1.7).
- **Mono:** GT America Mono for captions, dates, and metadata. Used sparingly. It reads as a *byline*, not a gimmick.

**Motion language.**

- Default easing `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- Nothing shimmers. Nothing has a gradient overlay that animates infinitely.
- Page transitions are cross-fades, not slides. Durations: 160ms for UI, 320ms for component state, 640ms for section reveal.
- Videos play once and hold on a last frame. They do not loop restlessly. Autoplay is opt-in per context; on a case study hero, the user clicks to play.
- `prefers-reduced-motion` suppresses the signature cursor trail (see below) and caps any fade-in to 120ms.

**Photography direction.**

- One LUT across the entire library. Warm midtones, low saturation in greens and blues, protected skin tones, soft highlight rolloff.
- Subject hierarchy: **faces first** (guests, hosts, speakers mid-expression), **hands second** (hands on faders, hands coiling cable, hands tearing gaff tape), **rooms third** (venue in ambient light, not gear-forward), **gear last and rarely**.
- No abstract particle shots. No stock. No AI-generated imagery on live pages unless regraded to match.
- Every case study delivers exactly: one signature still (16:9 or 4:5 mobile), three supporting stills, one 15-second silent clip.

**Signature moments (three, budgeted).**

1. **The Ledger.** A typographic running list of every named event Equinox has ever produced — venue, date, one-line description. Set in body serif at 18px on linen. It scrolls horizontally on the homepage at its own pace, paused on hover. No logos. No photos. Just names and dates. On a premium brand, the proof *is* the sheer specificity of the inventory. Implementation is trivial CSS; the work is editorial (maintaining the list).
2. **Single-still case study openers.** Every case study opens with exactly one photograph and one sentence. Not a gallery, not a hero video, not a grid. One image. One sentence. The user earns the rest by scrolling.
3. **Hairline cursor trail.** Desktop only, respecting reduced-motion. A 1px ember line that follows the cursor for 640ms and fades. It signals craftsmanship the way a fountain pen does. Cost: ~40 lines of JS.

**Signature components.**

- **Nav.** A horizontal hairline in brass above the nav. Mono eyebrow on the left reading *Est. 2004 · Manchester, Vermont*. Six-item nav center-aligned. One CTA right (*Start a project*, not "Get a Quote"). No background fill. No glass.
- **Buttons.** Two variants only. *Primary* = solid ink on bone with 4px radius and no shadow. *Ghost* = ink hairline underline, no fill. Zero shimmer. Zero gradient.
- **Cards.** Image wells have no border radius. Surrounding chrome has 4px. One shadow token (subtle, long). No hover lift. On hover, the image scales 1.02 over 640ms. Nothing else changes. Nothing bounces.
- **Testimonials.** Set as editorial pull-quotes — large display serif, measured line length, **named attribution** with role, venue, and date in mono. No card. No photo. No slider. One testimonial per section; homepage rotates three total, not six.
- **Footer.** Letterpress-style "EQ" bug (not the full wordmark) at 40% opacity. Four columns. A monospace *spec line* at the bottom: *v2.0 · Last show produced: Bennington Museum · April 19, 2026*. Confident, not cute.

**A sample hero page (homepage, shot by shot).**

```
[SCREEN 1 — above the fold]

  Est. 2004 · Manchester, Vermont                    Start a project

  Work    Services    About    Insights    Regions

  ─────────────────────────────────────────────────────────────

  [Full-bleed still photograph. A grandmother at a microphone
  mid-sentence at a Hildene volunteer dinner. Warm tungsten light.
  Faces in the foreground. The speakers are behind floral
  arrangements; you cannot see them. That is the point.]

  Event production
  with character.

  [No CTA above the fold. The scroll is the CTA.]
```

```
[SCREEN 2 — The Ledger]

  THE LEDGER                                     2004 — present

  Bennington Museum · Apr 2026 · Vanish screening
  Hildene · Apr 2026 · Volunteer appreciation dinner
  SVCC · Jan 2026 · Annual meeting · Taconic
  Equinox Resort · Aug 2025 · Tent wedding · 120 guests
  Arlington Common · Jul 2025 · FlyFest · 7 days
  The Crooked Ram · Aug 2025 · Wedding
  Northshire Day School · Sep 2025 · Fall gala
  Kimpton Taconic · 2024–2025 · Multi-year
  Bennington Museum · 2024 · Summer celebration
  Hildene · 2023 · Wedding · Lincoln Hall
  …

  [Scrolls horizontally at 40px/second. Pauses on hover.
  Continues forever. This is the proof section.]
```

```
[SCREEN 3 — One story, told short]

  SOMEWHERE IN VERMONT, LAST AUGUST.

  Rain started ten minutes before the ceremony. A hundred
  and twenty guests under a tent. Power run off a single
  generator. The couple still had a first dance.

                                        → Read the full story
```

```
[SCREEN 4 — Named testimonial, editorial]

  "Whether it's the Lincoln Symposium or a wedding
  reception, Equinox brings a hospitality mindset
  that puts everyone at ease."

  — Dr. Seth Bongartz, President, Hildene
    The Lincoln Family Home · Manchester, VT
```

```
[SCREEN 5 — Quiet CTA]

  If your event deserves a team
  that treats it like theirs.

  → Start a project
```

No bento grid. No infinite logo marquee. No testimonial slider. No gradient text. No glass. No shimmer. No parallax. The entire homepage is a short editorial piece.

**A sample case study (Equinox Tent Wedding, reformatted for Direction A).**

```
[Top of page]

  CASE · 047                          Equinox Resort · August 2025

  [One photograph: bride and groom during first dance under
   tent. Low light. Rain visible on canvas above. Color-matched
   gaff tape runs along the dance floor edge, nearly invisible.]

  One hundred and twenty guests. A tent.
  Rain that arrived ten minutes before
  the ceremony.

  ─────────────────────────────────────────────────────────────

  [Body copy, 62ch measure, 18px serif]

  The couple had chosen an outdoor ceremony at the Equinox
  Resort for reasons that mattered to them — the view, the
  light, the vows they'd written. Our job was not to move the
  event indoors when the weather turned. Our job was to make
  sure moving indoors was never necessary.

  [etc.]

  ─────────────────────────────────────────────────────────────

  SIDEBAR IN MONO, RIGHT COLUMN

  Client        Private couple (on file)
  Planner       [name], [firm]
  Venue         Equinox Resort, Manchester, VT
  Date          August 16, 2025
  Guest count   120
  Duration      10 hours on-site
  Services      Audio · Lighting · Power · Stage
  Weather       Rain, 18:40–21:10
  Generator     Single, redundant tie-in
  Outcome       Zero cuts. Zero re-runs. First dance at 20:12.

  ─────────────────────────────────────────────────────────────

  [Three supporting stills. No lightbox chrome. Click to
   enlarge in-place.]

  ─────────────────────────────────────────────────────────────

  [Named testimonial, display serif.]

  "It rained. We didn't notice. That was
  the whole job and they did it."

  — [Planner name], [Planner firm]

  ─────────────────────────────────────────────────────────────

  NEXT CASE · 048
  Hildene · Volunteer Appreciation · 2025            →
```

Compare that to the current case study template — hero video, Vision heading, Solution heading, sidebar, gallery grid, generic testimonial, back-to-work button. The Direction A template carries more character with fewer elements.

**A sample copy rewrite (homepage meta, for Direction A).**

Current:
> *Equinox Audio Visuals | Professional Event Production. Professional audio visual production services for weddings, corporate events, and conferences. Expert AV team based in Manchester, Vermont. 20+ years experience.*

Rewritten:
> *Equinox Audio Visuals — Event production with character. Since 2004, we've produced weddings, galas, and conferences across New England and beyond. The best AV is invisible; we make sure of it.*

The rewrite keeps SEO ballast (weddings, galas, conferences, New England, since 2004) while sounding like the brand rather than like the category.

**Risks for Direction A.**

- Removing the hero video may feel like a step backward to stakeholders who associate "premium" with "big motion." Mitigation: pilot the still hero on one case study first, A/B against the current video hero, measure dwell and scroll depth.
- The editorial serif may feel "less tech-forward" to corporate buyers. Mitigation: the run-of-show format borrowed from Direction B handles the technical signal where it matters.
- The signature still photography requires real photo production. Mitigation: the existing library (FlyFest, Hildene, Bennington, Equinox Tent, SVCC) is already strong enough for launch; new photography becomes a quarterly discipline.

---

### Direction B — "The Control Room"

*Technical precision · Broadcast-grade · Agency confidence*

**Brand idea.** The site where the show is actually run. It sells the craft *behind* the invisibility: run-of-show, redundancy, network diagrams, timecode, cue sheets. It is the opposite of most AV sites, which sell gear; this site sells *operation*. Audience it lands for: corporate, broadcast, conferences, fundraising galas with a live ask, any buyer for whom "it cannot fail" is the first requirement.

**Mood board references.** Bloomberg Terminal typography. Figma's interface discipline. Linear.app's motion and density. Industrial Light & Magic's case study pages. Stripe Press. The common thread: confident technical density as a luxury signal.

**Palette.**

| Role | Token | Hex |
|---|---|---|
| Canvas | `--console` | `#0B0B0C` |
| Surface | `--panel` | `#141416` |
| Paper | `--paper` | `#EDEDEA` |
| Signal (primary) | `--scope` | `#9FE870` |
| Signal (live) | `--cable-red` | `#E0341B` |
| Utility | `--graphite` | `#2A2A2E` |

Scope green is the signature color — it reads as oscilloscope, VU meter, and terminal prompt simultaneously. Cable red is reserved for *live* states: a show running, a CTA that has consequence. No orange, no royal blue, no gradient.

**Typography.**

- **Display:** GT Alpina (contemporary serif with backbone) or Söhne Breit (industrial sans). Use one, not both.
- **UI:** Söhne Mono or JetBrains Mono, used *structurally* — nav, metadata, timestamps, sidebar data, captions, input ticks. Not a polite eyebrow; the spine of the interface.
- **Body:** Söhne at 16–17px, measured.

**Motion language.**

- Snap, not glide. 120ms ease-out for UI state. 400ms for section reveals. No `infinite` animations anywhere.
- A signal motif — one horizontal hairline in scope green that traces the cursor as a thin VU meter across the bottom of the viewport. It moves when the user moves.
- Live timestamps in the ledger animate *once* on enter (the last digit ticks up like a timecode window) and then hold.
- Every number on the page is in mono and aligned on the decimal.

**Photography direction.**

- Half editorial documentary (same subject hierarchy as Direction A — faces, hands, rooms).
- Half technical studio — close-ups of patchbays, console faders, fiber runs, labeled gaff tape, cue sheets, whiteboard run-of-show. These are graded cool but **not blue-purple**. Desaturated, protected highlights.
- No stock. No AI.

**Signature moments (four).**

1. **The Patch Bay.** The homepage proof section is a 24-channel patch bay grid. Each "channel" is a case study, rendered as a numbered patch point with a label (venue + role: *A1 / Lighting / Comms / Stream*). On hover, the channel illuminates scope green and reveals the full case. It is exactly the proof grid a corporate buyer expects to see from a broadcast shop.
2. **Run-of-show case studies.** Every case opens not with a photograph, but with a real redacted timecode column on the left:
   ```
   16:58:00   Doors
   17:00:00   Ceremony cue · Music in
   17:04:00   Vows · Lav check passed
   17:12:00   Recessional · Lights to house
   17:30:00   Cocktail · Wireless handoff
   19:00:00   Reception cue · Stage set
   20:12:00   First dance
   ```
   Photos sit to the right, scrolling while the timecode column pins. This is *the* signature Direction B interaction and the single organ worth transplanting into Direction A.
3. **Live dot.** A small scope-green pulse in the header that reads *On-site today: Bennington Museum* when a show is running; otherwise dark. Requires a tiny JSON endpoint the team updates manually.
4. **Spec sheet footer.** The footer is a technical specimen — site version, uptime, last show produced, geographic coverage — all in mono. It signals *we know what operational discipline looks like and we apply it to our own site.*

**A sample hero page (homepage, Direction B).**

```
[SCREEN 1 — above the fold]

  EQUINOX AUDIO VISUALS · EST. 2004           ● On-site today: Bennington Museum

  [Nav in mono: WORK  SERVICES  ABOUT  INSIGHTS  REGIONS        START A PROJECT]

  ─────────────────────────────────────────────────────────────

  [Large display type, left-aligned, no image.]

  The best AV
  is invisible.

  [Beneath it, a mono ticker, right-aligned.]

  LAST 5 SHOWS PRODUCED
  2026-04-19  Bennington Museum       Vanish screening
  2026-04-12  Hildene                 Volunteer dinner
  2026-03-28  Kimpton Taconic         Corporate offsite
  2026-03-15  SVCC                    Women in leadership
  2026-02-09  Northshire Day School   Winter gala
```

```
[SCREEN 2 — THE PATCH BAY]

  PROOF · 24 CHANNELS

  ┌──────────┬──────────┬──────────┬──────────┬──────────┬──────────┐
  │ CH 01    │ CH 02    │ CH 03    │ CH 04    │ CH 05    │ CH 06    │
  │ Equinox  │ Hildene  │ SVCC     │ Bennington│ Arlington│ Crooked  │
  │ Resort   │          │ Taconic  │ Museum   │ Common   │ Ram      │
  │ A1·LX·PA │ A1·LX    │ A1·PA·REC│ A1·LX·PROJ│ A1·LX·GEN│ A1·LX    │
  └──────────┴──────────┴──────────┴──────────┴──────────┴──────────┘
  [… 18 more channels …]

  [Hover illuminates a channel scope-green.]
```

**Risks for Direction B.**

- Can feel cold or exclusionary to weddings and private celebration buyers. Mitigation: a weddings sub-brand surface softens the canvas to paper for those pages only. (This mitigation is complex and imperfect, which is one reason Direction A is recommended.)
- Requires real editorial discipline — a single out-of-place stock photo or gradient ruins it. Higher maintenance cost.
- Scope green on console black is striking but polarizing in RFP screenshots. Mitigation: cable red and scope green both retreat to utility-only on print exports.

---

### The hybrid recommendation

**Primary: Direction A (The Quiet Room).** It extends the brand's strongest existing copy — *hospitality*, *character*, *invisible* — into a look no other AV vendor owns. It is lower risk for the wedding and gala audience that currently drives the business. It is ownable.

**Transplant from Direction B: the run-of-show case study format.** Corporate buyers are a significant part of the business and they need the technical signal. The run-of-show pinned timecode column on case studies gives them that signal without dragging the whole site into the console aesthetic. The quiet room with the control room visible through the doorway.

**What the hybrid explicitly does *not* do.**

- Does not keep the current gradient + glass + shimmer + bento recipe "for familiarity."
- Does not add a new brand color. Ember is the only accent.
- Does not add an awards strip, press strip, or logo wall beyond the existing (cleaned-up) client logo bar.
- Does not ship two versions of the site, one warm and one cool. One brand. One voice.

---

## 4. Design System Blueprint

Written so a designer or developer can start Monday. Specifies the hybrid direction.

### 4.1 Tokens (single source of truth)

```css
:root {
  /* Palette */
  --ink: #121212;
  --slate: #2A2A2A;
  --bone: #F4EFE6;
  --linen: #E6DFD1;
  --ember: #C2582A;
  --brass: #B8985A;
  --scope: #9FE870;      /* reserved for run-of-show / live indicators */

  /* Type */
  --font-display: "GT Sectra", "Editorial New", "Libre Caslon Text",
                  Georgia, serif;
  --font-body: "Söhne", "Inter", -apple-system, system-ui, sans-serif;
  --font-mono: "GT America Mono", "JetBrains Mono",
               ui-monospace, "SF Mono", monospace;

  /* Scale */
  --scale-1: 0.8125rem;   /* 13px · mono metadata */
  --scale-2: 1rem;        /* 16px · UI */
  --scale-3: 1.125rem;    /* 18px · body */
  --scale-4: 1.5rem;      /* 24px · subhead */
  --scale-5: 2.25rem;     /* 36px · H3 */
  --scale-6: 3.5rem;      /* 56px · H2 */
  --scale-7: clamp(3.5rem, 7vw, 6rem); /* H1 display */

  /* Space */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 40px;
  --space-5: 64px;
  --space-6: 96px;
  --space-7: 160px;

  /* Layout */
  --measure: 62ch;
  --container: 1240px;

  /* Motion */
  --ease: cubic-bezier(0.2, 0.8, 0.2, 1);
  --dur-1: 160ms;
  --dur-2: 320ms;
  --dur-3: 640ms;

  /* Elevation */
  --shadow-1: 0 1px 2px rgba(18, 18, 18, 0.04),
              0 8px 24px rgba(18, 18, 18, 0.06);
  --radius-1: 4px;
}
```

**Explicit deprecations.** `--gradient-primary`, `--gradient-accent`, `--gradient-overlay`, `--gradient-dark`, `--color-glass`, `--color-glass-border`, `--color-primary` (orange), `--color-secondary` (yellow), `--color-accent` (royal blue). Every usage is audited and replaced. No gradient text, no glassmorphism, no shimmer, no infinite keyframe animations.

### 4.2 Typography rules

- H1: display serif, line-height 1.0, letter-spacing `-0.02em`, `text-wrap: balance`.
- H2: display serif, line-height 1.1, letter-spacing `-0.01em`, `text-wrap: balance`.
- Body: body sans, 18px, line-height 1.65, measure capped at `var(--measure)`.
- Mono: used only for metadata, timecode, captions, technical specs, and numeric alignment. Mono is never a style flourish.
- Every number on the page is mono and tabular.

### 4.3 Components (the six that matter)

| Component | Definition |
|---|---|
| **Button** | Two variants. *Primary*: solid ink on bone, 4px radius, no shadow, no shimmer, no gradient. *Ghost*: ink color with a 1px ink hairline *underline* (not border), no fill. Hover = 160ms color shift to ember. |
| **Card** | No radius on image wells; 4px on surrounding chrome. One shadow. No hover lift. Image scales 1.02 over 640ms on hover. |
| **Case study hero** | Full-bleed still image. Display-serif sentence beneath. Mono-timecode sidebar (from Direction B, transplanted). No video hero by default. |
| **Nav** | Brass hairline above. Mono eyebrow left (*Est. 2004 · Manchester, Vermont*). Six-item nav center. One CTA right. No fill. No glass. |
| **Testimonial** | Editorial pull-quote, display serif, named attribution (person, role, venue, date) in mono. No card. No photo. No slider. |
| **Footer** | Letterpress "EQ" bug at 40% opacity. Four columns (Navigate, Services, Regions, Start a Project). Mono spec line at the bottom. |

### 4.4 Signature interactions (three, budgeted)

1. **The Ledger** — homepage horizontal marquee of named events. CSS-only, paused on hover, no gradient mask.
2. **Run-of-show pinned column** on case studies — mono timecode column on the right pins while images on the left scroll. `position: sticky` with a max-scroll guard.
3. **Hairline cursor trail** — desktop only, respecting `prefers-reduced-motion`. One 1px ember line follows the cursor and fades over 640ms. ~40 lines of vanilla JS.

Everything else retired: parallax, shimmer, testimonial auto-advance, infinite logo marquee, glass header, gradient text, gradient CTA, gradient section titles, bento grid, hover-lift, video-on-scroll auto-play.

### 4.5 Photography & video direction

- One LUT for the entire site. Developed once, applied to everything in `assets/`. Warm midtones, desaturated greens and blues, protected skin tones.
- `poster=` required on every `<video>`. The poster is a graded still, not an auto-extracted first frame.
- AI-generated imagery either retired or regraded to match the LUT. No exceptions. [AI_IMAGE_PROMPTS.md](AI_IMAGE_PROMPTS.md) and [GEMINI_IMAGE_PROMPTS.md](GEMINI_IMAGE_PROMPTS.md) are archived or rewritten to match [PHOTO_IMPLEMENTATION_GUIDE.md](PHOTO_IMPLEMENTATION_GUIDE.md)'s warm direction.
- Every case study ships exactly: one signature still (16:9 desktop / 4:5 mobile), three supporting stills, one 15-second silent clip with a poster. Flythroughs are demoted from hero slots to a secondary gallery position; they are impressive but they are *not* the story.

### 4.6 Voice & copy principles

**Keep list** (always allowed, always on-brand):

- *Character.*
- *Hospitality mindset.*
- *Invisible.*
- *Cool kids, nice guys.*
- *The best AV is invisible.*
- *Hands on the console.*
- *Event Production with Character.*
- Specific numerics: *120 guests*, *22 years*, *multi-year partnership*, *zero cuts*.
- Named venues: *Hildene · Equinox Resort · Bennington Museum · SVCC · Arlington Common · Kimpton Taconic · Crooked Ram · Northshire Day School.*

**Kill list** (banned across the site, including meta, OG, and attribution):

- *Crystal-clear.*
- *Transform / transformation.*
- *Discover.*
- *Seamless.*
- *Unforgettable.*
- *Stunning clarity.*
- *Captivates your audience.*
- *Professional audio visual services* (only as necessary SEO ballast; never in body copy).
- *Get a Quote* (replaced everywhere with *Start a project*).
- *Wedding Couple* and *Event Partner* as testimonial attributions. Every testimonial is named or it is deleted.
- *Let's start the conversation. We're ready to listen and build a solution that fits your vision and your budget.* (This line is banned.)

**Copy discipline:**

- One claim per page. No page has more than one headline promise.
- Mono for metrics. Always.
- Attribution discipline: *Name · Role · Venue · Date.* No "Event Partner."
- Meta and OG titles are rewritten to carry brand voice, not category keywords only.

---

## 5. IA & UX Reimagining

- **Primary nav reduced to five:** Work · Services · About · Insights · Start a Project. The logo becomes the Home link. Label consistency enforced (header and footer match).
- **New Regions hub.** A single `regions.html` page lists all nine geo markets (Manchester, Bennington, Dorset, Burlington, Brattleboro, Albany, Saratoga Springs, Keene, Berkshires) with linked detail pages. Promoted to the footer, not the top nav. Fixes the "only Manchester is discoverable" gap.
- **Case study template unified.** Every case uses the same skeleton: signature still → one-sentence brief → run-of-show sidebar → body narrative → gallery → named testimonial → next case. Single canonical strategy (each case canonicalizes to itself). Single `PROJECT_ORDER` source of truth.
- **Article template unified.** The malformed HTML in [article-choose-av-partner.html](article-choose-av-partner.html) is fixed. All articles ship with: byline, reading time in mono, one hero image, body at 62ch measure, named author block, related articles.
- **Contact sharpened.** The four-step HubSpot form is kept. A one-sentence promise is added above it: *You'll hear from us within 24 hours. If your event is within 14 days, within 2.* Phone and email are surfaced as a secondary path.
- **Thank-you page made a moment.** Currently a redirect target. Replaced with: a quiet still image, a signed note from Doug in display serif, an expected timeline, one link back to work.
- **Insights teaser copy rewritten.** The "Transform your virtual meetings…" style is retired. Teasers match article first paragraphs.

---

## 6. Technical Hygiene (non-negotiable)

These are shipped **before** any visual redesign. They remove "amateur" signals invisibly and buy trust for the larger project.

1. Fix the `:root` brace error in [stable-header.css](stable-header.css). Confirm `--space-*`, `--radius-*`, `--shadow-*`, `--transition-*` tokens actually cascade on every page.
2. Consolidate to one stylesheet. Retire [production.css](production.css) or merge it in; do not ship both.
3. Fix the `<video><source>` in [work-northshire-gala.html](work-northshire-gala.html) currently pointing at a `.JPG`.
4. Fix the `type="video/mp4"` declaration on the `.mov` hero in [index.html](index.html). Either re-encode to MP4 (recommended — universal support, smaller) or declare `type="video/quicktime"`.
5. Add a `poster` attribute to every `<video>` on every page.
6. Fix the homepage canonical on [work-hildene.html](work-hildene.html) (currently points to homepage) and audit every other case study for the same error.
7. Resolve the two headers: retire [_header.html](_header.html) *or* `_header_STABLE.html`, not both.
8. Resolve the two mobile-menu code paths in [script.js](script.js).
9. Resolve the two case-study navigation orders (`PROJECT_ORDER` vs. `caseStudyPages`).
10. Fix the malformed HTML in [article-choose-av-partner.html](article-choose-av-partner.html). Audit all 13 articles for the same pattern.
11. Remove `console.log` statements from [script.js](script.js).
12. Either commit to PWA (register the service worker, wire the manifest) or remove [manifest.json](manifest.json) and [service-worker.js](service-worker.js). Residual files are a quality signal.
13. Rename `assets/` files: no spaces, no leading spaces, no `OLD`, no ` 2`, no UUIDs, no `_Generation_Request`. Move `Old/` and `Other Options/` out of the deployed path. Add `_redirects` entries for any publicly-linked paths that change.
14. Retire duplicate CSS rules (`.section-title` twice, `.btn::before` twice, contradictory `@media (max-width: 768px)` blocks).

---

## 7. Phased Roadmap

| Phase | Duration | Effort | Impact | Description |
|---|---|---|---|---|
| **0 — Hygiene** | 1 week | Low | High trust | All of Section 6. No visual redesign. Ship invisibly. |
| **1 — Voice & Proof** | 2 weeks | Low | High | Rewrite meta/OG across all 51 pages. Named testimonials everywhere. Metrics strip. New CTA vocabulary. Kill list enforced. No design changes. |
| **2 — Design System v2** | 4–6 weeks | Medium | Transformative | Implement Section 4 tokens. Retire gradients, glass, shimmer. Replace typography. Ship on homepage + [work-equinox-wedding.html](work-equinox-wedding.html) as pilot. |
| **3 — Signature Moments** | 3–4 weeks | Medium | Identity-making | Build The Ledger, run-of-show pinned column, hairline cursor trail. Regrade photography to one LUT. Rename and reorganize `assets/`. |
| **4 — IA & Conversion** | 2 weeks | Medium | SEO + UX | Regions hub. Unified case-study and article templates. Nav reduction. Thank-you page as a moment. |
| **5 — Polish & Kill** | 1 week | Low | Maintenance | Retire residual PWA if unused. Remove dead CSS. Audit Lighthouse, accessibility, and color contrast. Lock the system. |

**Total: 13–16 weeks.** First visible "wow" ships at the end of Phase 2. The brand is fully realized at the end of Phase 3. The system is lockable at the end of Phase 5.

**Parallelization note.** Phases 1 and 2 can run in parallel if copywriting and design are separate tracks. Phase 3 depends on Phase 2. Phase 4 can start mid-Phase 2.

---

## 8. Risks, Trade-offs, and a Do-Not List

**Risks.**

- *Stakeholder discomfort with the still hero.* The hero video feels premium to the team. Mitigation: pilot the still hero on one case study, A/B against the current video hero, measure dwell, scroll depth, and contact-form starts.
- *Corporate buyers miss the technical signal.* Mitigation: the run-of-show case-study format carries the signal.
- *Premium typography licensing.* GT Sectra and Söhne are paid faces. Budget: approximately $900–$2,400 one-time for web licenses depending on scope. Fallbacks: Libre Caslon Text and Inter are free and credible.
- *Photography production cost.* A one-time LUT development is inexpensive. A signature still per case study is achievable from the existing library; ongoing photography is the real investment and should be treated as a quarterly discipline, not a one-time spend.
- *Velocity regression.* This is a 13–16 week program. A stakeholder who wants to ship something in 2 weeks should be pointed to Phases 0 and 1 as the interim win.

**Do not.**

- Do not introduce a new brand color. Ember is the only accent.
- Do not add another gradient anywhere, for any reason.
- Do not add an awards strip, press strip, or "as seen in" block.
- Do not add testimonial cards. Testimonials are editorial pull-quotes or they are deleted.
- Do not resurrect DM Serif + Inter + JetBrains Mono as the final stack. The pairing is the category default.
- Do not ship without renaming `assets/`. The filenames are the most visible amateur signal on the site.
- Do not keep "Wedding Couple" or "Event Partner" as testimonial attributions. Every testimonial is named.

---

## 9. Appendix — Citation Index

Line-level references used in this audit:

- Broken `:root` token scoping: [stable-header.css](stable-header.css) lines ~1–81.
- Duplicate `.section-title` and `.btn::before` rules: [production.css](production.css) lines ~204–213 vs. ~575–588 and ~374–413 vs. ~400–413.
- Contradictory `@media (max-width: 768px)` H1 sizing: [production.css](production.css) ~3342–3430.
- Hero video MIME mismatch and missing poster: [index.html](index.html) lines 99–110.
- JPG referenced as video source: [work-northshire-gala.html](work-northshire-gala.html).
- Homepage canonical on a case study: [work-hildene.html](work-hildene.html) line 21.
- Malformed article HTML: [article-choose-av-partner.html](article-choose-av-partner.html) lines ~62–94.
- Two mobile menu implementations: [script.js](script.js) lines 99–110 vs. 286–327.
- Two case-study orderings: [script.js](script.js) lines 4–19 vs. 665–672.
- Anonymous testimonial attributions: [work-hildene.html](work-hildene.html) line 118–120 ("Wedding Couple"), [work-bennington-museum.html](work-bennington-museum.html) line 118–120 ("Event Partner").
- Repeated CTA line: [work.html](work.html) line 273–274, [services.html](services.html) line 345–346.
- PWA residue: [script.js](script.js) ~1780 note vs. [manifest.json](manifest.json) and [service-worker.js](service-worker.js).
- Client logo format inconsistency: `assets/` — `bennington museum logo.webp`, `kimpton taconic.png`, `SVCC-logo-Round-v1.webp`, `NDS-Logo.png`, `theInnatManchester.webp`, etc.
- Filename liabilities: `assets/Flythrough_Video_Generation_Request - Bennington Museum.mp4`, `assets/ parallax-tech.jpg`, `assets/insights-small-meetings OLD.jpg`, `assets/Other Options/193eabaa-6b21-4c0f-b912-68fb6efe1d38.jpg`.

**Internal project docs consulted:** [CONTENT_AUDIT_REPORT.md](CONTENT_AUDIT_REPORT.md), [CONTENT_SCRUB_COMPLETE.md](CONTENT_SCRUB_COMPLETE.md), [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md), [PHOTO_IMPLEMENTATION_GUIDE.md](PHOTO_IMPLEMENTATION_GUIDE.md), [HERO_IMAGE_PROMPTS.md](HERO_IMAGE_PROMPTS.md), [AI_IMAGE_PROMPTS.md](AI_IMAGE_PROMPTS.md), [BENTO_GRID_IMPLEMENTATION.md](BENTO_GRID_IMPLEMENTATION.md), [CLIENT_LOGO_BAR_IMPLEMENTATION.md](CLIENT_LOGO_BAR_IMPLEMENTATION.md), [SEO_STANDARDS.md](SEO_STANDARDS.md).

---

*End of report. This document is intentionally read-only and makes no changes to the codebase. All recommendations are provisional and intended as the basis for a creative-direction conversation. The next step is a decision on Direction A (recommended), Direction B, or the hybrid — and a green light for Phase 0.*
