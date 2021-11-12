class navigation {
    goToLandingPage() {
        return cy.visit('/');
    }
    goToLoginPage() {
        return cy.visit('/login');
    }
    goBackFromBrowser() {
        return cy.go('back');
    }
    goToRegistrationPage() {
        return cy.visit('/new-account');
    }
}
export default navigation;
