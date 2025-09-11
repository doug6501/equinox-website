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


    // --- Video Playback Speed Control ---
    function setVideoSpeeds() {
        const allVideos = document.querySelectorAll('video');
        const currentPage = window.location.pathname.split("/").pop();
        
        allVideos.forEach(video => {
            // Check if we're on the homepage (index.html or just /)
            if (currentPage === 'index.html' || currentPage === '' || currentPage === 'index') {
                // Check if it's the main hero video or featured work videos
                if (video.closest('.hero')) {
                    video.playbackRate = 1.0; // Full speed for main hero video
                } else {
                    video.playbackRate = 0.45; // 45% speed for featured work videos
                }
            } else if (currentPage === 'work.html') {
                video.playbackRate = 0.60; // 60% speed on work page
            } else {
                video.playbackRate = 0.75; // 75% speed on individual case study pages
            }
        });
    }
    
    // Set video speeds immediately
    setVideoSpeeds();
    
    // Also set video speeds when videos are loaded
    document.addEventListener('loadeddata', setVideoSpeeds);
    document.addEventListener('canplay', setVideoSpeeds);

    // --- Enhanced Fade-in on Scroll Animation ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Add staggered animation for multiple elements
                const siblings = Array.from(entry.target.parentNode.children);
                const index = siblings.indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.1}s`;
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const fadeinElements = document.querySelectorAll('.fade-in');
    fadeinElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Add CSS for the animation
    const style = document.createElement('style');
    style.textContent = `
        .fade-in.is-visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // --- Random Featured Work Selection ---
    function selectFeaturedWork() {
        const allWorkItems = document.querySelectorAll('.featured-work-item');
        console.log('Found work items:', allWorkItems.length); // Debug log
        
        if (allWorkItems.length === 0) {
            console.log('No work items found');
            return;
        }
        
        // Hide all items first
        allWorkItems.forEach(item => {
            item.style.display = 'none';
        });
        
        // Create array of indices and shuffle
        const indices = Array.from({length: allWorkItems.length}, (_, i) => i);
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        
        // Show first 3 items
        for (let i = 0; i < Math.min(3, allWorkItems.length); i++) {
            const item = allWorkItems[indices[i]];
            item.style.display = 'block';
            item.classList.add(`delay-${i}`);
            console.log('Showing item:', item.querySelector('h3').textContent); // Debug log
        }
    }
    
    // Run immediately
    selectFeaturedWork();
    
    // Also run after page loads completely
    window.addEventListener('load', selectFeaturedWork);

    // --- Next Event Button ---
    function createNextEventButton() {
        // Only add to case study pages (not homepage or work page)
        const currentPage = window.location.pathname.split("/").pop();
        if (currentPage === 'index.html' || currentPage === '' || currentPage === 'index' || currentPage === 'work.html') {
            return;
        }
        
        // Define the order of case study pages
        const caseStudyPages = [
            'work-bennington-museum.html',
            'work-hildene.html', 
            'work-vanish-screening.html',
            'work-hildene-volunteer.html',
            'work-kimpton-taconic.html',
            'work-equinox-wedding.html',
            'work-two-day-wedding.html'
        ];
        
        // Find current page index
        const currentIndex = caseStudyPages.indexOf(currentPage);
        if (currentIndex === -1) return; // Not a case study page
        
        // Get next page (cycle back to first if at end)
        const nextIndex = (currentIndex + 1) % caseStudyPages.length;
        const nextPage = caseStudyPages[nextIndex];
        
        // Create the next event button
        const nextButton = document.createElement('a');
        nextButton.href = nextPage;
        nextButton.className = 'next-event-button';
        nextButton.textContent = 'Next Event';
        nextButton.title = 'View next featured event';
        
        // Create the previous event button
        const prevIndex = currentIndex === 0 ? caseStudyPages.length - 1 : currentIndex - 1;
        const prevPage = caseStudyPages[prevIndex];
        const prevButton = document.createElement('a');
        prevButton.href = prevPage;
        prevButton.className = 'previous-event-button';
        prevButton.textContent = 'Previous Event';
        prevButton.title = 'View previous featured event';
        
        // Add to page
        document.body.appendChild(nextButton);
        document.body.appendChild(prevButton);
    }
    
    // Create next event button
    createNextEventButton();
    
    // ========================================
    // MODERN WEB FEATURES 2024-2025
    // ========================================
    
    // 1. Scroll-Triggered Parallax Effects
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.parallax-element');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }
    
    // 2. Morphing Animations
    function initMorphingAnimations() {
        const morphingSections = document.querySelectorAll('.morphing-section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const shapes = entry.target.querySelectorAll('.morphing-shape');
                    shapes.forEach((shape, index) => {
                        setTimeout(() => {
                            shape.classList.add('active');
                        }, index * 200);
                    });
                }
            });
        }, { threshold: 0.3 });
        
        morphingSections.forEach(section => observer.observe(section));
    }
    
    // 3. Scroll-Triggered Typography
    function initScrollTypography() {
        const revealElements = document.querySelectorAll('.scroll-reveal');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, { threshold: 0.1 });
        
        revealElements.forEach(element => observer.observe(element));
    }
    
    // 4. Interactive Video Timeline
    function initVideoTimeline() {
        const videos = document.querySelectorAll('video');
        
        videos.forEach(video => {
            const container = video.closest('.case-study-hero');
            if (!container) return;
            
            // Create timeline container
            const timelineContainer = document.createElement('div');
            timelineContainer.className = 'video-timeline';
            
            // Create progress bar
            const progressBar = document.createElement('div');
            progressBar.className = 'timeline-progress';
            
            // Create markers for key moments
            const markers = [
                { time: 0, label: 'Setup' },
                { time: 0.25, label: 'Guests Arrive' },
                { time: 0.5, label: 'Main Event' },
                { time: 0.75, label: 'Celebration' },
                { time: 1, label: 'Conclusion' }
            ];
            
            markers.forEach(marker => {
                const markerElement = document.createElement('div');
                markerElement.className = 'timeline-marker';
                markerElement.style.left = `${marker.time * 100}%`;
                
                const chapterLabel = document.createElement('div');
                chapterLabel.className = 'timeline-chapter';
                chapterLabel.textContent = marker.label;
                markerElement.appendChild(chapterLabel);
                
                markerElement.addEventListener('click', () => {
                    video.currentTime = video.duration * marker.time;
                });
                
                timelineContainer.appendChild(markerElement);
            });
            
            timelineContainer.appendChild(progressBar);
            container.appendChild(timelineContainer);
            
            // Update progress
            video.addEventListener('timeupdate', () => {
                const progress = (video.currentTime / video.duration) * 100;
                progressBar.style.width = `${progress}%`;
            });
        });
    }
    
    // 5. Testimonial Carousel
    function initTestimonialCarousel() {
        const carousels = document.querySelectorAll('.testimonial-carousel');
        
        carousels.forEach(carousel => {
            const slides = carousel.querySelectorAll('.testimonial-slide');
            const dots = carousel.querySelectorAll('.testimonial-dot');
            let currentSlide = 0;
            
            function showSlide(index) {
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                slides[index].classList.add('active');
                dots[index].classList.add('active');
            }
            
            // Dot navigation
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentSlide = index;
                    showSlide(currentSlide);
                });
            });
            
            // Auto-rotate
            setInterval(() => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }, 5000);
            
            // Initialize
            showSlide(0);
        });
    }
    
    // 6. Enhanced Micro-Interactions
    function initMicroInteractions() {
        // Add micro-interaction class to buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.classList.add('btn-micro');
        });
        
        // Add micro-interaction to work cards
        const workCards = document.querySelectorAll('.work-card');
        workCards.forEach(card => {
            card.classList.add('micro-interaction');
        });
        
        // Floating logo animation removed
    }
    
    // 7. Gradient Text Animation
    function initGradientText() {
        const gradientTexts = document.querySelectorAll('.gradient-text');
        gradientTexts.forEach(text => {
            // Add random delay for staggered effect
            text.style.animationDelay = `${Math.random() * 2}s`;
        });
    }
    
    // Initialize all modern features
    initParallax();
    initMorphingAnimations();
    initScrollTypography();
    initVideoTimeline();
    initTestimonialCarousel();
    initMicroInteractions();
    initGradientText();
    
    // ========================================
    // PERFORMANCE OPTIMIZATION
    // ========================================
    
    // Lazy loading for images
    function initLazyLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });
            
            images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            images.forEach(img => img.classList.add('loaded'));
        }
    }
    
    // Initialize lazy loading
    initLazyLoading();
    
    // ========================================
    // INSIGHTS PAGE FILTERING
    // ========================================
    
    function initInsightsFiltering() {
        const categoryBtns = document.querySelectorAll('.category-btn');
        const insightCards = document.querySelectorAll('.insight-card');
        
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active button
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter cards
                const category = btn.dataset.category;
                
                insightCards.forEach(card => {
                    if (category === 'all' || card.dataset.category === category) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }
    
    // Initialize insights filtering
    initInsightsFiltering();

// ========================================
// ARTICLE NAVIGATION
// ========================================
function initArticleNavigation() {
    // Only run on article pages
    if (!document.querySelector('.article-content')) return;
    
    const articleNav = document.createElement('div');
    articleNav.className = 'article-nav';
    
    // Get current article filename
    const currentPage = window.location.pathname.split('/').pop();
    
    // Define article order
        const articleOrder = [
            'article-wedding-av-equipment.html',
            'article-zoom-meeting-tips.html',
            'article-av-trends-2025.html',
            'article-choose-av-partner.html',
            'article-top-5-av-items.html',
            'article-breakout-management.html',
            'article-hire-av-lead.html',
            'article-engaging-presentation.html',
            'article-small-meetings.html',
            'article-make-time-rehearsal.html',
            'article-switch-av-partners.html',
            'article-conference-speaking.html'
        ];
    
    const currentIndex = articleOrder.indexOf(currentPage);
    
    // Create previous button
    const prevBtn = document.createElement('a');
    prevBtn.className = 'article-nav-btn';
    prevBtn.textContent = '← Previous';
    if (currentIndex > 0) {
        prevBtn.href = articleOrder[currentIndex - 1];
    } else {
        prevBtn.href = 'insights.html';
        prevBtn.textContent = '← All Articles';
    }
    
    // Create next button
    const nextBtn = document.createElement('a');
    nextBtn.className = 'article-nav-btn';
    nextBtn.textContent = 'Next →';
    if (currentIndex < articleOrder.length - 1) {
        nextBtn.href = articleOrder[currentIndex + 1];
    } else {
        nextBtn.href = 'insights.html';
        nextBtn.textContent = 'All Articles →';
    }
    
    articleNav.appendChild(prevBtn);
    articleNav.appendChild(nextBtn);
    document.body.appendChild(articleNav);
    
    // Show navigation after scrolling
    let isVisible = false;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300 && !isVisible) {
            articleNav.classList.add('visible');
            isVisible = true;
        } else if (window.scrollY <= 300 && isVisible) {
            articleNav.classList.remove('visible');
            isVisible = false;
        }
    });
}

