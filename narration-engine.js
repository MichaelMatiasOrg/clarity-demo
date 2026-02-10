// Narration Engine — Reusable autoplay, subtitles & speaker notes system
// Usage:
//   const engine = new NarrationEngine({
//     data: window.NarrationData,
//     slideSelector: '.slide',
//     slideIdAttribute: 'data-slide-id',
//     restartAnimations: (slide) => { ... }
//   });

class NarrationEngine {
    constructor(opts) {
        this.data = opts.data;
        this.slideSelector = opts.slideSelector || '.slide';
        this.slideIdAttribute = opts.slideIdAttribute || 'data-slide-id';
        this.restartAnimationsFn = opts.restartAnimations || null;

        // State
        this.isPlaying = false;
        this.isPaused = false;
        this.currentNarrationIndex = 0;
        this.narrationTimeout = null;
        this.currentAudio = null;
        this.playbackSpeed = 1;
        this.subtitlesEnabled = true;
        this.subtitleSentences = [];
        this.currentSentenceIndex = 0;
        this.sentenceInterval = null;

        // Playback generation (invalidates stale callbacks on slide skip)
        this.playbackGeneration = 0;

        // Mouse auto-hide state
        this.controlsHideTimeout = null;
        this.lastMouseX = 0;
        this.lastMouseY = 0;
        this.mouseMovementAccumulator = 0;
        this.lastMoveTime = 0;
        this.MOVEMENT_THRESHOLD = 60;
        this.MOVEMENT_WINDOW = 300;

        // Speaker notes state
        this.narrationPanelVisible = false;
        this.currentVisibleSlide = 0;

        // Event listeners (for cleanup)
        this._listeners = [];

        // Build slide index map
        this.slideIdToIndex = {};
        document.querySelectorAll(this.slideSelector + '[' + this.slideIdAttribute + ']').forEach((slide, idx) => {
            this.slideIdToIndex[slide.getAttribute(this.slideIdAttribute)] = idx;
        });

        // Expose for external access (e.g. slide navigation script)
        window.slideIdToIndex = this.slideIdToIndex;

        // Build narration map for speaker notes
        this.slideNarrationMap = {};
        this.data.entries.forEach(item => {
            if (item.id) {
                const idx = this.slideIdToIndex[item.id];
                if (idx !== undefined) {
                    this.slideNarrationMap[idx] = item.text;
                }
            }
        });

        // Preload audio files (dynamic count from data)
        this.audioFiles = {};
        for (let i = 0; i < this.data.entries.length; i++) {
            this.audioFiles[i] = new Audio(this.data.meta.audioPathPattern.replace('{index}', i));
            this.audioFiles[i].preload = 'auto';
        }

        // Inject UI elements
        this._injectUI();

        // Cache DOM refs
        this._cacheElements();

        // Set initial total slides count
        this.totalSlidesNum.textContent = this.data.entries.length;

        // Bind event handlers
        this._bindEvents();

        // Expose isPlaying globally for slide navigation script compatibility
        Object.defineProperty(window, 'isPlaying', {
            get: () => this.isPlaying,
            configurable: true
        });
    }

    // ==========================================
    // UI Injection
    // ==========================================

