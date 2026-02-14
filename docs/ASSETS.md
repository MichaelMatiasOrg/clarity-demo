# Asset Inventory

*Everything available for presentations. All paths relative to `presentations/your-deck/`.*

---

## Brand Logos (`../../shared/brand/`)

| File | Description | Use On |
|------|-------------|--------|
| `clarity-logo.svg` | Dark navy logo (icon + wordmark) | Light backgrounds |
| `clarity-logo-white.svg` | All-white logo | Dark backgrounds, nav bar |
| `clarity-logo-green-white.svg` | Green icon + white wordmark | Dark hero slides, closing slides |
| `favicon-dark.svg` | Small icon only (dark) | Favicons, small spaces |
| `favicon-green.svg` | Small icon only (green) | Accent contexts |
| `favicon-white.svg` | Small icon only (white) | Dark backgrounds |

### Clarity Star SVG (for decorative backgrounds)
```html
<svg viewBox="0 0 60 60" fill="none">
    <path d="M39.48 16.28L32.35 0L27.81 10.48H27.81L33.1 22.71L45.23 28.05L45.24 28.04L55.63 23.47L39.48 16.28Z" fill="#0a1628"/>
    <path d="M39.48 39.81L55.62 32.62L45.24 28.05L33.11 33.38L27.81 45.62H27.81L27.82 45.63L32.35 56.1L39.48 39.81Z" fill="#0a1628"/>
    <path d="M16.15 39.82L23.28 56.1L27.82 45.62H27.82L22.53 33.39L10.4 28.05L10.39 28.06L0 32.62L16.15 39.82Z" fill="#61F393"/>
    <path d="M16.15 16.28L0 23.48L10.39 28.05L22.52 22.71L27.81 10.48H27.81L27.81 10.47L23.28 0L16.15 16.28Z" fill="#61F393"/>
</svg>
```
Use at low opacity (0.05-0.08) for subtle background decoration on title/closing slides.

---

## Product Screenshots (`../../shared/screenshots/`)

| File | Shows | Best For |
|------|-------|----------|
| `employee-dashboard.png` | Command center — employee list with risk scores, verification statuses | CISO view, "Command Center" slides |
| `during-interview.png` | Live interview analysis — video feed with 94/100 risk score, detection bars | Detection technology, deepfake detection demo |
| `pre-interview.png` | Pre-interview candidate verification screen | Candidate experience, seamless verification |
| `threat-intel-dashboard.jpg` | Threat intelligence scan interface with results | Threat intel scan CTA, free scan offer |
| `threat-intel-homepage.png` | Threat intel product landing/welcome screen | Product overview |
| `threat-intel-welcome.png` | Threat intel welcome/onboarding screen | Getting started flows |
| `continuous.png` | Continuous monitoring view | Ongoing verification, post-hire slides |
| `deepfake.png` | Deepfake detection alert/result | Detection capability slides |

---

## People Photos (`../../shared/people/`)

| File | Person | Title | Use For |
|------|--------|-------|---------|
| `charles-carmakal.png` | Charles Carmakal | CTO, Mandiant | Authority quotes about NK IT worker threat |

---

## Integration Partner Logos (`../../shared/logos/`)

### ATS / HR
| File | Company |
|------|---------|
| `greenhouse.svg` | Greenhouse |
| `greenhouse.png` | Greenhouse (PNG fallback) |
| `workday.svg` | Workday |
| `ashby.svg` | Ashby |
| `lever.svg` | Lever |
| `icims.svg` | iCIMS |
| `deel.svg` | Deel |

### Identity & Access
| File | Company |
|------|---------|
| `okta.svg` | Okta |
| `okta-wordmark.svg` | Okta (wordmark version) |
| `okta.png` | Okta (PNG fallback) |
| `microsoft-entra-id.svg` | Microsoft Entra ID |
| `azure-ad.svg` | Azure AD (legacy name) |

