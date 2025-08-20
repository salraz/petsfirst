class PetProfilePage {
  selectors = {
    myPetsCTA: '#signup-cta',
    myPetsButton: 'My Pets',
    firstPetCard: 'picture.petList_img_hold__Thqqp',
    petNameInput: '#parent-name-input1',
    nextArrowButton: '#next-arrow-btn',
    petTypeCardList: '.PetSquareCard_square_card_hold__1GPaN',
    skipBreedButton: '#skip-breed-cta',
    genderMaleOption: '#Male',
    skipDOBButton: '#skip-pet-dob-selection',
    skipImageUploadButton: '#skip-pet-image-btn',
    savePetProfileButton: '#save-pet-detail-btn',
    openPetDetailButton: '#pet-detail-cta',
    editButton: 'button.btn',
    editNameInput: '#pet-name-input',
    continueButton: '.Button_btn_outline_secondary__6i5WX',
    calendarIcon: 'span.myDetailsProfile_icon_hold__N8_k_.myDetailsProfile_icon_hold_calender__oaLPM.cursor-pointer > svg',
    calendarDate: 'div:nth-of-type(55)',
    modalCloseButton: 'div.modal-footer.undefined > #close-popup',
    saveEditedPetButton: '#save_pet_button',
    deletePetButton: '.petsDetailcard_deleteBtn__pUMZa',
    deleteConfirmCloseButton: '.modal-footer > #close-popup',
    homeLink: 'Home'
  };

  goToMyPets() {
    cy.wait(1000);
    cy.contains(this.selectors.myPetsButton).click();
    cy.wait(1000);
  }

  myPetsCTA() {
    cy.get(this.selectors.myPetsCTA).click();
    cy.wait(1000);
  }

  clickLastPetCard() {
    cy.get(this.selectors.firstPetCard)
      .should('have.length.greaterThan', 0)
      .last()
      .click({ force: true });
    cy.wait(1000);
  }

  enterPetName(initialName) {
    cy.get(this.selectors.petNameInput)
      .should('be.visible')
      .clear()
      .type(initialName);
    cy.wait(1000);
    cy.get('body').then(($body) => {
      if ($body.find(this.selectors.continueButton).length > 0) {
        cy.log(`🟡 Modal appeared. Clicking "Continue anyway" for name: ${initialName}`);
        cy.get(this.selectors.continueButton).click();
        cy.wait(1000);
      } else {
        cy.log(`✅ Pet name "${initialName}" accepted with no modal.`);
      }
    });
  }

  clickNextArrow() {
    cy.get(this.selectors.nextArrowButton).click();
    cy.wait(1000);
  }

  selectPetType(index) {
    cy.get(this.selectors.petTypeCardList).then(($cards) => {
      if (index >= $cards.length) {
        throw new Error(`Invalid pet type index ${index}. Only ${$cards.length} options available.`);
      }

      const selectedCard = $cards.eq(index);
      const cardId = selectedCard.attr('id');

      if (index === $cards.length - 1 || cardId === '3') {
        throw new Error('Selecting this pet type is not allowed.');
      }

      cy.wrap(selectedCard).click();
      cy.wait(1000);
    });
  }

  skipBreed() {
    cy.get(this.selectors.skipBreedButton).click();
    cy.wait(1000);
  }

  selectGender() {
    cy.get(this.selectors.genderMaleOption).click();
    cy.wait(1000);
  }

  skipDOB() {
    cy.get(this.selectors.skipDOBButton).click();
    cy.wait(1000);
  }

  skipImageUpload() {
    cy.get(this.selectors.skipImageUploadButton).click();
    cy.wait(1000);
  }

  savePetProfile() {
    cy.get(this.selectors.savePetProfileButton).click();
    cy.wait(1000);
  }

  openPetDetail() {
    cy.get(this.selectors.openPetDetailButton)
      .should('have.length.greaterThan', 0)
      .last()
      .click({ force: true });
    cy.wait(1000);
  }

  editPetProfile(name) {
    cy.get(this.selectors.editButton).click();
    cy.wait(1000);

    cy.get(this.selectors.editNameInput)
      .should('be.visible')
      .wait(1000)
      .invoke('val', '')
      .type(name)
      .should('have.value', name);
    cy.wait(1000);

    cy.get('body').then(($body) => {
      if ($body.find(this.selectors.continueButton).length > 0) {
        cy.log(`🟡 Modal appeared. Clicking "Continue anyway" for name: ${name}`);
        cy.get(this.selectors.continueButton).click();
        cy.wait(1000);
      } else {
        cy.log(`✅ Pet name "${name}" accepted with no modal.`);
      }
    });
  }

  selectDOBFromCalendar() {
    cy.get(this.selectors.calendarIcon).click();
    cy.wait(500);
    cy.get(this.selectors.calendarDate).click();
    cy.wait(1000);
  }

  closeModal() {
    cy.get(this.selectors.modalCloseButton).click();
    cy.wait(1000);
  }

  saveEditedPet() {
    cy.wait(1000);
    cy.get(this.selectors.saveEditedPetButton).click();
    cy.wait(1000);
  }

  deletePet() {
    cy.wait(1000);
    cy.get(this.selectors.deletePetButton).last().click();
    cy.wait(1000);
  }

  confirmDeletePopupClose() {
    cy.get(this.selectors.deleteConfirmCloseButton).click();
    cy.wait(1000);
  }

  goHome() {
    cy.contains(this.selectors.homeLink).click();
    cy.wait(1000);
  }
}

export default new PetProfilePage();
