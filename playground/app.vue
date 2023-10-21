<template>
  <main>
    Main Content
    <button @click="test">Open Snackbar</button>
  </main>
  <NuxtSnackbar />
</template>

<script setup>
import { useSnackbar } from '#imports';

const snackbar = useSnackbar();

const test = () => {
  snackbar.add({
    type: "info",
    text: "This is a snackbar message",
  });
};
</script>
