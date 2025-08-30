const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/HomePage');
const AboutUsPage = require('../pages/AboutUsPage');
const { expect } = require('@playwright/test');
const { attachScreenshot, attachText  } = require('../helpers/reporting');
const ContactUsPage = require('../pages/ContactUsPage');
const TestDataManager = require('../helpers/testDataManager');
const getLogger = require('../helpers/logger');
const logger = getLogger('ContactUsSteps');

let homePage, contactUsPage;

When('User navigates to the Contact Us section', { timeout: 60000 }, async function () {
    homePage = new HomePage(this.page);
    await homePage.clickContactUs();
    logger.info('Navigated on Contact Us page');
});

When('User fills out the contact form with valid details', { timeout: 60000 }, async function () {
    contactUsPage = new ContactUsPage(this.page);
    const formDatails = await TestDataManager.getValidContactFormDetails();
    logger.debug('Filling contact form with data: ' + JSON.stringify(formDatails));
    await contactUsPage.fillContactForm(formDatails);
    logger.info('Filled contact form with valid details');
    await attachScreenshot(this.attach, this.page, 'conact us form')
});

When('User should find it possible to submit the form', { timeout: 60000 }, async function () {
    const isBtnEnabled = await contactUsPage.verifySubmitButtonIsEnabled();
    await attachScreenshot(this.attach, this.page, 'conact us form - submit button');
    expect(isBtnEnabled).toBe(true, 'Expected submit button to be enabled');
    logger.info('Submit button is enabled, user can submit the form');
});