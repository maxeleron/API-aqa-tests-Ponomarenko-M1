const { test, expect } = require('@playwright/test');
const { MainPage } = require('../models/MainPage');
const { TestStrings } = require('../testData/TestStrings');

// Assertion for text
test('Catalogue button has correct text', async ({ page }) => {
    // Page Object variables
    const mainPage = new MainPage(page);
    const testStrings = new TestStrings();

    // Open new page - rozetka.com.ua
    await mainPage.open();

    // Getting text content from Catalogue batton to title variable
    const buttonText = await page.locator( mainPage.catalogueButton ).textContent();

    // Assertion to check text
    await expect( buttonText.trim() ).toStrictEqual( testStrings.catalogueButtonText );
  });
