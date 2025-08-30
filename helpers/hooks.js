const { Before, After } = require('@cucumber/cucumber');
const { setWorldConstructor } = require('@cucumber/cucumber');
const CustomWorld = require('./world');
const getLogger = require('../helpers/logger');
const logger = getLogger('hooks');

setWorldConstructor(CustomWorld);

Before(async function () {
  this.browser = await this.launchBrowser();
  logger.info(`Launched browser: ${this.browserType}`);
});

After(async function () {
 if (this.browser) await this.closeBrowser()
});
