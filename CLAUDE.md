# CLAUDE.md - Clarity CISO Demo Project

## What This Is
A 60-minute presentation for CISO sessions. Story-driven demo showing how Clarity catches hiring fraud and deepfakes.

**Live:** https://michaelmatiasorg.github.io/clarity-demo/presentation.html
**Repo:** https://github.com/MichaelMatiasOrg/clarity-demo

## Current Structure (as of 2026-02-10)

### Act 1: The Attack Story (slides 1-11)
- Hook: "Last night I wanted to break into Vero Financial"
- Marcus Chen: synthetic identity created in one night
- Background check passes — "he was born yesterday"
- Arup $25M deepfake headline — deepfakes bypass interviews
- "Would Marcus get an offer at YOUR company?"

### Act 2: The Scale (slides 12-17)
- 50x a day / numbers game
- Bad hire costs ($240K) + insider threat ($4.99M)
- Fortune 500 quote (NK IT workers)
- Stats: 1 in 4 fake by 2028, 300+ NK workers, 220% increase
- "This is the new attack surface"

### Act 3: The Solution - Use Cases First (slides 18-25)
- What's needed: security overlay for hiring
- 4 validation pillars (exist? / who they claim? / story real? / AI cheating?)
- Clarity intro
- **"Let me show you how it works"** — 3 moments:
  1. Pre-interview: catches synthetic profiles
  2. Mid-interview: real-time deepfake detection
  3. Day 90: continuous verification

### Act 4: How It's Built (slides 26-29)
- Practical reality: must fit existing workflow
- **Two Pillars intro** (clean, just headlines)
- **Pillar A spotlight:** Deep Workflow Integration (ATS, HRIS, Video, Comms + logos)
- **Pillar B spotlight:** Deep Security in Background (Deepfake, Biometric, Dark Web, Identity + SIEM logos)

### Act 5: Lifecycle & Close (slides 30-32)
- **Employee Identity Lifecycle:** 5 key moments
  - Onboarding, MFA Resets, Privileged Access, Periodic Checks, Offboarding
- Promise: "Hire like you always have, without bad actors"
- Close: "Never hire a bad-actor. Get Clarity."

## Design Principles (from Michael's feedback)

### Story Flow
- Use cases BEFORE implementation details
- Show WHAT it catches → THEN explain HOW it works
- Clean intros that tease what's coming (don't dump everything)

### Visual Style
- Light theme (soft blue-gray `#F0F4F8`, not pure white)
- Clarity brand: `#61F393` (green), `#0a1628` (navy), Manrope font
- Geometric accents: subtle circles/gradients in corners
- Enterprise-grade: no emojis in main content, use numbers/letters
- Spotlight effect: when showing A/B, enlarge one, dim the other

### Logos
- Use Clearbit API: `https://logo.clearbit.com/[domain]`
- Integration logos: Greenhouse, Lever, Workday, Zoom, Slack
- SIEM logos: Splunk, Microsoft, CrowdStrike, Elastic

## Key Messages for CISOs
1. Hiring is the new attack surface
2. Traditional background checks don't catch synthetic identities
3. Deepfakes make "cameras on" insufficient
4. Need continuous verification throughout employee lifecycle
5. Clarity integrates into existing workflow (ATS, HRIS, SIEM)

## Assets
- `marcus-chen-headshot.png` — AI-generated fake candidate
- `vero-financial-website.html` — Mock target company
- `vero-careers-page.html` — Mock careers page
- Screenshots for demo frames (placeholder images)

## Next Steps / Open Items
- [ ] Add actual product screenshots when available
- [ ] Consider tightening slide count further
- [ ] May need slides for specific verticals (finance, tech, etc.)
