// Job engine: fan out a query across the selected source adapters, dedupe
// against the corpus, score, download qualifying open-access PDFs into the
// manual-fetch staging folder, and write an audit CSV. Progress is streamed via
// an onEvent callback so the server can push it to the browser over SSE.
//
// Downloads land in raw/Manual Fetch Discovery/ (handle prefix MFD), the same
// folder tools/discovery uses, so the daemon's ingest-manual-fetch-batch tick
// picks them up with no extra wiring. The model does NOT ingest or route here —
// that stays the system's job per CLAUDE.md Part 5b.

import fs from "node:fs"
import path from "node:path"
import { ADAPTERS, ADAPTER_KEY, KEY_REQUIRED } from "./sources.mjs"
import { scoreCandidate } from "./score.mjs"
import { makeDeduper } from "./dedup.mjs"
import { downloadWithRescue } from "./pdf-fetch.mjs"
import { buildJob } from "./taxonomy.mjs"
import { mintFilename, toCsv, formatBytes, sleep } from "./util.mjs"

const repoRoot = process.cwd()
const DEFAULT_STAGING = "raw/Manual Fetch Discovery/fetch-app"
const auditDir = path.join(repoRoot, "data/evidence/fetch-app")
const CONCURRENT = 5

const AUDIT_COLUMNS = [
  "run_id", "job_label", "category", "subcategory", "source", "decision",
  "downloaded_path", "via", "score", "domain_hits", "metal_ok", "year",
  "title", "doi", "oa_url", "query",
]

