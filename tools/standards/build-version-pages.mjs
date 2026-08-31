#!/usr/bin/env node
// build-version-pages.mjs — the index-side "space for versions to live".
//
// PURPOSE
//   When an HMTc standard's number changes, every edition must remain permanently
//   resolvable at a stable URL, so a citation to (say) infant-formula-powder v3.0
//   never silently starts serving v3.1's numbers. This generator is the index-side
//   SOURCE OF TRUTH for that: it owns the per-standard edition register, stamps each
//   edition with its frozen (hash-verified) snapshot when one exists, and emits the
//   registry + the version-pinned landing structure that the cert site renders.
//
//   It does NOT write to the cert repo. Its outputs (data/standards/version-pages/…)
//   are the promotion-ready artifacts a SEPARATE, human-gated cert render consumes.
//   This mirrors the existing standards fan-out (index compiles -> cert renders).
//
// ─── STRUCTURE DECISION: per-version ROUTE, not a version-anchored section ───────
//   Each edition gets its OWN stable URL: /standards/<slug>/v<version>  (the version
//   route), and the concept URL /standards/<slug> always shows the latest edition.
//   Rejected alternative: a single page with #v3.0 anchors. Rationale:
//     1. Permanence. A #v3.0 anchor lives on the concept page, whose body is the
//        LATEST edition. Scrolling to a row that *describes* v3.0 is not resolving
//        v3.0 — the numbers a citation relied on are gone. A version route resolves
//        to that edition's own frozen snapshot, so "reconstruct exactly what the
//        standard required on any date" is literally true at the URL level.
//     2. It is the exact defect on record. The 18 hand-made records all point every
//        edition at the ONE shared permalink (/standards/<slug>), which serves only
//        the current edition; the superseded edition has no resolvable home. Separate
//        routes fix that structurally.
//     3. DOI parity. Version DOI ↔ version route; concept DOI ↔ concept route — the
//        DataCite concept/version model maps 1:1 onto the URL model.
//   The version-history TABLE on the concept page still links each row to its version
//   route, so the anchored-section affordance is retained as navigation, not as the
//   resolvability mechanism.
//
// ─── ENRICHED REGISTER SCHEMA (data/standards/version-history/<slug>.json) ────────
//   {
//     "product_slug":   "infant-formula-powder",
//     "category":       1,                    // HMTc taxonomy category number
//     "document_noun":  "standard",           // optional; "standard" | "manual" | …
//     "concept_doi":    null,                 // DataCite concept DOI → "latest"; null until minted
//     "current_version":"3.1",
//     "scaffolded":     false,                // true = system-seeded single edition, not a claimed history
//     "provenance":     "…",                  // how a scaffold's date/version were sourced (verify-don't-fabricate)
//     "versions": [
//       {
//         "version":        "3.1",
//         "status":         "current",        // "current" | "superseded"  (exactly one "current")
//         "effective_date": "2026-08-06T00:00:00Z",  // ISO-8601 timestamp (date AND time)
//         "effective_date_precision": "date", // "date" | "second" — honest about time precision
//         "doi":            null,             // version DOI (or null)
//         "frozen_artifact": null,            // null OR { dir, pdf, tsr, manifest, sha256, timestamp_utc }
//         "change": {                         // REQUIRED on every edition; a bump with none = lint failure
//           "what_changed": "Mercury tightened 20→15 …",
//           "why":          "The strictest applicable formula ML changed …",
//           "changed_at":   "2026-08-06T00:00:00Z"
//         }
//       }
//     ]
//   }
//
//   frozen_artifact is populated FROM the shared-contract manifest written by the
//   companion module at static/standards/<slug>/v<version>/manifest.json
//   ({slug, version, sha256, timestamp_utc|"pending", effective_date, doi}). Until a
//   manifest exists, frozen_artifact stays null and the STRONG reconstructability
//   claim is withheld (see lint-version-integrity.mjs). Nothing is fabricated: the
//   generator reports the honest state and auto-upgrades the claim edition-by-edition
//   as snapshots are deposited.
//
// ─── OUTPUTS (data/standards/version-pages/) ─────────────────────────────────────
//   manifest.json                     the registry: every standard, its concept URL,
//                                      each edition's version URL + resolvability state
//   <slug>/version-history.section.md  marker-bounded honest version-history section
//                                      (drop-in for the cert render; same markers as
//                                      cert tools/build-cert-version-history.mjs)
//   <slug>/v<version>.md               per-version landing page (materialized only when
//                                      a standard has ≥2 editions or any frozen edition,
//                                      i.e. only when there is a distinct edition to pin)
//   aliases-observed.json              compiled-slug ↔ record-slug mismatches (surfaced,
//                                      never silently guessed — see slug-drift note below)
//
// ─── MODES ───────────────────────────────────────────────────────────────────────
//   (default)          ensure a conformant record for every standard (scaffold in
//                      memory), stamp frozen artifacts, emit outputs.
//   --seed-from <dir>  one-shot migration: read old-schema records from <dir> and
//                      write enriched records into the index register. Used once to
//                      lift the 18 hand-made cert records upstream.
//   --write-scaffolds  also PERSIST single-edition scaffolds to the register (default
//                      off: scaffolds are synthesized in memory for the manifest, and
//                      only real / frozen records are kept on disk, so the repo never
//                      fills with speculative history files).
//   --slug <slug>      restrict to one standard (verification).
//   --static-root <d>  where to find frozen manifests on disk (default <repo>/static;
//                      the cert promotion points this at the cert content/static).
//   --check            do not write; exit 1 if any output would change (CI staleness).
//   --out <dir>        output dir (default data/standards/version-pages).
//
// Deterministic and idempotent: same inputs → byte-identical outputs.

