# Protractor-Cucumber-Selenium Stack
**[Protractor](https://www.protractortest.org/#/), 
[Cucumber](https://cucumber.io/docs/gherkin/), 
and [Selenium](https://www.seleniumhq.org) base for testing.**

## Windows Installation
1. Install [Node.js](https://nodejs.org/en/download/).
2. Install [Java](https://www.oracle.com/technetwork/java/javase/downloads/index.html). You may have to restart to update your PATH.

## Alternative Windows Installation
1. Install [Chocolatey](https://chocolatey.org/install/) windows package manager.
2. Install Node with `choco install nodejs`.
3. Install Java with `choco install jdk8`

## Linux Installation
1. Install `node` (`sudo apt install nodejs`).
2. Install `npm` (`sudo apt install npm`).
3. install `java` (`sudo apt install default-jdk`).

## Docker Setup
- Utilizes [Zalenium](https://github.com/zalando/zalenium)
- Go to [Dashboard](http://localhost:4444/dashboard).
- Go to http://localhost:4444/grid/admin/live.

1. Run `bin\init_dockerize.sh`.

## Initialize 
**(Skip steps 3 and 4 if using Docker).**
1. Install packages `npm install` or run `bin\init_prohect.sh` and skip to 4.
2. Run `cat ./package.example.js > ./package.conf.js`
3. Run `webdriver-manager update` or `npm run web-update`.
4. Start the webdriver with `webdriver-manager start` or `npm run web-start`.
5. Run the test with `npm run src`.


