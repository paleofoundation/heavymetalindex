// Unit tests for the dual-model extractor (HMI-9.8).
//
// Covers the contract surface that the queue worker and the disagreement
// detector rely on:
//   - extraction_id is stable on (candidate, model, prompt_version)
//   - both providers are dispatched in parallel, neither sees the other's output
//   - the JSONL writer is idempotent on extraction_id
//   - provider errors yield a row (no thrown exceptions, no missing pair)
//   - prompt rendering substitutes candidate fields and the document text
//
// Network is mocked via a fetch impl injected through ExtractOptions; no
// real gateway call happens here. The live test (run on one ranked
// candidate, two real providers, two real rows) lives in the task comment
// trail per HMI-9.8 "Done when".

import test, { describe } from "node:test"
import assert from "node:assert"
import { mkdtemp, readFile, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"

import type { DiscoveryCandidate } from "../discovery/sources/schema"

import {
  DEFAULT_MODELS,
  PROMPT_VERSION,
  extractWithDualModels,
  renderPrompt,
} from "./dual-model-extractor"
import { extractionId } from "./schema"

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const SAMPLE_CANDIDATE: DiscoveryCandidate = {
  gap_id: "ingredients/rice|metals/iAs",
  source_adapter: "pubmed",
  external_id: "PMID12345",
  url: "https://pubmed.ncbi.nlm.nih.gov/12345/",
  title: "Inorganic arsenic in infant rice cereal, n=42",
  abstract: "We measured iAs in 42 infant rice cereals; median 84 µg/kg dry weight.",
  doi: "10.0000/test",
  study_type: "primary",
  sample_size: 42,
  methodology_grade: "A",
  candidate_id: "cand-abc-123",
  retrieval_date: "2026-05-27T00:00:00Z",
  blob_key: "hmi/raw/pubmed/PMID12345/source.xml",
  status: "ranked",
  ranked_score: 4.5,
}

const SAMPLE_PROMPT_TEMPLATE = [
  "Header.",
  "candidate_id={{candidate_id}}",
  "title={{title}}",
  "study_type={{study_type}}",
  "sample_size={{sample_size}}",
  "doi={{doi}}",
  "abstract={{abstract}}",
  "document_text={{document_text}}",
].join("\n")

function providerResponse(modelVersion: string, content: object | string): unknown {
  return {
    id: "chatcmpl-test",
    model: modelVersion,
    choices: [
      {
        message: {
          content: typeof content === "string" ? content : JSON.stringify(content),
        },
      },
    ],
    usage: { prompt_tokens: 1200, completion_tokens: 220, total_tokens: 1420, cost: 0.025 },
  }
}

function makeFetch(handler: (req: { url: string; body: object }) => unknown): typeof fetch {
  return async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === "string" ? input : input.toString()
    const body = init?.body ? JSON.parse(String(init.body)) : {}
    const result = handler({ url, body })
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }) as unknown as Response
  }
}

async function makeTmpDir(): Promise<{ dir: string; promptFile: string; outputPath: string }> {
  const dir = await mkdtemp(join(tmpdir(), "hmi-extract-"))
  const promptFile = join(dir, "extract.v1.md")
  const outputPath = join(dir, "model_extractions.jsonl")
  await writeFile(promptFile, SAMPLE_PROMPT_TEMPLATE, "utf8")
  return { dir, promptFile, outputPath }
}

// ---------------------------------------------------------------------------
// extraction_id stability
// ---------------------------------------------------------------------------

describe("extraction_id", () => {
  test("is stable on (candidate, model, prompt_version)", () => {
    const a = extractionId("cand-1", "anthropic/claude-opus-4-7", "extract.v1")
    const b = extractionId("cand-1", "anthropic/claude-opus-4-7", "extract.v1")
    assert.strictEqual(a, b)
  })

  test("differs across providers for the same candidate", () => {
    const a = extractionId("cand-1", "anthropic/claude-opus-4-7", "extract.v1")
    const o = extractionId("cand-1", "openai/gpt-5.1", "extract.v1")
    assert.notStrictEqual(a, o)
  })

  test("differs across prompt versions for the same provider", () => {
    const v1 = extractionId("cand-1", "anthropic/claude-opus-4-7", "extract.v1")
    const v2 = extractionId("cand-1", "anthropic/claude-opus-4-7", "extract.v2")
    assert.notStrictEqual(v1, v2)
  })
})

