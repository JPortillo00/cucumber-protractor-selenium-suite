const {After, Before, BeforeAll, AfterAll, Status} = require("cucumber");
const {browser} = require('protractor');

BeforeAll({timeout: 100 * 1000}, async () => {
    await browser.get(browser.params.baseURL);
});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
        const screenShot = await browser.takeScreenshot();
        this.attach(screenShot, "image/png");
    }
});

AfterAll({timeout: 100 * 1000}, async () => {
    await browser.quit();
});

Before({tags: '@skip'}, () => {
    return 'skipped';
});