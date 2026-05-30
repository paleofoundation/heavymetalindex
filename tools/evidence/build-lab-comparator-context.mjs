// Builds the JSON payload consumed by the public Lab Result Comparator.
// The payload deliberately omits any percentile arithmetic (p10/p30/p50/p90/p100)
// even though some upstream sources carry it; brand-facing comparator output is
// literature-native (reported range, source count, confidence, regulatory cap).
// Threshold-selection percentile math stays in the staff Standards Workbench.

import fs from "node:fs"
import path from "node:path"
import yaml from "js-yaml"

const repoRoot = process.cwd()
const percentileContextPath = path.join(repoRoot, "wiki/static/hmi-percentile-context.json")
const contaminationPath = path.join(repoRoot, "wiki/static/contamination.json")
const productsDir = path.join(repoRoot, "wiki/products")
const crosswalkPath = path.join(repoRoot, "data/evidence/product_regulatory_crosswalk.csv")
const limitsPath = path.join(repoRoot, "data/evidence/regulatory_limits.csv")
const occurrenceSummaryFiles = [
  "data/evidence/category1_formula_concentration_summary.csv",
  "data/evidence/category1_fda_baby_food_compliance_summary.csv",
  "data/evidence/category1_local_baby_food_occurrence_summary.csv",
  "data/evidence/category5_plant_milk_occurrence_summary.csv",
  "data/evidence/category5_tds_finished_food_occurrence_summary.csv",
  "data/evidence/category5_apple_juice_arsenic_speciation_summary.csv",
  "data/evidence/category5_grape_juice_inorganic_arsenic_summary.csv",
]
const outputPath = path.join(repoRoot, "wiki/static/hmi-lab-comparator-context.json")

const percentileContext = JSON.parse(fs.readFileSync(percentileContextPath, "utf8"))
const crosswalkRows = parseCsv(fs.readFileSync(crosswalkPath, "utf8"))
const limitRows = parseCsv(fs.readFileSync(limitsPath, "utf8"))
const limitsById = new Map(limitRows.map((row) => [row.regulatory_limit_id, row]))

const occurrenceRows = readOccurrenceRows()

const ANALYTES = [
  {
    code: "Pb",
    label: "Lead",
    wiki_link: "/metals/lead",
    mitigation_link: "/mitigation/lead-mitigation",
    remediation_note: "Trace the highest-risk ingredient inputs (rice flour, root vegetables, cocoa, leafy greens, low-quality vitamin/mineral premixes) and request a recent ingredient-level COA before targeting the finished-product result.",
  },
  {
    code: "Cd",
    label: "Cadmium",
    wiki_link: "/metals/cadmium",
    mitigation_link: "/mitigation/cadmium-mitigation",
    remediation_note: "Cadmium typically tracks soil and crop type (sunflower, cocoa, spinach, soy). Confirm sourcing region and rotate to lower-Cd ingredient suppliers where possible before pursuing in-process mitigation.",
  },
  {
    code: "tAs",
    label: "Arsenic (total)",
    wiki_link: "/metals/arsenic-total",
    mitigation_link: "/mitigation/arsenic-mitigation",
    remediation_note: "Total arsenic includes the much-lower-risk organic forms; if the toxic inorganic fraction is the driver, request an iAs/tAs speciation result from the lab before deciding on mitigation steps.",
  },
  {
    code: "iAs",
    label: "Arsenic (inorganic)",
    wiki_link: "/metals/arsenic-inorganic",
    mitigation_link: "/mitigation/arsenic-mitigation",
    remediation_note: "Inorganic arsenic typically tracks rice and rice-derivatives (brown rice syrup, rice protein). Lower-iAs rice varieties (Californian, basmati) and rinse-and-cook protocols are the first levers; ingredient substitution is the strongest.",
  },
  {
    code: "tHg",
    label: "Mercury (total)",
    wiki_link: "/metals/mercury-total",
    mitigation_link: "/mitigation/mercury-mitigation",
    remediation_note: "Total mercury is most informative for non-fish matrices; in fish or shellfish, request methylmercury speciation because that is the toxicologically active fraction and the regulated species.",
  },
  {
    code: "MeHg",
    label: "Mercury (methyl)",
    wiki_link: "/metals/mercury-methyl",
    mitigation_link: "/mitigation/mercury-mitigation",
    remediation_note: "Methylmercury is concentrated in larger predatory fish. The most direct lever is fish-species selection (smaller, shorter-lived species) rather than processing change.",
  },
  {
    code: "Ni",
    label: "Nickel",
    wiki_link: "/metals/nickel",
    mitigation_link: "/mitigation/nickel-mitigation",
    remediation_note: "Nickel often migrates from stainless-steel processing equipment in acidic or chloride-rich matrices. Audit dwell time, equipment alloy grade, and ingredient-borne nickel (legumes, oats, soy) in that order.",
  },
  {
    code: "Al",
    label: "Aluminum",
    wiki_link: "/metals/aluminum",
    mitigation_link: "/mitigation/aluminum-mitigation",
    remediation_note: "Aluminum in food often tracks packaging contact, additives (sodium aluminum phosphates), and certain mineral premixes. Review the additive/premix supplier specs before pursuing process changes.",
  },
  {
    code: "Cr-VI",
    label: "Chromium (hexavalent)",
    wiki_link: "/metals/chromium-hexavalent",
    mitigation_link: "/mitigation/chromium-mitigation",
    remediation_note: "Hexavalent chromium is rarely reported in food; confirm the lab actually speciated Cr(VI) rather than reporting total chromium, because the two are not interchangeable for regulatory or toxicological purposes.",
  },
  {
    code: "Sn",
    label: "Tin",
    wiki_link: "/metals/tin",
    mitigation_link: "/mitigation/tin-mitigation",
    remediation_note: "Tin in canned or metal-packaged products typically tracks can-coating wear and storage time; review packaging supplier specs, lacquer integrity, and shelf-life protocols.",
  },
]

