#!/usr/bin/env node
// lint-version-integrity.mjs — guard the "space for versions to live" against the
// exact ways it can silently start lying.
//
// It fails the build if ANY of the three failure modes the version-pinning design
// exists to prevent is present:
//
//   (1) A page asserts version-pinned resolvability without a frozen_artifact behind
//       it. The strong claim ("reconstruct exactly what the standard required on any
//       date", "immutable, hash-verified snapshot") may render only for an edition
//       that actually has a hash-verified deposit. This is the Daubert-facing honesty
//       invariant: the site never promises a reconstructability the infrastructure
//       does not provide.
//   (2) A version bump lacks a change record. Every edition must carry what_changed +
//       changed_at; a new edition with no change record is a lint failure.
//   (3) A superseded version has no stable URL. Every superseded edition must resolve
//       at its own version route, not share the concept permalink (the exact defect:
//       both editions pointed at /standards/<slug>, which served only the current one).
//
// Plus structural integrity of the register + registry so drift is caught mechanically.
//
// Inputs (overridable for testing):
//   --register <dir>   default data/standards/version-history
//   --manifest <file>  default data/standards/version-pages/manifest.json
//   --pages <dir>      default data/standards/version-pages
//   --quiet            print only failures
// Exit 0 = clean, 1 = one or more violations.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const argv = process.argv.slice(2)
const getFlag = (n, d) => {
  const i = argv.indexOf(n)
  return i >= 0 ? argv[i + 1] : d
}
const QUIET = argv.includes("--quiet")
const REGISTER_DIR = path.resolve(repoRoot, getFlag("--register", "data/standards/version-history"))
const MANIFEST = path.resolve(repoRoot, getFlag("--manifest", "data/standards/version-pages/manifest.json"))
const PAGES_DIR = path.resolve(repoRoot, getFlag("--pages", "data/standards/version-pages"))

// Assertive strong-claim phrases: these ASSERT an immutable, resolvable edition exists.
// They may appear only where a frozen edition backs them. The honest "forthcoming"
// wording ("is being deposited", "snapshot forthcoming") is deliberately NOT here.
const ASSERTIVE_PHRASES = [
  "reconstruct exactly what the",
  "is preserved as an immutable",
  "hash-verified against its deposit",
  // the exact false phrasings on record in the cert defect (OI-20260831), so this lint
  // would flag them if ever pointed at that prose:
  "remain at stable urls so prior citations",
  "superseded versions remain at stable",
]

const errors = []
const warnings = []
const fail = (id, msg) => errors.push(`[${id}] ${msg}`)
const warn = (id, msg) => warnings.push(`[${id}] ${msg}`)

const isISO = (s) => typeof s === "string" && !Number.isNaN(new Date(s).getTime()) && /\d{4}-\d{2}-\d{2}T/.test(s)
const readJSON = (p) => JSON.parse(fs.readFileSync(p, "utf8"))

// ── R-checks: register records ────────────────────────────────────────────────────
let records = []
if (fs.existsSync(REGISTER_DIR)) {
  records = fs
    .readdirSync(REGISTER_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => ({ slug: f.replace(/\.json$/, ""), rec: readJSON(path.join(REGISTER_DIR, f)) }))
}

for (const { slug, rec } of records) {
  const versions = rec.versions || []
  if (versions.length === 0) {
    fail("R1", `${slug}: register record has no versions.`)
    continue
  }
  const currents = versions.filter((v) => v.status === "current")
  if (currents.length !== 1) fail("R2", `${slug}: expected exactly one current edition, found ${currents.length}.`)
  if (rec.current_version && currents[0] && rec.current_version !== currents[0].version)
    fail("R3", `${slug}: current_version=${rec.current_version} but the current edition is v${currents[0].version}.`)

  // Order editions oldest→newest by effective_date to identify the initial edition.
  const ordered = [...versions].sort((a, b) => new Date(a.effective_date) - new Date(b.effective_date))
  const initial = ordered[0]

  for (const v of versions) {
    if (!["current", "superseded"].includes(v.status)) fail("R6", `${slug} v${v.version}: invalid status "${v.status}".`)
    if (!isISO(v.effective_date)) fail("R4", `${slug} v${v.version}: effective_date is not an ISO-8601 timestamp ("${v.effective_date}").`)

    // (2) CHANGE RECORD — every edition must carry one; a bump with none is the failure.
    const chg = v.change || {}
    if (!chg.what_changed || !String(chg.what_changed).trim())
      fail("R5", `${slug} v${v.version}: missing change.what_changed (a version bump with no change record).`)
    if (!isISO(chg.changed_at)) fail("R5", `${slug} v${v.version}: missing/invalid change.changed_at.`)
    // A non-initial edition (an actual bump) must additionally explain itself beyond a bare label.
    if (versions.length > 1 && v.version !== initial.version) {
      if (!chg.what_changed || String(chg.what_changed).trim().length < 8)
        fail("R5b", `${slug} v${v.version}: this is a version bump; change.what_changed must describe what changed.`)
    }

    // frozen_artifact, if present, must be fully formed (never half-populated).
    if (v.frozen_artifact && !v.frozen_artifact.sha256)
      fail("R7", `${slug} v${v.version}: frozen_artifact present but has no sha256.`)
  }
}

// ── M-checks: manifest (the registry) vs register ──────────────────────────────────
let manifest = null
if (fs.existsSync(MANIFEST)) manifest = readJSON(MANIFEST)
else fail("M0", `manifest not found at ${path.relative(repoRoot, MANIFEST)} — run build-version-pages.mjs.`)

