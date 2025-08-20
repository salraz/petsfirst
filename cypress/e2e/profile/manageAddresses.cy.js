import { appointmentPage } from "../../pages/appointmentPage";
import AddressPage from "../../pages/AddressPage";

const appObj = new appointmentPage();
const addressPage = new AddressPage();

describe('Manage Saved Addresses', () => {
  beforeEach(() => {
    cy.viewport(1600, 1000);
    cy.uiLoginOnce();
    cy.visit(Cypress.env('URL'));
  });

  it('should add and delete a saved address', () => {
    const randomLocation = addressPage.getRandomLocation();
    const randomStreet = addressPage.getRandomStreet();

    appObj.clsModal(); cy.wait(1000);
    addressPage.goToSavedAddresses();
    addressPage.addNewAddress(randomLocation, randomStreet);
    addressPage.deleteAddress();
    addressPage.goHome();

    cy.log(`✅ Added and deleted address: ${randomLocation}, ${randomStreet}`);
  });
});
