# Source adapters — provenance contract

This directory defines the contract every external corpus must implement to
feed the HMI-9 continuous gap-fill ingest system. PubMed (HMI-9.5) and
OpenAlex (HMI-9.6) are the first two real adapters; FDA/EFSA follow.

The contract is the only thing the ranker, dual-model extractor, and routing
audit depend on. A new source drops in by implementing `SourceAdapter` and
wiring it into the discovery worker — no changes to the spine.

## Files

| File | Purpose |
|---|---|
| `types.ts` | `SourceAdapter`, `Gap`, `FetchedDoc`, `AdapterLicense`. |
| `schema.ts` | `DiscoveryCandidate` Zod schema, JSON Schema export, Blob key helpers, dedup key. |
| `writer.ts` | Append-only JSONL writer with idempotency on `(source_adapter, external_id)`; Blob upload helper. |
| `example.ts` | No-op example adapter used as a fixture in tests. |
| `schema.test.ts` | Hard-requirement assertions on the schema. |
| `writer.test.ts` | Writer idempotency + example-adapter round-trip. |
| `index.ts` | Public barrel export. |

## Provenance contract (non-negotiable)

A candidate is only admissible downstream once **both** of the following are
true:

1. A raw artifact has been uploaded to Vercel Blob under the canonical key
   layout (below).
2. A manifest row has been written to `data/discovery/candidates.jsonl` that
   round-trips through `DiscoveryCandidateSchema`.

The schema enforces three hard requirements on every manifest row:

- `url` — non-empty, valid URL pointing at the upstream record.
- `retrieval_date` — ISO-8601 timestamp of when the artifact was fetched.
- `methodology_grade` — one of `A | B | C | unknown`. `unknown` is the
  explicit carrier for "adapter could not determine"; silent absence is not
  permitted.

`study_type` and `sample_size` carry `null` when the upstream record genuinely
doesn't expose them, but the field is always written so consumers can tell
"unknown" apart from "absent".

## Vercel Blob key layout

```
hmi/raw/<adapter>/<external_id>/source.<ext>
hmi/raw/<adapter>/<external_id>/metadata.json
```

- `<adapter>` — adapter's `name` (e.g. `pubmed`, `openalex`).
- `<external_id>` — adapter-native identifier (PMID, OpenAlex Work ID).
- `<ext>` — artifact content type extension (`pdf`, `xml`, `html`, `json`,
  `bin`, `txt`).

Segments are lowercased and `[^a-z0-9._-]` collapses to `_` via
`sanitizeBlobSegment()`. A malformed external ID can never produce an
ambiguous key.

`source.<ext>` is the raw artifact, byte-identical to what the upstream
served. `metadata.json` carries the draft fields and adapter metadata so the
artifact remains interpretable even if the manifest row is lost (defense in
depth — git is still authoritative for the manifest).

## Idempotency

Dedup key is `(source_adapter, external_id)`. `openCandidateWriter()`
preloads the existing dedup keys when it opens a file, so a crashed discovery
pass that resumes from scratch never writes a duplicate row. The same
external ID seen from a different adapter is admitted as a separate row —
two sources independently surfacing the same study is signal, not noise.

The Blob upload step is treated as a precondition. The intended call order
inside a discovery worker is:

```ts
for await (const draft of adapter.search(gap)) {
  const doc = await adapter.fetch(draft)
  await uploadFetchedDocToBlob(doc, blobUploader)
  const row = adapter.manifestRow(doc)
  await writer.append(row) // schema-validated + idempotent
}
```

If the upload fails, the manifest row is never written, and the next pass
retries from the top. If the upload succeeds but the JSONL append crashes,
the next pass observes the upload as already-there (Vercel Blob `put` is
idempotent on identical content) and writes the manifest row. Provenance
stays honest in both cases.

## Adding a new adapter

1. Create `tools/discovery/sources/<name>.ts` exporting a function that
   returns `SourceAdapter`.
2. Set `license` to `"open-source-only"`. v1 ingests only OA material.
3. `search(gap)` constructs a query from the `Gap` and yields drafts. Page
   internally; the caller stops when it's seen enough.
4. `fetch(draft)` pulls the raw bytes plus any metadata the manifest row
   needs. Set `ext` to a stable short string (`xml`, `pdf`, etc.).
5. `manifestRow(doc)` returns the canonical row. Always call
   `DiscoveryCandidateSchema.parse(...)` inside — that way an adapter bug
   surfaces at the adapter boundary, not three layers downstream.
6. Add a unit test that round-trips a fixture through `search` →
   `fetch` → `uploadFetchedDocToBlob` (mocked) → `manifestRow` →
   `writer.append` and asserts a second pass produces zero new rows.

The example adapter in `example.ts` is the reference exemplar. PubMed and
OpenAlex adapters are implemented purely against this contract — they don't
modify the schema, the writer, or the Blob layout.

## PubMed adapter notes

See `pubmed.ts` and `docs/add-a-source.md` for the full walkthrough.

**Query construction.** Builds from gap fields in priority order:
`metal + matrix` → `page + population` → `why` → `gap_id`. MeSH mapping
is future work; v1 uses free-text.

**OA filter.** Every ESearch query appends ` AND pubmed pmc open access[filter]`
(the `pmc open access[filter]` qualifier). Paywalled records are excluded at
search time.

**Methodology grade** from `<PublicationType>` tags:
- RCT / Systematic Review / Meta-Analysis → A
- Observational Study / Cohort / Case-Control / Cross-Sectional → B
- Anything else → `"unknown"`

**Sample size** from `n=<int>` in `<AbstractText>`. Conservative pattern;
falls back to `null` if absent or ambiguous.

**Rate limits:** ~3 req/s without `NCBI_API_KEY`, ~10 req/s with it. Set
`NCBI_API_KEY` in `.env.local`. 429s are retried once after 1 s.

## JSON Schema export

`discoveryCandidateJsonSchema()` emits the JSON Schema variant of the same
Zod object. Cross-language consumers (Python rankers, future Go services)
read this; the schema is regenerated from Zod on every build so a drifted
JSON copy can't sneak in.
