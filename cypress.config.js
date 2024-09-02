const { defineConfig } = require('cypress');

module.exports = defineConfig({
  retries: {            
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // For Mochawesome reporter
      require('cypress-mochawesome-reporter/plugin')(on);
      // Include custom commands
      require('./cypress/support/commands');
    },
    env: {
      baseURL: 'https://demoqa.com/',
    },
  },
  pageLoadTimeout: 15000,    
  viewportHeight: 1080,    
  viewportWidth: 1920,
  defaultCommandTimeout: 10000,
  reporter: 'cypress-mochawesome-reporter', 
  reporterOptions: { 
    charts: true,
    reportPageTitle: 'Option 1 report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  video: true, 
  screenshotOnRunFailure: true, 
});

