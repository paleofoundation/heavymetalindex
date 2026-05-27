import test, { describe } from "node:test"
import assert from "node:assert"

import {
  DiscoveryCandidateSchema,
  DiscoveryCandidateDraftSchema,
  candidateDedupKey,
  rawArtifactBlobKey,
  rawMetadataBlobKey,
  sanitizeBlobSegment,
  discoveryCandidateJsonSchema,
} from "./schema"

function baseRow() {
  return {
    candidate_id: "abc123",
    gap_id: "gap-pb-rice-infants",
    source_adapter: "example",
    external_id: "EX-0001",
    url: "https://example.org/papers/lead-rice",
    title: "Lead in long-grain rice",
    abstract: "Synthesis paper.",
    doi: "10.0000/example.0001",
    retrieval_date: "2026-05-26T12:00:00.000Z",
    study_type: "review",
    sample_size: 42,
    methodology_grade: "B" as const,
    blob_key: "hmi/raw/example/ex-0001/source.txt",
    status: "discovered" as const,
  }
}

describe("DiscoveryCandidate schema — hard requirements", () => {
  test("accepts a complete row", () => {
    const parsed = DiscoveryCandidateSchema.parse(baseRow())
    assert.equal(parsed.url, "https://example.org/papers/lead-rice")
  })

  test("rejects rows missing url", () => {
    const row = { ...baseRow(), url: "" }
    assert.throws(() => DiscoveryCandidateSchema.parse(row))
  })

  test("rejects rows with malformed url", () => {
    const row = { ...baseRow(), url: "not-a-url" }
    assert.throws(() => DiscoveryCandidateSchema.parse(row))
  })

  test("rejects rows missing retrieval_date", () => {
    const row = { ...baseRow(), retrieval_date: "" }
    assert.throws(() => DiscoveryCandidateSchema.parse(row))
  })

  test("rejects rows with unparsable retrieval_date", () => {
    const row = { ...baseRow(), retrieval_date: "not-a-date" }
    assert.throws(() => DiscoveryCandidateSchema.parse(row))
  })

  test("rejects rows missing methodology_grade", () => {
    const row: Record<string, unknown> = { ...baseRow() }
    delete row.methodology_grade
    assert.throws(() => DiscoveryCandidateSchema.parse(row))
  })

  test("rejects null methodology_grade — `unknown` is the explicit carrier", () => {
    const row = { ...baseRow(), methodology_grade: null as unknown as "A" }
    assert.throws(() => DiscoveryCandidateSchema.parse(row))
  })

  test("rejects unknown grade vocabulary", () => {
    const row = { ...baseRow(), methodology_grade: "Z" as unknown as "A" }
    assert.throws(() => DiscoveryCandidateSchema.parse(row))
  })

  test("allows null study_type and sample_size when source doesn't expose them", () => {
    const row = { ...baseRow(), study_type: null, sample_size: null }
    const parsed = DiscoveryCandidateSchema.parse(row)
    assert.equal(parsed.study_type, null)
    assert.equal(parsed.sample_size, null)
  })

  test("rejects negative sample_size", () => {
    const row = { ...baseRow(), sample_size: -1 }
    assert.throws(() => DiscoveryCandidateSchema.parse(row))
  })

  test("draft schema does not require candidate_id / retrieval_date / blob_key", () => {
    const draft = {
      gap_id: "gap-pb-rice-infants",
      source_adapter: "example",
      external_id: "EX-0001",
      url: "https://example.org/papers/lead-rice",
      title: "Lead in long-grain rice",
      abstract: null,
      doi: null,
      study_type: null,
      sample_size: null,
      methodology_grade: "unknown" as const,
    }
    const parsed = DiscoveryCandidateDraftSchema.parse(draft)
    assert.equal(parsed.external_id, "EX-0001")
  })
})

describe("Blob key layout", () => {
  test("artifact key follows hmi/raw/<adapter>/<external_id>/source.<ext>", () => {
    assert.equal(
      rawArtifactBlobKey("pubmed", "12345678", "xml"),
      "hmi/raw/pubmed/12345678/source.xml",
    )
  })

  test("metadata key follows hmi/raw/<adapter>/<external_id>/metadata.json", () => {
    assert.equal(
      rawMetadataBlobKey("openalex", "W4279123456"),
      "hmi/raw/openalex/w4279123456/metadata.json",
    )
  })

  test("sanitizer lowercases and collapses unsafe characters", () => {
    assert.equal(sanitizeBlobSegment("PubMed"), "pubmed")
    assert.equal(sanitizeBlobSegment("foo bar/baz"), "foo_bar_baz")
    assert.equal(sanitizeBlobSegment("a$b#c"), "a_b_c")
  })

  test("sanitizer rejects empty segments", () => {
    assert.throws(() => sanitizeBlobSegment(""))
    assert.throws(() => sanitizeBlobSegment("   "))
  })
})

describe("dedup key", () => {
  test("uses (source_adapter, external_id) as the identity tuple", () => {
    assert.equal(
      candidateDedupKey({ source_adapter: "pubmed", external_id: "12345" }),
      "pubmed|12345",
    )
  })

  test("dedup key changes when adapter changes", () => {
    const a = candidateDedupKey({ source_adapter: "pubmed", external_id: "X" })
    const b = candidateDedupKey({ source_adapter: "openalex", external_id: "X" })
    assert.notEqual(a, b)
  })
})

describe("JSON Schema export", () => {
  test("emits a schema document with required fields enforced", () => {
    const json = discoveryCandidateJsonSchema() as Record<string, unknown>
    assert.equal(typeof json, "object")
    const required = (json.required as string[]) ?? []
    for (const field of [
      "candidate_id",
      "gap_id",
      "source_adapter",
      "external_id",
      "url",
      "retrieval_date",
      "methodology_grade",
      "blob_key",
      "status",
    ]) {
      assert.ok(required.includes(field), `expected required field: ${field}`)
    }
  })
})
