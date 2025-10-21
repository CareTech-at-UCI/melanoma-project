import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(() => {
  return {
    define: {
      "process.env": {},
    },
    build: {
      outDir: "build",
    },
    plugins: [react(), tailwindcss()],
  };
});
