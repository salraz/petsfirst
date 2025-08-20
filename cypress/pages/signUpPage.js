export class signUpPage {

    weblocators = {
        // Login & Country Selection
        loginBtn: '.login_btn',
        countrySelector: '.PhoneInputCountrySelect',
        countryIntitials: 'option[value="PK"]',
        phoneNumber: '.PhoneInputInput',
        submitBtn: '.text-xl',

        // OTP Page
        otpInputs: '.otp-input input',
        otpHeader: 'h1.text-primary-default',
        phoneNumberOnOtpPage: 'header.head p span',
        retryMessage: '.login-nav p:nth-child(1)',
        retryTimer: '.login-nav p:nth-child(2)',

        // Modals & Errors
        closeModal: '.modal-header',
        errorMsg: '.errorText_error_message__T_gyH.font-medium.pt-4.block',

        // Welcome Screen
        welcomeHeader: 'h1.text-primary-default',
        welcomeSubHeader: 'p.text-base.text-primary-default',
        selectedCountry: '.PhoneInputCountrySelect option:selected',
        countryFlag: '.PhoneInputCountryIconImg',
        phoneInput: '#phone-number-input',
        continueBtn: 'button:contains("Continue")',

        // Appointment Booking
        bookVaccination: '.book-vaccination-btn' // <-- replace with actual selector
    }

    openURL() {
        cy.visit(Cypress.env('URL'))
        cy.wait(4000)
    }

    clsModal() {
        cy.get(this.weblocators.closeModal).click();
        cy.wait(2000);
    }

    clickLoginBtn() {
        cy.get(this.weblocators.loginBtn).click();
    }

    verifyWelcomeScreen() {
        cy.get(this.weblocators.welcomeHeader)
            .should('be.visible')
            .and('have.text', 'Welcome!');

        cy.get(this.weblocators.welcomeSubHeader)
            .should('be.visible')
            .and('contain.text', 'Enter your mobile number to continue');

        cy.get(this.weblocators.selectedCountry)
            .should('have.value', 'AE');

        cy.get(this.weblocators.countryFlag)
            .should('be.visible')
            .and('have.attr', 'alt', 'United Arab Emirates')
            .and('have.attr', 'src')
            .and('include', 'AE.svg');

        cy.get(this.weblocators.phoneInput)
            .should('be.visible')
            .and('have.value', '+971');

        cy.get(this.weblocators.continueBtn).should('be.disabled');
    }

    selectCountry(CSelect) {
        cy.get(this.weblocators.countrySelector).select(CSelect)
    }

    enterPhoneNumber(PNum) {
        cy.get(this.weblocators.phoneNumber).type(PNum)
    }

    clickSubmitBtn() {
        cy.get(this.weblocators.submitBtn).click()
    }

    verifyAllOtpPageElements(expectedPhoneNumber) {
        cy.get(this.weblocators.otpHeader)
            .should('be.visible')
            .and('have.text', 'Verify your number');

        cy.get(this.weblocators.phoneNumberOnOtpPage)
            .should('be.visible')
            .and('contain.text', expectedPhoneNumber);

        cy.get(this.weblocators.otpInputs)
            .should('have.length', 4)
            .each((input) => {
                cy.wrap(input)
                    .should('be.visible')
                    .and('have.attr', 'type', 'text')
                    .and('have.attr', 'pattern', '[0-9]*')
                    .and('have.attr', 'inputmode', 'numeric')
                    .and('have.value', '');
            });

        cy.get(this.weblocators.retryMessage)
            .should('be.visible')
            .and('contain.text', "Haven’t received an SMS?");

        cy.get(this.weblocators.retryTimer)
            .should('be.visible')
            .and('contain.text', 'Retry in');
    }

    enterOtp(codeOTP) {
        cy.get(this.weblocators.otpInputs).each((input, index) => {
            cy.wrap(input).type(codeOTP[index]);
        });
    }

    bookAppointments() {
        cy.get(this.weblocators.bookVaccination).click();
    }
}
