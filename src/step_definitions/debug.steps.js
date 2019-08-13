const {browser, ExpectedConditions} = require('protractor');
const {Given, When, Then} = require("cucumber");
const CustomNavigation = require('../support/navigation');

Then(/^I wait (.*) seconds$/, async (seconds) => {
    console.log("Sleeping for" + seconds * 1000 + " seconds.");
    browser.sleep(seconds * 1000);
});

Given(/^I see the cursor$/, () => {
    CustomNavigation.enableCursor();
});