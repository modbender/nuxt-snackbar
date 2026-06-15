import NuxtSnackbar from '../../../src/module'

export default defineNuxtConfig({
  modules: [
    NuxtSnackbar,
  ],
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000,
  },
})
