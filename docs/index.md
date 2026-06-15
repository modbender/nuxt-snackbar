---
title: Nuxt Snackbar
description: A Nuxt module that drops a ready-to-use snackbar/toast system into your Nuxt 3 or Nuxt 4 app, with zero setup and no CSS-framework lock-in.
sidebar:
  order: 1
---

Adding toast notifications to a Nuxt app usually means installing a library, registering a plugin, mounting a component, and remembering to import a stylesheet. Nuxt Snackbar does all of that for you.

It's a thin, well-behaved wrapper around the excellent [vue3-snackbar](https://github.com/evo-mark/vue3-snackbar) library that makes a snackbar system work out of the box in Nuxt — independent of whatever CSS framework (or none) you happen to be using. Install it, drop one component into your app, and call `useSnackbar()` from anywhere.

## Key features

- **Easy integration** — install the module, add `<NuxtSnackbar />` once, and you're done. No plugin wiring, no manual setup.
- **Zero-config defaults** — sensible defaults are baked in (bottom-anchored, 4-second auto-dismiss, grouped messages, drop shadow), so notifications look right immediately.
- **CSS-framework-agnostic** — works the same whether you use Tailwind, UnoCSS, Vuetify, plain CSS, or nothing at all. It ships its own styles and doesn't depend on yours.
- **SSR-safe** — designed for Nuxt's server-side rendering, so there's no flash of unstyled content and no hydration surprises.
- **Nuxt 3 + Nuxt 4** — a single install supports both major versions.

## A 30-second taste

Install the module:

```bash
npx nuxi@latest module add nuxt-snackbar
```

Mount the component once in your app (for example in `app.vue`):

```vue
<template>
  <div>
    <NuxtPage />
    <NuxtSnackbar />
  </div>
</template>
```

Then fire a toast from anywhere:

```vue
<script setup lang="ts">
const snackbar = useSnackbar()

function notify() {
  snackbar.add({
    type: 'success',
    text: 'Saved successfully!',
  })
}
</script>

<template>
  <button @click="notify">Save</button>
</template>
```

That's the whole thing. `useSnackbar()` and `<NuxtSnackbar />` are auto-imported — no manual imports needed.

## Compatibility

| | Supported |
| --- | --- |
| Nuxt Snackbar | 1.x |
| Nuxt | 3.x and 4.x |
| Vue | 3 |

:::tip
Nuxt Snackbar 1.x supports both Nuxt 3 and Nuxt 4 from the same package — there's nothing extra to configure when you upgrade Nuxt.
:::

## Where to next

- [Installation](/nuxt-snackbar/installation/) — install the module and mount the component.
- [Usage](/nuxt-snackbar/usage/) — fire toasts with `useSnackbar()`, message types, and per-message options.
- [Configuration](/nuxt-snackbar/configuration/) — set global defaults via the `snackbar` key in `nuxt.config.ts`.
