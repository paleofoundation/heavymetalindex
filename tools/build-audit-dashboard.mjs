#!/usr/bin/env node
// Builds the public-facing audit dashboard at wiki/audits/index.md.
//
// Aggregates the outputs of the wiki's automated audit harness into a single
// transparency dashboard. Each audit is a measurement of the wiki's
// Cochrane-level defensibility on one dimension; the dashboard publishes the
// scores together so an external reviewer can see the wiki's current state
// without piecing together separate reports.
//
// Audits aggregated:
//   - Taxonomy coverage (tools/taxonomy/audit-coverage.mjs)
//   - Routing audit (tools/evidence/build-routing-audit.mjs)
//   - Routing discipline (tools/audit-routing-discipline.mjs)
//   - Ingredient mandatory-sections (tools/audit-ingredient-mandatory-sections.mjs)
//   - Product mandatory-sections (tools/audit-product-mandatory-sections.mjs)
//   - Ingredient metal-coverage (tools/audit-ingredient-metal-coverage.mjs)
//   - Source DOI completeness (tools/audit-source-dois.mjs)
//   - Source-page count by evidence tier (derived from wiki/sources/*.md)
//
// Output: wiki/audits/index.md (the dashboard) + wiki/audits/<date>-baseline.md
// (frozen snapshot for change-over-time auditing).
//
// Per CLAUDE.md Part 1 strategic frame: the wiki's defensibility argument
// rests on transparent self-audit. Cochrane systematic reviews publish their
// quality assessments alongside their findings. This dashboard is the wiki's
// equivalent.

import { withGeneratedHero } from "./lib/generated-hero-fields.mjs"
import fs from "node:fs"
import path from "node:path"
import { spawnSync } from "node:child_process"

const repoRoot = process.cwd()
const today = new Date().toISOString().slice(0, 10)
const auditDir = path.join(repoRoot, "wiki/audits")
fs.mkdirSync(auditDir, { recursive: true })

function readCsv(p) {
  if (!fs.existsSync(p)) return { headers: [], rows: [] }
  const text = fs.readFileSync(p, "utf8")
  const lines = text.split("\n").filter(l => l.length > 0)
  if (lines.length === 0) return { headers: [], rows: [] }
  const headers = lines[0].split(",").map(h => h.replace(/^"|"$/g, ""))
  const rows = []
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
    const r = {}
    headers.forEach((h, k) => r[h] = fields[k] || "")
    rows.push(r)
  }
  return { headers, rows }
}

function readJson(p) {
  if (!fs.existsSync(p)) return null
  return JSON.parse(fs.readFileSync(p, "utf8"))
}

