// ========================================
// VECTOR TI - PREMIUM JAVASCRIPT
// ========================================

// Page Transition Effect
function createPageTransition() {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition';
    overlay.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(overlay);
    return overlay;
}

const transition = createPageTransition();

// Handle page transitions for all internal links
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.href && link.href.indexOf(window.location.origin) === 0 && !link.href.includes('#')) {
        e.preventDefault();
        transition.classList.add('active');
        
        setTimeout(() => {
            window.location.href = link.href;
        }, 500);
    }
});

// Remove transition on page load
window.addEventListener('load', function() {
    setTimeout(() => {
        transition.classList.remove('active');
    }, 300);
});

// ========================================
// NAVBAR EFFECTS
// ========================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide navbar on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 200) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// SMOOTH SCROLL
// ========================================

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

// ========================================
// INTERSECTION OBSERVER ANIMATIONS
// ========================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Stagger animation for grid items
function staggerAnimation(elements, delay = 100) {
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * delay}ms`;
        observer.observe(el);
    });
}

// Apply animations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Animate service cards
    const serviceCards = document.querySelectorAll('.service-card');
    staggerAnimation(serviceCards, 150);
    
    // Animate feature items
    const featureItems = document.querySelectorAll('.feature-item');
    staggerAnimation(featureItems, 100);
    
    // Animate process steps
    const processSteps = document.querySelectorAll('.process-step');
    staggerAnimation(processSteps, 200);
    
    // Animate benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card, .quality-item');
    staggerAnimation(benefitCards, 120);
    
    // Animate FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    staggerAnimation(faqItems, 100);
    
    // Animate detail cards
    const detailCards = document.querySelectorAll('.service-detail-card, .feature-detailed, .processing-step');
    staggerAnimation(detailCards, 150);
});

// ========================================
// PARALLAX EFFECTS
// ========================================

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const pageHeader = document.querySelector('.page-header');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    if (pageHeader) {
        pageHeader.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ========================================
// MAGNETIC BUTTON EFFECT
// ========================================

const magneticButtons = document.querySelectorAll('.cta-button, .cta-button-outline, .submit-button, .detail-button');

magneticButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
    
    button.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0) scale(1)';
    });
});

// ========================================
// 3D TILT EFFECT ON SERVICE CARDS
// ========================================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
});

// ========================================
// SECTION SCROLL REVEAL
// ========================================

const sections = document.querySelectorAll('.section, .intro-section, .why-us-section, .cta-section');

const sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    sectionObserver.observe(section);
});

// ========================================
// VECTOR LOGO ANIMATION
// ========================================

// El logo ya está en el HTML, así que solo verificamos que exista
document.addEventListener('DOMContentLoaded', function() {
    const logoArrow = document.querySelector('.logo-vector .arrow');
    if (logoArrow) {
        console.log('✓ Logo Vector cargado correctamente');
    }
});

// ========================================
// FORM VALIDATION AND ANIMATION
// ========================================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    
    // Add focus animations to form inputs
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.style.borderColor = 'var(--primary)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
            if (!this.value) {
                this.style.borderColor = '#e0e0e0';
            }
        });
    });
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        // Animate button
        submitButton.textContent = 'Enviando...';
        submitButton.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
        submitButton.disabled = true;
        
        // Simulate sending (replace with actual form submission)
        setTimeout(() => {
            submitButton.textContent = '¡Enviado! ✓';
            
            setTimeout(() => {
                alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.style.background = '';
                submitButton.disabled = false;
            }, 1000);
        }, 1500);
    });
}

// ========================================
// RIPPLE EFFECT
// ========================================

function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Add ripple styles dynamically
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: rippleEffect 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Apply ripple to all buttons
document.querySelectorAll('.cta-button, .cta-button-outline, .submit-button, .detail-button').forEach(button => {
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.addEventListener('click', createRipple);
});

// ========================================
// SCROLL PROGRESS BAR
// ========================================

function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--primary), var(--secondary));
        z-index: 10001;
        transition: width 0.1s ease;
        box-shadow: 0 2px 10px var(--shadow);
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

createScrollProgress();

// ========================================
// DEBOUNCE UTILITY
// ========================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========================================
// ACTIVE NAV LINK BASED ON SCROLL
// ========================================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', debounce(updateActiveNavLink, 100));

// ========================================
// LAZY LOADING FOR IMAGES
// ========================================

const images = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ========================================
// CONSOLE LOG
// ========================================

console.log('%c🚀 Vector TI Premium Edition', 'color: #ff6b35; font-size: 20px; font-weight: bold;');
console.log('%cDesarrollado con ❤️ para la mejor experiencia', 'color: #666; font-size: 12px;');

// ========================================
// MENÚ HAMBURGUESA MOBILE
// ========================================

const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Prevenir scroll cuando el menú está abierto
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Cerrar menú al hacer click en un link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar')) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}