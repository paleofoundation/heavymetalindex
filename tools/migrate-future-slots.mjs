#!/usr/bin/env node
// Add future-proofing slots to wiki page frontmatter:
//   - All citable page types (source / ingredient / product / metal / regulation
//     / synthesis): `wiki_doi: null` — placeholder for the Heavy Metal Index
//     page's own DataCite DOI, minted via a later config switch. Distinct
//     from the existing `doi:` field on source pages (which refers to the
//     underlying paper's DOI). Adding the slot now means external citers
//     can start depending on the field path before values arrive.
//   - Source pages additionally: `sampling_locations: []` (sub-national:
//     province / prefecture / state / district) and `sampling_year_range: null`
//     ("2017-2019" or null). Sub-national geo + sampling-year-vs-publication-year
//     separation is the foundation for the contamination map and time-series
//     surfaces named in the 10-year roadmap (wiki/roadmap.md).
//
// Idempotent. Skips files whose frontmatter already declares the field.
// Preserves existing YAML formatting (no gray-matter round-trip) — splices
// new lines in just before the closing `---` of the frontmatter block.
//
// Audit log: writes one row per touched page to
// data/evidence/migrations/future-slots-<date>.csv so a future reader can
// reconstruct the migration without git archaeology.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const today = new Date().toISOString().slice(0, 10)

const TARGETS = [
  { dir: "wiki/sources", kind: "source", fields: [
    { key: "wiki_doi", value: "null", check: /^wiki_doi:/m },
    { key: "sampling_locations", value: "[]", check: /^sampling_locations:/m },
    { key: "sampling_year_range", value: "null", check: /^sampling_year_range:/m },
  ]},
  { dir: "wiki/ingredients", kind: "ingredient", fields: [
    { key: "wiki_doi", value: "null", check: /^wiki_doi:/m },
  ]},
  { dir: "wiki/products", kind: "product", fields: [
    { key: "wiki_doi", value: "null", check: /^wiki_doi:/m },
  ]},
  { dir: "wiki/metals", kind: "metal", fields: [
    { key: "wiki_doi", value: "null", check: /^wiki_doi:/m },
  ]},
  { dir: "wiki/regulations", kind: "regulation", fields: [
    { key: "wiki_doi", value: "null", check: /^wiki_doi:/m },
  ]},
  { dir: "wiki/synthesis", kind: "synthesis", fields: [
    { key: "wiki_doi", value: "null", check: /^wiki_doi:/m },
  ]},
]

const args = process.argv.slice(2)
const dryRun = args.includes("--dry-run")

const auditDir = path.join(repoRoot, "data/evidence/migrations")
fs.mkdirSync(auditDir, { recursive: true })
const auditPath = path.join(auditDir, `future-slots-${today}.csv`)
const auditRows = ["file,kind,fields_added"]

let touched = 0
let scanned = 0
let alreadyMigrated = 0
let noFrontmatter = 0

for (const target of TARGETS) {
  const dir = path.join(repoRoot, target.dir)
  if (!fs.existsSync(dir)) continue
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md") && f !== "index.md" && !f.startsWith("_"))
  for (const file of files) {
    scanned += 1
    const filePath = path.join(dir, file)
    const raw = fs.readFileSync(filePath, "utf8")
    const fmMatch = raw.match(/^---\n([\s\S]*?)\n---\n/)
    if (!fmMatch) { noFrontmatter += 1; continue }

    // Skip auto-generated pages (e.g. by-jurisdiction, timeline) — they're
    // derived views, not citable atomic units, and shouldn't carry DOIs.
    if (/^auto_generated:\s*true\b/m.test(fmMatch[1])) continue

    const fm = fmMatch[1]
    const missing = target.fields.filter((f) => !f.check.test(fm))
    if (missing.length === 0) { alreadyMigrated += 1; continue }

    // Splice the missing fields in just before the closing `---`.
    // Insert before `updated:` if it exists (so new slots cluster with
    // schema-tracking fields), otherwise append to the end of frontmatter.
    let newFm = fm
    const inserts = missing.map((f) => `${f.key}: ${f.value}`).join("\n")
    if (/^updated:/m.test(newFm)) {
      newFm = newFm.replace(/^(updated:.*)$/m, `${inserts}\n$1`)
    } else {
      newFm = `${newFm}\n${inserts}`
    }

    const newRaw = `---\n${newFm}\n---\n` + raw.slice(fmMatch[0].length)
    if (!dryRun) fs.writeFileSync(filePath, newRaw, "utf8")
    touched += 1
    auditRows.push(`${path.relative(repoRoot, filePath)},${target.kind},"${missing.map((m) => m.key).join(";")}"`)
  }
}

if (!dryRun) fs.writeFileSync(auditPath, auditRows.join("\n") + "\n", "utf8")

console.log(`migrate-future-slots: ${dryRun ? "DRY-RUN" : "EXECUTED"}`)
console.log(`  scanned:          ${scanned}`)
console.log(`  touched:          ${touched}`)
console.log(`  already migrated: ${alreadyMigrated}`)
console.log(`  no frontmatter:   ${noFrontmatter}`)
if (!dryRun && touched > 0) {
  console.log(`  audit:            ${path.relative(repoRoot, auditPath)}`)
}
