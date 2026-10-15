#!/usr/bin/env node

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const ROOT = process.cwd()
const EDITION = "2026"
const PUBLISHED = "2026-09-01"
const INDEX_ORIGIN = "https://heavymetalindex.com"
const synthesisIndexPath = path.join(ROOT, "wiki/synthesis/index.md")
const reportsDir = path.join(ROOT, "wiki/reports")
const publicDataDir = path.join(ROOT, "wiki/static/data")

const themeBySlug = new Map([
  ["breastmilk-heavy-metal-exposure-pathway", "Infant and vulnerable-population exposure"],
  ["infant-formula-metal-amplification", "Infant and vulnerable-population exposure"],
  ["spice-adulteration-lead-infants", "Infant and vulnerable-population exposure"],
  ["aquaculture-vs-wild-contamination-differential", "Aquatic food systems"],
  ["bivalve-cadmium-amplification", "Aquatic food systems"],
  ["cooking-does-not-reduce-mehg", "Aquatic food systems"],
  ["se-hg-molar-ratio-certification-debate", "Aquatic food systems"],
  ["climate-fish-mehg-projections", "Aquatic food systems"],
  ["mining-impacted-freshwater-fish", "Aquatic food systems"],
  ["subsistence-fishing-mehg-disparity", "Aquatic food systems"],
  ["tea-multi-metal-bioaccumulation", "Botanical and agricultural pathways"],
  ["dietary-nickel-plant-staple-accumulation", "Botanical and agricultural pathways"],
  ["supplement-botanical-lead-pathway", "Botanical and agricultural pathways"],
  ["wastewater-irrigation-multimetal-crop-pathway", "Botanical and agricultural pathways"],
  ["organic-certification-not-protective", "Botanical and agricultural pathways"],
  ["seaweed-cd-as-contamination", "Botanical and agricultural pathways"],
  ["tin-canned-food-acidic-matrix-migration", "Processing, contact, and adulteration"],
  ["cookware-utensil-metal-leaching-pathway", "Processing, contact, and adulteration"],
  ["organ-meat-cadmium-lead-accumulation", "Product-form differentiation"],
  ["us-chocolate-lead-temporal-decline", "Product-form differentiation"],
  ["eu-regulatory-framework-timeline", "Regulatory and toxicological interpretation"],
  ["combined-exposure-underprotection", "Regulatory and toxicological interpretation"],
  ["organoarsenical-inertness-assumption", "Regulatory and toxicological interpretation"],
  ["climate-metals-tradeoffs", "Regulatory and toxicological interpretation"],
  ["metals-microbiome-disease-pathogenesis", "Microbiome-mediated pathogenesis"],
])

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
])

const findings = parseSynthesisIndex(fs.readFileSync(synthesisIndexPath, "utf8"))
const metrics = corpusMetrics()
const themes = summarizeThemes(findings)

fs.mkdirSync(reportsDir, { recursive: true })
fs.mkdirSync(publicDataDir, { recursive: true })

const reportPath = path.join(reportsDir, `state-of-heavy-metals-in-food-${EDITION}.md`)
const jsonPath = path.join(publicDataDir, `state-of-heavy-metals-in-food-${EDITION}.json`)
const csvPath = path.join(publicDataDir, `state-of-heavy-metals-in-food-${EDITION}.csv`)

const payload = {
  schema_version: "1.0.0",
  title: `State of Heavy Metals in Food ${EDITION}`,
  edition: EDITION,
  published: PUBLISHED,
  license: "CC-BY-4.0",
  methodology_url: `${INDEX_ORIGIN}/methodology`,
  report_url: `${INDEX_ORIGIN}/reports/state-of-heavy-metals-in-food-${EDITION}`,
  metrics,
  themes,
  findings,
}

fs.writeFileSync(jsonPath, `${JSON.stringify(payload, null, 2)}\n`)
fs.writeFileSync(csvPath, renderCsv(findings))
fs.writeFileSync(reportPath, renderReport(payload))
fs.writeFileSync(path.join(reportsDir, "index.md"), renderReportIndex(payload))

