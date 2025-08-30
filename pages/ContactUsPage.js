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
    await this.fill(this.firstName, formDetails.firstName);
    await this.fill(this.lastName, formDetails.lastName);
    await this.fill(this.email, formDetails.email);
    await this.fill(this.company, formDetails.company);
    
    await this.fill(this.phone, formDetails.phone);
    await this.fill(this.title, formDetails.title);
    await this.selectOption(this.country, formDetails.country); 
    await this.selectOption(this.therapeuticArea, formDetails.therapeuticArea);
    await this.selectOption(this.interestedIn, formDetails.interestedIn);
  }


  async verifySubmitButtonIsEnabled() {
    await this.scrollToElement(this.submitFormButton);
    return this.isElementEnabled(this.submitFormButton);
  }
}

module.exports = ContactUsPage;