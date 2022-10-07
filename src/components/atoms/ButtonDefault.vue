<template>
  <button @click="onClick" @type="type" :class="'btn btn-' + variant">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ButtonDefault',
  props: {
    label: String,
    type: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
      default: "primary",
      validator(value: string) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
})
</script>

<style scoped>
.btn {
  @apply px-4 py-3 text-sm font-semibold lg:py-4 lg:text-base
}
.btn-primary {
  @apply bg-blue text-white rounded-none hover:bg-blue-700;
}
.btn-secondary {
  @apply text-blue rounded-none border border-solid border-blue hover:bg-blue-100;
}
</style>