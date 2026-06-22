import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
    host: "localhost",
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
