const esbuild = require("esbuild");
const fs = require("node:fs");
const path = require("node:path");

const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, "../package.json"), "utf8"));

const envFile = path.join(__dirname, "../.env");
const envFromFile = {};
if (fs.existsSync(envFile)) {
  fs.readFileSync(envFile, "utf8")
    .split("\n")
    .forEach((line) => {
      const match = line.match(/^([^=#][^=]*)=(.*)$/);
      if (match) envFromFile[match[1].trim()] = match[2].trim();
    });
}
const env = { ...envFromFile, ...process.env };

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
      "process.env.SUPABASE_URL": JSON.stringify(env.SUPABASE_URL || ""),
      "process.env.SUPABASE_ANON_KEY": JSON.stringify(env.SUPABASE_ANON_KEY || ""),
      "process.env.TURNSTILE_SITE_KEY": JSON.stringify(env.TURNSTILE_SITE_KEY || ""),
      "globalThis.__TURNSTILE_SITE_KEY__": JSON.stringify(env.TURNSTILE_SITE_KEY || ""),
      "process.env.APP_VERSION": JSON.stringify(pkg.version || ""),
    },
  })
  .then(() => console.log("JS bundle → dist/app.bundle.js"))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