import fs from "node:fs"
import path from "node:path"
import { execSync } from "node:child_process"

const repoRoot = process.cwd()
const argv = process.argv.slice(2)
const getFlag = (name) => {
  const i = argv.indexOf(name)
  return i >= 0 ? argv[i + 1] : undefined
}
const has = (name) => argv.includes(name)

const REGISTER_DIR = path.resolve(repoRoot, getFlag("--register") || "data/standards/version-history")
const COMPILED_GLOB_ROOT = path.join(repoRoot, "data/workbench/standards")
const CATALOG = path.join(repoRoot, "data/workbench/standards/hmtc_standards_catalog.json")
const TAXONOMY = path.join(repoRoot, "data/taxonomy/hmtc-v2.json")
const OUT_DIR = path.resolve(repoRoot, getFlag("--out") || "data/standards/version-pages")
const STATIC_ROOT = path.resolve(repoRoot, getFlag("--static-root") || "static")
const ONLY_SLUG = getFlag("--slug")
const CHECK = has("--check")
const WRITE_SCAFFOLDS = has("--write-scaffolds")

// Marker pair — identical to cert tools/build-cert-version-history.mjs so an emitted
// section is a drop-in replacement wherever that block is spliced today.
const BEGIN = "<!-- BEGIN: hmtc-version-history -->"
const END = "<!-- END: hmtc-version-history -->"
const esc = (s) => String(s ?? "").replace(/\|/g, "\\|")

// ── helpers ──────────────────────────────────────────────────────────────────────
function readJSON(p, fallback = null) {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"))
  } catch {
    return fallback
  }
}

function isoDay(d) {
  // Normalize a "YYYY-MM-DD" or ISO string to an ISO-8601 timestamp. Date-only inputs
  // become midnight UTC and are flagged date-precision; full timestamps are preserved.
  const s = String(d || "").trim()
  if (/^\d{4}-\d{2}-\d{2}$/.test(s)) return { ts: `${s}T00:00:00Z`, precision: "date" }
  const parsed = new Date(s)
  if (!Number.isNaN(parsed.getTime())) return { ts: parsed.toISOString().replace(/\.\d{3}Z$/, "Z"), precision: "second" }
  return { ts: null, precision: "unknown" }
}

