import {
  defineNuxtModule,
  addImports,
  addPlugin,
  addComponent,
  createResolver,
} from '@nuxt/kit'
import { defu } from 'defu'

import { name, version } from '../package.json'

import type { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'snackbar',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: {
    top: false,
    bottom: true,
    left: false,
    right: false,
    groups: true,
    success: '#4caf50',
    error: '#ff5252',
    warning: '#fb8c00',
    info: '#2196f3',
    duration: 4000,
    limit: 0,
    messageClass: '',
    messageActionClass: '',
    zIndex: 9999,
    dense: false,
    shadow: true,
    reverse: false,
    border: '',
    backgroundOpacity: 0.12,
    backgroundColor: 'currentColor',
    baseBackgroundColor: '#ffffff',
    dismissOnActionClick: false,
    iconPresets: {},
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.css = [...(nuxt.options.css || []), 'vue3-snackbar/styles']

    nuxt.options.runtimeConfig.snackbar = defu(
      nuxt.options.runtimeConfig.snackbar,
      options,
    )

    nuxt.options.runtimeConfig.public.snackbar = defu(
      nuxt.options.runtimeConfig.public.snackbar,
      options,
    )

    // nuxt.options.build.transpile = [
    //   ...(nuxt.options.build.transpile || []),
    //   'vue3-snackbar',
    // ]

    nuxt.hook('modules:done', () => {
      addImports({
        name: 'useSnackbar',
        from: 'vue3-snackbar',
      })

      addComponent({
        name: 'NuxtSnackbar',
        filePath: resolve('./runtime/components/NuxtSnackbar'),
      })

      addPlugin({
        src: resolve('runtime/plugin'),
      })
    })
  },
})
