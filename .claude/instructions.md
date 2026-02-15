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

## CRITICAL: Never Read Image Files

**You CANNOT process images.** Any attempt to read, view, or open an image file will cause an API error that PERMANENTLY BREAKS your conversation. There is no recovery — you will have to start over.

This applies to ALL image operations:
- **NEVER** use `Read`, `cat`, `head`, `file`, or any tool on .png, .jpg, .jpeg, .gif, .webp, .svg, .ico, .bmp files
- **NEVER** try to "check", "verify", "look at", "see", or "inspect" an image file
- **NEVER** try to check file size, dimensions, or validity of an image by reading it
- **NEVER** read an image "to see what it looks like" or "to confirm it's correct"
- **ALWAYS** trust file paths and use them directly in `<img src="...">`
- To check if an image file exists, use `ls` or `find` (NOT `read` or `cat`)
- To know what an image shows, check `docs/ASSETS.md` or ask the user

**If you read an image file, the session is destroyed.** This has happened multiple times. Do not test it.

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

## Design Constraints (Enforced)

These rules prevent cluttered, amateur-looking slides. Follow them strictly.

### Per-Slide Limits
- **Max 4 major elements per slide.** A "major element" is a heading, a card group, a quote, a stat row, or an image. If you need more, split into two slides.
- **Max 1 heading per slide.** One H2. Period. Use a section label above it if needed.
- **Max 4 cards in a row.** If you have 5+ items, use a 2-row layout or a different pattern.
- **Max 3 lines of body text per block.** If you're writing paragraphs, you're doing it wrong. Distill.
- **Minimum 40px padding** on all slide content containers. Content should never touch edges.
- **Minimum 24px gap** between major elements. Let things breathe.

### Visual Hierarchy Rules
- **One focal point per slide.** The eye should know exactly where to go first.
- **Big numbers are BIG.** Stats should be 2.5rem+ and bold. The number IS the slide.
- **Labels are tiny.** Section labels, source citations = 0.6-0.7rem, uppercase, muted color.
- **Never use the same layout on consecutive slides.** If slide 3 is a 3-column grid, slide 4 must be something different (quote, timeline, full-width image, etc).
- **Every slide must have whitespace.** If it feels "full," remove something.

### Color Discipline
- **Green (#61F393):** Max 2-3 uses per slide. Accent, not wallpaper.
- **Red (#EF4444):** Only for threats, risks, danger. Never decorative.
- **Dark slides:** Only for closing, section breaks, or dramatic reveals. Max 2 per deck.
- **Card backgrounds:** Always white (#FFFFFF). Not gray, not tinted.

### Typography
- **H2 (slide title):** 2.2-3rem, font-weight 700-800
- **Body text:** 0.85-1rem, line-height 1.5+, color var(--text-secondary)
- **Card titles:** 0.95-1.1rem, font-weight 700
- **Stat numbers:** 2.5rem+, font-weight 800
- **Labels:** 0.6-0.7rem, uppercase, letter-spacing 1.5px+
- **Never go below 0.6rem for anything.** If it's too small to read, it shouldn't be there.

### Logo & Image Rules
- **Logos in cards:** 16-28px height. Consistent across the slide.
- **Screenshots:** Always inside a container with rounded corners (16px) and subtle shadow. Never bare.
- **People photos:** Always circular, with a subtle border or shadow.
- **Check every image path exists** with `ls` before using it. If it doesn't exist, use a placeholder.

## Quality Assurance Protocol

**After building every deck, you MUST complete this QA process before delivering.**

### Step 1: Automated Checks
Run these checks (use terminal commands):
```bash
# Verify all image files exist
grep -oP 'src="([^"]+)"' index.html | sed 's/src="//;s/"//' | while read f; do
  [ ! -f "$f" ] && echo "MISSING: $f"
done

# Check for emojis (should return nothing)
grep -P '[\x{1F300}-\x{1F9FF}]' index.html

# Count slides
grep -c 'class="slide' index.html
```

### Step 2: Visual Review with Playwright
Use the Playwright MCP to screenshot EVERY slide:
1. Open the presentation in the browser
2. Navigate to each slide (arrow key or hash URL)
3. Take a screenshot of each slide
4. **Review each screenshot yourself** — but remember you CANNOT visually evaluate image files. Instead, check:
   - Does the slide render without errors? (no broken image icons in terminal output)
   - Is the slide counter correct?
   - Does navigation work forward and backward?

**⚠️ CRITICAL: You cannot judge visual symmetry, alignment, or spacing from screenshots.**
Do NOT claim things "look great" or "are perfectly aligned" — you have no way to verify this.
Instead, for any positioned elements (absolute positioning, circles, orbits, grids):
- **Show the math**: Calculate positions explicitly (e.g., "5 items at 72° intervals, radius 55px from center 80,70")
- **Verify with computed styles**: Use Playwright to read `getBoundingClientRect()` on positioned elements and confirm symmetry numerically
- **Flag for human review**: Tell the user "I've set the positions mathematically but cannot visually verify — please check alignment"
- **Never say "looks great"** unless you've numerically verified element positions match the intended layout

### Step 3: Checklist (verify ALL before delivering)
- [ ] Every `<img>` src path resolves to a real file (verified with `ls`)
- [ ] No emojis anywhere in the HTML
- [ ] Nav bar present with Clarity logo linking to `../../index.html`
- [ ] Slide counter shows correct total (matches actual slide count)
- [ ] Hash navigation works (#slide-1 through #slide-N)
- [ ] Arrow key navigation works
- [ ] No two consecutive slides use the same layout pattern
- [ ] Every slide has clear whitespace (no cramming)
- [ ] Statistics have source citations
- [ ] Animations use `.anim` + delay classes (`.d1` through `.d7`)
- [ ] All slides have `overflow-y: auto` (long content scrolls)
- [ ] Dark slides use `.slide-dark` class
- [ ] Mobile responsive: grids collapse, fonts scale, nothing overflows
- [ ] No placeholder text left (no "Lorem ipsum", no "TODO", no "TBD")
- [ ] Metadata comment present at top of HTML with deck-type, audience, author, date

### Step 4: Report
After QA, tell the user:
- Total slides built
- Any issues found and fixed
- Any missing assets that need to be provided
- The branch name and how to open a PR

## Existing Presentations (for reference)

| Deck | Path | Slides | Audience |
|------|------|--------|----------|
| CISO Shareable v2 | `presentations/ciso-shareable-v2/` | 13 | CISOs |
| CISO Shareable v1 | `presentations/ciso-shareable/` | 12 | CISOs |
| GuidePoint Masterclass | `presentations/masterclass/` | 36 | CISO event |
| Deel Onboarding | `presentations/deel-onboarding/` | 28 | Deel partnership |

Browse these for inspiration on layout patterns, animation techniques, and content structure.
