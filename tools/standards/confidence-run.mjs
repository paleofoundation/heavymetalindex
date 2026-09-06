#!/usr/bin/env node
// confidence-run.mjs — the standards confidence RUNNER (Phase E of
// docs/tasks/standards-95-confidence-completion-brief.md). Deterministic: it never calls a model.
// Model work (M1 register-row verification, M2 applicability) is dispatched by the session from the
// queue files this tool writes, and comes back as verdict files this tool ingests. The verdict for
// every (compiled_dir, slug, variant, analyte) is computed against the CERT record bytes.
//
// Phases (default: all read-only phases, i.e. lens0 + queues + manifest):
//   --cat=<N|seafood>                 the category (compiled dir is derived; seafood → seafood-compiled)
//   --ingest-m1=<file[,file]>         merge M1 verdict files → data/evidence/regulatory_limits_verification.jsonl
//   --ingest-m2=<file[,file]>         merge M2 verdict files → confidence/_m2-verdicts/<dir>/
//   --mirror                          copy the manifest to $CERT/data/standards/confidence/<dir>.json
//                                     (only when tools/standards/lint-standards-confidence.mjs passes for it)
//   --run-id=<id>  --cert=<path>
//
// Verdict per cell: confirmed iff Lens 0 passes (audit C-checks on the cert dir, readiness cell
// classes, the D-set) AND every value-determining row is verified with a matching row_sha256 (M1)
// AND M2 both-agent confirmed with blind_value == published (bounded cells inherit the parent) AND
// the cell's batch is not voided by a confirmed canary. Otherwise refuted (a determinate defect),
// blocked (no primary text), or unverified (pending model work). Default is never confirmed.
//
// Confidence is DEFINITIONAL for sovereign-ML, read-across, bounded and baseline cells (governance
// v2.7 Rule #1); the manifest records confidence_meaning per cell and is never described as a
// statistical probability. occurrence_statement stays "0 occurrence-derived cells" while true.

import fs from "node:fs"
import path from "node:path"
import os from "node:os"
import { spawnSync, execSync } from "node:child_process"
import { STATUS_GATE } from "./lib/register-gate.mjs"
import { provenanceOf } from "./lib/provenance.mjs"
import {
  FULL_PANEL, TIER1, SPECIES_OF, METHOD_VERSION, ALLOWED_LENS_MODELS, sha256, isNum, roundDisplay,
  loadRegister, kindOf, anchorIds, variantsOf, projection, claimHash, cellHash, anchorHash, instrumentPages,
  instrumentHash, cellState, confidenceMeaning, dSet, normMetal, readManifest, writeManifest,
  verificationPath, readVerifications,
} from "./lib/confidence.mjs"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const CAT = args.get("cat")
const CERT = args.get("cert") || process.env.CERT_REPO || path.join(os.homedir(), "Desktop/heavymetalcertified")
const RUN_ID = args.get("run-id") || `run-${new Date().toISOString().replace(/[-:T]/g, "").slice(0, 12)}`
const CONF = path.join(REPO, "data/workbench/standards/confidence")
const SESSION = process.env.HMTC_SESSION || path.basename(REPO)

function plan(cat) {
  if (cat === "seafood" || cat === "6") return { key: "seafood", dir: "seafood-compiled", config: "seafood-config.json", category: 6 }
  if (cat === "3") return { key: "cat3", dir: "cat3-compiled", config: "cat3-config.json", category: 3 }
  return { key: `cat${cat}`, dir: `cat${cat}-compiled`, config: `cat${cat}-config.json`, category: Number(cat) }
}
const gitRev = (cwd) => { try { return execSync("git rev-parse --short HEAD", { cwd, encoding: "utf8" }).trim() } catch { return null } }

