class navigationPage {
    get homeNavMenuItem() {
        return cy.contains('Home');
    }
    get myAccountNavMenuItem() {
        return cy.contains('My Account');
    }
    get logOutNavMenuItem() {
        return cy.contains('Log out');
    }
    
    clickOnHomeBtn() {
        return this.homeNavMenuItem.click();
    }

    clickOnMyAccountBtn() {
        return this.myAccountNavMenuItem.click();
    }

    clickOnLogOut() {
        return this.logOutNavMenuItem.click();
    }
}
export default navigationPage;