// ---------------------------------------------------------------------------
// renderPrompt
// ---------------------------------------------------------------------------

describe("renderPrompt", () => {
  test("substitutes all candidate fields and document text", () => {
    const rendered = renderPrompt(SAMPLE_PROMPT_TEMPLATE, SAMPLE_CANDIDATE, "DOC_BODY")
    assert.match(rendered, /candidate_id=cand-abc-123/)
    assert.match(rendered, /title=Inorganic arsenic in infant rice cereal, n=42/)
    assert.match(rendered, /study_type=primary/)
    assert.match(rendered, /sample_size=42/)
    assert.match(rendered, /doi=10\.0000\/test/)
    assert.match(rendered, /abstract=We measured iAs/)
    assert.match(rendered, /document_text=DOC_BODY/)
  })

  test("renders null candidate fields as the literal 'null'", () => {
    const noDoi: DiscoveryCandidate = { ...SAMPLE_CANDIDATE, doi: null, sample_size: null, abstract: null }
    const rendered = renderPrompt(SAMPLE_PROMPT_TEMPLATE, noDoi, "DOC_BODY")
    assert.match(rendered, /doi=null/)
    assert.match(rendered, /sample_size=null/)
    assert.match(rendered, /abstract=null/)
  })

  test("leaves unknown placeholders intact", () => {
    const rendered = renderPrompt("{{nope}}", SAMPLE_CANDIDATE, "DOC")
    assert.strictEqual(rendered, "{{nope}}")
  })
})

// ---------------------------------------------------------------------------
// extractWithDualModels — happy path, two providers, no chaining
// ---------------------------------------------------------------------------

