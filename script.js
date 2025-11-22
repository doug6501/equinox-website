// ========================================
// PROJECT NAVIGATION ORDER
// ========================================
const PROJECT_ORDER = [
    'work-hildene.html', // September 2025
    'work-crooked-ram.html', // August 2025
    'work-two-day-wedding.html', // August 2025
    'work-hildene-volunteer.html', // August 2025
    'work-svcc-women-leadership.html', // May 2025
    'work-arlington.html', // 2025
    'work-northshire-gala.html', // 2023-2025
    'work-bennington-museum.html', // 2023-2025
    'work-svcc-annual-meeting.html', // January 2025
    'work-hildene-wedding-2.html', // Fall 2024
    'work-kimpton-taconic.html', // December 2024
    'work-vanish-screening.html', // October 2024
    'work-equinox-wedding.html', // September 2024
    'work-bennington-summer.html' // Summer 2024
];

// ========================================
// HEADER AND FOOTER LOADER
// ========================================

async function loadHeader() {
    try {
        const response = await fetch('_header_STABLE.html?v=100');
        const html = await response.text();
        const placeholder = document.getElementById('header-placeholder');
        if (placeholder) {
            placeholder.innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

async function loadFooter() {
    try {
        const response = await fetch('_footer.html');
        const html = await response.text();
        const placeholder = document.getElementById('footer-placeholder');
        if (placeholder) {
            placeholder.innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

// Initialize header functionality after it's loaded
function initHeaderFunctionality() {
    const mainHeader = document.querySelector('.main-header');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const primaryNav = document.querySelector('.nav-list');
    
    if (!mainHeader || !mobileNavToggle || !primaryNav) return;
    
    // Mobile Navigation Toggle
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
               primaryNav.setAttribute('data-visible', 'false');
               mobileNavToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Header Styling on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // Floating Glassmorphism Header JavaScript
    const header = document.getElementById('floating-header');
    if (header) {
        let lastScrollY = window.scrollY;
        let ticking = false;

        function updateHeader() {
            const scrollY = window.scrollY;
            
            if (scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }

            lastScrollY = scrollY;
            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }

        window.addEventListener('scroll', requestTick);

        // Magnetic hover effects
        const magneticElements = document.querySelectorAll('.magnetic-element');
        
        magneticElements.forEach(element => {
            element.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            element.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0)';
            });
        });

        // Enhanced CTA magnetic effect
        const ctaButton = document.querySelector('.magnetic-cta');
        if (ctaButton) {
            ctaButton.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                this.style.transform = `translateY(-3px) scale(1.02) translate(${x * 0.05}px, ${y * 0.05}px)`;
            });
            
            ctaButton.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1) translate(0, 0)';
            });
        }

        // Logo glow effect on scroll
        const logoGlow = document.querySelector('.logo-glow');
        window.addEventListener('scroll', function() {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
            if (logoGlow && scrollPercent > 0.3) {
                logoGlow.style.opacity = Math.min(scrollPercent * 2, 1);
            } else if (logoGlow) {
                logoGlow.style.opacity = 0;
            }
        });
    }
}

// ========================================
// NEW TESTIMONIAL SLIDER
// ========================================

function initNewTestimonialSlider() {
    const track = document.querySelector('.slider-track');
    if (!track) return; // Stop if slider not on this page

    const slides = Array.from(track.children);
    const nextButton = document.getElementById('next-slide');
    const prevButton = document.getElementById('prev-slide');
    
    if (!nextButton || !prevButton) return; // Stop if buttons not found
    
    let slideWidth = slides[0].getBoundingClientRect().width;
    let currentIndex = 0;

    // Function to set slide position
    const goToSlide = (index) => {
        track.style.transform = 'translateX(-' + (slideWidth * index) + 'px)';
        currentIndex = index;
    };

    // Next button
    nextButton.addEventListener('click', e => {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0; // Loop to start
        }
        goToSlide(nextIndex);
    });

    // Prev button
    prevButton.addEventListener('click', e => {
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1; // Loop to end
        }
        goToSlide(prevIndex);
    });

    // Recalculate width on resize
    window.addEventListener('resize', () => {
        slideWidth = slides[0].getBoundingClientRect().width;
        goToSlide(currentIndex); // Snap to current slide
    });

    // Initial setup
    goToSlide(0);
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    if (!mobileToggle) return;

    mobileToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
        const isOpen = document.body.classList.contains('nav-open');
        mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when a link is clicked
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
            mobileToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// ========================================
