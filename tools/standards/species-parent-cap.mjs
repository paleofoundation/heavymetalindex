#!/usr/bin/env node
// species-parent-cap.mjs — ORDER S-DOI-IAS-CAP-1 (not arsenic-only).
//
// Physics identity, published as a claim-surface kill-gate:
//   iAs  ≤ tAs
//   MeHg ≤ tHg
//   Cr-VI ≤ total Cr
//
// When BOTH the species cell and its parent total are numeric, the published
// species ceiling is min(species_gov_or_read_across, parent_total_limit).
// Provenance must disclose the cap. A compiled or frozen claim that still
// prints species > parent is a hard FAIL — compiler, freeze, and lint.
//
// USAGE:
//   node tools/standards/species-parent-cap.mjs --check
//   node tools/standards/species-parent-cap.mjs --check --compiled-dir <dir>
//
// EXPORTS: applySpeciesParentCap, findSpeciesParentViolations,
//          assertSpeciesLeqParent, assertStandardSpeciesLeqParent,
//          scanCompiledTree, SPECIES_PARENT_PAIRS

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs"
import { join, dirname, resolve, relative } from "node:path"
import { fileURLToPath } from "node:url"

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "../..")

export const SPECIES_PARENT_PAIRS = [
  { species: "iAs", parent: "tAs", identity: "iAs≤tAs" },
  { species: "MeHg", parent: "tHg", identity: "MeHg≤tHg" },
  { species: "Cr-VI", parent: "Cr", parentAliases: ["Cr-total"], identity: "Cr-VI≤Cr" },
]

export function cellNumeric(cell) {
  if (!cell || typeof cell !== "object") return null
  const raw = cell.value_exact != null ? cell.value_exact : cell.value
  if (raw == null || raw === "") return null
  const n = Number(raw)
  return Number.isFinite(n) ? n : null
}

function parentCell(cells, pair) {
  if (!cells) return null
  if (cells[pair.parent]) return cells[pair.parent]
  for (const alias of pair.parentAliases || []) {
    if (cells[alias]) return cells[alias]
  }
  return null
}

function capNote(pair, uncapped, uncappedJur, uncappedId, parentVal, parentJur, parentId) {
  const speciesSrc = [uncappedJur, uncappedId].filter(Boolean).join(" ")
  const parentSrc = [parentJur, parentId].filter(Boolean).join(" ")
  return `${pair.species} ${uncapped} µg/kg${speciesSrc ? ` (${speciesSrc})` : ""} capped by ${pair.parent} ${parentVal} µg/kg${parentSrc ? ` (${parentSrc})` : ""} via ${pair.identity}`
}

// Mutates cells. Returns the cap events applied.
export function applySpeciesParentCap(cells, ctx = {}) {
  const events = []
  if (!cells || typeof cells !== "object") return events
  for (const pair of SPECIES_PARENT_PAIRS) {
    const s = cells[pair.species]
    const p = parentCell(cells, pair)
    const sv = cellNumeric(s)
    const pv = cellNumeric(p)
    if (sv == null || pv == null) continue
    if (sv <= pv) continue
    const uncappedId = s.binding_id || s.source_id || null
    const uncappedJur = s.binding_jurisdiction || s.source_jurisdiction || null
    const parentId = p.binding_id || p.source_id || pair.parent
    const parentJur = p.binding_jurisdiction || p.source_jurisdiction || null
    const published = p.value != null ? p.value : pv
    const publishedExact = p.value_exact != null ? p.value_exact : pv
    const note = capNote(pair, sv, uncappedJur, uncappedId, published, parentJur, parentId)
    s.value = published
    s.value_exact = publishedExact
    s.capped_by_parent = true
    s.uncapped_species_value = sv
    s.uncapped_species_id = uncappedId
    s.uncapped_species_jurisdiction = uncappedJur
    s.binding_parent_value = published
    s.binding_parent_source = parentJur
    s.parent_total_tighter = true
    s.cap_note = note
    s.reflex_note = note
    s.basis_note = note
    events.push({
      slug: ctx.slug || null,
      variant: ctx.variant || null,
      species: pair.species,
      parent: pair.parent,
      from: sv,
      to: published,
      note,
    })
  }
  return events
}

