const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    baseUrl: 'https://stage-petsfirst-frontend.azurewebsites.net/en',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on, config);
    },
    // resolve property is not valid in Cypress configuration
  },

  env: {
    URL: 'https://stage-petsfirst-frontend.azurewebsites.net/en'
  }
});
