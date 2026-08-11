#!/usr/bin/env node
// Generates marker-bounded source legend tables on product, ingredient,
// and metal pages. Per Karen's standing rule (the infant-formula-powder-non-soy
// page as exemplar), every consumer page should end with a scannable table
// listing the sources that contribute to it: #, citation, year, type, and
// "Used on this page for".
//
// Tier 1 (this script): mechanical generation of #, citation, year, type.
// The "Used on this page for" column is emitted as `*[awaiting synthesis]*`
// placeholder and gets populated by the orchestrator's
// POPULATE-SOURCE-LEGEND action.
//
// Source → target relationships are derived from source-page frontmatter:
//   products:     [slug, ...]     →  wiki/products/<slug>.md
//   ingredients:  ["[[ingredients/<slug>]]", ...]  →  wiki/ingredients/<slug>.md
//   metals:       [Pb, Cd, iAs, ...] → wiki/metals/<metal>.md (mapped)
//
// Marker convention: <!-- BEGIN: hmi-source-legend --> / <!-- END: hmi-source-legend -->
// wraps the generated section so the prebuild regenerator can replace
// contents without disturbing surrounding prose. Non-markered `## Sources`
// sections are overwritten in place — all wiki content is Claude-generated
// and nothing requires manual migration.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import {
  displayType,
  renderAuthorLabel,
} from "../lib/citation-format.mjs"

const repoRoot = process.cwd()
const sourcesDir = path.join(repoRoot, "wiki/sources")
const wikiRoot = path.join(repoRoot, "wiki")
const lintPath = path.join(repoRoot, "wiki/lint", `${new Date().toISOString().slice(0, 10)}-source-legend-migration.md`)

const args = process.argv.slice(2)
const dryRun = args.includes("--dry-run")
const targetFilter = (() => {
  const idx = args.indexOf("--only")
  return idx >= 0 ? args[idx + 1] : null  // optional: "products" / "ingredients" / "metals"
})()

const BEGIN_MARKER = "<!-- BEGIN: hmi-source-legend -->"
const END_MARKER = "<!-- END: hmi-source-legend -->"

// Metal symbol → page slug mapping. Symbols in frontmatter (Pb, Cd, etc.)
// map to canonical wiki/metals/<name>.md pages.
const METAL_PAGES = {
  Pb: "lead",
  Cd: "cadmium",
  iAs: "arsenic-inorganic",
  tAs: "arsenic-total",
  MeHg: "mercury-methyl",
  tHg: "mercury-total",
  Ni: "nickel",
  Al: "aluminum",
  Cr: "chromium",
  "Cr-VI": "chromium-hexavalent",
  Sn: "tin",
  Sb: "antimony",
  U: "uranium",
}

function isDuplicateSource(fm) {
  return String(fm.status || "").trim().toLowerCase() === "duplicate" || Boolean(fm.canonical_source)
}

// ---------- Step 1: build reverse index source → target pages ----------

const sourceFiles = fs.readdirSync(sourcesDir).filter((f) => f.endsWith(".md"))
const sourcesByCiteKey = new Map()
// targetKey is e.g. "products/infant-formula-powder-non-soy" or "metals/lead"
const targetToSources = new Map()

