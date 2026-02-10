// ==========================================
// AUTOPLAY ENGINE
// Narration data, playback controls, subtitles, speed
// ==========================================

// Narration Script - Uses data-slide-id for reliable slide matching
// See NARRATION.md for full mapping documentation
const narrationScript = [
  { id: "intro", text: "What I'm about to show you represents one of the most significant security blind spots in enterprise today. It's not your firewall. It's not your endpoints. It's your hiring process.", duration: 8000 },
  { id: "vero-hook", text: "Let me demonstrate with a real scenario. My target: Vero Financial. But I'm not going to hack their systems. I'm going to get hired.", duration: 7000 },
  { id: "vero-target", text: "Vero is a well-defended company. SOC 2 Type II certified. Regular penetration testing. Strong perimeter security. By traditional metrics, they're doing everything right.", duration: 6000 },
  { id: "entry-point", text: "But they're hiring. Six open roles. And that's my entry point.", duration: 4000 },
  { id: "why-role", text: "I'm targeting Platform Infrastructure. This role provides direct access to production systems, customer data, deployment pipelines, and internal credentials. One hire. Complete access.", duration: 7000 },
  { id: "meet-marcus", text: "So I built a candidate. Marcus Chen. Senior engineer, seven years experience, Berkeley graduate. Completely synthetic. Built in fifteen minutes.", duration: 6000 },
  { id: "linkedin", text: "His LinkedIn is indistinguishable from a real profile. Five hundred connections. Endorsements. Work history at companies that rarely verify references. Every detail engineered to pass scrutiny.", duration: 8000 },
  { id: "resume", text: "His resume aligns perfectly with the job requirements. Every date matches LinkedIn. Every reference is prepared to vouch for him.", duration: 5000 },
  { id: "interview-deepfake", text: "Marcus completes four video interviews. Recruiter screen. Technical round. Hiring manager. Executive review. All with glowing feedback. What they didn't know\u2014every interview used a real-time deepfake. Face and voice, completely synthetic.", duration: 11000 },
  { id: "voice-quiz", text: "Voice cloning is equally accessible. Three voices\u2014can you identify which is AI-generated? Most security professionals can't. And this technology is commercially available.", duration: 7000 },
  { id: "background-check", text: "The background check returns clean. No criminal history. No red flags. Because Marcus has no history at all. Synthetic identities don't have a past to discover.", duration: 7000 },
  { id: "every-stage", text: "Every stage of the hiring funnel\u2014bypassed. AI-generated identity for sourcing. Tailored resume. Deepfake interviews. Synthetic identity for background checks. Marcus now has an offer letter and access credentials.", duration: 9000 },
  { id: "already-happening", text: "This isn't theoretical. The Department of Justice confirmed North Korean operatives infiltrated over three hundred US companies using these exact techniques. KnowBe4\u2014a security awareness company\u2014hired a fake employee who began deploying malware on day one.", duration: 10000 },
  { id: "the-question", text: "If Marcus applied to dozens of companies last month, how many is he working at right now?", duration: 5000 },
  { id: "scale", text: "One operator. Fifteen minutes per identity. Twenty identities per week. Two hundred applications. Multiple job offers. Every week. This is industrial-scale infiltration.", duration: 8000 },
  { id: "fortune-500", text: "We've spoken directly with Fortune 500 security teams. This is happening now, at scale, across every industry.", duration: 5000 },
  { id: "epidemic", text: "Gartner projects one in four candidate profiles will be fraudulent by 2028. The DOJ identified three hundred plus compromised companies. Infiltration attempts increased two hundred twenty percent in twelve months.", duration: 8000 },
  { id: "hr-attack-surface", text: "Your perimeter is secure. Your firewall is hardened. But your hiring process? That's the vulnerability. HR is the new attack surface.", duration: 6000 },
  { id: "bad-hire-cost", text: "A standard bad hire costs over two hundred forty thousand dollars in recruiting, onboarding, and replacement. Detection takes an average of six months.", duration: 6000 },
  { id: "malicious", text: "But what if they're not just incompetent? Insider threat incidents average nearly five million dollars per breach. Detection and containment takes almost ten months.", duration: 7000 },
  { id: "clarity-intro", text: "Clarity provides end-to-end identity verification across the entire employee lifecycle. From first application to last day. Continuous assurance that your people are who they claim to be.", duration: 7000 },
  { id: "pipeline", text: "We integrate directly into your hiring workflow. Legitimate candidates pass through seamlessly. Threats are identified and blocked automatically.", duration: 6000 },
  { id: "command-center", text: "This is your security team's view. Complete visibility into workforce verification status. Real-time threat detection. Ninety-nine percent verification coverage.", duration: 7000 },
  { id: "pre-interview", text: "Before any interview, Clarity flags synthetic identities, AI-generated photos, and employment inconsistencies. Threats blocked before they waste anyone's time.", duration: 7000 },
  { id: "during-interview", text: "During live interviews, real-time detection identifies face manipulation, voice cloning, and identity mismatches. Interview paused. Security notified. Incident logged.", duration: 8000 },
  { id: "continuous", text: "Protection continues post-hire. Day ninety. Day one-eighty. Ongoing verification confirms it's still the same person who was hired.", duration: 6000 },
  { id: "lifecycle", text: "The complete identity lifecycle\u2014covered. Onboarding verification. Periodic checks. MFA resets. Privileged access requests. Identity confirmed at every critical moment.", duration: 7000 },
  { id: "two-pillars", text: "Clarity is built on two pillars: deep workflow integration and advanced fraud detection. Security tools fail when they create friction. We built for zero friction.", duration: 7000 },
  { id: "integrations", text: "Native integration with your existing stack. Okta. ServiceNow. Workday. Slack. Zoom. No workflow changes required.", duration: 5000 },
  { id: "fraud-detection", text: "Multi-layered fraud detection. Deepfake analysis. Voice biometrics. Document forensics. Identity signal correlation. High-confidence threat identification.", duration: 6000 },
  { id: "alerts", text: "When threats are detected, alerts route automatically to the right teams through existing tools. Full audit trail. Every action logged. Zero manual handoffs.", duration: 6000 },
  { id: "vs-traditional", text: "Traditional background checks verify history\u2014not identity. IDV platforms cover onboarding\u2014not interviews. Video platforms enable calls\u2014without deepfake detection. Clarity covers the complete surface.", duration: 9000 },
  { id: "social-proof", text: "Clarity protects hiring at scale for industry leaders like Deel\u2014verifying candidates across one hundred fifty countries.", duration: 5000 },
  { id: "closing", text: "Your people are your greatest asset. Make sure they're actually your people.", duration: 5000 }
];

