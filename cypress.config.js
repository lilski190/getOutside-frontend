module.exports = require('cypress').defineConfig({
  e2e: {
    video: false,
    retries: 1,
  },
  env: {
    CYPRESS_baseUrl: 'http://localhost:3000'
  }
});

// export default defineConfig({
//   video: false,
//   retries: 1,
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
