# Shared Assets Catalog

Everything in `/shared/` is reusable across all presentations in this hub.

## CSS

| File | Purpose |
|------|---------|
| `css/design-system.css` | Variables, reset, typography, layout, components (cards, badges, profiles, etc.) |
| `css/animations.css` | Base keyframes: orbit, pulse, fade-in-up, dash-flow, badge-shine |
| `css/narration-engine.css` | Narration UI styles (autoplay controls, subtitles, speaker notes) — themeable via CSS custom properties |

## JavaScript

| File | Purpose |
|------|---------|
| `js/navigation.js` | Keyboard nav (arrows, space, pgup/pgdn, home/end), scroll tracking, slide indicator |
| `js/narration-engine.js` | `NarrationEngine` class — autoplay, subtitles, speed control, speaker notes panel |
| `js/dev-mode.js` | Element inspector overlay (toggle with D key) |

## Logos (`logos/`)

25 integration partner logos (SVG/PNG):

Greenhouse, Lever, Ashby, iCIMS, Workday, Okta, ServiceNow, Slack, Zoom, Splunk, CrowdStrike, Elastic, Microsoft Teams, Azure AD, Checkr, HireRight, Persona, Onfido, Plaid, Jira, Stripe, Sentinel

## Brand (`brand/`)

| File | Description |
|------|-------------|
| `clarity-logo.svg` | Dark logo (for light backgrounds) |
| `clarity-logo-white.svg` | White logo (for dark backgrounds) |
| `clarity-logo-website.svg` | Website variant |
| `logo-comparison.png` | Logo reference |
| `our-saved-logo.png` | Saved logo asset |

## Screenshots (`screenshots/`)

Product UI screenshots:

| File | Shows |
|------|-------|
| `dashboard.png` | Main dashboard view |
| `pre-interview.png` | Pre-interview screening UI |
| `deepfake.png` | Deepfake detection alert |
| `continuous.png` | Continuous verification view |

## Mockups (`mockups/`)

Interactive HTML product UI mockups:

| File | Description |
|------|-------------|
| `pre-interview.html` | Pre-interview screening mockup |
| `deepfake-alert.html` | Deepfake detection alert mockup |
| `employee-dashboard.html` | Employee dashboard mockup |
| `continuous-verify.html` | Continuous verification mockup |

## Usage from a Presentation

From any `presentations/*/index.html`, shared assets are at `../../shared/`:

```html
<link rel="stylesheet" href="../../shared/css/design-system.css">
<link rel="stylesheet" href="../../shared/css/animations.css">
<link rel="stylesheet" href="../../shared/css/narration-engine.css">
<link rel="stylesheet" href="presentation.css">  <!-- local overrides -->

<img src="../../shared/logos/greenhouse.svg">
<img src="../../shared/screenshots/dashboard.png">
<img src="../../shared/brand/clarity-logo.svg">

<script src="../../shared/js/navigation.js"></script>
<script src="narration-data.js"></script>  <!-- local to presentation -->
<script src="../../shared/js/narration-engine.js"></script>
<script src="../../shared/js/dev-mode.js"></script>
```
