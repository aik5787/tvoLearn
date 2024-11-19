import numVerificationData from "../../../../../../fixtures/learningResources/grade1/mathematics/number/verificationData.json";
import learningActivity1Page from "../../../../../../pages/grade1/mathematics/number/learningActivity1.js";

describe("Learning 1 functionality", () => {
  beforeEach(() => {
    cy.errorHandler()
    cy.visit("/pages/grade-1-mathematics-number-learning-activity-1");
  });

  it("TC-010: Should load Learning Activity 1 Page with correct URL and Title", () => {
    cy.url().should("eq", numVerificationData.learningActivity1Url);
    cy.title().should("eq", numVerificationData.learningActivity1Title);
  });

  it("TC-011: Should have a video player", () => {
    learningActivity1Page.iframe.should("exist");
    learningActivity1Page.video.should("be.visible");
  });
});