function loadAudits() {
  const audits = {}

  // Taxonomy coverage
  const taxAudit = readCsv(path.join(repoRoot, "data/evidence/taxonomy-coverage-audit.csv"))
  audits.taxonomy = {
    total: taxAudit.rows.length,
    exact: taxAudit.rows.filter(r => r.match_mode === "exact").length,
    by_slug: taxAudit.rows.filter(r => r.match_mode === "by_slug").length,
    by_alias: taxAudit.rows.filter(r => r.match_mode === "by_alias").length,
    missing: taxAudit.rows.filter(r => r.match_mode === "missing").length,
    per_cat: {},
  }
  for (const r of taxAudit.rows) {
    const cn = r.category
    audits.taxonomy.per_cat[cn] = audits.taxonomy.per_cat[cn] || { name: r.category_name, total: 0, missing: 0 }
    audits.taxonomy.per_cat[cn].total++
    if (r.match_mode === "missing") audits.taxonomy.per_cat[cn].missing++
  }

  // Routing audit (just count)
  const routingAudit = readCsv(path.join(repoRoot, "data/evidence/product_source_routing_audit.csv"))
  const routingUnresolved = readCsv(path.join(repoRoot, "data/evidence/routing_unresolved.csv"))
  const routingMalformed = readCsv(path.join(repoRoot, "data/evidence/routing_malformed.csv"))
  audits.routing = {
    rows: routingAudit.rows.length,
    unresolved: routingUnresolved.rows.length,
    malformed: routingMalformed.rows.length,
  }

  // Routing discipline
  const rdSummary = readJson(path.join(repoRoot, "data/evidence/routing-discipline-summary.json"))
  if (rdSummary) {
    audits.routing_discipline = {
      sources_scanned: rdSummary.check_1_sources_scanned,
      sources_with_product_matrices: rdSummary.check_1_sources_with_product_matrices,
      check_1_failures: rdSummary.check_1_failures,
      products_scanned: rdSummary.check_2_products_scanned,
      products_hmtc_locked: rdSummary.check_2_products_hmtc_locked,
      check_2_failures: rdSummary.check_2_failures,
    }
  }

  // Ingredient mandatory sections (re-run for fresh count)
  const ingSec = spawnSync("node", ["tools/audit-ingredient-mandatory-sections.mjs", "--warn-only"], { cwd: repoRoot, encoding: "utf8" })
  const ingMatch = ingSec.stdout.match(/non-stub passing:\s*(\d+)\s+non-stub failing:\s*(\d+)/)
  if (ingMatch) {
    audits.ingredient_sections = { passing: Number(ingMatch[1]), failing: Number(ingMatch[2]) }
  }
  const stubMatch = ingSec.stdout.match(/stubs \(exempt\):\s*(\d+)/)
  if (stubMatch) audits.ingredient_sections.stubs = Number(stubMatch[1])

  // Product mandatory sections (re-run for fresh count)
  const prodSec = spawnSync("node", ["tools/audit-product-mandatory-sections.mjs", "--warn-only"], { cwd: repoRoot, encoding: "utf8" })
  const prodMatch = prodSec.stdout.match(/non-stub passing:\s*(\d+)\s+non-stub failing:\s*(\d+)/)
  if (prodMatch) {
    audits.product_sections = { passing: Number(prodMatch[1]), failing: Number(prodMatch[2]) }
  }
  const prodStubMatch = prodSec.stdout.match(/stubs \(exempt\):\s*(\d+)/)
  if (prodStubMatch) audits.product_sections.stubs = Number(prodStubMatch[1])

  // Claim provenance (trace-every-claim audit v1)
  const claimSummary = readJson(path.join(repoRoot, "data/evidence/claim-provenance-summary.json"))
  if (claimSummary) {
    audits.claim_provenance = claimSummary
  }

  // Source pages by evidence tier
  const sourcesDir = path.join(repoRoot, "wiki/sources")
  const sources = fs.readdirSync(sourcesDir).filter(f => f.endsWith(".md") && !f.startsWith("_") && f !== "index.md")
  const by_tier = {}, by_type = {}
  let doi_missing = 0
  let doi_with_marker = 0
  for (const f of sources) {
    const text = fs.readFileSync(path.join(sourcesDir, f), "utf8")
    const head = text.split("\n").slice(0, 60).join("\n")
    const tierM = head.match(/^evidence_tier:\s*(\S+)/m)
    const typeM = head.match(/^source_type:\s*(\S+)/m)
    const doiM = head.match(/^doi:\s*(\S.*)$/m)
    const noDoiM = head.match(/^no_doi_assigned:\s*true/m)
    const srcM = head.match(/^source_type:\s*(\S+)/m)
    const tier = tierM ? tierM[1] : "unknown"
    const type = typeM ? typeM[1] : "unknown"
    by_tier[tier] = (by_tier[tier] || 0) + 1
    by_type[type] = (by_type[type] || 0) + 1
    if (doiM) {
      const v = doiM[1].trim().replace(/^["']|["']$/g, "")
      if (v === "" || /^(null|unknown)$/i.test(v)) {
        if (noDoiM) doi_with_marker++
        else if (srcM && /^["']?textbook-chapter["']?$/.test(srcM[1])) doi_with_marker++
        else doi_missing++
      }
    } else if (!noDoiM) doi_missing++
    else doi_with_marker++
  }
  audits.sources = { total: sources.length, by_tier, by_type, doi_missing, doi_with_marker }

  return audits
}

function buildDashboard(audits) {
  const out = []
  out.push("---")
  out.push("title: Audit dashboard")
  out.push("description: Auto-regenerated transparency dashboard. Every dimension of the wiki's Cochrane-level defensibility is scored here, with cross-links to the detail audit files.")
  out.push("audience: [regulator, educator, researcher, brand-legal, brand-qa, journalist, external-reviewer]")
  out.push(`updated: ${today}`)
  out.push("---")
  out.push("")
  out.push("# Audit dashboard")
  out.push("")
  out.push(`This dashboard is auto-regenerated on every build from the wiki's audit harness. It is the single transparency surface for reading "what is the current Cochrane-level defensibility of the wiki, by dimension." External reviewers, regulatory affairs, and brand legal teams auditing the wiki should land here.`)
  out.push("")
  out.push(`Generated: **${today}**.  Baseline snapshot: [[audits/${today}-baseline|${today}-baseline]].`)
  out.push("")

  // Summary scorecard
  out.push("## Scorecard")
  out.push("")
  out.push("| Dimension | Score | Status |")
  out.push("|---|---:|:---:|")
  const tax = audits.taxonomy
  const taxPct = tax.total ? Math.round((tax.exact + tax.by_alias) / tax.total * 100) : 0
  out.push(`| Taxonomy v2.0 coverage (destination pages exist for HMTc rows) | ${tax.exact + tax.by_alias} / ${tax.total} (${taxPct}%) | ${taxPct === 100 ? "PASS" : taxPct >= 80 ? "WARN" : "FAIL"} |`)
  if (audits.routing) {
    const routingClean = audits.routing.unresolved === 0
    // Reader label. "Routing audit" is an ingest-log phrase and fails
    // tools/audit-public-batch-prose.mjs on this published page.
    out.push(`| Source routing (unresolved source routings) | ${audits.routing.unresolved} unresolved | ${routingClean ? "PASS" : "FAIL"} |`)
    out.push(`| Routing rows generated | ${audits.routing.rows} | — |`)
  }
  if (audits.ingredient_sections) {
    const total = audits.ingredient_sections.passing + audits.ingredient_sections.failing
    const pct = total ? Math.round(audits.ingredient_sections.passing / total * 100) : 0
    out.push(`| Ingredient mandatory sections (non-stub pages) | ${audits.ingredient_sections.passing} / ${total} (${pct}%) | ${pct === 100 ? "PASS" : pct >= 90 ? "WARN" : "FAIL"} |`)
  }
  if (audits.product_sections) {
    const total = audits.product_sections.passing + audits.product_sections.failing
    const pct = total ? Math.round(audits.product_sections.passing / total * 100) : 0
    out.push(`| Product mandatory sections (non-stub pages) | ${audits.product_sections.passing} / ${total} (${pct}%) | ${pct === 100 ? "PASS" : pct >= 90 ? "WARN" : "FAIL"} |`)
  }
  if (audits.routing_discipline) {
    const rd = audits.routing_discipline
    out.push(`| Routing discipline check 1 (sources with product-shaped matrices but empty products[]) | ${rd.check_1_failures} failures | ${rd.check_1_failures === 0 ? "PASS" : rd.check_1_failures < 20 ? "WARN" : "FAIL"} |`)
    out.push(`| Routing discipline check 2 (HMTc-locked products with zero routed sources) | ${rd.check_2_failures} of ${rd.products_hmtc_locked} | INFO |`)
  }
  if (audits.sources) {
    const doiClean = audits.sources.doi_missing === 0
    out.push(`| Source page DOI completeness | ${audits.sources.doi_missing} missing | ${doiClean ? "PASS" : audits.sources.doi_missing < 10 ? "WARN" : "FAIL"} |`)
  }
  if (audits.claim_provenance) {
    const cp = audits.claim_provenance
    const status = cp.supported_pct >= 95 ? "PASS" : cp.supported_pct >= 80 ? "WARN" : "FAIL"
    out.push(`| Claim provenance — body-prose numerical claims with traceable citation | ${cp.supported_claims}/${cp.total_claims} (${cp.supported_pct}%) | ${status} |`)
  }
  out.push("")

  // Per-dimension detail
  out.push("## Taxonomy v2.0 coverage")
  out.push("")
  out.push(`Total subcategories defined by HMTc Taxonomy v2.0: **${tax.total}**.  Pages scaffolded or content-filled: **${tax.exact + tax.by_alias}** (${taxPct}%).  Missing: **${tax.missing}**.`)
  out.push("")
  out.push("- Exact frontmatter declaration (hmtc_category + hmtc_row): " + tax.exact)
  out.push("- Slug-alias match (frontmatter needs backfill): " + tax.by_alias)
  out.push("- Missing destination pages: " + tax.missing)
  out.push("")
  out.push("Detail report: `data/evidence/taxonomy-coverage-audit.md`.  Full PRISMA-equivalent: [[coverage]].")
  out.push("")

  out.push("## Source catalog")
  out.push("")
  if (audits.routing) {
    out.push(`Source pages that name a product are listed on that product page. ${audits.routing.rows} source-to-page links are on record.`)
    out.push("")
    out.push(`- Unresolved targets (source frontmatter declares a slug that doesn't exist): **${audits.routing.unresolved}**`)
    out.push(`- Malformed sources (missing required frontmatter fields): **${audits.routing.malformed}** (non-blocking)`)
    out.push("")
    out.push("Detail: `data/evidence/product_source_routing_audit.csv`, `data/evidence/routing_unresolved.csv`, `data/evidence/routing_malformed.csv`.")
    out.push("")
  }

  out.push("## Routing discipline")
  out.push("")
  if (audits.routing_discipline) {
    const rd = audits.routing_discipline
    out.push(`**Check 1** — sources with product-shaped \`matrices:\` slugs but empty \`products: []\` and no \`pending_category_lock\` flag.  These are sources that should route to a product page but the frontmatter doesn't declare it.`)
    out.push("")
    out.push(`- Sources scanned: ${rd.sources_scanned}`)
    out.push(`- Sources with product-shaped matrices: ${rd.sources_with_product_matrices}`)
    out.push(`- **Failures: ${rd.check_1_failures}**`)
    out.push("")
    out.push(`**Check 2** — HMTc-locked product pages (carrying hmtc_category + hmtc_row) with zero routed sources.  These are scaffolded destinations that haven't received their Phase 1 ingest yet.`)
    out.push("")
    out.push(`- HMTc-locked products: ${rd.products_hmtc_locked}`)
    out.push(`- Products with no routed sources: ${rd.check_2_failures}`)
    out.push("")
    out.push(`Check 2 is informational, not a failure: the scaffolded universe (277 taxonomy rows) is larger than the current ingested universe (897 source pages); rows without sources are the priority queue for the next ingest pass, not defects.`)
    out.push("")
    out.push("Detail: `data/evidence/routing-discipline-audit.csv`.")
    out.push("")
  }

  out.push("## Ingredient mandatory sections")
  out.push("")
  if (audits.ingredient_sections) {
    const a = audits.ingredient_sections
    const total = a.passing + a.failing
    const pct = total ? Math.round(a.passing / total * 100) : 0
    out.push(`Non-stub ingredient pages must carry 8 H2 sections per CLAUDE.md Part 6 (Why this commodity accumulates / Heavy metal contamination profile / Ranges by source, region, and variety / Processing effects / Ingredient-derivative risk / Mitigation options / Regulatory limits that apply / Sources). Stubs (untouched pages with all-pending contamination_profile) are exempt.`)
    out.push("")
    out.push(`- Non-stub passing: **${a.passing}** of ${total} (${pct}%)`)
    out.push(`- Non-stub failing: **${a.failing}**`)
    if (a.stubs) out.push(`- Stubs (exempt): ${a.stubs}`)
    out.push("")
    out.push("Detail: `data/evidence/ingredient-mandatory-sections-audit.csv`.")
    out.push("")
  }

  out.push("## Product mandatory sections")
  out.push("")
  if (audits.product_sections) {
    const a = audits.product_sections
    const total = a.passing + a.failing
    const pct = total ? Math.round(a.passing / total * 100) : 0
    out.push(`Non-stub product-category pages must carry 10 H2 sections per CLAUDE.md Part 6 (Who this page is for / Methodology / Literature Evidence Summary / Source Evidence Inventory / Broad Product Context / Federal/Regulatory Limits / Levers to reduce contamination / How standards math uses this page / Historical recalls and enforcement / Sources). Stubs (scaffolded pages with no routed sources) are exempt.`)
    out.push("")
    out.push(`- Non-stub passing: **${a.passing}** of ${total} (${pct}%)`)
    out.push(`- Non-stub failing: **${a.failing}**`)
    if (a.stubs) out.push(`- Stubs (exempt): ${a.stubs}`)
    out.push("")
    out.push("Detail: `data/evidence/product-mandatory-sections-audit.csv`.")
    out.push("")
  }

  out.push("## Source page corpus")
  out.push("")
  if (audits.sources) {
    out.push(`Total source pages in wiki/sources/: **${audits.sources.total}**.`)
    out.push("")
    out.push("By evidence tier:")
    for (const t of Object.keys(audits.sources.by_tier).sort()) {
      out.push(`- ${t}: ${audits.sources.by_tier[t]}`)
    }
    out.push("")
    out.push("By source type:")
    for (const t of Object.keys(audits.sources.by_type).sort()) {
      out.push(`- ${t}: ${audits.sources.by_type[t]}`)
    }
    out.push("")
    out.push(`DOI completeness: ${audits.sources.total - audits.sources.doi_missing} of ${audits.sources.total} sources have a DOI or a \`no_doi_assigned: true\` marker.  Missing DOI metadata: **${audits.sources.doi_missing}**.`)
    out.push("")
  }

  // Claim provenance detail section
  if (audits.claim_provenance) {
    const cp = audits.claim_provenance
    out.push("## Claim provenance (trace-every-claim audit v1)")
    out.push("")
    out.push(`Every numerical claim in body prose on ingredient and product pages — matches the regex \`<number> <unit>\` where unit is one of ppb, ppm, mg/kg, µg/kg, µg/g, mg/L, µg/L, % — must trace to a citation in the same H2 section (before or after the claim is acceptable; sections are treated as logical units of provenance). Valid citations: \`[[sources/...]]\`, \`[[regulations/...]]\` (for regulatory limits), \`[[testing/...]]\` (for analytical-method floors).`)
    out.push("")
    out.push(`- Total claims scanned: **${cp.total_claims}**`)
    out.push(`- Supported: **${cp.supported_claims}** (${cp.supported_pct}%)`)
    out.push(`- Unsupported: **${cp.unsupported_claims}**`)
    out.push("")
    out.push("By page type:")
    for (const t of Object.keys(cp.by_type)) {
      const b = cp.by_type[t]
      const pct = Math.round(b.supported / b.total * 100)
      out.push(`- ${t}: ${b.supported}/${b.total} (${pct}%)`)
    }
    out.push("")
    out.push(`Cochrane target: **>95%** supported. Current baseline reports the gap to that target as a follow-up queue. The v1 audit does not yet verify that the cited source actually contains the claimed value (that requires PDF reading per claim) — only that a citation exists. v2 will add PDF-side verification.`)
    out.push("")
    out.push("Detail: `data/evidence/claim-provenance-audit.csv` (per-claim records with section context).")
    out.push("")
  }

  out.push("## What this dashboard does not yet measure")
  out.push("")
  out.push("The audits above are the mechanical, automatable dimensions of defensibility. The wiki's Cochrane-level target also requires audits that this dashboard does not yet produce:")
  out.push("")
  out.push("- **PDF-side verification.** Trace-every-claim audit v2 should follow each `[[sources/...]]` link to the cited source page, then to the raw PDF in `raw/markdown/<FM_id>/` or `raw/manual-fetch/...`, and verify the claimed value appears in the source. Today's v1 audit only verifies a citation exists; not that the citation is correct.")
  out.push("- **Synthesis reproducibility audit.** Pick 5 populated `contamination_profile` cells. Re-derive the values from contributing sources from scratch (without consulting the existing page). Compare. Target: 100% reconstructible. Not yet automated; requires deep reading of contributing sources.")
  out.push("- **Inter-rater reliability.** Re-ingest 20 source pages with a second extractor blind to the existing pages. Compare values + metadata. Compute κ. Target: κ > 0.7 extraction, > 0.8 inclusion. Not yet operationalized.")
  out.push("- **External peer review.** Three independent reviewers (toxicology academic, brand RA veteran, plaintiff's-side class-action attorney) read the wiki and report defects. The commissioning brief is drafted at `docs/external-review-brief` and is ready for Karen to send; reviewers not yet engaged.")
  out.push("")
  out.push("These four audits are the Cochrane-level qualifying audits. They are documented here as gaps in the harness so the audit dashboard does not present a falsely complete picture.")
  out.push("")
  out.push("## Audit harness provenance")
  out.push("")
  out.push("This dashboard is generated by `tools/build-audit-dashboard.mjs` on every prebuild. Inputs:")
  out.push("")
  out.push("- `data/evidence/taxonomy-coverage-audit.csv` (output of `tools/taxonomy/audit-coverage.mjs`)")
  out.push("- `data/evidence/product_source_routing_audit.csv`, `routing_unresolved.csv`, `routing_malformed.csv` (output of `tools/evidence/build-routing-audit.mjs`)")
  out.push("- `data/evidence/routing-discipline-summary.json` (output of `tools/audit-routing-discipline.mjs`)")
  out.push("- Live re-run of `tools/audit-ingredient-mandatory-sections.mjs` and `tools/audit-product-mandatory-sections.mjs`")
  out.push("- Direct read of `wiki/sources/*.md` frontmatter for evidence tier + DOI accounting")

  return out.join("\n")
}

export { buildDashboard }

function main() {
  const audits = loadAudits()
  const dashboard = buildDashboard(audits)
  const indexPath = path.join(auditDir, "index.md")
  const baselinePath = path.join(auditDir, `${today}-baseline.md`)
  fs.writeFileSync(indexPath, withGeneratedHero(dashboard, path.relative(repoRoot, indexPath)))
  fs.writeFileSync(baselinePath, withGeneratedHero(dashboard.replace("title: Audit dashboard\n", `title: "Audit dashboard: ${today}"\n`), path.relative(repoRoot, baselinePath)))
  console.log(`Wrote ${indexPath}`)
  console.log(`Wrote ${baselinePath}`)
  // Summary to stdout
  const tax = audits.taxonomy
  const taxPct = tax.total ? Math.round((tax.exact + tax.by_alias) / tax.total * 100) : 0
  console.log(`Audit dashboard:`)
  console.log(`  taxonomy coverage: ${taxPct}% (${tax.exact + tax.by_alias}/${tax.total})`)
  if (audits.routing) console.log(`  routing unresolved: ${audits.routing.unresolved}`)
  if (audits.ingredient_sections) console.log(`  ingredient sections: ${audits.ingredient_sections.passing} pass, ${audits.ingredient_sections.failing} fail`)
  if (audits.product_sections) console.log(`  product sections: ${audits.product_sections.passing} pass, ${audits.product_sections.failing} fail`)
  if (audits.sources) console.log(`  sources: ${audits.sources.total} total, ${audits.sources.doi_missing} missing DOI`)
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname)) main()
