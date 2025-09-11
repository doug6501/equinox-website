# Hero Image AI Generation Prompts

## 📐 **Image Specifications**
- **Aspect Ratio**: 7:4 (landscape orientation)
- **Style**: Professional, cinematic, high-quality photography
- **Focus**: Audio visual, event production, professional services
- **Quality**: High resolution, commercial use ready

---

## 🎯 **HERO IMAGE PROMPTS FOR MAIN PAGES**

### **1. Our Work Page**
**Filename**: `hero-work-portfolio.jpg`
**Aspect Ratio**: 7:4
**Page Content**: Showcases portfolio of events, galas, weddings, corporate events

**Stable Diffusion Prompt**:
```
Professional photograph of a stunning event setup showcasing multiple AV elements: elegant LED wall displays showing dynamic graphics, professional lighting rigs with warm golden illumination, high-end speakers and mixing console, and beautiful event space with guests mingling. The scene should convey luxury, professionalism, and technical excellence. Cinematic lighting with warm gold and cool blue accents. High-end event production atmosphere. --ar 7:4 --quality 2 --style raw
```

**Gemini Prompt**:
```
Create a professional photograph of a luxury event in progress with sophisticated audio visual equipment. Show an elegant event space with LED displays, professional lighting, high-end sound systems, and well-dressed guests. The scene should convey premium event production, technical excellence, and luxury. Use warm golden lighting with cool blue accents to create a cinematic atmosphere that emphasizes the quality and professionalism of the AV setup.
```

### **2. Services Page**
**Filename**: `hero-services-capabilities.jpg`
**Aspect Ratio**: 7:4
**Page Content**: "Our Capabilities" - Full-service event production, AV solutions & rentals

**Stable Diffusion Prompt**:
```
Professional photograph of a comprehensive AV setup in a modern event space: multiple LED screens displaying different content, professional mixing console with audio engineer working, advanced lighting fixtures creating dramatic illumination, wireless microphones, and various AV equipment arranged professionally. The scene should emphasize technical capability, full-service production, and professional expertise. Clean, modern aesthetic with blue and orange lighting. --ar 7:4 --quality 2 --style raw
```

**Gemini Prompt**:
```
Create a professional photograph of a comprehensive audio visual setup showcasing full-service event production capabilities. Show multiple LED displays, professional mixing console, advanced lighting systems, microphones, and various AV equipment in a modern event space. Include a professional technician working with the equipment. The scene should convey technical expertise, comprehensive service capabilities, and professional event production. Use clean, modern lighting with blue and orange accents.
```

### **3. About Us Page**
**Filename**: `hero-about-character.jpg`
**Aspect Ratio**: 7:4
**Page Content**: "Event Production with Character" - Team of craftspeople, engineers, and creatives

**Stable Diffusion Prompt**:
```
Professional photograph of a diverse team of AV professionals working together on an event setup: engineers adjusting equipment, creative director reviewing plans, technicians collaborating on lighting design. The scene should show behind-the-scenes craftsmanship, teamwork, and attention to detail. Warm, inviting atmosphere that conveys both technical expertise and human connection. Natural lighting with warm tones. --ar 7:4 --quality 2 --style raw
```

**Gemini Prompt**:
```
Create a professional behind-the-scenes photograph of a diverse team of audio visual professionals working together. Show engineers, technicians, and creative professionals collaborating on event setup, reviewing plans, and adjusting equipment. The scene should convey craftsmanship, teamwork, attention to detail, and the human side of technical expertise. Use warm, natural lighting that creates an inviting and professional atmosphere.
```

### **4. Insights Page**
**Filename**: `hero-insights-expertise.jpg`
**Aspect Ratio**: 7:4
**Page Content**: "AV Industry Insights" - Expert advice, industry trends, 20+ years experience

**Stable Diffusion Prompt**:
```
Professional photograph of a knowledgeable AV industry expert presenting to an audience or working with advanced technology: person in professional attire speaking at podium with LED displays behind them, or working with sophisticated AV equipment in a conference setting. The scene should convey expertise, knowledge sharing, industry leadership, and professional authority. Clean, modern lighting with blue and gold accents. --ar 7:4 --quality 2 --style raw
```

**Gemini Prompt**:
```
Create a professional photograph of an AV industry expert sharing knowledge and expertise. Show a professional speaker presenting to an audience with sophisticated AV displays and equipment in the background, or an expert working with advanced technology in a conference setting. The scene should convey industry expertise, knowledge sharing, professional authority, and 20+ years of experience. Use clean, modern lighting with blue and gold accents.
```

---

## 🎯 **ALTERNATIVE PROMPTS (More Abstract/Artistic)**

### **Our Work - Alternative**
```
Cinematic wide shot of a beautifully lit event space with professional AV equipment creating dramatic lighting effects. LED walls displaying elegant graphics, professional lighting rigs, and sophisticated audio equipment. The scene should feel like a high-end event in progress with warm, luxurious lighting. --ar 7:4 --quality 2 --style raw
```

### **Services - Alternative**
```
Professional photograph of a modern event production control room or setup area: multiple monitors displaying different content, professional mixing console, lighting control board, and various AV equipment. The scene should emphasize technical capability and full-service production expertise. Clean, modern aesthetic with blue lighting. --ar 7:4 --quality 2 --style raw
```

### **About Us - Alternative**
```
Warm, inviting photograph of AV professionals in a collaborative workspace: team members reviewing technical drawings, testing equipment, and planning events. The scene should convey craftsmanship, attention to detail, and the human element behind professional event production. Natural lighting with warm tones. --ar 7:4 --quality 2 --style raw
```

### **Insights - Alternative**
```
Professional photograph of a modern conference or presentation space with sophisticated AV technology: LED displays showing data or presentations, professional lighting, and high-quality audio equipment. The scene should convey expertise, knowledge sharing, and industry leadership. Clean, modern lighting with blue and gold accents. --ar 7:4 --quality 2 --style raw
```

---

## 📋 **IMPLEMENTATION NOTES**

### **Current Status:**
- All pages currently use `page-hero-background.jpg` as their hero image
- These new prompts will create page-specific hero images
- Images should be saved in the `assets/` folder with the exact filenames listed

### **Recommended Approach:**
1. Generate all 4 hero images using either Stable Diffusion or Gemini
2. Save with exact filenames in the assets folder
3. Update CSS to use page-specific hero images
4. Test on all pages to ensure proper display

### **CSS Update Needed:**
Each page will need its hero image updated in the CSS from:
```css
background-image: url('assets/page-hero-background.jpg');
```
To their respective hero image URLs.

**Your website will have stunning, page-specific hero images that perfectly match each page's content and purpose!** 🎬✨
