#!/usr/bin/env node
// Create a provisional ingredient page scaffold when an ingest declares
// an ingredient slug that does not yet exist.
//
// Mirror of tools/autonomy/create-provisional-product-scaffold.mjs. Per
// CLAUDE.md Part 4 (AI adjudication is the default) and the
// no-approval-gates rule, ingest does not stop when a needed ingredient
// page is missing. It creates a provisional scaffold with the 10
// HMTc-vocabulary metals all initialized to `status: pending` and a
// visible "Provisional scaffold" caveat at the top of the page body,
// then continues. The audit log at
// data/evidence/provisional-ingredient-scaffolds.jsonl records every
// scaffold so Karen can second-guess after the fact.
//
// Usage:
//   node tools/autonomy/create-provisional-ingredient-scaffold.mjs \
//     --slug fonio \
//     --title "Fonio" \
//     --category cereal-grain \
//     --reason "ingest of smith2025-fonio-iAs-cd declared ingredients/fonio which did not exist" \
//     --source-cite-key smith2025-fonio-iAs-cd
//
// Idempotent: if wiki/ingredients/<slug>.md already exists, exits 0.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
const auditLogPath = path.join(repoRoot, "data/evidence/provisional-ingredient-scaffolds.jsonl")
const today = new Date().toISOString().slice(0, 10)

// HMTc 10-analyte vocabulary per CLAUDE.md Part 14.
const HMTC_METALS = ["Pb", "tAs", "Cd", "MeHg", "tHg", "iAs", "Ni", "Al", "Cr-VI", "Sn"]

function parseArgs(argv) {
  const out = {}
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a.startsWith("--")) {
      const key = a.slice(2)
      const val = argv[i + 1] && !argv[i + 1].startsWith("--") ? argv[++i] : true
      out[key] = val
    }
  }
  return out
}

const args = parseArgs(process.argv.slice(2))
const slug = args.slug
const title = args.title
const category = args.category || "unclassified"
const reason = args.reason || "ingest declared an ingredient slug that did not yet exist"
const sourceCiteKey = args["source-cite-key"] || null

if (!slug || !title) {
  console.error("Usage: --slug <slug> --title <title> [--category <category>] [--reason <text>] [--source-cite-key <key>]")
  process.exit(2)
}

if (!/^[a-z0-9-]+$/.test(slug)) {
  console.error(`Invalid slug "${slug}": must be lowercase letters, digits, and hyphens only.`)
  process.exit(2)
}

const filePath = path.join(ingredientsDir, `${slug}.md`)
if (fs.existsSync(filePath)) {
  console.log(`exists: wiki/ingredients/${slug}.md`)
  process.exit(0)
}

const titleEscaped = title.replace(/"/g, '\\"')
const reasonEscaped = reason.replace(/"/g, '\\"')

const profileBlock = HMTC_METALS.map(
  (m) =>
    `  ${m}:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null`
).join("\n")

const frontmatter = `---
title: "${titleEscaped}"
type: ingredient
commodity: ${slug}
aliases: []
category: ${category}
provisional_scaffold: true
provisional_created: ${today}
provisional_reason: "${reasonEscaped}"
${sourceCiteKey ? `provisional_source: "[[sources/${sourceCiteKey}]]"\n` : ""}contamination_profile:
${profileBlock}
literature_scope: thin
updated: ${today}
---
`

const body = `
# ${title}

> **Provisional scaffold.** This page was created automatically on ${today} so that an ingested source could route to it. Aliases, category, and the contamination profile have not yet been populated. Content below is minimal until a synthesis pass consolidates the literature for this ingredient.
>
> **Reason:** ${reason}${sourceCiteKey ? `\n>\n> **Triggering source:** [[sources/${sourceCiteKey}]]` : ""}

## Literature scope

The literature corpus for this ingredient is currently thin. Sources route here as ingest proceeds; once enough sources accumulate per the Part 9 synthesis trigger (n_studies ≥ 2 per metal), the synthesis pass will populate the contamination profile.

## Sources

Sources for this page are listed below as they are catalogued.

<!-- BEGIN: source-legend -->
<!-- END: source-legend -->
`

fs.mkdirSync(ingredientsDir, { recursive: true })
fs.writeFileSync(filePath, frontmatter + body, "utf8")

const auditEntry = {
  ts: new Date().toISOString(),
  slug,
  title,
  category,
  reason,
  source_cite_key: sourceCiteKey,
  path: `wiki/ingredients/${slug}.md`,
}
fs.mkdirSync(path.dirname(auditLogPath), { recursive: true })
fs.appendFileSync(auditLogPath, JSON.stringify(auditEntry) + "\n", "utf8")

console.log(`created: wiki/ingredients/${slug}.md`)
console.log(`logged: data/evidence/provisional-ingredient-scaffolds.jsonl`)