const BASIS_VOCAB = [
  { code: "as_sold", label: "As sold / as placed on market" },
  { code: "prepared_for_feeding", label: "Prepared for feeding (reconstituted)" },
  { code: "as_consumed", label: "As consumed" },
  { code: "dry_weight", label: "Dry weight" },
  { code: "as_sold_or_source_reported", label: "As sold (source-reported)" },
  { code: "ingredient_synthesis", label: "Ingredient-level literature (indicative)" },
]

// Generic form/descriptor tokens that must not, alone, drive an ingredient
// match (mirrors the change-watch mapper). Keeps "cocoa powder" from binding to
// "infant-formula-powder" on the shared "powder". Declared before the top-level
// build call below because it is a const (no hoisting, unlike the functions).
const FORM_STOPLIST = new Set([
  "powder", "powdered", "liquid", "based", "ready", "rtf", "dried", "dry", "fresh", "frozen",
  "whole", "ground", "raw", "puree", "purees", "pureed", "juice", "milk", "drink", "beverage",
  "formula", "cereal", "cereals", "snack", "snacks", "teething", "food", "foods", "meal", "meals",
  "mixed", "mix", "vitamin", "mineral", "premix", "protein", "source", "concentrate", "concentrated",
  "infant", "baby", "child", "children", "toddler", "non", "free", "added", "single", "ingredient",
  "plant", "product", "products", "finished", "low", "reduced", "fat", "skim", "semi",
])

const rows = percentileContext.rows ?? []
const litContext = buildLitContext(occurrenceRows)
const regCaps = buildRegCaps(crosswalkRows, limitsById)

// Second tier: fill the (row x analyte) cells that the finished-product
// occurrence CSVs leave empty with what the ingredient-level literature
// synthesis reports, so the comparator shows a real evidence view instead of a
// bare "data gap" for the six analytes those CSVs do not measure. Clearly
// labelled (basis: ingredient_synthesis; coverage_note names the provenance)
// so it is never mistaken for finished-product sampling.
const fallbackLitContext = buildFallbackLitContext(rows, litContext, regCaps)
litContext.push(...fallbackLitContext)
litContext.sort(
  (a, b) =>
    a.row_slug.localeCompare(b.row_slug) ||
    a.metal.localeCompare(b.metal) ||
    a.basis.localeCompare(b.basis),
)

const output = {
  schema: "hmi.lab-comparator.v1",
  generated_from: [
    "wiki/static/hmi-percentile-context.json",
    "data/evidence/product_regulatory_crosswalk.csv",
    "data/evidence/regulatory_limits.csv",
    ...occurrenceSummaryFiles,
  ],
  rows,
  analytes: ANALYTES,
  basis_vocab: BASIS_VOCAB,
  lit_context: litContext,
  reg_caps: regCaps,
}

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2) + "\n", "utf8")
const tierCounts = litContext.reduce(
  (acc, e) => {
    if (e.basis === "ingredient_synthesis") acc.fallback += 1
    else acc.product += 1
    return acc
  },
  { product: 0, fallback: 0 },
)
console.log(
  `Wrote ${outputPath} with ${litContext.length} literature-context rows ` +
    `(${tierCounts.product} finished-product, ${tierCounts.fallback} ingredient-synthesis fallback) ` +
    `and ${regCaps.length} regulatory-cap rows.`,
)

