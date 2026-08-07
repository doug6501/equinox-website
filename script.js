// ========================================
// PROJECT NAVIGATION ORDER
// ========================================
const PROJECT_ORDER = [
    'work-hildene-lincoln-essays-2026.html', // May 17, 2026
    'work-women-in-leadership-2026.html',    // May 13, 2026
    'work-hildene.html',                     // September 2025
    'work-crooked-ram.html',                 // August 2025
    'work-two-day-wedding.html',             // August 2025
    'work-hildene-volunteer.html',           // August 2025
    'work-arlington.html',                   // July 2025
    'work-hildene-lincoln-essays-2025.html', // May 18, 2025
    'work-svcc-women-leadership.html',       // May 14, 2025
    'work-northshire-gala.html',             // Annual 2023–2025
    'work-bennington-museum.html',           // Annual 2023–2025
    'work-svcc-annual-meeting.html',         // January 2025
    'work-hildene-wedding-2.html',           // Fall 2024
    'work-kimpton-taconic.html',             // December 2024
    'work-vanish-screening.html',            // October 2024
    'work-equinox-wedding.html',             // September 2024
    'work-bennington-summer.html'            // Summer 2024
];

// ========================================
// HEADER AND FOOTER LOADER
// ========================================

async function loadHeader() {
    const placeholder = document.getElementById('header-placeholder');
    if (!placeholder) return;

    // If header is already embedded in the HTML, just set active nav
    if (placeholder.querySelector('.header-stable')) {
        setActiveNavigation();
        return;
    }

    try {
        const response = await fetch('_header_STABLE.html?v=100');
        const html = await response.text();
        placeholder.innerHTML = html;
        setActiveNavigation();
    } catch (error) {
        console.error('Error loading header:', error);
    }
}

// Set active navigation state based on current page
function setActiveNavigation() {
    const rawPage = window.location.pathname.split('/').pop() || 'index.html';
    const currentPage = rawPage.replace(/\.html$/, '') || 'index';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = (link.getAttribute('href') || '').replace(/\.html$/, '');
        
        link.classList.remove('active');
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index') ||
            (currentPage === 'index' && linkPage === 'index')) {
            link.classList.add('active');
        }
        
        if (currentPage.startsWith('work-') && linkPage === 'work') {
            link.classList.add('active');
        }
        
        if (currentPage.startsWith('article-') && linkPage === 'insights') {
            link.classList.add('active');
        }
        
        if (currentPage.startsWith('services-') && linkPage === 'services') {
            link.classList.add('active');
        }
        
        if (currentPage.startsWith('av-services-') && linkPage === 'services') {
            link.classList.add('active');
        }
    });
}

