#!/usr/bin/env node
// repair-bulk-source-metadata.mjs — re-derive title + authors (+ publication)
// on machine bulk-ingest source pages from Crossref, keyed on each page's own
// DOI.
//
// WHY THIS EXISTS
// ---------------
// ~963 wiki/sources/*.md pages tagged "mechanical bulk-ingest record" carry
// garbage title and authors extracted from PDF header noise: titles that are a
// copied intro-sentence fragment ("Received: 31 March 2025 and chemometric
// profiles of...") and authors that are sentence/affiliation/email fragments
// (["Revised: May in this study was hedonically acceptable", "rich in essential
// minerals (Ca", "Na"]). Head.tsx emits these verbatim as Google Scholar
// citation_title / citation_author meta and postbuild-inject-jsonld puts them in
// ScholarlyArticle JSON-LD, so the corpus advertises fabricated bibliographic
// metadata to exactly the scholarly/answer-engine audience the Index depends on
// (an "unreliable, self-published" attack line). Every one of these pages has a
// valid 10.x DOI, so the canonical record is a deterministic Crossref lookup.
//
// SAFETY GATE (wrong-DOI guard)
// -----------------------------
// A wrong-DOI mis-ingest would make Crossref return a DIFFERENT paper's metadata.
// Before writing, the Crossref title is checked for token overlap against the
// page's raw_path filename (which was slugified from the real title at ingest).
// - overlap >= threshold  -> DOI trusted, repair applied.
// - filename uninformative (DOI/handle-based, too short) -> repair applied but
//   the page is logged as "unvalidated" (the DOI is still the only key and the
//   current data is known-garbage, so Crossref-by-DOI is strictly better).
// - filename informative but overlap LOW -> SKIPPED and logged to the mismatch
//   report as a candidate wrong-DOI for separate human review (never silently
//   overwritten with a possibly-wrong paper).
//
// Only title, authors, and the "Peer-reviewed article" publication placeholder
// are touched. Routing (products/matrices/metals/jurisdictions) is NOT changed —
// mis-routing is system-owned (CLAUDE.md Part 5b) and re-fanned by the routing
// layer. Idempotent: a page already matching Crossref is left unchanged.
//
// Usage:
//   node tools/repair-bulk-source-metadata.mjs --dry-run --limit 8      # preview
//   node tools/repair-bulk-source-metadata.mjs --limit 8                # apply first 8
//   node tools/repair-bulk-source-metadata.mjs                          # apply all

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const args = process.argv.slice(2)
const dryRun = args.includes("--dry-run")
const limIdx = args.indexOf("--limit")
const LIMIT = limIdx >= 0 ? parseInt(args[limIdx + 1], 10) : Infinity
const MAILTO = "karen@paleofoundation.com"
const DELAY_MS = 180
const GATE_MIN_OVERLAP = 0.34 // fraction of informative filename tokens present in the Crossref title
const sourcesDir = path.join(repoRoot, "wiki/sources")
const auditPath = path.join(repoRoot, "data/evidence/wiki_edit_audit.jsonl")
const mismatchPath = path.join(repoRoot, "data/evidence/bulk-source-doi-mismatch.csv")

const STOP = new Set(
  "a an and the of for to in on with without from into is are was were this that these those study paper article effects effect using based new novel investigation analysis assessment determination via review".split(
    " ",
  ),
)
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const slugTokens = (s) =>
  String(s || "")
    .toLowerCase()
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .split(" ")
    .filter((t) => t.length >= 3 && !STOP.has(t))

function cleanTitle(raw) {
  return String(raw || "")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8211;|&#x2013;/g, "–")
    .replace(/&#8217;|&#x2019;/g, "’")
    .replace(/\s+/g, " ")
    .trim()
}
function yamlQuote(s) {
  return `"${String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`
}
function initials(given) {
  return String(given || "")
    .split(/[\s.\-]+/)
    .filter(Boolean)
    .map((t) => t[0].toUpperCase())
    .join("")
}
function formatAuthor(a) {
  // corporate/org author
  if (a.name && !a.family) return yamlQuote(cleanTitle(a.name))
  const fam = cleanTitle(a.family || "").trim()
  const ini = initials(a.given)
  const label = ini ? `${fam} ${ini}` : fam
  // quote only if the scalar carries YAML-special punctuation
  return /[,:\[\]{}#&*!|>'"%@`]/.test(label) ? yamlQuote(label) : label
}

async function crossref(doi) {
  const url = `https://api.crossref.org/works/${encodeURIComponent(doi)}?mailto=${MAILTO}`
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const ctrl = new AbortController()
      const t = setTimeout(() => ctrl.abort(), 15000)
      const res = await fetch(url, {
        signal: ctrl.signal,
        headers: { "User-Agent": `HMI-metadata-repair/1.0 (mailto:${MAILTO})` },
      })
      clearTimeout(t)
      if (res.status === 404) return { notFound: true }
      if (!res.ok) {
        await sleep(600)
        continue
      }
      const j = await res.json()
      const m = j.message || {}
      return {
        title: cleanTitle((m.title || [])[0] || ""),
        authors: Array.isArray(m.author) ? m.author : [],
        container: cleanTitle((m["container-title"] || [])[0] || ""),
      }
    } catch {
      await sleep(600)
    }
  }
  return { error: true }
}

