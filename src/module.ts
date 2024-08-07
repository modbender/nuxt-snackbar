import { defu } from "defu";
import {
  defineNuxtModule,
  addImports,
  addPlugin,
  addComponent,
  createResolver,
} from "@nuxt/kit";

import type { ModuleOptions } from "./types";

import { name, version } from "../package.json";

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
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
    limit: 0,
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
    iconPresets: {},
  },
  hooks: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    nuxt.options.css.push("vue3-snackbar/styles");

    nuxt.options.runtimeConfig.snackbar = defu(
      nuxt.options.runtimeConfig.snackbar as ModuleOptions,
      options
    );

    nuxt.options.runtimeConfig.public.snackbar = defu(
      nuxt.options.runtimeConfig.public.snackbar as ModuleOptions,
      options
    );

    addImports({
      name: "useSnackbar",
      from: "vue3-snackbar",
    });

    addPlugin(resolver.resolve("./runtime/plugin"));

    addComponent({
      name: "NuxtSnackbar",
      filePath: resolver.resolve("./runtime/components/NuxtSnackbar"),
    });
  },
});
