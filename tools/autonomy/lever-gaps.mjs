#!/usr/bin/env node
// Mitigation-lever gap detector + discovery-query emitter.
//
// The "Levers to reduce contamination" / "## Mitigation options" section on a
// product-category page lists interventions (sourcing, processing, formulation,
// testing/QC, packaging) and is supposed to name each lever's effect MAGNITUDE
// with a cited source (analyze-gaps.mjs canonical rule). When the contributing
// source set has no quantified evidence for a lever, the scaffold leaves a gap
// placeholder ("Quantified magnitude data not yet ingested from cited sources"
// or "No quantified data on this lever in the current corpus...") and an em-dash
// in the Source column. These are the data gaps Karen sees on the live pages.
//
// Filling them HONESTLY requires mitigation / intervention-efficacy / source-
// apportionment literature in the corpus, then a synthesis pass that writes the
// cited magnitude (or the honest no-data marker). This tool is the first half:
// it finds every gapped page and emits targeted discovery queries so the
// existing autonomous fetcher (tools/wishlist/find-candidates.mjs) pulls the
// mitigation literature. The second half is tools/autonomy/drain-lever-gaps.mjs.
//
// Outputs:
//   data/evidence/autonomy/lever-gaps.csv                 one row per gapped page
//   data/evidence/autonomy/lever-mitigation-queries.json  fetcher-schema queries
//
// Idempotent. Read-only against wiki/. Run standalone or from the daemon tick.
//
// Usage:
//   node tools/autonomy/lever-gaps.mjs
//   node tools/autonomy/lever-gaps.mjs --slug=infant-formula-powder-non-soy
//   node tools/autonomy/lever-gaps.mjs --max-queries-per-page=6

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const productsDir = path.join(repoRoot, "wiki/products")
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const gapsCsvPath = path.join(autonomyDir, "lever-gaps.csv")
const queriesPath = path.join(autonomyDir, "lever-mitigation-queries.json")

const args = parseArgs(process.argv.slice(2))
const slugOverride = args.get("slug") || null
const maxQueriesPerPage = Number(args.get("max-queries-per-page") || 6)

fs.mkdirSync(autonomyDir, { recursive: true })

// Phrases the scaffold / synthesis layer uses to mark a lever as un-evidenced.
// Any of these in a page's Levers/Mitigation section means at least one gap.
const GAP_PHRASES = [
  "Quantified magnitude data not yet ingested",
  "No quantified data on this lever",
  "will be expanded when relevant evidence is ingested",
  "quantified magnitude data not yet ingested",
  "magnitude data not yet ingested from cited sources",
]

// Section headings that hold the lever content (varies by scaffold vintage).
const LEVER_HEADINGS = [
  "## Levers to reduce contamination",
  "## Mitigation options",
  "## Levers",
]

// Metal symbol -> OpenAlex-friendly search words. Mirrors the metal vocabulary
// in tools/wishlist + build-routing-audit.
const METAL_WORDS = new Map([
  ["Pb", ["lead", "Pb"]],
  ["Cd", ["cadmium", "Cd"]],
  ["iAs", ["inorganic arsenic", "arsenic"]],
  ["tAs", ["arsenic", "total arsenic"]],
  ["As", ["arsenic"]],
  ["MeHg", ["methylmercury", "mercury"]],
  ["tHg", ["mercury", "total mercury"]],
  ["Hg", ["mercury"]],
  ["Ni", ["nickel", "Ni"]],
  ["Al", ["aluminium", "aluminum"]],
  ["Cr", ["chromium"]],
  ["Cr-VI", ["hexavalent chromium", "chromium VI"]],
  ["Sn", ["tin", "Sn"]],
  ["Sb", ["antimony"]],
  ["U", ["uranium"]],
])

// Mitigation "aspect" search fragments. Each gapped page x metal gets queries
// across these aspects so the fetcher pulls source-apportionment, intervention-
// efficacy, and migration/leaching literature — the evidence a lever magnitude
// needs. Kept small and general; the synthesis drainer maps whatever lands to
// the specific levers.
// Each aspect has an unambiguous single-word `core` (used as the OpenAlex/PubMed
// core query alongside matrix+metal) and a broader `full` OR-set. The core word
// must read in the metal-contamination sense: a bare "source" matched
// "source of feeding advice" papers in testing, so the apportionment aspect
// anchors on "contamination" instead.
const MITIGATION_ASPECTS = [
  { tag: "source-apportionment", core: "contamination", full: "contamination OR source OR determinants OR ingredient OR premix" },
  { tag: "mitigation-efficacy", core: "reduction", full: "reduction OR mitigation OR removal OR intervention" },
  { tag: "migration-leaching", core: "migration", full: "migration OR leaching OR packaging OR processing" },
]

// ---------- Scan product pages ----------

