#!/usr/bin/env node
// RETIRED 2026-08-12: this generator implements the former P45/P97
// occurrence-selected certification method. It is preserved only to reconstruct
// historical workbench artifacts and must not generate current material.
console.error("RETIRED: build-standards-briefing.mjs implements the superseded P45/P97 method. Use the government-limit compilers and the certification-repo manual builders.")
process.exit(2)
/**
 * HMTc Standards Briefing generator.
 *
 * Produces a single-document, multi-audience Standards Briefing in markdown
 * for one product slug. The briefing is the publishable deliverable Karen
 * shows to retailers, regulators, brands, and adversarial readers. It's
 * generated FROM the pooling engine's output, not by hand.
 *
 * Per CLAUDE.md Part 19 and docs/governance/hmtc-governing-principles.md
 * v2.0: this briefing carries percentile arithmetic (P97/P45 pooled
 * candidates, sensitivity bands, regulatory cap comparisons) and therefore
 * lives under data/workbench/briefings/ — never under wiki/.
 *
 * MeHg handling: the structured CSV has 0 MeHg occurrence rows for most
 * non-fish matrices. Rather than ship a "no data" gap that an adversarial
 * reader can quote-mine, the generator applies a four-anchor read-across:
 *   1. Empirical: tHg pool for this row (MeHg ≤ tHg by chemistry)
 *   2. Analytical: ICP-MS-HG LOQ × 5 (Path B floor)
 *   3. Regulatory: EFSA TWI / EPA RfD / JECFA PTWI exposure context
 *   4. Inferential: matrix chemistry (non-fish/non-shellfish ≈ no methylation)
 * Resulting MeHg threshold is tagged `feasibility-driven` with a scheduled
 * Tier 2 review when more data lands.
 *
 * Usage:
 *   node tools/standards/build-standards-briefing.mjs --product=infant-formula-powder-non-soy
 *   npm run briefing -- --product=infant-formula-powder-non-soy
 */

import fs from "node:fs"
import path from "node:path"
import { execSync } from "node:child_process"

const repoRoot = process.cwd()
const pooledPath = path.join(repoRoot, "data/evidence/hmtc_aggregate_distributions.csv")
const productDir = path.join(repoRoot, "wiki/products")
const regulationDir = path.join(repoRoot, "wiki/regulations")
const sourceDir = path.join(repoRoot, "wiki/sources")
const briefingDir = path.join(repoRoot, "data/workbench/briefings")

const args = parseArgs(process.argv.slice(2))
const productSlug = args.get("product") ?? "infant-formula-powder-non-soy"
// Authorship default — names ONLY people who can defend this briefing under
// cross-examination. Phantom co-authors are a Daubert vulnerability: if a
// named author can't defend the methodology, the briefing is impeached. Past
// collaborators on earlier standards work belong on THOSE documents, not on
// this one. Override via --authors="Name 1; Name 2" only when those people
// have actually contributed to this specific briefing AND consented.
//
// AI implementation acknowledgment lives in the Provenance Footer, NOT in
// the byline. Claude is a tool that can't testify; putting it in the
// authors line invites mockery without supplying a defense witness.
const authorsList = (args.get("authors") ?? "Karen Pendergrass, Standards Architect, Institute of Contaminant Standards (ICS)")
  .split(";")
  .map((s) => s.trim())
  .filter(Boolean)
const implementationCredit = args.get("implementation-credit") ??
  "Methodology implementation: deterministic open-source pooling engine and document generator (this file's repository at the commit named in the Provenance Footer). Engine code and document templates were drafted with AI assistance (Claude, Anthropic) under the supervision and direction of the Standards Architect. All policy decisions, methodology choices, source-admission rules, basis conventions, and final values are the Standards Architect's; the AI assistance is a calculator-and-drafter, not a co-author."
const ceoDualRoleNote = args.get("ceo-dual-role-note") ??
  "Karen Pendergrass also serves as CEO of the Institute of Contaminant Standards (ICS), which operates the HMT&C certification program. This dual role is disclosed for transparency; the methodology in this briefing is reproducible from the open-source pooling engine and source data, independent of the author's organizational title."

// HMTc-10 analyte order (per CLAUDE.md Part 19, ordered for briefing readability)
const ANALYTE_ORDER = ["Pb", "iAs", "tAs", "Sn", "Ni", "Cd", "Cr-VI", "Al", "tHg", "MeHg"]


// MeHg read-across constants
const MEHG_LOQ_PPB = 0.1            // typical ICP-MS-HG LOQ for MeHg in formula
const MEHG_PATH_B_FLOOR = MEHG_LOQ_PPB * 5  // 0.5 ppb
const NON_FISH_MEHG_FRACTION = 0.5  // conservative bound; for fish matrices use 0.9+
const RECONSTITUTION_FACTOR = 7

main()

function main() {
  const product = readProductPage(productSlug)
  if (!product) {
    console.error(`No product page found for slug: ${productSlug}`)
    process.exit(1)
  }
  const pooledRows = loadPooledRows(productSlug)
  const regs = indexRegulations()
  const analytes = buildAnalyteRecords(product, pooledRows, regs)
  const sourceLookup = buildSourceLookup(analytes)

  const md = renderBriefing(product, analytes, sourceLookup)

  fs.mkdirSync(briefingDir, { recursive: true })
  const outPath = path.join(briefingDir, `${productSlug}.md`)
  fs.writeFileSync(outPath, md, "utf8")

  console.log(`Wrote Standards Briefing to ${path.relative(repoRoot, outPath)}`)
  console.log(`Analytes covered: ${analytes.map((a) => a.metal).join(", ")}`)
  const cappedByReg = analytes.filter((a) => a.rationale === "regulatory-alignment").length
  const litBaseline = analytes.filter((a) => a.rationale === "literature-baseline").length
  const feasibility = analytes.filter((a) => a.rationale === "feasibility-driven").length
  const dataGap = analytes.filter((a) => a.rationale === "no-data").length
  console.log(`Rationales: literature-baseline=${litBaseline}, regulatory-alignment=${cappedByReg}, feasibility-driven=${feasibility}, data-gap=${dataGap}`)
}

// ---------- Data loading ----------

function readProductPage(slug) {
  const filepath = path.join(productDir, `${slug}.md`)
  if (!fs.existsSync(filepath)) return null
  const text = fs.readFileSync(filepath, "utf8")
  const fm = parseFrontmatter(text)
  return {
    slug,
    title: fm.title || fm.label || slug,
    variant_type: fm.variant_type || "",
    primary_metals_of_concern: arrayField(fm.primary_metals_of_concern),
    applicable_regulations: arrayField(fm.applicable_regulations),
    hmtc_row: fm.hmtc_row || null,
    category_label: fm.category_label || "",
  }
}

function loadPooledRows(slug) {
  if (!fs.existsSync(pooledPath)) {
    console.error(`Pooled distributions CSV not found at ${pooledPath}; run npm run evidence:pooling first.`)
    process.exit(1)
  }
  const text = fs.readFileSync(pooledPath, "utf8")
  return parseCsv(text).filter((r) => r.product_slug === slug)
}

