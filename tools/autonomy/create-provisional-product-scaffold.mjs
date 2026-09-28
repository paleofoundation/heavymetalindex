#!/usr/bin/env node
// Create a provisional product page scaffold when an ingest declares a
// product slug that does not yet exist.
//
// Per CLAUDE.md Part 4 (AI adjudication is the default) and the
// no-approval-gates rule, ingest does not stop and wait for Karen to
// lock a new product row. It creates a provisional scaffold with
// `hmtc_category: pending_taxonomy_review` and a visible "Provisional
// scaffold" caveat at the top of the page body, then continues. The
// audit log at data/evidence/provisional-product-scaffolds.jsonl
// records every scaffold so Karen can second-guess after the fact.
//
// Usage:
//   node tools/autonomy/create-provisional-product-scaffold.mjs \
//     --slug rice-noodles \
//     --title "Rice Noodles" \
//     --reason "ingest of li2024-rice-noodle-iAs declared products/rice-noodles which did not exist" \
//     --source-cite-key li2024-rice-noodle-iAs
//
// Idempotent: if wiki/products/<slug>.md already exists, the script
// exits 0 and prints "exists" without modifying the file.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const productsDir = path.join(repoRoot, "wiki/products")
const auditLogPath = path.join(repoRoot, "data/evidence/provisional-product-scaffolds.jsonl")
const today = new Date().toISOString().slice(0, 10)

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
const reason = args.reason || "ingest declared a product slug that did not yet exist"
const sourceCiteKey = args["source-cite-key"] || null

if (!slug || !title) {
  console.error("Usage: --slug <slug> --title <title> [--reason <text>] [--source-cite-key <key>]")
  process.exit(2)
}

if (!/^[a-z0-9-]+$/.test(slug)) {
  console.error(`Invalid slug "${slug}": must be lowercase letters, digits, and hyphens only.`)
  process.exit(2)
}

const filePath = path.join(productsDir, `${slug}.md`)
if (fs.existsSync(filePath)) {
  console.log(`exists: wiki/products/${slug}.md`)
  process.exit(0)
}

const titleEscaped = title.replace(/"/g, '\\"')
const reasonEscaped = reason.replace(/"/g, '\\"')

const frontmatter = `---
type: product-category
category: ${slug}
title: "${titleEscaped}"
hmtc_category: pending_taxonomy_review
hmtc_row: pending_taxonomy_review
provisional_scaffold: true
provisional_created: ${today}
provisional_reason: "${reasonEscaped}"
${sourceCiteKey ? `provisional_source: "[[sources/${sourceCiteKey}]]"\n` : ""}primary_metals_of_concern: []
typical_ingredients: []
applicable_regulations: []
literature_scope: thin
updated: ${today}
---
`

const body = `
# ${title}

> **Provisional scaffold.** This page was created automatically on ${today} so that an ingested source could route to it. The HMTc taxonomy row, clean/contaminated pairing, primary metals of concern, and detailed scope have not yet been locked. Content below is minimal until a synthesis pass or taxonomy review consolidates the literature for this product class.
>
> **Reason:** ${reason}${sourceCiteKey ? `\n>\n> **Triggering source:** [[sources/${sourceCiteKey}]]` : ""}

## Literature scope

The literature for this product class is still thin. As more studies are read, the literature summary and source list on this page fill in.

## Sources

Sources for this page are listed below as they are catalogued.

<!-- BEGIN: source-legend -->
<!-- END: source-legend -->
`

fs.mkdirSync(productsDir, { recursive: true })
fs.writeFileSync(filePath, frontmatter + body, "utf8")

const auditEntry = {
  ts: new Date().toISOString(),
  slug,
  title,
  reason,
  source_cite_key: sourceCiteKey,
  path: `wiki/products/${slug}.md`,
}
fs.mkdirSync(path.dirname(auditLogPath), { recursive: true })
fs.appendFileSync(auditLogPath, JSON.stringify(auditEntry) + "\n", "utf8")

console.log(`created: wiki/products/${slug}.md`)
console.log(`logged: data/evidence/provisional-product-scaffolds.jsonl`)
