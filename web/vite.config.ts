import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import svgVue from "@vuetter/vite-plugin-vue-svg";

export default defineConfig({
  plugins: [vue(), svgVue()],
  test: {
    globals: true,
    environment: "happy-dom",
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
});
