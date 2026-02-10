// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Assets Load', () => {

  test('all images on main presentation load', async ({ page }) => {
    const failed = [];
    page.on('response', r => {
      if (r.request().resourceType() === 'image' && !r.ok()) {
        failed.push({ url: r.url(), status: r.status() });
      }
    });

    await page.goto('/presentation.html');
    await page.waitForLoadState('networkidle');
    
    if (failed.length) console.log('Failed images:', failed);
    expect(failed).toHaveLength(0);
  });

  test('all images on masterclass load', async ({ page }) => {
    const failed = [];
    page.on('response', r => {
      if (r.request().resourceType() === 'image' && !r.ok()) {
        failed.push({ url: r.url(), status: r.status() });
      }
    });

    await page.goto('/presentations/masterclass/');
    await page.waitForLoadState('networkidle');
    
    if (failed.length) console.log('Failed images:', failed);
    expect(failed).toHaveLength(0);
  });

  test('CSS files load on presentation', async ({ page }) => {
    const failed = [];
    page.on('response', r => {
      if (r.request().resourceType() === 'stylesheet' && !r.ok()) {
        failed.push(r.url());
      }
    });

    await page.goto('/presentation.html');
    await page.waitForLoadState('networkidle');
    expect(failed).toHaveLength(0);
  });

  test('JS files load on presentation', async ({ page }) => {
    const failed = [];
    page.on('response', r => {
      if (r.request().resourceType() === 'script' && !r.ok()) {
        failed.push(r.url());
      }
    });

    await page.goto('/presentation.html');
    await page.waitForLoadState('networkidle');
    expect(failed).toHaveLength(0);
  });

});

test.describe('Mockups Load', () => {

  test('shared mockups accessible', async ({ page }) => {
    const response = await page.goto('/shared/mockups/');
    // Either 200 or directory listing
    expect([200, 403]).toContain(response.status());
  });

  test('masterclass mockups load', async ({ page }) => {
    // Try a known mockup
    const response = await page.goto('/presentations/masterclass/mockups/');
    expect([200, 403]).toContain(response.status());
  });

});

test.describe('Shared Resources', () => {

  test('shared CSS loads', async ({ page }) => {
    const response = await page.goto('/shared/css/presentation.css');
    expect(response.status()).toBe(200);
  });

  test('shared JS loads', async ({ page }) => {
    const response = await page.goto('/shared/js/presentation.js');
    expect(response.status()).toBe(200);
  });

});
