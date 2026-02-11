// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Narration/Slide Integrity', () => {

  test('every narration entry has a matching slide', async ({ page }) => {
    await page.goto('/presentations/masterclass/', { waitUntil: 'domcontentloaded' });
    const slideIds = await page.locator('[data-slide-id]').evaluateAll(
      els => els.map(el => el.dataset.slideId)
    );
    const entryIds = await page.evaluate(() =>
      window.NarrationData.entries.map(e => e.id)
    );
    for (const id of entryIds) {
      expect(slideIds, `Narration entry "${id}" has no matching slide`).toContain(id);
    }
  });

  test('no unexpected duplicate narration entry IDs', async ({ page }) => {
    await page.goto('/presentations/masterclass/', { waitUntil: 'domcontentloaded' });
    const ids = await page.evaluate(() =>
      window.NarrationData.entries.map(e => e.id)
    );
    const counts = {};
    ids.forEach(id => { counts[id] = (counts[id] || 0) + 1; });
    const dupes = Object.entries(counts).filter(([, c]) => c > 1).map(([id]) => id);
    const allowedDupes = ['two-pillars'];
    const unexpected = dupes.filter(id => !allowedDupes.includes(id));
    expect(unexpected, `Unexpected duplicate narration IDs: ${unexpected}`).toHaveLength(0);
  });

  test('NarrationData loads with valid structure', async ({ page }) => {
    await page.goto('/presentations/masterclass/', { waitUntil: 'domcontentloaded' });
    const valid = await page.evaluate(() => {
      const nd = window.NarrationData;
      return !!(nd && Array.isArray(nd.entries) && nd.entries.length > 0 && nd.meta && nd.meta.voice);
    });
    expect(valid).toBe(true);
  });

});
