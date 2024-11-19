class MathematicsPage {
  get helpfulTipsLink() {return cy.get('[aria-label="Read more about the learning resources available on this page"]')}
  get videoLearningResource() {return cy.get('li.Video a')}
  get gameLearningResource() {return cy.get('li.Game a')}
  }
  export default new MathematicsPage();