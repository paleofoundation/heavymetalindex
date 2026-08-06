#!/usr/bin/env node
// Per-country limit matrix for infant formula — the "show your work" behind Method v3.0.
// For each subcategory (powder cow/soy, ready-to-feed cow/soy) and each analyte, emit every
// government's limit normalized to that subcategory's basis, mark the lowest = the HMTc limit,
// and separately list every limit exactly as its government states it (provenance appendix).
//
// Basis normalization (1:7 powder:as-consumed reconstitution, infant-formula-specific):
//   target = as_sold(powder):     as_sold direct ; as_consumed × 7   (marked ᶜ)
//   target = as_consumed(liquid): as_consumed direct ; as_sold ÷ 7   (marked ᶜ)
// A country's DIRECT limit in the target basis always wins over a converted one.

import fs from "node:fs"
import path from "node:path"
const REPO = process.cwd()
const RECON = 7
const rows = parseCsv(fs.readFileSync(path.join(REPO, "data/evidence/regulatory_limits.csv"), "utf8"))
// LOQ ceilings for cells no government regulates. HMTc sets a limit for EVERY
// analyte — where a government lookup returns nothing and no occurrence pool
// exists, the limit is the analytical LOQ (non-detect), not "monitored, not
// limited". Values live in method-loq-ceilings.json (confirm against the method
// spec). loqFor() resolves an analyte's LOQ ceiling via its species tokens.
const LOQ = JSON.parse(fs.readFileSync(path.join(REPO, "data/workbench/standards/method-loq-ceilings.json"), "utf8")).ceilings_ug_kg
const loqFor = (a) => (a && a.tok ? a.tok.map((t) => LOQ[t]).find(Boolean) : null)

function parseCsv(t) { const L = t.replace(/\r/g, "").trim().split("\n"); const H = sp(L[0]); return L.slice(1).map((l) => Object.fromEntries(sp(l).map((v, i) => [H[i], v]))) }
function sp(line) { const o = []; let c = "", q = false; for (const ch of line) { if (ch === '"') q = !q; else if (ch === "," && !q) { o.push(c); c = "" } else c += ch } o.push(c); return o.map((s) => s.replace(/^"|"$/g, "")) }
const n = (v) => { const x = Number(v); return Number.isFinite(x) ? x : null }
const draft = (x) => /draft|not for implementation/i.test((x.status || "") + " " + (x.notes || ""))

// formula rows (exclude cereal/complementary/meal/juice; canned handled separately for Sn)
const FORM = rows.filter((x) => /formula|infant milk substitute/i.test(x.product_scope) &&
  !/cereal|complementary|weaning|transition|meal|juice/i.test(x.product_scope) && !draft(x) && x.basis_class)
const canned = (x) => /canned/i.test(x.product_scope)
// broad dairy limit (e.g. China milk-powder total-Cr) — a fallback, not a formula-specific limit; powder only.
// Matches the dairy-category phrasing itself, so a "…also applied to formula" note in scope doesn't defeat it.
const broadDairy = (x) => /milk powder and modified milk|general dairy|modified milk powder/i.test(x.product_scope)

// compact 2-letter codes so a 14-column matrix fits portrait letter; legend printed once
const COUNTRY = { EU: "EU", UK: "UK", CODEX: "CX", CA: "CA", CN: "CN", IN: "IN", BR: "BR", KR: "KR", GSO: "GS", "AU-NZ": "AN", US: "US" }
const LEGEND = "CX = Codex · CA = Canada · CN = China · IN = India · BR = Brazil · KR = South Korea · GS = Gulf (GSO) · AN = Australia/NZ · US = US-FDA"
const COLS = Object.keys(COUNTRY)
const SUBCATS = [
  { key: "powder-cow", basis: "as_sold", soy: "non-soy", label: "Powder · cow-milk" },
  { key: "powder-soy", basis: "as_sold", soy: "soy", label: "Powder · soy" },
  { key: "rtf-cow", basis: "as_consumed", soy: "non-soy", label: "Ready-to-feed · cow-milk" },
  { key: "rtf-soy", basis: "as_consumed", soy: "soy", label: "Ready-to-feed · soy" },
]
// display analyte -> register token(s)
const ANALYTES = [
  { disp: "Lead (Pb)", sym: "Pb", tok: ["Pb"] },
  { disp: "Inorganic arsenic (iAs)", sym: "iAs", tok: ["iAs"] },
  { disp: "Cadmium (Cd)", sym: "Cd", tok: ["Cd"] },
  { disp: "Mercury (tHg)", sym: "Hg", tok: ["tHg", "MeHg", "Hg"] },
  { disp: "Nickel (Ni)", sym: "Ni", tok: ["Ni"] },
  { disp: "Aluminium (Al)", sym: "Al", tok: ["Al"], keepSplit: true }, // soy formula is inherently Al-rich → keep the law's cow/soy split
  { disp: "Tin (Sn)", sym: "Sn", tok: ["Sn"] },
  { disp: "Total chromium (Cr)", sym: "Cr", tok: ["Cr-total", "Cr"] },
]

