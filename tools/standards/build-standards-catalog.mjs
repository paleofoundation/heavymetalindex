#!/usr/bin/env node
// build-standards-catalog.mjs
//
// Builds the GATED, machine-readable HMTc standards catalog for the separate
// certification website (heavymetaltested.com). Reads the staff standards data
// (pooled distributions, outlier register, product-page frontmatter, taxonomy)
// and emits one entry per LOCKED product subcategory, with every HMTc-10 panel
// analyte graded "published" (firm, defensible value) or "in_development".
//
// LITIGATION-CRITICAL GATING: a published number must survive cross-examination,
// so a row/analyte that fails ANY of the 5 shipping gates — or that the shared
// classifier marks provisional/pending — emits status "in_development" with NO
// firm value. A held value is never printed as firm.
//
// Output: data/workbench/standards/hmtc_standards_catalog.json
//   Workbench-side per the wiki/HMTc firewall (CLAUDE.md Part 2 / Part 19).
//   Carries percentile-derived values and clean/dirty designations that are
//   FORBIDDEN under wiki/. Consumed ONLY by the cert site; never imported into
//   or rendered on heavymetalindex.com. Per-row HMI links are one-way
//   /products/<slug> citations (HMTc -> HMI), the one allowed direction.
//
// Deterministic and idempotent: same inputs -> byte-identical output.
//
// Flags:
//   --product=<slug>  restrict to one product slug (still writes the full file
//                     when omitted; with the flag, only matching rows are built)
//   --check           do not write; exit 1 if the on-disk catalog differs from
//                     a fresh build (staleness gate for CI / prebuild)
//
// Usage:
//   node tools/standards/build-standards-catalog.mjs
//   node tools/standards/build-standards-catalog.mjs --product=infant-formula-powder-non-soy
//   node tools/standards/build-standards-catalog.mjs --check

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { execSync } from "node:child_process"
// Gate 3 reuses the single source of truth for "is this a defensible value the
// standards math can print?" — the same classifier the category-readiness
// monitor and the per-ingredient scorecard import, so the catalog can never
// silently disagree with them (tools/evidence/lib/standards-readiness.mjs).
import { classifyCell, num } from "../evidence/lib/standards-readiness.mjs"

const repoRoot = process.cwd()
const distPath = path.join(repoRoot, "data/evidence/hmtc_aggregate_distributions.csv")
const outlierPath = path.join(repoRoot, "data/evidence/standards-outlier-adjudication.csv")
const reviewPath = path.join(repoRoot, "data/evidence/extraction_review.csv")
const productDir = path.join(repoRoot, "wiki/products")
const taxonomyPath = path.join(repoRoot, "data/taxonomy/hmtc-v2.json")
const outDir = path.join(repoRoot, "data/workbench/standards")
const outPath = path.join(outDir, "hmtc_standards_catalog.json")

// HMTc certification analyte panel (CLAUDE.md Part 14), in report order. Same
// order as build-category-standards-tables.mjs PANEL.
const PANEL = ["Pb", "tAs", "iAs", "Cd", "tHg", "MeHg", "Ni", "Cr-VI", "Sn", "Al"]

// 1:7 reconstitution factor (powder <-> prepared). Mirrors RECONSTITUTION_FACTOR
// in build-standards-briefing.mjs and BASIS_RECONSTITUTION_FACTOR in the pooler.
// The CSV values are ALREADY in native basis; this is display-only cross-basis.
const RECONSTITUTION_FACTOR = 7
const POWDER_BASES = new Set(["powder_as_placed", "as_sold", "as_sold_or_source_reported", "dry_as_sold"])
const PREPARED_BASES = new Set(["prepared_for_feeding", "as_consumed"])

main()

