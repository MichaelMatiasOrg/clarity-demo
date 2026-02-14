# Claude Code Prompt — CISO Shareable Deck v2

Build a 13-slide CISO shareable deck for Clarity (employee identity security company). Single HTML file with embedded CSS/JS. Output file: `~/clawd/clarity-demo/presentations/ciso-shareable-v2/index.html`

## Brand Guidelines
- Font: Manrope (Google Fonts)
- Background: #F0F4F8 (light blue-gray)
- Text: #0a1628 (navy)
- Accent: #61F393 (green)
- Danger: #EF4444 (red)
- Cards: white with 1px #E2E8F0 border, border-radius 16px
- NO emojis anywhere
- Dark navy navbar at top with white Clarity logo linking to homepage

## Assets (relative paths from file location)
- Brand logos: `../../shared/brand/clarity-logo.svg`, `clarity-logo-white.svg`, `clarity-logo-green-white.svg`
- Screenshots: `../../shared/screenshots/employee-dashboard.png`, `during-interview.png`, `pre-interview.png`, `threat-intel-dashboard.jpg`, `continuous.png`
- People: `../../shared/people/charles-carmakal.png`
- Company logos in `../../shared/logos/`: okta.svg, ashby.svg, workday.svg, servicenow.svg, greenhouse.svg, mandiant.svg, onfido.svg, lever.svg, icims.svg, microsoft-entra-id.svg, splunk.svg, sentinel.svg, slack.svg, zoom.svg, teams.svg, jira.svg
- Compliance in `../../shared/compliance/`: soc2.png, gdpr.png, ccpa.png, iso27001.png

## Functionality
- Arrow keys / swipe for navigation
- Slide counter bottom-right (1 / 13)
- Smooth CSS transitions between slides
- Staggered entrance animations (classes: `anim`, `d1`-`d7` for delays)
- All slides scrollable (overflow-y: auto) to prevent content cutoff
- Mobile responsive: stack grids to 1-2 columns, use `.mobile-hide` / `.mobile-only` classes for layout variants
- Dark closing slide uses class `slide-dark` with dark background

## THE 13 SLIDES

### SLIDE 1 — Title
- Clarity logo centered, large
- H1: "Employee Identity Security"
- Green accent bar divider (80px wide, 4px tall)
- Subtitle: "Protecting organizations from hiring fraud, synthetic identities, and deepfake attacks — across the entire employee lifecycle"
- Trust bar: "Protecting companies with 1M+ candidates · 5,000+ employees" (white card, inline-block)
- Decorative Clarity star SVGs in background corners (low opacity)

### SLIDE 2 — The Blind Spot
- Section label: "The Blind Spot"
- H2: "The hiring process was **never built with security in mind**" (red highlight on danger text)
- Visual: 3-column grid:
  - Left panel "HR / Talent Acquisition: The Hiring Pipeline" — 5 numbered steps: Source Candidates, Screen Resumes, Video Interview, Extend Offer, Onboard Employee
  - Center: red dashed vertical line with "NO CONNECTION" badge (red bg, white text, uppercase)
  - Right panel "Security Team: Their Toolkit" — IAM/SSO, SIEM/SOC, EDR/XDR, Background Checks, then a red-tinted row "No hiring pipeline visibility"
- Bottom dark bar: "**Remote hiring made it worse.** You're extending access to people you've never physically met — and your security team isn't part of the process."

### SLIDE 3 — Escalation Timeline
- Section label: "The Evolving Threat"
- H2: "It started small. **It didn't stay that way.**"
- 5 rows, each progressively larger/more intense:
  - 2020 (small, muted, opacity 0.7): "Remote hiring goes mainstream." — video calls, no safeguards
  - 2022 (slightly bigger, opacity 0.8): "Bait-and-switch attacks emerge." — different person shows up day one
  - 2024 (red left border, danger styling): "Deepfakes hit hiring." — $25M Hong Kong deepfake. Show "$25M" stat on right side
  - 2025 (larger, pink gradient bg): "Nation-state infiltration." — KnowBe4 hired NK operative, DOJ 300+ companies. Show "300+" on right
  - 2026 (biggest, dark navy bg, white text): "Industrialized identity fraud." — Gartner 1 in 4 by 2028. Show "1 in 4" in green accent on right

### SLIDE 4 — Scale + Credibility
- Section label: "Scale of the Problem"
- H2: "The hiring fraud epidemic is **here**"
- 4-column stat cards (danger-colored big numbers, ~2.8rem):
  - "1 in 4" — candidate profiles fake by 2028 (Gartner Research)
  - "1,800+" — NK applicants blocked by Amazon (Dark Reading, 2025)
  - "300+" — US companies infiltrated by NK operatives (DOJ Indictment, 2025)
  - "220%" — increase in NK infiltrations in 12 months (Fortune, 2025)
