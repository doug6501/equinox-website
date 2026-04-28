#!/usr/bin/env python3
"""Apply asymmetric 12-col editorial article layout to article-*.html ."""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def parse_img_attrs(s: str) -> tuple[str, str]:
    m_src = re.search(r'src="([^"]*)"', s)
    m_alt = re.search(r'alt="([^"]*)"', s)
    return (
        m_src.group(1) if m_src else "",
        m_alt.group(1) if m_alt else "",
    )


def parse_meta(html: str) -> dict:
    d = {"author": "Doug Kunnath", "date": "", "read": "", "cat": ""}
    m = re.search(r'<aside class="article-meta">(.*?)</aside>', html, re.DOTALL)
    if not m:
        return d
    block = m.group(1)
    for lab, key in [
        ("Author", "author"),
        ("Published", "date"),
        ("Read time", "read"),
        ("Category", "cat"),
    ]:
        mm = re.search(
            rf"{lab}.*?article-meta__value" r'">(.*?)</div>',
            block,
            re.DOTALL,
        )
        if mm:
            d[key] = re.sub(r"\s+", " ", mm.group(1).strip())
    return d


def inject_breakout_after_first_h2_block(body: str, src: str) -> str:
    if 'class="breakout-wide"><img' in body:
        return body
    m = re.search(
        r"(<h2>.*?</h2>(?:\s*<h[34]>.*?</h[34]>)*\s*<p>.*?</p>)",
        body,
        re.DOTALL | re.IGNORECASE,
    )
    ins = f'\n<div class="breakout-wide"><img src="{src}" alt="" loading="lazy" decoding="async"></div>\n'
    if m:
        return body[: m.end()] + ins + body[m.end() :]
    m2 = re.search(r"(<h2>.*?</h2>\s*<p>.*?</p>)", body, re.DOTALL | re.IGNORECASE)
    if m2:
        return body[: m2.end()] + ins + body[m2.end() :]
    return body


def inject_media_before_h2_index(body: str, src: str, idx: int) -> str:
    if 'class="media-break"' in body:
        return body
    h2s = list(re.finditer(r"<h2>.*?</h2>", body, re.DOTALL | re.IGNORECASE))
    if not h2s:
        return body
    use = min(max(idx, 0), len(h2s) - 1)
    pos = h2s[use].start()
    mb = f'\n<div class="media-break breakout-full" role="presentation"><img src="{src}" alt="" loading="lazy" decoding="async"></div>\n\n'
    return body[:pos] + mb + body[pos:]


def transform(text: str) -> str:
    msec = re.search(
        r'<section class="page-hero-v2">(?P<img>\s*<img\s+.*?>)\s*'
        r'<div class="page-hero-v2__content">(?P<content>.*?)</div>\s*</section>',
        text,
        re.DOTALL,
    )
    if not msec:
        raise ValueError("page-hero block not found")
    img_line = re.sub(r"\s+", " ", msec.group("img").strip())
    c_in = msec.group("content").strip()
    meta = parse_meta(text)
    read = re.sub(
        r"\s+read\s*$", "", meta["read"], flags=re.IGNORECASE
    ).strip() or (meta["read"] or "5 min read")

    hero = f"""        <section class="page-hero-v2 page-hero-v2--editorial">
            <div class="article-layout__inner page-hero-v2__inner">
            <div class="breakout-wide page-hero-v2__image-wrap">
            {img_line}
            </div>
            <div class="page-hero-v2__content">
                {c_in}
            </div>
            </div>
        </section>"""
    out = text[: msec.start()] + hero + text[msec.end() :]
    out = re.sub(
        r"\s*<aside class=" r'"article-meta">.*?</aside>',
        "",
        out,
        count=1,
        flags=re.DOTALL,
    )
    field = f"""                <aside class="article-field" aria-label="Article details">
                    <p class="field-note"><span class="field-note__label">By</span> {meta["author"]}</p>
                    <p class="field-note"><span class="field-note__label">Date</span> {meta["date"]}</p>
                    <p class="field-note"><span class="field-note__label">Category</span> {meta["cat"]}</p>
                </aside>
"""
    rail = f"""                <div class="article-rail" aria-hidden="true">
                    <span class="article-rail__read">{read}</span>
                </div>
"""
    out = re.sub(
        r'<div class="article-layout__inner">\s*<div class="article-layout__body">',
        '<div class="article-layout__inner">\n' + rail + field + '                <div class="article-body">',
        out,
        count=1,
    )
    out = re.sub(
        r'(<div class="article-cta">.*?</div>)\s*</div>\s*</section>',
        r"\1\n            </div>\n            </div>\n        </section>",
        out,
        count=1,
        flags=re.DOTALL,
    )
    m = re.search(
        r'<div class="article-body">(.*?)\s*</div>\s*</div>\s*</section>',
        out,
        re.DOTALL,
    )
    if not m:
        return out
    body = m.group(1)
    mh = re.search(r'page-hero-v2--editorial.*?\ssrc="([^"]+)"', out, re.DOTALL)
    src = mh.group(1) if mh else ""
    n_h2 = len(
        re.findall(
            r"<h2>.*?</h2>", body, re.DOTALL | re.IGNORECASE
        )
    )
    mid = 3 if n_h2 > 3 else (1 if n_h2 > 1 else 0)
    body2 = inject_breakout_after_first_h2_block(body, src)
    body2 = inject_media_before_h2_index(body2, src, mid)
    return out[: m.start(1)] + body2 + out[m.end(1) :]


def main() -> int:
    for p in sorted(ROOT.glob("article-*.html")):
        t = p.read_text(encoding="utf-8")
        if "page-hero-v2--editorial" in t:
            print(f"skip: {p.name}")
            continue
        try:
            t2 = transform(t)
        except ValueError as e:
            print(f"ERR {p.name}: {e}", file=sys.stderr)
            continue
        p.write_text(t2, encoding="utf-8")
        print(f"OK {p.name}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
