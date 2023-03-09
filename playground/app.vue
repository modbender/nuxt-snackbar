<template>
  <div>
    <button @click="handleClick">Run Snackbar</button>
    <SnackbarProvider bottom right :duration="4000"></SnackbarProvider>
  </div>
</template>

<script setup>
import { useSnackbar } from "#imports";

const snackbar = useSnackbar();

const handleClick = (event) => {
  snackbar.add({
    type: "success",
    text: "Done",
  });
};
</script>
