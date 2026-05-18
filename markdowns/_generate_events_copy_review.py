#!/usr/bin/env python3
"""
Regenerates markdowns/EVENTS_COPY_REVIEW.md from the HTML sources.
Run from repo root: python3 markdowns/_generate_events_copy_review.py
"""

import os
import re
from html import unescape

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Homepage slide order (1-based index in index.html) -> case file each slide represents
HOMEPAGE_SLIDE_CASE = [
    "work-women-in-leadership-2026.html",
    "work-vanish-screening.html",
    "work-equinox-wedding.html",
    "work-arlington.html",
    "work-svcc-annual-meeting.html",
    "work-hildene-wedding-2.html",
    "work-northshire-gala.html",
    "work-two-day-wedding.html",
    "work-bennington-museum.html",
    "work-crooked-ram.html",
]


def decode_entities(s):
    if not s:
        return ""
    s = unescape(s)
    reps = [
        ("&mdash;", "—"),
        ("&ndash;", "–"),
        ("&middot;", "·"),
        ("&ldquo;", "\u201c"),
        ("&rdquo;", "\u201d"),
        ("&lsquo;", "\u2018"),
        ("&rsquo;", "\u2019"),
        ("&quot;", '"'),
        ("&hellip;", "…"),
        ("&amp;", "&"),
        ("&nbsp;", " "),
        ("&#8217;", "'"),
        ("&#8220;", "\u201c"),
        ("&#8221;", "\u201d"),
        ("&#8212;", "—"),
    ]
    for a, b in reps:
        s = s.replace(a, b)
    s = re.sub(r"&#(\d+);", lambda m: chr(int(m.group(1))), s)
    s = re.sub(r"&#x([0-9a-fA-F]+);", lambda m: chr(int(m.group(1), 16)), s)
    return s


def strip_tags(s):
    s = re.sub(r"<(script|style)[^>]*>.*?</\1>", "", s, flags=re.I | re.S)
    s = re.sub(r"<!--.*?-->", "", s, flags=re.S)
    s = re.sub(r"<[^>]+>", " ", s)
    s = re.sub(r"\s+", " ", s).strip()
    return decode_entities(s)


def inner_html(tag, html, class_name):
    m = re.search(
        rf'<{tag}[^>]*class="[^"]*{re.escape(class_name)}[^"]*"[^>]*>(.*?)</{tag}>',
        html,
        re.I | re.S,
    )
    return m.group(1).strip() if m else ""


def extract_title(html):
    m = re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S)
    return decode_entities(strip_tags(m.group(1))) if m else ""


def extract_meta_description(html):
    for pat in (
        r'<meta\s+name=["\']description["\']\s+content=(["\'])(.*?)\1',
        r'<meta\s+content=(["\'])(.*?)\1\s+name=["\']description["\']',
    ):
        m = re.search(pat, html, re.I | re.S)
        if m:
            return decode_entities(m.group(2).strip())
    m = re.search(
        r"<meta\s+content='([^']*)'\s+name=[\"']description[\"']",
        html,
        re.I | re.S,
    )
    if m:
        return decode_entities(m.group(1).strip())
    m = re.search(
        r"<meta\s+name=[\"']description[\"']\s+content='([^']*)'",
        html,
        re.I | re.S,
    )
    if m:
        return decode_entities(m.group(1).strip())
    return ""


def extract_og_twitter(html):
    og = tw = ""
    m = re.search(
        r'<meta\s+property=["\']og:description["\']\s+content=(["\'])(.*?)\1',
        html,
        re.I | re.S,
    )
    if m:
        og = decode_entities(m.group(2).strip())
    m = re.search(
        r'<meta\s+name=["\']twitter:description["\']\s+content=(["\'])(.*?)\1',
        html,
        re.I | re.S,
    )
    if m:
        tw = decode_entities(m.group(2).strip())
    if not tw:
        m = re.search(
            r"<meta\s+content='([^']*)'\s+name=[\"']twitter:description[\"']",
            html,
            re.I | re.S,
        )
        if m:
            tw = decode_entities(m.group(1).strip())
    return og, tw


def extract_ps_from_fragment(fragment):
    if not fragment:
        return []
    out = []
    for m in re.finditer(r"<p[^>]*>(.*?)</p>", fragment, re.I | re.S):
        t = strip_tags(m.group(1))
        if t:
            out.append(t)
    return out


def strip_comments(html):
    return re.sub(r"<!--.*?-->", "", html, flags=re.S)


