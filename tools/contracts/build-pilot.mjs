#!/usr/bin/env node
import { buildPilot } from "./pilot/compiler.mjs";
const allowed = new Set(["--check"]);
for (const arg of process.argv.slice(2))
  if (!allowed.has(arg))
    throw Error(
      `Unknown argument ${arg}; this command only builds the frozen three-page pilot.`,
    );
console.log(
  JSON.stringify(
    {
      mode: process.argv.includes("--check") ? "check" : "build",
      changed: buildPilot({ check: process.argv.includes("--check") }),
    },
    null,
    2,
  ),
);
