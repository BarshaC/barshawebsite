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

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const html = document.documentElement;

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
}

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.interest-card, .timeline-item, .growth-card, .about-content, .project-card, .skill-category, .contact-content'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const style = document.createElement('style');
style.textContent = `
    .nav-menu a.active {
        color: var(--primary-color);
        position: relative;
    }
    .nav-menu a.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        height: 2px;
        background: var(--primary-color);
    }
`;
document.head.appendChild(style);

// Mobile menu toggle (optional - for future enhancement)
const createMobileMenu = () => {
    const nav = document.querySelector('.navbar .container');
    const menu = document.querySelector('.nav-menu');
    
    // This is a placeholder for mobile menu functionality
    // Can be enhanced based on user needs
};

// Photo stack — tap / click to go forward, swipe left = next, swipe right = previous
const avatarStack = document.getElementById('avatarStack');
if (avatarStack) {
    function updateZIndexes() {
        const cards = avatarStack.querySelectorAll('.stack-card');
        cards.forEach((card, i) => {
            card.style.zIndex = cards.length - i;
        });
    }
    updateZIndexes();

    let isAnimating = false;
    let touchStartX = 0;
    let touchStartY = 0;
    let swipeHandled = false;

    function cycleForward() {
        if (isAnimating) return;
        const cards = avatarStack.querySelectorAll('.stack-card');
        if (cards.length === 0) return;
        isAnimating = true;
        const top = cards[0];
        top.classList.add('exiting');
        top.addEventListener('animationend', () => {
            top.classList.remove('exiting');
            avatarStack.appendChild(top);
            updateZIndexes();
            if (cards.length === 1) {
                top.classList.add('returning');
                top.addEventListener('animationend', () => {
                    top.classList.remove('returning');
                    isAnimating = false;
                }, { once: true });
            } else {
                isAnimating = false;
            }
        }, { once: true });
    }

    function cycleBackward() {
        if (isAnimating) return;
        const cards = avatarStack.querySelectorAll('.stack-card');
        if (cards.length <= 1) return;
        isAnimating = true;
        const last = cards[cards.length - 1];
        avatarStack.insertBefore(last, cards[0]); // bring last card to front
        updateZIndexes();
        last.classList.add('entering-back');
        last.addEventListener('animationend', () => {
            last.classList.remove('entering-back');
            isAnimating = false;
        }, { once: true });
    }

    // Swipe support
    avatarStack.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    avatarStack.addEventListener('touchend', (e) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX;
        const deltaY = e.changedTouches[0].clientY - touchStartY;
        // Only treat as swipe if horizontal movement dominates and exceeds threshold
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 30) {
            swipeHandled = true;
            setTimeout(() => { swipeHandled = false; }, 400);
            if (deltaX < 0) cycleForward();  // swipe left  → next
            else cycleBackward();             // swipe right → previous
        }
    }, { passive: true });

    // Click / tap (swipeHandled prevents double-trigger on mobile)
    avatarStack.addEventListener('click', () => {
        if (swipeHandled) return;
        cycleForward();
    });
}

// Console welcome message
console.log('%c Welcome to Barsha\'s Portfolio! ', 'background: #2563eb; color: white; font-size: 16px; padding: 10px;');
console.log('%c Built with ❤️ using vanilla HTML, CSS, and JavaScript ', 'color: #6b7280; font-size: 12px;');
