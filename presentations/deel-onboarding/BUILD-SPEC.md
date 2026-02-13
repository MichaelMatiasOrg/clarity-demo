# Deel Onboarding Presentation — Build Spec

## Goal
Recreate the Google Slides deck as an HTML presentation at `~/clawd/clarity-demo/presentations/deel-onboarding/index.html`

## Brand Guidelines
Read `~/clawd/clarity-demo/docs/BRAND.md` for full brand rules. Key points:
- Font: Manrope (import from Google Fonts)
- Nav bar: dark navy `#0a1628` with Clarity white logo linking to `../../index.html`
- NO emojis in the presentation
- Use official Clarity logo SVGs from `../../shared/brand/`

## Design from Original
The original deck uses a **dark theme** (this is appropriate for presentations):
- Background: Dark navy `#0a1628` with subtle teal/green gradient arc decorations in corners
- Text: White `#FFFFFF`
- Accent: Clarity Green `#61F393`
- Co-branding: Clarity logo + Deel logo (bold white "deel." text) top-left on title slide
- Section headers have the gradient arc decoration (concentric circles in teal/green)

## Slide Content (28 slides)

### Slide 1: Title
- Clarity + Deel logos top-left
- "Clarity Onboarding"
- "February | 2026"
- Gradient arc decoration top-right

### Slide 2: Today's Scope
- Introductions
- Short Clarity Demo - Product & Technology
- Deel's Security Process - Albert
- Roadmap for integration
- Next steps
- Q&A

### Slide 3: Value Prop
- Clarity logo icon (green)
- "Clarity provides an end-to-end solution to ensure you never hire a bad-actor!"

### Slide 4: Hiring Funnel
- "Clarity's hiring protection within the funnel"
- Flow: Sourcing → 1st Video Call → ... → Last Call → Offer
- Show where Clarity Start and Clarity Finish bracket the process
- Below: Cross-Biometric Validation, Deepfake Detection, Identity Verification, Risk Analysis

### Slide 5: Interview Deepfake Detection
- "Clarity's Interview Deepfake Detection"
- "Triggered on each interview throughout the funnel"

### Slide 6: Security Agent
- "Clarity's Security Agent - look and feel"
- "Syncs and joins all Google Meet & Zoom calls from first trigger to final risk (end-to-end security logic)"
- Shows product screenshots

### Slide 7: Deepfake Detection
- "Clarity's Deepfake Detection"
- Three items: Audio deepfake detection, Video deepfake detection, Expert Reviewer

### Slide 8: Deepfake Reporting
- "Deepfake Detection Reporting Example"
- Shows reporting UI mockup

### Slide 9: Proxy Candidate Detection
- "Clarity's Proxy Candidate Detection"
- "Triggered behind the scenes after each interview + Offer stage"

### Slide 10: Proxy Candidate Detection Detail
- "Proxy Candidate Detection"
- Flow: Interview 1 → Interview 2 → Cross-Biometric Comparison
- LinkedIn Photo (*If LinkedIn is present)
- Offer Stage → Expert Reviewer

### Slide 11: Proxy Reporting
- "Proxy Candidate Reporting Example"

### Slide 12: Identity Verification
- "Clarity's Identity Verification"
- "Triggered behind the scenes at the Offer stage"

### Slide 13: Candidate IDV Invitation
- "Candidate Invitation for IDV"
- Note: Clarity will share recording after call

### Slide 14: Identity Verification Detail
- Liveness check, Document verification, Deepfake Detection, Biocompare to Interviews, Expert Reviewer

### Slide 15: IDV Reporting
- "Identity Verification Reporting Example"

### Slide 16: Final Risk Analysis
- "Final Risk Analysis"
- "Triggered behind the scenes at the Offer stage"

### Slide 17: Risk Analysis Detail
- Device Intelligence, CV Analysis, Expert Reviewer, Deepfake Detection, Proxy Candidate Detection, Risk Analysis Engine, IDV

### Slide 18: Risk Analysis Reporting
- "Risk Analysis Reporting Example"

### Slide 19: Full Flow Diagram
- Complex flowchart showing the entire candidate journey
- Start → User consent → Security bot checks → Flagged/Positive paths → IDV → Employment Decision

### Slide 20: Implementation Timeline
- "When are we implementing each component?"

### Slide 21: First Integration
- "What Will Be Integrated First?"
- Table with Integrations (Ashby, Slack, Interview Security Agent, SAFE Platform) and Security Features

### Slide 22: Deployment 2 (End of Q1)
- Same table with more items highlighted

### Slide 23: Deployment 3 (Q2)
- Same table fully highlighted

### Slide 24: Deployment Plan
- "Deployment Plan (First Phase)"
- Integration Success definition

### Slide 25: How Will We Do It
- Timeline: Kickoff → Integration → Alignment → Testing → 10% → 20% → 50% → Full Rollout
- Weeks 1-5

### Slide 26: Next Steps
- Confirmation of stages for Clarity triggers
- Alignment on reporting wordings
- Create dedicated API key
- SCIM & RBAC scoping for SAFE

### Slide 27-28: Q&A / Close
- "Questions & Alignment"

## Technical Requirements
1. Single HTML file with all slides
2. Keyboard navigation (← → arrows, Escape for overview)
3. Slide counter (e.g., "3 / 28")
4. Fullscreen support (F key)
5. Consistent nav bar at top linking home
6. Reference images are in `reference/` folder — look at them for visual guidance
7. For product screenshots/mockups, use placeholder boxes with labels (we'll add real screenshots later)
8. The Deel logo is just bold white text "deel." — no need for an SVG

## File Structure
```
presentations/deel-onboarding/
├── index.html          # The presentation
├── BUILD-SPEC.md       # This file
└── reference/          # Original slide screenshots
```

## After Building
- Commit and push to `MichaelMatiasOrg/clarity-demo`
- Add link to `../../index.html` homepage
