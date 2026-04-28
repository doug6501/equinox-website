# Google Analytics Setup Guide

## 🎯 **Quick Setup Steps**

### 1. **Get Your GA4 Measurement ID**
1. Go to [analytics.google.com](https://analytics.google.com)
2. Sign in with your Google account
3. Create a new property: **"Equinox AV"**
4. Set up a web data stream for: **"https://www.equinoxaudiovisuals.com"**
5. Copy your Measurement ID (looks like: **G-XXXXXXXXXX**)

### 2. **Update Your Website**
Replace `G-XXXXXXXXXX` with your actual Measurement ID in these files:
- `index.html`
- `about.html`
- `services.html`
- `work.html`
- `insights.html`
- `contact.html`
- All article pages (12 files)

### 3. **Find and Replace**
Use your code editor's "Find and Replace" feature:
- **Find**: `G-XXXXXXXXXX`
- **Replace**: `G-YOUR-ACTUAL-ID` (your real ID)

## 📊 **What This Tracks**
- Page views and user sessions
- Traffic sources (Google, social media, direct)
- Popular pages and articles
- User behavior and engagement
- Conversion tracking (contact form submissions)

## ✅ **Testing**
After updating:
1. Visit your website
2. Check Google Analytics dashboard
3. Look for real-time data (may take a few minutes)

## 🔧 **Troubleshooting**
- **No data showing**: Wait 24-48 hours for initial data
- **Still no data**: Check that the ID is correct and matches exactly
- **Need help**: Google Analytics has excellent documentation and support

Your website is ready to track visitors and help you understand your audience! 🎬✨