- Large quote card below with green left border (6px): Charles Carmakal circular photo (90px, from `../../shared/people/charles-carmakal.png`), quote: *"Almost every CISO of a Fortune 500 company that I've spoken to — I'll just characterize as **dozens** — have admitted that they had a North Korean IT worker problem."* Attribution: "Charles Carmakal, CTO, Mandiant" + Mandiant logo

### SLIDE 5 — The Gap
- Section label: "The Gap"
- H2: "Every check has a **breaking point**"
- Subtitle: "Security teams bolt on tools after the fact — but none of them were designed for this threat."
- 4 cards with circular "gauge" indicators and diagonal "stamp" ribbons (rotated 35deg, positioned top-right):
  - Background Checks: 0% gauge (red border-top only), "BYPASSED" red stamp. "Synthetic identities have no criminal record. 'Clean' result on a person who doesn't exist."
  - IDV Alone: ~90% gauge (amber border-top + border-right), "WEAK" amber stamp. "10%+ inconclusive. High-quality fakes and AI selfies defeat document checks regularly."
  - Deepfake Detection: ~80% gauge (red, 3/4 border), "ARMS RACE" red stamp. "Standalone tools plateau at ~80%. Attackers adapt faster than models retrain."
  - Siloed Tools: X icon in red circle, "BLIND SPOTS" red stamp. "No cross-signal analysis. Bypass one check and the rest never know."
- Bottom dark bar: "**The result:** A determined fraudster bypasses every single one of these. You need all signals, correlated, in real time."

### SLIDE 6 — Solution Hero
- Section label: "The Solution"
- H2: "End-to-End **Identity Security**" (green accent on "Identity Security")
- Subtitle: "Clarity bridges the gap — embedding identity verification at every critical touchpoint across the employee lifecycle."
- Desktop: Horizontal flow of 5 boxes connected by green arrows: Pre-Hire (Resume Screen) → Interview (Live Monitor) → Onboarding (Day 1 Check) → MFA Reset (Help Desk) → Continuous (Monitoring). Each box has SVG icon, bold label, subtitle. Green 2px borders, border-radius 14px.
- Mobile: Vertical list layout (`.mobile-only`) with badge + content rows
- Below: "↺ Continuous cycle — identity verified at every touchpoint"
- 4 technology summary cards: Biometric (Face Match & Liveness), Deepfake (AI Media Detection), Document (ID & Resume Verification), Behavioral (Anomaly Detection)

### SLIDE 7 — Three Experiences
- Section label: "Built for Everyone"
- H2: "One platform, **three experiences**"
- 3 equal columns with image/visual at top (180px height, object-fit cover, border-radius top):
  - CISO: `employee-dashboard.png` → "Command Center" — full pipeline visibility, real-time risk scores, instant alerts
  - Candidate: `pre-interview.png` → "Seamless Verification" — frictionless identity verification
  - Enterprise: Logo chips (Okta, Ashby, Workday, ServiceNow, Greenhouse) on #F0F4F8 bg → "Native Integrations" — embedded in existing ATS, HRIS, identity workflows. No rip-and-replace.

### SLIDE 8 — Detection Technology (The Brain)
- Section label: "Detection Technology"
- H2: "40+ signals per candidate. **One risk score.**" (green accent)
- Subtitle: "Multiple signal types converge in Clarity's AI engine for a unified risk assessment."
- 3-column layout:
  - Left: 5 signal category rows (green-bg icon box + bold title + description):
    - Video Analysis: Face swap artifacts, GAN signatures, temporal inconsistencies
    - Voice Biometrics: Cloning detection, audio-visual sync, speaker consistency
    - Document Forensics: Resume anomalies, ID manipulation, photo forensics
    - Biometric Match: Cross-document face matching, liveness verification
    - Network Intelligence: Dark web monitoring, threat database cross-reference
  - Center: Convergence — vertical line → 100px dark circle with Clarity white logo + "AI ENGINE" label → green vertical line → down arrow
  - Right: `during-interview.png` in demo frame + card below: "Risk score: **94/100** — High risk detected"

### SLIDE 9 — Proof (Expanded)
- Section label: "Proven Results"
- H2: "Tested. Validated. **Proven.**"
- 3 equal proof cards (white, rounded 20px, centered text):
  - Fortune 500 Test badge → Big "**6** / 9" (red 6, 3.5rem) → "bad actors identified" → "A Fortune 500 insurance company seeded 9 known bad actors into their pipeline. Clarity caught 6 from the resume alone — before any interview."
  - 3rd Party Validated badge → "**Top 3**" (green, 3.5rem) → "globally for deepfake detection" → "Ranked among the top 3 worldwide for deepfake detection accuracy by independent third-party testing organizations."
  - Strategic Partner badge → Onfido logo (48px, from `../../shared/logos/onfido.svg`) → "Onfido IDV Partnership" → "Partnered with Onfido for enterprise-grade identity document verification, combining IDV with our deepfake and behavioral analysis."

