# FULL SPEC — CISO Shareable Deck v2

## Context

You are building a **world-class** shareable sales deck for **Clarity**, an employee identity security company. This deck will be shared directly with CISOs (Chief Information Security Officers) of Fortune 500 companies. It needs to look like it was designed by a top-tier agency — not a developer's side project.

**Clarity's product:** End-to-end identity verification across the employee lifecycle — from the moment a resume is submitted through interviews, onboarding, and ongoing employment. They detect deepfakes, synthetic identities, and hiring fraud using 40+ AI signals converged into a single risk score.

**The audience:** Security leaders who are skeptical, technical, and have seen a thousand vendor decks. Every slide needs to earn the next click. No fluff, no filler, no generic SaaS platitudes.

**The emotional arc:** "This looks serious" → "Oh, hiring was never secured" → "It's accelerating" → "Numbers are massive" → "My tools don't fix this" → "Clarity covers the whole lifecycle" → "Works for my team, candidates, AND tools" → "40+ signals, one score" → "They've proven it" → "Fits my stack" → "I can try for free or go deeper" → "Let's talk"

**Output:** Single HTML file with all CSS and JS embedded. File path: `~/clawd/clarity-demo/presentations/ciso-shareable-v2/index.html`

---

## Design System

### Brand
- **Font:** Manrope (import from Google Fonts)
- **Background:** #F0F4F8 (soft blue-gray — NOT white, NOT dark)
- **Text primary:** #0a1628 (deep navy)
- **Text secondary:** #64748B (slate gray)
- **Accent:** #61F393 (Clarity green — use sparingly for impact)
- **Danger:** #EF4444 (red — for threat/risk content)
- **Cards:** White background, 1px #E2E8F0 border, border-radius 16px, subtle box-shadow
- **NO emojis.** Zero. This is enterprise software, not a newsletter.

### CSS Variables
```css
:root {
    --bg-primary: #F0F4F8;
    --text-primary: #0a1628;
    --text-secondary: #64748B;
    --accent: #61F393;
    --accent-muted: rgba(97, 243, 147, 0.1);
    --danger: #EF4444;
    --danger-muted: rgba(239, 68, 68, 0.08);
    --border: #E2E8F0;
}
```

