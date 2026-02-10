# CLAUDE.md - Clarity CISO Demo Project

## What This Is
A 60-minute presentation for CISO sessions. Story-driven demo showing how Clarity catches hiring fraud and deepfakes.

**Live:** https://michaelmatiasorg.github.io/clarity-demo/presentation.html
**Repo:** https://github.com/MichaelMatiasOrg/clarity-demo

## Presentation Mode
- **Arrow keys** (←→ or ↑↓) navigate between slides
- **Space/PageDown** = next, **PageUp** = previous
- **Home/End** = first/last slide
- Slides snap to full screen, scrollbar hidden

## Current Focus: Identity Risk (NOT Skills)
**Key pivot (2026-02-10):** Removed "AI Cheating Detection" from the storyline.
- CISOs care more about **identity risks** than skills risks
- Focus on: Is this person who they claim to be?
- NOT: Did they cheat on an assessment?

## Terminology
- ✅ **Applicant Screening** — pre-hire CV/LinkedIn verification
- ❌ ~~Background Verification~~ — sounds like traditional background checks
- ✅ **Employee Identity Lifecycle** — the ecosystem of verification moments

## Current Structure (33 slides)

### Act 1: The Attack Story (slides 1-11)
- Hook: "Last night I wanted to break into Vero Financial"
- Marcus Chen: synthetic identity created in one night
- Background check passes — "he was born yesterday"
- **$25 Million** deepfake headline (Arup) — redesigned for impact
- "Would Marcus get an offer at YOUR company?"

### Act 2: The Scale (slides 12-17)
- 50x a day / numbers game
- Bad hire costs ($240K, 6 months) — title on ONE LINE
- Malicious insider ($4.99M ~~$240K~~, 292 days ~~6mo~~) — show comparison
- Fortune 500 quote (NK IT workers)
- Stats: 1 in 4 fake by 2028, 300+ NK workers, 220% increase

### Act 3: The Solution (slides 18-25)
- 3 validation pillars (exist? / who they claim? / story real?)
- **3 moments where Clarity catches what others miss:**
  1. Pre-interview: catches synthetic profiles
  2. Mid-interview: real-time deepfake detection
  3. Day 90: continuous verification

### Act 4: Two Pillars (slides 26-29)
- **Pillar A:** Deep Workflow Integration
  - ATS: Greenhouse, Lever, Workday
  - IAM/HRIS: **Okta, Workday, ServiceNow** ← enterprise priorities
  - Video: Zoom, Teams, Meet
  - Comms: Slack, MS Teams
- **Pillar B:** Deep Security in Background
  - Deepfake Detection, Biometric Match, Dark Web Hunting, Identity Signals
  - SIEM: Splunk, Sentinel, CrowdStrike, Elastic, **Okta**

### Act 5: Lifecycle & Close (slides 30-33)
- **Employee Identity Lifecycle** — orbital visualization with animations
  - Center: Employee hub (pulsing)
  - Onboarding = "The Front Door" (entry gate to more use-cases)
  - MFA Resets, Privileged Access, Periodic Checks orbit around
  - Rotating orbital rings, flowing arrows
- Promise: "Hire like you always have, without bad actors"
- Close: "Never hire a bad-actor. Get Clarity."

## Design Principles

### Michael's Preferences — LEARNED
- **One-line titles** — no awkward wrapping, use `white-space: nowrap` if needed
- **Show comparisons** — crossed-out old values next to new (e.g., ~~$240K~~ → $4.99M)
- **Cite sources** — always add citations for stats (SHRM, IBM, Ponemon)
- **Actual logos** — never text placeholders; use SVG icons from brand kits
- **Geometric visualizations** — orbits, lifecycles, ecosystems (not just cards)
- **Subtle animations** — rotating rings, pulsing elements, flowing arrows
- **Presentable** — keyboard navigation, full-screen slides, hidden scrollbar

### Visual Style
- **Light theme** — soft blue-gray `#F0F4F8` background
- **Text:** Navy `#0a1628` (primary) + Green `#61F393` (accent)
- **Manrope font** — brand font
- **Enterprise-grade** — professional, not playful

### Logos (local SVGs in /logos/)
Working icons: Greenhouse, Okta, Zoom, Slack, Splunk, CrowdStrike, Elastic, Microsoft
Text wordmarks: Lever, Workday, ServiceNow (couldn't get official SVGs)

## Key Messages for CISOs
1. Hiring is the new attack surface
2. Traditional checks don't catch synthetic identities
3. Deepfakes make "cameras on" insufficient
4. Need continuous verification throughout employee lifecycle
5. Clarity integrates into existing workflow (ATS, HRIS, SIEM)
6. **Okta, ServiceNow, Workday** — enterprise IAM priorities

## Narration Audio
- **Voice:** Chad (ElevenLabs voice ID: `WQcQveC0hbQNvI69FWyU`)
- **Files:** `audio/narration/slide-{0-31}.mp3`
- **Scripts:** `narration.js` contains all slide text
- **Model:** eleven_multilingual_v2

## Open Items
- [ ] Get proper SVG logos for Lever, Workday, ServiceNow
- [ ] Add actual product screenshots when available
- [ ] Consider adding more animated slides
