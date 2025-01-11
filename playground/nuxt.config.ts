export default defineNuxtConfig({
  // Prop details at https://github.com/craigrileyuk/vue3-snackbar#props

  // Change this to whatever the node_modules path ends up being
  modules: ['../src/module'],

  devtools: { enabled: false },

  compatibilityDate: '2024-07-26',
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000,
  },
})
