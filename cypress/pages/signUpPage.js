export class signUpPage{


    weblocators= {
        loginBtn: '.login_btn',
        countrySelector: '.PhoneInputCountrySelect',
        countryIntitials: 'option[value="PK"]',
        phoneNumber: '.PhoneInputInput',
        submitBtn: '.text-xl',
        otpInputs: '.otp-input input',
        closeModal: '.modal-header',

        //Locators of the elements need to be Asserted.
        mainClinicsDiv: '.swiper-wrapper',
        clinicAlFurjanName: 'h2.mb-1',
        clinicAlFurjanTime: '.swiper-slide-active > .clinic_selection > .flex flex-col > .clinic_days > .off_day !text-[#635C7A]',
        clinicAlFurjanImage: '.swiper-slide-active > .clinic_selection > .img_hold',
        clinicCityWalkCard: '.swiper-slide-next > .clinic_selection',
        clinicCityWalkImage: '.swiper-slide-next > .clinic_selection > .img_hold',
        clinicFurjanCard: '.swiper-slide-active > .clinic_selection'

    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    loginBtn(LBtn){
        cy.get(this.weblocators.loginBtn).click(LBtn)
    }

    clsModal(cls){
        cy.get(this.weblocators.closeModal).click(cls)
    }
    selectCountry(CSelect) {
        cy.get(this.weblocators.countrySelector).select(CSelect)
    }

    enterPhoneNumber(PNum){
        cy.get(this.weblocators.phoneNumber).type(PNum)
    }

    clickSubmitBtn(SBtn) {
        cy.get(this.weblocators.submitBtn).click(SBtn)
    }

    enterOtp(codeOTP){

        cy.get(this.weblocators.otpInputs).each((input, index) => {
            cy.wrap(input).type(codeOTP[index]);
        });
    }

    bookAppointments(bookApp){
      cy.get(this.weblocators.bookVaccination).click();
    }

    // allAssertion(){
    //   // cy.get(this.weblocators.clinicAlFurjanName).should('be.visible');
    //     const expectedData = [
    //         {
    //           name: 'PetsFirst, Al Furjan',
    //           timing: 'Monday - Sunday\n09:00 - 21:00',
    //           phone: '04 451 9138',
    //           address: 'Star by Azizi, Al Furjan'
    //         },
    //         {
    //           name: 'PetsFirst, City Walk',
    //           timing: 'Wednesday - Monday (Tuesday Off)\n09:00 - 20:00',
    //           phone: '04 575 9646',
    //           address: 'Building 13B, City Walk'
    //         }
    //       ];
      
    //       cy.get(this.weblocators.mainClinicsDiv) // Adjust the selector to match your HTML
    //         .should('have.length', expectedData.length) // Check number of cards
    //         .each((card, index) => {
    //           // Validate card content
    //           cy.wrap(card).within(() => {
    //             cy.contains(this.weblocators.clinicAlFurjanName) // Selector for clinic name
    //               .should('contain.text', expectedData[0].name);
      
    //             // cy.get(this.weblocators.clinicAlFurjanTime) // Selector for timing
    //             //   .should('contain.text', expectedData[0].timing);
      
    //             cy.get('.clinic-phone') // Selector for phone
    //               .should('contain.text', expectedData[0].phone);
      
    //             cy.get('.clinic-address') // Selector for address
    //               .should('contain.text', expectedData[0].address);
    //             });
    //         });

        // cy.get(this.weblocators.clinicAlFurjanCard).should('be.visible');
        // cy.get(this.weblocators.clinicAlFurjanImage).should('be.visible');
        // cy.get(this.weblocators.clinicCityWalkCard).should('be.visible');
        // cy.get(this.weblocators.clinicCityWalkImage).should('be.visible');
    // }

    
}