<template>
  <div class="relative w-full bg-white rounded-md">
    <div class="flex flex-col px-3 py-2" :class="class">
      <label class="text-xs text-black-400">{{ label }}</label>
      <textarea v-if="variant === 'textarea'"
        class="field-textarea w-full h-16 text-base text-black outline-none resize-none" :placeholder="placeholder"
        v-model="value" />
      <input :type="type" v-else-if="variant === 'input'" class="field-input w-full text-black outline-none"
        :placeholder="placeholder" v-model="value" />
    </div>
    <hr class="absolute w-full bottom-0 text-black-200" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Input',
  props: {
    label: String,
    placeholder: String,
    variant: {
      type: String as PropType<"input" | "textarea">,
      default: "input",
    },
    class: String,
    type: {
      type: String,
      default: "text"
    },
    modelValue: String
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value: any) {
        this.$emit('update:modelValue', value)
      }
    }
  },
})
</script>

<style>

</style>