const productFiles = fs
  .readdirSync(productsDir)
  .filter((f) => f.endsWith(".md") && f !== "index.md")
  .sort()

const gappedPages = []

for (const file of productFiles) {
  const slug = file.replace(/\.md$/, "")
  if (slugOverride && slug !== slugOverride) continue
  const raw = fs.readFileSync(path.join(productsDir, file), "utf8")
  let data
  try {
    data = matter(raw).data || {}
  } catch {
    continue
  }
  if (data.retired === true) continue // retired/out-of-scope rows are intentionally unfilled

  const section = extractLeverSection(raw)
  if (!section) continue

  const gapCount = GAP_PHRASES.reduce(
    (n, phrase) => n + countOccurrences(section, phrase),
    0,
  )
  // Also treat em-dash-only Source cells in a Levers table as gaps.
  const dashSourceRows = countDashSourceRows(section)
  const totalGaps = Math.max(gapCount, dashSourceRows)
  if (totalGaps === 0) continue

  // Prefer the metals the LEVERS actually name (e.g. Al/Ni/Sn for formula),
  // not just the occurrence-priority metals (Pb/Cd) — a premix-aluminium lever
  // needs aluminium literature, not lead literature. Fall back to frontmatter.
  const frontmatterMetals = normalizeMetals(data.primary_metals_of_concern || data.panel_metals || [])
  const sectionMetals = extractSectionMetals(section)
  const metals = sectionMetals.length ? sectionMetals : frontmatterMetals
  const matrix = matrixPhrase(data, slug)
  gappedPages.push({ slug, gapCount: totalGaps, metals, matrix, categories: gappedCategories(section) })
}

// ---------- Emit gap CSV ----------

const csvHeader = "product_slug,gapped_lever_count,primary_metals,matrix_phrase,gapped_lever_categories"
const csvRows = gappedPages.map((p) =>
  [
    p.slug,
    p.gapCount,
    csvCell(p.metals.join(";")),
    csvCell(p.matrix),
    csvCell(p.categories.join(";")),
  ].join(","),
)
fs.writeFileSync(gapsCsvPath, [csvHeader, ...csvRows].join("\n") + "\n", "utf8")

// ---------- Emit discovery queries (fetcher schema) ----------

const queries = []
for (const page of gappedPages) {
  // Use the page's top 3 lever-named metals (or a Cat-1 default) to bound
  // query volume while covering the metals the levers actually discuss.
  const metals = (page.metals.length ? page.metals : ["Pb", "Cd"]).slice(0, 3)
  let emitted = 0
  outer: for (const metal of metals) {
    const words = METAL_WORDS.get(metal) || [metal]
    for (const aspect of MITIGATION_ASPECTS) {
      if (emitted >= maxQueriesPerPage) break outer
      const core = `"${page.matrix}" ${words[0]} ${aspect.core}`
      const full = `("${page.matrix}") (${words.join(" OR ")}) (${aspect.full})`
      queries.push({
        id: `LEVER-${page.slug}-${metal}-${aspect.tag}`,
        section: "lever-mitigation-gap",
        priority: "medium",
        search_query_core: core,
        search_query_full: full,
        extracted: {
          crops: [page.matrix],
          regions: [],
          metals: words,
          metal_search_terms: words,
          periods: [],
        },
        target: {
          kind: "product",
          slug: page.slug,
          metal,
          reason: "LEVER-GAP: mitigation/intervention-efficacy magnitude not yet in corpus",
          regulatory_cap: "",
        },
        domain: "food",
      })
      emitted += 1
    }
  }
}

fs.writeFileSync(queriesPath, JSON.stringify({ generated_at_note: "lever-gaps.mjs; consumed by find-candidates.mjs --queries", queries }, null, 1) + "\n", "utf8")

// ---------- Report ----------

const totalGaps = gappedPages.reduce((n, p) => n + p.gapCount, 0)
console.log(`lever-gaps: ${gappedPages.length} product page(s) with lever gaps; ${totalGaps} gapped lever(s) total`)
console.log(`  wrote ${path.relative(repoRoot, gapsCsvPath)} (${gappedPages.length} rows)`)
console.log(`  wrote ${path.relative(repoRoot, queriesPath)} (${queries.length} mitigation queries)`)
if (gappedPages.length && gappedPages.length <= 30) {
  console.log("\nTop gapped pages:")
  for (const p of [...gappedPages].sort((a, b) => b.gapCount - a.gapCount).slice(0, 12)) {
    console.log(`  ${String(p.gapCount).padStart(2)} gaps  ${p.slug.padEnd(40)} metals:${p.metals.join(",") || "—"}`)
  }
}

// ---------- Helpers ----------

