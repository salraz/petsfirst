export class appointmentPage {

    weblocators={
        bookVaccination: '[href="/en/Clinic/vaccination"] > .relative > img',
        closeModal: '.modal-header'
    }

    visitHomePage() {
        cy.visit('https://stage-petsfirst-frontend.azurewebsites.net/en/home');
    }

    clsModal(){
        return cy.get(this.weblocators.closeModal).click();
    }

    getNameInput() {
        return cy.get('input[name="name"]');
    }

    getDateInput() {
        return cy.get('input[name="date"]');
    }

    getTimeInput() {
        return cy.get('input[name="time"]');
    }

    getSubmitButton() {
        return cy.get('button[type="submit"]');
    }

    fillAppointmentForm(name, date, time) {
        this.getNameInput().type(name);
        this.getDateInput().type(date);
        this.getTimeInput().type(time);
    }

    submitForm() {
        this.getSubmitButton().click();
    }
}