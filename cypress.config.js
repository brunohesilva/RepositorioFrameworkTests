const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://pokeapi.co/",
  },
  env: {
    apiUrl: "https://pokeapi.co"
  },
  experimentalStudio: true
});

