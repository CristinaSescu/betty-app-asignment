/// <reference types ="cypress" />
import Navigation from '../../pages/Navigation';
import RegistrationPage from '../../pages/RegistrationPage';
import LoginPage from '../../pages/LoginPage';
import helpfulEmailFunction from '../../utils/helpfulEmailFuncions';
import HomePage from '../../pages/HomePage';
import user from '../../constants/user';

describe('Registration test', () => {
    const loginPage = new LoginPage();
    const navigation = new Navigation();
    const registrationPage = new RegistrationPage();
    const emailFunction = new helpfulEmailFunction();
    const homePage = new HomePage();
    const randomEmailAddress = emailFunction.createRandomEmailAddress();

    it('Verify user registration ', () => {
       navigation.goToLandingPage();
       cy.url().should('include', '/login');

       loginPage.clickOnRegisterBtn();
       cy.url().should('include', '/new-account');
       
       registrationPage.typeInFirstName(user.firstName);
       registrationPage.typeInLastName(user.lastName);
       registrationPage.typeInEmailAddress(randomEmailAddress);
       registrationPage.typeInPassword(user.password);
       registrationPage.clickOnCreateAccountBtn();
       cy.url().should('include', '/login?account_created=true');
       registrationPage.checkInfoMessage('Account created');
       registrationPage.checkInfoText('Account createdYour account has been created, you can now login here');

       loginPage.typeInEmailAddress(randomEmailAddress);
       loginPage.typeInPassword('Test1234');
       loginPage.clickOnLoginBtn();

       cy.wait(500);
       homePage.homePageTitle
        .invoke('text')
        .invoke('replace', /\u00a0/g, ' ')
        .should('eq', `Welcome  ${user.firstName} ${user.lastName}`);
    });
});
