#!/usr/bin/env node
// Autonomous manual-fetch PDF ingester for the daemon tick.
//
// Walks the three manual-fetch folders (raw/Manual Fetch Kimi /,
// raw/Manual Resourcing/, raw/Papers Cube Manual Fetch/), maintains
// a per-PDF tracker, picks N unprocessed PDFs per tick, and invokes
// `claude --print` to run the full Cochrane workflow per PDF:
//
//   1. Read the PDF (with pages parameter as needed for long PDFs)
//   2. Identity-check: DOI grep + raw_handle grep + cite-key grep against wiki/sources/
//   3. NEW path: write a fresh source page per Part 6 template
//      EXISTING path: merge-enhance against the existing page, preserving
//      cite_key/raw_handle/access_url, fixing defects per the verification-
//      checklist (invalid slugs, brand-firewall violations, transposed values,
//      legacy headings, missing exposure numbers, etc.)
//   4. Run routing audit (npm run evidence:source-routes)
//   5. Spawn fresh-context audit subagent via Agent tool
//      (subagent_type: general-purpose) with the 5-check audit prompt
//   6. Verify each ❌ finding independently against the source; apply real
//      ones, push back on false positives with disproving citations
//   7. Commit ingest + audit application
//   8. Append to data/evidence/audit-queue.csv with audited-* status
//
// The wrapper handles candidate selection, claude subprocess invocation,
// tracker updates, and batch reporting. The spawned claude does the full
// per-PDF Cochrane workflow inside one invocation.
//
// Per OPERATING.md Part 3 ("no approval gates") and Karen's 2026-05-17
// directive ("take me out of this equation"), this runs unattended.
// Stop conditions surface in the morning report; they do not block the
// daemon tick.
//
// Usage:
//   node tools/autonomy/ingest-manual-fetch-batch.mjs --max-pdfs=3
//   node tools/autonomy/ingest-manual-fetch-batch.mjs --max-pdfs=1 --folder="06_Infant_Foods_Formula"
//   node tools/autonomy/ingest-manual-fetch-batch.mjs --dry-run
//
// Args:
//   --max-pdfs=N         Maximum PDFs to process this tick (default 3; soft cap)
//   --folder=NAME        Restrict to a specific folder (default: walk all in priority order)
//   --model=NAME         Claude CLI model name (default claude-opus-4-7; this is judgment-heavy work)
//   --dry-run            Identify candidates, do not invoke claude
//   --rebuild-tracker    Rebuild the tracker CSV from scratch by walking folders

import fs from "node:fs"
import path from "node:path"
import crypto from "node:crypto"
import { spawnSync, spawn } from "node:child_process"
import { isLowQualityCiteKey } from "../lib/cite-key-validity.mjs"
import { recordCiteKeyRepair } from "../lib/cite-key-repair-queue.mjs"

const repoRoot = process.cwd()
const args = parseArgs(process.argv.slice(2))
const dryRun = args.has("dry-run")
const rebuildTracker = args.has("rebuild-tracker")
const maxPdfs = Number(args.get("max-pdfs") ?? 3)
// Concurrency for parallel ingest workers (added 2026-05-28). Each worker
// runs an independent claude --print spawn against a different PDF. They
// share the tracker as the race-safe claim surface for WORK ASSIGNMENT, but
// the per-PDF `git add`/`git commit` happens INSIDE each spawned claude child
// (per the ingest skill workflow), NOT in this parent. There is no gitLock —
// the old comment here claimed one, but none was ever implemented. At
// concurrency>1 the children race on .git/index.lock with no retry: ~2/3 of
// parallel workers exit 1, and the same paper can be processed twice (observed
// 2026-05-30: cfs2019-organotin committed by both a daemon worker and Codex).
// Because the commits live in the children, a parent-side mutex cannot wrap
// them — so the only safe mode here is serial. Concurrency is hard-clamped to
// 1. Restoring real parallelism requires moving commits to the parent so they
// CAN be serialized (tracked as a follow-up); until then, do not un-clamp.
const requestedConcurrency = Math.max(1, Number(args.get("concurrency") ?? 1))
if (requestedConcurrency > 1) {
  console.log(`WARNING: --concurrency=${requestedConcurrency} requested but CLAMPED to 1 — ` +
    `per-child git commits race on .git/index.lock with no lock (see header comment). ` +
    `This prevents exit-1 commit failures and double-processing.`)
}
const concurrency = 1
const folderRestrict = args.get("folder") ?? null
// --exclude-roots=auto-fetched : skip PDFs whose path contains any listed
// substring. Used to PARTITION engines: FRANK runs Opus with
// --exclude-roots=auto-fetched so Codex/GPT-5.5 (free, on the ChatGPT Plus sub)
// owns the high-volume auto-fetched stream exclusively, and the two never pick
// the same paper. See tools/autonomy/ingest-with-codex.mjs.
const excludeRoots = (args.get("exclude-roots") ?? "").split(",").map((s) => s.trim()).filter(Boolean)
const model = args.get("model") ?? "claude-opus-4-7"

