#!/usr/bin/env node
// apply-outlier-adjudication.mjs
//
// Standards-setting judgment pass: removes specific (source × analyte) rows from
// the certifiable-product pool when the value reflects something other than the
// commercial product class, with a documented reason per exclusion. The rows are
// NOT deleted from the literature record — they are moved to
// data/evidence/extraction_excluded.csv (audit trail) and dropped only from the
// pooling input.
//
// Defensible scope rule (wiki/HMTc firewall — Part 2): the HMTc standard is set
// over the distribution of the CERTIFIABLE commercial product. Two exclusion
// classes:
//   - point_source_hotspot : product sampled from a documented mining/smelting/
//     industrial-contamination region; the value is a regional environmental
//     signal, not the commercial product class.
//   - method_invalid : screening method not validated for the analyte at the
//     reported level (e.g. XRF screen for trace Hg without CRM/LOD).
// REAL product-platform highs (balsamic-vinegar Pb, adulterated-spice Cr/Pb,
// seaweed Cd/As) are NOT excluded — they are the genuine literature for that row.
//
// Config below is explicit and auditable. Extend it as new adjudications are made.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const evidenceDir = path.join(repoRoot, "data/evidence")

// Each entry: { source_id, metals (array | "*"), class, reason }
const EXCLUSIONS = [
  { source_id: "teferi2026-honey-ethiopia-kellem-wollega", metals: ["Pb", "Cd", "Ni", "Cr", "Al"], class: "point_source_hotspot",
    reason: "Honey from Kellem Wollega (Dambi Dollo/Gawo Kebe/Anafilo), Ethiopia — documented artisanal-mining region; Pb 18,000-21,420 ug/kg is a point-source environmental signal, not commercial honey. Retained in literature record." },
  { source_id: "salama2019-libya-honey-metals", metals: ["Pb"], class: "point_source_hotspot",
    reason: "Western-Libya location-mean honey, source-flagged regional hotspot context (Pb 10,980 ug/kg). Excluded from commercial-honey standard pool; retained in record." },
  { source_id: "wise2025-elevated-metals-us-honeys", metals: ["tHg", "Hg"], class: "method_invalid",
    reason: "XRF screen with no honey-specific CRM/LOD; XRF cannot reliably quantify trace Hg. tHg 3.71-8.94 mg/kg is a screening artifact, not validated quantification. Pb/Al rows from this source retained (XRF adequate for those at these levels)." },
]

const TARGETS = ["category6_primary_extraction_summary.csv", "category7_primary_extraction_summary.csv"]

function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.length)
  const H = split(lines[0])
  return { header: H, rows: lines.slice(1).map((l) => { const c = split(l); const o = {}; H.forEach((h, i) => (o[h] = c[i] ?? "")); o.__raw = l; return o }) }
}
function split(line) {
  const out = []; let cur = ""; let q = false
  for (let i = 0; i < line.length; i++) { const ch = line[i]
    if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (ch === '"') q = false; else cur += ch }
    else { if (ch === '"') q = true; else if (ch === ",") { out.push(cur); cur = "" } else cur += ch } }
  out.push(cur); return out
}
const matches = (row) => EXCLUSIONS.find((e) =>
  row.source_id === e.source_id && (e.metals === "*" || e.metals.includes(row.metal_species)))

const excluded = []
let totalKept = 0, totalExcl = 0
for (const file of TARGETS) {
  const fp = path.join(evidenceDir, file)
  if (!fs.existsSync(fp)) { console.log(`skip (missing): ${file}`); continue }
  const { header, rows } = parseCsv(fs.readFileSync(fp, "utf8"))
  const kept = []
  for (const r of rows) {
    const e = matches(r)
    if (e) { excluded.push({ file, slug: r.row_slug, metal: r.metal_species, cls: e.class, reason: e.reason, raw: r.__raw }); totalExcl++ }
    else { kept.push(r); totalKept++ }
  }
  fs.writeFileSync(fp, [header.join(",")].concat(kept.map((r) => r.__raw)).join("\n") + "\n", "utf8")
  console.log(`${file}: kept ${kept.length}, excluded ${rows.length - kept.length}`)
}

// append-or-create the audit trail
const exPath = path.join(evidenceDir, "extraction_excluded.csv")
const head = "file,row_slug,metal_species,exclusion_class,reason,raw_row\n"
const body = excluded.map((x) => `${x.file},${x.slug},${x.metal},${x.cls},"${x.reason.replace(/"/g, '""')}","${(x.raw || "").replace(/"/g, '""')}"`).join("\n")
fs.writeFileSync(exPath, head + body + "\n", "utf8")

console.log(`\nOutlier adjudication: ${totalExcl} rows excluded from pool (audit -> data/evidence/extraction_excluded.csv), ${totalKept} retained.`)
console.log(`Exclusion classes: point_source_hotspot, method_invalid. Excluded rows remain in the literature record on their source pages.`)
