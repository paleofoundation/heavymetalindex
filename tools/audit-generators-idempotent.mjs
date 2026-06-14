#!/usr/bin/env node
// Idempotency guard for the marker-block wiki generators.
//
// Every generator that rewrites a `<!-- BEGIN: ... -->` / `<!-- END: ... -->`
// block must converge: applying it to its own output is a no-op. When that
// property breaks, the served Vercel build (which re-runs the generators in
// prebuild) silently diverges from git, violating the CLAUDE.md Part 4
// reconstructibility guarantee. The canonical failure was the source-legend
// `$1`-backreference bug (a preserved cell containing "$12–18 billion" made
// String.replace re-insert the entire matched block on every run).
//
// This script proves convergence empirically: it runs the generators twice in
// a row and asserts the second pass changes nothing under wiki/. It does NOT
// require the committed tree to already be at the fixed point — it compares the
// first settled pass against the second, so staleness alone is not flagged,
// only true non-idempotency.
//
// Usage:
//   node tools/audit-generators-idempotent.mjs              # prebuild generators, build-blocking
//   node tools/audit-generators-idempotent.mjs --all        # also the non-prebuild appliers
//   node tools/audit-generators-idempotent.mjs --warn-only  # report but exit 0

import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import { execFileSync } from "node:child_process"

const repoRoot = process.cwd()
const wikiRoot = path.join(repoRoot, "wiki")
const args = process.argv.slice(2)
const warnOnly = args.includes("--warn-only")
const includeAll = args.includes("--all")

// The marker-block generators that run in prebuild and rewrite wiki/ in place.
const PREBUILD_GENERATORS = [
  "tools/evidence/build-source-legend.mjs",
  "tools/autonomy/populate-source-legends.mjs",
  "tools/build-corpus-counter.mjs",
]

// Marker-block appliers that run outside prebuild (FRANK / dedicated npm
// scripts) but write the same kind of block; covered with --all.
const EXTRA_GENERATORS = [
  "tools/apply-stakeholder-guides.mjs",
  "tools/evidence/apply-product-hmtc-evidence-summaries.mjs",
  "tools/evidence/apply-product-broad-context-sections.mjs",
]

const generators = includeAll
  ? [...PREBUILD_GENERATORS, ...EXTRA_GENERATORS]
  : PREBUILD_GENERATORS

function walkMarkdown(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...walkMarkdown(full))
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      out.push(full)
    }
  }
  return out
}

// Content-hash every wiki markdown file. Returns Map<relPath, sha256>.
function snapshot() {
  const map = new Map()
  for (const file of walkMarkdown(wikiRoot)) {
    const rel = path.relative(repoRoot, file)
    const hash = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex")
    map.set(rel, hash)
  }
  return map
}

function runGenerators(label) {
  for (const gen of generators) {
    try {
      execFileSync("node", [gen], { cwd: repoRoot, stdio: "ignore" })
    } catch (e) {
      console.error(`  [${label}] generator failed: ${gen}\n    ${e.message}`)
      throw e
    }
  }
}

function diffSnapshots(before, after) {
  const changed = []
  for (const [rel, hash] of after) {
    if (before.get(rel) !== hash) changed.push(rel)
  }
  // Files that vanished between passes are also a divergence.
  for (const rel of before.keys()) {
    if (!after.has(rel)) changed.push(`${rel} (removed)`)
  }
  return changed.sort()
}

console.log(`Idempotency guard: ${generators.length} generator(s)${includeAll ? " (--all)" : ""}`)

// Pass 1 (settle) — bring the tree to the generators' fixed point regardless
// of whether the committed tree was already current.
runGenerators("settle")
const settled = snapshot()

// Pass 2 (verify) — must be a no-op.
runGenerators("verify")
const verified = snapshot()

const changed = diffSnapshots(settled, verified)

if (changed.length === 0) {
  console.log("  PASS — second consecutive run is a no-op across all wiki pages.")
  process.exit(0)
}

console.error("")
console.error(`  FAIL — ${changed.length} page(s) changed on the second consecutive run.`)
console.error(`  These generators are non-idempotent; the served build will diverge from git.`)
console.error(`  Likely cause: a string replacement that interprets $&/$1/$'/\` $\` \` in`)
console.error(`  generated or source-derived text as a backreference. Use a function`)
console.error(`  replacer: text.replace(pattern, () => block).`)
console.error("")
for (const rel of changed.slice(0, 40)) console.error(`    - ${rel}`)
if (changed.length > 40) console.error(`    ... and ${changed.length - 40} more`)

if (warnOnly) {
  console.error("")
  console.error("  (--warn-only: not failing the build)")
  process.exit(0)
}
process.exit(1)