### SLIDE 10 — Integrations + Compliance
- Section label: "Enterprise Ready"
- H2: "Fits into your **existing stack**"
- Subtitle: "Deploy in days, not months. API-first architecture with pre-built connectors."
- Integration rows (flex row: bold label + wrapped logo chips):
  - ATS / HR: Greenhouse, Workday, Ashby, Lever, iCIMS
  - Identity: Okta, Microsoft Entra ID
  - ITSM: ServiceNow, Jira Service Management
  - SIEM: Splunk, Microsoft Sentinel
  - Comms: Slack, Zoom, Microsoft Teams
- Compliance section below: "Compliance & Certifications" label, then flex row of badge cards:
  - SOC 2 Type II (soc2.png), GDPR (gdpr.png), ISO 27001 (iso27001.png), CCPA (ccpa.png), EU AI Act (styled: blue square with clock icon + text)

### SLIDE 11 — Free Threat Intel Scan
- Section label: "What's Next"
- H2: "Free Threat Intelligence **Scan**"
- Subtitle: "Share your candidate pipeline. We'll cross-reference it against our threat database — on us."
- `threat-intel-dashboard.jpg` in demo frame (max-height 45vh, centered)
- 3 stats row: "10,000+" known threat identifiers, "48h" results turnaround, "Free" no commitment required

### SLIDE 12 — Full POC
- Section label: "Go Deeper"
- H2: "Fully Integrated **Proof of Concept**"
- Subtitle: "Ready for a comprehensive evaluation? We'll integrate with your stack and run live verification."
- 3 step cards with green numbered circles (50px, border-radius 12px):
  1. Integration Setup — Connect to ATS, HRIS, identity platform. Pre-built connectors.
  2. Live Verification — Run real candidates through. See detection in action.
  3. Measure Results — Full report with detection rates, false positive analysis, ROI projection.
- "Typical POC timeline: **4–6 weeks**" badge below

### SLIDE 13 — Closing (Dark)
- `slide-dark` class — dark navy background with subtle radial gradient
- `clarity-logo-green-white.svg` centered (60px)
- H1: "Employee Identity Security" (white, 3.2rem)
- Green accent divider
- Subtitle (muted white, 70% opacity): "Protecting organizations from hiring fraud, synthetic identities, and deepfake attacks."
- Two CTA buttons stacked (max-width 400px, centered):
  - Green bg: "getclarity.ai" → links to https://getclarity.ai
  - White border (30% opacity): "demo@getclarity.ai" → mailto link

## CSS Component Classes

```css
.logo-chip — white pill: display flex, align-items center, gap 8px, border 1px solid #E2E8F0, border-radius 8px, padding 8px 12px, font-size 0.8rem, font-weight 600, background white
.int-row — display flex, flex-wrap wrap, align-items center, gap 10px, padding 12px 0, border-bottom 1px solid #E2E8F0
.int-row-label — font-weight 700, font-size 0.8rem, min-width 80px, color var(--text-secondary), text-transform uppercase, letter-spacing 1px
.demo-frame — border-radius 12px, overflow hidden, box-shadow 0 8px 32px rgba(0,0,0,0.12), border 1px solid #E2E8F0
.badge — display inline-block, background var(--accent-muted), color var(--accent), font-size 0.7rem, font-weight 700, text-transform uppercase, letter-spacing 1px, padding 4px 12px, border-radius 6px
.card — white bg, border 1px solid var(--border), border-radius 16px, padding 24px, box-shadow 0 4px 20px rgba(0,0,0,0.06)
.section-label — color var(--accent), text-transform uppercase, font-size 0.7rem, letter-spacing 2px, font-weight 700
.subtitle — font-size 1.1rem, color var(--text-secondary), line-height 1.6, max-width 700px, margin 0 auto
.danger — color var(--danger)
.accent — color var(--accent)
.slide-dark — background linear-gradient(135deg, #0a1628 0%, #0d1f3c 50%, #0a1628 100%)
```

## CSS Variables
```css
--bg-primary: #F0F4F8
--text-primary: #0a1628
--text-secondary: #64748B
--accent: #61F393
--accent-muted: rgba(97, 243, 147, 0.1)
--danger: #EF4444
--danger-muted: rgba(239, 68, 68, 0.08)
--border: #E2E8F0
```

## Mobile Responsive Rules
- Below 768px: grid columns collapse to 1-2 columns
- `.mobile-hide` = display none on mobile
- `.mobile-only` = display none on desktop, visible on mobile
- Slide 2 (blind spot): stack HR and Security panels vertically, gap between them with horizontal red line + NO CONNECTION badge
- Slide 6: replace horizontal lifecycle flow with vertical list
- Slide 7: stack 3 experience cards vertically
- Slide 8: stack detection layout vertically (signals → engine → screenshot)
- Font sizes scale down ~15-20% on mobile
- All slides: padding reduced on mobile
