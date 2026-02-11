# CLAUDE.md - Clarity Sales Asset Hub

## Project Overview

A multi-presentation sales asset hub for Clarity's hiring fraud and deepfake detection demos. All presentations share a common design system, logos, product mockups, and reusable JS (narration engine, navigation). New presentations are built with Claude Code using shared components.

- **Live:** https://michaelmatiasorg.github.io/clarity-demo/
- **Repo:** https://github.com/MichaelMatiasOrg/clarity-demo

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — no bundler, no framework, no package.json
- **Font:** Manrope via Google Fonts CDN
- **Hosting:** GitHub Pages (CNAME configured)
- **Audio:** Pre-generated MP3 files via ElevenLabs TTS API

## Running Locally

Open any presentation's `index.html` in a browser. No build step required.

- `index.html` — Hub landing page (links to all presentations)
- `presentation.html` — Redirect to `presentations/masterclass/` (preserves old URL)
- Append `?dev=1` for dev mode (press **D** on landing page to toggle)

## Git Workflow

- **Always use feature branches** — never commit directly to `main`
- Create a branch, do the work, then pull latest `main` and merge locally before pushing
- A pre-push hook runs Playwright tests before allowing push

## File Structure

```
clarity-demo/
├── index.html                              # Hub landing page
├── presentation.html                       # Redirect → presentations/masterclass/
├── CNAME, favicon.svg, og-preview.jpg, VERSION
├── CLAUDE.md                               # This file
│
├── shared/                                 # REUSABLE ACROSS ALL PRESENTATIONS
│   ├── css/
│   │   ├── design-system.css               # Variables, typography, layout, components
│   │   ├── animations.css                  # Base keyframes: orbit, pulse, fade-in-up, dash-flow
│   │   └── narration-engine.css            # Narration UI (themeable via CSS custom properties)
│   ├── js/
│   │   ├── navigation.js                   # Slide nav, scroll tracking
│   │   ├── narration-engine.js             # NarrationEngine class
│   │   └── dev-mode.js                     # Element inspector
│   ├── logos/                              # 25 integration logos (SVG/PNG)
│   ├── brand/                              # Clarity logo SVGs + PNGs
│   ├── screenshots/                        # Product UI PNGs
│   ├── mockups/                            # 4 product UI HTML mockups
│   └── CATALOG.md                          # Full inventory of shared assets
│
├── presentations/
│   ├── masterclass/                        # "Masterclass: Hiring Identity Fraud"
│   │   ├── index.html                      # The presentation (35 slides)
│   │   ├── masterclass.css                 # Slide-specific animations
│   │   ├── narration-data.js               # Narration text/timing/audioIndex mapping
│   │   ├── audio/                          # 34 mp3s + 3 voice quiz opus files
│   │   ├── assets/
│   │   │   ├── marcus-chen/                # 6 AI headshots
│   │   │   └── vero/                       # 4 target company screenshots
│   │   └── mockups/                        # 7 story-specific HTML mockups
│   │
│   └── _template/                          # Starter kit for new presentations
│       ├── index.html                      # Boilerplate with shared imports
│       ├── presentation.css                # Empty with section headers
│       ├── narration-data.js               # Skeleton NarrationData structure
│       └── README.md                       # How to create a new presentation
│
├── scripts/                                # Audio generation scripts
├── dev/                                    # Dev preview tools
└── docs/                                   # Brand docs, narration drafts
```

## Path Reference for Presentations

From any `presentations/*/index.html`, shared assets are always at `../../shared/`:
```html
<link rel="stylesheet" href="../../shared/css/design-system.css">
<link rel="stylesheet" href="../../shared/css/animations.css">
<link rel="stylesheet" href="masterclass.css">
<img src="../../shared/logos/greenhouse.svg">
<img src="../../shared/screenshots/dashboard.png">
<script src="../../shared/js/navigation.js"></script>
```

## Presentation Navigation

- **Arrow keys** (left/right or up/down) navigate between slides
- **Space / PageDown** = next slide, **PageUp** = previous
- **Home / End** = first / last slide
- Slides snap to full screen, scrollbar is hidden

## Architecture Notes

