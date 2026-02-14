# Clarity Presentation Builder

You are building presentations for **Clarity** — an employee identity security company that protects organizations from hiring fraud, synthetic identities, and deepfake attacks across the entire employee lifecycle.

## Before You Start

Read these files in order. They are your source of truth:

1. **`docs/BRAND.md`** — Brand guidelines. Colors, fonts, logo usage, design principles. These are LAW. You cannot change them.
2. **`docs/COMPONENTS.md`** — Slide pattern catalog. Browse the available patterns and pick the best ones for the user's content. You don't need to use all of them — just the ones that fit.
3. **`docs/ASSETS.md`** — Complete inventory of every image, logo, screenshot, and badge available. Use real assets only. Never invent logos or fake screenshots.

## Intake Questions

Before building anything, ask the user these questions (if they haven't already answered them):

1. **What's this deck for?** Classify it:
   - `customer-deck` — Tailored for a specific customer/prospect (ask which company)
   - `sales-deck` — Generic sales deck for a segment (e.g. CISOs, HR leaders)
   - `presentation` — Conference talk, webinar, or event presentation
   - `partner-deck` — For a specific partner or integration
   - `internal` — Team training, board update, internal comms

2. **Who's the audience?** (e.g. "CISOs at mid-market companies", "HR leaders at Greenhouse customers")

3. **What's the one thing they should walk away thinking?** (the core message)

4. **Any specific assets, stats, or customer stories to include?**

Store the answers in a metadata comment at the top of `index.html`:
```html
<!--
  @deck-type: customer-deck
  @customer: Paysure
  @audience: CISO and VP Engineering
  @author: Jacob Hecht
  @created: 2026-02-14
  @core-message: Clarity integrates with Greenhouse to catch hiring fraud before day one
-->
```

## Your Job

The user will describe what they need in plain language — the audience, the goal, the key messages. **You** figure out:
- How many slides
- Which slide patterns (from COMPONENTS.md) fit best
- Which assets (from ASSETS.md) to use
- The narrative arc — how the story builds from slide to slide
- The exact content for each slide

Think like a presentation designer, not a developer. Every slide should earn the next click.

## Creating a Presentation

### Git Workflow
**Never push directly to `main`.** Always:
1. Create a branch: `git checkout -b presentations/your-deck-name`
2. Build the presentation
3. Commit and push the branch
4. Open a pull request to `main`

Only Michael (repo admin) merges PRs into main.

### File Structure
```
presentations/your-deck-name/
├── index.html          # Single HTML file (all CSS/JS embedded)
└── assets/             # Any deck-specific images (optional)
```

### Technical Requirements
- **Single HTML file** with embedded `<style>` and `<script>`
- Import Manrope from Google Fonts
- Import shared CSS: `../../shared/css/design-system.css`
- Import shared JS: `../../shared/js/navigation.js` (keyboard nav, swipe, slide counter)
- Optionally import: `../../shared/js/dev-mode.js` (element inspector)
- **Arrow keys** navigate between slides
- **Swipe** works on mobile
- **Slide counter** shows "1 / N" at bottom-right
- **Hash URLs** (`#slide-3`) for direct linking
- All slides use `overflow-y: auto` (content can scroll if it overflows)

### CSS Variables (from design-system.css)
```css
--bg-primary: #F0F4F8;    /* Page background */
--bg-card: #FFFFFF;        /* Card background */
--text-primary: #0a1628;   /* Navy text */
--text-secondary: #64748B; /* Muted text */
--accent: #61F393;         /* Clarity green */
--accent-muted: #E8FFF0;   /* Light green tint */
--danger: #EF4444;         /* Red for threats */
--danger-muted: #FEE2E2;   /* Light red tint */
--border: #E2E8F0;         /* Subtle borders */
```

### Animation System
- `.anim` = element animates in when parent slide becomes `.active`
- `.d1` through `.d7` = staggered delay (100ms increments)
- Animation: fade in + translateY(20px → 0), 0.6s ease-out

### Responsive Design
- Below 768px: collapse grids, reduce font sizes ~15-20%, reduce padding
- `.mobile-hide` = hidden on mobile
- `.mobile-only` = hidden on desktop, visible on mobile
- **Mobile must feel designed, not squeezed.** Rethink layouts for vertical screens.

### Navigation Bar
Every presentation has a dark navy nav bar at top:
```html
<nav style="position: fixed; top: 0; left: 0; right: 0; height: 56px; background: #0a1628; display: flex; align-items: center; padding: 0 24px; z-index: 1000;">
    <a href="../../index.html" style="display: flex; align-items: center; text-decoration: none;">
        <img src="../../shared/brand/clarity-logo-white.svg" alt="Clarity" style="height: 28px;">
    </a>
</nav>
```

## Brand Rules (Non-Negotiable)

1. **NO emojis.** Ever. Not in slides, not in labels, nowhere.
2. **NO fake logos.** Use `<img src>` with real files from `shared/logos/`. If a logo doesn't exist, use a styled text placeholder: `<!-- ASSET NEEDED: CompanyName logo -->` and tell the user.
3. **NO inline SVGs for company logos.** Inline SVGs get corrupted during edits. Use `<img>` tags. Exception: simple decorative shapes (arrows, dividers, the Clarity star background).
4. **Light theme by default.** Background is #F0F4F8, not white, not dark. Dark slides only for closing/section breaks.
5. **Font is Manrope.** Not Inter, not system fonts.
6. **Green (#61F393) is used sparingly.** Accent, CTAs, key highlights. Not everywhere.
7. **Visual hierarchy matters.** Big numbers are BIG. Labels are small. Secondary text is gray. The eye should always know where to look.
8. **Whitespace is a feature.** Don't cram slides. Let content breathe.
9. **Every slide should feel visually distinct from the previous one.** Vary layouts.
10. **Cite sources for statistics.** No uncited numbers.

## Asset Paths

All assets are referenced relative to the presentation directory:
- Brand: `../../shared/brand/`
- Screenshots: `../../shared/screenshots/`
- Logos: `../../shared/logos/`
- People: `../../shared/people/`
- Compliance: `../../shared/compliance/`

Check `docs/ASSETS.md` for the full list of available files with descriptions.

## What Clarity Does (for context)

**Product:** End-to-end identity verification across the employee lifecycle:
- **Pre-hire:** Resume/CV fraud analysis
- **Interview:** Real-time deepfake and voice clone detection
- **Onboarding:** Identity document verification (via Onfido partnership)
- **Post-hire:** MFA reset verification, help desk identity checks, continuous monitoring

**Key integrations:** Okta, Workday, Greenhouse, Ashby, ServiceNow, Splunk, Slack, Zoom, Teams

**Detection technology:** 40+ signals per candidate converged into a single risk score. Includes video analysis, voice biometrics, document forensics, biometric matching, network intelligence.

**Proof points:**
- Fortune 500 insurance company POC: Caught 6 of 9 seeded bad actors from resume alone
- Top 3 globally for deepfake detection (independent 3rd party testing)
- Strategic IDV partnership with Onfido
- Compliance: SOC 2 Type II, GDPR, ISO 27001, CCPA, EU AI Act ready

**Positioning:** NOT a background check company. NOT FCRA-regulated. Clarity is an identity security layer that flags fraud — it doesn't make hire/no-hire recommendations.

**Audiences:** CISOs, HR leaders, security teams, compliance officers

**Competitors/landscape:** Moveris, Honorlock (interview fraud), Persona/Veriff/Socure (IDV), HireRight/Checkr/Sterling (background checks)

## When You Can't Do Something

If you need an asset that doesn't exist (logo, screenshot, photo):
1. Don't invent it
2. Add a visible placeholder: `<div style="background: #E2E8F0; padding: 40px; text-align: center; border-radius: 12px; color: #64748B;">IMAGE NEEDED: [description]</div>`
3. Tell the user what's missing and who to ask (Michael or the design team)

## Quality Checklist

Before delivering, verify:
- [ ] Every `<img>` src path resolves to a real file
- [ ] No emojis anywhere
- [ ] Nav bar links to `../../index.html`
- [ ] Slide counter shows correct total
- [ ] Mobile looks good (not just "works")
- [ ] Each slide has a clear visual hierarchy
- [ ] Statistics have sources cited
- [ ] Animations use `.anim` + delay classes
- [ ] All slides scroll if content overflows
- [ ] Dark slides use `.slide-dark` class

## Existing Presentations (for reference)

| Deck | Path | Slides | Audience |
|------|------|--------|----------|
| CISO Shareable v2 | `presentations/ciso-shareable-v2/` | 13 | CISOs |
| CISO Shareable v1 | `presentations/ciso-shareable/` | 12 | CISOs |
| GuidePoint Masterclass | `presentations/masterclass/` | 36 | CISO event |
| Deel Onboarding | `presentations/deel-onboarding/` | 28 | Deel partnership |

Browse these for inspiration on layout patterns, animation techniques, and content structure.