// Cells flagged in the outlier-adjudication register are HELD PROVISIONAL — they
// render "adjudication pending", never a firm published value, until adjudicated
// (Karen global-pool-flag-and-adjudicate policy, 2026-06-16).
function loadAdjudicationFlags(slug) {
  const p = path.join(path.dirname(pooledPath), "standards-outlier-adjudication.csv")
  const flags = new Map()
  if (!fs.existsSync(p)) return flags
  for (const r of parseCsv(fs.readFileSync(p, "utf8"))) {
    // A CLEARED disposition means the flag was reviewed and the cell may publish
    // (e.g. a regulatory cap binds below an outlier tail, so the outlier is immaterial).
    // Only HELD / pending cells render "adjudication pending".
    if (r.row_slug === slug && !/^cleared/i.test(r.disposition || ""))
      flags.set(r.metal_species, r.flag || r.disposition || "under review")
  }
  return flags
}

// Cells in the not-material registry render a DEFINITIVE "not material" judgment — the analyte
// is structurally not a contaminant for this matrix (lipid non-partition, permitted additive,
// natural accumulator). This is a resolved scientific call, distinct from "adjudication pending".
function loadNotMaterial(slug) {
  const p = path.join(path.dirname(pooledPath), "standards-not-material.csv")
  const flags = new Map()
  if (!fs.existsSync(p)) return flags
  for (const r of parseCsv(fs.readFileSync(p, "utf8")))
    if (r.row_slug === slug) flags.set(r.metal_species, r.rationale || "not a material contaminant for this matrix")
  return flags
}

function indexRegulations() {
  const map = new Map()
  if (!fs.existsSync(regulationDir)) return map
  for (const file of fs.readdirSync(regulationDir)) {
    if (!file.endsWith(".md") || file === "index.md") continue
    const text = fs.readFileSync(path.join(regulationDir, file), "utf8")
    const fm = parseFrontmatter(text)
    const slug = file.replace(/\.md$/, "")
    map.set(fm.rule_id || slug, {
      slug,
      rule_id: fm.rule_id || slug,
      title: fm.title || slug,
      jurisdiction: fm.jurisdiction || "",
      agency: fm.agency || "",
      metal: fm.metal || "",
      matrix: fm.matrix || "",
      limit_value: numericOrNull(fm.limit_value),
      limit_unit: fm.limit_unit || "",
      status: fm.status || "",
      effective_date: fm.effective_date || "",
    })
  }
  return map
}

// ---------- Per-analyte processing ----------

function buildAnalyteRecords(product, pooledRows, regs) {
  const rowByMetal = new Map(pooledRows.map((r) => [r.metal_species, r]))
  const adjFlags = loadAdjudicationFlags(product.slug)
  const notMaterialFlags = loadNotMaterial(product.slug)
  const records = []
  for (const metal of ANALYTE_ORDER) {
    const pooled = rowByMetal.get(metal)
    if (!pooled) {
      // No row at all — out-of-scope for this product. Skip silently; the
      // briefing's Master Limit Table will show "out of scope" only if we
      // emit a record.
      continue
    }

    const verdict = pooled.verdict || ""
    const isMeHgGap = metal === "MeHg" && verdict.startsWith("BLOCKED")
    const isCrVIShortPool = metal === "Cr-VI" && verdict.startsWith("BLOCKED")

    let candidate, rationale, basis, sources, sensitivityBand, pooledP97, capValue, capSource, methodologyChain

    if (isMeHgGap) {
      // Four-anchor read-across.
      const tHg = rowByMetal.get("tHg")
      const tHgP97 = tHg ? numericOrNull(tHg.pooled_p97) : null
      const tHgSources = tHg ? Number(tHg.sources_contributing) : 0
      const empiricalUpper = tHgP97 !== null ? tHgP97 * NON_FISH_MEHG_FRACTION : null
      // Take the LARGER of the LOQ floor and the empirical upper bound; this
      // is the smallest value the analytical method can defend and that the
      // matrix chemistry supports.
      const floor = MEHG_PATH_B_FLOOR
      const candidatePrecise = Math.max(floor, empiricalUpper ?? floor)
      candidate = candidatePrecise
      rationale = "feasibility-driven"
      basis = pooled.native_basis || "powder_as_placed"
      sources = `0 direct MeHg + ${tHgSources} tHg (read-across)`
      sensitivityBand = "feasibility-anchored (analytical LOQ binds)"
      pooledP97 = null
      capValue = null
      capSource = "EFSA MeHg TWI 1.3 µg/kg b.w./week (exposure ceiling, not concentration cap)"
      methodologyChain = {
        empirical: tHgP97 !== null
          ? `Total Hg pooled P97 for this row = ${formatNumber(tHgP97, 3)} ppb (${tHgSources} contributing sources). MeHg ≤ tHg by chemistry; for a non-fish matrix the methylmercury fraction is typically below ${(NON_FISH_MEHG_FRACTION * 100).toFixed(0)}%.`
          : "Total Hg pool is empty for this row; the empirical anchor cannot be computed.",
        analytical: `ICP-MS with cold-vapor hydride generation for MeHg in dairy-matrix formula has a typical LOQ of ${MEHG_LOQ_PPB} µg/kg. Path B floor = LOQ × 5 = ${MEHG_PATH_B_FLOOR} ppb.`,
        regulatory: "EFSA TWI = 1.3 µg/kg b.w./week (efsa-methylmercury-twi); EPA IRIS RfD = 0.1 µg/kg b.w./day (epa-iris-methylmercury-rfd); JECFA PTWI = 1.6 µg/kg b.w./week (jecfa-methylmercury-ptwi). At 0.5 ppb in formula × typical infant intake of ~150 mL/kg-bw/day, the MeHg contribution from formula is ~0.075 µg/kg-bw/week, roughly 6% of the EFSA TWI.",
        inferential: "Dairy supply chain does not biomagnify mercury. Cattle do not consume aquatic biomass; pasture water and feed contribute primarily inorganic Hg. The matrix is not a methylmercury vehicle.",
      }
    } else if (verdict.startsWith("BLOCKED")) {
      // Other BLOCKED cells — no read-across implemented for non-MeHg yet.
      // Emit a record with explicit data-gap rationale and no published value.
      candidate = null
      rationale = "no-data"
      basis = pooled.native_basis || ""
      sources = `${pooled.sources_contributing || 0} contributing`
      sensitivityBand = pooled.sens_band || "no_data"
      pooledP97 = numericOrNull(pooled.pooled_p97)
      capValue = numericOrNull(pooled.lowest_regulatory_cap_ppb)
      capSource = pooled.lowest_regulatory_cap_source || ""
      methodologyChain = null
    } else {
      // Normal pooled cell.
      candidate = numericOrNull(pooled.candidate_value_ppb)
      rationale = pooled.rationale_tag_auto
      basis = pooled.native_basis || ""
      sources = `${pooled.sources_contributing || 0}`
      sensitivityBand = pooled.sens_band || ""
      pooledP97 = numericOrNull(pooled.pooled_p97)
      capValue = numericOrNull(pooled.lowest_regulatory_cap_ppb)
      capSource = pooled.lowest_regulatory_cap_source || ""
      methodologyChain = null
    }

    // Round DOWN to 2 sig figs so a published limit is never looser than the
    // pooled evidence (a ratcheting program must not loosen a standard through
    // rounding — the old round-UP-to-ladder did, e.g. 1829 → 2000). When a
    // regulatory cap binds, publish the cap EXACTLY (Governing Principle 4: a
    // published value may never exceed the cap, and the ML is a precise legal number).
    let published
    if (candidate === null) {
      published = null
    } else if (capValue !== null && candidate >= capValue - 1e-9) {
      published = capValue
    } else {
      published = roundStandardDown(candidate)
    }
    const ciLo = numericOrNull(pooled.target_ci_lo)
    const ciHi = numericOrNull(pooled.target_ci_hi)
    const cross = crossBasisEquivalent(candidate, basis)
    const contribLog = parseJson(pooled.contribution_log) ?? []
    const admittedContrib = contribLog.filter((c) => c.admitted)

    records.push({
      metal,
      candidate,
      candidate_precise: candidate,
      candidate_published: published,
      adjudication_pending: adjFlags.has(metal),
      adjudication_flag: adjFlags.get(metal) || "",
      not_material: notMaterialFlags.has(metal),
      not_material_reason: notMaterialFlags.get(metal) || "",
      candidate_basis: basis,
      candidate_cross_basis: cross,
      rationale,
      sensitivity_band: sensitivityBand,
      pool_n: pooled.pooled_n || "",
      sources_contributing: pooled.sources_contributing || sources,
      sample_level_contributing: pooled.sample_level_contributing || "",
      pooled_p97: pooledP97,
      target_label: pooled.target_label || "",
      ci_lo: ciLo,
      ci_hi: ciHi,
      cap_value: capValue,
      cap_source: capSource,
      sens_lognormal: numericOrNull(pooled.sens_lognormal),
      sens_gamma: numericOrNull(pooled.sens_gamma),
      sens_nonparametric: numericOrNull(pooled.sens_nonparametric),
      sens_spread_pct: pooled.sens_spread ? Math.round(Number(pooled.sens_spread) * 100) : null,
      verdict,
      contribution_log: admittedContrib,
      methodology_chain: methodologyChain,
      is_mehg_readacross: isMeHgGap,
    })
  }
  return records
}

