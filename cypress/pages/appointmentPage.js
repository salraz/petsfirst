export class appointmentPage {
    weblocators = {
        bookVaccination: '[href="/en/Clinic/vaccination"] > .relative > img',
        MyPetsFirst: '#signup-cta',
        petSelector: '.card-edit-icon',
        vaccinationPackage: '#package-selection-cta',
        inputPetName: '.input-hold',
        addPetBtn: '.btn',
        backToServices: '.Button_btn__AMZkP',
        vaccinationPackageNotes: '#notes',
        vaccinationNextBtn: '.btn',
        bookappointmentBtn: '#book-an-appointment-cta',
        selectClinic: '.near-clinic-hold',
        monthSelection: '.date-slot > :nth-child(2)',
        dateSelection: '.date_slider_with_buttons > .container > :nth-child(2)',
        slotSelection: '#slots-selection-cta',
        sliderVectorIconNext: ':nth-child(3) > button > svg',
        sliderVectorIconPrev: ':nth-child(1) > button > svg',
        nextButton: '#next-btn-cta',
        backtoHome: '#back-to-home-cta',
        promoCodeInput: '.input-container .input-field[placeholder="Enter Promo/Voucher code"]',
        applyPromoBtn: '.input-container .apply-button'
    }

    visitHomePage() {
        cy.visit(Cypress.env('URL'));
    }

    clsModal() {
        return cy.get(this.weblocators.MyPetsFirst).scrollIntoView().click();
    }
verifyHeaderContent(expectedLocation = 'Cantt, Lahore, Lahore,...', expectedHome = 'Home', expectedAppointments = 'Appointments', expectedMyPets = 'My Pets', expectedLogoAlt = 'Notification Icon') {
    // Verify logo
    cy.get('a.desktopLogo_logo__djPax img')
      .should('be.visible')
      .and('have.attr', 'alt', expectedLogoAlt);

    // Verify current location label
    cy.get('span.inline-block.text-sm.font-medium.text-primary-default')
      .should('be.visible')
      .and('have.text', 'Current Location');

    // Verify current location value
    cy.get('#select-location-cta')
      .should('be.visible')
      .and('have.text', expectedLocation);

    // Verify navigation links
    cy.get('#home-cta a')
      .should('be.visible')
      .and('have.text', expectedHome);

    cy.get('#appointment-cta a')
      .should('be.visible')
      .and('have.text', expectedAppointments);

    cy.get('#my-pets-cta a')
      .should('be.visible')
      .and('have.text', expectedMyPets);

    // Verify user profile icon is visible (initial letter)
    cy.get('.userProfileDropdown_user_profile_round_hold__ufkoU')
      .should('be.visible')
      .and('not.be.empty');
  }
    createVaccinationApp() {
    cy.get('img[alt="Consultation"]').first().click();
        cy.wait(2000);

        cy.get(this.weblocators.vaccinationPackage).scrollIntoView().click();
        cy.wait(2000);

        cy.get(this.weblocators.addPetBtn).scrollIntoView().click();
        cy.wait(2000);

        cy.get('body').then(($body) => {
            if ($body.find('.modal-header').length > 0) {
                cy.get(this.weblocators.closeModal)
                    .scrollIntoView()
                    .should('contain', 'You have selected a package for a undefined sized dog. Please revisit the services page to select the appropriate size');
                cy.get(this.weblocators.backToServices).scrollIntoView().click();
            }
        });
        cy.wait(2000);

        cy.get(this.weblocators.selectClinic).scrollIntoView().click();
    }

    reserveSlot() {
        cy.get('body').then(($body) => {
            if ($body.find(this.weblocators.slotSelection).length > 0) {
                cy.get(this.weblocators.monthSelection).first().scrollIntoView().click(); // Select month
                cy.get(this.weblocators.dateSelection).scrollIntoView().click(); // Select date
                cy.get(this.weblocators.slotSelection).then(($slots) => {
                    if ($slots.length > 0) {
                        cy.wrap($slots).first().scrollIntoView().click(); // Select time slot
                    } else {
                        cy.log('No time slots available. Please select a different date.');
                        cy.get('.calendar-next-month, .next-month-button').scrollIntoView().click(); // Navigate to next month
                        cy.get(this.weblocators.dateSelection).scrollIntoView().click(); // Select new date
                        cy.get(this.weblocators.slotSelection).first().scrollIntoView().click(); // Select time slot
                    }
                });
            }
        });
    }

    availableSlots() {
        cy.get(this.weblocators.monthSelection).first().scrollIntoView().click(); // Select month
        cy.get(this.weblocators.dateSelection).scrollIntoView().click(); // Select date

        cy.get('body').then(($body) => {
            if ($body.find(this.weblocators.slotSelection).length === 0) {
                cy.get(this.weblocators.sliderVectorIconNext).scrollIntoView().click(); // Click on the slider vector icon
                cy.get(this.weblocators.dateSelection).scrollIntoView().click(); // Select the desired date
            } else {
                cy.get('.calendar-date:contains("desired-date")').scrollIntoView().click(); // Select the desired date
            }
        });

        cy.get('body').then(($body) => {
            if ($body.find('.time-slot.taken').length > 0) {
                cy.log('Time slot already taken, please select another slot.');
            } else {
                cy.wait(5000);
                cy.get(this.weblocators.slotSelection).first().scrollIntoView().click(); // Select time slot
            }
        });
         cy.wait(2000);

        cy.get(this.weblocators.slotSelection).first().scrollIntoView().click(); // Select time slot
    }

    nextButton() {
        cy.get(this.weblocators.nextButton).scrollIntoView().click();
        cy.wait(5000);
    }
applyPromoCode() {
        cy.get(this.weblocators.promoCodeInput)
            .should('be.visible')
            .clear()
            .type('Petsfirst10');

        cy.get(this.weblocators.applyPromoBtn)
            .click();
    }
    confirmBooking() {
        cy.get(this.weblocators.nextButton).scrollIntoView().click();
        cy.wait(2000);
    }

    backtoHome() {
        cy.get(this.weblocators.backtoHome).scrollIntoView().click();
        cy.wait(4000);
    }
}
