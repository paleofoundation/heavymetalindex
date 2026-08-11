#!/usr/bin/env node
// Tightest-global-government-limit standard generator (HMTc Method v3.0).
// Reads regulatory_limits.csv using the authoritative basis_class + soy_class tags
// (no scope/basis heuristics — those kept misclassifying EU liquid & AU-NZ soy rows).
//
// For each (product subcategory, analyte): the certification limit is the strictest
// government maximum level applicable, converted to the subcategory's basis.
//   - powder subcategory:      min( as_sold limits , as_consumed limits × 7 )
//   - ready-to-feed subcategory: min( as_consumed limits )   [as_sold/powder limits do not apply to a liquid product]
// Draft / not-for-implementation values are excluded. Where no government regulates
// the analyte for this product, the cell is "—" (see the no-limit report).

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const RECON = 7
const rows = parse(fs.readFileSync(path.join(REPO, "data/evidence/regulatory_limits.csv"), "utf8"))

function parse(t) {
  const L = t.trim().split("\n"); const H = split(L[0])
  return L.slice(1).map((l) => Object.fromEntries(split(l).map((v, i) => [H[i], v])))
}
function split(line) { const o = []; let c = "", q = false; for (const ch of line) { if (ch === '"') q = !q; else if (ch === "," && !q) { o.push(c); c = "" } else c += ch } o.push(c); return o.map((s) => s.replace(/^"|"$/g, "")) }
const num = (v) => { const n = Number(v); return Number.isFinite(n) ? n : null }
const isDraft = (x) => /draft|not for implementation/i.test((x.status || "") + (x.notes || ""))

// infant FORMULA rows only (exclude cereal/complementary/juice/meal for the formula standard)
const F = rows.filter((x) =>
  /formula/i.test(x.product_scope) &&
  !/cereal|complementary|weaning|transition|meal|juice/i.test(x.product_scope) &&
  !isDraft(x) && x.basis_class)

const SUBCATS = [
  { key: "powder-cow", form: "as_sold", soy: "non-soy", label: "Powder, cow-milk" },
  { key: "powder-soy", form: "as_sold", soy: "soy", label: "Powder, soy" },
  { key: "rtf-cow", form: "as_consumed", soy: "non-soy", label: "Ready-to-feed, cow-milk" },
  { key: "rtf-soy", form: "as_consumed", soy: "soy", label: "Ready-to-feed, soy" },
]
const PANEL = ["Pb", "iAs", "Cd", "tHg", "MeHg", "Ni", "Al", "Sn", "Cr-VI"]

function tightest(sub, analyte) {
  const cand = []
  for (const x of F) {
    if (x.metal_species !== analyte) continue
    if (!(x.soy_class === "both" || x.soy_class === sub.soy)) continue
    const v = num(x.value_ug_kg); if (v === null) continue
    if (sub.form === "as_sold") {
      cand.push({ v: x.basis_class === "as_sold" ? v : v * RECON, jur: x.jurisdiction, conv: x.basis_class === "as_consumed", id: x.regulatory_limit_id })
    } else {
      if (x.basis_class === "as_consumed") cand.push({ v, jur: x.jurisdiction, conv: false, id: x.regulatory_limit_id })
    }
  }
  if (!cand.length) return null
  cand.sort((a, b) => a.v - b.v)
  return { value: cand[0].v, jur: cand[0].jur, converted: cand[0].conv, source_id: cand[0].id, all: cand }
}

const out = {}
console.log("=== HMTc Method v3.0 — tightest global government limit, infant formula (µg/kg) ===\n")
for (const sub of SUBCATS) {
  out[sub.key] = {}
  const cells = PANEL.map((a) => {
    const t = tightest(sub, a)
    out[sub.key][a] = t ? { value: Math.round(t.value), source: t.jur, source_id: t.source_id, converted: t.converted } : null
    return `${a} ${t ? Math.round(t.value) + "(" + t.jur + (t.converted ? "×7" : "") + ")" : "—"}`
  })
  console.log(`${sub.label.padEnd(24)} ${cells.join("  ")}`)
}
fs.writeFileSync(path.join(REPO, "data/workbench/standards/infant-formula-v3-tightest.json"), JSON.stringify(out, null, 2))
console.log("\nWrote data/workbench/standards/infant-formula-v3-tightest.json")
