#!/usr/bin/env node
// Scaffold a new product-category page that passes content-quality lint
// from the moment of creation. Use this for every new product row going
// forward — do not hand-write a page from scratch, do not copy from an
// older page (which may carry legacy convention violations).
//
// Conventions baked in (CLAUDE.md Part 6, OPERATING.md Part 6):
//   - 10 mandatory H2 sections in canonical order
//   - Marker-bounded regions for generator content (Lit Evidence Summary,
//     Federal/Regulatory crosswalk, Broad context index, Sources legend)
//   - Stakeholder-named entry points in the "Who this page is for" section
//   - Methodology section with the canonical speciation/basis/non-detect
//     rules so downstream sections anchor to it
//   - Audience tags on every H2 per CLAUDE.md Part 7
//   - No internal codenames ("Cat N row N", "Step 0", "Evidence Fitness
//     pilot", "Path A", percentile decoration, repo paths)
//   - Frontmatter carries every required field plus optional fields where
//     known
//
// Usage:
//   node tools/scaffold-product-page.mjs \
//     --slug teething-and-snacks-non-rice \
//     --title "Teething & Snacks (Non-Rice)" \
//     --category-label "Infant and Child Foods" \
//     --age-range "0-5" \
//     --vulnerable-population infants-6-60mo \
//     --primary-metals "iAs,Cd,Pb" \
//     --partner-slug teething-and-snacks-rice-based \
//     --partner-role contamination_platform
//
// If the page already exists, the tool refuses to overwrite. Use it for
// new pages only; for cleanup of existing pages, run
// tools/fix-product-content-quality.mjs.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const productsDir = path.join(repoRoot, "wiki/products")

const args = parseArgs(process.argv.slice(2))
required(args, ["slug", "title", "category-label"])

const slug = args["slug"]
const title = args["title"]
const categoryLabel = args["category-label"]
const ageRange = args["age-range"] || ""
const vulnerablePopulation = args["vulnerable-population"] || ""
const primaryMetals = (args["primary-metals"] || "").split(",").map((s) => s.trim()).filter(Boolean)
const partnerSlug = args["partner-slug"] || ""
const partnerRole = args["partner-role"] || ""  // "clean_benchmark" | "contamination_platform"
const ingredientTargets = (args["ingredient-targets"] || "").split(",").map((s) => s.trim()).filter(Boolean)
const today = new Date().toISOString().slice(0, 10)

const targetPath = path.join(productsDir, `${slug}.md`)
if (fs.existsSync(targetPath)) {
  console.error(`Refusing to overwrite existing page: ${targetPath}`)
  console.error(`Use tools/fix-product-content-quality.mjs for cleanup of existing pages.`)
  process.exit(1)
}

const content = renderScaffold({
  slug, title, categoryLabel, ageRange, vulnerablePopulation, primaryMetals,
  partnerSlug, partnerRole, ingredientTargets, today,
})

fs.writeFileSync(targetPath, content, "utf8")
console.log(`Scaffolded ${targetPath} (${content.length} bytes).`)
console.log(`Next: route sources to this slug via source-page frontmatter, then run npm run prebuild.`)

// ----- Render -----

function renderScaffold(o) {
  const fm = renderFrontmatter(o)
  const body = renderBody(o)
  return `${fm}\n${body}`
}

function renderFrontmatter(o) {
  const lines = ["---"]
  lines.push(`title: ${escapeYaml(o.title)}`)
  lines.push(`type: product-category`)
  lines.push(`category: ${o.slug}`)
  lines.push(`category_label: ${escapeYaml(o.categoryLabel)}`)
  if (o.ageRange) lines.push(`age_range: ${escapeYaml(o.ageRange)}`)
  lines.push(`label: ${escapeYaml(o.title)}`)
  if (o.ingredientTargets.length > 0) {
    lines.push(`ingredient_targets: [${o.ingredientTargets.join(", ")}]`)
  }
  if (o.primaryMetals.length > 0) {
    lines.push(`primary_metals_of_concern: [${o.primaryMetals.join(", ")}]`)
  }
  if (o.vulnerablePopulation) lines.push(`vulnerable_population: ${o.vulnerablePopulation}`)
  lines.push(`applicable_regulations: []`)
  if (o.partnerSlug && o.partnerRole) {
    const myRole = o.partnerRole === "contamination_platform" ? "clean_benchmark" : "contamination_platform"
    lines.push(`cc_relationship:`)
    lines.push(`  role: ${myRole}`)
    lines.push(`  scope: within_row`)
    lines.push(`  partners:`)
    lines.push(`    - slug: ${o.partnerSlug}`)
    lines.push(`      partner_type: row`)
    lines.push(`      role_of_partner: ${o.partnerRole}`)
    if (o.primaryMetals.length > 0) lines.push(`      metals: [${o.primaryMetals.join(", ")}]`)
  }
  lines.push(`audience: [regulator, educator, consumer, app]`)
  lines.push(`review_state: published`)
  lines.push(`updated: ${o.today}`)
  lines.push(`sources: 0`)
  lines.push("---")
  return lines.join("\n")
}

