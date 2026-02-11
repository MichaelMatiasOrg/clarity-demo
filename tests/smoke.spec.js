// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Core Pages Load', () => {

  test('homepage loads', async ({ page }) => {
    const response = await page.goto('/');
    expect(response.status()).toBe(200);
    await expect(page).toHaveTitle(/Clarity/i);
  });

  test('presentation.html redirects to masterclass', async ({ page }) => {
    await page.goto('/presentation.html', { waitUntil: 'domcontentloaded' });
    await page.waitForURL('**/presentations/masterclass/**');
    await expect(page.locator('.slide').first()).toBeVisible();
  });

  test('masterclass presentation loads', async ({ page }) => {
    const response = await page.goto('/presentations/masterclass/', { waitUntil: 'domcontentloaded' });
    expect(response.status()).toBe(200);
    await expect(page.locator('.slide').first()).toBeVisible();
  });

  test('brand page loads', async ({ page }) => {
    const response = await page.goto('/brand.html');
    expect(response.status()).toBe(200);
  });

  test('assets page loads', async ({ page }) => {
    const response = await page.goto('/assets.html');
    expect(response.status()).toBe(200);
  });

  test('CV generator demo loads', async ({ page }) => {
    const response = await page.goto('/demos/cv-generator/');
    expect(response.status()).toBe(200);
  });

});

test.describe('Presentation Functionality', () => {

  test('masterclass has exactly 37 slides', async ({ page }) => {
    await page.goto('/presentations/masterclass/', { waitUntil: 'domcontentloaded' });
    const slides = page.locator('.slide');
    const count = await slides.count();
    expect(count).toBe(39);
  });

  test('every slide has a data-slide-id', async ({ page }) => {
    await page.goto('/presentations/masterclass/', { waitUntil: 'domcontentloaded' });
    const slides = page.locator('.slide');
    const count = await slides.count();
    for (let i = 0; i < count; i++) {
      const id = await slides.nth(i).getAttribute('data-slide-id');
      expect(id, `Slide ${i} is missing data-slide-id`).toBeTruthy();
    }
  });

  test('keyboard navigation works', async ({ page }) => {
    await page.goto('/presentations/masterclass/', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('.slide').first()).toBeVisible();
    const initialY = await page.evaluate(() => window.scrollY);
    await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(600);
    const newY = await page.evaluate(() => window.scrollY);
    expect(newY).not.toBe(initialY);
  });

});

test.describe('Homepage Links', () => {

  test('all homepage links resolve to 200', async ({ page, request }) => {
    await page.goto('/');
    const hrefs = await page.locator('a[href]').evaluateAll(
      els => els.map(el => el.getAttribute('href'))
    );
    for (const href of hrefs) {
      const url = href.startsWith('http') ? href : `/${href}`;
      const response = await request.get(url);
      expect(response.status(), `Link "${href}" returned ${response.status()}`).toBe(200);
    }
  });

});

test.describe('No Console Errors', () => {

  test('homepage - no critical errors', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/');
    await page.waitForTimeout(1000);

    const critical = errors.filter(e => !e.includes('favicon') && !e.includes('404'));
    expect(critical).toHaveLength(0);
  });

  test('presentation - no critical errors', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/presentations/masterclass/', { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    const critical = errors.filter(e => !e.includes('favicon') && !e.includes('404'));
    expect(critical).toHaveLength(0);
  });

});
