class registrationPage {

    get registrationHeader() {
        return cy.contains('Create new account');
    }
    get firstName() {
        return cy.get('[name="first_name"]');
    }
    get lastName() {
        return cy.get('[name="last_name"]');
    }
    get emailAddress() {
        return cy.get('[name="email_address"]');
    }
    get password() {
        return cy.get('[name="password"]');
    }
    get backToLoginBtn() {
        return cy.contains('Back to login');
    }
    get createAccountBtn() {
        return cy.contains('Create Account');
    }

    typeInFirstName(firstName) {
        return this.firstName.type(firstName);
    }

    typeInLastName(lastName) {
        return this.lastName.type(lastName);
    }

    typeInEmailAddress(email) {
        return this.emailAddress.type(email);
    }

    typeInPassword(password) {
        return this.password.type(password);
    }

    clickOnBackToLoginBtn() {
        return this.backToLoginBtn.click();
    }

    clickOnCreateAccountBtn() {
        return this.createAccountBtn.click();
    }

    checkInfoMessage(message) {
        cy.wait(500);
        return cy.get('.MuiAlertTitle-root')
            .eq(1)
            .should('have.text', message); 
    }

    checkInfoText(text) {
        cy.wait(500);
        return cy.get('.MuiAlert-message')
            .eq(1)
            .should('have.text', text); 
    }

    checkInfoErrorText(text) {
        cy.wait(500);
        return cy.get('div.MuiAlert-message')
            .eq(0)
            .should('have.text', text); 
    }

    get firstNameMandatoryError() {
        return cy.get('p.MuiFormHelperText-root')
            .eq(0);      
    }
    get lastNameMandatoryError() {
        return cy.get('p.MuiFormHelperText-root')
            .eq(1);      
    }

    get emailAddressMandatoryError() {
        return cy.get('p.MuiFormHelperText-root')
            .eq(2);      
    }

    get passwordMandatoryError() {
        return cy.get('p.MuiFormHelperText-root')
            .eq(3);      
    }


}
export default registrationPage;