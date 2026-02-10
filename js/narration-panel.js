// ==========================================
// NARRATION PANEL - Speaker Notes
// ==========================================
(function() {
    const narrationToggle = document.getElementById('narration-toggle');
    const narrationPanel = document.getElementById('narration-panel');
    const narrationText = document.getElementById('narration-text');
    const narrationSlideNum = document.getElementById('narration-slide-num');
    const narrationClose = document.getElementById('narration-panel-close');
    let narrationPanelVisible = false;
    let currentVisibleSlide = 0;

    // Build a map of slide index to narration text
    const slideNarrationMap = {};
    if (typeof narrationScript !== 'undefined' && window.slideIdToIndex) {
        narrationScript.forEach(item => {
            if (item.id) {
                const idx = window.slideIdToIndex[item.id];
                if (idx !== undefined) {
                    slideNarrationMap[idx] = item.text;
                }
            } else if (item.slide !== undefined) {
                slideNarrationMap[item.slide] = item.text;
            }
        });
    }

    function updateNarrationText() {
        const slideNum = currentVisibleSlide + 1;
        const totalSlides = document.querySelectorAll('.slide').length;
        narrationSlideNum.textContent = slideNum + ' / ' + totalSlides;

        const text = slideNarrationMap[currentVisibleSlide];
        if (text) {
            narrationText.textContent = text;
            narrationText.classList.remove('no-narration');
        } else {
            narrationText.textContent = 'No speaker notes for this slide.';
            narrationText.classList.add('no-narration');
        }
    }

    function toggleNarrationPanel() {
        narrationPanelVisible = !narrationPanelVisible;
        narrationPanel.classList.toggle('visible', narrationPanelVisible);
        narrationToggle.classList.toggle('active', narrationPanelVisible);
        if (narrationPanelVisible) {
            const scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
            const slideHeight = window.innerHeight;
            currentVisibleSlide = Math.round(scrollPos / slideHeight);
            updateNarrationText();
        }
    }

    function closeNarrationPanel() {
        narrationPanelVisible = false;
        narrationPanel.classList.remove('visible');
        narrationToggle.classList.remove('active');
    }

    narrationToggle.addEventListener('click', toggleNarrationPanel);
    narrationClose.addEventListener('click', closeNarrationPanel);

    // Keyboard shortcut
    document.addEventListener('keydown', (e) => {
        if (e.key === 'n' || e.key === 'N') {
            if (!e.metaKey && !e.ctrlKey && !e.altKey) {
                const devModeBtn = document.getElementById('dev-mode-toggle');
                if (devModeBtn && devModeBtn.classList.contains('dev-mode-on')) {
                    return;
                }
                toggleNarrationPanel();
                e.preventDefault();
            }
        }
        if (e.key === 'Escape' && narrationPanelVisible) {
            closeNarrationPanel();
            e.preventDefault();
        }
    });

    // Track slide changes via scroll
    let scrollTimeout;
    document.addEventListener('scroll', () => {
        if (!narrationPanelVisible) return;

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
            const slideHeight = window.innerHeight;
            const newSlide = Math.round(scrollPos / slideHeight);

            if (newSlide !== currentVisibleSlide) {
                currentVisibleSlide = newSlide;
                updateNarrationText();
            }
        }, 50);
    }, { passive: true });

    // Also track via IntersectionObserver for more accuracy
    const slides = document.querySelectorAll('.slide');
    const narrationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                const slideIndex = Array.from(slides).indexOf(entry.target);
                if (slideIndex !== -1 && slideIndex !== currentVisibleSlide) {
                    currentVisibleSlide = slideIndex;
                    if (narrationPanelVisible) {
                        updateNarrationText();
                    }
                }
            }
        });
    }, { threshold: 0.5 });

    slides.forEach(slide => {
        narrationObserver.observe(slide);
    });
})();