function splitFrontmatter(raw) {
  if (!raw.startsWith("---\n")) return null
  const rest = raw.slice(4)
  const close = rest.search(/\n---\n/)
  if (close === -1) return null
  return { fm: rest.slice(0, close), rest: rest.slice(close + 5), open: 4 }
}
const getScalar = (fm, key) => {
  const m = fm.match(new RegExp(`^${key}:\\s*(.*)$`, "m"))
  return m ? m[1].trim().replace(/^"(.*)"$/, "$1") : null
}

// Validate the DOI against two independent, ingest-time title proxies that do
// NOT come from the garbage PDF-text extraction: the raw_path filename and the
// cite_key tail (the author-year prefix stripped, leaving a title slug). Pass if
// EITHER proxy overlaps the Crossref title; flag mismatch only when a proxy is
// informative and neither matches (high-confidence wrong-DOI).
function overlapOf(tokens, titleSet) {
  if (tokens.length < 3) return null
  return tokens.filter((t) => titleSet.has(t)).length / tokens.length
}
const GENERIC_PREFIX = new Set(
  "authors author article acceptable assessment received abstract study paper review introduction results".split(" "),
)
// Third signal: the cite_key author-year prefix (e.g. agwaramgbo2012 -> "agwaramgbo")
// matches a Crossref author family. Independent of the garbage title extraction.
function authorPrefixMatch(citeKey, crAuthors) {
  const m = String(citeKey || "").match(/^([a-z][a-z-]*?)\d{4}/i)
  if (!m) return false
  const pre = m[1].toLowerCase().replace(/-/g, "")
  if (pre.length < 4 || GENERIC_PREFIX.has(pre)) return false
  return (crAuthors || []).some((a) => {
    const fam = String(a.family || a.name || "").toLowerCase().replace(/[^a-z]/g, "")
    return fam.length >= 4 && (fam.includes(pre) || pre.includes(fam))
  })
}
function gate(crossrefTitle, rawPath, citeKey, crAuthors) {
  const titleSet = new Set(slugTokens(crossrefTitle))
  const base = String(rawPath || "").split("/").pop() || ""
  const oFn = overlapOf(slugTokens(base.replace(/\.[a-z0-9]+$/i, "").replace(/^rpmehg[_-].*/i, "")), titleSet)
  const ckTail = String(citeKey || "").replace(/^[a-z][a-z-]*\d{4}[a-z]?-/i, "")
  const oCk = overlapOf(slugTokens(ckTail), titleSet)
  const cands = [oFn, oCk].filter((v) => v != null)
  const best = cands.length ? Math.max(...cands) : null
  if (best != null && best >= GATE_MIN_OVERLAP) return { kind: "match", overlap: best }
  if (authorPrefixMatch(citeKey, crAuthors)) return { kind: "match", overlap: best ?? 1, via: "author" }
  if (best == null) return { kind: "uninformative" }
  return { kind: "mismatch", overlap: best }
}

const bulkFiles = fs
  .readdirSync(sourcesDir)
  .filter((f) => f.endsWith(".md"))
  .map((f) => path.join(sourcesDir, f))
  .filter((fp) => fs.readFileSync(fp, "utf8").includes("mechanical bulk-ingest record"))

let repaired = 0,
  unchanged = 0,
  noDoi = 0,
  crNotFound = 0,
  crErr = 0,
  mismatch = 0,
  unvalidated = 0
const auditRows = []
const mismatchRows = [["cite_key", "doi", "overlap", "crossref_title", "raw_path_basename"]]
const now = new Date().toISOString()
let processed = 0