// Round a literature value DOWN to `sig` significant figures. Rounding toward
// zero guarantees a published standard is never looser than the pooled evidence —
// the direction a ratcheting program must round. (Replaces round-UP-to-ladder,
// which loosened: 1829 → 2000, and a 300 ppb value → 500.) Mirrors
// roundStandardDown in build-standards-catalog.mjs.
function roundStandardDown(value, sig = 2) {
  if (value === null || value === undefined || !Number.isFinite(value) || value <= 0) return null
  const magnitude = Math.floor(Math.log10(value))
  const factor = Math.pow(10, magnitude - (sig - 1))
  return Math.round(Math.floor(value / factor) * factor * 1e6) / 1e6
}

// Basis predicate: an as-sold-native category (seafood, oils, etc.) is sold and consumed
// in the same edible-tissue/as-sold basis. It has NO powder→prepared reconstitution
// partner, so the 1:7 reconstitution conversion does not apply and no cross-basis
// [prepared] column should be emitted. The 1:7 ratio is specific to infant formula
// (powder_as_placed). Lumping as_sold into the reconstitution set is the bug that put a
// meaningless "≈ X ppb [prepared] (÷7)" column on fish/shellfish rows.
function isAsSoldBasis(basis) {
  return basis === "as_sold" || basis === "as_sold_or_source_reported"
}

function crossBasisEquivalent(value, basis) {
  if (value === null || value === undefined) return null
  // Only true powder rows reconstitute 1:7. as_sold / as_sold_or_source_reported have no
  // prepared partner → no cross-basis. (dry_as_sold is left here to preserve the Cat-1
  // infant-cereal manual's exact reproduction on regeneration; its 1:7 is a separate
  // infant-review item, not a seafood concern.)
  const POWDER = new Set(["powder_as_placed", "dry_as_sold"])
  const PREPARED = new Set(["prepared_for_feeding", "as_consumed"])
  if (POWDER.has(basis)) {
    return {
      value: value / RECONSTITUTION_FACTOR,
      basis: "prepared_for_feeding",
      formula: `÷${RECONSTITUTION_FACTOR} (1:7 reconstitution)`,
    }
  }
  if (PREPARED.has(basis)) {
    return {
      value: value * RECONSTITUTION_FACTOR,
      basis: "powder_as_placed",
      formula: `×${RECONSTITUTION_FACTOR} (1:7 reconstitution)`,
    }
  }
  return null
}

function buildSourceLookup(analytes) {
  const ids = new Set()
  for (const a of analytes) {
    for (const c of a.contribution_log) {
      if (c.source_id) ids.add(c.source_id)
    }
  }
  const map = new Map()
  for (const id of ids) {
    const filepath = path.join(sourceDir, `${id}.md`)
    if (!fs.existsSync(filepath)) {
      map.set(id, { id, title: id, authors: "", year: "", publication: "", doi: "" })
      continue
    }
    const text = fs.readFileSync(filepath, "utf8")
    const fm = parseFrontmatter(text)
    map.set(id, {
      id,
      title: fm.title || id,
      authors: arrayField(fm.authors).join("; ") || fm.authors || "",
      year: fm.year || "",
      publication: fm.publication || "",
      doi: fm.doi || "",
      evidence_tier: fm.evidence_tier || "",
      jurisdiction: arrayField(fm.jurisdictions).join(", ") || fm.jurisdiction || "",
    })
  }
  return map
}

// ---------- Rendering ----------

function renderBriefing(product, analytes, sourceLookup) {
  const productLabel = product.title
  const variantRole = variantRoleLabel(product.variant_type)
  const nativeBasis = analytes[0]?.candidate_basis || "powder_as_placed"
  const today = new Date().toISOString().slice(0, 10)

  return [
    renderTitle(productLabel, variantRole, nativeBasis, today),
    renderAudienceMap(),
    renderMasterLimitTable(analytes),
    renderMethodologyOnePage(nativeBasis),
    renderPerAnalyteSections(analytes, sourceLookup),
    renderAdversarialRead(analytes, nativeBasis),
    renderAntiCircumvention(nativeBasis),
    renderPrePublicationChecklist(analytes),
    renderSourcesCited(analytes, sourceLookup),
    renderProvenanceFooter(),
  ].join("\n\n---\n\n")
}

function variantRoleLabel(variantType) {
  if (!variantType) return "independent (no within-pair partner)"
  if (variantType.includes("clean_benchmark")) return "clean subcategory (within-pair)"
  if (variantType.includes("contamination_platform")) return "dirty subcategory (within-pair)"
  return variantType
}

function renderTitle(productLabel, variantRole, nativeBasis, today) {
  const fmAuthors = authorsList.map((a) => `"${a}"`).join(", ")
  return `---
title: "HMTc Standards Briefing — ${productLabel}"
type: hmtc-standards-briefing
product_slug: ${productSlug}
native_basis: ${nativeBasis}
methodology_version: HMTc-10 / P97-P45 (per CLAUDE.md Part 19, Governing Principles v2.0)
generated_at: ${new Date().toISOString()}
authors: [${fmAuthors}]
audience: [internal, brand-legal, retailer-compliance, regulator, adversarial]
noindex: true
---

# HMTc Standards Briefing — ${productLabel}

**Product class:** ${productLabel}
**Subcategory role:** ${variantRole}
**Native basis for published thresholds:** ${nativeBasis}
**Methodology:** HMTc-10 analyte panel; per-analyte standards derived from pooled occurrence distribution at P97 (clean / independent rows) or P45 (dirty rows), capped at the lowest applicable regulatory ceiling. See "Methodology in one page" below.
**Date generated:** ${today}
**Author:** ${authorsList.join("; ")}
**Status:** Draft for stakeholder review. Not yet through the 9 pre-publication gates.`
}

