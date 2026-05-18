#!/usr/bin/env node
/**
 * Gap-driven wishlist generator (v2 — empty-product-coverage + query-history-aware).
 *
 * Two inputs, two paths:
 *
 * Path A — pooling-engine-driven (legacy). Reads
 * data/evidence/hmtc_aggregate_distributions.csv; for each (product, metal)
 * cell flagged BLOCKED or PROVISIONAL, emits OpenAlex queries to expand
 * the pool.
 *
 * Path B — empty-page-driven (new 2026-05-18). Walks wiki/products/*.md
 * and wiki/ingredients/*.md directly. Any page with sources=0 (or <3 for
 * ingredients) is emitted for wishlist coverage regardless of whether
 * the pooling engine has seen it. This closes the 191-empty-product gap
 * Karen identified: the pooling engine only sees products that already
 * have some sources, so empty pages never reach the wishlist via Path A.
 *
 * Smart keyword generation. Instead of a hardcoded 15-entry map covering
 * only Cat 1 infant foods, this version derives 3-7 search terms per page
 * from:
 *   - Slug tokenization (kebab-case → space-separated words)
 *   - page title (frontmatter `title:` field) when more readable than slug
 *   - hmtc_category_label (frontmatter `category_label:`) → category-context modifier
 *   - primary_metals_of_concern (frontmatter list) cross-joined with metal keywords
 *   - HMTc-category-specific context terms (Cat 2 children-personal-care → "cosmetic safety", Cat 5 beverages → "beverage contaminants", etc.)
 *
 * Query-history-aware deprioritization. Reads
 * data/evidence/wishlist-fetch-audit.csv; counts attempts and downloads
 * per (query_terms × cell). Queries that have been attempted >=N times
 * with <2 downloads are dropped from this run; alternative search-term
 * variations are generated instead.
 *
 * Coverage rotation. The full set of eligible cells is shuffled with a
 * day-seeded deterministic shuffle so different cells get priority on
 * different days, ensuring no cell is permanently starved.
 *
 * Output goes to:
 *   - data/evidence/autonomy/gap-driven-wishlist.csv
 *
 * The existing `npm run wishlist:fetch` pipeline consumes the CSV and
 * downloads OA PDFs to raw/manual-fetch/auto-fetched/.
 *
 * Per OPERATING.md Part 3: the model decides what's worth fetching; Karen
 * does not have to approve each query.
 */

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const pooledPath = path.join(repoRoot, "data/evidence/hmtc_aggregate_distributions.csv")
const productsDir = path.join(repoRoot, "wiki/products")
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const auditPath = path.join(repoRoot, "data/evidence/wishlist-fetch-audit.csv")
const outputPath = path.join(repoRoot, "data/evidence/autonomy/gap-driven-wishlist.csv")
const reportPath = path.join(repoRoot, `data/evidence/autonomy/gap-driven-wishlist-${new Date().toISOString().slice(0, 10)}.md`)

fs.mkdirSync(path.dirname(outputPath), { recursive: true })

// Query-history deprioritization thresholds
const MAX_ATTEMPTS_BEFORE_DROP = 5 // a (query × cell) attempted >=5 times with <2 downloads is dropped
const MIN_DOWNLOADS_TO_KEEP = 2 // if downloads <2, treat as low-yield
// Coverage-rotation budget per day (set high enough to cover all empty pages over a few days)
const MAX_QUERIES_PER_RUN = 600

// Metal keyword vocabulary
const METAL_KEYWORDS = {
  Pb: ["lead", "Pb"],
  Cd: ["cadmium", "Cd"],
  iAs: ["inorganic arsenic", "speciated arsenic"],
  tAs: ["total arsenic", "arsenic"],
  As: ["arsenic"],
  MeHg: ["methylmercury", "methyl mercury"],
  tHg: ["total mercury", "mercury"],
  Hg: ["mercury"],
  Ni: ["nickel"],
  Al: ["aluminum", "aluminium"],
  Cr: ["chromium"],
  "Cr-VI": ["hexavalent chromium", "Cr(VI)", "chromium(VI)"],
  Sn: ["tin"],
  Sb: ["antimony"],
  U: ["uranium"],
  Co: ["cobalt"],
  Cu: ["copper"],
  Fe: ["iron"],
  Mn: ["manganese"],
  Mo: ["molybdenum"],
  Zn: ["zinc"],
  Ba: ["barium"],
  Be: ["beryllium"],
  Tl: ["thallium"],
  V: ["vanadium"],
}

