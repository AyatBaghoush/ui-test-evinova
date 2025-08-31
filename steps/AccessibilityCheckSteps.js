const { Then } = require('@cucumber/cucumber');
const getLogger = require('../helpers/logger');
const logger = getLogger('AccessibilityCheckSteps');
const {runAccessibilityCheck} = require('../helpers/accessibilityCheck')
const { expect } = require('@playwright/test');
const { attachScreenshot, attachText  } = require('../helpers/reporting');

Then(/^The page should have accessibility violation less than (\d+)$/, { timeout: 60000 }, async function (violationThreshold) {
    let accessibilityCheckResults = await runAccessibilityCheck(this.page);
    let isMatch = accessibilityCheckResults.violations.length < violationThreshold;
    await attachText(this.attach,
         'Number of accessibility violations',
         isMatch,
         'To Be Less than:' + violationThreshold, accessibilityCheckResults.violations.length)
    expect(accessibilityCheckResults.violations.length).toBeLessThan(violationThreshold);
    logger.info('The page has accessibility violations less than the threshold of ' + violationThreshold);
});