// Build slide index lookup from IDs (window. for global access)
window.slideIdToIndex = {};
document.querySelectorAll('.slide[data-slide-id]').forEach((slide, idx) => {
    window.slideIdToIndex[slide.dataset.slideId] = idx;
});

// Helper: get slide index from narration entry
function getSlideIndex(narration) {
    if (narration.id) {
        const idx = window.slideIdToIndex[narration.id];
        if (idx !== undefined) return idx;
        console.warn(`Slide ID not found: ${narration.id}`);
    }
    return narration.slide ?? 0;
}

// Autoplay State
var isPlaying = false;
var isPaused = false;
var currentNarrationIndex = 0;
var narrationTimeout = null;
var currentAudio = null;
var playbackSpeed = 1;
var subtitlesEnabled = true;
var playbackGeneration = 0; // Guards against stale audio callbacks

// Preload audio files (one per narration entry)
const audioFiles = {};
for (let i = 0; i < narrationScript.length; i++) {
    audioFiles[i] = new Audio(`audio/narration/slide-${i}.mp3`);
    audioFiles[i].preload = 'auto';
}

// Elements
const overlay = document.getElementById('autoplay-overlay');
const progressBar = document.getElementById('presentation-progress-bar');
const progressContainer = document.getElementById('presentation-progress');
const controls = document.getElementById('presentation-controls');
const startBtn = document.getElementById('start-presentation-btn');
const pauseIcon = document.getElementById('pause-icon');
const playIcon = document.getElementById('play-icon');
const currentSlideNum = document.getElementById('current-slide-num');
const totalSlidesNum = document.getElementById('total-slides-num');
const subtitlesContainer = document.getElementById('subtitles');
const subtitlesText = document.getElementById('subtitles-text');
const speedBtn = document.getElementById('speed-btn');
const speedMenu = document.getElementById('speed-menu');
const subtitleToggle = document.getElementById('subtitle-toggle');

