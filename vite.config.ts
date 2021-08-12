import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    exclude: ["bootstrap"],
  },
  base: process.env.NODE_ENV === "production" ? "/reddit-manosphere/" : "./",
});