function main() {
  const args = parseArgs(process.argv.slice(2))
  const onlyProduct = args.get("product") || null
  const checkOnly = args.has("check")

  if (!fs.existsSync(distPath)) {
    console.error(`Pooled distributions CSV not found at ${path.relative(repoRoot, distPath)}; run npm run evidence:pooling first.`)
    process.exit(1)
  }

  const taxonomy = readTaxonomy()
  const dist = indexDistributions()             // `${slug}|${metal}` -> CSV row
  const heldOutlierCells = loadOutlierHolds()   // Set of `${slug}|${metal}` held (Gate 3)
  const flaggedCells = loadExtractionFlags()     // Set of `${slug}|${metal}` untrusted (classifyCell arg)
  const products = loadLockedProducts(onlyProduct) // sorted locked product pages
  const standardVersion = `${taxonomy.version} (${taxonomy.version_date})`

  // Build every locked row, then derive the per-category ledger from the result
  // so "published" in the ledger means exactly "emitted >=1 firm analyte here".
  const rows = products.map((p) =>
    buildRow(p, taxonomy, dist, heldOutlierCells, flaggedCells, standardVersion))

  const ledger = buildLedger(rows, products, taxonomy)
  // Echo each row's own category ledger onto the row for standalone consumption.
  for (const r of rows) {
    const led = ledger[String(r.vertical.category)]
    r.completeness_ledger = led
      ? { category: led.category, published: led.subcategories_published, total: led.subcategories_total, context: led.context }
      : { category: r.vertical.category, published: 0, total: 0, context: "0 of 0 subcategories published" }
  }

  const summary = buildSummary(rows)

  const catalog = {
    schema_version: "1.0.0",
    generated_at: new Date().toISOString(),
    generated_commit: gitCommit(),
    methodology_version: "HMTc-10 / Method v2.0 — government-limit default, selective occurrence for Tier-1 toxics and unregulated cells (CLAUDE.md Part 19)",
    standard_version: standardVersion,
    panel: PANEL,
    firewall:
      "workbench-side; feeds the heavymetaltested.com certification site only; never rendered on or imported into heavymetalindex.com. Contains percentile-derived values and clean/dirty designations forbidden under wiki/ per CLAUDE.md Part 2 / Part 19.",
    gating_note:
      "A subcategory analyte cell emits a firm published_limit_ppb ONLY when all 5 shipping gates pass AND classifyCell returns confidence 'firm'. Any gate failure or provisional/pending classification emits status 'in_development' with no firm value.",
    completeness_ledger: ledger,
    rows,
    summary,
  }

  // Deterministic serialization. generated_at/generated_commit are the only
  // non-deterministic fields; --check ignores them so staleness reflects data.
  const json = JSON.stringify(catalog, null, 2) + "\n"

  if (checkOnly) {
    const stale = isStale(json)
    if (stale) {
      console.error(`STALE: ${path.relative(repoRoot, outPath)} differs from a fresh build. Run: node tools/standards/build-standards-catalog.mjs`)
      process.exit(1)
    }
    console.log(`OK: ${path.relative(repoRoot, outPath)} is up to date.`)
    return
  }

  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(outPath, json, "utf8")

  console.log(`Wrote ${path.relative(repoRoot, outPath)}`)
  console.log(`Locked rows: ${summary.locked_rows} · rows with >=1 firm analyte: ${summary.rows_with_any_firm_analyte}`)
  console.log(`Analyte cells: ${summary.analyte_cells_published} published / ${summary.analyte_cells_in_development} in_development (of ${summary.analyte_cells_total})`)
  console.log(
    `Held by: gate1=${summary.held_by_gate.gate1_pairing} gate2=${summary.held_by_gate.gate2_methodology} ` +
    `gate3=${summary.held_by_gate.gate3_readiness} gate4=${summary.held_by_gate.gate4_scope} ` +
    `provisional=${summary.held_by_gate.classify_provisional} pending=${summary.held_by_gate.classify_pending} ` +
    `out-of-scope=${summary.held_by_gate.not_in_scope}`,
  )
}

// ============================ row construction ============================

function buildRow(p, taxonomy, dist, heldOutlierCells, flaggedCells, standardVersion) {
  const catName = categoryName(taxonomy, p.hmtc_category)
  const scopeSet = new Set(p.primary_metals_of_concern)

  const covered = []
  const uncovered = []
  const analytes = {}

  for (const metal of PANEL) {
    const key = `${p.slug}|${metal}`
    const row = dist.get(key)                 // CSV (product, metal) cell or undefined
    const inScope = scopeSet.has(metal)        // Gate 4 input: primary_metals_of_concern

    const cellResult = evaluateCell({
      product: p,
      metal,
      inScope,
      csvRow: row,
      heldOutlier: heldOutlierCells.has(key),
      flagged: flaggedCells.has(key),
    })

    analytes[metal] = cellResult
    if (cellResult.status === "published") covered.push(metal)
    else uncovered.push(metal)
  }

  return {
    product_slug: p.slug,
    subcategory: p.subcategory,
    vertical: { category: p.hmtc_category, category_name: catName },
    variant_type: p.variant_type,             // wiki/products frontmatter (Gate 1)
    native_basis: nativeBasisForRow(dist, p.slug),
    standard_version: standardVersion,
    hmi_literature_link: `https://heavymetalindex.com/products/${p.slug}`,
    covered_analytes: covered,
    uncovered_analytes: uncovered,
    completeness_ledger: null,                 // filled in main() after ledger is built
    analytes,
  }
}

