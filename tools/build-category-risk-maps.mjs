#!/usr/bin/env node
// Precompute the supply-chain risk map for every locked HMTc product row, from
// the row's declared ingredient targets, so the brand surface and /api/risk-map
// can serve a category lookup without recomputing. Arbitrary bills of materials
// are still handled live by /api/risk-map?ingredients=...
//
// Output: wiki/static/category-risk-maps.json (Quartz copies to public/static).
//
// Usage: node tools/build-category-risk-maps.mjs   (npm run risk-maps)

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import yaml from "js-yaml"
import { buildContaminationIndex, buildRiskMap } from "./lib/risk-map.mjs"

const __filename = fileURLToPath(import.meta.url)
const repoRoot = path.resolve(path.dirname(__filename), "..")
const CANONICAL_BASE = "https://heavymetalindex.com"
const productsDir = path.join(repoRoot, "wiki/products")
const contaminationPath = path.join(repoRoot, "wiki/static/contamination.json")
const outPath = path.join(repoRoot, "wiki/static/category-risk-maps.json")

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!m) return {}
  try { return yaml.load(m[1]) || {} } catch { return {} }
}
function isLocked(data) {
  if (data.provisional_scaffold === true || data.pending_category_lock === true) return false
  return data.hmtc_row !== undefined && data.hmtc_row !== null && data.hmtc_row !== "pending_taxonomy_review"
}

const contamination = JSON.parse(fs.readFileSync(contaminationPath, "utf8"))
const index = buildContaminationIndex(contamination.records || contamination)

const records = []
let skipped = 0
for (const file of fs.readdirSync(productsDir).sort()) {
  if (!file.endsWith(".md") || file === "index.md") continue
  const slug = file.replace(/\.md$/, "")
  const data = parseFrontmatter(fs.readFileSync(path.join(productsDir, file), "utf8"))
  if (!isLocked(data)) { skipped++; continue }

  // The row's bill of materials: its ingredient targets plus its base taxonomy
  // (which often is itself a characterized ingredient, e.g. infant-formula-powder).
  const queries = [...new Set([...(data.ingredient_targets || []), data.base_taxonomy].filter(Boolean))]
  if (!queries.length) { skipped++; continue }

  const map = buildRiskMap(queries, index, { canonicalBase: CANONICAL_BASE })
  records.push({
    category: `products/${slug}`,
    label: data.label || data.title || slug,
    hmtc_category: data.hmtc_category ?? null,
    hmtc_row: data.hmtc_row ?? null,
    category_label: data.category_label || null,
    canonical_url: `${CANONICAL_BASE}/products/${slug}`,
    ...map,
  })
}
records.sort((a, b) => a.category.localeCompare(b.category))

const payload = {
  generated_at: new Date().toISOString(),
  schema_version: "hmi.risk-map.v1",
  canonical_base: CANONICAL_BASE,
  disclaimer:
    "Ranks where heavy-metal exposure originates within each category's declared ingredient targets, by literature-reported concentration. Ingredient-level evidence, not finished-product measurement, and not a certification threshold.",
  record_count: records.length,
  records,
}
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, JSON.stringify(payload, null, 2) + "\n", "utf8")

const withDrivers = records.filter((r) => r.metals_ranked.length > 0).length
console.error(
  `[category-risk-maps] wrote ${records.length} category maps (${withDrivers} with ranked drivers), ` +
    `skipped ${skipped}. Output ${path.relative(repoRoot, outPath)}`,
)
