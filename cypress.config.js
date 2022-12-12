const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 't1y2un',
  e2e: {
    viewportHeight: 768,
    viewportWidth: 1366,
    baseUrl: 'https://buger-eats-qa.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
