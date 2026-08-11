#!/usr/bin/env node
// export-cert-occurrence-evidence.mjs  (HMI-side, firewall-clean)
//
// Emits ONE self-contained per-(row, analyte) JSON snapshot for the
// heavymetalcertified.com standards generator's "Occurrence & Derivation
// Rationale" section. The cert build never reads this repo directly (Part-2
// firewall + Vercel shallow-clone safety): HMI exports this snapshot, it is
// committed into the cert repo, and the cert renderer reads the local copy.
// One-way: HMI -> snapshot -> cert. Cert is never read here.
//
// FIREWALL (CLAUDE.md Part 2 / Part 19): this snapshot is the HMT&C derivation
// asset — occurrence findings PLUS the pooled percentile, the government-limit
// context, and the limit rationale. It renders on heavymetalcertified.com ONLY
// and must never be published on a heavymetalindex.com URL. Occurrence FINDINGS
// are literature and are cited one-way to the index source pages (which are
// public). The percentile-selection arithmetic stays staff/cert-side.
//
// NO FABRICATION (the load-bearing rule): every occurrence figure is READ from
// an existing artifact — the pooled aggregate (hmtc_aggregate_distributions.csv,
// produced by build-hmtc-aggregate-distributions.mjs) or a per-study summary CSV
// — never computed here. Every cited source resolves to a wiki/sources/<id>.md
// page, plus its DOI when the source carries one. This tool re-presents; it does
// not derive.
//
// INPUT
//   data/evidence/hmtc_aggregate_distributions.csv      pooled per-cell occurrence + Method v2.0 derivation
//   data/evidence/category*_summary.csv                 per-study occurrence (citable ranges/median/n)
//   data/evidence/standards-not-material.csv            substantiated not-material ledger (rebuttable presumption)
//   data/workbench/standards/{cat1,cat9}-compiled/*.json compiled cell decisions (gov / read_across / not_material / special)
//   wiki/sources/*.md                                   source metadata (title, year, doi, sample_n, products, metals)
// OUTPUT
//   --out PATH   (default data/workbench/standards/cert-occurrence-evidence.json)
//
// Usage: node tools/evidence/export-cert-occurrence-evidence.mjs [--out PATH] [--report]

import fs from "node:fs"
import path from "node:path"
import { execSync } from "node:child_process"

const REPO = process.cwd()
const args = process.argv.slice(2)
const flag = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d }
const REPORT = args.includes("--report")
const OUT = flag("--out", path.join(REPO, "data/workbench/standards/cert-occurrence-evidence.json"))

const WIKI = path.join(REPO, "wiki")
const EVID = path.join(REPO, "data/evidence")
const WB = path.join(REPO, "data/workbench/standards")

// ---------------------------------------------------------------------------
// CSV / frontmatter helpers
// ---------------------------------------------------------------------------

// RFC-4180-ish single-line parser: handles quoted fields with embedded commas
// and doubled-quote ("") escapes. The aggregate CSV's contribution_log field is
// JSON wrapped in quotes with "" escapes, so this must be correct.
function splitCsvLine(line) {
  const out = []
  let cur = "", q = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (q) {
      if (ch === '"') {
        if (line[i + 1] === '"') { cur += '"'; i++ } else { q = false }
      } else cur += ch
    } else {
      if (ch === '"') q = true
      else if (ch === ",") { out.push(cur); cur = "" }
      else cur += ch
    }
  }
  out.push(cur)
  return out
}
function parseCsv(text) {
  const lines = text.replace(/\r\n/g, "\n").replace(/\n+$/, "").split("\n")
  const head = splitCsvLine(lines[0])
  return lines.slice(1).filter((l) => l.length).map((l) => {
    const cells = splitCsvLine(l)
    const o = {}
    head.forEach((h, i) => { o[h] = cells[i] ?? "" })
    return o
  })
}
const num = (v) => {
  if (v == null || v === "") return null
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}
// round for display without inventing precision the data does not have
const r1 = (n) => (n == null ? null : Math.round(n * 10) / 10)

