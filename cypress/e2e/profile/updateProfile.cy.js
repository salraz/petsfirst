import { appointmentPage } from "../pages/appointmentPage";
import { ProfilePage } from "../pages/ProfilePage";

const appObj = new appointmentPage();
const profilePage = new ProfilePage();

describe('Update Profile', () => {
  beforeEach(() => {
    cy.viewport(1600, 1000);
    cy.uiLoginOnce();
    cy.visit(Cypress.env('URL'));
  });

  it('should update profile info with random names', () => {
    const firstNames = ['Joe', 'Dave', 'Mike', 'John'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown'];

    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const randomEmail = `${randomFirstName.toLowerCase()}@yopmail.com`;

    appObj.clsModal(); cy.wait(1000);
    profilePage.openProfileDropdown(); cy.wait(1000);
    profilePage.clickMyDetails(); cy.wait(1000);
    profilePage.updateProfile(randomFirstName, randomLastName, randomEmail); cy.wait(1000);

    cy.log(`Updated profile with: ${randomFirstName} ${randomLastName}, Email: ${randomEmail}`);
  });
});
