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

});

test.describe('Presentation Functionality', () => {

  test('masterclass has multiple slides', async ({ page }) => {
    await page.goto('/presentations/masterclass/', { waitUntil: 'domcontentloaded' });
    const slides = page.locator('.slide');
    const count = await slides.count();
    expect(count).toBeGreaterThan(5);
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

  test('masterclass - no critical errors', async ({ page }) => {
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