// Minimal YAML frontmatter reader for source pages: scalars + inline arrays.
function frontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return {}
  const fm = m[1]
  const out = {}
  for (const raw of fm.split("\n")) {
    const line = raw.replace(/\s+$/, "")
    const mm = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/)
    if (!mm) continue
    const key = mm[1]
    let val = mm[2]
    if (val.startsWith("[") && val.endsWith("]")) {
      out[key] = val.slice(1, -1).split(",").map((s) => s.trim().replace(/^["']|["']$/g, "")).filter(Boolean)
    } else {
      out[key] = val.replace(/^["']|["']$/g, "")
    }
  }
  return out
}

// Speciation-aware contradiction test (mirrors audit-not-material-integrity.mjs):
// which measured metal token counts as evidence that `analyte` occurs in a matrix.
function contradicts(nmAnalyte, sourceMetal) {
  const a = (nmAnalyte || "").trim(), s = (sourceMetal || "").trim()
  if (a === "iAs") return s === "iAs"
  if (a === "MeHg") return s === "MeHg"
  if (a === "tAs") return s === "tAs" || s === "As"
  if (a === "tHg") return s === "tHg" || s === "Hg"
  if (a === "Cr-VI") return s === "Cr-VI" || s === "Cr" || s === "Cr-total"
  return a === s
}

// Short inline citation derived from the canonical source id (`author-year...`).
// The id stem is a reliable author token (a surname or an institution acronym) —
// far more reliable than parsing the free-form `authors:` field, which mixes
// surname-first, given-name-first, and corporate authorship.
const ACRONYMS = new Set([
  "fda", "fsa", "efsa", "jecfa", "who", "fao", "epa", "atsdr", "fsanz", "eu",
  "usda", "anses", "bfr", "rivm", "iarc", "gems", "fera", "nhanes", "cfia",
  "aoac", "tds", "us", "uk", "gb", "cfsa", "mhlw", "hc", "ec",
])
const titleCasePart = (p) => (ACRONYMS.has(p.toLowerCase()) ? p.toUpperCase() : p.charAt(0).toUpperCase() + p.slice(1))
function shortCite(id) {
  const glued = id.match(/^([a-z]+(?:-[a-z]+)*?)(\d{4})/i) // author glued to year: smajgl2015, collado-lopez2025
  if (glued) return `${glued[1].split("-").map(titleCasePart).join("-")} ${glued[2]}`
  const stem = (id.match(/^[a-z]+/i) || [id])[0]
  const yr = (id.match(/(?:^|[-_])(\d{4})(?:[-_]|$)/) || [])[1] // separated year token: ny-dec-...-2023
  return yr ? `${titleCasePart(stem)} ${yr}` : titleCasePart(stem)
}

// Source types that SET or SUMMARISE limits rather than MEASURE occurrence. A
// not-material / read-across cell's "which studies measured this analyte"
// evidence must exclude these — an Oeko-Tex limit or an ECHA restriction is not
// an occurrence measurement. Pooled-cell contributors are exempt from this
// filter (the pooling engine already admitted only measurements).
const NON_OCCURRENCE_TYPES = new Set([
  "government-regulation", "regulatory", "regulation", "gov-guidance", "gov-regulation",
  "government-regulatory", "regulatory-standard", "regulatory-agency-report",
  "industry-guidance", "industry-application-note",
])
// Review source_types (matched EXACTLY — "peer-reviewed" is a primary study, not a review).
const REVIEW_TYPES = new Set([
  "review", "peer-reviewed-review", "systematic-review", "narrative-review",
  "literature-review", "scoping-review", "meta-analysis",
])

// ---------------------------------------------------------------------------
// 1. Source metadata  (id -> citation fields)
// ---------------------------------------------------------------------------
const sources = {}          // id -> {title, cite, year, publication, doi, url, sample_n, products[], metals[]}
const srcDir = path.join(WIKI, "sources")
for (const f of fs.readdirSync(srcDir)) {
  if (!f.endsWith(".md")) continue
  const id = f.replace(/\.md$/, "")
  const fm = frontmatter(fs.readFileSync(path.join(srcDir, f), "utf8"))
  const doi = fm.doi && !["null", "none", "n/a", ""].includes(String(fm.doi).toLowerCase()) ? fm.doi : null
  sources[id] = {
    title: fm.title || "",
    cite: shortCite(id),
    year: num(fm.year),
    publication: fm.publication || "",
    source_type: (fm.source_type || "").toLowerCase(),
    doi,
    doi_url: doi ? `https://doi.org/${doi}` : null,
    url: `https://heavymetalindex.com/sources/${id}`,
    sample_n: num(fm.sample_n),
    products: (fm.products || []).map((t) => t.replace(/^\[\[/, "").replace(/\]\]$/, "").replace(/^products\//, "").split("|")[0].trim()),
    metals: fm.metals || [],
  }
}

// ---------------------------------------------------------------------------
// 2. Per-study occurrence  ((source_id,row_slug,metal) -> stats)
// ---------------------------------------------------------------------------
const perStudy = {}
for (const f of fs.readdirSync(EVID)) {
  if (!/^category.*_summary\.csv$/.test(f)) continue
  let rows
  try { rows = parseCsv(fs.readFileSync(path.join(EVID, f), "utf8")) } catch { continue }
  for (const rec of rows) {
    const k = `${rec.source_id}|${rec.row_slug}|${rec.metal_species}`
    if (!rec.source_id || !rec.row_slug || !rec.metal_species) continue
    // first non-empty stat wins (files overlap; prefer whichever carries values)
    const cand = {
      n: num(rec.n), detected_n: num(rec.detected_n),
      p10: num(rec.p10_ppb), p50: num(rec.p50_ppb), p90: num(rec.p90_ppb),
      p95: num(rec.p95_ppb), p100: num(rec.p100_ppb),
      mean: num(rec.mean_ppb), median: num(rec.median_ppb), max: num(rec.max_ppb),
      unit: rec.unit || "ppb",
    }
    const has = cand.n != null || cand.p50 != null || cand.median != null || cand.max != null || cand.p100 != null
    if (!has) continue
    if (!perStudy[k] || (perStudy[k]._weak && has)) perStudy[k] = cand
  }
}

// ---------------------------------------------------------------------------
// 3. Pooled aggregate  ((product_slug,metal) -> pooled + derivation)
// ---------------------------------------------------------------------------
const aggregate = {}
{
  const rows = parseCsv(fs.readFileSync(path.join(EVID, "hmtc_aggregate_distributions.csv"), "utf8"))
  for (const rec of rows) {
    const k = `${rec.product_slug}|${rec.metal_species}`
    let clog = []
    if (rec.contribution_log) { try { clog = JSON.parse(rec.contribution_log) } catch { clog = [] } }
    aggregate[k] = {
      row_label: rec.product_label || "",
      native_basis: rec.native_basis || "",
      role: rec.role || "",
      target_label: rec.target_label || "",
      target_p: num(rec.target_p),
      target_value: num(rec.target_value),
      p10: num(rec.pooled_p10), p30: num(rec.pooled_p30), p45: num(rec.pooled_p45),
      p50: num(rec.pooled_p50), p90: num(rec.pooled_p90), p95: num(rec.pooled_p95),
      p97: num(rec.pooled_p97), p100: num(rec.pooled_p100),
      pooled_n: num(rec.pooled_n), distinct_sources: num(rec.distinct_sources),
      sens_band: rec.sens_band || "",
      reg_cap_ppb: num(rec.lowest_regulatory_cap_ppb),
      reg_cap_source: rec.lowest_regulatory_cap_source || "",
      rationale_tag_auto: rec.rationale_tag_auto || "",
      verdict: rec.verdict || "",
      contribution_log: clog,
    }
  }
}

// ---------------------------------------------------------------------------
// 4. Not-material ledger  ((row_slug,metal) -> substantiated rationale)
// ---------------------------------------------------------------------------
const notMaterial = {}
{
  const rows = parseCsv(fs.readFileSync(path.join(EVID, "standards-not-material.csv"), "utf8"))
  for (const rec of rows) {
    notMaterial[`${rec.row_slug}|${rec.metal_species}`] = {
      basis_class: rec.basis_class || "",
      bounded_by: rec.bounded_by || "",
      rationale: rec.rationale || "",
      regulatory_basis: rec.regulatory_basis || "",
      jurisdictions_checked: rec.jurisdictions_checked || "",
      cross_sourced: rec.cross_sourced || "",
      date: rec.date || "",
    }
  }
}

// ---------------------------------------------------------------------------
// 5. Compiled cell decisions  ((slug,analyte) -> cell)  — cat1 + cat9
// ---------------------------------------------------------------------------
const compiled = {}
for (const dir of ["cat1-compiled", "cat9-compiled"]) {
  const d = path.join(WB, dir)
  if (!fs.existsSync(d)) continue
  for (const f of fs.readdirSync(d)) {
    if (!f.endsWith(".json") || f.startsWith("_")) continue
    let rec
    try { rec = JSON.parse(fs.readFileSync(path.join(d, f), "utf8")) } catch { continue }
    const slug = rec.slug || f.replace(/\.json$/, "")
    // cat9 shape: rec.cells.{metal}; cat1 shape: rec.variants.{key}.{metal}
    if (rec.cells) {
      for (const [a, cell] of Object.entries(rec.cells)) compiled[`${slug}|${a}`] = { ...cell, _row_label: rec.name }
    }
    if (rec.variants) {
      for (const v of Object.values(rec.variants)) {
        for (const [a, cell] of Object.entries(v)) {
          if (!compiled[`${slug}|${a}`]) compiled[`${slug}|${a}`] = { ...cell, _row_label: rec.name }
        }
      }
    }
  }
}

// ---------------------------------------------------------------------------
// 6. Contradiction scan for not-material cells
//    (which routed sources measured the analyte — "the category DOES contain it")
// ---------------------------------------------------------------------------
function routedSourcesMeasuring(rowSlug, analyte) {
  const hits = []
  for (const [id, s] of Object.entries(sources)) {
    if (!s.products.includes(rowSlug)) continue
    if (NON_OCCURRENCE_TYPES.has(s.source_type)) continue           // limit-setter, not a measurement
    if (!s.metals.some((m) => contradicts(analyte, m))) continue
    // Positive measurement signal: the source reports a sample count or carries
    // per-study occurrence stats. This excludes limit/guideline/restriction docs
    // that mention the analyte without measuring it (Oeko-Tex, ECHA, WHO GDWQ).
    const hasQuant = s.sample_n != null || perStudy[`${id}|${rowSlug}|${analyte}`]
    if (!hasQuant) continue
    hits.push(id)
  }
  return hits
}

// ---------------------------------------------------------------------------
// Build one citation object for a source id, optionally with per-study stats.
// ---------------------------------------------------------------------------
function citation(id, rowSlug, analyte, pool_share) {
  const s = sources[id]
  if (!s) return null
  const ps = perStudy[`${id}|${rowSlug}|${analyte}`] || null
  // Only cite a source that actually MEASURED the analyte: it must report a
  // sample count or carry per-study occurrence stats. This filters pooled
  // contributors too (contribution_log can include risk-benefit statements and
  // syntheses admitted by reconstruction — e.g. an EFSA opinion with sample_n
  // null — which must not be cited on a Daubert page as a study that measured it).
  if (s.sample_n == null && !ps) return null
  // A review synthesises others' measurements — it did not measure. Never cite a
  // narrative/systematic review as a study that "measured" the analyte. Match the
  // review source_types EXACTLY (a substring test would wrongly catch the 2500+
  // "peer-reviewed" primary studies) plus the id-suffix "-review" convention.
  if (REVIEW_TYPES.has(s.source_type) || /-review$/.test(id)) return null
  let range = null, median = null, n = null
  if (ps) {
    n = ps.n
    median = ps.median != null ? ps.median : ps.p50
    const lo = ps.p10 != null ? ps.p10 : (ps.median != null ? ps.median : ps.p50)
    const hi = ps.max != null ? ps.max : ps.p100
    if (lo != null && hi != null) range = [r1(lo), r1(hi)]
  }
  return {
    id,
    cite: s.cite,
    title: s.title,
    year: s.year,
    publication: s.publication,
    doi: s.doi,
    doi_url: s.doi_url,
    source_url: s.url,
    n: n != null ? n : s.sample_n,
    range_ppb: range,
    median_ppb: median != null ? r1(median) : null,
    unit: ps ? ps.unit : "ppb",
    pool_share: pool_share != null ? pool_share : null,
  }
}

// ---------------------------------------------------------------------------
// Assemble cells
// ---------------------------------------------------------------------------
const PANEL = ["Pb", "Cd", "iAs", "tAs", "tHg", "MeHg", "Ni", "Sn", "Al", "Cr-VI"]
const keys = new Set([
  ...Object.keys(aggregate),
  ...Object.keys(notMaterial),
  ...Object.keys(compiled),
])

const cells = {}
let nOccurrence = 0, nNotMaterial = 0, nContradiction = 0

for (const key of keys) {
  const [rowSlug, analyte] = key.split("|")
  if (!PANEL.includes(analyte)) continue
  const agg = aggregate[key]
  const nm = notMaterial[key]
  const comp = compiled[key]

  const isNM = !!(nm || (comp && comp.type === "not_material"))
  // A pool is usable only with >=2 samples AND a distribution that survives
  // display rounding (its 95th percentile rounds to a non-zero ppb). A pooled_n<2
  // pool, an all-censored p100==0 pool, or one whose whole distribution sits below
  // the display floor (P95 rounds to 0) is a degenerate/censored-zero artifact:
  // rendering its "median 0 / P95 0" as occurrence would contradict the sources
  // that DID measure the analyte. Fall to routed-source instead.
  const hasPool = !!(agg && agg.pooled_n >= 2 && agg.p100 > 0 && r1(agg.p95) > 0)
  const isPooledMaterial = hasPool && !isNM

  // ----- OCCURRENCE -----
  const occ = { has_data: false, n_studies: 0, n_samples: null, unit: "ppb", sources: [], note: "" }
  // De-duplicating source accumulator keyed by source id. `contribution_log`
  // may list one study several times (different reconstruction passes); a study
  // that both pooled and appears in the routed set must render once.
  const srcMap = new Map()
  const addSource = (id, pool_share) => {
    const cit = citation(id, rowSlug, analyte, pool_share)
    if (!cit) return
    const prev = srcMap.get(id)
    if (!prev) { srcMap.set(id, cit); return }
    if (cit.pool_share != null && (prev.pool_share == null || cit.pool_share > prev.pool_share)) prev.pool_share = cit.pool_share
    if (cit.n != null && (prev.n == null || cit.n > prev.n)) prev.n = cit.n
    if (prev.range_ppb == null && cit.range_ppb != null) prev.range_ppb = cit.range_ppb
    if (prev.median_ppb == null && cit.median_ppb != null) prev.median_ppb = cit.median_ppb
  }

  // Pooled distribution (Method v2.0 occurrence pathway) — the cert-side
  // derivation math. Rendered whenever a pool exists, including for a
  // not-material cell (there the pool makes the tension visible and defensible).
  if (hasPool) {
    occ.central = { stat: "pooled median", value_ppb: r1(agg.p50) }
    occ.upper = { p95_ppb: r1(agg.p95), p100_ppb: r1(agg.p100) }
    occ.range_ppb = [r1(agg.p10), r1(agg.p100)]
    occ.pool = {
      p10: r1(agg.p10), p50: r1(agg.p50), p90: r1(agg.p90), p95: r1(agg.p95),
      p97: r1(agg.p97), p100: r1(agg.p100),
      pooled_n: agg.pooled_n, distinct_sources: agg.distinct_sources,
      role: agg.role, target_label: agg.target_label, target_value: r1(agg.target_value),
      sens_band: agg.sens_band,
    }
    for (const c of agg.contribution_log || []) addSource(c.source_id, c.pool_share)
  }

  // Routed sources that MEASURED the analyte (the "the category DOES contain it"
  // evidence). Computed for every cell EXCEPT a clean pooled-material cell, whose
  // certified-market pool already IS the relevant study set. This is what gives a
  // not-material cell — and a Cat-9 read-across / special cell (diaper Ni/Sn),
  // which is not in the pool at all — its occurrence evidence.
  const measuredIds = isPooledMaterial ? [] : routedSourcesMeasuring(rowSlug, analyte)
  for (const id of measuredIds) addSource(id, null)

  occ.sources = [...srcMap.values()].sort((a, b) =>
    (b.pool_share || 0) - (a.pool_share || 0) || (b.year || 0) - (a.year || 0))
  occ.n_studies = occ.sources.length
  // Observed statistics = values ACTUALLY MEASURED across the cited studies. The
  // pooled p50/p95/p97/p100 can be a fitted-lognormal distribution whose figures
  // exceed every real measurement (a runaway/provisional pool artifact); the
  // renderer validates the pool against observed_max and, when the pool is not
  // range-valid, reports these observed figures instead of the modeled ones.
  const smaxes = occ.sources.map((s) => (s.range_ppb ? s.range_ppb[1] : null)).filter((x) => x != null)
  if (smaxes.length) occ.observed_max_ppb = Math.max(...smaxes)
  const smins = occ.sources.map((s) => (s.range_ppb ? s.range_ppb[0] : null)).filter((x) => x != null)
  if (smins.length) occ.observed_min_ppb = Math.min(...smins)
  const smeds = occ.sources.map((s) => s.median_ppb).filter((x) => x != null).sort((a, b) => a - b)
  if (smeds.length) occ.observed_median_ppb = smeds[Math.floor((smeds.length - 1) / 2)]
  occ.has_data = occ.n_studies > 0 || hasPool
  if (isPooledMaterial) {
    occ.n_samples = agg.pooled_n          // the certified-market pool
    occ.n_samples_basis = "certified-market pool"
  } else {
    const withN = occ.sources.map((s) => s.n).filter((n) => n != null)
    occ.n_samples = withN.length ? withN.reduce((a, b) => a + b, 0) : null
    occ.n_samples_basis = "sum of reported study samples"
    if (measuredIds.length && !hasPool) occ.note = "routed-source occurrence (no pooled distribution built for this cell)"
  }

  // ----- DERIVATION INPUTS -----
  const der = {}
  // government maximum level context
  if (agg && agg.reg_cap_ppb != null) {
    der.government_ml = { value_ppb: r1(agg.reg_cap_ppb), source_id: agg.reg_cap_source, jurisdiction: null }
  } else if (comp && comp.type === "gov") {
    der.government_ml = { value_ppb: num(comp.value), source_id: comp.binding_id || "", jurisdiction: comp.binding_jurisdiction || null }
  } else {
    der.government_ml = null
  }
  // read-across / special (Cat-9 contact-product cells carry field evidence in `label`)
  if (comp && comp.type === "read_across") {
    der.read_across = { value_ppb: num(comp.value), source_id: comp.source_id || "", jurisdiction: comp.source_jurisdiction || null, label: comp.label || "", basis_kind: comp.basis_kind || "read-across" }
  } else if (comp && comp.type === "special") {
    der.special = { value: num(comp.value), unit: comp.unit || "ppb", basis: comp.basis || "", jurisdiction: comp.jurisdiction || null, label: comp.label || "", source_page: comp.source_page || "" }
  }
  // pooled percentile (Method v2.0 occurrence pathway) — cert-side only.
  // Suppressed when it rounds to 0 ppb: a percentile below the reporting floor is
  // a censored-zero artifact of the same degenerate pool, and "P97 is 0 ppb" reads
  // as a fabricated zero.
  if (agg && agg.target_value != null && r1(agg.target_value) > 0 && agg.target_label) {
    const pLabel = agg.target_label.includes("p97") ? "P97" : agg.target_label.includes("p45") ? "P45" : agg.target_label.toUpperCase()
    der.percentile = { label: pLabel, value_ppb: r1(agg.target_value), role: agg.role, sens_band: agg.sens_band }
  } else der.percentile = null
  der.rationale_tag = (agg && agg.rationale_tag_auto) || null
  // not-material substantiated rationale
  if (nm) {
    der.not_material = {
      basis_class: nm.basis_class,
      bounded_by: nm.bounded_by || null,
      rationale: nm.rationale,
      regulatory_basis: nm.regulatory_basis,
      jurisdictions_checked: nm.jurisdictions_checked,
      reference_method: (comp && comp.reference_method) || null,
    }
    nNotMaterial++
  } else if (comp && comp.type === "not_material") {
    der.not_material = {
      basis_class: comp.basis_kind || "controlled",
      bounded_by: comp.bounded_by || null,
      rationale: comp.rationale || "",
      regulatory_basis: "",
      jurisdictions_checked: "",
      reference_method: comp.reference_method || null,
    }
    nNotMaterial++
  } else der.not_material = null

  if (der.not_material && measuredIds.length) {
    der.contradiction = {
      measured_by: measuredIds,
      note: "a routed source measured this analyte in this matrix; the not-material determination is a rebuttable presumption tested against this evidence",
    }
    nContradiction++
  } else der.contradiction = null

  if (occ.has_data) nOccurrence++

  // skip cells with nothing to say (no occurrence, no not-material rationale, no derivation)
  if (!occ.has_data && !der.not_material && !der.percentile && !der.read_across && !der.special && !der.government_ml) continue

  cells[key] = {
    row_slug: rowSlug,
    analyte,
    row_label: (agg && agg.row_label) || (comp && comp._row_label) || "",
    occurrence: occ,
    derivation: der,
  }
}

// ---------------------------------------------------------------------------
// Emit
// ---------------------------------------------------------------------------
let commit = "unknown"
try { commit = execSync("git rev-parse --short HEAD", { cwd: REPO }).toString().trim() } catch {}
let commitDate = ""
try { commitDate = execSync("git show -s --format=%cI HEAD", { cwd: REPO }).toString().trim() } catch {}

const out = {
  schema: "hmtc.cert-occurrence-evidence.v1",
  generated_from_commit: commit,
  source_commit_date: commitDate,
  method: "HMTc Method v2.0 (government-limit default; selective occurrence pooling for Tier-1 toxics and no-ML cells)",
  firewall_note:
    "HMT&C occurrence + derivation asset. Renders on heavymetalcertified.com only. The derivation (pooled percentile -> limit -> rationale) must never appear on a heavymetalindex.com URL. Occurrence findings are literature, cited one-way to the index source pages.",
  counts: {
    cells: Object.keys(cells).length,
    with_occurrence: nOccurrence,
    not_material: nNotMaterial,
    not_material_with_contradiction: nContradiction,
  },
  cells,
}

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n")

console.log(`cert occurrence-evidence: ${Object.keys(cells).length} cells `
  + `(${nOccurrence} with occurrence, ${nNotMaterial} not-material, ${nContradiction} not-material-with-contradiction)`)
console.log(`  -> ${path.relative(REPO, OUT)}`)

if (REPORT) {
  const withDoi = new Set(), noDoi = new Set()
  for (const c of Object.values(cells)) for (const s of c.occurrence.sources) (s.doi ? withDoi : noDoi).add(s.id)
  console.log(`  distinct cited sources: ${withDoi.size + noDoi.size} (${withDoi.size} with DOI, ${noDoi.size} source-page-only)`)
}
