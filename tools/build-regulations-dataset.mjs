#!/usr/bin/env node
// Build public/static/regulations.json — the structured corpus the
// /api/regulations endpoint serves.
//
// Reads frontmatter from every wiki/regulations/<slug>.md page, drops the
// auto-generated index/by-jurisdiction/timeline rollups, normalises array
// fields, and emits a stable JSON envelope with the same license and
// schema-version discipline as public/static/contamination.json.
//
// Runs in prebuild. Output is committed via the build, not by hand.

import fs from "node:fs"
import path from "node:path"
import yaml from "js-yaml"

const repoRoot = process.cwd()
const regsDir = path.join(repoRoot, "wiki/regulations")
// Written into wiki/static/ so Quartz's Assets emitter copies it to
// public/static/ at build time (matching hmi-percentile-context.json). The
// /api/regulations endpoint reads from the deployed /static/ URL with a
// bundled local fallback at ../wiki/static/regulations.json.
const outPath = path.join(repoRoot, "wiki/static/regulations.json")
const CANONICAL_BASE = "https://heavymetalindex.com"

const SKIP_SLUGS = new Set([
  "index",
  "by-jurisdiction",
  "by-metal",
  "by-matrix",
  "timeline",
])

const LICENSE = {
  prose: "CC BY 4.0",
  structured_data: "EU database rights reserved — see https://heavymetalindex.com/licensing",
  attribution:
    "Heavy Metal Index (heavymetalindex.com), Institute of Contaminant Standards (ICS). Cite page_url or wiki_doi.",
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!match) return {}
  try { return yaml.load(match[1]) || {} } catch { return {} }
}

function asList(value) {
  if (value === undefined || value === null) return []
  if (Array.isArray(value)) return value.flatMap((v) => (v === undefined || v === null ? [] : [String(v)]))
  return [String(value)]
}

function extractSourceRefs(sourceRefs) {
  return asList(sourceRefs)
    .map((ref) => {
      const m = ref.match(/\[\[(?:sources\/)?([^\]|]+)\]\]/)
      return m ? `sources/${m[1].replace(/^sources\//, "")}` : ref
    })
    .filter(Boolean)
}

function walk(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) continue
    if (!entry.name.endsWith(".md")) continue
    const slug = entry.name.replace(/\.md$/, "")
    if (SKIP_SLUGS.has(slug)) continue
    out.push({ slug, fullPath: path.join(dir, entry.name) })
  }
  return out
}

const records = []
for (const { slug, fullPath } of walk(regsDir)) {
  const raw = fs.readFileSync(fullPath, "utf8")
  const fm = parseFrontmatter(raw)
  if (fm.type && fm.type !== "regulation") continue
  records.push({
    slug: `regulations/${slug}`,
    rule_id: fm.rule_id || slug,
    title: fm.title || slug,
    jurisdiction: fm.jurisdiction || null,
    jurisdictions: asList(fm.jurisdictions || fm.jurisdiction),
    agency: fm.agency || null,
    program: fm.program || null,
    metal: fm.metal || null,
    metals: asList(fm.metals || fm.metal),
    matrix: fm.matrix || null,
    matrices: asList(fm.matrices || fm.matrix),
    limit_value: fm.limit_value ?? null,
    limit_unit: fm.limit_unit || null,
    status: fm.status || null,
    effective_date: fm.effective_date || null,
    sunset_date: fm.sunset_date || null,
    source_refs: extractSourceRefs(fm.source_refs),
    audience: asList(fm.audience),
    wiki_doi: fm.wiki_doi || null,
    page_url: `${CANONICAL_BASE}/regulations/${slug}`,
    updated: fm.updated || null,
  })
}

records.sort((a, b) => a.slug.localeCompare(b.slug))

const payload = {
  generated_at: new Date().toISOString(),
  schema_version: "1.0.0",
  license: LICENSE,
  attribution: LICENSE.attribution,
  canonical_base: CANONICAL_BASE,
  record_count: records.length,
  records,
}

fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, JSON.stringify(payload, null, 2) + "\n", "utf8")
console.error(`[regulations-dataset] wrote ${records.length} records to ${outPath}`)