async function loadFooter() {
    const placeholder = document.getElementById('footer-placeholder');
    if (!placeholder) return;

    // If footer is already embedded in the HTML, skip fetch
    if (placeholder.querySelector('.main-footer')) {
        return;
    }

    try {
        const response = await fetch('_footer.html');
        const html = await response.text();
        placeholder.innerHTML = html;
    } catch (error) {
        console.error('Error loading footer:', error);
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

    // Auto-advance every 10 seconds
    let autoAdvanceInterval = setInterval(() => {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0; // Loop to start
        }
        goToSlide(nextIndex);
    }, 10000); // 10 seconds

    // Pause auto-advance when user interacts
    const resetAutoAdvance = () => {
        clearInterval(autoAdvanceInterval);
        autoAdvanceInterval = setInterval(() => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= slides.length) {
                nextIndex = 0;
            }
            goToSlide(nextIndex);
        }, 10000);
    };

    // Reset timer when user clicks buttons
    nextButton.addEventListener('click', resetAutoAdvance);
    prevButton.addEventListener('click', resetAutoAdvance);

    // Initial setup
    goToSlide(0);
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    
    if (!mobileToggle) {
        console.error('CRITICAL: Mobile nav toggle button not found in DOM');
        return;
    }

    
    mobileToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.body.classList.toggle('nav-open');
        const isOpen = document.body.classList.contains('nav-open');
        mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when clicking backdrop
    document.addEventListener('click', (e) => {
        if (document.body.classList.contains('nav-open') && 
            !e.target.closest('.header-center') && 
            !e.target.closest('.mobile-nav-toggle')) {
            document.body.classList.remove('nav-open');
            mobileToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close mobile nav when a link is clicked
    const navLinks = document.querySelectorAll('.header-center .nav-links a');
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
            // NOW, fade in the page by adding the class
            document.body.classList.add('is-loaded');
            // Re-initialize any JS that depends on header/footer
            // Initialize the new testimonial slider
            initNewTestimonialSlider();
            // Initialize mobile menu
            initMobileMenu();
            // Initialize mobile action bar
            initMobileActionBarDelayed();
            // Enforce CTA lexicon (docs/marketing-guidelines.md)
            enforceCtaLexicon();
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


    // --- Randomize Homepage Work Preview Cards ---
    function initWorkPreview() {
        const grid = document.querySelector('.work-preview__grid');
        if (!grid) return;

        const allCases = [
            {
                href: 'work-women-in-leadership-2026.html',
                src: 'assets/thumb-hildene-2026.jpg',
                alt: 'Women in Leadership Luncheon 2026 at Hildene Lincoln Hall, triple displays.',
                number: 'May 2026',
                title: 'Three screens. Two keynotes. One room that didn\u2019t miss a beat.',
                venue: 'Lincoln Hall at Hildene \u2014 Manchester, VT'
            },
            {
                href: 'work-northshire-gala.html',
                src: 'assets/northshire-day-school-01.jpg',
                alt: 'Northshire Day School Harvest Moon Gala.',
                number: 'Sep 2025',
                title: 'A fundraiser where every parent in the room heard every word.',
                venue: 'Northshire Day School \u2014 Manchester, VT'
            },
            {
                href: 'work-hildene-volunteer.html',
                src: 'assets/hildene-volunteer-2025-01.jpg',
                alt: 'Hildene Volunteer Appreciation Dinner in Lincoln Hall.',
                number: 'Aug 2025',
                title: 'A tribute evening for 125 volunteers. Clear sound in a historic hall.',
                venue: 'Lincoln Hall at Hildene \u2014 Manchester, VT'
            },
            {
                href: 'work-arlington.html',
                src: 'assets/arlington-flyfest25-01.jpg',
                alt: 'Arlington Common Fly Fishing Festival at the community center.',
                number: 'Spring 2025',
                title: 'Three springs of FlyFest at Arlington Common.',
                venue: 'Arlington Common \u2014 Arlington, VT'
            },
            {
                href: 'work-svcc-women-leadership.html',
                src: 'assets/hildene-svcc-women-leadership-01.jpg',
                alt: 'A luncheon speaker at Hildene\u2019s Lincoln Hall in natural daylight.',
                number: 'May 2025',
                title: 'A room of two hundred, one voice at a time.',
                venue: 'Lincoln Hall at Hildene \u2014 Manchester, VT'
            },
            {
                href: 'work-svcc-annual-meeting.html',
                src: 'assets/svcc-taconic-01.jpg',
                alt: 'SVCC Annual Membership Meeting at Kimpton Taconic.',
                number: 'Jan 2025',
                title: 'The chamber\u2019s biggest annual event, run cleanly.',
                venue: 'Kimpton Taconic \u2014 Manchester, VT'
            },
            {
                href: 'work-bennington-museum.html',
                src: 'assets/bennington-museum-gala-2024-01.jpg',
                alt: 'Bennington Museum Gala with Grandma Moses display lighting.',
                number: 'Annual 2023\u20132025',
                title: 'The kind of event where a missed cue costs real money.',
                venue: 'Bennington Museum \u2014 Bennington, VT'
            },
            {
                href: 'work-vanish-screening.html',
                src: 'assets/bennington-museum-vanish-01.jpg',
                alt: 'Screening at the Bennington Museum in low ambient light.',
                number: 'Jun 2024',
                title: 'A film screening the museum could feel.',
                venue: 'Bennington Museum \u2014 Bennington, VT'
            },
            {
                href: 'work-bennington-summer.html',
                src: 'assets/bennington-museum-summer-01.jpg',
                alt: 'Bennington Museum Summer Celebration outdoor event.',
                number: 'Jun 2024',
                title: '\u201CA View of the Future from the Top of the Hill.\u201D',
                venue: 'Bennington Museum \u2014 Bennington, VT'
            },
            {
                href: 'work-two-day-wedding.html',
                src: 'assets/mande-hill-farm-sunset.jpg',
                alt: 'Two-day wedding weekend at Hill Farm and Hildene.',
                number: 'Aug 2025',
                title: 'Two venues, two days, one continuous production.',
                venue: 'Hill Farm and Hildene \u2014 Manchester, VT'
            },
            {
                href: 'work-crooked-ram.html',
                src: 'assets/crooked-ram-wedding-01.jpg',
                alt: 'Wedding at The Crooked Ram with custom projection.',
                number: 'Aug 2025',
                title: 'A tribute video that felt personal, not technical.',
                venue: 'The Crooked Ram \u2014 Vermont'
            },
            {
                href: 'work-hildene.html',
                src: 'assets/hildene-gallery-1.jpg',
                alt: 'Hildene Lincoln Hall Summer Wedding with atmospheric uplighting.',
                number: 'Summer 2025',
                title: 'Speakers hidden. Nothing visible that shouldn\u2019t be.',
                venue: 'Lincoln Hall at Hildene \u2014 Manchester, VT'
            },
            {
                href: 'work-kimpton-taconic.html',
                src: 'assets/kimpton-taconic-01.jpg',
                alt: 'Winter wedding reception in the Kimpton Taconic ballroom.',
                number: 'Early 2025',
                title: 'A winter wedding reception in the Taconic ballroom.',
                venue: 'Kimpton Taconic \u2014 Manchester, VT'
            },
            {
                href: 'work-equinox-wedding.html',
                src: 'assets/equinox-tent-wedding-01.jpg',
                alt: 'Tent wedding at the Equinox Resort, warm tungsten light on guests at dusk.',
                number: 'Sep 2024',
                title: 'A tent, rain, and a first dance at 20:12.',
                venue: 'Equinox Resort \u2014 Manchester, VT'
            },
            {
                href: 'work-hildene-wedding-2.html',
                src: 'assets/hildene-wedding2-01.jpg',
                alt: 'Hildene Lincoln Hall Wedding with atmospheric uplighting.',
                number: 'Fall 2024',
                title: 'A modern celebration that honored the room.',
                venue: 'Lincoln Hall at Hildene \u2014 Manchester, VT'
            }
        ];

        // Shuffle and pick 3
        const shuffled = allCases.slice().sort(() => Math.random() - 0.5);
        const picks = shuffled.slice(0, 3);

        grid.innerHTML = picks.map(c => `
            <a class="work-card-v2" href="${c.href}">
                <div class="work-card-v2__image-well">
                    <img class="work-card-v2__image" src="${c.src}" alt="${c.alt}" loading="lazy">
                </div>
                <div class="work-card-v2__number mono">${c.number}</div>
                <h3 class="work-card-v2__title">${c.title}</h3>
                <div class="work-card-v2__venue">${c.venue}</div>
            </a>
        `).join('');
    }

    initWorkPreview();

    // --- Testimonial Quote Rotator ---
    function initTestimonialRotator() {
        const section  = document.querySelector('.testimonial-editorial');
        if (!section) return;
        const quoteEl  = section.querySelector('.testimonial-editorial__quote');
        const attrEl   = section.querySelector('.testimonial-editorial__attribution');
        if (!quoteEl || !attrEl) return;

        const quotes = [
            {
                text: '\u201cWhether it\u2019s the Lincoln Symposium or a wedding reception, Equinox brings a hospitality mindset that puts everyone at ease.\u201d',
                name: 'President \u2014 Hildene, The Lincoln Family Home',
                location: 'Manchester, Vermont'
            },
            {
                text: '\u201cEquinox provided exceptional audio and lighting for our wedding. Their team was professional, unobtrusive, and delivered a beautiful result that perfectly honored the venue.\u201d',
                name: 'Wedding Client \u2014 Lincoln Hall at Hildene',
                location: 'Manchester, Vermont'
            },
            {
                text: '\u201cEvery year we bring Equinox back for FlyFest. They know how to set up at the Common, keep things running across the festival, and disappear when the programming starts. That\u2019s what we need.\u201d',
                name: 'Festival Organizer \u2014 Arlington Common',
                location: 'Arlington, Vermont'
            },
            {
                text: '\u201cThe annual membership meeting is the chamber\u2019s biggest event. Equinox ran it cleanly from the first presentation slide to the final award. We didn\u2019t have to think about AV once.\u201d',
                name: 'Executive Director \u2014 SVCC',
                location: 'Manchester, Vermont'
            },
            {
                text: '\u201cThe projection and sound for the Vanish screening felt like a real theater experience. Guests kept asking who handled production. We were proud to say it was a local team.\u201d',
                name: 'Events Director \u2014 Bennington Museum',
                location: 'Bennington, Vermont'
            },
            {
                text: '\u201cOur gala is the kind of event where a missed cue costs real money. Equinox has never missed one. Three years running.\u201d',
                name: 'Development Director \u2014 Bennington Museum',
                location: 'Bennington, Vermont'
            },
            {
                text: '\u201cWe had two venues, two days, and one team to hold it all together. Equinox was the constant. The lighting, the sound, the timing \u2014 it all matched perfectly.\u201d',
                name: 'Wedding Client \u2014 Hill Farm and Hildene',
                location: 'Manchester, Vermont'
            },
            {
                text: '\u201cThe tribute video for the volunteers played beautifully. Clear, warm sound filling every corner of Lincoln Hall exactly as we hoped. We\u2019ve already booked them again.\u201d',
                name: 'Programs Director \u2014 Hildene, The Lincoln Family Home',
                location: 'Manchester, Vermont'
            }
        ];

        let currentIdx = 0;

        function showQuote(idx, animate) {
            const q = quotes[idx];
            if (animate) {
                section.classList.add('testimonial-editorial--fading');
                setTimeout(function () {
                    quoteEl.textContent = q.text;
                    attrEl.innerHTML = '<span class="testimonial-editorial__name">' + q.name + '</span>' + q.location;
                    section.classList.remove('testimonial-editorial--fading');
                }, 460);
            } else {
                quoteEl.textContent = q.text;
                attrEl.innerHTML = '<span class="testimonial-editorial__name">' + q.name + '</span>' + q.location;
            }
        }

        // Start at a random quote
        currentIdx = Math.floor(Math.random() * quotes.length);
        showQuote(currentIdx, false);

        // Rotate every 7 seconds
        setInterval(function () {
            currentIdx = (currentIdx + 1) % quotes.length;
            showQuote(currentIdx, true);
        }, 7000);
    }

    initTestimonialRotator();

    // --- Story Beat Rotator ---
    function initStoryBeatRotator() {
        const section = document.querySelector('.story-beat');
        if (!section) return;
        const bodyEl  = section.querySelector('.story-beat__body');
        const eyebrow = section.querySelector('.story-beat__eyebrow');
        const link    = section.querySelector('.story-beat__link');
        if (!bodyEl) return;

        const stories = [
            {
                text: "A hundred and twenty guests under one tent. The bride\u2019s music teacher \u2014 a family friend since she was nine \u2014 played guitar and sang live. Every vow heard at every seat. First dance at 8:12.",
                eyebrow: "Equinox Resort \u2014 Manchester, VT \u2014 August 2025",
                href: "work-equinox-wedding.html"
            },
            {
                text: "Three days at Arlington Common. Fly fishing festival, film screenings, presentations, and evening programming. One crew across the grounds. The community center looked the same on Sunday as it did on Thursday.",
                eyebrow: "Arlington Common \u2014 Arlington, VT \u2014 Spring 2025",
                href: "work-arlington.html"
            },
            {
                text: "A silent film from 1928. A museum gallery converted for one night. Projection on the main wall, live piano through the PA, guests seated in the dark. Nobody checked their phone once.",
                eyebrow: "Bennington Museum \u2014 Bennington, VT \u2014 April 2026",
                href: "work-bennington-museum.html"
            },
            {
                text: "Seven award presentations, a keynote, two panels, and a standing-room crowd. Not one dropped slide, not one dead microphone. The executive director called it the smoothest meeting in ten years.",
                eyebrow: "SVCC Annual Meeting \u2014 Manchester, VT \u2014 January 2026",
                href: "work-svcc-annual-meeting.html"
            },
            {
                text: "Two venues, two days, one lighting rig that had to match both. The ceremony in a meadow at dusk. The reception inside Hildene at nine. Every cue landed. They danced until midnight.",
                eyebrow: "Hill Farm and Hildene \u2014 Manchester, VT \u2014 August 2025",
                href: "work-two-day-wedding.html"
            }
        ];

        let idx = Math.floor(Math.random() * stories.length);

        function showStory(i, animate) {
            const s = stories[i];
            if (animate) {
                section.style.opacity = '0';
                section.style.transition = 'opacity 0.4s ease';
                setTimeout(function () {
                    bodyEl.textContent = s.text;
                    if (eyebrow) eyebrow.textContent = s.eyebrow;
                    if (link) link.href = s.href;
                    section.style.opacity = '1';
                }, 420);
            } else {
                bodyEl.textContent = s.text;
                if (eyebrow) eyebrow.textContent = s.eyebrow;
                if (link) link.href = s.href;
            }
        }

        showStory(idx, false);
        setInterval(function () {
            idx = (idx + 1) % stories.length;
            showStory(idx, true);
        }, 9000);
    }

    initStoryBeatRotator();

    // --- Event Spotlight Carousel ---
    function initEventSpotlight() {
        const stage = document.getElementById('event-spotlight-stage');
        const navEl  = document.getElementById('event-spotlight-nav');
        if (!stage || !navEl) return;

        const slides = Array.from(stage.querySelectorAll('.event-spotlight__slide'));
        const pips   = Array.from(navEl.querySelectorAll('.event-spotlight__pip'));
        if (!slides.length) return;

        let current  = 0;
        let timer    = null;
        const DELAY  = 5000;

        function goTo(idx) {
            slides[current].classList.remove('is-active');
            pips[current].classList.remove('is-active');
            current = (idx + slides.length) % slides.length;
            slides[current].classList.add('is-active');
            pips[current].classList.add('is-active');
        }

        function start() {
            timer = setInterval(function () {
                goTo(current + 1);
            }, DELAY);
        }

        function stop() {
            clearInterval(timer);
        }

        pips.forEach(function (pip, i) {
            pip.addEventListener('click', function () {
                stop();
                goTo(i);
                start();
            });
        });

        stage.addEventListener('mouseenter', stop);
        stage.addEventListener('mouseleave', start);

        start();
    }

    initEventSpotlight();

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

    // --- Hero Video Fade-In ---
    // Removes poster (prevents image-to-video jump) and fades in once playable
    function initHeroVideoFade() {
        const heroMedia = document.querySelectorAll('.hero__image, .page-hero-v2__image');
        heroMedia.forEach(function(el) {
            if (el.tagName === 'VIDEO') {
                el.removeAttribute('poster');
                function markReady() {
                    el.classList.add('hero-video-loaded');
                }
                if (el.readyState >= 2) {
                    markReady();
                } else {
                    el.addEventListener('canplay', markReady, { once: true });
                    // Safety fallback: if canplay never fires within 4s, show anyway
                    setTimeout(markReady, 4000);
                }
            } else if (el.tagName === 'IMG') {
                // Static images: fade in on load
                function markImgReady() {
                    el.classList.add('hero-video-loaded');
                }
                if (el.complete && el.naturalWidth > 0) {
                    markImgReady();
                } else {
                    el.addEventListener('load', markImgReady, { once: true });
                    setTimeout(markImgReady, 3000);
                }
            }
        });
    }
    initHeroVideoFade();
    
    // Set video speeds immediately
    setVideoSpeeds();

    initEqCaseLightbox();

    // Also set video speeds when videos are loaded
    document.addEventListener('loadeddata', setVideoSpeeds);
    document.addEventListener('canplay', setVideoSpeeds);

    // --- Random Featured Work Selection ---
    function selectFeaturedWork() {
        const allWorkItems = document.querySelectorAll('.featured-work-item');

        if (allWorkItems.length === 0) {
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
        }
    }
    
    // Run immediately
    selectFeaturedWork();
    
    // --- Random Insights Selection (Homepage) ---
    function selectRandomInsights() {
        const insightsGrid = document.querySelector('.insights-highlight-grid');
        if (!insightsGrid) return; // Not on homepage
        
        // All available articles with their metadata
        const allArticles = [
            {
                url: 'article-zoom-meeting-tips.html',
                image: 'assets/insights-zoom-meeting.jpg',
                category: 'Technology',
                title: 'Professional Zoom Meeting Tips',
                description: 'How to run a remote meeting that doesn\'t feel like a remote meeting. Equipment, framing, and audio choices that matter.',
                cta: 'Read Tips'
            },
            {
                url: 'article-wedding-av-equipment.html',
                image: 'assets/insights-wedding-av.jpg',
                category: 'Weddings',
                title: 'Wedding AV Equipment Guide',
                description: 'The gear decisions that shape how your ceremony sounds, how your reception feels, and whether the vows get recorded cleanly.',
                cta: 'Read Guide'
            },
            {
                url: 'article-top-5-av-items.html',
                image: 'assets/insights-top-5-av.jpg',
                category: 'Professional Tips',
                title: 'Top 5 Essential AV Items',
                description: 'Discover the five most essential audio visual items that every event should have for professional results.',
                cta: 'Read Guide'
            },
            {
                url: 'article-choose-av-partner.html',
                image: 'assets/insights-choose-partner.jpg',
                category: 'Professional Tips',
                title: 'How to Choose the Best AV Partner',
                description: 'Learn the essential criteria for selecting the right audio visual partner for your next event.',
                cta: 'Read Guide'
            },
            {
                url: 'article-av-trends-2026.html',
                image: 'assets/insights-av-trends.jpg',
                category: 'Technology',
                title: '5 AV Trends for 2026',
                description: 'Stay ahead of the curve with the latest AV industry trends and innovative ideas shaping event production.',
                cta: 'Read More'
            },
            {
                url: 'article-switch-av-partners.html',
                image: 'assets/insights-switch-partners.jpg',
                category: 'Professional Tips',
                title: 'Why Switch AV Partners?',
                description: 'Recognize the red flags that indicate it\'s time to find a new audio visual partner for your events.',
                cta: 'Read More'
            },
            {
                url: 'article-breakout-management.html',
                image: 'assets/insights-breakout-management.jpg',
                category: 'Technology',
                title: 'Breakout Session Management',
                description: 'Master the art of managing multiple breakout sessions with professional AV coordination techniques.',
                cta: 'Read Guide'
            },
            {
                url: 'article-conference-speaking.html',
                image: 'assets/insights-conference-speaking.jpg',
                category: 'Professional Tips',
                title: 'Conference Speaking Success',
                description: 'Learn how to deliver impactful conference presentations with the right audio visual setup and techniques.',
                cta: 'Read Tips'
            },
            {
                url: 'article-engaging-presentation.html',
                image: 'assets/insights-engaging-presentation.jpg',
                category: 'Professional Tips',
                title: 'Create Engaging Presentations',
                description: 'Transform boring presentations into engaging experiences with professional AV techniques and tools.',
                cta: 'Read Guide'
            },
            {
                url: 'article-make-time-rehearsal.html',
                image: 'assets/insights-rehearsal.jpg',
                category: 'Professional Tips',
                title: 'Make Time for Rehearsal',
                description: 'Discover why rehearsal time is crucial for event success and how to make the most of it.',
                cta: 'Read More'
            },
            {
                url: 'article-hire-av-lead.html',
                image: 'assets/insights-hire-av-lead.jpg',
                category: 'Professional Tips',
                title: 'Why Hire an AV Lead?',
                description: 'Learn the benefits of hiring a dedicated audio visual lead for your next major event.',
                cta: 'Read Guide'
            },
            {
                url: 'article-small-meetings.html',
                image: 'assets/insights-small-meetings.jpg',
                category: 'Professional Tips',
                title: 'Small Meetings, Big Impact',
                description: 'Discover how professional AV can transform even small meetings into impactful experiences.',
                cta: 'Read Tips'
            }
        ];
        
        // Shuffle array
        const shuffled = [...allArticles].sort(() => Math.random() - 0.5);
        
        // Select first 3
        const selected = shuffled.slice(0, 3);
        
        // Generate HTML — card is the link, no nested <a>
        insightsGrid.innerHTML = selected.map(article => `
            <a class="insight-highlight-card" href="${article.url}">
                <div class="insight-highlight-image">
                    <img src="${article.image}" alt="${article.title}" loading="lazy">
                </div>
                <div class="insight-highlight-content">
                    <span class="insight-category">${article.category}</span>
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <span class="insight-read-cta">${article.cta} &rarr;</span>
                </div>
            </a>
        `).join('');
        
        // Cards are now <a> tags — no additional click wiring needed
        initClickableHomepageInsights();
    }
    
    // Make homepage insight cards clickable
    function initClickableHomepageInsights() {
        const insightCards = document.querySelectorAll('.insight-highlight-card');
        
        insightCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Find the link within the card
                const link = card.querySelector('a[href^="article-"]');
                if (link && !e.target.closest('a')) {
                    // If clicked element is not already a link, navigate to the article
                    window.location.href = link.getAttribute('href');
                }
            });
        });
    }
    
    // Run immediately
    selectRandomInsights();
    
    // Also run after page loads completely
    window.addEventListener('load', selectFeaturedWork);

    // --- Next Event Button ---
    // Quiet Room + Pro-Max hybrid: floating prev/next removed.
    // Case studies use bottom .case-nav only.
    function createNextEventButton() {
        return;
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
    
    /**
     * Insights articles: Work-style blue pill classes + short labels on prev/next.
     * (Desktop rails are repositioned with CSS; mobile uses .article-compass-bar.)
     */
    function initInsightsEditorialNav() {
        const layout = document.querySelector('section.article-layout[data-compass-rails="editorial"]');
        if (!layout) return;

        layout.querySelectorAll('.compass-rail__link, .article-compass-bar__link').forEach(function (a) {
            a.classList.add('button', 'button--pill', 'button--blue');
        });

        const prevLinks = layout.querySelectorAll('.compass-rail--prev .compass-rail__link, .article-compass-bar__link--prev');
        prevLinks.forEach(function (a) {
            a.textContent = '\u2190 Previous';
        });
        const nextLinks = layout.querySelectorAll('.compass-rail--next .compass-rail__link, .article-compass-bar__link--next');
        nextLinks.forEach(function (a) {
            a.textContent = 'Next \u2192';
        });
    }

    /**
     * Article split rails (`.compass-rail`): add `.is-visible` when `article.article-body`
     * enters the viewport (past hero into narrative) — desktop ≥1200px only.
     * CSS handles opacity/visibility transition + signal plate.
     */
    function initArticleCompassRailReveal() {
        if (!document.body.classList.contains('v2')) return;
        const layout = document.querySelector('section.article-layout[data-compass-rails]');
        const articleBody = layout && layout.querySelector('article.article-body');
        const rails = layout ? layout.querySelectorAll('.compass-rail') : [];
        if (!layout || !articleBody || rails.length === 0) return;
        /* Insights editorial: fixed pill nav (CSS); no scroll-linked rail reveal */
        if (layout.getAttribute('data-compass-rails') === 'editorial') {
            return;
        }

        const setRailsVisible = (visible) => {
            rails.forEach((rail) => {
                rail.classList.toggle('is-visible', visible);
            });
        };

        const mq = window.matchMedia('(min-width: 1200px)');
        const sync = () => {
            if (!mq.matches) {
                setRailsVisible(false);
            }
        };
        sync();
        if (typeof mq.addEventListener === 'function') {
            mq.addEventListener('change', sync);
        } else {
            mq.addListener(sync);
        }

        if (!('IntersectionObserver' in window)) {
            setRailsVisible(true);
            return;
        }

        const bodyObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!mq.matches) return;
                    setRailsVisible(entry.isIntersecting);
                });
            },
            {
                root: null,
                rootMargin: '-88px 0px 0px 0px',
                threshold: 0,
            }
        );
        bodyObserver.observe(articleBody);
    }

    // Initialize all modern features
    // Re-enabled parallax for services page
    initParallax();
    initInsightsEditorialNav();
    initArticleCompassRailReveal();
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
    
    // Make entire insight cards clickable
    function initClickableInsightCards() {
        const insightCards = document.querySelectorAll('.insight-card');
        
        insightCards.forEach(card => {
            card.addEventListener('click', (e) => {
                // Find the link within the card
                const link = card.querySelector('a[href^="article-"]');
                if (link && !e.target.closest('a')) {
                    // If clicked element is not already a link, navigate to the article
                    window.location.href = link.getAttribute('href');
                }
            });
        });
    }
    
    initClickableInsightCards();

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

