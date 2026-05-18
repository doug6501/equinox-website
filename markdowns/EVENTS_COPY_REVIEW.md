# Events & portfolio copy — human review framework

This document is generated from the live HTML so you can fact-check **one event at a time** with all the places it appears in one place.

For **non-portfolio** pages (services, about, insights articles, region SEO, and so on) in a single long dump, use `markdowns/COPY_AUDIT_FULL.md`.

## How to use

1. Skim **Homepage vs work index** (Section C) for mismatched dates, venues, or event titles.
2. For each event card in Section D, verify **venue**, **dates**, **event type**, and **claims** (gear, headcount, partnerships, years).
3. Use **Your notes** at the bottom of each card for corrections and questions.
4. When you are done, send back edits and we will update the HTML sources.

---

## A. Homepage — “Our Events” carousel (`index.html`)

What visitors see in the rotating photo strip. (Dates here are **display labels** — compare to the work hub and case page for the canonical story.)

| # | Date label | Venue | Event title | Intended case page (editorial link) |
|---|------------|-------|---------------|-------------------------------------|
| 1 | May 2026 | Lincoln Hall at Hildene | Women in Leadership Luncheon | `work-women-in-leadership-2026.html` |
| 2 | Apr 2026 | Bennington Museum | Vanish Screening | `work-vanish-screening.html` |
| 3 | Aug 2025 | The Equinox Resort | Tent Wedding · 120 Guests | `work-equinox-wedding.html` |
| 4 | Jul 2025 | Arlington Common | FlyFest 2025 | `work-arlington.html` |
| 5 | Jan 2026 | Kimpton Taconic | SVCC Annual Meeting | `work-svcc-annual-meeting.html` |
| 6 | Fall 2024 | Lincoln Hall at Hildene | Wedding Reception | `work-hildene-wedding-2.html` |
| 7 | Sep 2025 | Northshire Day School | Fall Gala | `work-northshire-gala.html` |
| 8 | Aug 2025 | Hill Farm & Hildene | Two-Day Wedding Weekend | `work-two-day-wedding.html` |
| 9 | 2024 | Bennington Museum | Winter Gala | `work-bennington-museum.html` |
| 10 | Aug 2025 | The Crooked Ram | Wedding | `work-crooked-ram.html` |

---

## B. Work hub — editorial list (`work.html`)

Canonical **order and category** for portfolio rows.

| # | Category | Event name | Venue / date line | Teaser (index blurb) | Case file |
|---|----------|------------|-------------------|----------------------|-----------|
| 01 | Corporate & Community | Women in Leadership Luncheon | Lincoln Hall at Hildene · Manchester, VT · May 13, 2026 | Three 75" 4K displays with matched motion and a holding-slide protocol between segments. Keynotes by Emily Bush and Rhoni Basden — production that stays quiet while the room stays polished. | `work-women-in-leadership-2026.html` |
| 02 | Corporate & Community | Northshire Day School Harvest Moon Gala | Northshire Day School · Manchester, VT · September 16, 2025 | Manchester’s beloved school fundraiser. Silent auction displays, video storytelling, and a room full of parents who needed to hear every word. | `work-northshire-gala.html` |
| 03 | Corporate & Community | Hildene Volunteer Appreciation Dinner | Lincoln Hall at Hildene · Manchester, VT · August 28, 2025 | A tribute evening for 125 Hildene volunteers. Clear sound in a historic hall where every voice in the room deserved to be heard. | `work-hildene-volunteer.html` |
| 04 | Corporate & Community | Arlington Common Fly Fishing Festival | Arlington Common · Arlington, VT · Annual · 2023–2025 (ongoing) | Three summers running at FlyFest. Multi-day festival production on the Arlington Common town green — where the gear and the crew both have to last. | `work-arlington.html` |
| 05 | Corporate & Community | SVCC Women in Leadership Luncheon | Lincoln Hall at Hildene · Manchester, VT · May 14, 2025 | The 4th Annual Women In Leadership Luncheon. Panel discussion audio, visual presentation support, and a room that felt polished from the first seat. | `work-svcc-women-leadership.html` |
| 06 | Corporate & Community | SVCC Annual Membership Meeting | Kimpton Taconic · Manchester, VT · January 31, 2025 | Formal business meeting meets awards ceremony. The chamber’s biggest annual event, run cleanly at a property that holds the bar high. | `work-svcc-annual-meeting.html` |
| 07 | Corporate & Community | Bennington Museum Gala | Bennington Museum · Bennington, VT · Annual · 2023–2025 | The museum’s flagship fundraiser. Grandma Moses display lighting, flawless sound for the live ask. The kind of event where a missed cue costs real money. | `work-bennington-museum.html` |
| 08 | Corporate & Community | Vanish Film Screening | Bennington Museum · Bennington, VT · June 22, 2024 | Cinematic documentary about Vermont’s disappearing barns. Professional projection and audio calibrated for a museum gallery, not a theater. | `work-vanish-screening.html` |
| 09 | Corporate & Community | Bennington Museum Summer Celebration | Bennington Museum · Bennington, VT · June 1, 2024 | “A View of the Future from the Top of the Hill.” Live band sound balanced with visual presentation support across two spaces. | `work-bennington-summer.html` |
| 10 | Weddings | Two-Day Wedding Weekend | Hill Farm and Hildene · Manchester, VT · August 22–23, 2025 | Rehearsal dinner and reception across two venues, two days, one continuous production. String lights, band lighting, and no visible seam between them. | `work-two-day-wedding.html` |
| 11 | Weddings | Wedding at The Crooked Ram | The Crooked Ram · Vermont · August 2025 | An intimate ceremony where the groom’s family tribute video played center stage. Custom projection that felt personal, not technical. | `work-crooked-ram.html` |
| 12 | Weddings | Hildene Lincoln Hall Wedding | Lincoln Hall at Hildene · Manchester, VT · Summer 2025 | Audio for toasts and vows, lighting that honored the historic architecture. Speakers hidden. Nothing visible that shouldn’t be. | `work-hildene.html` |
| 13 | Weddings | Kimpton Taconic Wedding | Kimpton Taconic · Manchester, VT · Early 2025 | A winter wedding reception in the Taconic ballroom. Atmospheric lighting and clean audio for a celebration in one of Vermont’s most elegant boutique venues. | `work-kimpton-taconic.html` |
| 14 | Weddings | Equinox Resort Tent Wedding | Equinox Resort · Manchester, VT · September 7, 2024 | One hundred and twenty guests, one tent, and rain that started ten minutes before the ceremony. The first dance happened at 8:12. | `work-equinox-wedding.html` |
| 15 | Weddings | Hildene Lincoln Hall Wedding | Lincoln Hall at Hildene · Manchester, VT · Fall 2024 | Classic Vermont architecture, atmospheric uplighting, wireless audio for vows and toasts. A modern celebration that honored the room. | `work-hildene-wedding-2.html` |

---

## C. Cross-check: homepage slide ↔ work index ↔ case

Each homepage slide is mapped to its **intended** case file (same order as `index.html`). The work index row for that file is copied here so you can spot drift (e.g. different month/year wording). Update `HOMEPAGE_SLIDE_CASE` in `markdowns/_generate_events_copy_review.py` if you reorder or replace slides.

