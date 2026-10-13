#!/usr/bin/env node
// Builds the public-facing coverage page (PRISMA-equivalent flow diagram +
// taxonomy coverage + corpus pipeline accounting). Auto-regenerated on every
// prebuild from on-disk data.
//
// Output: wiki/coverage.md
//
// Inputs:
//   - raw/manifest/triage-manifest.csv (corpus universe; 23,260+ papers)
//   - wiki/sources/*.md (ingested source pages)
//   - wiki/ingredients/*.md, wiki/products/*.md, wiki/metals/*.md, wiki/regulations/*.md
//   - data/evidence/taxonomy-coverage-audit.md (taxonomy v2.0 coverage)
//   - data/taxonomy/hmtc-v2.json (taxonomy source of truth)
//   - data/evidence/product_source_routing_audit.csv (routing layer)
//
// This page is the wiki's PRISMA equivalent. Brand legal, regulatory affairs,
// FDA reviewers, plaintiff's experts landing on this page should be able to see:
//   - How many papers were identified in the literature search (the universe)
//   - How many were triaged, by priority tier
//   - How many became source pages on the wiki
//   - How many wiki destination pages exist by type
//   - What percentage of the locked HMTc Taxonomy v2.0 has scaffolded coverage
//   - Where the gaps are
//
// Per CLAUDE.md Part 18, this page is part of the Cochrane-level defensibility
// surface. It is not certification content; it is methodology transparency.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const today = new Date().toISOString().slice(0, 10)

function countLines(filePath) {
  if (!fs.existsSync(filePath)) return 0
  return fs.readFileSync(filePath, "utf8").split("\n").filter(l => l.trim().length > 0).length
}

function readManifest() {
  const p = path.join(repoRoot, "raw/manifest/triage-manifest.csv")
  if (!fs.existsSync(p)) return { total: 0, by_tier: {}, sample_row: null }
  const text = fs.readFileSync(p, "utf8")
  const lines = text.split("\n").filter(l => l.length > 0)
  const headers = lines[0].split(",")
  const tierIdx = headers.indexOf("priority_tier") >= 0 ? headers.indexOf("priority_tier") : headers.indexOf("triage_tier")
  const ingestedIdx = headers.indexOf("already_ingested")
  const yearIdx = headers.indexOf("year")
  const total = lines.length - 1
  const by_tier = {}
  let already_ingested_in_manifest = 0
  let year_2020plus = 0
  for (let i = 1; i < lines.length; i++) {
    // Coarse CSV parse — sufficient for the columns we need
    let cur = "", inQ = false, fields = []
    for (let j = 0; j < lines[i].length; j++) {
      const ch = lines[i][j]
      if (ch === '"' && lines[i][j+1] === '"') { cur += '"'; j++ }
      else if (ch === '"') inQ = !inQ
      else if (ch === "," && !inQ) { fields.push(cur); cur = "" }
      else cur += ch
    }
    fields.push(cur)
    const tier = tierIdx >= 0 ? (fields[tierIdx] || "unknown") : "unknown"
    by_tier[tier] = (by_tier[tier] || 0) + 1
    if (ingestedIdx >= 0 && /true|1|yes/i.test(fields[ingestedIdx] || "")) already_ingested_in_manifest++
    const yr = yearIdx >= 0 ? Number(fields[yearIdx]) : NaN
    if (yr >= 2020) year_2020plus++
  }
  return { total, by_tier, already_ingested_in_manifest, year_2020plus }
}

function countSourcePages() {
  const dir = path.join(repoRoot, "wiki/sources")
  if (!fs.existsSync(dir)) return { total: 0, by_tier: {}, by_type: {} }
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".md") && !f.startsWith("_"))
  const by_tier = {}
  const by_type = {}
  for (const f of files) {
    const fm = readFrontmatter(path.join(dir, f))
    const t = (fm.evidence_tier || "unknown").trim()
    by_tier[t] = (by_tier[t] || 0) + 1
    const st = (fm.source_type || "unknown").trim()
    by_type[st] = (by_type[st] || 0) + 1
  }
  return { total: files.length, by_tier, by_type }
}

function readFrontmatter(filePath) {
  const text = fs.readFileSync(filePath, "utf8")
  const m = text.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return {}
  const out = {}
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/)
    if (!kv) continue
    out[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, "")
  }
  return out
}

