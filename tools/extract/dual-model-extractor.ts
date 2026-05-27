// Dual-model extractor — HMI-9.8 / `dual-model-extractor` role.
//
// Two providers run independently in parallel against the same ranked
// candidate. Each provider's structured output is appended to
// `data/evidence/model_extractions.jsonl` as its own row. The architecture
// contract is in `docs/continuous-ingest-architecture.md`; this file is the
// runtime spine.
//
// Hard rules (do not soften without a board override on HMI-9):
//   - Two models, no chaining. "GPT drafts, Opus reviews" defeats the
//     cross-check.
//   - Each row records the resolved `model_slug` + `model_version` so the
//     wire-time choice is auditable per `model_versions_used` on the
//     downstream wiki-edit audit row (HMI-12).
//   - The writer is idempotent on `extraction_id`. A re-run for the same
//     (candidate, model_slug, prompt_version) tuple is a no-op until
//     prompt_version is bumped.
//   - Backoff + dead-letter is the queue worker's responsibility (HMI-9.10);
//     this module surfaces structured errors and lets the caller decide.

import { access, mkdir, readFile, appendFile } from "node:fs/promises"
import { dirname } from "node:path"

import type { DiscoveryCandidate } from "../discovery/sources/schema"

import { ModelExtractionRowSchema, ProviderResponseSchema, extractionId } from "./schema"
import type { ExtractionUsage, ModelExtractionRow } from "./schema"

// ---------------------------------------------------------------------------
// Wire-time configuration
// ---------------------------------------------------------------------------

/**
 * Default AI Gateway model slugs for the `dual-model-extractor` role.
 *
 * Per the HMI-9 board overrides (2026-05-27):
 *   - Anthropic side is `anthropic/claude-opus-4-7`.
 *   - OpenAI side is the latest GPT-5.x available on AI Gateway at wire-up
 *     (`openai/gpt-5.1` as of 2026-05-27). The resolved `model_version`
 *     returned by the provider is recorded per-row, so bumping this default
 *     does not require a doc update — only a config change + a deploy.
 *
 * Overridable via env (`HMI_EXTRACT_MODEL_ANTHROPIC`,
 * `HMI_EXTRACT_MODEL_OPENAI`) or programmatic args.
 */
export const DEFAULT_MODELS = {
  anthropic: "anthropic/claude-opus-4-7",
  openai: "openai/gpt-5.1",
} as const

export const PROMPT_VERSION = "extract.v1"
export const PROMPT_FILE = "prompts/extract.v1.md"

export const MODEL_EXTRACTIONS_JSONL_PATH = "data/evidence/model_extractions.jsonl"

const GATEWAY_URL = "https://ai-gateway.vercel.sh/v1/chat/completions"
const GATEWAY_DEFAULT_TIMEOUT_MS = 240_000 // 4 minutes; comfortably under the 300s Vercel function ceiling.
const MAX_OUTPUT_TOKENS = 4_000

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ArtifactSource =
  | { type: "blob"; url: string }
  | { type: "file"; path: string }
  | { type: "text"; content: string }

export interface ExtractInput {
  /** The ranked candidate row. */
  candidate: DiscoveryCandidate
  /** Where to read the raw artifact from. */
  artifact: ArtifactSource
}

export interface ExtractOptions {
  /** Override the default model slugs (e.g. for a single experimental run). */
  models?: { anthropic: string; openai: string }
  /** Override the prompt version label. Bump alongside `PROMPT_FILE`. */
  promptVersion?: string
  /** Override the prompt file path. */
  promptFile?: string
  /** Output JSONL path. Defaults to `data/evidence/model_extractions.jsonl`. */
  outputPath?: string
  /** Per-provider gateway timeout. */
  timeoutMs?: number
  /** API key for the gateway. Defaults to `process.env.AI_GATEWAY_API_KEY`. */
  gatewayApiKey?: string
  /** Override the gateway URL (rarely needed). */
  gatewayUrl?: string
  /** Inject a fetch-compatible function for tests; defaults to global fetch. */
  fetchImpl?: typeof fetch
}

export interface ExtractResult {
  rows: ModelExtractionRow[]
  written: number
  skipped: number
}

// ---------------------------------------------------------------------------
// Top-level entry point
// ---------------------------------------------------------------------------