// HMTc category → context modifiers (used as additional search-term suffixes)
const HMTC_CATEGORY_CONTEXT = {
  1: ["infant food", "baby food", "young child food"], // Infant and Child Foods
  2: ["cosmetic safety", "personal care product", "children product safety"], // Children Personal Care
  3: ["food contaminant", "dietary exposure"], // generic food category
  4: ["produce contamination", "fruit vegetable heavy metal"], // Fruits/Vegetables/Produce
  5: ["beverage contaminants", "drink heavy metal"], // Beverages
  6: ["cleaning product safety", "household chemical"], // Cleaning products (when scaffolded)
  7: ["cookware leaching", "food contact material"], // Cookware
  8: ["textile heavy metals", "infant textile safety"], // Bedding/clothing
  9: ["toy heavy metals", "children product safety"], // Toys/art/craft
}

main()

function main() {
  const queryHistory = loadQueryHistory()
  console.log(`Loaded ${queryHistory.attempts.size} (query × cell) histories from audit log`)

  const wishlistRows = []

  // Path A: pooling-engine-driven (legacy path; preserves existing behavior)
  const pathACount = runPoolingEnginePath(wishlistRows, queryHistory)
  console.log(`Path A (pooling-engine-driven thin cells): ${pathACount} candidates`)

  // Path B: empty-page-driven (new)
  const pathBCount = runEmptyPagePath(wishlistRows, queryHistory)
  console.log(`Path B (empty-product + thin-ingredient pages): ${pathBCount} candidates`)

  // Dedupe identical (product × metal × query) tuples
  const seen = new Set()
  const unique = []
  for (const r of wishlistRows) {
    const key = `${r.product_slug}::${r.metal_species}::${r.search_query}`
    if (seen.has(key)) continue
    seen.add(key)
    unique.push(r)
  }
  console.log(`Deduped to ${unique.length} unique queries`)

  // Deprioritize queries with low-yield history
  const eligible = unique.filter((r) => {
    const histKey = `${r.product_slug}::${r.metal_species}::${r.search_query}`
    const hist = queryHistory.attempts.get(histKey)
    if (!hist) return true // never tried — keep
    if (hist.attempts < MAX_ATTEMPTS_BEFORE_DROP) return true // still under attempt cap
    if (hist.downloads >= MIN_DOWNLOADS_TO_KEEP) return true // proven productive
    return false // tried enough times with low yield — drop
  })
  console.log(`After history-aware filter: ${eligible.length} queries (dropped ${unique.length - eligible.length} low-yield)`)

  // Coverage rotation: shuffle with day-seeded deterministic order so different cells get priority on different days
  const daySeed = Math.floor(Date.now() / (24 * 60 * 60 * 1000))
  shuffleInPlace(eligible, daySeed)

  // Sort: P1/P2 priorities always come first, but within a priority the day-shuffle determines order
  eligible.sort((a, b) => {
    const pa = priorityRank(a.gap_priority)
    const pb = priorityRank(b.gap_priority)
    if (pa !== pb) return pb - pa // higher priority first
    return 0 // preserve shuffled order within priority
  })

  // Cap at MAX_QUERIES_PER_RUN so single days don't emit unbounded query volume
  const final = eligible.slice(0, MAX_QUERIES_PER_RUN)
  console.log(`Final wishlist: ${final.length} queries (capped at ${MAX_QUERIES_PER_RUN})`)

  const headers = ["gap_priority", "product_slug", "metal_species", "search_query", "openalex_filter", "rationale", "source_target"]
  const lines = [headers.join(",")]
  for (const row of final) lines.push(headers.map((h) => csvCell(row[h])).join(","))
  fs.writeFileSync(outputPath, lines.join("\n") + "\n", "utf8")

  writeReport(final, pathACount, pathBCount, unique.length, eligible.length, queryHistory)

  console.log(`\nWrote ${final.length} OpenAlex queries to ${path.relative(repoRoot, outputPath)}`)
  console.log(`Report: ${path.relative(repoRoot, reportPath)}`)
}

// ---------- Path A: pooling-engine-driven ----------

