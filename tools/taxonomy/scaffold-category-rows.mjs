#!/usr/bin/env node
// Scaffold product-category pages for HMTc Taxonomy v2.0 rows that are
// missing from wiki/products/.
//
// Reads:
//   data/taxonomy/hmtc-v2.json (source of truth)
//   data/evidence/taxonomy-coverage-audit.csv (run audit-coverage.mjs first)
//
// For every row in the audit with match_mode=missing, creates a scaffolded
// product page at wiki/products/<expected_slug>.md with:
//   - Proper hmtc_category, hmtc_row, hmtc_taxonomy_version frontmatter
//   - exposure_pathway and regulatory_jurisdictions from the category
//   - The 10 mandatory H2 sections required by CLAUDE.md Part 6
//   - products_status: scaffold (signals "no contributing sources yet")
//   - splits_locked: false (signals "may need within-row clean/contaminated
//     split based on evidence; not yet locked")
//
// Idempotent: skips pages that already exist regardless of frontmatter state.
//
// Usage:
//   node tools/taxonomy/scaffold-category-rows.mjs              # all missing
//   node tools/taxonomy/scaffold-category-rows.mjs --cat 12     # one category
//   node tools/taxonomy/scaffold-category-rows.mjs --dry-run    # report only

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const taxonomyPath = path.join(repoRoot, "data/taxonomy/hmtc-v2.json")
const auditCsv = path.join(repoRoot, "data/evidence/taxonomy-coverage-audit.csv")
const productsDir = path.join(repoRoot, "wiki/products")
const today = new Date().toISOString().slice(0, 10)

const args = process.argv.slice(2)
const isDry = args.includes("--dry-run")
const catArgIdx = args.indexOf("--cat")
const onlyCat = catArgIdx >= 0 ? Number(args[catArgIdx + 1]) : null

function loadTaxonomy() { return JSON.parse(fs.readFileSync(taxonomyPath, "utf8")) }

function loadAudit() {
  const text = fs.readFileSync(auditCsv, "utf8").trim()
  const lines = text.split("\n")
  const headers = lines[0].split(",")
  const rows = []
  for (let i = 1; i < lines.length; i++) {
    // simple CSV parser handling quoted fields
    const fields = []
    let cur = ""
    let inQuotes = false
    for (let j = 0; j < lines[i].length; j++) {
      const ch = lines[i][j]
      if (ch === '"' && lines[i][j+1] === '"') { cur += '"'; j++ }
      else if (ch === '"') inQuotes = !inQuotes
      else if (ch === "," && !inQuotes) { fields.push(cur); cur = "" }
      else cur += ch
    }
    fields.push(cur)
    const r = {}
    headers.forEach((h, k) => r[h] = fields[k] || "")
    rows.push(r)
  }
  return rows
}

const STAKEHOLDER_BLOCK_TEMPLATE = `<dl class="hmi-stakeholder-guide">
  <div>
    <dt>Brand legal teams</dt>
    <dd>What the peer-reviewed and regulatory literature reports for heavy-metal occurrence in <ROWNAME>, with applicable regulatory caps and source-traceable findings. Use this page to evaluate certification or class-action exposure on a literature-anchored basis.</dd>
  </div>
  <div>
    <dt>Brand regulatory affairs / QA</dt>
    <dd>The current evidence base for <ROWNAME>, the levers most-effective at reducing heavy-metal load, and the applicable regulatory limits with jurisdiction and basis.</dd>
  </div>
  <div>
    <dt>Retailers and category buyers</dt>
    <dd>The row-level assortment risk profile and where the literature distinguishes higher-risk from lower-risk product configurations within this row.</dd>
  </div>
  <div>
    <dt>HMT&amp;C staff (internal)</dt>
    <dd>HMT&amp;C certification thresholds for products in this row are developed under the certification program at <a href="https://heavymetalcertified.com">heavymetalcertified.com</a>, not on this public page. The Index and HMT&amp;C operate on the same evidence base but apply different publication rules; see the <a href="/methodology">methodology</a> for the separation.</dd>
  </div>
</dl>`

