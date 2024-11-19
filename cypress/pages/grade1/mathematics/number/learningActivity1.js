class learningActivity1Page {
  get iframe() {return cy.frameLoaded("#la_iframe")}
  get video() {return cy.iframe("#la_iframe").find('[data-video-id="ref:136397DV"]')}
}
export default new learningActivity1Page();
