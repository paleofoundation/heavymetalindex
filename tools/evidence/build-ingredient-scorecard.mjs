#!/usr/bin/env node
// build-ingredient-scorecard.mjs
//
// The deterministic, per-page completeness scorecard for ingredient pages.
// Authoritative spec: docs/page-completeness-scorecard.md. Read it before
// editing this file.
//
// Hard invariants (the point, not decoration):
//   - NO LLM anywhere in the scoring path. Every chip is a pure function of
//     committed fields/counts, re-derivable by re-running this script.
//   - NO composite 0-100 score. Eleven dimension chips (D1-D11) plus a
//     principle-balance row, each with auditable counts shown inline.
//   - NOBODY is ever routed to a human. Residual `review:` judgments go to the
//     side register (ingredient-scorecard-review-flags.csv); missing data
//     becomes an autonomous task row in the gap register. No approval step.
//   - Real CSV parser (tools/evidence/lib/csv.mjs) for embedded-comma cells.
//   - Role-based section matcher (tools/evidence/lib/ingredient-sections.mjs),
//     never exact-string heading match.
//   - Pooled fields are READ from hmtc_aggregate_distributions.csv, never
//     recomputed.
//   - The ingredient's source set is derived from wiki/sources/*.md frontmatter
//     `ingredients:` arrays (the routing audit is product-keyed, not
//     ingredient-keyed).
//   - Graceful `tier-unset` degradation when consumption-tiers.csv is absent.
//   - D11 is an occurrence-evidence completeness verdict, never certification
//     readiness or limit arithmetic.
//
// Usage:
//   node tools/evidence/build-ingredient-scorecard.mjs            # write blocks + registers
//   node tools/evidence/build-ingredient-scorecard.mjs --check    # no write; exit 1 if any block stale
//   node tools/evidence/build-ingredient-scorecard.mjs --no-pages # registers only, leave pages untouched

import fs from "node:fs"
import path from "node:path"
import { randomUUID } from "node:crypto"
import matter from "gray-matter"
import { parseCsv, csvLine } from "./lib/csv.mjs"
import { sectionPresent, sectionBody, sectionNonEmpty } from "./lib/ingredient-sections.mjs"
import { num, poolingBand, BAND_ORDER } from "./lib/standards-readiness.mjs"

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

// The official 10-analyte HMTc certification list (CLAUDE.md Part 14). D1
// breadth is measured against exactly these. Pages that key Cr (not Cr-VI) or U
// (not on the list) read as honest gaps against the certification vocabulary —
// that is correct gap-surfacing, not a bug.
export const HMTC_ANALYTES = ["Pb", "tAs", "Cd", "MeHg", "tHg", "iAs", "Ni", "Al", "Cr-VI", "Sn"]

// As/Hg families for the speciation check (D6).
const AS_HG_SPECIATED = new Set(["iAs", "tAs", "MeHg", "tHg"])
const AS_HG_BARE = new Set(["As", "Hg"])

// Upstream / environmental matrix slugs that mark a source as carrying
// anthropogenic-attribution or background-substantiating evidence (D3/D4).
const UPSTREAM_MATRICES = new Set([
  "soil",
  "paddy-soil",
  "agricultural-soil",
  "sediment",
  "irrigation-water",
  "drinking-water",
  "atmospheric-deposition",
  "biosolids",
  "fertilizer",
])

const BASIS_TOKENS = new Set(["dry-weight", "wet-weight", "as-sold", "as-consumed", "reconstituted"])

// Consumption-tier expected-depth step table (page-completeness-scorecard.md
// Part 3). Committed here alongside the assembler's binning rule; the tier
// itself comes from data/reference/consumption-tiers.csv.
export const TIER_STEP_TABLE = {
  staple: { expected_min_total_n: 40, readiness: "CONFIDENT" },
  common: { expected_min_total_n: 15, readiness: "POOLABLE" },
  occasional: { expected_min_total_n: 5, readiness: "POOLABLE" },
  rare: { expected_min_total_n: 1, readiness: "THIN" },
}

// Each dimension maps to exactly one governing principle for the balance row.
const PRINCIPLE_BY_DIMENSION = {
  D1: "consumer-protection",
  D2: "legal-defensibility",
  D3: "brand-value",
  D4: "brand-value",
  D5: "scale",
  D6: "consumer-protection",
  D7: "legal-defensibility",
  D8: "legal-defensibility",
  D9: "contamination-reduction",
  D10: "legal-defensibility",
  D11: "scale",
}
const PRINCIPLES = ["consumer-protection", "contamination-reduction", "brand-value", "legal-defensibility", "scale"]
const PRINCIPLE_SPREAD_THRESHOLD = 0.67

const MARKER_OPEN = "<!-- hmi-completeness-scorecard -->"
const MARKER_CLOSE = "<!-- /hmi-completeness-scorecard -->"

// ---------------------------------------------------------------------------
// Wikilink slug helpers
// ---------------------------------------------------------------------------

// gray-matter parses `ingredients: [[[ingredients/rice]], ...]` into nested
// arrays. Flatten deeply and pull `<prefix>/<slug>` out of each leaf, stripping
// any [[ ]] wrapper and |alias suffix.
export function slugsFor(value, prefix) {
  const out = []
  const want = new RegExp(`(?:\\[\\[)?${prefix}/([a-z0-9][a-z0-9-]*)`, "i")
  const walk = (v) => {
    if (v === null || v === undefined) return
    if (Array.isArray(v)) {
      v.forEach(walk)
      return
    }
    const s = String(v)
    const m = s.match(want)
    if (m) out.push(m[1].toLowerCase())
  }
  walk(value)
  return [...new Set(out)]
}

// All `[[sources/<slug>]]` (with optional |alias) referenced in a body.
function citedSourceSlugs(content) {
  const out = new Set()
  const re = /\[\[sources\/([a-z0-9][a-z0-9._-]*?)(?:\|[^\]]*)?\]\]/gi
  let m
  while ((m = re.exec(content))) out.add(m[1])
  return [...out]
}

function countLinks(body, prefix) {
  if (!body) return 0
  const re = new RegExp(`\\[\\[${prefix}/[a-z0-9][a-z0-9._-]*(?:\\|[^\\]]*)?\\]\\]`, "gi")
  const set = new Set()
  let m
  while ((m = re.exec(body))) set.add(m[0].replace(/\|.*$/, ""))
  return set.size
}

// ---------------------------------------------------------------------------
// Context loading (all on-disk inputs)
// ---------------------------------------------------------------------------

