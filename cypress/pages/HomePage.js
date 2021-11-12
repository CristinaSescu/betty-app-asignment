class HomePage {
    get homePageTitle() {
       return cy.contains('Welcome');
    }
}
export default HomePage;