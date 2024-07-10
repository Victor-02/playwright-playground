import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.ea.com/');
  await expect(page.locator('div').filter({ hasText: 'Don’t just get the game. Get' }).locator('img')).toBeVisible();
  await page.getByRole('heading', { name: 'Don’t just get the game. Get' }).click();
  await page.locator('div').filter({ hasText: 'Don’t just get the game. Get' }).click();
  await expect(page.getByRole('heading', { name: 'Don’t just get the game. Get' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Don’t just get the game. Get' })).toBeVisible();
  await page.getByRole('link', { name: 'Join Now' }).click();
  await expect(page.getByRole('heading', { name: 'Don’t just get the game. Get' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'What is EA Play?' })).toBeVisible();
  await expect(page.locator('ea-section:nth-child(2) > .eapl-section-column > .eapl-animate__section-column')).toBeVisible();
  await expect(page.getByText('R$ 90,00 / 3 monthsOr pay annually and save 44%R$ 200,00 / yearPlay select new-')).toBeVisible();
  await expect(page.locator('ea-play-tile iron-icon').first()).toBeVisible();
  await page.locator('a').filter({ hasText: /^Join EA Play$/ }).click();
  await page.getByRole('radio').check();
  await expect(page.getByLabel('R$ 200,00/yr 12 monthsBest')).toBeVisible();
  await page.getByLabel('R$ 200,00/yr 12 monthsBest').check();
  await expect(page.locator('#ea-play-drawer').getByRole('list').locator('#items')).toBeVisible();
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('button', { name: 'Check out' }).click();
  await expect(page.locator('#toggle-form-email-input div').filter({ hasText: 'Phone or Email' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sign in to your EA Account' })).toBeVisible();
});