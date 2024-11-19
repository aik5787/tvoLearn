import mathematicsPage from "../../../../../pages/grade1/mathematics/mathematicsPage";
import mathematicsVerificationData from "../../../../../fixtures/learningResources/grade1/mathematics/verificationData.json";

describe("Grade 1 Mathematics functionality", () => {
  beforeEach(() => {
    cy.errorHandler()
    cy.visit("/pages/grade-1-mathematics");
  });

  it("TC-006: Should display 'Helpful Tips' link and navigate correctly on click", () => {
    mathematicsPage.helpfulTipsLink.should("be.visible").click();

    cy.url().should("eq", mathematicsVerificationData.helpfulTipsUrl);
    cy.title().should("eq", mathematicsVerificationData.helpfulTipsTitle);
  });

  it("TC-007: Should verify Mathematics sections and its activities", () => {
    mathematicsVerificationData.sections.forEach((section) => {
      cy.contains("button", section.name).should("be.visible").click();

      section.activities.forEach((activity) => {
        cy.contains(activity).should("be.visible");
      });
    });
  });

  it("TC-00: Should verify that video Resources For Learning have correct links", () => {
    mathematicsPage.videoLearningResource.should("have.length", mathematicsVerificationData.videoResourcesForLearningLinks.length);
    
    mathematicsPage.videoLearningResource.each((element, index) => {
      const expectedLink = mathematicsVerificationData.videoResourcesForLearningLinks[index].href;
      cy.wrap(element).should("have.attr", "href", expectedLink);
    });
  });

  it("TC-009: Should verify that game Resources For Learning have correct links", () => {
    mathematicsPage.gameLearningResource.should("have.length", mathematicsVerificationData.gameResourcesForLearningLinks.length);
    
    mathematicsPage.gameLearningResource.each((element, index) => {
      const expectedLink = mathematicsVerificationData.gameResourcesForLearningLinks[index].href;
      cy.wrap(element).should("have.attr", "href", expectedLink);
    });
  });
});
