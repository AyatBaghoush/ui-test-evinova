class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url);
  }
  
  async click(selector) {
    await this.page.click(selector);
  }

  async typeText(selector, text) {
    await this.page.fill(selector, text);
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }

  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }

  async waitForSelector(selector) {
    await this.page.waitForSelector(selector);
  }
}

module.exports = BasePage;
