class loginPage {

    get emailAddress() {
        return cy.get('[name="email_address"]');
    }
    get password() {
        return cy.get('[name="password"]');
    }
    get registerNewAccountBtn() {
        return cy.contains('Register new account');
    }
    get iForgotMyPasswordBtn() {
        return cy.contains('I forgot my password');
    }
    get loginBtn() {
        return cy.get('[type="submit"]');
    }

    typeInPassword(password) {
        return this.password.type(password);
    }

    typeInEmailAddress(email) {
        return this.emailAddress.type(email);
    }

    clickOnLoginBtn() {
        return this.loginBtn.click();
    }

    clickOnRegisterBtn() {
        return this.registerNewAccountBtn.click();
    }

    clickOnForgotPasswordBtn() {
        return this.iForgotMyPasswordBtn.click();
    }

    clearPassword(password) {
        return this.password.clear(password);
    }

    clearEmailAddress(email) {
        return this.emailAddress.clear(email);
    }

    checkWrongCredentialsErrorMessage(message) {
        cy.wait(500);
        return cy.get('div.MuiAlert-message')
            .should('have.text', message); 
    }

}
export default loginPage;