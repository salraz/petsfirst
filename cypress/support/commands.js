import { signUpPage } from '../pages/signUpPage';

const signUpObj = new signUpPage();

Cypress.Commands.add('uiLoginOnce', () => {
  cy.session('user-login-session', () => {
    signUpObj.openURL();
    signUpObj.clsModal();
    signUpObj.clickLoginBtn();
    signUpObj.selectCountry('PK');
    signUpObj.enterPhoneNumber('3094359330');  // replace with valid test number
    signUpObj.clickSubmitBtn();
    signUpObj.enterOtp('5734');               // replace with your test OTP

    // ✅ Wait until the homepage or a dashboard is visible
    cy.get('.swiper-wrapper', { timeout: 10000 }).should('be.visible'); // example assertion
  });
});