describe("extractWithDualModels", () => {
  test("dispatches both providers in parallel and writes two rows", async () => {
    const { promptFile, outputPath } = await makeTmpDir()
    const seen: string[] = []

    const fetchImpl = makeFetch(({ body }) => {
      const model = (body as { model: string }).model
      seen.push(model)
      const payload =
        model === DEFAULT_MODELS.anthropic
          ? {
              verdict: "extracted",
              findings: [
                {
                  claim_class: "literature_finding",
                  metal_species: "iAs",
                  product_matrix: "infant-rice-cereal",
                  basis: "dry_weight",
                  statistic_type: "median",
                  original_value: 84,
                  original_unit: "µg/kg",
                  normalized_value: 84,
                  normalized_unit: "ppb",
                  quote_trace: "median 84 µg/kg dry weight",
                  page_number: null,
                  table_number: null,
                  evidence_fitness_verdict: "EF-2",
                  public_label: "Reconstructable dataset",
                },
              ],
              notes: null,
            }
          : {
              // Different shape from Anthropic, by design — this is the cross-check.
              verdict: "extracted",
              findings: [
                {
                  claim_class: "literature_finding",
                  metal_species: "iAs",
                  product_matrix: "infant-rice-cereal",
                  basis: "dry_weight",
                  statistic_type: "median",
                  original_value: 84,
                  original_unit: "ug/kg",
                  normalized_value: 84,
                  normalized_unit: "ppb",
                  quote_trace: "median 84 µg/kg dry weight",
                  page_number: null,
                  table_number: null,
                  evidence_fitness_verdict: "EF-3",
                  public_label: "Modeled or limited evidence",
                },
              ],
              notes: "Single-table study.",
            }
      return providerResponse(model, payload)
    })

    const result = await extractWithDualModels(
      { candidate: SAMPLE_CANDIDATE, artifact: { type: "text", content: "DOC_BODY" } },
      {
        promptFile,
        outputPath,
        gatewayApiKey: "test-key",
        fetchImpl,
      },
    )

    assert.strictEqual(result.rows.length, 2)
    assert.strictEqual(result.written, 2)
    assert.strictEqual(result.skipped, 0)

    // Both providers were called.
    assert.ok(seen.includes(DEFAULT_MODELS.anthropic))
    assert.ok(seen.includes(DEFAULT_MODELS.openai))

    // Rows are tagged with the right slugs + the extraction_id matches the hash.
    const byModel = new Map(result.rows.map((r) => [r.model_slug, r]))
    const anthropic = byModel.get(DEFAULT_MODELS.anthropic)!
    const openai = byModel.get(DEFAULT_MODELS.openai)!
    assert.strictEqual(
      anthropic.extraction_id,
      extractionId(SAMPLE_CANDIDATE.candidate_id, DEFAULT_MODELS.anthropic, PROMPT_VERSION),
    )
    assert.strictEqual(
      openai.extraction_id,
      extractionId(SAMPLE_CANDIDATE.candidate_id, DEFAULT_MODELS.openai, PROMPT_VERSION),
    )
    assert.notStrictEqual(anthropic.extraction_id, openai.extraction_id)

    // Findings flowed through.
    assert.strictEqual(anthropic.findings.length, 1)
    assert.strictEqual(openai.findings.length, 1)
    assert.strictEqual(anthropic.findings[0].evidence_fitness_verdict, "EF-2")
    assert.strictEqual(openai.findings[0].evidence_fitness_verdict, "EF-3")

    // JSONL has two rows.
    const jsonl = await readFile(outputPath, "utf8")
    const lines = jsonl.trim().split("\n")
    assert.strictEqual(lines.length, 2)
  })

  test("is idempotent on extraction_id across reruns", async () => {
    const { promptFile, outputPath } = await makeTmpDir()
    const fetchImpl = makeFetch(({ body }) =>
      providerResponse((body as { model: string }).model, {
        verdict: "no_finding",
        findings: [],
        notes: null,
      }),
    )

    const first = await extractWithDualModels(
      { candidate: SAMPLE_CANDIDATE, artifact: { type: "text", content: "DOC" } },
      { promptFile, outputPath, gatewayApiKey: "test-key", fetchImpl },
    )
    const second = await extractWithDualModels(
      { candidate: SAMPLE_CANDIDATE, artifact: { type: "text", content: "DOC" } },
      { promptFile, outputPath, gatewayApiKey: "test-key", fetchImpl },
    )

    assert.strictEqual(first.written, 2)
    assert.strictEqual(second.written, 0)
    assert.strictEqual(second.skipped, 2)

    const jsonl = await readFile(outputPath, "utf8")
    assert.strictEqual(jsonl.trim().split("\n").length, 2)
  })

  test("captures provider HTTP errors without throwing", async () => {
    const { promptFile, outputPath } = await makeTmpDir()
    // Anthropic returns 200, OpenAI returns 500. The extractor must still
    // produce two rows so the disagreement detector has a pair to compare.
    const fetchImpl: typeof fetch = async (input, init) => {
      const body = init?.body ? JSON.parse(String(init.body)) : {}
      void input
      if (body.model === DEFAULT_MODELS.anthropic) {
        return new Response(
          JSON.stringify(providerResponse(DEFAULT_MODELS.anthropic, { verdict: "no_finding", findings: [] })),
          { status: 200, headers: { "Content-Type": "application/json" } },
        ) as unknown as Response
      }
      return new Response("upstream boom", { status: 503 }) as unknown as Response
    }

    const result = await extractWithDualModels(
      { candidate: SAMPLE_CANDIDATE, artifact: { type: "text", content: "DOC" } },
      { promptFile, outputPath, gatewayApiKey: "test-key", fetchImpl },
    )

    assert.strictEqual(result.rows.length, 2)
    const byModel = new Map(result.rows.map((r) => [r.model_slug, r]))
    assert.strictEqual(byModel.get(DEFAULT_MODELS.anthropic)!.error, undefined)
    const openaiRow = byModel.get(DEFAULT_MODELS.openai)!
    assert.ok(openaiRow.error, "openai row should carry an error envelope")
    assert.strictEqual(openaiRow.error?.kind, "gateway_http")
    assert.strictEqual(openaiRow.error?.http_status, 503)
  })

  test("captures non-JSON content as a parse error", async () => {
    const { promptFile, outputPath } = await makeTmpDir()
    const fetchImpl = makeFetch(({ body }) =>
      providerResponse((body as { model: string }).model, "I am sorry, I cannot return JSON."),
    )

    const result = await extractWithDualModels(
      { candidate: SAMPLE_CANDIDATE, artifact: { type: "text", content: "DOC" } },
      { promptFile, outputPath, gatewayApiKey: "test-key", fetchImpl },
    )

    for (const row of result.rows) {
      assert.ok(row.error, "non-JSON content should yield an error row")
      assert.strictEqual(row.error?.kind, "gateway_parse")
    }
  })

  test("captures schema-invalid content as a validation error", async () => {
    const { promptFile, outputPath } = await makeTmpDir()
    const fetchImpl = makeFetch(({ body }) =>
      providerResponse((body as { model: string }).model, {
        verdict: "extracted",
        findings: [{ wrong: "shape" }],
      }),
    )

    const result = await extractWithDualModels(
      { candidate: SAMPLE_CANDIDATE, artifact: { type: "text", content: "DOC" } },
      { promptFile, outputPath, gatewayApiKey: "test-key", fetchImpl },
    )

    for (const row of result.rows) {
      assert.ok(row.error, "invalid schema should yield an error row")
      assert.strictEqual(row.error?.kind, "schema_validation")
    }
  })

  test("strips ```json fences from provider output", async () => {
    const { promptFile, outputPath } = await makeTmpDir()
    const fetchImpl = makeFetch(({ body }) =>
      providerResponse(
        (body as { model: string }).model,
        "```json\n" +
          JSON.stringify({ verdict: "no_finding", findings: [], notes: null }) +
          "\n```",
      ),
    )

    const result = await extractWithDualModels(
      { candidate: SAMPLE_CANDIDATE, artifact: { type: "text", content: "DOC" } },
      { promptFile, outputPath, gatewayApiKey: "test-key", fetchImpl },
    )

    for (const row of result.rows) {
      assert.strictEqual(row.error, undefined)
      assert.strictEqual(row.verdict, "no_finding")
    }
  })

  test("wire body omits response_format (Vercel AI Gateway rejects it)", async () => {
    // Regression for HMI-29: the gateway returns
    //   400 {"error":{"param":"response_format","code":"invalid_request_error"}}
    // for both `{type:"json_object"}` and `{type:"json_schema",...}` shapes.
    // The extractor must not send the field at all. This test captures the
    // wire body and asserts it. It also simulates what the gateway would do
    // if the field reappeared (400 with that param) and asserts that the
    // current default body does not trigger it.
    const { promptFile, outputPath } = await makeTmpDir()
    const seenBodies: Record<string, unknown>[] = []

    const fetchImpl: typeof fetch = async (input, init) => {
      void input
      const body = init?.body ? (JSON.parse(String(init.body)) as Record<string, unknown>) : {}
      seenBodies.push(body)
      if (body.response_format !== undefined) {
        return new Response(
          JSON.stringify({
            error: {
              message: "Invalid input",
              type: "invalid_request_error",
              param: "response_format",
              code: "invalid_request_error",
            },
          }),
          { status: 400, headers: { "Content-Type": "application/json" } },
        ) as unknown as Response
      }
      return new Response(
        JSON.stringify(
          providerResponse(body.model as string, { verdict: "no_finding", findings: [], notes: null }),
        ),
        { status: 200, headers: { "Content-Type": "application/json" } },
      ) as unknown as Response
    }

    const result = await extractWithDualModels(
      { candidate: SAMPLE_CANDIDATE, artifact: { type: "text", content: "DOC" } },
      { promptFile, outputPath, gatewayApiKey: "test-key", fetchImpl },
    )

    // Both providers should have gotten past validation (no 400-on-response_format).
    assert.strictEqual(seenBodies.length, 2)
    for (const body of seenBodies) {
      assert.strictEqual(
        Object.prototype.hasOwnProperty.call(body, "response_format"),
        false,
        `wire body must not include response_format; got: ${JSON.stringify(body)}`,
      )
      // Sanity-check the fields we *do* send so a future refactor can't quietly
      // drop them.
      assert.ok(typeof body.model === "string")
      assert.ok(Array.isArray(body.messages))
      assert.strictEqual(body.temperature, 0)
    }
    for (const row of result.rows) {
      assert.strictEqual(row.error, undefined)
    }
  })

  test("rejects when AI_GATEWAY_API_KEY is unset", async () => {
    const previous = process.env.AI_GATEWAY_API_KEY
    delete process.env.AI_GATEWAY_API_KEY
    try {
      await assert.rejects(
        extractWithDualModels(
          { candidate: SAMPLE_CANDIDATE, artifact: { type: "text", content: "DOC" } },
          { fetchImpl: makeFetch(() => providerResponse("x", { verdict: "no_finding", findings: [] })) },
        ),
        /AI_GATEWAY_API_KEY/,
      )
    } finally {
      if (previous !== undefined) process.env.AI_GATEWAY_API_KEY = previous
    }
  })
})