def extract_testimonial(html):
    h = strip_comments(html)
    m = re.search(
        r'<blockquote[^>]*class="[^"]*testimonial-editorial__quote[^"]*"[^>]*>(.*?)</blockquote>',
        h,
        re.I | re.S,
    )
    if not m:
        return ""
    return strip_tags(m.group(1))


def extract_run_of_show(html):
    h = strip_comments(html)
    m = re.search(r'<aside[^>]*class="[^"]*run-of-show[^"]*"[^>]*>(.*?)</aside>', h, re.I | re.S)
    if not m:
        return []
    block = m.group(1)
    rows = []
    for rm in re.finditer(
        r'<span[^>]*class="[^"]*run-of-show__time[^"]*"[^>]*>(.*?)</span>\s*<span[^>]*class="[^"]*run-of-show__event[^"]*"[^>]*>(.*?)</span>',
        block,
        re.I | re.S,
    ):
        t, ev = strip_tags(rm.group(1)), strip_tags(rm.group(2))
        if t or ev:
            rows.append((t, ev))
    return rows


def extract_spec_rows(html):
    h = strip_comments(html)
    m = re.search(
        r'<div[^>]*class="[^"]*run-of-show__spec[^"]*"[^>]*>(.*?)</div>\s*</aside>',
        h,
        re.I | re.S,
    )
    if not m:
        return []
    block = m.group(1)
    pairs = []
    for rm in re.finditer(
        r'run-of-show__spec-label[^>]*>(.*?)</span>.*?run-of-show__spec-value[^>]*>(.*?)</span>',
        block,
        re.I | re.S,
    ):
        pairs.append((strip_tags(rm.group(1)), strip_tags(rm.group(2))))
    return pairs


def parse_work_index():
    path = os.path.join(BASE, "work.html")
    with open(path, encoding="utf-8", errors="ignore") as f:
        html = f.read()
    rows = []
    current_cat = ""
    for m in re.finditer(
        r'<div class="work-index__category">(.*?)</div>|<a href="(work-[^"#]+\.html)"[^>]*class="case-row"[^>]*>(.*?)</a>',
        html,
        re.S,
    ):
        if m.group(1) is not None:
            current_cat = strip_tags(m.group(1))
            continue
        href, inner = m.group(2), m.group(3)
        num = strip_tags(inner_html("div", inner, "case-row__number"))
        name = strip_tags(inner_html("div", inner, "case-row__name"))
        meta = strip_tags(inner_html("div", inner, "case-row__meta"))
        desc = strip_tags(inner_html("div", inner, "case-row__description"))
        rows.append(
            {
                "href": href,
                "category": current_cat,
                "number": num,
                "name": name,
                "meta": meta,
                "description": desc,
            }
        )
    return rows


def parse_home_spotlight():
    path = os.path.join(BASE, "index.html")
    with open(path, encoding="utf-8", errors="ignore") as f:
        html = f.read()
    triples = re.findall(
        r'<div class="event-spotlight__date[^>]*>(.*?)</div>\s*'
        r'<div class="event-spotlight__venue[^>]*>(.*?)</div>\s*'
        r'<div class="event-spotlight__event[^>]*>(.*?)</div>',
        html,
        re.I | re.S,
    )
    slides = []
    for date, venue, event in triples:
        slides.append(
            {
                "date": strip_tags(date),
                "venue": strip_tags(venue),
                "event": strip_tags(event),
            }
        )
    return slides


def parse_case_body_narrative(html):
    m = re.search(
        r'<div[^>]*class="[^"]*case-body__narrative[^"]*"[^>]*>(.*?)</div>\s*(?:<!--|<aside)',
        html,
        re.I | re.S,
    )
    if m:
        return extract_ps_from_fragment(m.group(1))
    return []


def parse_pricing_prose(html):
    m = re.search(
        r'<div[^>]*class="[^"]*pricing-approach__prose[^"]*"[^>]*>(.*?)</div>\s*</div>',
        html,
        re.I | re.S,
    )
    if m:
        return extract_ps_from_fragment(m.group(1))
    return []