    _injectUI() {
        // Start Presentation Button
        const startBtn = document.createElement('button');
        startBtn.id = 'start-presentation-btn';
        startBtn.title = 'Watch narrated presentation';
        startBtn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M8 5v14l11-7z"/></svg> Watch Presentation';
        startBtn.addEventListener('click', () => this.startPresentation());
        document.body.appendChild(startBtn);

        // Autoplay Overlay
        const overlay = document.createElement('div');
        overlay.id = 'autoplay-overlay';
        overlay.innerHTML = `
            <div id="play-button-container">
                <h2>Ready to watch?</h2>
                <button id="play-button">
                    <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </button>
                <p>~4 minutes &bull; Auto-narrated presentation</p>
                <p style="margin-top: 10px; font-size: 0.85rem; opacity: 0.5;">Press Escape to close</p>
            </div>`;
        document.body.appendChild(overlay);
        overlay.querySelector('#play-button').addEventListener('click', () => this.startPresentation());

        // Progress Bar
        const progress = document.createElement('div');
        progress.id = 'presentation-progress';
        progress.innerHTML = '<div id="presentation-progress-bar"></div>';
        document.body.appendChild(progress);

        // Subtitles
        const subs = document.createElement('div');
        subs.id = 'subtitles';
        subs.innerHTML = '<span id="subtitles-text"></span>';
        document.body.appendChild(subs);

        // Control Bar
        const controls = document.createElement('div');
        controls.id = 'presentation-controls';
        controls.innerHTML = `
            <button id="pause-btn" title="Pause/Resume">
                <svg id="pause-icon" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                <svg id="play-icon" viewBox="0 0 24 24" style="display:none;"><path d="M8 5v14l11-7z"/></svg>
            </button>
            <button id="subtitle-toggle" class="active" title="Toggle Subtitles">
                <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6zm0 4h8v2H6zm10 0h2v2h-2zm-6-4h8v2h-8z"/></svg>
            </button>
            <span class="slide-info"><span id="current-slide-num">1</span> / <span id="total-slides-num">${this.data.entries.length}</span></span>
            <div id="speed-selector">
                <button id="speed-btn">1x</button>
                <div id="speed-menu">
                    <button data-speed="0.75">0.75x</button>
                    <button data-speed="1" class="active">1x</button>
                    <button data-speed="1.25">1.25x</button>
                    <button data-speed="1.5">1.5x</button>
                    <button data-speed="2">2x</button>
                </div>
            </div>
            <button id="stop-btn" title="Stop">
                <svg viewBox="0 0 24 24"><path d="M6 6h12v12H6z"/></svg>
            </button>`;
        document.body.appendChild(controls);

        // Wire control bar buttons
        controls.querySelector('#pause-btn').addEventListener('click', () => this.togglePause());
        controls.querySelector('#subtitle-toggle').addEventListener('click', () => this.toggleSubtitles());
        controls.querySelector('#speed-btn').addEventListener('click', () => this.toggleSpeedMenu());
        controls.querySelector('#stop-btn').addEventListener('click', () => this.stopPresentation());
        controls.querySelectorAll('#speed-menu button').forEach(btn => {
            btn.addEventListener('click', () => this.setSpeed(parseFloat(btn.dataset.speed)));
        });

        // Narration Panel Toggle (Speaker Notes button)
        const narrationToggle = document.createElement('button');
        narrationToggle.id = 'narration-toggle';
        narrationToggle.title = 'Speaker Notes (N)';
        narrationToggle.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>';
        narrationToggle.addEventListener('click', () => this.toggleNarrationPanel());
        document.body.appendChild(narrationToggle);

        // Narration Panel
        const panel = document.createElement('div');
        panel.id = 'narration-panel';
        panel.innerHTML = `
            <div id="narration-panel-header">
                <h3>Speaker Notes</h3>
                <span class="slide-badge">Slide <span id="narration-slide-num">1</span></span>
                <button id="narration-panel-close" title="Close (N or Esc)">&times;</button>
            </div>
            <div id="narration-panel-content">
                <p class="narration-text" id="narration-text"></p>
            </div>
            <div id="narration-panel-footer">
                <span><kbd>N</kbd> Toggle panel</span>
                <span><kbd>&larr;</kbd> <kbd>&rarr;</kbd> Navigate slides</span>
                <span><kbd>Esc</kbd> Close</span>
            </div>`;
        document.body.appendChild(panel);
        panel.querySelector('#narration-panel-close').addEventListener('click', () => this.closeNarrationPanel());
    }

    _cacheElements() {
        this.overlay = document.getElementById('autoplay-overlay');
        this.progressBar = document.getElementById('presentation-progress-bar');
        this.progressContainer = document.getElementById('presentation-progress');
        this.controls = document.getElementById('presentation-controls');
        this.startBtn = document.getElementById('start-presentation-btn');
        this.pauseIcon = document.getElementById('pause-icon');
        this.playIcon = document.getElementById('play-icon');
        this.currentSlideNum = document.getElementById('current-slide-num');
        this.totalSlidesNum = document.getElementById('total-slides-num');
        this.subtitlesContainer = document.getElementById('subtitles');
        this.subtitlesText = document.getElementById('subtitles-text');
        this.speedBtn = document.getElementById('speed-btn');
        this.speedMenu = document.getElementById('speed-menu');
        this.subtitleToggle = document.getElementById('subtitle-toggle');

        this.narrationToggle = document.getElementById('narration-toggle');
        this.narrationPanel = document.getElementById('narration-panel');
        this.narrationText = document.getElementById('narration-text');
        this.narrationSlideNum = document.getElementById('narration-slide-num');
    }