for (const file of sourceFiles) {
  const fullPath = path.join(sourcesDir, file)
  const raw = fs.readFileSync(fullPath, "utf8")
  let fm
  try {
    fm = matter(raw).data
  } catch (e) {
    continue  // skip pages with malformed frontmatter
  }
  if (isDuplicateSource(fm)) continue
  const citeKey = fm.cite_key || file.replace(/\.md$/, "")
  sourcesByCiteKey.set(citeKey, {
    file,
    fm,
    citeKey,
  })
  // Ingredients (via frontmatter — no audit alternative)
  const ingredients = Array.isArray(fm.ingredients) ? fm.ingredients : []
  for (const i of ingredients) {
    if (!i || typeof i !== "string") continue
    const slug = i.replace(/^\[\[ingredients\//, "").replace(/\]\]$/, "").trim()
    if (!slug) continue
    const key = `ingredients/${slug}`
    if (!targetToSources.has(key)) targetToSources.set(key, [])
    targetToSources.get(key).push(citeKey)
  }
  // Metals — symbol-to-page mapping via frontmatter
  const metals = Array.isArray(fm.metals) ? fm.metals : []
  for (const m of metals) {
    if (!m || typeof m !== "string") continue
    const pageSlug = METAL_PAGES[m.trim()]
    if (!pageSlug) continue
    const key = `metals/${pageSlug}`
    if (!targetToSources.has(key)) targetToSources.set(key, [])
    targetToSources.get(key).push(citeKey)
  }
}

// Products: use the routing audit (it correctly fans broad-token frontmatter
// like `products: [infant-formula]` out to specific subcategory pages like
// infant-formula-powder-non-soy via direct_evidence and broad_*_context routes).
const auditPath = path.join(repoRoot, "data/evidence/product_source_routing_audit.csv")
if (fs.existsSync(auditPath)) {
  const rows = parseCsv(fs.readFileSync(auditPath, "utf8"))
  for (const row of rows) {
    const productSlug = row.product_slug
    const sourceId = row.source_id
    if (!productSlug || !sourceId) continue
    // Skip the "no route" diagnostic rows where source_id is the placeholder
    if (sourceId === "—" || sourceId === "") continue
    const key = `products/${productSlug}`
    if (!targetToSources.has(key)) targetToSources.set(key, [])
    targetToSources.get(key).push(sourceId)
  }
}

// Dedupe each target's source list
for (const [k, v] of targetToSources) {
  targetToSources.set(k, [...new Set(v)])
}

console.log(`Indexed ${sourcesByCiteKey.size} source pages across ${targetToSources.size} target pages.`)

// ---------- Step 2: render and write to each target page ----------

const stats = {
  generated: 0,
  regenerated: 0,
  skipped_no_target_page: 0,
  flagged_for_migration: 0,
  unchanged: 0,
}
const flaggedForMigration = []

for (const [targetKey, citeKeys] of targetToSources) {
  if (targetFilter && !targetKey.startsWith(targetFilter + "/")) continue
  const targetPath = path.join(wikiRoot, `${targetKey}.md`)
  if (!fs.existsSync(targetPath)) {
    stats.skipped_no_target_page++
    continue
  }
  // Skip index.md and stub-only pages
  if (targetKey.endsWith("/index")) continue

  const raw = fs.readFileSync(targetPath, "utf8")
  const sortedSources = [...citeKeys].sort((a, b) => {
    const sa = sourcesByCiteKey.get(a)
    const sb = sourcesByCiteKey.get(b)
    const ya = sa?.fm?.year ?? 0
    const yb = sb?.fm?.year ?? 0
    if (ya !== yb) return yb - ya  // newest first
    return a.localeCompare(b)
  })

  const newContent = upsertLegend(raw, sortedSources, targetPath, targetKey)
  if (newContent === null) {
    // upsertLegend returned null → page has hand-curated content needing migration
    continue
  }
  if (newContent === raw) {
    stats.unchanged++
    continue
  }

  if (!dryRun) {
    fs.writeFileSync(targetPath, newContent)
  }
  if (raw.includes(BEGIN_MARKER)) {
    stats.regenerated++
  } else {
    stats.generated++
  }
}

// ---------- Step 3: write lint file for migration candidates ----------

if (flaggedForMigration.length > 0) {
  fs.mkdirSync(path.dirname(lintPath), { recursive: true })
  const lintBody = renderMigrationLint(flaggedForMigration)
  if (!dryRun) {
    fs.writeFileSync(lintPath, lintBody)
  }
  stats.flagged_for_migration = flaggedForMigration.length
}

// ---------- Step 4: report ----------

console.log("")
console.log(`Source legend generation:`)
console.log(`  New legends (marker block did not exist): ${stats.generated}`)
console.log(`  Regenerated (marker block updated):       ${stats.regenerated}`)
console.log(`  Unchanged:                                 ${stats.unchanged}`)
console.log(`  Skipped (target page does not exist):     ${stats.skipped_no_target_page}`)
console.log(`  Flagged for manual migration:             ${stats.flagged_for_migration}`)
if (stats.flagged_for_migration > 0) {
  console.log(`  Migration lint:                            ${path.relative(repoRoot, lintPath)}`)
}
if (dryRun) console.log(`  (dry run — no files written)`)

// ---------- helpers ----------

function renderLegend(citeKeys, preservedContributions = new Map()) {
  if (citeKeys.length === 0) {
    return [
      BEGIN_MARKER,
      "## Sources",
      "",
      "_No sources currently route to this page. Sources will appear here as ingest fans them into this page via the routing audit (CLAUDE.md Part 5b)._",
      END_MARKER,
    ].join("\n")
  }

  const lines = [
    BEGIN_MARKER,
    "## Sources",
    "",
    // COMPONENTS §10 caption: emitted as a classed HTML paragraph (not markdown
    // emphasis) so the shared `.hmi-table-note` rule in v3-primitives.scss styles
    // it (11.5px / #a9a1a2). Raw HTML blocks render as-is in Quartz; the blank
    // line below separates it from the markdown table so the table still parses.
    `<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>`,
    "",
    "| # | Citation | Year | Type | Used on this page for |",
    "| --- | --- | ---: | --- | --- |",
  ]
  citeKeys.forEach((ck, i) => {
    const s = sourcesByCiteKey.get(ck)
    if (!s) return
    const usedFor = preservedContributions.get(ck) || "*[awaiting synthesis]*"
    lines.push(renderRow(i + 1, s, usedFor))
  })
  lines.push(END_MARKER)
  return lines.join("\n")
}

function renderRow(num, source, usedFor) {
  const fm = source.fm
  const ck = source.citeKey
  const title = (fm.title || "(untitled)").replace(/\|/g, "\\|")
  const pub = fm.publication ? `, ${String(fm.publication).replace(/\|/g, "\\|")}` : ""
  const year = fm.year || "—"
  const type = displayType(fm.source_type)
  const authorLabel = renderAuthorLabel(fm.authors, fm.year, ck)
  const cite = `[[sources/${ck}\\|${authorLabel}]]. *${title}*${pub}`
  return `| ${num} | ${cite} | ${year} | ${type} | ${usedFor} |`
}

// Parses any existing source-legend block (either marker-bounded or a
// plain `## Sources` section) and extracts the per-cite-key "Used on this
// page for" contribution text. Returns a Map of citeKey → contribution.
// Recognizes three legacy shapes:
//   1. A 5-column markdown table with "Used on this page for" header
//   2. A bullet list of `[[sources/<key>]]` (no contribution data to preserve)
//   3. Free-form prose (flagged separately)
function parseExistingContributions(rawSection) {
  const out = new Map()
  if (!rawSection) return out
  const lines = rawSection.split("\n")
  // Look for table rows after the header row.
  let inTable = false
  for (const line of lines) {
    if (/^\|\s*#\s*\|/.test(line) && /used on this page for/i.test(line)) {
      inTable = true
      continue
    }
    if (inTable && /^\|\s*-+/.test(line)) continue  // separator row
    if (inTable && !line.startsWith("|")) {
      inTable = false
      continue
    }
    if (inTable && line.startsWith("|")) {
      // Wikilinks use `\|` to escape pipes inside the link display label
      // (e.g. `[[sources/key\|Display]]`). A naive split on `|` would break
      // those in half, so we protect escaped pipes first.
      const safe = line.replace(/\\\|/g, "\x00")
      const cells = safe.split("|").map((c) => c.replace(/\x00/g, "\\|").trim()).filter(Boolean)
      // Expect: [#, Citation, Year, Type, Used on this page for]
      if (cells.length < 5) continue
      const citeCell = cells[1]
      const usedFor = cells[4]
      // Extract cite_key from `[[sources/<key>|...]]` or `[[sources/<key>]]`
      const m = citeCell.match(/\[\[sources\/([a-z0-9._-]+)(?:\\?\|[^\]]*)?\]\]/i)
      if (!m) continue
      const ck = m[1]
      if (usedFor && usedFor !== "*[awaiting synthesis]*" && usedFor !== "—") {
        out.set(ck, usedFor)
      }
    }
  }
  return out
}

// Detect if a `## Sources` section is just a bullet list of source
// wikilinks (no rich per-source data to preserve). Such sections are safe
// to overwrite without manual migration.
function isSimpleBulletList(content) {
  const trimmed = content.trim()
  if (!trimmed) return true
  const lines = trimmed.split("\n").filter((l) => l.trim())
  // Allow any leading paragraph (≤2 lines of intro) followed by bullets
  let bulletStart = 0
  while (bulletStart < lines.length && !lines[bulletStart].startsWith("-")) bulletStart++
  if (bulletStart > 2) return false
  const bullets = lines.slice(bulletStart)
  if (bullets.length === 0) return false
  return bullets.every((b) => /^- \[\[sources\/[a-z0-9._-]+/i.test(b.trim()))
}




// "U.S. Food and Drug Administration" → "FDA" (already in known map)
// "European Commission" → "European Commission"
// "Health Canada" → "Health Canada"
// Last-resort shortening for unknown orgs: keep the original name if short
// enough; otherwise return the first 3-4 words.

// Extracts a surname from a single author string. Handles three common forms:
//   - "Lastname F" or "Lastname FI" → first token (e.g. "Chung S" → "Chung")
//   - "Lastname, F." → before-comma (e.g. "Chung, S." → "Chung")
//   - "First M. Last" → last token (e.g. "Rachel C. Thoerig" → "Thoerig")
// Heuristic: if the last whitespace-separated token looks like initials
// (1-3 capital letters, optionally with periods), the first token is the
// surname; otherwise the last token is the surname.

function upsertLegend(raw, citeKeys, targetPath, targetKey) {
  // Case 1: marker block exists → parse existing contributions, regenerate
  if (raw.includes(BEGIN_MARKER) && raw.includes(END_MARKER)) {
    const re = new RegExp(`${escapeRe(BEGIN_MARKER)}([\\s\\S]*?)${escapeRe(END_MARKER)}`)
    const m = raw.match(re)
    const preserved = m ? parseExistingContributions(m[1]) : new Map()
    const rendered = renderLegend(citeKeys, preserved)
    // Function replacer, not a string: a string replacement would interpret
    // `$&`, `$1`, `$'`, etc. inside the rendered table. Preserved "Used on
    // this page for" cells routinely contain literal dollar amounts (e.g.
    // chiger2017's "$12–18 billion"), where `$1` would expand to capture
    // group 1 — the entire matched block — re-inserting every prior table on
    // each run. That was the source-legend non-idempotency bug.
    return raw.replace(re, () => rendered)
  }
  // Case 2: page has an existing `## Sources` heading with content
  const sourcesHeadingMatch = raw.match(/(^|\n)##\s+Sources\s*\n([\s\S]*?)(?=\n##\s+|\n\s*$)/i)
  if (sourcesHeadingMatch) {
    const existingContent = sourcesHeadingMatch[2].trim()
    const preserved = parseExistingContributions(existingContent)
    // Safe-to-overwrite cases:
    //  - empty / placeholder text
    //  - a 5-column table we successfully parsed (preserved values flow through)
    //  - a simple bullet list of source wikilinks
    const isPlaceholder =
      existingContent === "" ||
      /^_No sources/i.test(existingContent) ||
      /^No source pages/i.test(existingContent)
    const isStructuredTable = preserved.size > 0
    const isBulletList = isSimpleBulletList(existingContent)
    const rendered = renderLegend(citeKeys, preserved)
    // Function replacer for the same reason as Case 1 — keep `$`-bearing
    // citation/contribution text literal rather than letting String.replace
    // treat it as a backreference.
    return raw.replace(sourcesHeadingMatch[0], () => `\n${rendered}\n`)
  }
  // Case 3: no `## Sources` heading at all — append at end of page
  const rendered = renderLegend(citeKeys)
  return raw.trimEnd() + "\n\n" + rendered + "\n"
}

function renderMigrationLint(flagged) {
  const today = new Date().toISOString().slice(0, 10)
  const lines = [
    "---",
    `type: lint`,
    `op: lint`,
    `date: ${today}`,
    `scope: source-legend-migration`,
    `status: deferred`,
    `priority: low`,
    "---",
    "",
    `# Source legend migration follow-up — ${today}`,
    "",
    `The Tier 1 source-legend generator (\`tools/evidence/build-source-legend.mjs\`) skipped ${flagged.length} pages because they already carry hand-curated \`## Sources\` content that should not be clobbered by auto-generation. These pages need manual migration into the marker-bounded format used elsewhere.`,
    "",
    `## Workflow`,
    ``,
    `For each flagged page:`,
    ``,
    `1. Compare the existing hand-curated \`## Sources\` table with what the generator would produce (run \`node tools/evidence/build-source-legend.mjs --dry-run --only <kind>\` to preview).`,
    `2. Decide which "Used on this page for" descriptions in the hand-curated table to preserve — those are the higher-quality version of what Tier 2 will eventually generate.`,
    `3. Wrap the hand-curated table in \`<!-- BEGIN: hmi-source-legend -->\` and \`<!-- END: hmi-source-legend -->\` markers.`,
    `4. Re-run the generator — it will see the markers and respect the hand-curated content.`,
    ``,
    `## Flagged pages (${flagged.length})`,
    ``,
  ]
  for (const f of flagged) {
    lines.push(`- \`wiki/${f.targetKey}.md\` — existing content snippet: ${JSON.stringify(f.snippet.slice(0, 120))}...`)
  }
  return lines.join("\n")
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function capitalize(s) {
  if (!s) return ""
  return s[0].toUpperCase() + s.slice(1)
}

// Minimal RFC-4180-ish CSV parser. Handles double-quoted cells with
// embedded commas, quotes-as-double-quotes, and newlines inside quoted
// cells. Returns array of row objects keyed by the header row.
function parseCsv(text) {
  const rows = []
  let i = 0
  const n = text.length
  let cell = ""
  let row = []
  let inQuotes = false
  while (i < n) {
    const c = text[i]
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i += 2; continue }
      if (c === '"') { inQuotes = false; i++; continue }
      cell += c; i++; continue
    }
    if (c === '"') { inQuotes = true; i++; continue }
    if (c === ",") { row.push(cell); cell = ""; i++; continue }
    if (c === "\n") { row.push(cell); rows.push(row); row = []; cell = ""; i++; continue }
    if (c === "\r") { i++; continue }
    cell += c; i++
  }
  if (cell.length > 0 || row.length > 0) { row.push(cell); rows.push(row) }
  if (rows.length === 0) return []
  const header = rows.shift()
  return rows.map((r) => {
    const o = {}
    header.forEach((h, idx) => { o[h] = r[idx] ?? "" })
    return o
  })
}