// value of a country's limit for (analyte, subcat), normalized to subcat basis; {v, conv, raw, rawbasis, fallback} or null
function cell(country, toks, sub) {
  let cand = FORM.filter((x) => x.jurisdiction === country && toks.includes(x.metal_species) &&
    (x.soy_class === "both" || x.soy_class === sub.soy))
  cand = cand.filter((x) => !canned(x))                          // canned is a separate product form (see canned note)
  cand = cand.filter((x) => !(broadDairy(x) && sub.basis === "as_consumed")) // broad-dairy powder fallback → powder only
  if (!cand.length) return null
  const fb = cand.every(broadDairy)                              // this cell rests only on a broad-dairy fallback
  const pick = (list) => { const s = list.filter((x) => x.soy_class === sub.soy); return (s.length ? s : list) }
  const direct = pick(cand.filter((x) => x.basis_class === sub.basis))
  if (direct.length) { const v = Math.min(...direct.map((x) => n(x.value_ug_kg))); return { v, conv: false, raw: v, rawbasis: sub.basis, fallback: fb } }
  const other = pick(cand)
  const rawv = Math.min(...other.map((x) => n(x.value_ug_kg)))
  const v = sub.basis === "as_sold" ? rawv * RECON : rawv / RECON
  return { v: Math.round(v), conv: true, raw: rawv, rawbasis: other[0].basis_class, fallback: fb } // whole µg/kg for a published limit
}

