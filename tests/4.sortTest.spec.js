const { test, expect } = require('@playwright/test');

test('User can sort elements', async ({ page }) => {
    // Go to main page
    await page.goto('https://rozetka.com.ua/');

    // Open Catalogue ("Каталог")
    await page.click('#fat-menu');

    // The user clicks 'Ноутбуки и компьютеры' section
    await page.click('text=Ноутбуки и компьютеры');

    // Select Laptop category
    await page.click('[title="Ноутбуки"]');

    // Sort by brand (Dell)
    await page.click('[for="Lenovo"]');

    // Sort by CPU: AMD Ryzen 5
    await page.click('[for="AMD Ryzen 5"]');

    // await page.waitForSelector('[for="16 - 24 ГБ"]');
    await page.click('[for="16 - 24 ГБ"]');

    // await page.waitForSelector('[for="256 ГБ"]');
    await page.click('[for="256 ГБ"]');

    // Select only avaliable laptops
    await page.click('[for="Есть в наличии"]');

    // Select 16"-17" diagonal
    await page.click(`[for='16"-17"']`);

    // Wait for sort applied
    await page.waitForSelector('.goods-tile__heading');

    // Assertion to check that sorting applied correctly
    const title = await page.locator('.goods-tile__title').textContent();
    await expect(title.trim()).toStrictEqual('Ноутбук HP Laptop 17-cp0007ua (423L1EA) Black');
  });