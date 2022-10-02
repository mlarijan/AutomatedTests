const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'sbdugh',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
