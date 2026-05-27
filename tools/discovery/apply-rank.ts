#!/usr/bin/env tsx
// CLI driver for the HMI-9.7 quality/relevance ranker.
//
// Reads `data/discovery/candidates.jsonl`, scores every row with the locked
// weights from `tools/discovery/rank-weights.json`, writes `ranked_score`
// onto each row, and rewrites the file atomically. Idempotent: re-running on
// an already-scored manifest does no work unless the weights or candidate
// fields changed.
//
// Usage:
//   tsx tools/discovery/apply-rank.ts                        # default paths
//   tsx tools/discovery/apply-rank.ts <manifest> <weights>   # explicit paths

import { applyRankings, loadRankWeights, DEFAULT_WEIGHTS_PATH } from "./rank"
import { CANDIDATES_JSONL_PATH } from "./sources/writer"

async function main(): Promise<void> {
  const manifestPath = process.argv[2] ?? CANDIDATES_JSONL_PATH
  const weightsPath = process.argv[3] ?? DEFAULT_WEIGHTS_PATH

  const weights = await loadRankWeights(weightsPath)

  const skips: { line: string; error: unknown }[] = []
  const result = await applyRankings(manifestPath, weights, {
    onSkip: (line, error) => skips.push({ line, error }),
  })

  process.stdout.write(
    JSON.stringify(
      {
        manifest: manifestPath,
        weights: weightsPath,
        weights_version: weights.version,
        ...result,
        skips: skips.map(({ error }) => (error instanceof Error ? error.message : String(error))),
      },
      null,
      2,
    ) + "\n",
  )
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.stack ?? error.message : String(error)
  process.stderr.write(`[apply-rank] ${message}\n`)
  process.exit(1)
})
