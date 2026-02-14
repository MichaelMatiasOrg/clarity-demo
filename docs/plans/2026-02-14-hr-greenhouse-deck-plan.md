# HR Greenhouse Deck Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build an 8-slide story-driven presentation for enterprise HR leaders about Clarity's Greenhouse integration, featuring fictional fintech "Paysure."

**Architecture:** New presentation at `presentations/hr-greenhouse/` following the existing template pattern. Uses shared design system, logos, and screenshots. No narration engine — visual slides only with keyboard navigation.

**Tech Stack:** HTML5, CSS3, Vanilla JS. Shared design system from `shared/css/`. No build step.

---

### Task 1: Scaffold the presentation directory

**Files:**
- Create: `presentations/hr-greenhouse/index.html` (copy from template)
- Create: `presentations/hr-greenhouse/presentation.css`

**Step 1: Copy template to new directory**

Run: `cp -r presentations/_template presentations/hr-greenhouse`

**Step 2: Update index.html title and meta**

In `presentations/hr-greenhouse/index.html`, change:
- `<title>` to `Clarity - Protecting Remote Hiring from Identity Fraud`
- Version meta to `1.0.0`

**Step 3: Verify the scaffold loads**

Open `presentations/hr-greenhouse/index.html` in a browser. Should show template slides with Clarity logo.

**Step 4: Commit**

```bash
git add presentations/hr-greenhouse/
git commit -m "scaffold: create hr-greenhouse presentation from template"
```

---

### Task 2: Build Slide 1 — Title

**Files:**
- Modify: `presentations/hr-greenhouse/index.html`

**Step 1: Replace the template title slide**

Replace the first `<section>` (slide-title) with:

```html
<section class="slide slide-title" data-slide-id="title">
    <!-- Geometric accent circles -->
    <div style="position: absolute; top: -60px; right: -60px; width: 200px; height: 200px; border: 2px solid rgba(97, 243, 147, 0.08); border-radius: 50%; pointer-events: none;"></div>
    <div style="position: absolute; bottom: -40px; left: -40px; width: 150px; height: 150px; border: 2px solid rgba(10, 22, 40, 0.05); border-radius: 50%; pointer-events: none;"></div>

    <div style="position: relative; z-index: 1;">
        <div class="logo">
            <img src="../../shared/brand/clarity-logo.svg" alt="Clarity" style="height: 52px;">
        </div>
        <h1>Protecting Remote Hiring from Identity Fraud</h1>
        <p class="subtitle">A Greenhouse Integration Story</p>
        <div style="margin-top: 40px;">
            <img src="../../shared/logos/greenhouse.svg" alt="Greenhouse" style="height: 32px; opacity: 0.6;">
        </div>
    </div>
    <div class="slide-number">1</div>
</section>
```

