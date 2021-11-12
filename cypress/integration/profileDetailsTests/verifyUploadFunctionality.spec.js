/// <reference types ="cypress" />
import Navigation from '../../pages/Navigation';
import LoginPage from '../../pages/LoginPage';
import user from '../../constants/user';
import Header from '../../pages/Header';
import ProfileDetails from '../../pages/ProfileDetails';

describe('Profile details test', () => {
    const loginPage = new LoginPage();
    const navigation = new Navigation();
    const header = new Header();
    const profileDetailsPage = new ProfileDetails();

    it('Verify that the user can upload a new photo', () => {
        const imageFile = 'avatarPicture.jpg'
        navigation.goToLoginPage();
        loginPage.typeInEmailAddress(user.emailAddress);
        loginPage.typeInPassword(user.password);
        loginPage.clickOnLoginBtn();
        header.clickOnMyAccountBtn();

        profileDetailsPage.profileDetailsTitle.should('have.text', "Profile details");
        profileDetailsPage.uploadBtn.attachFile(imageFile);
        profileDetailsPage.checkUploadedPhotoIsDisplayed(imageFile);
        
        profileDetailsPage.clickOnSaveChangesBtn();
        profileDetailsPage.checkSuccessUploadPhotoMessage('SuccessProfile successfully updated');
       
    });
});
