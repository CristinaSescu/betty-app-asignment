/// <reference types ="cypress" />
import Navigation from '../../pages/Navigation';
import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';
import user from '../../constants/user';
import Header from '../../pages/Header';

describe('Login test', () => {
    const loginPage = new LoginPage();
    const navigation = new Navigation();
    const homePage = new HomePage();
    const header = new Header();

    it('Verify that the user can login and logout', () => {
       navigation.goToLoginPage();
       cy.url().should('include', '/login');

       loginPage.typeInEmailAddress(user.emailAddress);
       loginPage.typeInPassword(user.password);
       loginPage.clickOnLoginBtn();
    
       cy.wait(500);
       homePage.homePageTitle
        .invoke('text')
        .invoke('replace', /\u00a0/g, ' ')
        .should('eq', `Welcome  ${user.firstName} ${user.lastName}`);

        header.clickOnLogOut();
        cy.url().should('include', '/login');
       
    });
});
