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

- `index.html` — Landing page linking to the presentation
- `presentation.html` — Main slide deck (the primary deliverable)
- Append `?dev=1` for dev mode (press **D** on landing page to toggle)

## File Structure

```
presentation.html          # Slide markup only (~2100 lines)
css/presentation.css       # All styles — variables, layout, components, animations
js/navigation.js           # Keyboard nav, scroll tracking, slide indicator
js/autoplay.js             # Narration data, playback engine, subtitles, speed control
js/narration-panel.js      # Speaker notes panel (N key toggle)
js/dev-mode.js             # Element inspector (D key toggle)
index.html                 # Landing page
narration.js               # Narration text array (used by audio generation scripts, NOT runtime)
audio/narration/           # slide-0.mp3 through slide-33.mp3 (ElevenLabs TTS)
logos/                     # SVG/PNG logos for integration slides
marcus-chen-*.png/html     # Synthetic identity demo assets (headshots, resume, LinkedIn mockup)
mockup-*.html              # Product UI mockups (pre-interview, deepfake alert, dashboard)
vero-*.html                # Fictional target company pages
generate_audio.sh          # ElevenLabs audio generation script
generate-narration.sh      # OpenAI TTS fallback script
BRAND.md                   # Visual design guidelines
CLARITY-BRANDING.md        # Logo, color, and typography specs
NARRATION.md               # Slide-to-narration mapping
```

## Presentation Navigation

- **Arrow keys** (left/right or up/down) navigate between slides
- **Space / PageDown** = next slide, **PageUp** = previous
- **Home / End** = first / last slide
- Slides snap to full screen, scrollbar is hidden

## Architecture Notes

- All slides live in `presentation.html` as `<section class="slide">` elements with `data-slide-id` attributes
- CSS is in `css/presentation.css` — organized by section (variables, layout, components, slide-specific animations, autoplay controls)
- JS is split into 4 files loaded in order: `navigation.js` → `autoplay.js` → `narration-panel.js` → `dev-mode.js`
- `navigation.js` exposes `window.restartAnimations()` and `window.goToSlide()` for autoplay to use
- `autoplay.js` contains the authoritative `narrationScript` array (id-based slide matching) and exposes `isPlaying` globally
- The root-level `narration.js` is only used by `generate_audio.sh` / `generate-narration.sh` for audio generation — it is NOT used at runtime
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

## Narration / Audio

- **Voice:** Chad (ElevenLabs voice ID: `WQcQveC0hbQNvI69FWyU`)
- **Model:** eleven_multilingual_v2
- **Files:** `audio/narration/slide-{0-33}.mp3`
- **Script source:** `narration.js` — array of `{ slide, text, duration }` objects
- To regenerate: run `./generate_audio.sh` (requires ElevenLabs API key)

## Logos

**Working SVG icons** (in `/logos/`): Greenhouse, Okta, Zoom, Slack, Splunk, CrowdStrike, Elastic, Microsoft Teams, Azure AD, Ashby, Checkr, HireRight, Persona, Plaid, Onfido, Jira, Stripe, ICIMS

**Text wordmarks** (need proper SVGs): Lever, Workday, ServiceNow

## Open Items

- [ ] Get proper SVG logos for Lever, Workday, ServiceNow
- [ ] Add actual product screenshots when available
- [ ] Consider adding more animated slides
