const { test, expect } = require('@playwright/test');

  test('User can perform a purchase', async ({ page }) => {
    // Go to main page
    await page.goto('https://rozetka.com.ua/');

    await page.fill('rz-header input', 'Наушники JBL Tune 500 черный');

    // Click "Search" ("Найти") button
    await page.click('rz-header form > button');

    // Wait for tiles appear after search
    await page.waitForSelector('.goods-tile');

    // Click first headphones from search results
    await page.click('.goods-tile');

    // Click Buy button
    await page.click('.product__buy .buy-button');

    const shoppingCartLocator = page.locator('text=Корзина');
    const purchaseButtonLocator = page.locator('text=" Оформить заказ "');

    // Assertion to check that sorting applied correctly
    await expect(shoppingCartLocator).toBeVisible();
    await expect(purchaseButtonLocator).toBeVisible();
  });
