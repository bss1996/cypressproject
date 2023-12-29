const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    browser: [
      {
        name: 'chrome',
        family: 'chromium',
        channel: 'stable',
        displayName: 'Chrome',
        version: '120.0.6099.129',
        path: '/home/bhawani/Google/chrome.exe', // Use forward slashes here
        minSupportedVersion: 64,
        majorVersion: '120',
      },
      
    ],
    
    defaultCommandTimeout: 10000,   
    video: true,

  }
});
