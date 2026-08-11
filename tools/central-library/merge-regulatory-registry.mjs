#!/usr/bin/env node
// Merge URL-discovery results into data/regulatory/registry.json.
//
// The discovery agents (or a future refresh run) emit per-jurisdiction JSON
// arrays of instrument records with verified pdf_url / landing_url / access /
// analyte coverage. This script folds them into the registry WITHOUT losing the
// seed's structural fields: scope_type (horizontal vs category-specific vs
// assessment), categories, region, and any curator notes are the registry's own
// knowledge and are never clobbered by an agent that does not know them.
//
//   node tools/central-library/merge-regulatory-registry.mjs <file1.json> <file2.json> ...
//
// Precedence rules (per instrument, matched by id, else jurisdiction+reference):
//   * pdf_url  — a VERIFIED agent URL wins; else a verified seed URL; else any
//                non-empty agent URL; else the seed's. Every other candidate is
//                demoted into mirror_urls, so a working link is never discarded.
//   * landing_url, access, language, year, status, instrument, body, reference,
//     analytes, speciation, infant_child_scope — the agent's non-empty value
//     wins (it is the fresher research); the seed fills any gap.
//   * scope_type, categories, region, notes — kept from the seed; categories is
//     unioned with any the agent supplied.
//   * verified/verify_note — true if either the seed or the agent confirmed it.
// Instruments with no seed match are appended, with scope_type/region inferred.

import fs from "node:fs"
import path from "node:path"

const repoRoot = process.cwd()
const REGISTRY_PATH = path.join(repoRoot, "data/regulatory/registry.json")

const inputs = process.argv.slice(2).filter((a) => !a.startsWith("--"))
if (!inputs.length) {
  console.error("usage: merge-regulatory-registry.mjs <file1.json> [file2.json ...]")
  process.exit(1)
}

const registry = JSON.parse(fs.readFileSync(REGISTRY_PATH, "utf8"))
const jurByCode = new Map((registry.jurisdictions || []).map((j) => [j.code, j]))

// Index seed instruments for matching.
const byId = new Map(registry.instruments.map((e) => [e.id, e]))
const byJurRef = new Map(registry.instruments.map((e) => [`${e.jurisdiction_code}|${(e.reference || "").toLowerCase()}`, e]))

const normRef = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "")
function findSeed(a) {
  if (a.id && byId.has(a.id)) return byId.get(a.id)
  const key = `${a.jurisdiction_code}|${(a.reference || "").toLowerCase()}`
  if (byJurRef.has(key)) return byJurRef.get(key)
  // Reference containment within the same jurisdiction: an agent that writes
  // "Docket No. FDA-2016-D-1099; announced in FR notice…" must still match the
  // seed's terse "FDA-2016-D-1099" instead of being added as a duplicate.
  const an = normRef(a.reference)
  if (an.length >= 5) {
    const hit = registry.instruments.find((e) => {
      if (e.jurisdiction_code !== a.jurisdiction_code) return false
      const en = normRef(e.reference)
      return en.length >= 5 && (an.includes(en) || en.includes(an))
    })
    if (hit) return hit
  }
  // last resort: a single seed for that jurisdiction that is still unverified
  const sameJur = registry.instruments.filter((e) => e.jurisdiction_code === a.jurisdiction_code)
  return sameJur.length === 1 ? sameJur[0] : null
}

const pick = (agentVal, seedVal) => (agentVal != null && agentVal !== "" ? agentVal : seedVal)
const uniq = (arr) => [...new Set(arr.filter(Boolean))]

function inferScopeType(code) {
  if (code === "who-jecfa") return "assessment"
  if (code === "us-fda") return "category-specific"
  return "horizontal"
}

const stats = { merged: 0, added: 0, verified_before: 0, verified_after: 0 }
for (const e of registry.instruments) if (e.verified) stats.verified_before++

let agentEntries = []
for (const file of inputs) {
  try {
    const arr = JSON.parse(fs.readFileSync(path.resolve(file), "utf8"))
    if (Array.isArray(arr)) agentEntries.push(...arr)
    else console.error(`skip ${file}: not a JSON array`)
  } catch (err) {
    console.error(`skip ${file}: ${err.message}`)
  }
}