console.log(
  `Wrote State of Heavy Metals in Food ${EDITION}: ${findings.length} synthesis findings, ${findings.reduce((sum, item) => sum + item.anchor_sources, 0)} disclosed anchor-source relationships, ${themes.length} themes.`,
)

function parseSynthesisIndex(markdown) {
  const rowPattern = /^\| \[([^\]]+)\]\((\/synthesis\/([^)]+))\) \| ([^|]+?) \| (\d+) \| ([^|]+?) \|$/gm
  const records = []
  for (const match of markdown.matchAll(rowPattern)) {
    const [, title, relativeUrl, slug, metals, anchorSources, added] = match
    const sourcePath = path.join(ROOT, "wiki/synthesis", `${slug}.md`)
    if (!fs.existsSync(sourcePath)) throw new Error(`Missing synthesis page for report row: ${slug}`)
    const page = fs.readFileSync(sourcePath, "utf8")
    const theme = themeBySlug.get(slug)
    if (!theme) throw new Error(`Missing report theme for synthesis: ${slug}`)
    records.push({
      slug,
      title: cleanText(title),
      metals: metals.split(",").map((metal) => metal.trim()),
      anchor_sources: Number(anchorSources),
      added: added.trim(),
      theme,
      review_state: page.includes("_no reviews yet_") ? "preprint; no external verdict recorded" : "see page review record",
      url: `${INDEX_ORIGIN}${relativeUrl}`,
    })
  }
  if (records.length !== 25) throw new Error(`Expected 25 synthesis findings; found ${records.length}`)
  return records
}

function corpusMetrics() {
  const sourcesDir = path.join(ROOT, "wiki/sources")
  let sources = 0
  let peerReviewed = 0
  let government = 0
  let tierA = 0
  const jurisdictions = new Set()
  for (const file of fs.readdirSync(sourcesDir)) {
    if (!file.endsWith(".md") || file === "index.md" || file === "_TEMPLATE.md") continue
    sources += 1
    const fm = matter(fs.readFileSync(path.join(sourcesDir, file), "utf8")).data
    const normalized = sourceTypeMap.get(String(fm.source_type || "").trim().toLowerCase())
    if (normalized === "peer_reviewed") peerReviewed += 1
    if (normalized === "government") government += 1
    if (String(fm.evidence_tier || "").trim().toUpperCase() === "A") tierA += 1
    for (const value of asArray(fm.jurisdictions)) {
      if (String(value).trim()) jurisdictions.add(String(value).trim().toUpperCase())
    }
  }
  return {
    synthesis_findings: findings.length,
    disclosed_anchor_source_relationships: findings.reduce((sum, item) => sum + item.anchor_sources, 0),
    source_pages: sources,
    peer_reviewed_source_pages: peerReviewed,
    government_source_pages: government,
    a_tier_source_pages: tierA,
    jurisdictions: jurisdictions.size,
    ingredient_pages: countPages("wiki/ingredients", ["index.md"]),
    product_pages: countPages("wiki/products", ["index.md"]),
    regulation_pages: countPages("wiki/regulations", ["index.md"]),
    structured_evidence_records: countLines("data/evidence/values.jsonl"),
    routing_audit_rows: Math.max(countLines("data/evidence/product_source_routing_audit.csv") - 1, 0),
  }
}

function summarizeThemes(records) {
  const grouped = new Map()
  for (const record of records) {
    const group = grouped.get(record.theme) || { theme: record.theme, finding_count: 0, anchor_source_relationships: 0, slugs: [] }
    group.finding_count += 1
    group.anchor_source_relationships += record.anchor_sources
    group.slugs.push(record.slug)
    grouped.set(record.theme, group)
  }
  return [...grouped.values()]
}

