import 'cypress-iframe';

Cypress.Commands.add("errorHandler", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });

  Cypress.Commands.add('verifyScrollAndVisibility', (link) => {
    cy.window().then((win) => {
      const scrollYBefore = win.scrollY;
      cy.get(`a[href="${link.href}"]`).click();
      cy.wait(500); 
      cy.window().then((win) => {
        const scrollYAfter = win.scrollY;
        expect(scrollYAfter).to.be.greaterThan(scrollYBefore);
      });
    });
  });