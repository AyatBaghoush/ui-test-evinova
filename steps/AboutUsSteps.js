const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/HomePage');
const AboutUsPage = require('../pages/AboutUsPage');
const { expect } = require('@playwright/test');
const { attachScreenshot, attachText  } = require('../helpers/reporting');
const getLogger = require('../helpers/logger');
const logger = getLogger('AboutUsSteps');

let homePage, aboutUsPage;

Given('User is on the home page', { timeout: 60000 }, async function () {
    homePage = new HomePage(this.page);
    await homePage.navigateToHome();
    logger.info('Navigated to home page');
});

When('User navigates to the About Us section', { timeout: 60000 }, async function () {
    await homePage.clickAboutUs();
    logger.info('Clicked on About Us link');
});

Then(/^User should see the page title as "(.*)"$/, { timeout: 60000 }, async function (expectedTitle) {
    aboutUsPage = new AboutUsPage(this.page);
    const actualTitle = await aboutUsPage.getTitle();
    const isMatch = expectedTitle === actualTitle;
    await attachText(this.attach, 'About Us Page Title', isMatch, expectedTitle, actualTitle);
    expect(actualTitle).toBe(expectedTitle, `Expected page title to be "${expectedTitle}", but got "${actualTitle}"`);
});
    
Then('User should see the team member profiles', { timeout: 60000 }, async function () {
    const areProfilesVisible = await aboutUsPage.areTeamMemberProfilesVisible();
    await attachScreenshot(this.attach, this.page, 'AboutUs - Team Member Section');
    expect(areProfilesVisible).toBe(true, 'Expected team member profiles is not visible');
    logger.info('Team member profiles are visible');
});

Then('User should see the company\'s history timeline', { timeout: 60000 }, async function () {
    const isTimelineVisible = await aboutUsPage.isHistoryTimelineVisible();
    await attachScreenshot(this.attach, this.page, 'About Us - Company History Timeline');
    expect(isTimelineVisible).toBe(true, 'Expected company history timeline is not visible');
    logger.info('Company history timeline is visible');
});