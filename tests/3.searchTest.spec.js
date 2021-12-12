const { test, expect } = require('@playwright/test');

test('User can perform global search', async ({ page }) => {
    // Go to main page
    await page.goto('https://rozetka.com.ua/');
    // Input search text
    await page.fill('rz-header input', 'xiaomi');
    // Click "Search" ("Найти") button
    await page.click('rz-header form > button');
    // Wait for tiles appear after search
    await page.waitForSelector('.goods-tile');

    // Get all elements at search results page
    const goodsTiles = await page.locator('.goods-tile__title');
    // Get text from search results
    const allGoodsText = await goodsTiles.allInnerTexts();

    // Assertion to check all elements after searching containing searched text
    allGoodsText.map(async(item) => await expect(item.toLocaleLowerCase()).toContain('xiaomi'));
  });