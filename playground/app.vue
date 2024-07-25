<template>
  <main>
    Main Content
    <button @click="test">
      Open Snackbar
    </button>
    <NuxtSnackbar />
  </main>
</template>

<script setup>
const snackbar = useSnackbar();

const test = () => {
  snackbar.add({
    type: "info",
    text: "This is a snackbar message",
  });
};
</script>
