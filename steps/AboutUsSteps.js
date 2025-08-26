const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../pages/HomePage');

let homePage;

Given('User is on the home page', { timeout: 60000 }, async function () {
    console.log('User is on the home page');
    homePage = new HomePage(this.page);
    await homePage.navigateToHome();
});

/*When('User clicks on the About Us link', async function () {
    console.log('User clicks on the About Us link');
    HomePage homePage = new HomePage(this.page);
    await homePage.clickAboutUs();
});

Then('User should be redirected to the About Us page', async function () {
    console.log('User should be redirected to the About Us page');
    // Here you would typically check the URL or page content to confirm redirection
    // For example:
    // const url = await this.page.url();
    // if (!url.includes('about-us')) {
    //     throw new Error('Not redirected to About Us page');
    // }
         });*/