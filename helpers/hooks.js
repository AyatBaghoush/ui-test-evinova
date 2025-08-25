const { Before, After } = require('@cucumber/cucumber');
const { setWorldConstructor } = require('@cucumber/cucumber');
const CustomWorld = require('./world');

setWorldConstructor(CustomWorld);

Before(async function () {
  this.browser = await this.launchBrowser();
});

After(async function () {
  if (this.browser) await this.closeBrowser()
});
