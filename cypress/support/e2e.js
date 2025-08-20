// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import 'cypress-mochawesome-reporter/register';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide XHR requests from command log
const app = window.top;
if (app) {
  app.console.log = () => {};
}

// Hide fetch requests from command log
const originalFetch = window.fetch;
window.fetch = function() {
  return originalFetch.apply(this, arguments).then(response => {
    return response;
  });
};
// You can add more global configuration and behavior that modifies Cypress here.
// For example, you can add custom commands here.

// Example of adding a custom command:
// Cypress.Commands.add('login', (email, password) => { ... })