// tools/extract/run-extractor.ts — single-shot CLI for the dual-model extractor.
//
// Usage:
//   tsx tools/extract/run-extractor.ts \
//     --candidate-id <id> \
//     [--candidates-jsonl data/discovery/candidates.jsonl] \
//     [--artifact-file path/to/raw.txt | --artifact-blob https://… | --artifact-text "..."] \
//     [--output data/evidence/model_extractions.jsonl] \
//     [--model-anthropic anthropic/claude-opus-4-7] \
//     [--model-openai openai/gpt-5.1] \
//     [--prompt-version extract.v1] \
//     [--prompt-file prompts/extract.v1.md] \
//     [--dry-run]
//
// Designed for ad-hoc runs and for the live-test verification on HMI-9.8.
// The queue worker integration (HMI-9.10) calls `extractWithDualModels`
// directly, not this CLI.

import { readFile } from "node:fs/promises"

import { DiscoveryCandidateSchema } from "../discovery/sources/schema"
import type { DiscoveryCandidate } from "../discovery/sources/schema"

import {
  ArtifactSource,
  DEFAULT_MODELS,
  MODEL_EXTRACTIONS_JSONL_PATH,
  PROMPT_FILE,
  PROMPT_VERSION,
  extractWithDualModels,
} from "./dual-model-extractor"

interface CliArgs {
  candidateId: string
  candidatesJsonl: string
  artifact: ArtifactSource
  outputPath: string
  models: { anthropic: string; openai: string }
  promptVersion: string
  promptFile: string
  dryRun: boolean
}

function parseArgs(argv: string[]): CliArgs {
  const flags = new Map<string, string>()
  let dryRun = false
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i]
    if (arg === "--dry-run") {
      dryRun = true
      continue
    }
    if (!arg.startsWith("--")) continue
    const key = arg.slice(2)
    const next = argv[i + 1]
    if (next === undefined || next.startsWith("--")) {
      throw new Error(`Missing value for --${key}`)
    }
    flags.set(key, next)
    i += 1
  }

  const candidateId = flags.get("candidate-id")
  if (!candidateId) throw new Error("--candidate-id is required")

  const file = flags.get("artifact-file")
  const blob = flags.get("artifact-blob")
  const text = flags.get("artifact-text")
  const artifactSources = [file, blob, text].filter((x) => x !== undefined)
  if (artifactSources.length === 0) {
    throw new Error("One of --artifact-file, --artifact-blob, --artifact-text is required")
  }
  if (artifactSources.length > 1) {
    throw new Error("Pass only one of --artifact-file, --artifact-blob, --artifact-text")
  }

  let artifact: ArtifactSource
  if (file !== undefined) artifact = { type: "file", path: file }
  else if (blob !== undefined) artifact = { type: "blob", url: blob }
  else artifact = { type: "text", content: text! }

  return {
    candidateId,
    candidatesJsonl: flags.get("candidates-jsonl") ?? "data/discovery/candidates.jsonl",
    artifact,
    outputPath: flags.get("output") ?? MODEL_EXTRACTIONS_JSONL_PATH,
    models: {
      anthropic: flags.get("model-anthropic") ?? DEFAULT_MODELS.anthropic,
      openai: flags.get("model-openai") ?? DEFAULT_MODELS.openai,
    },
    promptVersion: flags.get("prompt-version") ?? PROMPT_VERSION,
    promptFile: flags.get("prompt-file") ?? PROMPT_FILE,
    dryRun,
  }
}

async function loadCandidate(path: string, candidateId: string): Promise<DiscoveryCandidate> {
  const raw = await readFile(path, "utf8")
  for (const line of raw.split("\n")) {
    if (!line) continue
    let parsed: unknown
    try {
      parsed = JSON.parse(line)
    } catch {
      continue
    }
    const validated = DiscoveryCandidateSchema.safeParse(parsed)
    if (!validated.success) continue
    if (validated.data.candidate_id === candidateId) return validated.data
  }
  throw new Error(`candidate_id=${candidateId} not found in ${path}`)
}

async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2))
  const candidate = await loadCandidate(args.candidatesJsonl, args.candidateId)

  if (args.dryRun) {
    process.stdout.write(
      JSON.stringify(
        {
          mode: "dry-run",
          candidate_id: candidate.candidate_id,
          title: candidate.title,
          source_adapter: candidate.source_adapter,
          models: args.models,
          prompt_version: args.promptVersion,
        },
        null,
        2,
      ) + "\n",
    )
    return
  }

  const result = await extractWithDualModels(
    { candidate, artifact: args.artifact },
    {
      models: args.models,
      promptVersion: args.promptVersion,
      promptFile: args.promptFile,
      outputPath: args.outputPath,
    },
  )

  const summary = {
    candidate_id: candidate.candidate_id,
    title: candidate.title,
    written: result.written,
    skipped: result.skipped,
    rows: result.rows.map((row) => ({
      extraction_id: row.extraction_id,
      model_slug: row.model_slug,
      model_version: row.model_version,
      verdict: row.verdict,
      findings_count: row.findings.length,
      duration_ms: row.duration_ms,
      usage: row.usage,
      error: row.error ?? null,
    })),
  }
  process.stdout.write(JSON.stringify(summary, null, 2) + "\n")
}

main().catch((err) => {
  process.stderr.write(`extractor failed: ${(err as Error).message}\n`)
  process.exit(1)
})