const frozenOf = new Map() // `${slug}@${version}` -> boolean pinned
for (const { slug, rec } of records)
  for (const v of rec.versions || []) frozenOf.set(`${slug}@${v.version}`, !!(v.frozen_artifact && v.frozen_artifact.sha256))

if (manifest) {
  const bySlug = new Map(manifest.standards.map((s) => [s.product_slug, s]))
  // Every real register record must be represented in the registry.
  for (const { slug } of records) if (!bySlug.has(slug)) fail("M1", `${slug}: register record missing from manifest.`)

  for (const s of manifest.standards) {
    const multi = s.versions.length > 1
    for (const v of s.versions) {
      // (3) SUPERSEDED URL — every superseded edition needs a stable URL.
      if (v.status === "superseded" && (!v.url || !String(v.url).trim()))
        fail("M2", `${s.product_slug} v${v.version}: superseded edition has no stable URL.`)
      if (!v.url || !String(v.url).trim()) fail("M3", `${s.product_slug} v${v.version}: edition has no URL.`)

      // A multi-edition standard must give each edition its OWN route (not the shared
      // concept permalink) — the structural fix for the exact defect.
      if (multi && v.distinct_route !== true)
        fail("M5", `${s.product_slug} v${v.version}: multi-edition standard must route each edition distinctly (distinct_route=false).`)
      if (multi && v.url === s.concept_url)
        fail("M5", `${s.product_slug} v${v.version}: multi-edition edition shares the concept URL ${s.concept_url} (superseded editions would be unresolvable).`)

      // (1) PINNED CONSISTENCY — pinned_resolvable must match the register's frozen state.
      const key = `${s.product_slug}@${v.version}`
      const regFrozen = frozenOf.has(key) ? frozenOf.get(key) : v.frozen
      if (!!v.pinned_resolvable !== !!regFrozen)
        fail("M4", `${s.product_slug} v${v.version}: manifest pinned_resolvable=${v.pinned_resolvable} but register frozen=${regFrozen}.`)
    }
    const allFrozen = s.versions.length > 0 && s.versions.every((v) => v.frozen)
    if (!!s.fully_reconstructable !== !!allFrozen)
      fail("M4", `${s.product_slug}: fully_reconstructable=${s.fully_reconstructable} but all-editions-frozen=${allFrozen}.`)
  }
}

// ── P-checks: emitted pages must not assert what no frozen edition backs ────────────
function walk(dir) {
  const out = []
  if (!fs.existsSync(dir)) return out
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) out.push(...walk(p))
    else if (e.name.endsWith(".md")) out.push(p)
  }
  return out
}

// Map slug -> whether the standard has any frozen edition (for section-level claims),
// and (slug,version) -> frozen for landing-page-level claims.
const slugHasFrozen = new Map()
for (const { slug, rec } of records) slugHasFrozen.set(slug, (rec.versions || []).some((v) => v.frozen_artifact && v.frozen_artifact.sha256))

for (const file of walk(PAGES_DIR)) {
  const rel = path.relative(repoRoot, file)
  const text = fs.readFileSync(file, "utf8").toLowerCase()
  const hit = ASSERTIVE_PHRASES.find((p) => text.includes(p))
  if (!hit) continue
  // Which standard/edition does this file belong to? A landing page is `v<version>.md`
  // with a digit after the "v" (so it never captures `version-history.section.md`).
  const parts = path.relative(PAGES_DIR, file).split(path.sep)
  const slug = parts[0]
  const vm = parts[1] === "version-history.section.md" ? null : /^v(\d[\w.\-]*)\.md$/.exec(parts[1] || "")
  if (vm) {
    const frozen = frozenOf.get(`${slug}@${vm[1]}`)
    if (!frozen) fail("P1", `${rel}: asserts version-pinned resolvability ("${hit}") but edition v${vm[1]} has no frozen_artifact.`)
  } else {
    if (!slugHasFrozen.get(slug)) fail("P1", `${rel}: asserts reconstructability ("${hit}") but no edition of ${slug} is frozen.`)
  }
}

// Landing-page frontmatter frozen flag must match register.
for (const file of walk(PAGES_DIR)) {
  const parts = path.relative(PAGES_DIR, file).split(path.sep)
  const vm = parts[1] === "version-history.section.md" ? null : /^v(\d[\w.\-]*)\.md$/.exec(parts[1] || "")
  if (!vm) continue
  const text = fs.readFileSync(file, "utf8")
  const declaresFrozen = /\nfrozen:\s*true/.test(text)
  const reg = frozenOf.get(`${parts[0]}@${vm[1]}`)
  if (declaresFrozen !== !!reg)
    fail("P2", `${path.relative(repoRoot, file)}: frontmatter frozen=${declaresFrozen} but register frozen=${!!reg}.`)
}

// ── report ──────────────────────────────────────────────────────────────────────────
if (!QUIET) {
  console.log(`lint-version-integrity: ${records.length} record(s), ${manifest ? manifest.standards.length : 0} registry entr(ies).`)
  for (const w of warnings) console.log(`  warn ${w}`)
}
if (errors.length) {
  console.error(`lint-version-integrity: ${errors.length} FAILURE(S):`)
  for (const e of errors) console.error(`  ✗ ${e}`)
  process.exit(1)
}
console.log("lint-version-integrity: PASS")
process.exit(0)
