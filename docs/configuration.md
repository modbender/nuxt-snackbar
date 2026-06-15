---
title: Configuration
description: Set global snackbar defaults via the snackbar key in nuxt.config.ts — position, duration, colors, shadows, border styling, and more.
sidebar:
  order: 4
---

You configure global defaults under the `snackbar` key in `nuxt.config.ts`. These become the baseline for every message, and the `<NuxtSnackbar />` host applies them automatically.

```ts
export default defineNuxtConfig({
  modules: ['nuxt-snackbar'],
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000,
  },
})
```

:::tip
Every option below can also be overridden for a single message by passing it to `add()`. The `snackbar` config is just the default — see [Usage](/nuxt-snackbar/usage/) for per-message overrides.
:::

## Options reference

The `snackbar` key accepts the underlying `vue3-snackbar` props:

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `top` | `boolean` | `false` | Render at the top of the screen. |
| `bottom` | `boolean` | `true` | Render at the bottom of the screen. |
| `left` | `boolean` | `false` | Render at the left. |
| `right` | `boolean` | `false` | Render at the right. |
| `start` | `boolean` | `false` | Render at the inline-start (RTL-aware left). |
| `end` | `boolean` | `false` | Render at the inline-end (RTL-aware right). |
| `success` | `string` | `#4caf50` | Base color for success messages. |
| `error` | `string` | `#ff5252` | Base color for error messages. |
| `warning` | `string` | `#fb8c00` | Base color for warning messages. |
| `info` | `string` | `#2196f3` | Base color for info messages. |
| `messageTextColor` | `string` | _(theme)_ | Text color for the default (untyped) message. |
| `messageIconColor` | `string` | _(theme)_ | Icon color for the default message. |
| `duration` | `number` | `4000` | Default milliseconds a message stays before auto-dismiss. |
| `groups` | `boolean` | `true` | Group messages that share the same group key. |
| `limit` | `number` | `0` | Maximum messages shown at once (`0` = unlimited). |
| `reverse` | `boolean` | `false` | Reverse the display order of messages. |
| `dense` | `boolean` | `false` | Reduce vertical padding for a more compact message. |
| `shadow` | `boolean \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `true` | Drop shadow on messages. |
| `zIndex` | `number` | `9999` | z-index of the snackbar container. |
| `messageClass` | `string` | `''` | Extra CSS class added to every message. |
| `messageActionClass` | `string` | `''` | Extra CSS class for the action area. |
| `dismissOnActionClick` | `boolean` | `false` | Auto-dismiss a message when its action is clicked. |
| `border` | `'top' \| 'bottom' \| 'left' \| 'right' \| 'start' \| 'end'` | `''` | Use border-style messages with the colored accent on the given edge. |
| `backgroundColor` | `string` | `currentColor` | Background color for border-style messages. |
| `baseBackgroundColor` | `string` | `#ffffff` | Base background for border-style messages. |
| `backgroundOpacity` | `number \| string` | `0.12` | Background opacity for border-style messages. |
| `contentWidth` | `string` | _(auto)_ | CSS width for the snackbar content. |
| `attach` | `string \| HTMLElement` | _(body)_ | Element to attach the snackbar container to. |
| `iconPresets` | `object` | `{}` | Per-type icon overrides (passed as vue3-icon props). |

## What the module sets by default

Out of the box, the module applies a small set of opinionated defaults so notifications look right with no configuration:

- `bottom: true`
- `duration: 4000`
- `groups: true`
- `shadow: true`
- `zIndex: 9999`
- The four type colors: `success` `#4caf50`, `error` `#ff5252`, `warning` `#fb8c00`, `info` `#2196f3`.

Everything else falls back to `vue3-snackbar`'s own defaults. Anything you set in the `snackbar` key overrides these.

## Positioning

Position is controlled by combining the boolean edge options. They stack — set both a vertical and a horizontal edge to anchor to a corner:

```ts
export default defineNuxtConfig({
  modules: ['nuxt-snackbar'],
  snackbar: {
    bottom: true,
    right: true, // bottom-right corner
  },
})
```

:::caution
The position options are booleans that **combine**, for example `bottom: true, right: true` for the bottom-right corner. Prefer `start` / `end` over `left` / `right` if your app supports right-to-left languages — they flip automatically with text direction.
:::

See [Positioning](/nuxt-snackbar/examples/positioning/) for more layouts, and [Custom Styling](/nuxt-snackbar/examples/custom-styling/) for border-style messages and color overrides.
