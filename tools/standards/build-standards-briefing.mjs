#!/usr/bin/env node
/**
 * Historical occurrence briefing. The initial percentile-limit method retired
 * on 2026-09-09. This command reads stored descriptive pool output verbatim;
 * it never sets a limit, invents a missing-analyte fallback, or applies an
 * assumed reconstitution factor. Live limits belong to Method v2.0 compilers
 * and their primary-instrument provenance, not this legacy pool CSV.
 *
 * node tools/standards/build-standards-briefing.mjs --product=<slug>
 * Optional --outdir=<private-dir>, --pooled=<csv>, --authors="Name; Name".
 */
import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import { execFileSync } from "node:child_process"
import { pathToFileURL } from "node:url"
import matter from "gray-matter"
import { parseCsv } from "../evidence/lib/csv.mjs"

export const LEGACY_ANALYTES = ["Pb", "iAs", "tAs", "Sn", "Ni", "Cd", "Cr-VI", "Al", "tHg", "MeHg"]
const DEFAULT_AUTHOR = "Karen Pendergrass, Standards Architect, Institute of Contaminant Standards (ICS)"
const escapeCell = (value) => String(value ?? "").replace(/\|/g, "\\|").replace(/[\r\n]+/g, " ") || "—"

export function historicalAnalytes(rows) {
  const byMetal = new Map()
  for (const row of rows) {
    if (byMetal.has(row.metal_species)) throw new Error(`Ambiguous duplicate historical rows for ${row.metal_species}`)
    byMetal.set(row.metal_species, row)
  }
  const metals = [...new Set([...LEGACY_ANALYTES, ...rows.map(row => row.metal_species).filter(Boolean)])]
  return metals.map(metal => {
    const row = byMetal.get(metal)
    return { metal, row: row || null, state: row ? (row.verdict || "Stored descriptive row") : "Missing input row" }
  })
}

export function renderHistoricalBriefing({ productSlug, title, rows, inputHash, generatedAt, commit = null, authors = [DEFAULT_AUTHOR] }) {
  const analytes = historicalAnalytes(rows)
  const table = analytes.map(({ metal, row, state }) => `| ${escapeCell(metal)} | ${escapeCell(state)} | ${escapeCell(row?.native_basis)} | ${escapeCell(row?.sources_contributing)} | ${escapeCell(row?.pooled_n)} | ${escapeCell(row?.pooled_p50)} | ${escapeCell(row?.pooled_p95)} | ${escapeCell(row?.pooled_p97)} |`).join("\n")
  const sources = new Set()
  for (const { row } of analytes) {
    if (!row?.contribution_log) continue
    let log
    try { log = JSON.parse(row.contribution_log) } catch { throw new Error("Invalid historical contribution_log JSON") }
    if (!Array.isArray(log)) throw new Error("Historical contribution_log must be an array")
    for (const entry of log) if (entry.admitted && typeof entry.source_id === "string") sources.add(entry.source_id)
  }
  const missing = analytes.filter(item => !item.row).map(item => item.metal)
  return `---
title: ${JSON.stringify(`Historical occurrence briefing — ${title}`)}
type: historical-occurrence-briefing
product_slug: ${productSlug}
status: historical-only
limit_setting: false
methodology_version: retired-occurrence-pooling-descriptive-only
retired_on: 2026-09-09
generated_at: ${generatedAt}
authors: ${JSON.stringify(authors)}
audience: [internal]
noindex: true
---

# Historical occurrence briefing — ${title}

This is a historical/descriptive report, not a standard, proposed limit, or certification-readiness statement. The initial P97/P45 limit-setting mechanism retired on September 9, 2026. Live Method v2.0 limits use verified sovereign instruments and disclosed derivations; this report does not read or replace those compiled limits.

Author: ${authors.join("; ")}

## Stored occurrence statistics

Values below reproduce the selected product's stored pool CSV fields without rounding, new pooling, basis conversion, or missing-analyte imputation. P50, P95 and P97 are descriptive outputs of that legacy pool, not necessarily source-reported statistics or measured samples. Source counts and pool N retain their original meaning, including any documented pseudo-sample expansion. All ten legacy panel analytes are listed; additional analytes present in the input remain visible.

| Analyte | Input disposition | Reported basis | Sources | Pool N | Stored P50 (ppb) | Stored P95 (ppb) | Stored P97 (ppb) |
|---|---|---|---:|---:|---:|---:|---:|
${table}

## Missing inputs and interpretation limits

${missing.length ? `Missing input rows: ${missing.join(", ")}.` : "Every legacy panel analyte has an input row; this does not establish complete evidence or a complete live standard."} A missing or blocked row stays explicit. Missing values are not zero and do not authorize omission of an analyte from a live standard.

A total-mercury pool does not create a methylmercury measurement. This report derives no MeHg concentration from a presumed fraction, an assumed method LOQ, or a generic dilution factor. Species-bounded live limits require the verified parent ceiling and the current compiled provenance; they cannot be inferred from this historical occurrence table. No candidate-limit fields in the legacy CSV are presented as live ceilings.

The table does not establish legal applicability, verify a worldwide regulatory floor, or resolve heterogeneous markets, species, methods, or bases. Those decisions require the primary source and the relevant adjudication records. Stored regulatory-cap and rationale fields from the retired engine are not a substitute for primary-instrument verification.

## Contributing source identifiers

${[...sources].sort().map(id => `- ${escapeCell(id)}`).join("\n") || "No admitted source identifiers are recorded in the selected rows."}

## Provenance

- Input CSV SHA-256: \`${inputHash}\`.
- Generator checkout commit: ${commit ? `\`${commit}\`` : "unavailable"}. This identifies the checkout; it does not assert that the input CSV or working tree was committed at that revision.
- Generated at: ${generatedAt}. This is the report creation time, not a standards effective date.
- Current authority: CLAUDE.md Part 19 and the September 9, 2026 method lock. Earlier generator implementations and their retired calibration remain reconstructible in Git history.

