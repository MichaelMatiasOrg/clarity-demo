# HR Leaders Greenhouse Deck — Design Document

**Date:** 2026-02-14
**Audience:** Enterprise HR leaders (specifically Affirm prospect meeting)
**Format:** Live-presented, 8 slides
**Narration:** Visual slides only (no narration engine)
**Narrative:** Day-in-the-life story following fictional company "Paysure"

## Fictional Company: Paysure

- Consumer lending fintech (BNPL)
- ~2,000 employees, remote-first (US/EU/LATAM)
- Greenhouse-powered hiring pipeline, 150+ hires/year
- Handles PCI-regulated financial data, merchant integrations

Mirrors Affirm closely without naming them directly.

## Slide-by-Slide Design

### Slide 1: Title
- Headline: "Protecting Remote Hiring from Identity Fraud"
- Subtitle: "A Greenhouse Integration Story"
- Clarity logo centered, Greenhouse logo below
- Standard brand shape decorations at low opacity

### Slide 2: Meet Paysure
- Company profile card with Paysure branding
- Key facts: ~2,000 employees, remote-first, Greenhouse pipeline, PCI-regulated
- Bottom line: "Every remote hire touches financial systems from day one."
- Uses `.profile-card` or `.card` component pattern

### Slide 3: The Hire That Checked Every Box
- Paysure hires a senior backend engineer via Greenhouse
- Horizontal pipeline visual: Applied → Screen → Interview → Offer → Hired
- Green checkmarks at each stage
- Subtle red pulse animation on "Hired" stage (foreshadowing)

### Slide 4: The Discovery
- Three months later — red flags emerge
- 3 alert cards: unexpected IP locations, credential sharing, inconsistent work
- Stat: "1 in 4 remote companies have encountered hiring identity fraud" (cited)
- Danger color tones (#EF4444 / #FEE2E2)

### Slide 5: The Real Cost
- Cost breakdown using strikethrough comparison pattern
- ~~$180K salary~~ wasted
- $4.9M average data breach cost (IBM)
- 3-6 months lost productivity
- Regulatory exposure for fintech handling consumer loans
- Sources cited: IBM Cost of a Data Breach Report

### Slide 6: Where Clarity Fits in Greenhouse
- Horizontal Greenhouse hiring pipeline
- 3 Clarity checkpoint overlays:
  1. Applicant Screening — ID document verification
  2. Pre-Interview — liveness check before video interview
  3. Post-Offer — continuous identity verification during onboarding
- Greenhouse logo + Clarity logo connected by flow arrows
- Product screenshot inset (pre-interview.png or mockup)

### Slide 7: Paysure's New Reality
- Same pipeline from Slide 3, now with Clarity shields at each stage (green)
- Stat: "Zero fraudulent hires since deployment."
- Story resolution — the transformation

### Slide 8: Free Scan CTA
- Headline: "See What's Hiding in Your Pipeline"
- Clarity logo + Greenhouse logo side by side
- Prominent CTA button styling
- Contact details
- Clean, action-oriented close

## Technical Decisions

- **Location:** `presentations/hr-greenhouse/`
- **Assets:** Uses shared logos (greenhouse.svg, clarity-logo.svg), shared screenshots (pre-interview.png), shared design system
- **No narration engine** — visual slides only, presenter fills context
- **Navigation:** Standard keyboard nav via shared/js/navigation.js
- **Hub page:** Add card linking to new presentation
- **Custom CSS:** Pipeline visuals, alert cards, red pulse animation, Clarity shield overlays

## Design Rules Followed

- One-line titles, no wrapping
- Strikethrough comparisons for cost data
- Cited sources for all statistics
- Real logos only from shared/logos/
- No emojis — geometric shapes and color indicators
- Subtle animations (pulse, fade-in)
- Enterprise-grade aesthetic
