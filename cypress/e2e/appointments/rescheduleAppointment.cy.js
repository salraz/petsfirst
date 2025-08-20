import { appointmentPage } from "../pages/appointmentPage";
import ResheduleAppointmentPage from "../pages/ResheduleAppointment";

const appObj = new appointmentPage();
const reschedulePage = new ResheduleAppointmentPage();

describe('Reschedule Appointment', () => {
  beforeEach(() => {
    cy.viewport(1600, 1000);
    cy.uiLoginOnce();
    cy.visit(Cypress.env('URL'));
  });

  it('should reschedule an appointment', () => {
    appObj.clsModal(); cy.wait(1000);
    reschedulePage.goToAppointments(); cy.wait(2000);
    reschedulePage.selectFirstAppointment(); cy.wait(1000);
    reschedulePage.clickAppointmentButton(); cy.wait(2000);
    reschedulePage.selectDateSlot(); cy.wait(2000);
    reschedulePage.clickNextTwice(); cy.wait(2000);
    appObj.backtoHome(); cy.wait(2000);
  });
});
