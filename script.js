// script.js - JavaScript for Cloud Quest Workshop Website

// Add smooth scrolling for anchor links (if any)
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

// Add click event to registration link
const registerLink = document.querySelector('#registration a');
if (registerLink) {
    registerLink.addEventListener('click', function(e) {
        // In a real application, this would redirect to a registration form
        alert('Registration link clicked! In a real scenario, this would open a registration form.');
        // Uncomment the next line to allow default behavior
        // return true;
    });
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Animate sections on scroll (simple fade-in)
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Console log for debugging
console.log('Cloud Quest Workshop website loaded successfully!');
