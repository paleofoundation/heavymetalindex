#!/usr/bin/env node
// audit-crosslink-firewall.mjs — the cross-property LINK firewall for the index
// (CLAUDE.md Part 2 / Part 12; project_ics_multivertical_architecture).
// Deterministic, build-blocking on the one forbidden direction.
//
// The index's epistemic-independence moat requires that the public wiki never
// links to, or names by URL, the certification PROGRAM. The one hard rule of the
// ICS link graph:
//
//     index  ->  cert (heavymetalcertified.com)   FORBIDDEN   (this lint blocks)
//     index  ->  ICS  (contaminantstandards.com)  ALLOWED as operator attribution
//     index  ->  tested/journal (heavymetaltested.com)  ALLOWED (sibling)
//     cert   ->  index                            ALLOWED (cited one way)
//
// The existing firewall lints (firewall-lint.mjs, firewall-no-threshold-lint.mjs)
// catch workbench codenames and derived-threshold tokens. NEITHER catches a
// cross-property hyperlink, which is a different leak: a heavymetalindex.com page
// that links to heavymetalcertified.com turns the disinterested reference into a
// funnel for the program it is supposed to be independent of. That is the exact
// "self-published justification" attack line Part 1 exists to deny a plaintiff's
// expert. This lint closes it.
//
// SCOPE OF THE BLOCK — the literal cert-program domain only.
//   BLOCKED: any occurrence of the token `heavymetalcertified.com` (the named
//            cert program per the task's property map) anywhere a reader can see
//            it — wiki/**.md and quartz/components/**.
//   NOT blocked: prose that NAMES the HMT&C program ("Heavy Metal Tested &
//            Certified", "HMT&C", "HMTc"). Naming the program is the REQUIRED
//            firewall DISCLOSURE (Part 2: "the gap is stated, not hidden") — the
//            wiki must be able to explain that the same operator runs both. It is
//            the promotional LINK/URL, not the disclosure, that is forbidden.
//   NOT blocked: heavymetaltested.com (the journal/tested sibling — index->tested
//            is allowed) and contaminantstandards.com (operator attribution).
//
// Warnings (non-blocking) cover the two authority-hygiene signals the
// cross-property pass added; they surface regressions without breaking a deploy:
//   - UNLINKED_OPERATOR: an "operated by the Institute of Contaminant Standards"
//     statement that does not link to contaminantstandards.com. Warn-only: the
//     sitewide footer already carries the operator link on every page, and the
//     legal/counsel-frozen pages (terms, privacy, licensing, methodology,
//     editorial-standards) are deliberately left unlinked.
//   - BARE_PRIMARY_SOURCE: a DOI printed without a doi.org/href link in the
//     human-narrative pages (metals/, regulations/, synthesis/). Warn-only; the
//     source-page corpus has its own provenance/DOI infrastructure (Part 18).

import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const args = new Set(process.argv.slice(2))
const WARN_ONLY = args.has("--warn-only")

const errors = []
const warnings = []

function walk(dir, cb, filter) {
  if (!fs.existsSync(dir)) return
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) walk(full, cb, filter)
    else if (!filter || filter(full)) cb(full)
  }
}

