#!/usr/bin/env node
// claim-hash.mjs — the canonical "claim hash" for a compiled HMTc standard, and the
// fail-closed guard that makes a SILENT numeric change impossible (ORDER S-DOI-1c).
//
// WHY. A minted standard is a living concept with immutable, separately-resolvable
// editions. The load-bearing invariant is: the exact set of certification claims a
// standard makes on a given date must be reconstructable, and NO limit cell may change
// without (a) a version bump, (b) a version-history change note, and (c) a regenerated
// evidence bundle. To enforce that mechanically we reduce a compiled standard to its
// certification-bearing content — limit cells + basis + provenance/anchor ids + panel +
// scope — hash it deterministically, and record that hash on the current edition in
// data/standards/version-history/<page-slug>.json. If the compiled JSON's recomputed
// hash ever diverges from the recorded hash without a bump, `--check` fails the build.
//
// The hash deliberately EXCLUDES cosmetic fields (labels, prose rationale, method
// string, generated_from) so a typo fix does not force a version bump — only a change
// to a value, type, basis, provenance anchor, panel membership, or scope moves it.
//
// USAGE:
//   node tools/standards/claim-hash.mjs <slug> [--compiled-dir <dir>] [--json]
//   node tools/standards/claim-hash.mjs --check <slug> [--compiled-dir <dir>]
//       [--history-dir <dir>]           # exit 1 if compiled hash != recorded current-edition hash
//   node tools/standards/claim-hash.mjs --check-all [--compiled-dir ...] [--history-dir ...]
//
// EXPORTS: canonicalClaim(std), claimHash(std)  — pure, no I/O.

import { createHash } from "node:crypto"
import { readFileSync, existsSync, readdirSync } from "node:fs"
import { join, dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "../..")

// The certification-bearing projection of one analyte cell. Everything that decides a
// pass/fail or names the sovereign source of a limit is IN; prose/labels are OUT.
function claimCell(cell) {
  if (!cell || typeof cell !== "object") return null
  const c = {
    type: cell.type ?? null,
    value: cell.value ?? null,
  }
  // Provenance / anchor ids — the "which sovereign instrument" identity of the limit.
  if (cell.binding_jurisdiction != null) c.binding_jurisdiction = cell.binding_jurisdiction
  if (cell.binding_id != null) c.binding_id = cell.binding_id
  if (cell.source_id != null) c.source_id = cell.source_id
  if (cell.source_jurisdiction != null) c.source_jurisdiction = cell.source_jurisdiction
  if (cell.subsumed_by != null) c.subsumed_by = cell.subsumed_by
  if (cell.binding_parent_value !== undefined) c.binding_parent_value = cell.binding_parent_value ?? null
  if (cell.binding_parent_source != null) c.binding_parent_source = cell.binding_parent_source
  if (cell.capped_by_parent) c.capped_by_parent = true
  if (cell.uncapped_species_value != null) c.uncapped_species_value = cell.uncapped_species_value
  if (cell.uncapped_species_id != null) c.uncapped_species_id = cell.uncapped_species_id
  if (cell.basis_note != null) c.basis_note = cell.basis_note
  if (cell.basis_class != null) c.basis_class = cell.basis_class
  // A control cell's reference method IS certification-bearing (it decides the assay).
  if (cell.reference_method != null) c.reference_method = cell.reference_method
  // The full per-country derivation set (ids + values) — the "show your work" that a
  // change to the binding pick would silently move if not hashed.
  if (cell.per_country && typeof cell.per_country === "object") {
    c.per_country = {}
    for (const code of Object.keys(cell.per_country).sort()) {
      const e = cell.per_country[code] || {}
      c.per_country[code] = { value: e.value ?? null, id: e.id ?? null, converted: !!e.converted }
    }
  }
  if (cell.candidate && typeof cell.candidate === "object") {
    const cd = cell.candidate
    c.candidate = {
      type: cd.type ?? null,
      value: cd.value ?? null,
      source_jurisdiction: cd.source_jurisdiction ?? null,
      source_id: cd.source_id ?? null,
    }
  }
  return c
}

// Deterministic, key-sorted canonical object over the whole standard.
export function canonicalClaim(std) {
  const variants = {}
  for (const vk of Object.keys(std.variants || {}).sort()) {
    const vobj = std.variants[vk] || {}
    const cells = {}
    for (const metal of Object.keys(vobj).sort()) {
      const cc = claimCell(vobj[metal])
      if (cc) cells[metal] = cc
    }
    variants[vk] = cells
  }
  return {
    schema: "hmtc-claim-hash/v1",
    slug: std.slug ?? null,
    scope: {
      native_basis: std.native_basis ?? null,
      canned: std.canned ?? null,
    },
    // panel = the exact set of analytes carrying a cell, per variant (membership matters:
    // dropping/adding an analyte is a material change).
    panel: Object.fromEntries(
      Object.keys(variants).map((vk) => [vk, Object.keys(variants[vk]).sort()]),
    ),
    variants,
  }
}

