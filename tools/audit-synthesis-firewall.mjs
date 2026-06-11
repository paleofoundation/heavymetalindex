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
    lines.forEach((line, i) => {
      // Skip the generated peer-review / page-history footer blocks and the
      // marker comments — those are tool-owned, not synthesis prose.
      if (/^<!--\s*(BEGIN|END):/.test(line.trim())) return
      for (const p of PATTERNS) {
        if (p.re.test(line)) {
          findings.push({
            file: rel,
            line: fmLineCount + 1 + i,
            sev: p.sev,
            label: p.label,
            text: line.trim().slice(0, 140),
          })
        }
      }
    })
  }
}

// Per-file rollup, worst severity first.
const sevRank = { HIGH: 0, MEDIUM: 1, SOFT: 2 }
const byFile = new Map()
for (const f of findings) {
  if (!byFile.has(f.file)) byFile.set(f.file, [])
  byFile.get(f.file).push(f)
}
const fileOrder = [...byFile.entries()].sort((a, b) => {
  const aw = Math.min(...a[1].map((x) => sevRank[x.sev]))
  const bw = Math.min(...b[1].map((x) => sevRank[x.sev]))
  return aw - bw || b[1].length - a[1].length
})

const high = findings.filter((f) => f.sev === "HIGH").length
const medium = findings.filter((f) => f.sev === "MEDIUM").length
const soft = findings.filter((f) => f.sev === "SOFT").length

console.log("Part 2 firewall audit — wiki/synthesis + wiki/metals")
console.log("=".repeat(60))
if (findings.length === 0) {
  console.log("✓ clean — no HMT&C advocacy in the scholarly-claim pages.")
  process.exit(0)
}
for (const [file, fs_] of fileOrder) {
  const h = fs_.filter((x) => x.sev === "HIGH").length
  console.log(`\n${file}  (${fs_.length} hits${h ? `, ${h} HIGH` : ""})`)
  for (const f of fs_.sort((a, b) => sevRank[a.sev] - sevRank[b.sev] || a.line - b.line)) {
    console.log(`  ${f.sev.padEnd(6)} L${f.line}  ${f.label}`)
    console.log(`         | ${f.text}`)
  }
}
console.log("\n" + "=".repeat(60))
console.log(
  `${findings.length} hits across ${byFile.size} pages — ${high} HIGH, ${medium} MEDIUM, ${soft} SOFT`,
)
console.log(
  "Neutralise to literature-native prose (state the science, drop the HMT&C framing).",
)
console.log("HMT&C-facing material belongs on the certifier side (one-way citation in).")

if (strict && high + medium > 0) {
  console.log("\n✗ --strict: HIGH/MEDIUM firewall hits remain; failing.")
  process.exit(1)
}
process.exit(0)
