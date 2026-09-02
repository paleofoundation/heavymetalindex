#!/usr/bin/env node
// diff-compiled-vs-cert.mjs — the round-trip diff between an index recompile and the LIVE cert
// compiled records (docs/tasks/standards-95-confidence-completion-brief.md, Phase A step 4, DoD 7).
//
// Why it exists: completion work was committed directly into cert JSON around the compiler, so the
// index workbench is STALER than cert. Copying an index recompile to cert without this diff would
// silently loosen live protective limits and drop published cells (OI-20260902-no-roundtrip-diff-
// tool-loosening-universal, OI-20260825-recompile-loosening-gate). A category is reconciled only
// when compile-from-config reproduces every live cert cell and this tool reports zero regressions.
//
// REGRESSION (DoD 7), evaluated per (slug, variant, analyte) in the copy direction index → cert:
//   R1 numeric increase          live numeric value would increase
//   R2 non-null → null/absent    live non-null cell would become null or absent
//   R3 subsumed → non-subsumed   live bounded (subsumed) cell would become non-subsumed and null
//   R4 basis change              record native_basis or the cell's basis string would change
//   R5 record disappears         a live cert record has no index counterpart (or a live variant has none)
// Non-regressions are classified for the reconciliation pass: identical, index-tighter,
// cert-tighter (= R1), cert-valued-index-empty (= R2), index-valued-cert-empty, index-firm-cert-
// bounded, anchor-change (same value, different anchor), kind-change (same value, different
// type/provenance), prose-only (identical canonical projection, different prose fields).
//
// Dir mapping: identity for catN-compiled, except seafood: index compiles the seven Cat-6 records
// into cat1-compiled/ (seafood-config.json) while cert keeps seafood-compiled/. Each category is
// restricted to the slugs its index config (or, failing that, its cert pages.json) names, so the
// ten non-Cat-1 slugs in index cat1-compiled/ are never compared as Cat-1.
//
// Usage:
//   node tools/standards/diff-compiled-vs-cert.mjs --dir=cat23-compiled [--index=<scratch dir>]
//   node tools/standards/diff-compiled-vs-cert.mjs --all [--json] [--block]
//   --cert=<path to the cert repo> (default $CERT_REPO or ../heavymetalcertified, resolved from
//   the canonical index checkout's parent so a worktree finds the sibling repo)
//   --index=<dir> compares a scratch recompile instead of data/workbench/standards/<dir>
//   --block exits 1 on any regression; --json prints the full machine-readable diff.

import fs from "node:fs"
import path from "node:path"
import os from "node:os"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const JSON_OUT = args.has("json")
const BLOCK = args.has("block")
const CERT = args.get("cert") || process.env.CERT_REPO || path.join(os.homedir(), "Desktop/heavymetalcertified")
const CERT_STD = path.join(CERT, "data/standards")
const INDEX_STD = path.join(REPO, "data/workbench/standards")
const CONFIGS = path.join(REPO, "tools/standards")
if (!fs.existsSync(CERT_STD)) { console.error(`diff-compiled-vs-cert: cert repo not found at ${CERT} (pass --cert= or set CERT_REPO)`); process.exit(2) }

export const FULL_PANEL = ["Pb", "Cd", "tAs", "iAs", "tHg", "MeHg", "Ni", "Sn", "Al", "Cr", "Cr-VI"]
const PROSE_FIELDS = new Set(["label", "rationale", "substantiation", "screen_note", "basis_note", "basis_guard_note", "scope_note", "control", "regulatory_basis", "jurisdictions_checked", "candidate", "candidates", "stricter_unselected", "per_country", "companions", "concurring", "source_scope", "binding_page", "source_page", "binding_url", "generated_at_note", "_doc"])

const readJson = (p) => JSON.parse(fs.readFileSync(p, "utf8"))
const isNum = (v) => typeof v === "number" && Number.isFinite(v)

