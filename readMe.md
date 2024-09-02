## E2E Cypress e2e tests for Option 1

#### Tests are written for webapp Tour Of Heroes

I prepared simple e2e tests which should all basic parts  of the web app. I focused on main navigation paths based on documentaion at Angular webpage and my actual interaction with app. I also focused on testing main functionalities, where I covered positive and also negative test cases.

#### Demo presentation is avalaible on google drive: [Tour of Heroes Demo presentation](https://docs.google.com/presentation/d/1fJtld8q8LFKTQj16byG_YtMymk_CxKSI/edit?usp=sharing&ouid=112772196783359617351&rtpof=true&sd=true)


#### Cypress tests are written using JavaScript

#### Relevant utilities which I used for creating testing enviroment:

- Cypress version: 13.13.0
- Node version: 20.9.0
- npm version: 10.8.2 
- cypress xpath: 2.0.3
- vs studio code: 1.83.1
- git: 2.43.0.windows.1
- browser: chrome 128
- OS - windows home 10

#### Tour of Heroes
Web app Tour Od Heroes is running locally at localhost. In order to run Tour of Heroes, I used command **npm run start**
- it uses port 4200.


### Steps to Clone and Run e2e Tests

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/Lubka93/pantheon_option1.git
    ```

2. **Navigate to the Project Directory:**
    ```bash
    cd pantheon_option1
    ```

3. **Install Dependencies:**
    ```bash
    npm install
    ```

4. **Run Cypress Tests:**
    - To open  the Cypress Test Runner:
        ```bash
        npm run open
        ```
    - To run all tests in headless mode:
        ```bash
        npm run runner
        ```
    - To run all tests in headed mode:
        ```bash
        npm run runnerH
        ```
