<template>
  <RouterLink v-if="to" :to="to" custom v-slot="{ navigate }">
    <button role="link" @click="navigate" :type="type" :class="class">
      {{ label }}
    </button>
  </RouterLink>
  <button v-else @click="onClick" :type="type" :class="class">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { RouterLink } from "vue-router"

export default defineComponent({
  name: 'ButtonDefault',
  data() {
    const baseClass = "px-4 py-3 text-sm font-semibold lg:py-4 lg:text-base"

    return {
      class: `${baseClass} btn-${this.variant} ${this.className}`
    }
  },
  props: {
    label: String,
    type: {
      type: String as PropType<"button" | "submit" | "reset">,
      default: "button"
    },
    variant: {
      type: String as PropType<"primary" | "secondary">,
      default: "primary",
    },
    className: String,
    to: {
      type: String,
      default: ""
    }
  },
  components: {
    RouterLink
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
})
</script>

<style scoped>
.btn-primary {
  @apply bg-blue text-white rounded-none hover:bg-blue-700;
}

.btn-secondary {
  @apply text-blue rounded-none border border-solid border-blue hover:bg-blue-100;
}
</style>