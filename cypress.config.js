const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    resolve: {
      extensions: ['.js', '.json'], // Ensure .json is included here
    },
  },

  env: {
    URL: 'https://stage-petsfirst-frontend.azurewebsites.net/en'
  }
});
