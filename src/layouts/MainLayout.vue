<template>
  <q-layout view="lHh Lpr lFf">
    <TheHeader />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import TheHeader from "src/components/TheHeader.vue";
</script>
