# Getting Started — Clarity Presentation Builder

*Follow these steps once. After that, you can create polished Clarity presentations just by typing what you want in plain English.*

---

## What This Does

Once set up, you'll have a tool called **Claude Code** on your computer. You talk to it like a coworker: "Build me a 10-slide deck about hiring fraud for CISOs." It builds the whole thing — design, layout, animations — using our real brand assets. No design or coding skills needed.

---

## Before You Start

You need three things on your computer. Here's how to check (and install) each one.

### 1. Open your Terminal

This is the app where you type commands. Don't worry — you only need it for setup.

- **On Mac:** Press **Cmd + Space**, type **Terminal**, and hit Enter
- **On Windows:** Press the **Windows key**, type **PowerShell**, and hit Enter
- **On Linux:** Press **Ctrl + Alt + T**

You'll see a window with a blinking cursor. That's your terminal. Leave it open — you'll use it for the next steps.

### 2. Check for Node.js

Type this into your terminal and press Enter:

```
node --version
```

- **If you see a number** like `v18.0.0` or higher — you're good. Move on.
- **If you see "command not found"** — you need to install it:
  1. Go to [nodejs.org](https://nodejs.org)
  2. Click the big green **"LTS"** download button
  3. Open the downloaded file and follow the installer
  4. Close your terminal, open a new one, and try `node --version` again

### 3. Check for Git

Type this into your terminal and press Enter:

```
git --version
```

- **If you see a number** like `git version 2.39.0` — you're good.
- **If you see "command not found"** — you need to install it:
  - **Mac:** A popup will ask to install developer tools. Click **Install** and wait.
  - **Windows:** Download from [git-scm.com](https://git-scm.com/download/win), run the installer, and accept all defaults.
  - **Linux:** Type `sudo apt install git` and press Enter.

### 4. Claude subscription

You need a **Claude Max** (or Claude Pro) subscription. If you don't have one, sign up at [claude.ai](https://claude.ai).

---

## Setup (one time only)

### Step 1: Install Claude Code

Copy and paste this into your terminal, then press Enter:

```
npm install -g @anthropic-ai/claude-code
```

Wait for it to finish (about 30 seconds). You'll know it's done when you see your blinking cursor again.

**Check it worked** — type this and press Enter:

```
claude --version
```

You should see a version number. If you do, Claude Code is installed.

### Step 2: Download the project files

Copy and paste this into your terminal, then press Enter:

```
git clone https://github.com/MichaelMatiasOrg/clarity-labs.git
```

This downloads all the Clarity presentation files to your computer. It creates a folder called `clarity-labs` wherever your terminal is currently pointed (usually your home folder).

### Step 3: Go into the project folder

Copy and paste this into your terminal, then press Enter:

```
cd clarity-labs
```

> **What does `cd` mean?** It stands for "change directory" — it's like double-clicking a folder on your desktop. You're just telling the terminal "go inside this folder."

### Step 4: Launch Claude Code for the first time

Type this and press Enter:

```
claude
```

**The first time you run this, a few things will happen:**

1. **Sign in** — Your web browser will open to an Anthropic login page. Sign in with the same account you use for [claude.ai](https://claude.ai). Once you see "Authentication successful," switch back to your terminal.

2. **Choose a theme** — Claude Code will ask if you want **dark mode** or **light mode**. This is just the color of the tool's interface (dark text on light background, or light text on dark background). **Pick whichever you prefer — it doesn't affect your presentations.** You can always change it later.

3. **Choose your editor** — If asked about a "preferred editor," just press Enter to accept the default. This doesn't matter for what we're doing.

4. **Done!** You'll see Claude Code's prompt — a text area where you can type messages. It looks similar to the Claude chat at claude.ai, but it runs in your terminal and can build files on your computer.

### Step 5: Install plugins (recommended)

These make the experience better. Type each command into Claude Code (not your regular terminal — you should already be inside Claude Code from Step 4).

**Superpowers plugin** — gives Claude Code a structured brainstorming mode:

```
/plugin install superpowers@claude-plugins-official
```

When it asks about scope, type **User** and press Enter.

**Browser preview plugin** — lets Claude Code open your presentations in a browser to check them visually:

```
/mcp add playwright -- npx @anthropic-ai/claude-code-playwright
```

After this, type `/exit` to leave Claude Code, then run this in your regular terminal:

```
npx playwright install chromium
```

This downloads a lightweight browser that Claude Code uses for previews.

### Step 6: Make sure everything works

Go back into the project folder and start Claude Code:

```
cd clarity-labs
claude
```

Try typing:

```
What presentation templates are available?
```

If Claude Code gives you a helpful answer about components and assets, everything is set up correctly.

---

## Using It Day-to-Day

Every time you want to build or edit a presentation, you just need two steps:

### 1. Open your terminal

(Same as before — Cmd+Space → Terminal on Mac, or Windows key → PowerShell on Windows.)

### 2. Go to the project folder and start Claude Code

Copy and paste this and press Enter:

```
cd clarity-labs && claude
```

> **Tip:** This is the same as opening a folder and then launching the tool inside it. The `&&` just means "do the first thing, then do the second thing."

---

## Building a Presentation

Once Claude Code is running, just describe what you need in plain English:

```
Build me a 10-slide deck for HR leaders at mid-market companies
about how Clarity catches hiring fraud before day one.
Focus on the Greenhouse integration and the free threat scan offer.
```

Claude Code will:
1. Ask you a few clarifying questions (audience, tone, key message)
2. Pick the right slide layouts from our library
3. Use real Clarity logos, screenshots, colors, and fonts
4. Build the full presentation file
5. Save it on a separate branch (Michael will review and publish it)

### Making changes

Talk to it naturally — one change at a time works best:

```
"Make the stats on slide 3 bigger"
"Add the Workday logo to the integration slide"
"Change the title to 'Secure Your Hiring Pipeline'"
```

### Using images

Claude Code can't look at images you paste in. Instead, tell it which image to use by name:

```
"Use the during-interview screenshot on slide 4"
```

To see everything available:

```
"Show me what's in docs/ASSETS.md"
```

If you need an image that doesn't exist yet, ask Michael or the design team to add it.

---

## What You Don't Need to Worry About

- **Design rules** — Claude Code already knows our brand guidelines (colors, fonts, no emojis). You don't need to memorize them.
- **Code** — You never need to write or read HTML/CSS. Just describe what you want.
- **Publishing** — You can't accidentally break the live site. Your work is always saved separately. Michael reviews and publishes it.

---

## Common Questions

### "It says 'command not found' when I type `claude`"
Close your terminal, open a new one, and try again. If it still doesn't work, re-run the install command from Step 1.

### "I closed the terminal. How do I get back in?"
Open your terminal again and type:
```
cd clarity-labs && claude
```

### "It's asking me to log in again"
That's normal if it's been a while. Your browser will open — just sign in and switch back to the terminal.

### "It tried to push to main and got rejected"
Tell Claude Code:
```
"Create a new branch and push there instead"
```

### "The presentation looks weird on my phone"
Tell Claude Code:
```
"Check the mobile layout for all slides and fix any issues"
```

### "I need a logo or screenshot that doesn't exist"
Don't let Claude Code make one up — it won't look right. Ask Michael or the design team to add the real asset.

### "I'm stuck or something went wrong"
Ask Michael or ping in the team Slack. Don't worry — you can't break anything.

---

## Quick Reference Card

| What you want to do | What to type in your terminal |
|---|---|
| Open the project | `cd clarity-labs && claude` |
| Check Claude Code is installed | `claude --version` |
| Check Node.js is installed | `node --version` |
| Leave Claude Code | `/exit` |
| See available presentation assets | (Inside Claude Code) `Show me docs/ASSETS.md` |

---

*Questions? Ask Michael or ping in the team Slack. Happy building!*