// ------------------------------------------------------------------------------------------------
// ingest phases (write side)
// ------------------------------------------------------------------------------------------------
function ingestM1(files, register) {
  // A verdict file: { instrument, model, effort, run_id, agent, rows: [{ regulatory_limit_id, row_sha256,
  //   verdict: "match"|"mismatch"|"cannot-verify", derived_value_ug_kg, jurisdiction, scope, basis,
  //   in_force, successor, evidence, note }] }. Two blind agents per instrument; a row is VERIFIED only
  // when both return match with the same derived value == the register value and the row hash matches
  // the current register line. Disagreement or any cannot-verify → needs-deep-read (an xhigh third
  // read with agent "deep" resolves it alone). Never a majority vote over cannot-verify.
  const byRow = new Map()
  for (const f of files) {
    const v = JSON.parse(fs.readFileSync(f, "utf8"))
    if (!ALLOWED_LENS_MODELS.has(v.model)) { console.error(`ingest-m1: ${f}: model ${v.model} not allowed`); process.exitCode = 1; continue }
    for (const r of v.rows || []) {
      const key = r.regulatory_limit_id
      ;(byRow.get(key) || byRow.set(key, []).get(key)).push({ ...r, model: v.model, effort: v.effort, agent: v.agent, run_id: v.run_id, instrument: v.instrument, file: path.basename(f) })
    }
  }
  const out = []
  let verified = 0, deep = 0, mismatch = 0
  for (const [id, vs] of byRow) {
    const row = register.get(id)
    if (!row) { out.push({ regulatory_limit_id: id, status: "refuted", reason: "row not in register", verdicts: vs }); mismatch++; continue }
    const fresh = vs.filter((x) => x.row_sha256 === row._sha256)
    const deepRead = fresh.find((x) => x.agent === "deep")
    const blind = fresh.filter((x) => x.agent !== "deep")
    const regVal = Number(row.value_ug_kg)
    const matches = (x) => x.verdict === "match" && isNum(Number(x.derived_value_ug_kg)) && Number(x.derived_value_ug_kg) === regVal
    let status, reason
    if (deepRead) { status = matches(deepRead) ? "verified" : deepRead.verdict === "cannot-verify" ? "cannot-verify" : "refuted"; reason = `deep-read ${deepRead.verdict}${deepRead.note ? ": " + deepRead.note : ""}` }
    else if (blind.length >= 2 && blind.every(matches)) { status = "verified"; reason = "two blind agents match the register value" }
    else if (blind.length >= 2 && blind.every((x) => x.verdict === "mismatch") && new Set(blind.map((x) => String(x.in_force || "").toLowerCase())).size === 1 && /superseded|repealed|revoked|withdrawn|not yet/.test(String(blind[0].in_force || "").toLowerCase())) {
      // Two blind agents independently refute on the SAME in-force ground (superseded / repealed /
      // not yet in force): that is agreement, not disagreement, and the row is refuted. A value
      // disagreement between two mismatches still goes to the deep read below.
      status = "refuted"; reason = `two blind agents agree: instrument ${blind[0].in_force}${blind[0].successor ? ` (successor: ${String(blind[0].successor).slice(0, 160)})` : ""}`
    }
    else if (blind.some((x) => x.verdict === "cannot-verify")) { status = "needs-deep-read"; reason = "a blind agent could not verify" }
    else if (blind.length >= 2) { status = "needs-deep-read"; reason = "blind agents disagree or one refutes" }
    else { status = "needs-deep-read"; reason = `only ${blind.length} fresh blind verdict(s)` }
    if (status === "verified") verified++; else if (status === "needs-deep-read") deep++; else mismatch++
    out.push({ regulatory_limit_id: id, row_sha256: row._sha256, status, reason, register_value_ug_kg: regVal,
      jurisdiction: row.jurisdiction, regulation_page: row.regulation_page, verified_at: new Date().toISOString(), run_id: RUN_ID, session: SESSION,
      lenses: vs.map((x) => ({ agent: x.agent, model: x.model, effort: x.effort, run_id: x.run_id, verdict: x.verdict, derived_value_ug_kg: x.derived_value_ug_kg, in_force: x.in_force, successor: x.successor || null, evidence: x.evidence || null, note: x.note || null, stale: x.row_sha256 !== row._sha256 })) })
  }
  fs.mkdirSync(path.dirname(verificationPath(REPO)), { recursive: true })
  for (const r of out) fs.appendFileSync(verificationPath(REPO), JSON.stringify(r) + "\n")
  console.log(`ingest-m1: ${out.length} row(s) → ${verified} verified, ${deep} needs-deep-read, ${mismatch} refuted/other; appended to ${path.relative(REPO, verificationPath(REPO))}`)
}