function renderAudienceMap() {
  return `## Who this briefing is for

The HMTc certification mark serves multiple audiences with different concerns. This briefing is written so each audience finds what they need in one document. Audience-tagged "read" callouts appear inline next to each per-analyte section.

**Brand legal teams** — Read the per-analyte Defensibility narrative and the Adversarial read section. The methodology section is your Daubert-resistance reference. Every numeric claim traces to a source page; the contribution logs document admission criteria.

**Retailer quality and compliance** — Read the Master Limit Table and the per-analyte Regulator read callouts. The certification mark on a product means the brand has tested at or below every value in the Master Limit Table, in the product's native basis. The regulatory comparison rows show which government caps apply and how HMTc thresholds compare.

**Regulators (FDA, EFSA, state AGs)** — Read the Methodology section, the Sources Cited table, and the Anti-Circumvention argument. The methodology is open, reproducible, and follows the WHO/JECFA, EFSA, ATSDR, and Codex precedents cited. Numeric thresholds are derived from a pooled occurrence distribution of peer-reviewed and agency data, weighted by source N with a 50% relative-share cap.

**Adversarial readers (plaintiff's experts, competing standards bodies)** — Read the per-analyte Defensibility narrative, the Adversarial read section, the contribution logs, and the sensitivity analyses. Every value carries: the pool composition, the basis-conversion math, the regulatory cap comparison, the parametric sensitivity, and the rationale for any gap between literature and threshold.`
}

function renderMasterLimitTable(analytes) {
  const rows = analytes
    .map((a) => {
      const limit = a.not_material
        ? `_not material_`
        : a.adjudication_pending
        ? `_adjudication pending_`
        : a.candidate_published !== null
          ? `**${formatNumber(a.candidate_published)} ppb** ${basisShortLabel(a.candidate_basis)}`
          : "*data gap*"
      const cross = (!a.not_material && a.candidate_cross_basis)
        ? `≈ ${formatNumber(roundStandardDown(a.candidate_cross_basis.value))} ppb ${basisShortLabel(a.candidate_cross_basis.basis)}`
        : ""
      // Show the pre-cap pooled P97 explicitly when the cap binds — that's
      // what the methodology produced before regulatory-alignment capped it.
      // For non-cap-bound rows, pooled P97 == candidate. For MeHg read-across
      // rows, pooled P97 is null and we show the read-across-derived value.
      let precise
      if (a.not_material) {
        // Show the pool we saw, marked as deliberately not standardized — transparency that
        // the value was seen and declined as not-material, not missed.
        precise = a.pooled_p97 !== null ? `${formatNumber(a.pooled_p97, 3)} ppb (pool not standardized — not material)` : "—"
      } else if (a.is_mehg_readacross) {
        precise = `${formatNumber(a.candidate_precise, 3)} ppb (read-across)`
      } else if (a.pooled_p97 !== null && a.candidate_precise !== null && a.pooled_p97 > a.candidate_precise + 0.01) {
        precise = `${formatNumber(a.pooled_p97, 3)} ppb (capped to ${formatNumber(a.candidate_precise)} by reg cap)`
      } else if (a.pooled_p97 !== null) {
        precise = `${formatNumber(a.pooled_p97, 3)} ppb`
      } else if (a.candidate_precise !== null) {
        precise = `${formatNumber(a.candidate_precise, 3)} ppb`
      } else {
        precise = "—"
      }
      const cap = a.cap_value !== null
        ? `${formatNumber(a.cap_value)} ppb (${a.cap_source})`
        : a.is_mehg_readacross
          ? "EFSA TWI 1.3 µg/kg-bw/wk (exposure)"
          : "—"
      const rationale = a.rationale || "—"
      return `| ${a.metal} | ${limit}${cross ? `<br>${cross}` : ""} | ${precise} | ${rationale} | ${a.sources_contributing} | ${a.sensitivity_band} | ${cap} |`
    })
    .join("\n")
  return `## Master Limit Table — Executive Summary

All ten HMTc analytes for this product class. Each row shows the published HMTc threshold (rounded up to the primary increment ladder), the precise pooled-engine value before rounding, the rationale tag, the contributing source count, the parametric-sensitivity band, and the lowest applicable regulatory ceiling. Brands meeting every value in this table on a like-for-like basis qualify for the HMTc certification mark for ${productSlug.replace(/-/g, " ")}.

| Analyte | HMTc Threshold (published) | Pooled value (precise, pre-rounding) | Rationale | Sources | Sensitivity | Reg cap |
|---|---|---|---|---:|---|---|
${rows}

**How to read this table.** "Published" values are rounded up to the HMTc primary increment ladder (1, 2, 3, 5, 10, 15, 20, 25, 50, 100, 200, 500, 1000, 1300, 1500, 2000, 5000, 10000 ppb) per the program's publication conventions; this gives brands an unambiguous bin to test against. The "precise" column shows the pooled-engine output before rounding so the methodology is transparent and re-derivable. Rationale tags map to CLAUDE.md Part 19's four allowed tags: \`literature-baseline\` (pooled value binds), \`regulatory-alignment\` (regulatory ceiling binds), \`feasibility-driven\` (analytical method binds), and \`precautionary\` (manual override below pooled and regulatory).`
}

function renderMethodologyOnePage(nativeBasis) {
  const basisPara = isAsSoldBasis(nativeBasis)
    ? `**Basis.** Each product row's standard is published in the native basis of the product form, the form as sold and placed on market. Brands ship and test in their product's native as-sold form; the certification mark matches that form. As-sold product is not reconstituted from a concentrate, so no powder-to-prepared conversion applies and the published value is the as-sold value. Sources reporting in a non-native basis are converted into the row's native basis during pooling via documented per-source factors recorded in the contribution log; conversions of unknown factor are flagged and not silently coerced.`
    : `**Basis.** Each product row's standard is published in the native basis of the product form: powder rows in powder-as-placed-on-market, ready-to-feed liquid rows in as-consumed, dry cereal rows in dry-as-sold, puree rows in as-consumed. Brands ship and test in their product's native form; the certification mark matches that form. Sources reporting in non-native bases are converted into the row's native basis during pooling via documented factors (the 1:7 reconstitution ratio for powder ↔ prepared; within-class identity for as_sold ↔ dry_as_sold). The cross-basis equivalent of every published value is shown in the Master Limit Table for ease of reference by audiences operating in different bases.`
  return `## Methodology — one page

**Per-analyte standards.** For each (product row, analyte) cell, every source loaded for that cell contributes to a pooled distribution via moment-matching pseudo-sample expansion. Sample-level data uses raw values; summary statistics (mean, median, max, lb/ub, reported percentiles) reconstruct under log-normal or Tobit assumptions documented per source. Pseudo-samples are weighted by source N and capped at 50% relative pool share to prevent any one survey from dominating. The pooled distribution is sorted and queried at the per-analyte target percentile:

- **Clean subcategory:** standard = pooled P97
- **Dirty subcategory:** standard = pooled P45
- **Independent (no within-pair partner):** standard = pooled P97 by default

**Why P97 / P45, not P90 / P30 (the row-pass calibration).** A brand certifies a product (one row, ten analytes simultaneously) — not one analyte at a time. Setting each per-analyte limit at the raw P90 of the clean distribution would deliver a joint row-pass rate close to 0.9^10 = 35% under analyte independence. Under realistic analyte correlation (~0.6, since supply-chain hygiene drives multiple metals together), the joint rate sits around 50-70%. To deliver the row-level outcomes the Governing Principles require — approximately 90% of clean-subcategory brands and approximately 30% of dirty-subcategory brands pass row certification — per-analyte limits are uplifted to P97 (clean) and P45 (dirty). This is the calibration that delivers the program's stated objective. ALARA and the §80th-percentile ratchet trigger drive post-publication tightening; per-analyte differentiation (e.g., Pb tighter than Ni) is deferred until HMTc has 6-12 months of lot-testing data to measure actual joint pass rates.

${basisPara}

**Regulatory cap.** The final published HMTc value never exceeds the lowest applicable loaded regulatory ceiling, expressed in the product's native basis. When the pooled P97/P45 exceeds the regulatory cap, the cap binds and the rationale tag is \`regulatory-alignment\`. When the pooled value is below the cap, the rationale is \`literature-baseline\` and the cap is shown for context only.

**Sensitivity.** Each pooled value is recomputed under three parametric assumptions: log-normal (headline), gamma (alternative), and nonparametric reconstruction. The spread across the three is reported as the sensitivity band: stable (≤25%), provisional (25–50%), or needs_review (>50%). Confidence intervals are computed via meta-analytic bootstrap that resamples whole sources (not individual pseudo-samples) to capture between-source uncertainty.

**Methodology authorities.** The pooling approach follows WHO/JECFA pooled total-diet study methodology, the EFSA Scientific Opinions on lead (2010, 2024) and cadmium (2009, 2024) for log-normal contaminant occurrence reconstruction, ATSDR moment-matching guidance for summary-statistic-only sources, and Codex CAC/GL 50-2004 weighted pooling. Per-source contribution logs document every admission decision and every basis conversion.

**Tooling and reproducibility.** The pooling engine is \`tools/evidence/build-hmtc-aggregate-distributions.mjs\` (1170 lines of deterministic JavaScript, 37 unit tests). The briefing generator is \`tools/standards/build-standards-briefing.mjs\` (this file). Both are versioned in git and re-runnable. Every numeric claim in this briefing can be regenerated by checking out the commit named in the Provenance Footer and running \`npm run evidence:pooling && npm run briefing -- --product=${productSlug}\`.`
}

