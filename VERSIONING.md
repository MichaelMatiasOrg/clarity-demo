# Versioning Guide

The Clarity Demo presentation uses **Semantic Versioning** with optional **release codenames**.

## Format
```
MAJOR.MINOR.PATCH[-CODENAME]
1.0.0-Guardian
```

## When to Bump Versions

### PATCH (1.0.0 → 1.0.1)
- Bug fixes
- Small copy tweaks
- Minor styling adjustments
- Performance improvements
- Logo/branding compliance fixes

**Example:** "1.0.1 - Fix typo on Slide 5"

### MINOR (1.0.0 → 1.1.0)
- New animations
- New sections or slides
- Significant content updates
- UI improvements
- New features (e.g., narration, new detection methods)

**Example:** "1.1.0-Phoenix - Add lifecycle animations"

### MAJOR (1.0.0 → 2.0.0)
- Complete redesign/restructure
- Major narrative shift (e.g., switch from skills to identity risk)
- Breaking changes to presentation flow
- Major feature additions

**Example:** "2.0.0-Sentinel - Rebrand for 2026 CISO summit"

## Codename Guidelines

Codenames are **optional** but encouraged for memorable releases. Use security/defense themed names:

**Examples:**
- Guardian (current - logo fixes, animations)
- Phoenix (new lifecycle features)
- Sentinel (major rebrand)
- Vanguard (new detection features)
- Bulwark (restructure/refactor)

---

## How to Update

### 1. Update VERSION file
```bash
echo "1.1.0-Phoenix" > VERSION
```

### 2. Update presentation.html meta tag
```html
<meta name="presentation-version" content="1.1.0-Phoenix">
```

### 3. Update HTML version badge
```html
<div id="version-badge" class="version-badge">v1.1.0-Phoenix</div>
```

### 4. Commit with version in message
```bash
git commit -m "feat: Add lifecycle slide animations

Adds smooth entrance animations for the Employee Identity Lifecycle slide.
- Center icon rotation (8s)
- Ring flow animation (20s)
- Staggered card entrance
- Checkmark badges

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>

[1.1.0-Phoenix]"
```

### 5. Tag in git (optional but recommended)
```bash
git tag -a v1.1.0-Phoenix -m "Add lifecycle animations"
git push origin v1.1.0-Phoenix
```

---

## Version Display

The version badge appears in the **bottom-right corner** when you:
- Hover near the bottom-right of the presentation
- Automatically fades after 500ms when you move away

This keeps it subtle and non-intrusive while remaining easy to find.

---

## Current Versions

| Version | Release Date | Highlights |
|---------|--------------|----------|
| 1.0.0-Guardian | 2026-02-10 | Logo compliance, lifecycle animations |

