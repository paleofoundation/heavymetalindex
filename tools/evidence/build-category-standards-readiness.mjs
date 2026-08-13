#!/usr/bin/env node
// RETIRED 2026-08-12: category readiness may not be inferred from external occurrence percentiles.
console.error("RETIRED: use government-limit compiler completeness, not occurrence-based standards readiness.")
process.exit(2)
// build-category-standards-readiness.mjs
//
// The "is this category ready for its standards manual yet?" monitor.
//
// Answers the standing question: when enough trustworthy evidence exists for a
// category, flag it so the Program Manual gets produced — instead of relying on
// anyone remembering to check. Runs in the evidence:standards-gaps chain after
// the pooler, so the verdict refreshes every time the evidence base moves.
//
// For each locked Cat 6/7 row, every PRIORITY metal (the row's
// primary_metals_of_concern) must be RESOLVED:
//   - literature-baseline : pooled P97 present AND sensitivity band stable AND
//     a candidate value AND not sitting in extraction_review.csv (untrusted), OR
//   - regulatory-alignment: candidate value bound to a loaded regulatory cap.
// Anything else (provisional/unstable sensitivity, flagged-for-review, no data)
// is PENDING and blocks the row.
//
// A category is MANUAL-READY when every locked row is row-ready (all priority
// metals resolved). Output names the exact next command and the blocking list.
//
// Outputs:
//   data/evidence/category-standards-readiness.md   (human; surfaced by FRANK)
//   data/evidence/category-standards-readiness.json  (machine)

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
// Shared cell-level classifier so the per-ingredient scorecard (D11) and this
// category monitor can never silently disagree.
import { classifyCell } from "./lib/standards-readiness.mjs"

const repoRoot = process.cwd()
const evidenceDir = path.join(repoRoot, "data/evidence")
const productDir = path.join(repoRoot, "wiki/products")
const distPath = path.join(evidenceDir, "hmtc_aggregate_distributions.csv")
const reviewPath = path.join(evidenceDir, "extraction_review.csv")

// Display names for known HMTc categories; any locked category not listed gets a
// generic "Category N" label. The monitor now covers EVERY category that has locked
// rows, discovered dynamically below — it is no longer hardcoded to {6,7}, which
// went stale after the taxonomy v2.2 recut dissolved Cat 7 into 24/30-35.
const CATEGORY_NAMES = {
  1: "Infant and Child Foods", 3: "Grains, Cereals, and Rice Products",
  6: "Seafood", 24: "Dairy and Milk Products", 30: "Culinary Oils and Fats",
  31: "Sweeteners and Syrups", 32: "Condiments, Sauces, and Vinegars",
  33: "Cocoa and Chocolate", 34: "Herbs, Spices, Seasonings, and Salt",
}

// ---- load pooled distributions ----
function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.length)
  const H = split(lines[0])
  return lines.slice(1).map((l) => { const c = split(l); const o = {}; H.forEach((h, i) => (o[h] = c[i] ?? "")); return o })
}
function split(line) {
  const out = []; let cur = ""; let q = false
  for (let i = 0; i < line.length; i++) { const ch = line[i]
    if (q) { if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ } else if (ch === '"') q = false; else cur += ch }
    else { if (ch === '"') q = true; else if (ch === ",") { out.push(cur); cur = "" } else cur += ch } }
  out.push(cur); return out
}
const dist = fs.existsSync(distPath) ? parseCsv(fs.readFileSync(distPath, "utf8")) : []
const cell = new Map() // `${slug}|${metal}` -> row
for (const r of dist) cell.set(`${r.product_slug}|${r.metal_species}`, r)

