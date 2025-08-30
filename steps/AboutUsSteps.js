const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/HomePage');
const AboutUsPage = require('../pages/AboutUsPage');
const { expect } = require('@playwright/test');
const { attachScreenshot, attachText  } = require('../helpers/reporting');

let homePage, aboutUsPage;

Given('User is on the home page', { timeout: 60000 }, async function () {
    console.log('User is on the home page');
    homePage = new HomePage(this.page);
    await homePage.navigateToHome();
});

When('User navigates to the About Us section', { timeout: 60000 }, async function () {
    console.log('User clicks on the About Us link' + homePage);
    await homePage.clickAboutUs();
});

Then(/^User should see the page title as "(.*)"$/, { timeout: 60000 }, async function (expectedTitle) {
    aboutUsPage = new AboutUsPage(this.page);
    const actualTitle = await aboutUsPage.getTitle();
    console.log('Actual page title: ' + actualTitle);
    console.log('Expected page title: ' + expectedTitle);
    const isMatch = expectedTitle === actualTitle;
    await attachText(this.attach, 'About Us Page Title', isMatch, expectedTitle, actualTitle);
   // await attachScreenshot(this.attach, this.page, 'AboutUsPage');
    expect(actualTitle).toBe(expectedTitle, `Expected page title to be "${expectedTitle}", but got "${actualTitle}"`);
});
    
Then('User should see the team member profiles', { timeout: 60000 }, async function () {
    const profilesVisible = await aboutUsPage.areTeamMemberProfilesVisible();
    await attachScreenshot(this.attach, this.page, 'AboutUs_teamMemberSection');
    expect(profilesVisible).toBe(true, 'Expected team member profiles to be visible');
});

Then('User should see the company\'s history timeline', { timeout: 60000 }, async function () {
    const timelineVisible = await aboutUsPage.isHistoryTimelineVisible();
    await attachScreenshot(this.attach, this.page, 'AboutUsPage');
    expect(timelineVisible).toBe(true, 'Expected company history timeline to be visible');
});