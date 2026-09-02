#!/usr/bin/env node
// roundtrip-category.mjs — the per-category D→B→C loop driver
// (docs/tasks/standards-95-confidence-completion-brief.md, "Per-category pipeline").
//
// One command per category: recompile from config into a SCRATCH dir (never the real dir), run the
// audit gate on the scratch output (--block semantics), run the round-trip diff against the LIVE cert
// records, and print one summary. With --copy, and only when the audit has 0 FAIL and the diff has 0
// regressions (or --force-copy, which still refuses on regressions), copy the scratch records BY SLUG
// into the index workbench dir and the cert compiled dir. Nothing here edits a config, a compiled
// record, or a register row: the fix path is config → recompile → this tool → render → battery.
//
// Category → compiler map (verified 2026-09-02; brief §"Compiler map"):
//   compile-category.mjs  cat2, 4, 5, 8, 10, 11, 13, 14, 18, 19, 20, 21, 22, 23, 35 (needs _category)
//   compile-cat1.mjs      cat1 (default config), cat3 (--config=cat3-config.json), seafood
//                         (--config=seafood-config.json; index dir cat1-compiled, cert seafood-compiled)
//   compile-catN.mjs      cat9, 15, 16, 17, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34 (--outdir=)
//
// Usage:
//   node tools/standards/roundtrip-category.mjs --cat=30            # compile + audit + diff (report only)
//   node tools/standards/roundtrip-category.mjs --cat=seafood --copy # + copy by slug when clean
//   --cert=<cert repo> (default $CERT_REPO or ~/Desktop/heavymetalcertified); --scratch=<dir>; --json

import fs from "node:fs"
import path from "node:path"
import os from "node:os"
import { spawnSync } from "node:child_process"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const CAT = args.get("cat")
if (!CAT) { console.error("roundtrip-category: --cat=<N|seafood> required"); process.exit(2) }
const CERT = args.get("cert") || process.env.CERT_REPO || path.join(os.homedir(), "Desktop/heavymetalcertified")
const COPY = args.has("copy")
const JSON_OUT = args.has("json")
const SCRATCH = args.get("scratch") || fs.mkdtempSync(path.join(os.tmpdir(), `hmtc-rt-${CAT}-`))