- All slides live as `<section class="slide">` elements with `data-slide-id` attributes
- **Design system CSS** (`shared/css/design-system.css`) — variables, layout, components, typography
- **Base animations** (`shared/css/animations.css`) — orbit, pulse, fade-in-up keyframes
- **Narration CSS** (`shared/css/narration-engine.css`) — autoplay controls, subtitles, speaker notes
- **navigation.js** handles keyboard nav, scroll tracking, exposes `window.restartAnimations()` and `window.goToSlide()`
- **narration-engine.js** provides `NarrationEngine` class (autoplay, subtitles, speed control, speaker notes)
- **dev-mode.js** handles the element inspector (D key toggle)
- Each presentation has its own `narration-data.js` as the source of truth for narration text

## Current Focus: Identity Risk (NOT Skills)

**Key pivot (2026-02-10):** Removed "AI Cheating Detection" from the storyline.
- CISOs care about **identity risks**, not skills risks
- Focus: "Is this person who they claim to be?"
- NOT: "Did they cheat on an assessment?"

## Masterclass Slide Structure (35 slides, 5 acts)

1. **Act 1 — The Attack Story (slides 0-11):** Hook with Marcus Chen synthetic identity
2. **Act 2 — The Scale (slides 12-17):** Statistics on hiring fraud epidemic
3. **Act 3 — The Solution (slides 18-25):** Clarity's 3 detection moments
4. **Act 4 — Two Pillars (slides 26-29):** Workflow integration + security integrations
5. **Act 5 — Lifecycle & Close (slides 30-33):** Employee identity lifecycle, CTA

## Design Rules

These are firm preferences — follow them when modifying slides:

- **One-line titles** — no wrapping; use `white-space: nowrap` if needed
- **Show comparisons** — strikethrough old values next to new (e.g., ~~$240K~~ → $4.99M)
- **Cite sources** — always add citations for statistics (SHRM, IBM, Ponemon)
- **Real logos only** — use SVGs from `shared/logos/`, never text placeholders or invented SVGs
- **No emojis in slides** — use geometric shapes, color indicators, or nothing
- **Subtle animations** — rotating rings, pulsing elements, flowing arrows; nothing flashy

## Visual Style

- **Background:** `#F0F4F8` (light blue-gray)
- **Text primary:** `#0a1628` (navy)
- **Accent:** `#61F393` (Clarity green)
- **Text secondary:** `#64748B` (slate)
- **Danger:** `#EF4444` (red)
- **Font:** Manrope, weights 400-800
- **Aesthetic:** Enterprise-grade, professional, not playful

## Terminology

- Use **"Applicant Screening"** (not "Background Verification")
- Use **"Employee Identity Lifecycle"** for the verification ecosystem

## Narration System

### Architecture
- **`presentations/*/narration-data.js`** — Per-presentation: narration entries, voice config, animation selectors
- **`shared/js/narration-engine.js`** — Reusable `NarrationEngine` class: autoplay, subtitles, speed control, speaker notes
- **`shared/css/narration-engine.css`** — Engine UI styles with CSS custom properties for theming

### Audio
- **Voice:** George (ElevenLabs voice ID: `JBFqnCBsd6RMkjVDRZzb`)
- **Model:** eleven_multilingual_v2
- **Generation:** `scripts/generate_audio.sh` reads from narration-data.js via Node.js

### Integration Pattern
```html
<script src="../../shared/js/navigation.js"></script>
<link rel="stylesheet" href="../../shared/css/narration-engine.css">
<script src="narration-data.js"></script>
<script src="../../shared/js/narration-engine.js"></script>
<script>
new NarrationEngine({ ... });
</script>
<script src="../../shared/js/dev-mode.js"></script>
```

## Creating a New Presentation

1. Copy `presentations/_template/` to `presentations/my-new-deck/`
2. Edit `index.html` with your slides
3. Add presentation-specific CSS in `presentation.css`
4. Add narration text in `narration-data.js`
5. Link from the hub page (`index.html`)

See `presentations/_template/README.md` for full instructions.

## Logos

**Working SVG icons** (in `shared/logos/`): Greenhouse, Okta, Zoom, Slack, Splunk, CrowdStrike, Elastic, Microsoft Teams, Azure AD, Ashby, Checkr, HireRight, Persona, Plaid, Onfido, Jira, Stripe, ICIMS

**Text wordmarks** (need proper SVGs): Lever, Workday, ServiceNow

## Open Items

- [ ] Get proper SVG logos for Lever, Workday, ServiceNow
- [ ] Add actual product screenshots when available
- [ ] Consider adding more animated slides
