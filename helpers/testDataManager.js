const {faker, th} = require('@faker-js/faker');

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
      "Spain",
      "Egypt",
      "Germany",
      "Poland"
];
 class TestDataManager{

     static async  getValidContactFormDetails()
    {

        let firstName = faker.person.firstName()
        let lastName= faker.person.lastName();
        let company = faker.company.name();
        const formDetails ={
            firstName,
            lastName,
            email: `${firstName.toLowerCase()}_${lastName.toLowerCase()}@${company.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()}.com`,
            phone: '+' + faker.string.numeric(11),
            country:faker.helpers.arrayElement(countries),
            company,
            title: faker.person.jobTitle(),
            therapeuticArea: faker.helpers.arrayElement(therpeuticAreas),
            interestedIn: faker.helpers.arrayElement(InterestedIn)
        }
        return formDetails;
    }


}
module.exports = TestDataManager;