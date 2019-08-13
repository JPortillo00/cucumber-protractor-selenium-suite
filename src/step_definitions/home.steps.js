const {browser, by, element, ExpectedConditions} = require('protractor');
const {Given, When, Then} = require("cucumber");
const homePage = require('../pages/home');

Given(/^I go to the home page$/, async () => {
    await homePage.get();
});

Then(/^I should be on Google$/, async () => {
    await browser.wait(ExpectedConditions.urlContains("google"));
});