document.addEventListener('DOMContentLoaded', function() {

    // --- Universal Header & Footer Loader ---
    const loadComponent = async (componentPath, targetSelector) => {
        try {
            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`Failed to load ${componentPath}: ${response.statusText}`);
            }
            const data = await response.text();
            const targetElement = document.querySelector(targetSelector);
            if (targetElement) {
                targetElement.innerHTML = data;
            }
        } catch (error) {
            console.error(error);
        }
    };

    const initializeNavEvents = () => {
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const primaryNav = document.querySelector('.nav-list');

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
    };

    const loadSharedComponents = async () => {
        await Promise.all([
            loadComponent('header.html', '.main-header'),
            loadComponent('footer.html', '.main-footer')
        ]);
        
        // After components are loaded, initialize event listeners
        initializeNavEvents();

        // Also re-initialize header scroll logic after header is loaded
        const mainHeader = document.querySelector('.main-header');
        if (mainHeader) {
            // Set initial state
            if (window.scrollY > 50) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
            // Add scroll listener
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    mainHeader.classList.add('scrolled');
                } else {
                    mainHeader.classList.remove('scrolled');
                }
            });
        }
    };

    loadSharedComponents();

    // --- Intersection Observer for fade-in animations ---
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

    // --- Services Page Tabs ---
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(item => item.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                tab.classList.add('active');
                const target = document.getElementById(tab.dataset.tab);
                if(target) {
                    target.classList.add('active');
                }
            });
        });
    }
});

