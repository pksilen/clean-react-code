import { expect, test } from '@playwright/test';

test.describe('playwright website', () => {
  test('that playwright home page has correct title', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('that clicking "Get started" link navigates to correct page', async ({
    page
  }) => {
    await page.goto('https://playwright.dev/');

    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole('heading', { name: 'Installation' })
    ).toBeVisible();
  });
});