/* Scroll-lock helpers are defined at script level — see below DOMContentLoaded */

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
        if (lightbox.parentNode !== document.body) {
            document.body.appendChild(lightbox);
        }
        currentIndex = index;
        lightboxImg.src = images[currentIndex].src;
        lightboxImg.alt = images[currentIndex].alt;
        counter.textContent = `${currentIndex + 1} / ${images.length}`;
        lightbox.classList.add('active');
        eqLockBodyScroll();
    }
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        eqReleaseBodyScroll();
    }

    lightboxImg.addEventListener('error', closeLightbox);

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

// ========================================
// LAZY LOADING FOR WORK PAGE
// ========================================
function initWorkPageLazyLoading() {
    // Only run on work page
    if (!document.querySelector('.work-grid')) return;
    
    const workGrid = document.querySelector('.work-grid');
    const allCards = Array.from(workGrid.querySelectorAll('.work-card'));
    
    // Initially hide all cards beyond the first 6
    allCards.forEach((card, index) => {
        if (index >= 6) {
            card.style.display = 'none';
            card.classList.add('lazy-load-pending');
        }
    });
    
    let currentlyLoaded = 6;
    const loadIncrement = 6; // Load 6 more at a time
    
    // Create intersection observer for infinite scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && currentlyLoaded < allCards.length) {
                // Load next batch
                const nextBatch = allCards.slice(currentlyLoaded, currentlyLoaded + loadIncrement);
                
                nextBatch.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.display = 'block';
                        card.classList.remove('lazy-load-pending');
                        
                        // Lazy load videos in this card
                        const video = card.querySelector('video[data-src]');
                        if (video) {
                            video.src = video.dataset.src;
                            video.load();
                        }
                        
                        // Lazy load images
                        const img = card.querySelector('img[data-src]');
                        if (img) {
                            img.src = img.dataset.src;
                        }
                        
                        // Trigger fade-in animation
                        requestAnimationFrame(() => {
                            card.style.opacity = '0';
                            card.style.transform = 'translateY(30px)';
                            requestAnimationFrame(() => {
                                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            });
                        });
                    }, index * 100); // Stagger the appearance
                });
                
                currentlyLoaded += loadIncrement;
            }
        });
    }, {
        rootMargin: '200px' // Start loading 200px before reaching the bottom
    });
    
    // Observe the last visible card
    if (allCards[5]) {
        observer.observe(allCards[5]);
    }
    
    // Update observer target as we load more
    const updateObserver = () => {
        if (currentlyLoaded < allCards.length && allCards[currentlyLoaded - 1]) {
            observer.observe(allCards[currentlyLoaded - 1]);
        }
    };
    
    // Update observer after each load
    setInterval(updateObserver, 1000);
}

