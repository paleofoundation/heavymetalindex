#!/usr/bin/env node
// supersede-instrument.mjs — mark every register row of one instrument superseded / not in force,
// and stamp the instrument's wiki regulation page, in ONE deterministic, reviewable step.
//
// Used when the confidence pass (M1 register-row verification, two blind agents + a deep read)
// establishes that an instrument is no longer in force. The register's `status` is the instrument's
// own legal-status string; the unified gate (tools/standards/lib/register-gate.mjs) then excludes the
// rows from every compiler, the audit (C4) and the resolver, so no standard can keep citing a
// superseded instrument silently. Nothing else on a row is touched (values, scopes, bases stay as
// the historical record); the change is a status-only edit exactly like the GB 2762-2022 supersession.
//
// Usage:
//   node tools/standards/supersede-instrument.mjs --page=regulations/<slug> \
//     --status="superseded — replaced by <successor> effective <YYYY-MM-DD>; not for implementation" \
//     --successor="<successor instrument, one line>" --effective=<YYYY-MM-DD> --evidence="<source>" [--apply]
// Dry-run by default: prints the rows and the frontmatter change; --apply writes the register, the
// wiki page frontmatter (status, superseded_by, effective_until, updated) and a wiki-edit audit row.

import fs from "node:fs"
import path from "node:path"
import { randomUUID } from "node:crypto"
import { STATUS_GATE } from "./lib/register-gate.mjs"

const REPO = process.cwd()
const args = new Map(process.argv.slice(2).flatMap((a) => (a.startsWith("--") ? [a.slice(2).split("=").concat([""]).slice(0, 2)] : [])))
const PAGE = args.get("page"), STATUS = args.get("status"), SUCC = args.get("successor") || "", EFF = args.get("effective") || "", EVIDENCE = args.get("evidence") || ""
const APPLY = args.has("apply")
if (!PAGE || !STATUS) { console.error("supersede-instrument: --page=regulations/<slug> and --status=... are required"); process.exit(2) }
if (!STATUS_GATE.test(STATUS)) { console.error(`supersede-instrument: the status "${STATUS}" would NOT be gated by lib/register-gate.mjs; use superseded / withdrawn / repealed / revoked wording`); process.exit(2) }

const REG = path.join(REPO, "data/evidence/regulatory_limits.csv")
const lines = fs.readFileSync(REG, "utf8").split("\n")
const head = lines[0].split(",")
const iStatus = head.indexOf("status"), iPage = head.indexOf("regulation_page")
function splitCsv(line) { const out = []; let cur = "", q = false; for (const ch of line) { if (ch === '"') { q = !q; cur += ch } else if (ch === "," && !q) { out.push(cur); cur = "" } else cur += ch } out.push(cur); return out }
let changed = 0, already = 0
const out = lines.map((l) => {
  if (!l.trim()) return l
  const cells = splitCsv(l)
  if (cells.length !== head.length) return l
  if ((cells[iPage] || "").replace(/^"|"$/g, "") !== PAGE) return l
  if (STATUS_GATE.test(cells[iStatus].replace(/^"|"$/g, ""))) { already++; return l }
  cells[iStatus] = STATUS.includes(",") ? `"${STATUS.replace(/"/g, "'")}"` : STATUS
  changed++
  return cells.join(",")
})
const wikiPath = path.join(REPO, "wiki", `${PAGE}.md`)
let fmChange = null
if (fs.existsSync(wikiPath)) {
  const src = fs.readFileSync(wikiPath, "utf8")
  const m = src.match(/^---\n([\s\S]*?)\n---/)
  if (m) {
    let fm = m[1]
    const set = (k, v) => { fm = new RegExp(`^${k}:`, "m").test(fm) ? fm.replace(new RegExp(`^${k}:.*$`, "m"), `${k}: ${v}`) : fm + `\n${k}: ${v}` }
    set("status", "superseded")
    if (SUCC) set("superseded_by", JSON.stringify(SUCC))
    if (EFF) set("effective_until", EFF)
    set("updated", new Date().toISOString().slice(0, 10))
    fmChange = { path: wikiPath, next: `---\n${fm}\n---` + src.slice(m[0].length) }
  }
}
console.log(`supersede-instrument [${PAGE}]: ${changed} row(s) → "${STATUS}"${already ? `; ${already} already gated` : ""}; wiki page ${fmChange ? "frontmatter → status: superseded" : "not found (no page edit)"}${APPLY ? "" : "  (dry-run; pass --apply)"}`)
if (APPLY) {
  fs.writeFileSync(REG, out.join("\n"))
  if (fmChange) {
    fs.writeFileSync(fmChange.path, fmChange.next)
    const audit = path.join(REPO, "data/evidence/wiki_edit_audit.jsonl")
    fs.appendFileSync(audit, JSON.stringify({ edit_id: randomUUID(), page: `wiki/${PAGE}.md`, span_id: "supersession-frontmatter", source_document: EVIDENCE || `${PAGE}: instrument superseded (M1 verification)`, retrieval_date: new Date().toISOString().slice(0, 10), models_used: ["claude-fable-5-1"], model_agreement_state: "two-blind-plus-deep-read", applied_at: new Date().toISOString(), commit_sha: "pending" }) + "\n")
  }
  console.log("  applied (register status-only edit; wiki frontmatter; wiki_edit_audit row)")
}
