#!/usr/bin/env node
// lint-standards-confidence.mjs — DETERMINISTIC gate over the confidence manifests
// (docs/tasks/standards-95-confidence-completion-brief.md DoD 8; governance v2.7 Rule #1).
//
// For every compiled dir with a manifest at data/workbench/standards/confidence/<dir>.json this lint
// re-derives, from the CERT record bytes and the index register, everything the manifest claims:
//   K1 coverage          every (slug, variant, analyte) of every cert record in the dir has an entry, and
//                        every entry names a record that exists (a key with no .json is always-fail)
//   K2 freshness         entry.record_sha256 == sha256(cert record bytes) (else stale)
//   K3 claim hash        entry.claim_sha256 == the canonical projection of the cell today
//   K4 anchor hash       entry.anchor_sha256 == the cited register rows today (M1 evidence unchanged)
//   K5 always-fail       confirmed with null value that is not bounded; confirmed control/not_material;
//                        confirmed EMPTY; lens model outside the allowed list; blind_value ≠ published
//   K6 verdicts          in --block mode every cell must be confirmed; otherwise unverified/refuted/
//                        blocked cells are reported
//   K7 method + statement manifest.method_version and occurrence_statement present
//   K8 Lens 0 today      the audit gate on the cert dir has 0 FAIL (a confirmed cell that fails the
//                        audit today is a contradiction)
//   K9 pages             every type:standard page the category renders resolves to records in the dir
//                        (recordless pages can never be confirmed)
// It NEVER calls a model. The audit's own checks are reused by invoking the audit on the cert dir.
//
// Rollout: warn-only by default; --block-listed blocks the dirs named in
// data/workbench/standards/confidence/confidence-blocking.json; --block blocks every dir with a manifest
// (and every cert dir WITHOUT one). --dir=<dir> restricts to one dir.

import fs from "node:fs"
import path from "node:path"
import os from "node:os"
import { spawnSync } from "node:child_process"
import { FULL_PANEL, ALLOWED_LENS_MODELS, CONFIDENCE_MEANINGS, sha256, isNum, roundDisplay, loadRegister, kindOf, anchorIds, variantsOf, claimHash, anchorHash, cellState } from "./lib/confidence.mjs"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const CERT = args.get("cert") || process.env.CERT_REPO || path.join(os.homedir(), "Desktop/heavymetalcertified")
const CONF = path.join(REPO, "data/workbench/standards/confidence")
const BLOCK_ALL = args.has("block")
const BLOCK_LISTED = args.has("block-listed")
const ONLY = args.get("dir")
const JSON_OUT = args.has("json")
const QUIET = args.has("quiet")

const blocking = (() => { try { return new Set(JSON.parse(fs.readFileSync(path.join(CONF, "confidence-blocking.json"), "utf8")).dirs || []) } catch { return new Set() } })()
const register = loadRegister(REPO)
const certStd = path.join(CERT, "data/standards")
const certDirs = fs.existsSync(certStd) ? fs.readdirSync(certStd).filter((d) => d.endsWith("-compiled")).sort() : []
const dirs = ONLY ? [ONLY] : certDirs

