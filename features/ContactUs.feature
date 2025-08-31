Feature: Contact Us
    As a user, I want to contact the company for inquiries or support.

  Scenario: User submits a contact form to communicate with the company
    Given User is on the home page
    When  User navigates to the Contact Us section
    And   User fills out the contact form with valid details
    Then  User should find it possible to submit the form
    And   The page should have accessibility violation less than 10