const autonomyDir = path.join(repoRoot, "data/evidence/autonomy")
const trackerPath = path.join(autonomyDir, "manual-fetch-tracker.csv")
const today = new Date().toISOString().slice(0, 10)
const tickTimestamp = new Date().toISOString()

// Priority order — highest-stakes path patterns first. Walker recurses under
// each ROOT and picks any PDF whose path includes the PRIORITY KEYWORD. Order
// matters: PDFs in earlier-listed priority buckets are processed first.
const MANUAL_FETCH_ROOTS = [
  { root: "raw/Manual Fetch Kimi ", handlePrefix: "MFK" },
  { root: "raw/Papers Cube Manual Fetch", handlePrefix: "PCMF" },
  { root: "raw/Manual Resourcing", handlePrefix: "MR" },
  { root: "raw/Manual Fetch Discovery", handlePrefix: "MFD" },
  // Kimi agent download-corruption folder (added 2026-05-30). 430 PDFs across
  // six sets (papers/, babycare_papers/, seafood_papers/, household_papers/,
  // condiments2_papers/, condiment_papers/). 23 are failed downloads (HTML
  // challenge pages + truncated partials) — the isLikelyValidPdf guard in the
  // walker skips those automatically; see data/evidence/kimi-corruption-refetch-2026-05-30.csv
  // for the re-fetch queue.
  { root: "raw/manual-fetch/Kimi_Agent_Download Corruption Issue", handlePrefix: "KADC" },
  // raw/manual-fetch/seasonal-geographic-variance/auto-fetched/ — wishlist
  // fetcher's bulk output. Historically Codex/GPT-5.5-fast-mode drained this
  // via an external scheduler (per docs/codex-collaboration/sprint-ingest-prompt.md).
  // Failure mode observed 2026-05-28: when the residual queue drops to ≤10
  // PDFs, Codex's drain-to-≤10 stop condition fires immediately and the
  // remaining 5–10 PDFs sit indefinitely. This root is now included on the
  // Claude/Opus daemon path with a hard per-tick cap (see auto_fetched_cap
  // below) so the residuals get drained, but the path stays bounded so cost
  // doesn't blow up during sprint mode when the queue is large.
  { root: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched", handlePrefix: "AF" },
  // Research-pull sweeps on the HMI-Library drive (/Volumes/HMI-Library/research-pulls/).
  // These bulk topic sweeps were NEVER a watched root, so ~945 HMI-relevant PDFs
  // sat invisible to ingest. Registered 2026-07-27 via gitignored symlinks in raw/
  // (same pattern as "Manual Fetch Discovery"); the drive's own microbiome-medicine
  // subfolder is deliberately EXCLUDED — it belongs to the MMed/WikiBiome build,
  // not HMI. The DOI/checksum identity check skips the many that are already ingested.
  { root: "raw/Research Pull Ingredient Sweep", handlePrefix: "RPIS" },
  { root: "raw/Research Pull Mercury Deep Dive", handlePrefix: "RPHG" },
  { root: "raw/Research Pull Product Sweep", handlePrefix: "RPPS" },
]

// Hard cap on auto-fetched PDFs per single daemon tick. The Claude/Opus path
// is more expensive than Codex; this keeps cost bounded if the wishlist
// fetcher is producing volume. Codex remains the primary consumer when
// running; Claude only picks up the residuals.
const AUTO_FETCHED_PER_TICK_CAP = 3

const PRIORITY_KEYWORDS = [
  // Auto-fetched papers come from the wishlist fetcher which is already
  // gap-driven (each filename encodes the gap it was fetched for). Drain
  // these FIRST when present — they are the freshest evidence aligned to
  // open gaps. The per-tick cap above bounds the cost.
  "seasonal-geographic-variance/auto-fetched",
  "06_Infant_Foods_Formula",
  "Children Personal Care",
  "04_Meat_Poultry_Seafood",
  "03_Grains_and_Grain_Products",
  "05_Dairy_Eggs_and_Alternatives",
  "Papers Cube Manual Fetch",
  "01_Fruits_and_Fruit_Products",
  "02_Vegetables_and_Vegetable_Products",
  "07_Processed_Foods_Snacks_Beverages",
  "08_Nuts_Seeds_Legumes_and_Misc",
  "condiment_papers",
  "Manual Resourcing",
  "Manual Fetch Discovery",
  // catch-all bucket for top-level loose PDFs and any others
  "",
]

fs.mkdirSync(autonomyDir, { recursive: true })

// Skip-list: pre-computed known-duplicate PDFs (repo-relative path -> reason).
// Populated out-of-band (e.g. DOI-matched against the full corpus) so the
// candidate loop can short-circuit a dupe without paying for a claude --print
// spawn. Tolerant of a missing file (returns empty map) and CRLF line endings.
function loadSkipList() {
  const skipPath = path.join(repoRoot, "data/evidence/manual-fetch-skip.csv")
  const map = new Map()
  if (!fs.existsSync(skipPath)) return map
  const lines = fs.readFileSync(skipPath, "utf8").split(/\r?\n/).filter(Boolean)
  for (let i = 1; i < lines.length; i++) {
    const cells = parseCsvLine(lines[i])
    const relPath = (cells[0] || "").trim()
    if (relPath) map.set(relPath, (cells[1] || "").trim())
  }
  return map
}
const skipReason = loadSkipList()

console.log(`ingest-manual-fetch-batch: max-pdfs=${maxPdfs}, model=${model}, dry-run=${dryRun}, folder=${folderRestrict || "all"}, skip-list=${skipReason.size}`)

// ---------- Tracker management ----------

function loadTracker() {
  if (!fs.existsSync(trackerPath) || rebuildTracker) {
    return new Map()
  }
  const lines = fs.readFileSync(trackerPath, "utf8").split("\n").filter(Boolean)
  const map = new Map()
  for (let i = 1; i < lines.length; i++) {
    const [pdfPath, handle, status, lastTick, citeKey, notes] = parseCsvLine(lines[i])
    map.set(pdfPath, { handle, status, lastTick, citeKey, notes })
  }
  return map
}

function saveTracker(tracker) {
  const header = "pdf_path,handle,status,last_tick,cite_key,notes"
  const rows = []
  for (const [pdfPath, entry] of tracker) {
    rows.push([pdfPath, entry.handle, entry.status, entry.lastTick, entry.citeKey || "", entry.notes || ""].map(csvField).join(","))
  }
  fs.writeFileSync(trackerPath, header + "\n" + rows.join("\n") + "\n", "utf8")
}

// ---------- PDF discovery ----------

// Corruption guard (added 2026-05-30). Manual-fetch folders sometimes contain
// failed downloads saved with a .pdf extension: HTML challenge/error pages
// (Cloudflare, PMC proof-of-work, government 404s) and truncated partial
// downloads. Feeding these to a per-PDF `claude --print` spawn wastes a 25-min
// slot and can produce a defective source page (missing data tables). A
// structurally complete PDF starts with "%PDF-" and ends with "%%EOF"; require
// both. Conservative by design — the corpus's existing clean PDFs all pass.
function isLikelyValidPdf(fullPath) {
  let fd
  try {
    const stat = fs.statSync(fullPath)
    if (stat.size < 1024) return false
    fd = fs.openSync(fullPath, "r")
    const head = Buffer.alloc(5)
    fs.readSync(fd, head, 0, 5, 0)
    if (!head.equals(Buffer.from("%PDF-"))) return false
    const tailLen = Math.min(2048, stat.size)
    const tail = Buffer.alloc(tailLen)
    fs.readSync(fd, tail, 0, tailLen, stat.size - tailLen)
    return tail.includes(Buffer.from("%%EOF"))
  } catch {
    return false
  } finally {
    if (fd !== undefined) fs.closeSync(fd)
  }
}

function walkPdfsRecursive(dir, handlePrefix, out) {
  if (!fs.existsSync(dir)) return
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkPdfsRecursive(full, handlePrefix, out)
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".pdf")) {
      if (!isLikelyValidPdf(full)) continue
      const relPath = path.relative(repoRoot, full)
      const handle = `${handlePrefix}_${slugify(path.basename(entry.name, ".pdf"))}`
      out.push({ pdfPath: relPath, handle, folderName: path.relative(path.join(repoRoot, "raw"), dir) })
    }
  }
}

