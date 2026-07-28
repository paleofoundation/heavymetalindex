#!/usr/bin/env node
// Cross-engine audit lane: Codex/GPT audits the source-page DRAFTS that the
// Kimi lane (or any drafting engine) leaves uncommitted, and records a verdict.
//
//   node tools/autonomy/audit-drafts-with-codex.mjs --max-pages=3
//   node tools/autonomy/audit-drafts-with-codex.mjs --page=wiki/sources/foo.md
//   node tools/autonomy/audit-drafts-with-codex.mjs --dry-run
//
// WHY THIS EXISTS: auditing every page with Claude puts Claude back in the loop
// for all ~11k pages, which defeats the point of the scut lanes. A DIFFERENT
// flat-cost engine grading each page is both cheaper and stronger than one
// engine grading its own work. Claude then samples (~5-10%) + handles
// QUARANTINE/escalations + writes the standards.
//
// This script does NOT commit anything. It only produces verdicts.
// tools/autonomy/promote-audited-drafts.mjs is the single serial committer.
//
// FAIL-CLOSED: any unparseable/missing verdict becomes QUARANTINE, never
// PROMOTE. A page reaches main only on an explicit, parsed PROMOTE.

import fs from "node:fs"
import path from "node:path"
import { spawn, execFileSync } from "node:child_process"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))

const codexBinary =
  args.get("codex-bin") ?? "/Applications/Codex.app/Contents/Resources/codex"
const auditPromptPath = path.join(repoRoot, "docs/gpt-collaboration/audit-prompt.md")
const taxonomySnapshot = "docs/gpt-collaboration/taxonomy-snapshot.md"
const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const reportsDir = path.join(autonomyDir, "audit-reports")
const verdictsPath = path.join(autonomyDir, "audit-verdicts.jsonl")
const ledgerPath = path.join(autonomyDir, "agent-events.jsonl")

const maxPages = Number(args.get("max-pages") ?? 3)
const concurrency = Number(args.get("concurrency") ?? 3)
const timeoutMins = Number(args.get("timeout-mins") ?? 12)
const reasoningEffort = args.get("reasoning-effort") ?? process.env.CODEX_REASONING_EFFORT ?? "medium"
const dryRun = args.has("dry-run")
const singlePage = args.get("page")

// ─── Gates (fail-closed) ──────────────────────────────────────────────
for (const stop of [".frank.STOP", ".hmi-kimi.STOP", ".hmi-audit.STOP"]) {
  if (fs.existsSync(path.join(process.env.HOME ?? "", stop))) {
    console.log(`HALTED: ~/${stop} present.`)
    process.exit(0)
  }
}
if (!fs.existsSync(auditPromptPath)) {
  console.error(`HALTED: audit prompt missing at ${path.relative(repoRoot, auditPromptPath)}`)
  process.exit(1)
}
if (!dryRun && !fs.existsSync(codexBinary)) {
  console.error(`HALTED: Codex CLI not found at ${codexBinary}`)
  process.exit(1)
}

fs.mkdirSync(reportsDir, { recursive: true })

// ─── Discover drafts ──────────────────────────────────────────────────
// A "draft" is an UNTRACKED page under wiki/sources/. The drafting lanes are
// forbidden from committing, so untracked == awaiting audit. Anything already
// tracked has been through this gate (or predates it) and is not re-audited.
function discoverDrafts() {
  if (singlePage) return [singlePage]
  try {
    const out = execFileSync(
      "git",
      ["ls-files", "--others", "--exclude-standard", "wiki/sources"],
      { cwd: repoRoot, encoding: "utf8" },
    )
    return out.split("\n").map((l) => l.trim()).filter((l) => l.endsWith(".md"))
  } catch (e) {
    console.error(`Could not list untracked drafts: ${e.message}`)
    return []
  }
}