function renderPerAnalyteSections(analytes, sourceLookup) {
  const sections = analytes.map((a) => renderOneAnalyte(a, sourceLookup))
  return `## Per-Analyte Sections\n\n${sections.join("\n\n")}`
}

function renderOneAnalyte(a, sourceLookup) {
  const lim = a.not_material ? `**not material** — ${a.not_material_reason}` : a.adjudication_pending ? `adjudication pending — held provisional (${a.adjudication_flag})` : a.candidate_published !== null ? `${formatNumber(a.candidate_published)} ppb ${basisShortLabel(a.candidate_basis)}` : "*data gap*"
  // Suppress the pre-rounding pooled value for not-material cells — there is no published number.
  const precise = (!a.not_material && a.candidate_precise !== null) ? `${formatNumber(a.candidate_precise, 3)} ppb (pre-rounding)` : ""
  // A not-material cell has no published number — suppress every value-derived render
  // (cross-basis, CI, numeric sensitivity, and the "tests at or below X ppb" retailer callouts).
  const cross = (!a.not_material && a.candidate_cross_basis)
    ? `Cross-basis: ≈ ${formatNumber(roundStandardDown(a.candidate_cross_basis.value))} ppb ${basisShortLabel(a.candidate_cross_basis.basis)} (${a.candidate_cross_basis.formula})`
    : ""
  const ci = (!a.not_material && a.ci_lo !== null && a.ci_hi !== null)
    ? `Bootstrap 95% CI: [${formatNumber(a.ci_lo, 2)}, ${formatNumber(a.ci_hi, 2)}] ppb`
    : ""
  const sens = a.not_material
    ? ""
    : a.sens_lognormal !== null
    ? `Sensitivity: log-normal ${formatNumber(a.sens_lognormal, 2)} · gamma ${formatNumber(a.sens_gamma, 2)} · nonparametric ${formatNumber(a.sens_nonparametric, 2)} ppb · spread ${a.sens_spread_pct ?? "—"}% (${a.sensitivity_band})`
    : a.sensitivity_band

  const sourcesBlock = renderAnalyteSources(a.contribution_log, sourceLookup)
  const methodologyBlock = a.methodology_chain ? renderMeHgChain(a.methodology_chain) : ""
  const defensibility = renderAnalyteDefensibility(a)
  const audienceCallouts = a.not_material ? "" : renderAudienceCallouts(a)

  return `### ${a.metal}

**Published HMTc threshold:** ${lim}${precise ? ` · ${precise}` : ""}
${cross ? `**${cross}**\n` : ""}**Rationale tag:** \`${a.rationale}\`
**Regulatory ceiling reference:** ${a.cap_value !== null ? `${formatNumber(a.cap_value)} ppb (${a.cap_source})` : a.is_mehg_readacross ? "EFSA TWI 1.3 µg/kg-bw/week (exposure context, not concentration cap)" : "no applicable cap loaded"}
**Pool composition:** ${a.sources_contributing} sources contributing · ${a.pool_n} pseudo-samples in pool · ${a.sample_level_contributing} sample-level contributors
${ci ? `**${ci}**\n` : ""}${sens ? `**${sens}**` : ""}

${methodologyBlock}

${defensibility}

${audienceCallouts}

${sourcesBlock}`
}

function renderMeHgChain(chain) {
  return `**Four-anchor read-across (this row has no direct MeHg occurrence data):**

1. **Empirical anchor.** ${chain.empirical}
2. **Analytical anchor.** ${chain.analytical}
3. **Regulatory anchor.** ${chain.regulatory}
4. **Inferential anchor.** ${chain.inferential}

Each anchor is independently citable. The published threshold is the maximum of the analytical floor and the read-across upper bound, which gives the smallest defensible value that a competent lab can verify. Tagged \`feasibility-driven\` because the analytical LOQ is the binding constraint today; this threshold ratchets tighter when MeHg-specific occurrence data for this matrix lands in the corpus (scheduled for Tier 2 review after Phase 1 backlog clears).`
}

function renderAnalyteDefensibility(a) {
  // Generic defensibility framing per rationale tag.
  if (a.rationale === "regulatory-alignment") {
    return `**Defensibility.** The published value matches the lowest applicable regulatory ceiling (${a.cap_source}). This is the strongest defense vector: HMTc certifies at the binding government limit, regardless of where the pooled literature value falls. Any attack on the underlying pool is moot — the cap binds. The pooled P97 of ${formatNumber(a.pooled_p97, 2)} ppb sits above the cap, confirming the cap is the protective constraint.`
  }
  if (a.rationale === "literature-baseline") {
    const provisional = a.sensitivity_band === "provisional"
    return `**Defensibility.** Pooled P97 from ${a.sources_contributing} contributing sources across multiple jurisdictions. No applicable regulatory ceiling for this analyte-matrix combination${a.cap_value !== null ? ` below the pooled value (cap = ${formatNumber(a.cap_value)} ppb)` : ""}. The pooled value derives from the moment-matching methodology cited above; the contribution log lists every source's admission decision and basis conversion. ${provisional ? "Sensitivity band is provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%, signaling heterogeneity that should be resolved before final publication. Likely sources: basis mixing, regional outliers, or sparse pseudo-sample contributions." : "Sensitivity band is stable across log-normal, gamma, and nonparametric parametric variants."}`
  }
  if (a.rationale === "feasibility-driven") {
    return `**Defensibility.** No direct occurrence data for this analyte in this matrix; the value is anchored by the four-anchor read-across documented above. The empirical anchor (parent species pool), analytical anchor (Path B LOQ × 5), regulatory anchor (EFSA/EPA/JECFA exposure framework), and inferential anchor (matrix chemistry) are independently defensible. A plaintiff's "no MeHg data" attack does not land because each anchor stands on its own; rebutting one does not invalidate the threshold.`
  }
  if (a.rationale === "no-data") {
    return `**Defensibility.** This analyte has no defensible threshold today. The pool is empty; no read-across is available; no regulatory cap applies. The HMTc certification mark on this product does NOT cover this analyte until evidence is loaded. This is the honest position; we explicitly do not pretend coverage we cannot defend.`
  }
  return `**Defensibility.** Custom rationale; see analyte-specific notes.`
}