function gitCreatedISO(relPath) {
  // The first commit that added a file is a verifiable "entered the corpus" timestamp.
  try {
    const out = execSync(`git log --diff-filter=A --format=%aI -1 -- "${relPath}"`, {
      cwd: repoRoot,
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim()
    if (out) return out.replace(/\.\d{3}([+-Z])/, "$1")
  } catch {
    /* shallow clone / no git — fall through */
  }
  return null
}

// ── enumerate the full standard set (index-side authority) ─────────────────────────
// Every compiled standard JSON under data/workbench/standards/<catN>-compiled/*.json
// is one standard: slug = basename, category = N. This is the ~351 "full standard
// set" the register must cover.
function enumerateStandards() {
  const out = []
  for (const entry of fs.readdirSync(COMPILED_GLOB_ROOT)) {
    const m = /^cat(\d+)-compiled$/.exec(entry)
    if (!m) continue
    const category = Number(m[1])
    const dir = path.join(COMPILED_GLOB_ROOT, entry)
    if (!fs.statSync(dir).isDirectory()) continue
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith(".json")) continue
      if (f.startsWith("_")) continue // audit/scratch artifacts (e.g. _cat24-audit.json) are not standards
      const slug = f.replace(/\.json$/, "")
      out.push({ slug, category, compiled_path: path.join("data/workbench/standards", entry, f) })
    }
  }
  // Stable ordering: category then slug.
  out.sort((a, b) => a.category - b.category || a.slug.localeCompare(b.slug))
  return out
}

const taxonomy = readJSON(TAXONOMY, { categories: [] })
const catName = (n) => (taxonomy.categories || []).find((c) => c.n === n)?.name || `Category ${n}`

const catalog = readJSON(CATALOG, { rows: [], standard_version: null, methodology_version: null })
const catalogMethodology = catalog.methodology_version || "HMTc Method v2.0"

// ── frozen-artifact resolution from the shared-contract manifest ────────────────────
function frozenArtifactFor(slug, version) {
  // Reference paths are SERVED URLs (leading slash), matching the /static/… convention,
  // so the links resolve absolutely from any page. The on-disk manifest is read via
  // STATIC_ROOT below (independent of how the served URL is written).
  const served = `/static/standards/${slug}/v${version}`
  const manifestAbs = path.join(STATIC_ROOT, "standards", slug, `v${version}`, "manifest.json")
  const mf = readJSON(manifestAbs, null)
  if (!mf || !mf.sha256) return null // no manifest, or no hash yet → not pinned
  return {
    dir: served,
    pdf: `${served}/standard.pdf`,
    tsr: `${served}/standard.pdf.tsr`,
    manifest: `${served}/manifest.json`,
    sha256: mf.sha256,
    timestamp_utc: mf.timestamp_utc || "pending",
    doi: mf.doi || null,
  }
}
const isPinned = (v) => !!(v.frozen_artifact && v.frozen_artifact.sha256)

// ── build a conformant record for one standard ──────────────────────────────────────
// Real record on disk → enrich/validate. No record → synthesize a single-edition
// scaffold from verifiable sources (git-created date, catalog methodology). Scaffolds
// are clearly marked so a single current edition is never dressed up as a history.
function recordFor(std) {
  const recPath = path.join(REGISTER_DIR, `${std.slug}.json`)
  let rec = readJSON(recPath, null)
  let scaffolded = false

  if (!rec) {
    scaffolded = true
    const created = gitCreatedISO(std.compiled_path) || isoDay(catalog.generated_at || "").ts || `${new Date().toISOString().slice(0, 10)}T00:00:00Z`
    const precision = created.includes("T00:00:00Z") ? "date" : "second"
    rec = {
      product_slug: std.slug,
      category: std.category,
      document_noun: "standard",
      concept_doi: null,
      current_version: "1.0",
      scaffolded: true,
      provenance: `Single-edition scaffold. effective_date/changed_at sourced from the git-created date of ${std.compiled_path}; version defaulted to 1.0 (first published edition). No multi-edition history is claimed.`,
      versions: [
        {
          version: "1.0",
          status: "current",
          effective_date: created,
          effective_date_precision: precision,
          doi: null,
          frozen_artifact: null,
          change: {
            what_changed: "Initial publication.",
            why: `Government-limit standard under ${catalogMethodology}: each analyte set to the strictest applicable sovereign maximum, converted to the native basis, with a disclosed read-across where no government regulates the exact product.`,
            changed_at: created,
          },
        },
      ],
    }
  } else {
    // Normalize a real (possibly old-schema) record to the enriched schema, preserving
    // all real data verbatim. Never invent edition history.
    rec.product_slug = rec.product_slug || std.slug
    if (rec.category == null) rec.category = std.category
    rec.document_noun = rec.document_noun || "standard"
    if (!("concept_doi" in rec)) rec.concept_doi = null
    rec.scaffolded = false
    rec.versions = (rec.versions || []).map((v) => {
      const eff = isoDay(v.effective_date || v.date || "")
      const chg = v.change || {}
      const changedAt = chg.changed_at || v.date || v.effective_date || ""
      const chgIso = isoDay(changedAt)
      return {
        version: v.version,
        status: v.status || "superseded",
        effective_date: eff.ts,
        effective_date_precision: v.effective_date_precision || eff.precision,
        doi: v.doi ?? null,
        // Preserve a legacy served pdf as a hint, but it is NOT a frozen_artifact unless
        // a contract manifest exists (a served PDF ≠ a hash-verified snapshot).
        legacy_pdf: v.pdf || v.legacy_pdf || null,
        frozen_artifact: v.frozen_artifact || null,
        change: {
          what_changed: chg.what_changed || v.summary || "",
          why: chg.why || "",
          changed_at: chgIso.ts,
        },
      }
    })
    if (!rec.current_version) {
      rec.current_version = (rec.versions.find((v) => v.status === "current") || rec.versions[0] || {}).version
    }
  }

  // Stamp frozen artifacts from the contract manifests. The register's frozen_artifact
  // is a faithful CACHE of the manifest (the durable, committed source of truth), so it
  // is always reset from the manifest: set when a manifest is present, cleared when it
  // is absent. This keeps the register honest and the build idempotent (a stale hash is
  // never left behind).
  for (const v of rec.versions) {
    const fa = frozenArtifactFor(rec.product_slug, v.version)
    v.frozen_artifact = fa || null
    if (fa && fa.doi && !v.doi) v.doi = fa.doi
  }
  return { rec, recPath, scaffolded }
}

