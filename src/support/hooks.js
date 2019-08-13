// Custom tags for scenarios
const {After, Before, BeforeAll} = require("cucumber");

Before({tags: '@skip'}, () => {
    return 'skipped';
});