// Initialize lazy loading for videos with poster images
function initVideoLazyLoading() {
    const videos = document.querySelectorAll('video[autoplay]');
    
    videos.forEach(video => {
        // Get the first frame as poster if not set
        if (!video.poster && video.querySelector('source')) {
            const source = video.querySelector('source').src;
            // Create a poster attribute pointing to a placeholder
            video.poster = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"%3E%3Crect fill="%23222" width="800" height="450"/%3E%3C/svg%3E';
        }
        
        // Use Intersection Observer to only play videos when visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (video.paused) {
                        video.play().catch(() => {});
                    }
                } else {
                    video.pause();
                }
            });
        }, {
            threshold: 0.5 // Play when 50% visible
        });
        
        observer.observe(video);
    });
}

// ========================================
// BALANCED WORK GRID LAYOUT - ALTERNATING 2 & 3
// ========================================
function initBalancedWorkGrid() {
    // Only run on work page
    const workGrid = document.querySelector('.work-grid');
    if (!workGrid) return;
    
    const allCards = workGrid.querySelectorAll('.work-card');
    const totalCards = allCards.length;
    
    
    // NEW STRATEGY: Alternate between 3-card and 2-card rows
    // Pattern: 3, 2, 3, 2, 3, 2... (5 cards per cycle)
    
    let layout = [];
    let remainingCards = totalCards;
    let use3First = true; // Start with 3-card row
    
    while (remainingCards > 0) {
        if (remainingCards === 1) {
            // Single card left - add to previous row if possible
            // Or just make it a 1-card row (will look centered)
            layout.push(1);
            remainingCards = 0;
        } else if (remainingCards === 2) {
            // Two cards left - perfect for a 2-card row
            layout.push(2);
            remainingCards = 0;
        } else if (remainingCards === 3) {
            // Three cards left - perfect for a 3-card row
            layout.push(3);
            remainingCards = 0;
        } else if (remainingCards === 4) {
            // Four cards left - make it 2+2
            layout.push(2, 2);
            remainingCards = 0;
        } else {
            // 5 or more cards - alternate between 3 and 2
            if (use3First) {
                layout.push(3);
                remainingCards -= 3;
            } else {
                layout.push(2);
                remainingCards -= 2;
            }
            use3First = !use3First; // Toggle for next row
        }
    }
    
    // Apply layout classes to cards
    let cardIndex = 0;
    layout.forEach((rowSize, rowIndex) => {
        for (let i = 0; i < rowSize; i++) {
            if (cardIndex < totalCards) {
                allCards[cardIndex].setAttribute('data-row', rowIndex);
                allCards[cardIndex].setAttribute('data-row-size', rowSize);
                cardIndex++;
            }
        }
    });
    
    // Add CSS class to work-grid to enable custom layout
    workGrid.classList.add('balanced-grid');
}

