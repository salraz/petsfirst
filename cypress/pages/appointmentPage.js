export class appointmentPage {

    weblocators={
        bookVaccination: '[href="/en/Clinic/vaccination"] > .relative > img',
        closeModal: '.modal-header',
        petSelector: '.select-pets > .flex > :nth-child(3)',
        vaccinationPackage: ':nth-child(2) > .card-horizontal-hold > .text-hold',
        inputPetName: '.input-hold',
        addPetBtn: '.btn',
        backToServices: '.Button_btn__AMZkP',
        vaccinationPackageNotes: '#notes',
        vaccinationNextBtn: '.btn',
        bookappointmentBtn: '#book-an-appointment',
        selectClinic: '.near-clinic-hold',
        monthSelection: '.date-slot > :nth-child(2)',
        dateSelection: '.date_slider_with_buttons > .container > :nth-child(2)',
        timeslots: '.time-slot-hold',
        sliderVectorIconNext: ':nth-child(3) > button > svg',
        sliderVectorIconPrev: ':nth-child(1) > button > svg',


    }

    visitHomePage() {
        cy.visit(Cypress.env('URL'))
    }

    clsModal(){
        return cy.get(this.weblocators.closeModal).click();
    }

    createVaccinationApp() {
        
        cy.get(this.weblocators.bookappointmentBtn).click();
        cy.get(this.weblocators.bookVaccination).click();
        cy.wait(2000);
        cy.get(this.weblocators.petSelector).click();
        cy.wait(2000);
        cy.get(this.weblocators.vaccinationPackage).click();
        cy.wait(2000);
        cy.get(this.weblocators.addPetBtn).click();
        cy.wait(2000);

        cy.get('body').then(($body) => {
            if ($body.find('.modal-header').length > 0) {
                cy.get(this.weblocators.closeModal).should('contain', 'You have selected a package for a undefined sized dog. Please revisit the services page to select the appropriate size');
                cy.get(this.weblocators.backToServices).click();
            }
        });
        cy.wait(2000);

        cy.get(this.weblocators.selectClinic).click();
        // cy.get(this.weblocators.vaccinationPackageNotes).type('My pet is suffering from fever and has been sneezing since days');
        // cy.wait(2000);
        // cy.get(this.weblocators.vaccinationNextBtn).click();
        // cy.wait(2000);

    }

    reserveSlot() {
        cy.get('body').then(($body) => {
            if ($body.find(this.weblocators.timeslots).length > 0) {
            cy.get(this.weblocators.monthSelection).first().click(); // Select month
            cy.get(this.weblocators.dateSelection).click(); // Select date
            cy.get(this.weblocators.timeslots).then(($slots) => {
                if ($slots.length > 0) {
                    cy.wrap($slots).first().click(); // Select time slot
                } else {
                    cy.log('No time slots available. Please select a different date.');
                    cy.get('.calendar-next-month, .next-month-button').click(); // Navigate to next month
                    cy.get(this.weblocators.dateSelection).click(); // Select new date
                    cy.get(this.weblocators.timeslots).first().click(); // Select time slot
                }
            });
            }
        });
    }

    availableSlots() {
        cy.get(this.weblocators.monthSelection).first().click(); // Select month
            cy.get(this.weblocators.dateSelection).click(); // Select date
            cy.get('body').then(($body) => {
                if ($body.find(this.weblocators.timeslots).length === 0) {
                    cy.get(this.weblocators.sliderVectorIconNext).click(); // Click on the slider vector icon
                    cy.get(this.weblocators.dateSelection).click(); // Select the desired date
                } else {
                    cy.get('.calendar-date:contains("desired-date")').click(); // Select the desired date
                }
            });
            cy.get('body').then(($body) => {
                if ($body.find('.time-slot.taken').length > 0) {
                    cy.log('Time slot already taken, please select another slot.');
                } else {
                    cy.get(this.weblocators.timeslots).first().click(); // Select time slot
                }
            });
            cy.get(this.weblocators.timeslots).first().click(); // Select time slot
        }
    }