// ---- Publication QC Gate verdicts (the missing cross-check) --------------------
// The cell classifier (classifyCell) answers "is there a printable value?" and
// intentionally treats small-n literature-baseline cells as provisional-but-
// shippable (the butter/seafood pattern). It does NOT read the Publication QC
// Gate, so a category whose priority toxics are QC-HELD or — worse — carry a
// literature-baseline value with NO mapped government cap (a Method v2.0 lookup
// gap) was still scored MANUAL-READY. That green-lit honey, whose lead pool P97
// is ~1410 ppb (n=155, stable): with no cap mapped the briefing would PUBLISH a
// firm honey-lead limit ~14x the strictest sovereign ML (Israel/EU honey Pb 100).
// This monitor now folds the gate verdict into readiness so the signal cannot
// green-light a category that would publish an indefensible or un-looked-up
// toxic. Held cells rendering "adjudication pending" remain shippable (they do
// not block); the two things that DO block a priority cell are (1) a QC HOLD and
// (2) a big-4 toxic with no mapped cap (C1b), which Method v2.0 requires resolved
// by a government-ML lookup before publication.
const qcPath = path.join(evidenceDir, "standards-qc-gate-report.csv")
const qcByCell = new Map() // `${slug}|${metal}` -> { verdict, reasons, rationale }
if (fs.existsSync(qcPath)) {
  for (const r of parseCsv(fs.readFileSync(qcPath, "utf8")))
    qcByCell.set(`${r.product_slug}|${r.metal_species}`, {
      verdict: String(r.verdict_level || ""),
      reasons: String(r.reasons || ""),
      rationale: String(r.rationale || ""),
    })
}
// The four Tier-1 toxics + their species aliases, per CLAUDE.md Part 14. These are
// the analytes for which Method v2.0 mandates a government-ML lookup (C1b guard).
const BIG4_TOXIC = new Set(["Pb", "Cd", "iAs", "tAs", "MeHg", "tHg"])
// A priority cell is a PUBLICATION BLOCKER (not merely provisional) when the gate
// holds it, when it is a toxic riding a literature-baseline value with no cap, or
// when the outlier-adjudication register carries a non-cleared hold (which the
// briefing renders as "adjudication pending" no matter what the gate says).
function qcBlocker(slug, metal) {
  const adj = adjByCell.get(`${slug}|${metal}`)
  if (adj) return `${metal} adjudication-hold (${adj.slice(0, 90)})`
  const qc = qcByCell.get(`${slug}|${metal}`)
  if (!qc) return null
  if (qc.verdict === "HOLD") {
    const why = (qc.reasons.split("|")[0] || "QC HOLD").trim().slice(0, 80)
    return `${metal} QC-HELD (${why})`
  }
  if (BIG4_TOXIC.has(metal) && /C1b-cap-completeness/.test(qc.reasons))
    return `${metal} toxic, no mapped government cap — Method v2.0 lookup incomplete`
  return null
}
// Outlier-adjudication register: a non-cleared hold means the briefing generator
// renders that cell "adjudication pending" REGARDLESS of the QC gate (a governance
// or data-quality hold the gate does not model). The gate can PASS a cap-bound
// cell whose row still carries a Karen-reserved governance hold — e.g. chocolate
// Pb is regulatory-alignment PASS after cap-mapping, yet the register holds it
// "NOT SHIPPABLE as a single blended row … dark/milk subcategory split … a
// governance/taxonomy decision for Karen." The manual (briefing) treats it as
// pending; readiness must too, or it green-lights a manual whose flagship renders
// pending. A `cleared…` disposition is resolved and does not block.
const adjPath = path.join(evidenceDir, "standards-outlier-adjudication.csv")
const adjByCell = new Map() // `${slug}|${metal}` -> disposition (first non-cleared)
if (fs.existsSync(adjPath)) {
  for (const r of parseCsv(fs.readFileSync(adjPath, "utf8"))) {
    if (/^cleared/i.test(r.disposition || "")) continue
    const key = `${r.row_slug}|${r.metal_species}`
    if (!adjByCell.has(key)) adjByCell.set(key, String(r.disposition || r.flag || "under review"))
  }
}
// Categories with a bound Program Manual already in build/. Display hint so a
// shipped category with documented pending cells reads "BUILT (with caveats)",
// not "NOT READY" — the caveats were accepted at publication, by exception.
const BUILT_MANUAL_CATS = new Set([1, 6, 24, 30, 34])

// Cells flagged high-for-review. A flag means "a human must confirm this is real,
// not a unit error." Once the note shows it was rechecked against the source
// (Codex re-extraction verification) or adjudicated (outlier pass), the cell has
// been reviewed and is no longer untrusted. Only an UNreviewed flag blocks.
const flaggedUnreviewed = new Set()
if (fs.existsSync(reviewPath)) {
  for (const r of parseCsv(fs.readFileSync(reviewPath, "utf8"))) {
    const note = String(r.note || "")
    const reviewed = /Rechecked/i.test(note) || /adjudicat/i.test(note)
    if (!reviewed) flaggedUnreviewed.add(`${r.row_slug}|${r.metal_species}`)
  }
}
const flagged = flaggedUnreviewed

// ---- every locked row across all categories + its priority metals ----
const rowsByCat = {}
for (const f of fs.readdirSync(productDir)) {
  if (!f.endsWith(".md") || f === "index.md") continue
  const d = matter(fs.readFileSync(path.join(productDir, f), "utf8")).data
  if (d.products_status !== "locked") continue
  const cat = Number(d.hmtc_category)
  if (!Number.isFinite(cat)) continue
  const slug = String(d.category || path.basename(f, ".md"))
  const metals = Array.isArray(d.primary_metals_of_concern) ? d.primary_metals_of_concern.map(String) : []
  ;(rowsByCat[cat] ||= []).push({ slug, title: d.hmtc_subcategory_name || d.title || slug, metals })
}

