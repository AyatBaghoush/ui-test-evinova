const {faker, th} = require('@faker-js/faker');
const logger = require('./logger');

const therpeuticAreas = [
      'Oncology',
     "Respiratory",
       "Cardiovascular and metabolic",
         "Rare disease",
       "Other"
];

const InterestedIn = [
      'Unified Trial Solution',
     "Drug Development Suite",
       "Partnering with Evinova",
         "Connecting at an event",
       "Other"
];

const countries = [
      'Spain',
     "England",
       "Germany",
         "Poland"
];
 class TestDataManager{

     static async  getValidContactFormDetails(therapeuticArea , interestedIn = false)
    {

        let firstName = faker.person.firstName()
        console.log('Generated first name: ' + firstName);
        let lastName= faker.person.lastName()
        console.log('Generated first name: ' + lastName);
        let country = faker.location.country()
        console.log('Generated country: ' + country);
        let company = faker.company.name();
        let title = faker.person.jobTitle();
        console.log('Generated job title: ' + title);
        const formDetails ={
            firstName,
            lastName,
            email: `${firstName.toLowerCase()}_${lastName.toLowerCase()}@${company.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}.com`,
            phone: '+' + faker.string.numeric(11),
            country,
            company,
            title,
            therapeuticArea: faker.helpers.arrayElement(therpeuticAreas),
            interestedIn: faker.helpers.arrayElement(InterestedIn)
        }
  console.log('Form details: ' + JSON.stringify(formDetails));
        return formDetails;
    }


}
module.exports = TestDataManager;