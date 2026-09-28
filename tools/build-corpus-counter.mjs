#!/usr/bin/env node
// Builds the public-facing corpus-scope counter rendered on the homepage.
//
// Counts every page in wiki/sources/, wiki/ingredients/, wiki/products/,
// wiki/metals/, and wiki/regulations/, plus the structured evidence layer
// at data/evidence/values.jsonl, plus the routing audit row count. Emits a
// marker-bounded HTML block at wiki/index.md so regulators, brand legal
// teams, retailers, and journalists landing on the homepage see the scale
// of the indexed corpus before they navigate anywhere.
//
// The counter is rebuilt on every prebuild run so the homepage stays
// current as the bulk ingest fills out the corpus. Counts are derived
// strictly from on-disk frontmatter and the structured-evidence layer;
// no hand-maintained tallies.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { homepageLayoutViolations } from "./audit-homepage-layout.mjs"

const repoRoot = process.cwd()
const sourcesDir = path.join(repoRoot, "wiki/sources")
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const productsDir = path.join(repoRoot, "wiki/products")
const metalsDir = path.join(repoRoot, "wiki/metals")
const regulationsDir = path.join(repoRoot, "wiki/regulations")
const valuesPath = path.join(repoRoot, "data/evidence/values.jsonl")
const routingAuditPath = path.join(repoRoot, "data/evidence/product_source_routing_audit.csv")
const homepagePath = path.join(repoRoot, "wiki/index.md")

const beginMarker = "<!-- BEGIN: hmi-corpus-counter -->"
const endMarker = "<!-- END: hmi-corpus-counter -->"
const featureBeginMarker = "<!-- BEGIN: hmi-feature-grid -->"
const featureEndMarker = "<!-- END: hmi-feature-grid -->"
const metalBeginMarker = "<!-- BEGIN: hmi-metal-registry -->"
const metalEndMarker = "<!-- END: hmi-metal-registry -->"

// Editorial columns for the homepage metal registry (v3 HOME A, "Metal
// registry"). Reference-value status and driver matrices are editorial
// judgements, not counts, so they live here; the source count beside each row
// is read from the metal page's own `sources:` frontmatter and is never
// written by hand. A metal absent from this map simply does not appear in the
// table — the registry is a curated top slice, not the full 36.
const METAL_REGISTRY = [
  ["lead", "Lead", "Pb", "No tolerable intake", "none", "Cereals, root vegetables, spices, infant foods"],
  ["cadmium", "Cadmium", "Cd", "EFSA TWI", "value", "Cocoa, leafy greens, root vegetables, offal"],
  ["chromium", "Chromium", "Cr", "Species-specific", "species", "Processing contact, drinking water"],
  ["nickel", "Nickel", "Ni", "EU maximum levels", "value", "Legumes, nuts, cocoa, equipment contact"],
  ["arsenic-total", "Arsenic", "As", "Species-specific", "species", "Rice, seaweed, drinking water, apple juice"],
  ["mercury-total", "Mercury", "Hg", "JECFA PTWI, MeHg", "value", "Predatory fish, shellfish"],
  ["aluminum", "Aluminum", "Al", "EFSA TWI", "value", "Additives, packaging contact, botanicals"],
  ["tin", "Tin", "Sn", "Codex ML", "species", "Canned foods, acidic matrices"],
]

// Source-type normalization map. The on-disk vocabulary has accumulated
// spelling drift over time; the counter normalizes to a canonical set so
// the public-facing counts are unambiguous.
const sourceTypeMap = new Map([
  ["peer-reviewed", "peer_reviewed"],
  ["study", "peer_reviewed"],
  ["systematic-review", "peer_reviewed"],
  ["review-chapter", "peer_reviewed"],
  ["meta-analysis", "peer_reviewed"],
  ["textbook-chapter", "textbook"],
  ["gov-report", "government"],
  ["government_report", "government"],
  ["government-report", "government"],
  ["government_dataset", "government"],
  ["gov-data", "government"],
  ["gov-guidance", "government"],
  ["government_documentation", "government"],
  ["regulation", "government"],
  ["ngo-report", "ngo_industry"],
  ["industry-report", "ngo_industry"],
  ["news-commentary", "news"],
  ["news", "news"],
])

