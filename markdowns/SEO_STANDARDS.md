# SEO Standards for Equinox Audio Visuals Website

## Critical Rule: Every Page Must Have Unique Metadata

**EVERY new HTML page MUST have:**

1. **A unique `<title>` tag** (50-60 characters ideal)
2. **A unique `<meta name="description">` tag** (150-155 characters ideal)

Duplicate metadata hurts SEO rankings and confuses search engines.

---

## Title Tag Standards

### Format by Page Type:

**Service Pages:**
```html
<title>[Service Type] | Equinox Audio Visuals</title>
```
Example: `Corporate Event Production & AV Services | Equinox Audio Visuals`

**Portfolio/Work Pages:**
```html
<title>[Project Name] | Portfolio | Equinox Audio Visuals</title>
```
Example: `Hildene Lincoln Hall Wedding | Portfolio | Equinox Audio Visuals`

**Article/Blog Pages:**
```html
<title>[Article Headline] | AV Insights | Equinox Audio Visuals</title>
```
Example: `How to Choose the Best AV Partner | AV Insights | Equinox Audio Visuals`

**Main Pages:**
```html
<title>[Page Purpose] - Equinox Audio Visuals | [Location]</title>
```
Example: `Professional Event Production - Equinox Audio Visuals | Manchester, VT`

---

## Description Tag Standards

### Best Practices:

- **Length:** 150-155 characters (Google truncates at ~155)
- **Include:** Primary keyword, location (if relevant), call-to-action or benefit
- **Avoid:** Duplicate descriptions, keyword stuffing, generic text

### Format by Page Type:

**Service Pages:**
```html
<meta name="description" content="[Benefit statement]. [2-3 key services]. [Location if relevant].">
```
Example: `Flawless AV execution for conferences, board meetings, and corporate events. Wireless audio, live streaming, and presenter support in Manchester, VT.`

**Portfolio Pages:**
```html
<meta name="description" content="Case study: [Project Name]. See how we provided [2-3 services] for this event.">
```
Example: `Case study: Hildene Lincoln Hall Wedding. See how we provided Atmospheric Lighting Design, Live Sound Reinforcement for this event.`

**Article Pages:**
```html
<meta name="description" content="[First 150 chars of opening paragraph, truncated cleanly]">
```
Example: `Your laptop's built-in camera and microphone aren't doing you any favors. We've all been on those Zoom calls where someone sounds like they're...`

---

## Required Meta Tags (All Pages)

Every HTML page must include:

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title>[UNIQUE TITLE HERE]</title>
    <meta name="description" content="[UNIQUE DESCRIPTION HERE]">
    <meta name="keywords" content="[relevant, keywords, here]">
    <meta name="author" content="Equinox Audio Visuals">
    
    <!-- Open Graph (for social sharing) -->
    <meta property="og:title" content="[SAME AS TITLE]">
    <meta property="og:description" content="[SAME AS DESCRIPTION]">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.equinoxaudiovisuals.com/[PAGE-NAME].html">
    <meta property="og:image" content="https://www.equinoxaudiovisuals.com/assets/logo.png">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="[SAME AS TITLE]">
    <meta name="twitter:description" content="[SAME AS DESCRIPTION]">
    <meta name="twitter:image" content="https://www.equinoxaudiovisuals.com/assets/logo.png">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://www.equinoxaudiovisuals.com/[PAGE-NAME].html">
</head>
```

---

## Checklist for New Pages

Before publishing any new HTML page:

- [ ] Title tag is unique (not duplicated anywhere else on site)
- [ ] Title tag is 50-60 characters
- [ ] Description is unique (not duplicated anywhere else on site)
- [ ] Description is 150-155 characters
- [ ] Description includes primary keyword
- [ ] Keywords meta tag includes 5-10 relevant terms
- [ ] Open Graph tags are populated
- [ ] Twitter Card tags are populated
- [ ] Canonical URL is set correctly
- [ ] Page is added to sitemap.xml

---

## Tools for Validation

**Check Title/Description Length:**
```bash
# Count characters in title
echo "Your Title Here" | wc -c

# Count characters in description
echo "Your description here" | wc -c
```

**Check for Duplicate Titles:**
```bash
grep -h "<title>" *.html | sort | uniq -d
```

**Check for Duplicate Descriptions:**
```bash
grep -h 'meta name="description"' *.html | sort | uniq -d
```

---

## Common Mistakes to Avoid

❌ **DON'T:**
- Copy/paste the same title across multiple pages
- Use generic descriptions like "View our event production work"
- Exceed 155 characters in descriptions (they get cut off)
- Forget to update Open Graph tags
- Use "Article - Equinox Audio Visuals" for every article

✅ **DO:**
- Write unique, descriptive titles for every page
- Front-load important keywords in titles and descriptions
- Include location (Manchester, VT) when relevant
- Update sitemap.xml when adding new pages
- Test how your metadata looks in Google search results

---

## Updating Sitemap

After adding new pages, regenerate sitemap.xml:

```bash
# List all HTML files
ls *.html > /tmp/pages.txt

# Update sitemap.xml with new pages
# (Use sitemap generator tool or manual update)
```

---

## Questions?

If you're unsure about metadata for a new page, refer to similar existing pages:
- Service pages → Look at `services-corporate.html`
- Portfolio pages → Look at `work-hildene.html`
- Article pages → Look at `article-choose-av-partner.html`

**Remember:** Unique metadata = Better SEO = More traffic = More business.

