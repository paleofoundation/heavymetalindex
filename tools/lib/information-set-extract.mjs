// Shared information-set extractor.
//
// snapshot-information-set.mjs (baseline writer) and
// audit-content-preservation.mjs (regression checker) MUST extract the
// information set identically, or the monotonic-superset comparison is
// meaningless. They therefore both import from here. Do not inline-copy this
// logic into either tool.
//
// "Information set" = everything a reader can recover from a page's on-disk
// markdown body: sections, numeric claims, claim->cite-key edges, distinct
// (section, cite-key) pairs, the source-legend row count, and the body token
// count. Every one of these is monotonic under the no-information-loss rule:
// the redesign may ADD but must never REMOVE.
//
// Design notes tied to Karen's locked decisions:
//   - Collapsing content into a server-rendered <details> is NOT loss. The text
//     is still present in the served markup, so the token count includes it.
//     We strip the <details>/<summary> *tags* but keep their text content.
//   - The on-disk [[sources/x]] wikilinks are NEVER rewritten on disk (render
//     happens at render time), so cite-keys are extracted from the markdown as
//     authored — that is the source of truth the baseline is built from.

import fs from "node:fs"
import path from "node:path"

// Scope vocabulary. Metals first; the rest are wired so widening scope is a
// one-word flag, not a code change.
export const SCOPE_DIRS = {
  metals: ["wiki/metals"],
  ingredients: ["wiki/ingredients"],
  products: ["wiki/products"],
  regulations: ["wiki/regulations"],
  all: ["wiki/metals", "wiki/ingredients", "wiki/products", "wiki/regulations"],
}

export function resolveScopeDirs(scope) {
  const dirs = SCOPE_DIRS[scope]
  if (!dirs) {
    const known = Object.keys(SCOPE_DIRS).join(", ")
    throw new Error(`unknown --scope "${scope}". known scopes: ${known}`)
  }
  return dirs
}

export function listPageFiles(fullDir) {
  if (!fs.existsSync(fullDir)) return []
  return fs
    .readdirSync(fullDir)
    .filter((f) => f.endsWith(".md") && f !== "index.md" && !f.startsWith("_"))
    .sort()
}

// ---------------------------------------------------------------------------
// Stripping helpers
// ---------------------------------------------------------------------------

export function stripFrontmatter(text) {
  const m = text.match(/^---\n[\s\S]*?\n---\n/)
  return m ? text.slice(m[0].length) : text
}

export function stripCodeBlocks(text) {
  return text.replace(/```[\s\S]*?```/g, "")
}

// Remove <details>/<summary> *tags* but KEEP their inner text. Collapsing into a
// server-rendered <details> is not information loss, so the contained text must
// still count toward the token total and still be scanned for claims and
// cite-edges. We only strip the structural tags themselves.
export function unwrapDetails(text) {
  return text
    .replace(/<\/?details[^>]*>/gi, " ")
    .replace(/<\/?summary[^>]*>/gi, " ")
}

// ---------------------------------------------------------------------------
// Sections (H2 + H3)
// ---------------------------------------------------------------------------

const HEADING_REGEX = /^(##{1,2})\s+(.+?)\s*$/gm // matches ## and ###

export function extractSections(body) {
  const sections = []
  let m
  HEADING_REGEX.lastIndex = 0
  while ((m = HEADING_REGEX.exec(body)) !== null) {
    sections.push({
      level: m[1].length, // 2 = H2, 3 = H3
      title: m[2].trim(),
      offset: m.index,
    })
  }
  return sections
}

// Enclosing section title for a body offset (most recent heading at or before).
function sectionAtOffset(sections, offset) {
  let cur = "(opening)"
  for (const s of sections) {
    if (s.offset <= offset) cur = s.title
    else break
  }
  return cur
}

// ---------------------------------------------------------------------------
// Numeric claims (value + unit) — same regex family as audit-claim-provenance.
// ---------------------------------------------------------------------------

const CLAIM_REGEX =
  /\b(\d+(?:\.\d+)?)\s*(ppb|ppm|mg\/kg|µg\/kg|ug\/kg|µg\/g|ug\/g|mg\/L|µg\/L|ug\/L|µg\/dL|ug\/dL|µg\/day|ug\/day|%)\b/g

export function extractClaims(body, sections) {
  const claims = []
  let m
  CLAIM_REGEX.lastIndex = 0
  while ((m = CLAIM_REGEX.exec(body)) !== null) {
    const offset = m.index
    const ctxBefore = body.slice(Math.max(0, offset - 60), offset)
    // Skip values inside HTML attributes / JSX-ish braces (same guards as the
    // provenance audit), which are presentation, not reader-facing claims.
    if (/\{[^}]*$/.test(ctxBefore)) continue
    if (/="\s*[^"]*$/.test(ctxBefore)) continue
    const value = m[1]
    const unit = normaliseUnit(m[2])
    claims.push({
      claim: `${value} ${unit}`,
      section: sectionAtOffset(sections, offset),
    })
  }
  return claims
}

function normaliseUnit(u) {
  // Fold the micro-sign / "u" variants so "µg/kg" and "ug/kg" are one claim.
  return u.replace(/µ/g, "u")
}

// ---------------------------------------------------------------------------
// Cite-keys and claim->cite-key edges
// ---------------------------------------------------------------------------

