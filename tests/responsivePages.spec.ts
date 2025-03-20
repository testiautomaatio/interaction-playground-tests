import { expect, test } from '@playwright/test';

/*
 * https://playwright.dev/docs/emulation#viewport
 * https://playwright.dev/docs/api/class-page#page-set-viewport-size
 */
test.beforeEach(async ({ page }) => {
    await page.goto('/responsive');
});

test('Dark mode', async ({ page }) => {
    await page.getByRole('button', { name: 'Switch to dark mode' }).click();

    await expect(page.getByText("You have successfully switched between the modes!")).toBeVisible();
});

test('Responsive design', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.setViewportSize({ width: 800, height: 600 });
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.setViewportSize({ width: 1250, height: 768 });

    await expect(page.getByText("You have successfully tested all supported screen sizes!")).toBeVisible();
});