function renderReport({ metrics: m, themes: grouped, findings: records }) {
  const table = records
    .map((record) => `| [${record.title}](${record.url}) | ${record.metals.join(", ")} | ${record.anchor_sources} | ${record.theme} | ${record.review_state} |`)
    .join("\n")
  const themeTable = grouped
    .map((theme) => `| ${theme.theme} | ${theme.finding_count} | ${theme.anchor_source_relationships} |`)
    .join("\n")
  return `---
title: "State of Heavy Metals in Food ${EDITION}"
description: "A cross-corpus report on 24 source-traceable findings spanning food matrices, processing pathways, vulnerable populations, and regulatory interpretation."
type: report
status: public-preprint
author: "Karen Pendergrass"
orcid: "0000-0002-2348-7259"
published: ${PUBLISHED}
updated: ${PUBLISHED}
license: "CC BY 4.0"
audience: [regulator, laboratory, manufacturer, retailer, attorney, journalist, educator]
---

## Executive finding

The food heavy-metals problem is not one contaminant moving through one supply chain. Across 24 source-traceable synthesis findings, the recurring pattern is that product identity, chemical species, preparation basis, geography, production method, processing contact, packaging, and consumer population materially change what a concentration means. A defensible evidence system has to preserve those distinctions instead of flattening them into a generic “heavy metals” score.

This first edition is a cross-corpus report, not a new pooled meta-analysis. It summarizes the independent synthesis layer already published by the Heavy Metal Index and links every statement back to a finding page with named anchor sources. It does not set certification limits, estimate a universal market pass rate, or convert unlike studies into a single concentration distribution.

## The evidence base at publication

The repository contained **${fmt(m.source_pages)} source pages**, including **${fmt(m.peer_reviewed_source_pages)} peer-reviewed source pages**, **${fmt(m.government_source_pages)} government source pages**, and **${fmt(m.a_tier_source_pages)} A-tier records**, spanning **${fmt(m.jurisdictions)} jurisdiction labels**. The structured layer contained **${fmt(m.structured_evidence_records)} evidence records** and **${fmt(m.routing_audit_rows)} source-to-destination audit rows**. Those repository-wide counts provide context; this report itself is limited to **${m.synthesis_findings} promoted synthesis findings** and **${m.disclosed_anchor_source_relationships} disclosed anchor-source relationships**.

Downloads: [machine-readable JSON](/static/data/state-of-heavy-metals-in-food-${EDITION}.json) · [finding register CSV](/static/data/state-of-heavy-metals-in-food-${EDITION}.csv)

## Six cross-corpus conclusions

### 1. Product form is part of the evidence

Powder and ready-to-feed formula, dry tea leaf and prepared infusion, finfish and bivalves, muscle meat and offal, and canned acidic foods and their uncanned counterparts cannot be treated as interchangeable matrices. Differences in water content, preparation, physiology, and contact materials change both concentration and exposure interpretation.

### 2. Contamination can enter after harvest

Cookware, utensils, cans, processing equipment, and deliberate adulteration create pathways that are independent of the cleanliness of the raw agricultural ingredient. Supplier programs that stop at farm or commodity documentation therefore leave material routes unmeasured.

### 3. Biological accumulation creates category-specific floors and gradients

Nickel uptake in plant staples, cadmium in offal and bivalves, arsenic and cadmium in seaweed, and methylmercury in aquatic food webs show why a single generic food category obscures mechanisms. These findings support better stratification and surveillance; they do not make contamination inevitable in every lot.

### 4. Vulnerability depends on consumption pattern, not concentration alone

Infant formula as a sole diet, breastmilk as a maternal-exposure pathway, spices reaching infants through household foods, and subsistence fishing as a high-frequency exposure pattern demonstrate why population and frequency belong beside the analytical result.

### 5. Chemical species and reporting basis cannot be repaired after the fact

Total arsenic does not answer an inorganic-arsenic question, total mercury does not automatically answer a methylmercury question, and dry, wet, prepared, or as-consumed values cannot be silently mixed. Species and basis are admission criteria for a comparison, not optional footnotes.

### 6. Regulation and surveillance move on different clocks

The EU framework has changed through successive matrix- and analyte-specific instruments, US chocolate lead appears to have declined while cadmium did not, and climate-linked projections signal that present occurrence patterns may shift. A living evidence system therefore needs effective dates, current lot evidence, and explicit review triggers.

## Findings by theme

| Theme | Findings | Disclosed anchor-source relationships |
| --- | ---: | ---: |
${themeTable}

## Complete finding register

| Finding | Metals | Anchor sources | Theme | External review state |
| --- | --- | ---: | --- | --- |
${table}

## Methodology

Findings enter this report only if they are already promoted on the [synthesis register](/synthesis). That promotion requires multiple independent high-quality sources, a conclusion that spans an existing page boundary, a non-obvious connection not supplied by one source alone, and operational relevance to a public audience. The report generator reads the public synthesis register, verifies that every linked page exists, preserves the listed metals and anchor-source count, and fails the build if a promoted finding lacks a report theme.

No concentration values are pooled for this edition. No study is excluded merely because it reports a mean, median, range, maximum, or censored statistic; those source facts remain in the underlying evidence system. This report does not combine markets, jurisdictions, product forms, bases, or analyte species. Quantitative claims remain on the linked source and synthesis pages where their methods and limitations are visible.

## Limitations and review state

The synthesis pages are published as public preprints with their external-review state shown on-page. A finding may be well supported by independent sources and still lack a named external verdict. Readers should use the review-state column above and the linked page history when deciding how much weight to place on a finding.

The repository-scale counts describe the information system, not the number of unique market samples. Source pages differ in study size and purpose, and one source may support more than one routed finding. The disclosed anchor-source total is therefore a relationship count, not a count of unique publications or tested products.

## Citation

Pendergrass, K. (${EDITION}). *State of Heavy Metals in Food ${EDITION}*. Heavy Metal Index. ${INDEX_ORIGIN}/reports/state-of-heavy-metals-in-food-${EDITION}

The report narrative and finding register are released under CC BY 4.0. Underlying third-party sources retain their own rights and licenses.
`
}

