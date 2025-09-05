document.addEventListener('DOMContentLoaded', function() {

    const mainHeader = document.querySelector('.main-header');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('.nav-list');
    
    // --- Mobile Navigation Toggle ---
    mobileNavToggle.addEventListener('click', () => {
        const isVisible = primaryNav.getAttribute('data-visible') === 'true';
        primaryNav.setAttribute('data-visible', !isVisible);
        mobileNavToggle.setAttribute('aria-expanded', !isVisible);
    });

    // --- Close mobile nav when a link is clicked ---
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
               primaryNav.setAttribute('data-visible', false);
               mobileNavToggle.setAttribute('aria-expanded', false);
            }
        });
    });
    
    // --- Header Styling on Scroll ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // --- Fade-in on Scroll Animation ---
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

    // --- Active Nav Link Highlighting ---
    const currentPage = window.location.pathname.split("/").pop();
    const navAnchors = document.querySelectorAll('.main-nav a');

    navAnchors.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // --- Services Page Tabs ---
    const tabs = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector('#' + tab.dataset.tab);

            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            tabs.forEach(t => {
                t.classList.remove('active');
            });

            target.classList.add('active');
            tab.classList.add('active');
        });
    });

    // --- Contact Form Submission ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form = e.target;
            const status = document.getElementById('form-status');
            const data = new FormData(form);

            fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    status.innerHTML = "Thanks for your message! We'll be in touch soon.";
                    status.className = 'success';
                    status.style.display = 'block';
                    form.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            status.innerHTML = "Oops! There was a problem submitting your form.";
                        }
                        status.className = 'error';
                        status.style.display = 'block';
                    })
                }
            }).catch(error => {
                status.innerHTML = "Oops! There was a problem submitting your form.";
                status.className = 'error';
                status.style.display = 'block';
            });
        });
    }

});