function escapeYaml(v) {
  if (/[:#\[\]&*!|>'"%@`{},?]/.test(v) || v.includes(" - ")) return `"${v.replace(/"/g, '\\"')}"`
  return `"${v}"`  // always quote for safety
}

function renderBody(o) {
  const stakeholderHTML = renderStakeholderGuide(o)
  const partnerLine = o.partnerSlug
    ? `\nThis row is part of a clean / contaminated pair with [[products/${o.partnerSlug}]]. The pairing exists because the cited literature shows a systematic difference between the two on at least one panel metal. See the partner row for the counterpart evidence.\n`
    : ""

  return `# ${o.title}

This page reports what the cited peer-reviewed and government literature has measured for heavy-metal concentrations in ${o.title.toLowerCase()}. It is the literature-evidence layer that informs, but does not set, HMT&C certification criteria. The wiki and the certification program are kept architecturally separate; this page does not publish or justify certification thresholds.
${partnerLine}
## Who this page is for

${stakeholderHTML}

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in ${o.title.toLowerCase()}. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

**Speciation is treated as non-substitutable.** Inorganic arsenic (iAs) and total arsenic (tAs) are reported separately; the toxicology and regulatory ceilings differ. Methylmercury (MeHg) and total mercury (tHg) are reported separately. Total chromium (Cr) is not interpreted as hexavalent chromium (Cr-VI) unless the source explicitly speciates Cr-VI.

**Basis is preserved and labeled, never silently converted.** Each table below labels the source basis explicitly (as-sold, as-consumed, prepared-for-feeding, dry weight, wet weight). Where a basis conversion is needed for context, the conversion factor and assumptions are stated alongside the converted value, and the converted value is marked as indicative rather than direct.

**Non-detect handling.** Where a source reports a value below its limit of detection (LOD) or limit of quantification (LOQ), this page preserves the source's reported handling convention.

**Source pooling is avoided.** Aggregate statistics are not computed by pooling sample values across sources whose LOQs, sampling periods, geographies, and analytical bases differ. When the page reports source-level summary statistics, those summaries are the source's own, not a re-aggregation across the cited literature.

**Row-fit and matrix-axis labeling.** Sources are classified by how cleanly their reported scope matches this product row. Matrix-axis and format-axis labels are tracked independently. Row-fit determines whether a source contributes direct evidence or supporting context.

**Evidence tiers.** A-tier: peer-reviewed primary studies and government reports. B-tier: NGO reports and trade publications. C-tier: news and press. Synthesis on this page leans on A-tier.

**Confidence rating.** Low: 1 to 2 sources. Medium: 3 to 10 sources. High: more than 10 sources. Confidence reflects volume and agreement of evidence, not regulatory pass/fail status.

**Standards-program math sits elsewhere.** Percentile selection, clean/dirty subcategory designation, regulatory-ceiling adjudication, and final certification threshold decisions are tracked in the staff Standards Workbench and are not published on this page. The values on this page are literature evidence, not certification thresholds.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

_Pending: regenerated by \`tools/evidence/apply-product-hmtc-evidence-summaries.mjs\` once structured occurrence values for this row are extracted into the relevant \`category*_*_summary.csv\` files._
<!-- END: hmi-hmtc-evidence-summary -->

## Source Evidence Inventory

<!-- audience: regulator, educator, consumer, app -->

_Pending synthesis. Per-source occurrence rows will be added here as sources are routed to this product page and their structured values are extracted. Each row reports a source's own statistics (mean, median, range, percentile if the source published one) without re-aggregation across sources._

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context: Author-Scope Index

<!-- audience: regulator, educator, app -->

_Pending: regenerated by \`tools/evidence/apply-product-broad-context-sections.mjs\` once routed sources accumulate. Source matrix-axis and format-axis labels are derived from each source's author-stated scope._
<!-- END: hmi-broad-context-sources -->

<!-- BEGIN: hmi-product-crosswalk -->
## Federal/Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

_Pending: regenerated by \`tools/apply-product-crosswalk-sections.mjs\` once \`applicable_regulations\` are populated in the frontmatter and field-evidence rows are extracted._
<!-- END: hmi-product-crosswalk -->

## Levers to reduce contamination

<!-- audience: regulator, educator, consumer, app -->

_Pending synthesis. Practical interventions to reduce heavy-metal load — ordered by impact magnitude across sourcing, agronomic, processing, formulation, testing-QC, and packaging-storage levers — will be populated from contributing ingredient pages' Mitigation options sections and the relevant mitigation pages. The Levers section is the brand-legal-actionable surface of this page; load-bearing per the page convention._

## How standards math uses this page

<!-- audience: regulator, educator -->

This page documents what the cited sources report. The row-standard percentile in the Heavy Metal Tested and Certified (HMT&C) staff workbench is derived from the aggregate across all contributing sources after basis adjustment and row-fit review; it is not a decoration on any individual source row, and it is not published on this public page.

Citing this page at a single source's maximum value as if it were a threshold justification misreads the evidence architecture: the maximum observed in one study is not the same as the p90 or p95 of the fitted distribution across the full source pool. Percentile selection, clean/dirty subcategory designation, and final HMT&C certification threshold decisions are tracked in the staff Standards Workbench, rebuilt from the routing audit when new sources are added.

## Historical recalls and enforcement

<!-- audience: regulator, educator -->

_Pending synthesis. Public-record regulatory events for this product category will be summarized here as the synthesis pass identifies them. Per CLAUDE.md Part 12, recalls are framed as regulatory events, not brand rankings._

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as \`*[awaiting synthesis]*\`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |

<!-- END: hmi-source-legend -->
`
}

function renderStakeholderGuide(o) {
  return `<div class="hmi-stakeholder-guide">
  <div class="hmi-stakeholder-guide-label">Who this page is for</div>
  <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
  <dl>
    <div>
      <dt>Brand legal and regulatory affairs</dt>
      <dd>Start with the <a href="#methodology">Methodology</a> section for the speciation, basis, and non-detect rules that govern every numeric claim, then the <a href="#literature-evidence-summary">Literature Evidence Summary</a> for source-traceable concentration evidence by analyte. Every numeric claim links to its source page; the <a href="#sources">Sources</a> block at the bottom is the citations list, written to be quoted into a Daubert brief without further editing.</dd>
    </div>
    <div>
      <dt>Retailer quality and compliance</dt>
      <dd>The <a href="#federalregulatory-limits-vs-field-findings">Federal/Regulatory Limits vs Field Findings</a> section compares the applicable regulatory cap to the cited field evidence on a like-for-like basis when conversion is well-defined. The <a href="#literature-evidence-summary">Literature Evidence Summary</a> gives source count and confidence rating per analyte.</dd>
    </div>
    <div>
      <dt>Brand QA and product development</dt>
      <dd>Use the <a href="/certification/lab-result-comparator?category=${o.slug}">Lab Result Comparator</a> to position a single lab value inside the cited literature for this matrix, against the applicable regulatory cap, with basis conversion explicit if applied.</dd>
    </div>
    <div>
      <dt>Regulators, journalists, and adversarial readers</dt>
      <dd>Every numeric claim on this page traces to a source page in the <a href="#sources">Sources</a> block. The <a href="#methodology">Methodology</a> section states the rules that govern interpretation.</dd>
    </div>
    <div>
      <dt>HMT&amp;C staff (internal)</dt>
      <dd>The threshold-selection arithmetic (percentile statistics, clean/dirty subcategory designation, pooling math) lives in the staff Standards Workbench tool, never on this public page or anywhere else under <code>wiki/</code>. See CLAUDE.md Part 19.</dd>
    </div>
  </dl>
</div>`
}

function parseArgs(argv) {
  const out = {}
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--")) {
      const key = argv[i].slice(2)
      const val = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[i + 1] : "true"
      out[key] = val
      if (val !== "true") i += 1
    }
  }
  return out
}

function required(args, keys) {
  for (const k of keys) {
    if (!args[k]) {
      console.error(`Missing required argument: --${k}`)
      console.error(`Usage: see tools/scaffold-product-page.mjs header comments.`)
      process.exit(1)
    }
  }
}