// ---------- Functions ----------

function buildLitContext(records) {
  const grouped = new Map()
  for (const record of records) {
    const rowSlug = record.row_slug?.trim()
    const metal = canonicalMetal(record.metal_species)
    const basis = String(record.basis || "").trim() || "unspecified"
    if (!rowSlug || !metal) continue
    const key = `${rowSlug}|${metal}|${basis}`
    if (!grouped.has(key)) grouped.set(key, [])
    grouped.get(key).push(record)
  }

  const output = []
  for (const [key, group] of grouped) {
    const [rowSlug, metal, basis] = key.split("|")
    const censoredOnly = group.every((row) => /less_than|below/i.test(String(row.censoring_status || "")))
    if (censoredOnly && group.every((row) => !hasValue(row.max_ppb) && !hasValue(row.p100_ppb))) {
      output.push({
        row_slug: rowSlug,
        metal,
        basis,
        unit: "ppb",
        range_low: null,
        range_high: null,
        central_low: null,
        central_high: null,
        n_sources: uniqueSources(group),
        confidence: confidenceLabel(uniqueSources(group)),
        coverage_note: "All cited sources reported values below detection or quantification; literature is too thin for a numeric range.",
        source_summaries: summariseSources(group),
      })
      continue
    }

    let rangeLow = Infinity
    let rangeHigh = -Infinity
    let centralLow = Infinity
    let centralHigh = -Infinity
    let hasCentral = false

    for (const row of group) {
      for (const candidate of [row.p100_ppb, row.max_ppb, row.mean_ub_ppb]) {
        const value = Number(candidate)
        if (Number.isFinite(value) && value > rangeHigh) rangeHigh = value
      }
      for (const candidate of [row.mean_ppb, row.median_ppb, row.p50_ppb, row.mean_lb_ppb]) {
        const value = Number(candidate)
        if (Number.isFinite(value) && value < rangeLow) rangeLow = value
      }
      const censored = /less_than|below/i.test(String(row.censoring_status || ""))
      if (!censored) {
        for (const candidate of [row.mean_ppb, row.median_ppb, row.p50_ppb]) {
          const value = Number(candidate)
          if (Number.isFinite(value)) {
            if (value < centralLow) centralLow = value
            if (value > centralHigh) centralHigh = value
            hasCentral = true
          }
        }
      }
    }

    output.push({
      row_slug: rowSlug,
      metal,
      basis,
      unit: "ppb",
      range_low: Number.isFinite(rangeLow) ? rangeLow : null,
      range_high: Number.isFinite(rangeHigh) ? rangeHigh : null,
      central_low: hasCentral ? centralLow : null,
      central_high: hasCentral ? centralHigh : null,
      n_sources: uniqueSources(group),
      confidence: confidenceLabel(uniqueSources(group)),
      source_summaries: summariseSources(group),
    })
  }

  return output.sort((a, b) =>
    a.row_slug.localeCompare(b.row_slug) ||
    a.metal.localeCompare(b.metal) ||
    a.basis.localeCompare(b.basis),
  )
}

function summariseSources(group) {
  const map = new Map()
  for (const row of group) {
    const id = String(row.source_id || "").trim()
    if (!id) continue
    if (!map.has(id)) {
      map.set(id, {
        source_id: id,
        n: Number(row.n || 0) || null,
        basis: row.basis || "",
      })
    }
  }
  return [...map.values()]
}

function buildRegCaps(rows, limitsById) {
  const output = []
  for (const row of rows) {
    if (!row.regulatory_limit_id || row.regulatory_limit_id === "none_loaded") continue
    const limit = limitsById.get(row.regulatory_limit_id)
    if (!limit) continue
    output.push({
      row_slug: String(row.product_slug || "").trim(),
      metal: canonicalMetal(row.metal_species),
      value_ppb: Number(row.regulatory_value_ug_kg || limit.value_ug_kg || 0),
      basis: limit.basis || "unspecified",
      scope: limit.product_scope || row.regulatory_scope || "",
      regulation_id: row.regulatory_limit_id,
      page: limit.regulation_page ? `/${limit.regulation_page}` : null,
      authority: limit.authority || limit.jurisdiction || "",
      status: limit.status || row.regulatory_status || "",
    })
  }
  return output
}

