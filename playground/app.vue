<template>
  <main>
    Main Content
    <button @click="test">Open Snackbar</button>
  </main>
  <NuxtSnackbar />
</template>

<script setup>
import { useSnackbar } from "#imports";

const snackbar = useSnackbar();

const test = () => {
  snackbar.add({
    type: "success",
    text: "Testing",
  });
};
</script>