| HP # | Carousel (date · venue · event) | Work index row for that case | Drift notes |
|---|---------------------------------|--------------------------------|-------------|
| 1 | May 2026 · Lincoln Hall at Hildene · Women in Leadership Luncheon | #01 — Lincoln Hall at Hildene · Manchester, VT · May 13, 2026 — _Women in Leadership Luncheon_ | Date wording differs between carousel and work index. |
| 2 | Apr 2026 · Bennington Museum · Vanish Screening | #08 — Bennington Museum · Bennington, VT · June 22, 2024 — _Vanish Film Screening_ | Date wording differs between carousel and work index. Event title differs from work index name/teaser. |
| 3 | Aug 2025 · The Equinox Resort · Tent Wedding · 120 Guests | #14 — Equinox Resort · Manchester, VT · September 7, 2024 — _Equinox Resort Tent Wedding_ | Date wording differs between carousel and work index. Venue wording differs. Event title differs from work index name/teaser. |
| 4 | Jul 2025 · Arlington Common · FlyFest 2025 | #04 — Arlington Common · Arlington, VT · Annual · 2023–2025 (ongoing) — _Arlington Common Fly Fishing Festival_ | Event title differs from work index name/teaser. |
| 5 | Jan 2026 · Kimpton Taconic · SVCC Annual Meeting | #06 — Kimpton Taconic · Manchester, VT · January 31, 2025 — _SVCC Annual Membership Meeting_ | Date wording differs between carousel and work index. Event title differs from work index name/teaser. |
| 6 | Fall 2024 · Lincoln Hall at Hildene · Wedding Reception | #15 — Lincoln Hall at Hildene · Manchester, VT · Fall 2024 — _Hildene Lincoln Hall Wedding_ | Event title differs from work index name/teaser. |
| 7 | Sep 2025 · Northshire Day School · Fall Gala | #02 — Northshire Day School · Manchester, VT · September 16, 2025 — _Northshire Day School Harvest Moon Gala_ | Date wording differs between carousel and work index. Event title differs from work index name/teaser. |
| 8 | Aug 2025 · Hill Farm & Hildene · Two-Day Wedding Weekend | #10 — Hill Farm and Hildene · Manchester, VT · August 22–23, 2025 — _Two-Day Wedding Weekend_ | Date wording differs between carousel and work index. Venue wording differs. |
| 9 | 2024 · Bennington Museum · Winter Gala | #07 — Bennington Museum · Bennington, VT · Annual · 2023–2025 — _Bennington Museum Gala_ | Event title differs from work index name/teaser. |
| 10 | Aug 2025 · The Crooked Ram · Wedding | #11 — The Crooked Ram · Vermont · August 2025 — _Wedding at The Crooked Ram_ | Date wording differs between carousel and work index. |

---

## D. Event-by-event — full copy in context

Same order as **the work hub** (`work.html`) so it matches how the site is browsed.

### 01 — Women in Leadership Luncheon

- **Source file:** `work-women-in-leadership-2026.html`
- **Homepage:** Carousel slide **1** (`index.html` — Our Events)
- **Work hub category:** Corporate & Community
- **Work hub — venue / date line:** Lincoln Hall at Hildene · Manchester, VT · May 13, 2026
- **Work hub — teaser:** Three 75" 4K displays with matched motion and a holding-slide protocol between segments. Keynotes by Emily Bush and Rhoni Basden — production that stays quiet while the room stays polished.

#### SEO & social
- **`<title>`:** Women in Leadership Luncheon 2026 | Portfolio | EQX AV — Technical Producer
- **Meta description:** Case study: Women in Leadership Luncheon 2026 at Hildene Lincoln Hall. Keynotes by Emily Bush and Rhoni Basden, triple 75-inch 4K displays, distributed audio, and presentation control — EQX AV, technical producer for live events in Vermont and New England.
- **Open Graph description:** Triple-display visual continuity, distributed audio, and polished presentation control at Lincoln Hall, Hildene.
- **Twitter description:** Technical production for the 2026 Women in Leadership Luncheon at Hildene Lincoln Hall.

#### Hero (Page hero v2 (image hero))

- **Venue / context line:** Lincoln Hall at Hildene, Manchester, VT
- **Headline:** Women in Leadership Luncheon 2026

#### Long-form body (case page)

1. The 2026 Women in Leadership Luncheon brings the program back to Lincoln Hall — a room where every seat expects clarity, warmth, and restraint. This year’s keynotes by Emily Bush and Rhoni Basden anchor the arc of the afternoon: two distinct voices, one shared standard for how production should disappear behind the message.

2. Visually, the room was built around continuity across three 75-inch 4K monitors. Looping motion and branded motion graphics carried the same look from welcome through transitions, so the walls never felt like they were “waiting” for the next segment. When laptops slept or presenters stepped away from the podium, we held the room on a dedicated holding slide — quiet typography, correct aspect ratio, no desktop chrome — so guests never saw an accidental desktop or a half-loaded deck. That protocol is small on paper and enormous in the room: it is the difference between a polished luncheon and one that feels technically unfinished.

3. Audio and lighting followed the same philosophy: support the speakers, frame the architecture, and keep transitions invisible. Wireless presentation sync kept Bush and Basden aligned with what the audience saw, while stage lighting used dual back-fill fixtures so faces read cleanly on camera and in person. The result is an evergreen production footprint you can repeat next year without apologizing for the technology.

#### Your notes (fact-check / tone)

- [ ] Venue / location accurate
- [ ] Dates / recurrence wording accurate
- [ ] Services / gear claims accurate
- [ ] No unintended negative framing about clients or venues

_Write edits or questions below this line._


---

### 02 — Northshire Day School Harvest Moon Gala

- **Source file:** `work-northshire-gala.html`
- **Homepage:** Carousel slide **7** (`index.html` — Our Events)
- **Work hub category:** Corporate & Community
- **Work hub — venue / date line:** Northshire Day School · Manchester, VT · September 16, 2025
- **Work hub — teaser:** Manchester’s beloved school fundraiser. Silent auction displays, video storytelling, and a room full of parents who needed to hear every word.

#### SEO & social
- **`<title>`:** Northshire Day School Harvest Moon Gala | Portfolio | EQX AV — Technical Producer
- **Meta description:** width=device-width, initial-scale=1.0" name="viewport"/>
<!-- SEO Meta Tags -->
<title>Northshire Day School Harvest Moon Gala | Portfolio | EQX AV — Technical Producer</title>
<meta content="Case study: Northshire Day School Harvest Moon Gala. See how we provided Multi-Screen Video Display, Wireless Audio, Event Uplighting for this event. — EQX AV, technical producer for live events in Vermont and New England.

#### Hero (Case study hero (still/video + case number))

- **Case label:** Case 028
- **Venue / context line:** The Inn at Manchester — Manchester, VT — Annual 2023–2025
- **Headline:** A school fundraiser that doesn’t feel like one. Three years at the Inn at Manchester. Every bid heard.

#### Long-form body (case page)

1. The Northshire Day School Harvest Moon Gala raises money for a Manchester school the community genuinely loves. Held at the Celebration Barn at The Inn at Manchester, the room is full of parents, alumni, and community members who have seen what the school does. The technology’s job is to make them feel it again, specifically enough to act on it.

2. Three 75-inch displays positioned around the room run content throughout the night: silent auction items, live auction lots, and program information. When the live auction starts, professional auctioneer Eric Nathan has a wireless microphone and the room can hear every bid acknowledgment clearly. The school impact video plays before the paddle raise with clean audio and no fumbled transitions. We manage every cue in real time — the moment a school impact video cuts out mid-sentence is the moment the room’s energy drops. GSK Climate Control is the entertainment sponsor; Haystack Catering provides the meal.

3. Perimeter uplighting holds the room together visually throughout the evening. The atmosphere doesn’t feel like a school fundraiser. It feels like a gala. That distinction is the difference between production that shows up and production that pays attention to what the organizers are actually trying to accomplish.

4. The school has renewed the engagement three years running. The Harvest Moon Gala is a tradition in Manchester. We intend to keep it looking like one.

#### Run of show (sidebar)

