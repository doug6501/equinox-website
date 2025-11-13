#!/bin/bash
# Temporary script to refactor remaining HTML files

cd /Users/dougkunnath/equinox-website/equinox-website

# List of files to process
files=(
  "work-equinox-wedding.html"
  "work-hildene-volunteer.html"
  "work-hildene.html"
  "work-kimpton-taconic.html"
  "work-two-day-wedding.html"
  "work-vanish-screening.html"
  "article-av-trends-2025.html"
  "article-breakout-management.html"
  "article-choose-av-partner.html"
  "article-choose-partner.html"
  "article-conference-speaking.html"
  "article-engaging-presentation.html"
  "article-hire-av-lead.html"
  "article-make-time-rehearsal.html"
  "article-small-meetings.html"
  "article-switch-av-partners.html"
  "article-template.html"
  "article-top-5-av-items.html"
  "article-wedding-av-equipment.html"
  "article-zoom-meeting-tips.html"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Processing $file..."
    
    # Create backup
    cp "$file" "${file}.bak"
    
    # Use perl to do in-place replacement for header
    # Replace from <header class="main-header"> to </header> with placeholder
    perl -i -0pe 's/<header class="main-header">.*?<\/header>/<div id="header-placeholder"><\/div>/s' "$file"
    
    # Replace footer section
    perl -i -0pe 's/<footer class="main-footer">.*?<\/footer>/<div id="footer-placeholder"><\/div>/s' "$file"
    
    echo "  ✓ Completed $file"
  else
    echo "  ✗ File not found: $file"
  fi
done

echo ""
echo "Refactoring complete!"
echo "Backups created with .bak extension"