export function findSpeciesParentViolations(cells, ctx = {}) {
  const violations = []
  if (!cells || typeof cells !== "object") return violations
  for (const pair of SPECIES_PARENT_PAIRS) {
    const s = cells[pair.species]
    const p = parentCell(cells, pair)
    const sv = cellNumeric(s)
    const pv = cellNumeric(p)
    if (sv == null || pv == null) continue
    if (sv > pv) {
      violations.push({
        slug: ctx.slug || null,
        variant: ctx.variant || null,
        species: pair.species,
        parent: pair.parent,
        speciesValue: sv,
        parentValue: pv,
        identity: pair.identity,
      })
    }
  }
  return violations
}

export function formatViolation(v) {
  const loc = [v.slug, v.variant].filter(Boolean).join("/")
  return `${loc ? loc + ": " : ""}${v.species} ${v.speciesValue} > ${v.parent} ${v.parentValue} (violates ${v.identity})`
}

export function assertSpeciesLeqParent(cells, ctx = {}) {
  const violations = findSpeciesParentViolations(cells, ctx)
  if (violations.length) {
    throw new Error(`species-parent-cap FAIL: ${violations.map(formatViolation).join("; ")}`)
  }
  return true
}

export function assertStandardSpeciesLeqParent(std, extra = {}) {
  const slug = extra.slug || (std && std.slug) || null
  const all = []
  for (const [variant, cells] of Object.entries((std && std.variants) || {})) {
    all.push(...findSpeciesParentViolations(cells, { slug, variant }))
  }
  if (all.length) {
    throw new Error(`species-parent-cap FAIL: ${all.map(formatViolation).join("; ")}`)
  }
  return true
}

export function scanCompiledTree(rootDir) {
  const violations = []
  if (!existsSync(rootDir)) return violations
  const stack = [rootDir]
  while (stack.length) {
    const dir = stack.pop()
    for (const name of readdirSync(dir)) {
      const p = join(dir, name)
      const st = statSync(p)
      if (st.isDirectory()) {
        stack.push(p)
        continue
      }
      if (!name.endsWith(".json")) continue
      let std
      try { std = JSON.parse(readFileSync(p, "utf8")) } catch { continue }
      if (!std || !std.variants || typeof std.variants !== "object") continue
      const slug = std.slug || name.replace(/\.json$/, "")
      for (const [variant, cells] of Object.entries(std.variants)) {
        allPush(violations, findSpeciesParentViolations(cells, { slug, variant, path: relative(REPO, p) }))
      }
    }
  }
  return violations
}

function allPush(arr, items) {
  for (const item of items) arr.push(item)
}

function parseArgs(argv) {
  const a = { _: [], flags: {} }
  for (let i = 0; i < argv.length; i++) {
    const t = argv[i]
    if (t.startsWith("--")) {
      const key = t.slice(2)
      const next = argv[i + 1]
      if (next === undefined || next.startsWith("--")) a.flags[key] = true
      else { a.flags[key] = next; i++ }
    } else a._.push(t)
  }
  return a
}

function main() {
  const args = parseArgs(process.argv.slice(2))
  const compiledRoot = args.flags["compiled-dir"] || join(REPO, "data/workbench/standards")
  if (!args.flags.check && args._[0] !== "check") {
    console.error("usage: species-parent-cap.mjs --check [--compiled-dir <dir>]")
    process.exit(2)
  }
  const violations = scanCompiledTree(compiledRoot)
  if (violations.length) {
    console.error(`species-parent-cap --check: ${violations.length} violation(s)`)
    for (const v of violations) console.error(`  ✗ ${formatViolation(v)}`)
    process.exit(1)
  }
  console.log("species-parent-cap --check: 0 violations (iAs≤tAs, MeHg≤tHg, Cr-VI≤Cr).")
  process.exit(0)
}

if (import.meta.url === `file://${process.argv[1]}`) main()
