import { signUpPage } from "../pages/signUpPage"
import { appointmentPage } from "../pages/appointmentPage";

const signupObj = new signUpPage();
const appObj = new appointmentPage();

import data from '../fixtures/data.json';



describe('PetsFirst Ui Test Automation', () => {
  beforeEach(() => {
    cy.login(
      data.login.countryInitials, 
      data.login.phoneNumber, 
      data.login.codeOTP
    );
  });

  it('Create an Appointment', () => {
    appObj.createVaccinationApp();
    appObj.reserveSlot();
    appObj.availableSlots();
  });
});