const GENERIC = new Set(["2", "4", "5", "8", "10", "11", "13", "14", "18", "19", "20", "21", "22", "23", "35"])
const LEGACY = new Set(["9", "15", "16", "17", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34"])

function plan(cat) {
  if (cat === "seafood" || cat === "6") return { key: "seafood", cmd: ["tools/standards/compile-cat1.mjs", "--config=tools/standards/seafood-config.json"], config: "seafood-config.json", indexDir: "cat1-compiled", certDir: "seafood-compiled" }
  if (cat === "1") return { key: "cat1", cmd: ["tools/standards/compile-cat1.mjs"], config: "cat1-config.json", indexDir: "cat1-compiled", certDir: "cat1-compiled" }
  if (cat === "3") return { key: "cat3", cmd: ["tools/standards/compile-cat1.mjs", "--config=tools/standards/cat3-config.json"], config: "cat3-config.json", indexDir: "cat3-compiled", certDir: "cat3-compiled" }
  if (GENERIC.has(cat)) return { key: `cat${cat}`, cmd: ["tools/standards/compile-category.mjs", `--config=tools/standards/cat${cat}-config.json`], config: `cat${cat}-config.json`, indexDir: `cat${cat}-compiled`, certDir: `cat${cat}-compiled` }
  if (LEGACY.has(cat)) return { key: `cat${cat}`, cmd: [`tools/standards/compile-cat${cat}.mjs`], config: `cat${cat}-config.json`, indexDir: `cat${cat}-compiled`, certDir: `cat${cat}-compiled` }
  console.error(`roundtrip-category: no compiler mapped for cat ${cat}`); process.exit(2)
}
const P = plan(CAT)
const cfg = JSON.parse(fs.readFileSync(path.join(REPO, "tools/standards", P.config), "utf8"))
const slugs = Object.keys(cfg.subcategories || {})

// 1. compile to scratch
fs.mkdirSync(SCRATCH, { recursive: true })
const comp = spawnSync("node", [...P.cmd, `--outdir=${SCRATCH}`, "--quiet"], { cwd: REPO, encoding: "utf8" })
const compileOk = comp.status === 0
const compiledFiles = fs.existsSync(SCRATCH) ? fs.readdirSync(SCRATCH).filter((f) => f.endsWith(".json") && !f.startsWith("_") && !f.startsWith("derivation")) : []

// 2. audit gate on the scratch output
const aud = spawnSync("node", ["tools/standards/audit-compiled-standards.mjs", `--dir=${SCRATCH}`, "--json"], { cwd: REPO, encoding: "utf8", maxBuffer: 1 << 28 })
let audit = { fails: [], warns: [], byCode: {} }
try {
  const r = JSON.parse(aud.stdout)[0]
  for (const rec of r.records) { for (const f of rec.fails) { audit.fails.push({ slug: rec.slug, ...f }); audit.byCode[f.code] = (audit.byCode[f.code] || 0) + 1 } for (const w of rec.warns) audit.warns.push({ slug: rec.slug, ...w }) }
} catch (e) { audit.error = `audit output unreadable: ${e.message} ${aud.stderr.slice(0, 300)}` }

// 3. round-trip diff against live cert
const dif = spawnSync("node", ["tools/standards/diff-compiled-vs-cert.mjs", `--dir=${P.certDir}`, `--index=${SCRATCH}`, `--cert=${CERT}`, "--json"], { cwd: REPO, encoding: "utf8", maxBuffer: 1 << 28 })
let diff = { regressions: [], counts: {}, records: [] }
try { diff = JSON.parse(dif.stdout)[0] } catch (e) { diff.error = `diff output unreadable: ${e.message} ${dif.stderr.slice(0, 300)}` }

const clean = compileOk && !audit.error && audit.fails.length === 0 && !diff.error && diff.regressions.length === 0
const summary = {
  cat: CAT, key: P.key, compiler: P.cmd.join(" "), scratch: SCRATCH, slugs: slugs.length, compiled: compiledFiles.length, compile_ok: compileOk,
  audit_fail: audit.fails.length, audit_by_code: audit.byCode, audit_warn: audit.warns.length, audit_error: audit.error || null,
  diff_regressions: diff.regressions.length, diff_counts: diff.counts, diff_error: diff.error || null, clean,
}

if (JSON_OUT) console.log(JSON.stringify({ summary, audit_fails: audit.fails, diff_regressions: diff.regressions, diff_cells: (diff.cells || []).filter((c) => !/^identical|^prose-only/.test(c.cls)) }, null, 2))
else {
  console.log(`## ${P.key}: ${compiledFiles.length}/${slugs.length} record(s) compiled ${compileOk ? "OK" : "WITH ERRORS"} → ${SCRATCH}`)
  if (!compileOk) console.log("   compiler stderr: " + comp.stderr.split("\n").filter(Boolean).slice(-6).join(" | "))
  console.log(`   audit: ${audit.fails.length} FAIL ${JSON.stringify(audit.byCode)}, ${audit.warns.length} WARN${audit.error ? " — " + audit.error : ""}`)
  for (const f of audit.fails.slice(0, 40)) console.log(`     FAIL [${f.code}] ${f.slug} :: ${f.msg}`)
  if (audit.fails.length > 40) console.log(`     ... ${audit.fails.length - 40} more`)
  console.log(`   diff vs cert ${P.certDir}: ${diff.regressions.length} regression(s) ${JSON.stringify(diff.counts)}${diff.error ? " — " + diff.error : ""}`)
  for (const r of diff.regressions.slice(0, 40)) console.log(`     REGRESSION ${r.msg}`)
  if (diff.regressions.length > 40) console.log(`     ... ${diff.regressions.length - 40} more`)
  const interesting = (diff.cells || []).filter((c) => !/^identical|^prose-only|^both-absent/.test(c.cls))
  if (interesting.length) { console.log(`   non-identical, non-regression cells (${interesting.length}):`); for (const c of interesting.slice(0, 40)) console.log(`     ${c.cls.padEnd(26)} ${c.slug}[${c.variant}] ${c.analyte}: index=${c.index ?? c.index_kind} cert=${c.cert ?? c.cert_kind}`) }
  console.log(`   ${clean ? "CLEAN — eligible for --copy" : "NOT CLEAN — fix config/register and rerun"}`)
}

// 4. copy by slug (only when clean)
if (COPY) {
  if (!clean) { console.error(`roundtrip-category: refusing --copy for ${P.key}: ${!compileOk ? "compile failed" : audit.fails.length ? `${audit.fails.length} audit FAIL` : diff.regressions.length ? `${diff.regressions.length} regression(s)` : "unreadable output"}`); process.exitCode = 1 }
  else {
    const idx = path.join(REPO, "data/workbench/standards", P.indexDir)
    const crt = path.join(CERT, "data/standards", P.certDir)
    fs.mkdirSync(idx, { recursive: true }); fs.mkdirSync(crt, { recursive: true })
    let n = 0, skipped = []
    const ADD_NEW = args.has("add-new")
    for (const slug of slugs) {
      const src = path.join(SCRATCH, `${slug}.json`)
      if (!fs.existsSync(src)) continue
      fs.copyFileSync(src, path.join(idx, `${slug}.json`))
      // A slug the live cert dir does not hold would become a PAGELESS cert record (no *-pages.json maps
      // it). Index-only records (e.g. the three Cat-1 rows with no cert page, or a provisional scaffold)
      // stay index-side unless --add-new is passed deliberately together with a pages.json change.
      if (!fs.existsSync(path.join(crt, `${slug}.json`)) && !ADD_NEW) { skipped.push(slug); continue }
      fs.copyFileSync(src, path.join(crt, `${slug}.json`)); n++
    }
    if (skipped.length) console.log(`   NOT copied to cert (index-only, no cert record; pass --add-new with a pages.json mapping): ${skipped.join(", ")}`)
    const rep = path.join(SCRATCH, "derivation-report.md")
    if (fs.existsSync(rep)) { fs.copyFileSync(rep, path.join(idx, "derivation-report.md")); fs.copyFileSync(rep, path.join(crt, "derivation-report.md")) }
    console.log(`   copied ${n} record(s) by slug → ${path.relative(REPO, idx)} and ${crt}`)
  }
}
if (!clean) process.exitCode = process.exitCode || 1
