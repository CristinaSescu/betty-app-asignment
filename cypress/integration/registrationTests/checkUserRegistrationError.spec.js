/// <reference types ="cypress" />
import Navigation from '../../pages/Navigation';
import RegistrationPage from '../../pages/RegistrationPage';
import user from '../../constants/user';

describe('Registration test', () => {
    const navigation = new Navigation();
    const registrationPage = new RegistrationPage();

    it('Verify error when user tries to register twice with the same email address ', () => {
       navigation.goToRegistrationPage();
       cy.url().should('include', '/new-account');

       registrationPage.typeInFirstName(user.firstName);
       registrationPage.typeInLastName(user.lastName);
       registrationPage.typeInEmailAddress(user.emailAddress);
       registrationPage.typeInPassword(user.password);
       registrationPage.clickOnCreateAccountBtn();

       cy.url().should('include', '/new-account');
       registrationPage.checkInfoErrorText('Errorerror: This email already exists');  
    });
});
