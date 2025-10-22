import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // optional: dev server port
  },
  // 👇 Add this line — very important for GitHub Pages
  base: "/manage-doctors/",
});
