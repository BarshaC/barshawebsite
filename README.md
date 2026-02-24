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
├── resume.pdf      # Your resume PDF (add this file)
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

## 🌐 Hosting Options

### Option 1: GitHub Pages (Free & Easy)

1. Create a new GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Select "Deploy from a branch" → Choose `main` branch
5. Your site will be live at: `https://yourusername.github.io/your-repo/`

### Option 2: Netlify (Free & Feature-Rich)

1. Create account at [netlify.com](https://www.netlify.com)
2. Drag and drop your project folder to Netlify
3. Or connect your GitHub repository for automatic deployments
4. Get a free subdomain: `yoursite.netlify.app`
5. Optional: Add custom domain

### Option 3: Vercel (Free & Fast)

1. Create account at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click
4. Get free subdomain: `yoursite.vercel.app`
5. Optional: Add custom domain

### Option 4: Cloudflare Pages (Free & Global)

1. Create account at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Configure build settings (none needed for static site)
4. Deploy and get a free subdomain
5. Benefit from Cloudflare's global CDN

### Option 5: Custom Domain with Traditional Hosting

1. Purchase domain from Namecheap, GoDaddy, or Google Domains
2. Get hosting from Bluehost, HostGator, or similar
3. Upload files via FTP or cPanel File Manager
4. Point your domain to the hosting server

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
