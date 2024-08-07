import { defineNuxtPlugin, useRuntimeConfig } from "#app";

import { SnackbarService } from "vue3-snackbar";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(SnackbarService);

  return {
    provide: {
      snackbarOptions: useRuntimeConfig().public.snackbar,
    },
  };
});
