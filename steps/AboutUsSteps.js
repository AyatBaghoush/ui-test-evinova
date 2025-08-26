const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/HomePage');
const AboutUsPage = require('../pages/AboutUsPage');
const { expect } = require('@playwright/test');
const { attachScreenshot } = require('../helpers/reporting');

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
    await this.page.pause()
    await attachScreenshot(this.page, 'AboutUsPage');
    expect(actualTitle).toBe(expectedTitle, `Expected page title to be "${expectedTitle}", but got "${actualTitle}"`);
});