initWorkPageLazyLoading();
initVideoLazyLoading();
initBalancedWorkGrid();

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
            video.play().catch(() => {});
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
    
    // Initialize back to top button
    initBackToTop();
    
    // Prevent widows (single words on last line)
    preventWidows();

});

// ========================================
// PREVENT WIDOWS (SINGLE WORDS ON LAST LINE)
// ========================================
function preventWidows() {
    // Select all text elements that might have widows
    const selectors = [
        'p:not(:has(a)):not(:has(span)):not(:has(strong))', 
        'h1:not(:has(*))', 
        'h2:not(:has(*))', 
        'h3:not(:has(*))',
        '.article-excerpt:not(:has(*))',
        '.subtitle:not(:has(*))',
        '.section-subtitle:not(:has(*))'
    ];
    
    const elements = document.querySelectorAll(selectors.join(', '));
    
    elements.forEach(element => {
        const text = element.textContent;
        if (!text || text.trim().length === 0) return;
        
        // Split by spaces and check if we have multiple words
        const words = text.trim().split(/\s+/);
        
        // Only process if there are at least 3 words (prevents breaking short phrases)
        if (words.length >= 3) {
            // Replace the last space with a non-breaking space
            const lastWord = words.pop();
            const secondLastWord = words.pop();
            const restOfText = words.join(' ');
            
            // Keep last two words together
            if (restOfText.length > 0) {
                element.innerHTML = restOfText + ' ' + secondLastWord + '&nbsp;' + lastWord;
            } else {
                element.innerHTML = secondLastWord + '&nbsp;' + lastWord;
            }
        }
    });
}

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