function kindOf(c) {
  if (!c || typeof c !== "object") return "absent"
  if (c.error) return "gap"
  let t = c.type || c.cell_kind || ""
  if (!t) t = ({ "regulatory-alignment": "gov", "read-across": "read_across", control: "control", "not-material": "not_material", subsumed: "subsumed", "baseline-screen": "baseline_screen" })[c.provenance || c.provenance_tag || ""] || ""
  if (t === "screen") t = c.source_id && !c.binding_id ? "read_across" : "gov"
  return t || "unknown"
}
function anchorsOf(c) {
  if (!c) return []
  const ids = []
  if (c.binding_id) ids.push(c.binding_id)
  if (c.source_id) ids.push(c.source_id)
  for (const x of c.components || []) if (x && x.source_id) ids.push(x.source_id)
  for (const x of c.forms || []) if (x && (x.binding_id || x.source_id || x.id)) ids.push(x.binding_id || x.source_id || x.id)
  return [...new Set(ids)].sort()
}
// Canonical projection: everything that determines the published claim; prose excluded.
export function projection(c, nativeBasis) {
  if (!c || typeof c !== "object") return null
  return {
    kind: kindOf(c), provenance: c.provenance || c.provenance_tag || null,
    value: isNum(c.value) ? c.value : null, value_exact: isNum(c.value_exact) ? c.value_exact : null,
    anchors: anchorsOf(c), subsumed_by: c.subsumed_by || c.bounded_by || null,
    basis: c.basis || c.basis_label || c.binding_basis || null, native_basis: nativeBasis || null,
    conversion: c.conversion || c.basis_kind || null, screen: c.screen === true || c.type === "screen" || null,
    loq: c.type === "baseline_screen" ? { reference_method: c.reference_method || null, loq_source_id: c.loq_source_id || null } : null,
    companion_ids: [...new Set([...(c.companion_ml ? [c.companion_ml] : []), ...(c.companion_ids || [])])].sort(),
  }
}
function variantsOf(rec) {
  if (rec && rec.variants && typeof rec.variants === "object" && !rec.cells) return Object.entries(rec.variants)
  if (rec && rec.cells && typeof rec.cells === "object") return [["_", rec.cells]]
  return []
}
function loadDir(dir) {
  const m = new Map()
  if (!fs.existsSync(dir)) return m
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_") && !x.startsWith("derivation")).sort()) {
    let rec
    try { rec = readJson(path.join(dir, f)) } catch { continue }
    if (!rec || (!rec.cells && !rec.variants)) continue
    m.set(rec.slug || f.replace(/\.json$/, ""), rec)
  }
  return m
}
function configSlugs(cfgFile) {
  const p = path.join(CONFIGS, cfgFile)
  if (!fs.existsSync(p)) return null
  const cfg = readJson(p)
  return cfg.subcategories ? Object.keys(cfg.subcategories) : null
}
function pagesSlugs(pagesFile) {
  const p = path.join(CERT_STD, pagesFile)
  if (!fs.existsSync(p)) return null
  const doc = readJson(p)
  return [...new Set((doc.pages || []).flatMap((pg) => (pg.variants || []).map((v) => v.record)).filter(Boolean))]
}

// Category map: cert dir → { indexDir, config, pages }.
export function categoryMap() {
  const out = []
  for (const d of fs.readdirSync(CERT_STD).filter((x) => x.endsWith("-compiled")).sort()) {
    if (d === "seafood-compiled") { out.push({ certDir: d, indexDir: "cat1-compiled", config: "seafood-config.json", pages: "seafood-pages.json" }); continue }
    const n = d.replace(/-compiled$/, "")
    out.push({ certDir: d, indexDir: d, config: `${n}-config.json`, pages: n === "cat3" ? "grains-pages.json" : `${n}-pages.json` })
  }
  // index-only dirs (cat9, cat12 once built) are reported when asked for explicitly
  return out
}

function classifyCell(ic, cc, ib, cb) {
  const ik = kindOf(ic), ck = kindOf(cc)
  const iv = ic && isNum(ic.value) ? ic.value : null
  const cv = cc && isNum(cc.value) ? cc.value : null
  const ip = projection(ic, ib), cp = projection(cc, cb)
  const regressions = []
  let cls
  if (ck === "absent" && ik === "absent") return { cls: "both-absent", regressions }
  if (ck !== "absent" && ik === "absent") { regressions.push("R2:non-null→absent"); cls = "cert-valued-index-absent" }
  else if (cv != null && iv != null) {
    if (iv > cv) { regressions.push(`R1:numeric-increase ${cv}→${iv}`); cls = "cert-tighter" }
    else if (iv < cv) cls = "index-tighter"
    else cls = "identical-value"
  } else if (cv != null && iv == null) { regressions.push(`R2:non-null→null (${cv}→${ik})`); cls = "cert-valued-index-empty" }
  else if (cv == null && iv != null) cls = ck === "subsumed" ? "index-firm-cert-bounded" : "index-valued-cert-empty"
  else { // both null
    if (ck === "subsumed" && ik !== "subsumed") { regressions.push(`R3:subsumed→${ik}`); cls = "cert-bounded-index-empty" }
    else if (ck !== "subsumed" && ik === "subsumed") cls = "index-bounded-cert-empty"
    else cls = ik === ck ? "identical-empty" : "kind-change-empty"
  }
  // basis
  if (cp && ip && cp.basis && ip.basis && cp.basis !== ip.basis && cv != null && iv != null) regressions.push(`R4:cell-basis "${cp.basis}"→"${ip.basis}"`)
  if (cb && ib && cb !== ib) regressions.push(`R4:native_basis "${cb}"→"${ib}"`)
  // refinements on identical values
  if (cls === "identical-value") {
    if (JSON.stringify(cp.anchors) !== JSON.stringify(ip.anchors)) cls = "anchor-change"
    else if (cp.kind !== ip.kind || cp.provenance !== ip.provenance) cls = "kind-change"
    else if (JSON.stringify(cp) !== JSON.stringify(ip)) cls = "projection-change"
    else {
      const strip = (c) => Object.fromEntries(Object.entries(c).filter(([k]) => !PROSE_FIELDS.has(k)))
      cls = JSON.stringify(strip(cc)) === JSON.stringify(strip(ic)) ? (JSON.stringify(cc) === JSON.stringify(ic) ? "identical" : "prose-only") : "field-change"
    }
  }
  if (cls === "identical-empty" && JSON.stringify(cp) === JSON.stringify(ip)) cls = JSON.stringify(cc) === JSON.stringify(ic) ? "identical" : "prose-only"
  return { cls, regressions, index: iv, cert: cv, index_kind: ik, cert_kind: ck }
}