// Stable stringify: JSON with sorted keys at every level.
function stableStringify(obj) {
  if (obj === null || typeof obj !== "object") return JSON.stringify(obj)
  if (Array.isArray(obj)) return "[" + obj.map(stableStringify).join(",") + "]"
  const keys = Object.keys(obj).sort()
  return "{" + keys.map((k) => JSON.stringify(k) + ":" + stableStringify(obj[k])).join(",") + "}"
}

export function claimHash(std) {
  const canon = canonicalClaim(std)
  return "sha256:" + createHash("sha256").update(stableStringify(canon)).digest("hex")
}

// ── CLI ──────────────────────────────────────────────────────────────────────
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

function loadStd(slug, compiledDir) {
  const p = join(compiledDir, `${slug}.json`)
  if (!existsSync(p)) return null
  return JSON.parse(readFileSync(p, "utf8"))
}

function recordedHash(slug, historyDir) {
  const p = join(historyDir, `${slug}.json`)
  if (!existsSync(p)) return { found: false }
  const rec = JSON.parse(readFileSync(p, "utf8"))
  const cur = (rec.versions || []).find((v) => v.version === rec.current_version) ||
    (rec.versions || []).find((v) => v.status === "current")
  return { found: true, hash: cur && cur.claim_hash ? cur.claim_hash : null, version: cur && cur.version, rec }
}

function main() {
  const args = parseArgs(process.argv.slice(2))
  const compiledDir = args.flags["compiled-dir"] || join(REPO, "data/workbench/standards/cat1-compiled")
  const historyDir = args.flags["history-dir"] || join(REPO, "data/standards/version-history")

  if (args.flags["check-all"]) {
    if (!existsSync(historyDir)) { console.error(`no history dir: ${historyDir}`); process.exit(2) }
    let fails = 0, checked = 0
    for (const f of readdirSync(historyDir).filter((x) => x.endsWith(".json"))) {
      const slug = f.replace(/\.json$/, "")
      const std = loadStd(slug, compiledDir)
      if (!std) continue // history record without a cat1-compiled JSON (other category) — skip
      const r = recordedHash(slug, historyDir)
      if (!r.hash) continue // no claim_hash recorded yet — not guarded (opt-in)
      checked++
      const cur = claimHash(std)
      if (cur !== r.hash) {
        fails++
        console.error(`✗ ${slug} v${r.version}: compiled hash ${cur} != recorded ${r.hash}`)
      }
    }
    console.log(`claim-hash --check-all: ${checked} guarded record(s), ${fails} drift failure(s).`)
    process.exit(fails ? 1 : 0)
  }

  const check = !!args.flags.check
  const slug = check ? (args.flags.check === true ? args._[0] : args.flags.check) : args._[0]
  if (!slug) { console.error("usage: claim-hash.mjs <slug> | --check <slug> | --check-all"); process.exit(2) }
  const std = loadStd(slug, compiledDir)
  if (!std) { console.error(`compiled JSON not found for ${slug} in ${compiledDir}`); process.exit(2) }
  const hash = claimHash(std)

  if (check) {
    const r = recordedHash(slug, historyDir)
    if (!r.found) { console.error(`✗ ${slug}: no version-history record in ${historyDir}`); process.exit(1) }
    if (!r.hash) { console.error(`✗ ${slug}: current edition v${r.version} has no claim_hash recorded`); process.exit(1) }
    if (hash !== r.hash) {
      console.error(`✗ ${slug}: claim hash DRIFT.`)
      console.error(`    compiled:  ${hash}`)
      console.error(`    recorded:  ${r.hash} (v${r.version})`)
      console.error(`    A limit cell / basis / provenance / panel / scope changed. This is a MATERIAL revision:`)
      console.error(`    bump the version, add a version-history change note, and regenerate the frozen evidence bundle.`)
      console.error(`    A silent numeric change is forbidden (ORDER S-DOI-1c).`)
      process.exit(1)
    }
    console.log(`✓ ${slug} v${r.version}: claim hash matches recorded (${hash}).`)
    process.exit(0)
  }

  if (args.flags.json) {
    console.log(JSON.stringify({ slug, claim_hash: hash, canonical: canonicalClaim(std) }, null, 2))
  } else {
    console.log(hash)
  }
}

if (import.meta.url === `file://${process.argv[1]}`) main()