function runPoolingEnginePath(wishlistRows, queryHistory) {
  if (!fs.existsSync(pooledPath)) {
    console.warn(`No pooled distributions CSV at ${pooledPath} — Path A skipped.`)
    return 0
  }

  const pooled = parseCsv(fs.readFileSync(pooledPath, "utf8"))
  let count = 0

  for (const row of pooled) {
    const verdict = row.verdict || ""
    const isThin =
      verdict.startsWith("BLOCKED: pool too thin") ||
      verdict.startsWith("BLOCKED: no usable") ||
      verdict.startsWith("BLOCKED: sensitivity unstable") ||
      verdict.startsWith("PROVISIONAL")
    if (!isThin) continue

    const productSlug = row.product_slug
    const metal = row.metal_species
    const productKeywords = generateProductKeywords(productSlug)
    const metalKeywords = METAL_KEYWORDS[metal] || [metal]

    for (const pk of productKeywords) {
      for (const mk of metalKeywords) {
        wishlistRows.push({
          gap_priority: priorityForVerdict(verdict),
          product_slug: productSlug,
          metal_species: metal,
          search_query: `${pk} ${mk} occurrence`,
          openalex_filter: "type:journal-article,is_oa:true,from_publication_date:2018-01-01",
          rationale: `${verdict}; pool n=${row.sources_contributing || 0}, sensitivity ${row.sens_band || "unknown"}`,
          source_target: "openalex",
        })
        count++
      }
    }
  }
  return count
}

// ---------- Path B: empty-page-driven ----------

function runEmptyPagePath(wishlistRows, queryHistory) {
  let count = 0

  // Empty/thin product pages
  if (fs.existsSync(productsDir)) {
    const productFiles = fs.readdirSync(productsDir).filter((f) => f.endsWith(".md") && f !== "index.md")
    for (const file of productFiles) {
      const fullPath = path.join(productsDir, file)
      const fm = readFrontmatter(fullPath)
      const sources = parseInt(fm.sources || "0", 10)
      if (sources >= 3) continue // not empty/thin enough to warrant wishlist generation

      const slug = file.replace(/\.md$/, "")
      const metals = parseMetalsList(fm.primary_metals_of_concern)
      const productKeywords = generateProductKeywords(slug, fm.title, fm.category_label, fm.hmtc_category)
      const targetMetals = metals.length > 0 ? metals : ["Pb", "Cd", "tAs", "tHg"] // fallback to HMTc-priority metals

      for (const metal of targetMetals) {
        const metalKeywords = METAL_KEYWORDS[metal] || [metal.toLowerCase()]
        for (const pk of productKeywords) {
          for (const mk of metalKeywords) {
            wishlistRows.push({
              gap_priority: sources === 0 ? "P1" : "P2", // empty page = highest priority
              product_slug: slug,
              metal_species: metal,
              search_query: `${pk} ${mk}`,
              openalex_filter: "type:journal-article,is_oa:true,from_publication_date:2018-01-01",
              rationale: `Product page empty (sources=${sources}); wishlist generated from empty-page path (v2 2026-05-18).`,
              source_target: "openalex",
            })
            count++
          }
        }
      }
    }
  }

  // Empty/thin ingredient pages (use a stricter threshold since ingredients can have many sources)
  if (fs.existsSync(ingredientsDir)) {
    const ingredientFiles = fs.readdirSync(ingredientsDir).filter((f) => f.endsWith(".md") && f !== "index.md")
    for (const file of ingredientFiles) {
      const fullPath = path.join(ingredientsDir, file)
      const fm = readFrontmatter(fullPath)
      // Ingredient pages use n_studies in contamination_profile blocks, not sources: directly. Approximate.
      const sources = parseInt(fm.sources || fm.n_studies_max || "0", 10)
      if (sources >= 3) continue

      const slug = file.replace(/\.md$/, "")
      const productKeywords = generateProductKeywords(slug, fm.title || slug)
      // For ingredients, target the 10 HMTc analytes
      const targetMetals = ["Pb", "Cd", "iAs", "tAs", "tHg", "MeHg", "Ni", "Al", "Cr-VI", "Sn"]

      for (const metal of targetMetals) {
        const metalKeywords = METAL_KEYWORDS[metal] || [metal.toLowerCase()]
        for (const pk of productKeywords.slice(0, 2)) { // limit per-ingredient query count to avoid explosion
          for (const mk of metalKeywords.slice(0, 1)) {
            wishlistRows.push({
              gap_priority: sources === 0 ? "P2" : "P3",
              product_slug: `ingredient:${slug}`,
              metal_species: metal,
              search_query: `${pk} ${mk} contamination`,
              openalex_filter: "type:journal-article,is_oa:true,from_publication_date:2018-01-01",
              rationale: `Ingredient page thin (sources=${sources}); wishlist generated from empty-page path (v2).`,
              source_target: "openalex",
            })
            count++
          }
        }
      }
    }
  }

  return count
}

// ---------- Smart keyword generation ----------

