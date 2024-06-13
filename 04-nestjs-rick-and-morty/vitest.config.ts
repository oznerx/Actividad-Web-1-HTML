/// <reference types="vitest" />
import { defineConfig } from "vitest/config"
import path from "path"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    // include: ['src/**/*.test.{ts,tsx}'],
    setupFiles: "src/helpers/setupTests.ts",
    environment: "jsdom",
    coverage: {
      include: [
        "src/helpers//*.{ts,tsx},",
        "src/tests/utils//*.{ts,tsx}",
        "src/types//*.{ts,tsx}",
      ],
      exclude: [],
      reporter: ["html", "text-summary"],
      thresholds: {
        functions: 50,
        lines: 50,
        branches: 50,
        statements: 50,
      },
    },
  },
  resolve: {
    alias: {
      // add this section if you are using an alias
      "@": path.resolve(__dirname, "src"),
    },
  },
})