/**
 * Extract structured findings from a single ranked candidate using two
 * providers in parallel. Returns both rows; also appends them to the
 * configured JSONL (idempotently on extraction_id).
 *
 * The function never throws on provider-level failures. Failed calls produce
 * a row with `error` populated and an empty findings array. The queue worker
 * (HMI-9.10) treats `error.kind === "gateway_http"` etc. as retriable; the
 * extractor itself is straight-line.
 */
export async function extractWithDualModels(
  input: ExtractInput,
  options: ExtractOptions = {},
): Promise<ExtractResult> {
  const promptVersion = options.promptVersion ?? PROMPT_VERSION
  const models = {
    anthropic: options.models?.anthropic ?? process.env.HMI_EXTRACT_MODEL_ANTHROPIC ?? DEFAULT_MODELS.anthropic,
    openai: options.models?.openai ?? process.env.HMI_EXTRACT_MODEL_OPENAI ?? DEFAULT_MODELS.openai,
  }
  const apiKey = options.gatewayApiKey ?? process.env.AI_GATEWAY_API_KEY
  if (!apiKey) {
    throw new Error(
      "AI_GATEWAY_API_KEY is not set. Provision it on the Vercel project before running the dual-model extractor.",
    )
  }

  const promptFile = options.promptFile ?? PROMPT_FILE
  const promptTemplate = await readFile(promptFile, "utf8")
  const documentText = await loadArtifactText(input.artifact, options.fetchImpl)
  const prompt = renderPrompt(promptTemplate, input.candidate, documentText)

  const fetchImpl = options.fetchImpl ?? fetch
  const timeoutMs = options.timeoutMs ?? GATEWAY_DEFAULT_TIMEOUT_MS

  // Two providers, dispatched in parallel. No chaining — neither sees the
  // other's output. `Promise.all` is intentional: both must complete before
  // the caller proceeds, because the disagreement detector needs a paired
  // record.
  const [anthropicRow, openaiRow] = await Promise.all([
    callProvider({
      candidateId: input.candidate.candidate_id,
      modelSlug: models.anthropic,
      promptVersion,
      prompt,
      apiKey,
      gatewayUrl: options.gatewayUrl ?? GATEWAY_URL,
      timeoutMs,
      fetchImpl,
    }),
    callProvider({
      candidateId: input.candidate.candidate_id,
      modelSlug: models.openai,
      promptVersion,
      prompt,
      apiKey,
      gatewayUrl: options.gatewayUrl ?? GATEWAY_URL,
      timeoutMs,
      fetchImpl,
    }),
  ])

  const outputPath = options.outputPath ?? MODEL_EXTRACTIONS_JSONL_PATH
  const append = await appendRows(outputPath, [anthropicRow, openaiRow])

  return {
    rows: [anthropicRow, openaiRow],
    written: append.written,
    skipped: append.skipped,
  }
}

// ---------------------------------------------------------------------------
// Provider call
// ---------------------------------------------------------------------------

interface ProviderCallInput {
  candidateId: string
  modelSlug: string
  promptVersion: string
  prompt: string
  apiKey: string
  gatewayUrl: string
  timeoutMs: number
  fetchImpl: typeof fetch
}