// Initialize
totalSlidesNum.textContent = narrationScript.length;

function showAutoplayOverlay() {
    startPresentation();
}

function hideAutoplayOverlay() {
    overlay.classList.remove('visible');
}

// Close overlay on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (overlay.classList.contains('visible')) {
            hideAutoplayOverlay();
            startBtn.classList.remove('hidden');
        } else if (isPlaying) {
            stopPresentation();
        }
    }
    // Space to pause/resume during presentation
    if (e.key === ' ' && isPlaying) {
        e.preventDefault();
        togglePause();
    }
    // Arrow key navigation while playing
    if (isPlaying && (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowUp')) {
        e.preventDefault();

        if (currentAudio) {
            currentAudio.onended = null;
            currentAudio.onerror = null;
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        clearTimeout(narrationTimeout);

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            if (currentNarrationIndex < narrationScript.length - 1) {
                currentNarrationIndex++;
            }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            if (currentNarrationIndex > 0) {
                currentNarrationIndex--;
            }
        }

        if (!isPaused) {
            playCurrentSlide();
        } else {
            const slides = document.querySelectorAll('.slide');
            const targetSlide = getSlideIndex(narrationScript[currentNarrationIndex]);
            slides[targetSlide].scrollIntoView({ behavior: 'smooth' });
            currentSlideNum.textContent = currentNarrationIndex + 1;
        }
    }
});

function startPresentation() {
    hideAutoplayOverlay();
    isPlaying = true;
    isPaused = false;

    const slides = document.querySelectorAll('.slide');
    const scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
    const slideHeight = window.innerHeight;
    const currentSlideIndex = Math.round(scrollPos / slideHeight);

    currentNarrationIndex = narrationScript.findIndex(n => getSlideIndex(n) >= currentSlideIndex);
    if (currentNarrationIndex === -1) currentNarrationIndex = 0;

    progressContainer.classList.add('active');
    controls.classList.add('active');
    if (subtitlesEnabled) {
        subtitlesContainer.classList.add('active');
    }
    startBtn.classList.add('hidden');

    const navHint = document.getElementById('nav-hint');
    if (navHint) navHint.style.display = 'none';

    document.body.style.overflow = 'hidden';
    playCurrentSlide();
}

// Speed Control
function toggleSpeedMenu() {
    speedMenu.classList.toggle('visible');
}

function setSpeed(speed) {
    playbackSpeed = speed;
    speedBtn.textContent = speed + 'x';

    speedMenu.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('active');
        if (parseFloat(btn.textContent) === speed) {
            btn.classList.add('active');
        }
    });

    speedMenu.classList.remove('visible');

    if (currentAudio && !currentAudio.paused) {
        currentAudio.playbackRate = playbackSpeed;
        // Restart subtitle timing at new speed
        if (isPlaying && currentNarrationIndex < narrationScript.length) {
            const narration = narrationScript[currentNarrationIndex];
            const audioDurMs = isFinite(currentAudio.duration)
                ? currentAudio.duration * 1000
                : narration.duration;
            updateSubtitles(narration.text, audioDurMs);
        }
    }
}

document.addEventListener('click', (e) => {
    if (!e.target.closest('#speed-selector')) {
        speedMenu.classList.remove('visible');
    }
});

