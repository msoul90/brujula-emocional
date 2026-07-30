import { defineConfig } from "vitest/config";

export default defineConfig({
    // Disable OXC so Vitest applies esbuild JSX settings with Preact import source.
    oxc: false,
    esbuild: {
        jsx: "automatic",
        jsxImportSource: "preact",
    },
    test: {
        environment: "node",
        include: ["tests/**/*.test.js"],
    },
});
