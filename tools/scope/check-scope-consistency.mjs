#!/usr/bin/env node
// check-scope-consistency.mjs — the gate that keeps prose scope and regex denylists in sync.
//
// THE PROBLEM THIS SOLVES (2026-06-18). HMI's inclusion scope is defined in prose
// (CLAUDE.md inclusion-by-default, the lanes memo) but ENFORCED by hand-maintained
// keyword denylists (tools/wishlist/find-candidates.mjs NEGATIVE_KEYWORDS, borrowed
// by the /discover skill). Those denylists drift: terms get added to make one
// fetcher more precise and silently amputate an entire in-scope literature
// (remediation, exposure, microbiome, reviews) elsewhere — quietly falsifying the
// "we reviewed the complete literature" claim the whole HMI thesis rests on.
//
// THE INVARIANT. A denylist keyword that matches a documented in_scope category in
// tools/scope/scope-manifest.json is a build-blocking contradiction. Deprioritizing
// in a ranking is fine; hard-excluding something in-scope is not.
//
// Usage: node tools/scope/check-scope-consistency.mjs [--warn-only] [--json]
//   exit 1 if any contradiction is found (unless --warn-only).

import { readFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, "../..")
const MANIFEST = resolve(__dirname, "scope-manifest.json")

const argv = process.argv.slice(2)
const WARN_ONLY = argv.includes("--warn-only")
const AS_JSON = argv.includes("--json")

const manifest = JSON.parse(readFileSync(MANIFEST, "utf-8"))

// ── collect category term sets ───────────────────────────────────────────────
function termsOf(section) {
  const out = []
  for (const [cat, body] of Object.entries(section)) {
    if (cat.startsWith("_")) continue
    for (const t of body.terms || []) out.push({ cat, term: t.toLowerCase() })
  }
  return out
}
const inScope = termsOf(manifest.in_scope)
const outScope = termsOf(manifest.out_of_scope)
const ambiguous = termsOf(manifest.ambiguous)

// ── matching: exact first, then bidirectional substring with a min-length guard.
// Exact-first stops a bare term like "battery" (out_of_scope.materials_science)
// from being mislabeled by a substring hit on an ambiguous "battery workers".
function exactMatch(denyTerm, catTerms) {
  const d = denyTerm.toLowerCase()
  const hit = catTerms.find(({ term }) => d === term)
  return hit ? hit.cat : null
}
function fuzzyMatch(denyTerm, catTerms) {
  const d = denyTerm.toLowerCase()
  for (const { cat, term } of catTerms) {
    if (term.length < 4) {
      if (d === term) return cat
    } else if (d.includes(term) || term.includes(d)) {
      return cat
    }
  }
  return null
}

// ── extract a NEGATIVE_KEYWORDS-style array from a source file ───────────────
function extractDenylist(file, symbol) {
  const src = readFileSync(resolve(REPO_ROOT, file), "utf-8")
  const m = src.match(new RegExp(`const ${symbol}\\s*=\\s*\\[([\\s\\S]*?)\\n\\]`))
  if (!m) throw new Error(`Could not find ${symbol} in ${file}`)
  // drop comment-only lines, then pull quoted strings from the remaining code
  const codeLines = m[1].split("\n").filter((l) => !l.trim().startsWith("//"))
  return [...codeLines.join("\n").matchAll(/"([^"]+)"/g)].map((x) => x[1])
}

// ── run the checks ───────────────────────────────────────────────────────────
const contradictions = []
const flaggedAmbiguous = []
const undeclared = []
let totalTerms = 0

for (const { file, symbol } of manifest.denylists_checked) {
  const terms = extractDenylist(file, symbol)
  totalTerms += terms.length
  for (const term of terms) {
    // in_scope contradiction takes priority (exact or substring)
    const inHit = exactMatch(term, inScope) || fuzzyMatch(term, inScope)
    if (inHit) {
      contradictions.push({ file, term, in_scope_category: inHit })
      continue
    }
    // declared elsewhere — exact preferred over substring
    if (exactMatch(term, outScope)) continue
    if (exactMatch(term, ambiguous)) {
      flaggedAmbiguous.push({ file, term })
      continue
    }
    if (fuzzyMatch(term, outScope)) continue
    if (fuzzyMatch(term, ambiguous)) {
      flaggedAmbiguous.push({ file, term })
      continue
    }
    undeclared.push({ file, term })
  }
}

if (AS_JSON) {
  console.log(JSON.stringify({ contradictions, flaggedAmbiguous, undeclared, totalTerms }, null, 2))
} else {
  console.log(`scope-consistency: checked ${totalTerms} denylist term(s) against scope-manifest.json`)
  if (contradictions.length) {
    console.log(`\n  ✗ ${contradictions.length} CONTRADICTION(S) — denylist term matches an in_scope category:`)
    for (const c of contradictions) {
      console.log(`      "${c.term}"  (${c.file})  -> in_scope.${c.in_scope_category}`)
    }
    console.log(`\n  These keywords hard-exclude documented in-scope literature. Remove them from the`)
    console.log(`  denylist (deprioritize via ranking instead), or move the category to out_of_scope`)
    console.log(`  in the manifest with rationale. See tools/scope/README.md.`)
  } else {
    console.log(`  ✓ no contradictions — no in-scope literature is hard-excluded.`)
  }
  if (flaggedAmbiguous.length) {
    console.log(`\n  ⚠ ${flaggedAmbiguous.length} denylisted term(s) flagged 'ambiguous' (need Karen's scope decision; not blocking): ${flaggedAmbiguous.map((a) => `"${a.term}"`).join(", ")}`)
  }
  if (undeclared.length) {
    console.log(`\n  · ${undeclared.length} denylist term(s) not yet categorized in the manifest (informational): ${undeclared.slice(0, 12).map((u) => `"${u.term}"`).join(", ")}${undeclared.length > 12 ? " …" : ""}`)
  }
}

if (contradictions.length && !WARN_ONLY) {
  process.exit(1)
}
