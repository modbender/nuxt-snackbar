---
title: Installation
description: Install Nuxt Snackbar, register it in nuxt.config, and mount the snackbar component so notifications can appear.
sidebar:
  order: 2
---

Getting Nuxt Snackbar running takes two steps: add the module, then mount the `<NuxtSnackbar />` component once in your app.

## 1. Add the module

The quickest way is the Nuxt CLI, which installs the package and adds it to your `nuxt.config` for you:

```bash
npx nuxi@latest module add nuxt-snackbar
```

### Manual install

If you'd rather install it by hand, add the package with your preferred package manager:

```bash
# pnpm
pnpm add nuxt-snackbar
```

```bash
# npm
npm install nuxt-snackbar
```

```bash
# yarn
yarn add nuxt-snackbar
```

Then add `'nuxt-snackbar'` to the `modules` array in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-snackbar'],
})
```

## 2. Mount the snackbar component

The module registers a `<NuxtSnackbar />` component for you. It needs to be present in your app tree exactly once — it's the host that actually renders your messages on screen.

The simplest place is `app.vue`:

```vue
<template>
  <div>
    <NuxtPage />
    <NuxtSnackbar />
  </div>
</template>
```

If your app renders pages through layouts, you can put it in your default layout instead. Use **one** of these, not both:

```vue
<!-- layouts/default.vue -->
<template>
  <div>
    <slot />
    <NuxtSnackbar />
  </div>
</template>
```

:::caution
Mount `<NuxtSnackbar />` **once**. If you add it to both `app.vue` and a layout (or to multiple layouts that can be active at the same time), you may see duplicate toasts. Pick the single spot in your tree that's always rendered.
:::

## No CSS import needed

You don't have to import any stylesheet. The module automatically injects `vue3-snackbar`'s styles, so notifications are styled correctly the moment you mount the component — regardless of which CSS framework (or none) your app uses.

## Next steps

- [Usage](/nuxt-snackbar/usage/) — fire your first toast with `useSnackbar()`.
- [Configuration](/nuxt-snackbar/configuration/) — change the global defaults (position, duration, colors, and more).
