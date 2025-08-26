const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');
require('dotenv').config();

/**
 * CustomWorld class provides browser and page context for Cucumber tests using Playwright.
 * It supports Chromium, Firefox, and WebKit browsers, and manages browser lifecycle.
 *
 * @property {string} browserType - The type of browser to use (chromium, firefox, webkit).
 * @property {object} browser - The Playwright browser instance.
 * @property {object} context - The Playwright browser context.
 * @property {object} page - The Playwright page instance.
 */

class CustomWorld {
    /**
   * Initializes a new CustomWorld instance.
   * @param {object} options - Options containing Cucumber parameters.
   */
  constructor({attach, parameters }) {
    this.browserType = parameters.browser || process.env.BROWSER || 'chromium';
    this.browser = null;
    this.context = null;
    this.page = null;
    this.attach = attach; // Attach function for embedding data in reports
  }

  /**
   * Launches the browser and creates a new context and page.
   * Throws an error if the browser type is unsupported.
   */
  async launchBrowser() {
    const browserMap = { chromium, firefox, webkit };
    const launcher = browserMap[this.browserType];

    if (!launcher) {
      throw new Error(`Unsupported browser: ${this.browserType}`);
    }

    this.browser = await launcher.launch({
      headless: process.env.HEADLESS !== 'false' // default to headless unless explicitly disabled
    });

    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    return this.browser;
  }

  async attachScreenshot(name = 'Screenshot') {
    if (this.page && this.attach) {
      const screenshotBuffer = await this.page.screenshot({ fullPage: true });
      await this.attach(screenshotBuffer, 'image/png');
    }
  }
  async attach()
  {
    return this.attach;
  }
  /**
   * Closes the page, context, and browser if they exist.
   */
  async closeBrowser() {
    try {
      if (this.page && !this.page.isClosed()) {
        await this.page.close();
      }
    } catch (err) {
      console.warn("Error closing page:", err);
    }
    try {
      if (this.context) {
        await this.context.close();
      }
    } catch (err) {
      console.warn("Error closing context:", err);
    }
    try {
      if (this.browser) {
        await this.browser.close();
      }
    } catch (err) {
      console.warn("Error closing browser:", err);
    }
  }
  

}

module.exports = CustomWorld;