async function callProvider(input: ProviderCallInput): Promise<ModelExtractionRow> {
  const startedAt = new Date()
  const id = extractionId(input.candidateId, input.modelSlug, input.promptVersion)
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), input.timeoutMs)

  try {
    const response = await input.fetchImpl(input.gatewayUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${input.apiKey}`,
      },
      // No `response_format` field: the Vercel AI Gateway rejects both
      // `{type:"json_object"}` and `{type:"json_schema",...}` with a 400
      // `param: response_format` validation error (verified 2026-05-27 on
      // `anthropic/claude-opus-4-7` and `openai/gpt-5.1`). The prompt
      // already instructs strict JSON and `stripJsonFences()` tolerates
      // wrapped output, so we rely on the prompt rather than the wire
      // contract. See HMI-29.
      body: JSON.stringify({
        model: input.modelSlug,
        messages: [{ role: "user", content: input.prompt }],
        max_tokens: MAX_OUTPUT_TOKENS,
        temperature: 0,
      }),
      signal: controller.signal,
    })

    if (!response.ok) {
      const bodyText = await safeReadText(response)
      return errorRow(
        {
          extraction_id: id,
          candidate_id: input.candidateId,
          model_slug: input.modelSlug,
          model_version: input.modelSlug,
          prompt_version: input.promptVersion,
          started_at: startedAt,
        },
        {
          kind: "gateway_http",
          message: `${response.status} ${response.statusText}: ${bodyText.slice(0, 400)}`,
          http_status: response.status,
        },
      )
    }

    const responseJson = (await response.json()) as GatewayChatCompletion
    const content = responseJson.choices?.[0]?.message?.content
    if (typeof content !== "string" || content.trim().length === 0) {
      return errorRow(
        {
          extraction_id: id,
          candidate_id: input.candidateId,
          model_slug: input.modelSlug,
          model_version: responseJson.model ?? input.modelSlug,
          prompt_version: input.promptVersion,
          started_at: startedAt,
        },
        {
          kind: "gateway_parse",
          message: "Gateway response had no message content",
          http_status: response.status,
        },
        responseJson,
      )
    }

    let parsed: unknown
    try {
      parsed = JSON.parse(stripJsonFences(content))
    } catch (err) {
      return errorRow(
        {
          extraction_id: id,
          candidate_id: input.candidateId,
          model_slug: input.modelSlug,
          model_version: responseJson.model ?? input.modelSlug,
          prompt_version: input.promptVersion,
          started_at: startedAt,
        },
        {
          kind: "gateway_parse",
          message: `Model returned non-JSON content: ${(err as Error).message}`,
          http_status: response.status,
        },
        { raw: content },
      )
    }

    const validated = ProviderResponseSchema.safeParse(parsed)
    if (!validated.success) {
      return errorRow(
        {
          extraction_id: id,
          candidate_id: input.candidateId,
          model_slug: input.modelSlug,
          model_version: responseJson.model ?? input.modelSlug,
          prompt_version: input.promptVersion,
          started_at: startedAt,
        },
        {
          kind: "schema_validation",
          message: validated.error.message,
          http_status: response.status,
        },
        parsed as Record<string, unknown>,
      )
    }

    const finishedAt = new Date()
    return {
      extraction_id: id,
      candidate_id: input.candidateId,
      model_slug: input.modelSlug,
      model_version: responseJson.model ?? input.modelSlug,
      prompt_version: input.promptVersion,
      verdict: validated.data.verdict,
      findings: validated.data.findings,
      notes: validated.data.notes ?? null,
      response: responseJson,
      started_at: startedAt.toISOString(),
      finished_at: finishedAt.toISOString(),
      duration_ms: finishedAt.getTime() - startedAt.getTime(),
      usage: extractUsage(responseJson),
    }
  } catch (err) {
    const isAbort = err instanceof Error && err.name === "AbortError"
    return errorRow(
      {
        extraction_id: id,
        candidate_id: input.candidateId,
        model_slug: input.modelSlug,
        model_version: input.modelSlug,
        prompt_version: input.promptVersion,
        started_at: startedAt,
      },
      {
        kind: isAbort ? "timeout" : "transport",
        message: (err as Error).message ?? String(err),
        http_status: null,
      },
    )
  } finally {
    clearTimeout(timer)
  }
}

// ---------------------------------------------------------------------------
// Prompt rendering
// ---------------------------------------------------------------------------

/**
 * Render the candidate metadata + document text into the prompt template by
 * substituting `{{field}}` placeholders. Conservative: unknown fields render
 * as the literal string `null` so providers see a uniform shape.
 */
export function renderPrompt(
  template: string,
  candidate: DiscoveryCandidate,
  documentText: string,
): string {
  const replacements: Record<string, string> = {
    candidate_id: candidate.candidate_id,
    source_adapter: candidate.source_adapter,
    external_id: candidate.external_id,
    url: candidate.url,
    title: candidate.title,
    doi: candidate.doi ?? "null",
    study_type: candidate.study_type ?? "null",
    sample_size: candidate.sample_size === null ? "null" : String(candidate.sample_size),
    methodology_grade: candidate.methodology_grade,
    ranked_score: candidate.ranked_score === null ? "null" : String(candidate.ranked_score),
    abstract: candidate.abstract ?? "null",
    document_text: documentText,
  }
  return template.replace(/\{\{([a-z_]+)\}\}/g, (full, key: string) =>
    Object.prototype.hasOwnProperty.call(replacements, key) ? replacements[key] : full,
  )
}

// ---------------------------------------------------------------------------
// Artifact loading
// ---------------------------------------------------------------------------

async function loadArtifactText(source: ArtifactSource, fetchImpl?: typeof fetch): Promise<string> {
  switch (source.type) {
    case "text":
      return source.content
    case "file":
      return await readFile(source.path, "utf8")
    case "blob": {
      const f = fetchImpl ?? fetch
      const response = await f(source.url)
      if (!response.ok) {
        throw new Error(`Failed to read blob ${source.url}: ${response.status} ${response.statusText}`)
      }
      return await response.text()
    }
  }
}

// ---------------------------------------------------------------------------
// JSONL writer (idempotent on extraction_id)
// ---------------------------------------------------------------------------

async function appendRows(
  path: string,
  rows: ModelExtractionRow[],
): Promise<{ written: number; skipped: number }> {
  await mkdir(dirname(path), { recursive: true })

  const existing = await loadExistingIds(path)

  let written = 0
  let skipped = 0
  const toAppend: string[] = []

  for (const row of rows) {
    const validated = ModelExtractionRowSchema.safeParse(row)
    if (!validated.success) {
      throw new Error(
        `Refusing to write malformed extraction row (extraction_id=${row.extraction_id}): ${validated.error.message}`,
      )
    }
    if (existing.has(validated.data.extraction_id)) {
      skipped += 1
      continue
    }
    toAppend.push(JSON.stringify(validated.data))
    existing.add(validated.data.extraction_id)
    written += 1
  }

  if (toAppend.length > 0) {
    await appendFile(path, toAppend.join("\n") + "\n", "utf8")
  }

  return { written, skipped }
}

async function loadExistingIds(path: string): Promise<Set<string>> {
  const ids = new Set<string>()
  try {
    await access(path)
  } catch {
    return ids
  }
  const raw = await readFile(path, "utf8")
  for (const line of raw.split("\n")) {
    if (!line) continue
    try {
      const parsed = JSON.parse(line) as { extraction_id?: unknown }
      if (typeof parsed.extraction_id === "string" && parsed.extraction_id.length > 0) {
        ids.add(parsed.extraction_id)
      }
    } catch {
      // Tolerate malformed lines — append-only writer; the audit barrier
      // surfaces malformed rows via the JSON Schema lint downstream.
    }
  }
  return ids
}

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

interface GatewayChatCompletion {
  model?: string
  choices?: Array<{ message?: { content?: string } }>
  usage?: {
    prompt_tokens?: number
    completion_tokens?: number
    total_tokens?: number
    cost?: number
  }
  [k: string]: unknown
}

function extractUsage(response: GatewayChatCompletion): ExtractionUsage {
  const usage = response.usage ?? {}
  return {
    input_tokens: typeof usage.prompt_tokens === "number" ? usage.prompt_tokens : null,
    output_tokens: typeof usage.completion_tokens === "number" ? usage.completion_tokens : null,
    total_tokens: typeof usage.total_tokens === "number" ? usage.total_tokens : null,
    cost_usd: typeof usage.cost === "number" ? usage.cost : null,
  }
}

interface ErrorRowFields {
  extraction_id: string
  candidate_id: string
  model_slug: string
  model_version: string
  prompt_version: string
  started_at: Date
}

function errorRow(
  fields: ErrorRowFields,
  error: NonNullable<ModelExtractionRow["error"]>,
  responsePayload?: Record<string, unknown> | GatewayChatCompletion,
): ModelExtractionRow {
  const finishedAt = new Date()
  return {
    extraction_id: fields.extraction_id,
    candidate_id: fields.candidate_id,
    model_slug: fields.model_slug,
    model_version: fields.model_version,
    prompt_version: fields.prompt_version,
    verdict: "no_finding",
    findings: [],
    notes: null,
    response: (responsePayload as Record<string, unknown>) ?? { error: error.message },
    started_at: fields.started_at.toISOString(),
    finished_at: finishedAt.toISOString(),
    duration_ms: finishedAt.getTime() - fields.started_at.getTime(),
    usage: { input_tokens: null, output_tokens: null, total_tokens: null, cost_usd: null },
    error,
  }
}

async function safeReadText(response: Response): Promise<string> {
  try {
    return await response.text()
  } catch {
    return ""
  }
}

const JSON_FENCE_RE = /^```(?:json)?\s*\n([\s\S]*?)\n```\s*$/

function stripJsonFences(content: string): string {
  const trimmed = content.trim()
  const match = trimmed.match(JSON_FENCE_RE)
  return match ? match[1] : trimmed
}

// ---------------------------------------------------------------------------
// Re-exports for callers
// ---------------------------------------------------------------------------

export { extractionId } from "./schema"
export type {
  ExtractionFinding,
  ModelExtractionRow,
  ProviderResponse,
  ExtractionUsage,
} from "./schema"