### Navigation Bar
- Fixed at top, dark navy (#0a1628), height ~56px
- White Clarity logo on left (from `../../shared/brand/clarity-logo-white.svg`), links to `../../index.html`
- Clean, minimal — no other nav items

### Slide Structure
- Each slide is a `<section class="slide">` that fills the viewport (100vh minus navbar)
- Only one slide visible at a time (`.slide.active`)
- Slides flex-center their content both horizontally and vertically
- `overflow-y: auto` on all slides (content can scroll if it overflows)
- Slides transition with horizontal translateX animation

### Animation System
- `.anim` class = elements that animate in when slide becomes active
- Delay classes: `.d1` through `.d7` (each adds ~100ms delay)
- Animation: fade in + subtle translateY(20px → 0)
- Animations only trigger when parent slide has `.active` class
- Duration: 0.6s ease-out

### Responsive Classes
- `.mobile-hide` = `display: none` below 768px
- `.mobile-only` = `display: none` above 768px, visible below
- Below 768px: reduce font sizes ~15-20%, collapse grids to 1-2 columns, reduce padding

---

## Assets

All paths are relative to the HTML file location (`presentations/ciso-shareable-v2/`).

### Brand Logos
| File | Use |
|------|-----|
| `../../shared/brand/clarity-logo.svg` | Dark logo for light slides |
| `../../shared/brand/clarity-logo-white.svg` | White logo for navbar and dark elements |
| `../../shared/brand/clarity-logo-green-white.svg` | Green+white logo for dark closing slide |

### Product Screenshots
| File | Shows |
|------|-------|
| `../../shared/screenshots/employee-dashboard.png` | Command center / employee list dashboard |
| `../../shared/screenshots/during-interview.png` | Live interview analysis with 94/100 risk score |
| `../../shared/screenshots/pre-interview.png` | Pre-interview candidate verification screen |
| `../../shared/screenshots/threat-intel-dashboard.jpg` | Threat intelligence scan interface |
| `../../shared/screenshots/continuous.png` | Continuous monitoring view |

### People
| File | Person |
|------|--------|
| `../../shared/people/charles-carmakal.png` | Charles Carmakal, CTO of Mandiant |

### Integration Logos (all in `../../shared/logos/`)
okta.svg, ashby.svg, workday.svg, servicenow.svg, greenhouse.svg, mandiant.svg, onfido.svg, lever.svg, icims.svg, microsoft-entra-id.svg, splunk.svg, sentinel.svg, slack.svg, zoom.svg, teams.svg, jira.svg

### Compliance Badges (all in `../../shared/compliance/`)
soc2.png, gdpr.png, ccpa.png, iso27001.png

---

## Functionality (JavaScript)

### Navigation
- **Arrow keys:** Left/Right to navigate between slides
- **Touch/swipe:** Support swipe left/right on mobile
- **Hash URLs:** `#slide-N` links directly to slide N
- **Slide counter:** Fixed bottom-right badge showing "1 / 13" (updates on navigation)

### Slide Transitions
- Active slide has `.active` class
- Transitioning slides use translateX(-100%) / translateX(100%) to slide in/out
- CSS transition: `transform 0.5s ease, opacity 0.5s ease`

### Dev Mode (optional bonus)
- Toggle with Alt+D or a small wrench icon button (bottom-right, subtle)
- When active: hovering elements shows a highlight border
- Click element → copies element info to clipboard
- Press Escape to exit

---

## THE 13 SLIDES — Detailed Specifications

---

### SLIDE 1 — Title
**Purpose:** Set the tone. Clarity = serious, premium, enterprise.

**Layout:** Centered, single column, generous whitespace.

**Elements:**
1. Clarity logo (dark version, ~60px height), centered
2. H1: **"Employee Identity Security"** — large (3.5rem), navy, bold
3. Green accent bar: 80px wide, 4px tall, centered, margin 24px auto
4. Subtitle paragraph: "Protecting organizations from hiring fraud, synthetic identities, and deepfake attacks — across the entire employee lifecycle" — secondary text, 1.1rem, max-width 650px
5. Trust bar (below subtitle, margin-top 40px): White card with subtle shadow, inline-block. Contains: "PROTECTING COMPANIES WITH" (small uppercase, secondary) + "**1M+ candidates · 5,000+ employees**" (bold, primary)
6. **Background decoration:** Two Clarity star SVGs positioned absolute in opposite corners (top-right, bottom-left), large (~200px), very low opacity (0.05-0.08). Use the 4-pointed Clarity star shape.

**Mobile:** Hide trust bar or make it full-width. Stars stay but scale down.

---

### SLIDE 2 — The Blind Spot
**Purpose:** Introduce THE core problem — HR and Security operate in completely separate worlds. The hiring pipeline has zero security involvement. This is the fundamental gap Clarity fills.

**Layout:** Centered heading + 3-column visual + bottom callout bar.

**Elements:**
1. Section label: "The Blind Spot" (green, uppercase, small)
2. H2: "The hiring process was <span class="danger">never built with security in mind</span>" — the red text creates urgency
3. **Main visual — 3-column grid:**
   - **Left column** (white card, rounded left corners): 
     - Header: "HR / TALENT ACQUISITION" (tiny uppercase label) + "The Hiring Pipeline" (bold)
     - 5 numbered steps in light gray rows: `1` Source Candidates, `2` Screen Resumes, `3` Video Interview, `4` Extend Offer, `5` Onboard Employee
     - Numbers in green accent, font-weight 800
   - **Center divider:**
     - Red dashed vertical line (use `repeating-linear-gradient` or `border-style: dashed`)
     - "NO CONNECTION" badge in the middle: red background, white text, uppercase, small, bold, rounded, with red box-shadow glow
   - **Right column** (white card, rounded right corners):
     - Header: "SECURITY TEAM" (tiny uppercase label) + "Their Toolkit" (bold)
     - 4 normal rows: IAM / SSO, SIEM / SOC, EDR / XDR, Background Checks
     - 1 danger row at bottom: "No hiring pipeline visibility" — light red/pink background, red text
4. **Bottom callout bar:** Dark navy background, rounded, full-width within container. "**Remote hiring made it worse.** You're extending access to people you've never physically met — and your security team isn't part of the process."

**Mobile:** Stack left and right panels vertically. Center divider becomes a horizontal element between them.

---

### SLIDE 3 — Escalation Timeline
**Purpose:** Show this isn't new — it's been building for years and it's accelerating. Each era is MORE dangerous. The visual should feel like pressure building.

**Layout:** Centered heading + 5 stacked rows of increasing size/intensity.

**Elements:**
1. Section label: "The Evolving Threat"
2. H2: "It started small. <span class="danger">It didn't stay that way.</span>"
3. **5 timeline rows** — each row is a flex container with year on left, description in middle, and optional stat on right. Each row is PHYSICALLY LARGER and more visually intense than the previous:

| Year | Style | Title | Description | Stat |
|------|-------|-------|-------------|------|
| 2020 | Small, muted (opacity 0.7), thin border, padding 14px | Remote hiring goes mainstream. | Identity verification moves to video calls — with no safeguards. | — |
| 2022 | Slightly bigger (opacity 0.8), padding 16px | Bait-and-switch attacks emerge. | One person interviews. A different person shows up on day one. | — |
| 2024 | Red left border (4px), danger styling, padding 20px | Deepfakes hit hiring. | $25M stolen via deepfake video call in Hong Kong. Real-time face swaps used in job interviews. | **$25M** (red, large) |
| 2025 | Larger, pink gradient bg (#fef2f2), 5px left border, padding 24px | Nation-state infiltration. | KnowBe4 — a cybersecurity company — hires a North Korean operative. DOJ reveals 300+ US companies infiltrated. | **300+** (red, large) |
| 2026 | BIGGEST. Dark navy bg, white text, rounded 18px, padding 28px, prominent box-shadow | Industrialized identity fraud. | AI generates synthetic candidates at scale. Gartner predicts 1 in 4 job profiles will be fake by 2028. | **1 in 4** (green accent, 2rem) |

**Key visual principle:** The escalation must be FELT, not just read. The 2026 row should be 2-3x the visual weight of 2020.

**Mobile:** Same layout works — rows stack naturally. Reduce padding slightly.

---

### SLIDE 4 — Scale + Credibility
**Purpose:** Hammer the numbers. Then land the Carmakal quote as the authority mic-drop. After this slide, the audience should think: "This is a real, massive problem."

**Layout:** Heading + 4-column stats + full-width quote card below.

**Elements:**
1. Section label: "Scale of the Problem"
2. H2: "The hiring fraud epidemic is <span class="danger">here</span>"
3. **4 stat cards** (equal columns, white bg, centered text):

| Number | Description | Source |
|--------|-------------|--------|
| **1 in 4** | candidate profiles will be fake by 2028 | Gartner Research |
| **1,800+** | suspected NK applicants blocked by Amazon alone | Dark Reading, 2025 |
| **300+** | US companies infiltrated by NK operatives | DOJ Indictment, 2025 |
| **220%** | increase in NK infiltrations in 12 months | Fortune, 2025 |

   - Numbers: 2.8rem, font-weight 800, color var(--danger)
   - Description: 1rem, secondary color
   - Source: 0.75rem, very muted, italic with em-dash prefix

4. **Quote card** (full width, max-width 1000px, centered):
   - Green left border (6px)
   - White background, large border-radius (20px), prominent shadow
   - Circular photo of Charles Carmakal (90px, from assets), with 3px border and shadow
   - Quote text (1.2rem, italic): *"Almost every CISO of a Fortune 500 company that I've spoken to — I'll just characterize as **dozens** — have admitted that they had a North Korean IT worker problem."*
   - The word "dozens" should be red and bold
   - Attribution: **Charles Carmakal**, CTO, Mandiant + Mandiant logo (small, beside name)

**Mobile:** Stats become 2x2 grid. Quote card stacks photo above text.

---

### SLIDE 5 — The Gap
**Purpose:** Before introducing the solution, show WHY existing tools fail. Each tool category has a specific, quantifiable weakness. The stamps ("BYPASSED", "WEAK", etc.) create a visceral feeling of inadequacy.

**Layout:** Heading + subtitle + 4 cards in a row + bottom callout bar.

**Elements:**
1. Section label: "The Gap"
2. H2: "Every check has a <span class="danger">breaking point</span>"
3. Subtitle: "Security teams bolt on tools after the fact — but none of them were designed for this threat."
4. **4 failure cards** (equal columns, white bg, centered, overflow: hidden for stamps):

Each card has:
- An SVG icon at top (simple line icons — clipboard for background checks, ID card for IDV, video camera for deepfake, two disconnected people for siloed)
- A circular gauge indicator (80px, using CSS borders to show fill level)
- A metric label (tiny uppercase, colored to match severity)
- Title (bold, 1rem)
- Description (0.85rem, secondary)
- **Diagonal stamp ribbon** (positioned absolute, top-right corner, rotated 35deg, colored background, white uppercase text, small font)

| Card | Gauge | Metric Label | Title | Description | Stamp Color | Stamp Text |
|------|-------|--------------|-------|-------------|-------------|------------|
| 1 | 0% (red border-top only, rest gray) | "DETECTION RATE" (red) | Background Checks | Synthetic identities have no criminal record. "Clean" result on a person who doesn't exist. | Red | BYPASSED |
| 2 | ~90% (amber border-top + right) | "CONCLUSIVE RATE" (amber #F59E0B) | IDV Alone | 10%+ inconclusive. High-quality fakes and AI selfies defeat document checks regularly. | Amber #F59E0B | WEAK |
| 3 | ~80% (red, 3/4 filled) | "ACCURACY CEILING" (red) | Deepfake Detection | Standalone tools plateau at ~80%. Attackers adapt faster than models retrain. | Red | ARMS RACE |
| 4 | X icon in red circle (not a gauge) | "NO CORRELATION" (red) | Siloed Tools | No cross-signal analysis. Bypass one check and the rest never know. | Red | BLIND SPOTS |

5. **Bottom callout bar** (same style as slide 2): "**The result:** A determined fraudster bypasses every single one of these. You need all signals, correlated, in real time."

**Mobile:** 2x2 grid or single column. Stamps still visible.

---

### SLIDE 6 — Solution Hero
**Purpose:** The reveal. After 5 slides of mounting problems, HERE is the answer. This slide should feel like a breath of fresh air — green accents, clean flow, forward momentum. This is the most important slide in the deck.

**Layout:** Heading + subtitle + horizontal lifecycle flow + technology summary bar.

**Elements:**
1. Section label: "The Solution"
2. H2: "End-to-End <span class="accent">Identity Security</span>" — green accent creates contrast with all the red from previous slides
3. Subtitle: "Clarity bridges the gap — embedding identity verification at every critical touchpoint across the employee lifecycle."

4. **Lifecycle Flow (Desktop — `.mobile-hide`):**
   - 5 boxes in a horizontal row connected by green arrows (→)
   - Each box: white background, 2px green border, border-radius 14px, centered content
   - Each box contains: SVG icon (28px) + bold label + smaller subtitle

| Step | Icon (simple SVG) | Label | Subtitle |
|------|-------------------|-------|----------|
| 1 | Document/page icon | Pre-Hire | Resume Screen |
| 2 | Video camera icon | Interview | Live Monitor |
| 3 | Person icon | Onboarding | Day 1 Check |
| 4 | Lock icon | MFA Reset | Help Desk |
| 5 | Eye icon | Continuous | Monitoring |

   - Below flow: "↺ Continuous cycle — identity verified at every touchpoint" (small, secondary, centered)

5. **Lifecycle Flow (Mobile — `.mobile-only`):**
   - Vertical list: each item has a badge icon on left + content (title + description) on right
   - Clean, list-style layout

6. **Technology Summary Bar** (4 cards in a row, margin-top 32px):
   - Each card: white bg, border, centered
   - Green uppercase label + bold description

| Label | Description |
|-------|-------------|
| BIOMETRIC | Face Match & Liveness |
| DEEPFAKE | AI Media Detection |
| DOCUMENT | ID & Resume Verification |
| BEHAVIORAL | Anomaly Detection |

**Mobile:** Lifecycle becomes vertical list. Tech summary becomes 2x2 grid.

---

### SLIDE 7 — Three Experiences
**Purpose:** Show Clarity isn't just a security tool — it has interfaces for different stakeholders. The screenshots make it tangible and real. This is "show, don't tell."

**Layout:** Heading + 3 equal cards with screenshots.

**Elements:**
1. Section label: "Built for Everyone"
2. H2: "One platform, <span class="accent">three experiences</span>"
3. **3 experience cards** (equal columns, white bg, rounded 20px, overflow hidden, shadow):

Each card has:
- **Top section** (180px height): Image or visual that fills the space (object-fit: cover, object-position: top)
- **Bottom section** (padding 24px): Green uppercase micro-label + bold title + description paragraph

| Card | Top Visual | Label | Title | Description |
|------|-----------|-------|-------|-------------|
| CISO | `employee-dashboard.png` screenshot | "For the CISO" | Command Center | Full visibility into your hiring pipeline. Real-time risk scores. Instant alerts on anomalies. |
| Candidate | `pre-interview.png` screenshot | "For the Candidate" | Seamless Verification | Frictionless identity verification that doesn't interrupt the hiring experience. |
| Enterprise | Logo chips (Okta, Ashby, Workday, ServiceNow, Greenhouse) on light #F0F4F8 bg | "For the Enterprise" | Native Integrations | Embedded in your existing ATS, HRIS, and identity workflows. No rip-and-replace. |

**Logo chips** in the Enterprise card: white pills with logo img + company name, flex-wrapped, gap 8px.

**Mobile:** Stack cards vertically. Full width.

---

### SLIDE 8 — Detection Technology (The Brain)
**Purpose:** Show the technical depth. Multiple signal types feed into one engine. This is the "how it works" slide — but visual, not text-heavy. The convergence visual (signals → brain → score) tells the story.

**Layout:** Heading + 3-column layout (signals | convergence | output).

**Elements:**
1. Section label: "Detection Technology"
2. H2: "40+ signals per candidate. <span class="accent">One risk score.</span>"
3. Subtitle: "Multiple signal types converge in Clarity's AI engine for a unified risk assessment."

4. **Left column — Signal Categories** (5 rows stacked):
Each row: icon box (36px, green-muted bg, rounded 8px) + title (bold) + description (small, secondary)

| Icon (SVG) | Title | Description |
|-----------|-------|-------------|
| Video camera | Video Analysis | Face swap artifacts, GAN signatures, temporal inconsistencies |
| Microphone | Voice Biometrics | Cloning detection, audio-visual sync, speaker consistency |
| Document | Document Forensics | Resume anomalies, ID manipulation, photo forensics |
| Person | Biometric Match | Cross-document face matching, liveness verification |
| Globe | Network Intelligence | Dark web monitoring, threat database cross-reference |

5. **Center column — Convergence Visual:**
   - Vertical line (gray, 3px wide, ~40px)
   - Dark circle (100px diameter, #0a1628 bg, prominent shadow + subtle green glow): Contains Clarity white logo (28px) + "AI ENGINE" text below (tiny, 0.5rem, muted white)
   - Green vertical line below (3px, ~40px)
   - Green down arrow (↓, 1.5rem)

6. **Right column — Output:**
   - `during-interview.png` in a `.demo-frame` (rounded, shadow, border)
   - Below screenshot: white card showing "Risk score: **94/100** — High risk detected" (94/100 in red, bold, 1.2rem)

**Mobile:** Stack vertically: signals → engine circle → screenshot + score. Center everything.

---

### SLIDE 9 — Proof (Expanded)
**Purpose:** Three independent proof points that validate Clarity from different angles. This is placed AFTER the solution slides so the audience already understands what Clarity does — now they see it WORKS.

**Layout:** Heading + 3 equal proof cards.

**Elements:**
1. Section label: "Proven Results"
2. H2: "Tested. Validated. <span class="accent">Proven.</span>"
3. **3 proof cards** (equal columns, white bg, rounded 20px, padding 32px, centered text, shadow):

**Card 1 — Fortune 500 Test:**
- Badge: "Fortune 500 Test" (green-muted bg, small)
- Big number: "**6** / 9" — the 6 is red (var(--danger)), 3.5rem. The "/ 9" is normal weight.
- Label: "bad actors identified" (bold, 1rem)
- Description: "A Fortune 500 insurance company seeded 9 known bad actors into their pipeline. Clarity caught 6 from the **resume alone** — before any interview." (0.85rem, secondary)

**Card 2 — 3rd Party Validated:**
- Badge: "3rd Party Validated"
- Big text: "**Top 3**" (green, 3.5rem)
- Label: "globally for deepfake detection"
- Description: "Ranked among the top 3 worldwide for deepfake detection accuracy by independent third-party testing organizations."

**Card 3 — Strategic Partner:**
- Badge: "Strategic Partner"
- Onfido logo (48px height, from `../../shared/logos/onfido.svg`)
- Label: "Onfido IDV Partnership"
- Description: "Partnered with Onfido for enterprise-grade identity document verification, combining IDV with our deepfake and behavioral analysis."

**Mobile:** Stack vertically.

---

### SLIDE 10 — Integrations + Compliance
**Purpose:** Remove the "will this work with our stack?" objection. Show breadth of integrations AND security certifications. This is a trust slide.

**Layout:** Heading + subtitle + integration rows + compliance badges.

**Elements:**
1. Section label: "Enterprise Ready"
2. H2: "Fits into your <span class="accent">existing stack</span>"
3. Subtitle: "Deploy in days, not months. API-first architecture with pre-built connectors."

4. **Integration rows** (max-width 900px, centered):
Each row is a flex container: bold category label on left (min-width 80px) + wrapped logo chips

| Category | Logos |
|----------|-------|
| ATS / HR | Greenhouse, Workday, Ashby, Lever, iCIMS |
| Identity | Okta, Microsoft Entra ID |
| ITSM | ServiceNow, Jira Service Management |
| SIEM | Splunk, Microsoft Sentinel |
| Comms | Slack, Zoom, Microsoft Teams |

**Logo chips:** Each is a white pill with: `<img>` of the logo (height ~18px) + company name text. Flex, centered, gap 8px, border, rounded 8px.

5. **Compliance section** (margin-top 32px):
   - Label: "Compliance & Certifications" (small uppercase, secondary, centered)
   - Flex row of badge cards (centered, gap 20px, flex-wrap):

| Badge | Image | Text |
|-------|-------|------|
| SOC 2 | soc2.png (40px height) | SOC 2 Type II |
| GDPR | gdpr.png | GDPR |
| ISO 27001 | iso27001.png | ISO 27001 |
| CCPA | ccpa.png | CCPA |
| EU AI Act | Styled blue square (40px, #003399 bg, white clock SVG icon) | EU AI Act |

Each badge card: white bg, border, rounded 12px, padding 12px 20px, flex row with gap.

**Mobile:** Logo chips wrap naturally. Integration rows stack. Compliance badges wrap to 2-3 per row.

---

### SLIDE 11 — Free Threat Intel Scan
**Purpose:** Low-commitment CTA. "You don't have to buy anything — just let us scan your pipeline for free." This is the on-ramp.

**Layout:** Heading + subtitle + screenshot + stats row.

**Elements:**
1. Section label: "What's Next"
2. H2: "Free Threat Intelligence <span class="accent">Scan</span>"
3. Subtitle: "Share your candidate pipeline. We'll cross-reference it against our threat database — on us."
4. **Screenshot:** `threat-intel-dashboard.jpg` in a `.demo-frame`, max-height 45vh, centered, object-fit contain
5. **Stats row** (flex, centered, gap 40px, margin-top):

| Number | Label |
|--------|-------|
| **10,000+** (green, 2.4rem) | Known threat identifiers |
| **48h** (green) | Results turnaround |
| **Free** (green) | No commitment required |

**Mobile:** Stats stack or wrap. Screenshot scales down.

---

### SLIDE 12 — Full POC
**Purpose:** Higher-commitment CTA for CISOs ready to go deeper. Shows clear process — reduces ambiguity. The numbered steps make it feel structured and professional.

**Layout:** Heading + subtitle + 3 step cards + timeline badge.

**Elements:**
1. Section label: "Go Deeper"
2. H2: "Fully Integrated <span class="accent">Proof of Concept</span>"
3. Subtitle: "Ready for a comprehensive evaluation? We'll integrate with your stack and run live verification."
4. **3 step cards** (equal columns, white bg, rounded 16px, centered, shadow):

Each card has a green numbered circle at top (50px, border-radius 12px, green bg, navy number, 1.4rem bold)

| Step | Title | Description |
|------|-------|-------------|
| **1** | Integration Setup | Connect to your ATS, HRIS, and identity platform. Pre-built connectors for fast deployment. |
| **2** | Live Verification | Run real candidates through the platform. See detection in action across your actual pipeline. |
| **3** | Measure Results | Full report with detection rates, false positive analysis, and ROI projection for your organization. |

5. **Timeline badge** (centered, below cards): White card, border, rounded. "Typical POC timeline: **4–6 weeks**"

**Mobile:** Stack cards vertically.

---

### SLIDE 13 — Closing (Dark)
**Purpose:** Clean, confident close. Dark background signals gravitas. Two clear contact paths. No hard sell — just "let's talk."

**Layout:** Centered, single column, dark background.

**Elements:**
1. **This slide uses class `slide-dark`** — dark navy background with subtle radial gradient: `linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)`
2. Clarity logo: `clarity-logo-green-white.svg`, 60px height, centered
3. H1: "Employee Identity Security" (white, 3.2rem)
4. Green accent divider bar (same as slide 1)
5. Subtitle: "Protecting organizations from hiring fraud, synthetic identities, and deepfake attacks." (white at 70% opacity, 1.2rem)
6. **Two CTA buttons** stacked vertically (max-width 400px, centered, gap 20px):
   - **Primary:** Green bg (#61F393), navy text, bold, padding 18px 36px, rounded 12px, full width. Text: "getclarity.ai" → links to https://getclarity.ai
   - **Secondary:** Transparent bg, white text, 2px white border (30% opacity), padding 16px 36px, rounded 12px, full width. Text: "demo@getclarity.ai" → mailto:demo@getclarity.ai

**Mobile:** Same layout, buttons full width.

---

## CSS Component Reference

```css
/* Reusable components — implement these as classes */

.logo-chip {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 8px 12px;
    font-size: 0.8rem;
    font-weight: 600;
    background: white;
}
.logo-chip img { height: 18px; }

.int-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    padding: 12px 0;
    border-bottom: 1px solid var(--border);
}

.int-row-label {
    font-weight: 700;
    font-size: 0.8rem;
    min-width: 80px;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.demo-frame {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
    border: 1px solid var(--border);
}
.demo-frame img { width: 100%; display: block; }

.badge {
    display: inline-block;
    background: var(--accent-muted);
    color: var(--accent);
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 4px 12px;
    border-radius: 6px;
}

.card {
    background: white;
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
}

.section-label {
    color: var(--accent);
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 2px;
    font-weight: 700;
    margin-bottom: 12px;
}

.subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.6;
    max-width: 700px;
    margin: 0 auto;
}

.danger { color: var(--danger); }
.accent { color: var(--accent); }

.slide-dark {
    background: linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%);
}
```

---

## Quality Standards

1. **Every slide must feel visually distinct from the previous one.** Vary layouts: stats grid → quote card → failure gauges → horizontal flow → screenshot cards → convergence diagram → proof cards → logo rows → screenshot hero → step cards → dark close.

2. **Visual hierarchy is everything.** Big numbers should be BIG. Labels should be small. Descriptions should be secondary color. The eye should always know where to look first.

3. **Whitespace is a feature, not wasted space.** Don't cram. Let elements breathe. If a slide feels crowded, remove something.

4. **Mobile must be DESIGNED, not squeezed.** Don't just shrink desktop. Rethink layouts for vertical screens. Stack gracefully. Touch targets should be comfortable.

5. **Use `<img src>` for all logos and images, not inline SVGs.** Inline SVGs get corrupted during edits. Only exception: simple decorative SVG icons (arrows, shapes) that are part of the layout.

6. **Test all asset paths.** Every `../../shared/...` reference must resolve correctly from the file's location.

7. **No placeholder content.** Every word in this spec is the final copy. Implement exactly as written.

8. **The Clarity star SVG path data for the title slide background:**
```html
<svg viewBox="0 0 60 60" fill="none">
    <path d="M39.48 16.28L32.35 0L27.81 10.48H27.81L33.1 22.71L45.23 28.05L45.24 28.04L55.63 23.47L39.48 16.28Z" fill="#0a1628"/>
    <path d="M39.48 39.81L55.62 32.62L45.24 28.05L33.11 33.38L27.81 45.62H27.81L27.82 45.63L32.35 56.1L39.48 39.81Z" fill="#0a1628"/>
    <path d="M16.15 39.82L23.28 56.1L27.82 45.62H27.82L22.53 33.39L10.4 28.05L10.39 28.06L0 32.62L16.15 39.82Z" fill="#61F393"/>
    <path d="M16.15 16.28L0 23.48L10.39 28.05L22.52 22.71L27.81 10.48H27.81L27.81 10.47L23.28 0L16.15 16.28Z" fill="#61F393"/>
</svg>
```

---

**Build this as a single, complete HTML file. Make it spectacular.**