- **10:00** — Load in · Celebration Barn
- **17:00** — Doors · Silent auction opens · Displays live
- **18:30** — Program begins · Welcome
- **18:45** — School impact video
- **19:00** — Live auction · Countdown timer active
- **19:30** — Paddle raise · Mic to auctioneer
- **20:00** — Dinner · Monitors to slideshow loop
- **20:30** — Close

#### Key facts (spec block)

- **Client:** Northshire Day School
- **Venue:** Celebration Barn, The Inn at Manchester, Manchester VT
- **Date:** Annual · 2023–2025 · Sept 16 (most recent)
- **Services:** 3× 75" displays · Video switcher · Wireless audio · Uplighting · Presentation management
- **Auctioneer:** Eric Nathan
- **Sponsor:** GSK Climate Control (entertainment)

#### Your notes (fact-check / tone)

- [ ] Venue / location accurate
- [ ] Dates / recurrence wording accurate
- [ ] Services / gear claims accurate
- [ ] No unintended negative framing about clients or venues

_Write edits or questions below this line._


---

### 03 — Hildene Volunteer Appreciation Dinner

- **Source file:** `work-hildene-volunteer.html`
- **Homepage:** Not in the current 10-slide carousel (`index.html`)
- **Work hub category:** Corporate & Community
- **Work hub — venue / date line:** Lincoln Hall at Hildene · Manchester, VT · August 28, 2025
- **Work hub — teaser:** A tribute evening for 125 Hildene volunteers. Clear sound in a historic hall where every voice in the room deserved to be heard.

#### SEO & social
- **`<title>`:** Hildene Volunteer Appreciation Dinner | Portfolio | EQX AV — Technical Producer
- **Meta description:** width=device-width, initial-scale=1.0" name="viewport"/>
<!-- SEO Meta Tags -->
<title>Hildene Volunteer Appreciation Dinner | Portfolio | EQX AV — Technical Producer</title>
<meta content="Case study: Hildene Volunteer Appreciation Dinner. See how we provided Distributed Audio System, Presentation Support for this event. — EQX AV, technical producer for live events in Vermont and New England.

#### Hero (Case study hero (still/video + case number))

- **Case label:** Case 046
- **Venue / context line:** Lincoln Hall at Hildene — Manchester, VT — August 28, 2025
- **Headline:** One hundred and twenty-five volunteers. A daytime celebration built to honor the people who keep Hildene running.

#### Long-form body (case page)

1. The Hildene Volunteer Appreciation Dinner exists to honor 125 people who give their time to one of Vermont’s most significant historic properties. The Lincoln Family Home has been in continuous care since 1905. The volunteers who maintain it and guide visitors through it treat that responsibility personally. The event should feel like it means something.

2. We built a full PA system — four speakers distributed through Lincoln Hall, supported by a wireless antenna distribution system to maintain a clean signal throughout the space. The goal was consistent, conversational levels during the meal and clear, present audio for the program. A wireless podium mic anchored every speaker to the same quality of sound. Clean handoffs meant no interruptions between remarks.

3. The Friends Walk induction ceremony — recognizing four volunteers for exceptional dedication to Hildene’s mission — required its own care. Inductees came forward to speak at the podium mic; a video tribute played as part of the ceremony. Our presentation support covered the full scope: PowerPoint slides, a video switcher for holding slides and playback, and live transitions between every program segment. Lighting highlighted the architectural features of Lincoln Hall throughout, creating an atmosphere that felt both formal and warm for a daytime celebration.

4. Pangaea Restaurant in North Bennington catered. Hildene’s staff coordinated the guest experience. Our job was to make the technology invisible so the afternoon could be entirely about the people in it.

#### Run of show (sidebar)

- **Eve.** — Load in · Lincoln Hall
- **Midday** — Doors · Volunteers welcomed
- **12:30** — Lunch service begins
- **13:15** — Welcome remarks · Hildene leadership
- **13:30** — Friends Walk ceremony · 4 inductions
- **14:15** — Video tribute · Closing remarks
- **~16:00** — Close · Load out

#### Key facts (spec block)

- **Client:** Hildene, The Lincoln Family Home
- **Catering:** Pangaea Restaurant, North Bennington VT
- **Venue:** Lincoln Hall at Hildene, Manchester VT
- **Date:** August 28, 2025
- **Guests:** ~125 volunteers and staff
- **Ceremony:** Friends Walk induction · 4 honorees
- **Services:** PA system (4 speakers) · Wireless podium mic · Antenna distribution · Presentation support · Video playback · Lighting

#### Client pull quote (live on page)

> “Equinox made our volunteer appreciation dinner truly special. Their attention to detail and understanding of our historic venue helped create an evening that perfectly honored our dedicated volunteers and made the Friends Walk induction ceremony unforgettable.”

#### Your notes (fact-check / tone)

- [ ] Venue / location accurate
- [ ] Dates / recurrence wording accurate
- [ ] Services / gear claims accurate
- [ ] No unintended negative framing about clients or venues

_Write edits or questions below this line._


---

### 04 — Arlington Common Fly Fishing Festival

- **Source file:** `work-arlington.html`
- **Homepage:** Carousel slide **4** (`index.html` — Our Events)
- **Work hub category:** Corporate & Community
- **Work hub — venue / date line:** Arlington Common · Arlington, VT · Annual · 2023–2025 (ongoing)
- **Work hub — teaser:** Three summers running at FlyFest. Multi-day festival production on the Arlington Common town green — where the gear and the crew both have to last.

#### SEO & social
- **`<title>`:** Arlington Common FlyFest | Portfolio | EQX AV — Technical Producer
- **Meta description:** width=device-width, initial-scale=1.0" name="viewport"/>
<!-- SEO Meta Tags -->
<title>Arlington Common FlyFest | Portfolio | EQX AV — Technical Producer</title>
<meta content="Case study: Arlington Common FlyFest. See how we provided Full Three-Day Production, Live Event Sound, Meeting AV for this event. — EQX AV, technical producer for live events in Vermont and New England.

#### Hero (Case study hero (still/video + case number))

- **Case label:** Case 019
- **Venue / context line:** Arlington Common — Arlington, VT — Annual 2023–2025
- **Headline:** Three years at the Battenkill Fly Fishing & Arts Festival. Four days. Every venue on the grounds. One crew.

#### Long-form body (case page)

1. The Battenkill Fly Fishing & Arts Festival is a four-day event on the Arlington Common, part fly fishing competition and educational conference, part celebration of the outdoors and the community that makes it happen. The International Fly Fishing Film Festival (IF4) brings its touring program of short films. Presenters and artists travel to Arlington for it. Since 2023, so have we.

2. Thursday evening kicks off with a cocktail hour at the Watkins House — a historic venue on the grounds. We provided uplighting and a sound system for the opening night gathering. Friday moves into the Performance Center, where we supported presentations and screenings of IF4 films throughout the day, managing background music, mics for speeches, and uplights in the outdoor areas: the beer garden and the fly-tying area.

3. Saturday features full-day presentations — including noted Orvis fly fishing personality and podcast host Tom Rosenbauer — and closes with outdoor evening programming with uplighting, background music, and the same multi-zone approach across the grounds. Sunday wraps the festival with more presentations, final IF4 screenings, and background music through the close.

4. The live bands at the festival largely ran their own sound; we provided audio support where it was needed throughout the programming. Multi-year production partnerships earn their value through accumulated knowledge. We know this common, this crowd, and what each day of the festival asks for. That knowledge doesn’t show up in a line item. It shows up in how smoothly the event runs. The 2026 edition runs this weekend.

#### Run of show (sidebar)

- **THURSDAY**
- **Evening** — Cocktail hour · Watkins House · Uplights + sound
- **FRIDAY**
- **All day** — Performance Center · Presentations + IF4 screenings
- **Outdoors** — Beer garden + fly-tying area · Uplights + mics
- **SATURDAY**
- **All day** — Presentations incl. Tom Rosenbauer
- **Evening** — Outdoor event · Uplights + background music
- **SUNDAY**
- **All day** — Presentations + IF4 screenings + background music

