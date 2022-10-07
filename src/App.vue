<template>
  <main class="">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
  main {
    height: 100vh;
  }
</style>