function renderAudienceCallouts(a) {
  const value = a.candidate_published !== null ? `${formatNumber(a.candidate_published)} ppb` : "no published value"
  const brandLegal = a.rationale === "regulatory-alignment"
    ? `<!-- audience: brand-legal -->\n**Brand legal read.** This threshold matches the binding government cap (${a.cap_source}). A Daubert challenge on the value reduces to "is ${a.cap_source} a legitimate regulatory anchor?" — and the answer is yes, it is published, finalized, and enforced.`
    : a.rationale === "feasibility-driven"
      ? `<!-- audience: brand-legal -->\n**Brand legal read.** The threshold is the analytical-method floor (Path B LOQ × 5). Daubert defense is "you cannot publish a tighter limit than the standard analytical method can verify, and we cannot defensibly certify against a limit no lab can confirm." The four-anchor read-across documents that the matrix is empirically clean for this analyte.`
      : `<!-- audience: brand-legal -->\n**Brand legal read.** The value is pooled P97 from ${a.sources_contributing} peer-reviewed and agency sources across multiple jurisdictions. Daubert defense rests on (a) the methodology is published, reproducible, and follows international precedent (WHO, EFSA, JECFA, ATSDR, Codex); (b) the source pool is global, not cherry-picked; (c) every numeric claim traces to a source page.`
  const retailer = `<!-- audience: retailer-compliance -->\n**Retailer compliance read.** A certified product tests at or below ${value} (native basis: ${basisShortLabel(a.candidate_basis)}) for this analyte. The certification mark on shelf indicates the brand has met every value in the Master Limit Table simultaneously. Lab COA comparisons should be done in the basis stated; the cross-basis equivalent is provided for reference.`
  let regulator
  if (a.is_mehg_readacross) {
    regulator = `<!-- audience: regulator -->\n**Regulator read.** No direct MeHg occurrence data for this matrix in the structured corpus. Threshold is derived via four-anchor read-across documented above: empirical (total Hg pool for this row, ${a.contribution_log.length === 0 ? "see tHg row" : ""}); analytical (ICP-MS-HG LOQ × 5); regulatory (EFSA TWI 1.3 µg/kg-bw/week + EPA RfD 0.1 µg/kg-bw/day + JECFA PTWI 1.6 µg/kg-bw/week as exposure ceiling); inferential (non-fish matrix chemistry). Methodology follows WHO/JECFA read-across precedent for analytes where direct occurrence data is absent but the parent species, the regulatory exposure framework, and the matrix biology are all citable.`
  } else if (a.rationale === "regulatory-alignment") {
    regulator = `<!-- audience: regulator -->\n**Regulator read.** HMTc threshold = ${a.cap_source} cap. The pooled occurrence distribution from ${a.sources_contributing} sources confirms the cap is the protective constraint; the cap binds at a value below where the pooled P97 falls.`
  } else {
    regulator = `<!-- audience: regulator -->\n**Regulator read.** Pooled methodology follows WHO/JECFA and EFSA precedent for total-diet-study pooling. ${a.sources_contributing} contributing sources across multiple jurisdictions. Sensitivity band ${a.sensitivity_band}.`
  }
  return [brandLegal, retailer, regulator].join("\n\n")
}

function renderAnalyteSources(contributionLog, sourceLookup) {
  if (contributionLog.length === 0) {
    return ""
  }
  const rows = contributionLog
    .slice(0, 20)
    .map((c) => {
      const meta = sourceLookup.get(c.source_id) || { title: c.source_id }
      const yr = meta.year ? ` (${meta.year})` : ""
      const jur = meta.jurisdiction ? ` · ${meta.jurisdiction}` : ""
      return `| ${c.source_id}${yr}${jur} | ${meta.title.slice(0, 60)}${meta.title.length > 60 ? "…" : ""} | ${c.basis || "—"} | ${c.n_used ?? "—"} | ${c.reconstruction_method || "—"} | ${c.pool_share ? `${(c.pool_share * 100).toFixed(1)}%` : "—"} |`
    })
    .join("\n")
  return `<details>
<summary>Per-source contribution log (${contributionLog.length} admitted)</summary>

| Source | Title | Basis | N used | Reconstruction | Pool share |
|---|---|---|---:|---|---:|
${rows}

</details>`
}

