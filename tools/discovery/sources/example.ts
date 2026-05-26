// No-op example adapter.
//
// Implements `SourceAdapter` against a fixed in-memory corpus so the contract
// is testable without network access. The PubMed (HMI-9.5) and OpenAlex
// (HMI-9.6) adapters are built against this same interface — if this example
// round-trips cleanly, the real adapters can be implemented purely against
// the contract.

import { createHash } from "node:crypto"

import type { Gap, SourceAdapter, FetchedDoc } from "./types"
import {
  DiscoveryCandidateDraftSchema,
  DiscoveryCandidateSchema,
} from "./schema"
import type { DiscoveryCandidate, DiscoveryCandidateDraft } from "./schema"
import { rawArtifactBlobKey } from "./schema"

export interface ExampleCorpusEntry {
  external_id: string
  url: string
  title: string
  abstract: string | null
  doi: string | null
  study_type: string | null
  sample_size: number | null
  methodology_grade: "A" | "B" | "C" | "unknown"
  body: string
}

export interface ExampleAdapterOptions {
  corpus?: ExampleCorpusEntry[]
  clock?: () => Date
}

const DEFAULT_CORPUS: ExampleCorpusEntry[] = [
  {
    external_id: "EX-0001",
    url: "https://example.org/papers/lead-in-rice-2024",
    title: "Lead contamination in long-grain rice: a 2024 review",
    abstract: "Synthesis of 42 occurrence studies covering Pb in long-grain rice.",
    doi: "10.0000/example.0001",
    study_type: "review",
    sample_size: 42,
    methodology_grade: "B",
    body: "EXAMPLE_BODY_0001",
  },
  {
    external_id: "EX-0002",
    url: "https://example.org/papers/cadmium-in-spinach-2023",
    title: "Cadmium uptake in spinach across European growing regions",
    abstract: null,
    doi: null,
    study_type: "primary",
    sample_size: 312,
    methodology_grade: "A",
    body: "EXAMPLE_BODY_0002",
  },
]

function deterministicCandidateId(adapter: string, externalId: string): string {
  return createHash("sha1").update(`${adapter}:${externalId}`).digest("hex").slice(0, 16)
}

/**
 * Build an example adapter. Useful as a fixture for unit tests and for
 * smoke-testing the rest of the discovery pipeline before real adapters land.
 */
export function createExampleAdapter(opts: ExampleAdapterOptions = {}): SourceAdapter {
  const corpus = opts.corpus ?? DEFAULT_CORPUS
  const clock = opts.clock ?? (() => new Date())
  const NAME = "example"

  async function* search(gap: Gap): AsyncIterable<DiscoveryCandidateDraft> {
    for (const entry of corpus) {
      const draft = DiscoveryCandidateDraftSchema.parse({
        gap_id: gap.gap_id,
        source_adapter: NAME,
        external_id: entry.external_id,
        url: entry.url,
        title: entry.title,
        abstract: entry.abstract,
        doi: entry.doi,
        study_type: entry.study_type,
        sample_size: entry.sample_size,
        methodology_grade: entry.methodology_grade,
      })
      yield draft
    }
  }

  async function fetchDoc(draft: DiscoveryCandidateDraft): Promise<FetchedDoc> {
    const entry = corpus.find((e) => e.external_id === draft.external_id)
    if (!entry) {
      throw new Error(`example adapter: external_id not found in corpus: ${draft.external_id}`)
    }
    return {
      draft,
      bytes: new TextEncoder().encode(entry.body),
      contentType: "text/plain",
      ext: "txt",
      retrievedAt: clock(),
      metadata: { source: "example", offline: true },
    }
  }

  function manifestRow(doc: FetchedDoc): DiscoveryCandidate {
    const blob_key = rawArtifactBlobKey(NAME, doc.draft.external_id, doc.ext)
    return DiscoveryCandidateSchema.parse({
      ...doc.draft,
      candidate_id: deterministicCandidateId(NAME, doc.draft.external_id),
      retrieval_date: doc.retrievedAt.toISOString(),
      blob_key,
      status: "discovered",
    })
  }

  return {
    name: NAME,
    license: "open-source-only",
    search,
    fetch: fetchDoc,
    manifestRow,
  }
}
