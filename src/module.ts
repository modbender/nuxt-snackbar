import {
  defineNuxtModule,
  addComponent,
  addImports,
  addPlugin,
  createResolver,
} from "@nuxt/kit";

// Module options TypeScript inteface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-snackbar",
    configKey: "snackbarApi",
    compatibility: {
      // Semver version of supported nuxt versions
      nuxt: "^3.0.0",
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    nuxt.options.css.push("vue3-snackbar/styles");

    addPlugin(resolver.resolve("./runtime/plugin"));

    addComponent({
      name: "SnackbarProvider",
      export: "Vue3Snackbar",
      filePath: "vue3-snackbar",
    });

    addImports({
      name: "useSnackbar",
      as: "useSnackbar",
      from: "vue3-snackbar",
    });
  },
});
