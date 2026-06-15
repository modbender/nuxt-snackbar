---
title: Usage
description: Fire toasts with the auto-imported useSnackbar() composable — message types, per-message options, and clearing the stack.
sidebar:
  order: 3
---

Everything you do at runtime goes through the `useSnackbar()` service. It's auto-imported, so you can call it from any component, composable, or plugin without an import statement.

The service returns two methods:

| Method | Description |
| --- | --- |
| `add(message)` | Push a new message onto the snackbar stack. |
| `clear()` | Remove all currently visible messages. |

## Composition API

```vue
<script setup lang="ts">
const snackbar = useSnackbar()

function save() {
  snackbar.add({
    type: 'success',
    text: 'Your changes have been saved.',
  })
}
</script>

<template>
  <button @click="save">Save</button>
</template>
```

## Options API

If you're using the Options API, the service is available on the component instance as `this.$snackbar`:

```vue
<script>
export default {
  methods: {
    save() {
      this.$snackbar.add({
        type: 'success',
        text: 'Your changes have been saved.',
      })
    },
  },
}
</script>

<template>
  <button @click="save">Save</button>
</template>
```

:::caution
For messages to actually appear, `<NuxtSnackbar />` must be mounted once somewhere in your app tree. If `add()` seems to do nothing, that's almost always the missing piece — see [Installation](/nuxt-snackbar/installation/).
:::

## Message types

The `type` field sets the message's color and icon. The built-in types are:

```ts
const snackbar = useSnackbar()

snackbar.add({ type: 'success', text: 'Saved!' })
snackbar.add({ type: 'error', text: 'Something went wrong.' })
snackbar.add({ type: 'warning', text: 'Your session is about to expire.' })
snackbar.add({ type: 'info', text: 'A new version is available.' })
```

You can also leave `type` out entirely for a neutral, untyped message:

```ts
snackbar.add({ text: 'Just a plain message.' })
```

## Per-message options

`add()` accepts a `SnackbarMessage` object. `text` is the only required field — everything else is optional and overrides the global defaults for that single message.

| Field | Type | Description |
| --- | --- | --- |
| `text` | `string` | **Required.** The message body. |
| `type` | `'success' \| 'error' \| 'warning' \| 'info' \| null` | Classification — sets the color and icon. |
| `title` | `string` | Optional title line shown above the text. |
| `background` | `string` | Override the background color for this message. |
| `duration` | `number` | Milliseconds before auto-dismiss (overrides the global `duration`). |
| `dismissible` | `boolean` | Whether the message can be dismissed manually. |
| `role` | `'alert' \| 'log' \| 'marquee' \| 'status' \| 'timer'` | ARIA live-region role for assistive technology. |
| `action` | Vue component / VNode | A component rendered in the message's action slot (for example, an "Undo" button). |
| `onRemoved` | `(msg, wasDismissed) => void` | Callback fired when the message is removed. `wasDismissed` is `true` if the user dismissed it. |

A richer example using several of these:

```ts
const snackbar = useSnackbar()

snackbar.add({
  type: 'success',
  title: 'Upload complete',
  text: 'profile-photo.png is now live.',
  duration: 6000,
  dismissible: true,
  onRemoved(msg, wasDismissed) {
    console.log(wasDismissed ? 'User dismissed it' : 'Auto-dismissed')
  },
})
```

:::tip
Want a message to stay until the user dismisses it? Set `dismissible: true` and give it a `duration: 0`, so it won't auto-close on its own.
:::

## Clearing messages

Call `clear()` to remove every visible message at once — handy when navigating away from a page or resetting state:

```ts
const snackbar = useSnackbar()
snackbar.clear()
```

## Next steps

- [Configuration](/nuxt-snackbar/configuration/) — set the defaults all messages inherit.
- [Examples](/nuxt-snackbar/examples/basic/) — copy-paste, end-to-end recipes.
