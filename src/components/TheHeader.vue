<template>
  <!-- FONT SIZE AND WEIGHT IS NOT WORKING -->
  <q-header
    class="text-black bg-accent text-h1"
  >
    <q-tabs
      v-model="tab"
    >
      <q-tab label="صفحه اصلی"
             name="landingPage" />

      <q-tab label="منو"
             name="menu" />

      <q-tab label="خدمات ما"
             name="services"
             size="10px" />

      <q-tab label="درباره ما"
             name="aboutUs" />

    </q-tabs>
  </q-header>
</template>

<script setup>
import { ref } from "vue";

const tab = ref("landingPage");
</script>

<style lang="scss">
.q-tab__indicator {
  display: none;
}

.q-tab--active {
  color: #000;
}

.q-tab:not(.q-tab--active) {
  color: #777;
}
</style>