#### Key facts (spec block)

- **Client:** Battenkill Fly Fishing & Arts Festival
- **Venue:** Arlington Common, Arlington VT
- **Date:** Annual · 2023–2025 (ongoing)
- **Duration:** 4 days (Thu–Sun)
- **Services:** Outdoor uplighting · PA systems · Mics for speeches · Background music · Presentation support · IF4 film screenings

#### Your notes (fact-check / tone)

- [ ] Venue / location accurate
- [ ] Dates / recurrence wording accurate
- [ ] Services / gear claims accurate
- [ ] No unintended negative framing about clients or venues

_Write edits or questions below this line._


---

### 05 — SVCC Women in Leadership Luncheon

- **Source file:** `work-svcc-women-leadership.html`
- **Homepage:** Not in the current 10-slide carousel (`index.html`)
- **Work hub category:** Corporate & Community
- **Work hub — venue / date line:** Lincoln Hall at Hildene · Manchester, VT · May 14, 2025
- **Work hub — teaser:** The 4th Annual Women In Leadership Luncheon. Panel discussion audio, visual presentation support, and a room that felt polished from the first seat.

#### SEO & social
- **`<title>`:** Women In Leadership Luncheon | Portfolio | EQX AV — Technical Producer
- **Meta description:** Case study: Southwestern Vermont Chamber Women In Leadership Luncheon at Hildene. See how we provided Audio Reinforcement, Presentation Support, Event Lighting for this event. — EQX AV, technical producer for live events in Vermont and New England.
- **Open Graph description:** The 4th Annual Women In Leadership Luncheon at Hildene, with Berkshire Bank and PAVE. A production that matched the significance of the occasion.
- **Twitter description:** The 4th Annual Women In Leadership Luncheon at Hildene. A production that honored the occasion.

#### Hero (Case study hero (still/video + case number))

- **Case label:** Case 045
- **Venue / context line:** Lincoln Hall at Hildene — Manchester, VT — May 14, 2025
- **Headline:** The 4th Annual Women In Leadership Luncheon. Over 200 in Lincoln Hall. Every word in the room.

#### Long-form body (case page)

1. The Southwestern Vermont Chamber’s fourth annual Women In Leadership Luncheon packed Hildene’s Lincoln Hall with over 200 attendees — the largest gathering this luncheon has had. Keynote speaker Deborah Slaner Larkin — former CEO of the Women’s Sports Foundation and a national Title IX advocate — needed a room that could hold the weight of that conversation. Lincoln Hall carries its own gravity. Our job was to amplify without competing.

2. We ran a full audio system with wireless microphones throughout the program. Larkin’s keynote was delivered from the podium mic. Three award presentations followed — honoring Sarah Al Janabi (Young Woman in Leadership), Erin Kaufman (Woman of the Year), and Janice Corey (Lifetime Achievement) — with each honoree coming forward to speak at a mic at the front of the room. A special In Memory tribute to Rita Dee was woven into the program. Every word landed clearly in a room that was already paying attention.

3. Video was part of Deborah Larkin’s presentation and played back cleanly through our system. The transitions between segments were managed live — switching content on the display and keeping levels consistent from keynote through awards without a gap. Lighting highlighted the speakers and the architectural features of Lincoln Hall throughout. The Bennington Banner named Equinox Audio Visuals as the event’s AV partner — a detail that reflects the care the Chamber brings to every element of this event.

4. The Chamber calls it a luncheon. It runs like a precision event. Presenting sponsors Berkshire Bank and Project Against Violent Encounters (PAVE) returned. Pangaea provided the meal. The 2026 edition is set for May 13th.

#### Run of show (sidebar)

- **Eve.** — Load in · Lincoln Hall
- **12:00** — Doors · Guests welcomed
- **12:15** — Welcome remarks · SVCC President
- **12:30** — Keynote begins · Deborah Slaner Larkin
- **13:15** — Award presentations · 3 recipients
- **13:45** — Closing remarks
- **14:00** — Networking reception

#### Key facts (spec block)

- **Client:** Southwestern Vermont Chamber of Commerce
- **Partners:** Berkshire Bank · Project Against Violent Encounters (PAVE)
- **Venue:** Lincoln Hall at Hildene, Manchester VT
- **Date:** May 14, 2025
- **Attendees:** 200+ (largest gathering to date)
- **Keynote:** Deborah Slaner Larkin · Former CEO, Women’s Sports Foundation
- **Awards:** Sarah Al Janabi · Erin Kaufman · Janice Corey
- **Services:** Audio · Wireless mics · Presentation · Lighting · Video playback

#### Client pull quote (live on page)

> “Equinox understood the heart of our event — celebrating women leaders and creating meaningful connections. Their technical expertise allowed us to focus on the program and our guests, knowing every word and every moment would be captured beautifully.”

#### Your notes (fact-check / tone)

- [ ] Venue / location accurate
- [ ] Dates / recurrence wording accurate
- [ ] Services / gear claims accurate
- [ ] No unintended negative framing about clients or venues

_Write edits or questions below this line._


---

### 06 — SVCC Annual Membership Meeting

- **Source file:** `work-svcc-annual-meeting.html`
- **Homepage:** Carousel slide **5** (`index.html` — Our Events)
- **Work hub category:** Corporate & Community
- **Work hub — venue / date line:** Kimpton Taconic · Manchester, VT · January 31, 2025
- **Work hub — teaser:** Formal business meeting meets awards ceremony. The chamber’s biggest annual event, run cleanly at a property that holds the bar high.

#### SEO & social
- **`<title>`:** SWVT Chamber Annual Meeting | Portfolio | EQX AV — Technical Producer
- **Meta description:** Case study: Southwestern Vermont Chamber of Commerce Annual Membership Meeting. See how we provided Event Lighting, Audio Reinforcement, Presentation Support for this event. — EQX AV, technical producer for live events in Vermont and New England.
- **Open Graph description:** Formal business meeting meets awards ceremony at the Kimpton Taconic. Full AV production for the Southwestern Vermont Chamber's flagship annual event.
- **Twitter description:** Full AV production for the SVCC's annual event at the Kimpton Taconic — meeting, awards, social hour.

#### Hero (Case study hero (still/video + case number))

- **Case label:** Case 038
- **Venue / context line:** Kimpton Taconic — Manchester, VT — January 31, 2025
- **Headline:** One room. A formal business meeting and an awards celebration. Over 115 business leaders. The transitions were ours to manage.

#### Long-form body (case page)

1. The SVCC calls it “The Biggest Business Night of the Year” and the room reflects that. The Annual Meeting is two events running in the same room on the same evening: a formal business meeting with a budget vote and board recognition, and an awards celebration with a social hour. The technical production has to serve both modes without either noticing the shift. When the Chamber president calls the meeting to order, the room should feel like a boardroom. When the awards start, it should feel like a celebration.

2. We ran a professional sound system with wireless microphones for the podium and all speakers across the program. The social hour had background music on the same system. Microphone management across three distinct program segments required clean handoffs and consistent levels — every speech, announcement, and award recognition was heard at the same quality throughout the Kimpton Taconic ballroom.

3. Perimeter uplighting warmed the ballroom’s architecture. Video playback handled the presentation and the achievement reels. Four awards were presented: New Member of the Year (Shaftsbury Country Store), Member of the Year (Comprehensive Computing / Byrom Jomaa), Regional Visionary (GNAT-TV and CAT-TV), and Lifetime Achievement (Jay’s Art Shop / Jay and Joan Zwynenburg). Heritage Family Credit Union was the presenting sponsor.

4. Over 115 business leaders, elected officials, and community members attended. The Chamber trusts this event to run like the organization it represents: professionally and without visible effort.

