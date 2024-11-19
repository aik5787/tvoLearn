class Header {
  get learningResourcesButton() {return cy.get('[aria-controls="SiteNavLabel-learning-resources-k-12"]')}
  get learningResourcesDropdown() {return cy.get('#SiteNavLabel-learning-resources-k-12')}
  get logoImage() {return cy.get('[data-src="//tvolearn.com/cdn/shop/t/124/assets/logo-tvolearn.svg?v=73227335510829270531730294904"]')}
  get frenchLanguageLink() {return cy.get('li [aria-label="Changer de langue en Français"]')}
  get englishLanguageLink() {return cy.get ('li [aria-label="Switch language to English"]')}

  getLearningResourcesDropdownLink(label) {return cy.contains('a.site-nav__link', label)}

  }
  export default new Header();