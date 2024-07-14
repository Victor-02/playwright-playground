import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.ea.com/');
});

test('EA Play page should be equals to screenshot', async ({ page }) => {
    // await page.getByRole('button', { name: 'Accept' }).click();
    await page.getByLabel('Menu', { exact: true }).click();
    await page.getByRole('link', { name: 'EA Play', exact: true }).click();
    await expect(page).toHaveScreenshot('EAPlayPage.png', { maxDiffPixels: 100 });
});

test('EA Home page should be equals to screenshot', async ({ page }) => {
    // await page.getByRole('button', { name: 'Accept' }).click();
    await expect(page).toHaveScreenshot('HomePage.png', { maxDiffPixels: 100 });
});