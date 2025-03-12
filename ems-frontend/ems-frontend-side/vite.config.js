import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // bu şekilde portu 3000 de ayarladık
  server: {
    port: 3000,
  },
});