#### Run of show (sidebar)

- **10:00** — Load in · Kimpton Taconic ballroom
- **17:00** — Doors · Social hour begins
- **17:30** — Meeting called to order
- **17:40** — Presentation segment
- **18:00** — Budget vote · Board recognition
- **18:30** — Annual awards · 4 recipients
- **19:00** — Social hour resumes

#### Key facts (spec block)

- **Client:** Southwestern Vermont Chamber of Commerce
- **Venue:** Kimpton Taconic, Manchester VT
- **Date:** January 31, 2025
- **Attendees:** 115+ business leaders and community members
- **Sponsor:** Heritage Family Credit Union (presenting)
- **Services:** Sound · Wireless mics · Uplighting · Video playback · Presentation support

#### Client pull quote (live on page)

> “Equinox made our Annual Meeting professional and well-run. Their team understood the dual nature of our event — formal business and celebration — and delivered flawless technical support for both. The presentation system was crystal clear, and the lighting created exactly the atmosphere we wanted.”

#### Your notes (fact-check / tone)

- [ ] Venue / location accurate
- [ ] Dates / recurrence wording accurate
- [ ] Services / gear claims accurate
- [ ] No unintended negative framing about clients or venues

_Write edits or questions below this line._


---

### 07 — Bennington Museum Gala

- **Source file:** `work-bennington-museum.html`
- **Homepage:** Carousel slide **9** (`index.html` — Our Events)
- **Work hub category:** Corporate & Community
- **Work hub — venue / date line:** Bennington Museum · Bennington, VT · Annual · 2023–2025
- **Work hub — teaser:** The museum’s flagship fundraiser. Grandma Moses display lighting, flawless sound for the live ask. The kind of event where a missed cue costs real money.

#### SEO & social
- **`<title>`:** Bennington Museum Gala | Portfolio | EQX AV — Technical Producer
- **Meta description:** width=device-width, initial-scale=1.0" name="viewport"/>
<!-- SEO Meta Tags -->
<title>Bennington Museum Gala | Portfolio | EQX AV — Technical Producer</title>
<meta content="Case study: Bennington Museum Gala. See how we provided HD Video Displays, Distributed Audio System for this event. — EQX AV, technical producer for live events in Vermont and New England.

#### Hero (Case study hero (still/video + case number))

- **Case label:** Case 014
- **Venue / context line:** Bennington Museum — Bennington, VT — Annual 2023–2025
- **Headline:** The museum’s most important fundraising night. In the galleries, among the collection. Every year.

#### Long-form body (case page)

1. The Bennington Museum’s annual gala is the single most important fundraising event in their calendar. It happens in the galleries, among the collection. Our job, from the first year, was to bring event-scale production to a museum-scale space without letting either compete with the other.

2. We solved it with precision. Wireless microphones with antenna distribution ensured clean signal throughout the galleries, working in conjunction with the venue’s existing sound system. The auctioneer had clear, consistent audio for both the live auction and the silent auction segments. Guests across the room heard every bid acknowledgment and every program moment with equal clarity.

3. Presentation support covered the full evening: our video switcher managed sponsor slides, logo displays, live auction items, and silent auction content — transitioning between segments live without a gap. Perimeter uplighting warmed the event space with amber tones, and four uplights positioned outside on the entry pillars set the tone for guests arriving. The balance matters: a room that feels too corporate erodes the cultural credibility of the museum. A room that feels too casual doesn’t move the needle on the live ask.

4. The museum renewed the engagement three years in sequence — 2023 through 2025. That partnership is the proof that the balance was right.

#### Run of show (sidebar)

- **09:00** — Load in · Gallery floor
- **18:00** — Doors · Cocktail reception
- **19:00** — Program begins · Welcome
- **19:15** — Curator remarks · Collection presentation
- **19:30** — Live auction · Auctioneer at mic
- **20:00** — Dinner service
- **21:00** — Close

#### Key facts (spec block)

- **Client:** Bennington Museum
- **Venue:** Bennington Museum, Bennington VT
- **Date:** Annual · 2023–2025
- **Services:** Wireless audio · Antenna distribution · Uplighting (perimeter + entry pillars) · Video switcher · Presentation support
- **Auction:** Live auction · Silent auction
- **Outcome:** Multi-year partnership renewed

#### Client pull quote (live on page)

> “Equinox is more than a vendor; they are a true partner. Their team’s professionalism and attention to detail were instrumental in the success of our most important event of the year.”

#### Your notes (fact-check / tone)

- [ ] Venue / location accurate
- [ ] Dates / recurrence wording accurate
- [ ] Services / gear claims accurate
- [ ] No unintended negative framing about clients or venues

_Write edits or questions below this line._


---

### 08 — Vanish Film Screening

- **Source file:** `work-vanish-screening.html`
- **Homepage:** Carousel slide **2** (`index.html` — Our Events)
- **Work hub category:** Corporate & Community
- **Work hub — venue / date line:** Bennington Museum · Bennington, VT · June 22, 2024
- **Work hub — teaser:** Cinematic documentary about Vermont’s disappearing barns. Professional projection and audio calibrated for a museum gallery, not a theater.

#### SEO & social
- **`<title>`:** "Vanish" Film Screening | Portfolio | EQX AV — Technical Producer
- **Meta description:** Case study: "Vanish" Film Screening. See how we provided Cinema Projection and Screen, Surround Sound Audio for this event. EQX AV: technical producer for live events in Vermont and New England.

#### Hero (Case study hero (still/video + case number))

- **Case label:** Case 048
- **Venue / context line:** Bennington Museum — Bennington, VT — June 22, 2024
- **Headline:** A documentary about disappearing barns. A historic museum. One night to make it feel like a theater.

#### Long-form body (case page)

1. The Bennington Museum hosted “Vanish,” a documentary about Vermont’s disappearing historic barns. The film required proper cinematic treatment in the museum’s education center — a space designed for collections, not projection. Our job was to make it feel like a theater without touching the room’s character.

2. We installed a large-format cinema screen and a high-lumen laser projector calibrated to the room’s ambient light conditions and seating geometry. Every seat had a clear sightline and a consistent image. The audio system was designed for the film’s score and narration: present enough to be immersive, controlled enough that it didn’t overwhelm a space built for quiet contemplation. Speaker placement kept the sound image clean and forward-facing throughout the room.

3. The setup was engineered to be invisible in the historic space. No road cases in view, cables run tight to the walls, equipment positioned so the room remained the frame for the film rather than a backdrop for the gear. When the lights came down and the projector cued, the audience was watching a documentary. Not a production.

4. After the screening, director Jim Westphalen spoke. We had a microphone at the podium and a second at the front of the house for audience questions. The transition from playback to live sound was seamless. The Q&A ran forty minutes. A room full of Vermonters with opinions about old barns. The audio held through all of it.

#### Run of show (sidebar)

- **15:00** — Load in · Education center
- **17:00** — Doors · Lobby welcome
- **17:30** — Audience seated · House lights dimmed
- **17:35** — Pre-show remarks · Director introduced
- **17:45** — Film begins · Projector cue
- **19:15** — Film ends · House lights up
- **19:19** — Q&A · Mic to director
- **20:00** — Reception · Close

#### Key facts (spec block)

- **Client:** Bennington Museum
- **Venue:** Bennington Museum, Bennington VT
- **Date:** June 22, 2024 · 7:00–9:00 pm
- **Services:** Cinema projection · Stereo audio · Wireless mics · Presentation support
- **Director:** Jim Westphalen
- **Projector:** High-lumen laser, large-format screen
- **Outcome:** Full house. Zero interruptions.

#### Client pull quote (live on page)

> “Equinox provided a flawless cinematic experience for our film screening. Their team was professional, efficient, and delivered a presentation that exceeded all our expectations.”

