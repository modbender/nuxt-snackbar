# Nuxt Snackbar

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Snackbar/Toast Implementation independent of CSS framework especially for Nuxt 3

Nuxt Snackbar provides a wrapper for [vue3-snackbar](https://github.com/craigrileyuk/vue3-snackbar) to be used with Nuxt.js

<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features
- Easy to integrate
- Instantly usable Snackbar, no config required
- Options to fully customize snackbar (See all [options](https://github.com/craigrileyuk/vue3-snackbar#props))

## Quick Setup

1. Add `nuxt-snackbar` dependency to your project

    ```bash
    # Using pnpm
    npx nuxi@latest module add snackbar

    # Using yarn
    npx nuxi@latest module add snackbar

    # Using npm
    npx nuxi@latest module add snackbar
    ```

2. Add `nuxt-snackbar` to the `modules` section of `nuxt.config.ts`

    ```js
    export default defineNuxtConfig({
      modules: ['nuxt-snackbar'],
      snackbar: {
        bottom: true,
        right: true,
        duration: 5000
      }
    })
    ```

3. Add the Snackbar Component to `app.vue`

    ```xml
    <template>
      <div>
        <main>
          Main Content
        </main>
        <NuxtSnackbar />
      </div>
    </template>
    ```

   If you are using layouts and pages in your application, your `app.vue` should look something like this.

   ```xml
    <template>
      <NuxtLayout>
        <NuxtPage />
        <NuxtSnackbar />
      </NuxtLayout>
    </template>
   ```
   
   If none of the above works, you can try adding it to `layouts/default.vue` instead
   
    ```xml
    <template>
      <div>
        <slot />
        <NuxtSnackbar />
      </div>
    </template>
    ```

5. Call `useSnackbar()` to use snackbar methods and features.

    Composition API
    ```js
    const snackbar = useSnackbar();

    snackbar.add({
        type: 'success',
        text: 'This is a snackbar message'
    })
    ```

    Options API
    ```js
    export default {
        methods: {
            successMessage() {
                this.$snackbar.add({
                    type: 'success',
                    text: 'This is a snackbar message'
                })
            }
        }
    }
    ```

That's it! You can now use Nuxt Snackbar in your Nuxt app ✨

## Development

```bash
# Install dependencies
yarn install

# Generate type stubs
yarn dev:prepare

# Develop with the playground
yarn dev

# Build the playground
yarn dev:build

# Run ESLint
yarn lint

# Run Vitest
yarn test
yarn test:watch

# Release new version
yarn release
```

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-snackbar/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-snackbar
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-snackbar.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-snackbar
[license-src]: https://img.shields.io/npm/l/nuxt-snackbar.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-snackbar
[nuxt-src]: https://img.shields.io/badge/Nuxt-18181B?logo=nuxt.js
[nuxt-href]: https://nuxt.com
