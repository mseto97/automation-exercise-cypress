import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
      // Test front-end URL
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    apiUrl: "https://test.automationexercise.com/api",  // Test API URL
    password: "T35t3nv1r0m3nt",
    baseUrl: "https://test.automationexercise.com/",
  },
});
