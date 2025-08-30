const BasePage = require('./BasePage');
const getLogger = require('../helpers/logger');
const logger = getLogger('Homepage');

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
        logger.debug('Cookies panel is visible, accepting cookies...');
        await this.click(this.acceptCookiesBtn);
      }
      else{
        logger.debug('Cookies panel is not visible, continuing without accepting cookies.');
      }
    }
    
    async clickAboutUs() {
      await this.click(this.aboutUsLink);
    }

    async clickContactUs() {
      await this.click(this.contactUsLink);
    }
}

module.exports = HomePage;
