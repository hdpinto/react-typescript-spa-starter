import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
