const { defineConfig } = require("cypress");

function setupNodeEvents(on, config) {
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: "https://www.demoblaze.com/",
    specPattern: "cypress/e2e/step_definitions/*",
    defaultCommandTimeout: 10000,
    retries: 1,
    testIsolation: false,
  },
});