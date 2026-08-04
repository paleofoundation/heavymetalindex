#!/usr/bin/env node
// Emit a marker-bounded "## References" block on every reader-facing wiki page:
// the works this page's prose actually cites, numbered in the order their
// superscripts appear, in full citation form.
//
// Why this is not the "## Sources" table
//
// `## Sources` (tools/evidence/build-source-legend.mjs) is the *corpus set*: every
// source routed to this page by source-page frontmatter, whether or not the prose
// cites it. On wiki/metals/lead.md that is 789 rows. It answers "what was this
// page built against" and it is the coverage record.
//
// `## References` answers the question a regulatory reviewer, a journal editor,
// or a plaintiff's expert actually asks: for the claims made in this page's text,
// what are the citations? A reader following superscript [1] needs one entry with
// authors, year, title, publication, and a DOI — not a 789-row corpus table they
// have to search. Without it the superscripts in the prose resolve to nothing,
// which is the state this generator fixes.
//
// Numbering contract: the list is built in first-appearance order of citations in
// the page's prose, excluding generated tables. citeSuperscript.inline.ts reads
// its numbering from this list rather than assigning its own, so the rendered
// superscripts and the reference numbers cannot drift apart.
//
// Runs in prebuild after build-source-legend.mjs (which owns `## Sources`) and
// before build-page-changelogs.mjs (which owns `## Update history`), so the three
// footer blocks land in a stable order.

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { renderReferenceEntry } from "./lib/citation-format.mjs"

const repoRoot = process.cwd()
const sourcesDir = path.join(repoRoot, "wiki/sources")

const BEGIN_MARKER = "<!-- BEGIN: hmi-page-references -->"
const END_MARKER = "<!-- END: hmi-page-references -->"
const LEGEND_BEGIN = "<!-- BEGIN: hmi-source-legend -->"
const HISTORY_BEGIN = "<!-- BEGIN: hmi-page-history -->"

// Reader-facing page types. Source pages are excluded: a source page is the
// record of one work, and its own citation lives in its ingest receipt.
const TARGETS = [
  "wiki/metals",
  "wiki/ingredients",
  "wiki/products",
  "wiki/regulations",
  "wiki/regulators",
  "wiki/synthesis",
  "wiki/testing",
  "wiki/microbiome",
  "wiki/mitigation",
  "wiki/supply-chain",
  "wiki/health",
  "wiki/methodology",
  "wiki/certification",
  "wiki/studies",
]

const args = process.argv.slice(2)
const dryRun = args.includes("--dry-run")
const verbose = args.includes("--verbose")

// ---------------------------------------------------------------------------
// Index every source page's frontmatter, following `canonical_source` so a
// citation to a de-duplicated key still renders the canonical work.
// ---------------------------------------------------------------------------
const sources = new Map()
for (const file of fs.readdirSync(sourcesDir)) {
  if (!file.endsWith(".md")) continue
  const citeKey = file.replace(/\.md$/, "")
  let fm
  try {
    fm = matter(fs.readFileSync(path.join(sourcesDir, file), "utf8")).data
  } catch {
    continue
  }
  sources.set(citeKey.toLowerCase(), { fm, citeKey: fm.cite_key || citeKey })
}

// Regulation pages, indexed the same way, so a synthesis finding whose declared
// evidence base is instruments rather than papers (the EU regulatory-framework
// timeline is built entirely on `[[regulations/...]]`) still renders a complete
// References section pointing at those instruments.
const regulationsDir = path.join(repoRoot, "wiki/regulations")
const regulations = new Map()
if (fs.existsSync(regulationsDir)) {
  for (const file of fs.readdirSync(regulationsDir)) {
    if (!file.endsWith(".md")) continue
    const key = file.replace(/\.md$/, "")
    try {
      regulations.set(key.toLowerCase(), { fm: matter(fs.readFileSync(path.join(regulationsDir, file), "utf8")).data, key })
    } catch {
      /* skip unparseable */
    }
  }
}

function renderRegulationEntry(fm, key) {
  const title = String(fm.title || key).trim().replace(/[[\]|]/g, " ").replace(/\s+/g, " ")
  // YAML parses an unquoted ISO date to a JS Date, whose String() is
  // "Fri Jan 01 2001 ..." — slicing that gave a weekday. Pull a 4-digit year
  // whether the value is a Date or a string.
  const year =
    fm.effective_date instanceof Date
      ? fm.effective_date.getUTCFullYear()
      : (String(fm.effective_date ?? "").match(/\d{4}/) || [null])[0]
  const meta = [fm.jurisdiction, fm.agency, fm.program, year]
    .filter(Boolean)
    .map((x) => String(x).trim())
    .join(" · ")
  return (
    `[[regulations/${key}|${title}]]` +
    `<span class="hmi-ref-meta">${meta}</span>` +
    `<span class="hmi-ref-tag">Regulation</span>`
  )
}