function ingestM2(files, dir) {
  // A verdict file: { batch_id, evidence_key, model, effort, run_id, agent, cells: [{ key, derived_value,
  //   derived_anchor_id, same_basis_candidates: [{id, value}], blind_value, applicability:
  //   "confirmed"|"refuted"|"cannot-verify", reason }] }. Stored per dir; the runner pairs agents and the
  //   canary ledger voids any batch in which a canary was confirmed.
  const vd = path.join(CONF, "_m2-verdicts", dir)
  fs.mkdirSync(vd, { recursive: true })
  const canaries = readJsonSafe(path.join(CONF, "_canaries", `${dir}.json`)) || { cells: {} }
  const voided = readJsonSafe(path.join(CONF, "_voided.json")) || { batches: [] }
  // A verdict FILE is one agent's run over one packet: { packet_id, agent, model, effort, run_id,
  // batches: [{ batch_id, evidence_key, cells: [...] }] }. Canary batches are keyed by batch_id in the
  // ledger; a "confirmed" on one voids every batch in that file (the same run rubber-stamped).
  for (const f of files) {
    const v = JSON.parse(fs.readFileSync(f, "utf8"))
    if (!ALLOWED_LENS_MODELS.has(v.model)) { console.error(`ingest-m2: ${f}: model ${v.model} not allowed`); process.exitCode = 1; continue }
    const batches = v.batches || [v]
    const tripped = batches.filter((b) => canaries.cells[b.batch_id] && (b.cells || []).some((c) => c.applicability === "confirmed"))
    if (tripped.length) {
      for (const b of batches) voided.batches.push({ batch_id: b.batch_id, dir, agent: v.agent, model: v.model, run_id: v.run_id, packet_id: v.packet_id, canary: tripped.map((t) => t.batch_id).join(","), at: new Date().toISOString() })
      fs.writeFileSync(path.join(CONF, "_voided.json"), JSON.stringify(voided, null, 2) + "\n")
      console.error(`ingest-m2: packet ${v.packet_id} by ${v.agent} VOIDED — canary batch(es) ${tripped.map((t) => t.batch_id).join(", ")} were confirmed`)
    }
    // store one file per batch so m2StatusFor can pair agents per evidence_key
    for (const b of batches) {
      if (canaries.cells[b.batch_id]) continue // canary verdicts are never stored as evidence
      const rec = { packet_id: v.packet_id, batch_id: b.batch_id, evidence_key: b.evidence_key, model: v.model, effort: v.effort, run_id: v.run_id, agent: v.agent, cells: b.cells || [] }
      fs.writeFileSync(path.join(vd, `${b.batch_id}.${v.agent || "agent"}.json`), JSON.stringify(rec, null, 2) + "\n")
    }
  }
  console.log(`ingest-m2: ${files.length} verdict file(s) stored under ${path.relative(REPO, vd)}`)
}
const readJsonSafe = (p) => { try { return JSON.parse(fs.readFileSync(p, "utf8")) } catch { return null } }

