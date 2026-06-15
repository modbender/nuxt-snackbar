---
title: Basic
description: A minimal end-to-end example — register the module, mount the component, and fire a success toast from a button.
sidebar:
  order: 1
---

The smallest complete setup: register the module, mount `<NuxtSnackbar />` once, and trigger a toast from a button.

## 1. Register the module

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-snackbar'],
})
```

No options are required — the built-in defaults give you a bottom-anchored toast that auto-dismisses after 4 seconds.

## 2. Mount the snackbar host

```vue
<!-- app.vue -->
<template>
  <div>
    <NuxtPage />
    <NuxtSnackbar />
  </div>
</template>
```

## 3. Fire a toast

```vue
<!-- pages/index.vue -->
<script setup lang="ts">
const snackbar = useSnackbar()

function save() {
  snackbar.add({
    type: 'success',
    text: 'Saved successfully!',
  })
}
</script>

<template>
  <button @click="save">Save</button>
</template>
```

Click the button and a green success toast slides in from the bottom, then disappears on its own a few seconds later.

:::tip
`useSnackbar()` and `<NuxtSnackbar />` are both auto-imported — you never have to write an import for them.
:::

## Next steps

- [Positioning](/nuxt-snackbar/examples/positioning/) — move toasts to a different corner and tune their duration.
- [Custom Styling](/nuxt-snackbar/examples/custom-styling/) — border-style messages, custom colors, and compact toasts.
