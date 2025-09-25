import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/book-portfolio/",
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        // Ensure all assets get hashed filenames
        assetFileNames: "assets/[name].[hash][extname]",
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
      },
    },
    // Enable CSS code splitting for better caching
    cssCodeSplit: true,
    // Minify CSS
    cssMinify: true,
  },
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-react-compiler"],
      },
    }),
  ],
});
