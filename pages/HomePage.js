const BasePage = require('./BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.aboutUsLink = '//a[@href="about-us"]';
    this.contactUsLink = '//a[@href="contact-us"]';
    this.acceptCookiesBtn = '.wscrBannerContentInner .wscrOk';
  }

    async navigateToHome() {
      let url = process.env.BASE_URL || 'https://www.evinova.com';
      await this.navigate(url);
      if (await this.isVisible(this.acceptCookiesBtn)) {
        console.log('Accepting cookies: ' + this.acceptCookiesBtn);
        await this.click(this.acceptCookiesBtn);
      }
    }
    
    async clickAboutUs() {
      console.log('Clicking on About Us link: ' + this.aboutUsLink);
      await this.click(this.aboutUsLink);
    }

    async clickContactUs() {
      await this.click(this.contactUsLink);
    }
}

module.exports = HomePage;
