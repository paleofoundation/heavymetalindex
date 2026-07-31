// Which staged wiki pages actually require a provenance row?
//
// The wiki-edit audit barrier's invariant is "every automated edit to a content
// page carries a row in data/evidence/wiki_edit_audit.jsonl". Enforcing that on
// the whole file was wrong in both directions: it demanded rows for pages whose
// only change is a generator re-rendering its own block, and it would have kept
// demanding nothing at all for the authored prose around that block.
//
// So the test is CONFINEMENT, not exemption. A staged page is exempt only when
// every changed line is one of:
//
//   1. inside a <!-- BEGIN: … --> / <!-- END: … --> generator marker block;
//   2. a frontmatter line whose key is generator-owned (GENERATED_FM_KEYS);
//   3. blank — trailing-newline normalisation, which carries no content.
//
// Anything else — a sentence of prose, a claim value, a frontmatter key outside
// the whitelist — still requires a row. That keeps the barrier's teeth exactly
// where they matter and drops them where they were only producing noise.
//
// Found 2026-07-30: the barrier had never actually held for generated content.
// The generators do not call recordEditOrAbort(), and the two prior
// generated-output commits passed only because those builds happened to touch
// the audit file for unrelated reasons — a gate passing by coincidence.

import { execFileSync } from "node:child_process"

// Frontmatter keys a generator owns outright. Deliberately short: this list
// growing is a signal that a generator has started writing authored fields, not
// a reason to add another entry.
// `updated` was named in the 0.9b spec ("`updated:` and similar") but did not make it
// into the set, because the 36 pages in that build happened to need only the other two.
// Added 2026-07-31 when a regeneration touched five pages whose ENTIRE diff was this one
// line. It is unambiguously generator-owned: CLAUDE.md Part 4 calls it "a convenience,
// not the source of truth", with git history as the versioning mechanism.
// This is the whitelist reaching its specified shape, not growing past it — the 0.9b
// stop-and-report condition is prose changing outside a marker, and no prose changed.
export const GENERATED_FM_KEYS = new Set(["sources", "description", "updated"])

// THE register of wholly generated wiki pages. These carry no marker blocks
// because the entire file is output, so confinement has nothing to confine to.
//
// This list is the single source of truth: RECONCILE.md standing rule 4 and
// CLAUDE.md point AT this constant rather than restating its contents. Two
// lists of the same paths — one in prose, one in code — is the exact
// declaration/implementation drift this repo has produced five times over.
// Add here, and nowhere else.
//
// Target shape (0.9b option b, not yet built): have these pages' generators
// emit marker blocks, at which point confinement applies uniformly and this
// register shrinks toward empty.
export const WHOLLY_GENERATED = [
  /^wiki\/sources\/index\.md$/,
  /^wiki\/sources\/categories\/[^/]+\.md$/,
  /^wiki\/audits\//,
  /^wiki\/coverage\.md$/,
]

const git = (args) => execFileSync("git", args, { encoding: "utf8", maxBuffer: 1 << 28 })

function markerLines(lines) {
  const inside = new Set()
  let depth = 0
  lines.forEach((l, i) => {
    if (/<!--\s*BEGIN:/.test(l)) {
      depth++
      inside.add(i)
    } else if (/<!--\s*END:/.test(l)) {
      inside.add(i)
      depth = Math.max(0, depth - 1)
    } else if (depth > 0) inside.add(i)
  })
  return inside
}

function frontmatterRange(lines) {
  if (!lines.length || lines[0].trim() !== "---") return [0, -1]
  for (let i = 1; i < lines.length; i++) if (lines[i].trim() === "---") return [1, i - 1]
  return [0, -1]
}

function exemptLine(line, idx, markers, fmRange) {
  if (markers.has(idx)) return true
  if (line.trim() === "") return true
  if (idx >= fmRange[0] && idx <= fmRange[1]) {
    const key = line.split(":")[0].trim()
    return GENERATED_FM_KEYS.has(key)
  }
  return false
}

/** Returns the staged pages that still require a provenance row. */
export function pagesRequiringProvenance(paths) {
  const needs = []
  for (const p of paths) {
    if (WHOLLY_GENERATED.some((re) => re.test(p))) continue

    let oldLines = []
    try {
      oldLines = git(["show", `HEAD:${p}`]).split("\n")
    } catch {
      needs.push(p) // new file — always requires a row
      continue
    }
    const newLines = git(["show", `:${p}`]).split("\n") // staged blob
    const [mo, mn] = [markerLines(oldLines), markerLines(newLines)]
    const [fo, fn] = [frontmatterRange(oldLines), frontmatterRange(newLines)]

    // Line-level set difference is enough here: a line that appears in both
    // versions is unchanged regardless of where it moved to.
    const oldSet = new Set(oldLines)
    const newSet = new Set(newLines)
    let dirty = false
    oldLines.forEach((l, i) => {
      if (!newSet.has(l) && !exemptLine(l, i, mo, fo)) dirty = true
    })
    newLines.forEach((l, i) => {
      if (!oldSet.has(l) && !exemptLine(l, i, mn, fn)) dirty = true
    })
    if (dirty) needs.push(p)
  }
  return needs
}
