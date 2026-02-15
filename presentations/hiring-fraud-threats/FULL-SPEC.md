# FULL-SPEC: AI Hiring Fraud — Threats & Protection

## Meta
- **deck-type:** `sales-deck` (educational/awareness → Clarity CTA)
- **audience:** CISOs, HR leaders, security teams — anyone evaluating hiring fraud risk
- **author:** Clarity
- **date:** 2026-02-15
- **slides:** 10
- **purpose:** Educate prospects on the AI hiring fraud threat landscape using real news coverage, then position Clarity as the solution. This is a "leave-behind" deck — shareable, self-contained, designed to alarm and then reassure.

## Source Material
This deck adapts content from a Gamma presentation: https://ai-hiring-fraud-risk-and-15yqzq2.gamma.site/
Rebuild it with Clarity's brand, design system, and real assets. Do NOT copy the Gamma design — use our own component patterns from `docs/COMPONENTS.md`.

## IMPORTANT: Read Existing Decks First
Before building, read `presentations/ciso-shareable-v2/index.html` and `presentations/masterclass/index.html` thoroughly. They contain:
- Clarity's latest messaging, stats, and proof points
- Refined visual patterns and animations
- Real customer logos and assets
These are your source of truth for positioning and data. Use the LATEST stats from these decks, not the Gamma source.

---

## Narrative Arc

**Emotional journey:** Alarm → Evidence → Scale → Understanding → Relief → Action

The audience should feel: "This is real, this is massive, this is happening to companies like mine — but there's a solution."

---

## Slide-by-Slide Specification

### Slide 1: Title
**Purpose:** Set the tone — this is serious, current, and relevant.

- **Layout:** `hero` pattern (dark slide)
- **Eyebrow:** `THREAT BRIEFING`
- **Headline:** `AI Hiring Fraud: The Threat Your Organization Can't Ignore`
- **Subhead:** `How deepfakes, synthetic identities, and state-sponsored operatives are infiltrating your hiring pipeline.`
- **Visual:** Subtle dark gradient background. Clarity logo in nav bar.
- **Bottom:** `Prepared by Clarity | getclarity.ai` + date

### Slide 2: It's In the News
**Purpose:** Establish credibility through mainstream media coverage. This isn't a vendor scare story — BBC, CNN, ABC are reporting it.

- **Layout:** `card-grid` (3 cards)
- **Eyebrow:** `MAKING HEADLINES`
- **Headline:** `This threat is making global news`
- **Cards (3 across):**
  1. **BBC News** — "Amazon blocks 1,800 job applications from suspected North Korean agents" — Amazon's CSO Stephen Schmidt confirmed NK agents applied for remote IT jobs using fake identities.
  2. **ABC News** — "DOJ charges four North Koreans in IT worker scam" — Posed as IT workers with stolen credentials, scammed US companies out of hundreds of thousands.
  3. **CNN** — "North Korean operatives using fake identities to secure remote tech jobs" — Millions funneled to Kim Jong Un's regime through fake remote workers.
