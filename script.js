// Portfolio Website JavaScript
// Author: Yuyang Wang

document.addEventListener('DOMContentLoaded', function() {
    // Loading Screen
    const loadingScreen = document.getElementById('loading-screen');
    const loadingProgress = document.querySelector('.loading-progress');
    const typingText = document.querySelector('.typing-text');
    
    // Loading messages for game-like feel
    const loadingMessages = [
        'Loading awesome stuff...',
        'Initializing cool features...',
        'Preparing amazing content...',
        'Almost ready...'
    ];
    
    let messageIndex = 0;
    let progress = 0;
    
    // Update loading messages
    function updateLoadingMessage() {
        if (messageIndex < loadingMessages.length) {
            typingText.textContent = loadingMessages[messageIndex];
            messageIndex++;
        }
    }
    
    // Simulate loading progress
    function updateProgress() {
        progress += Math.random() * 25;
        if (progress > 100) progress = 100;
        
        loadingProgress.style.width = progress + '%';
        
        if (progress < 100) {
            setTimeout(updateProgress, 100 + Math.random() * 150);
        } else {
            // Loading complete
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 300);
            }, 500);
        }
    }
    
    // Start loading sequence
    updateProgress();
    setInterval(updateLoadingMessage, 800);
    
    // Background Customizer
    const bgCustomizer = document.getElementById('bg-customizer');
    const bgToggle = document.getElementById('bg-toggle');
    const bgPanel = document.querySelector('.bg-panel');
    const bgUpload = document.getElementById('bg-upload');
    const bgBlur = document.getElementById('bg-blur');
    const bgOpacity = document.getElementById('bg-opacity');
    const blurValue = document.getElementById('blur-value');
    const opacityValue = document.getElementById('opacity-value');
    const bgReset = document.getElementById('bg-reset');
    const bodyBefore = document.querySelector('body::before');
    
    // Toggle background panel
    bgToggle.addEventListener('click', function() {
        bgPanel.classList.toggle('active');
    });
    
    // Close panel when clicking outside
    document.addEventListener('click', function(e) {
        if (!bgCustomizer.contains(e.target)) {
            bgPanel.classList.remove('active');
        }
    });
    
    // Handle image upload
    bgUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const bgElement = document.querySelector('body::before');
                if (bgElement) {
                    bgElement.style.backgroundImage = `url(${e.target.result})`;
                } else {
                    // Create a style element to override the CSS
                    let styleElement = document.getElementById('custom-bg-style');
                    if (!styleElement) {
                        styleElement = document.createElement('style');
                        styleElement.id = 'custom-bg-style';
                        document.head.appendChild(styleElement);
                    }
                    styleElement.textContent = `
                        body::before {
                            background-image: url(${e.target.result}) !important;
                        }
                    `;
                }
            };
            reader.readAsDataURL(file);
        }
    });
    
    // Handle blur adjustment
    bgBlur.addEventListener('input', function() {
        const blurAmount = this.value;
        blurValue.textContent = blurAmount;
        
        let styleElement = document.getElementById('custom-bg-style');
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'custom-bg-style';
            document.head.appendChild(styleElement);
        }
        
        const currentBg = document.querySelector('body::before');
        const bgImage = currentBg ? getComputedStyle(currentBg).backgroundImage : 'none';
        
        styleElement.textContent = `
            body::before {
                background-image: ${bgImage} !important;
                filter: blur(${blurAmount}px) !important;
            }
        `;
    });
    
    // Handle opacity adjustment
    bgOpacity.addEventListener('input', function() {
        const opacityAmount = this.value;
        opacityValue.textContent = opacityAmount;
        
        let styleElement = document.getElementById('custom-bg-style');
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'custom-bg-style';
            document.head.appendChild(styleElement);
        }
        
        const currentBg = document.querySelector('body::before');
        const bgImage = currentBg ? getComputedStyle(currentBg).backgroundImage : 'none';
        const currentBlur = bgBlur.value;
        
        styleElement.textContent = `
            body::before {
                background-image: ${bgImage} !important;
                filter: blur(${currentBlur}px) !important;
                opacity: ${opacityAmount / 100} !important;
            }
        `;
    });
    
    // Reset background
    bgReset.addEventListener('click', function() {
        // Reset all values
        bgUpload.value = '';
        bgBlur.value = 0;
        bgOpacity.value = 100;
        blurValue.textContent = '0';
        opacityValue.textContent = '100';
        
        // Remove custom styles
        const styleElement = document.getElementById('custom-bg-style');
        if (styleElement) {
            styleElement.remove();
        }
    });
    
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    
    // Add fade-in class to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
    
    // Typing animation for hero title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Animate tech items on hover
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Contact form handling
    const contactForm = document.querySelector('.form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            this.reset();
        });
    }
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #00ff80, #00bfff)' : 
                        type === 'error' ? 'linear-gradient(135deg, #ff0080, #ff4040)' : 
                        'linear-gradient(135deg, #8a2be2, #ff0080)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // Parallax effect for floating elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-icon');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Add glow effect to buttons on hover
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(255, 0, 128, 0.6)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
    
    // Animate stats on scroll
    const statNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumber(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
    
    function animateNumber(element) {
        const target = parseInt(element.textContent);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + '+';
        }, 16);
    }
    
    // Add ripple effect to buttons
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');
        
        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }
        
        button.appendChild(circle);
    }
    
    // Add ripple effect to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });
    
    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
    
    // Console message
    console.log('%cHello there!', 'color: #ff0080; font-size: 20px; font-weight: bold;');
    console.log('%cThanks for checking out my portfolio!', 'color: #00bfff; font-size: 14px;');
    console.log('%cFeel free to explore the code and reach out if you have any questions.', 'color: #8a2be2; font-size: 12px;');
});

// Utility function for smooth animations
function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

// Custom cursor removed as requested
