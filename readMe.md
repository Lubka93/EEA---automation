## Login functionality testing

#### Tests are written for web app https://demoqa.com/login

I automated all test cases for login functionality from excel file (<a href="https://docs.google.com/spreadsheets/d/1FUsawt6QdzI_KBeabKra-4c5Kqyev2l-/edit?usp=sharing&ouid=112772196783359617351&rtpof=true&sd=true" target="_blank">EEA Automation</a>).

Precondition:
-
**!!! Before each automated test suite run, it is necessary to manually register at https://demoqa.com/register using the following precondition test cases from excel file (**Test case login - precondition sheet**): <a href="https://docs.google.com/spreadsheets/d/1FUsawt6QdzI_KBeabKra-4c5Kqyev2l-/edit?usp=sharing&ouid=112772196783359617351&rtpof=true&sd=true" target="_blank">EEA Automation</a>

- TC A1
- TC A2
- TC A3


**Run Cypress Tests:**

- 1. **To run all tests in headless mode**
        ```bash
        npm run runner
        ```
- 2. **To run all tests in headed mode**
        ```bash
        npm run runnerH
        ```

Report
-
The automatically generated test report (using Mochawesome) summarizes all failed tests and includes videos and screenshots: <a href="https://lubka93.github.io/EEA---automation/" target="_blank">EEA Automation report</a>



## Relevant tools which I used for creating test enviroment:
Cypress tests were written using vanilla JavaScript and following tools:

- Cypress version: 13.13.0
- Node version: 20.9.0
- npm version: 10.8.2 
- vs studio code: 1.83.1
- browser: chrome 128
- OS - windows home 11



### Steps to Clone Repositary

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/Lubka93/EEA---automation.git

2. **Navigate to the Project Directory:**
    ```bash
    cd EEA---automation
    ```

3. **Install Dependencies:**
    ```bash
    npm install
    ```