// ---- headline: the picks themselves (subcategory × analyte) ----
function pickFor(sub, a) {
  const withVal = COLS.map((c) => ({ c, r: cell(c, a.tok, sub) })).filter((x) => x.r)
  if (!withVal.length) return { v: null }
  const min = withVal.reduce((m, x) => (x.r.v < m.r.v ? x : m))
  return { v: min.r.v, src: COUNTRY[min.c], fallback: min.r.fallback }
}
// merged single-category pick per product form = the LOWEST regulatory number across cow + soy.
// (Adopt-lowest, not adopt-higher: a single category number at or below every national law for both
//  formulations, so it never certifies a product above its own legal ceiling.)
const FORMS = [
  { key: "powder", label: "Powder (as-sold)", subs: ["powder-cow", "powder-soy"] },
  { key: "rtf", label: "Ready-to-feed (as-consumed)", subs: ["rtf-cow", "rtf-soy"] },
]
function mergedPick(form, a) {
  const picks = form.subs.map((sk) => pickFor(SUBCATS.find((s) => s.key === sk), a)).filter((p) => p.v != null)
  if (!picks.length) return { v: null }
  return picks.reduce((m, p) => (p.v < m.v ? p : m))
}
let md = ""
// ---- frontmatter + title + method intro (deliverable wrapper) ----
md += `---
title: "Infant Formula Heavy-Metal Standard"
subtitle: "Method v3.0 — the strictest government limit in the world, for every analyte"
overline: "HMTc Certification Standard · Institute of Contaminant Standards"
author: "Institute of Contaminant Standards"
author_title: "Operator of the Heavy Metal Tested & Certified program"
date: "2026-08-03"
slug: "hmtc-infant-formula-standard-v3"
---

The Heavy Metal Tested & Certified (HMTc) program certifies infant formula against **the single
strictest maximum level set by any government in the world** for each heavy metal, in the product's
own basis. Where two governments regulate the same metal, the tighter number binds; where the
strictest limit is set as a ready-to-feed (as-consumed) value, it is converted to powder basis
across the 1:7 reconstitution ratio before comparison, and vice versa. The certification limit is
therefore never looser than any national law, and in most cells it is tighter than the law a given
brand's home market would apply.

This document shows every government's limit, per subcategory, so that a brand, a retailer, a
regulator, or opposing counsel can check the derivation directly. Each certification number is the
lowest comparable value in its row; nothing is asserted that a sovereign government has not already
put in force. The prior occurrence-percentile methodology is retired: it repeatedly produced
defects (basis mis-conversions, poisoned pools, dead branches), and a lookup against sovereign law
is both faster and unimpeachable.

## The standard — the lowest government limit in the world (µg/kg)\n\n`
md += "One number per analyte, per product form: **the strictest maximum level any government sets, anywhere.** "
md += "The cow-milk and soy formulations are an internal calculation step, not a published distinction. Where the "
md += "law splits them (cadmium, nickel), the published limit is the **lower** of the two, so the single category number "
md += "sits at or below every national law for both formulations and never certifies a product above its own legal "
md += "ceiling. Aluminium is the one exception — soy formula is inherently aluminium-rich, so it keeps the law's own "
md += "cow / soy split rather than penalise soy for a trait its regulator already accounts for (see the table note).\n\n"
md += "| Analyte | Powder (as-sold) | Ready-to-feed (as-consumed) |\n|---|--:|--:|\n"
const fmtCell = (x, a) => {
  if (x != null && x.v != null) return fmt(x.v) + (x.fallback ? "ᵈ" : "")
  const l = loqFor(a)
  return l ? "≤" + fmt(l.value) + "ᴸ" : "≤LOQ ᴸ" // never blank — every analyte gets a limit
}
const subPick = (form, soy, a) => pickFor(SUBCATS.find((s) => s.key === `${form}-${soy}`), a)
for (const a of ANALYTES) {
  if (a.keepSplit) {
    md += `| ${a.disp} | ${fmtCell(subPick("powder", "cow", a), a)} cow / ${fmtCell(subPick("powder", "soy", a), a)} soy | ${fmtCell(subPick("rtf", "cow", a), a)} cow / ${fmtCell(subPick("rtf", "soy", a), a)} soy |\n`
  } else {
    md += `| ${a.disp} | ${fmtCell(mergedPick(FORMS[0], a), a)} | ${fmtCell(mergedPick(FORMS[1], a), a)} |\n`
  }
}
md += "\n*ᴸ = LOQ ceiling: no government sets a formula limit for this analyte, so HMTc publishes a non-detect ceiling at the method limit of quantification (values in method-loq-ceilings.json, confirm against the testing method), with reflex speciation on any detection. "
md += "ᵈ = broad-dairy fallback, no formula-specific limit exists. Tin is the FSSAI (India) as-sold value, confirmed against the 2011 primary text. "
md += "**Aluminium is published as the law's own cow / soy split**: soy formula is inherently aluminium-rich — which is why regulators set the soy limit at 2× cow — so adopting the lower number would penalise soy for a trait its own regulator already accounts for. Every other analyte is a single lowest-worldwide number. "
md += "The per-country derivation for every number — including the cow/soy split that feeds it — is the matrix that follows.*\n\n"
const summaryJson = Object.fromEntries(FORMS.map((f) => [f.key, Object.fromEntries(ANALYTES.map((a) =>
  a.keepSplit ? [a.tok[0], { cow: subPick(f.key, "cow", a).v, soy: subPick(f.key, "soy", a).v }] : [a.tok[0], mergedPick(f, a).v]))]))
fs.writeFileSync(path.join(REPO, "data/workbench/standards/infant-formula-v3-picks.json"), JSON.stringify(summaryJson, null, 2))

// ---- method / statuses ----
md += `## How certification works against these limits

**Tier 1 metals — lead, inorganic arsenic, cadmium, mercury — are zero-tolerance.** A single lot
over the limit blocks certification. These are the metals with no safe intake for infants, so the
program holds them to the strictest world limit with no transitional allowance.

**Tier 2 metals — nickel, aluminium, tin, hexavalent chromium — carry a transitional allowance.**
A product measuring up to **150 % of the limit** earns transitional certification (Status B) while
it remediates, because these metals have established tolerable intakes and their elevations are
often supply-chain-driven rather than avoidable at will. Above 150 % is probation; the allowance is
transitional, not permanent.

**A legal violation always blocks certification, regardless of HMTc status.** Because every limit
here is a government maximum level, any lot that fails the *program* limit by more than the Tier 2
allowance is at or near a real legal exceedance in the strictest jurisdiction — the certification
gate and the regulatory gate move together.

| Certification status | Meaning |
|---|---|
| A — Full | All analytes ≤ 100 % of limit |
| B — Transitional | A Tier 2 metal between 100–150 % of limit, under a remediation plan |
| C — Probation | 150–200 %, or any Tier 1 exceedance |
| D — Suspension | > 200 % of limit |
| E — Revocation | Repeated or unremediated failure |

## Per-country government limits, by subcategory

${LEGEND}.

Each cell is that government's infant-formula limit **normalized to the subcategory's basis** so the columns are comparable. `
md += "ᶜ = converted across the 1:7 powder↔as-consumed reconstitution boundary (the government's own limit is in the other basis; see the provenance table). "
md += "Blank = that government sets no formula limit for the analyte. **The HMTc limit is the lowest comparable value in the row.**\n\n"

