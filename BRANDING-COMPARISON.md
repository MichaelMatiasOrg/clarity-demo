# Clarity Branding: 1:1 Comparison

## Real Website (getclarity.ai) vs Our Slides

---

## 🎨 COLORS

| Element | Real Website | Our Slides | ❌ Match? |
|---------|--------------|------------|-----------|
| Primary Green | `#61F393` (bright lime) | `#00d4aa` (teal) | ❌ NO |
| Navy Background | `#0a1628` | `#0a1628` | ✅ YES |
| Gradient | None (flat green) | Linear gradient `#00d4aa → #00b892` | ❌ NO |

**The green is completely wrong.** Real Clarity uses a flat, bright lime green (`#61F393`), not a teal gradient.

---

## 🔤 TYPOGRAPHY

| Element | Real Website | Our Slides | ❌ Match? |
|---------|--------------|------------|-----------|
| Primary Font | **Manrope** | Inter | ❌ NO |
| Secondary Font | Poppins | Inter | ❌ NO |
| Weight | 400, 500, 600, 700 | Various | ⚠️ Check |

**Font import for real branding:**
```html
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Poppins&display=swap" rel="stylesheet">
```

---

## 🏷️ LOGO

### Real Clarity Logo
The logo has TWO parts:
1. **Icon:** Four arrows forming a diamond/asterisk pattern (green `#61F393`)
2. **Text:** "Clarity" in white, custom font weight

```svg
<!-- The four-arrow icon -->
<svg viewBox="0 0 61 62" fill="none">
  <!-- Top-right arrow -->
  <path d="M43.2152 18.5883L35.4847 0.951172L30.574 12.3009..." fill="#61F393"/>
  <!-- Bottom-right arrow -->
  <path d="M43.2129 44.0847L60.7012 36.2884..." fill="#61F393"/>
  <!-- Bottom-left arrow -->
  <path d="M17.9342 44.0892L25.6646 61.7264..." fill="#61F393"/>
  <!-- Top-left arrow -->
  <path d="M17.9319 18.5929L0.441406 26.3868..." fill="#61F393"/>
</svg>
```

### Our Slides Logo
```css
.clarity-logo-icon {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #00d4aa 0%, #00b892 100%);
    border-radius: 8px;  /* Just a rounded square! */
}
```

**This is completely wrong.** We have a teal rounded square. The real logo is four distinctive green arrows.

---

## 🔘 BUTTONS

### Real Website
- Flat green background (`#61F393`)
- Dark text
- Small arrow icon suffix
- Rounded corners (not pills)

### Our Slides
- Teal gradient
- White text
- No arrow icon
- Different radius

---

## 📋 ACTION ITEMS TO FIX

### 1. Update CSS Colors
```css
/* REPLACE */
'clarity-teal': '#00d4aa'
'clarity-teal-dark': '#00b892'

/* WITH */
'clarity-green': '#61F393'
```

### 2. Update Font
```html
<!-- REPLACE -->
<link href="https://fonts.googleapis.com/css2?family=Inter..." rel="stylesheet">

<!-- WITH -->
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 3. Use Real Logo SVG
Copy the actual SVG from: `~/clawd/repos/michael-manifest-space/src/assets/clarity-logo.svg`

### 4. Remove Gradients
The real website uses flat colors, not gradients on the green elements.

---

## 📁 Reference Files

- Real logo SVG: `~/clawd/repos/michael-manifest-space/src/assets/clarity-logo.svg`
- Real icon PNG: `~/clawd/repos/michael-manifest-space/src/assets/clarity-icon.png`
- Current slides: `~/clawd/work/ciso-demo/slides/clarity-branded.html`

---

## Summary

| Element | Status |
|---------|--------|
| Logo icon | ❌ Completely wrong (rounded square vs four-arrow) |
| Logo color | ❌ Wrong (`#00d4aa` vs `#61F393`) |
| Typography | ❌ Wrong font (Inter vs Manrope) |
| Green accent | ❌ Wrong shade + has gradient |
| Navy background | ✅ Correct |
