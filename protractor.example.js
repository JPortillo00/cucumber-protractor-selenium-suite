exports.config = {
    onPrepare: function(){
       return browser.waitForAngularEnabled(false);
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    specs: [
        './src/features/*.feature',
    ],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //https://github.com/angular/protractor/blob/master/docs/browser-setup.md help browser options and setup.
    capabilities: {
        browserName: 'chrome',
        // Maximum number of browser instances that can run in parallel for this
        // set of capabilities. This is only needed if shardTestFiles is true.
        // Default is 1.
        maxInstances: 2,
        // allows different specs to run in parallel.
        // If this is set to be true, specs will be sharded by file
        // (i.e. all files to be run by this set of capabilities will run in parallel).
        // Default is false.
        shardTestFiles: false,
        chromeOptions:{
            args:["--headless", "--disable-gpu", "--incognito"]
        }
    },

    params:{
        baseURL:'https://www.google.com/',
    },

    //Cucumber Configuration
    cucumberOpts: {
        format: 'json:results.json',
        tags: false,
        require: [
            './src/step_definitions/*.steps.js',
            './src/support/hooks.js',
        ],
    },
};