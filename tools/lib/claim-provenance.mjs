// Shared helpers for parsing numerical claims and citation provenance out of
// wiki markdown pages. Consumed by:
//   - tools/build-defensibility-report.mjs  (per-page defensibility report)
//
// The trace-every-claim audit at tools/audit-claim-provenance.mjs keeps its
// own embedded extractor for now. If you change the claim or provenance
// regexes here, mirror the change there.

import fs from "node:fs"

// Numerical claim regex: <number> <optional decimal> <unit>.
// Units: ppb, ppm, mg/kg, µg/kg, ug/kg, µg/g, ug/g, mg/L, µg/L, ug/L, %.
export const CLAIM_REGEX =
  /\b(\d+(?:\.\d+)?)\s*(ppb|ppm|mg\/kg|µg\/kg|ug\/kg|µg\/g|ug\/g|mg\/L|µg\/L|ug\/L|%)\b/g

// Any provenance-bearing wikilink. Cochrane equivalent: every numerical claim
// must trace to either the primary source (sources/), the regulatory page
// where the claim is anchored (regulations/), or the analytical-method
// reference (testing/).
export const PROVENANCE_REGEX =
  /\[\[(sources|regulations|testing)\/([^\]|#]+)(?:[#|][^\]]*)?\]\]/g

export function stripFrontmatter(text) {
  const m = text.match(/^---\n[\s\S]*?\n---\n/)
  return m ? text.slice(m[0].length) : text
}

export function stripCodeBlocks(text) {
  return text.replace(/```[\s\S]*?```/g, "")
}

// Return the start offset of the most recent H2 heading at or before `offset`.
export function findSectionStart(text, offset) {
  let lastStart = 0
  const re = /^##\s+.+$/gm
  let m
  while ((m = re.exec(text)) !== null) {
    if (m.index >= offset) break
    lastStart = m.index
  }
  return lastStart
}

// Return the start offset of the next H2 heading after `offset`, or text length.
export function findSectionEnd(text, offset) {
  const re = /^##\s+.+$/gm
  re.lastIndex = offset
  const m = re.exec(text)
  return m ? m.index : text.length
}

// Heading name for the H2 containing `offset`, or "(opening)" for prose before
// the first heading.
export function findSectionName(text, offset) {
  const lines = text.slice(0, offset).split("\n")
  for (let i = lines.length - 1; i >= 0; i--) {
    const m = lines[i].match(/^##\s+(.+)$/)
    if (m) return m[1].trim()
  }
  return "(opening)"
}

// Return the deduplicated, sorted list of provenance-bearing wikilinks
// referenced inside the given text window. Each entry is `{ kind, slug }`
// where kind is "sources" | "regulations" | "testing".
export function extractCitedTargets(window) {
  const seen = new Map()
  let m
  PROVENANCE_REGEX.lastIndex = 0
  while ((m = PROVENANCE_REGEX.exec(window)) !== null) {
    const kind = m[1]
    const slug = m[2].trim()
    const key = `${kind}/${slug}`
    if (!seen.has(key)) seen.set(key, { kind, slug })
  }
  return [...seen.values()].sort((a, b) => {
    if (a.kind !== b.kind) return a.kind < b.kind ? -1 : 1
    return a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0
  })
}

// True when the byte offset falls inside a `[[...]]` wikilink span. Used to
// suppress claims like `100ppb` that occur inside regulation slugs (e.g.
// `[[regulations/fda-iAs-rice-cereal-100ppb]]`) — those are slug-encoded
// numbers, not page-level claims.
function offsetInsideWikilink(text, offset) {
  const re = /\[\[[^\]]*\]\]/g
  let m
  while ((m = re.exec(text)) !== null) {
    const start = m.index
    const end = start + m[0].length
    if (offset >= start && offset < end) return true
    if (start > offset) return false
  }
  return false
}

// Parse a page into the list of numerical claims with section attribution.
//
// Options:
//   skipInsideWikilinks (default true) — skip claims that fall inside a
//     `[[...]]` wikilink span.
export function extractClaims(pageText, { skipInsideWikilinks = true } = {}) {
  const body = stripCodeBlocks(stripFrontmatter(pageText))
  const claims = []
  CLAIM_REGEX.lastIndex = 0
  let m
  while ((m = CLAIM_REGEX.exec(body)) !== null) {
    const offset = m.index
    const ctxBefore = body.slice(Math.max(0, offset - 60), offset)
    if (/\{[^}]*$/.test(ctxBefore)) continue
    if (/="\s*[^"]*$/.test(ctxBefore)) continue
    if (skipInsideWikilinks && offsetInsideWikilink(body, offset)) continue
    const sectionStart = findSectionStart(body, offset)
    const sectionEnd = findSectionEnd(body, offset)
    const section = findSectionName(body, offset)
    const window = body.slice(sectionStart, sectionEnd)
    const citedTargets = extractCitedTargets(window)
    claims.push({
      claim: `${m[1]} ${m[2]}`,
      offset,
      section,
      sectionStart,
      sectionEnd,
      citedTargets,
      context: body
        .slice(Math.max(0, offset - 80), Math.min(body.length, offset + 40))
        .replace(/\n/g, " "),
    })
  }
  return claims
}

// Read a wiki page from disk and parse it.
export function loadPageClaims(filePath) {
  const raw = fs.readFileSync(filePath, "utf8")
  return { raw, claims: extractClaims(raw) }
}

// Stable section list, in document order, returning name + char range.
export function listSections(text) {
  const body = stripCodeBlocks(stripFrontmatter(text))
  const headings = []
  const re = /^##\s+(.+)$/gm
  let m
  while ((m = re.exec(body)) !== null) {
    headings.push({ name: m[1].trim(), start: m.index })
  }
  return headings.map((h, i) => ({
    name: h.name,
    start: h.start,
    end: i + 1 < headings.length ? headings[i + 1].start : body.length,
  }))
}
