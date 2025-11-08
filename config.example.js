// EmailJS Configuration
// Copy this file to config.js and fill in your actual values
// DO NOT commit config.js to version control (it's in .gitignore)

// Instructions:
// 1. Copy this file: cp config.example.js config.js
// 2. Fill in your EmailJS credentials from https://www.emailjs.com/
// 3. The config.js file will be ignored by git to keep your credentials safe

const emailjsConfig = {
    // Required: EmailJS credentials for frontend usage
    publicKey: "YOUR_PUBLIC_KEY",        // Your EmailJS Public Key (from Account > General)
    serviceId: "YOUR_SERVICE_ID",        // Your EmailJS Service ID (from Email Services)
    templateId: "YOUR_TEMPLATE_ID",      // Your EmailJS Template ID (from Email Templates)
    toEmail: "yuyang.wang027@gmail.com"  // Your email address (where you want to receive messages)
    
    // Optional: Secret Key (for server-side API calls only - NOT used in frontend)
    // secretKey: "YOUR_SECRET_KEY",     // Only needed for server-side API calls
    // 
    // Note: EmailJS Secret Key is ONLY for server-side API calls.
    // For frontend usage (like this portfolio), you only need the Public Key.
    // Never put your Secret Key in frontend code that's served to users!
};

