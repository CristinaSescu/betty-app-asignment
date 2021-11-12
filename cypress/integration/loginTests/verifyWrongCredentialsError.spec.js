/// <reference types ="cypress" />
import Navigation from '../../pages/Navigation';
import LoginPage from '../../pages/LoginPage';
import user from '../../constants/user';

describe('Login test', () => {
    const loginPage = new LoginPage();
    const navigation = new Navigation();
    const wrongEmailAddres = 'angelasmith@ymail.com';
    const wrongPassword = 'Test12345';

    it('Verify the wrong credentials error on the login functionality', () => {
       navigation.goToLoginPage();
       cy.url().should('include', '/login');

       loginPage.typeInEmailAddress(wrongEmailAddres);
       loginPage.typeInPassword(user.password);
       loginPage.clickOnLoginBtn();

       loginPage.checkWrongCredentialsErrorMessage("Wrong CredentialsYou've entered a wrong email address and/or password");

       loginPage.clearEmailAddress();
       loginPage.typeInEmailAddress(user.emailAddress);
       loginPage.clearPassword();
       loginPage.typeInPassword(wrongPassword);

       loginPage.checkWrongCredentialsErrorMessage("Wrong CredentialsYou've entered a wrong email address and/or password");

    });
});
