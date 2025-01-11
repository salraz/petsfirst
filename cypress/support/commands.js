// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('login', (countryInitials, phoneNumber, codeOTP) => {
    cy.visit(Cypress.env('URL'))
    // cy.window().then((win) => {
    //     if (!win.google) {
    //         throw new Error('google is not defined');
    //     }
    // });
    cy.get('.modal-header').click();
    cy.get('.login_btn').click();
    cy.get('.PhoneInputCountrySelect').select(countryInitials);
    cy.get('.PhoneInputInput').type(phoneNumber);
    cy.wait(2000);
    cy.get('.text-xl').click();
    cy.get('.otp-input input').first().type(codeOTP);
})