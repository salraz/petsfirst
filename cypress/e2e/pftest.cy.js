import { signUpPage } from "../pages/signUpPage"
import { appointmentPage } from "../pages/appointmentPage";

const signupObj = new signUpPage();
const appObj = new appointmentPage();

import data from '../fixtures/data.json';

describe('PetsFirst Ui Test Automation', () => {
  it('User registeration flow', () => {
    signupObj.openURL();
    signupObj.clsModal();
    signupObj.loginBtn();
    signupObj.selectCountry(data.countryInitials)
    signupObj.enterPhoneNumber(data.phoneNumber);
    signupObj.clickSubmitBtn();
    signupObj.enterOtp(data.codeOTP);
    // signupObj.allAssertion();
  })

  it('Booking an Appointment', () => {
    appObj.visitHomePage();
    appObj.clsModal();
    //appObj.bookAppointment();
    
  })


})

