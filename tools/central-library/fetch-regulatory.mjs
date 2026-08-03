#!/usr/bin/env node
// CLI for the regulatory-document pathway — pull the world's heavy-metal
// maximum-level instruments directly from their government sources.
//
//   node tools/central-library/fetch-regulatory.mjs                     # everything in the registry
//   node tools/central-library/fetch-regulatory.mjs --category infant-child-foods
//   node tools/central-library/fetch-regulatory.mjs --analytes iAs,Cr-VI --dry-run
//   node tools/central-library/fetch-regulatory.mjs --jurisdictions codex,eu,cn,in
//   node tools/central-library/fetch-regulatory.mjs --list              # show the registry, fetch nothing
//
// Flags:
//   --category <slug>          program-category slug (e.g. infant-child-foods); horizontal
//                              standards always match. Omit for all.
//   --jurisdictions a,b,c      jurisdiction codes (codex,eu,uk,ch,us-fda,ca,au-nz,cn,jp,kr,in,gcc,br,who-jecfa)
//   --analytes Pb,iAs,...      keep instruments covering any of these analytes
//   --out <dir>                output root (default: raw/regulatory/, else ~/Desktop/HMI Regulatory Pull/)
//   --dry-run                  list the matching instruments, download nothing
//   --list                     print the registry as JSON and exit

import { runRegulatoryFetch, loadRegistry, selectInstruments } from "./lib/regulatory.mjs"
import { loadKeys } from "../fetch-app/lib/config.mjs"

const args = new Map()
const argv = process.argv.slice(2)
for (let i = 0; i < argv.length; i++) {
  const a = argv[i]
  if (a.startsWith("--")) {
    const key = a.slice(2)
    const next = argv[i + 1]
    if (next === undefined || next.startsWith("--")) args.set(key, "true")
    else { args.set(key, next); i++ }
  }
}

if (args.has("list")) {
  const reg = loadRegistry()
  console.log(JSON.stringify({ total: reg.instruments.length, instruments: reg.instruments }, null, 2))
  process.exit(0)
}

const jurisdictions = args.has("jurisdictions") ? args.get("jurisdictions").split(",").map((s) => s.trim()).filter(Boolean) : null
const analytes = args.has("analytes") ? args.get("analytes").split(",").map((s) => s.trim()).filter(Boolean) : null
const category = args.has("category") && args.get("category") !== "true" ? args.get("category") : null

const preview = selectInstruments({ jurisdictions, analytes, category })
console.log(`\nRegulatory pull — ${preview.length} instrument(s) match${category ? ` · category=${category}` : ""}${analytes ? ` · analytes=${analytes.join(",")}` : ""}${jurisdictions ? ` · jurisdictions=${jurisdictions.join(",")}` : ""}\n`)

runRegulatoryFetch({
  jurisdictions,
  analytes,
  category,
  categoryLabel: category,
  outRoot: args.has("out") ? args.get("out") : undefined,
  dryRun: args.has("dry-run"),
  keys: loadKeys(),
  onEvent: (ev) => {
    if (ev.type === "start") console.log(`▶ ${ev.subject} · ${ev.queryCount} instruments · ${ev.sources.join(", ")}\n  → ${ev.outDir}${ev.dryRun ? "  (dry run)" : ""}\n`)
    else if (ev.type === "query-start") console.log(`[${ev.index + 1}/${ev.total}] ${ev.query}`)
    else if (ev.type === "download") console.log(`     ↓ ${ev.file}  (${ev.via}, ${(ev.bytes / 1024).toFixed(0)} KB)`)
    else if (ev.type === "log") console.log(`     · ${ev.msg}`)
    else if (ev.type === "done") console.log(`\n✓ done — downloaded ${ev.stats.downloaded}, skipped ${ev.stats.skipped}, manual ${ev.stats.manual}, failed ${ev.stats.failed} of ${ev.stats.instruments}\n  ${ev.outDir}${ev.manifestPath ? "\n  manifest: " + ev.manifestPath : ""}`)
    else if (ev.type === "error") console.error(`✖ ${ev.msg}`)
  },
}).catch((err) => {
  console.error("fetch-regulatory failed:", err.message)
  process.exit(1)
})