// Apply all 5 gates to one (product, metal) cell. Any failure -> in_development.
function evaluateCell({ product, metal, inScope, csvRow, heldOutlier, flagged }) {
  const basis = csvRow?.native_basis || ""
  const cap = csvRow ? num(csvRow.lowest_regulatory_cap_ppb) : null
  const capSource = csvRow?.lowest_regulatory_cap_source || ""

  // --- Gate 4: analyte-scope disclosed (read: primary_metals_of_concern). ---
  // A metal outside the row's declared scope is honestly uncovered, not a
  // failure to publish — but it can never emit a firm value either.
  if (!inScope) {
    return developmentCell({
      basis, cap, capSource,
      precise: csvRow ? num(csvRow.candidate_value_ppb) : null,
      note: "analyte not in this subcategory's primary_metals_of_concern (out of scope)",
      gates: { pairing: null, methodology: null, readiness: null, scope: false },
      heldReasons: ["gate4:out-of-scope"],
      inScope: false,
    })
  }

  if (!csvRow) {
    return developmentCell({
      basis, cap, capSource, precise: null,
      note: "no pooled distribution row for this (subcategory, analyte) cell",
      gates: { pairing: gate1(product, metal, csvRow).ok, methodology: false, readiness: false, scope: true },
      heldReasons: ["gate3:no-pooled-row"],
      inScope: true,
    })
  }

  const heldReasons = []

  // --- Gate 1: pairing resolved. across_row_review_hook + variant_type, read ---
  // from wiki/products/<slug>.md frontmatter. An ACTIVE or unresolved clean/dirty
  // judgment means the P45/P97 designation for the row is still open.
  const g1 = gate1(product, metal, csvRow)
  if (!g1.ok) heldReasons.push(`gate1:${g1.why}`)

  // --- Gate 2: methodology-version uniform. Read the CSV's operative percentile ---
  // framing (target_p / target_label), NOT the stale P90/P30 boilerplate that
  // lingers in the standards-snapshot .md bodies. Current framing = P97 (clean /
  // independent) or P45 (dirty).
  const g2 = gate2(csvRow)
  if (!g2.ok) heldReasons.push(`gate2:${g2.why}`)

  // --- Gate 3a: outlier-adjudication register. A non-CLEARED disposition holds ---
  // the (row_slug, metal_species) cell (data/evidence/standards-outlier-adjudication.csv).
  if (heldOutlier) heldReasons.push("gate3:outlier-adjudication-pending")

  // --- Gate 3b: shared classifier. Reads candidate_value_ppb / pooled_p97 / ---
  // sens_band / distinct_sources + the extraction_review flag. Litigation-firm
  // means classifyCell returns state 'resolved' AND confidence 'firm'.
  const cls = classifyCell(csvRow, flagged)
  const classifyFirm = cls.state === "resolved" && cls.confidence === "firm"
  if (cls.state === "pending") heldReasons.push(`gate3:classify-pending (${cls.why || "no usable evidence"})`)
  else if (!classifyFirm) heldReasons.push(`gate3:classify-provisional (${cls.basis || "literature-baseline"})`)

  const gates = { pairing: g1.ok, methodology: g2.ok, readiness: !heldOutlier && classifyFirm, scope: true }
  const precise = num(csvRow.candidate_value_ppb)
  const note = evidenceNote(csvRow, cls, heldOutlier)

  // Emit firm ONLY when every gate passes and the classifier is firm.
  const allPass = g1.ok && g2.ok && !heldOutlier && classifyFirm
  if (!allPass) {
    return developmentCell({ basis, cap, capSource, precise, note, gates, heldReasons, inScope: true })
  }

  // --- Firm value. candidate_value_ppb is already in native basis & already ---
  // min(P97, cap)'d upstream. Round DOWN to 2 significant figures so a published
  // limit is NEVER looser than the pooled evidence — a ratcheting program must not
  // loosen a standard through rounding (the old round-UP-to-ladder did: 1829 → 2000).
  // When a regulatory cap binds, publish the cap EXACTLY (it is a precise legal
  // number; rounding it down would misstate the regulation). (Governing Principle 4.)
  let published
  let capBinds = false
  if (cap !== null && precise !== null && precise >= cap - 1e-9) {
    published = cap
    capBinds = true
  } else {
    published = roundStandardDown(precise)
  }

  // Validate the rationale tag against the 4 Part-19 tags. The auto-emitter only
  // produces literature-baseline / regulatory-alignment; precautionary and
  // feasibility-driven are staff overrides not present in the raw CSV. When the
  // published value lands on the cap, the cap binds — relabel honestly. (FIX-2)
  const rationale = capBinds ? "regulatory-alignment" : normalizeRationale(csvRow.rationale_tag_auto, cls.basis)

  const cross = crossBasis(precise, basis)

  return {
    status: "published",
    in_scope: true,
    published_limit_ppb: published,
    precise_ppb: precise,
    native_basis: basis,
    cross_basis_ppb: cross ? round4(cross.value) : null,
    cross_basis_label: cross ? cross.basis : null,
    rationale_tag: rationale,
    regulatory_cap_ppb: cap,
    regulatory_cap_source: capSource,
    evidence_state_note: note,
    gates,
    held_reasons: [],
  }
}

