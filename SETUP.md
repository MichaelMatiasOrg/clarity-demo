# Team Setup Guide — Clarity Presentation Builder

*Get up and running in 10 minutes. Build on-brand Clarity presentations using Claude Code.*

---

## What You'll Get

After setup, you can create professional Clarity presentations by just talking to Claude Code in plain English. No CSS, no HTML, no design skills needed. You describe the deck, Claude Code builds it.

---

## Prerequisites

- **macOS or Linux** (Windows works via WSL)
- **Node.js 18+** — check with `node --version`
- **Git** — check with `git --version`
- **Claude Max subscription** (or Claude Pro) at [claude.ai](https://claude.ai)

---

## Step 1: Install Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

Verify it installed:
```bash
claude --version
# Should show: 2.x.x (Claude Code)
```

On first run, Claude Code will open a browser window to authenticate with your Anthropic account.

---

## Step 2: Clone the Repository

```bash
git clone https://github.com/MichaelMatiasOrg/clarity-demo.git
cd clarity-demo
```

---

## Step 3: Install Plugins

Open Claude Code and install these plugins. They make the experience significantly better.

```bash
claude
```

### Superpowers (Brainstorming & Structured Workflows)
This gives Claude Code specialized skills like `/superpowers:brainstorm` — a structured brainstorming workflow that asks smart clarifying questions before building your deck.

```
/plugin install superpowers@claude-plugins-official
```

When prompted for scope, choose **User** (installs across all projects).

Skills you'll get:
- `/superpowers:brainstorm` — Structured brainstorming for deck planning
- `/superpowers:code-reviewer` — Code review workflows
- Browse all with `/plugin`

### Playwright (Browser Preview)
This lets Claude Code open your deck in a real browser, take screenshots, and verify everything looks right.

```
/mcp add playwright -- npx @anthropic-ai/claude-code-playwright
```

Then exit and install the browser:
```bash
/exit
npx playwright install chromium
```

**Requirements:** Claude Code v1.0.33+ (check with `claude --version`)

---

## Step 4: Verify Setup

```bash
cd clarity-demo
claude
```

You should see Claude Code load with the Clarity instructions automatically (from `.claude/instructions.md`). Try asking:

> "What presentation templates are available?"

Claude Code should reference the component catalog and asset inventory. If it does, you're good to go.

---

## Building a Presentation

### Start Claude Code in the repo:
```bash
cd clarity-demo
claude
```

### Just describe what you need:
```
Build me a 10-slide deck for HR leaders at mid-market companies
about how Clarity catches hiring fraud before day one.
Focus on the Greenhouse integration and the free threat scan offer.
```

### Claude Code will:
1. **Ask you a few questions** — deck type, audience, core message
2. **Pick the right slide patterns** from our component library
3. **Use real brand assets** — logos, screenshots, colors, fonts
4. **Build the full HTML file** with animations and mobile support
5. **Create a branch and open a PR** (only Michael merges to main)

### Iterate naturally:
```
"Make the stats on slide 3 bigger"
"Add the Workday logo to the integration slide"  
"Change the title to 'Secure Your Hiring Pipeline'"
"Use the employee-dashboard.png screenshot on slide 5"
```

---

## Using Images

Claude Code **cannot process images visually** — don't paste or drag images into it.

Instead, reference images by file path:
```
"Use this screenshot on slide 4: ../../shared/screenshots/during-interview.png"
```

To see all available images:
```
"Show me what's in docs/ASSETS.md"
```

If you need an image that doesn't exist in the repo, ask Michael or the design team to add it.

---

## Git Workflow

**You cannot push directly to `main`.** This is enforced.

Claude Code will automatically:
1. Create a branch (e.g. `presentations/my-new-deck`)
2. Build the presentation there
3. Push the branch

**You then:**
1. Open a Pull Request on GitHub
2. Michael reviews and merges

If Claude Code tries to push to main and gets rejected, tell it:
```
"Create a new branch called presentations/my-deck-name and push there instead"
```

---

## File Structure

Your presentation lives in:
```
presentations/your-deck-name/
├── index.html    # The full presentation (single file)
└── assets/       # Any deck-specific images (optional)
```

The HTML file contains embedded metadata at the top:
```html
<!--
  @deck-type: customer-deck
  @customer: Acme Corp
  @audience: CISO
  @author: Your Name
  @created: 2026-02-14
  @core-message: Clarity catches hiring fraud before day one
-->
```

---

## Available Assets

Everything is in `shared/` — Claude Code knows about all of them.

| Folder | Contents |
|--------|----------|
| `shared/brand/` | Clarity logos (dark, white, green+white) |
| `shared/screenshots/` | Product UI screenshots (dashboard, detection, threat intel) |
| `shared/logos/` | 35+ integration partner logos (Okta, Greenhouse, Workday, etc.) |
| `shared/people/` | People photos (for quote slides) |
| `shared/compliance/` | SOC 2, GDPR, ISO 27001, CCPA badges |

Full inventory with descriptions: `docs/ASSETS.md`

---

## Brand Rules (Don't Fight These)

These are enforced by the system. You don't need to remember them — Claude Code knows.

- **Font:** Manrope (not Inter, not Arial)
- **Background:** Soft blue-gray (#F0F4F8), not white
- **Green accent:** #61F393 — used sparingly
- **No emojis.** Ever. This is enterprise software.
- **No fake logos.** Only real assets from the repo.
- **Light theme** by default. Dark only for closing slides.

Full guidelines: `docs/BRAND.md`

---

## Tips

- **Be specific about your audience.** "CISOs at Fortune 500 companies" gets better results than "security people"
- **Mention specific integrations.** "Focus on Greenhouse and Okta" helps Claude Code pick the right logos and content
- **Ask for previews.** "Open the deck in the browser and take a screenshot" (requires Playwright plugin)
- **Iterate fast.** Change one thing at a time. "Make the quote text bigger" is better than rewriting 5 things at once.
- **Check mobile.** "Show me how slide 3 looks on mobile" (Playwright can emulate mobile viewports)

---

## Troubleshooting

### Claude Code can't process my image
Don't paste images. Put the file in the repo and give the path. See "Using Images" above.

### Push to main rejected
You need to push to a branch and open a PR. See "Git Workflow" above.

### Claude Code doesn't know about Clarity
Make sure you're running `claude` from inside the `clarity-demo` directory. The instructions auto-load from `.claude/instructions.md`.

### Presentation looks wrong on mobile
Tell Claude Code: "Check the mobile layout for all slides and fix any issues." With Playwright installed, it can actually test this.

### Need a logo or screenshot that doesn't exist
Ask Michael or the design team. Don't let Claude Code invent one — it will look wrong.

---

## Questions?

Ask Michael or ping in the team Slack. Happy building!
