document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('.nav-list');
    const mainHeader = document.querySelector('.main-header');

    // Toggle mobile navigation
    if (mobileNavToggle && primaryNav) {
        mobileNavToggle.addEventListener('click', () => {
            const isVisible = primaryNav.getAttribute('data-visible') === 'true';
            primaryNav.setAttribute('data-visible', !isVisible);
            mobileNavToggle.setAttribute('aria-expanded', !isVisible);
        });
    }

    // Close mobile nav when a link is clicked
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768 && primaryNav.getAttribute('data-visible') === 'true') {
               primaryNav.setAttribute('data-visible', false);
               mobileNavToggle.setAttribute('aria-expanded', false);
            }
        });
    });
    
    // Handle header styling on scroll
    if (mainHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
        });
    }

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing after the element is visible
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the element is visible
    });

    const fadeinElements = document.querySelectorAll('.fade-in');
    fadeinElements.forEach(el => observer.observe(el));

    // Services Page Tabs
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and content
                tabs.forEach(item => item.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                const target = document.getElementById(tab.dataset.tab);
                if(target) {
                    target.classList.add('active');
                }
            });
        });
    }
});

