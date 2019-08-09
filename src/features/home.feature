Feature: Home page
  Get to the HomePage

  Scenario: Get to the Home Page
    Given I go to the home page
    Then I should be on Google

  @skip
  Scenario: Go to Yahoo
    When I go to "www.yahoo.com"
    Then I should be on "Yahoo"