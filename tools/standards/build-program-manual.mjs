#!/usr/bin/env node
// RETIRED 2026-08-12: this Index-side assembler includes superseded Part 3
// occurrence-selected chapters. The controlling current Program Manual is built
// in the certification repository from government-limit compiler records.
console.error("RETIRED: the Index-side Program Manual contains superseded P45/P97 chapters. Use the certification-repo manual builders.")
process.exit(2)
/**
 * build-program-manual.mjs
 *
 * Concatenates the HMTc Program Manual chapters into a single master
 * markdown file ready for pandoc → PDF rendering or direct review.
 *
 * The Program Manual is structured under data/workbench/standards-book/
 * with front-matter/, parts/*, and build/ subdirectories. This script
 * walks the chapters in document order and emits a single master file
 * with consistent heading levels, chapter breaks, and a generation
 * stamp.
 *
 * Per the wiki/HMTc firewall (CLAUDE.md Part 2), the engine arithmetic
 * stays workbench-side; the chapters themselves describe principle and
 * mechanism without exposing the engine.
 *
 * Usage:
 *   node tools/standards/build-program-manual.mjs                  → builds master markdown
 *   node tools/standards/build-program-manual.mjs --pdf            → also runs pandoc → PDF
 *   node tools/standards/build-program-manual.mjs --check          → validates structure without writing
 *
 * Output:
 *   data/workbench/standards-book/build/HMTc-Program-Manual-2026-v0.md
 *   data/workbench/standards-book/build/HMTc-Program-Manual-2026-v0.pdf  (with --pdf)
 */

import fs from "node:fs"
import path from "node:path"
import { execSync } from "node:child_process"

const REPO_ROOT = process.cwd()
const BOOK_DIR = path.join(REPO_ROOT, "data/workbench/standards-book")
const BUILD_DIR = path.join(BOOK_DIR, "build")
const SOURCE_DOCS_DIR = path.join(BOOK_DIR, "source-documents")
const BRIEFINGS_DIR = path.join(REPO_ROOT, "data/workbench/briefings")

// Document order: front matter, then parts in numbered order, then back matter.
// Files within each subdirectory are read in lexical order (matching their
// numeric prefixes 01-, 02-, etc.).
const STRUCTURE = [
  { kind: "section", title: "Front Matter", dir: "front-matter" },
  { kind: "section", title: "Part 1 — Why HMTc Exists", dir: "parts/01-why-hmtc-exists" },
  { kind: "section", title: "Part 2 — The HMTc Program", dir: "parts/02-the-hmtc-program" },
  { kind: "section", title: "Part 2.5 — Using heavymetalindex.com", dir: "parts/03-using-heavymetalindex-com" },
  { kind: "section", title: "Part 3 — The Standards", dir: "parts/04-the-standards" },
  // Per v0-pre-audit plan: Part 3 chapters are referenced rather than inlined;
  // the audit-strengthened v0 inlines them via the Part 3 retemplate.
  { kind: "section", title: "Part 4 — The Lot Testing Schedule", dir: "parts/05-the-lot-testing-schedule" },
  // Part 4: inline the canonical Lot Testing Schedule markdown from
  // source-documents after the introduction.
  { kind: "inline-source-doc", file: "lot-testing-schedule.md", skipFirstHeading: true },
  { kind: "section", title: "Part 5 — Methodology and Appendices", dir: "parts/06-methodology-and-appendices" },
]

function listMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((f) => path.join(dir, f))
}

function readFile(p) {
  return fs.readFileSync(p, "utf8")
}

