// https://playwright.dev/docs/pom/

class ShoppingPage {
    constructor(page) {
      this.page = page;
      this.buyButton = page.locator('.product__buy .buy-button');
      this.buyCreditButton = page.locator('.product__credit .button--large');
    }
    async openSamsungGalaxyM32() {
      await this.page.goto('https://rozetka.com.ua/samsung-sm-m325fzkgsek/p306669293/');
    }
  }
  module.exports = { ShoppingPage };
