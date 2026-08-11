#!/usr/bin/env node
// CLI for the condition research runner.
//
//   node tools/central-library/run-condition.mjs --condition "Multiple Sclerosis"
//   node tools/central-library/run-condition.mjs --condition "Endometriosis" \
//        --preset microbiome-medicine --out ~/Desktop --from-year 2010
//
// Flags:
//   --condition / --subject   the condition (required)
//   --preset <id>             preset set (default: microbiome-medicine)
//   --out <dir>               output root (default: ~/Desktop) → <out>/<Condition>/
//   --sources a,b,c           default: pubmed,openalex,crossref,semanticscholar
//   --from-year / --to-year   date window (default 2000..next year)
//   --groups "A,B"            only these preset groups
//   --max-per-query <n>       cap downloads per query (0 = no cap)
//   --limit-queries <n>       only the first N queries (quick test)
//   --dry-run                 search + dedupe, list, no download

import { runCondition, listPresets } from "./lib/run-condition.mjs"

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

if (args.has("list-presets")) {
  console.log(JSON.stringify(listPresets(), null, 2))
  process.exit(0)
}

const subject = args.get("condition") || args.get("subject")
if (!subject) {
  console.error("Missing --condition. Try: --condition \"Multiple Sclerosis\"")
  console.error("Available presets:", listPresets().map((p) => p.id).join(", "))
  process.exit(1)
}

const opts = {
  subject,
  presetId: args.get("preset") || "microbiome-medicine",
  outRoot: args.get("out"),
  sources: args.has("sources") ? args.get("sources").split(",").map((s) => s.trim()) : undefined,
  fromYear: args.has("from-year") ? Number(args.get("from-year")) : undefined,
  toYear: args.has("to-year") ? Number(args.get("to-year")) : undefined,
  groups: args.has("groups") ? args.get("groups").split(",").map((s) => s.trim()) : null,
  maxPerQuery: args.has("max-per-query") ? Number(args.get("max-per-query")) : undefined,
  limitQueries: args.has("limit-queries") ? Number(args.get("limit-queries")) : 0,
  dryRun: args.has("dry-run"),
  onEvent: (ev) => {
    if (ev.type === "start") console.log(`\n▶ ${ev.subject} · ${ev.preset} · ${ev.queryCount} queries · sources: ${ev.sources.join(", ")}\n  → ${ev.outDir}${ev.dryRun ? "  (dry run)" : ""}\n`)
    else if (ev.type === "query-start") console.log(`[${ev.index + 1}/${ev.total}] ${ev.query}`)
    else if (ev.type === "query-candidates") process.stdout.write(`     ${ev.found} hits → ${ev.unique} unique\n`)
    else if (ev.type === "download") console.log(`     ↓ ${ev.file}  (${ev.source}·${ev.via})`)
    else if (ev.type === "log" && /error/i.test(ev.msg)) console.error(`     ! ${ev.msg}`)
    else if (ev.type === "done") console.log(`\n✓ done — downloaded ${ev.stats.downloaded}, already-in-corpus ${ev.stats.corpusSkipped || 0}, failed ${ev.stats.failed} across ${ev.stats.queries} queries\n  ${ev.outDir}${ev.manifestPath ? "\n  manifest: " + ev.manifestPath : ""}`)
  },
}

runCondition(opts).catch((err) => {
  console.error("run-condition failed:", err.message)
  process.exit(1)
})
