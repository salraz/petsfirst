class ResheduleAppointment {
  locators = {
    appointmentsLink: 'Appointments',
    appointmentCTA: 'div:nth-of-type(1) > div > div > #appointment-selection-cta .font-medium > span',
    appointmentButton: 'button.w-full.appointmentDetailsClinicHome_appointment_btn__DJUAo.Button_btn__AMZkP.Button_btn_secondary__5mnXp',
    dateSelect: 'div:nth-of-type(2) > #date-selection-cta',
    dateOption8: 'span:nth-of-type(3)',
    nextButton: '#next-btn-cta',
    backToHomeCTA: '#back-to-home-cta',
  };

  goToAppointments() {
    cy.contains(this.locators.appointmentsLink).click();
  }

  selectFirstAppointment() {
    cy.get(this.locators.appointmentCTA).click();
  }

  clickAppointmentButton() {
    cy.get(this.locators.appointmentButton).click();
  }

  selectDateSlot() {
    cy.get(this.locators.dateSelect).click();
    cy.get(this.locators.dateOption8).click();
    cy.wait(2000);
  }

  clickNextTwice() {
    cy.get(this.locators.nextButton).click();
    cy.wait(2000);
    cy.get(this.locators.nextButton).click();
    cy.wait(2000);
  }

  backToHome() {
    cy.get(this.locators.backToHomeCTA).click();
  }
}

export default ResheduleAppointment;
