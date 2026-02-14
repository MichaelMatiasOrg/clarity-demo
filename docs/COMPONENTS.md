# Slide Component Catalog

*Reusable slide patterns for Clarity presentations. Pick the right pattern for your content — or let Claude Code choose for you.*

---

## Title Slides

### `title-hero`
**When to use:** Opening slide. Sets the tone.
**Visual:** Centered logo, large H1, accent divider, subtitle, optional trust bar. Decorative Clarity stars in background at low opacity.
**Example:** CISO Shareable slide 1

### `title-dark`
**When to use:** Closing slide or section break that needs gravitas.
**Visual:** Dark navy background (`.slide-dark`), green+white logo, white text, CTA buttons.
**Example:** CISO Shareable slide 13

---

## Problem / Threat Slides

### `silo-disconnect`
**When to use:** Showing two groups/systems that should be connected but aren't.
**Visual:** Two panels (left + right) with a red dashed divider and "NO CONNECTION" badge between them. Bottom callout bar with dark bg.
**Example:** CISO Shareable slide 2 (HR vs Security)

### `escalation-timeline`
**When to use:** Showing a problem getting worse over time.
**Visual:** Stacked rows, each progressively larger and more visually intense. Years on left, description center, optional stat on right. Final row dark bg.
**Example:** CISO Shareable slide 3 (2020→2026 threat escalation)

### `stat-grid-with-quote`
**When to use:** Hammering numbers + landing an authority quote.
**Visual:** 4-column stat cards (big colored numbers, description, source) + full-width quote card below with photo, quote text, attribution.
**Example:** CISO Shareable slide 4 (scale + Carmakal quote)

### `failure-gauges`
**When to use:** Showing why existing solutions are inadequate.
**Visual:** 4 cards with circular gauge indicators (showing fill level) + diagonal "stamp" ribbons (BYPASSED, WEAK, etc.). Bottom callout bar.
**Example:** CISO Shareable slide 5 (the gap)

---

## Solution Slides

### `lifecycle-flow`
**When to use:** Showing a multi-step process or journey.
**Visual:** Horizontal flow of boxes connected by arrows (desktop). Vertical list (mobile). Technology summary cards below.
**Example:** CISO Shareable slide 6 (Pre-Hire → Interview → Onboarding → MFA → Continuous)

### `three-columns-with-screenshots`
**When to use:** Showing different perspectives, experiences, or personas.
**Visual:** 3 equal cards, each with image/visual at top (180px) and text below. Can use screenshots, logo chips, or illustrations.
**Example:** CISO Shareable slide 7 (CISO / Candidate / Enterprise)

### `convergence-diagram`
**When to use:** Multiple inputs → single output. "How it works" technical slides.
**Visual:** Left column (input list) → center element (processing node) → right column (output/result). Works great for showing signal fusion, data pipelines, integration architectures.
**Example:** CISO Shareable slide 8 (40+ signals → AI Engine → risk score)

---

## Proof / Credibility Slides

### `proof-cards`
**When to use:** Showing validation from multiple angles (tests, rankings, partnerships).
**Visual:** 3 equal cards with badge label, big metric/logo, title, and description.
**Example:** CISO Shareable slide 9 (Fortune 500 test + Top 3 + Onfido)

### `integration-rows`
**When to use:** Showing platform/tool compatibility.
**Visual:** Categorized rows (label + logo chips). Compliance badges section below.
**Example:** CISO Shareable slide 10 (ATS, Identity, ITSM, SIEM, Comms)

---

## CTA Slides

### `screenshot-cta`
**When to use:** Low-commitment offer with visual proof.
**Visual:** Product screenshot in demo frame + stats row below (key numbers).
**Example:** CISO Shareable slide 11 (free threat scan)

### `step-process`
**When to use:** Showing a clear process for engagement.
**Visual:** 3 numbered step cards (green numbered circles) + timeline badge.
**Example:** CISO Shareable slide 12 (POC: setup → verify → measure)

---

## General Purpose

### `single-stat-hero`
**When to use:** One massive number or fact that needs to land.
**Visual:** Giant number centered, description below, optional supporting context.

### `comparison-two-col`
**When to use:** Before/after, old way/new way, problem/solution.
**Visual:** Two columns side by side, left styled as "bad" (red accents), right as "good" (green accents).

### `screenshot-showcase`
**When to use:** Showing a product screen in detail.
**Visual:** Large screenshot in demo frame, centered, with caption and optional callout annotations.

### `quote-fullscreen`
**When to use:** A single powerful quote that needs to breathe.
**Visual:** Large italic quote text, attribution with photo, minimal other elements.

### `logo-cloud`
**When to use:** Showing breadth of partnerships, customers, or integrations.
**Visual:** Grid of logo chips, centered, with section label.

---

## Component CSS Classes

These are defined in `../../shared/css/design-system.css`:

| Class | Description |
|-------|-------------|
| `.slide` | Full-viewport slide container |
| `.slide.active` | Currently visible slide |
| `.slide-dark` | Dark navy background variant |
| `.card` | White card with border, radius, shadow |
| `.badge` | Small green pill label |
| `.badge-danger` | Red pill label |
| `.section-label` | Green uppercase micro-label |
| `.subtitle` | Secondary text, centered, max-width |
| `.danger` | Red text color |
| `.accent` | Green text color |
| `.demo-frame` | Rounded screenshot container with shadow |
| `.logo-chip` | White pill with logo + text |
| `.int-row` | Integration category row |
| `.int-row-label` | Bold category label for int-row |
| `.anim` | Element that animates in |
| `.d1` to `.d7` | Animation delay (100ms increments) |
| `.mobile-hide` | Hidden below 768px |
| `.mobile-only` | Visible only below 768px |
