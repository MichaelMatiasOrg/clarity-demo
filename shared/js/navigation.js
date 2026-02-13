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

    // Update URL hash to reflect current slide (without adding history entries)
    function updateHash(index) {
        const slideId = slides[index] && slides[index].getAttribute('data-slide-id');
        if (slideId) {
            history.replaceState(null, '', '#' + slideId);
        }
    }

    // Find slide index by hash (data-slide-id)
    function getSlideIndexFromHash() {
        const hash = location.hash.slice(1);
        if (!hash) return -1;
        for (let i = 0; i < slides.length; i++) {
            if (slides[i].getAttribute('data-slide-id') === hash) return i;
        }
        return -1;
    }

    // Go to specific slide (exposed globally for autoplay)
    function goToSlide(index) {
        if (index < 0) index = 0;
        if (index >= slides.length) index = slides.length - 1;
        currentSlide = index;

        keyboardNavigating = true;
        restartAnimations(slides[currentSlide]);
        slides[currentSlide].scrollIntoView({ behavior: 'smooth' });
        updateIndicator();
        updateHash(currentSlide);
        if (typeof updateActiveSection === 'function') updateActiveSection();
        setTimeout(() => { keyboardNavigating = false; }, 600);
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
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            currentSlide = getCurrentSlideFromScroll();
            updateIndicator();
            updateHash(currentSlide);
            updateActiveSection();
        }, 100);
    });

    // Restart animations when slides scroll into view
    let lastVisibleSlide = null;
    let keyboardNavigating = false;
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
                if (lastVisibleSlide !== entry.target && !keyboardNavigating) {
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

    // On page load, jump to slide from URL hash (if present)
    const hashIndex = getSlideIndexFromHash();
    if (hashIndex >= 0) {
        currentSlide = hashIndex;
        slides[currentSlide].scrollIntoView();
        restartAnimations(slides[currentSlide]);
    } else {
        currentSlide = getCurrentSlideFromScroll();
    }
    updateIndicator();
    updateHash(currentSlide);

    // Handle hash changes (e.g. user edits URL or clicks a hash link)
    window.addEventListener('hashchange', () => {
        const idx = getSlideIndexFromHash();
        if (idx >= 0 && idx !== currentSlide) {
            goToSlide(idx);
        }
    });

    // Section navigation — map each slide index to its section
    const sectionIds = ['section-attack', 'section-threat', 'section-impact', 'section-solution', 'section-close'];
    const navLinks = document.querySelectorAll('#nav-panel a[data-section]');

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

    // Build a per-slide section map: for each slide, find which section it belongs to
    // by looking at which section-* anchor is at or before it in DOM order
    const slideSectionMap = [];
    let activeSectionId = sectionIds[0]; // default to first section
    slides.forEach(slide => {
        // Check if this slide IS a section start
        const slideId = slide.id;
        if (slideId && sectionIds.indexOf(slideId) !== -1) {
            activeSectionId = slideId;
        }
        slideSectionMap.push(activeSectionId);
    });

    let currentActiveSection = '';

    function setActiveNav(sectionId) {
        if (currentActiveSection === sectionId) return;
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

    function updateActiveSection() {
        var idx = getCurrentSlideFromScroll();
        if (idx >= 0 && idx < slideSectionMap.length) {
            setActiveNav(slideSectionMap[idx]);
        }
    }

    updateActiveSection();

    // Create shared bottom toolbar for utility buttons (speaker notes, dev mode, PDF, etc.)
    const toolbar = document.createElement('div');
    toolbar.id = 'bottom-toolbar';
    toolbar.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 9990; display: flex; gap: 8px; align-items: center;';
    document.body.appendChild(toolbar);

    // Auto-hide toolbar after 3s of no mouse movement
    let toolbarHideTimeout = setTimeout(function() { toolbar.classList.add('toolbar-hidden'); }, 3000);
    document.addEventListener('mousemove', function() {
        toolbar.classList.remove('toolbar-hidden');
        clearTimeout(toolbarHideTimeout);
        toolbarHideTimeout = setTimeout(function() { toolbar.classList.add('toolbar-hidden'); }, 3000);
    });
})();