function resolveSource(key) {
  let entry = sources.get(String(key).toLowerCase())
  const seen = new Set()
  while (entry?.fm?.canonical_source && !seen.has(entry.citeKey)) {
    seen.add(entry.citeKey)
    const target = String(entry.fm.canonical_source).replace(/^\[\[sources\//, "").replace(/\]\]$/, "")
    const next = sources.get(target.toLowerCase())
    if (!next) break
    entry = next
  }
  return entry
}

// ---------------------------------------------------------------------------
// Collect cited keys in first-appearance order.
//
// Excluded: generated marker blocks, pipe-table rows (the source legend, the
// contamination body tables and the update-history table are apparatus, not
// prose), and blockquote-wrapped machine output.
// ---------------------------------------------------------------------------
const CITATION = /\[\[sources\/([a-z0-9._-]+)/gi

function citedKeysInOrder(raw) {
  const body = raw
    .replace(/^---\n[\s\S]*?\n---\n/, "")
    .replace(/<!-- BEGIN: hmi-page-references -->[\s\S]*?<!-- END: hmi-page-references -->/g, "")
    .replace(/<!-- BEGIN: hmi-source-legend -->[\s\S]*?<!-- END: hmi-source-legend -->/g, "")
    .replace(/<!-- BEGIN: hmi-page-history -->[\s\S]*?<!-- END: hmi-page-history -->/g, "")

  const ordered = []
  const seen = new Set()
  let inSourcesSection = false
  for (const line of body.split("\n")) {
    const trimmed = line.trim()
    if (/^#{1,6}\s/.test(trimmed)) {
      // A non-markered `## Sources` heading still fences off corpus apparatus.
      inSourcesSection = /^#{1,6}\s+sources\s*$/i.test(trimmed)
    }
    if (inSourcesSection) continue
    if (trimmed.startsWith("|")) continue
    let m
    CITATION.lastIndex = 0
    while ((m = CITATION.exec(trimmed)) !== null) {
      const key = m[1].toLowerCase()
      const resolved = resolveSource(key)
      if (!resolved) continue
      const canonical = resolved.citeKey.toLowerCase()
      if (seen.has(canonical)) continue
      seen.add(canonical)
      ordered.push(resolved)
    }
  }
  return ordered
}

// SYNTHESIS FINDINGS cite their evidence base in `anchor_sources` frontmatter,
// and several (including dietary-nickel, the design's own flagship finding) never
// repeat those citations inline in the prose. The prose-only collector therefore
// returned nothing for them and they rendered with NO references section at all —
// the epistemic-authority layer, with an empty evidence trail. For a synthesis
// finding the anchor sources ARE the references: they are the works the finding
// is declared to rest on. So on these pages the reference list is the union of
// the anchor sources (in frontmatter order) and anything the prose additionally
// cites, and every finding is guaranteed a complete, auditable evidence trail.
function anchorSourceEntries(raw) {
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/)
  if (!fmMatch) return []
  const fm = fmMatch[1]
  // Capture the anchor_sources value whether it is flow (`[ ... ]` on one line)
  // or block (`- "[[sources/x]]"` lines) style, up to the next top-level key.
  const m = fm.match(/^anchor_sources:\s*([\s\S]*?)(?=^\S|\n---|$)/m)
  if (!m) return []
  // Each anchor is either a source page or a regulation page. Preserve
  // frontmatter order and dedupe by fully-qualified key.
  const refs = [...m[1].matchAll(/\b(sources|regulations)\/([a-z0-9._-]+)/gi)].map((x) => ({
    kind: x[1].toLowerCase(),
    key: x[2],
  }))
  const out = []
  const seen = new Set()
  for (const ref of refs) {
    if (ref.kind === "regulations") {
      const entry = regulations.get(ref.key.toLowerCase())
      if (!entry) continue
      const id = `regulations/${entry.key.toLowerCase()}`
      if (seen.has(id)) continue
      seen.add(id)
      out.push({ citeKey: `regulations/${entry.key}`, rendered: renderRegulationEntry(entry.fm, entry.key) })
      continue
    }
    const resolved = resolveSource(ref.key)
    if (!resolved) continue
    const canonical = resolved.citeKey.toLowerCase()
    if (seen.has(canonical)) continue
    seen.add(canonical)
    out.push(resolved)
  }
  return out
}

// Intro copy, v3-aligned. Short, but it keeps the audit-trail sentence: the
// short form is only defensible because each title still resolves to the source
// record that carries the receipt, the hash, and the extracted values. No em
// dash (writing-style lint); the count is dropped, per the v3 design.
const INTRO =
  "Works cited in this page's text, in first-appearance order. This is not the full corpus " +
  "for this page; it is only what the prose above draws on. The complete set of sources is " +
  "listed under [Sources](#sources) below. Each title links to its source record, which carries " +
  "the ingest receipt, the extracted values, and the file hash of the document it was built from."

// A synthesis finding's references ARE its declared evidence base, so the intro
// says that honestly rather than claiming everything below was superscripted in
// the prose (some anchors are not).
const SYNTHESIS_INTRO =
  "The anchor sources this finding is built on, together with any additional works its text cites. " +
  "This is not the full corpus for the topic; the complete set of routed sources is listed under " +
  "[Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, " +
  "the extracted values, and the file hash of the document it was built from."

function renderBlock(entries, intro = INTRO) {
  // Each item is a markdown list line whose content is a source wikilink (the
  // title) plus two inline spans the stylesheet lays out. The `${i + 1}.` marker
  // is what makes it an <ol>; CSS hides it and renders `[n]` from a counter, so
  // the numbering still comes from first-appearance order and cannot drift from
  // the prose superscripts.
  const items = entries
    .map((e, i) => `${i + 1}. ${e.rendered ?? renderReferenceEntry(e.fm, e.citeKey)}`)
    .join("\n")
  return `${BEGIN_MARKER}
## References

${intro}

${items}
${END_MARKER}`
}

/**
 * Place the block above `## Sources` — references belong with the prose they
 * support, and the corpus table is the deeper apparatus below them.
 */
function upsert(raw, block) {
  const existing = new RegExp(
    `\\n*${escapeRegExp(BEGIN_MARKER)}[\\s\\S]*?${escapeRegExp(END_MARKER)}\\n*`,
  )
  if (existing.test(raw)) {
    return block ? raw.replace(existing, `\n\n${block}\n\n`) : raw.replace(existing, "\n\n")
  }
  if (!block) return raw

  for (const anchor of [LEGEND_BEGIN, HISTORY_BEGIN]) {
    const idx = raw.indexOf(anchor)
    if (idx !== -1) {
      return `${raw.slice(0, idx).replace(/\n+$/, "")}\n\n${block}\n\n${raw.slice(idx)}`
    }
  }
  const headingIdx = raw.search(/^##\s+Sources\s*$/m)
  if (headingIdx !== -1) {
    return `${raw.slice(0, headingIdx).replace(/\n+$/, "")}\n\n${block}\n\n${raw.slice(headingIdx)}`
  }
  return `${raw.replace(/\n+$/, "")}\n\n${block}\n`
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

let updated = 0
let unchanged = 0
let noCitations = 0
let totalRefs = 0

for (const targetDir of TARGETS) {
  const absDir = path.join(repoRoot, targetDir)
  if (!fs.existsSync(absDir)) continue
  for (const file of fs.readdirSync(absDir)) {
    if (!file.endsWith(".md")) continue
    if (file.startsWith("_")) continue
    const absPath = path.join(absDir, file)
    const raw = fs.readFileSync(absPath, "utf8")
    if (!/^---\n/.test(raw)) continue

    const cited = citedKeysInOrder(raw)
    // Synthesis findings: union the prose citations with the declared
    // anchor_sources (cited first, then any anchor not already present), so the
    // finding's full evidence base is always its reference list.
    const isSynthesis = targetDir === "wiki/synthesis" && file !== "index.md"
    let entries = cited
    let intro = INTRO
    if (isSynthesis) {
      const seen = new Set(cited.map((e) => e.citeKey.toLowerCase()))
      const extraAnchors = anchorSourceEntries(raw).filter((e) => !seen.has(e.citeKey.toLowerCase()))
      entries = [...cited, ...extraAnchors]
      intro = SYNTHESIS_INTRO
    }
    if (entries.length === 0) noCitations += 1
    totalRefs += entries.length

    const next = upsert(raw, entries.length ? renderBlock(entries, intro) : null)
    if (next === raw) {
      unchanged += 1
      continue
    }
    if (!dryRun) fs.writeFileSync(absPath, next, "utf8")
    updated += 1
    if (verbose) console.log(`  ${targetDir}/${file} → ${entries.length} references`)
  }
}

console.log(`build-page-references: ${dryRun ? "DRY-RUN" : "EXECUTED"}`)
console.log(`  updated:              ${updated}`)
console.log(`  unchanged:            ${unchanged}`)
console.log(`  pages with no prose citations: ${noCitations}`)
console.log(`  references emitted:   ${totalRefs}`)
