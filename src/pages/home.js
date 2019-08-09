const {browser, by, element} = require('protractor');

class Home {
    async get(){
        await browser.get(browser.params.baseURL);
    }
}

module.exports = new Home();