#### Your notes (fact-check / tone)

- [ ] Venue / location accurate
- [ ] Dates / recurrence wording accurate
- [ ] Services / gear claims accurate
- [ ] No unintended negative framing about clients or venues

_Write edits or questions below this line._


---

### 09 — Bennington Museum Summer Celebration

- **Source file:** `work-bennington-summer.html`
- **Homepage:** Not in the current 10-slide carousel (`index.html`)
- **Work hub category:** Corporate & Community
- **Work hub — venue / date line:** Bennington Museum · Bennington, VT · June 1, 2024
- **Work hub — teaser:** “A View of the Future from the Top of the Hill.” Live band sound balanced with visual presentation support across two spaces.

#### SEO & social
- **`<title>`:** Bennington Museum Summer Celebration | Portfolio | EQX AV — Technical Producer
- **Meta description:** width=device-width, initial-scale=1.0" name="viewport"/>
<!-- SEO Meta Tags -->
<title>Bennington Museum Summer Celebration | Portfolio | EQX AV — Technical Producer</title>
<meta content="Case study: Bennington Museum Summer Celebration. See how we provided Concert Sound Reinforcement, Live Band Mixing, Video Display Systems for this event. — EQX AV, technical producer for live events in Vermont and New England.

#### Hero (Case study hero (still/video + case number))

- **Case label:** Case 034
- **Venue / context line:** Bennington Museum — Bennington, VT — June 1, 2024
- **Headline:** A View of the Future from the Top of the Hill. Live Americana band, outdoor tent, auction. One evening, two registers.

#### Long-form body (case page)

1. The Bennington Museum chose the name “A View of the Future from the Top of the Hill” for their outdoor summer fundraiser, and it held true across the evening — a tented event on the hill behind the main museum building with a live Americana band, both live and silent auctions, and a crowd of the museum’s most committed supporters. Farm to Fire Hudson BBQ catered. The brief asked for two things simultaneously: a concert experience and a fundraising event. The production had to be capable of both.

2. The Carolyn Shapiro Band is a four-piece Americana roots act. Live band mixing outdoors under a tent requires managing reflections off the tent fabric, wind noise on open microphones, and a consistent sound image for guests seated at every angle relative to the stage. We provided full concert sound reinforcement: Shapiro and the band could hear themselves clearly; the audience heard the performance cleanly across the tent.

3. The auction component ran during the band’s set breaks, switching from live sound to video playback on a 75-inch display. The display showed auction items for both the live and silent auctions as well as band information throughout the night. Every transition between program elements was managed live. Uplighting dressed the tent throughout the evening.

4. One production. Two registers. The museum’s supporters experienced both without a visible boundary between them.

#### Run of show (sidebar)

- **10:00** — Load in · Museum hill tent
- **18:00** — Doors · Reception
- **18:00** — Welcome remarks
- **18:15** — Carolyn Shapiro · Set 1
- **19:00** — Auction presentation · Monitors live
- **19:30** — Carolyn Shapiro · Set 2
- **20:30** — Close

#### Key facts (spec block)

- **Client:** Bennington Museum
- **Venue:** Bennington Museum, Bennington VT
- **Date:** June 1, 2024 · 6:00–9:00 pm
- **Band:** Carolyn Shapiro Band (4-piece Americana)
- **Catering:** Farm to Fire Hudson BBQ
- **Services:** Concert sound reinforcement · Live band mixing · Monitor mixing · 1× 75" display · Uplighting

#### Your notes (fact-check / tone)

- [ ] Venue / location accurate
- [ ] Dates / recurrence wording accurate
- [ ] Services / gear claims accurate
- [ ] No unintended negative framing about clients or venues

_Write edits or questions below this line._


---

### 10 — Two-Day Wedding Weekend

- **Source file:** `work-two-day-wedding.html`
- **Homepage:** Carousel slide **8** (`index.html` — Our Events)
- **Work hub category:** Weddings
- **Work hub — venue / date line:** Hill Farm and Hildene · Manchester, VT · August 22–23, 2025
- **Work hub — teaser:** Rehearsal dinner and reception across two venues, two days, one continuous production. String lights, band lighting, and no visible seam between them.

#### SEO & social
- **`<title>`:** Two-Day Wedding Weekend | Portfolio | EQX AV — Technical Producer
- **Meta description:** width=device-width, initial-scale=1.0" name="viewport"/>
<!-- SEO Meta Tags -->
<title>Two-Day Wedding Weekend | Portfolio | EQX AV — Technical Producer</title>
<meta content="Case study: Two-Day Wedding Weekend. See how we provided Professional Sound System, Wireless Microphones for this event. — EQX AV, technical producer for live events in Vermont and New England.

#### Hero (Case study hero (still/video + case number))

- **Case label:** Case 044
- **Venue / context line:** Hill Farm and Hildene — Manchester, VT — August 22–23, 2025
- **Headline:** Two days. Two venues. One continuous weekend with no visible boundary between them.

#### Long-form body (case page)

1. Two days. Two venues. One brief for a couple and their families: a weekend that felt continuous, not divided. The rehearsal dinner at Hill Farm called for warmth and ease — string lights around the grounds, a wireless microphone and indoor sound system for toasts, the kind of setup that disappears into the evening. We did that in the morning. By the time guests arrived, the cables were hidden and the lights were on. Hill Farm catered the rehearsal dinner.

2. Day two at Hildene was a different production scope. Lincoln Hall carries history in its proportions and the band brought their own sound; our focus was the room’s visual atmosphere. We provided perimeter uplighting, string lights synced to the music, dance floor lighting, and stage wash for the band. Warm amber tones throughout worked with the historic woodwork rather than competing with it.

3. Real-time lighting programming meant our engineer was live at the console through the band’s full set — adjusting cues as the music shifted, not running a preset. The lighting was felt rather than noticed. The guests stayed on the dance floor. Pangaea Restaurant in North Bennington catered the wedding reception.

4. Diwan by Design ran the logistics across both days. Our job was to run the technical dimension of both events as if they were one continuous production — no recalibration required, no gap between day one and day two.

#### Run of show (sidebar)

- **DAY 1 · AUG 22**
- **10:00** — Load in · Hill Farm
- **19:00** — Rehearsal dinner · String lights on
- **19:30** — Welcome remarks · Wireless mic live
- **21:00** — Campfire · String lights · Close
- **DAY 2 · AUG 23**
- **10:00** — Load in · Hildene Lincoln Hall
- **18:00** — Cocktail · Lighting transition
- **19:00** — Reception · Band confirmed
- **20:30** — First dance · Real-time lighting cue

#### Key facts (spec block)

- **Client:** Private wedding
- **Planner:** Diwan by Design
- **Catering:** Hill Farm (rehearsal dinner) · Pangaea Restaurant, North Bennington VT (wedding reception)
- **Rehearsal:** Hill Farm, Manchester VT
- **Reception:** Lincoln Hall at Hildene, Manchester VT
- **Services:** Day 1: String lights · Wireless mic · Indoor sound system    Day 2: Perimeter uplighting · String lights · Dance floor lighting · Stage wash · Real-time programming

#### Your notes (fact-check / tone)

- [ ] Venue / location accurate
- [ ] Dates / recurrence wording accurate
- [ ] Services / gear claims accurate
- [ ] No unintended negative framing about clients or venues

_Write edits or questions below this line._


---

### 11 — Wedding at The Crooked Ram

- **Source file:** `work-crooked-ram.html`
- **Homepage:** Carousel slide **10** (`index.html` — Our Events)
- **Work hub category:** Weddings
- **Work hub — venue / date line:** The Crooked Ram · Vermont · August 2025
- **Work hub — teaser:** An intimate ceremony where the groom’s family tribute video played center stage. Custom projection that felt personal, not technical.

