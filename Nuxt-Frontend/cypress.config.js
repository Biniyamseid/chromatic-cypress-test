
import { defineConfig } from "cypress";
// cypress.config.js
// const { defineConfig } = require("cypress");
const { installPlugin } = require("@chromatic-com/cypress");


export default defineConfig({
  projectId: 'cb7owt',
  experimentalStudio: true ,
  e2e: {
    setupNodeEvents(on, config) {
      installPlugin(on, config);
      // implement node event listeners here
    },
    experimentalStudio: true ,

    
  },
  experimentalStudio: true ,
});