export function buildContext(opts = {}) {
  const repoRoot = opts.repoRoot || process.cwd()
  const read = (p) => (fs.existsSync(p) ? fs.readFileSync(p, "utf8") : null)

  const sourcesDir = path.join(repoRoot, "wiki/sources")
  const ingredientsDir = path.join(repoRoot, "wiki/ingredients")

  // --- ingredient source index: slug -> [sourceRecord] ---
  const sourceById = new Map()
  const sourcesByIngredient = new Map()
  if (fs.existsSync(sourcesDir)) {
    for (const f of fs.readdirSync(sourcesDir)) {
      if (!f.endsWith(".md") || f === "index.md") continue
      const id = f.replace(/\.md$/, "")
      let data
      try {
        data = matter(fs.readFileSync(path.join(sourcesDir, f), "utf8")).data
      } catch {
        data = {}
      }
      const ingredients = slugsFor(data.ingredients, "ingredients")
      const matrices = (Array.isArray(data.matrices) ? data.matrices : []).map((x) => String(x).toLowerCase())
      const jurisdictions = (Array.isArray(data.jurisdictions) ? data.jurisdictions : []).map((x) => String(x))
      const attribution = data.attribution === true || String(data.attribution).toLowerCase() === "true"
      const rec = {
        id,
        ingredients,
        matrices,
        jurisdictions,
        attribution,
        evidence_tier: normalizeTier(data.evidence_tier),
      }
      sourceById.set(id, rec)
      for (const ing of ingredients) {
        if (!sourcesByIngredient.has(ing)) sourcesByIngredient.set(ing, [])
        sourcesByIngredient.get(ing).push(rec)
      }
    }
  }

  // --- pooled distributions: product_slug|metal_species -> row ---
  const distText = read(path.join(repoRoot, "data/evidence/hmtc_aggregate_distributions.csv"))
  const dist = distText ? parseCsv(distText) : []
  const distByProduct = new Map() // product_slug -> [rows]
  for (const r of dist) {
    if (!distByProduct.has(r.product_slug)) distByProduct.set(r.product_slug, [])
    distByProduct.get(r.product_slug).push(r)
  }

  // --- routing audit (product-keyed) for speciation + malformed cross-checks ---
  const routingText = read(path.join(repoRoot, "data/evidence/product_source_routing_audit.csv"))
  const routing = routingText ? parseCsv(routingText) : []
  const routingByProduct = new Map()
  for (const r of routing) {
    if (!routingByProduct.has(r.product_slug)) routingByProduct.set(r.product_slug, [])
    routingByProduct.get(r.product_slug).push(r)
  }

  // --- claim provenance (slug-keyed) ---
  const provText = read(path.join(repoRoot, "data/evidence/claim-provenance-audit.csv"))
  const prov = provText ? parseCsv(provText) : []
  const provByIngredient = new Map()
  for (const r of prov) {
    if (r.type !== "ingredient") continue
    if (!provByIngredient.has(r.slug)) provByIngredient.set(r.slug, [])
    provByIngredient.get(r.slug).push(r)
  }

  // --- routing malformed (source-keyed), blocking/strict severity only ---
  const malformedText = read(path.join(repoRoot, "data/evidence/routing_malformed.csv"))
  const malformedStrict = new Set()
  if (malformedText) {
    for (const r of parseCsv(malformedText)) {
      const sev = String(r.severity || "").toLowerCase()
      if (sev === "blocking" || sev === "strict") malformedStrict.add(r.source_id)
    }
  }

  // --- extraction_review flagged-unreviewed cells (mirrors category monitor) ---
  const reviewText = read(path.join(repoRoot, "data/evidence/extraction_review.csv"))
  const flaggedUnreviewed = new Set()
  if (reviewText) {
    for (const r of parseCsv(reviewText)) {
      const note = String(r.note || "")
      const reviewed = /Rechecked/i.test(note) || /adjudicat/i.test(note)
      if (!reviewed) flaggedUnreviewed.add(`${r.row_slug}|${r.metal_species}`)
    }
  }

  // --- by-jurisdiction crosswalk denominator (metals with regulated columns) ---
  const byJurisText = read(path.join(repoRoot, "wiki/regulations/by-jurisdiction.md"))

  // --- consumption tiers (the one curated-but-autonomous input; may be absent) ---
  const tierPath = opts.tierTablePath || path.join(repoRoot, "data/reference/consumption-tiers.csv")
  const tierText = fs.existsSync(tierPath) ? fs.readFileSync(tierPath, "utf8") : null
  const tiers = new Map()
  if (tierText) {
    for (const r of parseCsv(tierText)) {
      if (!r.ingredient_slug) continue
      tiers.set(r.ingredient_slug, { tier: r.consumption_tier, g_per_day: r.g_per_day, source: r.source })
    }
  }

  // --- existing link targets ---
  const dirSlugs = (rel) => {
    const d = path.join(repoRoot, rel)
    if (!fs.existsSync(d)) return new Set()
    return new Set(fs.readdirSync(d).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, "")))
  }
  const regulationSlugs = dirSlugs("wiki/regulations")

  return {
    repoRoot,
    ingredientsDir,
    sourceById,
    sourcesByIngredient,
    distByProduct,
    routingByProduct,
    provByIngredient,
    malformedStrict,
    flaggedUnreviewed,
    byJurisText,
    tiers,
    tierTablePresent: tierText !== null,
    regulationSlugs,
    sourceExists: (slug) => sourceById.has(slug),
  }
}

