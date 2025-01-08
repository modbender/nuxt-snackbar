import { SnackbarService } from 'vue3-snackbar'

import { defineNuxtPlugin, useRuntimeConfig } from '#app'

export default defineNuxtPlugin((_nuxtApp) => {
  const snackbarOptions = useRuntimeConfig().public.snackbar

  _nuxtApp.vueApp.use(SnackbarService)

  return {
    provide: {
      snackbarOptions,
    },
  }
})