function buildPage(cat, sub) {
  const fm = [
    "---",
    `title: ${JSON.stringify(sub.name)}`,
    `type: product-category`,
    `hmtc_category: ${cat.n}`,
    `hmtc_category_name: ${JSON.stringify(cat.name)}`,
    `hmtc_row: ${sub.row}`,
    `hmtc_subcategory_name: ${JSON.stringify(sub.name)}`,
    `hmtc_taxonomy_version: "2.0"`,
    `hmtc_taxonomy_version_date: "2026-03-30"`,
    `exposure_pathway: ${JSON.stringify(cat.exposure_pathway)}`,
    `regulatory_jurisdiction: ${JSON.stringify(cat.regulatory_jurisdiction)}`,
    `panel_metals: [Pb, iAs, Hg, Cd, Cr, Ni, Sn, Al]`,
    `audience: [regulator, educator, brand-legal, brand-qa, retailer-compliance]`,
    `products_status: scaffold`,
    `splits_locked: false`,
    `sources: 0`,
    `updated: ${today}`,
    `---`,
  ].join("\n")

  const body = `
# ${sub.name}

This page is a scaffolded entry for HMTc Taxonomy v2.0 Category ${cat.n} (${cat.name}), Row ${sub.row}: **${sub.name}**. Evidence ingest into this row is in progress. Sections below are populated as sources are added to the corpus; where a section is empty, the row has not yet accumulated contributing sources of the required kind.

## Who this page is for

${STAKEHOLDER_BLOCK_TEMPLATE.replace(/<ROWNAME>/g, sub.name)}

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in ${sub.name.toLowerCase()}. Speciation is non-substitutable (iAs vs tAs, MeHg vs tHg, Cr-VI vs total Cr). Basis is preserved (finished-product as sold unless the source specifies otherwise; see each row for the basis label). Non-detect handling follows each source's reporting convention. Pooling is avoided across LOD/LOQ, period, geography, and analytical-basis differences. HMT&C certification thresholds for products in this row are developed under the certification program at heavymetalcertified.com, not on this page; this public page reports literature evidence only.

The applicable regulatory jurisdictions for this row are: **${cat.regulatory_jurisdiction}**.

## Literature Evidence Summary

<!-- BEGIN: hmi-hmtc-evidence-summary -->
*Pending ingest. The routing layer will surface direct-row-fit sources here as they are added to the corpus with \`products: [${sub.slug}]\` in source-page frontmatter.*
<!-- END: hmi-hmtc-evidence-summary -->

## Source Evidence Inventory

*Pending ingest. The routing layer populates this section from the source-page set declaring \`products: [${sub.slug}]\`.*

## Broad Product Context: Author-Scope Index

<!-- BEGIN: hmi-broad-context-sources -->
*Pending ingest. The routing layer surfaces sources whose author-stated scope is broader than this row (route_kind: broad_product_context) as they are added.*
<!-- END: hmi-broad-context-sources -->

## Federal/Regulatory Limits vs Field Findings

<!-- BEGIN: hmi-product-crosswalk -->
*Pending ingest. The applicable regulatory jurisdictions for this row are recorded in the page frontmatter; the crosswalk table is generated by tools/apply-product-crosswalk-sections.mjs once regulation pages and field-evidence sources are routed to this row with structured limit values.*
<!-- END: hmi-product-crosswalk -->

## Levers to reduce contamination

Practical interventions to reduce heavy-metal load in this row, ordered by impact magnitude. Each lever names the magnitude of the effect with a cited source; cross-links to dedicated [[mitigation/]] pages where they exist.

- **Sourcing levers** — *Pending ingest.*
- **Agronomic levers** — *Pending ingest.* (See [[mitigation/agronomic]] for general agronomic mitigation context.)
- **Processing levers** — *Pending ingest.* (See [[mitigation/processing]].)
- **Formulation levers** — *Pending ingest.* (See [[mitigation/formulation]].)
- **Testing and QC levers** — *Pending ingest.* (See [[mitigation/testing-and-qc]] when published.)
- **Packaging and storage levers** — *Pending ingest.* (See [[mitigation/packaging-and-storage]] when published.)

## How standards math uses this page

HMT&C certification thresholds for this row are developed under the certification program at heavymetalcertified.com, not on this page. The row-standard for this row is an aggregate computed from the contributing source pool in the row's native finished-product basis; it is not a per-source decoration of any single value cited on this page. This public page reports literature evidence only.

## Historical recalls and enforcement

*Pending ingest. Regulatory events (recalls, enforcement actions, import alerts) relevant to this row will be added as agency records are ingested into the corpus.*

## Sources

*Pending ingest. The Source Legend below is auto-generated by \`tools/evidence/build-source-legend.mjs\` once source pages declaring \`products: [${sub.slug}]\` are added.*

<!-- BEGIN: hmi-source-legend -->
<!-- END: hmi-source-legend -->
`
  return fm + body
}

function main() {
  const tax = loadTaxonomy()
  const catByN = new Map(tax.categories.map(c => [c.n, c]))
  const audit = loadAudit()

  const missing = audit.filter(r => r.match_mode === "missing")
  const filtered = onlyCat ? missing.filter(r => Number(r.category) === onlyCat) : missing

  const perCat = {}
  let created = 0, skipped = 0
  for (const r of filtered) {
    const cat = catByN.get(Number(r.category))
    if (!cat) { console.warn(`unknown category ${r.category}`); continue }
    const sub = cat.subcategories.find(s => s.row === Number(r.row))
    if (!sub) { console.warn(`unknown row ${r.category}:${r.row}`); continue }
    const target = path.join(productsDir, `${sub.slug}.md`)
    perCat[cat.n] = perCat[cat.n] || { name: cat.name, created: 0, skipped: 0 }
    if (fs.existsSync(target)) {
      perCat[cat.n].skipped++
      skipped++
      continue
    }
    const content = buildPage(cat, sub)
    if (!isDry) {
      fs.writeFileSync(target, content)
    }
    perCat[cat.n].created++
    created++
  }

  console.log(`Taxonomy v${tax.version} scaffold run (${isDry ? "DRY-RUN" : "WRITE"}):`)
  console.log(`  created: ${created}  skipped: ${skipped}  filter: ${onlyCat ? `cat ${onlyCat}` : "all"}`)
  for (const n of Object.keys(perCat).sort((a,b) => Number(a)-Number(b))) {
    const c = perCat[n]
    console.log(`  Cat ${n} ${c.name}: created ${c.created}, skipped ${c.skipped}`)
  }
}

main()
