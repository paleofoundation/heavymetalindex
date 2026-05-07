import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { writeStableJsonSummary } from "./stable-json-summary.mjs"

const repoRoot = process.cwd()
const routesPath = path.join(repoRoot, "data/evidence/fda_tds_fy2018_2020_ingredient_routes.csv")
const tdsSummaryPath = path.join(repoRoot, "data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv")
const crosswalkPath = path.join(repoRoot, "data/evidence/product_regulatory_crosswalk.csv")
const productDir = path.join(repoRoot, "wiki/products")
const outputPath = path.join(repoRoot, "data/evidence/fda_tds_product_route_candidates.csv")
const summaryOutputPath = path.join(repoRoot, "data/evidence/fda_tds_product_route_summary.json")

const routes = fs.existsSync(routesPath) ? parseCsv(fs.readFileSync(routesPath, "utf8")) : []
const tdsSummaryRows = fs.existsSync(tdsSummaryPath) ? parseCsv(fs.readFileSync(tdsSummaryPath, "utf8")) : []
const regulatoryRows = fs.existsSync(crosswalkPath) ? parseCsv(fs.readFileSync(crosswalkPath, "utf8")) : []
const products = readProductPages()
const regulatoryMetals = regulatoryMetalsByProduct(regulatoryRows)
const summaryRowsByFood = groupBy(tdsSummaryRows, (row) => `${row.source_id}::${row.tds_food_number}`)

const reportRows = []
let foodRowsWithProductRoutes = 0
let ingredientOnlyFoodRows = 0
let candidateFoodsWithRows = 0

for (const route of routes) {
  const productRoutes = splitList(route.product_routes)
  if (productRoutes.length === 0) {
    ingredientOnlyFoodRows += 1
    continue
  }

  foodRowsWithProductRoutes += 1
  const summaryRows = summaryRowsByFood.get(`${route.source_id}::${route.tds_food_number}`) ?? []
  let addedForFood = 0

  for (const productSlug of productRoutes) {
    const product = products.get(productSlug)
    const wantedMetals = wantedMetalsFor(productSlug, product, regulatoryMetals)
    const productPagePath = path.join("wiki/products", `${productSlug}.md`)
    const routeStatus = product ? "direct_product_route_candidate" : "missing_product_page"

    for (const row of summaryRows) {
      const metal = canonicalMetal(row.metal_species)
      if (!metal) continue
      if (!shouldKeepMetal(metal, wantedMetals)) continue

      const speciesNote = speciesRouteNote(metal, wantedMetals)
      const actionNeeded =
        routeStatus === "missing_product_page"
          ? "Create the product page stub before promotion."
          : speciesNote ||
            "Review product scope, basis, small-n limits, and row fit before promotion into standards evidence."

      reportRows.push({
        source_id: row.source_id,
        tds_food_number: row.tds_food_number,
        tds_food_description: row.tds_food_description,
        ingredient_slug: route.ingredient_slug,
        ingredient_label: route.ingredient_label,
        product_slug: productSlug,
        product_label: product?.label ?? readableSlug(productSlug),
        product_page_path: product ? productPagePath : "",
        metal_species: metal,
        analyte: row.analyte,
        analyte_slug: row.analyte_slug,
        n: row.n,
        reported_zero_n: row.reported_zero_n,
        p10_ppb: row.p10_ppb_equivalent,
        p50_ppb: row.p50_ppb_equivalent,
        p90_ppb: row.p90_ppb_equivalent,
        p95_ppb: row.p95_ppb_equivalent,
        p100_ppb: row.max_ppb_equivalent,
        reporting_limit_min_ppb: row.reporting_limit_min_ppb_equivalent,
        reporting_limit_max_ppb: row.reporting_limit_max_ppb_equivalent,
        basis: row.basis,
        route_status: routeStatus,
        row_fit: "tds_finished_food_product_route_candidate",
        evidence_fitness_verdict: evidenceFitness(row.n),
        review_state: "needs_review",
        action_needed: actionNeeded,
        notes: tdsNotes(row, speciesNote),
      })
      addedForFood += 1
    }
  }

  if (addedForFood > 0) candidateFoodsWithRows += 1
}

