import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["mixed-decls"],
      },
    },
  },
  server: {
    host: "0.0.0.0", // Allows connections from any IP (used for private IPs)
    port: 5173, // Change the port if needed (default is 5173)
  },
});