def parse_case_hero(html):
    loc = inner_html("p", html, "page-hero-v2__location")
    hm = re.search(
        r'<h1[^>]*class="[^"]*page-hero-v2__headline[^"]*"[^>]*>(.*?)</h1>',
        html,
        re.I | re.S,
    )
    if hm:
        return "page-hero-v2", strip_tags(loc), strip_tags(hm.group(1)), ""
    vm = re.search(
        r'<div[^>]*class="[^"]*case-study-hero__venue[^"]*"[^>]*>(.*?)</div>',
        html,
        re.I | re.S,
    )
    hm = re.search(
        r'<h1[^>]*class="[^"]*case-study-hero__headline[^"]*"[^>]*>(.*?)</h1>',
        html,
        re.I | re.S,
    )
    num_m = re.search(
        r'<div[^>]*class="[^"]*case-study-hero__number[^"]*"[^>]*>(.*?)</div>',
        html,
        re.I | re.S,
    )
    case_num = strip_tags(num_m.group(1)) if num_m else ""
    if hm:
        return (
            "case-study-hero",
            strip_tags(vm.group(1)) if vm else "",
            strip_tags(hm.group(1)),
            case_num,
        )
    return "unknown", "", "", case_num


def load_case(path):
    with open(path, encoding="utf-8", errors="ignore") as f:
        return f.read()


def md_escape(s):
    return s.replace("|", "\\|")


def norm_light(s):
    return re.sub(r"\s+", " ", s.lower()).strip()