const counts = {
  source_pages_total: 0,
  source_peer_reviewed: 0,
  source_government: 0,
  source_textbook: 0,
  source_ngo_industry: 0,
  source_news: 0,
  source_other: 0,
  source_evidence_tier_a: 0,
  source_evidence_tier_b: 0,
  source_evidence_tier_c: 0,
  source_evidence_tier_unknown: 0,
  source_databases_indexed: 0,
  ingredient_pages: 0,
  product_pages: 0,
  metal_pages: 0,
  regulation_pages: 0,
  structured_value_records: 0,
  routing_rows: 0,
  jurisdictions_indexed: 0,
}

const jurisdictionSet = new Set()
const databaseSet = new Set()

// Patterns that mark a source page as a recurring dataset (database extract)
// rather than a one-off study or report. These add a separate "databases
// indexed" axis to the counter so regulators see that the corpus draws on
// programmatic monitoring data, not just individual papers.
const databasePatterns = [
  /\btds\b/i, // FDA / EFSA Total Diet Study
  /\bgems\b/i, // WHO GEMS/Food
  /\bcompliance\b/i, // FDA compliance datasets
  /\bsurvey\b/i, // formal surveys (FDA special survey, FSA surveys)
  /\bsurveillance\b/i,
  /\bmonitoring\b/i,
  /fy\d{4}/i, // fiscal-year tagged datasets
  /-tds-/i,
  /^fda\d{4}-(infant|baby|juice|food|toxic|compliance|survey|tds|special|analytical)/i,
  /^efsa-?\d/i,
  /^fsa\d{4}-/i,
  /^who-?(gems|tds)/i,
  /^codex-/i,
  /^atsdr-/i,
]

for (const file of fs.readdirSync(sourcesDir).sort()) {
  if (!file.endsWith(".md")) continue
  if (file === "index.md" || file === "_TEMPLATE.md") continue
  counts.source_pages_total += 1
  const raw = fs.readFileSync(path.join(sourcesDir, file), "utf8")
  const fm = matter(raw).data
  const cite = String(fm.cite_key || path.basename(file, ".md"))
  const rawType = String(fm.source_type || "").trim().toLowerCase()
  const normalized = sourceTypeMap.get(rawType) || (rawType ? "other" : "other")
  switch (normalized) {
    case "peer_reviewed":
      counts.source_peer_reviewed += 1
      break
    case "government":
      counts.source_government += 1
      break
    case "textbook":
      counts.source_textbook += 1
      break
    case "ngo_industry":
      counts.source_ngo_industry += 1
      break
    case "news":
      counts.source_news += 1
      break
    default:
      counts.source_other += 1
  }
  const tier = String(fm.evidence_tier || "").trim().toUpperCase()
  if (tier === "A") counts.source_evidence_tier_a += 1
  else if (tier === "B") counts.source_evidence_tier_b += 1
  else if (tier === "C") counts.source_evidence_tier_c += 1
  else counts.source_evidence_tier_unknown += 1

  if (databasePatterns.some((pattern) => pattern.test(cite))) {
    databaseSet.add(cite)
  }
  for (const jurisdiction of asArray(fm.jurisdictions)) {
    const code = String(jurisdiction).trim()
    if (code) jurisdictionSet.add(code.toUpperCase())
  }
}

counts.source_databases_indexed = databaseSet.size
counts.jurisdictions_indexed = jurisdictionSet.size

counts.ingredient_pages = countMarkdownPages(ingredientsDir, ["index.md"])
counts.product_pages = countMarkdownPages(productsDir, ["index.md"])
counts.metal_pages = countMarkdownPages(metalsDir, ["index.md"])
counts.regulation_pages = countMarkdownPages(regulationsDir, ["index.md"])

if (fs.existsSync(valuesPath)) {
  const text = fs.readFileSync(valuesPath, "utf8")
  counts.structured_value_records = text.split("\n").filter((line) => line.trim().length > 0).length
}

if (fs.existsSync(routingAuditPath)) {
  const text = fs.readFileSync(routingAuditPath, "utf8")
  counts.routing_rows = Math.max(text.split("\n").filter((line) => line.trim().length > 0).length - 1, 0)
}

const today = new Date().toISOString().slice(0, 10)
const block = renderBlock(counts, today)
const featureBlock = renderFeatureGrid(counts)

const metalBlock = renderMetalRegistry()