function normalizeTier(v) {
  if (!v) return ""
  return String(v).trim().replace(/\s*#.*$/, "").replace(/-tier$/i, "").toUpperCase()
}

// ---------------------------------------------------------------------------
// Per-ingredient scoring
// ---------------------------------------------------------------------------

export function isStub(fm) {
  const cp = fm.contamination_profile
  if (!cp || typeof cp !== "object") return true
  for (const k of Object.keys(cp)) {
    const st = cp[k] && cp[k].status
    if (st === "populated" || st === "in_progress") return false
  }
  return true
}

// Returns the bridged hmtc_aggregate_distributions rows for this ingredient:
// every dist row whose product_slug is one of the ingredient's used_in_products.
function bridgedRows(fm, ctx) {
  const products = slugsFor(fm.used_in_products, "products")
  const rows = []
  for (const p of products) {
    const rs = ctx.distByProduct.get(p) || []
    for (const r of rs) rows.push(r)
  }
  return rows
}

// Best pooling band per analyte across bridged rows (a metal may be pooled in
// several products; the most-evidenced one answers "can a basis be set").
function bestBandsByMetal(rows) {
  const best = new Map() // metal -> {band info, row}
  for (const r of rows) {
    const metal = r.metal_species
    const info = poolingBand(r)
    const prev = best.get(metal)
    if (!prev || BAND_ORDER[info.band] > BAND_ORDER[prev.band]) best.set(metal, { ...info, row: r })
  }
  return best
}

export function scoreIngredient(slug, fm, content, ctx) {
  const dims = {}
  const reviewFlags = []
  const dataFlags = []
  const cp = fm.contamination_profile && typeof fm.contamination_profile === "object" ? fm.contamination_profile : {}
  const sourceSet = ctx.sourcesByIngredient.get(slug) || []
  const bridged = bridgedRows(fm, ctx)
  const bands = bestBandsByMetal(bridged)

  const populatedMetals = Object.keys(cp).filter((m) => cp[m] && cp[m].status === "populated" && (num(cp[m].n_studies) ?? 0) > 0)

  // Priority analytes: primary_metals_of_concern if declared, else the populated
  // analytes (the field is absent on ingredient pages today).
  let priority = slugsForMetals(fm.primary_metals_of_concern)
  if (priority.length === 0) {
    priority = populatedMetals.slice()
    if (populatedMetals.length > 0) dataFlags.push(`missing-primary-metals: derived priority set from populated analytes`)
  }

  // ---- D1: consumption-weighted analyte coverage ----
  {
    const breadth = HMTC_ANALYTES.filter((m) => cp[m] && cp[m].status === "populated" && (num(cp[m].n_studies) ?? 0) > 0).length
    const declaredGaps = HMTC_ANALYTES.filter((m) => cp[m] && cp[m].status === "populated" && (num(cp[m].n_studies) ?? 0) === 0)
    const totalN = Object.values(cp).reduce((a, c) => a + (num(c.n_studies) ?? 0), 0)
    const tierInfo = ctx.tiers.get(slug)
    const tier = tierInfo ? tierInfo.tier : null
    const breadthThin = breadth < 5
    let status, missing
    const have = `${breadth}/10 HMTc analytes, total n=${totalN}`
    if (breadthThin) {
      status = "GAP"
      missing = `only ${breadth}/10 analytes have evidence`
    } else if (!tier || !TIER_STEP_TABLE[tier]) {
      status = "tier-unset"
      missing = "consumption tier unset; depth bar uncheckable"
    } else {
      const expected = TIER_STEP_TABLE[tier].expected_min_total_n
      if (totalN < expected) {
        status = "below-tier"
        missing = `${tier} tier expects total n>=${expected}; have ${totalN}`
      } else {
        status = "OK"
        missing = declaredGaps.length ? `labeled data-gaps: ${declaredGaps.join(", ")}` : "—"
      }
    }
    dims.D1 = {
      label: "D1 Analyte coverage" + (tier ? ` (tier: ${tier})` : " (tier: unset)"),
      status,
      have,
      missing,
      breadth,
      totalN,
      tier,
    }
  }

  // ---- D2: regional / jurisdictional coverage ----
  {
    const jurCounts = new Map()
    let withJur = 0
    for (const s of sourceSet) {
      if (s.jurisdictions.length === 0) continue
      withJur++
      for (const j of new Set(s.jurisdictions)) jurCounts.set(j, (jurCounts.get(j) || 0) + 1)
    }
    const distinct = jurCounts.size
    let topShare = 0
    let topRegion = null
    for (const [j, c] of jurCounts) {
      const share = withJur ? c / withJur : 0
      if (share > topShare) {
        topShare = share
        topRegion = j
      }
    }
    const overConcentrated = topShare > 0.6 && distinct > 1
    const sectionThere = sectionNonEmpty(content, "ranges_by_source")
    let status, missing
    if (!sectionThere && !sectionPresent(content, "ranges_by_source")) {
      status = "GAP"
      missing = "Ranges by source/region/variety section missing"
    } else if (distinct >= 3 && !overConcentrated && sectionThere) {
      status = "OK"
      missing = "—"
    } else {
      status = "below-tier"
      missing = overConcentrated
        ? `over-concentrated: ${topRegion} supplies ${pct(topShare)} of sources`
        : `only ${distinct} distinct jurisdiction(s)`
    }
    dims.D2 = {
      label: "D2 Regional coverage",
      status,
      have: `${distinct} jurisdictions${topRegion ? `, top ${topRegion} ${pct(topShare)}` : ""}`,
      missing,
    }
    // geographic_breakdown sub-field population is ~0 corpus-wide; surface as a
    // review residual, never scored.
    reviewFlags.push({ slug, dimension: "D2", review: "regional-discussion", detail: "confirm prose names >=2 of top-3 jurisdictions and is substantive" })
  }

  // ---- D3 / D4 shared upstream-source partition ----
  const upstream = sourceSet.filter((s) => s.matrices.some((m) => UPSTREAM_MATRICES.has(m)) || s.attribution)
  const attributionSources = upstream.filter((s) => s.attribution || s.matrices.some((m) => UPSTREAM_MATRICES.has(m)))

  // ---- D3: anthropogenic attribution ----
  {
    const matrixCounts = new Map()
    for (const s of attributionSources) for (const m of s.matrices) if (UPSTREAM_MATRICES.has(m)) matrixCounts.set(m, (matrixCounts.get(m) || 0) + 1)
    const supplyChainLinked = /\[\[supply-chain\//i.test(content)
    const present = attributionSources.length > 0 && supplyChainLinked
    const haveParts = [...matrixCounts.entries()].map(([m, c]) => `${c} ${m}`)
    dims.D3 = {
      label: "D3 Anthropogenic evidence",
      status: present ? "OK" : "GAP",
      have: haveParts.length ? `${haveParts.join(" + ")}${supplyChainLinked ? "; supply-chain hub linked" : "; no supply-chain link"}` : "no upstream/attribution sources",
      missing: present ? "—" : !supplyChainLinked ? "link a supply-chain/ hub page" : "route a source with upstream matrices or attribution:true",
    }
  }

  // ---- D4: background / baseline mechanism ----
  {
    const drivers = Array.isArray(fm.drivers) ? fm.drivers.filter(Boolean) : []
    const sectionThere = sectionNonEmpty(content, "why_accumulates")
    const upstreamBacked = upstream.length > 0
    const present = sectionThere && drivers.length > 0 && upstreamBacked
    let missing = "—"
    if (!present) {
      const m = []
      if (!sectionThere) m.push("accumulation-mechanism section empty/missing")
      if (drivers.length === 0) m.push("drivers[] empty")
      if (!upstreamBacked) m.push("no upstream source to substantiate")
      missing = m.join("; ")
    }
    dims.D4 = {
      label: "D4 Background mechanism",
      status: present ? "OK" : "GAP",
      have: `section ${sectionThere ? "present" : "empty"}, ${drivers.length} drivers, ${upstream.length} upstream source(s)`,
      missing,
    }
    reviewFlags.push({ slug, dimension: "D4", review: "driver-citation", detail: "confirm prose cites a source for each driver" })
  }

  // ---- D5: pooling depth per analyte ----
  {
    const perAnalyte = []
    let worst = "CONFIDENT"
    const targets = priority.length ? priority : populatedMetals
    for (const m of targets) {
      let info = bands.get(m)
      let note = ""
      if (!info) {
        // fallback to contamination_profile n_studies/confidence
        const c = cp[m]
        const nStudies = c ? num(c.n_studies) ?? 0 : 0
        const conf = c ? String(c.confidence || "").toLowerCase() : ""
        let band
        if (!c || c.status !== "populated" || nStudies === 0) band = "GAP"
        else if (nStudies < 3) band = "THIN"
        else if (conf === "high") band = "CONFIDENT"
        else if (conf === "medium") band = "POOLABLE"
        else band = "THIN"
        info = { band, why: band === "THIN" && nStudies < 3 ? `needs ${3 - nStudies} more study(ies)` : "" }
        note = "missing-bridge"
        dataFlags.push(`missing-bridge: ${m} has no bridged product row; fell back to n_studies/confidence`)
      } else {
        // cross-check distinct_sources vs frontmatter n_studies
        const c = cp[m]
        if (c && c.status === "populated") {
          const ns = num(c.n_studies)
          const ds = num(info.row && info.row.distinct_sources)
          if (ns !== null && ds !== null && Math.abs(ns - ds) >= 3) {
            dataFlags.push(`distinct-vs-nstudies-disagree: ${m} n_studies=${ns} vs distinct_sources=${ds}`)
          }
        }
      }
      perAnalyte.push({ metal: m, band: info.band, why: info.why, note })
      if (BAND_ORDER[info.band] < BAND_ORDER[worst]) worst = info.band
    }
    if (perAnalyte.length === 0) worst = "GAP"
    const blockers = perAnalyte.filter((p) => BAND_ORDER[p.band] < BAND_ORDER.POOLABLE)
    dims.D5 = {
      label: "D5 Pooling depth",
      status: worst,
      have: perAnalyte.map((p) => `${p.metal} ${p.band}`).join(", ") || "no priority analytes",
      missing: blockers.length ? blockers.map((b) => `${b.metal}: ${b.why || b.band}`).join("; ") : "—",
      perAnalyte,
    }
  }

  // ---- D6: speciation transparency ----
  {
    const offending = []
    for (const m of Object.keys(cp)) {
      const c = cp[m]
      if (!c || c.status !== "populated") continue
      if (AS_HG_BARE.has(m)) {
        offending.push(`${m}: undifferentiated As/Hg value`)
      }
    }
    // routing missing_metal_species cross-check across bridged products
    const missingSpecies = new Set()
    const products = slugsFor(fm.used_in_products, "products")
    for (const p of products) {
      for (const r of ctx.routingByProduct.get(p) || []) {
        const ms = String(r.missing_metal_species || "").trim()
        if (ms) ms.split(/[;,]/).forEach((x) => x.trim() && missingSpecies.add(x.trim()))
      }
    }
    const declared = Object.keys(cp).filter((m) => AS_HG_SPECIATED.has(m) && cp[m].status === "populated")
    const status = offending.length === 0 ? "OK" : "GAP"
    dims.D6 = {
      label: "D6 Speciation",
      status,
      have: declared.length ? `${declared.join(", ")} declared` : "no As/Hg cells populated",
      missing: offending.length ? offending.join("; ") : "—",
    }
    if (missingSpecies.size) reviewFlags.push({ slug, dimension: "D6", review: "missing-metal-species", detail: `routing flags missing species in bridged products: ${[...missingSpecies].join(", ")}` })
  }

  // ---- D7: basis declaration ----
  {
    const noBasis = []
    for (const m of Object.keys(cp)) {
      const c = cp[m]
      if (!c || c.status !== "populated") continue
      const b = c.basis ? String(c.basis).toLowerCase() : ""
      const hasToken = b && [...BASIS_TOKENS].some((t) => b.includes(t))
      if (!hasToken) noBasis.push(m)
    }
    // unknown_conversion from bridged contribution_log
    let unknownConv = false
    const unknownMetals = new Set()
    for (const r of bridged) {
      const log = parseContributionLog(r.contribution_log)
      if (log.some((e) => e && e.unknown_conversion === true)) {
        unknownConv = true
        unknownMetals.add(r.metal_species)
      }
    }
    const populatedCount = Object.values(cp).filter((c) => c.status === "populated").length
    let status, missing
    if (noBasis.length === 0 && !unknownConv) {
      status = "OK"
      missing = "—"
    } else if (noBasis.length > 0) {
      status = "GAP"
      missing = `${noBasis.length} populated cell(s) lack a basis token: ${noBasis.join(", ")}`
    } else {
      status = "FLAGGED"
      missing = `unknown_conversion in bridged pooling for: ${[...unknownMetals].join(", ")}`
    }
    dims.D7 = {
      label: "D7 Basis declaration",
      status,
      have: `${populatedCount - noBasis.length}/${populatedCount} populated cells declare a basis token`,
      missing,
      clean: noBasis.length === 0 && !unknownConv,
      naOnNoData: populatedCount === 0,
    }
  }

  // ---- D8: provenance integrity (hard gate) ----
  {
    const failures = []
    // (a)/(d) claim provenance for this slug all supported
    const claims = ctx.provByIngredient.get(slug) || []
    const unsupported = claims.filter((c) => String(c.supported).toLowerCase() !== "true")
    if (unsupported.length) failures.push(`${unsupported.length} unsupported claim(s) (e.g. "${(unsupported[0].claim || "").slice(0, 40)}")`)
    // (b) cited sources resolve and name this ingredient
    const cited = citedSourceSlugs(content)
    const orphans = []
    const foreign = []
    for (const s of cited) {
      const rec = ctx.sourceById.get(s)
      if (!rec) orphans.push(s)
      else if (!rec.ingredients.includes(slug)) foreign.push(s)
    }
    if (orphans.length) failures.push(`${orphans.length} orphan citation(s): ${orphans.slice(0, 3).join(", ")}`)
    if (foreign.length) failures.push(`${foreign.length} foreign citation(s) not naming ${slug}: ${foreign.slice(0, 3).join(", ")}`)
    // (c) body-table n= equals frontmatter n_studies
    const tableNs = parseBodyTableN(content)
    for (const [metal, nTable] of tableNs) {
      const c = cp[metal]
      if (!c || c.status !== "populated") continue
      const nFm = num(c.n_studies)
      if (nFm !== null && nTable !== nFm) failures.push(`${metal}: body table n=${nTable} != frontmatter n_studies=${nFm}`)
    }
    // (e) contributing sources not in routing_malformed at blocking/strict severity
    const badSources = sourceSet.filter((s) => ctx.malformedStrict.has(s.id))
    if (badSources.length) failures.push(`${badSources.length} contributing source(s) malformed (strict): ${badSources.slice(0, 3).map((s) => s.id).join(", ")}`)

    dims.D8 = {
      label: "D8 Provenance integrity",
      status: failures.length === 0 ? "OK" : "GAP",
      have: `${claims.length} claims checked, ${claims.length - unsupported.length} supported; ${cited.length} citations, ${orphans.length} orphan, ${foreign.length} foreign`,
      missing: failures.length ? failures.join("; ") : "—",
    }
  }

  // ---- D9: mitigation / remediation evidence ----
  {
    const body = sectionBody(content, "mitigation_options")
    const sectionThere = sectionNonEmpty(content, "mitigation_options")
    const mitigationLinks = countLinks(body, "mitigation")
    // cited levers: source-cited paragraphs within the mitigation section
    const citedLevers = body ? citedSourceSlugs(body).length : 0
    const present = sectionThere && citedLevers >= 1
    dims.D9 = {
      label: "D9 Mitigation",
      status: present ? "OK" : "GAP",
      have: `${citedLevers} cited lever(s), ${mitigationLinks} mitigation/ link(s)`,
      missing: present ? "—" : sectionThere ? "section present but no source-cited lever" : "Mitigation options section empty/missing",
    }
  }

  // ---- D10: regulatory coverage ----
  {
    const body = sectionBody(content, "regulatory_limits")
    const sectionThere = sectionNonEmpty(content, "regulatory_limits")
    const regSlugs = citedRegulationSlugs(content)
    const supersededCited = regSlugs.filter((s) => /-superseded$/i.test(s) || /superseded/i.test(s))
    // crosswalk proxy: populated metals that have at least one linked regulation
    // covering them (best-effort: resolve regulation page metal frontmatter).
    const regMetals = new Set()
    for (const s of regSlugs) {
      const meta = readRegulationMetals(ctx, s)
      for (const m of meta) regMetals.add(m)
    }
    const populatedSet = new Set(populatedMetals)
    const analyteGap = [...populatedSet].filter((m) => !regMetals.has(m) && !regMetals.has(canonicalMetal(m)))
    let status, missing
    if (!sectionThere && !sectionPresent(content, "regulatory_limits")) {
      status = "GAP"
      missing = "Regulatory limits section missing"
    } else if (regSlugs.length === 0) {
      status = "GAP"
      missing = "no regulations/ link in section"
    } else if (supersededCited.length) {
      status = "below-tier"
      missing = `superseded rule cited as operative: ${supersededCited.join(", ")}`
    } else if (regMetals.size > 0 && analyteGap.length > Math.ceil(populatedSet.size / 2)) {
      status = "below-tier"
      missing = `crosswalk thin: ${analyteGap.length}/${populatedSet.size} populated analytes have no linked governing limit`
    } else {
      status = "OK"
      missing = analyteGap.length ? `unmapped analytes: ${analyteGap.join(", ")}` : "—"
    }
    dims.D10 = {
      label: "D10 Regulatory coverage",
      status,
      have: `${regSlugs.length} rule link(s), ${regMetals.size} metal(s) covered`,
      missing,
    }
    reviewFlags.push({ slug, dimension: "D10", review: "not-comparable", detail: "confirm matrix-scope fit and like-for-like speciation (tAs cap vs iAs literature is not comparable)" })
  }

  // ---- D11: occurrence-evidence completeness roll-up ----
  {
    const tierInfo = ctx.tiers.get(slug)
    const tier = tierInfo ? tierInfo.tier : null
    const depthGate = !tier || !TIER_STEP_TABLE[tier] ? "tier-unset" : dims.D1.status === "GAP" || dims.D1.status === "below-tier" ? "below-bar" : "met"
    const requiredBand = tier && TIER_STEP_TABLE[tier] ? TIER_STEP_TABLE[tier].readiness : "POOLABLE"

    const blocking = []
    for (const p of dims.D5.perAnalyte || []) {
      const need = requiredBand === "CONFIDENT" ? BAND_ORDER.CONFIDENT : BAND_ORDER.POOLABLE
      if (BAND_ORDER[p.band] < need) blocking.push(`${p.metal}: ${p.band}${p.why ? `, ${p.why}` : ""}`)
    }
    if (dims.D7.status === "GAP") blocking.push(`basis: ${dims.D7.missing}`)
    if (dims.D7.status === "FLAGGED") blocking.push(`basis: ${dims.D7.missing}`)
    let verdict
    if (blocking.length === 0 && depthGate === "met") verdict = "OCCURRENCE-READY"
    else if (blocking.length === 0 && depthGate === "tier-unset") verdict = "PARTIAL"
    else if (priority.length > 0 && blocking.length <= 1 && dims.D5.perAnalyte.every((p) => BAND_ORDER[p.band] >= BAND_ORDER.THIN)) verdict = "PARTIAL"
    else verdict = "EVIDENCE-GAP"

    const blockList = blocking.slice()
    if (depthGate === "tier-unset") blockList.push("consumption tier unset (depth bar uncheckable)")
    else if (depthGate === "below-bar") blockList.push(`depth below ${tier} bar`)

    dims.D11 = {
      label: "D11 Occurrence-evidence completeness",
      status: verdict,
      have: priority.length ? `priority occurrence analytes: ${priority.join(", ")}` : "no priority analytes",
      missing: blockList.length ? blockList.join("; ") : "—",
    }
  }

  // ---- consumer-protection sufficiency input to the balance row ----
  const cpSufficiency = computeConsumerProtection(slug, fm, content, ctx, reviewFlags)

  // ---- principle-balance row ----
  const balance = computePrincipleBalance(dims, cpSufficiency)

  // ---- gaps for the register ----
  const gaps = collectGaps(slug, ctx.tiers.get(slug), dims)

  return { slug, dims, balance, reviewFlags, dataFlags, gaps, cpSufficiency, tier: ctx.tiers.get(slug) || null }
}

function slugsForMetals(value) {
  if (!Array.isArray(value)) return []
  return value.map((x) => String(x).trim()).filter(Boolean)
}

function canonicalMetal(m) {
  if (m === "Cr") return "Cr-VI"
  if (m === "Cr-VI") return "Cr"
  return m
}

function parseContributionLog(raw) {
  if (!raw) return []
  try {
    const v = JSON.parse(raw)
    return Array.isArray(v) ? v : []
  } catch {
    return []
  }
}

// body table rows look like: | Pb | n=61 | ... |
function parseBodyTableN(content) {
  const out = new Map()
  const re = /^\|\s*([A-Za-z][A-Za-z-]*)\s*\|\s*n=(\d+)\s*\|/gim
  let m
  while ((m = re.exec(content))) out.set(m[1], Number(m[2]))
  return out
}

function citedRegulationSlugs(content) {
  const out = new Set()
  const re = /\[\[regulations\/([a-z0-9][a-z0-9._-]*?)(?:\|[^\]]*)?\]\]/gi
  let m
  while ((m = re.exec(content))) out.add(m[1])
  return [...out]
}

const _regMetalCache = new Map()
function readRegulationMetals(ctx, slug) {
  if (_regMetalCache.has(slug)) return _regMetalCache.get(slug)
  let metals = []
  const p = path.join(ctx.repoRoot, "wiki/regulations", `${slug}.md`)
  if (fs.existsSync(p)) {
    try {
      const d = matter(fs.readFileSync(p, "utf8")).data
      const m = d.metal ?? d.metals
      if (Array.isArray(m)) metals = m.map(String)
      else if (m) metals = [String(m)]
    } catch {
      metals = []
    }
  }
  _regMetalCache.set(slug, metals)
  return metals
}

function computeConsumerProtection(slug, fm, content, ctx, reviewFlags) {
  // Deterministic: child-food coverage, as-consumed basis present, dose anchor.
  const products = slugsFor(fm.used_in_products, "products")
  const childRe = /(infant|baby|toddler|child|formula|cereal)/i
  const childFood = products.some((p) => childRe.test(p))
  const cp = fm.contamination_profile && typeof fm.contamination_profile === "object" ? fm.contamination_profile : {}
  const asConsumed = Object.values(cp).some((c) => c && /as-consumed/i.test(String(c.basis || "")))
  // dose anchor: a quantified dose/frequency phrase somewhere on the page
  const doseAnchor = /\b\d+(?:\.\d+)?\s*(?:µg|ug|mg|ppb|g)\s*(?:\/|per)\s*(?:kg|day|serving|week|bw)/i.test(content)
  // sufficiency bar: if child-consumed, expects child-matrix coverage + dose anchor
  let bar
  if (childFood) bar = doseAnchor && asConsumed ? 1 : doseAnchor || asConsumed ? 0.5 : 0
  else bar = doseAnchor ? 1 : 0.5
  if (childFood && !doseAnchor) reviewFlags.push({ slug, dimension: "balance", review: "dose-anchor", detail: "child-consumed ingredient lacks a quantified dose/frequency anchor" })
  return { childFood, asConsumed, doseAnchor, bar }
}

function statusToBar(status) {
  switch (status) {
    case "OK":
    case "CONFIDENT":
    case "POOLABLE":
    case "OCCURRENCE-READY":
      return 1
    case "below-tier":
    case "PARTIAL":
    case "FLAGGED":
    case "THIN":
      return 0.5
    case "tier-unset":
    case "N/A":
      return null // neutral; excluded from spread
    default:
      return 0 // GAP / EVIDENCE-GAP
  }
}

function computePrincipleBalance(dims, cpSufficiency) {
  const acc = {}
  for (const pr of PRINCIPLES) acc[pr] = []
  for (const [dimKey, dim] of Object.entries(dims)) {
    const pr = PRINCIPLE_BY_DIMENSION[dimKey]
    if (!pr) continue
    const bar = statusToBar(dim.status)
    if (bar !== null) acc[pr].push(bar)
  }
  // fold consumer-protection sufficiency input
  acc["consumer-protection"].push(cpSufficiency.bar)

  const bars = {}
  for (const pr of PRINCIPLES) {
    const arr = acc[pr]
    bars[pr] = arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null
  }
  const present = Object.entries(bars).filter(([, v]) => v !== null)
  if (present.length < 2) return { status: "N/A", bars, starved: null, spread: 0 }
  const values = present.map(([, v]) => v)
  const max = Math.max(...values)
  const min = Math.min(...values)
  const spread = max - min
  const starvedEntry = present.find(([, v]) => v === min)
  const starved = starvedEntry ? starvedEntry[0] : null
  const flag = spread >= PRINCIPLE_SPREAD_THRESHOLD
  return { status: flag ? "flag" : "OK", bars, starved, spread, strongest: present.find(([, v]) => v === max)?.[0] || null }
}

function collectGaps(slug, tierInfo, dims) {
  const tier = tierInfo ? tierInfo.tier : "tier-unset"
  const gaps = []
  const push = (dimension, status, gapType, missing, fix, principle) =>
    gaps.push({ slug, tier, dimension, status, gapType, missing, fix, principle })

  for (const [k, d] of Object.entries(dims)) {
    const principle = PRINCIPLE_BY_DIMENSION[k] || ""
    if (["GAP", "below-tier", "THIN", "FLAGGED", "EVIDENCE-GAP", "PARTIAL"].includes(d.status)) {
      push(k, d.status, gapTypeFor(k, d.status), d.missing, suggestedFix(k, d), principle)
    }
  }
  return gaps
}

function gapTypeFor(dim, status) {
  if (status === "GAP") return "missing"
  if (status === "below-tier") return "thin"
  if (status === "THIN") return "thin-pooling"
  if (status === "FLAGGED") return "flagged"
  if (status === "EVIDENCE-GAP") return "evidence-gap"
  if (status === "PARTIAL") return "partial"
  return status
}

function suggestedFix(dim, d) {
  switch (dim) {
    case "D1":
      return "advance pending analytes to populated or label as data-gap"
    case "D2":
      return "route sources spanning >=3 distinct jurisdictions; populate Ranges-by-region section"
    case "D3":
      return "route a source tagged matrices:[soil|paddy-soil|drinking-water] and link a supply-chain/ hub"
    case "D4":
      return "populate accumulation-mechanism section, drivers[], and >=1 upstream source"
    case "D5":
      return "route >=3 distinct sample-level sources for blocking analytes"
    case "D6":
      return "declare As/Hg species (iAs/tAs, MeHg/tHg) per populated cell"
    case "D7":
      return "add a basis token (dry-weight|wet-weight|as-sold|as-consumed|reconstituted) to each populated cell"
    case "D8":
      return "resolve unsupported/orphan/foreign citations and reconcile body-table n= with frontmatter"
    case "D9":
      return "add a source-cited mitigation lever; link mitigation/ pages"
    case "D10":
      return "link governing regulations/ rule pages for populated analytes; drop superseded citations"
    case "D11":
      return "clear D5/D7 blockers above; seed consumption_tier"
    default:
      return ""
  }
}

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

function pct(x) {
  return `${Math.round(x * 100)}%`
}

export function renderBlock(result) {
  const { dims, balance } = result
  const order = ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11"]
  const lines = []
  lines.push(MARKER_OPEN)
  lines.push("")
  lines.push("## Completeness scorecard")
  lines.push("")
  lines.push(
    "_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._",
  )
  lines.push("")
  lines.push("| Dimension | Status | What's there (auditable counts) | What's missing |")
  lines.push("|---|---|---|---|")
  for (const k of order) {
    const d = dims[k]
    if (!d) continue
    lines.push(`| ${escapePipe(d.label)} | ${d.status} | ${escapePipe(d.have)} | ${escapePipe(d.missing)} |`)
  }
  const starved = balance.starved ? ` — starved: ${balance.starved}` : ""
  const balanceHave = Object.entries(balance.bars)
    .filter(([, v]) => v !== null)
    .map(([k, v]) => `${k} ${v.toFixed(2)}`)
    .join(", ")
  lines.push(
    `| **Principle balance** | **${balance.status}** | ${escapePipe(balanceHave || "insufficient signal")} | ${escapePipe(balance.status === "flag" ? `spread ${balance.spread.toFixed(2)}${starved}` : "—")} |`,
  )
  lines.push("")
  lines.push(MARKER_CLOSE)
  return lines.join("\n")
}

function renderStubBlock() {
  return [
    MARKER_OPEN,
    "",
    "## Completeness scorecard",
    "",
    "_Not yet characterized — scorecard activates at 2 contributing A-tier sources._",
    "",
    MARKER_CLOSE,
  ].join("\n")
}

function escapePipe(s) {
  return String(s).replace(/\|/g, "\\|").replace(/\n/g, " ")
}

// STAFF-ONLY as of 2026-08: the scorecard is stripped from public ingredient
// pages, never injected. Its D11 occurrence-evidence completeness and Principle-balance
// (brand-value / legal-defensibility) rows are HMTc program internals (CLAUDE.md
// Part 2 firewall), and broadcasting THIN / GAP / EVIDENCE-GAP as the
// opening section undercuts the reference posture. The audit still runs — it
// feeds the staff registers in writeRegisters() — but the public block is
// removed. Idempotent: once a page has no block, this is a no-op, so the prebuild
// (and the Vercel build) never re-inject it.
function stripBlock(content) {
  const open = content.indexOf(MARKER_OPEN)
  if (open === -1) return content
  const close = content.indexOf(MARKER_CLOSE, open)
  if (close === -1) return content
  const end = close + MARKER_CLOSE.length
  const before = content.slice(0, open).replace(/\n+$/, "")
  const after = content.slice(end).replace(/^\n+/, "")
  return `${before}\n\n${after}`
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  const args = new Set(process.argv.slice(2))
  const check = args.has("--check")
  const noPages = args.has("--no-pages")
  const repoRoot = process.cwd()
  const ctx = buildContext({ repoRoot })

  const ingredientsDir = ctx.ingredientsDir
  const files = fs
    .readdirSync(ingredientsDir)
    .filter((f) => f.endsWith(".md") && f !== "index.md")
    .sort()

  const allGaps = []
  const allReviewFlags = []
  const allDataFlags = []
  const changedFiles = []
  let scored = 0
  let stubs = 0
  const verdicts = { "OCCURRENCE-READY": 0, PARTIAL: 0, "EVIDENCE-GAP": 0 }
  let staleCount = 0

  for (const file of files) {
    const filePath = path.join(ingredientsDir, file)
    const content = fs.readFileSync(filePath, "utf8")
    let fm
    try {
      fm = matter(content).data
    } catch {
      fm = {}
    }
    const slug = file.replace(/\.md$/, "")

    // Score still runs (feeds the staff registers in writeRegisters); the block
    // is no longer rendered onto the public page.
    if (isStub(fm)) {
      stubs++
    } else {
      scored++
      const result = scoreIngredient(slug, fm, content, ctx)
      allGaps.push(...result.gaps)
      allReviewFlags.push(...result.reviewFlags)
      for (const df of result.dataFlags) allDataFlags.push({ slug, flag: df })
      if (result.dims.D11) verdicts[result.dims.D11.status] = (verdicts[result.dims.D11.status] || 0) + 1
    }

    const next = stripBlock(content)
    if (next !== content) {
      staleCount++
      if (!noPages && !check) {
        fs.writeFileSync(filePath, next, "utf8")
        changedFiles.push(`wiki/ingredients/${file}`)
      }
    }
  }

  // --- assemble-intake-figure autonomous task when the tier table is absent ---
  if (!ctx.tierTablePresent) {
    allGaps.push({
      slug: "*",
      tier: "tier-unset",
      dimension: "D1",
      status: "tier-unset",
      gapType: "assemble-intake-figure",
      missing: "data/reference/consumption-tiers.csv not assembled; D1-depth and D11 depth-gate render tier-unset corpus-wide",
      fix: "run tools/evidence/build-consumption-tiers.mjs against a committed FAO/EFSA/USDA intake dataset (autonomous; no human curation)",
      principle: "consumer-protection",
    })
  }

  // --check is side-effect-free (pre-commit uses it). Registers refresh on a
  // normal run and on register-only (--no-pages) runs.
  if (!check) {
    writeRegisters(repoRoot, { allGaps, allReviewFlags, allDataFlags, ctx })
  }

  // audit rows for the pre-commit write barrier
  if (!noPages && !check && changedFiles.length) {
    const ts = new Date().toISOString()
    const today = ts.slice(0, 10)
    const auditLog = path.join(repoRoot, "data/evidence/wiki_edit_audit.jsonl")
    const rows = changedFiles.map((page) => ({
      edit_id: randomUUID(),
      page,
      span_id: "hmi-completeness-scorecard",
      source_document: `deterministic scorecard | frontmatter + data/evidence/{hmtc_aggregate_distributions,product_source_routing_audit,claim-provenance-audit}.csv + wiki/sources/*.md`,
      retrieval_date: today,
      models_used: ["deterministic/ingredient-scorecard-generator"],
      model_agreement_state: "not_applicable",
      applied_at: ts,
      commit_sha: "pending",
    }))
    fs.appendFileSync(auditLog, rows.map((r) => JSON.stringify(r)).join("\n") + "\n", "utf8")
  }

  console.log(
    `Ingredient scorecard: ${scored} scored, ${stubs} stub${check ? " (check)" : ""}; ${changedFiles.length} page block(s) ${check ? "would change" : "written"}.`,
  )
  console.log(`  D11 verdicts: OCCURRENCE-READY ${verdicts["OCCURRENCE-READY"]}, PARTIAL ${verdicts.PARTIAL}, EVIDENCE-GAP ${verdicts["EVIDENCE-GAP"]}`)
  console.log(`  ${allGaps.length} gap rows, ${allReviewFlags.length} review flags, ${allDataFlags.length} data-hygiene flags.`)
  if (!ctx.tierTablePresent) console.log(`  consumption-tiers.csv absent -> D1-depth/D11-gate render tier-unset (non-blocking); assemble-intake-figure task registered.`)

  if (check && staleCount > 0) {
    console.error(`Scorecard blocks stale on ${staleCount} page(s). Run \`node tools/evidence/build-ingredient-scorecard.mjs\`.`)
    process.exit(1)
  }
}

function writeRegisters(repoRoot, { allGaps, allReviewFlags, allDataFlags, ctx }) {
  const evidenceDir = path.join(repoRoot, "data/evidence")

  // --- gap register CSV (ranked) ---
  const ranked = rankGaps(allGaps)
  const gapHeader = ["ingredient_slug", "consumption_tier", "dimension", "status", "gap_type", "specific_missing", "suggested_fix", "principle"]
  const gapLines = [gapHeader.join(",")]
  for (const g of ranked) gapLines.push(csvLine([g.slug, g.tier, g.dimension, g.status, g.gapType, g.missing, g.fix, g.principle]))
  fs.writeFileSync(path.join(evidenceDir, "ingredient-completeness-gaps.csv"), gapLines.join("\n") + "\n")

  // --- review-flags side register ---
  const rfHeader = ["ingredient_slug", "dimension", "review", "detail"]
  const rfLines = [rfHeader.join(",")]
  for (const r of allReviewFlags) rfLines.push(csvLine([r.slug, r.dimension, r.review, r.detail]))
  for (const d of allDataFlags) rfLines.push(csvLine([d.slug, "data-hygiene", d.flag.split(":")[0], d.flag]))
  fs.writeFileSync(path.join(evidenceDir, "ingredient-scorecard-review-flags.csv"), rfLines.join("\n") + "\n")

  // --- rendered master worklist page (STAFF-only: data/evidence/, NOT wiki/) ---
  // Lives outside wiki/ so Quartz never builds it to public. It enumerates
  // per-ingredient occurrence-completeness / principle gaps — staff worklist data,
  // same firewall class as the per-page scorecard block that was removed.
  fs.writeFileSync(path.join(repoRoot, "data/evidence/completeness-gaps.md"), renderGapsPage(ranked, allReviewFlags, allDataFlags, ctx))
}

const TIER_RANK = { staple: 0, common: 1, occasional: 2, rare: 3, "tier-unset": 4 }
const DIM_SEVERITY = { D8: 0, D11: 1, D5: 2, D6: 3, D7: 4, D1: 5, D10: 6, D3: 7, D4: 8, D9: 9, D2: 10 }

function rankGaps(gaps) {
  return gaps.slice().sort((a, b) => {
    const ta = TIER_RANK[a.tier] ?? 4
    const tb = TIER_RANK[b.tier] ?? 4
    if (ta !== tb) return ta - tb
    const da = DIM_SEVERITY[a.dimension] ?? 99
    const db = DIM_SEVERITY[b.dimension] ?? 99
    if (da !== db) return da - db
    return a.slug.localeCompare(b.slug)
  })
}

function renderGapsPage(ranked, reviewFlags, dataFlags, ctx) {
  const today = new Date().toISOString().slice(0, 10)
  const byDim = {}
  for (const g of ranked) byDim[g.dimension] = (byDim[g.dimension] || 0) + 1
  const lines = []
  lines.push("---")
  lines.push("title: Ingredient Completeness Gaps")
  lines.push("type: index")
  lines.push("status: generated")
  lines.push("audience: [internal]")
  lines.push(`updated: ${today}`)
  lines.push("---")
  lines.push("")
  lines.push("# Ingredient Completeness Gaps")
  lines.push("")
  lines.push(
    "_Auto-generated by `tools/evidence/build-ingredient-scorecard.mjs`. The ranked master worklist that drives the autonomous fix queue. Ranked by consumption tier first, then dimension severity (D8 provenance and D11 occurrence completeness outrank D2 cosmetic gaps). No human is routed; `review:` residuals are worked by a separate verified pass. No composite score is computed anywhere._",
  )
  lines.push("")
  lines.push(`Total open gap rows: ${ranked.length}. By dimension: ${Object.entries(byDim).map(([k, v]) => `${k} ${v}`).join(", ") || "none"}.`)
  if (!ctx.tierTablePresent) {
    lines.push("")
    lines.push(
      "> Consumption-tier table (`data/reference/consumption-tiers.csv`) is not yet assembled, so D1-depth and the D11 depth-gate render `tier-unset` corpus-wide. This is graceful degradation, not a failure: every other dimension scores fully. The `assemble-intake-figure` task below is autonomous (run `tools/evidence/build-consumption-tiers.mjs` against a committed FAO/EFSA/USDA intake dataset); it is never routed to a person.",
    )
  }
  lines.push("")
  lines.push("## Ranked worklist")
  lines.push("")
  lines.push("| Rank | Ingredient | Tier | Dim | Status | Missing | Suggested fix |")
  lines.push("|---:|---|---|---|---|---|---|")
  ranked.forEach((g, i) => {
    lines.push(
      `| ${i + 1} | ${g.slug} | ${g.tier} | ${g.dimension} | ${g.status} | ${escapePipe(g.missing)} | ${escapePipe(g.fix)} |`,
    )
  })
  lines.push("")
  lines.push("## Review residuals (autonomous verified pass — never routed to a person)")
  lines.push("")
  lines.push(`${reviewFlags.length} \`review:\` residual(s) and ${dataFlags.length} data-hygiene flag(s) are recorded in \`data/evidence/ingredient-scorecard-review-flags.csv\`. They are deterministic-proxy residuals (region-discussion quality, driver citations, matrix-scope comparability, dose anchors) and never enter a scored chip.`)
  lines.push("")
  return lines.join("\n")
}

// Run when invoked directly (not when imported by the test).
import { fileURLToPath } from "node:url"
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main()
}