function renderReportIndex({ metrics: m }) {
  return `---
title: Reports
description: Cross-corpus reports published by the Heavy Metal Index.
type: report-index
updated: ${PUBLISHED}
---

## Current edition

### [State of Heavy Metals in Food ${EDITION}](/reports/state-of-heavy-metals-in-food-${EDITION})

A reproducible cross-corpus report covering ${m.synthesis_findings} promoted synthesis findings and ${m.disclosed_anchor_source_relationships} disclosed anchor-source relationships. Includes a complete review-state register and downloadable [JSON](/static/data/state-of-heavy-metals-in-food-${EDITION}.json) and [CSV](/static/data/state-of-heavy-metals-in-food-${EDITION}.csv) data.

The report is a public preprint and a map of existing evidence. It is not a pooled market survey, a certification threshold document, or a substitute for the linked source records.
`
}

function renderCsv(records) {
  const header = ["slug", "title", "metals", "anchor_sources", "theme", "review_state", "url"]
  const rows = records.map((record) => [record.slug, record.title, record.metals.join("; "), record.anchor_sources, record.theme, record.review_state, record.url])
  return `${[header, ...rows].map((row) => row.map(csvCell).join(",")).join("\n")}\n`
}

function csvCell(value) {
  const text = String(value ?? "")
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text
}

function cleanText(value) {
  return String(value).replaceAll(/<[^>]+>/g, "").replaceAll("&amp;", "&").trim()
}

function countPages(relativeDir, excluded = []) {
  const dir = path.join(ROOT, relativeDir)
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_") && !excluded.includes(file)).length
}

function countLines(relativePath) {
  const fullPath = path.join(ROOT, relativePath)
  if (!fs.existsSync(fullPath)) return 0
  return fs.readFileSync(fullPath, "utf8").split("\n").filter((line) => line.trim()).length
}

function asArray(value) {
  if (Array.isArray(value)) return value
  return value == null || value === "" ? [] : [value]
}

function fmt(value) {
  return new Intl.NumberFormat("en-US").format(value)
}
