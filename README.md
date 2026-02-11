# Clarity Sales Asset Hub

A multi-presentation sales asset hub for [Clarity](https://getclarity.ai)'s hiring fraud and deepfake detection platform. Interactive slide decks with narrated audio, product mockups, and live demos.

**Live site:** [claritylabs.ai](https://claritylabs.ai)

## What's Inside

| Path | Description |
|------|-------------|
| `/` | Hub landing page |
| `/presentations/masterclass/` | Masterclass: Hiring Identity Fraud (37 slides, narrated) |
| `/demos/cv-generator/` | Synthetic identity CV generator demo |
| `/demos/resume-analyzer/` | Resume risk analyzer demo |
| `/brand.html` | Brand assets reference |
| `/assets.html` | Asset inventory |

## Tech Stack

- **HTML / CSS / Vanilla JS** — no bundler, no framework
- **Font:** [Manrope](https://fonts.google.com/specimen/Manrope) via Google Fonts
- **Hosting:** GitHub Pages with custom domain
- **Audio:** ElevenLabs TTS (George voice, multilingual v2)
- **Tests:** Playwright

## Running Locally

No build step. Open any `index.html` in a browser, or use a local server:

```bash
npx serve .
```

Append `?dev=1` to any page URL for dev mode (element inspector, press **D** to toggle).

## Project Structure

```
clarity-demo/
├── index.html                     # Hub landing page
├── presentations/
│   ├── masterclass/               # Main presentation
│   │   ├── index.html             # 37 slides, 5 acts
│   │   ├── masterclass.css        # Slide-specific styles
│   │   ├── narration-data.js      # Narration text & timing
│   │   ├── audio/                 # MP3 narration files
│   │   ├── assets/                # Story-specific images
│   │   └── mockups/               # 8 interactive mockups
│   └── _template/                 # Starter kit for new presentations
├── demos/
│   ├── cv-generator/              # Synthetic identity demo
│   └── resume-analyzer/           # Resume risk analyzer
├── shared/                        # Reusable across all presentations
│   ├── css/                       # Design system, animations, narration UI
│   ├── js/                        # Navigation, narration engine, dev mode
│   ├── logos/                     # Integration partner logos (SVG/PNG)
│   ├── brand/                     # Clarity logo assets
│   ├── screenshots/               # Product UI screenshots
│   └── mockups/                   # 5 shared product mockups
└── tests/                         # Playwright test suite
    ├── smoke.spec.js              # Page loads, navigation, links
    ├── assets.spec.js             # Resource loading, mockup accessibility
    └── narration.spec.js          # Narration/slide integrity checks
```

## Tests

```bash
npm install          # First time only
npm test             # Run all 33 tests
npm run test:headed  # Run with browser visible
npm run test:report  # View last test report
```

Tests run automatically on every `git push` via a pre-push hook.

## Creating a New Presentation

1. Copy `presentations/_template/` to `presentations/your-deck/`
2. Edit `index.html` with your slides (`<section class="slide" data-slide-id="...">`)
3. Add slide-specific CSS in `presentation.css`
4. Add narration entries in `narration-data.js`
5. Link from the hub page (`index.html`)

Shared assets are at `../../shared/` from any presentation directory.

## Key Architecture

- Slides are `<section class="slide" data-slide-id="...">` elements
- **navigation.js** handles keyboard nav (arrows, space, page up/down, home/end) and scroll snapping
- **narration-engine.js** provides autoplay, subtitles, speed control, and speaker notes
- **design-system.css** defines CSS variables, typography, layout, and reusable components
- Each presentation has its own `narration-data.js` as the source of truth for narration text and timing
