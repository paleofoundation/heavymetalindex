import test, { describe } from "node:test"
import assert from "node:assert"
import { mkdtemp, readFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"

import { openCandidateWriter, uploadFetchedDocToBlob } from "./writer"
import type { BlobUploader } from "./writer"
import { createExampleAdapter } from "./example"
import { DiscoveryCandidateSchema } from "./schema"
import type { Gap } from "./types"

function makeMockUploader() {
  const calls: { key: string; contentType: string; size: number }[] = []
  const uploader: BlobUploader = {
    async put(key, body, opts) {
      const size = typeof body === "string" ? Buffer.byteLength(body) : body.byteLength
      calls.push({ key, contentType: opts.contentType, size })
      return { url: `mock://blob/${key}` }
    },
  }
  return { uploader, calls }
}

async function makeTempCandidatesPath(): Promise<string> {
  const dir = await mkdtemp(join(tmpdir(), "hmi-candidates-"))
  return join(dir, "candidates.jsonl")
}

describe("candidate writer — idempotency on (source_adapter, external_id)", () => {
  test("writes a row once, skips on second append", async () => {
    const path = await makeTempCandidatesPath()
    const writer = await openCandidateWriter(path)
    const row = DiscoveryCandidateSchema.parse({
      candidate_id: "abc123",
      gap_id: "gap-1",
      source_adapter: "example",
      external_id: "EX-0001",
      url: "https://example.org/p/1",
      title: "Paper one",
      abstract: null,
      doi: null,
      retrieval_date: "2026-05-26T12:00:00.000Z",
      study_type: null,
      sample_size: null,
      methodology_grade: "B",
      blob_key: "hmi/raw/example/ex-0001/source.txt",
      status: "discovered",
    })

    const first = await writer.append(row)
    assert.equal(first.written, true)

    const second = await writer.append(row)
    assert.equal(second.written, false)
    assert.equal(second.reason, "duplicate")

    const file = await readFile(path, "utf8")
    const lines = file.trim().split("\n")
    assert.equal(lines.length, 1)
  })

  test("dedup is per-adapter — same external_id from a different adapter is admitted", async () => {
    const path = await makeTempCandidatesPath()
    const writer = await openCandidateWriter(path)
    const base = {
      candidate_id: "abc123",
      gap_id: "gap-1",
      external_id: "EX-0001",
      url: "https://example.org/p/1",
      title: "Paper one",
      abstract: null,
      doi: null,
      retrieval_date: "2026-05-26T12:00:00.000Z",
      study_type: null,
      sample_size: null,
      methodology_grade: "B" as const,
      blob_key: "hmi/raw/x/ex-0001/source.txt",
      status: "discovered" as const,
    }
    await writer.append(DiscoveryCandidateSchema.parse({ ...base, source_adapter: "pubmed" }))
    await writer.append(DiscoveryCandidateSchema.parse({ ...base, source_adapter: "openalex" }))
    const file = await readFile(path, "utf8")
    assert.equal(file.trim().split("\n").length, 2)
  })

  test("preloads existing dedup keys when reopened", async () => {
    const path = await makeTempCandidatesPath()
    const first = await openCandidateWriter(path)
    await first.append(
      DiscoveryCandidateSchema.parse({
        candidate_id: "abc123",
        gap_id: "gap-1",
        source_adapter: "example",
        external_id: "EX-0001",
        url: "https://example.org/p/1",
        title: "Paper one",
        abstract: null,
        doi: null,
        retrieval_date: "2026-05-26T12:00:00.000Z",
        study_type: null,
        sample_size: null,
        methodology_grade: "B",
        blob_key: "hmi/raw/example/ex-0001/source.txt",
        status: "discovered",
      }),
    )

    const reopened = await openCandidateWriter(path)
    assert.equal(reopened.has("example", "EX-0001"), true)
    assert.equal(reopened.has("example", "EX-9999"), false)

    const result = await reopened.append(
      DiscoveryCandidateSchema.parse({
        candidate_id: "abc123",
        gap_id: "gap-1",
        source_adapter: "example",
        external_id: "EX-0001",
        url: "https://example.org/p/1",
        title: "Paper one",
        abstract: null,
        doi: null,
        retrieval_date: "2026-05-26T12:00:00.000Z",
        study_type: null,
        sample_size: null,
        methodology_grade: "B",
        blob_key: "hmi/raw/example/ex-0001/source.txt",
        status: "discovered",
      }),
    )
    assert.equal(result.written, false)
  })

  test("rejects rows that violate the schema", async () => {
    const path = await makeTempCandidatesPath()
    const writer = await openCandidateWriter(path)
    await assert.rejects(
      writer.append({
        candidate_id: "abc",
        gap_id: "gap-1",
        source_adapter: "example",
        external_id: "EX-0002",
        url: "", // hard requirement violated
        title: "X",
        abstract: null,
        doi: null,
        retrieval_date: "2026-05-26T12:00:00.000Z",
        study_type: null,
        sample_size: null,
        methodology_grade: "B",
        blob_key: "hmi/raw/example/ex-0002/source.txt",
        status: "discovered",
      } as never),
    )
  })

  test("appendMany counts written vs skipped", async () => {
    const path = await makeTempCandidatesPath()
    const writer = await openCandidateWriter(path)
    const mkRow = (id: string) =>
      DiscoveryCandidateSchema.parse({
        candidate_id: id,
        gap_id: "gap-1",
        source_adapter: "example",
        external_id: id,
        url: `https://example.org/p/${id}`,
        title: `Paper ${id}`,
        abstract: null,
        doi: null,
        retrieval_date: "2026-05-26T12:00:00.000Z",
        study_type: null,
        sample_size: null,
        methodology_grade: "B",
        blob_key: `hmi/raw/example/${id}/source.txt`,
        status: "discovered",
      })
    const result = await writer.appendMany([mkRow("A"), mkRow("B"), mkRow("A")])
    assert.equal(result.written, 2)
    assert.equal(result.skipped, 1)
  })
})

describe("example adapter round-trip — fetch + Blob upload + manifest row", () => {
  test("produces a manifest row + Blob upload without violating idempotency", async () => {
    const adapter = createExampleAdapter({ clock: () => new Date("2026-05-26T12:00:00.000Z") })
    const gap: Gap = { gap_id: "gap-pb-rice-infants" }
    const path = await makeTempCandidatesPath()
    const writer = await openCandidateWriter(path)
    const { uploader, calls } = makeMockUploader()

    // First pass.
    let firstPassWrites = 0
    for await (const draft of adapter.search(gap)) {
      const doc = await adapter.fetch(draft)
      const upload = await uploadFetchedDocToBlob(doc, uploader)
      assert.equal(upload.artifactKey, `hmi/raw/example/${draft.external_id.toLowerCase()}/source.txt`)
      const row = adapter.manifestRow(doc)
      const result = await writer.append(row)
      if (result.written) firstPassWrites += 1
    }
    assert.equal(firstPassWrites, 2)

    // Every fetched doc must have produced exactly 2 Blob calls — artifact + metadata.
    assert.equal(calls.length, 4)

    // Replay the search. Idempotency must hold.
    let secondPassWrites = 0
    for await (const draft of adapter.search(gap)) {
      const doc = await adapter.fetch(draft)
      const row = adapter.manifestRow(doc)
      const result = await writer.append(row)
      if (result.written) secondPassWrites += 1
    }
    assert.equal(secondPassWrites, 0)

    // Manifest rows on disk validate against the schema.
    const onDisk = (await readFile(path, "utf8")).trim().split("\n")
    assert.equal(onDisk.length, 2)
    for (const line of onDisk) {
      const parsed = JSON.parse(line)
      const validated = DiscoveryCandidateSchema.parse(parsed)
      assert.ok(validated.url.startsWith("https://"))
      assert.ok(validated.retrieval_date)
      assert.ok(validated.methodology_grade)
      assert.ok(validated.blob_key.startsWith("hmi/raw/example/"))
    }
  })

  test("adapter is license-locked to open-source-only", () => {
    const adapter = createExampleAdapter()
    assert.equal(adapter.license, "open-source-only")
    assert.equal(adapter.name, "example")
  })
})
