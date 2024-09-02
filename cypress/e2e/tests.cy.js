
import { Base } from "../components/base";
const baseURL = 'https://demoqa.com/login'

describe('Verify login functionality', ()=>{
   
beforeEach(()=>{
        cy.visit(baseURL);
        cy.url().should('contain', '/login');
        cy.title().should('contain', 'DEMOQA');
        cy.fixture('testData.json').as('testData');
})

it('Login functionality  using valid username and valid password', ()=>{
        cy.get('@testData').then((testData)=>{
        const testDataArr = testData.validLoginCredentials;
 
        Base.loginUserName(testDataArr[0].userName);
        Base.loginPassword(testDataArr[0].password);
        Base.login();

      //  cy.wait(1000);

        //Assertions
        cy.url().should('contain', '/profile');
        Base.userNameProfileLabel().should('be.visible').should('contain', testDataArr[0].userName)
})
})

it('Login functionality using invalid username or invalid password', ()=>{
    cy.get('@testData').then((testData)=>{  
        const testDataArr = testData.invalidLoginCredentials;

        testDataArr.forEach((data)=>{
     
        Base.loginUserName(data.userName);
        Base.loginPassword(data.password);
        Base.login();

        cy.wait(1000); 

        //Assertions
        cy.url().should('contain', '/login');
        Base.loginPageHeader().should('be.visible');
        Base.passwordInput().should('be.visible');
        Base.userNameInput().should('be.visible');
        Base.loginErrorMessage().should('be.visible').should('contain', 'Invalid username or password!')

        //Clear login inputs
        Base.clearLogin();
        })

})
})

it('Login functionality using empty username and valid password', ()=>{
    cy.get('@testData').then((testData)=>{  
        const testDataArr = testData.validLoginCredentials;


        Base.loginPassword(testDataArr[0].password);
        Base.login();
 
        //Assertions
        cy.url().should('contain', '/login');
        Base.loginPageHeader().should('be.visible');
        Base.passwordInput().should('be.visible');
        Base.userNameInput().should('be.visible');
        Base.loginErrorMessage().should('be.visible').should('contain', 'Invalid username or password!')
      
})
})

it('Login functionality using empty password and valid user name', ()=>{
    cy.get('@testData').then((testData)=>{  
        const testDataArr = testData.validLoginCredentials;


        Base.loginUserName(testDataArr[0].userName);
        Base.login();
 
        //Assertions
        cy.url().should('contain', '/login');
        Base.loginPageHeader().should('be.visible');
        Base.passwordInput().should('be.visible');
        Base.userNameInput().should('be.visible');
        Base.loginErrorMessage().should('be.visible').should('contain', 'Invalid username or password!')
      
})
})

it('Login functionality using empty password and empty user name', ()=>{

        Base.login();

        //Assertions
        cy.url().should('contain', '/login');
        Base.loginPageHeader().should('be.visible');
        Base.passwordInput().should('be.visible');
        Base.userNameInput().should('be.visible');
        Base.loginErrorMessage().should('be.visible').should('contain', 'Invalid username or password!')
      
})

it('Login functionality using all uppercase username and valid password', ()=>{
    cy.get('@testData').then((testData)=>{  
        const testDataArr = testData.caseSensitiveLoginCredentials;

        Base.loginUserName(testDataArr[0].userName);
        Base.loginPassword(testDataArr[0].password);
        Base.login();

        cy.wait(1000);

        // Assertion
        cy.url().should('contain', '/login');
        Base.userNameInput().should('be.visible');
        Base.passwordInput().should('be.visible');

})
})

it('Login functionality using all uppercase username and all uppercase password', ()=>{
    cy.get('@testData').then((testData)=>{  
        const testDataArr = testData.caseSensitiveLoginCredentials;

        Base.loginUserName(testDataArr[1].userName);
        Base.loginPassword(testDataArr[1].password);
        Base.login();

        cy.wait(1000);

        // Assertion
        cy.url().should('contain', '/login');
        Base.userNameInput().should('be.visible');
        Base.passwordInput().should('be.visible');

})
})

it('Login functionality using valid username and all uppercase password', ()=>{
    cy.get('@testData').then((testData)=>{  
        const testDataArr = testData.caseSensitiveLoginCredentials;

        Base.loginUserName(testDataArr[2].userName);
        Base.loginPassword(testDataArr[2].password);
        Base.login();

        cy.wait(1000);

        // Assertion
        cy.url().should('contain', '/login');
        Base.userNameInput().should('be.visible');
        Base.passwordInput().should('be.visible');

})
})

it('Login functionality using valid username and all lowercase password', ()=>{
    cy.get('@testData').then((testData)=>{  
        const testDataArr = testData.caseSensitiveLoginCredentials;

        Base.loginUserName(testDataArr[3].userName);
        Base.loginPassword(testDataArr[3].password);
        Base.login();

        cy.wait(1000);

        // Assertion
        cy.url().should('contain', '/login');
        Base.userNameInput().should('be.visible');
        Base.passwordInput().should('be.visible');

})
})

it('Login functionality using valid username or valid password with space prefix', ()=>{
    cy.get('@testData').then((testData)=>{  
        const testDataArr = testData.loginCredentialsSpacesBefore;

        testDataArr.forEach((data)=>{
     
        Base.loginUserName(data.userName);
        Base.loginPassword(data.password);
        Base.login();

        cy.wait(1000); 
 
        //Assertions
        cy.url().should('contain', '/login');
        Base.loginPageHeader().should('be.visible');
        Base.passwordInput().should('be.visible');
        Base.userNameInput().should('be.visible');
        Base.loginErrorMessage().should('be.visible').should('contain', 'Invalid username or password!')

        //Clear login inputs
        Base.clearLogin();
        })

})

})

it('Login functionality using valid username or valid password with space sufix', ()=>{
    cy.get('@testData').then((testData)=>{  
        const testDataArr = testData.loginCredentialsSpacesAfter;

        testDataArr.forEach((data)=>{
     
        Base.loginUserName(data.userName);
        Base.loginPassword(data.password);
        Base.login();

        cy.wait(1000); 
 
        //Assertions
        cy.url().should('contain', '/login');
        Base.loginPageHeader().should('be.visible');
        Base.passwordInput().should('be.visible');
        Base.userNameInput().should('be.visible');
        Base.loginErrorMessage().should('be.visible').should('contain', 'Invalid username or password!')

        //Clear login inputs
        Base.clearLogin();
        })

})
})

it('Login functionality using valid username or valid password with space in the middle of the credential', ()=>{
    cy.get('@testData').then((testData)=>{  
        const testDataArr = testData.loginCredentialsSpacesMiddle;

        testDataArr.forEach((data)=>{
     
        Base.loginUserName(data.userName);
        Base.loginPassword(data.password);
        Base.login();

        cy.wait(1000); 

        //Assertions
        cy.url().should('contain', '/login');
        Base.loginPageHeader().should('be.visible');
        Base.passwordInput().should('be.visible');
        Base.userNameInput().should('be.visible');
        Base.loginErrorMessage().should('be.visible').should('contain', 'Invalid username or password!')

        //Clear login inputs
        Base.clearLogin();
        })

})
})

it('Login functionality using non-existent username and password', ()=>{
    cy.get('@testData').then((testData)=>{  
        const testDataArr = testData.nonExistingLoginCredentials;

        Base.loginUserName(testDataArr[0].userName);
        Base.loginPassword(testDataArr[0].password);
        Base.login();
 
        //Assertions
        cy.url().should('contain', '/login');
        Base.loginPageHeader().should('be.visible');
        Base.passwordInput().should('be.visible');
        Base.userNameInput().should('be.visible');
        Base.loginErrorMessage().should('be.visible').should('contain', 'Invalid username or password!')


})
})

it('Log in functionality using valid user name and valid password from deactivated account', ()=>{

    Base.deleteAccount();
    cy.wait(1000)
    cy.get('@testData').then((testData)=>{  
        cy.visit(baseURL);
        const testDataArr = testData.validLoginCredentials;

        Base.loginUserName(testDataArr[0].userName);
        Base.loginPassword(testDataArr[0].password);
        Base.login();
 
        //Assertions
        cy.url().should('contain', '/login');
        Base.loginPageHeader().should('be.visible');
        Base.passwordInput().should('be.visible');
        Base.userNameInput().should('be.visible');
        Base.loginErrorMessage().should('be.visible').should('contain', 'Invalid username or password!')


})
})

})