**Step 2: Remove template slides 2 and 3** (we'll build all 8 from scratch in subsequent tasks)

Keep only the title slide, slide-indicator, nav-hint, navigation.js, dev-mode.js, and version badge boilerplate at the bottom.

**Step 3: Verify** — open in browser, should show title slide with both logos.

**Step 4: Commit**

```bash
git add presentations/hr-greenhouse/index.html
git commit -m "feat: slide 1 — title with Clarity + Greenhouse logos"
```

---

### Task 3: Build Slide 2 — Meet Paysure

**Files:**
- Modify: `presentations/hr-greenhouse/index.html`
- Modify: `presentations/hr-greenhouse/presentation.css`

**Step 1: Add slide 2 HTML after the title slide**

```html
<section class="slide" data-slide-id="meet-paysure">
    <div style="max-width: 900px; margin: 0 auto; text-align: center;">
        <span class="badge" style="margin-bottom: 20px;">The Company</span>
        <h2 style="font-size: 2.4rem; margin-bottom: 50px;">Meet <span class="accent">Paysure</span></h2>

        <!-- Company profile card -->
        <div style="background: white; border-radius: 20px; padding: 40px; box-shadow: 0 8px 40px rgba(10,22,40,0.08); text-align: left; max-width: 700px; margin: 0 auto;">
            <!-- Header with company identity -->
            <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 30px; padding-bottom: 24px; border-bottom: 1px solid var(--border);">
                <div style="width: 56px; height: 56px; background: linear-gradient(135deg, #6366f1, #4f46e5); border-radius: 14px; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.4rem; font-weight: 800; flex-shrink: 0;">P</div>
                <div>
                    <h3 style="margin: 0 0 4px; font-size: 1.3rem;">Paysure</h3>
                    <p style="margin: 0; color: var(--text-secondary); font-size: 0.95rem;">Consumer Lending &bull; Buy Now, Pay Later</p>
                </div>
            </div>

            <!-- Key facts grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div class="paysure-fact">
                    <div class="paysure-fact-number">~2,000</div>
                    <div class="paysure-fact-label">Employees, remote-first</div>
                    <div class="paysure-fact-detail">Hiring across US, EU, LATAM</div>
                </div>
                <div class="paysure-fact">
                    <div class="paysure-fact-number">150+</div>
                    <div class="paysure-fact-label">Hires per year</div>
                    <div class="paysure-fact-detail">Powered by Greenhouse</div>
                </div>
                <div class="paysure-fact">
                    <div class="paysure-fact-number">PCI DSS</div>
                    <div class="paysure-fact-label">Regulated data</div>
                    <div class="paysure-fact-detail">Consumer financial transactions</div>
                </div>
                <div class="paysure-fact">
                    <div class="paysure-fact-number">SOC 2</div>
                    <div class="paysure-fact-label">Compliance required</div>
                    <div class="paysure-fact-detail">Merchant integrations, API keys</div>
                </div>
            </div>
        </div>

        <p style="margin-top: 40px; font-size: 1.3rem; color: var(--text-primary);">
            Every remote hire touches financial systems <strong>from day one.</strong>
        </p>
    </div>
    <div class="slide-number">2</div>
</section>
```

**Step 2: Add Paysure fact styles to presentation.css**

```css
/* ========== Slide 2: Paysure Profile ========== */
.paysure-fact {
    padding: 16px;
    border-radius: 12px;
    background: #F8FAFC;
}
.paysure-fact-number {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 4px;
}
.paysure-fact-label {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 2px;
}
.paysure-fact-detail {
    font-size: 0.8rem;
    color: var(--text-secondary);
}
```

**Step 3: Verify** — open in browser, navigate to slide 2. Profile card should render cleanly.

**Step 4: Commit**

```bash
git add presentations/hr-greenhouse/index.html presentations/hr-greenhouse/presentation.css
git commit -m "feat: slide 2 — Paysure company profile card"
```

---

### Task 4: Build Slide 3 — The Hire That Checked Every Box

**Files:**
- Modify: `presentations/hr-greenhouse/index.html`
- Modify: `presentations/hr-greenhouse/presentation.css`

**Step 1: Add slide 3 HTML**

```html
<section class="slide" data-slide-id="perfect-hire">
    <div style="max-width: 900px; margin: 0 auto; text-align: center;">
        <span class="badge" style="margin-bottom: 20px;">3 Months Ago</span>
        <h2 style="font-size: 2.4rem; margin-bottom: 12px;">The hire that <span class="accent">checked every box</span></h2>
        <p class="subtitle" style="margin-bottom: 50px;">Senior Backend Engineer &bull; Hired through Greenhouse</p>

        <!-- Greenhouse pipeline -->
        <div class="gh-pipeline">
            <div class="gh-stage gh-stage-done">
                <div class="gh-stage-icon">&#10003;</div>
                <div class="gh-stage-label">Applied</div>
            </div>
            <div class="gh-connector"></div>
            <div class="gh-stage gh-stage-done">
                <div class="gh-stage-icon">&#10003;</div>
                <div class="gh-stage-label">Screen</div>
            </div>
            <div class="gh-connector"></div>
            <div class="gh-stage gh-stage-done">
                <div class="gh-stage-icon">&#10003;</div>
                <div class="gh-stage-label">Interview</div>
            </div>
            <div class="gh-connector"></div>
            <div class="gh-stage gh-stage-done">
                <div class="gh-stage-icon">&#10003;</div>
                <div class="gh-stage-label">Offer</div>
            </div>
            <div class="gh-connector"></div>
            <div class="gh-stage gh-stage-hired">
                <div class="gh-stage-icon">&#10003;</div>
                <div class="gh-stage-label">Hired</div>
            </div>
        </div>

        <p style="margin-top: 50px; font-size: 1.15rem; color: var(--text-secondary);">
            Strong resume. Great interview. References checked out. <strong style="color: var(--text-primary);">Everything looked perfect.</strong>
        </p>
    </div>
    <div class="slide-number">3</div>
</section>
```

**Step 2: Add pipeline CSS to presentation.css**

```css
/* ========== Slide 3: Greenhouse Pipeline ========== */
.gh-pipeline {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
}
.gh-stage {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}
.gh-stage-icon {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 700;
    transition: all 0.3s;
}
.gh-stage-done .gh-stage-icon {
    background: var(--accent-muted);
    color: #16a34a;
    border: 2px solid #61F393;
}
.gh-stage-hired .gh-stage-icon {
    background: #61F393;
    color: var(--text-primary);
    border: 2px solid #61F393;
    animation: subtle-pulse 2s ease-in-out infinite;
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4);
    animation: hired-pulse 2s ease-in-out infinite;
}
.gh-stage-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-primary);
}
.gh-connector {
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #61F393, #61F393);
    margin-bottom: 28px;
}

@keyframes hired-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
    50% { box-shadow: 0 0 0 8px rgba(239, 68, 68, 0.15); }
}
```

**Step 3: Verify** — pipeline should display as a horizontal flow with green checkmarks and a pulsing red shadow on "Hired."

**Step 4: Commit**

```bash
git add presentations/hr-greenhouse/index.html presentations/hr-greenhouse/presentation.css
git commit -m "feat: slide 3 — Greenhouse pipeline with red pulse foreshadowing"
```

---

### Task 5: Build Slide 4 — The Discovery

**Files:**
- Modify: `presentations/hr-greenhouse/index.html`
- Modify: `presentations/hr-greenhouse/presentation.css`

**Step 1: Add slide 4 HTML**

```html
<section class="slide" data-slide-id="discovery">
    <div style="max-width: 900px; margin: 0 auto; text-align: center;">
        <span class="badge badge-danger" style="margin-bottom: 20px;">3 Months Later</span>
        <h2 style="font-size: 2.4rem; margin-bottom: 50px;">The <span class="danger">red flags</span> started appearing</h2>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
            <!-- Alert 1 -->
            <div class="alert-card">
                <div class="alert-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#EF4444" stroke-width="2"/><circle cx="12" cy="10" r="3" stroke="#EF4444" stroke-width="2"/></svg>
                </div>
                <h3 style="margin: 0 0 8px; font-size: 1.05rem;">Unexpected Locations</h3>
                <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0; line-height: 1.5;">IP addresses from 3 countries in a single week — none matching their stated location</p>
            </div>
            <!-- Alert 2 -->
            <div class="alert-card">
                <div class="alert-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="#EF4444" stroke-width="2"/><path d="M8 11V7a4 4 0 118 0v4" stroke="#EF4444" stroke-width="2"/></svg>
                </div>
                <h3 style="margin: 0 0 8px; font-size: 1.05rem;">Credential Sharing</h3>
                <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0; line-height: 1.5;">Multiple device fingerprints on a single account — suggesting shared access</p>
            </div>
            <!-- Alert 3 -->
            <div class="alert-card">
                <div class="alert-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#EF4444" stroke-width="2" stroke-linecap="round"/></svg>
                </div>
                <h3 style="margin: 0 0 8px; font-size: 1.05rem;">Inconsistent Work</h3>
                <p style="color: var(--text-secondary); font-size: 0.9rem; margin: 0; line-height: 1.5;">Code quality fluctuated dramatically — as if different people were writing it</p>
            </div>
        </div>

        <div style="margin-top: 50px; padding: 20px 32px; background: var(--danger-muted); border-radius: 12px; display: inline-block;">
            <p style="margin: 0; font-size: 1.15rem; color: var(--danger); font-weight: 600;">
                1 in 4 remote companies have encountered hiring identity fraud
            </p>
            <p style="margin: 6px 0 0; font-size: 0.8rem; color: var(--text-secondary);">— Gartner 2024</p>
        </div>
    </div>
    <div class="slide-number">4</div>
</section>
```

**Step 2: Add alert card CSS to presentation.css**

```css
/* ========== Slide 4: Alert Cards ========== */
.alert-card {
    background: white;
    border-radius: 16px;
    padding: 28px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    text-align: center;
    border-top: 3px solid var(--danger);
}
.alert-icon {
    width: 52px;
    height: 52px;
    background: var(--danger-muted);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
}
```

**Step 3: Verify** — 3 alert cards in a row with red accents and a stat callout below.

**Step 4: Commit**

```bash
git add presentations/hr-greenhouse/index.html presentations/hr-greenhouse/presentation.css
git commit -m "feat: slide 4 — red flag discovery with alert cards and stat"
```

---

### Task 6: Build Slide 5 — The Real Cost

**Files:**
- Modify: `presentations/hr-greenhouse/index.html`

**Step 1: Add slide 5 HTML**

Follow the exact pattern from `masterclass/index.html:1137-1205` (the bad-hire-cost and malicious slides). Use the strikethrough comparison pattern:

```html
<section class="slide" data-slide-id="real-cost">
    <div style="max-width: 900px; margin: 0 auto; text-align: center;">
        <span class="badge badge-danger" style="margin-bottom: 30px;">The Impact</span>
        <h2 style="font-size: 2.4rem; white-space: nowrap;">What one <span class="danger">fraudulent hire</span> costs a fintech</h2>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 50px;">
            <div class="card" style="text-align: left;">
                <div style="display: flex; align-items: baseline; gap: 12px; margin-bottom: 16px;">
                    <h3 style="font-size: 3rem; color: var(--danger); margin: 0;">$4.9M</h3>
                    <h3 style="font-size: 1.5rem; color: var(--text-secondary); text-decoration: line-through; margin: 0; opacity: 0.5;">$180K</h3>
                </div>
                <p style="font-size: 1.2rem; margin-bottom: 8px;"><strong>Not just a bad hire — an insider threat</strong></p>
                <p class="text-secondary">Average data breach cost when a malicious insider is involved</p>
                <p class="text-secondary-sm" style="margin-top: 16px;">— IBM Cost of a Data Breach 2024</p>
            </div>
            <div class="card" style="text-align: left;">
                <h3 style="font-size: 3rem; color: var(--danger); margin-bottom: 16px;">292 days</h3>
                <p style="font-size: 1.2rem; margin-bottom: 8px;"><strong>To identify and contain</strong></p>
                <p class="text-secondary">Nearly 10 months of access to PCI data, merchant APIs, and production systems</p>
                <p class="text-secondary-sm" style="margin-top: 16px;">— IBM 2024</p>
            </div>
        </div>

        <p style="margin-top: 40px; font-size: 1.15rem; color: var(--text-secondary);">
            For a regulated fintech, add <strong style="color: var(--danger);">compliance penalties, customer notification costs, and reputational damage.</strong>
        </p>
    </div>
    <div class="slide-number">5</div>
</section>
```

**Step 2: Verify** — strikethrough $180K next to $4.9M, two stat cards side by side.

**Step 3: Commit**

```bash
git add presentations/hr-greenhouse/index.html
git commit -m "feat: slide 5 — cost impact with strikethrough comparison"
```

---

### Task 7: Build Slide 6 — Where Clarity Fits in Greenhouse

**Files:**
- Modify: `presentations/hr-greenhouse/index.html`
- Modify: `presentations/hr-greenhouse/presentation.css`

This is the most complex slide — the Greenhouse pipeline with Clarity checkpoints. Follow the pattern from masterclass `pipeline` slide (line 1613) but simplified for 8-slide format.

**Step 1: Add slide 6 HTML**

```html
<section class="slide" data-slide-id="clarity-greenhouse">
    <div style="max-width: 1000px; margin: 0 auto;">
        <div class="text-center" style="margin-bottom: 40px;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 20px;">
                <img src="../../shared/brand/clarity-logo.svg" alt="Clarity" style="height: 32px;">
                <span style="font-size: 1.5rem; color: var(--text-secondary); font-weight: 300;">+</span>
                <img src="../../shared/logos/greenhouse.svg" alt="Greenhouse" style="height: 28px;">
            </div>
            <h2 style="font-size: 2.4rem; margin-bottom: 8px;">Protection at <span class="accent">every stage</span></h2>
            <p class="subtitle">Clarity embeds directly into your Greenhouse workflow</p>
        </div>

        <!-- Clarity Checks Layer -->
        <div style="margin-bottom: 24px;">
            <div style="display: flex; justify-content: center; gap: 40px; position: relative;">
                <!-- Dashed connection line -->
                <div style="position: absolute; top: 50%; left: 20%; right: 20%; height: 2px; border-top: 2px dashed rgba(97, 243, 147, 0.4); z-index: 0;"></div>

                <div class="clarity-check">
                    <div class="clarity-check-diamond">1</div>
                    <div class="clarity-check-title">Applicant Screening</div>
                    <div class="clarity-check-desc">ID document verification</div>
                </div>
                <div class="clarity-check">
                    <div class="clarity-check-diamond">2</div>
                    <div class="clarity-check-title">Pre-Interview</div>
                    <div class="clarity-check-desc">Liveness detection</div>
                </div>
                <div class="clarity-check">
                    <div class="clarity-check-diamond">3</div>
                    <div class="clarity-check-title">Post-Offer</div>
                    <div class="clarity-check-desc">Continuous verification</div>
                </div>
            </div>
        </div>

        <!-- Connector arrows -->
        <div style="display: flex; justify-content: center; gap: 140px; margin: 12px 0; color: rgba(97, 243, 147, 0.5); font-size: 1.2rem;">
            <span>&#8595;</span><span>&#8595;</span><span>&#8595;</span>
        </div>

        <!-- Greenhouse Pipeline -->
        <div style="display: flex; justify-content: center; align-items: center; gap: 12px; margin-top: 12px;">
            <div class="gh-flow-stage">Candidate<br>Sourced</div>
            <div class="gh-flow-arrow">&#8594;</div>
            <div class="gh-flow-stage gh-flow-protected">Application<br>Screening</div>
            <div class="gh-flow-arrow">&#8594;</div>
            <div class="gh-flow-stage gh-flow-protected">Video<br>Interview</div>
            <div class="gh-flow-arrow">&#8594;</div>
            <div class="gh-flow-stage gh-flow-protected">Final<br>Offer</div>
            <div class="gh-flow-arrow">&#8594;</div>
            <div class="gh-flow-trusted">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="margin-bottom: 4px;">
                    <path d="M9 12l2 2 4-4" stroke="#0a1628" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="#0a1628" stroke-width="2"/>
                </svg>
                <div style="font-size: 0.7rem; font-weight: 700;">Trusted<br>Hire</div>
            </div>
        </div>

        <p class="text-center" style="margin-top: 30px; color: var(--text-secondary); font-size: 1rem;">
            No workflow changes required. Clarity works invisibly inside Greenhouse.
        </p>
    </div>
    <div class="slide-number">6</div>
</section>
```

**Step 2: Add Clarity check and flow CSS to presentation.css**

```css
/* ========== Slide 6: Clarity + Greenhouse Integration ========== */
.clarity-check {
    background: white;
    border: 2px solid #61F393;
    border-radius: 14px;
    padding: 20px 28px;
    text-align: center;
    position: relative;
    z-index: 1;
    min-width: 160px;
}
.clarity-check-diamond {
    width: 32px;
    height: 32px;
    background: #61F393;
    color: var(--text-primary);
    border-radius: 8px;
    transform: rotate(45deg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 700;
    margin: 0 auto 12px;
}
.clarity-check-diamond > * {
    transform: rotate(-45deg);
}
.clarity-check-title {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 4px;
}
.clarity-check-desc {
    font-size: 0.8rem;
    color: var(--text-secondary);
}

.gh-flow-stage {
    background: var(--text-primary);
    color: white;
    border-radius: 10px;
    padding: 16px 20px;
    text-align: center;
    min-width: 110px;
    font-size: 0.8rem;
    font-weight: 600;
}
.gh-flow-protected {
    box-shadow: 0 0 0 3px rgba(97, 243, 147, 0.3);
}
.gh-flow-arrow {
    color: var(--text-secondary);
    font-size: 1.2rem;
}
.gh-flow-trusted {
    background: #61F393;
    color: var(--text-primary);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
```

**Step 3: Verify** — Clarity checks layer on top connected by arrows to the Greenhouse pipeline below. "Trusted Hire" circle at end.

**Step 4: Commit**

```bash
git add presentations/hr-greenhouse/index.html presentations/hr-greenhouse/presentation.css
git commit -m "feat: slide 6 — Clarity + Greenhouse integration pipeline"
```

---

### Task 8: Build Slide 7 — Paysure's New Reality

**Files:**
- Modify: `presentations/hr-greenhouse/index.html`
- Modify: `presentations/hr-greenhouse/presentation.css`

**Step 1: Add slide 7 HTML**

Reuses the pipeline visual from Slide 3, but now every stage has a green Clarity shield overlay:

```html
<section class="slide" data-slide-id="new-reality">
    <div style="max-width: 900px; margin: 0 auto; text-align: center;">
        <span class="badge" style="margin-bottom: 20px;">The Transformation</span>
        <h2 style="font-size: 2.4rem; margin-bottom: 50px;">Paysure's <span class="accent">new reality</span></h2>

        <!-- Protected pipeline -->
        <div class="gh-pipeline">
            <div class="gh-stage gh-stage-protected">
                <div class="gh-stage-icon gh-stage-icon-shielded">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#16a34a" stroke-width="2.5" stroke-linejoin="round"/></svg>
                </div>
                <div class="gh-stage-label">Applied</div>
            </div>
            <div class="gh-connector gh-connector-green"></div>
            <div class="gh-stage gh-stage-protected">
                <div class="gh-stage-icon gh-stage-icon-shielded">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#16a34a" stroke-width="2.5" stroke-linejoin="round"/></svg>
                </div>
                <div class="gh-stage-label">Screen</div>
            </div>
            <div class="gh-connector gh-connector-green"></div>
            <div class="gh-stage gh-stage-protected">
                <div class="gh-stage-icon gh-stage-icon-shielded">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#16a34a" stroke-width="2.5" stroke-linejoin="round"/></svg>
                </div>
                <div class="gh-stage-label">Interview</div>
            </div>
            <div class="gh-connector gh-connector-green"></div>
            <div class="gh-stage gh-stage-protected">
                <div class="gh-stage-icon gh-stage-icon-shielded">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#16a34a" stroke-width="2.5" stroke-linejoin="round"/></svg>
                </div>
                <div class="gh-stage-label">Offer</div>
            </div>
            <div class="gh-connector gh-connector-green"></div>
            <div class="gh-stage gh-stage-protected">
                <div class="gh-stage-icon gh-stage-icon-shielded" style="background: #61F393;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#0a1628" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <div class="gh-stage-label">Hired</div>
            </div>
        </div>

        <!-- Result stat -->
        <div style="margin-top: 60px; padding: 24px 40px; background: var(--accent-muted); border-radius: 14px; display: inline-block;">
            <p style="margin: 0; font-size: 2rem; font-weight: 800; color: var(--text-primary);">
                Zero <span class="accent">fraudulent hires</span> since deployment
            </p>
        </div>

        <p style="margin-top: 24px; font-size: 1.1rem; color: var(--text-secondary);">
            Every candidate verified. Every interview authenticated. Every hire trusted.
        </p>
    </div>
    <div class="slide-number">7</div>
</section>
```

**Step 2: Add protected stage CSS**

```css
/* ========== Slide 7: Protected Pipeline ========== */
.gh-stage-protected .gh-stage-icon {
    background: var(--accent-muted) !important;
    border: 2px solid #61F393 !important;
}
.gh-stage-icon-shielded {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.gh-connector-green {
    background: #61F393 !important;
}
```

**Step 3: Verify** — same pipeline shape as slide 3, but shields instead of checkmarks, all green.

**Step 4: Commit**

```bash
git add presentations/hr-greenhouse/index.html presentations/hr-greenhouse/presentation.css
git commit -m "feat: slide 7 — Paysure's protected pipeline with shield icons"
```

---

### Task 9: Build Slide 8 — Free Scan CTA + Closing

**Files:**
- Modify: `presentations/hr-greenhouse/index.html`

**Step 1: Add slide 8 HTML**

Follow the pattern from masterclass `threat-intel` slide (line 2686):

```html
<section class="slide" data-slide-id="cta" style="background: #F0F4F8;">
    <div style="max-width: 800px; margin: 0 auto; text-align: center;">
        <!-- Logos -->
        <div style="display: flex; align-items: center; justify-content: center; gap: 20px; margin-bottom: 40px;">
            <img src="../../shared/brand/clarity-logo.svg" alt="Clarity" style="height: 40px;">
            <span style="font-size: 1.5rem; color: var(--text-secondary); font-weight: 300;">+</span>
            <img src="../../shared/logos/greenhouse.svg" alt="Greenhouse" style="height: 34px;">
        </div>

        <!-- Headline -->
        <h2 style="font-size: 2.8rem; margin-bottom: 12px;">See what's hiding in <span class="accent">your pipeline</span></h2>
        <p class="subtitle" style="margin-bottom: 40px;">Free identity risk scan for Greenhouse customers</p>

        <!-- Screenshot -->
        <div style="background: white; border-radius: 16px; padding: 12px; box-shadow: 0 20px 60px rgba(10,22,40,0.12); margin-bottom: 36px; max-width: 550px; margin-left: auto; margin-right: auto;">
            <img src="../../shared/screenshots/threat-intel-homepage.png" alt="Clarity Threat Intelligence"
                 style="width: 100%; border-radius: 10px; object-fit: cover; object-position: left top; max-height: 300px;">
        </div>

        <!-- CTA Button -->
        <a href="https://claritythreatintelligence.ai" style="display: inline-flex; align-items: center; gap: 12px; background: #0a1628; color: white; padding: 18px 40px; border-radius: 50px; font-size: 1.2rem; font-weight: 700; text-decoration: none; box-shadow: 0 8px 30px rgba(10,22,40,0.2);">
            <span>Start Your Free Scan</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>

        <!-- Contact -->
        <p style="margin-top: 30px; color: var(--text-secondary); font-size: 0.95rem;">
            michael@getclarity.ai
        </p>
    </div>
    <div class="slide-number">8</div>
</section>
```

**Step 2: Verify** — clean CTA slide with both logos, screenshot, button, and contact.

**Step 3: Commit**

```bash
git add presentations/hr-greenhouse/index.html
git commit -m "feat: slide 8 — free scan CTA with threat intelligence preview"
```

---

### Task 10: Add presentation to hub page

**Files:**
- Modify: `index.html` (root hub page)

**Step 1: Add a new card to the Presentations section**

After the Deel Onboarding card (`</a>` at approx line 255), add:

```html
<a href="presentations/hr-greenhouse/" class="card">
    <div class="card-icon" style="background: #0a1628; width: auto; padding: 8px 14px; border-radius: 10px;">
        <img src="shared/logos/greenhouse.svg" alt="Greenhouse" style="height: 22px; filter: brightness(0) invert(1);">
    </div>
    <h3>HR Leaders: Remote Hiring Fraud</h3>
    <p class="desc">Story-driven Greenhouse integration deck — protecting remote-first companies from identity fraud.</p>
    <div class="tags">
        <span class="tag">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7"/></svg>
            8 slides
        </span>
        <span class="tag">Greenhouse</span>
    </div>
</a>
```

**Step 2: Verify** — hub page shows 4 presentation cards, new one has Greenhouse icon.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add HR Greenhouse deck to hub page"
```

---

### Task 11: Final review and cleanup

**Step 1: Navigate through all 8 slides** using arrow keys. Check:
- Slide numbers are 1-8
- No text wrapping on titles
- Logos render correctly (Greenhouse SVG, Clarity SVG)
- Pipeline visuals align and look professional
- Colors match the design system
- Animations are subtle (only the red pulse on slide 3)

**Step 2: Check for any leftover template content** (placeholder text, commented-out narration engine block, etc.)

**Step 3: Remove narration-data.js** since we're not using narration:
```bash
rm presentations/hr-greenhouse/narration-data.js
```

**Step 4: Final commit**

```bash
git add -A presentations/hr-greenhouse/
git commit -m "chore: cleanup — remove unused narration data, final polish"
```

---

### Task 12: Merge to main

**Step 1: Pull latest main and merge**

```bash
git checkout main
git pull origin main
git merge add-hr-greenhouse-deck
```

**Step 2: Push** (pre-push hook will run Playwright tests)

```bash
git push origin main
```

If tests fail, fix issues and retry.