// Subtitles Control
function toggleSubtitles() {
    subtitlesEnabled = !subtitlesEnabled;
    subtitleToggle.classList.toggle('active', subtitlesEnabled);

    if (subtitlesEnabled && isPlaying) {
        subtitlesContainer.classList.add('active');
    } else {
        subtitlesContainer.classList.remove('active');
    }
}

// Subtitle sentence cycling
let subtitleSentences = [];
let currentSentenceIndex = 0;
let sentenceInterval = null;

function updateSubtitles(text, audioDurationMs) {
    if (!subtitlesEnabled) return;

    if (sentenceInterval) {
        clearInterval(sentenceInterval);
        sentenceInterval = null;
    }

    subtitleSentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    subtitleSentences = subtitleSentences.map(s => s.trim()).filter(s => s.length > 0);

    if (subtitleSentences.length === 0) {
        subtitlesText.textContent = '';
        return;
    }

    currentSentenceIndex = 0;
    subtitlesText.textContent = subtitleSentences[0];

    if (subtitleSentences.length > 1) {
        // Use actual audio duration, adjusted for playback speed
        const effectiveDuration = audioDurationMs / playbackSpeed;
        const timePerSentence = effectiveDuration / subtitleSentences.length;

        sentenceInterval = setInterval(() => {
            currentSentenceIndex++;
            if (currentSentenceIndex < subtitleSentences.length) {
                subtitlesText.textContent = subtitleSentences[currentSentenceIndex];
            } else {
                clearInterval(sentenceInterval);
                sentenceInterval = null;
            }
        }, Math.max(timePerSentence, 800));
    }
}

function goToSlideAutoplay(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= 0 && index < slides.length) {
        const slide = slides[index];
        // Use shared restartAnimations if available, else fallback
        if (window.restartAnimations) {
            window.restartAnimations(slide);
        } else {
            // Fallback: restart inline animations by cloning
            const inlineAnimated = slide.querySelectorAll('[style*="animation"]');
            inlineAnimated.forEach(el => {
                const clone = el.cloneNode(true);
                el.parentNode.replaceChild(clone, el);
            });
        }

        // Use instant scroll so audio and visible slide stay in sync
        slides[index].scrollIntoView({ behavior: 'instant' });
        updateProgress(index);
        currentSlideNum.textContent = index + 1;
    }
}

function updateProgress(slideIndex) {
    const progress = ((slideIndex + 1) / narrationScript.length) * 100;
    progressBar.style.width = progress + '%';
}

