/// <reference types ="cypress" />
import Navigation from '../../pages/Navigation';
import RegistrationPage from '../../pages/RegistrationPage';

describe('Registration test', () => {
    const navigation = new Navigation();
    const registrationPage = new RegistrationPage();
    const errorMessage = 'This field is required';
    const red = 'rgb(244, 67, 54)';

    it('Verify that the registration fields are mandatory', () => {
        navigation.goToRegistrationPage();
        cy.url().should('include', '/new-account');

        registrationPage.clickOnCreateAccountBtn();

        registrationPage.firstNameMandatoryError.should('have.text', errorMessage);
        registrationPage.firstNameMandatoryError.should('have.css', 'color', red);

        registrationPage.lastNameMandatoryError.should('have.text', errorMessage);
        registrationPage.lastNameMandatoryError.should('have.css', 'color', red);

        registrationPage.emailAddressMandatoryError.should('have.text', errorMessage);
        registrationPage.emailAddressMandatoryError.should('have.css', 'color', red);

        registrationPage.passwordMandatoryError.should('have.text', errorMessage);
        registrationPage.passwordMandatoryError.should('have.css', 'color', red);


    });
});