for (const fp of bulkFiles) {
  if (processed >= LIMIT) break
  const raw = fs.readFileSync(fp, "utf8")
  const parts = splitFrontmatter(raw)
  if (!parts) continue
  const doi = getScalar(parts.fm, "doi")
  const citeKey = getScalar(parts.fm, "cite_key") || path.basename(fp, ".md")
  if (!doi || !/^10\.\d{3,}\//.test(doi)) {
    noDoi += 1
    continue
  }
  processed += 1
  const cr = await crossref(doi)
  await sleep(DELAY_MS)
  if (cr.notFound) {
    crNotFound += 1
    continue
  }
  if (cr.error || !cr.title) {
    crErr += 1
    continue
  }

  const g = gate(cr.title, getScalar(parts.fm, "raw_path"), citeKey, cr.authors)
  if (g.kind === "mismatch") {
    mismatch += 1
    mismatchRows.push([citeKey, doi, g.overlap.toFixed(2), cr.title, (getScalar(parts.fm, "raw_path") || "").split("/").pop()])
    continue
  }
  if (g.kind === "uninformative") unvalidated += 1

  const newTitleLine = `title: ${yamlQuote(cr.title)}`
  const newAuthorsLine = cr.authors.length
    ? `authors: [${cr.authors.map(formatAuthor).join(", ")}]`
    : null

  let fm = parts.fm
  const curTitle = getScalar(fm, "title")
  const curAuthorsM = fm.match(/^authors:\s*(\[[\s\S]*?\])\s*$/m)
  let changed = false

  if (cr.title && curTitle !== cr.title) {
    fm = fm.replace(/^title:\s*.*$/m, newTitleLine)
    changed = true
  }
  if (newAuthorsLine && curAuthorsM && curAuthorsM[0].trim() !== newAuthorsLine) {
    fm = fm.replace(/^authors:\s*\[[\s\S]*?\]\s*$/m, newAuthorsLine)
    changed = true
  }
  // upgrade the placeholder publication to the real journal, if known
  if (cr.container && getScalar(fm, "publication") === "Peer-reviewed article") {
    fm = fm.replace(/^publication:\s*.*$/m, `publication: ${yamlQuote(cr.container)}`)
    changed = true
  }

  if (!changed) {
    unchanged += 1
    continue
  }
  repaired += 1
  if (dryRun) {
    if (repaired <= 8) {
      console.log(`\n--- ${citeKey} (doi ${doi}, gate ${g.kind}${g.overlap ? " " + g.overlap.toFixed(2) : ""})`)
      console.log("  " + newTitleLine)
      if (newAuthorsLine) console.log("  " + newAuthorsLine)
    }
    continue
  }
  fs.writeFileSync(fp, `---\n${fm}\n---\n${parts.rest}`, "utf8")
  // Append the provenance row immediately (not batched at end) so a mid-run
  // interruption never leaves a written page without its audit trail. The tool
  // is idempotent, so a resumed run continues cleanly.
  fs.appendFileSync(
    auditPath,
    JSON.stringify({
      edit_id: `bulk-source-metadata-repair-2026-08-10-${citeKey}`.slice(0, 180),
      page: path.relative(repoRoot, fp),
      span_id: `Re-derived title + authors${cr.container ? " + publication" : ""} from Crossref (DOI ${doi}) to replace garbage PDF-header extraction; wrong-DOI safety gate=${g.kind}${g.via ? "/" + g.via : ""}. Routing untouched.`,
      source_document: `Crossref works/${doi}; two-site content-quality audit (index-sources).`,
      retrieval_date: "2026-08-10",
      models_used: ["anthropic/claude-opus-4-8"],
      model_agreement_state: "single_model",
      applied_at: now,
      commit_sha: "pending",
    }) + "\n",
  )
}

if (!dryRun) {
  if (mismatchRows.length > 1)
    fs.writeFileSync(mismatchPath, mismatchRows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n") + "\n")
}

if (dryRun && mismatchRows.length > 1) {
  console.log(`\n  wrong-DOI SKIP candidates (cite_key | overlap | crossref_title):`)
  for (const r of mismatchRows.slice(1)) console.log(`    ${r[0]} | ${r[2]} | ${r[3].slice(0, 80)}`)
}
console.log(`\nrepair-bulk-source-metadata: ${dryRun ? "DRY-RUN" : "EXECUTED"}`)
console.log(`  bulk pages total:      ${bulkFiles.length}`)
console.log(`  processed (had DOI):   ${processed}`)
console.log(`  repaired:              ${repaired}`)
console.log(`  unchanged (clean):     ${unchanged}`)
console.log(`  no/invalid DOI:        ${noDoi}`)
console.log(`  crossref not-found:    ${crNotFound}`)
console.log(`  crossref error:        ${crErr}`)
console.log(`  wrong-DOI SKIPPED:     ${mismatch}  (see ${path.relative(repoRoot, mismatchPath)})`)
console.log(`  applied-unvalidated:   ${unvalidated}  (filename uninformative; DOI-only)`)
