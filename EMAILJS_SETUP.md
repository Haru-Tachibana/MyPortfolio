# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form on your portfolio website to send emails.

## Why EmailJS?

EmailJS allows you to send emails directly from your frontend JavaScript code without needing a backend server. It's perfect for static websites like this portfolio.

## Step-by-Step Setup

### Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

**Free Tier:** 200 emails per month (perfect for a portfolio site)

### Step 2: Add an Email Service

1. Once logged in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Important:** After adding the service, note down your **Service ID** (you'll need this later)

### Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use one of these templates or create your own:

**Template Name:** Contact Form Message

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Click **Save**
5. **Important:** Note down your **Template ID** (you'll need this later)

### Step 4: Get Your Public Key

1. Go to **Account** → **General** in the dashboard
2. Find your **Public Key** (also called API Key)
3. Copy this key - you'll need it in the next step

### Step 5: Update Your Website Code

Now you need to update `script.js` with your EmailJS credentials:

1. Open `script.js` in your editor
2. Find these three placeholders and replace them:

```javascript
// Line ~405: Replace YOUR_PUBLIC_KEY
emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY" // Replace with your actual Public Key
});

// Line ~441-442: Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
const response = await emailjs.send(
    'YOUR_SERVICE_ID',    // Replace with your Service ID from Step 2
    'YOUR_TEMPLATE_ID',   // Replace with your Template ID from Step 3
    {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'yuyang.wang027@gmail.com' // Your email (already set)
    }
);
```

**Example of what it should look like:**

```javascript
emailjs.init({
    publicKey: "abc123xyz456" // Your actual public key
});

const response = await emailjs.send(
    'service_abc123',    // Your actual service ID
    'template_xyz789',   // Your actual template ID
    {
        from_name: name,
        from_email: email,
        message: message,
        to_email: 'yuyang.wang027@gmail.com'
    }
);
```

### Step 6: Test the Form

1. Save your changes to `script.js`
2. Open your website in a browser
3. Go to the Contact section
4. Fill out the form and submit it
5. Check your email inbox - you should receive the message!

## Troubleshooting

### The form shows "Failed to send message"

1. **Check browser console:** Open Developer Tools (F12) and check for error messages
2. **Verify credentials:** Make sure all three values (Public Key, Service ID, Template ID) are correct
3. **Check EmailJS dashboard:** Go to EmailJS dashboard → Logs to see if there are any errors
4. **Service status:** Make sure your email service is connected and active in EmailJS

### I'm not receiving emails

1. **Check spam folder:** Sometimes emails can end up in spam
2. **Verify email service:** Make sure your email service is properly connected in EmailJS
3. **Check EmailJS logs:** Go to EmailJS dashboard → Logs to see delivery status
4. **Template variables:** Make sure the template variables match what's being sent:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`

### The button shows "Sending..." forever

1. Check your internet connection
2. Check browser console for JavaScript errors
3. Verify that EmailJS script is loaded (check Network tab in DevTools)

## Security Notes

- **Public Key is safe to expose:** The public key is designed to be used in frontend code
- **Don't share your Private Key:** Never commit your private key to public repositories
- **Rate limiting:** The free tier has rate limits (200 emails/month)
- **Domain restrictions:** You can restrict which domains can use your EmailJS service in the dashboard

## Alternative: Using Environment Variables (Advanced)

If you want to keep your credentials more secure, you can use environment variables:

1. Create a `.env` file (and add it to `.gitignore`)
2. Store your credentials there
3. Use a build tool to inject them at build time

However, for a simple portfolio site, putting the public key directly in the code is fine and standard practice.

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Check their support section or community forums
- Check the browser console for detailed error messages

## Quick Reference

After setup, you should have these three values:
1. **Public Key:** Found in Account → General
2. **Service ID:** Found in Email Services (e.g., `service_abc123`)
3. **Template ID:** Found in Email Templates (e.g., `template_xyz789`)

Replace these in `script.js` and your contact form will work!

