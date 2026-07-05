#!/usr/bin/env node
// Reports whether the HMI-Library drive is plugged in and where the library
// resolves. Run: npm run library:status

import { execSync } from "node:child_process"
import { driveStatus } from "./lib/library-root.mjs"

const s = driveStatus()
if (s.mounted) {
  console.log(`✓ Library drive "${s.volume}" is MOUNTED`)
  console.log(`  mount:        ${s.mount}`)
  try {
    const cols = execSync(`df -h "${s.mount}"`, { encoding: "utf8" }).trim().split("\n")[1].split(/\s+/)
    console.log(`  capacity:     ${cols[1]} · used ${cols[2]} · free ${cols[3]}`)
  } catch {}
  console.log(`  raw corpus:   ${s.rawDir}`)
  console.log(`  research pulls: ${s.researchPullsDir}`)
} else {
  console.log(`✗ Library drive "${s.volume}" is NOT plugged in`)
  console.log(`  Plug in the HMI-Library drive before running fetch / ingest / research pulls.`)
  console.log(`  (Override the location with HMI_LIBRARY_ROOT=/path if needed.)`)
  process.exitCode = 1
}
