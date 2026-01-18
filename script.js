// Add fade-in animation on scroll with staggered delays
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200); // Stagger by 200ms per section
            }
        });
    }, { threshold: 0.1, rootMargin: '50px' });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll for navbar links
    document.querySelectorAll('.nav-menu a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});