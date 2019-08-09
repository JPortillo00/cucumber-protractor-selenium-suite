// Custom tags for scenarios
const {After, Before, BeforeAll} = require("cucumber");

Before({tags: '@skip'}, function () {
    return 'skipped';
});