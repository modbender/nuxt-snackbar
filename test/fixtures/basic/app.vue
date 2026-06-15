<template>
  <div>
    <div>basic</div>
    <NuxtSnackbar />
  </div>
</template>

<script setup>
// Auto-imported by the module; referencing it asserts the import is registered.
const snackbar = useSnackbar()

if (import.meta.server) {
  // Touch the API so a missing auto-import would fail the build/render.
  void snackbar.add
}
</script>
