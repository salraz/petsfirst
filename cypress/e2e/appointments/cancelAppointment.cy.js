import { appointmentPage } from "../../pages/appointmentPage";
import CancelAppointment from "../../pages/CancelAppointment";

const appObj = new appointmentPage();

describe('Cancel Appointment', () => {
  beforeEach(() => {
    cy.viewport(1600, 1000);
    cy.uiLoginOnce();
    cy.visit(Cypress.env('URL'));
  });

  it('should cancel an appointment', () => {
    appObj.clsModal(); cy.wait(1000);
    CancelAppointment.Appointments(); cy.wait(1000);
    CancelAppointment.CancelAppointment(); cy.wait(1000);
  });
});
