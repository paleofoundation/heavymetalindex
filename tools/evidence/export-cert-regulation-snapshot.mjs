#!/usr/bin/env node
// export-cert-regulation-snapshot.mjs  (HMI-side, firewall-clean)
//
// Reads the Heavy Metal Index regulatory register and emits ONE self-contained
// JSON snapshot of every food-contaminant instrument and its full multi-metal
// maximum-level table, for the heavymetalcertified.com regulation-reference
// generator to consume. The cert build never reads the HMI repo directly
// (Part-2 firewall + Vercel shallow-clone safety): HMI exports this snapshot,
// the snapshot is committed into the cert repo, and the cert generator reads the
// local copy. One-way: HMI -> snapshot -> cert. Cert is never read here.
//
// INPUT  : data/evidence/regulatory_limits.csv     (the canonical limit register)
//          wiki/regulations/<slug>.md              (per-instrument metadata + H1)
//          --curated PATH                           (curated-slug metadata, optional)
// OUTPUT : --out PATH (default data/regulatory/cert-regulation-snapshot.json)
//
// The 10 legacy cert pages keep their short slugs (already indexed); the CURATED
// map folds the register key(s) that make up each legacy instrument (EU 2023/915
// = its base reg + the Cd/Ni/iAs amendments; GB 2762 = 2022 + roll-up; C2Z = the
// FDA baby-food action levels). Every other food instrument that has a wiki page
// and at least one limit row becomes its own reference page at its register slug.

import fs from "node:fs"
import path from "node:path"
import { STATUS_GATE } from "../standards/lib/register-gate.mjs"

const REPO = process.cwd()
const args = process.argv.slice(2)
const flag = (n, d) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : d }
const REPORT = args.includes("--report")
const CSV = path.join(REPO, "data/evidence/regulatory_limits.csv")
const REG_DIR = path.join(REPO, "wiki/regulations")
const CURATED_META = flag("--curated", null)
const OUT = flag("--out", path.join(REPO, "data/regulatory/cert-regulation-snapshot.json"))

// Instruments whose limits are for a non-food matrix (never a food-cert floor). Logged, not silent.
const NONFOOD_SLUG_RX = /(cosmetic|colorant|residual-limits|toy|jewel|jewellery|drinking-water|gdwq|bottled-water|animal-feed|feed-heavy-metal|color-additive|colour-additive|packaging|migration|tableware|ceramic|adornment|student-articles|skin-|reach-|rohs|batteries|tattoo|textiles|surface-coating|consumer-products|childrens?-products|customs-prohibited|cannabis|dcc-|food-contact|body-face|face-powder|baby-powder|carbon-black|cpsia|cspa|tfca|toothpaste|candle|-mcls?\b|swrcb)/i

// Legacy cert short slug -> the register key(s) that constitute it (bare, no "regulations/").
const CURATED = {
  "eu-2023-915": ["eu2023-contaminants-maximum-levels", "eu-2023-915-cadmium", "eu-2024-1987-nickel-maximum-levels", "eu-2025-1891-inorganic-arsenic-fish-seafood", "eu2023-arsenic-rice-based-drinks"],
  "uk-1881-2006": ["uk-infant-food-contaminants"],
  "codex-cxs-193": ["codex-cxs-193-1995-tin-canned-foods", "codex-infant-food-contaminants"],
  "canada-contaminants": ["ca-infant-food-contaminants"],
  // GB 2762-2025 replaced GB 2762-2022 on 2026-09-02; the 2022 keys' rows are status-superseded and
  // are gated out below, so the page folds the in-force edition only.
  "china-gb-2762": ["china-gb-2762-2025-contaminants"],
  "india-fssai": ["india-fssai-2016-heavy-metals-third-amendment", "india-fssai-2015-chromium-gelatin-amendment"],
  "brazil-anvisa": ["br-infant-food-contaminants"],
  "gso-193": ["gso-193-2021-contaminants-toxins-food-feed"],
  "au-nz-fsanz": ["au-nz-food-standards-code-schedule-19-contaminants"],
  "us-fda-c2z": ["us-infant-food-contaminants", "fda2025-lead-processed-baby-foods", "fda2020-inorganic-arsenic-infant-rice-cereal", "fda2023-inorganic-arsenic-apple-juice", "fda2022-draft-lead-juice"],
}

function parseCSV(text) {
  const rows = []; let row = [], field = "", inQ = false
  for (let i = 0; i < text.length; i++) {
    const c = text[i]
    if (inQ) { if (c === '"') { if (text[i + 1] === '"') { field += '"'; i++ } else inQ = false } else field += c }
    else if (c === '"') inQ = true
    else if (c === ",") { row.push(field); field = "" }
    else if (c === "\n") { row.push(field); rows.push(row); row = []; field = "" }
    else if (c === "\r") { /* skip */ }
    else field += c
  }
  if (field.length || row.length) { row.push(field); rows.push(row) }
  return rows
}