function extractLeverSection(raw) {
  for (const heading of LEVER_HEADINGS) {
    const idx = raw.indexOf(`\n${heading}`)
    if (idx === -1) continue
    const start = idx + 1
    const after = raw.indexOf("\n## ", start + heading.length)
    return raw.slice(start, after === -1 ? undefined : after)
  }
  return null
}

function countOccurrences(text, needle) {
  if (!needle) return 0
  let n = 0
  let i = text.indexOf(needle)
  while (i !== -1) {
    n += 1
    i = text.indexOf(needle, i + needle.length)
  }
  return n
}

// Count Levers-table rows whose last (Source) cell is just an em dash / empty.
function countDashSourceRows(section) {
  let n = 0
  for (const line of section.split("\n")) {
    const t = line.trim()
    if (!t.startsWith("|")) continue
    const cells = t.split("|").map((c) => c.trim()).filter((c, i, a) => !(i === 0 && c === "") && !(i === a.length - 1 && c === ""))
    if (cells.length < 4) continue
    if (/^#$|^-+$|^category$/i.test(cells[0])) continue // header / separator
    const sourceCell = cells[cells.length - 1]
    if (sourceCell === "—" || sourceCell === "-" || sourceCell === "") n += 1
  }
  return n
}

// Pull the "Category" column values from gapped table rows (Sourcing/Processing/
// Formulation/Testing and QC/Packaging) so the discovery + synthesis can be
// category-aware. Best-effort; returns a de-duped list.
function gappedCategories(section) {
  const cats = new Set()
  for (const line of section.split("\n")) {
    const t = line.trim()
    if (!t.startsWith("|")) continue
    const cells = t.split("|").map((c) => c.trim())
    // typical: | # | Category | lever | magnitude | source |
    if (cells.length >= 6) {
      const cat = cells[2]
      if (/sourc|process|formulat|testing|packag|agronom/i.test(cat)) cats.add(cat)
    }
  }
  return [...cats]
}

function normalizeMetals(arr) {
  if (!Array.isArray(arr)) return []
  return arr.map((m) => String(m).trim()).filter(Boolean)
}

// Rank the metals NAMED in the lever section by mention frequency, so discovery
// targets the metals the interventions are actually about. Recognizes both
// canonical symbols and common words. Returns symbols, most-mentioned first.
function extractSectionMetals(section) {
  const lc = section.toLowerCase()
  const probes = [
    ["Al", ["aluminium", "aluminum", " al "]],
    ["Ni", ["nickel", " ni "]],
    ["Sn", ["tin migration", " tin ", " sn "]],
    ["Pb", ["lead", " pb "]],
    ["Cd", ["cadmium", " cd "]],
    ["iAs", ["inorganic arsenic"]],
    ["tAs", ["arsenic", " as "]],
    ["Cr-VI", ["hexavalent chromium", "chromium vi", "cr-vi"]],
    ["Cr", ["chromium", " cr "]],
    ["tHg", ["mercury", " hg "]],
    ["MeHg", ["methylmercury"]],
  ]
  const scored = []
  for (const [sym, needles] of probes) {
    let count = 0
    for (const n of needles) count += (lc.split(n).length - 1)
    if (count > 0) scored.push({ sym, count })
  }
  scored.sort((a, b) => b.count - a.count)
  // De-dupe arsenic/chromium/mercury species: keep the higher-scoring variant only.
  const seenFamily = new Set()
  const out = []
  for (const { sym } of scored) {
    const fam = sym.replace(/^(i|t|Me)/, "").replace(/-VI$/, "")
    if (seenFamily.has(fam)) continue
    seenFamily.add(fam)
    out.push(sym)
  }
  return out
}

// Build a short OpenAlex matrix phrase from the page identity. Strips format
// qualifiers and parentheticals so "Infant formula, powder (non-soy)" becomes
// "infant formula".
function matrixPhrase(data, slug) {
  let base = String(data.title || data.category || slug)
  base = base.replace(/\([^)]*\)/g, " ") // drop parentheticals
  base = base.replace(/—.*$/, " ") // drop em-dash trailers (RETIRED notes etc.)
  base = base.split(",")[0] // first clause
  base = base.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim()
  // Drop trailing format words that hurt recall.
  base = base.replace(/\b(powder|rtf|liquid|non soy|soy based|dry|fresh|frozen|canned|general)\b/g, " ").replace(/\s+/g, " ").trim()
  return base || slug.replace(/-/g, " ")
}

function csvCell(v) {
  const s = v == null ? "" : String(v)
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

function parseArgs(argv) {
  const m = new Map()
  for (const a of argv) {
    if (a.startsWith("--")) {
      const eq = a.indexOf("=")
      if (eq > 0) m.set(a.slice(2, eq), a.slice(eq + 1))
      else m.set(a.slice(2), "true")
    }
  }
  return m
}
