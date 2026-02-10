// PDF Export — Reusable print-to-PDF module
// Usage:
//   new PdfExporter({
//       slideSelector: '.slide',
//       filename: 'My-Presentation.pdf'
//   });
//
// Uses window.print() with @media print CSS for pixel-perfect output.
// No external dependencies required.

class PdfExporter {
    constructor(opts) {
        this.slideSelector = opts.slideSelector || '.slide';
        this.filename = opts.filename || 'presentation.pdf';
        this._injectUI();
    }

    _injectUI() {
        const btn = document.createElement('button');
        btn.id = 'pdf-download-btn';
        btn.title = 'Download as PDF';
        btn.innerHTML = `
            <svg viewBox="0 0 24 24" width="16" height="16">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            </svg>
            PDF`;
        btn.addEventListener('click', () => this.exportPdf());
        const toolbar = document.getElementById('bottom-toolbar');
        if (toolbar) toolbar.appendChild(btn);
        else document.body.appendChild(btn);
    }

    exportPdf() {
        // Set document title so the browser defaults the PDF filename
        const originalTitle = document.title;
        document.title = this.filename.replace(/\.pdf$/i, '');

        // Force all slides into their final animation state by adding
        // trigger classes that are normally set by IntersectionObserver
        const slides = document.querySelectorAll(this.slideSelector);
        slides.forEach(s => s.classList.add('in-view'));
        const cards = document.querySelectorAll('.stage-card');
        cards.forEach(c => c.classList.add('revealed'));

        const restore = () => {
            document.title = originalTitle;
            slides.forEach(s => s.classList.remove('in-view'));
            cards.forEach(c => c.classList.remove('revealed'));
        };
        window.addEventListener('afterprint', restore, { once: true });

        window.print();
    }
}
