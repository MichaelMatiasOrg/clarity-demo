# Creating a New Presentation

## Quick Start

1. Copy this `_template/` directory to a new folder:
   ```
   cp -r presentations/_template presentations/my-new-deck
   ```

2. Edit `index.html` — replace placeholder text with your slides

3. Edit `presentation.css` — add slide-specific animations

4. Edit `narration-data.js` — add narration text for each slide

5. Add the new presentation to the hub page (`/index.html`)
   - Include a `<div class="card-author">by <strong>@yourusername</strong></div>` line after `.card-meta` in your hub card

## Shared Resources

All shared assets are at `../../shared/` relative to your presentation:

- **CSS**: `../../shared/css/design-system.css` (variables, components, layout)
- **CSS**: `../../shared/css/animations.css` (base keyframes)
- **CSS**: `../../shared/css/narration-engine.css` (narration UI)
- **JS**: `../../shared/js/navigation.js` (keyboard nav)
- **JS**: `../../shared/js/narration-engine.js` (autoplay, subtitles)
- **JS**: `../../shared/js/dev-mode.js` (element inspector)
- **Logos**: `../../shared/logos/` (25 integration partner logos)
- **Brand**: `../../shared/brand/` (Clarity logos)
- **Screenshots**: `../../shared/screenshots/` (product UI)
- **Mockups**: `../../shared/mockups/` (interactive product demos)

See `../../shared/CATALOG.md` for the full inventory.

## Directory Structure

```
my-new-deck/
├── index.html          # The presentation HTML
├── presentation.css    # Slide-specific styles
├── narration-data.js   # Narration text and timing
├── audio/              # Generated MP3 narration files
└── assets/             # Presentation-specific images
```

## Adding Narration

1. Write narration text in `narration-data.js`
2. Generate audio: `scripts/generate_audio.sh`
3. Uncomment the narration engine block in `index.html`

## Design System

See the shared design system for available CSS classes:

- `.slide` — full-screen slide container
- `.card`, `.card-grid` — card components
- `.badge`, `.badge-danger` — pill badges
- `.two-col` — two-column layout
- `.emphasis-box` — dark callout box
- `.profile-card` — LinkedIn-style profile
- `.accent`, `.danger` — text color utilities

All CSS variables are defined in `design-system.css` (e.g., `--accent`, `--text-primary`).