function uniqueSources(group) {
  return new Set(group.map((row) => row.source_id).filter(Boolean)).size
}

function confidenceLabel(sourceCount) {
  if (sourceCount === 0) return "data gap"
  if (sourceCount <= 2) return "low"
  if (sourceCount <= 10) return "medium"
  return "high"
}

function readOccurrenceRows() {
  const rows = []
  for (const relativePath of occurrenceSummaryFiles) {
    const filePath = path.join(repoRoot, relativePath)
    if (!fs.existsSync(filePath)) continue
    rows.push(...parseCsv(fs.readFileSync(filePath, "utf8")))
  }
  return rows
}

function hasValue(value) {
  return String(value ?? "").trim() !== ""
}

function canonicalMetal(value) {
  const metal = String(value || "").trim()
  const compact = metal.toLowerCase().replace(/[^a-z0-9]+/g, "")
  const aliases = new Map([
    ["pb", "Pb"],
    ["lead", "Pb"],
    ["cd", "Cd"],
    ["cadmium", "Cd"],
    ["tas", "tAs"],
    ["totalarsenic", "tAs"],
    ["as", "tAs"],
    ["ias", "iAs"],
    ["inorganicarsenic", "iAs"],
    ["thg", "tHg"],
    ["totalmercury", "tHg"],
    ["mehg", "MeHg"],
    ["methylmercury", "MeHg"],
    ["al", "Al"],
    ["aluminum", "Al"],
    ["aluminium", "Al"],
    ["ni", "Ni"],
    ["nickel", "Ni"],
    ["sn", "Sn"],
    ["tin", "Sn"],
    ["crvi", "Cr-VI"],
    ["chromiumvi", "Cr-VI"],
    ["crtotal", "Cr-total"],
    ["totalchromium", "Cr-total"],
    ["cr", "Cr-total"],
    ["chromium", "Cr-total"],
  ])
  return aliases.get(compact) || metal
}

// ---------- Ingredient-synthesis fallback tier ----------

function distinctiveTokens(slug) {
  const out = new Set()
  for (const t of String(slug || "").toLowerCase().split(/[^a-z0-9]+/)) {
    if (t.length < 3 || FORM_STOPLIST.has(t)) continue
    out.add(t)
  }
  return out
}

function loadContamination() {
  const map = new Map()
  try {
    const j = JSON.parse(fs.readFileSync(contaminationPath, "utf8"))
    const arr = j.records || j
    for (const ing of arr) map.set(ing.ingredient, ing)
  } catch {
    // contamination dataset absent — fallback tier simply contributes nothing.
  }
  return map
}

function readProductFrontmatter(rowSlug) {
  const file = path.join(productsDir, `${rowSlug}.md`)
  if (!fs.existsSync(file)) return {}
  const raw = fs.readFileSync(file, "utf8")
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!m) return {}
  try {
    return yaml.load(m[1]) || {}
  } catch {
    return {}
  }
}

// The contamination ingredients that inform a product row: exact slug matches
// of the row's base taxonomy / ingredient targets first, then a conservative
// distinctive-commodity-token match. Bounded to keep aggregation honest.
function rowIngredients(rowSlug, contamination) {
  const fm = readProductFrontmatter(rowSlug)
  const candidates = [rowSlug, fm.base_taxonomy, ...(fm.ingredient_targets || [])].filter(Boolean)
  const matched = new Map()
  for (const cand of candidates) {
    if (contamination.has(cand)) matched.set(cand, contamination.get(cand))
  }
  if (matched.size === 0) {
    const candTokens = new Set()
    for (const cand of candidates) for (const t of distinctiveTokens(cand)) candTokens.add(t)
    if (candTokens.size) {
      for (const [slug, ing] of contamination) {
        const it = distinctiveTokens(slug)
        for (const t of it) {
          if (candTokens.has(t)) {
            matched.set(slug, ing)
            break
          }
        }
        if (matched.size >= 8) break
      }
    }
  }
  return [...matched.values()]
}

function repLow(v) {
  if (Array.isArray(v)) return v.length ? Number(v[0]) : null
  if (typeof v === "number") return v
  return null
}
function repHigh(v) {
  if (Array.isArray(v)) return v.length ? Number(v[v.length - 1]) : null
  if (typeof v === "number") return v
  return null
}
function capConfidence(label) {
  return label === "high" ? "medium" : label
}

