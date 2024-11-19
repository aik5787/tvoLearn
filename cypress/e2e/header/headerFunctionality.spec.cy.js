import homePageVerificationData from "../../fixtures/homePage/verificationData.json";
import headerVerificationData from "../../fixtures/header/verificationData.json";
import homePage from "../../pages/homePage.js";
import header from "../../pages/header.js";

describe("Header Functionality", () => {
  beforeEach(() => {
    cy.errorHandler();
    cy.visit("/");
  });

  it("TC-002: Should display the logo and redirect to the Home Page on click", () => {
    header.logoImage.should("be.visible").click();
    cy.title().should("eq", homePageVerificationData.englishTitle);
  });

  it("TC-003: Should toggle between French and English languages", () => {
    header.frenchLanguageLink.click();
    homePage.heroTitle.should("have.text", homePageVerificationData.frenchH1Text).should("be.visible");

    header.englishLanguageLink.click();
    homePage.heroTitle.should("have.text", homePageVerificationData.englishH1Text).should("be.visible");
  });

  it("TC-004: Should verify 'Learning Resources' button opens dropdown and links lead to correct pages", () => {
    headerVerificationData.learningResourcesLinks.forEach((link) => {
      header.learningResourcesButton.click();
      
      header.learningResourcesDropdown.should("be.visible");

      header.getLearningResourcesDropdownLink(link.label).click();

      cy.url({ timeout: 10000 }).should("eq", link.url);
      cy.title({ timeout: 10000 }).should("eq", link.title);
    });
  });
});
