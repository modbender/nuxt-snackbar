---
title: Positioning
description: Anchor toasts to any corner and control how long they stay — globally in nuxt.config or per-message at call time.
sidebar:
  order: 2
---

Position is set by combining boolean edge options, and duration is set in milliseconds. You can configure both globally for every toast, or override them for a single message.

## Bottom-right (global)

Combine a vertical edge with a horizontal edge to anchor to a corner:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-snackbar'],
  snackbar: {
    bottom: true,
    right: true,
  },
})
```

## Top-center with RTL-aware edges

Use `start` / `end` instead of `left` / `right` when you want the position to flip automatically for right-to-left languages. To anchor at the top center, set only the vertical edge and leave the horizontal edges off:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-snackbar'],
  snackbar: {
    top: true,
  },
})
```

For a top inline-start (top-left in LTR, top-right in RTL) corner:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-snackbar'],
  snackbar: {
    top: true,
    start: true,
  },
})
```

:::caution
The edge options are booleans that combine — `bottom: true, right: true` is the bottom-right corner, `top: true, end: true` is the top inline-end corner, and so on. Set only the edges you want; leaving a horizontal edge off centers the toast horizontally.
:::

## Duration: global default

`duration` is the number of milliseconds a toast stays before it auto-dismisses. The module default is `4000` (4 seconds). Change it globally:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-snackbar'],
  snackbar: {
    duration: 6000, // every toast stays 6 seconds by default
  },
})
```

## Duration: per-message override

Pass `duration` to `add()` to override the global default for just that message:

```ts
const snackbar = useSnackbar()

// This one stays twice as long as the global default
snackbar.add({
  type: 'info',
  text: 'Read me carefully.',
  duration: 12000,
})
```

:::tip
Set `duration: 0` on a message so it never auto-dismisses. Pair it with `dismissible: true` so users can still close it manually.
:::

## Next steps

- [Custom Styling](/nuxt-snackbar/examples/custom-styling/) — colors, borders, density, and shadows.
- [Configuration](/nuxt-snackbar/configuration/) — the full list of global options.