const alreadyAudited = new Set()
if (fs.existsSync(verdictsPath)) {
  for (const line of fs.readFileSync(verdictsPath, "utf8").split("\n")) {
    if (!line.trim()) continue
    try {
      const v = JSON.parse(line)
      if (v.page) alreadyAudited.add(v.page)
    } catch {}
  }
}

const drafts = discoverDrafts().filter((p) => singlePage || !alreadyAudited.has(p))
if (!drafts.length) {
  console.log("No un-audited drafts under wiki/sources/. Nothing to do.")
  process.exit(0)
}

const batch = drafts.slice(0, maxPages)
console.log(`${drafts.length} un-audited draft(s); auditing ${batch.length} this run.`)

// ─── Audit drafts (concurrent pool) ───────────────────────────────────
// Audits are independent and read-only, so they parallelize safely. Only the
// promoter (a separate script) ever writes to git.
function auditOne(pageRel) {
  return new Promise((resolve) => {
    const pageAbs = path.join(repoRoot, pageRel)
    if (!fs.existsSync(pageAbs)) {
      console.log(`  skip (missing): ${pageRel}`)
      return resolve(null)
    }
    const pageText = fs.readFileSync(pageAbs, "utf8")
    const citeKey = matchField(pageText, "cite_key") || path.basename(pageRel, ".md")
    const rawPath = matchField(pageText, "raw_path")
    const handle = matchField(pageText, "raw_handle") || ""
    const prompt = buildAuditPrompt({ pageRel, rawPath, citeKey, handle })

    if (dryRun) {
      console.log(`\nDRY RUN — would audit ${pageRel} (cite_key=${citeKey}, source=${rawPath || "UNKNOWN"})`)
      console.log(`  ${codexBinary} exec -c model_reasoning_effort="${reasoningEffort}" … <prompt ${prompt.length} chars>`)
      return resolve(null)
    }

    console.log(`── auditing ${citeKey}`)
    const started = Date.now()
    const child = spawn(
      codexBinary,
      [
        "exec",
        "-c", `model_reasoning_effort="${reasoningEffort}"`,
        "--dangerously-bypass-approvals-and-sandbox",
        "--skip-git-repo-check",
        "-C", repoRoot,
        "--add-dir", repoRoot,
        "--color", "never",
      ],
      { cwd: repoRoot, stdio: ["pipe", "pipe", "pipe"] },
    )
    let stdout = "", stderr = "", timedOut = false
    const killer = setTimeout(() => {
      timedOut = true
      try { child.kill("SIGKILL") } catch {}
    }, timeoutMins * 60 * 1000)

    child.stdout.on("data", (d) => { stdout += d })
    child.stderr.on("data", (d) => { stderr += d })
    child.on("close", (code) => {
      clearTimeout(killer)
      const elapsed = ((Date.now() - started) / 1000).toFixed(1)
      const stamp = new Date().toISOString().replace(/[:.]/g, "-")
      const reportPath = path.join(reportsDir, `${citeKey}-${stamp}.md`)
      fs.writeFileSync(reportPath, stdout || `(no output)\n\nstderr:\n${stderr}`)

      // FAIL-CLOSED verdict parse.
      let verdict = parseVerdict(stdout)
      let note = ""
      if (timedOut) {
        verdict = "QUARANTINE"; note = `audit timed out after ${timeoutMins}min`
      } else if (code !== 0) {
        verdict = "QUARANTINE"; note = `codex exited ${code}`
      } else if (!verdict) {
        verdict = "QUARANTINE"; note = "verdict unparseable from audit output"
      }

      console.log(`   ${citeKey}: ${verdict}${note ? ` — ${note}` : ""} (${elapsed}s)`)

      const record = {
        ts: new Date().toISOString(),
        page: pageRel,
        cite_key: citeKey,
        raw_path: rawPath || "",
        handle,
        verdict,
        auditor: "codex",
        report: path.relative(repoRoot, reportPath),
        note,
      }
      // Appends are atomic-enough line writes; order across workers is not
      // meaningful (the promoter takes the last verdict per page).
      fs.appendFileSync(verdictsPath, JSON.stringify(record) + "\n")
      appendLedger({
        ts: record.ts,
        actor: "codex-auditor",
        source_path: rawPath || pageRel,
        cite_key: citeKey,
        status: `audited:${verdict}`,
        commit: "",
        blocker: verdict === "QUARANTINE" ? note || "quarantined by audit" : "",
        next: verdict === "PROMOTE" ? "promoter may commit" : "conductor review",
      })
      resolve(record)
    })
    child.stdin.write(prompt)
    child.stdin.end()
  })
}

