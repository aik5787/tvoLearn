# Automated Tests for TvoLearn

## Overview

This project contains automated tests for **TvoLearn**, built using **JavaScript/Cypress**. It includes tests for verifying the functionality of the website's **homepage**, **header**, and **learning resources** (Grade 1, Mathematics, and Learning Activity 1). The tests are designed to run both locally and in **CI/CD pipelines**. Locally, the tests run in parallel on **Chrome** and **Firefox**, and parallel execution on **Chrome** in **CI/CD pipelines**. 
Parallel testing with the **Cypress Dashboard** would be implemented differently. Additionally, **tagging** is implemented to filter tests, making it easier to run specific test sets (e.g., smoke tests or tests for particular sections) using tags such as `@smoke`. 

Report generation is done using **Mocha-style reports**, and the **Page Object Model (POM)** design pattern is used for modular and maintainable test organization.

## Folder Structure

 e2e
│   ├── header
│   │   └── headerFunctionality.spec.cy.js
│   ├── homePage
│   │   └── homePageLoad.spec.cy.js
│   └── learningResources
│       └── grades
│           └── grade1
│               ├── Mathematics
│               │   ├── mathematics.spec.cy.js
│               │   └── number
│               │       └── learningActivity1.spec.cy.js
│               └── grade1.spec.cy.js
├── fixtures
│   ├── header
│   │   └── verificationData.json
│   ├── homePage
│   │   └── verificationData.json
│   └── learningResources
│       └── grade1
│           ├── mathematics
│           │   ├── number
│           │   │   └── verificationData.json
│           │   └── verificationData.json
│           └── verificationData.json
├── pages
│   ├── grade1
│   │   └── mathematics
│   │       ├── mathematicsPage.js
│   │       └── number
│   │           └── learningActivity1.js
│   ├── header.js
│   └── homePage.js
└── support
    ├── commands.js
    └── e2e.js


## Test Approach

The tests for this project focus on validating the functionality of specific pages within the application based on the defined scenarios, such as the **Home Page**, **Header**, **Grade 1**, **Mathematics section**, and **Learning Activity** resources. **Cypress** is used for end-to-end testing.

### Key Features of the Approach:

* **Parallel Testing**: Tests run concurrently in both **Chrome** and **Firefox** to ensure cross-browser compatibility.
* **Tagging**: Tests are tagged for easier filtering. For example, `@smoke` is used to identify smoke tests that are crucial for verifying basic functionality.
* **Page Object Model**: The **Page Object Model (POM)** design pattern is used to make tests modular, reusable, and easier to maintain.
* **Testing in CI/CD**: Tests can be run within **CI/CD pipelines** for continuous integration.
* **Data-Driven Testing**: **JSON fixtures** store verification data, ensuring consistency and ease of updating across tests.

## Test Cases Covered

### Home Page Tests:
* **TC-001**: Verifies that the **Home Page** loads with the correct title and hero text in **English**. *(Marked as @smoke)*

### Header Functionality Tests:
* **TC-002**: Verifies that clicking the **logo** redirects to the **Home Page**.
* **TC-003**: Verifies the **language toggle** functionality between **French** and **English**.
* **TC-004**: Verifies the '**Learning Resources**' button functionality, ensuring the dropdown opens and links lead to the correct pages.

### Grade 1 Functionality:
* **TC-005**: Verifies that the **Grade 1** page displays subjects and navigates correctly when clicking each subject.

### Grade 1 Mathematics Functionality:
* **TC-006**: Verifies the "**Helpful Tips**" link functionality, ensuring it redirects correctly.
* **TC-007**: Verifies that the **Mathematics sections** and their associated activities are displayed and clickable.
* **TC-008**: Verifies that **video resources** for learning have the correct links.
* **TC-009**: Verifies that **game resources** for learning have the correct links.

### Learning Activity Functionality:
* **TC-010**: Verifies that the **Learning Activity 1** page loads with the correct URL and title.
* **TC-011**: Verifies the presence of a **video player** on the **Learning Activity 1** page.

## Test Assumptions:
* **Data Consistency**: The verification data used in the tests (stored in **JSON** files) is assumed to be up-to-date and reflects the expected values in the application.
* **External Resources**: External resources (e.g., **video** and **game links**) are assumed to be available and functional.
* **Browser Compatibility**: Tests are designed to work on **Chrome** and **Firefox**, with any browser-specific issues captured and addressed.

## Installation

### Prerequisites:
Ensure you have the following installed:
* **Node.js** (version 20 or higher)
* **NPM** (for package management)

### Steps:
1. Clone the repository: 
    ```
    git clone https://github.com/aik5787/tvoLearn.git
    ```
2. Change directory to the project folder:
    ```
    cd tvolearn
    ```
3. Install dependencies:
    ```
    npm install
    ```

## Test Execution

### Local Testing:
Reports are generated in **Mocha-style** using **mochawesome**, and are stored separately for **Chrome** and **Firefox**.

* Run tests in parallel on **Chrome**:  
    ```
    npm run test:parallel:chrome
    ```
* Run tests in parallel on **Firefox**:  
    ```
    npm run test:parallel:firefox
    ```
* Run **smoke tests** on **Chrome**:  
    ```
    npm run test:smoke:chrome
    ```

Execution results are stored in the following folders:
* **mochawesome-report-chrome/** (HTML and JSON formats for Chrome)
* **mochawesome-report-firefox/** (HTML and JSON formats for Firefox)
These report folders are typically **not uploaded to GitHub** as they can contain large files and are generated locally. They are provided here for demonstration purposes so that you can view the test results locally.

### CI/CD:
In **CI/CD pipelines**, you can check test activities and results using the respective reporting tools.

## Error Handling:
Error handling is implemented to catch and suppress uncaught exceptions during test execution to ensure that the tests do not fail abruptly due to unhandled exceptions. This prevents Cypress from automatically failing tests when an uncaught exception occurs, allowing tests to continue running for further analysis or debugging.
