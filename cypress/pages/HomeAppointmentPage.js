class HomeAppointmentPage {
  selectors = {
    homeAppointmentImg: 'section:nth-of-type(3) a:nth-of-type(1) img',
    startButton: '#first_btn_click',
    descriptionHolder: 'p.description-holder',
    nextBtn: '#next-btn-cta',
    savedAddressRadio: '.selectUserAddress_address_listing__8WNh_ > .selectFromSavedAddresses_label_radio_edit_card__7CJBI > .label_label___vHoo',
    confirmSavedAddressBtn: 'button.Button_btn_secondary__5mnXp',
    dateSelectionCta: 'div:nth-of-type(2) > #date-selection-cta > small:nth-of-type(2)',
    slotSelectionCta: '#slots-selection-cta',
    backToHomeBtn: 'button:contains("Back to home")',
    appointmentsTab: 'button:contains("Appointments")',
    appointmentCard: '.font-medium > span',
    cancelAppointmentBtn: 'button.appointmentDetailsClinicHome_appointment_cancel_btn__Rt_BU',
    confirmCancelPopup: 'div.modal-footer.pt-1 > #close-popup',
    userProfileIcon: '.userProfileDropdown_user_profile_round__XWC_e > .userProfileDropdown_user_profile_round_hold__ufkoU',
    logoutButton: '#logout-cta > .userProfileDropdown_btn__Ma6PH',
    logoutConfirmButton: '.modal-footer > #close-popup',
  };

  startHomeAppointmentBooking() {
    cy.get(this.selectors.homeAppointmentImg).click();
    cy.get(this.selectors.startButton).click();
    cy.get(this.selectors.descriptionHolder).click();
    cy.get(this.selectors.nextBtn).click();
  }

  selectSavedAddress() {
    cy.get(this.selectors.savedAddressRadio).first().click();
    cy.get(this.selectors.confirmSavedAddressBtn).click();
  }

  chooseDateAndTimeSlot() {
    cy.get(this.selectors.dateSelectionCta).click();
    cy.get(this.selectors.slotSelectionCta).click();
    cy.get(this.selectors.nextBtn).click();
    cy.get(this.selectors.nextBtn).click();
  }

  ConfirmBooking() {
    cy.get(this.selectors.nextBtn).click();
  }

  returnToHome() {
    cy.contains('button', 'Back to home', { timeout: 10000 }).click();
  }

  cancelLatestAppointment() {
    cy.contains('Appointments').click();
    cy.get(this.selectors.appointmentCard).first().click();
    cy.get(this.selectors.cancelAppointmentBtn).click();
    cy.get(this.selectors.confirmCancelPopup).click();
  }

  logout() {
    cy.get(this.selectors.userProfileIcon).click();
    cy.get(this.selectors.logoutButton).click();
    cy.get(this.selectors.logoutConfirmButton).click();
  }
}

export default HomeAppointmentPage;