- **Each card:** News outlet name in bold at top, quote in italics, brief context below.
- **Design note:** Use a subtle newspaper/press feel — maybe light gray card backgrounds with thin borders. NO logos for news outlets (we don't have rights). Use text styling to distinguish the outlet names.

### Slide 3: The Three Attack Vectors
**Purpose:** Categorize the threat so the audience understands the breadth of the problem.

- **Layout:** `three-column` with icons
- **Eyebrow:** `THE THREAT LANDSCAPE`
- **Headline:** `Three ways fraudsters exploit your hiring process`
- **Columns:**
  1. **Deepfake Interviews** — AI-generated personas conducting fake video interviews. Real-time face swaps, synthetic voices, fabricated backgrounds. The person you're interviewing may not exist.
  2. **Resume & Credential Fraud** — AI tools generating convincing fake resumes, fabricated work histories, and forged credentials. Traditional background checks can't catch synthetic identities.
  3. **Identity Theft & Impersonation** — Stolen personal information used to pass background checks, onboarding, and verification. Real person's identity, fake applicant behind the screen.
- **Visual:** Use numbered circles (1, 2, 3) with the Clarity accent green for each column header. Clean iconography via simple SVG shapes — NOT emoji, NOT stock icons.

### Slide 4: The Scale
**Purpose:** Show this isn't isolated incidents — it's an epidemic at massive scale.

- **Layout:** `stats-row` (4 stat cards)
- **Eyebrow:** `SCALE OF THE PROBLEM`
- **Headline:** `The numbers are staggering`
- **Stats:**
  1. **1,800+** — Suspected NK applicants blocked by Amazon alone — *Dark Reading, 2025*
  2. **300+** — US companies infiltrated by NK operatives — *DOJ Indictment, 2025*
  3. **1 in 4** — Candidate profiles will be fake by 2028 — *Gartner Research*
  4. **17%** — Of hiring managers have encountered deepfake applicants — *CNBC, 2025*
- **Design:** Red stat numbers, navy text, white cards. Source citations in small gray text below each stat.

### Slide 5: The Documentary Evidence
**Purpose:** Make it visceral with a real documentary investigation. Video content is more engaging than stats.

- **Layout:** `split-content` (text left, video embed/thumbnail right)
- **Eyebrow:** `INVESTIGATIVE REPORT`
- **Headline:** `"I tried to hire a North Korean scammer"`
- **Left content:**
  - Key revelations as bullet list:
    - Thousands of NK workers secretly employed in US, Europe, and East Asia
    - Fake identities and stolen credentials used to pass background checks
    - Wages funneled to North Korea's weapons programs
    - Remote interview setups using green screens and deepfake tactics
  - Source attribution: YouTube documentary investigation
- **Right content:** Thumbnail-style card linking to the video. Use a dark card with a play button overlay and the video title. Link: `https://www.youtube.com/watch?v=VIDEO_ID` (use a placeholder — the actual video embed isn't needed, just a compelling visual card).
- **Design note:** The thumbnail card should look like a YouTube preview — dark background, centered play icon (triangle in circle), title text below.

### Slide 6: Case Study — Government Action
**Purpose:** Show that this is serious enough for federal law enforcement to act. Adds authority.

- **Layout:** `quote-highlight` or `split-content`
- **Eyebrow:** `FEDERAL RESPONSE`
- **Headline:** `The DOJ is taking action — are you?`
- **Content:**
  - DOJ announced coordinated nationwide actions against DPRK's schemes to fund its regime through remote IT work at US companies
  - Charles Carmakal (CTO, Mandiant): *"Almost every CISO of a Fortune 500 company that I've spoken to — I'll just characterize as dozens — have admitted that they had a North Korean IT worker problem."*
  - CNN: Thousands of NK IT workers using stolen US identities, making hundreds of millions per year
- **Visual:** Use the Charles Carmakal quote as the hero element (large italic text with green left border). His photo is available in `shared/` — check `docs/ASSETS.md`. Mandiant logo if available.
- **Design:** This slide should feel authoritative — navy background section for the quote, white for the context.

### Slide 7: More Headlines
**Purpose:** Pile on evidence. The audience should feel surrounded by this threat.

- **Layout:** `card-grid` (3 cards) — similar to slide 2 but different sources
- **Eyebrow:** `THE EVIDENCE KEEPS MOUNTING`
- **Headline:** `Every week brings new incidents`
- **Cards:**
  1. **Forbes** — New guidelines for AI hiring security emerging as compliance requirements tighten
  2. **CNBC** — "Deepfake job applicants are on the rise" — 17% of hiring managers surveyed have encountered them
  3. **CBS** — Half of businesses surveyed say they've experienced AI deepfake fraud. AI used to create realistic video and audio to impersonate people.
- **Design:** Same press-card style as slide 2. Consistent visual language.

### Slide 8: Why Point Solutions Fail
**Purpose:** Bridge from problem to solution. Show that existing tools aren't enough.

- **Layout:** `four-cards` with failure indicators
- **Eyebrow:** `THE GAP`
- **Headline:** `Today's tools weren't built for this threat`
- **Cards:**
  1. **Background Checks** — Synthetic identities have no criminal record. A "clean" result on a person who doesn't exist. *(NOT EFFECTIVE)*
  2. **IDV Alone** — Not built for deepfakes. AI-generated selfies and forged documents pass through. *(INCONCLUSIVE)*
  3. **Deepfake Detection** — Standalone tools plateau at ~70%. Attackers adapt faster than models retrain. *(ARMS RACE)*
  4. **Siloed Tools** — No cross-signal analysis. Bypass one check and the rest never know. *(BLIND SPOTS)*
- **Design:** Pull this directly from CISO v2 slide 5 — same visual pattern with red failure indicators and gauge-style graphics. Check `presentations/ciso-shareable-v2/index.html` for the exact implementation.

### Slide 9: Clarity — The Solution
**Purpose:** Position Clarity as the answer. Keep it concise — this is the relief after the alarm.

- **Layout:** `hero` or `split-content`
- **Eyebrow:** `THE SOLUTION`
- **Headline:** `End-to-end identity security for your hiring pipeline`
- **Content:**
  - Clarity is an AI security company (backed by Bessemer Venture Partners) that protects organizations from AI-driven impersonation in hiring
  - **What we do:**
    - Pre-interview identity screening (before the first call)
    - Real-time deepfake detection during live interviews
    - Continuous verification through onboarding and employment
  - **How we integrate:** Directly into your existing ATS (Greenhouse, Lever, Workday), collaboration tools (Zoom, Teams), and security stack (Okta, ServiceNow, Splunk)
  - **Trust bar:** "Protecting companies with 1M+ candidates · 5,000+ employees"
- **Visual:** Use the Clarity product screenshot from `shared/screenshots/` if available. Integration logos from `shared/logos/`. Clean, confident, enterprise-grade.
- **Design:** Light background, white card with green accent elements. This slide should feel like relief — clean and orderly after the chaos of the previous slides.

### Slide 10: CTA
**Purpose:** Drive action. Two paths — low commitment and high commitment.

- **Layout:** `cta` pattern (dark slide)
- **Headline:** `Don't wait for the next headline to be about your company`
- **Two CTA options:**
  1. **Free Threat Assessment** — "Send us 50 recent applicant profiles. We'll show you what's hiding in your pipeline." → Light commitment, high value
  2. **Full POC** — "See Clarity in action across your entire hiring workflow." → Higher commitment
- **Contact:** getclarity.ai | Link to book a demo
- **Clarity logo** centered at bottom
- **Design:** Dark navy background, green accent on CTA buttons. Confident, clean close.

---

## Design Constraints (Enforced)

- Max 4 major visual elements per slide
- Max 1 heading per slide
- Max 3 lines of body text per block
- Min 40px padding everywhere, 24px minimum gaps
- No two consecutive slides may use the same layout pattern
- NO emojis anywhere
- Manrope font throughout
- Light theme default (#F0F4F8 bg), dark for title + CTA slides only
- All statistics must have source citations
- Mobile responsive: grids collapse, text scales, nothing overflows

## Technical Requirements

- Single `index.html` file in `presentations/hiring-fraud-threats/`
- Nav bar with Clarity white logo → `../../index.html`
- Keyboard navigation (arrow keys)
- Slide counter
- Hash-based URL navigation (#slide-1 through #slide-10)
- `.anim` + `.d1`–`.d7` delay classes for entrance animations
- All image paths relative (../../shared/...)

## Build on a Branch

Create branch `hiring-fraud-threats` — do NOT push to main. Open a PR when done.
