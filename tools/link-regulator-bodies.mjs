#!/usr/bin/env node
// One-time-ish sweep: in every metals page, link the Body cell of each row in
// the Regulatory-limits table to its /regulators/<body> profile. Conservative
// and idempotent — operates ONLY on table rows inside the "## Regulat…" section,
// only on the first cell, only when that cell starts with a known body alias,
// and skips cells already linked. Bodies outside the nine profiled pages are
// left untouched (no broken links). Run: node tools/link-regulator-bodies.mjs [--dry-run]

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const metalsDir = path.join(repoRoot, "wiki/metals")
const dryRun = process.argv.includes("--dry-run")

// Display-name → body slug. Longest patterns first so "Codex Alimentarius" wins
// over "Codex", "US EPA IRIS" over "EPA", "European Commission" over "EU".
const BODY_ALIASES = [
  ["California Proposition 65", "oehha"],
  ["California Prop 65", "oehha"],
  ["European Commission", "eu-commission"],
  ["Codex Alimentarius", "codex"],
  ["US EPA IRIS", "us-epa"],
  ["US California", "oehha"],
  ["US ATSDR", "atsdr"],
  ["EPA IRIS", "us-epa"],
  ["Prop 65", "oehha"],
  ["US EPA", "us-epa"],
  ["US FDA", "us-fda"],
  ["US CDC", "us-cdc"],
  ["JECFA", "jecfa"],
  ["OEHHA", "oehha"],
  ["ATSDR", "atsdr"],
  ["Codex", "codex"],
  ["EFSA", "efsa"],
  ["FDA", "us-fda"],
  ["EPA", "us-epa"],
  ["CDC", "us-cdc"],
  ["EU", "eu-commission"],
].sort((a, b) => b[0].length - a[0].length)

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

function matchLeadingBody(cell) {
  for (const [alias, slug] of BODY_ALIASES) {
    if (new RegExp(`^${escapeRe(alias)}\\b`).test(cell)) return { alias, slug }
  }
  return null
}

function linkRow(line) {
  const m = line.match(/^(\|\s*)([^|]*?)(\s*\|.*)$/s)
  if (!m) return { line, changed: false }
  const cell0 = m[2]
  if (cell0.includes("[[regulators/")) return { line, changed: false } // already linked
  const hit = matchLeadingBody(cell0)
  if (!hit) return { line, changed: false }
  const linked = cell0.replace(new RegExp(`^(${escapeRe(hit.alias)})\\b`), `[[regulators/${hit.slug}\\|$1]]`)
  return { line: m[1] + linked + m[3], changed: true }
}

let pagesChanged = 0, rowsLinked = 0
const report = []
for (const file of fs.readdirSync(metalsDir)) {
  if (!file.endsWith(".md") || file === "index.md") continue
  if (file === "lead.md") continue // already linked by hand
  const fp = path.join(metalsDir, file)
  const lines = fs.readFileSync(fp, "utf8").split("\n")

  // Find the "## Regulat…" section bounds
  let start = -1
  for (let i = 0; i < lines.length; i++) {
    if (/^##\s+Regulat/i.test(lines[i])) { start = i; break }
  }
  if (start < 0) { report.push(`${file}: no Regulat… section`); continue }
  let end = lines.length
  for (let i = start + 1; i < lines.length; i++) {
    if (/^##\s/.test(lines[i])) { end = i; break }
  }

  let hits = 0
  for (let i = start + 1; i < end; i++) {
    if (!lines[i].startsWith("|")) continue
    if (/^\|\s*-+/.test(lines[i])) continue // separator
    const { line, changed } = linkRow(lines[i])
    if (changed) { lines[i] = line; hits++ }
  }
  if (hits > 0) {
    if (!dryRun) fs.writeFileSync(fp, lines.join("\n"))
    pagesChanged++
    rowsLinked += hits
    report.push(`${file}: ${hits} body cell(s) linked`)
  }
}

console.log(`link-regulator-bodies: ${rowsLinked} body cells linked across ${pagesChanged} metals pages${dryRun ? " (dry run)" : ""}.`)
for (const r of report.slice(0, 40)) console.log(`  ${r}`)