// ── URL model ───────────────────────────────────────────────────────────────────────
const conceptUrl = (slug) => `/standards/${slug}`
const versionUrl = (slug, version) => `/standards/${slug}/v${version}`
// A standard needs materialized per-version pages once there is a DISTINCT edition to
// pin: more than one edition, or any frozen edition.
const needsVersionRoutes = (rec) => rec.versions.length > 1 || rec.versions.some(isPinned)

// ── prose (honesty is enforced by lint-version-integrity.mjs) ────────────────────────
// STRONG wording (immutable / hash-verified / reconstruct-exactly) may appear only for
// editions that actually carry a frozen_artifact. The generator withholds it otherwise.
function editionSnapshotCell(rec, v) {
  if (isPinned(v)) {
    const stamp = v.frozen_artifact.timestamp_utc === "pending" ? "hash-verified (trusted timestamp pending)" : "hash-verified, timestamped"
    return `[frozen PDF](${v.frozen_artifact.pdf}) · ${stamp}`
  }
  if (v.status === "current") return "current text (this page)"
  return "record only — snapshot forthcoming"
}

function versionHistorySection(rec) {
  const noun = rec.document_noun || "standard"
  const slug = rec.product_slug
  const routes = needsVersionRoutes(rec)
  const allFrozen = rec.versions.length > 0 && rec.versions.every(isPinned)

  // Lead sentence: strong only when every edition is frozen; otherwise the honest state.
  const lead = allFrozen
    ? `The dated editions of this ${noun}. Each edition is preserved as an immutable, hash-verified snapshot at its own stable URL, so a regulator or brand can reconstruct exactly what the ${noun} required on any date, and superseded editions stay resolvable so prior citations never break.`
    : `The dated editions of this ${noun}, each with the date it took effect and what changed. Every edition keeps its own stable URL${routes ? "" : " once a second edition is issued"}; where an edition has been deposited as a hash-verified snapshot it is linked below, and until then the current edition is the authoritative text.`

  const conceptNote = rec.concept_doi
    ? ` The concept DOI [${rec.concept_doi}](https://doi.org/${rec.concept_doi}) resolves to the latest edition; each version DOI resolves to its own frozen edition.`
    : ""

  const hasDoi = rec.versions.some((v) => v.doi)
  const head = hasDoi
    ? "| Version | In force | Status | Snapshot | DOI | What changed |\n| --- | --- | --- | --- | --- | --- |"
    : "| Version | In force | Status | Snapshot | What changed |\n| --- | --- | --- | --- | --- |"

  const rows = rec.versions
    .map((v) => {
      const label = routes ? `[v${v.version}](${versionUrl(slug, v.version)})` : `v${v.version}`
      const day = (v.effective_date || "").slice(0, 10)
      const status = v.status === "current" ? "**current**" : "superseded"
      const snap = editionSnapshotCell(rec, v)
      const what = esc(v.change?.what_changed || "")
      const doiCell = v.doi ? `[${v.doi}](https://doi.org/${v.doi})` : "—"
      return hasDoi
        ? `| ${label} | ${day} | ${status} | ${snap} | ${doiCell} | ${what} |`
        : `| ${label} | ${day} | ${status} | ${snap} | ${what} |`
    })
    .join("\n")

  return `${BEGIN}
## Version history

${lead}${conceptNote}

${head}
${rows}
${END}`
}

