# SPEC: Homepage Redesign — Organized Presentation Library

## Problem
The Clarity Labs homepage has grown to 10+ presentations and is becoming hard to navigate. Cards are listed in a flat 2-column grid with no grouping or filtering. As we add more decks, finding the right one gets harder.

## Goal
Reorganize the presentations section so it's **easy to browse, filter, and find** the right deck — while keeping the current aesthetic feel (dark preview cards, clean typography, pill tags, author attribution).

## Design Requirements

### 1. Category Filter Bar
Add a horizontal filter bar above the presentation grid. Clicking a category filters the cards with a smooth animation.

**Categories (derived from the existing card tags):**
- **All** (default — shows everything)
- **Sales** — Decks for prospects/customers (CISO shareable, HR decks, hiring fraud threats)
- **Customer** — Customer-specific decks (Deel, Calix, etc.)
- **Internal** — Team-only content (All Hands, SDR playbook)
- **Product** — Product demos and technical deep dives
- **Event** — Conference/event presentations (Masterclass)

**Filter bar design:**
- Horizontally scrollable on mobile
- Pill-style buttons matching our existing tag aesthetic
- Active filter gets green accent (`#61F393`) background with dark text
- Inactive filters: subtle gray background, navy text
- Smooth CSS transition when filtering (cards fade out/in or rearrange)
- Sticky just below the nav bar when scrolling

### 2. Sort Options
Add a small sort control (right-aligned, next to or below the filter bar):
- **Newest first** (default) — by date
- **Most slides** — by slide count
- **A-Z** — alphabetical by title

Use a minimal dropdown or toggle pills. Don't over-design this — it should be subtle.

### 3. Search
Add a search input in the filter bar area:
- Searches across: title, description, tags, author
- Real-time filtering as you type (no submit button)
- Subtle magnifying glass icon
- Clears with an X button
- When searching, category filter resets to "All"

### 4. Card Layout Improvements
Keep the current card design (it looks great) but add:
- **Category badge** is already there (top-left of preview) — keep it
- **Hover effect:** Subtle lift + shadow increase (already exists — keep it)
- **Card order:** Newest first by default (use the date in the pill tags)

### 5. Responsive Grid
- **Desktop (>1024px):** 3 columns (currently 2 — we have enough decks now for 3)
- **Tablet (768-1024px):** 2 columns
- **Mobile (<768px):** 1 column, full width

### 6. Section Organization
Currently the homepage has: Hero → Presentations → Customer Calls → Live Demos → Toolbox → Resources

**Keep this structure** but make presentations the dominant section since it's the primary content. The filter/search only applies to the Presentations section.

### 7. Empty State
When a filter/search returns no results, show:
- "No presentations match your search" with a subtle illustration or icon
- A "Clear filters" button

## Technical Requirements

- **Pure CSS/JS** — no frameworks. Keep it consistent with the existing codebase.
- **Data-driven cards** — each card should have `data-category`, `data-date`, `data-slides`, `data-title`, `data-tags` attributes for filtering/sorting. This makes it trivial to add new cards.
- **Smooth animations** — use CSS transitions for filter changes (opacity + transform). Cards that don't match should `display: none` with a brief fade.
- **URL state** — optional: update URL hash when filtering (e.g., `#presentations?category=sales`) so links can deep-link to filtered views.
- **Preserve everything else** — Hero section, Customer Calls, Live Demos, Toolbox, Resources, side nav, confetti animation — all stay exactly as they are. Only the Presentations section gets the upgrade.

## Implementation Notes

- Read the current `index.html` thoroughly before starting — understand the existing card structure, CSS classes, and JavaScript.
- The filter/sort/search JS should be minimal and self-contained (no jQuery, no React).
- Each presentation card already has metadata in pill tags (slide count, date, category). Parse or replicate this into data attributes.
- Test on mobile — the filter bar must be usable on small screens (horizontal scroll or wrap).

## What NOT to Change
- Hero section design (green gradient, aurora, confetti)
- Card visual design (dark preview area, typography, pill tags, author line)
- Nav bar
- Side navigation
- Customer Calls, Live Demos, Toolbox, Resources sections
- Footer / bottom padding
- Any existing URLs or links

## Build Instructions
- Work on a branch (e.g., `homepage-redesign`)
- Only modify `index.html` (and any new CSS/JS needed inline)
- Open a PR when done — do NOT merge to main
