import { defineNuxtPlugin } from "#app";

const { SnackbarService } = require("vue3-snackbar");

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(SnackbarService);
});
