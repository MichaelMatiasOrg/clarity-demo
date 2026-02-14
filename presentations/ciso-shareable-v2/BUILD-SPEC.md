# CISO Shareable Deck V2 — Build Spec

## CRITICAL RULES
- Font: Manrope (Google Fonts)
- Light theme: #F0F4F8 bg, white cards, navy text #0a1628, green accent #61F393, danger red #EF4444
- NO EMOJIS anywhere
- Use `<img src>` for all logos/SVGs — NEVER inline SVG for logos (they corrupt during edits)
- All assets use relative paths: `../../shared/logos/`, `../../shared/brand/`, `../../shared/screenshots/`, `../../shared/people/`, `../../shared/compliance/`
- Dark navy nav bar (56px height) with white Clarity logo linking to `../../index.html`
- Every slide must look great on BOTH desktop AND mobile (768px breakpoint)
- Slides use keyboard nav (left/right arrows), slide counter bottom-right
- Staggered entrance animations (opacity + translateY) like v1
- Each slide should feel visually DISTINCT from the previous one
- Single HTML file with embedded CSS/JS

## BRAND COLORS
```
--bg-primary: #F0F4F8
--bg-card: #FFFFFF  
--text-primary: #0a1628
--text-secondary: #64748B
--accent: #61F393
--accent-muted: #E8FFF0
--border: #E2E8F0
--danger: #EF4444
--danger-muted: #FEE2E2
```

## AVAILABLE ASSETS
Logos: ashby.svg, azure-ad.svg, checkr.svg, crowdstrike.svg, deel.svg, greenhouse.svg, okta.svg, okta-wordmark.svg, onfido.svg, servicenow.svg, slack.svg, splunk.svg, sentinel.svg, workday.svg, zoom.svg, teams.svg, jira.svg, mandiant.svg, globe-life.svg
Brand: clarity-logo.svg, clarity-logo-white.svg, clarity-logo-green-white.svg
People: charles-carmakal.png
Screenshots: employee-dashboard.png, during-interview.png, pre-interview.png, threat-intel-dashboard.jpg, continuous.png
Compliance: soc2.png, gdpr.png, iso27001.png, ccpa.png

## THE 12 SLIDES

### Slide 1: TITLE + TOPIC INTRO
**Core message:** "This is Clarity. We secure employee identity across the entire lifecycle."
**Visual approach:** Clarity logo centered, "Employee Identity Security" as main headline. Below: a one-line subtitle that introduces the TOPIC — something like "Protecting organizations from hiring fraud, synthetic identities, and deepfake attacks." Bottom: credibility bar "Protecting companies with 1M+ candidates · 5,000+ employees". Clean, confident, premium feel. Decorative Clarity star shapes in background (use the 4-pointed star SVG pattern from v1).

### Slide 2: THE PROBLEM (NEW SLIDE)
**Core message:** "The hiring process was never built with security in mind. HR and Security operate in silos."
**Visual approach:** This is conceptual — show the GAP between HR and Security. Left side: "HR Process" flow (Source → Screen → Interview → Offer → Onboard) in a clean pipeline. Right side: "Security Team" with their tools (SIEM, IAM, EDR). Between them: a visible gap/divide — maybe a red dashed line or actual visual separation. The point is visceral: these two worlds don't touch. Below: a callout — "Remote hiring made it worse. You're hiring people you've never physically met." Make this visually striking — not just text cards. The gap itself should be the visual argument.

### Slide 3: ESCALATION TIMELINE
**Core message:** "And the threat is accelerating — from opportunistic fraud to nation-state infiltration."
**Visual approach:** Escalating cards, each year physically bigger and more alarming. 2020 = small, muted. 2022 = slightly larger. 2024 = red-accented, $25M stat. 2025 = larger still, DOJ 300+. 2026 = dark navy block, "1 in 4" Gartner prediction. The SIZE ESCALATION is the argument. Port the design from v1 (it works well).

### Slide 4: SCALE + CREDIBILITY
**Core message:** "The numbers are staggering, and your peers know it."
**Visual approach:** 4 stat cards in a grid (1 in 4, 1800+, 300+, 220%) with sources. Below: Charles Carmakal quote card with his photo (charles-carmakal.png) and Mandiant logo. Green left border on the quote card. Port from v1.

### Slide 5: THE GAP (Two Parts)
**Core message:** "Security teams try to bolt on solutions — but they're not part of the process, and the tools they use are broken."
**Visual approach:** 
PART 1 (top): Show the HR/Security disconnect visually. Maybe a banner or callout: "Security teams aren't embedded in the hiring workflow. They bolt on tools after the fact." Keep it concise.
PART 2 (bottom): 4-column failure gauges from v1 — Background Checks (BYPASSED, 0%), IDV Alone (WEAK, ~90%), Deepfake Detection (ARMS RACE, ~80%), Siloed Tools (BLIND SPOTS, ✕). Each with diagonal stamp badge. Dark bottom bar: "A determined fraudster bypasses every single one. You need all signals, correlated, in real time."

