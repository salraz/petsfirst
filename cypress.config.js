const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // Remove or replace the invalid event name
    },
    // resolve property is not valid in Cypress configuration
  },

  env: {
    URL: 'https://stage-petsfirst-frontend.azurewebsites.net/en'
  }
});
