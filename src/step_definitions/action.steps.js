const {browser, by, element, ExpectedConditions} = require('protractor');
const {Given, When, Then} = require("cucumber");

When(/^I go to "(.*)"$/, async function (url) {
    await browser.get(url);
});

Then(/^I should be on "(.*)"$/, async function (url) {
    try {
        await browser.wait(ExpectedConditions.urlContains(url));
    } catch (e) {
        throw Error(url + "was not found in the URL.")
    }
});
