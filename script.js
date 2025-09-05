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
            }
        });
    }, {
        threshold: 0.1
    });

    const fadeinElements = document.querySelectorAll('.fade-in');
    fadeinElements.forEach(el => observer.observe(el));

    // Handle Active Nav Link
    const currentPath = window.location.pathname.split("/").pop() || 'index.html';
    const navLinksAll = document.querySelectorAll('.nav-list a:not(.btn)');
    
    navLinksAll.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });

     // --- Services Page Tabs ---
    const tabs = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabs.length > 0 && tabContents.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = document.querySelector(`#${tab.dataset.tab}`);

                tabContents.forEach(content => content.classList.remove('active'));
                tabs.forEach(t => t.classList.remove('active'));
                
                tab.classList.add('active');
                if (target) {
                    target.classList.add('active');
                }
            });
        });
    }

    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const form = e.target;
            const data = new FormData(form);
            
            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.innerHTML = "Thank you! Your message has been sent.";
                    formStatus.className = 'success';
                    formStatus.style.display = 'block';
                    form.reset();
                } else {
                    const responseData = await response.json();
                    if (Object.hasOwn(responseData, 'errors')) {
                        formStatus.innerHTML = responseData["errors"].map(error => error["message"]).join(", ");
                    } else {
                        formStatus.innerHTML = "Oops! There was a problem submitting your form.";
                    }
                    formStatus.className = 'error';
                    formStatus.style.display = 'block';
                }
            } catch (error) {
                formStatus.innerHTML = "Oops! There was a problem submitting your form.";
                formStatus.className = 'error';
                formStatus.style.display = 'block';
            }
        });
    }
});

