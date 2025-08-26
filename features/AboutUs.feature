Feature: About Us

  Scenario: User displays information about the company
    Given User is on the home page
    When  User navigates to the About Us section
    Then  User should see the page title as "About Evinova"
    #And   User should see the team member profiles
    #And   User should see the company's history timeline
    #And   User should see the contact information