// Classifier lifted to tools/evidence/lib/standards-readiness.mjs (classifyCell)
// and shared with the per-ingredient completeness scorecard.
function classify(slug, metal) {
  const key = `${slug}|${metal}`
  return classifyCell(cell.get(key), flagged.has(key))
}

const report = {}
const md = ["# Category standards readiness", "", `_Generated by build-category-standards-readiness.mjs. Surfaced by FRANK._`, ""]

const lockedCats = Object.keys(rowsByCat).map(Number).sort((a, b) => a - b)
for (const cat of lockedCats) {
  const name = CATEGORY_NAMES[cat] || `Category ${cat}`
  const rows = rowsByCat[cat] || []
  const rowStatuses = rows.map((row) => {
    const cells = row.metals.map((m) => ({ metal: m, ...classify(row.slug, m) }))
    const pending = cells.filter((c) => c.state === "pending")
    // Publication blockers surface the QC-gate reality the cell classifier omits.
    const qcBlockers = row.metals.map((m) => qcBlocker(row.slug, m)).filter(Boolean)
    const rowReady = pending.length === 0 && qcBlockers.length === 0 && row.metals.length > 0
    return { ...row, ready: rowReady, cells, pending, qcBlockers }
  })
  const ready = rowStatuses.filter((r) => r.ready)
  const manualReady = rows.length > 0 && ready.length === rows.length
  const built = BUILT_MANUAL_CATS.has(cat)
  const allBlockers = rowStatuses.flatMap((r) =>
    [...r.pending.map((p) => `${r.slug}:${p.metal} (${p.why})`), ...r.qcBlockers.map((b) => `${r.slug}:${b}`)])
  report[cat] = {
    name, locked_rows: rows.length, ready_rows: ready.length,
    manual_ready: manualReady, manual_built: built,
    publication_blockers: allBlockers,
    rows: rowStatuses.map((r) => ({
      slug: r.slug, ready: r.ready,
      blocking: [...r.pending.map((p) => `${p.metal}: ${p.why}`), ...r.qcBlockers],
    })),
  }

  md.push(`## Category ${cat} — ${name}`, "")
  const headline = built
    ? `🛠️ **BUILT** — a Program Manual exists in build/. ` +
      (allBlockers.length
        ? `${allBlockers.length} priority cell(s) render *adjudication pending* / lack a mapped cap (documented, accepted at publication): ${allBlockers.join("; ")}.`
        : `all priority cells resolved and QC-clean.`)
    : manualReady
      ? `✅ **MANUAL-READY** — run \`node tools/standards/build-category-manual.mjs --category=${cat}\` (needs a CATEGORIES config + category-substitutions/${cat}.json), then render. Priority cells all resolved AND QC-gate-clean.`
      : `⛔ **NOT MANUAL-READY** — ${allBlockers.length} priority publication blocker(s). A QC-HELD toxic renders *adjudication pending*; a no-mapped-cap toxic needs the Method v2.0 government-ML lookup completed before it publishes a defensible value.`
  md.push(`**${ready.length} of ${rows.length} locked rows publication-ready.** ` + headline, "")
  for (const r of rowStatuses) {
    if (r.ready) md.push(`- ✅ ${r.slug} — all priority metals resolved and QC-clean`)
    else {
      const parts = [...r.pending.map((p) => `${p.metal} (${p.why})`), ...r.qcBlockers]
      md.push(`- ⛔ ${r.slug} — blocked: ${parts.join("; ") || "no priority metals set"}`)
    }
  }
  md.push("")
}

fs.writeFileSync(path.join(evidenceDir, "category-standards-readiness.json"), JSON.stringify(report, null, 2) + "\n")
fs.writeFileSync(path.join(evidenceDir, "category-standards-readiness.md"), md.join("\n"))

for (const [cat, r] of Object.entries(report)) {
  const status = r.manual_built ? "BUILT" : r.manual_ready ? "MANUAL-READY" : "not ready"
  const caveat = r.publication_blockers.length ? ` (${r.publication_blockers.length} priority blocker/caveat)` : ""
  console.log(`Cat ${cat} (${r.name}): ${r.ready_rows}/${r.locked_rows} rows publication-ready — ${status}${caveat}`)
}
console.log(`Wrote data/evidence/category-standards-readiness.{md,json}`)
