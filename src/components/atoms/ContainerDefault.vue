<template>
  <div class="mx-auto py-4 px-4 lg:py-8 md:px-8 lg:max-w-6xl" :class="class">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContainerDefault',
  props: {
    label: String,
    class: String
  },
})
</script>

<style>

</style>