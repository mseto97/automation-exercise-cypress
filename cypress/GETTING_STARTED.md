
## Purpose
This documentation provides instructions for getting the latest code from the repository, setting up the testing environment locally, and running the Cypress tests for the project. The available tests cover the following:
https://automationexercise.com/test_cases: TEST CASE 14 and 15
https://automationexercise.com/api_list: TEST CASE 7, 8, 9 and 10

The tests are written in TypeScript and follow the Page Object Model pattern.
Test/spec files are in the e2e folder. 


## Getting the Latest Code
To get the latest code from the GitHub repository, clone the repository to your local machine using the following steps:

Open your terminal/command prompt and run the following command to clone the repository:

  git clone https://github.com/mseto97/automation-exercise-cypress.git


Once the repo has been cloned, navigate to the project folder
  cd automation-exercise-cypress




## Install the Dependencies
Once you've cloned the repo, you need to install the required dependencies to run the tests. Run the following command in the terminal:

  npm install

This will install all necessary packages listed in the `package.json` file, including Cypress and other testing dependencies.





## Running the Tests
Two environments have been configured for these tests:

- **'dev'** environment:  
  `baseUrl`: https://automationexercise.com/  
  User password: `D3v3nv1r0m3nt`

- **'test'** environment:  
  `baseUrl`: https://test.automationexercise.com/ (non-working instance)  
  User password: `T35t3nv1r0m3nt`

Depending on the environment you choose, Cypress will navigate to the relevant URLs and use the appropriate credentials.

The environment configuration files are located in the `cypress/config/` folder.


## Running the Tests with Cypress Test Runner (UI)

If you prefer to run tests interactively using the Cypress Test Runner (UI), run the following command:

### To run tests in the 'dev' environment:
  npx cypress open --config-file 'cypress/config/dev.config.ts'

### To run tests in the 'test' environment:
  npx cypress open --config-file 'cypress/config/test.config.ts'

### To run tests with the default environment (dev):
  npx cypress open
  

The Cypress Test Runner will open, and you can select which tests to run interactively. The detailed results and logs will be displayed in the UI.



## Running the Tests Without the Interactive UI (Headless Mode)

If you want to run tests without using the Cypress Test Runner (UI), you can run them in **headless mode**.

### To run a specific test file in headless mode:

  npx cypress run --spec "[path to the spec file]" --config-file 'cypress/config/[test or dev].config.ts'

  or to run with default env settings (dev)

  npx cypress run --spec "[path to the spec file]" 

### Example:

  npx cypress run --spec "cypress/e2e/api/verifyLogin-endpoint.cy.ts" --config-file 'cypress/config/dev.config.ts'

  or
  
  npx cypress run --spec "cypress/e2e/api/verifyLogin-endpoint.cy.ts"

The test results will be displayed directly in the terminal.