def main():
    lines = []

    lines += [
        "# Events & portfolio copy — human review framework",
        "",
        "This document is generated from the live HTML so you can fact-check **one event at a time** with all the places it appears in one place.",
        "",
        "For **non-portfolio** pages (services, about, insights articles, region SEO, and so on) in a single long dump, use `markdowns/COPY_AUDIT_FULL.md`.",
        "",
        "## How to use",
        "",
        "1. Skim **Homepage vs work index** (Section C) for mismatched dates, venues, or event titles.",
        "2. For each event card in Section D, verify **venue**, **dates**, **event type**, and **claims** (gear, headcount, partnerships, years).",
        "3. Use **Your notes** at the bottom of each card for corrections and questions.",
        "4. When you are done, send back edits and we will update the HTML sources.",
        "",
        "---",
        "",
    ]

    slides = parse_home_spotlight()
    lines += [
        "## A. Homepage — “Our Events” carousel (`index.html`)",
        "",
        "What visitors see in the rotating photo strip. (Dates here are **display labels** — compare to the work hub and case page for the canonical story.)",
        "",
        "| # | Date label | Venue | Event title | Intended case page (editorial link) |",
        "|---|------------|-------|---------------|-------------------------------------|",
    ]
    for i, s in enumerate(slides, 1):
        intended = HOMEPAGE_SLIDE_CASE[i - 1] if i <= len(HOMEPAGE_SLIDE_CASE) else "—"
        lines.append(
            f"| {i} | {md_escape(s['date'])} | {md_escape(s['venue'])} | {md_escape(s['event'])} | `{intended}` |"
        )
    lines += ["", "---", ""]

    wrows = parse_work_index()
    by_href = {r["href"]: r for r in wrows}

    lines += [
        "## B. Work hub — editorial list (`work.html`)",
        "",
        "Canonical **order and category** for portfolio rows.",
        "",
        "| # | Category | Event name | Venue / date line | Teaser (index blurb) | Case file |",
        "|---|----------|------------|-------------------|----------------------|-----------|",
    ]
    for r in wrows:
        lines.append(
            f"| {r['number']} | {md_escape(r['category'])} | {md_escape(r['name'])} | {md_escape(r['meta'])} | {md_escape(r['description'])} | `{r['href']}` |"
        )
    lines += ["", "---", ""]

    lines += [
        "## C. Cross-check: homepage slide ↔ work index ↔ case",
        "",
        "Each homepage slide is mapped to its **intended** case file (same order as `index.html`). "
        "The work index row for that file is copied here so you can spot drift (e.g. different month/year wording). "
        "Update `HOMEPAGE_SLIDE_CASE` in `markdowns/_generate_events_copy_review.py` if you reorder or replace slides.",
        "",
        "| HP # | Carousel (date · venue · event) | Work index row for that case | Drift notes |",
        "|---|---------------------------------|--------------------------------|-------------|",
    ]

    for i, s in enumerate(slides, 1):
        href = HOMEPAGE_SLIDE_CASE[i - 1] if i <= len(HOMEPAGE_SLIDE_CASE) else None
        car = f"{s['date']} · {s['venue']} · {s['event']}"
        if href and href in by_href:
            wr = by_href[href]
            wline = f"#{wr['number']} — {wr['meta']} — _{wr['name']}_"
            notes = []
            if norm_light(s["date"]) not in norm_light(wr["meta"]) and "annual" not in wr["meta"].lower():
                if s["date"] and wr["meta"]:
                    notes.append("Date wording differs between carousel and work index.")
            if norm_light(s["venue"]) not in norm_light(wr["meta"] + wr["name"]):
                notes.append("Venue wording differs.")
            if norm_light(s["event"]) not in norm_light(wr["name"] + wr["description"]):
                notes.append("Event title differs from work index name/teaser.")
            note = " ".join(notes) if notes else "—"
        else:
            wline = "—"
            note = "No mapped case file — update HOMEPAGE_SLIDE_CASE in the generator script."
        lines.append(f"| {i} | {md_escape(car)} | {md_escape(wline)} | {note} |")

    lines += ["", "---", ""]

    lines += [
        "## D. Event-by-event — full copy in context",
        "",
        "Same order as **the work hub** (`work.html`) so it matches how the site is browsed.",
        "",
    ]

    for r in wrows:
        href = r["href"]
        path = os.path.join(BASE, href)
        if not os.path.exists(path):
            lines += [f"### {r['number']} — {r['name']}", "", f"_Missing file `{href}`_", "", "---", ""]
            continue
        html = load_case(path)
        title = extract_title(html)
        meta_d = extract_meta_description(html)
        og_d, tw_d = extract_og_twitter(html)
        hero = parse_case_hero(html)
        if hero[0] == "case-study-hero":
            _, venue_line, headline, case_num = hero
            hero_kind = "Case study hero (still/video + case number)"
        elif hero[0] == "page-hero-v2":
            _, venue_line, headline, case_num = hero
            hero_kind = "Page hero v2 (image hero)"
        else:
            venue_line, headline, case_num = "", "", hero[-1] if hero else ""
            hero_kind = hero[0]

        paras = parse_case_body_narrative(html) or parse_pricing_prose(html)
        ros = extract_run_of_show(html)
        specs = extract_spec_rows(html)
        quote = extract_testimonial(html)

        hp_refs = [str(j) for j, h in enumerate(HOMEPAGE_SLIDE_CASE, 1) if h == href]
        if hp_refs:
            hp_line = f"- **Homepage:** Carousel slide **{hp_refs[0]}** (`index.html` — Our Events)"
        else:
            hp_line = "- **Homepage:** Not in the current 10-slide carousel (`index.html`)"

        lines += [
            f"### {r['number']} — {r['name']}",
            "",
            f"- **Source file:** `{href}`",
            hp_line,
            f"- **Work hub category:** {r['category']}",
            f"- **Work hub — venue / date line:** {r['meta']}",
            f"- **Work hub — teaser:** {r['description']}",
            "",
            "#### SEO & social",
            f"- **`<title>`:** {title}",
            f"- **Meta description:** {meta_d or '—'}",
        ]
        if og_d and og_d != meta_d:
            lines.append(f"- **Open Graph description:** {og_d}")
        if tw_d and tw_d not in (meta_d, og_d):
            lines.append(f"- **Twitter description:** {tw_d}")
        lines += ["", f"#### Hero ({hero_kind})", ""]
        if case_num:
            lines.append(f"- **Case label:** {case_num}")
        lines += [
            f"- **Venue / context line:** {venue_line or '—'}",
            f"- **Headline:** {headline or '—'}",
            "",
            "#### Long-form body (case page)",
            "",
        ]
        if paras:
            for j, p in enumerate(paras, 1):
                lines.append(f"{j}. {p}")
                lines.append("")
        else:
            lines.append("_No narrative paragraphs detected._")
            lines.append("")

        if ros:
            lines += ["#### Run of show (sidebar)", ""]
            for t, ev in ros:
                if t and not ev:
                    lines.append(f"- **{t}**")
                else:
                    lines.append(f"- **{t}** — {ev}")
            lines.append("")

        if specs:
            lines += ["#### Key facts (spec block)", ""]
            for k, v in specs:
                lines.append(f"- **{k}:** {v}")
            lines.append("")

        if quote:
            lines += ["#### Client pull quote (live on page)", "", f"> {quote}", ""]

        lines += [
            "#### Your notes (fact-check / tone)",
            "",
            "- [ ] Venue / location accurate",
            "- [ ] Dates / recurrence wording accurate",
            "- [ ] Services / gear claims accurate",
            "- [ ] No unintended negative framing about clients or venues",
            "",
            "_Write edits or questions below this line._",
            "",
            "",
            "---",
            "",
        ]

    lines += [
        "## Regenerating this file",
        "",
        "Run from the repository root:",
        "",
        "```bash",
        "python3 markdowns/_generate_events_copy_review.py",
        "```",
        "",
    ]

    out_path = os.path.join(BASE, "markdowns", "EVENTS_COPY_REVIEW.md")
    with open(out_path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

    print("Wrote", out_path)


if __name__ == "__main__":
    main()
