import homePageVerificationData from "../../fixtures/homePage/verificationData.json";
import homePage from "../../pages/homePage.js";

describe("Home Page Load", () => {
  beforeEach(() => {
    cy.errorHandler();
    cy.visit("/");
  });

  it("TC-001: Should load the Home Page with correct title and hero text",{ tags: '@smoke' }, () => {
    cy.title().should("eq", homePageVerificationData.englishTitle);
    homePage.heroTitle.should("have.text", homePageVerificationData.englishH1Text).should("be.visible");
  });
});