function buildFallbackLitContext(percentileRows, occurrenceLit, regCaps) {
  const contamination = loadContamination()
  const covered = new Set(occurrenceLit.map((e) => `${e.row_slug}|${e.metal}`))
  const servedRows = new Set(
    [
      ...percentileRows.map((r) => r.row_slug),
      ...occurrenceLit.map((e) => e.row_slug),
      ...regCaps.map((e) => e.row_slug),
    ].filter(Boolean),
  )
  const out = []
  for (const rowSlug of [...servedRows].sort()) {
    const ingredients = rowIngredients(rowSlug, contamination)
    for (const analyte of ANALYTES) {
      const metal = analyte.code
      if (covered.has(`${rowSlug}|${metal}`)) continue
      const subs = []
      for (const ing of ingredients) {
        const sub = (ing.metals || {})[metal]
        if (sub && sub.status && sub.status !== "pending" && (sub.typical_ppb != null || sub.p95_ppb != null)) {
          subs.push({ slug: ing.ingredient, sub })
        }
      }
      if (subs.length) {
        let lo = Infinity
        let hi = -Infinity
        let nStudies = 0
        const names = []
        for (const { slug, sub } of subs) {
          const tl = repLow(sub.typical_ppb)
          const th = repHigh(sub.typical_ppb)
          if (tl != null && Number.isFinite(tl) && tl < lo) lo = tl
          if (th != null && Number.isFinite(th) && th > hi) hi = th
          const p95 = Number(sub.p95_ppb)
          if (Number.isFinite(p95) && p95 > hi) hi = p95
          nStudies += Number(sub.n_studies || 0) || 0
          names.push(slug)
        }
        // Guard the degenerate case: a 0/0 (or non-finite) upper bound means the
        // ingredient literature reported at or below detection. Emit no numeric
        // range rather than a misleading "0 to 0 ppb".
        const usableRange = Number.isFinite(hi) && hi > 0
        const rangeLow = usableRange && Number.isFinite(lo) ? Math.max(0, lo) : null
        out.push({
          row_slug: rowSlug,
          metal,
          basis: "ingredient_synthesis",
          unit: "ppb",
          range_low: rangeLow,
          range_high: usableRange ? hi : null,
          central_low: rangeLow,
          central_high: usableRange ? hi : null,
          n_sources: nStudies,
          confidence: capConfidence(confidenceLabel(nStudies)),
          tier: "ingredient_synthesis",
          coverage_note: usableRange
            ? `No finished-product sampling for ${analyte.label} in this matrix in the corpus yet. The range shown is aggregated from ingredient-level literature synthesis (${names.join(", ")}); treat it as indicative context, not finished-product evidence.`
            : `Ingredient-level literature for ${analyte.label} in this matrix (${names.join(", ")}) reports values at or below detection; no usable numeric range, but the analyte has been characterized.`,
          source_summaries: [],
        })
      } else {
        out.push({
          row_slug: rowSlug,
          metal,
          basis: "ingredient_synthesis",
          unit: "ppb",
          range_low: null,
          range_high: null,
          central_low: null,
          central_high: null,
          n_sources: 0,
          confidence: "data gap",
          tier: "data_gap",
          coverage_note: `The corpus carries no finished-product or ingredient-level literature for ${analyte.label} in this matrix yet. ${analyte.remediation_note}`,
          source_summaries: [],
        })
      }
    }
  }
  return out
}

function parseCsv(text) {
  const rows = []
  const records = parseCsvRecords(text)
  const headers = records.shift() || []
  for (const record of records) {
    if (record.every((value) => value === "")) continue
    const row = {}
    headers.forEach((header, index) => {
      row[header] = record[index] ?? ""
    })
    rows.push(row)
  }
  return rows
}

function parseCsvRecords(text) {
  const records = []
  let field = ""
  let record = []
  let inQuotes = false

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index]
    const next = text[index + 1]

    if (char === '"' && inQuotes && next === '"') {
      field += '"'
      index += 1
      continue
    }
    if (char === '"') {
      inQuotes = !inQuotes
      continue
    }
    if (char === "," && !inQuotes) {
      record.push(field)
      field = ""
      continue
    }
    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1
      record.push(field)
      records.push(record)
      field = ""
      record = []
      continue
    }
    field += char
  }

  if (field || record.length > 0) {
    record.push(field)
    records.push(record)
  }

  return records
}
