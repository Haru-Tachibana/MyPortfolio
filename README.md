# My Portfolio Website

A modern, animated portfolio website built with HTML, CSS, and JavaScript. Features a dark theme with neon pink and blue highlights, smooth animations, and responsive design.

## Features

- **Dark Theme**: Modern dark design with neon pink (#ff0080) and blue (#00bfff) accents
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: CSS and JavaScript animations for enhanced user experience
- **Interactive Elements**: Hover effects, scroll animations, and interactive components
- **Easy to Update**: Projects are managed through JSON file for easy maintenance and updates
- **Contact Form**: Functional contact form with EmailJS integration for sending emails
- **Mobile Navigation**: Hamburger menu for mobile devices

## Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
├── projects.json       # Project data (loaded dynamically)
├── images/             # Project images and assets
└── README.md           # This file
```

## Customization

### Adding New Projects

Projects are now loaded dynamically from `projects.json`. To add a new project, simply add a new project object to the `projects` array in `projects.json`.

#### Required Fields for Each Project:

- **title** (string, required): The name of your project
- **description** (string, required): A brief description of the project
- **image** (string, optional): Path to the project screenshot/image (relative to root). Use either `image` or `video`, not both
- **video** (string, optional): Path to the project demo video (relative to root). Supported formats: mp4, webm, ogg, mov, avi. Use either `image` or `video`, not both
- **imageAlt** (string, optional): Alt text for the image (defaults to title if not provided)
- **videoAlt** (string, optional): Alt text for the video (defaults to title if not provided)
- **liveUrl** (string, optional): URL to the live demo of the project. Omit for console apps or projects without web demos
- **githubUrl** (string, optional): URL to the GitHub repository
- **technologies** (array, required): Array of technology tags to display
- **featured** (boolean, optional): Whether to display the project (defaults to true)

#### Example Project Entry (Web App with Image):

```json
{
  "projects": [
    {
      "title": "My New Project",
      "description": "A brief description of what the project does and its key features. This text will be displayed on the project card.",
      "image": "images/projects/my-project.png",
      "imageAlt": "My New Project Screenshot",
      "liveUrl": "https://my-project-demo.netlify.app/",
      "githubUrl": "https://github.com/username/my-project",
      "technologies": ["React", "TypeScript", "CSS", "Node.js"],
      "featured": true
    }
  ]
}
```

#### Example Project Entry (Console App with Video):

```json
{
  "projects": [
    {
      "title": "My Console App",
      "description": "A console application that does something awesome.",
      "video": "images/projects/my-app-demo.mp4",
      "videoAlt": "My Console App Demo",
      "githubUrl": "https://github.com/username/my-app",
      "technologies": ["C#", ".NET", "Console App", "API"],
      "featured": true
    }
  ]
}
```

#### Steps to Add a Project:

1. Add your project image or video to the `images/projects/` directory
2. Open `projects.json`
3. Add a new project object to the `projects` array following the structure above
4. Save the file - the website will automatically load and display the new project

#### Notes:

- Use either `image` or `video` field, not both. The system will automatically detect video files by extension
- The `liveUrl` field is optional - omit it for console apps or projects without web demos
- The `githubUrl` field is optional but recommended
- The `featured` field defaults to `true` - set it to `false` to hide a project without deleting it
- Keep media file sizes optimized for better performance (videos will autoplay, loop, and be muted)
- Supported video formats: mp4, webm, ogg, mov, avi
- Ensure media paths are correct relative to the root directory

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

## Contact Form Setup

The contact form uses EmailJS to send emails. To enable email functionality:

1. **Follow the setup guide:** See [EMAILJS_SETUP.md](EMAILJS_SETUP.md) for detailed instructions
2. **Quick setup:**
   - Create a free account at [EmailJS](https://www.emailjs.com/)
   - Add an email service (Gmail, Outlook, etc.)
   - Create an email template
   - Update the credentials in `script.js`:
     - Replace `YOUR_PUBLIC_KEY` with your EmailJS Public Key
     - Replace `YOUR_SERVICE_ID` with your Service ID
     - Replace `YOUR_TEMPLATE_ID` with your Template ID

The free tier includes 200 emails per month, which is perfect for a portfolio site.

## Support

For questions or issues with this portfolio template, please contact:
- Email: yuyang.wang027@gmail.com
- GitHub: [@Haru-Tachibana](https://github.com/Haru-Tachibana)

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: Remember to update the contact information and social links with your actual details before deploying!
