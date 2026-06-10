#!/usr/bin/env node
// Builds the two gap manifests (ingredients + products) that drive auto-fetch.
//
// Inputs:
//   - wiki/coverage-priorities.md (Tier 1/2/3 ingredient list with target metals)
//   - wiki/products-coverage.md (product category tier assignments)
//   - wiki/ingredients/*.md (current n_studies per metal)
//   - wiki/products/*.md (current source count, lock state)
//   - data/evidence/product_source_routing_audit.csv (routed sources per product)
//   - data/auto-fetch/cooldown.csv (60-day cooldown per (target, metal))
//
// Outputs:
//   - data/auto-fetch/gap-manifests/ingredients-<date>.csv
//   - data/auto-fetch/gap-manifests/products-<date>.csv
//   - data/auto-fetch/gap-manifests/summary-<date>.md (human-readable headline counts)
//
// Per docs/auto-fetch-design.md. Sufficiency threshold: n_studies < 5 OR pending.
//
// This script does NO network calls. It produces a coverage-gap report from
// on-disk state alone. Run before any fetch to see the gap; run after a fetch
// run to verify the gap shrank.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const today = new Date().toISOString().slice(0, 10)
const SUFFICIENCY_THRESHOLD = 5
const COOLDOWN_DAYS = 60

const METAL_VOCAB = JSON.parse(
  fs.readFileSync(path.join(repoRoot, "tools/auto-fetch/metal-vocab.json"), "utf8")
)

function readFrontmatter(filePath) {
  const text = fs.readFileSync(filePath, "utf8")
  const m = text.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return {}
  const fm = {}
  const lines = m[1].split("\n")
  let currentKey = null
  let currentSub = null
  for (const line of lines) {
    const topMatch = line.match(/^([a-z_]+):\s*(.*)$/i)
    const subMatch = line.match(/^  ([A-Za-z-]+):\s*(.*)$/)
    const subSubMatch = line.match(/^    ([a-z_]+):\s*(.*)$/i)
    if (topMatch && !line.startsWith("  ")) {
      currentKey = topMatch[1]
      currentSub = null
      const val = topMatch[2].trim()
      fm[currentKey] = val === "" ? {} : val
    } else if (subMatch && currentKey && typeof fm[currentKey] === "object") {
      currentSub = subMatch[1]
      const val = subMatch[2].trim()
      fm[currentKey][currentSub] = val === "" ? {} : val
    } else if (subSubMatch && currentKey && currentSub &&
               typeof fm[currentKey]?.[currentSub] === "object") {
      fm[currentKey][currentSub][subSubMatch[1]] = subSubMatch[2].trim()
    }
  }
  return fm
}

function parseListField(val) {
  if (!val || typeof val !== "string") return []
  const m = val.match(/^\[(.*)\]$/)
  if (!m) return []
  return m[1]
    .split(",")
    .map(s => s.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean)
}

