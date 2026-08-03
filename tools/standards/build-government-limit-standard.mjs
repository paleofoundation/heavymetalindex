#!/usr/bin/env node
// Government-limit-default standard generator (HMTc Method v2.0, 2026-08-03).
//
// RULE (per CLAUDE.md Part 19, ratified 2026-08-03):
//   standard(product, analyte) =
//     Tier 1 toxic (Pb, Cd, iAs, MeHg, tHg):  min( occurrence percentile , strictest credible government ML )
//     Tier 2 / other (Ni, Sn, Al, Cr-VI):     strictest credible government ML   (occurrence fallback only where NO government ML exists)
//
// This inverts the old min(occurrence, cap) rule: the government limit is the DEFAULT and
// occurrence is computed only where it (a) is a Tier 1 toxic and beats the law, or (b) is
// the sole basis because no government regulates the cell. It is a lookup against the
// regulatory register + crosswalk (no per-cell pooling for the government cells), which is
// the speed unlock, and it is maximally defensible (the standard cites sovereign limits).
//
// Usage: node tools/standards/build-government-limit-standard.mjs --product=<slug>[,<slug>]

import fs from "node:fs"
import path from "node:path"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=")] : [])))
const products = (args.get("product") ?? "").split(",").map((s) => s.trim()).filter(Boolean)

const TIER1_TOXIC = new Set(["Pb", "Cd", "iAs", "MeHg", "tHg"])
const PANEL = ["Pb", "iAs", "tHg", "Cd", "Cr-VI", "Ni", "Sn", "Al"]
const RECON = 7 // 1:7 powder<->prepared

function parseCsv(text) {
  const lines = text.trim().split("\n")
  const head = splitCsvLine(lines[0])
  return lines.slice(1).map((l) => Object.fromEntries(splitCsvLine(l).map((v, i) => [head[i], v])))
}
function splitCsvLine(line) {
  const out = []; let cur = "", q = false
  for (const ch of line) {
    if (ch === '"') q = !q
    else if (ch === "," && !q) { out.push(cur); cur = "" }
    else cur += ch
  }
  out.push(cur); return out.map((s) => s.replace(/^"|"$/g, ""))
}
const num = (v) => { const n = Number(v); return Number.isFinite(n) ? n : null }

const limits = parseCsv(fs.readFileSync(path.join(REPO, "data/evidence/regulatory_limits.csv"), "utf8"))
const limitsById = new Map(limits.map((r) => [r.regulatory_limit_id, r]))
const crosswalk = parseCsv(fs.readFileSync(path.join(REPO, "data/evidence/product_regulatory_crosswalk.csv"), "utf8"))
const agg = parseCsv(fs.readFileSync(path.join(REPO, "data/evidence/hmtc_aggregate_distributions.csv"), "utf8"))
const aggBy = new Map(agg.map((r) => [`${r.product_slug}|${r.metal_species}`, r]))
// Not-material determinations and process screens override any occurrence fallback.
const notMaterialPath = path.join(REPO, "data/evidence/standards-not-material.csv")
const notMaterial = new Set(
  (fs.existsSync(notMaterialPath) ? parseCsv(fs.readFileSync(notMaterialPath, "utf8")) : [])
    .flatMap((r) => [`${r.row_slug}|${r.metal_species}`, `${r.row_slug}|${r.metal_species.replace(/-total$/, "-VI")}`]),
)
const screenPath = path.join(REPO, "data/evidence/standards-process-screens.csv")
const screens = new Map(
  (fs.existsSync(screenPath) ? parseCsv(fs.readFileSync(screenPath, "utf8")) : [])
    .map((r) => [`${r.row_slug}|${r.metal_species.replace(/-total$/, "-VI")}`, r.screen_value_ppb]),
)

