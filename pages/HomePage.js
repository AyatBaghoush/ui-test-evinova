const BasePage = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.aboutUsLink = '#username';
  }

    async navigateToHome() {
        await this.page.goto(process.env.BASE_URL);
    }
    
    async clickAboutUs() {
        await this.click(this.aboutUsLink);
    }
}

module.exports = HomePage;
