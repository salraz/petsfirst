import { appointmentPage } from "../../pages/appointmentPage";
import HomeAppointmentPage from "../../pages/HomeAppointmentPage";

const appObj = new appointmentPage();
const homeAppointmentPage = new HomeAppointmentPage();

describe('Home Appointment Flow', () => {
  beforeEach(() => {
    cy.viewport(1600, 1000);
    cy.uiLoginOnce();
    cy.visit(Cypress.env('URL'));
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
});
