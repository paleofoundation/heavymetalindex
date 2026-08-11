#!/usr/bin/env node
// Part 2 firewall lint for the scholarly-claim pages.
//
// CLAUDE.md Part 2: the wiki reports what the literature supports. It does not
// advocate for HMT&C, does not harmonize with it, and does not strengthen
// claims to make HMT&C thresholds look more evidence-based than the literature
// supports. The synthesis pages (and the original metal reviews) are the pages
// Google Scholar and external readers treat as the Index's independent
// scholarly output. If those pages argue HMT&C's case by name, the
// independence thesis in Part 1 inverts: the "independent reference" becomes
// the certifier's self-published justification, which is the exact attack line
// Part 1 exists to deny a plaintiff's expert.
//
// This audit surfaces every HMT&C reference and advocacy phrasing in
// wiki/synthesis/ and wiki/metals/ so they can be neutralised to
// literature-native prose. HMT&C-facing material belongs on the certifier
// side, which cites the neutral synthesis one-way.
//
// Warn-only by default (prints the worklist, exits 0). Run with --strict to
// exit non-zero when any hit remains — wire that form into prebuild once the
// pages are clean so the firewall is machine-enforced, not just asserted.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const SCAN_DIRS = ["wiki/synthesis", "wiki/metals"]
const strict = process.argv.includes("--strict")

// HIGH: prose that argues the certifier's case or coaches its counsel.
// MEDIUM: a bare HMT&C reference in a scholarly page (should be genericised to
//   the science, e.g. "the standard analyte panel" not "the HMTc analyte
//   vocabulary"; "a certification standard" not "HMTc standards should").
// SOFT: words that read as advocacy in this context; human confirms.
const PATTERNS = [
  { sev: "HIGH", re: /brand-legal implication/i, label: "defense-counsel coaching" },
  { sev: "HIGH", re: /certification implication/i, label: "prescribes certification policy" },
  { sev: "HIGH", re: /\brests on a [^.]*\bfooting\b/i, label: "'rests on a defensible footing' framing" },
  { sev: "HIGH", re: /scientific basis for HMT&?c/i, label: "names the page as HMT&C's justification" },
  { sev: "MEDIUM", re: /HMT&?c\b/i, label: "HMT&C reference in a scholarly page" },
  { sev: "SOFT", re: /\bdefensib(le|ility)\b/i, label: "'defensible' (confirm: science vs advocacy)" },
  { sev: "SOFT", re: /tighter-than-regulatory/i, label: "ratcheting framing (confirm)" },
]

function splitFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/)
  if (!m) return { fmLineCount: 0, body: raw }
  return { fmLineCount: m[0].split("\n").length - 1, body: raw.slice(m[0].length) }
}

const findings = []
for (const dir of SCAN_DIRS) {
  const abs = path.join(repoRoot, dir)
  if (!fs.existsSync(abs)) continue
  for (const file of fs.readdirSync(abs)) {
    if (!file.endsWith(".md") || file === "index.md") continue
    const rel = path.join(dir, file)
    const raw = fs.readFileSync(path.join(abs, file), "utf8")
    const { fmLineCount, body } = splitFrontmatter(raw)
    const lines = body.split("\n")
    let inGenerated = false
    lines.forEach((line, i) => {
      const t = line.trim()
      // Generated marker blocks (peer-review footer, page-history, source-legend)
      // are tool-owned: regenerated from source-page frontmatter, not hand-authored
      // prose. An HMT&C string inside one is fixed at the source / generator, not
      // in the page — so we tally those separately and never block the build on them.
      if (/^<!--\s*BEGIN:/.test(t)) { inGenerated = true; return }
      if (/^<!--\s*END:/.test(t)) { inGenerated = false; return }
      for (const p of PATTERNS) {
        if (p.re.test(line)) {
          findings.push({
            file: rel,
            line: fmLineCount + 1 + i,
            sev: p.sev,
            label: p.label,
            text: t.slice(0, 140),
            generated: inGenerated,
          })
        }
      }
    })
  }
}

// Split hand-authored prose (the firewall's concern) from generated-block
// content (regenerated from source-page frontmatter; fixed at the source).
const prose = findings.filter((f) => !f.generated)
const gen = findings.filter((f) => f.generated)

const sevRank = { HIGH: 0, MEDIUM: 1, SOFT: 2 }
const byFile = new Map()
for (const f of prose) {
  if (!byFile.has(f.file)) byFile.set(f.file, [])
  byFile.get(f.file).push(f)
}
const fileOrder = [...byFile.entries()].sort((a, b) => {
  const aw = Math.min(...a[1].map((x) => sevRank[x.sev]))
  const bw = Math.min(...b[1].map((x) => sevRank[x.sev]))
  return aw - bw || b[1].length - a[1].length
})

const high = prose.filter((f) => f.sev === "HIGH").length
const medium = prose.filter((f) => f.sev === "MEDIUM").length
const soft = prose.filter((f) => f.sev === "SOFT").length

console.log("Part 2 firewall audit — wiki/synthesis + wiki/metals (hand-authored prose)")
console.log("=".repeat(60))
for (const [file, fs_] of fileOrder) {
  const h = fs_.filter((x) => x.sev === "HIGH").length
  console.log(`\n${file}  (${fs_.length} hits${h ? `, ${h} HIGH` : ""})`)
  for (const f of fs_.sort((a, b) => sevRank[a.sev] - sevRank[b.sev] || a.line - b.line)) {
    console.log(`  ${f.sev.padEnd(6)} L${f.line}  ${f.label}`)
    console.log(`         | ${f.text}`)
  }
}
console.log("\n" + "=".repeat(60))
if (prose.length === 0) {
  console.log("✓ hand-authored prose is clean — no HMT&C advocacy in the scholarly-claim pages.")
} else {
  console.log(`${prose.length} hand-authored-prose hits across ${byFile.size} pages — ${high} HIGH, ${medium} MEDIUM, ${soft} SOFT`)
  console.log("Neutralise to literature-native prose (state the science, drop the HMT&C framing).")
  console.log("HMT&C-facing material belongs on the certifier side (one-way citation in).")
}
if (gen.length) {
  const genFiles = [...new Set(gen.map((f) => f.file))]
  console.log(`\nℹ ${gen.length} hit(s) inside GENERATED blocks (source-legend etc.) on ${genFiles.length} page(s): ${genFiles.join(", ")}`)
  console.log("  These regenerate from source-page frontmatter — fix at the source / generator, not in the page.")
}

if (strict && high + medium > 0) {
  console.log("\n✗ --strict: hand-authored HIGH/MEDIUM firewall hits remain; failing.")
  process.exit(1)
}
process.exit(0)