// ------------------------------------------------------------------------------------------------
// main (read side): Lens 0 → M1/M2 status → verdict → manifest + queues
// ------------------------------------------------------------------------------------------------
function main() {
  if (!CAT) { console.error("confidence-run: --cat=<N|seafood> required"); process.exit(2) }
  const P = plan(CAT)
  const register = loadRegister(REPO)
  if (args.has("ingest-m1")) { ingestM1(args.get("ingest-m1").split(",").filter(Boolean), register); }
  if (args.has("ingest-m2")) { ingestM2(args.get("ingest-m2").split(",").filter(Boolean), P.dir); }

  const certDir = path.join(CERT, "data/standards", P.dir)
  if (!fs.existsSync(certDir)) { console.error(`confidence-run: cert dir ${certDir} missing`); process.exit(2) }
  const methodsPath = path.join(REPO, "data/evidence/analytical_methods.csv")
  const methodById = new Map((fs.existsSync(methodsPath) ? fs.readFileSync(methodsPath, "utf8").split("\n").slice(1).filter(Boolean).map((l) => l.split(",")[0]) : []).map((id) => [id, true]))
  const verifications = readVerifications(REPO)
  const config = readJsonSafe(path.join(REPO, "tools/standards", P.config)) || {}
  const restrict = config.subcategories ? new Set(Object.keys(config.subcategories)) : null

  // Lens 0a: the audit gate on the CERT dir, failures parsed to (slug, variant, analyte)
  const aud = spawnSync("node", ["tools/standards/audit-compiled-standards.mjs", `--dir=${certDir}`, "--json"], { cwd: REPO, encoding: "utf8", maxBuffer: 1 << 28 })
  const auditFails = new Map()
  try {
    for (const rec of JSON.parse(aud.stdout)[0].records) for (const f of rec.fails) {
      const m = f.msg.match(/^(?:\[([^\]]+)\]\s*)?([A-Za-z-]+):/)
      const key = m ? `${rec.slug}|${m[1] || "_"}|${m[2]}` : `${rec.slug}|_|*`
      ;(auditFails.get(key) || auditFails.set(key, []).get(key)).push(`${f.code}:${f.msg}`)
    }
  } catch (e) { console.error(`confidence-run: audit unreadable: ${e.message}`); process.exit(2) }

  const prior = readManifest(REPO, P.dir)
  const voided = new Set(((readJsonSafe(path.join(CONF, "_voided.json")) || { batches: [] }).batches).map((b) => b.batch_id))
  const m2dir = path.join(CONF, "_m2-verdicts", P.dir)
  const m2files = fs.existsSync(m2dir) ? fs.readdirSync(m2dir).filter((f) => f.endsWith(".json")).map((f) => readJsonSafe(path.join(m2dir, f))).filter(Boolean) : []

  const cells = {}
  const m1Queue = new Map() // regulation_page -> { rows: Map(id -> row), cells: [] }
  const m2Batches = new Map() // evidence_key -> packet
  const summary = { cells: 0, confirmed: 0, refuted: 0, unverified: 0, blocked: 0, stale: 0, lens0_fail: 0, m1_pending_rows: new Set(), records: 0 }
  const certRev = gitRev(CERT), regRev = gitRev(REPO)

  for (const f of fs.readdirSync(certDir).filter((x) => x.endsWith(".json") && !x.startsWith("_") && !x.startsWith("derivation")).sort()) {
    const raw = fs.readFileSync(path.join(certDir, f), "utf8")
    const rec = JSON.parse(raw)
    const slug = rec.slug || f.replace(/\.json$/, "")
    if (restrict && !restrict.has(slug)) continue
    const recordSha = sha256(raw)
    summary.records++
    for (const [vk, vcells] of variantsOf(rec)) {
      for (const analyte of FULL_PANEL) {
        const cell = vcells ? vcells[analyte] : undefined
        const key = `${slug}|${vk}|${analyte}`
        summary.cells++
        const st = cellState(cell, vcells || {})
        const d = cell ? dSet({ rec, cell, analyte, cells: vcells, register, repo: REPO, methodById }) : { fails: ["D7:cell absent"], state: st, kind: "absent", ids: [] }
        const lens0 = [...(auditFails.get(`${slug}|${vk}|${analyte}`) || []), ...(auditFails.get(`${slug}|_|${analyte}`) || []).filter(() => vk === "_"), ...(auditFails.get(`${slug}|${vk}|*`) || []), ...(auditFails.get(`${slug}|_|*`) || []), ...d.fails]
        if (st.state === "EMPTY") lens0.push(`READINESS:EMPTY (${st.reason})`)
        if (rec.provisional_scaffold) lens0.push("READINESS:provisional_scaffold")
        // value-determining rows (bounded cells inherit the parent's rows)
        const parentCell = st.state === "bounded" ? vcells[st.parent] : null
        const ids = st.state === "bounded" ? anchorIds(parentCell) : d.ids
        const pages = instrumentPages(ids, register)
        // M1 status
        const m1 = { verified: [], pending: [], blocked: [] }
        for (const id of ids) {
          const row = register.get(id)
          if (!row) { m1.blocked.push(id); continue }
          const v = verifications.get(`${id}|${row._sha256}`)
          if (v && v.status === "verified") m1.verified.push(id)
          else if (v && (v.status === "refuted")) { lens0.push(`M1:refuted ${id} (${v.reason})`); m1.blocked.push(id) }
          else {
            const hasPrimary = !!(row.url || (row.notes || "").includes("raw/") || pageHasSource(row.regulation_page))
            if (hasPrimary) { m1.pending.push(id); summary.m1_pending_rows.add(id) } else m1.blocked.push(id)
            const q = m1Queue.get(row.regulation_page || "(none)") || m1Queue.set(row.regulation_page || "(none)", { rows: new Map(), cells: [] }).get(row.regulation_page || "(none)")
            q.rows.set(id, row); q.cells.push(key)
          }
        }
        // M2 status: evidence_key batches identical evidence
        const basisClass = (cell && (cell.basis || cell.basis_label || cell.binding_basis)) || rec.native_basis || ""
        const conversion = projection(cell || {}, rec.native_basis).conversion
        const evidenceKey = sha256(`${analyte}|${ids.join(",")}|${basisClass}|${conversion || ""}`).slice(0, 16)
        const m2 = m2StatusFor(key, evidenceKey, m2files, voided, cell, register, analyte)
        // verdict
        let verdict, reasons = []
        if (lens0.length) { verdict = "refuted"; reasons = lens0 }
        else if (m1.blocked.length) { verdict = "blocked"; reasons = m1.blocked.map((id) => `M1:no primary text for ${id}`) }
        else if (m1.pending.length) { verdict = "unverified"; reasons = m1.pending.map((id) => `M1:pending ${id}`) }
        else if (m2.status === "refuted") { verdict = "refuted"; reasons = m2.reasons }
        else if (m2.status !== "confirmed") { verdict = "unverified"; reasons = m2.reasons }
        else verdict = "confirmed"
        if (st.state === "EMPTY" && !lens0.some((x) => x.startsWith("READINESS"))) lens0.push("READINESS:EMPTY")
        const priorCell = prior && prior.cells && prior.cells[key]
        const stale = !!(priorCell && priorCell.record_sha256 && priorCell.record_sha256 !== recordSha)
        if (stale) summary.stale++
        summary[verdict]++
        if (lens0.length) summary.lens0_fail++
        cells[key] = {
          slug, variant: vk, analyte, verdict, reasons: reasons.length ? reasons : undefined,
          state: st.state, kind: d.kind, confidence_meaning: confidenceMeaning(cell || {}, st),
          published_value: cell && isNum(cell.value) ? cell.value : null,
          blind_value: m2.blind_value ?? null,
          evidence_ids: ids, instrument_pages: pages, evidence_key: evidenceKey,
          claim_sha256: claimHash(cell || {}, rec.native_basis), anchor_sha256: anchorHash(ids, register), instrument_sha256: instrumentHash(pages, REPO),
          record_sha256: recordSha, cell_sha256: cellHash(cell || {}),
          m1: { verified: m1.verified, pending: m1.pending, blocked: m1.blocked }, m2: { status: m2.status, batch_ids: m2.batch_ids, lenses: m2.lenses },
          verified_at: new Date().toISOString(), run_id: RUN_ID, session: SESSION,
        }
        // M2 packet (blind): only cells that passed Lens 0 and whose M1 is fully verified reach a model
        if (!lens0.length && !m1.blocked.length && !m1.pending.length && m2.status !== "confirmed" && st.state !== "EMPTY") {
          const b = m2Batches.get(evidenceKey) || m2Batches.set(evidenceKey, { evidence_key: evidenceKey, analyte, basis_class: basisClass, conversion: conversion || null, native_basis: rec.native_basis, category: P.category, compiled_dir: P.dir, anchors: ids.map((id) => publicRow(register.get(id))), cells: [] }).get(evidenceKey)
          b.cells.push({ key, slug, product: rec.name, scope_note: rec.scope_note || null, material: rec.material || null, basis_guard: rec.basis_guard || null, variant: vk, kind: d.kind, state: st.state, subsumed_by: st.parent || null })
        }
      }
    }
  }

  // Manifest
  const manifest = {
    _doc: "GENERATED by tools/standards/confidence-run.mjs — never hand-edit. Per-cell verdicts of the standards confidence pass, computed against the CERT record bytes (record_sha256). Lens agreement is a necessary condition for `confirmed`, never a probability estimate (governance v2.7 Rule #1).",
    compiled_dir: P.dir, category: P.category, method_version: METHOD_VERSION, run_id: RUN_ID, session: SESSION,
    generated_at: new Date().toISOString(), register_commit: regRev, cert_commit: certRev,
    occurrence_statement: "0 occurrence-derived cells",
    lens_models: { lens0: "deterministic (audit-compiled-standards C1–C12, readiness cell classes, D-set)", m1: "claude-fable-5-1 ×2 blind, effort high; deep-read xhigh", m2: "claude-fable-5-1 ×2 blind, effort high" },
    summary: { records: summary.records, cells: summary.cells, confirmed: summary.confirmed, refuted: summary.refuted, unverified: summary.unverified, blocked: summary.blocked, stale: summary.stale, lens0_fail: summary.lens0_fail, m1_pending_rows: summary.m1_pending_rows.size, m2_batches_pending: m2Batches.size },
    cells,
  }
  writeManifest(REPO, P.dir, manifest)

  // Queues (blind packets for the session to dispatch)
  fs.mkdirSync(CONF, { recursive: true })
  const m1q = [...m1Queue.entries()].map(([page, q]) => ({ regulation_page: page, primary_text: primaryTextFor(page, [...q.rows.values()]), rows: [...q.rows.values()].map(publicRow), cells: q.cells }))
  fs.writeFileSync(path.join(CONF, `_m1-queue-${P.dir}.json`), JSON.stringify({ compiled_dir: P.dir, run_id: RUN_ID, instruments: m1q }, null, 2) + "\n")
  const canaries = makeCanaries([...m2Batches.values()])
  fs.mkdirSync(path.join(CONF, "_canaries"), { recursive: true })
  fs.writeFileSync(path.join(CONF, "_canaries", `${P.dir}.json`), JSON.stringify({ compiled_dir: P.dir, run_id: RUN_ID, cells: canaries.ledger }, null, 2) + "\n")
  fs.writeFileSync(path.join(CONF, `_m2-queue-${P.dir}.json`), JSON.stringify({ compiled_dir: P.dir, run_id: RUN_ID, batches: canaries.batches }, null, 2) + "\n")

  console.log(`confidence-run [${P.dir}]: ${summary.records} record(s), ${summary.cells} cell(s): ${summary.confirmed} confirmed, ${summary.refuted} refuted, ${summary.unverified} unverified, ${summary.blocked} blocked, ${summary.stale} stale | Lens 0 failures on ${summary.lens0_fail} cell(s) | M1 pending rows ${summary.m1_pending_rows.size} across ${m1q.length} instrument(s) | M2 batches pending ${m2Batches.size}`)
  console.log(`  wrote confidence/${P.dir}.json, _m1-queue-${P.dir}.json, _m2-queue-${P.dir}.json, _canaries/${P.dir}.json`)

  if (args.has("mirror")) {
    const lint = spawnSync("node", ["tools/standards/lint-standards-confidence.mjs", `--dir=${P.dir}`, "--block", `--cert=${CERT}`], { cwd: REPO, encoding: "utf8" })
    if (lint.status !== 0) { console.error(`confidence-run: refusing --mirror: the index confidence lint fails for ${P.dir}\n${lint.stdout.slice(-1500)}`); process.exitCode = 1 }
    else {
      const dst = path.join(CERT, "data/standards/confidence"); fs.mkdirSync(dst, { recursive: true })
      fs.copyFileSync(path.join(CONF, `${P.dir}.json`), path.join(dst, `${P.dir}.json`))
      console.log(`  mirrored → ${path.join(dst, `${P.dir}.json`)}`)
    }
  }

  function pageHasSource(page) {
    if (!page) return false
    const f = path.join(REPO, "wiki", `${page}.md`)
    if (!fs.existsSync(f)) return false
    const fm = (fs.readFileSync(f, "utf8").match(/^---\n([\s\S]*?)\n---/) || [, ""])[1]
    return /^(source_file|source_url):\s*"?(raw\/|https?:)/m.test(fm)
  }
  function primaryTextFor(page, rows) {
    const out = { register_urls: [...new Set(rows.map((r) => r.url).filter(Boolean))], raw_paths: [] }
    for (const r of rows) for (const m of (r.notes || "").matchAll(/raw\/[^\s,;")]+/g)) out.raw_paths.push(m[0])
    const f = page && page !== "(none)" ? path.join(REPO, "wiki", `${page}.md`) : null
    if (f && fs.existsSync(f)) {
      const fm = (fs.readFileSync(f, "utf8").match(/^---\n([\s\S]*?)\n---/) || [, ""])[1]
      const sf = fm.match(/^source_file:\s*"?([^"\n]+)"?/m); const su = fm.match(/^source_url:\s*"?([^"\n]+)"?/m)
      if (sf) out.raw_paths.push(sf[1].trim()); if (su && su[1].trim() !== "null") out.register_urls.push(su[1].trim())
      out.wiki_page = `wiki/${page}.md`
    } else out.wiki_page = null
    out.raw_paths = [...new Set(out.raw_paths)]; out.register_urls = [...new Set(out.register_urls)]
    return out
  }
}

function publicRow(r) {
  if (!r) return null
  const { _line, ...rest } = r
  return { ...rest, row_sha256: r._sha256 }
}

// M2 status from stored verdict files: both blind agents confirmed, blind values equal each other and
// the published value (after roundDisplay), the derived anchor is among the cell's evidence ids, and
// min(candidates) (same analyte, non-gated, register-resolvable) equals the published value.
function m2StatusFor(key, evidenceKey, files, voided, cell, register, analyte) {
  const hits = []
  for (const v of files) {
    if (v.evidence_key !== evidenceKey) continue
    if (voided.has(v.batch_id)) continue
    const c = (v.cells || []).find((x) => x.key === key)
    if (c) hits.push({ ...c, agent: v.agent, model: v.model, effort: v.effort, batch_id: v.batch_id, run_id: v.run_id })
  }
  const blind = hits.filter((h) => h.agent !== "deep")
  const lenses = hits.map((h) => ({ agent: h.agent, model: h.model, effort: h.effort, batch_id: h.batch_id, applicability: h.applicability, blind_value: h.blind_value, derived_anchor_id: h.derived_anchor_id, reason: h.reason || null }))
  const batch_ids = [...new Set(hits.map((h) => h.batch_id))]
  if (!hits.length) return { status: "pending", reasons: ["M2:no verdicts yet"], lenses, batch_ids }
  const published = cell && isNum(cell.value) ? cell.value : null
  const refuted = hits.filter((h) => h.applicability === "refuted")
  if (refuted.length) return { status: "refuted", reasons: refuted.map((h) => `M2:${h.agent} refuted: ${h.reason || ""}`), lenses, batch_ids, blind_value: refuted[0].blind_value }
  if (hits.some((h) => h.applicability === "cannot-verify")) return { status: "pending", reasons: ["M2:cannot-verify → needs deep read"], lenses, batch_ids }
  if (blind.length < 2) return { status: "pending", reasons: [`M2:${blind.length} blind verdict(s), need 2`], lenses, batch_ids }
  const bv = blind.map((h) => (isNum(Number(h.blind_value)) ? roundDisplay(Number(h.blind_value)) : null))
  if (published != null && bv.some((v) => v !== published)) return { status: "refuted", reasons: [`M2:blind_value ${bv.join("/")} ≠ published ${published}`], lenses, batch_ids, blind_value: bv[0] }
  // recompute min(candidates)
  const reasons = []
  for (const h of blind) {
    const cands = (h.same_basis_candidates || []).map((c) => register.get(c.id)).filter((r) => r && !STATUS_GATE.test(r.status) && normMetal(r.metal_species) === analyte).map((r) => Number(r.value_ug_kg)).filter(Number.isFinite)
    if (published != null && cands.length && roundDisplay(Math.min(...cands)) < published) reasons.push(`M2:${h.agent} listed a stricter live same-basis candidate (${roundDisplay(Math.min(...cands))}) than the published ${published}`)
  }
  if (reasons.length) return { status: "refuted", reasons, lenses, batch_ids, blind_value: bv[0] }
  return { status: "confirmed", reasons: [], lenses, batch_ids, blind_value: bv[0] }
}

// ~3% canaries: an extra batch that LOOKS like a real one but carries a known defect — its anchor row is
// rewritten to a toy-migration instrument (EN 71-3 soluble-element basis, toy scope) that can never govern
// a dietary or content cell. The honest applicability verdict is "refuted" (basis and scope do not apply).
// An agent that returns "confirmed" for a canary rubber-stamped the packet, and every batch that agent
// returned in that packet run is voided at ingest. The packet carries no marker; only the ledger
// (_canaries/<dir>.json, never given to an agent) knows which batch is the canary.
function makeCanaries(batches) {
  const ledger = {}
  const out = []
  let i = 0
  for (const b of batches) {
    const batch = { ...b, batch_id: `${b.compiled_dir}-${b.evidence_key}-${RUN_ID}` }
    out.push(batch)
    if (batch.cells.length && i++ % 33 === 0) {
      const src = batch.cells[0]
      const fakeKey = sha256(`canary|${batch.batch_id}`).slice(0, 16)
      const anchors = batch.anchors.filter(Boolean).map((a, j) => (j === 0 ? { ...a, basis: "soluble element migration from toy material (EN 71-3 category III), mg/kg of material", product_scope: "toys and toy components (soluble element migration)", regulation_page: "regulations/eu-2009-48-toy-safety-migration-limits", jurisdiction: "EU", authority: "European Parliament and Council (Directive 2009/48/EC)" } : a))
      const canary = { ...batch, evidence_key: fakeKey, batch_id: `${b.compiled_dir}-${fakeKey}-${RUN_ID}`, basis_class: b.basis_class, anchors, cells: [{ ...src }] }
      out.push(canary)
      ledger[canary.batch_id] = { kind: "wrong-basis-anchor", of_batch: batch.batch_id, key: src.key, honest_verdict: "refuted" }
    }
  }
  return { batches: out, ledger }
}

main()
