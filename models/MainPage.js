// https://playwright.dev/docs/pom/

class MainPage {
    constructor(page) {
      this.page = page;
      this.catalogueButton = '#fat-menu';
    }
    async open() {
      await this.page.goto('https://rozetka.com.ua/');
    }
    async search(text) {
      await this.page.fill('[aria-label="Enter your search term"]', text);
      await this.page.press('[aria-label="Enter your search term"]', 'Enter');
    }
  }
  module.exports = { MainPage };
