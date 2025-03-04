import { defineConfig } from "cypress";

// Default URLs
const defaultBaseUrl = 'https://automationexercise.com/';
const defaultApiUrl = 'https://automationexercise.com/api';
const defaultPw = 'D3v3nv1r0m3nt';

export default defineConfig({
  e2e: {
      // Uses default baseUrl when no config file is provided
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    apiUrl: defaultApiUrl,  // Default API URL
    password: defaultPw,
    baseUrl: defaultBaseUrl,
  },
});
