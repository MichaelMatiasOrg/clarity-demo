// ==========================================
// DEVELOPER MODE - Element Inspector
// ==========================================
(function() {
    let devModeEnabled = false;
    let highlightedEl = null;
    let tooltip = null;
    let overlay = null;

    function assignDevIds() {
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, idx) => {
            const slideNum = idx + 1;
            if (!slide.dataset.devId) {
                slide.dataset.devId = `slide-${slideNum}`;
            }

            const selectors = ['h1', 'h2', 'h3', 'p', 'div', 'span', 'img', 'button', 'a', 'ul', 'li', 'section'];
            let elCount = 0;

            selectors.forEach(sel => {
                slide.querySelectorAll(sel).forEach(el => {
                    if (!el.dataset.devId && !el.closest('[data-dev-id]')?.contains(el.parentElement)) {
                        elCount++;
                        const tag = el.tagName.toLowerCase();
                        const text = el.textContent?.trim().substring(0, 20).replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase() || '';
                        el.dataset.devId = `s${slideNum}-${tag}${elCount}${text ? '-' + text : ''}`;
                    }
                });
            });
        });
    }

    function createToggle() {
        const btn = document.createElement('button');
        btn.id = 'dev-mode-toggle';
        btn.innerHTML = '\uD83D\uDEE0\uFE0F';
        btn.title = 'Dev Mode (Alt+D) | ESC=exit, C=copy, ?=help';
        btn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 10000;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: none;
            background: #1a1a2e;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            transition: all 0.2s;
            opacity: 0.7;
        `;
        btn.addEventListener('mouseenter', () => btn.style.opacity = '1');
        btn.addEventListener('mouseleave', () => btn.style.opacity = devModeEnabled ? '1' : '0.7');
        btn.addEventListener('click', toggleDevMode);
        document.body.appendChild(btn);
        return btn;
    }

    function createOverlay() {
        overlay = document.createElement('div');
        overlay.id = 'dev-highlight-overlay';
        overlay.style.cssText = `
            position: fixed;
            pointer-events: none;
            border: 2px solid #61F393;
            background: rgba(97, 243, 147, 0.1);
            z-index: 9998;
            display: none;
            transition: all 0.1s ease;
        `;
        document.body.appendChild(overlay);
    }

    function createTooltip() {
        tooltip = document.createElement('div');
        tooltip.id = 'dev-tooltip';
        tooltip.style.cssText = `
            position: fixed;
            background: #1a1a2e;
            color: #61F393;
            padding: 8px 14px;
            border-radius: 6px;
            font-family: monospace;
            font-size: 13px;
            z-index: 9999;
            pointer-events: none;
            display: none;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            max-width: 400px;
            word-break: break-all;
        `;
        document.body.appendChild(tooltip);
    }

    function showToast(message) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 80px;
            right: 20px;
            background: #1a1a2e;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 10001;
            font-size: 14px;
            animation: toastIn 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        `;
        toast.textContent = message;
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.3s';
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }

    function toggleDevMode() {
        devModeEnabled = !devModeEnabled;
        const btn = document.getElementById('dev-mode-toggle');

        if (devModeEnabled) {
            btn.style.background = '#61F393';
            btn.style.color = '#1a1a2e';
            btn.style.opacity = '1';
            showToast('\uD83D\uDEE0\uFE0F Dev Mode ON \u2014 ESC=exit, C=copy, ?=help');
        } else {
            btn.style.background = '#1a1a2e';
            btn.style.color = 'white';
            overlay.style.display = 'none';
            tooltip.style.display = 'none';
            showToast('Dev Mode OFF');
        }
    }

    function handleDevMouseMove(e) {
        if (!devModeEnabled) return;

        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (!el || el.id === 'dev-mode-toggle' || el.id === 'dev-tooltip' || el.id === 'dev-highlight-overlay') {
            overlay.style.display = 'none';
            tooltip.style.display = 'none';
            return;
        }

        let target = el;

        const skipTags = ['BR', 'SPAN', 'STYLE', 'SCRIPT'];
        if (skipTags.includes(target.tagName) && target.parentElement) {
            target = target.parentElement;
        }

        const meaningfulTags = ['H1', 'H2', 'H3', 'H4', 'P', 'BUTTON', 'A', 'IMG', 'DIV', 'LI', 'UL', 'INPUT'];
        if (target.classList.contains('slide') || target.tagName === 'SECTION') {
            const children = target.querySelectorAll('h1, h2, h3, h4, p, button, a, img, div, li');
            for (const child of children) {
                const rect = child.getBoundingClientRect();
                if (e.clientX >= rect.left && e.clientX <= rect.right &&
                    e.clientY >= rect.top && e.clientY <= rect.bottom) {
                    target = child;
                    break;
                }
            }
        }

        if (!target.dataset.devId) {
            const slide = target.closest('.slide');
            const slideNum = slide ? Array.from(document.querySelectorAll('.slide')).indexOf(slide) + 1 : 0;
            const tag = target.tagName.toLowerCase();
            const text = target.textContent?.trim().substring(0, 15).replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase() || '';
            const uniqueId = Math.random().toString(36).substring(2, 6);
            target.dataset.devId = `s${slideNum}-${tag}${text ? '-' + text : ''}-${uniqueId}`;
        }

        highlightedEl = target;

        const rect = target.getBoundingClientRect();
        overlay.style.left = rect.left + 'px';
        overlay.style.top = rect.top + 'px';
        overlay.style.width = rect.width + 'px';
        overlay.style.height = rect.height + 'px';
        overlay.style.display = 'block';

        const devId = target.dataset.devId;
        const existingId = target.id ? ` (id="${target.id}")` : '';
        const classes = target.className ? ` .${target.className.split(' ').slice(0, 2).join('.')}` : '';
        tooltip.innerHTML = `<strong>${devId}</strong>${existingId}${classes}<br><span style="color: #888; font-size: 11px;">Click to copy</span>`;
        tooltip.style.left = Math.min(e.clientX + 15, window.innerWidth - 420) + 'px';
        tooltip.style.top = Math.max(e.clientY - 40, 10) + 'px';
        tooltip.style.display = 'block';
    }

    function buildElementContext(el) {
        const devId = el.dataset.devId;
        const slideMatch = devId.match(/^s(\d+)/);
        const slideNum = slideMatch ? slideMatch[1] : '?';
        const tag = el.tagName.toLowerCase();
        const classes = el.className ? `.${el.className.split(' ').slice(0, 3).join('.')}` : '';
        const textPreview = el.textContent?.trim().substring(0, 100).replace(/\s+/g, ' ') || '';
        const existingId = el.id ? `#${el.id}` : '';

        const styles = window.getComputedStyle(el);
        const fontSize = styles.fontSize;

        const context = `[Element: ${devId} | Slide ${slideNum}]

CONTEXT FOR GENIE:
- Element: <${tag}${existingId}${classes}>
- Text preview: "${textPreview}${textPreview.length >= 100 ? '...' : ''}"
- Font size: ${fontSize}
- File: clarity-demo/presentation.html

I selected this element using Dev Mode on the Clarity presentation. Help me improve or modify it based on my request.

---
`;
        return { context, devId };
    }

    function handleDevClick(e) {
        if (!devModeEnabled || !highlightedEl) return;
        if (e.target.id === 'dev-mode-toggle') return;

        const { context, devId } = buildElementContext(highlightedEl);

        navigator.clipboard.writeText(context).then(() => {
            showToast(`\u2713 Copied with context: ${devId}`);
        });

        e.preventDefault();
        e.stopPropagation();
    }

    function handleKeydown(e) {
        if (e.key === 'd' && !e.metaKey && !e.ctrlKey && !e.altKey) {
            toggleDevMode();
            e.preventDefault();
            return;
        }

        if (!devModeEnabled) return;

        if (e.key === 'Escape') {
            toggleDevMode();
            e.preventDefault();
            return;
        }

        if (e.key === 'c' && highlightedEl && !e.metaKey && !e.ctrlKey) {
            const { context, devId } = buildElementContext(highlightedEl);
            navigator.clipboard.writeText(context).then(() => {
                showToast(`\u2713 Copied with context: ${devId}`);
            });
            e.preventDefault();
            return;
        }

        if (e.key === '?' || (e.shiftKey && e.key === '/')) {
            showToast('Shortcuts: D=toggle, ESC=exit, C=copy, ?=help');
            e.preventDefault();
            return;
        }
    }

    // Add toast animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes toastIn {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Initialize
    function init() {
        assignDevIds();
        createToggle();
        createOverlay();
        createTooltip();

        document.addEventListener('mousemove', handleDevMouseMove);
        document.addEventListener('click', handleDevClick, true);
        document.addEventListener('keydown', handleKeydown);

        if (new URLSearchParams(window.location.search).get('dev') === '1') {
            setTimeout(toggleDevMode, 500);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
