#!/usr/bin/env python3
"""Patch article-*.html for Section 30 editorial grid."""
import re
import glob
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def extract_category(text: str) -> str:
    m = re.search(
        r'field-note__label">Category</span>\s*([^<]+)</p>',
        text,
    )
    return m.group(1).strip() if m else "Editorial"


def main() -> None:
    for path in sorted(glob.glob(str(ROOT / "article-*.html"))):
        t = open(path, encoding="utf-8").read()
        t = t.replace("breakout-wide page-hero-v2__image-wrap", "breakout-full page-hero-v2__image-wrap")
        t = t.replace('class="breakout-wide"', 'class="breakout-right"')
        t = t.replace(">Prev insight<", ">Prev<")
        t = t.replace(">Next insight<", ">Next<")

        if "article-rail__stack" not in t:
            cat = extract_category(t)
            m = re.search(
                r'<div class="article-rail"[^>]*>\s*<span class="article-rail__read">([^<]+)</span>\s*</div>',
                t,
            )
            if m:
                read = m.group(1).strip()
                new_rail = (
                    f'                <div class="article-rail" role="complementary" aria-label="Article metadata">\n'
                    f'                <div class="article-rail__stack">\n'
                    f'                    <span class="article-rail__read">{read}</span>\n'
                    f'                    <div class="article-rail__rule" aria-hidden="true"></div>\n'
                    f'                    <span class="article-rail__category">{cat}</span>\n'
                    f"                </div>\n"
                    f"                </div>\n"
                )
                t = t[: m.start()] + new_rail + t[m.end() :]
            t = re.sub(
                r'\s*<p class="field-note"><span class="field-note__label">Category</span>[^<]*</p>\s*\n',
                "\n",
                t,
                count=1,
            )

        open(path, "w", encoding="utf-8").write(t)
        print(Path(path).name)


if __name__ == "__main__":
    main()