reportRows.sort(
  (a, b) =>
    a.product_slug.localeCompare(b.product_slug) ||
    Number(a.tds_food_number) - Number(b.tds_food_number) ||
    metalSort(a.metal_species, b.metal_species),
)

writeCsv(outputPath, reportRows, [
  "source_id",
  "tds_food_number",
  "tds_food_description",
  "ingredient_slug",
  "ingredient_label",
  "product_slug",
  "product_label",
  "product_page_path",
  "metal_species",
  "analyte",
  "analyte_slug",
  "n",
  "reported_zero_n",
  "p10_ppb",
  "p50_ppb",
  "p90_ppb",
  "p95_ppb",
  "p100_ppb",
  "reporting_limit_min_ppb",
  "reporting_limit_max_ppb",
  "basis",
  "route_status",
  "row_fit",
  "evidence_fitness_verdict",
  "review_state",
  "action_needed",
  "notes",
])

const summary = {
  generated_at: new Date().toISOString(),
  source_id: "fda2022-tds-elements-fy2018-fy2020",
  tds_food_route_rows: routes.length,
  food_rows_with_product_routes: foodRowsWithProductRoutes,
  ingredient_only_food_rows: ingredientOnlyFoodRows,
  candidate_food_rows_with_kept_metals: candidateFoodsWithRows,
  direct_product_route_candidate_rows: reportRows.length,
  by_product: countBy(reportRows, (row) => row.product_slug),
  by_metal_species: countBy(reportRows, (row) => row.metal_species),
  by_route_status: countBy(reportRows, (row) => row.route_status),
}
writeStableJsonSummary(summaryOutputPath, summary)

console.log(`Wrote ${reportRows.length} FDA TDS product-route candidate rows to ${path.relative(repoRoot, outputPath)}`)
console.log(`Wrote FDA TDS product-route summary to ${path.relative(repoRoot, summaryOutputPath)}`)

function readProductPages() {
  const products = new Map()
  if (!fs.existsSync(productDir)) return products

  for (const file of fs.readdirSync(productDir).filter((name) => name.endsWith(".md"))) {
    const filePath = path.join(productDir, file)
    const parsed = matter(fs.readFileSync(filePath, "utf8"))
    const slug = parsed.data.category || path.basename(file, ".md")
    products.set(slug, {
      label: parsed.data.label || parsed.data.title || readableSlug(slug),
      metals: asArray(parsed.data.primary_metals_of_concern).map(canonicalMetal).filter(Boolean),
    })
  }

  return products
}

function regulatoryMetalsByProduct(rows) {
  const metals = new Map()
  for (const row of rows) {
    const productSlug = row.product_slug
    if (!productSlug) continue
    if (!metals.has(productSlug)) metals.set(productSlug, new Set())
    for (const metal of splitMetals(row.metal_species)) {
      const canonical = canonicalMetal(metal)
      if (canonical) metals.get(productSlug).add(canonical)
    }
  }
  return metals
}

function wantedMetalsFor(productSlug, product, regulatoryMetals) {
  const metals = new Set(product?.metals ?? [])
  for (const metal of regulatoryMetals.get(productSlug) ?? []) metals.add(metal)
  return metals
}

function shouldKeepMetal(metal, wantedMetals) {
  if (wantedMetals.size === 0) return ["Pb", "Cd", "tAs", "iAs", "tHg", "MeHg", "Ni", "Al"].includes(metal)
  if (wantedMetals.has(metal)) return true
  return [...wantedMetals].some((target) => relatedSpecies(metal, target))
}

function speciesRouteNote(metal, wantedMetals) {
  if (metal === "tAs" && wantedMetals.has("iAs") && !wantedMetals.has("tAs")) {
    return "TDS row is total arsenic; do not use it as inorganic arsenic evidence."
  }
  if (metal === "tHg" && wantedMetals.has("MeHg") && !wantedMetals.has("tHg")) {
    return "TDS row is total mercury; do not use it as methylmercury evidence."
  }
  return ""
}

