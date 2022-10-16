const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  env: {
    viewportWidthBreakpoint: 768,
  },
  projectId: '4ecv8q',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require('cypress-grep/src/plugin')(config)
      return config
    },
    baseUrl: 'https://notes-serverless-app.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    experimentalSessionAndOrigin: true,
  },
})