function versionLandingPage(rec, v) {
  const slug = rec.product_slug
  const noun = rec.document_noun || "standard"
  const day = (v.effective_date || "").slice(0, 10)
  const pinned = isPinned(v)
  const fm = [
    "---",
    `title: "${rec.product_slug} — ${noun} v${v.version}"`,
    `product_slug: ${slug}`,
    `edition_version: "${v.version}"`,
    `edition_status: ${v.status}`,
    `effective_date: ${v.effective_date}`,
    `concept_url: ${conceptUrl(slug)}`,
    `version_url: ${versionUrl(slug, v.version)}`,
    `doi: ${v.doi || "null"}`,
    `frozen: ${pinned}`,
    pinned ? `frozen_sha256: ${v.frozen_artifact.sha256}` : `frozen_sha256: null`,
    "robots: noindex, follow", // version-pinned editions are citation targets, not SEO surfaces; concept page is canonical
    `canonical_url: ${conceptUrl(slug)}`,
    "audience: [regulator, brand-legal, retailer-compliance, certifier]",
    "---",
  ].join("\n")

  const statusLine =
    v.status === "current"
      ? `This is the **current** edition of the [${slug} ${noun}](${conceptUrl(slug)}).`
      : `This is a **superseded** edition, kept resolvable so prior citations do not break. The current edition is at [${conceptUrl(slug)}](${conceptUrl(slug)}).`

  const snapshotBlock = pinned
    ? [
        `This edition is preserved as an immutable snapshot. The document below is hash-verified against its deposit${
          v.frozen_artifact.timestamp_utc === "pending" ? " (trusted timestamp pending)" : " and trusted-timestamped"
        }; the numbers it states are exactly what the ${noun} required from ${day}.`,
        "",
        `- Frozen PDF: [${v.frozen_artifact.pdf}](${v.frozen_artifact.pdf})`,
        `- SHA-256: \`${v.frozen_artifact.sha256}\``,
        v.frozen_artifact.timestamp_utc !== "pending" ? `- Trusted timestamp: ${v.frozen_artifact.timestamp_utc}` : `- Trusted timestamp: pending`,
        v.doi ? `- Version DOI: [${v.doi}](https://doi.org/${v.doi})` : null,
      ]
        .filter((x) => x !== null)
        .join("\n")
    : [
        `An immutable, hash-verified snapshot of this edition is being deposited. Until it lands, this page records the edition metadata and what changed; for the authoritative text of the ${
          v.status === "current" ? "current" : "in-force"
        } edition see the ${v.status === "current" ? `[standard page](${conceptUrl(slug)})` : "deposit when available"}.`,
      ].join("\n")

  const changeBlock = [
    "## What changed in this edition",
    "",
    v.change?.what_changed || "Initial publication.",
    v.change?.why ? `\n${v.change.why}` : "",
  ].join("\n")

  return `${fm}

# ${slug} ${noun} — version ${v.version}

In force from ${day}. ${statusLine}

${snapshotBlock}

${changeBlock}
`
}