function walkPdfs() {
  const all = []
  for (const root of MANUAL_FETCH_ROOTS) {
    walkPdfsRecursive(path.join(repoRoot, root.root), root.handlePrefix, all)
  }
  // Filter by folder restriction if set
  let filtered = folderRestrict
    ? all.filter((p) => p.pdfPath.includes(folderRestrict))
    : all
  // Engine partition: drop any root excluded via --exclude-roots.
  if (excludeRoots.length) {
    filtered = filtered.filter((p) => !excludeRoots.some((ex) => p.pdfPath.includes(ex)))
  }
  // Sort by priority keyword order; PDFs matching earlier keywords come first
  filtered.sort((a, b) => priorityRank(a.pdfPath) - priorityRank(b.pdfPath))
  return filtered
}

function priorityRank(pdfPath) {
  for (let i = 0; i < PRIORITY_KEYWORDS.length; i++) {
    const kw = PRIORITY_KEYWORDS[i]
    if (kw === "") return i // catch-all
    if (pdfPath.includes(kw)) return i
  }
  return PRIORITY_KEYWORDS.length
}

// ---------- Per-PDF prompt ----------

function buildPrompt(candidate) {
  return `You are running one cycle of the Heavy Metal Index Cochrane-quality manual-fetch ingest. The Karen-facing slash command for this work is /ingest-next-manual-fetch-pdf, defined at .claude/skills/ingest-next-manual-fetch-pdf/SKILL.md. Read that skill file in full and follow its v2.0 workflow (Phase 1 ingest, Phase 2 audit via Agent subagent, Phase 3 apply findings, Phase 4 stop) for exactly ONE PDF — the one named below. Then exit.

PDF to process: ${candidate.pdfPath}
Suggested handle (you may adjust): ${candidate.handle}
Folder context: ${candidate.folderName}

Process this one PDF end-to-end:
  - Read the PDF (use pages parameter as needed for long PDFs; tables MUST be read).
  - Run three identity checks (DOI grep, raw_handle grep, cite-key grep) against wiki/sources/.
  - If a matching page exists: merge-enhance per the v2 skill's EXISTING path. Preserve cite_key, raw_handle, raw_path, license, access_url, raw_sha256, near_duplicates from the existing page. Fix all defects (invalid slugs, brand-firewall violations, transposed values, legacy headings, missing exposure numbers).
  - If no matching page exists: write a fresh source page per the v2 skill's NEW path.
  - Run npm run evidence:source-routes; confirm 0 unresolved, source not in malformed.
  - Commit the ingest with the per-skill commit-message format.
  - Append the cite-key to data/evidence/audit-queue.csv with status=pending.
  - Spawn a fresh-context audit subagent via the Agent tool (subagent_type: general-purpose) with read-only instructions per the v2 skill's Phase 2.
  - Receive the subagent's structured audit report.
  - For each ❌ definite-error finding: verify independently against the source; apply if correct, push back if false positive (document either way in verification notes).
  - For each ⚠️ concern: verify and apply as judgment dictates.
  - Re-run routing audit if any changes were applied.
  - Commit the audit application (if changes were made).
  - Update data/evidence/audit-queue.csv status to audited-promote / audited-revised / audited-quarantine.

Hard constraints (per CLAUDE.md):
  - cite_key MUST be a real first-author surname + year + short topic slug (e.g. "signes-pastor2018-infant-arsenic"). For an institutional report with no personal author, use the issuing org (fda, efsa, atsdr, who...) + year. NEVER derive the key from a title word, section header (abstract/introduction/keywords/methods/results), analyte name (arsenic/cadmium/lead), or the word "unknown". If you cannot determine the real first author from the paper or its DOI, STOP with reason "cite-key: first author unresolved" rather than mint a placeholder key.
  - Do NOT create new ingredient pages (auto-stub handles ingredients ≥freq-2 separately).
  - Do NOT create new product pages (always Karen's Step 0 Lock).
  - Do NOT run Part 9 synthesis (separate workflow).
  - Do NOT touch wiki/products/, wiki/ingredients/, or other downstream pages directly.
  - Do NOT edit inside <!-- BEGIN --> / <!-- END --> marker blocks.
  - Do NOT modify data/evidence/product_source_routing_audit.csv by hand.
  - Do NOT push to remote (the daemon tick handles the push after all per-PDF work).

If you hit any of the stop conditions defined in the skill (new-page proposal needed, paper-internal contradiction, true duplicate conflict, routing audit fails, Agent tool unavailable, context-budget signal), STOP cleanly — write a note explaining why to data/evidence/autonomy/manual-fetch-stops-${today}.md, do not commit half-finished work.

When done with this one PDF (whether successfully ingested+audited or stopped cleanly), exit. The wrapper script handles the next PDF and the next tick. Print a single final line to stdout: either "DONE: <cite-key>" on success, or "STOP: <reason>" on a stop condition, or "FAIL: <reason>" on an error.`
}

