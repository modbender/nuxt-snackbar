import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders the index page', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')
    expect(html).toContain('<div>basic</div>')
  })

  it('registers and server-renders the NuxtSnackbar component', async () => {
    const html = await $fetch('/')
    // vue3-snackbar renders a wrapper element carrying this class.
    expect(html).toContain('vue3-snackbar')
  })

  it('auto-imports useSnackbar so the page renders without an unresolved import', async () => {
    // If `useSnackbar` were not auto-imported, the fixture app would throw
    // during SSR and this request would reject instead of returning markup.
    const html = await $fetch('/')
    expect(html).toContain('basic')
  })
})