function generateProductKeywords(slug, title, categoryLabel, hmtcCategory) {
  const keywords = []

  // Base: slug tokenized to readable words
  const slugWords = slug.replace(/-/g, " ")
  keywords.push(slugWords)

  // Title (if provided and different from slug)
  if (title) {
    const cleanTitle = title.replace(/^["']|["']$/g, "").toLowerCase()
    if (cleanTitle && cleanTitle !== slugWords) keywords.push(cleanTitle)
  }

  // Category-context modifier (if HMTc category is known)
  if (hmtcCategory) {
    const catNum = parseInt(String(hmtcCategory).replace(/[^0-9]/g, ""), 10)
    const contexts = HMTC_CATEGORY_CONTEXT[catNum] || []
    for (const ctx of contexts.slice(0, 2)) {
      keywords.push(`${slugWords} ${ctx}`)
    }
  } else if (categoryLabel) {
    // Fallback: use the category_label string directly
    const cleanCat = categoryLabel.replace(/^["']|["']$/g, "").toLowerCase()
    keywords.push(`${slugWords} ${cleanCat}`)
  }

  // Generic safety-context modifier (always useful)
  keywords.push(`${slugWords} heavy metals`)

  // Dedupe + return
  return [...new Set(keywords)]
}

// ---------- Query history ----------

function loadQueryHistory() {
  const attempts = new Map()
  if (!fs.existsSync(auditPath)) return { attempts }

  const lines = fs.readFileSync(auditPath, "utf8").split("\n").filter((l) => l.length)
  if (lines.length === 0) return { attempts }
  const headers = parseCsvLine(lines[0])
  const wishlistIdIdx = headers.indexOf("wishlist_id")
  const decisionIdx = headers.indexOf("decision")
  const queryTermsIdx = headers.indexOf("query_terms")

  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i])
    const wishlistId = cells[wishlistIdIdx] || ""
    const decision = cells[decisionIdx] || ""
    const queryTerms = cells[queryTermsIdx] || ""
    if (!wishlistId || !queryTerms) continue

    // wishlist_id is structured like "PROD-<slug>-<metal>" or "ING-<slug>-<metal>"
    // Convert to the (product_slug × metal × query) key used by the new wishlist
    const parts = wishlistId.split("-")
    if (parts.length < 3) continue
    const kind = parts[0]
    const metal = parts[parts.length - 1]
    const slug = parts.slice(1, -1).join("-")
    const productKey = kind === "ING" ? `ingredient:${slug}` : slug
    const histKey = `${productKey}::${metal}::${queryTerms}`

    const cur = attempts.get(histKey) || { attempts: 0, downloads: 0 }
    cur.attempts++
    if (decision === "downloaded") cur.downloads++
    attempts.set(histKey, cur)
  }
  return { attempts }
}

// ---------- Report ----------

function writeReport(final, pathACount, pathBCount, uniqueCount, eligibleCount, queryHistory) {
  const byPriority = countBy(final, (r) => r.gap_priority)
  const bySource = countBy(final, (r) => (r.product_slug.startsWith("ingredient:") ? "ingredient" : "product"))
  const droppedLowYield = uniqueCount - eligibleCount

  const report = [
    `# Gap-driven wishlist v2 — ${new Date().toISOString().slice(0, 10)}`,
    ``,
    `## Summary`,
    ``,
    `- Path A (pooling-engine-driven thin cells): ${pathACount} candidate queries`,
    `- Path B (empty product + thin ingredient pages): ${pathBCount} candidate queries`,
    `- Total candidates (after dedup): ${uniqueCount}`,
    `- Dropped as low-yield by query-history filter: ${droppedLowYield}`,
    `- Eligible after filtering: ${eligibleCount}`,
    `- Final wishlist (capped at ${MAX_QUERIES_PER_RUN}): ${final.length}`,
    ``,
    `### By priority`,
    ``,
    ...Object.entries(byPriority).map(([k, v]) => `- ${k}: ${v}`),
    ``,
    `### By source path`,
    ``,
    ...Object.entries(bySource).map(([k, v]) => `- ${k}: ${v}`),
    ``,
    `## Query-history-aware deprioritization`,
    ``,
    `Threshold: a (query × cell) attempted >=${MAX_ATTEMPTS_BEFORE_DROP} times with <${MIN_DOWNLOADS_TO_KEEP} successful downloads is dropped from this run.`,
    ``,
    `Audit-log scale: ${queryHistory.attempts.size} (query × cell) histories tracked.`,
    ``,
    `## Top 20 priority queries this run`,
    ``,
    "| Priority | Product/Ingredient × Metal | Query |",
    "|---|---|---|",
    ...final.slice(0, 20).map((r) => `| ${r.gap_priority} | ${r.product_slug} × ${r.metal_species} | ${r.search_query} |`),
    ``,
    `## Coverage rotation`,
    ``,
    `Queries are shuffled with a day-seeded deterministic order, so different cells get priority on different days. Over consecutive days, all eligible cells should receive query-pool attention.`,
    ``,
    `## How this feeds the corpus`,
    ``,
    `Run \`npm run wishlist:fetch\` to consume this CSV. The existing wishlist pipeline:`,
    `1. Reads queries from this file`,
    `2. Hits OpenAlex with each query + the OA-only filter`,
    `3. Downloads matching OA PDFs to \`raw/manual-fetch/auto-fetched/\``,
    `4. Logs decisions to \`data/evidence/wishlist-fetch-audit.csv\` (read by this generator on next run)`,
    ``,
    `Downloaded PDFs are picked up by the autonomy daemon's ingest-marker-batch and ingest-manual-fetch-batch steps on subsequent ticks. The full loop: empty-page detector → wishlist generator (this script) → OpenAlex fetch → PDF download → autonomy daemon ingest → routing audit → empty-page count decreases on next tick.`,
    ``,
    `## v2 changes from v1 (2026-05-18, in response to Karen's "fetching for the same thing yields diminishing returns" observation)`,
    ``,
    `- **Path B added**: empty/thin product and ingredient pages now trigger wishlist queries directly, not just via the pooling-engine output. Closes the 191-empty-product-page gap.`,
    `- **Smart keyword generation**: replaces 15-entry hardcoded keyword map. Now derives keywords from slug tokenization + page title + HMTc-category context modifier + generic safety modifier for any product/ingredient slug.`,
    `- **Query-history-aware deprioritization**: reads wishlist-fetch-audit.csv, drops queries that have run >=${MAX_ATTEMPTS_BEFORE_DROP} times with <${MIN_DOWNLOADS_TO_KEEP} successful downloads. Substitutes alternative queries via the multi-keyword generation per page.`,
    `- **Coverage rotation**: day-seeded deterministic shuffle ensures no cell is permanently starved by always-higher-priority cells.`,
    `- **Per-run cap (${MAX_QUERIES_PER_RUN})**: bounded query volume so single days don't emit unbounded OpenAlex requests.`,
  ].join("\n")
  fs.writeFileSync(reportPath, report, "utf8")
}

// ---------- Helpers ----------

function priorityForVerdict(verdict) {
  if (verdict.startsWith("BLOCKED: no usable")) return "P1"
  if (verdict.startsWith("BLOCKED: pool too thin")) return "P2"
  if (verdict.startsWith("BLOCKED: sensitivity")) return "P3"
  if (verdict.startsWith("PROVISIONAL")) return "P3"
  return "P4"
}

function priorityRank(p) {
  return { P1: 4, P2: 3, P3: 2, P4: 1 }[p] || 0
}

function readFrontmatter(filePath) {
  const text = fs.readFileSync(filePath, "utf8")
  const match = text.match(/^---\n([\s\S]*?)\n---/)
  if (!match) return {}
  const fm = {}
  const fmText = match[1]
  for (const line of fmText.split("\n")) {
    const m = line.match(/^([a-z_][a-z0-9_]*):\s*(.*)$/i)
    if (m) fm[m[1]] = m[2].trim()
  }
  return fm
}

function parseMetalsList(s) {
  if (!s) return []
  // Strip brackets and split on comma; handle "[Pb, Cd, ...]" form
  const cleaned = s.replace(/^\[|\]$/g, "").trim()
  if (!cleaned) return []
  return cleaned.split(",").map((m) => m.trim().replace(/^["']|["']$/g, "")).filter(Boolean)
}

function shuffleInPlace(arr, seed) {
  // Simple seeded LCG shuffle
  let s = seed
  for (let i = arr.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff
    const j = s % (i + 1)
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

function parseCsv(text) {
  const lines = text.replace(/\r/g, "").split("\n").filter((l) => l.length)
  if (lines.length === 0) return []
  const headers = parseCsvLine(lines[0])
  return lines.slice(1).map((l) => {
    const cells = parseCsvLine(l)
    const r = {}
    for (let i = 0; i < headers.length; i++) r[headers[i]] = cells[i] ?? ""
    return r
  })
}

function parseCsvLine(line) {
  const out = []
  let cur = "", inQ = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (c === '"') {
      if (inQ && line[i + 1] === '"') { cur += '"'; i++ }
      else inQ = !inQ
    } else if (c === "," && !inQ) { out.push(cur); cur = "" }
    else cur += c
  }
  out.push(cur)
  return out
}

function csvCell(v) {
  const s = String(v ?? "")
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

function countBy(arr, fn) {
  const c = {}
  for (const x of arr) {
    const k = fn(x) || "(empty)"
    c[k] = (c[k] || 0) + 1
  }
  return c
}
