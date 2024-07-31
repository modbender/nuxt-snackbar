export default defineNuxtConfig({
  // Prop details at https://github.com/craigrileyuk/vue3-snackbar#props
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000,
  },

  // Change this to whatever the node_modules path ends up being
  modules: ["./src/module"],

  compatibilityDate: "2024-07-26",
});
