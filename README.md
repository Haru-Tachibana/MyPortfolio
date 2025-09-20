# My Portfolio Website

A modern, animated portfolio website built with HTML, CSS, and JavaScript. Features a dark theme with neon pink and blue highlights, smooth animations, and responsive design.

## Features

- **Dark Theme**: Modern dark design with neon pink (#ff0080) and blue (#00bfff) accents
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: CSS and JavaScript animations for enhanced user experience
- **Interactive Elements**: Hover effects, scroll animations, and interactive components
- **Easy to Update**: Simple structure for adding new projects and content
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices

## Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization

### Adding New Projects

To add a new project, simply add a new `.project-card` div in the projects section:

```html
<div class="project-card">
    <div class="project-image">
        <div class="project-overlay">
            <div class="project-links">
                <a href="YOUR_PROJECT_URL" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
                <a href="YOUR_GITHUB_URL" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">
            Your project description here.
        </p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
            <span class="tech-tag">Technology 3</span>
        </div>
    </div>
</div>
```

### Updating Tech Stack

To add or modify technologies, edit the `.tech-items` sections in the tech stack:

```html
<div class="tech-item">
    <i class="fab fa-your-icon"></i>
    <span>Technology Name</span>
</div>
```

### Changing Colors

The color scheme is defined in CSS variables at the top of `styles.css`:

```css
:root {
    --accent-pink: #ff0080;    /* Neon pink */
    --accent-blue: #00bfff;    /* Neon blue */
    --accent-purple: #8a2be2;  /* Purple accent */
    /* ... other variables */
}
```

### Updating Personal Information

1. **Name and Title**: Update the hero section in `index.html`
2. **About Section**: Modify the `.about-description` paragraphs
3. **Contact Information**: Update email and social links in the contact section
4. **Stats**: Modify the `.stat-number` and `.stat-label` elements

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### Option 1: Netlify (Recommended)
1. Push your code to a GitHub repository
2. Connect your GitHub account to Netlify
3. Deploy directly from your repository
4. Set up custom domain (optional)

### Option 2: GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## Maintenance Tips

1. **Regular Updates**: Keep your projects section updated with new work
2. **Performance**: Optimize images before adding them
3. **Testing**: Test on different devices and browsers
4. **Backup**: Keep your code in version control (Git)
5. **Analytics**: Consider adding Google Analytics for insights

## SEO Optimization

The website includes basic SEO optimization:
- Semantic HTML structure
- Meta tags for social sharing
- Alt text for images
- Clean URL structure
- Fast loading times

## Customization Ideas

- Add a blog section
- Include a resume download button
- Add more interactive animations
- Implement a dark/light theme toggle
- Add a testimonials section
- Include a skills progress bar

## Support

For questions or issues with this portfolio template, please contact:
- Email: yuyang.wang@example.com
- GitHub: [@Haru-Tachibana](https://github.com/Haru-Tachibana)

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: Remember to update the contact information and social links with your actual details before deploying!