function lintDir(dir) {
  const problems = [], warns = []
  const P = (msg) => problems.push(msg)
  const W = (msg) => warns.push(msg)
  const mp = path.join(CONF, `${dir}.json`)
  const certDir = path.join(certStd, dir)
  if (!fs.existsSync(mp)) { P(`no confidence manifest for ${dir}`); return { dir, problems, warns, cells: 0, confirmed: 0 } }
  let man
  try { man = JSON.parse(fs.readFileSync(mp, "utf8")) } catch (e) { P(`manifest unreadable: ${e.message}`); return { dir, problems, warns, cells: 0, confirmed: 0 } }
  if (!man.method_version) P("K7: manifest carries no method_version")
  if (man.occurrence_statement !== "0 occurrence-derived cells") P(`K7: occurrence_statement is "${man.occurrence_statement}"`)
  if (!fs.existsSync(certDir)) { P(`cert dir ${dir} missing`); return { dir, problems, warns, cells: 0, confirmed: 0 } }

  // K1/K2/K3/K4/K5 per cell against the cert record bytes
  const seen = new Set()
  let cells = 0, confirmed = 0, stale = 0
  const files = fs.readdirSync(certDir).filter((x) => x.endsWith(".json") && !x.startsWith("_") && !x.startsWith("derivation"))
  const restrictSlugs = new Set(Object.values(man.cells || {}).map((c) => c.slug))
  for (const f of files) {
    const raw = fs.readFileSync(path.join(certDir, f), "utf8")
    let rec; try { rec = JSON.parse(raw) } catch { continue }
    const slug = rec.slug || f.replace(/\.json$/, "")
    // seafood/cat1 share dirs only on the index side; cert dirs are one category each
    const sha = sha256(raw)
    for (const [vk, vcells] of variantsOf(rec)) for (const analyte of FULL_PANEL) {
      const key = `${slug}|${vk}|${analyte}`
      cells++
      seen.add(key)
      const e = man.cells && man.cells[key]
      if (!e) { P(`K1: ${key} has no manifest entry`); continue }
      const cell = vcells ? vcells[analyte] : undefined
      const st = cellState(cell, vcells || {})
      if (e.record_sha256 !== sha) { stale++; if (e.verdict === "confirmed") P(`K2: ${key} confirmed against stale record bytes`); else W(`K2: ${key} stale (record changed since the run)`) }
      if (e.claim_sha256 !== claimHash(cell || {}, rec.native_basis)) { if (e.verdict === "confirmed") P(`K3: ${key} claim hash drifted (the published claim changed since it was confirmed)`); else W(`K3: ${key} claim hash drifted`) }
      const ids = st.state === "bounded" ? anchorIds(vcells[st.parent]) : anchorIds(cell)
      if (e.anchor_sha256 !== anchorHash(ids, register)) { if (e.verdict === "confirmed") P(`K4: ${key} anchor rows changed since confirmation`); else W(`K4: ${key} anchor rows changed`) }
      if (e.verdict === "confirmed") {
        confirmed++
        if (st.state === "EMPTY") P(`K5: ${key} confirmed but EMPTY (${st.reason})`)
        const k = kindOf(cell)
        if ((k === "control" || k === "not_material")) P(`K5: ${key} confirmed ${k}`)
        if (!isNum(cell && cell.value) && st.state !== "bounded") P(`K5: ${key} confirmed with null value and not bounded`)
        if (isNum(cell && cell.value) && e.blind_value != null && roundDisplay(Number(e.blind_value)) !== cell.value) P(`K5: ${key} blind_value ${e.blind_value} ≠ published ${cell.value}`)
        if (isNum(cell && cell.value) && e.blind_value == null && st.state !== "bounded") P(`K5: ${key} confirmed without a blind_value`)
        if (!CONFIDENCE_MEANINGS.has(e.confidence_meaning)) P(`K5: ${key} confidence_meaning "${e.confidence_meaning}" not in vocabulary`)
        for (const l of [...(e.m2 && e.m2.lenses || [])]) if (l.model && !ALLOWED_LENS_MODELS.has(l.model)) P(`K5: ${key} lens model ${l.model} not allowed`)
      }
    }
  }
  for (const key of Object.keys(man.cells || {})) if (!seen.has(key)) P(`K1: manifest key ${key} has no cell in ${dir} (record missing or panel changed)`)
  // K8 Lens 0 today
  const aud = spawnSync("node", ["tools/standards/audit-compiled-standards.mjs", `--dir=${certDir}`, "--json"], { cwd: REPO, encoding: "utf8", maxBuffer: 1 << 28 })
  try { const fails = JSON.parse(aud.stdout)[0].records.reduce((n, r) => n + r.fails.length, 0); if (fails) { if (confirmed) P(`K8: audit reports ${fails} FAIL on ${dir} today while ${confirmed} cell(s) are confirmed`); else W(`K8: audit reports ${fails} FAIL on ${dir}`) } } catch { P("K8: audit unreadable") }
  // K9 pages: every page mapped onto this dir resolves; recordless pages (no manifest at all) are the cert readiness lint's job
  const pagesFiles = fs.readdirSync(certStd).filter((x) => x.endsWith("-pages.json"))
  for (const pf of pagesFiles) {
    let doc; try { doc = JSON.parse(fs.readFileSync(path.join(certStd, pf), "utf8")) } catch { continue }
    const d = (doc._meta && doc._meta.compiled_dir) || `${pf.replace(/-pages\.json$/, "")}-compiled`
    if (d !== dir) continue
    for (const pg of doc.pages || []) for (const v of pg.variants || []) if (v.record && !fs.existsSync(path.join(certDir, `${v.record}.json`))) P(`K9: page ${pg.slug} maps to missing record ${v.record}`)
  }
  const unconfirmed = cells - confirmed
  if (unconfirmed) W(`K6: ${unconfirmed} of ${cells} cell(s) not confirmed (${man.summary ? `refuted ${man.summary.refuted}, unverified ${man.summary.unverified}, blocked ${man.summary.blocked}` : "no summary"})`)
  return { dir, problems, warns, cells, confirmed, stale, unconfirmed }
}

const results = dirs.map(lintDir)
let blockingFails = 0, totalProblems = 0
for (const r of results) {
  const blocks = BLOCK_ALL || (BLOCK_LISTED && blocking.has(r.dir))
  const hard = r.problems.length + (blocks ? (r.unconfirmed || 0) : 0)
  totalProblems += r.problems.length
  if (blocks && hard) blockingFails += hard
  if (!QUIET && !JSON_OUT) {
    console.log(`## ${r.dir}: ${r.cells} cell(s), ${r.confirmed} confirmed, ${r.stale || 0} stale — ${r.problems.length} problem(s), ${r.warns.length} warning(s)${blocks ? " [BLOCKING]" : ""}`)
    for (const p of r.problems.slice(0, 30)) console.log(`   FAIL ${p}`)
    if (r.problems.length > 30) console.log(`   ... ${r.problems.length - 30} more`)
    for (const w of r.warns.slice(0, 8)) console.log(`   warn ${w}`)
    if (r.warns.length > 8) console.log(`   ... ${r.warns.length - 8} more warnings`)
  }
}
if (JSON_OUT) console.log(JSON.stringify(results, null, 2))
else console.log(`\n=== lint-standards-confidence: ${results.length} dir(s), ${totalProblems} problem(s); mode ${BLOCK_ALL ? "block-all" : BLOCK_LISTED ? `block-listed (${[...blocking].join(", ") || "none"})` : "warn-only"} ===`)
// A hard problem (K1–K5, K7–K9) on a blocking dir fails; in warn-only mode nothing fails.
process.exitCode = blockingFails ? 1 : 0
