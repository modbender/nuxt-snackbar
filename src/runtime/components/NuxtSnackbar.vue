<template>
  <Vue3Snackbar v-bind="snackbarOptions" />
</template>

<script setup>
import { useNuxtApp } from "#imports";
import { Vue3Snackbar } from "vue3-snackbar";

const snackbarOptions = useNuxtApp()?.$snackbarOptions || {};
</script>
