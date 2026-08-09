#!/usr/bin/env node
// Batch dedup: collapse every duplicate-DOI source cluster (from
// data/evidence/doi-collision-summary.json) to one canonical cite-key.
//
// For each cluster it: (1) folds safe provenance fields from the dropped pages
// into the canonical page's frontmatter where the canonical lacks them, by
// inserting the dropped page's EXACT frontmatter line (no YAML reformat);
// (2) deletes the dropped pages; (3) repoints live [[sources/<drop>]] wikilinks
// and bare cite-key strings to the canonical, across non-generated wiki pages and
// the value/evidence registers, leaving immutable run-logs and self-regenerating
// artifacts (legends, routing, dossiers) to their generators.
//
// Canonical selection is taken from the audit, with manual OVERRIDES below for the
// clusters where the audit's ref-count heuristic picked a mis-parsed author key,
// and EXCLUDES for pages that share a DOI but are a different work (wrong-DOI
// mis-ingest — must not be deleted).
//
// Usage: node tools/dedup-doi-clusters.mjs [--apply]   (default: dry-run)

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const repoRoot = process.cwd()
const sourcesDir = path.join(repoRoot, "wiki/sources")
const apply = process.argv.includes("--apply")

// Verified against Crossref (2026-06-14):
const OVERRIDES = {
  // foods9121839 = Su, 2020 (not the mis-parsed "Chung 2021")
  "10.3390/foods9121839": { canonical: "su2020-infant-formula-china-toxic-elements" },
  // real surname Ćwieląg-Drabek -> the hyphenated key, not "cwielagniec"
  "10.1007/s12011-024-04438-4": { canonical: "cwielag-drabek2025-nuts-cd-pb-cr-ni-poland" },
  // ehp.1408789 = "Estimated Exposure...Breastfed and Formula-Fed Infants" (Carignan 2015).
  // RESOLVED 2026-08-09 (title-mismatch DOI sweep): the "...Well Water and Breast Milk"
  // page was the Schmidt commentary (real DOI 10.1289/ehp.123-a137, raw FM_4421759)
  // mis-keyed under Carignan with the Carignan DOI. It duplicated the correctly-keyed
  // schmidt2015-arsenic-infancy-commentary, so it was deleted (its FM_4421759 raw moved
  // to schmidt2015, whose stale FM_5322685 jujube-RCT raw_handle was corrected). No
  // exclude needed now — only the canonical Carignan page carries ehp.1408789.
  // s10653-023-01514-x: RESOLVED 2026-08-09 (title-mismatch DOI sweep). The drop
  // page romero-crespo2023-ecuador-mining-crops-metals carried a divergent title
  // ("Heavy metals in soils and crops in a mining area of Ecuador") and a wrong
  // author list, so it was held pending verification. Its raw PDF
  // (raw/studies/romero-crespo2023-ecuador-mining-crops-metals.pdf) was extracted
  // and IS the 01514-x paper "Trace elements in farmland soils and crops..."
  // (Romero-Crespo, Jiménez-Oyola et al.); no paper matching the divergent
  // title/authors exists in Crossref. The DOI was correct; the frontmatter
  // title/authors were fabricated. It is a provable duplicate of the canonical
  // romero-crespo2023-trace-elements-crops-ecuador-mining and is collapsed.
}

// Frontmatter fields safe to fold from a dropped page into the canonical when the
// canonical lacks them. Single-line scalars/flow-lists only (copied verbatim).
const ENRICH = ["raw_handle", "raw_path", "pdf_path", "access_url", "license", "sample_n", "sample_population", "matrices"]

// Roots whose live wikilinks / bare cite-keys we repoint. Immutable run-logs and
// the source page being deleted are excluded.
const REPOINT_EXCLUDE =
  /(?:codex-runs|daemon-runs|review_events\.jsonl|healing-report|ingest-batch|extraction-unparseable|wiki\/log\.md|\/batch-reports\/)/

// ---- index cite_key -> file ----
const keyToFile = new Map()
for (const f of fs.readdirSync(sourcesDir)) {
  if (!f.endsWith(".md")) continue
  let fm
  try {
    fm = matter(fs.readFileSync(path.join(sourcesDir, f), "utf8")).data
  } catch {
    continue
  }
  keyToFile.set((fm.cite_key || f.replace(/\.md$/, "")).trim(), f)
}

// ---- build plan ----
const summary = JSON.parse(fs.readFileSync(path.join(repoRoot, "data/evidence/doi-collision-summary.json"), "utf8"))
const plan = []
for (const c of summary.clusters) {
  const ov = OVERRIDES[c.doi] || {}
  const canonical = ov.canonical || c.canonical
  const exclude = ov.exclude || []
  const drops = c.members.map((m) => m.cite_key).filter((k) => k !== canonical && !exclude.includes(k))
  if (!drops.length) continue
  plan.push({ doi: c.doi, canonical, drops, exclude })
}

