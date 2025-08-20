class CancelAppointment {
    locators = {
        appointmentsLink: '#appointment-cta',
        appointmentContainer: '#appointment-selection-cta',
        appointmentButton: 'button.w-full.appointmentDetailsClinicHome_appointment_btn__DJUAo',
        slotSelection: '#slots-selection-cta',
        nextButton: '#next-btn-cta',
        backToHomeButton: '#back-to-home-cta',
        cancelAppointment:'.appointmentDetailsClinicHome_appointment_cancel_btn__Rt_BU',
        cancelAppointmentYes:'.modal-footer > #close-popup'
    };

    
   
    Appointments() {
        cy.get(this.locators.appointmentsLink).click();
        cy.wait(2000);
    }

    bookAppointment() {
        cy.get(this.locators.appointmentContainer).click();
        cy.wait(2000);
        cy.get(this.locators.appointmentButton).click();
        cy.wait(2000);
    }
        
   
    CancelAppointment(){

        cy.get(this.locators.appointmentContainer).click();
        cy.wait(2000);

        cy.get(this.locators.cancelAppointment).click();
        cy.wait(1000);
        cy.get(this.locators.cancelAppointmentYes).click();
        cy.wait(5000);


    }
}

export default new CancelAppointment();