upsertHomepageBlock(homepagePath, block)
upsertFeatureGridBlock(homepagePath, featureBlock)
upsertMarkerBlock(homepagePath, metalBeginMarker, metalEndMarker, metalBlock)
const homepageViolations = homepageLayoutViolations(fs.readFileSync(homepagePath, "utf8"))
if (homepageViolations.length) {
  for (const v of homepageViolations) {
    console.error(`build-corpus-counter: wiki/index.md:${v.line}: ${v.message}`)
  }
  console.error("build-corpus-counter: refused to leave prose outside the designed homepage. Marker blocks only.")
  process.exit(1)
}
console.log(
  `Wrote corpus counter: ${counts.source_pages_total} source pages (${counts.source_peer_reviewed} peer-reviewed, ${counts.source_government} government, ${counts.source_databases_indexed} databases, ${counts.source_evidence_tier_a} A-tier), ${counts.ingredient_pages} ingredients, ${counts.product_pages} products, ${counts.metal_pages} metals, ${counts.regulation_pages} regulations, ${counts.structured_value_records} structured records, ${counts.routing_rows} routing rows, ${counts.jurisdictions_indexed} jurisdictions.`,
)

function renderBlock(c, refreshDate) {
  // v3 HOME A lines 116-129: a 6-row ledger inside the hero, not a 10-row dl.
  const rows = [
    ["Peer-reviewed studies", c.source_peer_reviewed],
    ["Government reports and datasets", c.source_government],
    ["Programmatic databases indexed", c.source_databases_indexed],
    ["A-tier curated sources", c.source_evidence_tier_a],
    ["Structured evidence records", c.structured_value_records],
    ["Jurisdictions covered", c.jurisdictions_indexed],
  ]
  const body = rows
    .map((r) => `      <div class="hmi-v3-ledger-row"><span class="hmi-v3-ledger-k">${r[0]}</span><span class="hmi-v3-ledger-v">${fmt(r[1])}</span></div>`)
    .join("\n")
  return `${beginMarker}
<div class="hmi-v3-ledger" aria-label="Library at a glance">
  <div class="hmi-v3-ledger-head">
    <span class="hmi-v3-ledger-title">Library at a glance</span>
    <span class="hmi-v3-ledger-refresh">UPDATED ${refreshDate}</span>
  </div>
  <div class="hmi-v3-ledger-body">
${body}
    <p class="hmi-v3-ledger-note">Source and evidence counts reflect the current collection.</p>
  </div>
  <a class="hmi-v3-ledger-coverage" href="coverage/">Explore coverage <span aria-hidden="true">&rarr;</span></a>
</div>
${endMarker}`
}

function fmt(value) {
  return new Intl.NumberFormat("en-US").format(value)
}

function renderFeatureGrid(c) {
  // v3 HOME A lines 163-175 + registries data at 2155-2161: five cards, each a
  // mono count over a Lora title over one line of prose. No sixth card, no
  // "pages" suffix, no meta line.
  const cards = [
    [fmt(c.product_pages), "Products", "products/", "Category risk profiles built from the ingredients that drive them."],
    [fmt(c.ingredient_pages), "Ingredients", "ingredients/", "Why a commodity accumulates a metal, and how much the literature reports."],
    [fmt(c.metal_pages), "Metals", "metals/", "Endpoints, kinetics, and the reference value each body has or has not set."],
    [fmt(c.regulation_pages), "Regulations", "regulations/", "Values, matrices, bases, and legal status, per instrument."],
    [fmt(c.source_pages_total), "Sources", "sources/", "Methods, extracted values, and the file hash behind every figure."],
  ]
  const body = cards
    .map(
      (k) => `  <a class="hmi-v3-registry" href="${k[2]}">
    <span class="hmi-v3-registry-n">${k[0]}</span>
    <span class="hmi-v3-registry-t">${k[1]}</span>
    <span class="hmi-v3-registry-d">${k[3]}</span>
  </a>`,
    )
    .join("\n")
  // v3 163-165: a full-bleed band whose INNER wrapper carries max-width 1760
  // and the 72px 48px 80px padding. Without the wrapper the cards spread past
  // 1760 on wide viewports instead of centring.
  return `${featureBeginMarker}
<section class="hmi-v3-registries" aria-label="Registries">
  <div class="hmi-v3-registries-inner">
${body}
  </div>
</section>
${featureEndMarker}`
}

function countMarkdownPages(dir, skipFiles) {
  if (!fs.existsSync(dir)) return 0
  const skip = new Set(skipFiles)
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") && !skip.has(file))
    .filter((file) => !file.startsWith("_"))
    .filter((file) => {
      // Exclude auto-generated cross-cut pages so the "Regulation pages" /
      // "Product pages" / etc. counts reflect atomic items, not derived views.
      const raw = fs.readFileSync(path.join(dir, file), "utf8")
      const fm = matter(raw).data
      return fm.auto_generated !== true
    })
    .length
}