// Async claude --print invoker for parallel batches. Same wire protocol as
// invokeClaude() — returns {ok|stop|error,...} — but uses spawn() not
// spawnSync() so multiple can run concurrently in a Promise.all batch.
async function invokeClaudeAsync(prompt, candidate) {
  return new Promise((resolve) => {
    const cliArgs = ["--print", "--model", model, "--add-dir", repoRoot]
    const proc = spawn("claude", cliArgs, { cwd: repoRoot })
    let stdout = "", stderr = ""
    let timedOut = false
    const timeoutMs = 25 * 60 * 1000
    const killer = setTimeout(() => { timedOut = true; proc.kill("SIGKILL") }, timeoutMs)
    proc.stdout.on("data", (d) => { stdout += d.toString() })
    proc.stderr.on("data", (d) => { stderr += d.toString() })
    proc.on("error", (err) => { clearTimeout(killer); resolve({ error: err.message }) })
    proc.on("exit", (code) => {
      clearTimeout(killer)
      if (timedOut) return resolve({ error: "spawn timeout (25 min)" })
      if (code !== 0) return resolve({ error: `exit ${code}: ${stderr.slice(0, 800)}` })
      const lastLine = stdout.trim().split("\n").slice(-1)[0] || ""
      if (lastLine.startsWith("DONE:")) return resolve({ ok: true, citeKey: lastLine.slice(5).trim() })
      if (lastLine.startsWith("STOP:")) return resolve({ stop: true, reason: lastLine.slice(5).trim(), stdout })
      if (lastLine.startsWith("FAIL:")) return resolve({ error: lastLine.slice(5).trim(), stdout })
      return resolve({ error: `unrecognized final line: "${lastLine.slice(0, 200)}"`, stdout })
    })
    proc.stdin.write(prompt)
    proc.stdin.end()
  })
}

