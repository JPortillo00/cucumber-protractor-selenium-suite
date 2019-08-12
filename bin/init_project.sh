#!/bin/bash
echo "Preparing protractor.conf.js"
cat ./protractor.example.js > ./protractor.conf.js
echo "Running npm install"
npm install
echo "Updating webdriver"
webdriver-manager update