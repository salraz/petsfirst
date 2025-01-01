import { signUpPage } from "../pages/signUpPage"
import { appointmentPage } from "../pages/appointmentPage";

const signupObj = new signUpPage();
const appObj = new appointmentPage();

import data from '../fixtures/data.json';

describe('PetsFirst Ui Test Automation', () => {
  beforeEach(() => {
    cy.login(data.phoneNumber, data.codeOTP, data.countryInitials)
  });
    it('Registeration (login) flow', () => {
    signupObj.openURL();
    signupObj.clsModal();
    signupObj.loginBtn();
    signupObj.selectCountry(data.countryInitials)
    signupObj.enterPhoneNumber(data.phoneNumber);
    signupObj.clickSubmitBtn();
  signupObj.enterOtp(data.codeOTP);
});

  it('Create an Appointment', () => {
    signupObj.openURL();
    signupObj.clsModal();
    signupObj.loginBtn();
    signupObj.selectCountry(data.countryInitials)
    signupObj.enterPhoneNumber(data.phoneNumber);
    signupObj.clickSubmitBtn();
    signupObj.enterOtp(data.codeOTP);
    appObj.visitHomePage();
    //appObj.clsModal();
    appObj.createVaccinationApp();
    appObj.reserveSlot();
    appObj.availableSlots();
    //appObj.bookAppointment();
  });
});

