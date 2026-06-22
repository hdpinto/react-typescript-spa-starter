import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      // Static prerendering is disabled in this boilerplate.
      // Set prerender.enabled to true when you are ready to generate a static site.
      prerender: {
        enabled: false,
      },
    }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    open: true,
    host: "localhost",
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
