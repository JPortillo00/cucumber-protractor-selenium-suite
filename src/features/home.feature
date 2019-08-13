Feature: Home page
  Get to the HomePage

  Scenario: Get to the Home Page
    Given I go to the home page
    Then I should be on Google

  Scenario: Search for puppies
    Given I am on "www.google.com"
    When I input "puppies" into the "Search" field
    And I wait 5 seconds
    And I click on the "Google Search" button

  @skip
  Scenario: Go to Bing
    When I go to "www.bing.com"
    Then I should be on "Bing"

  Scenario: Go to Yahoo
    When I go to "www.yahoo.com"
    Then I should be on "Yahoo"