// Native basis of a product row (mirrors the pooling engine's rule).
function nativeBasis(slug) {
  if (/-powder/.test(slug)) return "powder"
  if (/-rtf|-liquid|concentrated/.test(slug)) return "prepared"
  return "powder"
}
// Convert a legal ML (in its own basis) into the product's native basis.
function toNative(value, mlBasis, native) {
  const b = (mlBasis || "").toLowerCase()
  const mlIsPrepared = /portion ordinarily|as consumed|ready to use|liquid|ready-to|single-strength/.test(b)
  const mlIsPowder = /placed on the market|as placed|product as sold|dry|powder/.test(b) || !mlIsPrepared
  if (native === "powder" && mlIsPrepared) return { value: value * RECON, note: `×${RECON} as-consumed→powder` }
  if (native === "prepared" && mlIsPowder && !mlIsPrepared) return { value: value / RECON, note: `÷${RECON} powder→as-consumed` }
  return { value, note: "same basis" }
}

function round2sig(x) {
  if (x == null) return null
  if (x >= 1000) return Math.round(x / 100) * 100
  if (x >= 100) return Math.round(x / 10) * 10
  if (x >= 10) return Math.round(x)
  if (x >= 1) return Math.round(x * 10) / 10
  return Math.round(x * 100) / 100
}

function strictestGovLimit(slug, analyte, native) {
  // All crosswalked government MLs for this product row + analyte, in native basis.
  const rows = crosswalk.filter((c) => c.product_slug === slug && c.metal_species === analyte)
  let best = null
  for (const c of rows) {
    const lim = limitsById.get(c.regulatory_limit_id)
    if (!lim) continue
    const raw = num(lim.value_ug_kg)
    if (raw == null) continue
    const conv = toNative(raw, lim.basis, native)
    if (best == null || conv.value < best.value) {
      best = { value: conv.value, id: c.regulatory_limit_id, jurisdiction: lim.jurisdiction, note: conv.note, published: raw, publishedBasis: lim.basis }
    }
  }
  return best
}

for (const slug of products) {
  const native = nativeBasis(slug)
  console.log(`\n### ${slug}  (native basis: ${native})`)
  console.log(`${"analyte".padEnd(8)}${"standard".padStart(9)}  ${"source".padEnd(28)}basis`)
  for (const a of PANEL) {
    // Not-material determination wins over everything (e.g. Cr-VI): no health limit, screen only.
    if (notMaterial.has(`${slug}|${a}`)) {
      const scr = screens.get(`${slug}|${a}`)
      console.log(`${a.padEnd(8)}${"n/m".padStart(9)}  ${"not material (health)".padEnd(28)}${scr ? `process screen ${scr} ppb` : ""}`)
      continue
    }
    const gov = strictestGovLimit(slug, a, native)
    const aggRow = aggBy.get(`${slug}|${a}`)
    const occ = aggRow ? num(aggRow.pooled_p97) : null // occurrence percentile (stratified P97)
    let std = null, src = "", cite = ""
    if (TIER1_TOXIC.has(a)) {
      if (gov && occ != null) { std = Math.min(gov.value, occ); src = occ < gov.value ? "occurrence (beats law)" : `gov-limit (${gov.jurisdiction})`; cite = occ < gov.value ? "occurrence" : gov.id }
      else if (occ != null) { std = occ; src = "occurrence (no gov ML)"; cite = "occurrence" }
      else if (gov) { std = gov.value; src = `gov-limit (${gov.jurisdiction})`; cite = gov.id }
    } else {
      if (gov) { std = gov.value; src = `gov-limit (${gov.jurisdiction})`; cite = gov.id }
      else if (occ != null) { std = occ; src = "occurrence-fallback (no gov ML)"; cite = "occurrence" }
      else { src = "no gov ML, no occurrence — not-material or gap"; }
    }
    const shown = std == null ? "—" : String(round2sig(std))
    console.log(`${a.padEnd(8)}${shown.padStart(9)}  ${src.padEnd(28)}${gov ? gov.note : ""}${cite ? "  [" + cite + "]" : ""}`)
  }
}
