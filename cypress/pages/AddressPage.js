class AddressPage {
  locators = {
    userProfileIcon: '.userProfileDropdown_user_profile_round__XWC_e',
    savedAddressCTA: '#saved-address-cta',
    savedAddressesLink: 'Saved addresses',
    addNewAddressBtn: '#add_new_address',
    searchInput: '#search',
    searchResultItem: 'li.PetBreedFilterSearch_normal_item__vIOmX',
    continueFooterBtn: '#footer_btn',
    streetInput: '#street_building_name',
    labelOption: '#add_a_label > :nth-child(1)',
    saveAddressBtn: '#save_address_btn',
    deleteIcon: 'div:nth-of-type(2) > .flex > div:nth-of-type(2) > svg',
    closePopupBtn: 'div.modal-footer.pt-1 > #close-popup',
    homeLink: 'Home'
  };

  dubaiLocations = [
    'Burj Khalifa', 'Dubai Marina', 'Palm Jumeirah', 'Deira City Centre',
    'Mall of the Emirates', 'Jumeirah Beach', 'Al Barsha', 'Al Furjan',
    'Downtown Dubai', 'Business Bay'
  ];

  streetNames = [
    'Sheikh Zayed Road', 'Al Wasl Street', 'Jumeirah Road',
    'Dubai Creek Road', 'Al Khail Road', 'Financial Centre Road'
  ];

  goToSavedAddresses() {
    cy.get(this.locators.userProfileIcon).click();
    cy.wait(2000);
    cy.get(this.locators.savedAddressCTA).click();
    cy.contains(this.locators.savedAddressesLink).click();
  }

  addNewAddress(location, street) {
    cy.get(this.locators.addNewAddressBtn).click();
    cy.wait(2000);

    cy.get(this.locators.searchInput).clear().type(location);
    cy.wait(2000);
    cy.get(this.locators.searchResultItem).first().click();
    cy.get(this.locators.continueFooterBtn).click();

    cy.get(this.locators.streetInput).clear().type(street);
    cy.wait(2000);
    cy.get(this.locators.labelOption).click();
    cy.wait(2000);
    cy.get(this.locators.saveAddressBtn).click();
  }

  deleteAddress() {
    cy.get(this.locators.deleteIcon).click();
    cy.get(this.locators.closePopupBtn).click();
  }

  goHome() {
    cy.contains(this.locators.homeLink).click();
  }

  getRandomLocation() {
    return this.dubaiLocations[Math.floor(Math.random() * this.dubaiLocations.length)];
  }

  getRandomStreet() {
    return this.streetNames[Math.floor(Math.random() * this.streetNames.length)];
  }
}

export default AddressPage;
