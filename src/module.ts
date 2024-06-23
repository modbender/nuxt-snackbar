import { defu } from "defu";
import {
  defineNuxtModule,
  isNuxt2,
  addImportsDir,
  addPlugin,
  addComponent,
  createResolver,
} from "@nuxt/kit";

export default defineNuxtModule({
  meta: {
    name: "nuxt-snackbar",
    configKey: "snackbar",
    compatibility: {
      nuxt: ">=3.0.0",
    },
  },
  defaults: {
    top: false,
    bottom: true,
    left: false,
    right: false,
    groups: true,
    success: "#4caf50",
    error: "#ff5252",
    warning: "#fb8c00",
    info: "#2196f3",
    duration: 4000,
    limit: null,
    messageClass: "",
    messageActionClass: "",
    zIndex: 9999,
    dense: false,
    shadow: true,
    reverse: false,
    border: "",
    backgroundOpacity: 0.12,
    backgroundColor: "currentColor",
    baseBackgroundColor: "#ffffff",
    dismissOnActionClick: false,
    iconPresets: null
  },
  hooks: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    nuxt.options.css.push("vue3-snackbar/styles");

    nuxt.options.runtimeConfig.snackbar = defu(
      nuxt.options.runtimeConfig.snackbar,
      options
    );

    nuxt.options.runtimeConfig.public.snackbar = defu(
      nuxt.options.runtimeConfig.public.snackbar,
      options
    );

    addImportsDir(resolver.resolve("./runtime/composables"));

    nuxt.hook("modules:done", () => {
      if (isNuxt2()) {
        throw new Error("Vue3 Snackbar is not compatible with Nuxt2");
      } else {
        addPlugin(resolver.resolve("./runtime/plugin"));
        addComponent({
          name: "NuxtSnackbar",
          filePath: resolver.resolve("./runtime/components/NuxtSnackbar"),
        });
      }
    });
  },
});
