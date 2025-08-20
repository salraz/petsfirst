const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on, config);
    },
    baseUrl: 'https://stage-petsfirst-frontend.azurewebsites.net/en',
    experimentalSessionAndOrigin: true,
    env: {
      URL: 'https://stage-petsfirst-frontend.azurewebsites.net/en',
      JWT_TOKEN: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODE0LCJpYXQiOjE3NDIyMDYzMDUsImV4cCI6MTc1Nzc1ODMwNX0.Ne8-ZY-yl4fHWZ6T3xgjsY94-uOMArHdhfV1B2XuG3Q'
    },
    viewportWidth: 1440,   // Set to typical laptop/desktop width
    viewportHeight: 900    // Set to typical height
  },
  reporter: 'cypress-mochawesome-reporter',
  video: true
});