function readWikiMeta(slug) {
  const f = path.join(REG_DIR, `${slug}.md`)
  if (!fs.existsSync(f)) return null
  const raw = fs.readFileSync(f, "utf8")
  const meta = {}
  const fm = raw.match(/^---\n([\s\S]*?)\n---/)
  if (fm) for (const line of fm[1].split("\n")) { const m = line.match(/^([a-z_]+):\s*(.*)$/i); if (m) meta[m[1]] = m[2].trim() }
  const h1 = raw.match(/^#\s+(.+)$/m)
  meta._h1 = h1 ? h1[1].trim() : null
  return meta
}

function rowsToLimits(grp, ci) {
  return grp.map((r) => ({
    analyte: (r[ci.metal] || "").trim(),
    value_ug_kg: Number(r[ci.val]),
    basis: (r[ci.basis] || "").trim(),
    scope: (r[ci.scope] || "").trim(),
    status: (r[ci.status] || "").trim(),
    url: (r[ci.url] || "").trim(),
    notes: (r[ci.notes] || "").trim(),
  })).filter((l) => l.analyte && Number.isFinite(l.value_ug_kg) && !STATUS_GATE.test(l.status))
  // Quarantined rows (status "quarantined-*", e.g. the Guyana ppb-table
  // transcription artifact) are excluded, matching the seafood compiler.
}

function build(instrument) {
  const { slug, limits, jurisdiction, authority, name, effective_date, instrument_status, primary_url, curated, regulation_keys } = instrument
  const metals = [...new Set(limits.map((l) => l.analyte))]
  const matrices = [...new Set(limits.map((l) => l.scope))].filter(Boolean)
  return { slug, curated: !!curated, regulation_keys, jurisdiction, authority, name, effective_date: effective_date || null, instrument_status: instrument_status || null, metals, matrices, row_count: limits.length, primary_url: primary_url || null, limits }
}

function main() {
  const rows = parseCSV(fs.readFileSync(CSV, "utf8"))
  const header = rows[0].map((h) => h.trim())
  const col = (n) => header.indexOf(n)
  const ci = { jur: col("jurisdiction"), auth: col("authority"), status: col("status"), metal: col("metal_species"), val: col("value_ug_kg"), basis: col("basis"), scope: col("product_scope"), page: col("regulation_page"), url: col("url"), notes: col("notes") }

  const groups = new Map()
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i]; if (!r || r.length < header.length) continue
    const page = (r[ci.page] || "").trim(); if (!page) continue
    const key = page.replace(/^regulations\//, "")
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(r)
  }

  const curatedMeta = CURATED_META && fs.existsSync(CURATED_META)
    ? Object.fromEntries((JSON.parse(fs.readFileSync(CURATED_META, "utf8")).instruments || []).map((i) => [i.slug, i]))
    : {}

  const claimed = new Set()
  const instruments = []
  const excluded = { nonfood: [], nowikipage: [], emptyCurated: [] }

  // 1) curated (legacy short-slug) instruments — fold their register keys
  for (const [slug, keys] of Object.entries(CURATED)) {
    const grp = []
    for (const k of keys) { if (groups.has(k)) { grp.push(...groups.get(k)); claimed.add(k) } }
    const limits = rowsToLimits(grp, ci)
    if (!limits.length) { excluded.emptyCurated.push(slug); continue }
    const cm = curatedMeta[slug] || {}
    const wiki = keys.map(readWikiMeta).find(Boolean) || {}
    instruments.push(build({
      slug, curated: true, regulation_keys: keys,
      jurisdiction: cm.jurisdiction || (grp[0] && grp[0][ci.jur] || "").trim(),
      authority: cm.body || (grp[0] && grp[0][ci.auth] || "").trim(),
      name: cm.name || wiki._h1 || slug,
      effective_date: wiki.effective_date && wiki.effective_date !== "null" ? wiki.effective_date : null,
      instrument_status: cm.status || wiki.status || null,
      primary_url: cm.url || (limits.find((l) => l.url) || {}).url || null,
      limits,
    }))
  }

  // 2) every other food instrument that has a wiki page + rows -> its own page
  for (const [key, grp] of groups) {
    if (claimed.has(key)) continue
    if (NONFOOD_SLUG_RX.test(key)) { excluded.nonfood.push(`${key} (${grp.length})`); continue }
    const wiki = readWikiMeta(key)
    if (!wiki) { excluded.nowikipage.push(`${key} (${grp.length})`); continue }
    const limits = rowsToLimits(grp, ci)
    if (!limits.length) continue
    instruments.push(build({
      slug: key, curated: false, regulation_keys: [key],
      jurisdiction: (grp[0][ci.jur] || "").trim() || wiki.jurisdiction || "",
      authority: (grp[0][ci.auth] || "").trim() || wiki.agency || "",
      name: wiki._h1 || key,
      effective_date: wiki.effective_date && wiki.effective_date !== "null" ? wiki.effective_date : null,
      instrument_status: wiki.status || null,
      primary_url: (limits.find((l) => l.url) || {}).url || null,
      limits,
    }))
  }

  instruments.sort((a, b) => (a.curated === b.curated ? b.row_count - a.row_count : a.curated ? -1 : 1))

  if (REPORT) {
    const tot = instruments.reduce((s, i) => s + i.row_count, 0)
    console.log(`\nInstruments: ${instruments.length}  (${instruments.filter(i => i.curated).length} curated, ${instruments.filter(i => !i.curated).length} new)  rows ${tot}`)
    console.log(`Excluded  non-food:${excluded.nonfood.length}  no-wiki-page:${excluded.nowikipage.length}  empty-curated:${excluded.emptyCurated.join(",") || "none"}`)
    console.log(`\nCurated (slug preserved | rows | metals):`)
    for (const i of instruments.filter(x => x.curated)) console.log(`  ${String(i.row_count).padStart(4)}  ${i.slug.padEnd(22)} ${i.metals.join("/")}`)
    console.log(`\nNew pages, top 20 by rows:`)
    for (const i of instruments.filter(x => !x.curated).slice(0, 20)) console.log(`  ${String(i.row_count).padStart(4)}  ${i.slug}`)
    return
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true })
  fs.writeFileSync(OUT, JSON.stringify({ generated: new Date().toISOString().slice(0, 10), source: "heavymetalindex data/evidence/regulatory_limits.csv", instrument_count: instruments.length, instruments }, null, 1))
  console.log(`export-cert-regulation-snapshot: ${instruments.length} instruments, ${instruments.reduce((s, i) => s + i.row_count, 0)} rows -> ${OUT}`)
}

main()
