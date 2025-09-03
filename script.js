document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('.nav-list');
    const mainHeader = document.querySelector('.main-header');

    // Toggle mobile navigation
    mobileNavToggle.addEventListener('click', () => {
        const isVisible = primaryNav.getAttribute('data-visible') === 'true';
        primaryNav.setAttribute('data-visible', !isVisible);
        mobileNavToggle.setAttribute('aria-expanded', !isVisible);
    });

    // Close mobile nav when a link is clicked
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
               primaryNav.setAttribute('data-visible', false);
               mobileNavToggle.setAttribute('aria-expanded', false);
            }
        });
    });
    
    // Handle header styling on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    const fadeinElements = document.querySelectorAll('.fade-in');
    fadeinElements.forEach(el => observer.observe(el));
});

