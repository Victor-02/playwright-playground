import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => { await page.goto('https://www.ea.com/'); })

test('EA play by Menu to Steam', async ({ page }) => {
  await page.getByLabel('Menu', { exact: true }).click();
  await expect(page.getByRole('link', { name: 'All Games' })).toBeVisible();
  await page.getByRole('link', { name: 'EA Play', exact: true }).click();
  await page.locator('a').filter({ hasText: /^Join Now$/ }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Accept' }).click();
  await expect(page.getByRole('link', { name: 'PlayStation' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Xbox' })).toBeVisible();
  await page.getByRole('link', { name: 'Steam' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL('https://store.steampowered.com/subscriptions/ea');
});

test('EA Play by Home', async ({ page }) => {
  await expect(page.locator('div').filter({ hasText: 'Don’t just get the game. Get' }).locator('img')).toBeVisible();
  await page.getByRole('heading', { name: 'Don’t just get the game. Get' }).click();
  await page.locator('div').filter({ hasText: 'Don’t just get the game. Get' }).click();
  await expect(page.getByRole('heading', { name: 'Don’t just get the game. Get' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Don’t just get the game. Get' })).toBeVisible();
  await page.getByRole('link', { name: 'Join Now' }).click();
  await expect(page.getByRole('heading', { name: 'Don’t just get the game. Get' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'What is EA Play?' })).toBeVisible();
  await expect.soft(page.locator('ea-section:nth-child(2) > .eapl-section-column > .eapl-animate__section-column')).toBeVisible();
  await expect.soft(page.getByText('R$ 90,00 / 3 monthsOr pay annually and save 44%R$ 200,00 / yearPlay select new-')).toBeVisible();
  await expect.soft(page.locator('ea-play-tile iron-icon').first()).toBeVisible();
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.locator('a').filter({ hasText: /^Join EA Play$/ }).click();
  await page.getByRole('radio').check();
  await expect(page.getByLabel('R$ 200,00/yr 12 monthsBest')).toBeVisible();
  await page.getByLabel('R$ 200,00/yr 12 monthsBest').check();
  await expect.soft(page.locator('#ea-play-drawer').getByRole('list').locator('#items')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Check out' })).toBeVisible();
});