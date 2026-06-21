// Navigation Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// FAQ Accordion
function toggleFAQ(button) {
    const faqItem = button.parentElement;
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) item.classList.remove('active');
    });
    faqItem.classList.toggle('active');
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const formNote = document.getElementById('formNote');
        formNote.textContent = `✓ Thank you, ${name}! We've received your message.`;
        formNote.style.color = '#05472A';
        formNote.style.fontWeight = 'bold';
        this.reset();
        setTimeout(() => { formNote.textContent = ''; }, 5000);
    });
}

// Add to Cart
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h4').textContent;
        const originalText = this.textContent;
        this.textContent = '✓ Added to Cart';
        this.style.background = '#05472A';
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
        }, 2000);
        console.log('Added to cart:', productName);
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
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

document.querySelectorAll('.cater-card, .offering, .menu-item, .ethos-card, .service-box, .gallery-item, .product-card, .info-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

console.log('%c☕ Welcome to FLUiD Coffee & Social Club ☕', 'font-size: 20px; color: #BE5103; font-weight: bold;');