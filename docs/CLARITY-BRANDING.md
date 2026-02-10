# Clarity Brand Guidelines

> Source of truth for Clarity branding. Last updated: 2026-02-09

---

## Logo

### Primary Logo Files
- **White version (nav/dark bg):** `https://cdn.prod.website-files.com/68ca65f64a04c90f13846d37/68ca65f64a04c90f13846e27_Clarity%20Logo%20white.svg`
- **Dark version (light bg):** `https://cdn.prod.website-files.com/68ca65f64a04c90f13846d37/68ca65f64a04c90f13846dfe_Clarity%20Logo.svg`
- **Local copy:** `~/clawd/clarity-demo/clarity-logo-website.svg`

### Logo Anatomy
The Clarity logo consists of:
1. **Icon:** Four-pointed star/sparkle shape (arrows pointing outward)
2. **Wordmark:** "Clarity" text

### Logo Variations
| Variant | Icon Color | Text Color | Use Case |
|---------|------------|------------|----------|
| White | White | White | Dark backgrounds, nav bar |
| Color | `#61F393` | Dark | Light backgrounds |
| Monochrome dark | Dark | Dark | Light backgrounds, print |

---

## Colors

### Primary Palette
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Clarity Green** | `#61F393` | 97, 243, 147 | Primary accent, CTAs, icon |
| **Navy** | `#0a1628` | 10, 22, 40 | Primary background |
| **White** | `#FFFFFF` | 255, 255, 255 | Text on dark, backgrounds |

### ⚠️ DO NOT USE
| Wrong Color | Hex | Notes |
|-------------|-----|-------|
| Teal | `#00d4aa` | Often confused with Clarity green |
| Teal gradient | `#00d4aa → #00b892` | Clarity uses flat colors, no gradients |

### Background Colors
- **Dark sections:** `#0a1628` (navy)
- **Light sections:** `#FFFFFF` (white)
- **Cards on dark:** Slightly lighter navy or with subtle border

---

## Typography

### Font Family
**Primary:** Manrope
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Use: Headlines, body text, UI elements

**Secondary:** Poppins
- Use: Occasional accent text

### Font Import
```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Poppins&display=swap" rel="stylesheet">
```

### ⚠️ DO NOT USE
- Inter (commonly mistaken substitute)
- System fonts without fallback

---

## Buttons

### Primary CTA Button
- Background: `#61F393` (Clarity Green)
- Text: Dark (`#0a1628`)
- Border radius: ~8px (rounded, not pill)
- Includes small arrow icon suffix (→)

### Secondary Button
- Background: Transparent
- Border: 1px solid white or green
- Text: White or green

### Button Example (HTML/CSS)
```css
.btn-primary {
    background: #61F393;
    color: #0a1628;
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-family: 'Manrope', sans-serif;
    font-weight: 600;
}
```

---

## Visual Style

### Do's ✅
- Use flat colors (no gradients on brand elements)
- Maintain high contrast (white text on navy)
- Use the official logo SVG files
- Keep plenty of whitespace
- Use Manrope font consistently

### Don'ts ❌
- Don't use gradients on the green accent color
- Don't use teal (`#00d4aa`) instead of Clarity green
- Don't use Inter or other substitute fonts
- Don't add effects (shadows, glows) to the logo
- Don't stretch or distort the logo

---

## Taglines

- **Primary:** "Never Hire a Bad-Actor"
- **Secondary:** "Protecting your organization from hiring fraudsters"
- **CTA:** "Get Clarity" / "Request a Demo"

---

## File Locations

```
~/clawd/clarity-demo/
├── clarity-logo-website.svg    # Official logo from website
├── logo-comparison.png         # Side-by-side comparison
├── our-saved-logo.png          # Rendered logo preview
├── CLARITY-BRANDING.md         # This file

~/clawd/repos/michael-manifest-space/src/assets/
├── clarity-logo.svg            # Older version (green icon variant)
├── clarity-icon.png            # Icon only
```

---

## Quick Reference

```css
/* Clarity Brand Colors */
--clarity-green: #61F393;
--clarity-navy: #0a1628;
--clarity-white: #FFFFFF;

/* Typography */
--font-primary: 'Manrope', sans-serif;
```

---

## Website Reference
- **URL:** https://getclarity.ai
- **Assets CDN:** cdn.prod.website-files.com/68ca65f64a04c90f13846d37/