function loadCoveragePriorities() {
  // Parses wiki/coverage-priorities.md to extract (slug, tier, primary_metals).
  const text = fs.readFileSync(path.join(repoRoot, "wiki/coverage-priorities.md"), "utf8")
  const entries = []
  let currentTier = null
  for (const line of text.split("\n")) {
    if (/^## Tier 1\b/.test(line)) currentTier = 1
    else if (/^## Tier 2\b/.test(line)) currentTier = 2
    else if (/^## Tier 3\b/.test(line)) currentTier = 3
    else if (/^## /.test(line)) currentTier = null
    if (currentTier === null) continue
    const m = line.match(/^\|\s*\d+\s*\|\s*(.+?)\s*\|\s*\d+\s*\|/)
    if (!m) continue
    const cellText = m[1]
    const linkMatch = cellText.match(/\[\[ingredients\/([a-z0-9-]+)\]\]/)
    const plainMatch = cellText.match(/^([a-z][a-z0-9 -/]+?)(?:\s*\||\s*$)/)
    const slug = linkMatch ? linkMatch[1] : plainMatch ? plainMatch[1].trim().split(/\s+/).join("-") : null
    if (!slug) continue
    const cells = line.split("|").map(s => s.trim())
    const metalsCell = cells[cells.length - 3] || ""
    const metals = metalsCell.split(/[,\s]+/).filter(m =>
      Object.keys(METAL_VOCAB).includes(m.replace(/[()]/g, ""))
    )
    entries.push({ slug, tier: currentTier, metals: metals.length ? metals : ["Pb", "Cd"] })
  }
  return entries
}

function loadProductCoverage() {
  // Parses wiki/products-coverage.md to extract (cat, tier).
  const text = fs.readFileSync(path.join(repoRoot, "wiki/products-coverage.md"), "utf8")
  const tierByCat = {}
  for (const line of text.split("\n")) {
    const m = line.match(/^\|\s*(\d+)\s*\|\s*([^|]+?)\s*\|\s*\d+\s*\|\s*\d+\s*\|\s*\d+\s*\|\s*[^|]+\s*\|\s*Tier\s*(\d)/)
    if (m) tierByCat[parseInt(m[1], 10)] = parseInt(m[3], 10)
  }
  return tierByCat
}

function readIngredientNStudies(slug) {
  const filePath = path.join(repoRoot, "wiki/ingredients", `${slug}.md`)
  if (!fs.existsSync(filePath)) return { exists: false, byMetal: {} }
  const text = fs.readFileSync(filePath, "utf8")
  const byMetal = {}
  // Parse the contamination_profile block: find each metal sub-block and its n_studies.
  const profileMatch = text.match(/contamination_profile:\s*\n([\s\S]*?)(?:\n[a-z_]+:|---)/)
  if (!profileMatch) return { exists: true, byMetal }
  const blockText = profileMatch[1]
  const metalBlocks = blockText.split(/\n  (?=[A-Z])/g)
  for (const block of metalBlocks) {
    const mm = block.match(/^\s*([A-Za-z-]+):/)
    if (!mm) continue
    const metal = mm[1]
    const nMatch = block.match(/n_studies:\s*(\d+)/)
    const statusMatch = block.match(/status:\s*([a-z_]+)/)
    byMetal[metal] = {
      n_studies: nMatch ? parseInt(nMatch[1], 10) : 0,
      status: statusMatch ? statusMatch[1] : "pending"
    }
  }
  return { exists: true, byMetal }
}

function readProductMeta(filePath) {
  const fm = readFrontmatter(filePath)
  const sources = parseInt(fm.sources, 10) || 0
  const cat = parseInt(fm.hmtc_category, 10) || null
  const row = parseInt(fm.hmtc_row, 10) || null
  const pendingLock = fm.pending_category_lock === "true"
  const metalsField = fm.primary_metals_of_concern || fm.panel_metals || "[]"
  const metals = parseListField(metalsField)
  return { sources, cat, row, pendingLock, metals, slug: path.basename(filePath, ".md") }
}

function loadCooldown() {
  const p = path.join(repoRoot, "data/auto-fetch/cooldown.csv")
  if (!fs.existsSync(p)) return new Map()
  const out = new Map()
  const cutoffMs = Date.now() - COOLDOWN_DAYS * 86400 * 1000
  for (const line of fs.readFileSync(p, "utf8").split("\n")) {
    const [target, metal, dateStr] = line.split(",")
    if (!target || !metal || !dateStr) continue
    const t = Date.parse(dateStr.trim())
    if (Number.isFinite(t) && t > cutoffMs) {
      out.set(`${target}::${metal}`, dateStr.trim())
    }
  }
  return out
}

function buildIngredientGapManifest() {
  const priorities = loadCoveragePriorities()
  const cooldown = loadCooldown()
  const rows = []
  for (const entry of priorities) {
    const { exists, byMetal } = readIngredientNStudies(entry.slug)
    for (const metal of entry.metals) {
      const block = byMetal[metal] || { n_studies: 0, status: "pending" }
      const needsFetch =
        block.status === "pending" || block.n_studies < SUFFICIENCY_THRESHOLD
      const cooldownKey = `ingredient:${entry.slug}::${metal}`
      const inCooldown = cooldown.has(cooldownKey)
      if (!needsFetch || inCooldown) continue
      rows.push({
        target_type: "ingredient",
        target_slug: entry.slug,
        target_exists: exists,
        metal,
        tier: entry.tier,
        n_studies: block.n_studies,
        status: block.status,
        gap: SUFFICIENCY_THRESHOLD - block.n_studies,
        priority_score:
          (4 - entry.tier) * 100 + (SUFFICIENCY_THRESHOLD - block.n_studies) * 10 + (exists ? 0 : 5)
      })
    }
  }
  rows.sort((a, b) => b.priority_score - a.priority_score)
  return rows
}

function buildProductGapManifest() {
  const tierByCat = loadProductCoverage()
  const cooldown = loadCooldown()
  const productDir = path.join(repoRoot, "wiki/products")
  const productFiles = fs.readdirSync(productDir).filter(f => f.endsWith(".md") && !f.startsWith("_"))
  const rows = []
  for (const file of productFiles) {
    const meta = readProductMeta(path.join(productDir, file))
    if (meta.pendingLock) continue // skip pending-lock auto-stubs per design doc
    if (!meta.cat) continue
    const tier = tierByCat[meta.cat]
    if (!tier || tier > 2) continue // Tier 3 not auto-fetched
    if (meta.sources >= SUFFICIENCY_THRESHOLD) continue
    const targetMetals = meta.metals.length ? meta.metals : ["Pb", "Cd", "tAs", "Hg"]
    for (const metal of targetMetals) {
      const cooldownKey = `product:${meta.slug}::${metal}`
      if (cooldown.has(cooldownKey)) continue
      rows.push({
        target_type: "product",
        target_slug: meta.slug,
        target_exists: true,
        metal,
        tier,
        hmtc_category: meta.cat,
        hmtc_row: meta.row,
        sources: meta.sources,
        gap: SUFFICIENCY_THRESHOLD - meta.sources,
        priority_score:
          (4 - tier) * 100 + (SUFFICIENCY_THRESHOLD - meta.sources) * 10 + (meta.sources === 0 ? 20 : 0)
      })
    }
  }
  rows.sort((a, b) => b.priority_score - a.priority_score)
  return rows
}

function writeCsv(rows, headers, outPath) {
  const lines = [headers.join(",")]
  for (const row of rows) {
    lines.push(headers.map(h => {
      const v = row[h]
      if (v === undefined || v === null) return ""
      const s = String(v)
      return s.includes(",") || s.includes("\"") ? `"${s.replace(/"/g, "\"\"")}"` : s
    }).join(","))
  }
  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, lines.join("\n") + "\n", "utf8")
}

function writeSummary(ingredientGaps, productGaps, outPath) {
  const byTierIng = { 1: 0, 2: 0 }
  for (const r of ingredientGaps) byTierIng[r.tier] = (byTierIng[r.tier] || 0) + 1
  const byTierProd = { 1: 0, 2: 0 }
  for (const r of productGaps) byTierProd[r.tier] = (byTierProd[r.tier] || 0) + 1
  const ingMissingPages = ingredientGaps.filter(r => !r.target_exists).length
  const prodZeroSrc = productGaps.filter(r => r.sources === 0).length

  const top10Ing = ingredientGaps.slice(0, 10)
    .map(r => `  - ${r.target_slug} × ${r.metal} (Tier ${r.tier}, n_studies=${r.n_studies}, ${r.target_exists ? "page exists" : "**page missing**"})`)
    .join("\n")
  const top10Prod = productGaps.slice(0, 10)
    .map(r => `  - ${r.target_slug} × ${r.metal} (Tier ${r.tier}, Cat ${r.hmtc_category} Row ${r.hmtc_row}, sources=${r.sources})`)
    .join("\n")

  const md = `# Auto-fetch gap manifests — ${today}

Generated by \`tools/auto-fetch/build-gap-manifests.mjs\`. No network calls; pure local computation from current coverage lists + corpus state.

## Headline counts

- **Ingredient (target, metal) gaps:** ${ingredientGaps.length} pairs need fetching
  - Tier 1: ${byTierIng[1]}
  - Tier 2: ${byTierIng[2]}
  - Of these, ${ingMissingPages} are on ingredients whose page does not yet exist
- **Product (target, metal) gaps:** ${productGaps.length} pairs need fetching
  - Tier 1: ${byTierProd[1]}
  - Tier 2: ${byTierProd[2]}
  - Of these, ${prodZeroSrc} are on product pages with zero routed sources

## Top 10 ingredient gaps by priority

${top10Ing || "  (none)"}

## Top 10 product gaps by priority

${top10Prod || "  (none)"}

## Files emitted

- \`data/auto-fetch/gap-manifests/ingredients-${today}.csv\`
- \`data/auto-fetch/gap-manifests/products-${today}.csv\`

Sufficiency threshold: n_studies < ${SUFFICIENCY_THRESHOLD} (per docs/auto-fetch-design.md). Cooldown: ${COOLDOWN_DAYS} days per (target, metal). Pending-lock product pages are excluded.
`
  fs.writeFileSync(outPath, md, "utf8")
}

function main() {
  const outDir = path.join(repoRoot, "data/auto-fetch/gap-manifests")
  fs.mkdirSync(outDir, { recursive: true })

  console.log("Building ingredient gap manifest...")
  const ingredientGaps = buildIngredientGapManifest()
  writeCsv(
    ingredientGaps,
    ["target_type", "target_slug", "target_exists", "metal", "tier", "n_studies", "status", "gap", "priority_score"],
    path.join(outDir, `ingredients-${today}.csv`)
  )

  console.log("Building product gap manifest...")
  const productGaps = buildProductGapManifest()
  writeCsv(
    productGaps,
    ["target_type", "target_slug", "target_exists", "metal", "tier", "hmtc_category", "hmtc_row", "sources", "gap", "priority_score"],
    path.join(outDir, `products-${today}.csv`)
  )

  writeSummary(ingredientGaps, productGaps, path.join(outDir, `summary-${today}.md`))

  console.log(`Wrote ${ingredientGaps.length} ingredient gaps and ${productGaps.length} product gaps`)
  console.log(`Summary: data/auto-fetch/gap-manifests/summary-${today}.md`)
}

main()
