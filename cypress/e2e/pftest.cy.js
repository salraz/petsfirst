import { appointmentPage } from "../pages/appointmentPage";
import CancelAppointment from "../pages/CancelAppointment";
import PetProfilePage from "../pages/PetProfilePage";
import { ProfilePage } from "../pages/ProfilePage";
import { signUpPage } from "../pages/signUpPage";
import HomeAppointmentPage from '../pages/HomeAppointmentPage';
import GuestUserFlow from '../pages/GuestUserFlow';
import ResheduleAppointmentPage from "../pages/ResheduleAppointment"; // Renamed import
import AddressPage from '../pages/AddressPage';
import { sign } from "crypto";

const homeAppointmentPage = new HomeAppointmentPage();
const appObj = new appointmentPage();
const profilePage = new ProfilePage();
const signUpObj = new signUpPage();
const guestFlow = new GuestUserFlow();
const reschedulePage = new ResheduleAppointmentPage(); // Fixed instance name
const addressPage = new AddressPage();

Cypress.Commands.add('uiLoginOnce', () => {
  cy.session('user-session', () => {
    signUpObj.openURL();
    cy.wait(1000);
    signUpObj.clsModal();
    cy.wait(1000);
    signUpObj.clickLoginBtn();
    cy.wait(1000);
    signUpObj.verifyWelcomeScreen();
    signUpObj.selectCountry('PK');
    cy.wait(1000);
    signUpObj.enterPhoneNumber('3094359330');
    cy.wait(1000);
    signUpObj.clickSubmitBtn();
    cy.wait(1000);
    signUpObj.verifyAllOtpPageElements('923094359330')
    signUpObj.enterOtp('5734');
    cy.wait(1000);

    cy.get('.swiper-wrapper', { timeout: 10000 }).should('be.visible');
  });
});

beforeEach(function () {
  if (this.currentTest.title !== 'Should perform full guest sign-in, appointment booking, rescheduling, and cancellation flow') {
    cy.viewport(1600, 1000);
    cy.uiLoginOnce();
    cy.visit(Cypress.env('URL'));
  }
});


describe('PetsFirst Appointment Flow (JWT + UI Login)', () => {

  it('Create an Appointment', () => {
    appObj.clsModal(); cy.wait(1000);
    // appObj.verifyHeaderContent();
    appObj.createVaccinationApp(); cy.wait(1000);
    appObj.reserveSlot(); cy.wait(1000);
    appObj.availableSlots(); cy.wait(1000);
    appObj.nextButton(); cy.wait(1000);
    appObj.confirmBooking(); cy.wait(1000);
    appObj.backtoHome(); cy.wait(1000);
  });
   it('should Reshedule  an appointment', () => {
    appObj.clsModal(); cy.wait(1000);
    reschedulePage.goToAppointments(); cy.wait(2000);
    reschedulePage.selectFirstAppointment(); cy.wait(1000);
    reschedulePage.clickAppointmentButton(); cy.wait(2000);
    reschedulePage.selectDateSlot(); cy.wait(2000);
    reschedulePage.clickNextTwice(); cy.wait(2000);
    appObj.backtoHome(); cy.wait(2000);
  });  

  it('Should update profile info with random names', () => {
    const firstNames = ['Joe', 'Dave', 'Mike', 'John'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown'];

    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomEmail = `${randomFirstName.toLowerCase()}@yopmail.com`;

    appObj.clsModal(); cy.wait(1000);
    profilePage.openProfileDropdown(); cy.wait(1000);
    profilePage.clickMyDetails(); cy.wait(1000);
    profilePage.updateProfile(randomFirstName, randomLastName, randomEmail); cy.wait(1000);

    cy.log(`Updated profile with: ${randomFirstName} ${randomLastName}, Email: ${randomEmail}`);
  });
it('Cancel  an Appointment', () => {
    appObj.clsModal(); cy.wait(1000);
    CancelAppointment.Appointments(); cy.wait(1000);
    CancelAppointment.CancelAppointment(); cy.wait(1000);
  });
  it('should complete home appointment flow', () => {
    appObj.clsModal(); cy.wait(1000);

    homeAppointmentPage.startHomeAppointmentBooking(); cy.wait(1000);
    homeAppointmentPage.selectSavedAddress(); cy.wait(1000);
    appObj.reserveSlot(); cy.wait(1000);
    appObj.availableSlots(); cy.wait(1000);
    appObj.nextButton(); cy.wait(1000);
    homeAppointmentPage.ConfirmBooking(); cy.wait(1000);
    homeAppointmentPage.returnToHome(); cy.wait(1000);
    homeAppointmentPage.cancelLatestAppointment(); cy.wait(1000);
    homeAppointmentPage.logout(); cy.wait(1000);
  });

  it('Should perform full guest sign-in, appointment booking, rescheduling, and cancellation flow', () => {
    guestFlow.visitHomePage(); cy.wait(1000);
    guestFlow.closePopup(); cy.wait(1000);
    guestFlow.continueAsGuest(); cy.wait(1000);
    guestFlow.chooseConsultation(); cy.wait(1000);
    guestFlow.addPet('daisy'); cy.wait(1000);
    guestFlow.enterPhoneNumber('3094359330'); cy.wait(1000);
    guestFlow.enterOtp('5734'); cy.wait(1000);
    guestFlow.confirmPetAndProceed(); cy.wait(1000);
    guestFlow.selectAppointmentSlot(); cy.wait(1000);
    guestFlow.finishBooking(); cy.wait(1000);
    CancelAppointment.Appointments(); cy.wait(1000);
    CancelAppointment.bookAppointment(); cy.wait(1000);
  });

it('should sign in and manage saved addresses', () => {
    const randomLocation = addressPage.getRandomLocation();
    const randomStreet = addressPage.getRandomStreet();

    
    appObj.clsModal(); cy.wait(1000);
    addressPage.goToSavedAddresses();
    addressPage.addNewAddress(randomLocation, randomStreet);
    addressPage.deleteAddress();
    addressPage.goHome();

    cy.log(`✅ Added and deleted address: ${randomLocation}, ${randomStreet}`);
  });

it('Create an Appointment with promo code', () => {
    appObj.clsModal(); cy.wait(1000);
    appObj.createVaccinationApp(); cy.wait(1000);
    appObj.reserveSlot(); cy.wait(1000);
    appObj.availableSlots(); cy.wait(1000);
    appObj.nextButton(); cy.wait(1000);
    appObj.applyPromoCode();
    appObj.confirmBooking(); cy.wait(1000);
    appObj.backtoHome(); cy.wait(1000);
  });
  
it('should Reshedule  an appointment', () => {
    appObj.clsModal(); cy.wait(1000);
    reschedulePage.goToAppointments(); cy.wait(1000);
    reschedulePage.selectFirstAppointment(); cy.wait(1000);
    reschedulePage.clickAppointmentButton(); cy.wait(1000);
    reschedulePage.selectDateSlot(); cy.wait(1000);
    reschedulePage.clickNextTwice(); cy.wait(1000);
    appObj.backtoHome(); cy.wait(1000);
  });  
});
