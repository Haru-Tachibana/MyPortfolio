#!/usr/bin/env node

/**
 * Build script to generate config.js from environment variables
 * 
 * Usage:
 *   node build-config.js
 * 
 * Environment variables required:
 *   EMAILJS_PUBLIC_KEY
 *   EMAILJS_SERVICE_ID
 *   EMAILJS_TEMPLATE_ID
 *   EMAILJS_TO_EMAIL (optional, defaults to yuyang.wang027@gmail.com)
 */

const fs = require('fs');
const path = require('path');

// Get environment variables
const publicKey = process.env.EMAILJS_PUBLIC_KEY;
const serviceId = process.env.EMAILJS_SERVICE_ID;
const templateId = process.env.EMAILJS_TEMPLATE_ID;
const toEmail = process.env.EMAILJS_TO_EMAIL || 'yuyang.wang027@gmail.com';

// Validate required variables
if (!publicKey || !serviceId || !templateId) {
    console.error('Error: Missing required environment variables!');
    console.error('Required: EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID');
    console.error('\nFor local development, create config.js manually from config.example.js');
    process.exit(1);
}

// Generate config file content
const configContent = `// EmailJS Configuration
// This file is auto-generated from environment variables
// DO NOT edit manually - it will be overwritten on build

const emailjsConfig = {
    publicKey: "${publicKey}",
    serviceId: "${serviceId}",
    templateId: "${templateId}",
    toEmail: "${toEmail}"
};
`;

// Write config.js file
const configPath = path.join(__dirname, 'config.js');
try {
    fs.writeFileSync(configPath, configContent, 'utf8');
    console.log('✓ config.js generated successfully from environment variables');
} catch (error) {
    console.error('Error writing config.js:', error.message);
    process.exit(1);
}

