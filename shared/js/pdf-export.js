// PDF Export — Reusable slide-to-PDF capture module
// Usage:
//   new PdfExporter({
//       slideSelector: '.slide',
//       filename: 'My-Presentation.pdf',
//       uiSelectors: ['#my-custom-element']  // optional extra elements to hide
//   });
//
// Requires html2canvas and jsPDF loaded via CDN before this script.

class PdfExporter {
    constructor(opts) {
        this.slideSelector = opts.slideSelector || '.slide';
        this.filename = opts.filename || 'presentation.pdf';

        // UI elements to hide during capture (defaults + custom)
        this.uiSelectors = [
            '#slide-indicator',
            '#nav-hint',
            '.version-badge',
            '#narration-toggle',
            '#start-presentation-btn',
            '#nav-menu',
            '#presentation-controls',
            '#presentation-progress',
            '#narration-panel',
            '#subtitle-bar',
            '#subtitles',
            '#autoplay-overlay',
            '#pdf-download-btn',
            '#pdf-progress-overlay'
        ].concat(opts.uiSelectors || []);

        this.isCapturing = false;
        this._injectUI();
    }

    _injectUI() {
        // Download button
        const btn = document.createElement('button');
        btn.id = 'pdf-download-btn';
        btn.title = 'Download as PDF';
        btn.innerHTML = `
            <svg viewBox="0 0 24 24" width="16" height="16">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            </svg>
            PDF`;
        btn.addEventListener('click', () => this.exportPdf());
        document.body.appendChild(btn);

        // Progress overlay
        const overlay = document.createElement('div');
        overlay.id = 'pdf-progress-overlay';
        overlay.innerHTML = `
            <div id="pdf-progress-container">
                <h3>Generating PDF</h3>
                <p id="pdf-progress-status">Preparing slides...</p>
                <div id="pdf-progress-bar-track">
                    <div id="pdf-progress-bar-fill"></div>
                </div>
            </div>`;
        document.body.appendChild(overlay);
    }

    async exportPdf() {
        if (this.isCapturing) return;
        this.isCapturing = true;

        const overlay = document.getElementById('pdf-progress-overlay');
        const status = document.getElementById('pdf-progress-status');
        const progressBar = document.getElementById('pdf-progress-bar-fill');
        const slides = document.querySelectorAll(this.slideSelector);
        const totalSlides = slides.length;

        // Show progress overlay
        overlay.classList.add('visible');

        // Hide UI chrome
        const hidden = this._hideUI();

        // Save scroll position
        const savedScroll = window.scrollY || document.documentElement.scrollTop;

        try {
            // Capture first slide to determine dimensions
            const firstSlide = slides[0];
            const slideWidth = firstSlide.offsetWidth;
            const slideHeight = firstSlide.offsetHeight;
            const aspectRatio = slideWidth / slideHeight;

            // PDF page size in mm (landscape, matching slide aspect ratio)
            const pdfWidthMm = 297; // A4 landscape width
            const pdfHeightMm = pdfWidthMm / aspectRatio;

            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: [pdfWidthMm, pdfHeightMm]
            });

            for (let i = 0; i < totalSlides; i++) {
                status.textContent = `Capturing slide ${i + 1} of ${totalSlides}...`;
                progressBar.style.width = ((i + 1) / totalSlides * 100) + '%';

                // Scroll slide into view (needed for html2canvas to capture correctly)
                slides[i].scrollIntoView({ behavior: 'instant' });
                // Give the browser a frame to repaint
                await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

                const canvas = await html2canvas(slides[i], {
                    scale: 2,
                    useCORS: true,
                    backgroundColor: null,
                    logging: false,
                    windowWidth: slideWidth,
                    windowHeight: slideHeight
                });

                const imgData = canvas.toDataURL('image/jpeg', 0.92);

                if (i > 0) {
                    pdf.addPage([pdfWidthMm, pdfHeightMm], 'landscape');
                }

                pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidthMm, pdfHeightMm);
            }

            status.textContent = 'Saving PDF...';
            pdf.save(this.filename);

        } catch (err) {
            console.error('PDF export failed:', err);
            status.textContent = 'Export failed. Check console for details.';
            await new Promise(r => setTimeout(r, 2000));
        }

        // Restore scroll position
        window.scrollTo(0, savedScroll);

        // Restore UI chrome
        this._restoreUI(hidden);

        // Hide progress overlay
        overlay.classList.remove('visible');
        this.isCapturing = false;
    }

    _hideUI() {
        const hidden = [];
        this.uiSelectors.forEach(sel => {
            document.querySelectorAll(sel).forEach(el => {
                if (el.style.display !== 'none' && getComputedStyle(el).display !== 'none') {
                    hidden.push({ el, prev: el.style.display });
                    el.style.display = 'none';
                }
            });
        });
        return hidden;
    }

    _restoreUI(hidden) {
        hidden.forEach(({ el, prev }) => {
            el.style.display = prev;
        });
    }
}
