const getLogger = require('../helpers/logger');
const logger = getLogger('BasePage');

class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    logger.debug(`Navigating to URL: ${url}`);
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }
  
  async click(selector) {
    logger.debug('Clicking on selector: ' + selector);
    await this.waitForSelector(selector);
    await this.page.click(selector);
  }

  async scrollToElement(selector) {
    logger.debug(`Scrolling to element: ${selector}`);
    await this.waitForSelector(selector);
    await this.page.locator(selector).scrollIntoViewIfNeeded();
  }

  async fill(selector, text) {
    logger.debug(`Filling selector: ${selector} with text: ${text}`);
    await this.waitForSelector(selector);
    await this.page.fill(selector, text);
  }
   
  async isElementEnabled(selector) {
    logger.debug(`Checking if element is enabled: ${selector}`);
    await this.waitForSelector(selector);
    return this.page.isEnabled(selector);
  }

  async selectOption(selector, value) {
    logger.debug(`Selecting option: ${value} from selector: ${selector}`);
    await this.page.selectOption(selector, value);
  }

  async isVisible(selector) {
    logger.debug(`Checking visibility of selector: ${selector}`);
    await this.waitForSelector(selector);
    return await this.page.isVisible(selector);
  }

  async waitForSelector(selector) {
    try {
      logger.debug(`Waiting for selector to be visible: ${selector}`);
      await this.page.waitForSelector(selector, { state: 'visible' , timeout: 5000 });
    } catch (error) {
      logger.error(`Error waiting for selector ${selector}: ${error}`);
    }
  }

  async getTitle() {
    return await this.page.title();
  }
}

module.exports = BasePage;