function invokeClaude(prompt, candidate) {
  const args = [
    "--print",
    "--model", model,
    "--add-dir", repoRoot,
    // Comprehensive tool access; the spawned claude needs Read, Edit, Write,
    // Bash, and Agent (for the audit subagent). settings.local.json has
    // bypassPermissions set for this repo.
  ]

  try {
    const res = spawnSync("claude", args, {
      cwd: repoRoot,
      input: prompt,
      encoding: "utf8",
      maxBuffer: 50 * 1024 * 1024,
      timeout: 25 * 60 * 1000, // 25 min per PDF (ingest + audit + apply is heavier than marker draft)
    })

    if (res.error) return { error: res.error.message }
    if (res.status !== 0) return { error: `exit ${res.status}: ${(res.stderr || "").slice(0, 800)}` }
    const stdout = res.stdout || ""
    const lastLine = stdout.trim().split("\n").slice(-1)[0] || ""
    if (lastLine.startsWith("DONE:")) return { ok: true, citeKey: lastLine.slice(5).trim() }
    if (lastLine.startsWith("STOP:")) return { stop: true, reason: lastLine.slice(5).trim(), stdout }
    if (lastLine.startsWith("FAIL:")) return { error: lastLine.slice(5).trim(), stdout }
    return { error: `unrecognized final line: "${lastLine}"`, stdout }
  } catch (err) {
    return { error: err.message }
  }
}