function asArray(value) {
  if (Array.isArray(value)) return value
  if (value === null || value === undefined || value === "") return []
  return [value]
}

function upsertHomepageBlock(filePath, block) {
  if (!fs.existsSync(filePath)) {
    console.error(`Homepage not found at ${filePath}`)
    process.exit(1)
  }
  const text = fs.readFileSync(filePath, "utf8")
  const pattern = new RegExp(`${escapeRegExp(beginMarker)}[\\s\\S]*?${escapeRegExp(endMarker)}`)

  let next
  if (pattern.test(text)) {
    // Function replacer: keep `$&`/`$1`/`$'`/`` $` `` in the generated block
    // literal rather than letting String.replace treat them as backreferences
    // (the source-legend idempotency bug class).
    next = text.replace(pattern, () => block)
  } else {
    // Insert after the hero section, before the feature grid. If the hero
    // section isn't where expected, append at the end of the file.
    const heroEnd = text.indexOf("</section>", text.indexOf('class="hmi-home-hero"'))
    if (heroEnd >= 0) {
      const insertAt = heroEnd + "</section>".length
      next = `${text.slice(0, insertAt)}\n\n${block}\n${text.slice(insertAt)}`
    } else {
      next = `${text.trimEnd()}\n\n${block}\n`
    }
  }

  if (next === text) return
  fs.writeFileSync(filePath, next, "utf8")
}

function upsertFeatureGridBlock(filePath, block) {
  if (!fs.existsSync(filePath)) return
  const text = fs.readFileSync(filePath, "utf8")
  const pattern = new RegExp(`${escapeRegExp(featureBeginMarker)}[\\s\\S]*?${escapeRegExp(featureEndMarker)}`)
  if (!pattern.test(text)) return
  const next = text.replace(pattern, () => block)  // literal replacement, no $-backreference interpretation
  if (next === text) return
  fs.writeFileSync(filePath, next, "utf8")
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

// ── homepage metal registry (v3 HOME A) ──────────────────────────────────
// Source counts come from each metal page's own `sources:` frontmatter, so the
// table cannot drift from the pages it links to. Rows whose page is missing are
// skipped rather than rendered with a blank or a guessed number.
function renderMetalRegistry() {
  const rows = []
  for (const [slug, name, sym, tag, tone, drivers] of METAL_REGISTRY) {
    const file = path.join(metalsDir, `${slug}.md`)
    if (!fs.existsSync(file)) continue
    const fm = matter(fs.readFileSync(file, "utf8")).data
    const n = Number(fm?.sources)
    if (!Number.isFinite(n) || n <= 0) continue
    rows.push({ slug, name, sym, tag, tone, drivers, n })
  }
  rows.sort((a, b) => b.n - a.n)

  const body = rows
    .map(
      (r) => `      <tr>
        <td class="hmi-metal-name"><a href="metals/${esc(r.slug)}/">${esc(r.name)}</a> <span>${esc(r.sym)}</span></td>
        <td class="hmi-metal-n">${r.n.toLocaleString("en-US")}</td>
        <td><span class="hmi-metal-tag hmi-metal-tag--${esc(r.tone)}">${esc(r.tag)}</span></td>
        <td class="hmi-metal-drivers">${esc(r.drivers)}</td>
      </tr>`,
    )
    .join("\n")

  return `${metalBeginMarker}
<section class="hmi-home-metals" aria-label="Metal registry">
  <div class="hmi-home-metals-head">
    <h2>Metal registry</h2>
    <a class="hmi-home-metals-all" href="metals/">All metals &rarr;</a>
  </div>
  <table class="hmi-metal-table">
    <thead>
      <tr><th>Metal</th><th>Sources</th><th>Reference value status</th><th>Driver matrices</th></tr>
    </thead>
    <tbody>
${body}
    </tbody>
  </table>
</section>
${metalEndMarker}`
}

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

// Generic marker upsert. Like upsertFeatureGridBlock, it refuses to insert when
// the markers are absent: a homepage rewrite that drops a marker should lose the
// block, not gain a duplicate appended at the end of the file.
function upsertMarkerBlock(filePath, begin, end, block) {
  if (!fs.existsSync(filePath)) return
  const text = fs.readFileSync(filePath, "utf8")
  const pattern = new RegExp(`${escapeRegExp(begin)}[\\s\\S]*?${escapeRegExp(end)}`)
  if (!pattern.test(text)) return
  const next = text.replace(pattern, () => block)
  if (next === text) return
  fs.writeFileSync(filePath, next, "utf8")
}
