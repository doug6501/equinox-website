#!/bin/bash
# Script to rename client logos to standardized names

cd assets/

# Check and rename each logo file
if [ -f "equinox resort logo.png" ]; then
    mv "equinox resort logo.png" "logo-equinox-resort.png"
    echo "✅ Renamed: equinox resort logo.png → logo-equinox-resort.png"
fi

if [ -f "kimpton taconic logo.png" ]; then
    mv "kimpton taconic logo.png" "logo-kimpton.png"
    echo "✅ Renamed: kimpton taconic logo.png → logo-kimpton.png"
fi

if [ -f "Arlington Common Logo.webp" ]; then
    mv "Arlington Common Logo.webp" "logo-arlington.webp"
    echo "✅ Renamed: Arlington Common Logo.webp → logo-arlington.webp"
fi

if [ -f "hildene logo.webp" ]; then
    mv "hildene logo.webp" "logo-hildene.webp"
    echo "✅ Renamed: hildene logo.webp → logo-hildene.webp"
fi

if [ -f "bennington museum logo.png" ]; then
    mv "bennington museum logo.png" "logo-bennington.png"
    echo "✅ Renamed: bennington museum logo.png → logo-bennington.png"
fi

echo ""
echo "Logo renaming complete! Now updating HTML files..."