function developmentCell({ basis, cap, capSource, precise, note, gates, heldReasons, inScope }) {
  return {
    status: "in_development",
    in_scope: inScope,
    published_limit_ppb: null,      // never a firm value when held
    precise_ppb: precise ?? null,
    native_basis: basis,
    cross_basis_ppb: null,
    cross_basis_label: null,
    rationale_tag: null,
    regulatory_cap_ppb: cap,
    regulatory_cap_source: capSource,
    evidence_state_note: note,
    gates,
    held_reasons: heldReasons,
  }
}

// ============================ the 5 gates ============================

// Gate 1 — pairing resolved. Reads wiki/products/<slug>.md frontmatter:
//   across_row_review_hook : open clean/dirty judgment for the row.
//     PASS  -> hook absent, OR hook begins "RESOLVED" and (if analyte-scoped)
//              names this metal as resolved.
//     FAIL  -> hook begins "ACTIVE:", OR an unprefixed hook (an open judgment
//              with no resolution marker, e.g. salt/olive-oil/shellfish), OR a
//              RESOLVED hook that explicitly HOLDS this metal (e.g. seaweed
//              "tAs/Cd HELD").
//   variant_type : informational; a clean/dirty designation is only trustworthy
//                  once the across-row judgment is resolved, which the hook gates.
function gate1(product, metal, csvRow) {
  const hook = (product.across_row_review_hook || "").trim()
  if (!hook) return { ok: true }
  const upper = hook.toUpperCase()
  if (upper.startsWith("ACTIVE")) return { ok: false, why: "across_row_review_hook ACTIVE" }
  if (upper.startsWith("RESOLVED")) {
    // Analyte-scoped resolution: if the hook explicitly HELDs a metal, that metal
    // stays unresolved even though the hook is RESOLVED for others.
    const heldMatch = hook.match(/\b([A-Za-z][\w-]*(?:\s*\/\s*[A-Za-z][\w-]*)*)\s+HELD\b/i)
    if (heldMatch && tokenizeMetals(heldMatch[1]).includes(metal))
      return { ok: false, why: `across_row_review_hook RESOLVED but ${metal} HELD` }
    // FIX-1: for a whole_row_platform row the clean/dirty split IS the category-level
    // judgment Gate 1 protects, so a RESOLVED hook only covers analytes it NAMES —
    // unless the cell is cap-bound (the regulatory cap binds independent of the
    // unresolved percentile). Otherwise a resolution of (say) tHg would silently
    // ship MeHg/Cd as firm off an unresolved whole-row split.
    if (product.variant_type === "whole_row_platform") {
      const cap = csvRow ? num(csvRow.lowest_regulatory_cap_ppb) : null
      const cand = csvRow ? num(csvRow.candidate_value_ppb) : null
      const p97 = csvRow ? num(csvRow.pooled_p97) : null
      const capBound = cap !== null && cand !== null && (p97 === null || cap <= p97)
      if (!hookNamesMetal(hook, metal) && !capBound)
        return { ok: false, why: `whole_row_platform RESOLVED hook does not name ${metal} and cell is not cap-bound` }
    }
    return { ok: true }
  }
  // Unprefixed hook = open clean/dirty judgment with no resolution marker.
  return { ok: false, why: "across_row_review_hook unresolved (no RESOLVED marker)" }
}

