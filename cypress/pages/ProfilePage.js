export class ProfilePage {
  selectors = {
    profileDropdown: 'div.userProfileDropdown_user_profile_round_hold__ufkoU',
    myDetailsButton: 'My details',
    firstNameInput: '#parent-first-input',
    lastNameInput: '#parent-lastname-input',
    emailInput: '#parent-email-input',
    saveButton: '#save-user-profile'
  };

  openProfileDropdown() {
    cy.get(this.selectors.profileDropdown).click();
    cy.wait(1000);
  }

  clickMyDetails() {
    cy.contains(this.selectors.myDetailsButton).click();
    cy.wait(1000);
  }

  updateProfile(firstName, lastName, email) {
    cy.get(this.selectors.firstNameInput).clear().type(firstName);
    cy.wait(1000);
    cy.get(this.selectors.lastNameInput).clear().type(lastName);
    cy.wait(1000);
    cy.get(this.selectors.emailInput).clear().type(email);
    cy.wait(1000);
    cy.get(this.selectors.saveButton).click();
    cy.wait(1000);
  }
}