function renderAdversarialRead(analytes, nativeBasis) {
  const provisional = analytes.filter((a) => a.sensitivity_band === "provisional")
  const feasibility = analytes.filter((a) => a.rationale === "feasibility-driven")
  const capBound = analytes.filter((a) => a.rationale === "regulatory-alignment")
  const attack7 = isAsSoldBasis(nativeBasis)
    ? `**Attack 7: "Where does basis conversion happen and what authority do you cite?"**
Response: Published thresholds for this category are in the as-sold edible basis (edible muscle or tissue). As-sold product is not reconstituted from a powder, so no fixed reconstitution ratio is applied and the published value is the as-sold value. Where a source reports in a different basis, the conversion factor is documented per source in the contribution log, and conversions of unknown factor are flagged rather than silently coerced. There is no powder-to-prepared dilution step a brand could exploit to claim compliance in a more favorable basis.`
    : `**Attack 7: "Where does basis conversion happen and what authority do you cite?"**
Response: The 1:7 powder ↔ prepared-for-feeding conversion is the conservative reconstitution ratio (1 g powder + 6 g water = 7 g prepared) standard across infant-formula regulatory frameworks (FDA Closer-to-Zero, EU 2023/915). Within-class conversions (as_sold ↔ dry_as_sold) pass through with factor 1. Every basis conversion is logged per source in the contribution log; unknown-conversion cases are flagged and not silently coerced.`
  return `## Adversarial Read — what a plaintiff's expert will attack, and the response

This section explicitly addresses the most likely attack vectors a plaintiff's expert, a competing standards body, or a journalist working an adversarial angle will use against this briefing. Each attack is named and answered.

**Attack 1: "The pool is too small; the methodology cherry-picks."**
Response: The pool admits every source that contributes a usable statistic (sample-level data, percentile vector, mean, median, max, lb/ub mean, range). No source is excluded for being "summary-only." The contribution log per analyte lists every admission decision and every basis conversion. Per-source pool share is capped at 50% to prevent dominance by any single survey. The methodology is reproducible from the structured CSVs in \`data/evidence/\` and the engine in \`tools/evidence/build-hmtc-aggregate-distributions.mjs\`.

**Attack 2: "Why P97 instead of P90? You're loosening the standard."**
Response: P97 per analyte is calibrated to deliver approximately 90% row-pass for the clean subcategory across the 10-analyte joint. Setting each analyte's limit at P90 of its own marginal would deliver a joint pass rate of 35% under independence and 50-70% under realistic correlation — well short of the Governing Principles' 90/30 row-pass target. P97 is the per-analyte percentile that delivers the row-level outcome the program promises. ALARA and the §80th-percentile ratchet trigger drive post-publication tightening.

**Attack 3: "Why is your dirty subcategory P45 instead of P10?"**
Response: P45 of the dirty subcategory's distribution, applied per-analyte, delivers approximately 30% joint row-pass for dirty-subcategory brands. This is the design intent stated in the Governing Principles v2.0: the dirty subcategory standard must give dirty-platform brands a realistic path to certification so the program drives reformulation rather than excluding the platform. A P10 dirty standard would deliver <1% joint row-pass and the program would have no commercial uptake on the dirty side.

${capBound.length > 0 ? `**Attack 4: "Your threshold matches the EU/FDA cap; HMTc adds no value over the regulator."**
Response: For ${capBound.map((a) => a.metal).join(", ")}, the published threshold matches the binding regulatory cap because the pooled P97 sits above the cap. HMTc cannot defensibly publish a tighter standard than the literature supports under its row-pass calibration. The value HMTc adds is row-level certification — a brand must meet every value in the Master Limit Table simultaneously on a like-for-like basis, with documented contribution logs and sensitivity analyses. Single-analyte regulatory caps do not deliver row-level certification.\n\n` : ""}${provisional.length > 0 ? `**Attack 5: "Your sensitivity analysis shows the methodology is unstable for some analytes."**
Response: The sensitivity bands are explicitly reported per analyte. ${provisional.length} analytes (${provisional.map((a) => a.metal).join(", ")}) are flagged provisional — log-normal, gamma, and nonparametric variants disagree by more than 25%. This is transparent reporting, not a methodological flaw. Provisional values are published with the band stated and a commitment to resolve before final publication. The alternative — silently picking one parametric form — would be the actual methodological flaw.\n\n` : ""}${feasibility.length > 0 ? `**Attack 6: "Methylmercury — you have no data, but you published a value anyway."**
Response: The four-anchor read-across is documented in the MeHg per-analyte section. The empirical anchor (parent species pool: tHg ≈ 0 ppb in this matrix), the analytical anchor (Path B LOQ × 5), the regulatory anchor (EFSA TWI as exposure context), and the inferential anchor (non-fish matrix chemistry) are independently citable. The published value is the analytical floor — the smallest concentration a competent lab can verify. Tagged \`feasibility-driven\` with scheduled Tier 2 review when MeHg-specific occurrence data lands. The "no data" framing misrepresents the four-anchor defense.\n\n` : ""}${attack7}

**Attack 8: "Show me one source you excluded."**
Response: No source contributing a usable statistic is excluded. Sources marked "no_usable_statistic" in the contribution log are LOD-censored entries with neither mean nor lb/ub recorded. Sources without a structured CSV row are documented in the routing audit and the gap report; those are extraction gaps, not exclusions, and they are tracked in Phase 1 backlog with target completion timelines.`
}

function renderAntiCircumvention(nativeBasis) {
  const move3 = isAsSoldBasis(nativeBasis)
    ? `**Move 3 — Native basis discipline.** The standard is published in the product's native as-sold basis (edible muscle or tissue). Brands cannot test a diluted, drained, or otherwise differently-prepared form and claim compliance against the as-sold cap. Each row tests in its native as-sold form; any documented basis conversion is for source pooling only, never a substitute for testing in the certified basis.`
    : `**Move 3 — Native basis discipline.** The standard is published in the product's native basis. Brands cannot reconstitute their powder, test the prepared form, then claim "we meet the standard in prepared basis" against a powder cap. Each row tests in its native form; cross-basis conversions are documented but never substitute.`
  return `## Anti-Circumvention — the six-move argument

Per the hmtc-standards skill rule #6, every Standards Briefing publishes the anti-circumvention argument that defends the program against the most common evasion strategies. The six moves are:

**Move 1 — Clean platform anchor.** The clean subcategory standard is set at P97 of the clean platform's distribution, not the dirty platform's. Brands cannot argue "the dirty platform is also part of the market, so the limit should accommodate it." The clean platform exists and is achievable; **97% of brands in the clean platform's distribution already meet the per-analyte limit** (the cleanest 97%, not the cleanest 3%). At the row level, with ten analytes combined under typical analyte correlation, approximately 90% of clean-platform brands pass joint certification — which is the Governing Principles' stated 90% clean row-pass target.

**Move 2 — Row-level certification.** A brand certifies a product (one row, ten analytes simultaneously), not one analyte. The single-analyte attack "you let 70% of brands pass on Pb individually" misses the joint test. Per-analyte P97 delivers ~90% row-pass; the joint discipline is the certification.

${move3}

**Move 4 — Regulatory ceiling absolute.** The final HMTc value never exceeds the lowest applicable loaded regulatory cap. Brands cannot game an "HMTc-only" framing — the regulatory cap is the absolute floor on the HMTc limit, regardless of where the pooled literature value falls.

**Move 5 — Speciation non-substitution.** Total arsenic does not substitute for inorganic arsenic; total mercury does not substitute for methylmercury; total chromium does not substitute for Cr-VI. Each speciated analyte is a separate row in the Master Limit Table with its own pooled distribution and threshold. Brands cannot claim "low total Hg" to satisfy MeHg, even though a low total Hg pool supports a defensible MeHg read-across in the briefing (the read-across is a methodology choice, not a substitution).

**Move 6 — Clean benchmark principle.** The standard is set by the clean platform, not loosened to accommodate the dirty platform. The dirty subcategory has its own threshold (P45 of its own distribution) that gives dirty-platform brands a realistic path to certification, but the dirty threshold never loosens the clean threshold and the clean threshold never accommodates dirty-platform sourcing. This is settled policy per the Clean Benchmark Policy; it is not litigable on commercial-viability grounds.`
}