#### SEO & social
- **`<title>`:** Wedding at The Crooked Ram | Portfolio | EQX AV — Technical Producer
- **Meta description:** width=device-width, initial-scale=1.0" name="viewport"/>
<!-- SEO Meta Tags -->
<title>Wedding at The Crooked Ram | Portfolio | EQX AV — Technical Producer</title>
<meta content="Case study: Wedding at The Crooked Ram. See how we provided 75-inch Display Rental, Video Playback, Speech Reinforcement for this event. — EQX AV, technical producer for live events in Vermont and New England.

#### Hero (Case study hero (still/video + case number))

- **Case label:** Case 043
- **Venue / context line:** The Crooked Ram — Manchester, VT — August 2025
- **Headline:** The groom’s parents had spent months building a video about their son’s life. Every guest needed to see it properly.

#### Long-form body (case page)

1. The groom’s parents had spent months building a video about their son’s life. Every decade accounted for: childhood footage, photographs, the accumulating evidence of a person becoming himself. They wanted every guest at the rehearsal dinner to see it and hear it properly. That was the production requirement that mattered most at this event.

2. We installed a 75-inch monitor positioned so every seat had a clear sightline to the screen. High-fidelity playback, discreet speakers, levels calibrated to the room’s size and ambient noise floor. The video ran at dinner. The room was quiet. People watched.

3. After the video, the toasts. Wireless microphone to the first speaker, clean handoff to the second, handoff to the third. Clear audio throughout. When the person holding the mic is making that much eye contact with the room, they should never have to think about whether anyone can hear them. They didn’t have to.

#### Run of show (sidebar)

- **14:00** — Load in · Display position confirmed
- **16:45** — Cocktail hour
- **18:00** — Rehearsal dinner · Video presentation cue
- **18:30** — Toasts · Wireless mic to first speaker
- **18:45** — Mic handoff · Second and third speaker
- **22:00** — Close

#### Key facts (spec block)

- **Client:** Private rehearsal dinner
- **Venue:** The Crooked Ram, Manchester VT
- **Date:** August 2025
- **Services:** 75" display · Video playback · Sound system · Wireless microphones
- **Outcome:** Video seen clearly at every seat. Toasts heard perfectly throughout the room.

#### Your notes (fact-check / tone)

- [ ] Venue / location accurate
- [ ] Dates / recurrence wording accurate
- [ ] Services / gear claims accurate
- [ ] No unintended negative framing about clients or venues

_Write edits or questions below this line._


---

### 12 — Hildene Lincoln Hall Wedding

- **Source file:** `work-hildene.html`
- **Homepage:** Not in the current 10-slide carousel (`index.html`)
- **Work hub category:** Weddings
- **Work hub — venue / date line:** Lincoln Hall at Hildene · Manchester, VT · Summer 2025
- **Work hub — teaser:** Audio for toasts and vows, lighting that honored the historic architecture. Speakers hidden. Nothing visible that shouldn’t be.

#### SEO & social
- **`<title>`:** Hildene Wedding | Portfolio | EQX AV — Technical Producer
- **Meta description:** width=device-width, initial-scale=1.0" name="viewport"/>
<!-- SEO Meta Tags -->
<title>Hildene Wedding | Portfolio | EQX AV — Technical Producer</title>
<meta content="Case study: Hildene Lincoln Hall Wedding. See how we provided Atmospheric Lighting, Live Sound Reinforcement, Stage and Backline, Power Distribution for this event. — EQX AV, technical producer for live events in Vermont and New England.

#### Hero (Case study hero (still/video + case number))

- **Case label:** Case 042
- **Venue / context line:** Lincoln Hall at Hildene — Manchester, VT — Summer 2025
- **Headline:** Lincoln Hall has proportions that ask for ceremony and acoustic character that rewards a live band.

#### Long-form body (case page)

1. Lincoln Hall has hosted weddings for as long as Hildene has opened its doors to the public. The room knows how to receive one. It has proportions that ask for ceremony and an atmosphere that carries weight. A couple who books Lincoln Hall is choosing a specific kind of experience, and our job is to serve that choice without making it smaller.

2. We designed the lighting to work with the architecture rather than over it. Warm perimeter uplighting brought out the detail in the historic woodwork — amber tones that read as celebratory without competing with what the room already offers. The live band brought their own sound; we gave the stage a wash that kept the performance visually present without overwhelming the room. Dance floor lighting responded to the music in real time through the band’s full set.

3. The goal throughout was atmosphere without intrusion. Cables out of sight, equipment out of sightlines, the room as the dominant visual experience. When the lights came up and the dancing started, the production was felt rather than seen.

4. The best lighting at Hildene is the lighting no one notices. The couple and their guests should remember the room, the music, the people in it — not the gear. We know this room well enough to know exactly where everything goes.

#### Run of show (sidebar)

- **14:00** — Load in · Lincoln Hall
- **16:30** — Ceremony · Uplighting to ceremony preset
- **17:30** — Cocktail hour
- **18:30** — Reception · Lighting to reception mode
- **19:00** — First dance · Dance floor lighting in
- **23:00** — Close · Load out

#### Key facts (spec block)

- **Client:** Private wedding
- **Venue:** Lincoln Hall at Hildene · Manchester, VT
- **Date:** Summer 2025
- **Services:** Perimeter uplighting · Dance floor lighting · Stage wash

#### Client pull quote (live on page)

> “Equinox provided exceptional audio and lighting production for our wedding at Hildene. Their team was professional, unobtrusive, and delivered a beautiful result that perfectly honored the venue.”

#### Your notes (fact-check / tone)

- [ ] Venue / location accurate
- [ ] Dates / recurrence wording accurate
- [ ] Services / gear claims accurate
- [ ] No unintended negative framing about clients or venues

_Write edits or questions below this line._


---

### 13 — Kimpton Taconic Wedding

- **Source file:** `work-kimpton-taconic.html`
- **Homepage:** Not in the current 10-slide carousel (`index.html`)
- **Work hub category:** Weddings
- **Work hub — venue / date line:** Kimpton Taconic · Manchester, VT · Early 2025
- **Work hub — teaser:** A winter wedding reception in the Taconic ballroom. Atmospheric lighting and clean audio for a celebration in one of Vermont’s most elegant boutique venues.

#### SEO & social
- **`<title>`:** Kimpton Taconic Wedding | Portfolio | EQX AV — Technical Producer
- **Meta description:** width=device-width, initial-scale=1.0" name="viewport"/>
<!-- SEO Meta Tags -->
<title>Kimpton Taconic Wedding | Portfolio | EQX AV — Technical Producer</title>
<meta content="Case study: Kimpton Taconic Wedding. See how we provided Atmospheric Lighting, Sound System for DJ, Wireless Microphones for this event. — EQX AV, technical producer for live events in Vermont and New England.

#### Hero (Case study hero (still/video + case number))

- **Case label:** Case 040
- **Venue / context line:** Kimpton Taconic Hotel — Manchester, VT — Early 2025
- **Headline:** Manchester’s marquee boutique hotel. Cozy and celebratory simultaneously. The brief asked for both.

#### Long-form body (case page)

1. The Kimpton Taconic ballroom is Manchester’s marquee boutique hotel venue — elegant, intimate, and deserving of production that matches its character. A fall wedding in that space calls for warmth without heaviness, an atmosphere that feels both formal and alive. The couple wanted the room to feel celebratory from the moment guests arrived.

2. We provided perimeter uplighting for the full ballroom, running from the ceremony through the cocktail hour and into the reception. Warm amber tones dressed the room’s architectural surfaces and shifted in register as the evening progressed. The band handled their own sound and backline. The ceremony sound was managed separately. Our focus was on the visual atmosphere — making the room feel right for every moment without calling attention to how it was done.