    // ==========================================
    // Event Binding
    // ==========================================

    _bindEvents() {
        this._on(document, 'keydown', (e) => this._handleKeydown(e));
        this._on(document, 'click', (e) => {
            if (!e.target.closest('#speed-selector')) {
                this.speedMenu.classList.remove('visible');
            }
        });
        this._on(document, 'mousemove', (e) => this._handleMouseMove(e));
        this._on(document, 'click', () => this._showControls());
        this._on(window, 'beforeunload', () => {
            if (this.currentAudio) this.currentAudio.pause();
        });

        // Speaker notes: scroll tracking
        let scrollTimeout;
        this._on(document, 'scroll', () => {
            if (!this.narrationPanelVisible) return;
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
                const slideHeight = window.innerHeight;
                const newSlide = Math.round(scrollPos / slideHeight);
                if (newSlide !== this.currentVisibleSlide) {
                    this.currentVisibleSlide = newSlide;
                    this._updateNarrationText();
                }
            }, 50);
        }, { passive: true });

        // Speaker notes: IntersectionObserver for accuracy
        const slides = document.querySelectorAll(this.slideSelector);
        const narrationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                    const slideIndex = Array.from(slides).indexOf(entry.target);
                    if (slideIndex !== -1 && slideIndex !== this.currentVisibleSlide) {
                        this.currentVisibleSlide = slideIndex;
                        if (this.narrationPanelVisible) {
                            this._updateNarrationText();
                        }
                    }
                }
            });
        }, { threshold: 0.5 });
        slides.forEach(slide => narrationObserver.observe(slide));
    }

    _on(target, event, handler, opts) {
        target.addEventListener(event, handler, opts);
        this._listeners.push({ target, event, handler, opts });
    }

    // ==========================================
    // Keyboard
    // ==========================================

    _handleKeydown(e) {
        // Escape: close overlay or stop presentation
        if (e.key === 'Escape') {
            if (this.overlay.classList.contains('visible')) {
                this._hideAutoplayOverlay();
                this.startBtn.classList.remove('hidden');
            } else if (this.isPlaying) {
                this.stopPresentation();
            }
            if (this.narrationPanelVisible) {
                this.closeNarrationPanel();
                e.preventDefault();
            }
        }

        // Space: pause/resume during presentation
        if (e.key === ' ' && this.isPlaying) {
            e.preventDefault();
            this.togglePause();
        }

        // Arrow key navigation while playing
        if (this.isPlaying && (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowUp')) {
            e.preventDefault();
            if (this.currentAudio) {
                this.currentAudio.pause();
                this.currentAudio.currentTime = 0;
            }
            clearTimeout(this.narrationTimeout);

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                if (this.currentNarrationIndex < this.data.entries.length - 1) {
                    this.currentNarrationIndex++;
                }
            } else {
                if (this.currentNarrationIndex > 0) {
                    this.currentNarrationIndex--;
                }
            }

            if (!this.isPaused) {
                this.playCurrentSlide();
            } else {
                const slides = document.querySelectorAll(this.slideSelector);
                const targetSlide = this._getSlideIndex(this.data.entries[this.currentNarrationIndex]);
                slides[targetSlide].scrollIntoView({ behavior: 'smooth' });
                this.currentSlideNum.textContent = this.currentNarrationIndex + 1;
            }
        }

        // N key: toggle speaker notes panel
        if (e.key === 'n' || e.key === 'N') {
            if (!e.metaKey && !e.ctrlKey && !e.altKey) {
                const devModeBtn = document.getElementById('dev-mode-toggle');
                if (devModeBtn && devModeBtn.classList.contains('dev-mode-on')) return;
                this.toggleNarrationPanel();
                e.preventDefault();
            }
        }
    }

    // ==========================================
    // Slide Helpers
    // ==========================================

    _getSlideIndex(narration) {
        if (narration.id) {
            const idx = this.slideIdToIndex[narration.id];
            if (idx !== undefined) return idx;
            console.warn('Slide ID not found:', narration.id);
        }
        return narration.slide ?? 0;
    }

    _goToSlide(index) {
        const slides = document.querySelectorAll(this.slideSelector);
        if (index >= 0 && index < slides.length) {
            const slide = slides[index];
            this._restartAnimations(slide);
            slide.scrollIntoView({ behavior: 'smooth' });
            this._updateProgress(index);
            this.currentSlideNum.textContent = index + 1;
        }
    }

    _restartAnimations(slide) {
        if (this.restartAnimationsFn) {
            this.restartAnimationsFn(slide);
            return;
        }

        // Use shared restartAnimations from navigation.js if available
        if (window.restartAnimations) {
            window.restartAnimations(slide);
            return;
        }

        // Default animation restart logic
        const selectors = this.data.animationSelectors;
        if (selectors) {
            slide.querySelectorAll(selectors).forEach(el => {
                const clone = el.cloneNode(true);
                el.parentNode.replaceChild(clone, el);
            });
        }

        // Restart gauntlet animations
        if (slide.classList.contains('gauntlet-slide')) {
            const container = slide.querySelector('[style*="position: absolute"]');
            if (container) {
                const clone = container.cloneNode(true);
                container.parentNode.replaceChild(clone, container);
            }
        }

        // Restart all inline animation styles
        slide.querySelectorAll('[style*="animation"]').forEach(el => {
            const clone = el.cloneNode(true);
            el.parentNode.replaceChild(clone, el);
        });
    }

    _updateProgress(slideIndex) {
        const progress = ((slideIndex + 1) / this.data.entries.length) * 100;
        this.progressBar.style.width = progress + '%';
    }

    // ==========================================
    // Autoplay Engine
    // ==========================================

    startPresentation() {
        this._hideAutoplayOverlay();
        this.isPlaying = true;
        this.isPaused = false;

        // Find current slide position and start narration from there
        const slides = document.querySelectorAll(this.slideSelector);
        const scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
        const slideHeight = window.innerHeight;
        const currentSlideIndex = Math.round(scrollPos / slideHeight);

        this.currentNarrationIndex = this.data.entries.findIndex(n => this._getSlideIndex(n) >= currentSlideIndex);
        if (this.currentNarrationIndex === -1) this.currentNarrationIndex = 0;

        // Show controls
        this.progressContainer.classList.add('active');
        this.controls.classList.add('active');
        if (this.subtitlesEnabled) this.subtitlesContainer.classList.add('active');
        this.startBtn.classList.add('hidden');

        // Hide nav hint if present
        const navHint = document.getElementById('nav-hint');
        if (navHint) navHint.style.display = 'none';

        // Disable scrolling during playback
        document.body.style.overflow = 'hidden';

        this.playCurrentSlide();
    }

    playCurrentSlide() {
        if (!this.isPlaying || this.currentNarrationIndex >= this.data.entries.length) {
            if (this.currentNarrationIndex >= this.data.entries.length) {
                this._updateSubtitles('Thank you for watching.', 2000);
                setTimeout(() => this.stopPresentation(), 2000);
            }
            return;
        }

        // Increment generation to invalidate stale callbacks from previous slide
        const generation = ++this.playbackGeneration;

        const narration = this.data.entries[this.currentNarrationIndex];
        const slideIdx = this._getSlideIndex(narration);

        this._goToSlide(slideIdx);

        // Clean up previous audio handlers before reassigning
        if (this.currentAudio) {
            this.currentAudio.onended = null;
            this.currentAudio.onerror = null;
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
        }

        this.currentAudio = this.audioFiles[this.currentNarrationIndex];

        // Sync subtitles to actual audio duration when available
        const audioDurMs = (this.currentAudio && isFinite(this.currentAudio.duration))
            ? this.currentAudio.duration * 1000
            : narration.duration;
        this._updateSubtitles(narration.text, audioDurMs);

        if (this.currentAudio) {
            this.currentAudio.playbackRate = this.playbackSpeed;
            this.currentAudio.currentTime = 0;

            this.currentAudio.onended = () => {
                if (generation !== this.playbackGeneration) return;
                if (!this.isPaused && this.isPlaying) {
                    this.currentNarrationIndex++;
                    this.narrationTimeout = setTimeout(() => this.playCurrentSlide(), 50);
                }
            };

            this.currentAudio.onerror = () => {
                if (generation !== this.playbackGeneration) return;
                if (!this.isPaused && this.isPlaying) {
                    this.currentNarrationIndex++;
                    this.narrationTimeout = setTimeout(() => this.playCurrentSlide(), narration.duration / this.playbackSpeed);
                }
            };

            this.currentAudio.play().catch(() => {
                if (generation !== this.playbackGeneration) return;
                if (!this.isPaused && this.isPlaying) {
                    this.currentNarrationIndex++;
                    this.narrationTimeout = setTimeout(() => this.playCurrentSlide(), narration.duration / this.playbackSpeed);
                }
            });
        } else {
            this.narrationTimeout = setTimeout(() => {
                if (generation !== this.playbackGeneration) return;
                if (!this.isPaused && this.isPlaying) {
                    this.currentNarrationIndex++;
                    this.playCurrentSlide();
                }
            }, narration.duration / this.playbackSpeed);
        }
    }

    togglePause() {
        if (this.isPaused) {
            // Resume — check if user scrolled to a different slide
            const scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
            const slideHeight = window.innerHeight;
            const currentSlideIndex = Math.round(scrollPos / slideHeight);

            const newIndex = this.data.entries.findIndex(n => this._getSlideIndex(n) >= currentSlideIndex);
            if (newIndex !== -1 && newIndex !== this.currentNarrationIndex) {
                this.currentNarrationIndex = newIndex;
            }

            this.isPaused = false;
            this.pauseIcon.style.display = 'block';
            this.playIcon.style.display = 'none';
            document.body.style.overflow = 'hidden';
            this.controls.classList.remove('visible');

            this.playCurrentSlide();
        } else {
            this.isPaused = true;
            this.pauseIcon.style.display = 'none';
            this.playIcon.style.display = 'block';
            document.body.style.overflow = '';
            this.controls.classList.add('visible');

            if (this.currentAudio) this.currentAudio.pause();
            clearTimeout(this.narrationTimeout);
        }
    }

    stopPresentation() {
        this.isPlaying = false;
        this.isPaused = false;
        this.currentNarrationIndex = 0;

        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio.currentTime = 0;
        }
        clearTimeout(this.narrationTimeout);

        if (this.sentenceInterval) {
            clearInterval(this.sentenceInterval);
            this.sentenceInterval = null;
        }

        this.progressContainer.classList.remove('active');
        this.controls.classList.remove('active');
        this.subtitlesContainer.classList.remove('active');
        this.startBtn.classList.remove('hidden');
        this.speedMenu.classList.remove('visible');

        document.body.style.overflow = '';

        this.pauseIcon.style.display = 'block';
        this.playIcon.style.display = 'none';
        this.progressBar.style.width = '0%';
        this.subtitlesText.textContent = '';
    }

    // ==========================================
    // Overlay
    // ==========================================

    _hideAutoplayOverlay() {
        this.overlay.classList.remove('visible');
    }

    // ==========================================
    // Speed Control
    // ==========================================

    toggleSpeedMenu() {
        this.speedMenu.classList.toggle('visible');
    }

    setSpeed(speed) {
        this.playbackSpeed = speed;
        this.speedBtn.textContent = speed + 'x';

        this.speedMenu.querySelectorAll('button').forEach(btn => {
            btn.classList.toggle('active', parseFloat(btn.dataset.speed) === speed);
        });

        this.speedMenu.classList.remove('visible');

        if (this.currentAudio && !this.currentAudio.paused) {
            this.currentAudio.playbackRate = this.playbackSpeed;
        }
    }

    // ==========================================
    // Subtitles
    // ==========================================

    toggleSubtitles() {
        this.subtitlesEnabled = !this.subtitlesEnabled;
        this.subtitleToggle.classList.toggle('active', this.subtitlesEnabled);

        if (this.subtitlesEnabled && this.isPlaying) {
            this.subtitlesContainer.classList.add('active');
        } else {
            this.subtitlesContainer.classList.remove('active');
        }
    }

    _updateSubtitles(text, audioDurationMs) {
        if (!this.subtitlesEnabled) return;

        if (this.sentenceInterval) {
            clearInterval(this.sentenceInterval);
            this.sentenceInterval = null;
        }

        this.subtitleSentences = text.match(/[^.!?]+[.!?]+/g) || [text];
        this.subtitleSentences = this.subtitleSentences.map(s => s.trim()).filter(s => s.length > 0);

        if (this.subtitleSentences.length === 0) {
            this.subtitlesText.textContent = '';
            return;
        }

        this.currentSentenceIndex = 0;
        this.subtitlesText.textContent = this.subtitleSentences[0];

        if (this.subtitleSentences.length > 1) {
            // Use actual audio duration adjusted for playback speed
            const effectiveDuration = audioDurationMs / this.playbackSpeed;
            const timePerSentence = effectiveDuration / this.subtitleSentences.length;

            this.sentenceInterval = setInterval(() => {
                this.currentSentenceIndex++;
                if (this.currentSentenceIndex < this.subtitleSentences.length) {
                    this.subtitlesText.textContent = this.subtitleSentences[this.currentSentenceIndex];
                } else {
                    clearInterval(this.sentenceInterval);
                    this.sentenceInterval = null;
                }
            }, Math.max(timePerSentence, 800));
        }
    }

    // ==========================================
    // Mouse / Controls Auto-Hide
    // ==========================================

    _showControls() {
        if (!this.isPlaying) return;
        this.controls.classList.add('visible');
        clearTimeout(this.controlsHideTimeout);
        this.controlsHideTimeout = setTimeout(() => {
            if (this.isPlaying && !this.isPaused) {
                this.controls.classList.remove('visible');
            }
        }, 1200);
    }

    _handleMouseMove(e) {
        if (!this.isPlaying) return;

        const now = Date.now();
        const dx = Math.abs(e.clientX - this.lastMouseX);
        const dy = Math.abs(e.clientY - this.lastMouseY);
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (now - this.lastMoveTime > this.MOVEMENT_WINDOW) {
            this.mouseMovementAccumulator = 0;
        }

        this.mouseMovementAccumulator += distance;
        this.lastMouseX = e.clientX;
        this.lastMouseY = e.clientY;
        this.lastMoveTime = now;

        if (this.mouseMovementAccumulator >= this.MOVEMENT_THRESHOLD) {
            this._showControls();
            this.mouseMovementAccumulator = 0;
        }
    }

    // ==========================================
    // Speaker Notes Panel
    // ==========================================

    _updateNarrationText() {
        const slideNum = this.currentVisibleSlide + 1;
        const totalSlides = document.querySelectorAll(this.slideSelector).length;
        this.narrationSlideNum.textContent = slideNum + ' / ' + totalSlides;

        const text = this.slideNarrationMap[this.currentVisibleSlide];
        if (text) {
            this.narrationText.textContent = text;
            this.narrationText.classList.remove('no-narration');
        } else {
            this.narrationText.textContent = 'No speaker notes for this slide.';
            this.narrationText.classList.add('no-narration');
        }
    }

    toggleNarrationPanel() {
        this.narrationPanelVisible = !this.narrationPanelVisible;
        this.narrationPanel.classList.toggle('visible', this.narrationPanelVisible);
        this.narrationToggle.classList.toggle('active', this.narrationPanelVisible);
        if (this.narrationPanelVisible) {
            const scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
            const slideHeight = window.innerHeight;
            this.currentVisibleSlide = Math.round(scrollPos / slideHeight);
            this._updateNarrationText();
        }
    }

    closeNarrationPanel() {
        this.narrationPanelVisible = false;
        this.narrationPanel.classList.remove('visible');
        this.narrationToggle.classList.remove('active');
    }
}
