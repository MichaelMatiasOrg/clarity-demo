// ==========================================
// SLIDE NAVIGATION
// Keyboard nav, scroll tracking, animation restart, section nav
// ==========================================
(function() {
    const slides = document.querySelectorAll('.slide');
    const indicator = document.getElementById('slide-indicator');
    const navHint = document.getElementById('nav-hint');
    let currentSlide = 0;
    let indicatorTimeout;

    // Get current slide based on actual scroll position
    function getCurrentSlideFromScroll() {
        const scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
        const slideHeight = window.innerHeight;
        return Math.round(scrollPos / slideHeight);
    }

    // Update slide indicator
    function updateIndicator() {
        indicator.textContent = `${currentSlide + 1} / ${slides.length}`;
        indicator.classList.add('visible');
        clearTimeout(indicatorTimeout);
        indicatorTimeout = setTimeout(() => {
            indicator.classList.remove('visible');
        }, 2000);
    }

    // Restart animations on a slide (exposed globally for autoplay)
    function restartAnimations(slide) {
        // Find ALL elements with animation in their inline style
        const allAnimated = slide.querySelectorAll('[style*="animation"]');
        allAnimated.forEach(el => {
            const originalAnimation = el.style.animation;
            el.style.animation = 'none';
            el.offsetHeight; // Trigger reflow
            el.style.animation = originalAnimation;
        });

        // Find animated elements by class (orbit, gauntlet, etc.)
        const animatedElements = slide.querySelectorAll('.orbit-outer, .orbit-inner, .center-hub, .touchpoint, .flow-arrow, .check-station-1, .check-station-2, .check-station-3, .trusted-hire-circle, .verified-badge, .lifecycle-orbit, .lifecycle-container, .candidate-dot, .threat-dot');
        animatedElements.forEach(el => {
            const clone = el.cloneNode(true);
            if (el.parentNode) {
                el.parentNode.replaceChild(clone, el);
            }
        });

        // Also restart any elements with touchpoint classes
        const touchpoints = slide.querySelectorAll('[class*="touchpoint-"]');
        touchpoints.forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; // Trigger reflow
            el.style.animation = '';
        });

        // Restart gauntlet candidate animations by cloning
        if (slide.classList.contains('gauntlet-slide')) {
            const candidates = slide.querySelectorAll('[style*="candidateFlow"], [style*="threatDotPath"], [style*="blockAppear"], [style*="checkAppear"], [style*="lifecycleContainerAppear"], .lifecycle-item, .alert-notification');
            candidates.forEach(el => {
                const clone = el.cloneNode(true);
                if (el.parentNode) {
                    el.parentNode.replaceChild(clone, el);
                }
            });
        }
    }
    window.restartAnimations = restartAnimations;

    // Go to specific slide (exposed globally for autoplay)
    function goToSlide(index) {
        if (index < 0) index = 0;
        if (index >= slides.length) index = slides.length - 1;
        currentSlide = index;

        restartAnimations(slides[currentSlide]);
        slides[currentSlide].scrollIntoView({ behavior: 'smooth' });
        updateIndicator();
    }
    window.goToSlide = goToSlide;

    // Keyboard navigation (disabled during autoplay)
    document.addEventListener('keydown', (e) => {
        if (typeof isPlaying !== 'undefined' && isPlaying) {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' ||
                e.key === 'PageDown' || e.key === 'ArrowLeft' || e.key === 'ArrowUp' ||
                e.key === 'PageUp' || e.key === 'Home' || e.key === 'End') {
                e.preventDefault();
                return;
            }
        }

        currentSlide = getCurrentSlideFromScroll();

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ' || e.key === 'PageDown') {
            e.preventDefault();
            goToSlide(currentSlide + 1);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
            e.preventDefault();
            goToSlide(currentSlide - 1);
        } else if (e.key === 'Home') {
            e.preventDefault();
            goToSlide(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            goToSlide(slides.length - 1);
        }
    });

    // Track current slide on scroll
    let scrollTimeout;
    document.body.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            currentSlide = getCurrentSlideFromScroll();
            updateIndicator();
        }, 100);
    });

    // Restart animations when slides scroll into view
    let lastVisibleSlide = null;
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
                if (lastVisibleSlide !== entry.target) {
                    lastVisibleSlide = entry.target;
                    restartAnimations(entry.target);
                }
            }
        });
    }, { threshold: [0.6, 0.8] });

    slides.forEach(slide => {
        animationObserver.observe(slide);
    });

    // Hide nav hint after first navigation
    document.addEventListener('keydown', function hideHint() {
        navHint.style.opacity = '0';
        setTimeout(() => navHint.remove(), 300);
        document.removeEventListener('keydown', hideHint);
    }, { once: true });

    // Initial indicator
    currentSlide = getCurrentSlideFromScroll();
    updateIndicator();

    // Section navigation
    const sectionIds = ['section-attack', 'section-threat', 'section-impact', 'section-solution', 'section-close'];
    const navLinks = document.querySelectorAll('#nav-panel a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    let currentActiveSection = 'section-attack';

    function setActiveNav(sectionId) {
        currentActiveSection = sectionId;
        navLinks.forEach(link => {
            const linkSection = link.getAttribute('href').substring(1);
            if (linkSection === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                setActiveNav(entry.target.id);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px'
    });

    sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            sectionObserver.observe(section);
        }
    });

    setActiveNav('section-attack');
})();