// FIX-1: does the RESOLVED hook explicitly name this metal as in-scope of the
// resolution? Matches "(iAs)", "iAs standard", "tHg cap", a bare token, and X/Y groupings.
function hookNamesMetal(hook, metal) {
  const m = metal.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  return new RegExp(`(^|[\\s(/,])${m}([\\s)/,;:]|$)`).test(hook)
}

// Gate 2 — methodology-version uniform. Reads the CSV target_p / target_label,
// the OPERATIVE percentile framing (not the stale .md snapshot text). Current
// vocabulary is P97 (clean / independent) or P45 (dirty). Any other framing
// (a deprecated P90/P30/P10/P20 label, or a missing/odd target_p) fails.
function gate2(csvRow) {
  const tp = num(csvRow.target_p)
  const label = (csvRow.target_label || "").toLowerCase()
  const currentLabels = new Set(["independent_p97", "clean_p97", "dirty_p45", "clean_p45"])
  const pOk = tp === 0.97 || tp === 0.45
  const labelOk = currentLabels.has(label)
  if (pOk && labelOk) return { ok: true }
  return { ok: false, why: `non-current percentile framing (target_p=${csvRow.target_p || "—"}, target_label=${csvRow.target_label || "—"})` }
}

// (Gate 3 and Gate 4 are applied inline in evaluateCell: Gate 3 via the outlier
//  register + classifyCell, Gate 4 via primary_metals_of_concern membership.)

// ============================ data loading ============================

function indexDistributions() {
  const rows = parseCsv(fs.readFileSync(distPath, "utf8"))
  const map = new Map()
  for (const r of rows) map.set(`${r.product_slug}|${r.metal_species}`, r)
  return map
}

// Gate 3a holds — outlier register. A (row_slug, metal_species) is HELD unless
// its disposition starts "CLEARED" (matches build-standards-briefing.mjs
// loadAdjudicationFlags). Held cells never emit a firm value.
function loadOutlierHolds() {
  const held = new Set()
  if (!fs.existsSync(outlierPath)) return held
  for (const r of parseCsv(fs.readFileSync(outlierPath, "utf8"))) {
    if (!r.row_slug || !r.metal_species) continue
    if (!/^cleared/i.test(r.disposition || "")) held.add(`${r.row_slug}|${r.metal_species}`)
  }
  return held
}

// Gate 3b input — extraction_review.csv untrusted flags. A flag is "reviewed"
// (no longer blocking) once its note shows a recheck or adjudication; otherwise
// the cell is untrusted (classifyCell's `flagged` argument). Mirrors the
// readiness builder's flaggedUnreviewed set.
function loadExtractionFlags() {
  const flagged = new Set()
  if (!fs.existsSync(reviewPath)) return flagged
  for (const r of parseCsv(fs.readFileSync(reviewPath, "utf8"))) {
    if (!r.row_slug || !r.metal_species) continue
    const note = String(r.note || "")
    const reviewed = /Rechecked/i.test(note) || /adjudicat/i.test(note)
    if (!reviewed) flagged.add(`${r.row_slug}|${r.metal_species}`)
  }
  return flagged
}

// The publishable universe = LOCKED product pages (products_status: locked).
// Scaffolds are not standards destinations (CLAUDE.md Part 10 / Part 19).
function loadLockedProducts(onlyProduct) {
  const out = []
  for (const f of fs.readdirSync(productDir)) {
    if (!f.endsWith(".md") || f === "index.md") continue
    const fm = matter(fs.readFileSync(path.join(productDir, f), "utf8")).data
    if (fm.products_status !== "locked") continue
    const slug = String(fm.category || path.basename(f, ".md"))
    if (onlyProduct && slug !== onlyProduct) continue
    out.push({
      slug,
      subcategory: fm.hmtc_subcategory_name || fm.title || slug,
      hmtc_category: Number.isFinite(Number(fm.hmtc_category)) ? Number(fm.hmtc_category) : null,
      hmtc_row: Number(fm.hmtc_row) || 99,
      variant_type: fm.variant_type || "",
      across_row_review_hook: typeof fm.across_row_review_hook === "string" ? fm.across_row_review_hook : "",
      primary_metals_of_concern: Array.isArray(fm.primary_metals_of_concern)
        ? fm.primary_metals_of_concern.map(String)
        : [],
    })
  }
  // Deterministic order: category, then hmtc_row, then slug.
  return out.sort((a, b) =>
    (a.hmtc_category ?? 999) - (b.hmtc_category ?? 999) || a.hmtc_row - b.hmtc_row || a.slug.localeCompare(b.slug))
}