// PROJECT NAVIGATION
// ========================================
function renderProjectNav() {
    const placeholder = document.getElementById('project-nav-placeholder');
    if (!placeholder) return; // Not on a work page

    // Get current filename
    const currentPage = window.location.pathname.split('/').pop();
    
    // Find current index in PROJECT_ORDER
    const currentIndex = PROJECT_ORDER.indexOf(currentPage);
    if (currentIndex === -1) return; // Not a recognized project page

    // Calculate previous and next indices (with wrapping)
    const prevIndex = currentIndex === 0 ? PROJECT_ORDER.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex + 1) % PROJECT_ORDER.length;

    // Get previous and next URLs
    const prevUrl = PROJECT_ORDER[prevIndex];
    const nextUrl = PROJECT_ORDER[nextIndex];

    // Inject navigation HTML
    placeholder.innerHTML = `
        <div class="project-nav-container">
            <a href="${prevUrl}" class="nav-btn glass-btn">← Previous Project</a>
            <a href="work.html" class="nav-btn glass-btn">All Work</a>
            <a href="${nextUrl}" class="nav-btn glass-btn">Next Project →</a>
        </div>
    `;
}

// Wait for DOM to be ready before loading header and footer
document.addEventListener('DOMContentLoaded', function() {
    // ========================================
    // STEP 1: Load header and footer FIRST
    // ========================================
    // We need to wait for BOTH header and footer to be done
    // before we show the page.
    const loadOperations = [
        loadHeader(), // Production header function
        loadFooter()  // Production footer function
    ];

    // Wait for all fetch operations to complete
    Promise.all(loadOperations)
        .then(() => {
            console.log("Header and Footer are loaded.");
            // NOW, fade in the page by adding the class
            document.body.classList.add('is-loaded');
            // Re-initialize any JS that depends on header/footer
            // Initialize the new testimonial slider
            initNewTestimonialSlider();
            // Initialize mobile menu
            initMobileMenu();
            // Initialize project navigation
            renderProjectNav();
        })
        .catch(error => {
            console.error("Error loading site components:", error);
            // Even if it fails, show the page so it's not blank
            document.body.classList.add('is-loaded');
        });

    // ========================================
    // STEP 2: Initialize everything else
    // (These don't depend on header/footer)
    // ========================================


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

    // --- Enhanced Fade-in on Scroll Animation - TEMPORARILY DISABLED ---
    // Completely disabled to fix fading issue
    /*
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
        // Disabled to prevent fading issues - keep content visible
        // el.style.opacity = '0';
        // el.style.transform = 'translateY(30px)';
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
    */

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
    
    // 3. Scroll-Triggered Typography - disabled to fix fading
    function initScrollTypography() {
        // Temporarily disabled
        return;
        
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
    // Re-enabled parallax for services page
    initParallax();
    // initMorphingAnimations();
    // initScrollTypography();
    initVideoTimeline();
    initMicroInteractions();
    initGradientText();
    
    // ========================================
    // SCROLLYTELLING - Fade In Up Animations
    // ========================================
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Unobserve after animation triggers (runs only once)
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
    });
    
    // Observe all elements with .fade-in-up class
    const fadeInElements = document.querySelectorAll('.fade-in-up');
    fadeInElements.forEach(element => {
        fadeInObserver.observe(element);
    });
    
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
            'article-av-trends-2026.html',
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
    
    // Append buttons in order: Previous (left), Next (right)
    articleNav.appendChild(prevBtn);
    articleNav.appendChild(nextBtn);
    document.body.appendChild(articleNav);
    
    // Always visible - no scroll trigger needed
    articleNav.classList.add('visible');
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

// ========================================
// IMAGE LIGHTBOX FOR GALLERIES
// ========================================
function initLightbox() {
    // Only run on pages with galleries
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    if (galleryImages.length === 0) return;
    
    // Create lightbox HTML
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
        <button class="lightbox-nav lightbox-prev" aria-label="Previous image">‹</button>
        <div class="lightbox-content">
            <img class="lightbox-image" src="" alt="">
        </div>
        <button class="lightbox-nav lightbox-next" aria-label="Next image">›</button>
        <div class="lightbox-counter"></div>
    `;
    document.body.appendChild(lightbox);
    
    // Get elements
    const lightboxImg = lightbox.querySelector('.lightbox-image');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const counter = lightbox.querySelector('.lightbox-counter');
    
    let currentIndex = 0;
    const images = Array.from(galleryImages);
    
    // Open lightbox
    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
        lightboxImg.alt = images[currentIndex].alt;
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Show next image
    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox(currentIndex);
    }
    
    // Show previous image
    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox(currentIndex);
    }
    
    // Add click handlers to gallery images
    images.forEach((img, index) => {
        img.addEventListener('click', () => openLightbox(index));
    });
    
    // Close button
    closeBtn.addEventListener('click', closeLightbox);
    
    // Navigation buttons
    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showNext();
    });
    
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrev();
    });
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });
}

initLightbox();

// ========================================
// SMART GALLERY LAYOUTS
// ========================================
function initSmartGallery() {
    const galleries = document.querySelectorAll('.gallery-grid');
    
    galleries.forEach(gallery => {
        const imageCount = gallery.querySelectorAll('img').length;
        
        // Remove any existing gallery classes
        gallery.className = 'gallery-grid';
        
        // Add appropriate class based on image count
        if (imageCount === 2) {
            gallery.classList.add('gallery-2');
        } else if (imageCount === 3) {
            gallery.classList.add('gallery-3');
        } else if (imageCount === 4) {
            gallery.classList.add('gallery-4');
        } else if (imageCount === 5) {
            gallery.classList.add('gallery-5');
        } else if (imageCount === 6) {
            gallery.classList.add('gallery-6');
        } else if (imageCount >= 7 && imageCount <= 9) {
            gallery.classList.add(`gallery-${imageCount}`);
        } else if (imageCount >= 10 && imageCount <= 12) {
            gallery.classList.add(`gallery-${imageCount}`);
        } else if (imageCount >= 13) {
            gallery.classList.add('gallery-large');
        }
    });
}

initSmartGallery();

    // Note: Active nav link highlighting is now handled in loadHeader()

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

    // --- Premium Animation Functions - COMPLETELY DISABLED ---
    function initScrollAnimations() {
        // COMPLETELY DISABLED TO FIX FADING ISSUES
        return;
        /*
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
        */
    }

    function initFloatingNavigation() {
        // Scroll handling is now done in the main header section
        // This function can be used for other floating navigation features if needed
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

    // Initialize premium features - temporarily disabled to debug fading
    // initScrollAnimations(); // DISABLED
    initFloatingNavigation();
    // initMagneticEffects(); // DISABLED  
    // initLogoClickBehavior(); // DISABLED

    // ========================================
    // ADVANCED VIDEO PLAYBACK CONTROLLER
    // Staggered starts with varied speeds
    // ========================================
    function initAdvancedVideoPlayback() {
        const videos = document.querySelectorAll('.work-card-media video');
        
        videos.forEach((video, index) => {
            // Skip if video hasn't loaded
            if (!video.duration || isNaN(video.duration)) {
                video.addEventListener('loadedmetadata', () => setupVideo(video, index));
            } else {
                setupVideo(video, index);
            }
        });
    }

    function setupVideo(video, index) {
        // Enable looping
        video.loop = true;
        
        // Wait for video to be ready
        const initVideo = () => {
            // Stagger start times (0-90% through the video)
            const startOffset = (index * 0.17) % 0.9; // Creates varied starting points
            video.currentTime = video.duration * startOffset;
            
            // Vary playback speed: Smooth, cinematic speeds
            const speeds = [0.5, 0.65, 0.8]; // Back to original smooth speeds
            video.playbackRate = speeds[index % speeds.length];
            
            // Start playing
            video.play().catch(err => console.log('Video autoplay prevented:', err));
        };
        
        if (video.readyState >= 2) {
            // Video is ready
            initVideo();
        } else {
            // Wait for video to load
            video.addEventListener('loadeddata', initVideo, { once: true });
        }
    }

    // Initialize on work page only
    if (document.querySelector('.work-grid')) {
        initAdvancedVideoPlayback();
    }

    // Initialize logo magnification effect
    initLogoMagnification();

});

// ========================================
// LOGO MAGNIFICATION EFFECT (Apple Dock Style)
// ========================================
function initLogoMagnification() {
    const logoContainer = document.querySelector('.logo-scroll-container');
    if (!logoContainer) return;

    const logos = logoContainer.querySelectorAll('.logo-item img');
    if (!logos.length) return;

    // Update magnification on scroll/animation
    function updateMagnification() {
        const containerRect = logoContainer.getBoundingClientRect();
        const viewportCenterX = window.innerWidth / 2; // Center of the viewport/screen

        logos.forEach(logo => {
            const logoRect = logo.getBoundingClientRect();
            const logoCenterX = logoRect.left + logoRect.width / 2;
            
            // Calculate distance from viewport center
            const distance = Math.abs(viewportCenterX - logoCenterX);
            
            // Define the "influence zone" (how far from center the effect reaches)
            const influenceZone = window.innerWidth * 0.4; // 40% of screen width (even wider zone)
            
            // Calculate scale (1.0 at edges, up to 2.2 at center) - EVEN MORE DRAMATIC
            if (distance < influenceZone) {
                const normalizedDistance = distance / influenceZone;
                const scale = 1 + (1.2 * (1 - normalizedDistance)); // 1.0 to 2.2 (MUCH more pronounced!)
                logo.style.transform = `scale(${scale})`;
            } else {
                // Outside influence zone - normal size
                logo.style.transform = `scale(1)`;
            }
            
            logo.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
    }

    // Run on animation frame for smooth updates
    function animate() {
        updateMagnification();
        requestAnimationFrame(animate);
    }

    // Start animation
    animate();
}