// ---------- Main loop ----------

const tracker = loadTracker()
const allPdfs = walkPdfs()
console.log(`Discovered ${allPdfs.length} PDFs across ${MANUAL_FETCH_ROOTS.length} roots`)

// Register newly-discovered PDFs in tracker
for (const pdf of allPdfs) {
  if (!tracker.has(pdf.pdfPath)) {
    tracker.set(pdf.pdfPath, { handle: pdf.handle, status: "unprocessed", lastTick: "", citeKey: "", notes: "" })
  }
}

// Pick candidates: unprocessed first, then audited-revised that aren't recent (re-check stale)
// Per-root cap: auto-fetched/ is capped at AUTO_FETCHED_PER_TICK_CAP so a large
// wishlist-fetcher backlog can't burn the whole Opus budget on one tick.
const AUTO_FETCHED_PATH_FRAGMENT = "seasonal-geographic-variance/auto-fetched"
const candidates = []
let autoFetchedPicked = 0
for (const pdf of allPdfs) {
  const entry = tracker.get(pdf.pdfPath)
  if (entry.status !== "unprocessed") continue
  // Skip-list short-circuit (manual-fetch-skip.csv): pre-computed known
  // duplicates (e.g. DOI-matched against the full corpus before spawning) so
  // the loop never pays a ~25-min claude --print slot to rediscover a dupe.
  if (skipReason.has(pdf.pdfPath)) {
    entry.status = "stopped"
    entry.lastTick = tickTimestamp
    entry.notes = `Skip-list: ${skipReason.get(pdf.pdfPath)}`.slice(0, 200)
    continue
  }
  if (pdf.pdfPath.includes(AUTO_FETCHED_PATH_FRAGMENT)) {
    if (autoFetchedPicked >= AUTO_FETCHED_PER_TICK_CAP) continue
    autoFetchedPicked++
  }
  candidates.push({ ...pdf, entry })
  if (candidates.length >= maxPdfs) break
}

if (candidates.length === 0) {
  console.log("No unprocessed PDFs in priority order. All tracked PDFs have been ingested at least once.")
  console.log("To re-audit existing pages, use the audit-queue.csv workflow or rebuild the tracker.")
  if (!dryRun) saveTracker(tracker)
  process.exit(0)
}

console.log(`\nProcessing ${candidates.length} PDF(s) this tick:`)
for (const c of candidates) console.log(`  - ${c.pdfPath}`)

if (dryRun) {
  console.log("\nDRY RUN — not invoking claude.")
  process.exit(0)
}

