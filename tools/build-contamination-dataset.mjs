#!/usr/bin/env node
// Build the public contamination dataset that powers /api/contamination.
//
// Scans wiki/ingredients/*.md, extracts the structured `contamination_profile`
// block from each, and emits a single JSON artifact at
// public/static/contamination.json. The /api/contamination Vercel function
// reads this artifact at request time to answer queries.
//
// This is the first step toward the api.heavymetalindex.com surface named
// in wiki/roadmap.md. Today's contract is read-only and per-ingredient;
// future versions will add per-product, per-jurisdiction, time-series, and
// sub-national geographic queries as the underlying structured layer fills
// in those slots (sampling_locations, sampling_year_range — see
// tools/migrate-future-slots.mjs).

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const ingredientsDir = path.join(repoRoot, "wiki/ingredients")
// Written into wiki/static/ so Quartz's Assets emitter copies it to
// public/static/ at build time — public/ is cleaned by Quartz at the start
// of the build, so prebuild outputs need to live under wiki/static/ to
// survive into the deploy artifact.
const outputPath = path.join(repoRoot, "wiki/static/contamination.json")
const generatedAt = new Date().toISOString()

fs.mkdirSync(path.dirname(outputPath), { recursive: true })

const records = []
const files = fs.readdirSync(ingredientsDir).filter((f) => f.endsWith(".md") && f !== "index.md" && !f.startsWith("_"))

for (const file of files) {
  const slug = file.replace(/\.md$/, "")
  const raw = fs.readFileSync(path.join(ingredientsDir, file), "utf8")
  const fm = matter(raw).data
  if (!fm.contamination_profile || typeof fm.contamination_profile !== "object") continue

  // Skip provisional / stub pages that don't yet have populated values for any
  // metal. They are routing destinations, not data records.
  const metals = {}
  let anyPopulated = false
  for (const [metal, cell] of Object.entries(fm.contamination_profile)) {
    if (!cell || typeof cell !== "object") continue
    metals[metal] = {
      status: cell.status || "pending",
      typical_ppb: cell.typical_ppb ?? null,
      p95_ppb: cell.p95_ppb ?? null,
      confidence: cell.confidence ?? null,
      n_studies: cell.n_studies ?? null,
      last_reviewed: toIsoDate(cell.last_reviewed),
    }
    if (cell.status === "populated" || cell.status === "in_progress") anyPopulated = true
  }
  if (!anyPopulated) continue

  records.push({
    ingredient: slug,
    title: fm.title || slug,
    commodity: fm.commodity || slug,
    category: fm.category || null,
    aliases: Array.isArray(fm.aliases) ? fm.aliases : [],
    wiki_doi: fm.wiki_doi ?? null,
    page_url: `https://heavymetalindex.com/ingredients/${slug}`,
    sources_count: typeof fm.sources === "number" ? fm.sources : null,
    last_updated: toIsoDate(fm.updated),
    metals,
  })
}

records.sort((a, b) => a.ingredient.localeCompare(b.ingredient))

const dataset = {
  generated_at: generatedAt,
  schema_version: "1.0.0",
  license: {
    prose: "CC BY 4.0",
    structured_data: "EU database rights reserved — see https://heavymetalindex.com/licensing",
    contact: "karen@paleofoundation.com",
  },
  attribution: "Heavy Metal Index (heavymetalindex.com), Institute of Contaminant Standards (ICS). Cite the page URL or wiki_doi.",
  record_count: records.length,
  records,
}

fs.writeFileSync(outputPath, JSON.stringify(dataset, null, 2) + "\n", "utf8")
console.log(`build-contamination-dataset: wrote ${records.length} ingredient records → ${path.relative(repoRoot, outputPath)}`)

function toIsoDate(value) {
  if (!value) return null
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  const s = String(value).trim()
  if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10)
  const parsed = new Date(s)
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10)
  return null
}