// ========================================
// BACK TO TOP BUTTON
// ========================================
function initBackToTop() {
    // Create button
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    `;
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);

    // Show/hide on scroll
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (scrollY > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
        
        lastScrollY = scrollY;
    });

    // Scroll to top on click
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========================================
// CTA LEXICON GUARD (marketing guidelines)
// ========================================
function enforceCtaLexicon() {
    const banned = /get a quote|get your .+ quote|discover the equinox|elevate your|find your perfect/i;
    const nodes = document.querySelectorAll(
        '.nav-cta, .cta-section-v2__link, .mobile-action-bar .btn-action.btn-primary, a.btn.btn-primary[href*="contact"], a.btn-ghost[href*="contact"]'
    );
    nodes.forEach((el) => {
        const text = (el.textContent || '').trim();
        if (!text || !banned.test(text)) return;
        const keepArrow = text.includes('→') || /&rarr;/i.test(el.innerHTML);
        el.textContent = keepArrow ? 'Start a project →' : 'Start a project';
    });
}

// ========================================
// MOBILE ACTION BAR (Sticky CTA)
// ========================================
function initMobileActionBar() {
    // Create the action bar HTML
    const actionBar = document.createElement('div');
    actionBar.className = 'mobile-action-bar';
    actionBar.id = 'mobile-action-bar';
    actionBar.innerHTML = `
        <button class="btn-dismiss" aria-label="Dismiss action bar">&times;</button>
        <div class="mobile-action-bar-content">
            <a href="contact.html" class="btn-action btn-primary">Start a project</a>
            <a href="event-planning-checklist.html" class="btn-action btn-secondary">Free Checklist</a>
        </div>
    `;
    document.body.appendChild(actionBar);

    // Check if user has dismissed it before
    const isDismissed = localStorage.getItem('mobileActionBarDismissed') === 'true';
    if (isDismissed) {
        actionBar.classList.add('dismissed');
        return;
    }

    // Show after scrolling 300px
    let hasShown = false;
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (scrollY > 300 && !hasShown && window.innerWidth <= 768) {
            actionBar.classList.add('visible');
            hasShown = true;
        }
    });

    // Dismiss button
    const dismissBtn = actionBar.querySelector('.btn-dismiss');
    dismissBtn.addEventListener('click', () => {
        actionBar.classList.remove('visible');
        actionBar.classList.add('dismissed');
        localStorage.setItem('mobileActionBarDismissed', 'true');
    });
}

// Initialize mobile action bar - called after header loads
function initMobileActionBarDelayed() {
    if (window.innerWidth <= 768) {
        initMobileActionBar();
    }
}

// ========================================
// MOBILE "VIEW ALL PROJECTS" BUTTON
// ========================================
function showAllProjects() {
    const workGrid = document.querySelector('.work-grid');
    const viewAllBtn = document.getElementById('mobile-view-all');
    
    if (workGrid) {
        workGrid.classList.add('show-all-mobile');
    }
    
    if (viewAllBtn) {
        viewAllBtn.classList.add('hidden');
    }
    
    // Smooth scroll to first hidden item
    const firstHiddenCard = document.querySelector('.work-card:nth-child(7)');
    if (firstHiddenCard) {
        setTimeout(() => {
            firstHiddenCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}

// ========================================
// SCROLL LOCK HELPERS (script-level so lightbox can access them)
// ========================================
function eqLockBodyScroll() {
    document.documentElement.classList.add('stop-scroll');
    document.body.classList.add('stop-scroll');
}

function eqReleaseBodyScroll() {
    document.documentElement.classList.remove('stop-scroll');
    document.body.classList.remove('stop-scroll');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
}

// ========================================
// GALLERY LIGHTBOX (case studies — v2)
// ========================================
function initEqCaseLightbox() {
    'use strict';

    if (document.getElementById('eq-lightbox')) {
        return;
    }

    var galleryImgs = document.querySelectorAll(
        '.case-gallery .case-gallery__item img, .case-body__narrative img'
    );
    if (!galleryImgs.length) {
        return;
    }

    var arr = Array.prototype.slice.call(galleryImgs);
    var lb = document.createElement('div');
    lb.id = 'eq-lightbox';
    lb.className = 'eq-lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-label', 'Image viewer');
    lb.setAttribute('aria-hidden', 'true');
    lb.innerHTML =
        '<button class="eq-lightbox__close" aria-label="Close">\u2715</button>' +
        '<button class="eq-lightbox__prev" aria-label="Previous">\u2190</button>' +
        '<div class="eq-lightbox__img-wrap"><img class="eq-lightbox__img" src="" alt=""></div>' +
        '<div class="eq-lightbox__caption"></div>' +
        '<div class="eq-lightbox__counter"></div>' +
        '<button class="eq-lightbox__next" aria-label="Next">\u2192</button>';
    document.body.appendChild(lb);

    var lbImg     = lb.querySelector('.eq-lightbox__img');
    var lbCaption = lb.querySelector('.eq-lightbox__caption');
    var lbCounter = lb.querySelector('.eq-lightbox__counter');
    var lbClose   = lb.querySelector('.eq-lightbox__close');
    var lbPrev    = lb.querySelector('.eq-lightbox__prev');
    var lbNext    = lb.querySelector('.eq-lightbox__next');
    var images    = [];
    var idx       = 0;

    function show(i) {
        idx = (i + images.length) % images.length;
        lbImg.src      = images[idx].src;
        lbImg.alt      = images[idx].alt;
        lbCaption.textContent = images[idx].alt || '';
        lbCounter.textContent = (idx + 1) + ' / ' + images.length;
        lbPrev.style.display = images.length > 1 ? '' : 'none';
        lbNext.style.display = images.length > 1 ? '' : 'none';
    }

    function close() {
        lb.classList.remove('is-open');
        lb.setAttribute('aria-hidden', 'true');
        eqReleaseBodyScroll();
    }

    function open(imgs, startIdx) {
        if (lb.parentNode !== document.body) {
            document.body.appendChild(lb);
        }
        images = imgs;
        eqLockBodyScroll();
        lb.classList.add('is-open');
        lb.removeAttribute('aria-hidden');
        show(startIdx);
        try {
            lbClose.focus({ preventScroll: true });
        } catch (e) {
            lbClose.focus();
        }
    }

    lbImg.addEventListener('error', function () {
        if (lb.classList.contains('is-open')) {
            close();
        }
    });
    lbClose.addEventListener('click', close);
    lbPrev.addEventListener('click', function () { show(idx - 1); });
    lbNext.addEventListener('click', function () { show(idx + 1); });

    lb.addEventListener('click', function (e) {
        if (e.target === lb) close();
    });

    document.addEventListener('keydown', function (e) {
        if (!lb.classList.contains('is-open')) return;
        if (e.key === 'Escape')      close();
        if (e.key === 'ArrowLeft')   show(idx - 1);
        if (e.key === 'ArrowRight')  show(idx + 1);
    });

    arr.forEach(function (img, i) {
        img.style.cursor = 'zoom-in';
        // Bind to both the img and its parent .case-gallery__item for reliability
        var trigger = img.closest('.case-gallery__item') || img;
        trigger.style.cursor = 'zoom-in';
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            open(arr, i);
        });
        // Also keep listener on img itself in case trigger is the img
        if (trigger !== img) {
            img.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                open(arr, i);
            });
        }
    });
}

// Scroll-reveal — fires once per element as it enters the viewport
(function () {
    if (!('IntersectionObserver' in window)) {
        // Fallback: just make everything visible
        document.querySelectorAll('.eq-reveal').forEach(function (el) {
            el.classList.add('is-visible');
        });
        return;
    }
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.eq-reveal').forEach(function (el) {
        io.observe(el);
    });
}());