const succeeded = []
const stopped = []
const failed = []

// Pre-spawn dedup index built once per batch. Reads raw_sha256: from every
// wiki/sources/*.md so we can short-circuit byte-identical duplicates before
// paying for a ~75k-token claude --print spawn. Catches the dehghani2020 /
// kim2018 / Kimi-double-grab cases (multiple wishlist sweeps pulling the
// same PDF under different filenames). The full DOI/raw_handle/cite-key
// identity check inside the skill still runs for non-byte-identical dupes.
function buildSha256Index() {
  const sourcesDir = path.join(repoRoot, "wiki/sources")
  const index = new Map()
  if (!fs.existsSync(sourcesDir)) return index
  for (const file of fs.readdirSync(sourcesDir)) {
    if (!file.endsWith(".md")) continue
    const text = fs.readFileSync(path.join(sourcesDir, file), "utf8")
    // Read frontmatter only; raw_sha256: appears in the YAML head.
    const head = text.slice(0, 4000)
    const m = head.match(/^raw_sha256:\s*([a-f0-9]{64})/m)
    if (m) index.set(m[1], file.replace(/\.md$/, ""))
  }
  return index
}

function computeFileSha256(filepath) {
  try {
    return crypto.createHash("sha256").update(fs.readFileSync(filepath)).digest("hex")
  } catch {
    return null
  }
}

const sha256Index = buildSha256Index()
console.log(`Pre-spawn dedup index: ${sha256Index.size} sources have raw_sha256 frontmatter`)
console.log(`Concurrency: ${concurrency} parallel worker(s)`)

// Pre-filter: pull pre-spawn dedup STOPs out of the spawning path so the
// real claude invocations are only against PDFs that might be novel.
const realCandidates = []
for (const candidate of candidates) {
  const sha = computeFileSha256(path.join(repoRoot, candidate.pdfPath))
  if (sha && sha256Index.has(sha)) {
    const existing = sha256Index.get(sha)
    const entry = tracker.get(candidate.pdfPath)
    entry.lastTick = tickTimestamp
    entry.status = "stopped"
    entry.notes = `Pre-spawn dedup: byte-identical to ${existing} (sha256:${sha.slice(0, 16)}…)`.slice(0, 200)
    stopped.push({ ...candidate, reason: `byte-identical to ${existing}` })
    console.log(`  STOP (pre-spawn): ${candidate.handle} → ${existing}`)
    continue
  }
  realCandidates.push(candidate)
}
saveTracker(tracker)
console.log(`After pre-spawn dedup: ${realCandidates.length} candidates need claude --print`)

// Process candidates in concurrency-sized batches. Within a batch all
// spawns are concurrent (Promise.all). Between batches the tracker gets
// saved so a crash mid-batch loses at most concurrency invocations.
for (let batchStart = 0; batchStart < realCandidates.length; batchStart += concurrency) {
  const batch = realCandidates.slice(batchStart, batchStart + concurrency)
  console.log(`\n=== batch ${Math.floor(batchStart / concurrency) + 1}: ${batch.length} parallel worker(s) ===`)
  for (const c of batch) console.log(`  spawning: ${c.handle}`)

  const batchResults = await Promise.all(batch.map(async (candidate) => {
    const prompt = buildPrompt(candidate)
    if (concurrency === 1) {
      // Single-worker mode: keep using spawnSync for full backward compat
      // with existing behavior and existing logs.
      return { candidate, result: invokeClaude(prompt, candidate) }
    }
    return { candidate, result: await invokeClaudeAsync(prompt, candidate) }
  }))

  for (const { candidate, result } of batchResults) {
    const entry = tracker.get(candidate.pdfPath)
    entry.lastTick = tickTimestamp
    if (result.ok) {
      entry.status = "ingested"
      entry.citeKey = result.citeKey
      entry.notes = `Ingested ${tickTimestamp}`
      succeeded.push({ ...candidate, citeKey: result.citeKey })
      console.log(`  OK: ${candidate.handle} → ${result.citeKey}`)
      // Cite-key gate (backstop): the LLM had the full paper text and the skill's
      // derivation rules, so a garbage key here is rare — but if one slips through
      // (section-header / analyte / "unknown" author slot), record it for
      // authoritative DOI→Crossref author repair rather than letting the
      // duplicate-prone key stand silently. Non-destructive: the page keeps its
      // extracted content; only the key is flagged for correction.
      if (isLowQualityCiteKey(result.citeKey)) {
        recordCiteKeyRepair({
          raw_handle: candidate.handle,
          cite_key: result.citeKey,
          doi: "",
          source: "manual-fetch",
          reason: "low-quality-cite-key-minted-by-llm",
        })
        entry.notes = `Ingested ${tickTimestamp} — FLAGGED garbage cite-key for repair`
        console.log(`  WARN: ${result.citeKey} looks like a garbage cite-key → queued for repair`)
      }
    } else if (result.stop) {
      entry.status = "stopped"
      entry.notes = `Stop: ${result.reason}`.slice(0, 200)
      stopped.push({ ...candidate, reason: result.reason })
      console.log(`  STOP: ${candidate.handle} → ${result.reason}`)
    } else {
      entry.status = "failed"
      entry.notes = `Fail: ${result.error}`.slice(0, 200)
      failed.push({ ...candidate, error: result.error })
      console.log(`  FAIL: ${candidate.handle} → ${result.error}`)
    }
  }
  saveTracker(tracker)
}

