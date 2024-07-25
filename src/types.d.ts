import { propsModel as ModuleOptions } from "vue3-snackbar/props";

export { ModuleOptions };

declare module "nuxt-snackbar" {
  interface NuxtConfig {
    snackbar?: ModuleOptions;
  }

  interface NuxtOptions {
    snackbar?: ModuleOptions;
  }
}