3. The lighting shifted between three distinct modes across the evening. Our engineer stayed through the full run of show and managed every cue. The room looked exactly like the couple envisioned it.

4. The hotel trusts us with events that require precision. That trust was built in this room, at this wedding.

#### Run of show (sidebar)

- **14:00** — Load in · Ballroom
- **17:00** — Ceremony · Uplighting to ceremony preset
- **18:00** — Cocktail hour · Uplighting transition
- **19:00** — Reception · Uplighting to reception mode
- **20:00** — First dance · Lighting cue
- **23:00** — Close

#### Key facts (spec block)

- **Client:** Private wedding
- **Venue:** Kimpton Taconic Hotel, Manchester VT
- **Date:** Early 2025
- **Services:** Perimeter uplighting
- **Lighting:** Warm amber uplighting · Full ballroom perimeter

#### Your notes (fact-check / tone)

- [ ] Venue / location accurate
- [ ] Dates / recurrence wording accurate
- [ ] Services / gear claims accurate
- [ ] No unintended negative framing about clients or venues

_Write edits or questions below this line._


---

### 14 — Equinox Resort Tent Wedding

- **Source file:** `work-equinox-wedding.html`
- **Homepage:** Carousel slide **3** (`index.html` — Our Events)
- **Work hub category:** Weddings
- **Work hub — venue / date line:** Equinox Resort · Manchester, VT · September 7, 2024
- **Work hub — teaser:** One hundred and twenty guests, one tent, and rain that started ten minutes before the ceremony. The first dance happened at 8:12.

#### SEO & social
- **`<title>`:** Equinox Resort Tent Wedding | Portfolio | EQX AV — Technical Producer
- **Meta description:** width=device-width, initial-scale=1.0" name="viewport"/>
<!-- SEO Meta Tags -->
<title>Equinox Resort Tent Wedding | Portfolio | EQX AV — Technical Producer</title>
<meta content="Case study: Equinox Resort Tent Wedding. See how we provided Professional Sound System, Wireless Microphones for this event. — EQX AV, technical producer for live events in Vermont and New England.

#### Hero (Case study hero (still/video + case number))

- **Case label:** Case 047
- **Venue / context line:** Equinox Resort — Manchester, VT — September 2024
- **Headline:** One hundred and twenty guests under a tent at the Equinox Resort. Every vow heard at every seat.

#### Long-form body (case page)

1. The couple had chosen an outdoor ceremony at the Equinox Resort for reasons that mattered to them — the view, the light, the vows they’d written. The tent was always the plan. Our job was to make sure every one of a hundred and twenty guests heard every word of it.

2. We designed the audio system for the 1811 Lawn with contingency built in from the start: weather-resistant enclosures on all speaker positions, sealed cable runs, a backup wireless chain. The tent handled the afternoon. The officiant went on mic. The couple stood at the altar. Every one of the hundred and twenty guests heard every word.

3. The bride’s music teacher — a family friend who had been teaching her since she was nine — performed during the ceremony. Guitar and voice, live. We ran a discrete DI and vocal mic, mixed live. The performance was the moment every guest remembered. The speakers were behind the floral arrangements; nobody saw them.

4. The reception followed in the same space under the tent. Music transitioned from ceremony to cocktail hour to reception without a gap. The first dance came in the evening and the dance floor was full through the night. The ceremony and what followed it were the story. The production just made sure it could be.

5. Event planner: Candice Grace Events, Manchester, VT. Every logistical decision that afternoon — timeline holds, venue transitions, vendor communication — came from their team. Our job was to show up technically prepared and stay invisible. We did both.

#### Run of show (sidebar)

- **14:00** — Load in · 1811 Lawn
- **15:30** — Doors · Guests seated
- **16:00** — Ceremony cue · Music in
- **16:08** — Vows · Officiant mic live
- **16:22** — Live performance · DI + vocal
- **16:40** — Recessional · Lights to house
- **17:00** — Cocktail · Wireless handoff
- **19:00** — Reception cue · Stage set
- **Evening** — First dance

#### Key facts (spec block)

- **Client:** Private wedding
- **Planner:** Candice Grace Events
- **Venue:** Equinox Resort, Manchester VT
- **Date:** September 7, 2024
- **Guests:** 120
- **Services:** Audio · Live music · Power
- **Outcome:** Every vow heard. Dance floor full through the night.

#### Your notes (fact-check / tone)

- [ ] Venue / location accurate
- [ ] Dates / recurrence wording accurate
- [ ] Services / gear claims accurate
- [ ] No unintended negative framing about clients or venues

_Write edits or questions below this line._


---

### 15 — Hildene Lincoln Hall Wedding

- **Source file:** `work-hildene-wedding-2.html`
- **Homepage:** Carousel slide **6** (`index.html` — Our Events)
- **Work hub category:** Weddings
- **Work hub — venue / date line:** Lincoln Hall at Hildene · Manchester, VT · Fall 2024
- **Work hub — teaser:** Classic Vermont architecture, atmospheric uplighting, wireless audio for vows and toasts. A modern celebration that honored the room.

#### SEO & social
- **`<title>`:** Hildene Lincoln Hall Wedding | Portfolio | EQX AV — Technical Producer
- **Meta description:** width=device-width, initial-scale=1.0" name="viewport"/>
<!-- SEO Meta Tags -->
<title>Hildene Lincoln Hall Wedding | Portfolio | EQX AV — Technical Producer</title>
<meta content="Case study: Hildene Lincoln Hall Wedding. See how we provided Atmospheric Lighting, Live Sound Reinforcement, Wireless Audio for this event. — EQX AV, technical producer for live events in Vermont and New England.

#### Hero (Case study hero (still/video + case number))

- **Case label:** Case 037
- **Venue / context line:** Lincoln Hall at Hildene — Manchester, VT — Fall 2024
- **Headline:** Lincoln Hall is as beautiful a wedding venue as Vermont offers. Our job is to match that level.

#### Long-form body (case page)

1. Hildene’s Lincoln Hall is as beautiful a wedding venue as Vermont offers. The ceilings are high, the architectural details are period, and every element of the room carries weight. A couple who chooses Lincoln Hall for their reception knows exactly what they’re choosing. Our job is to match that level — to bring production that honors the space and serves the moment.

2. We designed the lighting to enhance what the room already offers. Warm amber uplighting ran the perimeter, bringing out the detail in the historic woodwork without competing with the venue’s natural palette. The live band brought their own sound; we gave the stage a wash that kept the performance visually anchored. Dance floor lighting responded to the music in real time throughout the band’s set — present when the floor was full, measured when the room quieted.

3. The ceremony was at Hildene as well. We were present for the lighting; the ceremony sound was handled separately. The room carried the ceremony beautifully on its own terms.

4. The guests stayed on the dance floor through the night. The production served the room, and the room served the couple.

#### Run of show (sidebar)

- **14:00** — Load in · Lincoln Hall
- **16:00** — Ceremony · Uplighting to ceremony preset
- **17:00** — Cocktail hour
- **18:00** — Reception · Lighting to reception mode
- **18:30** — First dance · Dance floor lighting in
- **23:00** — Close · Load out

#### Key facts (spec block)

- **Client:** Private wedding
- **Venue:** Lincoln Hall at Hildene · Manchester, VT
- **Date:** Fall 2024
- **Services:** Perimeter uplighting · Dance floor lighting · Stage wash

#### Your notes (fact-check / tone)

- [ ] Venue / location accurate
- [ ] Dates / recurrence wording accurate
- [ ] Services / gear claims accurate
- [ ] No unintended negative framing about clients or venues

_Write edits or questions below this line._


---

## Regenerating this file

Run from the repository root:

```bash
python3 markdowns/_generate_events_copy_review.py
```