for (const a of agentEntries) {
  if (!a || !a.jurisdiction_code) continue
  const seed = findSeed(a)

  // Resolve the primary pdf_url by precedence; everything else becomes a mirror.
  const candidates = uniq([
    a.verified ? a.pdf_url : "",
    seed && seed.verified ? seed.pdf_url : "",
    a.pdf_url,
    seed ? seed.pdf_url : "",
  ])
  const pdf_url = candidates[0] || ""
  const mirrors = uniq([
    ...(seed ? seed.mirror_urls || [] : []),
    ...(a.mirror_urls || []),
    a.pdf_url,
    seed ? seed.pdf_url : "",
  ]).filter((u) => u && u !== pdf_url)

  if (seed) {
    seed.instrument = pick(a.instrument, seed.instrument)
    seed.body = pick(a.body, seed.body)
    seed.reference = pick(a.reference, seed.reference)
    seed.year = pick(a.year, seed.year)
    seed.last_revised = pick(a.last_revised, seed.last_revised)
    seed.status = pick(a.status, seed.status)
    // Union, not replace: an agent may verify only part of a document (e.g. only
    // Korea's general heavy-metal article, not the infant-specific one), and
    // narrowing the analyte list would silently drop a filter the instrument
    // really does answer. Over-inclusion is harmless here — the PDF is the source
    // of truth — while under-inclusion hides a document from a valid query.
    seed.analytes = uniq([...(seed.analytes || []), ...(a.analytes || [])])
    seed.speciation = uniq([...(seed.speciation || []), ...(a.speciation || [])])
    seed.infant_child_scope = uniq([...(seed.infant_child_scope || []), ...(a.infant_child_scope || [])])
    seed.categories = uniq([...(seed.categories || []), ...(a.categories || [])])
    seed.pdf_url = pdf_url
    seed.mirror_urls = mirrors
    seed.landing_url = pick(a.landing_url, seed.landing_url)
    seed.access = pick(a.access, seed.access)
    seed.language = pick(a.language, seed.language)
    seed.verified = Boolean(seed.verified || a.verified)
    seed.verify_note = a.verify_note || seed.verify_note || ""
    if (a.notes && !String(seed.notes || "").includes(a.notes.slice(0, 30))) {
      seed.notes = seed.notes ? `${seed.notes} | agent: ${a.notes}` : a.notes
    }
    stats.merged++
  } else {
    const code = a.jurisdiction_code
    const added = {
      id: a.id || `${code}-${(a.reference || "instrument").toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
      jurisdiction: a.jurisdiction || (jurByCode.get(code) || {}).name || code,
      jurisdiction_code: code,
      region: a.region || (jurByCode.get(code) || {}).region || "",
      body: a.body || "",
      instrument: a.instrument || "",
      reference: a.reference || "",
      year: a.year || null,
      last_revised: a.last_revised || null,
      status: a.status || "in-force",
      scope_type: a.scope_type || inferScopeType(code),
      categories: uniq([...(a.categories || []), "infant-child-foods"]),
      analytes: uniq(a.analytes || []),
      speciation: uniq(a.speciation || []),
      infant_child_scope: uniq(a.infant_child_scope || []),
      pdf_url,
      mirror_urls: mirrors,
      landing_url: a.landing_url || "",
      access: a.access || "unknown",
      language: a.language || "en",
      verified: Boolean(a.verified),
      verify_note: a.verify_note || "",
      notes: a.notes || "",
    }
    registry.instruments.push(added)
    byId.set(added.id, added)
    stats.added++
  }
}

for (const e of registry.instruments) if (e.verified) stats.verified_after++
registry.generated_at = new Date().toISOString().slice(0, 10)

fs.writeFileSync(REGISTRY_PATH, JSON.stringify(registry, null, 2) + "\n")

console.log(`merged ${stats.merged} · added ${stats.added} · verified ${stats.verified_before} → ${stats.verified_after} · total ${registry.instruments.length}`)
const stillManual = registry.instruments.filter((e) => e.access === "paid-official" || (!e.pdf_url && !e.verified))
if (stillManual.length) {
  console.log(`\nneeds manual retrieval or unverified URL (${stillManual.length}):`)
  for (const e of stillManual) console.log(`  · ${e.jurisdiction} — ${e.reference || e.instrument} [${e.access}]`)
}
