import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/customisations');
});

test('Standard select element', async ({ page }) => {
    await page.getByLabel('Select animal:').selectOption({ value: 'fox' });

    await expect(page.getByText("You selected the correct option from a standard select element!")).toBeVisible();
});

test('Custom select element', async ({ page }) => {
    await page.locator('#select-color').click();
    await page.locator('li[data-value="blue"]').click();

    await expect(page.getByText("You have selected the correct color using a custom select element!")).toBeVisible();
});

test('Standard date picker', async ({ page }) => {
    await page.locator('#date-picker').fill("2030-01-01");

    await expect(page.getByText("You have selected the correct date using a standard date picker!")).toBeVisible();
});

test('Custom date picker', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Choose a date' }).fill("01/01/2030");
    await expect(page.getByText("You have selected the correct date using a custom date picker!")).toBeVisible();
});