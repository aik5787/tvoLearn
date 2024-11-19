import grade1VerificationData from "../../../../fixtures/learningResources/grade1/verificationData.json";

describe("Grade 1 functionality", () => {
  beforeEach(() => {
    cy.visit("/pages/grade-1");
  });

  it("TC-005: Should display frames and navigate correctly when clicking on each", () => {
    grade1VerificationData.subjects.forEach((subjectData) => {
      cy.contains(subjectData.subject).should("be.visible").click();

      cy.url().should("eq", subjectData.url);
      cy.title().should("eq", subjectData.title);
      
      cy.go("back");
    });
  });
});
