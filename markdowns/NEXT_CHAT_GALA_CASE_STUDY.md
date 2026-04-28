# Next Chat — Gala Pacing Case Study (Option C)

## Goal

Build a single deep-dive case study that walks a gala planner through the actual evening's pacing and technical choices, **beat by beat**. This is different from our existing case studies, which summarize. This one narrates.

The purpose is to show gala planners we understand their world in a way that generic "we did audio and lights" copy can't.

## Recommended Subject

**Bennington Museum Gala 2024** — we already have six photos (`bennington-museum-gala-2024-01.jpg` through `06.jpg`) and the flythrough video.

Alternate: Hildene SVCC Women in Leadership Luncheon if the gala isn't the best example.

## What I Need From You (Doug)

To write this well, a new chat will need the following facts. If you can dump this info into the next chat as a braindump, the model can shape it into narrative.

### Event facts

- Exact date of the event
- Client name (Bennington Museum)
- Guest count
- Venue name and room(s) used
- What the museum was raising money for
- Your relationship — was this your first event with them? Referral from whom?

### The evening's timeline (critical)

For each beat of the night, roughly:

- **5:30 pm — Guest arrival / cocktails**: What was the ambient audio? Where were speakers placed? Any special lighting (uplighting, pin-spots on auction items)?
- **6:30 pm — Move to dining room / welcome**: Mic handoff? Who spoke first? How did you transition the room audio?
- **7:00 pm — Dinner**: Music bed? Any spoken moments during dinner?
- **8:00 pm — Program begins**: How many speakers? Live auction or fund-a-need? Any video played?
- **8:30 pm — Auction / Paddle raise**: This is the money moment. Walk me through it. What did the audio have to do? What was the lighting cue? Was there a video rolling?
- **9:00 pm — Entertainment**: Band? DJ? Solo performer?
- **Close of evening**: Any final moment? How did the room clear?

### The technical choices you made

For each major moment, why did you choose what you chose?

- How many microphones and why?
- What was the backup plan if a mic failed during the paddle raise?
- Any video content you had to play? Where did you get it?
- Lighting — was there any special cue for the big reveal of the fundraising total?
- Anything that went wrong that we solved invisibly?

### Outcome

- Did they hit their fundraising goal?
- Any quote you can use from the museum staff?
- Were you hired back?

## Page Structure (for the new chat to follow)

Create a new file `work-bennington-gala-case-study.html` modeled on the existing case study pages (e.g., `work-hildene.html`) but with a new section layout:

1. **Page hero** (v2) — video flythrough or hero photo
2. **The Ledger** — one-sentence summary of the event
3. **The Evening, Beat by Beat** — new section type. A vertical timeline (similar to the `process-timeline` component I just built on `/process.html`) where each node is a time stamp and a paragraph.
4. **The Technical Choices** — 3–4 key decisions and why they were made
5. **The Outcome** — a pulled-out stat or quote about the evening's result
6. **Gallery** — the six photos we already have
7. **CTA**

## CSS to Reuse

- `.process-timeline` and `.process-step` classes in `design-system-v2.css` (section 25) can be repurposed or a variant (`.evening-timeline` / `.evening-beat`) can be created from them.
- Use `var(--ember)` for the timing labels to match the house style.

## Target Length

1,200–1,600 words of prose. Long enough to prove depth, short enough for a gala planner to skim in 4 minutes.

## Next-Chat Starter Prompt

> I need you to build a pacing case study page for the Bennington Museum Gala 2024. Use `work-hildene.html` as the structural template, but add a new "The Evening, Beat by Beat" section that uses a vertical timeline component (you can base it on the `.process-timeline` classes in `design-system-v2.css` section 25). I'll paste the raw event facts in my next message — take that braindump and shape it into narrative prose. No "Starting at" pricing anywhere. The tone should match `work.html` and `about.html` — editorial, confident, specific, not marketing-y. Target 1,200–1,600 words.
