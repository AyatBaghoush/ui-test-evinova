const BasePage = require('./BasePage');

class ContactUsPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstName = '#first_name';
    this.lastName = '#last_name';
    this.email = '#email';
    this.company = '#company';
    this.title  = '#title';
    this.successMessage = '.wpcf7-mail-sent-ok';
    this.submitButton = '#wpcf7-f123-o1 > form > p > input.wpcf7-form-control.wpcf7-submit';
    this.country = "//select[@title='Country']";
    this.submitFormButton = '#button-pre-submit-form';
    this.phone = '#phone';
    this.therapeuticArea = '//*[@title ="Therapeutic Area"]';
    this.interestedIn = '//*[@title ="I\'m interested in"]';
  }

  async fillContactForm( formDetails) {
    await this.page.fill(this.firstName, formDetails.firstName);
    await this.page.fill(this.lastName, formDetails.lastName);
    await this.page.fill(this.email, formDetails.email);
    await this.page.fill(this.company, formDetails.company);
    
    await this.page.fill(this.phone, formDetails.phone);
    await this.page.fill(this.title, formDetails.title);
    await this.page.locator(this.country).selectOption(formDetails.country); 
   await this.page.locator(this.therapeuticArea).selectOption(formDetails.therapeuticArea);
   await this.page.locator(this.interestedIn).selectOption(formDetails.interestedIn);
  }


  async verifySubmitButtonIsEnabled() {
    await this.page.locator(this.submitFormButton).scrollIntoViewIfNeeded();
    return this.page.isEnabled(this.submitFormButton);
  }
}

module.exports = ContactUsPage;