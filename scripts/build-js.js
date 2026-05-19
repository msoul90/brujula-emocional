const esbuild = require("esbuild");
const fs = require("node:fs");
const path = require("node:path");

const envFile = path.join(__dirname, "../.env");
const env = {};
if (fs.existsSync(envFile)) {
  fs.readFileSync(envFile, "utf8")
    .split("\n")
    .forEach((line) => {
      const match = line.match(/^([^=#][^=]*)=(.*)$/);
      if (match) env[match[1].trim()] = match[2].trim();
    });
}

esbuild
  .build({
    entryPoints: ["app.js"],
    bundle: true,
    format: "iife",
    outfile: "dist/app.bundle.js",
    jsx: "automatic",
    jsxImportSource: "preact",
    define: {
      "process.env.POSTHOG_ENABLED": JSON.stringify(env.POSTHOG_ENABLED || "false"),
      "process.env.POSTHOG_API_KEY": JSON.stringify(env.POSTHOG_API_KEY || ""),
      "process.env.POSTHOG_HOST": JSON.stringify(env.POSTHOG_HOST || ""),
    },
  })
  .then(() => console.log("JS bundle → dist/app.bundle.js"))
  .catch(() => process.exit(1));
