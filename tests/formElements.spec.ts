import { expect, test } from '@playwright/test';

/*
 * The following resource may be helful in locating elements in the DOM
 * using both accessibility selectors and CSS selectors:
 *
 * https://playwright.dev/docs/locators
 *
 * When interacting with dialogs and prompts, the following resources
 * may be helpful:
 *
 * https://playwright.dev/docs/dialogs
 * https://playwright.dev/docs/api/class-dialog#dialog-accept
 */


/*
 * https://playwright.dev/docs/locators

 * https://playwright.dev/docs/dialogs
 * https://playwright.dev/docs/api/class-dialog#dialog-accept
 */
test.beforeEach(async ({ page }) => {
    await page.goto('/forms');
});

test('Basic text input', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Greeting' }).fill('hello');

    await expect(page.getByText('You have greeted the page')).toBeVisible();
});

test('Input without proper attributes', async ({ page }) => {
    await page.getByRole('textbox').nth(1).fill('undefined is not a function');
    await expect(page.getByText('be careful')).toBeVisible();
});

test('Reading values from the page', async ({ page }) => {
    const value = await page.locator('#dynamic-value').textContent();

    await page.getByRole('textbox', { name: 'Insert the value here' }).fill(value!);
    await expect(page.getByText('You have successfully read a value from the page')).toBeVisible();
});

test('Radio buttons', async ({ page }) => {
    await page.getByRole('radio', { name: 'Java', exact: true }).check();
    await page.getByRole('radio', { name: 'JavaScript', exact: true }).check();
    await page.getByRole('radio', { name: 'TypeScript', exact: true }).check();
    await page.getByRole('radio', { name: 'Python', exact: true }).check();

    await expect(page.getByText('The term "radio button" in HTML comes from the old-school radio dials that let you choose only one station at a time.')).toBeVisible();
});

test('Checkboxes', async ({ page }) => {
    await page.locator('input[name="terms-and-conditions"]').check();
    await page.locator('.no-robot input').check();
    await page.locator('input#yes-robot').check();
    await page.locator('[title="Subscribe to newsletter"] input').check();
    await page.getByRole('checkbox').nth(4).check();

    await expect(page.getByText('Button-mashing detected')).toBeVisible();
});

test('Alerts and prompts', async ({ page }) => {
    page.on('dialog', async dialog => {
        await dialog.accept('2');
    });
    await page.getByRole('button', { name: 'What is 1 + 1?' }).click();

    await expect(page.getByText('You have handled the prompt successfully')).toBeVisible();
});
