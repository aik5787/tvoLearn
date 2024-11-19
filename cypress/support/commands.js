import 'cypress-iframe';

Cypress.Commands.add("errorHandler", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