// [[sources/x]] and [[sources/x|Label]]. We capture only `sources/` here
// because the information-set contract is about the source trail; regulation/
// testing links are structural navigation captured by the section set. The
// alias (|Label) is presentation and is stripped — x is the identity.
const SOURCE_LINK_REGEX = /\[\[sources\/([^\]|]+?)(?:\|[^\]]*)?\]\]/g

export function extractCiteEdges(body, sections) {
  const edges = []
  let m
  SOURCE_LINK_REGEX.lastIndex = 0
  while ((m = SOURCE_LINK_REGEX.exec(body)) !== null) {
    const citeKey = m[1].trim()
    edges.push({
      cite_key: citeKey,
      section: sectionAtOffset(sections, m.index),
    })
  }
  return edges
}

// ---------------------------------------------------------------------------
// Source-legend row count
// ---------------------------------------------------------------------------

// The legend is the auto-generated block between the marker comments seen on
// lead.md. Count data rows (table rows that are not the header or the
// alignment separator). Fall back to counting rows under a "## Sources" /
// "## References" heading if the markers are absent.
export function extractSourceLegendRowCount(body) {
  const markerMatch = body.match(
    /<!--\s*BEGIN:\s*hmi-source-legend\s*-->([\s\S]*?)<!--\s*END:\s*hmi-source-legend\s*-->/
  )
  let region = markerMatch ? markerMatch[1] : null

  if (region === null) {
    // Fallback: the section under a Sources/References H2.
    const headingRe = /^##\s+(.+)$/gm
    let m
    while ((m = headingRe.exec(body)) !== null) {
      if (/^(sources|references|source legend)\b/i.test(m[1].trim())) {
        const start = m.index
        const next = /^##\s+/gm
        next.lastIndex = headingRe.lastIndex
        const nm = next.exec(body)
        const end = nm ? nm.index : body.length
        region = body.slice(start, end)
        break
      }
    }
  }

  if (region === null) return 0
  return countTableDataRows(region)
}

function countTableDataRows(region) {
  let count = 0
  for (const line of region.split("\n")) {
    const t = line.trim()
    if (!t.startsWith("|")) continue
    // Skip the header separator row (| --- | --- |) and any pure-separator row.
    if (/^\|[\s:|-]+\|?$/.test(t)) continue
    // Skip the header row: a row whose first cell is exactly "#" or "No." is
    // the legend header on lead.md ("| # | Citation | Year | ...").
    const firstCell = t.replace(/^\|/, "").split("|")[0].trim().toLowerCase()
    if (firstCell === "#" || firstCell === "no." || firstCell === "no") continue
    count++
  }
  return count
}

// ---------------------------------------------------------------------------
// Body token count (text inside collapsed <details> is counted)
// ---------------------------------------------------------------------------

export function tokenCount(body) {
  // Whitespace-delimited token count over the prose body with structural noise
  // removed. This is a stable proxy for "amount of reader-facing text", not a
  // model tokenizer count — the audit only needs it to be MONOTONIC, and a
  // whitespace split is deterministic and tokenizer-version-independent.
  const text = body
    // strip remaining HTML tags but keep their text content
    .replace(/<[^>]+>/g, " ")
    // strip markdown table pipes and heading/format punctuation that is not a
    // token by itself
    .replace(/[|#>*_`]/g, " ")
  const toks = text.split(/\s+/).filter(Boolean)
  return toks.length
}

// ---------------------------------------------------------------------------
// Top-level page extractor
// ---------------------------------------------------------------------------

export function extractPage(raw) {
  // Frontmatter source count (declared) — recorded for context; the audit does
  // not gate on it (the legend row count is the structural source signal), but
  // a baseline reader wants to see it next to the legend count.
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n/)
  let declaredSources = null
  if (fm) {
    const sm = fm[1].match(/^sources:\s*(\d+)\s*$/m)
    if (sm) declaredSources = Number(sm[1])
  }

  // Body: strip frontmatter and fenced code, then unwrap <details> so collapsed
  // text still counts. Order matters: unwrap details AFTER stripping code so a
  // fenced block that mentions <details> is not unwrapped.
  const body = unwrapDetails(stripCodeBlocks(stripFrontmatter(raw)))

  const sections = extractSections(body)
  const claims = extractClaims(body, sections)
  const citeEdges = extractCiteEdges(body, sections)

  // Distinct (section, cite-key) pairs.
  const distinctSet = new Set(citeEdges.map((e) => `${e.section} ${e.cite_key}`))

  return {
    declared_sources: declaredSources,
    token_count: tokenCount(body),
    source_legend_rows: extractSourceLegendRowCount(body),
    sections: sections.map((s) => ({ level: s.level, title: s.title })),
    // Claims and edges are stored as multisets serialized to sorted arrays so
    // the JSON is stable; the audit compares multiplicities (a claim appearing
    // twice in the baseline must appear at least twice in the current page).
    claims: claims.map((c) => ({ claim: c.claim, section: c.section })),
    cite_edges: citeEdges.map((e) => ({ cite_key: e.cite_key, section: e.section })),
    distinct_section_cite: distinctSet.size,
  }
}

// Build a multiset (Map<key, count>) from an array of items via a key fn.
export function multiset(items, keyFn) {
  const m = new Map()
  for (const it of items) {
    const k = keyFn(it)
    m.set(k, (m.get(k) || 0) + 1)
  }
  return m
}
