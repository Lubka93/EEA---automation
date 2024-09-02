//import 'cypress-xpath';



class Main {

  //Login
  userNameInput =()=> cy.get('#userName');
  passwordInput =()=> cy.get('#password');
  loginButton =()=> cy.get('#login');
  logoutButton =()=> cy.contains('button', 'Log out');
  userNameProfileLabel =()=> cy.get('#userName-value');
  loginPageHeader =()=> cy.contains('h1', 'Login');
  loginErrorMessage = ()=> cy.get('#name');
  deleteAccountButton = ()=> cy.contains('button', 'Delete Account');
  alertConfirmation = ()=> cy.get('#closeSmallModal-ok');




  loginUserName(userName) {
    this.userNameInput().should('be.visible').type(userName);

  }

  loginPassword(password) {
    this.passwordInput().should('be.visible').type(password);
   
  }
  login() {
    this.loginButton().should('be.visible').click();
  }


  clearLogin() {
    this.userNameInput().should('be.visible').clear();
    this.passwordInput().should('be.visible').clear();

  }


 logout() {
  this.logoutButton().should('be.visible').click();
 }



 
 deleteAccount() {

  cy.fixture('testData.json').as('testData');

  cy.get('@testData').then((testData)=>{
    const testDataArr = testData.validLoginCredentialsDeact;

    this.loginUserName(testDataArr[0].userName)
    this.loginPassword(testDataArr[0].password)
    this.login();
    this.deleteAccountButton().should('be.visible').click();
    cy.wait(500);
    this.alertConfirmation().click();

  })

 }

}

export const Base = new Main();