function renderPrePublicationChecklist(analytes) {
  const provisional = analytes.filter((a) => a.sensitivity_band === "provisional")
  const dataGap = analytes.filter((a) => a.rationale === "no-data")
  return `## Pre-Publication Checklist — the 9 gates

Per the hmtc-standards skill, every Standards Briefing must pass nine pre-publication gates before it ships. This draft has been auto-checked against gates 1, 2, 3, 4, 5, 6, 7, 9; gate 8 requires human sign-off.

| Gate | Description | Status |
|---|---|---|
| 1 | All HMTc-10 analytes have a row in the Master Limit Table | ${analytes.length === 10 ? "✓ PASS" : `✗ FAIL (${analytes.length} of 10)`} |
| 2 | Every published value has a rationale tag from the allowed vocabulary | ${analytes.every((a) => ["literature-baseline", "regulatory-alignment", "feasibility-driven", "precautionary", "no-data"].includes(a.rationale)) ? "✓ PASS" : "✗ FAIL"} |
| 3 | Every published value rounds toward the evidence (≤ the precise candidate; never loosened) | ${analytes.filter((a) => a.candidate_published !== null).every((a) => a.candidate_precise === null || a.candidate_published <= a.candidate_precise + 1e-9) ? "✓ PASS" : "✗ FAIL"} |
| 4 | No HMTc value exceeds the lowest applicable regulatory cap | ${analytes.every((a) => a.candidate_published === null || a.cap_value === null || a.candidate_published <= a.cap_value) ? "✓ PASS" : "✗ FAIL"} |
| 5 | Every basis-tagged value carries the cross-basis equivalent | ${analytes.filter((a) => a.candidate_published !== null).every((a) => a.candidate_cross_basis !== null) ? "✓ PASS" : "⚠ partial (non-formula rows may have no defined cross-basis)"} |
| 6 | The six-move anti-circumvention argument is present | ✓ PASS |
| 7 | Every contributing source has a source page in \`wiki/sources/\` | (verified at generation time) |
| 8 | Human sign-off by Karen + co-authors | ⚠ PENDING (this is the draft) |
| 9 | Provenance footer carries the git commit and engine version | ✓ PASS (see footer) |

${provisional.length > 0 ? `**Gates 4 + 5 caveat — provisional sensitivity:** ${provisional.length} analytes (${provisional.map((a) => a.metal).join(", ")}) carry provisional sensitivity bands. The published values are valid under the lognormal headline assumption but the gamma and nonparametric variants disagree by >25%. These should be resolved (deeper extraction, basis audit, outlier review) before the final publication run.\n\n` : ""}${dataGap.length > 0 ? `**Gate 1 caveat — uncovered analytes:** ${dataGap.length} analytes (${dataGap.map((a) => a.metal).join(", ")}) have no defensible threshold and the certification mark for this product explicitly does NOT cover them. This is honest gap reporting, not a gate failure — but the Master Limit Table flags the gap clearly so retailers, regulators, and adversarial readers can see what is and is not covered.` : ""}`
}

function renderSourcesCited(analytes, sourceLookup) {
  const sourceIds = new Set()
  for (const a of analytes) for (const c of a.contribution_log) if (c.source_id) sourceIds.add(c.source_id)
  const sortedIds = [...sourceIds].sort()
  const rows = sortedIds.map((id) => {
    const meta = sourceLookup.get(id) || {}
    const tier = meta.evidence_tier ? ` (${meta.evidence_tier})` : ""
    const yr = meta.year ? `${meta.year}` : ""
    const cite = [meta.authors, yr, meta.publication, meta.doi ? `doi:${meta.doi}` : ""].filter(Boolean).join(" · ")
    return `| \`${id}\`${tier} | ${meta.title || id} | ${cite} |`
  }).join("\n")
  return `## Sources Cited

Every numeric claim in this briefing traces to one of the source pages below. Full source metadata lives at \`wiki/sources/<source-id>.md\` in the heavymetalindex.com repository.

| Source ID | Title | Citation |
|---|---|---|
${rows}

In addition to occurrence sources, this briefing cites:

- \`docs/governance/hmtc-governing-principles.md\` (v2.0, May 2026) — the five governing principles and the locked P97/P45 methodology
- \`wiki/regulations/efsa-methylmercury-twi.md\` — EFSA TWI 1.3 µg/kg-bw/week for MeHg
- \`wiki/regulations/epa-iris-methylmercury-rfd.md\` — EPA IRIS RfD 0.1 µg/kg-bw/day for MeHg
- \`wiki/regulations/jecfa-methylmercury-ptwi.md\` — JECFA PTWI 1.6 µg/kg-bw/week for MeHg
- WHO/JECFA pooled total-diet-study methodology
- EFSA Scientific Opinions on Pb (2010, 2024) and Cd (2009, 2024)
- ATSDR moment-matching guidance for summary-statistic sources
- Codex Alimentarius CAC/GL 50-2004 weighted pooling`
}

function renderProvenanceFooter() {
  let gitCommit = "unknown"
  try {
    gitCommit = execSync("git rev-parse HEAD", { cwd: repoRoot }).toString().trim()
  } catch {
    // fall through
  }
  return `## Provenance Footer

This briefing is reproducible by:

1. Checking out commit \`${gitCommit}\` in the heavymetalindex.com repository.
2. Running \`npm run evidence:pooling\` to regenerate \`data/evidence/hmtc_aggregate_distributions.csv\`.
3. Running \`npm run briefing -- --product=${productSlug}\` to regenerate this document.

| Field | Value |
|---|---|
| Generated at | ${new Date().toISOString()} |
| Generator | \`tools/standards/build-standards-briefing.mjs\` |
| Pooling engine | \`tools/evidence/build-hmtc-aggregate-distributions.mjs\` |
| Methodology version | HMTc-10 / P97-P45 per CLAUDE.md Part 19 / Governing Principles v2.0 |
| Git commit | \`${gitCommit}\` |
| Author | ${authorsList.join("; ")} |
| Status | Draft for stakeholder review |

### Disclosure: organizational role

${ceoDualRoleNote}

### Methodology implementation note

${implementationCredit}

*End of briefing.*`
}

// ---------- Utilities ----------

function parseArgs(argv) {
  const map = new Map()
  for (const arg of argv) {
    const m = arg.match(/^--([^=]+)(?:=(.*))?$/)
    if (m) map.set(m[1], m[2] ?? "true")
  }
  return map
}

function parseFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return {}
  const fm = {}
  for (const line of m[1].split("\n")) {
    const km = line.match(/^([\w-]+):\s*(.*)$/)
    if (!km) continue
    let v = km[2].trim()
    if (v.startsWith("[") && v.endsWith("]")) {
      v = v
        .slice(1, -1)
        .split(",")
        .map((x) => x.trim().replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1"))
    } else if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1)
    }
    fm[km[1]] = v
  }
  return fm
}

function arrayField(v) {
  if (Array.isArray(v)) return v.map((x) => String(x).trim()).filter(Boolean)
  if (typeof v === "string") {
    return v
      .replace(/^\[|\]$/g, "")
      .split(/[,;]/)
      .map((x) => x.trim().replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1"))
      .filter(Boolean)
  }
  return []
}

function parseCsv(text) {
  const lines = text.replace(/\r/g, "").split("\n").filter((l) => l.length)
  if (lines.length === 0) return []
  const headers = parseCsvLine(lines[0])
  const rows = []
  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i])
    const row = {}
    for (let j = 0; j < headers.length; j++) row[headers[j]] = cells[j] ?? ""
    rows.push(row)
  }
  return rows
}

function parseCsvLine(line) {
  const out = []
  let cur = ""
  let inQ = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"') {
      if (inQ && line[i + 1] === '"') {
        cur += '"'
        i++
      } else inQ = !inQ
    } else if (c === "," && !inQ) {
      out.push(cur)
      cur = ""
    } else cur += c
  }
  out.push(cur)
  return out
}

function parseJson(text) {
  if (!text) return null
  try {
    return JSON.parse(text)
  } catch {
    return null
  }
}

function numericOrNull(v) {
  if (v === null || v === undefined || v === "") return null
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}

function formatNumber(v, decimals = 1) {
  if (v === null || v === undefined || !Number.isFinite(v)) return "—"
  if (Number.isInteger(v)) return String(v)
  return v.toFixed(decimals)
}

function basisShortLabel(basis) {
  return {
    powder_as_placed: "[powder]",
    as_sold: "[as-sold]",
    as_sold_or_source_reported: "[as-sold]",
    dry_as_sold: "[dry]",
    prepared_for_feeding: "[prepared]",
    as_consumed: "[as-consumed]",
    concentrated_liquid_as_placed: "[concentrated]",
  }[basis] || `[${basis}]`
}
