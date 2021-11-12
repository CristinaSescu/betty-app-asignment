class ProfileDetails {
    get profileDetailsTitle() {
        return cy.contains('Profile details');
    }
    get uploadBtn() {
        return cy.get('[type="file"]');
    }
    checkUploadedPhotoIsDisplayed(photoName) {
        return cy.contains(photoName);
    }
    clickOnSaveChangesBtn() {
        return cy.contains('Save changes').click();
    }
    checkSuccessUploadPhotoMessage(message) {
        cy.wait(2000);
        return cy.get('div.MuiAlert-message')
            .eq(0)
            .should('have.text', message); 
    }
}
export default ProfileDetails;