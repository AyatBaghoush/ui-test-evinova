class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }
  
  async click(selector) {
    console.log('Clicking on selector: ' + selector);
    await this.page.waitForSelector(selector, { state: 'visible' , timeout: 5000 });
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

  async getTitle() {
    return await this.page.title();
  }
}

module.exports = BasePage;