// selections: array of job selection objects (see taxonomy.buildJob).
// opts: { sources:[names], threshold, remediationMode, keys, stagingDir, dryRun, onEvent }
export async function runFetch(selections, opts) {
  const {
    sources = ["openalex", "pubmed", "crossref"],
    threshold = 2,
    keys,
    stagingDir: stagingRel = DEFAULT_STAGING,
    dryRun = false,
    onEvent = () => {},
    runId = `run-${Date.now()}`,
  } = opts

  const stagingDir = path.isAbsolute(stagingRel)
    ? stagingRel
    : path.join(repoRoot, stagingRel)
  if (!dryRun) fs.mkdirSync(stagingDir, { recursive: true })
  fs.mkdirSync(auditDir, { recursive: true })

  const log = (msg) => onEvent({ type: "log", msg })
  const dedup = makeDeduper()
  log(
    `corpus index: ${dedup.corpus.sourceCount} sources, built ${dedup.corpus.builtAt || "never"}; ` +
      `${dedup.stagingCount} PDFs already in staging`,
  )

  const jobs = selections.map(buildJob)
  const audit = []
  const stats = {
    found: 0, duplicates: 0, rejected: 0, weak: 0, downloaded: 0, failed: 0, noOa: 0,
  }

  // Drop sources whose key is a hard requirement but is missing; they cannot
  // run at all. Sources with an optional key (PubMed, Semantic Scholar) stay in
  // and simply run at the lower unauthenticated rate limit.
  const requestedSources = sources.filter((s) => ADAPTERS[s])
  const activeSources = requestedSources.filter(
    (s) => !(KEY_REQUIRED.has(s) && !keys[ADAPTER_KEY[s]]),
  )
  const skippedNoKey = requestedSources.filter(
    (s) => KEY_REQUIRED.has(s) && !keys[ADAPTER_KEY[s]],
  )
  const rateLimited = activeSources.filter(
    (s) => ADAPTER_KEY[s] && !KEY_REQUIRED.has(s) && !keys[ADAPTER_KEY[s]],
  )
  onEvent({
    type: "start",
    runId,
    jobs: jobs.map((j) => j.label),
    sources: activeSources,
    keyGaps: skippedNoKey, // hard-required key missing → source skipped
    rateLimited, // optional key missing → runs, but throttled
  })

  for (let ji = 0; ji < jobs.length; ji++) {
    const job = jobs[ji]
    log(`── job ${ji + 1}/${jobs.length}: ${job.label}  ·  query: ${job.query}`)

    // 1) collect candidates from every selected source
    const raw = []
    for (const s of activeSources) {
      onEvent({ type: "source", job: job.label, source: s, status: "querying" })
      const results = await ADAPTERS[s](job, keys, log)
      stats.found += results.length
      onEvent({ type: "source", job: job.label, source: s, status: "done", count: results.length })
      raw.push(...results)
      await sleep(150)
    }

    // 2) dedup + score → decide download set
    const toDownload = []
    for (const cand of raw) {
      const dup = dedup.check(cand)
      const base = {
        run_id: runId, job_label: job.label, category: job.category,
        subcategory: job.subcategory, source: cand.source, year: cand.year,
        title: cand.title, doi: cand.doi, oa_url: cand.oaUrl, query: job.query,
        via: "", downloaded_path: "",
      }
      if (dup.duplicate) {
        stats.duplicates++
        audit.push({ ...base, decision: dup.reason, score: "", domain_hits: "", metal_ok: "" })
        continue
      }
      dedup.markSeen(cand)

      const sc = scoreCandidate(cand, job, !!opts.remediationMode)
      const row = {
        ...base, score: sc.score, domain_hits: sc.domainHits, metal_ok: sc.metalOk,
      }
      if (sc.decisionHint.startsWith("reject")) {
        stats.rejected++
        audit.push({ ...row, decision: sc.decisionHint })
        continue
      }
      if (sc.score < threshold) {
        stats.weak++
        audit.push({ ...row, decision: sc.score <= 0 ? "skip:no-overlap" : "review:weak-match" })
        continue
      }
      if (!cand.oaUrl && !cand.doi) {
        stats.noOa++
        audit.push({ ...row, decision: "skip:no-oa-url" })
        continue
      }
      toDownload.push({ cand, row })
    }

    log(`  ${raw.length} candidates → ${toDownload.length} to download (after dedup + scoring)`)
    onEvent({
      type: "job-progress",
      job: job.label,
      candidates: raw.length,
      queued: toDownload.length,
    })

    // 3) download (concurrent, with the full rescue chain)
    if (dryRun) {
      for (const { row } of toDownload) audit.push({ ...row, decision: "dry-run:would-download" })
      continue
    }

    async function fetchOne({ cand, row }) {
      const filename = mintFilename({
        author: cand.author, year: cand.year, title: cand.title, doi: cand.doi,
      })
      const target = path.join(stagingDir, filename)
      if (fs.existsSync(target)) {
        stats.duplicates++
        audit.push({ ...row, decision: "skip:already-in-staging", downloaded_path: path.relative(repoRoot, target) })
        return
      }
      const r = await downloadWithRescue(
        { oaUrl: cand.oaUrl, doi: cand.doi, title: cand.title }, target, keys.contact_email,
      )
      if (r.saved) {
        stats.downloaded++
        audit.push({
          ...row, decision: "downloaded", via: r.via,
          downloaded_path: path.relative(repoRoot, target),
          oa_url: r.oaUrl || row.oa_url,
        })
        onEvent({
          type: "download", job: job.label, title: cand.title, source: cand.source,
          via: r.via, bytes: r.bytes, human: formatBytes(r.bytes),
        })
      } else {
        if (r.kind === "not-pdf") stats.noOa++
        else stats.failed++
        audit.push({ ...row, decision: r.decision, via: r.via })
      }
    }

    for (let bi = 0; bi < toDownload.length; bi += CONCURRENT) {
      const batch = toDownload.slice(bi, bi + CONCURRENT)
      await Promise.all(batch.map(fetchOne))
      await sleep(200)
    }
  }

  // 4) write audit CSV
  const auditPath = path.join(auditDir, `${runId}.csv`)
  if (!dryRun || opts.writeAuditOnDryRun) {
    fs.writeFileSync(auditPath, toCsv(audit, AUDIT_COLUMNS))
  }

  const summary = {
    runId,
    stats,
    auditPath: path.relative(repoRoot, auditPath),
    stagingDir: path.relative(repoRoot, stagingDir),
    dryRun,
  }
  onEvent({ type: "done", ...summary })
  return summary
}