function tdsNotes(row, speciesNote) {
  const parts = [
    "FDA TDS finished-food composite summary retained from existing per-food/per-analyte data.",
    "Candidate only; not promoted into HMTc p90 math.",
  ]
  if (Number(row.n) > 0 && Number(row.n) < 5) parts.push(`Small N=${row.n}; review before standards use.`)
  if (speciesNote) parts.push(speciesNote)
  return parts.join(" ")
}

function evidenceFitness(n) {
  const value = Number(n)
  if (Number.isFinite(value) && value >= 20) return "EF-2"
  return "EF-3"
}

function parseCsv(text) {
  const rows = []
  let row = []
  let field = ""
  let quoted = false

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index]
    const next = text[index + 1]

    if (quoted && char === '"' && next === '"') {
      field += '"'
      index += 1
      continue
    }
    if (char === '"') {
      quoted = !quoted
      continue
    }
    if (!quoted && char === ",") {
      row.push(field)
      field = ""
      continue
    }
    if (!quoted && (char === "\n" || char === "\r")) {
      if (char === "\r" && next === "\n") index += 1
      row.push(field)
      rows.push(row)
      row = []
      field = ""
      continue
    }
    field += char
  }

  if (field || row.length) {
    row.push(field)
    rows.push(row)
  }

  const [headers = [], ...body] = rows.filter((line) => line.some((cell) => cell !== ""))
  return body.map((cells) => Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? ""])))
}

function writeCsv(filePath, rows, headers) {
  const text = `${[headers.join(","), ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(","))].join("\n")}\n`
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, text, "utf8")
}

function csvCell(value) {
  if (value === null || value === undefined) return ""
  const text = String(value)
  if (!/[",\n;]/.test(text)) return text
  return `"${text.replace(/"/g, '""')}"`
}

function splitList(value) {
  return String(value || "")
    .split(/[;]/)
    .map((item) => item.trim())
    .filter(Boolean)
}

function splitMetals(value) {
  return String(value || "")
    .replace(/^\[/, "")
    .replace(/\]$/, "")
    .split(/[;,]/)
    .map((item) => item.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean)
}

function canonicalMetal(value) {
  const metal = String(value || "").trim()
  const aliases = new Map([
    ["lead", "Pb"],
    ["lead (pb)", "Pb"],
    ["cadmium", "Cd"],
    ["cadmium (cd)", "Cd"],
    ["arsenic-inorganic", "iAs"],
    ["inorganic arsenic", "iAs"],
    ["total arsenic", "tAs"],
    ["arsenic", "tAs"],
    ["mercury", "tHg"],
    ["total mercury", "tHg"],
    ["methylmercury", "MeHg"],
    ["aluminum", "Al"],
    ["aluminium", "Al"],
    ["nickel", "Ni"],
    ["tin", "Sn"],
    ["chromium", "Cr"],
    ["uranium", "U"],
  ])
  return aliases.get(metal.toLowerCase()) ?? metal
}

function relatedSpecies(candidate, target) {
  const pairs = [
    ["tAs", "iAs"],
    ["tHg", "MeHg"],
    ["Cr", "Cr-VI"],
  ]
  return pairs.some(([a, b]) => (candidate === a && target === b) || (candidate === b && target === a))
}

function asArray(value) {
  if (Array.isArray(value)) return value.map(String)
  if (typeof value === "string") return splitMetals(value)
  return []
}

function groupBy(rows, keyFn) {
  const grouped = new Map()
  for (const row of rows) {
    const key = keyFn(row)
    if (!grouped.has(key)) grouped.set(key, [])
    grouped.get(key).push(row)
  }
  return grouped
}

function countBy(rows, keyFn) {
  const counts = {}
  for (const row of rows) {
    const key = keyFn(row) || "unknown"
    counts[key] = (counts[key] ?? 0) + 1
  }
  return counts
}

function metalSort(a, b) {
  const order = ["Pb", "Cd", "tAs", "iAs", "tHg", "MeHg", "Al", "Ni", "Sn", "Cr", "Cr-VI", "U"]
  const ai = order.indexOf(a)
  const bi = order.indexOf(b)
  if (ai !== -1 || bi !== -1) return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  return a.localeCompare(b)
}

function readableSlug(slug) {
  return String(slug).replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase())
}