function countDir(dirName, filter = () => true) {
  const dir = path.join(repoRoot, "wiki", dirName)
  if (!fs.existsSync(dir)) return 0
  return fs.readdirSync(dir).filter(f => f.endsWith(".md") && f !== "index.md" && filter(f)).length
}

function countNonStubProducts() {
  const dir = path.join(repoRoot, "wiki/products")
  if (!fs.existsSync(dir)) return 0
  let n = 0
  for (const f of fs.readdirSync(dir).filter(f => f.endsWith(".md") && f !== "index.md")) {
    const fm = readFrontmatter(path.join(dir, f))
    const status = fm.products_status || ""
    // Non-stub: products_status is empty (legacy non-stub) or something other than "scaffold"
    if (status !== "scaffold") n++
  }
  return n
}

function routingAuditRows() {
  const p = path.join(repoRoot, "data/evidence/product_source_routing_audit.csv")
  if (!fs.existsSync(p)) return 0
  return Math.max(0, fs.readFileSync(p, "utf8").split("\n").filter(l => l.length > 0).length - 1)
}

function taxonomyCoverage() {
  const p = path.join(repoRoot, "data/taxonomy/hmtc-v2.json")
  if (!fs.existsSync(p)) return null
  const tax = JSON.parse(fs.readFileSync(p, "utf8"))
  const auditP = path.join(repoRoot, "data/evidence/taxonomy-coverage-audit.csv")
  if (!fs.existsSync(auditP)) return { tax }
  const text = fs.readFileSync(auditP, "utf8")
  const lines = text.split("\n").filter(l => l.length > 0)
  const headers = lines[0].split(",")
  const modeIdx = headers.indexOf("match_mode")
  const catIdx = headers.indexOf("category")
  let exact = 0, by_slug = 0, by_alias = 0, missing = 0
  const perCat = {}
  for (let i = 1; i < lines.length; i++) {
    let cur = "", inQ = false, fields = []
    for (let j = 0; j < lines[i].length; j++) {
      const ch = lines[i][j]
      if (ch === '"' && lines[i][j+1] === '"') { cur += '"'; j++ }
      else if (ch === '"') inQ = !inQ
      else if (ch === "," && !inQ) { fields.push(cur); cur = "" }
      else cur += ch
    }
    fields.push(cur)
    const mode = fields[modeIdx]
    const cat = Number(fields[catIdx])
    perCat[cat] = perCat[cat] || { exact: 0, by_slug: 0, by_alias: 0, missing: 0, total: 0 }
    perCat[cat].total++
    if (mode === "exact") { exact++; perCat[cat].exact++ }
    else if (mode === "by_slug") { by_slug++; perCat[cat].by_slug++ }
    else if (mode === "by_alias") { by_alias++; perCat[cat].by_alias++ }
    else if (mode === "missing") { missing++; perCat[cat].missing++ }
  }
  return { tax, total: lines.length - 1, exact, by_slug, by_alias, missing, perCat }
}