function playCurrentSlide() {
    if (!isPlaying || currentNarrationIndex >= narrationScript.length) {
        if (currentNarrationIndex >= narrationScript.length) {
            updateSubtitles("Thank you for watching.", 2000);
            setTimeout(() => {
                stopPresentation();
            }, 2000);
        }
        return;
    }

    // Increment generation to invalidate any stale callbacks from previous slide
    const generation = ++playbackGeneration;

    const narration = narrationScript[currentNarrationIndex];
    const slideIdx = getSlideIndex(narration);

    goToSlideAutoplay(slideIdx);

    // Clean up previous audio handlers before reassigning
    if (currentAudio) {
        currentAudio.onended = null;
        currentAudio.onerror = null;
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = audioFiles[currentNarrationIndex];

    // Sync subtitles to actual audio duration when available, else use narration.duration
    const audioDurMs = (currentAudio && isFinite(currentAudio.duration))
        ? currentAudio.duration * 1000
        : narration.duration;
    updateSubtitles(narration.text, audioDurMs);

    if (currentAudio) {
        currentAudio.playbackRate = playbackSpeed;
        currentAudio.currentTime = 0;

        currentAudio.onended = () => {
            if (generation !== playbackGeneration) return; // Stale callback
            if (!isPaused && isPlaying) {
                currentNarrationIndex++;
                narrationTimeout = setTimeout(playCurrentSlide, 50);
            }
        };

        currentAudio.onerror = () => {
            if (generation !== playbackGeneration) return; // Stale callback
            if (!isPaused && isPlaying) {
                currentNarrationIndex++;
                narrationTimeout = setTimeout(playCurrentSlide, narration.duration / playbackSpeed);
            }
        };

        currentAudio.play().catch(err => {
            if (generation !== playbackGeneration) return; // Stale callback
            console.log('Audio play failed:', err);
            if (!isPaused && isPlaying) {
                currentNarrationIndex++;
                narrationTimeout = setTimeout(playCurrentSlide, narration.duration / playbackSpeed);
            }
        });
    } else {
        narrationTimeout = setTimeout(() => {
            if (generation !== playbackGeneration) return; // Stale callback
            if (!isPaused && isPlaying) {
                currentNarrationIndex++;
                playCurrentSlide();
            }
        }, narration.duration / playbackSpeed);
    }
}

function togglePause() {
    if (isPaused) {
        const scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
        const slideHeight = window.innerHeight;
        const currentSlideIndex = Math.round(scrollPos / slideHeight);

        const newIndex = narrationScript.findIndex(n => getSlideIndex(n) >= currentSlideIndex);
        if (newIndex !== -1 && newIndex !== currentNarrationIndex) {
            currentNarrationIndex = newIndex;
        }

        isPaused = false;
        pauseIcon.style.display = 'block';
        playIcon.style.display = 'none';
        document.body.style.overflow = 'hidden';
        controls.classList.remove('visible');
        playCurrentSlide();
    } else {
        isPaused = true;
        playbackGeneration++; // Invalidate pending callbacks
        pauseIcon.style.display = 'none';
        playIcon.style.display = 'block';
        document.body.style.overflow = '';
        controls.classList.add('visible');

        if (currentAudio) {
            currentAudio.pause();
        }
        clearTimeout(narrationTimeout);
    }
}

function stopPresentation() {
    isPlaying = false;
    isPaused = false;
    currentNarrationIndex = 0;
    playbackGeneration++; // Invalidate any pending stale callbacks

    if (currentAudio) {
        currentAudio.onended = null;
        currentAudio.onerror = null;
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    clearTimeout(narrationTimeout);

    if (sentenceInterval) {
        clearInterval(sentenceInterval);
        sentenceInterval = null;
    }

    progressContainer.classList.remove('active');
    controls.classList.remove('active');
    subtitlesContainer.classList.remove('active');
    startBtn.classList.remove('hidden');
    speedMenu.classList.remove('visible');

    document.body.style.overflow = '';

    pauseIcon.style.display = 'block';
    playIcon.style.display = 'none';
    progressBar.style.width = '0%';
    subtitlesText.textContent = '';
}

// Smart auto-hide controls
let controlsHideTimeout = null;
let lastMouseX = 0;
let lastMouseY = 0;
let mouseMovementAccumulator = 0;
let lastMoveTime = 0;
const MOVEMENT_THRESHOLD = 60;
const MOVEMENT_WINDOW = 300;

function showControls() {
    if (!isPlaying) return;
    controls.classList.add('visible');
    clearTimeout(controlsHideTimeout);
    controlsHideTimeout = setTimeout(() => {
        if (isPlaying && !isPaused) {
            controls.classList.remove('visible');
        }
    }, 1200);
}

function handleMouseMove(e) {
    if (!isPlaying) return;

    const now = Date.now();
    const dx = Math.abs(e.clientX - lastMouseX);
    const dy = Math.abs(e.clientY - lastMouseY);
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (now - lastMoveTime > MOVEMENT_WINDOW) {
        mouseMovementAccumulator = 0;
    }

    mouseMovementAccumulator += distance;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    lastMoveTime = now;

    if (mouseMovementAccumulator >= MOVEMENT_THRESHOLD) {
        showControls();
        mouseMovementAccumulator = 0;
    }
}

document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('click', showControls);

window.addEventListener('beforeunload', () => {
    if (currentAudio) {
        currentAudio.pause();
    }
});
