import { appointmentPage } from "../../pages/appointmentPage";  // ✅ fixed import path

const appObj = new appointmentPage();

describe('Create Appointment', () => {
  beforeEach(() => {
    cy.viewport(1600, 1000);
    cy.uiLoginOnce();
    cy.visit(Cypress.env('URL'));
  });

  it('should create an appointment', () => {
    appObj.clsModal(); cy.wait(1000);
    appObj.createVaccinationApp(); cy.wait(1000);
    appObj.reserveSlot(); cy.wait(1000);
    appObj.availableSlots(); cy.wait(1000);
    appObj.nextButton(); cy.wait(1000);
    appObj.confirmBooking(); cy.wait(1000);
    appObj.backtoHome(); cy.wait(1000);
  });
});
