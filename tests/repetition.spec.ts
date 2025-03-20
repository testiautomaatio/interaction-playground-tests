import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/repetition');
});

test('Mark todos as completed', async ({ page }) => {
    const boxes = page.locator('input[type="checkbox"]');

    for (const box of await boxes.all()) {
        await box.check();
    }

    await expect(page.getByText("You literally checked all the boxes!")).toBeVisible();
});

test('Counter', async ({ page }) => {
    const button = page.getByRole('button', { name: '+' });
    const counter = page.getByText('Counter:');

    while (!(await counter.textContent())?.includes("100 / 100")) {
        await button.click();
    }

    await expect(page.getByText("If you keep clicking, I might start charging per press")).toBeVisible();
});

