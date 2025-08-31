const { AxeBuilder } = require('@axe-core/playwright')
const getLogger = require('../helpers/logger');
const logger = getLogger('AccessibilityCheck');


async function runAccessibilityCheck(page){
    const accessibilityCheckResults = await new AxeBuilder({page}).analyze();
    logger.debug('Number of Accessibility Violations is: ' + accessibilityCheckResults.violations.length)
    return accessibilityCheckResults;
}
module.exports ={runAccessibilityCheck}