function readTaxonomy() {
  const t = JSON.parse(fs.readFileSync(taxonomyPath, "utf8"))
  return { version: t.version || "unknown", version_date: t.version_date || "", categories: t.categories || [] }
}

// ============================ Gate 5 ledger ============================

// Gate 5 — category-completeness ledger. M = taxonomy categories[].subcategories
// .length for the category; N = locked rows in that category that emit >=1 firm
// analyte. Honest "N of M subcategories published".
function buildLedger(rows, products, taxonomy) {
  const ledger = {}
  // Seed every category that has at least one locked row.
  const cats = new Set(products.map((p) => p.hmtc_category).filter((c) => c !== null))
  for (const cat of cats) {
    const tx = taxonomy.categories.find((c) => Number(c.n) === Number(cat))
    const total = tx && Array.isArray(tx.subcategories) ? tx.subcategories.length : 0
    ledger[String(cat)] = {
      category: cat,
      category_name: categoryName(taxonomy, cat),
      subcategories_total: total,
      subcategories_locked: 0,
      subcategories_published: 0,
      context: "",
    }
  }
  for (const p of products) {
    const led = ledger[String(p.hmtc_category)]
    if (led) led.subcategories_locked += 1
  }
  for (const r of rows) {
    const led = ledger[String(r.vertical.category)]
    if (!led) continue
    const anyFirm = Object.values(r.analytes).some((a) => a.status === "published")
    if (anyFirm) led.subcategories_published += 1
  }
  for (const led of Object.values(ledger)) {
    led.context = `${led.subcategories_published} of ${led.subcategories_total} subcategories published`
  }
  return ledger
}

function buildSummary(rows) {
  const held = { gate1_pairing: 0, gate2_methodology: 0, gate3_readiness: 0, gate4_scope: 0, classify_provisional: 0, classify_pending: 0, not_in_scope: 0 }
  let published = 0
  let inDev = 0
  let rowsWithFirm = 0
  for (const r of rows) {
    let firmHere = false
    for (const a of Object.values(r.analytes)) {
      if (a.status === "published") { published += 1; firmHere = true; continue }
      inDev += 1
      for (const reason of a.held_reasons) {
        if (reason.startsWith("gate1")) held.gate1_pairing += 1
        else if (reason.startsWith("gate2")) held.gate2_methodology += 1
        else if (reason.startsWith("gate4")) held.not_in_scope += 1
        else if (reason.includes("classify-provisional")) held.classify_provisional += 1
        else if (reason.includes("classify-pending")) held.classify_pending += 1
        else if (reason.startsWith("gate3")) held.gate3_readiness += 1
      }
    }
    if (firmHere) rowsWithFirm += 1
  }
  return {
    locked_rows: rows.length,
    rows_with_any_firm_analyte: rowsWithFirm,
    analyte_cells_total: published + inDev,
    analyte_cells_published: published,
    analyte_cells_in_development: inDev,
    held_by_gate: held,
  }
}

// ============================ value helpers ============================

// Round a literature-baseline value DOWN to `sig` significant figures. Rounding
// down (toward zero) guarantees the published standard is never looser than the
// pooled evidence supports — the direction a ratcheting program must round. Two
// sig figs keeps the number clean and communicable (1829 → 1800, 471 → 470,
// 12.7 → 12, 0.83 → 0.83) while discarding < ~10% at worst. Replaces the old
// round-UP-to-a-sparse-ladder rule, which loosened standards (1829 → 2000, and a
// 300 ppb value → 500, an order-of-magnitude-class over-allowance).
function roundStandardDown(value, sig = 2) {
  if (value === null || value === undefined || !Number.isFinite(value) || value <= 0) return null
  const magnitude = Math.floor(Math.log10(value))
  const factor = Math.pow(10, magnitude - (sig - 1))
  return Math.round(Math.floor(value / factor) * factor * 1e6) / 1e6
}