initArticleNavigation();

// ========================================
// SOCIAL SHARING
// ========================================
function initSocialSharing() {
    // Only run on article pages
    if (!document.querySelector('.article-content')) return;
    
    const socialSharing = document.createElement('div');
    socialSharing.className = 'social-sharing';
    
    const currentUrl = encodeURIComponent(window.location.href);
    const currentTitle = encodeURIComponent(document.title);
    const currentDescription = encodeURIComponent(document.querySelector('meta[name="description"]')?.content || '');
    
    socialSharing.innerHTML = `
        <span class="social-sharing-label">Share:</span>
        <a href="https://twitter.com/intent/tweet?url=${currentUrl}&text=${currentTitle}" target="_blank" class="social-share-btn twitter">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            Twitter
        </a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}" target="_blank" class="social-share-btn linkedin">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
        </a>
        <a href="mailto:?subject=${currentTitle}&body=${currentDescription}%0A%0ARead more: ${currentUrl}" class="social-share-btn email">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Email
        </a>
        <button class="social-share-btn copy" data-url="${currentUrl}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
            Copy Link
        </button>
    `;
    
    // Insert after article content
    const articleContent = document.querySelector('.article-content');
    if (articleContent) {
        articleContent.appendChild(socialSharing);
        
        // Add event listener for copy button
        const copyButton = socialSharing.querySelector('.social-share-btn.copy');
        if (copyButton) {
            copyButton.addEventListener('click', function() {
                const url = this.getAttribute('data-url');
                copyToClipboard(url);
            });
        }
    }
}

// Copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show feedback
        const button = document.querySelector('.social-share-btn.copy');
        if (button) {
            const originalText = button.innerHTML;
            button.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Copied!
            `;
            setTimeout(() => {
                button.innerHTML = originalText;
            }, 2000);
        }
    }).catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // Show feedback
        const button = document.querySelector('.social-share-btn.copy');
        if (button) {
            const originalText = button.innerHTML;
            button.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Copied!
            `;
            setTimeout(() => {
                button.innerHTML = originalText;
            }, 2000);
        }
    });
}

initSocialSharing();

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

    // --- Premium Animation Functions ---
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.add('is-visible'); // Add both for compatibility
                }
            });
        }, observerOptions);

        // Observe all animation elements
        const animateElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in');
        animateElements.forEach(el => observer.observe(el));
    }

    function initFloatingNavigation() {
        let lastScrollTop = 0;
        const header = document.querySelector('.main-header');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add scrolled class for glass effect
            if (scrollTop > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScrollTop = scrollTop;
        }, { passive: true });
    }

    function initMagneticEffects() {
        const magneticElements = document.querySelectorAll('.btn, .work-card');
        
        magneticElements.forEach(element => {
            element.addEventListener('mouseenter', function(e) {
                this.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            });
            
            element.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const moveX = x * 0.1;
                const moveY = y * 0.1;
                
                this.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                this.style.transform = 'translate(0px, 0px) scale(1)';
            });
        });
    }

    function initLogoClickBehavior() {
        const logoLink = document.querySelector('.logo-link');
        const currentPage = window.location.pathname.split('/').pop();
        
        if (logoLink && (currentPage === 'index.html' || currentPage === '' || currentPage === 'index')) {
            logoLink.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Add visual feedback - pulse animation
                const logo = this.querySelector('.logo');
                logo.style.transform = 'scale(0.95)';
                logo.style.transition = 'transform 0.1s ease-out';
                
                setTimeout(() => {
                    logo.style.transform = 'scale(1)';
                    logo.style.transition = 'transform 0.2s ease-out';
                }, 100);
                
                // Add a subtle glow effect
                logo.style.filter = 'brightness(1.2) drop-shadow(0 0 10px var(--color-secondary))';
                setTimeout(() => {
                    logo.style.filter = 'none';
                    logo.style.transition = 'filter 0.3s ease-out';
                }, 300);
            });
        }
    }

    // Initialize premium features
    initScrollAnimations();
    initFloatingNavigation();
    initMagneticEffects();
    initLogoClickBehavior();

});

