import { defineNuxtPlugin, useRuntimeConfig } from "#app";
import { SnackbarService } from "vue3-snackbar";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  nuxtApp.vueApp.use(SnackbarService);
  nuxtApp.vueApp.provide("snackbarOptions", config.public.snackbar);
});