for (const sub of SUBCATS) {
  md += `### ${sub.label} (${sub.basis === "as_sold" ? "powder, as-sold basis" : "as-consumed basis"}, µg/kg)\n\n`
  // which countries have any data in this subcat
  const active = COLS.filter((c) => ANALYTES.some((a) => cell(c, a.tok, sub)))
  md += "| Analyte | " + active.map((c) => COUNTRY[c]).join(" | ") + " | **HMTc limit** | Binding source |\n"
  md += "|---|" + active.map(() => "--:").join("|") + "|--:|---|\n"
  for (const a of ANALYTES) {
    const cells = active.map((c) => ({ c, r: cell(c, a.tok, sub) }))
    const withVal = cells.filter((x) => x.r)
    let hmtc = "—", src = ""
    if (withVal.length) {
      const min = withVal.reduce((m, x) => (x.r.v < m.r.v ? x : m))
      hmtc = fmt(min.r.v); src = COUNTRY[min.c] +
        (min.r.conv ? ` (${fmt(min.r.raw)} ${min.r.rawbasis === "as_consumed" ? "as-consumed ×7" : "powder ÷7"})` : "") +
        (min.r.fallback ? " *(broad-dairy fallback)*" : "")
    } else {
      // No government limit anywhere → HMTc still sets a limit: the LOQ ceiling
      // (non-detect). Never "monitored, not limited".
      const l = loqFor(a)
      hmtc = l ? "≤" + fmt(l.value) + "ᴸ" : "≤LOQ ᴸ"
      src = l ? "LOQ ceiling — non-detect (no government limit worldwide)" : "LOQ ceiling — pending method LOQ"
    }
    md += `| ${a.disp} | ` + cells.map((x) => x.r ? fmt(x.r.v) + (x.r.conv ? "ᶜ" : "") + (x.r.fallback ? "ᵈ" : "") : "").join(" | ") + ` | **${hmtc}** | ${src} |\n`
  }
  // canned-tin note per subcategory (canned is a distinct product form, excluded above)
  const cannedSn = FORM.filter((x) => x.metal_species === "Sn" && canned(x)).map((x) => `${x.jurisdiction} ${x.value_ug_kg}`)
  md += `\n*Canned ${sub.label.includes("soy") ? "soy " : ""}formula tin (separate product form): ${[...new Set(cannedSn)].join(", ")} µg/kg. ᵈ = broad-dairy fallback (no formula-specific limit exists). ᶜ = basis-converted.*\n\n`
}
function fmt(v) { return Number.isInteger(v) ? String(v) : String(v) }