// ── manifest (the registry that lists and links every version) ───────────────────────
function manifestEntry(rec, { scaffolded }) {
  const slug = rec.product_slug
  const routes = needsVersionRoutes(rec)
  return {
    product_slug: slug,
    category: rec.category,
    category_name: catName(rec.category),
    concept_url: conceptUrl(slug),
    concept_doi: rec.concept_doi || null,
    current_version: rec.current_version,
    scaffolded,
    // Standard-level reconstructability is true only when EVERY edition is frozen.
    fully_reconstructable: rec.versions.length > 0 && rec.versions.every(isPinned),
    versions: rec.versions.map((v) => ({
      version: v.version,
      status: v.status,
      // A superseded edition's stable URL is its version route; a lone current edition
      // resolves at the concept URL until a second edition forces distinct routes.
      url: routes ? versionUrl(slug, v.version) : conceptUrl(slug),
      distinct_route: routes,
      effective_date: v.effective_date,
      doi: v.doi || null,
      frozen: isPinned(v),
      sha256: isPinned(v) ? v.frozen_artifact.sha256 : null,
      pinned_resolvable: isPinned(v), // whether the version route resolves to a frozen snapshot
    })),
  }
}

// ── write helpers honoring --check ───────────────────────────────────────────────────
let wouldChange = 0
let wrote = 0
function writeOut(absPath, content) {
  const prev = fs.existsSync(absPath) ? fs.readFileSync(absPath, "utf8") : null
  if (prev === content) return
  wouldChange++
  if (CHECK) return
  fs.mkdirSync(path.dirname(absPath), { recursive: true })
  fs.writeFileSync(absPath, content, "utf8")
  wrote++
}

// ── --seed-from: one-shot migration of old-schema records upstream ───────────────────
if (getFlag("--seed-from")) {
  const src = path.resolve(repoRoot, getFlag("--seed-from"))
  fs.mkdirSync(REGISTER_DIR, { recursive: true })
  let migrated = 0
  for (const f of fs.readdirSync(src)) {
    if (!f.endsWith(".json")) continue
    const old = readJSON(path.join(src, f), null)
    if (!old || !Array.isArray(old.versions)) continue
    const slug = old.product_slug || f.replace(/\.json$/, "")
    // Find the category from the compiled set if possible.
    const std = enumerateStandards().find((s) => s.slug === slug)
    const enriched = {
      product_slug: slug,
      category: old.category ?? std?.category ?? null,
      document_noun: old.document_noun || "standard",
      concept_doi: old.concept_doi || null,
      current_version: old.current_version || (old.versions.find((v) => v.status === "current") || old.versions[0]).version,
      scaffolded: false,
      versions: old.versions.map((v) => {
        const eff = isoDay(v.effective_date || v.date || "")
        return {
          version: v.version,
          status: v.status || "superseded",
          effective_date: eff.ts,
          effective_date_precision: eff.precision,
          doi: v.doi ?? null,
          legacy_pdf: v.pdf || null,
          frozen_artifact: null, // stamped by the default build once a contract manifest exists
          change: {
            // The old `summary` faithfully describes what changed; keep it verbatim as
            // what_changed. `why` is left empty rather than invented (verify-don't-fabricate).
            what_changed: v.summary || "",
            why: "",
            changed_at: eff.ts,
          },
        }
      }),
    }
    writeOut(path.join(REGISTER_DIR, `${slug}.json`), JSON.stringify(enriched, null, 2) + "\n")
    migrated++
  }
  console.log(`build-version-pages --seed-from: migrated ${migrated} record(s) into ${path.relative(repoRoot, REGISTER_DIR)} (${wrote} written, ${wouldChange} changed)`) // eslint-disable-line
  process.exit(0)
}

// ── default build ────────────────────────────────────────────────────────────────────
const standards = enumerateStandards().filter((s) => !ONLY_SLUG || s.slug === ONLY_SLUG)
const registerSlugs = new Set(
  fs.existsSync(REGISTER_DIR) ? fs.readdirSync(REGISTER_DIR).filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, "")) : []
)
const compiledSlugs = new Set(standards.map((s) => s.slug))

const manifest = {
  // No wall-clock stamp: the manifest must be a pure function of its inputs so --check
  // is byte-stable and the build is idempotent. Provenance is git history.
  generator: "tools/standards/build-version-pages.mjs",
  methodology_version: catalogMethodology,
  static_root: path.relative(repoRoot, STATIC_ROOT),
  url_model: "per-version route: /standards/<slug>/v<version> ; concept: /standards/<slug>",
  counts: {},
  standards: [],
}

let scaffoldCount = 0
let realCount = 0
let materializedPages = 0

