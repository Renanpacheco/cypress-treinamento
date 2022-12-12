const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "cgsy24",
  e2e: {
    viewportHeight: 768,
    viewportWidth: 1366,
    baseUrl: 'https://buger-eats-qa.vercel.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
