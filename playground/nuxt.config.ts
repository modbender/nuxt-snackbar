export default defineNuxtConfig({
  // Prop details at https://github.com/evo-mark/vue3-snackbar#props
  modules: ['../src/module'],

  devtools: { enabled: false },

  compatibilityDate: '2025-01-01',
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000,
  },
})