const results = []
const queue = [...batch]
async function pump() {
  while (queue.length) {
    const next = queue.shift()
    const r = await auditOne(next)
    if (r) results.push(r)
  }
}
await Promise.all(Array.from({ length: Math.min(concurrency, batch.length) }, pump))

if (!dryRun) {
  const tally = results.reduce((a, r) => ({ ...a, [r.verdict]: (a[r.verdict] || 0) + 1 }), {})
  console.log(
    `\nAudited ${results.length}: ` +
      Object.entries(tally).map(([k, v]) => `${v} ${k}`).join(", ") || "none",
  )
  console.log(`Verdicts: ${path.relative(repoRoot, verdictsPath)}`)
  console.log(`Next: node tools/autonomy/promote-audited-drafts.mjs`)
}

// ─── helpers ──────────────────────────────────────────────────────────
function buildAuditPrompt({ pageRel, rawPath, citeKey, handle }) {
  const auditDoc = fs.readFileSync(auditPromptPath, "utf8")
  const block = auditDoc.match(/```\n(You are running a QA audit[\s\S]+?)\n```/)
  const canonical = block ? block[1].trim() : auditDoc

  return `${canonical}

=== HOW TO GET THE INPUTS (you have filesystem access; read them yourself) ===

You are running non-interactively inside the repo at ${repoRoot}.
Read these files directly instead of expecting pasted content:

- WIKI SOURCE PAGE: ${pageRel}   (cite_key: ${citeKey}${handle ? `, handle: ${handle}` : ""})
- SOURCE EVIDENCE: ${rawPath || "(no raw_path in frontmatter — treat as ❌ Check 1 blocker and return QUARANTINE)"}
- TAXONOMY SNAPSHOT: ${taxonomySnapshot}

AUDIT SCOPE: all five checks.

HARD CONSTRAINTS FOR THIS RUN:
- You are an AUDITOR. Do NOT edit, fix, reformat, or rewrite the page. Do NOT
  create or delete files. Do NOT run git add / git commit / git push. Read only.
- Do not modify anything under data/evidence/ — the calling script records your
  verdict.
- Your ONLY output is the audit report in the exact format specified above,
  ending with a "## Verdict" section whose first word is exactly one of:
  PROMOTE, REVISE, or QUARANTINE.
- If you cannot read the source evidence, return QUARANTINE — never PROMOTE a
  page you could not verify against its source.

Begin the audit now and print the report to stdout.`
}

function parseVerdict(text) {
  if (!text) return null
  // Look for the Verdict section, then the first bare verdict token after it.
  const section = text.split(/##\s*Verdict/i)[1]
  const hay = section ?? text
  const m = hay.match(/\b(PROMOTE|REVISE|QUARANTINE)\b/)
  return m ? m[1] : null
}

function matchField(text, field) {
  const m = text.match(new RegExp(`^${field}:\\s*"?([^"\\n]+)"?\\s*$`, "m"))
  return m ? m[1].trim() : ""
}

function appendLedger(obj) {
  try {
    fs.appendFileSync(ledgerPath, JSON.stringify(obj) + "\n")
  } catch (e) {
    console.error(`  (ledger append failed: ${e.message})`)
  }
}

function parseArgs(argv) {
  const m = new Map()
  for (const a of argv) {
    if (!a.startsWith("--")) continue
    const [k, v] = a.slice(2).split("=")
    m.set(k, v ?? true)
  }
  return m
}
