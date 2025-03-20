import { expect, test } from '@playwright/test';

/*
 * https://playwright.dev/docs/emulation#viewport
 * https://playwright.dev/docs/api/class-page#page-set-viewport-size
 */
test.beforeEach(async ({ page }) => {
    await page.goto('/responsive');
});

test('Dark mode', async ({ page }) => {
    await page.screenshot({ path: './screenshots/light-mode.png' });

    await page.getByRole('button', { name: 'Switch to dark mode' }).click();

    await page.screenshot({ path: './screenshots/dark-mode.png' });

    await expect(page.getByText("You have successfully switched between the modes!")).toBeVisible();
});

test('Responsive design', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.screenshot({ path: './screenshots/extra-small.png' });

    await page.setViewportSize({ width: 800, height: 600 });
    await page.screenshot({ path: './screenshots/small.png' });

    await page.setViewportSize({ width: 1024, height: 768 });
    await page.screenshot({ path: './screenshots/medium.png' });

    await page.setViewportSize({ width: 1250, height: 768 });
    await page.screenshot({ path: './screenshots/large.png' });

    await expect(page.getByText("You have successfully tested all supported screen sizes!")).toBeVisible();
});