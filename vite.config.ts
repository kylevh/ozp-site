import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Tailwind stuff
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  
  // Shadcn stuff
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

});
