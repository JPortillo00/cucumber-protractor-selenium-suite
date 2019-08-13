const {browser, ExpectedConditions} = require('protractor');
const {Given, When, Then} = require("cucumber");
const CustomNavigation = require('../support/navigation');

Given(/^I am on "(.*)"$/, async (url) => {
    await CustomNavigation.goTo(url);
    await browser.wait(
        ExpectedConditions.urlContains(url),
        5000,
        url + "was not found in the URL.");
});

When(/^I go to "(.*)"$/, async (url) => {
    await CustomNavigation.goTo(url);
});

Then(/^I should be on "(.*)"$/, async (url) => {
    await browser.wait(
        ExpectedConditions.urlContains(url),
        5000,
        url + "was not found in the URL.");
});

When(/^I input "(.*)" into the "(.*)" field$/, async (input, field) => {
    let block = await CustomNavigation.getInputElement(field, ['input']);
    await block.sendKeys(input);
});

When(/^I click on the "(.*)" button$/, async (text) => {
    let block = await CustomNavigation.getInputElement(text, ['button', 'select', 'input']);
    await block.click();
});