#!/usr/bin/env node
// Audit: detect source pages that share a DOI (duplicate-paper clusters).
//
// Why this exists: the OCR/auto-ingest pipeline has repeatedly created multiple
// source pages for the SAME paper, each under a different cite-key. Many of the
// duplicate keys are OCR title-FRAGMENT artifacts ("open2017-...", "abstract2020-...",
// "introduction2025-...", "editor2019-...") rather than author-year keys. Each
// duplicate inflates the paper's representation across legend tables and routing,
// and reads as defensibility noise (one paper cited under N keys). Two one-off
// dedups (Hasan 2022, Signes-Pastor 2018) drained the worst clusters by hand;
// this audit makes the whole class visible and standing.
//
// What it does: groups wiki/sources/*.md by normalized DOI and reports every DOI
// carried by >1 source page. For each cluster it ranks the members to suggest a
// canonical (most inbound references, then richest frontmatter, then a non-garbage
// author-year cite-key) and flags the rest as merge-and-delete candidates. It is a
// REPORT + lint gate; it does not mutate anything. Adjudication and deletion stay a
// human/operator decision (a shared DOI can occasionally be legitimately reused,
// e.g. a correction notice, and a confabulated page can carry a WRONG DOI that this
// audit will not cluster — title/author review still required before deleting).
//
// Output:
//   data/evidence/doi-collision-audit.csv     one row per (doi, cite_key)
//   data/evidence/doi-collision-summary.json  machine-readable clusters + suggestions
// Exit code: 0 always under --warn-only (default in prebuild while the backlog
// drains); non-zero when clusters exist if run as a hard gate (no --warn-only).

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { looksGarbageKey, authorPrefix } from "./lib/cite-key-validity.mjs"

const repoRoot = process.cwd()
const sourcesDir = path.join(repoRoot, "wiki/sources")
const args = process.argv.slice(2)
const warnOnly = args.includes("--warn-only")
const quiet = args.includes("--quiet")

// Directories whose hits count as INBOUND references when ranking canonical.
// Excludes immutable run logs (those preserve history and must not drive ranking).
const REF_ROOTS = ["wiki", "data/evidence"]
const REF_EXCLUDE = /(?:codex-runs|daemon-runs|review_events|healing-report|ingest-batch|extraction-unparseable|\/log\.md$|batch-reports\/|briefings\/)/

function normalizeDoi(raw) {
  if (!raw) return null
  let d = String(raw).trim().toLowerCase()
  d = d.replace(/^https?:\/\/(dx\.)?doi\.org\//, "")
  d = d.replace(/^doi:\s*/, "")
  if (!d || d === "null" || d === "none" || d === "n/a" || d === "unknown") return null
  return d
}

// looksGarbageKey() and authorPrefix() now live in ./lib/cite-key-validity.mjs
// (single source of truth for the garbage-lead vocabulary, shared with the
// ingest gates and tools/build-triage-manifest.py). Imported above.

// ---- read source frontmatter ----
const pages = []
for (const f of fs.readdirSync(sourcesDir)) {
  if (!f.endsWith(".md")) continue
  const full = path.join(sourcesDir, f)
  let fm
  try {
    fm = matter(fs.readFileSync(full, "utf8")).data
  } catch {
    continue
  }
  const doi = normalizeDoi(fm.doi)
  if (!doi) continue
  const citeKey = (fm.cite_key || f.replace(/\.md$/, "")).trim()
  pages.push({
    file: f,
    citeKey,
    doi,
    title: (fm.title || "").toString().replace(/\s+/g, " ").trim(),
    year: fm.year ?? null,
    authors: Array.isArray(fm.authors) ? fm.authors.length : fm.authors ? 1 : 0,
    richness: Object.keys(fm).length,
    raw_handle: fm.raw_handle || null,
  })
}

// ---- group by DOI ----
const byDoi = new Map()
for (const p of pages) {
  if (!byDoi.has(p.doi)) byDoi.set(p.doi, [])
  byDoi.get(p.doi).push(p)
}
const clusters = [...byDoi.entries()]
  .filter(([, v]) => v.length > 1)
  .map(([doi, members]) => ({ doi, members }))

// ---- count inbound references for cluster members (only when clusters exist) ----
function refCount(citeKey) {
  // Build a cheap recursive grep across REF_ROOTS, minus the source page itself
  // and the immutable logs. Best-effort; ranking only.
  let count = 0
  const stack = REF_ROOTS.map((r) => path.join(repoRoot, r))
  while (stack.length) {
    const dir = stack.pop()
    let entries
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true })
    } catch {
      continue
    }
    for (const e of entries) {
      const full = path.join(dir, e.name)
      if (e.isDirectory()) {
        stack.push(full)
        continue
      }
      if (REF_EXCLUDE.test(full)) continue
      if (full.endsWith(`wiki/sources/${citeKey}.md`)) continue // self
      if (!/\.(md|csv|json|jsonl|txt)$/.test(e.name)) continue
      let txt
      try {
        txt = fs.readFileSync(full, "utf8")
      } catch {
        continue
      }
      if (txt.includes(citeKey)) {
        // count occurrences
        let idx = 0
        while ((idx = txt.indexOf(citeKey, idx)) !== -1) {
          count++
          idx += citeKey.length
        }
      }
    }
  }
  return count
}