// Blank out non-reader-visible comment bodies so an explanatory comment that
// legitimately names the forbidden token is not itself flagged (the disclaimer
// trap). Newlines are preserved so line numbers stay accurate. For source files
// strip /* */ and // ; for markdown strip <!-- -->. String VALUES are left intact
// so a real reader-visible URL is still caught.
function stripCommentsForScan(file, text) {
  const blank = (s) => s.replace(/[^\n]/g, " ")
  if (/\.(tsx?|scss)$/.test(file)) {
    return text
      .replace(/\/\*[\s\S]*?\*\//g, blank)
      .replace(/(^|[^:])(\/\/[^\n]*)/g, (_, p, c) => p + blank(c))
  }
  if (file.endsWith(".md")) {
    return text.replace(/<!--[\s\S]*?-->/g, blank)
  }
  return text
}

// ---- 1. FORBIDDEN: index -> cert link/URL (blocking) ----------------------
const FORBIDDEN_TOKEN = /heavymetalcertified\.com/i
const scanRoots = [
  { dir: path.join(root, "wiki"), filter: (f) => f.endsWith(".md") },
  { dir: path.join(root, "quartz", "components"), filter: (f) => /\.(tsx?|scss)$/.test(f) },
]
for (const { dir, filter } of scanRoots) {
  walk(
    dir,
    (f) => {
      const text = stripCommentsForScan(f, fs.readFileSync(f, "utf8"))
      const rel = path.relative(root, f)
      const lines = text.split("\n")
      lines.forEach((line, i) => {
        if (FORBIDDEN_TOKEN.test(line)) {
          errors.push(
            `INDEX_TO_CERT_LINK: ${rel}:${i + 1} references "heavymetalcertified.com" — the wiki must never link to or name the certification program's URL (Part 2 firewall). Name the program in prose if disclosure requires it, but never link/URL it.`,
          )
        }
      })
    },
    filter,
  )
}

// ---- 2. WARN: unlinked operator attribution -------------------------------
const OPERATOR_RE = /operated by (?:the same organization \()?the (?:\[)?Institute of Contaminant Standards/i
walk(
  path.join(root, "wiki"),
  (f) => {
    const text = fs.readFileSync(f, "utf8")
    const rel = path.relative(root, f)
    text.split("\n").forEach((line, i) => {
      if (OPERATOR_RE.test(line) && !/contaminantstandards\.com/.test(line)) {
        warnings.push(
          `UNLINKED_OPERATOR: ${rel}:${i + 1} states operator attribution without linking contaminantstandards.com (footer covers it sitewide; link inline where the page is not counsel-frozen).`,
        )
      }
    })
  },
  (f) => f.endsWith(".md"),
)

// ---- 3. WARN: bare primary-source citation (narrative pages only) ---------
const DOI = /\b10\.\d{4,9}\/[^\s"'<>)\]]+/g
for (const sub of ["metals", "regulations", "synthesis"]) {
  walk(
    path.join(root, "wiki", sub),
    (f) => {
      const text = fs.readFileSync(f, "utf8")
      const rel = path.relative(root, f)
      text.split("\n").forEach((line, i) => {
        DOI.lastIndex = 0
        let m
        while ((m = DOI.exec(line)) !== null) {
          // A line carrying a [[sources/…]] wikilink already links the source
          // page (whose page holds the resolved DOI), and a markdown link / href
          // is self-evidently linked — none of those are bare citations.
          if (!/doi\.org|href|\]\(|\[\[/.test(line)) {
            warnings.push(`BARE_PRIMARY_SOURCE: ${rel}:${i + 1} prints DOI "${m[0]}" without a doi.org link.`)
            break
          }
        }
      })
    },
    (f) => f.endsWith(".md"),
  )
}

// ---- report ---------------------------------------------------------------
const WARN_CAP = 25
warnings.slice(0, WARN_CAP).forEach((w) => console.warn(`  ⚠ ${w}`))
if (warnings.length > WARN_CAP) console.warn(`  ⚠ … and ${warnings.length - WARN_CAP} more warning(s).`)

if (errors.length && !WARN_ONLY) {
  console.error(`audit-crosslink-firewall: ${errors.length} FORBIDDEN cross-property link(s):`)
  for (const e of errors) console.error(`  ✗ ${e}`)
  process.exit(1)
}
if (errors.length) {
  console.warn(`audit-crosslink-firewall: ${errors.length} violation(s) (warn-only mode).`)
  for (const e of errors) console.warn(`  ✗ ${e}`)
}
console.log(
  `audit-crosslink-firewall: OK (no index→cert links${warnings.length ? `; ${warnings.length} warning(s)` : ""}).`,
)
process.exit(0)