### ITSM
| File | Company |
|------|---------|
| `servicenow.svg` | ServiceNow |
| `jira.svg` | Jira Service Management |

### SIEM / Security
| File | Company |
|------|---------|
| `splunk.svg` | Splunk |
| `sentinel.svg` | Microsoft Sentinel |
| `crowdstrike.svg` | CrowdStrike |
| `elastic.svg` | Elastic |

### Communications
| File | Company |
|------|---------|
| `slack.svg` | Slack |
| `zoom.svg` | Zoom |
| `teams.svg` | Microsoft Teams |
| `google-meet.svg` | Google Meet |

### IDV / Background Check Partners
| File | Company |
|------|---------|
| `onfido.svg` | Onfido |
| `persona.svg` | Persona |
| `checkr.svg` | Checkr |
| `hireright.svg` | HireRight |
| `plaid.svg` | Plaid |

### Other
| File | Company |
|------|---------|
| `mandiant.svg` | Mandiant (Google) |
| `mandiant.png` | Mandiant (PNG fallback) |
| `globe-life.svg` | Globe Life |
| `stripe.svg` | Stripe |
| `the-register.svg` | The Register |
| `uc-berkeley.svg` | UC Berkeley |
| `guidepoint-white.svg` | GuidePoint Security (white, for dark bg) |
| `vero-financial.svg` | Vero Financial (fictional demo company) |
| `vero-favicon.svg` | Vero Financial favicon |

---

## Compliance Badges (`../../shared/compliance/`)

| File | Standard |
|------|----------|
| `soc2.png` | SOC 2 Type II |
| `gdpr.png` | GDPR |
| `iso27001.png` | ISO 27001 |
| `ccpa.png` | CCPA |

**EU AI Act:** No image file — style as a blue badge (#003399 bg, white text/icon).

---

## Shared CSS (`../../shared/css/`)

| File | Purpose |
|------|---------|
| `design-system.css` | CSS variables, nav menu, base component classes |
| `animations.css` | Keyframe animations (fade-in, slide-in, pulse, etc.) |
| `narration-engine.css` | Narration UI (subtitle bar, play controls) |
| `pdf-export.css` | Print/PDF styles |

## Shared JS (`../../shared/js/`)

| File | Purpose |
|------|---------|
| `navigation.js` | Keyboard arrow nav, swipe, hash URLs, slide counter |
| `narration-engine.js` | Audio narration with autoplay and subtitles |
| `dev-mode.js` | Element inspector for collaborative editing |
| `pdf-export.js` | Export slides to PDF |

---

## Key Statistics & Quotes (approved for use)

### Statistics
| Stat | Description | Source |
|------|-------------|--------|
| 1 in 4 | Candidate profiles will be fake by 2028 | Gartner Research |
| 1,800+ | Suspected NK applicants blocked by Amazon | Dark Reading, 2025 |
| 300+ | US companies infiltrated by NK IT workers | DOJ Indictment, 2025 |
| 220% | Increase in NK infiltrations in 12 months | Fortune, 2025 |
| $25M | Stolen via deepfake video call (Arup, Hong Kong) | Multiple sources, 2024 |
| 6/9 | Bad actors caught by Clarity from resume alone | Globe Life POC (Fortune 500 insurance company) |
| Top 3 | Clarity's global ranking for deepfake detection | Independent 3rd party testing |
| 10,000+ | Known threat identifiers in Clarity's database | Internal |

### Approved Quotes
**Charles Carmakal, CTO of Mandiant:**
> "Almost every CISO of a Fortune 500 company that I've spoken to — I'll just characterize as dozens — have admitted that they had a North Korean IT worker problem."

---

## Requesting New Assets

If you need an asset that doesn't exist:
1. **Don't invent it.** No fake logos, no placeholder screenshots.
2. Note what you need: `<!-- ASSET NEEDED: [description] -->`
3. Tell the team — Michael or the design team will source it.
4. Use a text placeholder in the meantime: a styled box with "IMAGE: [description]"