// ---- cells no government regulates: HMTc still sets a limit (LOQ ceiling) ----
const hg = LOQ.tHg, crvi = LOQ["Cr-VI"]
md += `## Cells no government regulates — set at the LOQ, not left open

HMTc sets a limit for every analyte. Where the tightest-government lookup returns nothing and no
occurrence pool exists to compute a percentile, the limit is the analytical limit of quantification:
the analyte must be non-detectable. This is the ratchet doing its job precisely where regulators have
not — the same mechanism the seafood standards already use — not an omission.

1. **Mercury (all subcategories) — LOQ ceiling ≤${hg ? hg.value : "TBD"} µg/kg.** No government sets an
   infant-formula mercury limit anywhere (the nearest is China's 20 µg/kg for *canned complementary
   foods*, a different product). Mercury — as methylmercury — is a Tier-1 zero-tolerance toxic, so the
   correct posture is non-detect: the certification ceiling is the method LOQ (${hg ? hg.value : "TBD"}
   µg/kg total mercury), with reflex methylmercury speciation on any detection. *${hg ? "Provisional pending confirmation against the testing method LOQ." : ""}*

2. **Hexavalent chromium — LOQ ceiling ≤${crvi ? crvi.value : "TBD"} µg/kg.** No government sets a Cr-VI
   food limit worldwide (the only Cr-VI limits are for drinking water — e.g. US-CA ${crvi ? crvi.value : "10"} µg/kg,
   the reference point). Cr-VI largely reduces to Cr-III in the formula matrix, so a non-detect ceiling
   is both protective and near-always met. Total chromium is separately held to the government value
   (China 2,000 µg/kg for milk powder, ᵈ) with reflex Cr-VI speciation on a 100 µg/kg total-chromium
   anomaly screen. *${crvi ? "Provisional pending confirmation against the speciated Cr-VI method LOQ." : ""}*

3. **Tin — 5,000 µg/kg (India, FSSAI), as-sold.** India is the only government setting a non-canned
   infant-formula tin limit. Its basis is now settled against the FSSAI 2011 primary text: the metal
   table header reads "Parts per Million by weight" (as-sold), and the regulation carries no
   reconstitution instruction. Canned formula is separately held to the 50,000 µg/kg world consensus
   (a container-migration limit).

Every other analyte is a firm, citable government maximum level. No cell is left unset.

## Provenance — every limit exactly as its government states it

`
md += "| Analyte | Gov | Limit (µg/kg) | Basis (as stated) | Product scope | Source |\n|---|---|--:|---|---|---|\n"
const ord = ["Pb", "iAs", "tAs", "Cd", "tHg", "MeHg", "Ni", "Al", "Sn", "Cr-total", "Cr"]
const prov = [...FORM].sort((x, y) => (ord.indexOf(x.metal_species) - ord.indexOf(y.metal_species)) || x.jurisdiction.localeCompare(y.jurisdiction))
for (const x of prov) md += `| ${x.metal_species} | ${x.jurisdiction} | ${x.value_ug_kg} | ${x.basis} | ${x.product_scope.replace(/\|/g, "/").slice(0, 70)} | ${(x.regulation_page || x.authority || "").slice(0, 40)} |\n`

md += `\n## Provenance and review status

Every value above is drawn from \`data/evidence/regulatory_limits.csv\` (${rows.length}-row worldwide
regulatory register). China, Brazil, India, US-FDA, and Codex infant-food rows are confirmed against
primary government instruments (marked PRIMARY-CONFIRMED in the register, 2026-08-03); the remaining
jurisdictions (EU, UK, Australia/NZ, Canada, Gulf, South Korea) are web-verified against the official
instrument and pending a primary-text cross-check. The two provisional cells above (India tin basis;
the Cr-VI/mercury monitored-not-limited determinations) and the primary-text cross-check on the
remaining jurisdictions are the items outstanding before external publication. **This standard is
ready for legal-counsel review; it is not yet counsel-cleared.**

*The Institute of Contaminant Standards operates the Heavy Metal Tested & Certified program. This is
certification-program material, published separately from the Heavy Metal Index literature reference
at heavymetalindex.com.*
`

fs.writeFileSync(path.join(REPO, "data/workbench/standards/infant-formula-per-country-matrix.md"), md)
fs.writeFileSync(path.join(REPO, "data/workbench/standards/hmtc-infant-formula-standard-v3.md"), md)
process.stdout.write("wrote deliverable: data/workbench/standards/hmtc-infant-formula-standard-v3.md (" + md.length + " chars)\n")

// ---- monograph master markdown (renders through the Program Manual book template) ----
const contentBody = md
  .replace(/^---\n[\s\S]*?\n---\n+/, "")                              // strip briefing YAML frontmatter
  .replace(/^(#{2,3}) /gm, (m, h) => "#".repeat(h.length - 1) + " ")  // promote ## -> # (chapters), ### -> ## (sections)
const titlePage = `# Heavy Metal Tested & Certified (HMTc)

## Infant Formula Program Manual

### 2026 Edition · Method v3.0

---

**Institute of Contaminant Standards** — Program Operator

Institute of Contaminant Standards (ICS)
Orlando, Florida

---

*The certification limit for each analyte is the lowest maximum level set by any government in the world, in the product form's own basis.*

# Table of Contents

TYPSTOUTLINEPLACEHOLDER

`
fs.writeFileSync(path.join(REPO, "data/workbench/standards/hmtc-infant-formula-manual-master.md"), titlePage + contentBody)
process.stdout.write("wrote monograph master: data/workbench/standards/hmtc-infant-formula-manual-master.md\n")
