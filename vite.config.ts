import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), ssr()],
  optimizeDeps: {
    exclude: ["bootstrap"],
  },
  base: process.env.NODE_ENV === "production" ? "/reddit-manosphere/" : "./",
});