for (const c of clusters) {
  for (const m of c.members) {
    m.refs = refCount(m.citeKey)
    m.garbage = looksGarbageKey(m.citeKey)
    m.authorPrefix = m.garbage ? "" : authorPrefix(m.citeKey)
  }
  // Rank canonical: a defensible author-year key ALWAYS beats an OCR-fragment key,
  // regardless of inbound ref-count (an OCR-artifact cite-key as the canonical
  // citation is worse than the duplicate it would replace). Only among keys of the
  // same garbage status do we then prefer most inbound refs, richest frontmatter,
  // and the longer/more-descriptive key.
  c.members.sort((a, b) => {
    if (a.garbage !== b.garbage) return a.garbage ? 1 : -1
    if (b.refs !== a.refs) return b.refs - a.refs
    if (b.richness !== a.richness) return b.richness - a.richness
    return b.citeKey.length - a.citeKey.length
  })
  c.canonical = c.members[0]
  c.drop = c.members.slice(1)
  // Confidence HIGH when the merge is safe to automate: canonical is a non-garbage
  // author-year key, and every NON-garbage member shares that author surname (so
  // the cluster is not a DOI collision between two different first authors).
  // REVIEW when canonical is still garbage (no clean key exists) or a non-garbage
  // member names a different author -> a human confirms same-paper before deleting.
  const canonAuthor = c.canonical.authorPrefix
  const authorClash = c.drop.some(
    (d) => !d.garbage && d.authorPrefix && canonAuthor && d.authorPrefix !== canonAuthor &&
      !d.authorPrefix.startsWith(canonAuthor) && !canonAuthor.startsWith(d.authorPrefix),
  )
  c.confidence = !c.canonical.garbage && !authorClash ? "high" : "review"
}

clusters.sort((a, b) => b.members.length - a.members.length || a.doi.localeCompare(b.doi))

// ---- write artifacts ----
const csvRows = [
  "doi,cluster_size,role,cite_key,refs,frontmatter_fields,title,confidence",
]
for (const c of clusters) {
  for (const m of c.members) {
    const role = m === c.canonical ? "canonical" : "drop"
    const t = `"${m.title.replace(/"/g, '""')}"`
    csvRows.push(`${c.doi},${c.members.length},${role},${m.citeKey},${m.refs},${m.richness},${t},${c.confidence}`)
  }
}
fs.writeFileSync(path.join(repoRoot, "data/evidence/doi-collision-audit.csv"), csvRows.join("\n") + "\n")

const summary = {
  generated_note: "Source pages sharing a DOI. Canonical suggested by inbound refs, key quality, frontmatter richness. Verify same-paper (title/authors) before deleting; a confabulated page can carry a wrong DOI and will NOT cluster here.",
  source_pages_with_doi: pages.length,
  distinct_dois: byDoi.size,
  duplicate_clusters: clusters.length,
  collapsible_pages: clusters.reduce((s, c) => s + c.drop.length, 0),
  high_confidence_clusters: clusters.filter((c) => c.confidence === "high").length,
  review_clusters: clusters.filter((c) => c.confidence === "review").length,
  clusters: clusters.map((c) => ({
    doi: c.doi,
    confidence: c.confidence,
    canonical: c.canonical.citeKey,
    drop: c.drop.map((d) => d.citeKey),
    members: c.members.map((m) => ({ cite_key: m.citeKey, refs: m.refs, fields: m.richness, title: m.title, garbage_key: looksGarbageKey(m.citeKey) })),
  })),
}
fs.writeFileSync(path.join(repoRoot, "data/evidence/doi-collision-summary.json"), JSON.stringify(summary, null, 2) + "\n")

if (!quiet) {
  console.log(`DOI-collision audit: ${pages.length} DOI-bearing source pages, ${byDoi.size} distinct DOIs.`)
  console.log(`  Duplicate clusters: ${clusters.length}  (collapsible pages: ${summary.collapsible_pages})`)
  console.log(`  high-confidence: ${summary.high_confidence_clusters}   needs-review: ${summary.review_clusters}`)
  console.log(`  Wrote data/evidence/doi-collision-audit.csv + doi-collision-summary.json`)
}

if (clusters.length > 0 && !warnOnly) {
  console.error(`\nDOI-collision audit FAILED: ${clusters.length} DOI(s) carried by >1 source page.`)
  process.exit(1)
}
