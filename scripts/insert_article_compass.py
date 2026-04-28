#!/usr/bin/env python3
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

COMPASS: dict[str, tuple[str, str, str, str]] = {
    "article-av-trends-2025.html": (
        "article-zoom-meeting-tips.html",
        "Previous: How to Run a Professional Remote Meeting",
        "article-av-trends-2026.html",
        "Next: AV Trends Shaping Live Events in 2026",
    ),
    "article-av-trends-2026.html": (
        "article-av-trends-2025.html",
        "Previous: 5 Audio Visual Trends for 2025",
        "article-breakout-management.html",
        "Next: Managing Breakout Sessions at Large Conferences",
    ),
    "article-breakout-management.html": (
        "article-av-trends-2026.html",
        "Previous: AV Trends Shaping Live Events in 2026",
        "article-choose-av-partner.html",
        "Next: How to Choose the Right AV Partner",
    ),
    "article-choose-av-partner.html": (
        "article-breakout-management.html",
        "Previous: Managing Breakout Sessions at Large Conferences",
        "article-conference-speaking.html",
        "Next: Presentation Tips for Speaking at a Conference",
    ),
    "article-conference-speaking.html": (
        "article-choose-av-partner.html",
        "Previous: How to Choose the Right AV Partner",
        "article-engaging-presentation.html",
        "Next: How to Create an Engaging Presentation",
    ),
    "article-engaging-presentation.html": (
        "article-conference-speaking.html",
        "Previous: Presentation Tips for Speaking at a Conference",
        "article-hire-av-lead.html",
        "Next: When to Hire a Dedicated AV Lead",
    ),
    "article-hire-av-lead.html": (
        "article-engaging-presentation.html",
        "Previous: How to Create an Engaging Presentation",
        "article-make-time-rehearsal.html",
        "Next: Why You Should Always Make Time for a Rehearsal",
    ),
    "article-make-time-rehearsal.html": (
        "article-hire-av-lead.html",
        "Previous: When to Hire a Dedicated AV Lead",
        "article-small-meetings.html",
        "Next: The Right AV Setup for Small Meetings",
    ),
    "article-small-meetings.html": (
        "article-make-time-rehearsal.html",
        "Previous: Why You Should Always Make Time for a Rehearsal",
        "article-switch-av-partners.html",
        "Next: Signs It’s Time to Switch AV Partners",
    ),
    "article-switch-av-partners.html": (
        "article-small-meetings.html",
        "Previous: The Right AV Setup for Small Meetings",
        "article-top-5-av-items.html",
        "Next: Top 5 Essential AV Items for Any Event",
    ),
    "article-top-5-av-items.html": (
        "article-switch-av-partners.html",
        "Previous: Signs It’s Time to Switch AV Partners",
        "article-wedding-av-equipment.html",
        "Next: Wedding AV Equipment: What You Need and Why",
    ),
    "article-wedding-av-equipment.html": (
        "article-top-5-av-items.html",
        "Previous: Top 5 Essential AV Items for Any Event",
        "article-zoom-meeting-tips.html",
        "Next: How to Run a Professional Remote Meeting",
    ),
    "article-zoom-meeting-tips.html": (
        "article-wedding-av-equipment.html",
        "Previous: Wedding AV Equipment: What You Need and Why",
        "article-av-trends-2025.html",
        "Next: 5 Audio Visual Trends for 2025",
    ),
}


def nav_block(ph: str, pa: str, nh: str, na: str) -> str:
    return f"""                <nav class="article-compass" aria-label="Previous and next insight">
                    <a class="article-compass__link article-compass__link--prev" href="{ph}" aria-label="{pa}"><span class="article-compass__text">Prev insight</span></a>
                    <div class="article-compass__rule" aria-hidden="true"></div>
                    <a class="article-compass__link article-compass__link--next" href="{nh}" aria-label="{na}"><span class="article-compass__text">Next insight</span></a>
                </nav>
"""


def main() -> None:
    for name, (ph, pa, nh, na) in COMPASS.items():
        p = ROOT / name
        t = p.read_text(encoding="utf-8")
        if "article-compass" in t:
            print(f"skip {name}")
            continue
        ins = nav_block(ph, pa, nh, na)
        t2, n = re.subn(
            r"(\n\s*</div>\s*\n\s*</div>\s*\n\s*</section>)(\s*<nav class=\"article-pagination\")",
            r"\1\n" + ins + r"            \2",
            t,
            count=1,
        )
        if not n:
            print(f"FAIL {name}")
            continue
        t = t2
        p.write_text(t, encoding="utf-8")
        print(f"OK {name}")


if __name__ == "__main__":
    main()
