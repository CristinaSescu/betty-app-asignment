/// <reference types ="cypress" />
import Navigation from '../../pages/Navigation';
import RegistrationPage from '../../pages/RegistrationPage';

describe('Registration test', () => {
    const navigation = new Navigation();
    const registrationPage = new RegistrationPage();

    it('Verify that the registration fields and button are enabled', () => {
       navigation.goToRegistrationPage();
       cy.url().should('include', '/new-account');

       registrationPage.registrationHeader.should('have.text', 'Create new account');
       registrationPage.backToLoginBtn.should('not.be.disabled');
       registrationPage.firstName.should('not.be.disabled');
       registrationPage.lastName.should('not.be.disabled');
       registrationPage.emailAddress.should('not.be.disabled');
       registrationPage.password.should('not.be.disabled');
       registrationPage.createAccountBtn.should('not.be.disabled');

    });
});
