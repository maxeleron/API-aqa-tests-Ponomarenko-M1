const { test, expect } = require('@playwright/test');
// const { MainPage } = require('../models/MainPage');
const { ShoppingPage } = require('../models/ShoppingPage');
const { TestColors } = require('../testData/TestColors');

// Assertion for element color
test('Buy buttons have correct color', async ({ page }) => {
    // Page Object variables
    const shoppingPage = new ShoppingPage(page);
    const testColors = new TestColors();

    // Go to page of phone "Samsung Galaxy M32"
    await shoppingPage.openSamsungGalaxyM32();

    
    const buyButton = await shoppingPage.buyButton;
    const buyCreditButton = await shoppingPage.buyCreditButton;

    // Assertion to check buttons color is correct
    await expect(buyButton).toHaveCSS('background-color', testColors.green);
    await expect(buyCreditButton).toHaveCSS('background-color', testColors.navy);
  });