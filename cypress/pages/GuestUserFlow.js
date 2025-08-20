class GuestUserFlow {
  visitHomePage() {
    cy.visit('https://stage-petsfirst-frontend.azurewebsites.net/en');
  }

  closePopup() {
    cy.wait(2000);
    cy.get('#close-popup > svg > path').click();
  }

  continueAsGuest() {
    cy.wait(2000);
    cy.get('#book-an-appointment').click();
    cy.wait(2000);
cy.get(':nth-child(1) > .px-4 > #continue_to_guest', { timeout: 10000 })
  .should('be.visible')
  .click();  }

  chooseConsultation() {
    cy.wait(2000);
    cy.get('img[alt="Consultation"]').first().click();
    cy.wait(2000);
    cy.get('#2').click();
    cy.wait(2000);
    cy.get('p.description-holder').click();
  }

  addPet(petName) {
    cy.wait(2000);
    cy.get('input[name="petName"]').clear().type(petName);
    cy.wait(2000);
    cy.contains('button', 'Add pet').click();
    cy.wait(2000);
    cy.get('#next-btn-cta').click();
  }

  enterPhoneNumber(phone) {
    cy.wait(2000);
    cy.get('.PhoneInputCountrySelect').select('PK');
    cy.wait(2000);
    cy.get('#phone-number-input').type(phone);
    cy.wait(2000);
    cy.get('#user_login_form').submit();
  }

  enterOtp(otp = '5734') {
    cy.wait(2000);
    otp.split('').forEach((digit, i) => {
      cy.get(`#${i + 1}`).clear().type(digit);
      cy.wait(2000);
    });
  }

  confirmPetAndProceed() {
    cy.wait(2000);
    cy.get('p.description-holder').click();
    cy.wait(2000);
    cy.get('#next-btn-cta').click();
  }

  selectAppointmentSlot() {
    cy.wait(2000);
    cy.get('div:nth-of-type(2) > #date-selection-cta').click();
    cy.wait(2000);
    cy.get('span:nth-of-type(8)').click();
    cy.wait(2000);
    cy.get('#slots-selection-cta').click();
    cy.wait(2000);
    cy.get('#next-btn-cta').click();
    cy.wait(2000);
    cy.get('#next-btn-cta').click();
  }

  finishBooking() {
    cy.wait(2000);
    cy.get('#back-to-home-cta').click();
  }

  goToAppointments() {
    cy.wait(2000);
    cy.contains('Appointments').click();
    cy.wait(2000);
    // cy.get('.font-medium > span').click();
  }

  rescheduleAppointment() {
    cy.wait(2000);
    cy.get('button.appointmentDetailsClinicHome_appointment_btn__DJUAo').click();
    this.selectAppointmentSlot();
  }

  cancelAppointment() {
    cy.wait(2000);
    cy.get('button.appointmentDetailsClinicHome_appointment_cancel_btn__Rt_BU').click();
    cy.wait(2000);
    cy.get('div.modal-footer.pt-1 > #close-popup').click();
    cy.wait(2000);
    cy.get('#landing-page-cta').click();
  }
}
export default GuestUserFlow;
