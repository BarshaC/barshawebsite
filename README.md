# Barsha Chaudhary - Personal Portfolio Website

A modern, responsive personal portfolio website showcasing professional experience, interests, and background.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Experience Timeline**: Side-by-side comparison of intern vs professional experience
- **Interests Section**: Showcase your passions and areas of expertise
- **Resume Integration**: Download link and online resume viewing
- **Smooth Navigation**: Animated scrolling and active section highlighting

## 📁 Project Structure

```
barshawebsite/
├── index.html      # Main HTML file with all content sections
├── styles.css      # Styling and responsive design
├── script.js       # Interactive features and animations
├── resume.html     # Online resume page
├── blog.html       # Blog listing page
├── blog/           # One HTML file per blog post (e.g. blog/ai-ml-for-coders.html)
└── README.md       # This file
```

## 🚀 Getting Started

### 1. Customize Your Content

Open `index.html` and replace the placeholder content with your information:

- **About Section**: Add your hometown, background, and current role
- **Experience Section**: Fill in your company names, dates, positions, and achievements
- **Interests**: Customize or add interest cards
- **Resume Links**: Update links to your resume and social profiles
- **Footer**: Add your LinkedIn, GitHub, and email links

### 2. Add Your Resume

Place your resume PDF file in the project folder and name it `resume.pdf`, or update the link in `index.html` to match your filename.

### 3. Test Locally

Simply open `index.html` in your web browser to preview the website.

For a local development server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Then visit http://localhost:8000
```

## 🌐 How This Site Is Actually Deployed

This repo is connected to **Netlify**, which auto-deploys on every push to `main`. There is no manual "release" step — pushing to GitHub *is* the release.

- **Live site:** [barshachaudhary.com](https://barshachaudhary.com)
- **GitHub repo:** [github.com/BarshaC/barshawebsite](https://github.com/BarshaC/barshawebsite)
- **Host:** Netlify (site settings, deploy logs, and custom domain config live in the Netlify dashboard at [app.netlify.com](https://app.netlify.com) — not in this repo; there's no `netlify.toml` checked in)
- Netlify also applies "pretty URLs" automatically, so `resume.html` and `blog.html` serve at `/resume` and `/blog` on the live site even though the repo keeps the `.html` filenames.

> Note: `barshac.github.io` is a separate, older GitHub Pages site unrelated to this repo — don't confuse the two.

### Step-by-step: updating and publishing the live site

1. **Make your edits** to `index.html`, `blog.html`, files under `blog/`, `styles.css`, or `script.js`.
2. **Preview locally** before pushing:
   ```bash
   python3 -m http.server 8000
   # then open http://localhost:8000 in your browser
   ```
3. **Stage and commit** your changes:
   ```bash
   git add <files you changed>
   git commit -m "Describe what changed"
   ```
4. **Push to GitHub:**
   ```bash
   git push origin main
   ```
5. **That's it — Netlify picks up the push automatically** and rebuilds/redeploys the site, usually within a minute or two. You can watch the deploy progress in the Netlify dashboard for this site, or just refresh [barshachaudhary.com](https://barshachaudhary.com) after a minute to confirm the change is live.

## 🎨 Customization

### Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #1e40af;    /* Darker shade */
    --accent-color: #60a5fa;       /* Lighter accent */
    /* ... more colors */
}
```

### Fonts

The website uses system fonts by default. To use custom fonts:
```css
/* Add to styles.css */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

body {
    font-family: 'Inter', sans-serif;
}
```

### Sections

You can easily add, remove, or reorder sections in `index.html`. Each section follows this structure:
```html
<section id="section-name" class="section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <!-- Your content -->
    </div>
</section>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🛠️ Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- No frameworks or dependencies!

## 📝 License

This project is open source and available for personal use.

## 🤝 Need Help?

- Check that all file names match (case-sensitive on some systems)
- Ensure resume.pdf exists or update the link
- Test in different browsers
- Check browser console for JavaScript errors

## 🎯 Next Steps

1. ✅ Customize all content with your information
2. ✅ Add your resume PDF
3. ✅ Update social media links
4. ✅ Test on different devices
5. ✅ Choose a hosting platform
6. ✅ Deploy your website
7. ✅ Share your portfolio URL!

---

Built with ❤️ by Barsha Chaudhary | © 2026
