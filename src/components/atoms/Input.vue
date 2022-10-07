<template>
  <div class="relative w-full bg-white rounded-md">
    <div class="flex flex-col px-3 py-2">
      <label class="text-xs text-black-400">{{ label }}</label>
      <textarea v-if="variant === 'textarea'" id="field-textarea"
        class="w-full h-16 text-base text-black outline-none resize-none" :placeholder="placeholder" />
      <input v-else-if="variant === 'input'" id="field-input" class="w-full text-black outline-none"
        :placeholder="placeholder" />
    </div>
    <hr class="absolute w-full bottom-0 text-black-200" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchIcon from "../../assets/search.svg?inline";

export default defineComponent({
  name: 'SearchBar',
  props: {
    label: String,
    placeholder: String,
    variant: {
      type: String,
      default: "input",
      validator(value: string) {
        return ["input", "textarea"].includes(value);
      },
    },
  },
  components: {
    SearchIcon
  }
})
</script>

<style>

</style>