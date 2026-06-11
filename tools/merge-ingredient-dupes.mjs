#!/usr/bin/env node
// One-time(ish) ingredient-page deduplication.
//
// CONTEXT
// -------
// The ingredient corpus accumulated duplicate pages from inconsistent ingest
// slugs (singular/plural and naming variants): carrot/carrots, peach/peaches,
// maize/corn, etc. The grouped index (tools/build-ingredient-index.mjs) made
// them visible side by side. This tool consolidates a curated set of true
// duplicates onto a single canonical page, plus removes empty provisional
// scaffolds that shadow a fully-populated page and two files with invalid
// (space-containing) slugs.
//
// SAFETY MODEL (why this does not lose evidence or break links)
// -------------------------------------------------------------
//   * contamination_profile frontmatter is synthesis output and is NOT
//     regenerated in prebuild, so the canonical's existing values are left
//     untouched (no fabrication). The dropped page's sources re-credit the
//     canonical through the alias machinery below; the canonical's profile is
//     then slightly under-inclusive until the next synthesis pass picks up the
//     n_studies change (CLAUDE.md Part 9 trigger). That is the normal
//     between-syntheses state and is defensible — it never overstates.
//   * Inbound `[[ingredients/<dup>]]` links (including from source pages) must
//     keep resolving after the dup file is deleted. Quartz AliasRedirects emits
//     a redirect at an alias slug. A BARE alias ("carrots") emits at top-level
//     /carrots — which does NOT catch ingredients/carrots links — so we also
//     add a PATH-QUALIFIED alias ("ingredients/carrots") which emits the
//     redirect at /ingredients/carrots. Both are added:
//       - bare slug + human title  -> alias-aware source counting/routing
//         (tools/sync-source-counts.mjs, tools/evidence/build-routing-audit.mjs
//         slugify alias strings, dropping "/", so the bare form is what those
//         tools match)
//       - ingredients/<dup>        -> Quartz inbound-wikilink redirect
//   * Only identity aliases for the dropped page are added to the canonical.
//     The dropped page's OWN foreign aliases (e.g. vegetable-oil aliasing the
//     separate real page palm-oil) are intentionally NOT copied, to avoid
//     silently re-pointing unrelated pages.
//
// Pages deliberately NOT merged (kept separate as intentional broad/narrow or
// product-form distinctions): leafy-greens vs leafy-vegetables, meat vs
// meat-and-poultry, mushrooms vs wild-mushrooms vs canned-mushrooms.
//
// Run: node tools/merge-ingredient-dupes.mjs [--apply]   (default: dry-run)

import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const DIR = path.join(process.cwd(), "wiki/ingredients")
const APPLY = process.argv.includes("--apply")

// canonical <- [dup, ...]. Each dup page is deleted; its identity is aliased
// onto the canonical.
const MERGES = [
  { canonical: "carrot", dups: ["carrots"] },
  { canonical: "cucumber", dups: ["cucumbers"] },
  { canonical: "pear", dups: ["pears"] },
  { canonical: "peach", dups: ["peaches"] },
  { canonical: "fruit", dups: ["fruits"] },
  { canonical: "cashews", dups: ["cashew-nuts"] },
  { canonical: "vegetable-oils", dups: ["vegetable-oil"] },
  { canonical: "corn", dups: ["maize"] },
  // Empty provisional scaffolds shadowing a populated/canonical page:
  { canonical: "breastmilk", dups: ["human-milk"] },
  { canonical: "infant-formula", dups: ["formula"] },
  { canonical: "meat-and-poultry", dups: ["meat-poultry"] },
]

// Invalid slug files (spaces) — pure defects. "infant formula.md" also
// slug-collides with infant-formula.md. No inbound wikilinks.
const DELETE_INVALID = ["breast milk", "infant formula"]

function titleFor(slug) {
  return slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ")
}

function readFm(slug) {
  const p = path.join(DIR, `${slug}.md`)
  if (!fs.existsSync(p)) return null
  const raw = fs.readFileSync(p, "utf8")
  let parsed
  try {
    parsed = matter(raw)
  } catch {
    return null
  }
  return { p, raw, data: parsed.data || {} }
}

// Serialize a single alias item for an inline YAML flow sequence. Quote when it
// contains anything beyond [A-Za-z0-9_-] (spaces, slash, comma, colon, ...).
function ser(item) {
  return /^[A-Za-z0-9][A-Za-z0-9_-]*$/.test(item) ? item : JSON.stringify(item)
}

const log = []
let changed = 0

for (const { canonical, dups } of MERGES) {
  const c = readFm(canonical)
  if (!c) {
    log.push(`SKIP merge: canonical ${canonical} not found`)
    continue
  }
  const existing = new Set((Array.isArray(c.data.aliases) ? c.data.aliases : []).map(String))
  const newItems = []
  const deletedDups = []

  for (const dup of dups) {
    const d = readFm(dup)
    if (!d) {
      log.push(`SKIP ${canonical} <- ${dup}: dup not found (already merged?)`)
      continue
    }
    // identity aliases: bare slug + human title (alias-aware counting/routing),
    // path-qualified (Quartz inbound-wikilink redirect).
    for (const a of [dup, titleFor(dup), `ingredients/${dup}`]) {
      if (!existing.has(a)) {
        newItems.push(a)
        existing.add(a)
      }
    }
    if (APPLY) fs.rmSync(d.p)
    deletedDups.push(dup)
    log.push(`${APPLY ? "MERGED" : "would merge"} ${dup} -> ${canonical} (delete wiki/ingredients/${dup}.md)`)
    changed++
  }

  if (newItems.length) {
    // Surgically append into the single-line `aliases: [...]` field, preserving
    // every existing item verbatim (minimal diff, no frontmatter reserialize).
    const m = c.raw.match(/^aliases:[ \t]*\[(.*)\][ \t]*$/m)
    if (!m) {
      log.push(`  !! ${canonical}: no single-line aliases:[...] field — left UNCHANGED, fix by hand`)
      continue
    }
    const inner = m[1].trim()
    const added = newItems.map(ser).join(", ")
    const nextInner = inner ? `${inner}, ${added}` : added
    const nextRaw = c.raw.replace(m[0], `aliases: [${nextInner}]`)
    if (APPLY) fs.writeFileSync(c.p, nextRaw, "utf8")
    log.push(`  ${canonical} aliases += [${newItems.join(", ")}]`)
  }
}

for (const name of DELETE_INVALID) {
  const p = path.join(DIR, `${name}.md`)
  if (fs.existsSync(p)) {
    if (APPLY) fs.rmSync(p)
    log.push(`${APPLY ? "DELETED" : "would delete"} invalid-slug file: wiki/ingredients/${name}.md`)
    changed++
  } else {
    log.push(`SKIP invalid: ${name}.md not found`)
  }
}

console.log(log.join("\n"))
console.log(`\n${APPLY ? "Applied" : "Dry-run"}: ${changed} page(s) removed/merged. ${APPLY ? "" : "Re-run with --apply to write."}`)
console.log("After --apply: run `node tools/build-ingredient-index.mjs && node tools/evidence/build-routing-audit.mjs && node tools/sync-source-counts.mjs`, then rebuild.")
