document.addEventListener('DOMContentLoaded', function() {

    // --- Dynamic Header & Footer Loading ---
    // This allows us to have one header/footer and load it on every page.
    const headerPath = 'index.html .main-header > .container';
    const footerPath = 'index.html .main-footer > .container';
    const currentPath = window.location.pathname.split('/').pop();

    // Load Header
    if (document.querySelector('header.main-header')) {
        const headerContainer = document.querySelector('header.main-header');
        if (currentPath !== 'index.html' && currentPath !== '') {
            fetch('index.html')
                .then(response => response.text())
                .then(data => {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = data;
                    const headerContent = tempDiv.querySelector('.main-header > .container');
                    if (headerContent) {
                        headerContainer.innerHTML = ''; // Clear existing
                        headerContainer.appendChild(headerContent);
                    }
                    initializeNav(); // Re-initialize nav logic after loading
                    initializeHeaderScroll();
                });
        } else {
             initializeNav();
             initializeHeaderScroll();
        }
    }

    // Load Footer
     if (document.querySelector('footer.main-footer')) {
        const footerContainer = document.querySelector('footer.main-footer');
         if (currentPath !== 'index.html' && currentPath !== '') {
            fetch('index.html')
                .then(response => response.text())
                .then(data => {
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = data;
                    const footerContent = tempDiv.querySelector('.main-footer > .container');
                    if (footerContent) {
                        footerContainer.innerHTML = ''; // Clear existing
                        footerContainer.appendChild(footerContent);
                    }
                });
        }
    }
    
    // --- Navigation Logic ---
    function initializeNav() {
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        const primaryNav = document.querySelector('.nav-list');
        
        if (!mobileNavToggle || !primaryNav) return;

        mobileNavToggle.addEventListener('click', () => {
            const isVisible = primaryNav.getAttribute('data-visible') === 'true';
            primaryNav.setAttribute('data-visible', !isVisible);
            mobileNavToggle.setAttribute('aria-expanded', !isVisible);
            document.body.classList.toggle('nav-open');
        });

        // Close mobile nav when a link is clicked
        const navLinks = document.querySelectorAll('.nav-list a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                   primaryNav.setAttribute('data-visible', false);
                   mobileNavToggle.setAttribute('aria-expanded', false);
                   document.body.classList.remove('nav-open');
                }
            });
        });
    }

    // --- Header Scroll Logic ---
    function initializeHeaderScroll() {
        const mainHeader = document.querySelector('.main-header');
        if (!mainHeader) return;
        
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 50) {
                mainHeader.classList.add('scrolled');
            } else {
                mainHeader.classList.remove('scrolled');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);
    }
    
    // --- Intersection Observer for Fade-in Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1
    });

    const fadeinElements = document.querySelectorAll('.fade-in');
    fadeinElements.forEach(el => observer.observe(el));

    // --- Parallax Effect ---
    window.addEventListener('scroll', function() {
        const parallax = document.querySelector('.parallax-break');
        if (parallax) {
            let offset = window.pageYOffset;
            parallax.style.backgroundPositionY = offset * 0.7 + 'px';
        }
        const pageHeroParallax = document.querySelector('.page-hero');
         if (pageHeroParallax) {
            let offset = window.pageYOffset;
            pageHeroParallax.style.backgroundPositionY = offset * 0.5 + 'px';
        }
    });

});

