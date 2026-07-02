// Minimal ambient declaration for the `process.env` reads used to inject
// build-time config (see scripts/build-js.js). Intentionally not @types/node,
// which redeclares browser globals (e.g. setTimeout) in ways that conflict
// with the DOM lib this project targets.
declare const process: { env: Record<string, string | undefined> };