for (const std of standards) {
  const { rec, recPath, scaffolded } = recordFor(std)
  if (scaffolded) scaffoldCount++
  else realCount++

  // Persist real records always; persist scaffolds only under --write-scaffolds.
  if (!scaffolded || WRITE_SCAFFOLDS) {
    writeOut(recPath, JSON.stringify(rec, null, 2) + "\n")
  }

  // Emit rendered markdown only where there is real content to render: a real edition
  // history, or a distinct edition to pin. A bare single-edition scaffold is carried by
  // the manifest alone (the cert render produces its section from the register), so the
  // repo never fills with ~300 near-identical boilerplate section files.
  if (!scaffolded || needsVersionRoutes(rec)) {
    writeOut(path.join(OUT_DIR, std.slug, "version-history.section.md"), versionHistorySection(rec) + "\n")
    if (needsVersionRoutes(rec)) {
      for (const v of rec.versions) {
        writeOut(path.join(OUT_DIR, std.slug, `v${v.version}.md`), versionLandingPage(rec, v))
        materializedPages++
      }
    }
  }

  manifest.standards.push(manifestEntry(rec, { scaffolded }))
}

// Also fold in any real register records whose slug is NOT in the compiled set (e.g. a
// published-page alias slug like `baby-cereals-dry` vs compiled `baby-cereals-dry-rice-based`,
// or the Program Manual). They still need to appear in the registry and be rendered.
const orphanRecordSlugs = [...registerSlugs].filter((s) => !compiledSlugs.has(s) && (!ONLY_SLUG || s === ONLY_SLUG))
for (const slug of orphanRecordSlugs) {
  const raw = readJSON(path.join(REGISTER_DIR, `${slug}.json`), null)
  if (!raw) continue
  const std = { slug, category: raw.category ?? null, compiled_path: null }
  const { rec } = recordFor(std)
  writeOut(path.join(OUT_DIR, slug, "version-history.section.md"), versionHistorySection(rec) + "\n")
  if (needsVersionRoutes(rec)) {
    for (const v of rec.versions) {
      writeOut(path.join(OUT_DIR, slug, `v${v.version}.md`), versionLandingPage(rec, v))
      materializedPages++
    }
  }
  manifest.standards.push(manifestEntry(rec, { scaffolded: false }))
  realCount++
}

// Slug-drift observation: compiled standards with no record under their own slug, and
// records whose slug is not a compiled standard. Surfaced, never silently reconciled —
// the taxonomy alias map is a separate human-gated item (OI-20260817-taxonomy-v22).
const aliasesObserved = {
  note: "Compiled-slug ↔ record-slug mismatches. Not auto-merged; the published-page alias map is a separate human-gated taxonomy item.",
  compiled_without_own_record: standards.filter((s) => !registerSlugs.has(s.slug)).map((s) => s.slug),
  record_without_compiled_standard: [...registerSlugs].filter((s) => !compiledSlugs.has(s)),
}

manifest.standards.sort((a, b) => (a.category || 0) - (b.category || 0) || a.product_slug.localeCompare(b.product_slug))
manifest.counts = {
  standards_total: manifest.standards.length,
  with_real_record: realCount,
  scaffolded: scaffoldCount,
  with_multiple_editions: manifest.standards.filter((s) => s.versions.length > 1).length,
  fully_reconstructable: manifest.standards.filter((s) => s.fully_reconstructable).length,
  frozen_editions: manifest.standards.reduce((n, s) => n + s.versions.filter((v) => v.frozen).length, 0),
  materialized_version_pages: materializedPages,
}

writeOut(path.join(OUT_DIR, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n")
writeOut(path.join(OUT_DIR, "aliases-observed.json"), JSON.stringify(aliasesObserved, null, 2) + "\n")

if (CHECK) {
  if (wouldChange > 0) {
    console.error(`build-version-pages --check: STALE — ${wouldChange} output(s) would change. Run the generator and commit.`)
    process.exit(1)
  }
  console.log("build-version-pages --check: up to date.")
  process.exit(0)
}

console.log(
  `build-version-pages: ${manifest.counts.standards_total} standard(s) — ${realCount} real record(s), ${scaffoldCount} scaffold(s); ` +
    `${manifest.counts.frozen_editions} frozen edition(s); ${materializedPages} version landing page(s); ${wrote} file(s) written.`
)
