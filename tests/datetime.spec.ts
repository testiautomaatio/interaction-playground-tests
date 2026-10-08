import { expect, test } from '@playwright/test';

/*
 * See the following resource for hints about how to control time in tests:
 * https://playwright.dev/docs/clock
 */


test.beforeEach(async ({ page }) => {
    await page.goto('/datetime');
});

test('Test page using different dates', async ({ page }) => {
    await page.clock.setFixedTime(new Date('2033-02-02T10:00:00'));

    await expect(page.getByText("Time travel can be easy with the right tools!")).toBeVisible();
});
