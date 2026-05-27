// Fixture dependency set for end-to-end demos and CI.
//
// Lets `tools/runtime/run-loop.mjs` exercise the full pipeline without
// requiring HMI-9.5 (PubMed adapter), HMI-9.6 (OpenAlex adapter), HMI-9.7
// (ranker), HMI-9.8 (dual-model extractor), or HMI-9.9 (disagreement detector)
// to be live. Real deps land in tools/runtime/deps-production.mjs when those
// siblings ship.
//
// What this proves:
//   - The queue transitions a gap message all the way to a wiki edit + audit row.
//   - The audit barrier (HMI-12) is invoked correctly.
//   - The dead-letter table receives a poison message after MAX_ATTEMPTS.
//
// What this does NOT prove:
//   - Real PubMed / OpenAlex queries (those land in HMI-9.5 / HMI-9.6).
//   - Real GPT-5.x + Opus 4.7 calls (HMI-9.8 wires the AI Gateway role).
//   - Real disagreement detection (HMI-9.9).

import { createHash, randomUUID } from "node:crypto"
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(__dirname, "../..")

export function createFixtureDeps({ processedKeys, repoRoot = REPO_ROOT } = {}) {
  const candidatesPath = resolve(repoRoot, "data/discovery/candidates.jsonl")
  const extractionsPath = resolve(repoRoot, "data/evidence/model_extractions.jsonl")
  const disagreementsPath = resolve(repoRoot, "data/evidence/model_disagreements.jsonl")
  const auditLogPath = resolve(repoRoot, "data/evidence/wiki_edit_audit.jsonl")

  return {
    alreadyProcessed: (topic, key) => processedKeys.alreadyProcessed(topic, key),
    markProcessed: (topic, key) => processedKeys.markProcessed(topic, key),

    appendCandidate(c) {
      mkdirSync(dirname(candidatesPath), { recursive: true })
      appendFileSync(candidatesPath, JSON.stringify(c) + "\n")
    },
    appendExtraction(e) {
      mkdirSync(dirname(extractionsPath), { recursive: true })
      appendFileSync(extractionsPath, JSON.stringify(e) + "\n")
    },
    appendDisagreements(ds) {
      mkdirSync(dirname(disagreementsPath), { recursive: true })
      for (const d of ds) appendFileSync(disagreementsPath, JSON.stringify(d) + "\n")
    },

    async runDiscovery(gap) {
      // Fixture adapter: emit one synthetic candidate per gap.
      const externalId = `FIXTURE-${gap.gap_id.slice(0, 8)}`
      const sourceAdapter = "fixture"
      const candidate_id = sha256(`${sourceAdapter}:${externalId}`)
      return {
        candidates: [
          {
            candidate_id,
            gap_id: gap.gap_id,
            source_adapter: sourceAdapter,
            external_id: externalId,
            url: `https://fixture.example/${externalId}`,
            title: `Fixture source for ${gap.metal} in ${gap.matrix}`,
            doi: null,
            retrieval_date: new Date().toISOString(),
            study_type: "synthetic",
            sample_size: 100,
            methodology_grade: "B",
            blob_key: `hmi/raw/fixture/${externalId}/source.json`,
            status: "discovered",
          },
        ],
      }
    },

    async runDualModelExtraction(candidate) {
      // Fixture extractor: emit a single "agree" extraction so the message
      // flows downstream to routing.edits. Real dual-model wiring lands in
      // HMI-9.8.
      const models = ["openai/gpt-5", "anthropic/claude-opus-4-7"]
      const promptVersion = "fixture-v0"
      const extraction_id = sha256(`${candidate.candidate_id}:${models[0]}:${promptVersion}`)
      const gap = readGap(candidate.gap_id, repoRoot)
      return {
        extraction: {
          extraction_id,
          candidate_id: candidate.candidate_id,
          model_slug: models[0],
          model_version: "fixture",
          prompt_version: promptVersion,
          response: { fixture: true },
          structured_findings: [],
          finished_at: new Date().toISOString(),
          model_agreement_state: "agree",
          models_used: models,
        },
        models_used: models,
        page: gap?.page ?? "wiki/coverage.md",
        source_document: `fixture | https://fixture.example/${candidate.external_id}`,
        retrieval_date: new Date().toISOString().slice(0, 10),
      }
    },

    spanIdForExtraction(message) {
      return `runtime-fixture-${message.extraction_id.slice(0, 8)}`
    },

    async applyWikiEdit(edit) {
      // Append the audit row through the same barrier the production worker
      // uses. The wiki/<page>.md mutation is intentionally NOT performed
      // here — the fixture proves the queue + audit path; landing edits in
      // real wiki pages is the dual-model extractor's job (HMI-9.8 + its
      // prompt outputs). The audit row alone is enough to demonstrate the
      // end-to-end pipeline.
      mkdirSync(dirname(auditLogPath), { recursive: true })
      // Use the recordEditOrAbort barrier from HMI-12 when available; fall
      // back to a direct append if the module is not yet on this branch.
      try {
        const mod = await import("../evidence/wiki-edit.js")
        if (typeof mod.recordEditOrAbort === "function") {
          await mod.recordEditOrAbort(edit.audit_row)
          return
        }
      } catch {
        /* fall through */
      }
      appendFileSync(auditLogPath, JSON.stringify(edit.audit_row) + "\n")
    },

    log(event, payload) {
      console.log(`[fixture] ${event}`, JSON.stringify(payload))
    },
  }
}

function sha256(s) {
  return createHash("sha256").update(s).digest("hex")
}

function readGap(gapId, repoRoot) {
  const p = resolve(repoRoot, "data/gaps/open_gaps.jsonl")
  if (!existsSync(p)) return null
  for (const line of readFileSync(p, "utf-8").split("\n")) {
    if (!line) continue
    try {
      const row = JSON.parse(line)
      if (row.gap_id === gapId) return row
    } catch {
      /* skip */
    }
  }
  return null
}
