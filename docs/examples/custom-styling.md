---
title: Custom Styling
description: Border-style messages, custom type colors, density, shadows, extra classes, and per-message backgrounds — all without depending on your CSS framework.
sidebar:
  order: 3
---

Nuxt Snackbar ships its own styles and doesn't depend on your CSS framework, so these options work the same whether you use Tailwind, Vuetify, plain CSS, or nothing at all. You can still hook into your own classes when you want to.

## Border-style messages

Instead of a solid colored background, you can render messages with a tinted background and a colored accent border on one edge. Set `border` to the edge you want, then tune the background:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-snackbar'],
  snackbar: {
    border: 'left',            // accent border on the left edge
    baseBackgroundColor: '#ffffff',
    backgroundOpacity: 0.12,   // how strongly the type color tints the background
  },
})
```

- `border` accepts `'top' | 'bottom' | 'left' | 'right' | 'start' | 'end'` (use `start` / `end` for RTL-aware edges).
- `backgroundColor` sets the background color for border-style messages (defaults to `currentColor`, which follows the type color).
- `baseBackgroundColor` is the base surface the tint is layered over (defaults to `#ffffff`).
- `backgroundOpacity` controls how strong that tint is.

## Custom type colors

Override the per-type colors with any CSS color (hex shown here):

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-snackbar'],
  snackbar: {
    success: '#16a34a',
    error: '#dc2626',
    warning: '#d97706',
    info: '#2563eb',
  },
})
```

## Density and shadow

Make messages more compact with `dense`, and control the drop shadow with `shadow`:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-snackbar'],
  snackbar: {
    dense: true,    // reduced vertical padding
    shadow: 'lg',   // boolean, or one of 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  },
})
```

## Extra classes

Attach your own CSS classes to every message or to the action area — useful for hooking into a design system or framework utilities:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-snackbar'],
  snackbar: {
    messageClass: 'my-toast rounded-xl font-medium',
    messageActionClass: 'my-toast-action',
  },
})
```

## Per-message background

Override the background color for a single message with the `background` field on `add()`:

```ts
const snackbar = useSnackbar()

snackbar.add({
  text: 'Custom one-off styling.',
  background: '#111827',
})
```

:::tip
Global config sets the baseline for every message; any field you also pass to `add()` wins for that single message. So you can set a house style in `nuxt.config.ts` and still special-case the occasional toast.
:::

## Next steps

- [Configuration](/nuxt-snackbar/configuration/) — the complete option reference.
- [Usage](/nuxt-snackbar/usage/) — all per-message fields, including `messageClass` companions like `action` and `dismissible`.