function buildMaster() {
  const sections = []
  const timestamp = new Date().toISOString()

  sections.push(`<!--
HMTc Program Manual, 2026 Edition — v0-pre-audit
Generated: ${timestamp}
Source: data/workbench/standards-book/
Build tool: tools/standards/build-program-manual.mjs
-->\n`)

  for (const entry of STRUCTURE) {
    if (entry.kind === "section") {
      const dirAbs = path.join(BOOK_DIR, entry.dir)
      const files = listMarkdownFiles(dirAbs)
      if (files.length === 0) {
        sections.push(`\n<!-- WARN: no markdown files found in ${entry.dir} -->\n`)
        continue
      }
      for (const file of files) {
        const content = readFile(file)
        sections.push(`\n<!-- ${path.relative(REPO_ROOT, file)} -->\n`)
        sections.push(content.trimEnd())
        sections.push("\n")
      }
    } else if (entry.kind === "inline-source-doc") {
      const filePath = path.join(SOURCE_DOCS_DIR, entry.file)
      if (!fs.existsSync(filePath)) {
        sections.push(`\n<!-- WARN: source doc ${entry.file} not found -->\n`)
        continue
      }
      let content = readFile(filePath)
      if (entry.skipFirstHeading) {
        // strip the first top-level heading so we don't duplicate the section title
        content = content.replace(/^#\s+.*\n/, "")
      }
      sections.push(`\n<!-- inlined from ${path.relative(REPO_ROOT, filePath)} -->\n`)
      sections.push(content.trimEnd())
      sections.push("\n")
    }
  }

  return sections.join("\n")
}

function validateStructure() {
  const errors = []
  for (const entry of STRUCTURE) {
    if (entry.kind === "section") {
      const dirAbs = path.join(BOOK_DIR, entry.dir)
      if (!fs.existsSync(dirAbs)) {
        errors.push(`Missing directory: ${entry.dir}`)
        continue
      }
      const files = listMarkdownFiles(dirAbs)
      if (files.length === 0) {
        errors.push(`No markdown files in ${entry.dir}`)
      }
    } else if (entry.kind === "inline-source-doc") {
      const filePath = path.join(SOURCE_DOCS_DIR, entry.file)
      if (!fs.existsSync(filePath)) {
        errors.push(`Missing source doc: source-documents/${entry.file}`)
      }
    }
  }
  return errors
}

function firewallCheck(content) {
  // Engine implementation shibboleths that should NOT appear in the public manual.
  // The wiki/HMTc firewall keeps the engine implementation workbench-side.
  //
  // Strictly forbidden: code-level parameter names and implementation identifiers
  // that would reveal the engine's algorithm structure.
  //
  // Methodology-description terms ("sensitivity band," "pool composition count")
  // are acceptable when used to describe the program's transparency about
  // uncertainty and pool structure — they're the program saying "we report our
  // uncertainty," not the program exposing the engine. They're checked here as
  // soft warnings rather than failures.
  const forbidden = [
    { term: "MAX_SOURCE_SHARE", reason: "engine algorithm parameter name", hard: true },
    { term: "source-level bootstrap CI", reason: "specific algorithmic identifier", hard: false },
  ]
  const warnings = []
  for (const { term, reason, hard } of forbidden) {
    const re = new RegExp(term, "i")
    if (re.test(content)) {
      const label = hard ? "firewall HARD" : "firewall soft"
      warnings.push(`${label}: '${term}' appears. reason: ${reason}`)
    }
  }
  return warnings
}

function main() {
  const args = process.argv.slice(2)
  const wantsPdf = args.includes("--pdf")
  const checkOnly = args.includes("--check")

  console.log("[build-program-manual] validating structure...")
  const errors = validateStructure()
  if (errors.length > 0) {
    console.error("[build-program-manual] structure errors:")
    for (const e of errors) console.error("  - " + e)
    if (checkOnly) {
      console.log("[build-program-manual] check-only mode: " + errors.length + " errors.")
      process.exit(2)
    } else {
      console.warn("[build-program-manual] continuing despite errors (v0-pre-audit assembly).")
    }
  }

  console.log("[build-program-manual] assembling master markdown...")
  const master = buildMaster()

  console.log("[build-program-manual] running firewall check...")
  const warnings = firewallCheck(master)
  if (warnings.length > 0) {
    console.warn("[build-program-manual] firewall warnings:")
    for (const w of warnings) console.warn("  - " + w)
  } else {
    console.log("[build-program-manual] firewall: clean.")
  }

  if (checkOnly) {
    console.log("[build-program-manual] check-only mode: master is " + master.length + " bytes, " + master.split("\n").length + " lines.")
    return
  }

  fs.mkdirSync(BUILD_DIR, { recursive: true })
  const outMd = path.join(BUILD_DIR, "HMTc-Program-Manual-2026-v0.md")
  fs.writeFileSync(outMd, master, "utf8")
  console.log("[build-program-manual] wrote " + path.relative(REPO_ROOT, outMd))
  console.log("[build-program-manual] size: " + master.length + " bytes, " + master.split("\n").length + " lines.")

  if (wantsPdf) {
    const outPdf = path.join(BUILD_DIR, "HMTc-Program-Manual-2026-v0.pdf")
    console.log("[build-program-manual] running pandoc → PDF...")
    try {
      execSync(`pandoc "${outMd}" -o "${outPdf}" --pdf-engine=xelatex --toc -V geometry:margin=1in`, { stdio: "inherit" })
      console.log("[build-program-manual] wrote " + path.relative(REPO_ROOT, outPdf))
    } catch (e) {
      console.error("[build-program-manual] pandoc failed. PDF not generated. Master markdown is still available at " + path.relative(REPO_ROOT, outMd))
      process.exit(3)
    }
  }
}

main()
