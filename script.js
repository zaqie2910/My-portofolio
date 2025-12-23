// Smooth scroll for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const section = this.getAttribute('data-section').toLowerCase();
        const target = document.querySelector(`.${section}`) || document.querySelector(`#${section}`);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mobile menu toggle (optional)
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Animate skill bars on scroll
const skillsSection = document.querySelector('.skills');
const skillBars = document.querySelectorAll('.skill-progress');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillBars.forEach((bar, index) => {
                setTimeout(() => {
                    bar.style.width = bar.getAttribute('data-width') || bar.style.width;
                }, index * 200); // Delay 200ms per bar
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (skillsSection) {
    observer.observe(skillsSection);
}