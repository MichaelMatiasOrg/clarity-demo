# Protocol: Branded Image Compositing

## When This Applies
Any time I need to create an image containing a specific brand's logo, icon, or visual identity element (Clarity or any other company).

## Core Principle
**Brand assets must be composited from real files — never AI-generated.**

AI image generators (Gemini, DALL-E, Midjourney, etc.) approximate shapes from text descriptions. They will never produce an exact brand logo. Even if I describe it perfectly, the output will be "a star that looks similar" — not the actual trademarked asset.

## Correct Workflow

### Step 1: Locate the real asset
Find the actual logo/icon file before doing anything else.
```bash
# For Clarity:
ls ~/clawd/clarity-demo/shared/brand/
# or check zoom-backgrounds/images/ for pre-exported PNGs
```

Common locations:
- `clarity-demo/shared/brand/` — SVGs and brand files
- `clarity-demo/zoom-backgrounds/images/clarity-star-green.png` — pre-exported logo

### Step 2: Prepare the composite element
If the logo needs to go in a frame or on a specific background:
```bash
# Use ImageMagick to composite logo onto a frame/canvas
magick composite -gravity center clarity-star-green.png frame-background.png logo-in-frame.png
```

### Step 3: Composite onto the scene
Either:
- **Traditional compositing** (ImageMagick) — precise control, guaranteed accuracy
- **AI editing with real asset** — provide the composite as input, ask AI to blend/integrate it naturally

### Step 4: Verify the result
Before delivering, visually compare the output logo against the source asset. Ask:
- Does it match exactly?
- Same proportions?
- Same color (#61F393 for Clarity green)?

### Step 5: Consider the use case
For Zoom backgrounds specifically: **the person sits in the center of the frame.**
- Don't place the logo dead center — it will be hidden behind the person's head
- Position branding to the **upper left or upper right** where it's visible alongside the person
- Visualize the final composition with a person in frame before delivering

### Step 6: Fresh eyes — is it marvelous?
Step back and view the final image as if seeing it for the first time. Ask honestly:
- Would I be proud to show this?
- Does it look professional and polished, or just "acceptable"?
- Is this something a human designer would deliver, or does it look AI-generated/pasted?
- Would Michael use this in an actual call?

**If the answer is not "yes, this is marvelous" — keep iterating.**

Don't ship "good enough." Ship work you're proud of.

## What NOT To Do

❌ Ask AI to "draw a green 4-pointed star like Clarity's logo"
❌ Describe the logo shape and expect accurate reproduction  
❌ Assume AI-generated stars/shapes are "close enough"
❌ Skip the verification step

## Why This Matters

1. **Brand integrity** — Logos are trademarked; approximations look unprofessional
2. **Consistency** — Every use of the logo should be identical
3. **Trust** — If I can't handle basic brand assets correctly, why trust me with anything else?

## Quick Reference: Clarity Brand Assets

| Asset | Location |
|-------|----------|
| Logo SVG | `clarity-demo/shared/brand/clarity-logo.svg` |
| Star icon (green) | `clarity-demo/zoom-backgrounds/images/clarity-star-green.png` |
| Star icon (dark) | `clarity-demo/zoom-backgrounds/images/clarity-star-dark.png` |
| Brand guidelines | `clarity-demo/docs/BRAND.md` |

---

*Created: 2026-02-11 after making this mistake twice in one session.*
