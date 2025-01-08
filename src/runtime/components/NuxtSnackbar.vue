<template>
  <Vue3Snackbar v-bind="snackbarOptions">
    <template
      v-for="(_, name) in $slots"
      #[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
  </Vue3Snackbar>
</template>

<script setup>
import { Vue3Snackbar } from 'vue3-snackbar'
import { useNuxtApp } from '#imports'

const snackbarOptions = useNuxtApp()?.$snackbarOptions || {}
</script>
