import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/delays');
});


test('Delayed appearance', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Enter the text' }).fill('hello world');

    await expect(page.getByText("Nice job! Hello to you too! 👋")).toBeVisible();
});

test('Delayed enablement', async ({ page }) => {
    await page.getByRole('button', { name: 'Click me!' }).click();

    await expect(page.getByText("Thoughtful clicking? You must be a real tester!")).toBeVisible();
});