writeReport(candidates, succeeded, stopped, failed)

console.log(`\nBatch complete: ${succeeded.length} OK, ${stopped.length} stopped, ${failed.length} failed`)
process.exit(0)

// ---------- Helpers ----------

function writeReport(batch, succeeded, stopped, failed) {
  const reportPath = path.join(autonomyDir, `manual-fetch-batch-${today}.md`)
  const existing = fs.existsSync(reportPath) ? fs.readFileSync(reportPath, "utf8") : `# Manual-fetch ingest batch report — ${today}\n\n`
  const lines = [existing.trimEnd(), "", `## Tick ${tickTimestamp}`, ""]
  lines.push(`- Candidates this tick: ${batch.length}`)
  lines.push(`- Succeeded: ${succeeded.length}`)
  lines.push(`- Stopped (need Karen): ${stopped.length}`)
  lines.push(`- Failed: ${failed.length}`)
  lines.push("")
  if (succeeded.length) {
    lines.push("### Succeeded")
    for (const s of succeeded) lines.push(`- \`${s.citeKey}\` (${s.pdfPath})`)
    lines.push("")
  }
  if (stopped.length) {
    lines.push("### Stopped — needs specific information (not blanket approval)")
    for (const s of stopped) lines.push(`- \`${s.pdfPath}\`: ${s.reason}`)
    lines.push("")
  }
  if (failed.length) {
    lines.push("### Failed")
    for (const f of failed) lines.push(`- \`${f.pdfPath}\`: ${f.error}`)
    lines.push("")
  }
  fs.writeFileSync(reportPath, lines.join("\n"), "utf8")
}

function slugify(s) {
  return s.toLowerCase()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 50)
}

function parseArgs(argv) {
  const args = new Map()
  for (const a of argv) {
    if (a.startsWith("--")) {
      const eq = a.indexOf("=")
      if (eq > 0) args.set(a.slice(2, eq), a.slice(eq + 1))
      else args.set(a.slice(2), "true")
    }
  }
  return Object.assign(args, { has: (k) => args.get(k) === "true" })
}

function parseCsvLine(line) {
  const cells = []
  let cur = ""
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const c = line[i]
    if (inQuotes) {
      if (c === '"' && line[i + 1] === '"') { cur += '"'; i++ }
      else if (c === '"') inQuotes = false
      else cur += c
    } else {
      if (c === '"') inQuotes = true
      else if (c === ",") { cells.push(cur); cur = "" }
      else cur += c
    }
  }
  cells.push(cur)
  return cells
}

function csvField(s) {
  const str = String(s ?? "")
  if (/[,"\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`
  return str
}