export function diffCategory({ certDir, indexDir, config, pages }, indexOverride) {
  const cert = loadDir(path.join(CERT_STD, certDir))
  const index = loadDir(indexOverride || path.join(INDEX_STD, indexDir))
  const restrict = configSlugs(config) || pagesSlugs(pages)
  const slugs = new Set([...cert.keys(), ...(restrict ? [...index.keys()].filter((s) => restrict.includes(s)) : [...index.keys()])])
  const cells = [], regressions = [], records = []
  const counts = {}
  for (const slug of [...slugs].sort()) {
    const cr = cert.get(slug), ir = index.get(slug)
    if (cr && !ir) { regressions.push({ slug, code: "R5:record-disappears", msg: `live cert record ${certDir}/${slug} has no index counterpart in ${indexOverride || indexDir}` }); records.push({ slug, status: "cert-only" }); continue }
    if (!cr && ir) { records.push({ slug, status: "index-only" }); continue }
    records.push({ slug, status: "both" })
    const cv = new Map(variantsOf(cr)), iv = new Map(variantsOf(ir))
    for (const [vk, ccells] of cv) {
      const icells = iv.get(vk) || (cv.size === 1 && iv.size === 1 ? [...iv.values()][0] : null)
      if (!icells) { regressions.push({ slug, variant: vk, code: "R5:variant-disappears", msg: `live variant ${slug}[${vk}] has no index counterpart (index variants: ${[...iv.keys()].join(",") || "none"})` }); continue }
      const panel = [...new Set([...FULL_PANEL, ...Object.keys(ccells), ...Object.keys(icells)])]
      for (const a of panel) {
        const r = classifyCell(icells[a], ccells[a], ir.native_basis, cr.native_basis)
        if (r.cls === "both-absent") continue
        counts[r.cls] = (counts[r.cls] || 0) + 1
        cells.push({ slug, variant: vk, analyte: a, ...r })
        for (const code of r.regressions) regressions.push({ slug, variant: vk, analyte: a, code, msg: `${slug}[${vk}] ${a}: ${code}` })
      }
    }
    for (const vk of iv.keys()) if (!cv.has(vk) && cv.size !== 1) records.push({ slug, status: "index-extra-variant", variant: vk })
  }
  return { certDir, indexDir: indexOverride || indexDir, config, records, counts, cells, regressions }
}

const cats = categoryMap()
const selected = args.has("all") ? cats : cats.filter((c) => c.certDir === (args.get("dir") || "").replace(/^.*\//, "") || c.indexDir === (args.get("dir") || ""))
if (!selected.length) { console.error("diff-compiled-vs-cert: --dir=<cert compiled dir> or --all required (known: " + cats.map((c) => c.certDir).join(", ") + ")"); process.exit(2) }
const results = selected.map((c) => diffCategory(c, args.get("index") || undefined))
const totalReg = results.reduce((n, r) => n + r.regressions.length, 0)
if (JSON_OUT) console.log(JSON.stringify(results, null, 2))
else {
  for (const r of results) {
    const prose = r.counts["prose-only"] || 0
    console.log(`\n## ${r.certDir} (index: ${r.indexDir}) — ${r.records.filter((x) => x.status === "both").length} shared, ${r.records.filter((x) => x.status === "cert-only").length} cert-only, ${r.records.filter((x) => x.status === "index-only").length} index-only record(s); ${r.regressions.length} REGRESSION(S); ${prose} prose-only cell diff(s)`)
    const order = ["identical", "prose-only", "anchor-change", "kind-change", "projection-change", "field-change", "index-tighter", "cert-tighter", "cert-valued-index-empty", "cert-valued-index-absent", "cert-bounded-index-empty", "index-valued-cert-empty", "index-firm-cert-bounded", "index-bounded-cert-empty", "identical-empty", "kind-change-empty"]
    console.log("   " + order.filter((k) => r.counts[k]).map((k) => `${k}=${r.counts[k]}`).join("  "))
    for (const x of r.regressions.slice(0, 60)) console.log(`   REGRESSION ${x.msg}`)
    if (r.regressions.length > 60) console.log(`   ... ${r.regressions.length - 60} more`)
  }
  console.log(`\n=== ${results.length} categor${results.length === 1 ? "y" : "ies"}: ${totalReg} regression(s) ===`)
}
process.exitCode = totalReg && BLOCK ? 1 : 0 // never process.exit() after a large piped --json write
