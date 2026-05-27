// Append-only writer for `data/discovery/candidates.jsonl`.
//
// Two responsibilities:
//   1. Validate every manifest row against `DiscoveryCandidateSchema` before
//      it touches disk. The schema enforces URL + retrieval_date + methodology
//      metadata — the HMI-11 hard requirements.
//   2. Maintain idempotency on `(source_adapter, external_id)`. Re-running a
//      crashed discovery pass never produces duplicate rows; the writer
//      preloads existing dedup keys and short-circuits.
//
// Blob uploads are abstracted behind `BlobUploader` so tests inject a mock and
// production code wires `@vercel/blob`. The writer treats the Blob upload as
// a precondition: if the upload fails, no manifest row is written. That keeps
// provenance honest — every committed row points at a real artifact.

import { mkdir, readFile, appendFile, access } from "node:fs/promises"
import { dirname } from "node:path"

import {
  DiscoveryCandidateSchema,
  candidateDedupKey,
  rawArtifactBlobKey,
  rawMetadataBlobKey,
} from "./schema"
import type { DiscoveryCandidate } from "./schema"
import type { FetchedDoc } from "./types"

export const CANDIDATES_JSONL_PATH = "data/discovery/candidates.jsonl"

/**
 * Minimal Blob-upload contract. Production wires `@vercel/blob#put`;
 * tests pass a mock that records calls in-memory.
 */
export interface BlobUploader {
  put(key: string, body: Uint8Array | string, opts: { contentType: string }): Promise<{ url: string }>
}

export interface BlobUploadResult {
  artifactKey: string
  artifactUrl: string
  metadataKey: string
  metadataUrl: string
}

/**
 * Upload the raw artifact + metadata.json for a fetched doc under the
 * canonical Blob key layout. Returns the keys that should be written into the
 * manifest row's `blob_key`.
 */
export async function uploadFetchedDocToBlob(
  doc: FetchedDoc,
  uploader: BlobUploader,
): Promise<BlobUploadResult> {
  const artifactKey = rawArtifactBlobKey(doc.draft.source_adapter, doc.draft.external_id, doc.ext)
  const metadataKey = rawMetadataBlobKey(doc.draft.source_adapter, doc.draft.external_id)

  const metadataBody = JSON.stringify(
    {
      draft: doc.draft,
      retrievedAt: doc.retrievedAt.toISOString(),
      contentType: doc.contentType,
      ext: doc.ext,
      metadata: doc.metadata,
    },
    null,
    2,
  )

  const artifact = await uploader.put(artifactKey, doc.bytes, { contentType: doc.contentType })
  const metadata = await uploader.put(metadataKey, metadataBody, { contentType: "application/json" })

  return {
    artifactKey,
    artifactUrl: artifact.url,
    metadataKey,
    metadataUrl: metadata.url,
  }
}

export interface CandidateWriter {
  /**
   * Append a single manifest row. Returns whether the row was actually written
   * (false means it was skipped as a duplicate).
   */
  append(row: DiscoveryCandidate): Promise<{ written: boolean; reason?: "duplicate" }>

  /**
   * Append many rows. Duplicates are skipped silently; invalid rows throw.
   * Returns counts so the caller can log discovery progress.
   */
  appendMany(rows: Iterable<DiscoveryCandidate>): Promise<{ written: number; skipped: number }>

  /** Whether the writer already knows about `(adapter, externalId)`. */
  has(adapter: string, externalId: string): boolean
}

/**
 * Build a writer for the given JSONL file. Loads existing dedup keys up front
 * so the second-and-later runs of a discovery pass are O(new rows) rather than
 * O(file size) per append.
 */
export async function openCandidateWriter(path: string = CANDIDATES_JSONL_PATH): Promise<CandidateWriter> {
  await mkdir(dirname(path), { recursive: true })

  const seen = new Set<string>()
  try {
    await access(path)
    const existing = await readFile(path, "utf8")
    for (const line of existing.split("\n")) {
      if (!line) continue
      let parsed: unknown
      try {
        parsed = JSON.parse(line)
      } catch {
        // Skip unreadable lines rather than crash the loop. The lint pass on
        // `candidates.jsonl` (HMI-9.4 territory) will surface the bad rows.
        continue
      }
      const validated = DiscoveryCandidateSchema.safeParse(parsed)
      if (!validated.success) continue
      seen.add(candidateDedupKey(validated.data))
    }
  } catch {
    // File doesn't exist yet — first run, nothing to preload.
  }

  async function append(row: DiscoveryCandidate): Promise<{ written: boolean; reason?: "duplicate" }> {
    const validated = DiscoveryCandidateSchema.parse(row)
    const key = candidateDedupKey(validated)
    if (seen.has(key)) {
      return { written: false, reason: "duplicate" }
    }
    await appendFile(path, `${JSON.stringify(validated)}\n`, "utf8")
    seen.add(key)
    return { written: true }
  }

  async function appendMany(rows: Iterable<DiscoveryCandidate>): Promise<{ written: number; skipped: number }> {
    let written = 0
    let skipped = 0
    for (const row of rows) {
      const result = await append(row)
      if (result.written) written += 1
      else skipped += 1
    }
    return { written, skipped }
  }

  return {
    has(adapter: string, externalId: string): boolean {
      return seen.has(candidateDedupKey({ source_adapter: adapter, external_id: externalId }))
    },
    append,
    appendMany,
  }
}