// drop -> canonical map, drops sorted longest-first (substring safety)
const dropToCanon = new Map()
for (const p of plan) for (const d of p.drops) dropToCanon.set(d, p.canonical)
const dropsByLen = [...dropToCanon.keys()].sort((a, b) => b.length - a.length)

// ---- frontmatter enrichment (surgical line insert) ----
function enrichCanonical(p) {
  const cf = keyToFile.get(p.canonical)
  if (!cf) {
    console.error(`  !! canonical file not found for ${p.canonical}`)
    return []
  }
  const cPath = path.join(sourcesDir, cf)
  let cText = fs.readFileSync(cPath, "utf8")
  const m = cText.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return []
  let fmBlock = m[1]
  const added = []
  for (const d of p.drops) {
    const df = keyToFile.get(d)
    if (!df) continue
    const dText = fs.readFileSync(path.join(sourcesDir, df), "utf8")
    const dm = dText.match(/^---\n([\s\S]*?)\n---/)
    if (!dm) continue
    for (const key of ENRICH) {
      const has = new RegExp(`^${key}:\\s*\\S`, "m").test(fmBlock)
      if (has) continue
      const line = dm[1].match(new RegExp(`^${key}:.*$`, "m"))
      if (!line) continue
      // insert after cite_key line (or at top of block)
      if (/^cite_key:.*$/m.test(fmBlock)) fmBlock = fmBlock.replace(/^(cite_key:.*)$/m, `$1\n${line[0]}`)
      else fmBlock = `${line[0]}\n${fmBlock}`
      added.push(`${p.canonical} += ${line[0]}`)
    }
  }
  if (added.length && apply) {
    cText = cText.replace(/^---\n[\s\S]*?\n---/, `---\n${fmBlock}\n---`)
    fs.writeFileSync(cPath, cText)
  }
  return added
}

// ---- repoint references in one file ----
function repointFile(absPath) {
  if (REPOINT_EXCLUDE.test(absPath)) return 0
  let txt
  try {
    txt = fs.readFileSync(absPath, "utf8")
  } catch {
    return 0
  }
  let out = txt
  for (const d of dropsByLen) {
    const canon = dropToCanon.get(d)
    if (!out.includes(d)) continue
    // wikilinks: [[sources/<d>  and  sources/<d>.md
    out = out.split(`sources/${d}`).join(`sources/${canon}`)
    // bare cite-key occurrences, boundary-anchored (avoid partial-key hits)
    out = out.replace(new RegExp(`(^|[^\\w-])${d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\w-])`, "g"), (mm, p1) => `${p1}${canon}`)
  }
  if (out !== txt) {
    if (apply) fs.writeFileSync(absPath, out)
    return 1
  }
  return 0
}

function walk(dir, acc) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      if (/node_modules|\.git|public/.test(full)) continue
      walk(full, acc)
    } else if (/\.(md|csv|json|jsonl|txt)$/.test(e.name)) acc.push(full)
  }
  return acc
}

// ---- execute ----
console.log(`DOI-cluster dedup ${apply ? "(APPLY)" : "(dry-run)"} — ${plan.length} clusters, ${dropToCanon.size} pages to drop\n`)

let enrichTotal = 0
for (const p of plan) {
  const added = enrichCanonical(p)
  enrichTotal += added.length
  console.log(`${p.doi}\n  KEEP ${p.canonical}\n  DROP ${p.drops.join(", ")}${p.exclude.length ? `\n  EXCLUDE(wrong-DOI) ${p.exclude.join(", ")}` : ""}`)
  for (const a of added) console.log(`       enrich: ${a}`)
}

// delete dropped pages
let deleted = 0
for (const d of dropToCanon.keys()) {
  const f = keyToFile.get(d)
  if (!f) {
    console.error(`  !! drop file not found: ${d}`)
    continue
  }
  if (apply) fs.rmSync(path.join(sourcesDir, f))
  deleted++
}

// Clean-base worktree (off origin/main): there is no parallel drift to avoid, so
// repoint EVERY referencing file to leave zero dead [[sources/<drop>]] links in the
// committed tree — including surviving source pages (a canonical referencing a
// dropped sibling) and the generated corpus/static trees (repointed now so the tree
// is link-clean before the deploy's prebuild regenerates them). Only dated lint
// reports are skipped; immutable run-logs are still excluded by REPOINT_EXCLUDE.
const REPOINT_SKIP_DIR = /wiki\/lint\//
const files = walk(path.join(repoRoot, "wiki"), [])
  .filter((f) => /\.(md|json)$/.test(f) && !REPOINT_SKIP_DIR.test(f))
const valuesPath = path.join(repoRoot, "data/evidence/values.jsonl")
if (fs.existsSync(valuesPath)) files.push(valuesPath)
let repointed = 0
for (const f of files) repointed += repointFile(f)

console.log(`\nSummary: ${plan.length} clusters | ${deleted} pages ${apply ? "deleted" : "to delete"} | ${enrichTotal} frontmatter fields ${apply ? "folded" : "to fold"} | ${repointed} files ${apply ? "repointed" : "to repoint"}`)
if (!apply) console.log("\n(dry-run — re-run with --apply to execute)")
