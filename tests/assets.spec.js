// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Assets Load', () => {

  test('all images on masterclass load', async ({ page }) => {
    const failed = [];
    page.on('response', r => {
      if (r.request().resourceType() === 'image' && !r.ok()) {
        failed.push({ url: r.url(), status: r.status() });
      }
    });

    await page.goto('/presentations/masterclass/');
    await page.waitForLoadState('load');

    if (failed.length) console.log('Failed images:', failed);
    expect(failed).toHaveLength(0);
  });

  test('CSS files load on masterclass', async ({ page }) => {
    const failed = [];
    page.on('response', r => {
      if (r.request().resourceType() === 'stylesheet' && !r.ok()) {
        failed.push(r.url());
      }
    });

    await page.goto('/presentations/masterclass/');
    await page.waitForLoadState('load');
    expect(failed).toHaveLength(0);
  });

  test('JS files load on masterclass', async ({ page }) => {
    const failed = [];
    page.on('response', r => {
      if (r.request().resourceType() === 'script' && !r.ok()) {
        failed.push(r.url());
      }
    });

    await page.goto('/presentations/masterclass/');
    await page.waitForLoadState('load');
    expect(failed).toHaveLength(0);
  });

});

test.describe('Shared Mockups Load', () => {
  const sharedMockups = [
    'continuous-verify',
    'deepfake-alert',
    'during-interview',
    'employee-dashboard',
    'pre-interview',
  ];

  for (const name of sharedMockups) {
    test(`shared mockup: ${name}`, async ({ page }) => {
      const response = await page.goto(`/shared/mockups/${name}.html`);
      expect(response.status()).toBe(200);
    });
  }
});

test.describe('Masterclass Mockups Load', () => {
  const masterclassMockups = [
    'marcus-chen-background-check',
    'marcus-chen-linkedin',
    'marcus-chen-offer-letter',
    'marcus-chen-paystub',
    'marcus-chen-resume',
    'vero-careers-page',
    'vero-financial-website',
    'vero-job-details',
  ];

  for (const name of masterclassMockups) {
    test(`masterclass mockup: ${name}`, async ({ page }) => {
      const response = await page.goto(`/presentations/masterclass/mockups/${name}.html`);
      expect(response.status()).toBe(200);
    });
  }
});

test.describe('Shared Resources', () => {

  test('shared CSS loads', async ({ page }) => {
    const response = await page.goto('/shared/css/design-system.css');
    expect(response.status()).toBe(200);
  });

  test('shared JS loads', async ({ page }) => {
    const response = await page.goto('/shared/js/navigation.js');
    expect(response.status()).toBe(200);
  });

});
