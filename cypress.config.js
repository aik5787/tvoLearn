const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://tvolearn.com/",
    defaultCommandTimeout: 15000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: process.env.CYPRESS_REPORT_DIR,
      overwrite: true,
      showPassed: true,
      html: false, 
      json: true,
      alwaysGenerateReport: true 
    },
    screenshotOnRunFailure: true,
    screenshotsFolder: process.env.CYPRESS_REPORT_DIR,
    setupNodeEvents(on, config) {
      require("@cypress/grep/src/plugin")(config);
      return config;
    },
  },
});