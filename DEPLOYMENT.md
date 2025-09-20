# Deployment Guide

## Quick Deploy to Netlify

### Method 1: Drag & Drop (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Drag the entire `portfolio-website` folder to the deploy area
4. Your site will be live in seconds!

### Method 2: GitHub Integration
1. Push your code to a GitHub repository
2. Connect your GitHub account to Netlify
3. Select your repository
4. Deploy with default settings
5. Your site will be available at `https://your-site-name.netlify.app`

## Quick Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. In your project directory, run:
   ```bash
   vercel
   ```

3. Follow the prompts and your site will be deployed!

## Quick Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch"
5. Choose "main" branch
6. Your site will be at `https://yourusername.github.io/repository-name`

## Custom Domain Setup

### For Netlify:
1. Go to Site settings > Domain management
2. Add your custom domain
3. Update DNS records as instructed
4. Enable HTTPS (automatic)

### For Vercel:
1. Go to Project settings > Domains
2. Add your custom domain
3. Update DNS records
4. SSL certificate is automatic

## Environment Variables (if needed)

If you add backend functionality later, you can set environment variables in:
- **Netlify**: Site settings > Environment variables
- **Vercel**: Project settings > Environment variables

## Performance Optimization

1. **Image Optimization**: Use WebP format and compress images
2. **Minification**: Minify CSS and JavaScript files
3. **CDN**: Netlify and Vercel provide global CDN automatically
4. **Caching**: Set appropriate cache headers

## Monitoring & Analytics

### Google Analytics
Add this to your `<head>` section:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Netlify Analytics
- Available in Netlify dashboard
- No additional setup required

## Troubleshooting

### Common Issues:
1. **404 Errors**: Check file paths and case sensitivity
2. **CSS Not Loading**: Verify file paths and check for syntax errors
3. **JavaScript Errors**: Check browser console for errors
4. **Mobile Issues**: Test responsive design on different devices

### Debug Steps:
1. Check browser developer tools
2. Validate HTML/CSS
3. Test on different browsers
4. Check mobile responsiveness

## Updates & Maintenance

### Regular Updates:
1. Keep projects section current
2. Update contact information
3. Add new skills/technologies
4. Optimize performance

### Version Control:
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio setup"

# Add remote repository
git remote add origin https://github.com/username/repository.git

# Push to GitHub
git push -u origin main
```

## Security Considerations

1. **HTTPS**: Always use HTTPS in production
2. **Form Security**: Implement proper form validation
3. **Content Security Policy**: Consider adding CSP headers
4. **Regular Updates**: Keep dependencies updated

## Backup Strategy

1. **Git Repository**: Keep code in version control
2. **Multiple Deployments**: Deploy to multiple platforms
3. **Local Backup**: Keep local copies of important files
4. **Database Backup**: If using a database, regular backups

---

**Need Help?** Check the main README.md file for more detailed information or contact the developer.
