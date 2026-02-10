# CLAUDE.md - Clarity CISO Demo Project

## Project Overview

A static HTML5 presentation demoing Clarity's hiring fraud and deepfake detection for CISO audiences. No build tools, no frameworks — pure HTML/CSS/JS served via GitHub Pages.

- **Live:** https://michaelmatiasorg.github.io/clarity-demo/presentation.html
- **Repo:** https://github.com/MichaelMatiasOrg/clarity-demo

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — no bundler, no framework, no package.json
- **Font:** Manrope via Google Fonts CDN
- **Hosting:** GitHub Pages (CNAME configured)
- **Audio:** Pre-generated MP3 files via ElevenLabs TTS API

## Running Locally

Open `presentation.html` in a browser. No build step required.

- `index.html` — Landing page linking to the presentation and brand guidelines
- `presentation.html` — Main slide deck (the primary deliverable)
- `brand.html` — Visual brand guidelines (colors, logos, typography, rules)
- Append `?dev=1` for dev mode (press **D** on landing page to toggle)

## File Structure

```
index.html                          # Landing page
presentation.html                   # Slide markup (~2100 lines) — primary deliverable
brand.html                          # Visual brand guidelines page
favicon.svg                         # Browser favicon
CNAME                               # GitHub Pages custom domain
CLAUDE.md                           # This file

css/
  presentation.css                  # Base styles — variables, layout, components, animations
  narration-engine.css              # Narration UI styles with CSS custom properties

js/
  navigation.js                     # Keyboard nav, scroll tracking, slide indicator
  dev-mode.js                       # Element inspector (D key toggle)
  narration-engine.js               # Reusable NarrationEngine class (autoplay, subtitles, speaker notes)
  clarity-narration-data.js         # Single source of truth: 34 narration entries + voice config

assets/
  marcus-chen/                      # 6 PNGs — synthetic identity headshots & photos
  vero/                             # 4 screenshots — fictional target company
  screenshots/                      # 4 product screenshots (dashboard, pre-interview, etc.)
  branding/                         # 3 logo SVGs + 2 PNGs

audio/
  narration/                        # slide-0.mp3 through slide-33.mp3 (ElevenLabs TTS)
  narration-backup/                 # Backup narration files
  voice-{a,b,c}.opus                # Voice sample files

logos/                              # 25 SVG/PNG logos for integration slides
mockups/                            # 11 HTML mockup pages (product UI, identity docs)
slides/                             # architecture-slide.html
dev/                                # 5 testing/preview pages
scripts/                            # generate_audio.sh, generate-narration.sh
docs/                               # 7 markdown docs (branding, narration, incidents)
```

## Presentation Navigation

- **Arrow keys** (left/right or up/down) navigate between slides
- **Space / PageDown** = next slide, **PageUp** = previous
- **Home / End** = first / last slide
- Slides snap to full screen, scrollbar is hidden

## Architecture Notes

- All slides live in `presentation.html` as `<section class="slide">` elements with `data-slide-id` attributes
- Base CSS is in `css/presentation.css` — variables, layout, components, slide-specific animations
- Narration CSS is in `css/narration-engine.css` — autoplay controls, subtitles, speaker notes panel (themed via CSS custom properties)
- `js/navigation.js` handles keyboard nav, scroll tracking, and exposes `window.restartAnimations()` and `window.goToSlide()`
- `js/narration-engine.js` provides a reusable `NarrationEngine` class (autoplay, subtitles, speed control, speaker notes). Exposes `window.isPlaying` for navigation.js
- `js/clarity-narration-data.js` is the single source of truth for narration text, voice config, and animation selectors
- `js/dev-mode.js` handles the element inspector (D key toggle)
- Two small inline scripts remain in `presentation.html`: voice quiz (`playVoice`/`revealAnswer`) and insider threat observer

## Current Focus: Identity Risk (NOT Skills)

**Key pivot (2026-02-10):** Removed "AI Cheating Detection" from the storyline.
- CISOs care about **identity risks**, not skills risks
- Focus: "Is this person who they claim to be?"
- NOT: "Did they cheat on an assessment?"

## Slide Structure (33 slides, 5 acts)

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
- **Real logos only** — use SVGs from `/logos/`, never text placeholders or invented SVGs
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

## Narration System (Extracted & Reusable)

### Architecture
- **`js/clarity-narration-data.js`** — Single source of truth: 34 narration entries, voice config, animation selectors
- **`js/narration-engine.js`** — Reusable `NarrationEngine` class: autoplay, subtitles, speed control, speaker notes panel
- **`css/narration-engine.css`** — Engine UI styles with CSS custom properties for theming

### Audio
- **Voice:** George (ElevenLabs voice ID: `JBFqnCBsd6RMkjVDRZzb`)
- **Files:** `audio/narration/slide-{0-33}.mp3` (34 files)
- **Model:** eleven_multilingual_v2
- **Generation:** `scripts/generate_audio.sh` reads from `js/clarity-narration-data.js` via Node.js

### presentation.html Integration
```html
<script src="js/navigation.js"></script>
<link rel="stylesheet" href="css/narration-engine.css">
<script src="js/clarity-narration-data.js"></script>
<script src="js/narration-engine.js"></script>
<script>
new NarrationEngine({ ... });
</script>
<script src="js/dev-mode.js"></script>
```

## Logos

**Working SVG icons** (in `/logos/`): Greenhouse, Okta, Zoom, Slack, Splunk, CrowdStrike, Elastic, Microsoft Teams, Azure AD, Ashby, Checkr, HireRight, Persona, Plaid, Onfido, Jira, Stripe, ICIMS

**Text wordmarks** (need proper SVGs): Lever, Workday, ServiceNow

## Open Items

- [ ] Get proper SVG logos for Lever, Workday, ServiceNow
- [ ] Add actual product screenshots when available
- [ ] Consider adding more animated slides
