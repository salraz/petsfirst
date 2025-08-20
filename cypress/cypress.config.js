const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://stage-petsfirst-frontend.azurewebsites.net/en',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});