// Display-only cross-basis equivalent (the firm published value stays native).
function crossBasis(value, basis) {
  if (value === null || value === undefined || !Number.isFinite(value)) return null
  if (POWDER_BASES.has(basis))
    return { value: value / RECONSTITUTION_FACTOR, basis: "prepared_for_feeding" }
  if (PREPARED_BASES.has(basis))
    return { value: value * RECONSTITUTION_FACTOR, basis: "powder_as_placed" }
  return null
}

// The 4 Part-19 rationale tags. The auto-emitter yields only the first two;
// fall back to the classifier's basis if the CSV tag is missing/unknown.
function normalizeRationale(autoTag, classifyBasis) {
  const allowed = new Set(["literature-baseline", "regulatory-alignment", "precautionary", "feasibility-driven"])
  if (allowed.has(autoTag)) return autoTag
  if (classifyBasis === "regulatory-alignment" || classifyBasis === "literature-baseline") return classifyBasis
  return "literature-baseline"
}

function evidenceNote(csvRow, cls, heldOutlier) {
  if (heldOutlier) return "outlier-adjudication pending (held provisional until adjudicated)"
  const parts = []
  if (csvRow.verdict) parts.push(csvRow.verdict)
  const distinct = num(csvRow.distinct_sources)
  if (distinct !== null) parts.push(`distinct_sources=${distinct}`)
  if (csvRow.sens_band) parts.push(`sens_band=${csvRow.sens_band}`)
  if (cls && cls.confidence) parts.push(`classify=${cls.state}/${cls.confidence}`)
  else if (cls && cls.state) parts.push(`classify=${cls.state}`)
  return parts.join("; ")
}

function categoryName(taxonomy, cat) {
  if (cat === null || cat === undefined) return ""
  const tx = taxonomy.categories.find((c) => Number(c.n) === Number(cat))
  return tx ? tx.name : `Category ${cat}`
}

function nativeBasisForRow(dist, slug) {
  // The row's native basis is uniform across its analytes; take the first cell
  // that has one. Falls back to "" if no pooled row exists for the slug.
  for (const metal of PANEL) {
    const r = dist.get(`${slug}|${metal}`)
    if (r && r.native_basis) return r.native_basis
  }
  return ""
}

// ============================ generic utilities ============================

function parseArgs(argv) {
  const map = new Map()
  for (const arg of argv) {
    const m = arg.match(/^--([^=]+)(?:=(.*))?$/)
    if (m) map.set(m[1], m[2] ?? "true")
  }
  return map
}

// Quote-aware CSV parser (verbatim from build-category-standards-tables.mjs /
// build-category-standards-readiness.mjs). product_label and contribution_log
// carry unescaped commas inside quotes; naive splitting conflates columns.
function parseCsv(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.length)
  if (lines.length === 0) return []
  const H = split(lines[0])
  return lines.slice(1).map((l) => {
    const c = split(l)
    const o = {}
    H.forEach((h, i) => (o[h] = c[i] ?? ""))
    return o
  })
}
function split(line) {
  const out = []
  let cur = ""
  let q = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (q) {
      if (ch === '"' && line[i + 1] === '"') { cur += '"'; i++ }
      else if (ch === '"') q = false
      else cur += ch
    } else {
      if (ch === '"') q = true
      else if (ch === ",") { out.push(cur); cur = "" }
      else cur += ch
    }
  }
  out.push(cur)
  return out
}

// Metal-token splitter for analyte-scoped hook resolutions ("tAs/Cd HELD").
function tokenizeMetals(s) {
  return s.split(/[\s,/]+/).map((x) => x.trim()).filter(Boolean)
}

function round4(n) {
  if (n === null || n === undefined || !Number.isFinite(n)) return null
  return Math.round(n * 10000) / 10000
}

function gitCommit() {
  try {
    return execSync("git rev-parse HEAD", { cwd: repoRoot }).toString().trim()
  } catch {
    return "unknown"
  }
}

// For --check: compare on-disk catalog to a fresh build, ignoring the two
// non-deterministic envelope fields (generated_at, generated_commit).
function isStale(freshJson) {
  if (!fs.existsSync(outPath)) return true
  const onDisk = fs.readFileSync(outPath, "utf8")
  return canonicalize(onDisk) !== canonicalize(freshJson)
}
function canonicalize(jsonText) {
  try {
    const o = JSON.parse(jsonText)
    delete o.generated_at
    delete o.generated_commit
    return JSON.stringify(o)
  } catch {
    return jsonText
  }
}