### Slide 6: CLARITY'S SOLUTION (Hero Slide)
**Core message:** "Clarity bridges the gap — identity security embedded across the entire employee lifecycle."
**Visual approach:** This comes RIGHT after the gap — maximum payoff. Header: "End-to-End Identity Security" (NOT "Gauntlet"). Show the employee identity lifecycle as a horizontal flow: Pre-Hire → Interview → Onboarding → MFA Reset → Continuous, each with an icon and short label. Below the flow: a tech summary bar with 4 pillars (Biometric Face Match, Deepfake AI Detection, Document Verification, Behavioral Analysis). This is THE hero slide — make it feel like THE answer. Green accents, confident layout.

### Slide 7: THREE EXPERIENCES
**Core message:** "Built for every stakeholder in your organization."
**Visual approach:** Three equal panels side by side:
1. **For the CISO** — "Command Center" — show employee-dashboard.png screenshot in a demo frame. Caption: "Full visibility. Real-time risk scores. Instant alerts."
2. **For the Candidate/Employee** — "Seamless Verification" — show during-interview.png or pre-interview.png. Caption: "Frictionless identity verification at every touchpoint."
3. **For the Enterprise** — "Native Integrations" — show a cluster of integration logos (Okta, Ashby, Workday, ServiceNow). Caption: "Embedded in your existing workflows."
Each panel is a white card with a screenshot/visual at top and caption below. Make them visually distinct (different screenshot types: dashboard vs face vs logos).

### Slide 8: DETECTION TECHNOLOGY (The Brain)
**Core message:** "40+ signals per candidate. One unified risk assessment."
**Visual approach:** This should feel like a CONVERGENCE diagram. Multiple signal categories on the left side flowing into a central "brain"/AI engine, which outputs a single risk score on the right. Signal categories: Video Analysis, Voice Biometrics, Document Forensics, Behavioral Signals, Network Intelligence, Biometric Match. The central element could be a circle or hexagon labeled "Clarity AI Engine" with the accent color. Right side shows the output: a risk score gauge or the during-interview.png screenshot showing 94/100. Make it feel like many inputs → one smart decision.

### Slide 9: PROOF (Expanded Case Study)
**Core message:** "Tested. Validated. Proven."
**Visual approach:** Three proof cards in a row, each visually distinct:
1. **CV Analysis** — "Fortune 500 Test" badge. "A Fortune 500 insurance company seeded 9 known bad actors. Clarity identified 6 from the resume alone — before any interview." Show the 6/9 visual (figures or a simple fraction).
2. **Deepfake Detection** — "3rd Party Validated" badge. "Ranked top 3 globally for deepfake detection accuracy by independent testing." 
3. **IDV Partnership** — "Strategic Partner" badge. "Partnered with Onfido for enterprise-grade identity document verification." Show onfido.svg logo.
Each card should feel like a credential/proof point. Maybe numbered or with distinct accent colors.

### Slide 10: INTEGRATIONS + COMPLIANCE
**Core message:** "Drops into your existing stack. Meets your compliance requirements."
**Visual approach:** Top section: Integration logos in a clean grid/chip layout — Okta, ServiceNow, Workday, Greenhouse, Ashby, Splunk, Sentinel, Slack, Teams, Zoom, Jira. Bottom section: Compliance badges in a row — SOC 2 (soc2.png), GDPR (gdpr.png), ISO 27001 (iso27001.png), CCPA (ccpa.png), EU AI Act (styled badge, no image — use a blue circle with stars). Port from v1.

### Slide 11a: FREE THREAT INTEL SCAN
**Core message:** "Let us scan your pipeline — on us."
**Visual approach:** Generous white space. A compelling offer card: "Free Threat Intelligence Scan" as the headline. Subtitle: "Share your candidate pipeline. We'll cross-reference it against our threat database and show you what's hiding." Maybe show the threat-intel-dashboard.jpg screenshot below in a demo frame. This is a low-commitment entry point. Green accent on the CTA area. Not pushy — genuinely helpful.

### Slide 11b: FULL POC PARTNERSHIP  
**Core message:** "Ready to go deeper? Let's run a fully integrated proof of concept."
**Visual approach:** Slightly more premium feel than 11a. Three steps: (1) Integration Setup — connect to your ATS + HRIS, (2) Live Verification — run real candidates through the platform, (3) Measure Results — full report with detection rates and ROI. Each step is a numbered card. Bottom: "Typical POC: 4-6 weeks" or similar timeline indicator.

### Slide 12: CLOSING
**Core message:** "Let's talk."
**Visual approach:** Dark navy background (#0a1628). Clarity logo (white version). Simple: "Employee Identity Security" tagline. Contact: getclarity.ai. Clean, confident close. No "send us your CVs" — just an invitation to connect.

## TECHNICAL REQUIREMENTS
- Slide navigation: arrow keys, touch swipe on mobile
- Slide counter: "1 / 13" bottom right (13 slides total including 11a and 11b)
- Progress bar at top (thin green line)
- Smooth transitions between slides (opacity fade)
- Mobile: stack grids vertically, reduce font sizes, hide complex visuals and show simplified alternatives
- All text readable without zooming on mobile
- Print-friendly: slides should look decent if printed/PDF'd
