import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Use jsdom to simulate a browser-like environment
    globals: true, // This allows global variables like `describe`, `it`, `expect`, etc.
    setupFiles: "./src/setupTests.js", // Path to setup file (for jest-dom andother setups)
  },
});
