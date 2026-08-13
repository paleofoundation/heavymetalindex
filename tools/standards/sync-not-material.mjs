#!/usr/bin/env node
// sync-not-material.mjs
//
// Keeps data/evidence/standards-not-material.csv (the substantiation registry audited by
// tools/evidence/audit-not-material-substantiation.mjs) in lockstep with the compiled standards
// records. A not-material cell is an AFFIRMATIVE claim that must be substantiated; the single source
// of truth for the claim is the compiler's own resolved cell (basis_class + rationale + bounded_by +
// regulatory_basis + jurisdictions_checked). This tool reads every not_material cell from a compiled
// directory and UPSERTS the matching CSV row, keyed by (row_slug|metal_species), so the registry can
// never drift from the compiler and no not-material determination ships unsubstantiated.
//
// Only cells of type "not_material" are written. `control` cells assert the metal may be present but is
// unregulated (a surveillance obligation, not a not-material claim) and are deliberately NOT registered.
//
// Usage: node tools/standards/sync-not-material.mjs --dir=data/workbench/standards/cat27-compiled [--date=YYYY-MM-DD] [--cross="..."] [--check]
//   --check : report what would change and exit non-zero if the registry is stale; write nothing.

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const DIR = args.get("dir")
const CHECK = args.has("check")
const DATE = args.get("date") || "2026-08-13"
const CROSS = args.get("cross") || "government-limit-default compile (HMTc Method v2.0); substantiation synced from the compiled cell"
if (!DIR) { console.error("!! --dir=<compiled records dir> is required"); process.exit(2) }

const CSV = path.join(REPO, "data/evidence/standards-not-material.csv")
const COLS = ["row_slug", "metal_species", "basis_class", "bounded_by", "rationale", "regulatory_basis", "jurisdictions_checked", "cross_sourced", "date"]

function parseCsv(text) {
  const lines = text.replace(/\r\n/g, "\n").split("\n").filter((l) => l.length)
  const split = (line) => {
    const out = []; let cur = "", q = false
    for (let i = 0; i < line.length; i++) { const ch = line[i]
      if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (ch === '"') q = false; else cur += ch }
      else { if (ch === '"') q = true; else if (ch === ",") { out.push(cur); cur = "" } else cur += ch } }
    out.push(cur); return out }
  const H = split(lines[0])
  return { header: H, rows: lines.slice(1).map((l) => { const c = split(l); const o = {}; H.forEach((h, i) => (o[h] = c[i] ?? "")); return o }) }
}
const esc = (v) => { const s = String(v ?? ""); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s }
const rowLine = (r) => COLS.map((c) => esc(r[c])).join(",")

// collect not_material cells from the compiled dir
const dirPath = path.join(REPO, DIR)
const incoming = new Map() // slug|metal -> row
for (const f of fs.readdirSync(dirPath)) {
  if (!f.endsWith(".json")) continue
  const rec = JSON.parse(fs.readFileSync(path.join(dirPath, f), "utf8"))
  const variants = rec.variants || { both: rec.cells || {} }
  for (const cells of Object.values(variants)) {
    for (const [metal, cell] of Object.entries(cells)) {
      if (!cell || cell.type !== "not_material") continue
      const key = `${rec.slug}|${metal}`
      if (incoming.has(key)) continue
      incoming.set(key, {
        row_slug: rec.slug, metal_species: metal, basis_class: cell.basis_class || "",
        bounded_by: cell.bounded_by || "", rationale: cell.control || cell.rationale || "",
        regulatory_basis: cell.regulatory_basis || "", jurisdictions_checked: cell.jurisdictions_checked || "",
        cross_sourced: CROSS, date: DATE,
      })
    }
  }
}

const existing = fs.existsSync(CSV) ? parseCsv(fs.readFileSync(CSV, "utf8")) : { header: COLS, rows: [] }
const byKey = new Map(existing.rows.map((r) => [`${r.row_slug}|${r.metal_species}`, r]))

let added = 0, updated = 0
for (const [key, row] of incoming) {
  const prev = byKey.get(key)
  if (!prev) { byKey.set(key, row); added++ }
  else {
    // update in place only if content differs (excluding date churn); preserve original date if unchanged otherwise
    const differs = COLS.filter((c) => c !== "date").some((c) => (prev[c] || "") !== (row[c] || ""))
    if (differs) { byKey.set(key, { ...row }); updated++ }
  }
}

// preserve original row order, then append new keys in stable (slug, metal) order
const outRows = []
const seen = new Set()
for (const r of existing.rows) { const k = `${r.row_slug}|${r.metal_species}`; outRows.push(byKey.get(k) || r); seen.add(k) }
const newKeys = [...incoming.keys()].filter((k) => !seen.has(k)).sort()
for (const k of newKeys) outRows.push(byKey.get(k))

const out = [existing.header.join(","), ...outRows.map(rowLine)].join("\n") + "\n"

if (CHECK) {
  const stale = added || updated
  console.log(`sync-not-material --check ${DIR}: ${added} to add, ${updated} to update, ${incoming.size} not-material cell(s) total`)
  process.exit(stale ? 1 : 0)
}
fs.writeFileSync(CSV, out)
console.log(`sync-not-material ${DIR}: +${added} added, ${updated} updated (${incoming.size} not-material cell(s); registry now ${outRows.length} rows)`)