Karen Pendergrass also serves as CEO of the Institute of Contaminant Standards (ICS). The default byline identifies the Standards Architect; alternative authors must be explicitly supplied for this report. Automated tooling assisted with historical pooling-engine and template implementation, including Claude and Codex; it is not credited as a scientific co-author. This generator performs no new standards calculation.
`
}

export function buildHistoricalBriefing({ repoRoot = process.cwd(), productSlug = "infant-formula-powder-non-soy", pooledPath = path.join(repoRoot, "data/evidence/hmtc_aggregate_distributions.csv"), outDir = path.join(repoRoot, "data/workbench/briefings"), authors, generatedAt = new Date().toISOString() } = {}) {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(productSlug)) throw new Error("Invalid product slug")
  const relativeOutput = path.relative(path.join(repoRoot, "wiki"), path.resolve(outDir))
  if (relativeOutput === "" || (!relativeOutput.startsWith(`..${path.sep}`) && relativeOutput !== ".." && !path.isAbsolute(relativeOutput))) {
    throw new Error("Historical briefings must remain outside wiki/")
  }
  const productPath = path.join(repoRoot, "wiki/products", `${productSlug}.md`)
  const { data } = matter(fs.readFileSync(productPath, "utf8"))
  const input = fs.readFileSync(pooledPath)
  const rows = parseCsv(input.toString("utf8")).filter(row => row.product_slug === productSlug)
  let commit = null
  try { commit = execFileSync("git", ["rev-parse", "HEAD"], { cwd: repoRoot, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim() } catch { /* no Git attribution available */ }
  const text = renderHistoricalBriefing({ productSlug, title: data.title || data.label || productSlug, rows,
    inputHash: crypto.createHash("sha256").update(input).digest("hex"), generatedAt, commit, authors })
  fs.mkdirSync(outDir, { recursive: true })
  const outPath = path.join(outDir, `${productSlug}.md`)
  fs.writeFileSync(outPath, text, "utf8")
  return { outPath, text, rowCount: rows.length }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = new Map(process.argv.slice(2).map(arg => arg.match(/^--([^=]+)=(.*)$/)).filter(Boolean).map(match => [match[1], match[2]]))
  try {
    const result = buildHistoricalBriefing({ productSlug: args.get("product"), pooledPath: args.get("pooled"),
      outDir: args.get("outdir"), authors: args.has("authors") ? args.get("authors").split(";").map(name => name.trim()).filter(Boolean) : undefined })
    console.log(`Wrote historical-only occurrence report: ${result.outPath} (${result.rowCount} input rows; no live limits generated)`)
  } catch (error) { console.error(error.message); process.exitCode = 1 }
}