function main() {
  const manifest = readManifest()
  const sources = countSourcePages()
  const ingredients = countDir("ingredients")
  const products_total = countDir("products")
  const products_nonstub = countNonStubProducts()
  const metals = countDir("metals")
  const regulations = countDir("regulations")
  const microbiome = countDir("microbiome")
  const mitigation = countDir("mitigation")
  const testing = countDir("testing")
  const sourcesPath = path.join(repoRoot, "wiki/sources")
  const routing_rows = routingAuditRows()
  const tax = taxonomyCoverage()

  // Build output markdown
  const out = []
  out.push("---")
  out.push("title: Corpus coverage and methodology transparency")
  out.push("description: The wiki's PRISMA-equivalent — papers identified, screened, ingested, and the taxonomy-row coverage report. Auto-regenerated from on-disk data.")
  out.push("audience: [regulator, educator, researcher, brand-legal, brand-qa, journalist]")
  out.push(`updated: ${today}`)
  out.push("noindex: false")
  out.push("---")
  out.push("")
  out.push("# Corpus coverage and methodology transparency")
  out.push("")
  out.push("This page is the wiki's PRISMA-equivalent: a single, auto-regenerated transparency surface showing how many papers were identified in the literature search, how many became source pages, how the HMTc Taxonomy v2.0 universe is covered, and where the gaps are. Brand legal teams, regulatory affairs leads, FDA reviewers, and plaintiff/defense experts auditing the wiki's defensibility should land here.")
  out.push("")
  out.push("The wiki is built against the locked HMTc Comprehensive Testing Category Taxonomy v2.0 (2026-03-30). Every product page, every routing decision, and every coverage count is reconciled to that taxonomy. The taxonomy itself is the locked category list this coverage report is counted against.")
  out.push("")
  out.push(`This page was regenerated on **${today}** from the current state of the corpus.`)
  out.push("")
  out.push("The Cochrane-equivalent search-protocol publication — the 10 academic databases queried, the dedupe protocol, the scoring rubric for auto-fetch, and the inclusion / exclusion criteria — is published at [[methodology/search-strategy]]. Read it alongside this page for the complete defensibility picture.")
  out.push("")
  out.push("## Literature search flow (PRISMA-equivalent)")
  out.push("")
  out.push("```")
  out.push(`  Identification: ${manifest.total.toLocaleString()} papers triaged from the literature search`)
  out.push(`         │`)
  if (Object.keys(manifest.by_tier).length > 0) {
    out.push(`         │  Triage tiers (priority bands):`)
    for (const tier of Object.keys(manifest.by_tier).sort()) {
      out.push(`         │    ${tier}: ${manifest.by_tier[tier].toLocaleString()}`)
    }
  }
  out.push(`         ▼`)
  out.push(`  Screening:      Papers triaged for ingest priority`)
  out.push(`         │`)
  out.push(`         │  Papers from year ≥ 2020: ${(manifest.year_2020plus || 0).toLocaleString()}`)
  out.push(`         ▼`)
  out.push(`  Eligibility:    ${sources.total} source pages currently in wiki/sources/`)
  out.push(`         │`)
  for (const tier of Object.keys(sources.by_tier).sort()) {
    out.push(`         │    evidence_tier ${tier}: ${sources.by_tier[tier]}`)
  }
  out.push(`         ▼`)
  out.push(`  Included:       Source pages routed to destination pages`)
  out.push(`         │`)
  out.push(`         │  Routing rows in product_source_routing_audit.csv: ${routing_rows}`)
  out.push(`         ▼`)
  out.push(`  Synthesized:    Ingredient cells, product rows, metal pages, regulation pages`)
  out.push("```")
  out.push("")
  out.push(`**Of the ${manifest.total.toLocaleString()} papers identified in the literature search, ${sources.total} have been promoted to source pages — ${(sources.total/manifest.total*100).toFixed(1)}% of the universe.** The remaining papers are tiered by priority (P1 HMT&C Path A candidates, P2 LOQ source candidates, P3 agency-affiliated, P4 high-evidence peer-reviewed 2020+, P5 everything else); ingest is in priority order per CLAUDE.md Part 11.`)
  out.push("")
  out.push("This is a deliberately small fraction: depth over breadth. The defensibility argument is not 'we ingested 23,000 papers,' it is 'every wiki claim traces to a peer-reviewed source page whose values match the source PDF on audit.' The ingest pipeline is sized to maintain that property.")
  out.push("")
  out.push("## Wiki page counts by type")
  out.push("")
  out.push("| Page type | Count |")
  out.push("|---|---:|")
  out.push(`| Source pages | ${sources.total} |`)
  out.push(`| Ingredient profiles | ${ingredients} |`)
  out.push(`| Product-category rows (total) | ${products_total} |`)
  out.push(`| Product-category rows (non-stub, has scaffold or content) | ${products_nonstub} |`)
  out.push(`| Metal profiles | ${metals} |`)
  out.push(`| Regulation pages | ${regulations} |`)
  out.push(`| Mitigation pages | ${mitigation} |`)
  out.push(`| Microbiome pages | ${microbiome} |`)
  out.push(`| Testing-method pages | ${testing} |`)
  out.push("")
  out.push("## HMTc Taxonomy v2.0 coverage")
  out.push("")
  if (tax) {
    out.push(`Total subcategories defined by the taxonomy: **${tax.total}**.  Pages scaffolded or content-filled against the taxonomy: **${tax.exact + tax.by_alias}** (${Math.round((tax.exact + tax.by_alias)/tax.total*100)}%).`)
    out.push("")
    out.push(`Of the ${tax.exact + tax.by_alias} matched: ${tax.exact} carry exact hmtc_category + hmtc_row frontmatter (locked under Step 0 scaffolding); ${tax.by_alias} are matched by slug-alias to legacy pages (frontmatter needs backfill).  Pages still to be created: **${tax.missing}**.`)
    out.push("")
    out.push("| Cat | Name | Total | Exact | By alias | Missing | Coverage |")
    out.push("|----:|------|------:|------:|---------:|--------:|---------:|")
    for (const cat of tax.tax.categories) {
      const c = tax.perCat[cat.n] || { exact: 0, by_alias: 0, missing: 0, total: 0 }
      const cov = c.exact + c.by_alias
      out.push(`| ${cat.n} | ${cat.name.replace(/\|/g, "\\|")} | ${c.total} | ${c.exact} | ${c.by_alias} | ${c.missing} | ${c.total ? Math.round(cov/c.total*100) : 0}% |`)
    }
    out.push("")
    if (tax.missing === 0) {
      out.push("Every taxonomy subcategory has a destination page on the wiki. Source-page declarations of `products: [<row-slug>]` route to the page they expect to land on; no source is dropped due to a missing destination.")
    } else {
      out.push(`Of the **${tax.missing} taxonomy subcategories** without a destination page, ingest is blocked: a source whose frontmatter declares one of these slugs cannot be routed. These pages are the priority queue for the next scaffold pass.`)
    }
    out.push("")
  }
  out.push("## Why this page matters")
  out.push("")
  out.push("Cochrane systematic reviews open with a PRISMA flow diagram because the defensibility of every downstream claim depends on the reader understanding what was searched, what was screened, what was included, and on what grounds. The wiki's defensibility argument (CLAUDE.md Part 1) rests on the same property: any hostile reader — a plaintiff's expert, a regulatory reviewer, a competing standards body — must be able to see the universe the wiki is accountable to, not just the slice it has published.")
  out.push("")
  out.push("Naming the gap is the work. The gap is not the failure mode; the failure mode is the gap being invisible.")
  out.push("")
  out.push("## Related methodology pages")
  out.push("")
  out.push("- [[methodology]] — full methodology page (source selection, evidence tiers, extraction protocol, HMT&C firewall)")
  out.push("- [[editorial-standards]] — editorial conventions, writing style, audience layering")
  out.push("- [[overview]] — high-level orientation for newcomers")
  out.push("- [[synthesis]] — current best synthesis of the corpus across metals and matrices")
  out.push("")
  out.push("## Provenance and reproducibility")
  out.push("")
  out.push(`This page is auto-regenerated by \`tools/build-coverage-page.mjs\` from on-disk data. Inputs:`)
  out.push("")
  out.push("- `raw/manifest/triage-manifest.csv` — the triage universe (immutable record of the literature search)")
  out.push("- `wiki/sources/*.md` — promoted source pages (frontmatter: evidence_tier, source_type)")
  out.push("- `wiki/ingredients/`, `wiki/products/`, `wiki/metals/`, `wiki/regulations/`, `wiki/mitigation/`, `wiki/microbiome/`, `wiki/testing/`")
  out.push("- `data/taxonomy/hmtc-v2.json` — locked HMTc Comprehensive Testing Category Taxonomy v2.0")
  out.push("- `data/evidence/taxonomy-coverage-audit.csv` — output of `tools/taxonomy/audit-coverage.mjs`")
  out.push("- `data/evidence/product_source_routing_audit.csv` — output of `tools/evidence/build-routing-audit.mjs`")
  out.push("")
  out.push("No hand-maintained tallies. Every count derives from on-disk frontmatter or structured-evidence files. If a count looks wrong, the underlying data is what changed, not this page's narrative.")
  out.push("")

  const outPath = path.join(repoRoot, "wiki/coverage.md")
  fs.writeFileSync(outPath, out.join("\n"))
  console.log(`Wrote ${outPath}`)
  console.log(`  manifest universe: ${manifest.total}`)
  console.log(`  source pages: ${sources.total}`)
  console.log(`  product rows total: ${products_total} (non-stub: ${products_nonstub})`)
  console.log(`  ingredient profiles: ${ingredients}`)
  console.log(`  taxonomy coverage: ${tax ? Math.round((tax.exact + tax.by_alias)/tax.total*100) + "%" : "unknown"}`)
}

main()
