import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "142.93.43.249",
    // host: "192.168.10.102",
    port: 3001,
  },
});
