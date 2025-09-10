# 📸 Photo Implementation Guide for Equinox Audio Visuals

## ✅ Step 1: HTML Files Updated
All HTML files have been updated to reference the new image filenames. The following placeholders have been replaced:

### Case Study Galleries Updated:
- **Bennington Museum**: `bennington-gala-gallery-1.jpg` through `bennington-gala-gallery-4.jpg`
- **Kimpton Taconic**: `kimpton-gallery-1.jpg` through `kimpton-gallery-4.jpg`
- **Hildene Wedding**: `hildene-gallery-1.jpg` through `hildene-gallery-4.jpg`
- **Vanish Screening**: `vanish-gallery-1.jpg` through `vanish-gallery-4.jpg`

## 🎯 Step 2: Image Generation Priority List

### **IMMEDIATE (Generate First)**
1. **`parallax-wedding.jpg`** - Homepage parallax section
2. **`story-team-home.jpg`** - Homepage "Our Story" section
3. **`service-corporate.jpg`** - Services page corporate card
4. **`service-wedding.jpg`** - Services page wedding card
5. **`service-gala.jpg`** - Services page gala card
6. **`approach-teamwork.jpg`** - Services page "Our Approach" section

### **HIGH PRIORITY (Generate Next)**
7. **`story-main-about.jpg`** - About page main story section
8. **`parallax-tech.jpg`** - About page parallax section
9. **Gallery images** - All case study gallery photos (16 total)

### **MEDIUM PRIORITY (Generate Later)**
10. **Insights page images** - Article thumbnails
11. **Article template images** - Default and specific article heroes

## 🛠️ Step 3: AI Image Generation Tools

### **Recommended Tools (in order of quality):**
1. **Midjourney** (Best quality, most cinematic)
2. **DALL-E 3** (Great for specific compositions)
3. **Stable Diffusion** (Good for batch generation)
4. **Adobe Firefly** (Professional, commercial use)

### **Generation Tips:**
- Use the exact prompts provided by Gemini
- Add `--ar 7:4` for service cards, galleries, and articles
- Add `--ar 9:7` for hero/parallax images
- Add `--quality 2 --style raw` for best results
- Generate 2-3 variations of each image
- Save in high resolution (minimum 700px wide for 7:4, 1260px wide for 9:7)
- Use JPG format for web optimization

## 📐 Step 4: Image Specifications

### **Dimensions (Updated for Stable Diffusion):**
- **Hero/Parallax images**: 9:7 aspect ratio (e.g., 1260x980px)
- **Service cards**: 7:4 aspect ratio (e.g., 700x400px)
- **Gallery images**: 7:4 aspect ratio (e.g., 700x400px)
- **Article images**: 7:4 aspect ratio (e.g., 700x400px)

### **File Naming Convention:**
- Use exact filenames as specified in Gemini's list
- Save all images in the `assets/` folder
- Use lowercase with hyphens (e.g., `service-corporate.jpg`)

## 🎨 Step 5: Color Palette & Style Guidelines

### **Consistent Aesthetic:**
- **Warm, cinematic color grading**
- **Vintage film grain texture**
- **Deep shadows with warm highlights**
- **Color palette**: Faded orange (#D97941), cream, dark brown (#4A2B2A)
- **Mood**: Professional, sophisticated, slightly nostalgic

### **Composition Style:**
- **Cinematic framing** with dramatic lighting
- **Shallow depth of field** for focus
- **Warm, golden hour lighting** when possible
- **Professional, high-end atmosphere**

## 🚀 Step 6: Implementation Process

### **Phase 1: Core Images (Week 1)**
1. Generate the 6 immediate priority images
2. Upload to `assets/` folder
3. Test on website
4. Adjust any sizing issues

### **Phase 2: Gallery Images (Week 2)**
1. Generate all 16 gallery images
2. Upload and test
3. Optimize file sizes for web

### **Phase 3: Content Images (Week 3)**
1. Generate insights and article images
2. Final testing and optimization

## 📊 Step 7: Quality Checklist

### **Before Uploading:**
- [ ] Image matches the prompt description
- [ ] Correct dimensions and aspect ratio
- [ ] File size under 500KB (web optimized)
- [ ] Filename matches exactly
- [ ] Alt text is descriptive and SEO-friendly

### **After Uploading:**
- [ ] Image displays correctly on website
- [ ] No broken image links
- [ ] Responsive behavior on mobile
- [ ] Loading speed is acceptable

## 🔧 Step 8: Technical Notes

### **File Optimization:**
- Use tools like TinyPNG or ImageOptim
- Maintain quality while reducing file size
- Test loading speed with PageSpeed Insights

### **Backup Strategy:**
- Keep original high-res versions
- Create web-optimized copies
- Store in organized folder structure

## 📈 Expected Results

Once all images are implemented:
- **Professional, cinematic aesthetic** throughout the site
- **Consistent brand visual identity**
- **Improved user engagement** and time on site
- **Higher conversion rates** from better visual appeal
- **Premium brand perception** matching your service quality

## 🆘 Troubleshooting

### **Common Issues:**
- **Images not loading**: Check file paths and names
- **Poor quality**: Regenerate with higher resolution
- **Wrong aspect ratio**: Crop or regenerate with correct dimensions
- **File too large**: Optimize with compression tools

### **Need Help?**
- Test one image at a time
- Check browser console for errors
- Verify file permissions in assets folder
- Ensure filenames match exactly (case-sensitive)

---

**Next Action**: Start with the 6 immediate priority images using your preferred AI tool and the exact prompts provided by Gemini.
