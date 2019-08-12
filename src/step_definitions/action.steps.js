const {browser, by, element, ExpectedConditions} = require('protractor');
const {Given, When, Then} = require("cucumber");

When(/^I go to "(.*)"$/, async function (url) {
    if(!url.includes('http'))
        url = 'https://' + url;
    await browser.get(url);
});

Then(/^I should be on "(.*)"$/, async function (url) {
    await browser.wait(
        ExpectedConditions.urlContains(url),
        5000,
        url + "was not found in the URL.");
});
