---
title: How to add a new source to the continuous gap-fill system
audience: [engineer, claude, codex]
updated: 2026-05-27
anchor_issue: HMI-9
---

# How to add a new source

This walkthrough adds a new external source (e.g. FDA, EFSA, JECFA, a national surveillance dataset) to the continuous gap-fill system **without changing the spine** — no edits to the ranker, the `dual-model-extractor` role, the disagreement detector, the wiki-edit audit-row barrier, the queue topology, or any wiki content.

If you are adding a fixture, mock, or one-off backfill, this guide is overkill — write a script and commit. This guide is for adding a source that will run continuously.

Companion architecture: [continuous-ingest-architecture](./continuous-ingest-architecture.md).

## What the spine guarantees (so you don't have to think about it)

Three guarantees from the spine that affect adapter authors. They are restated from the architecture doc so you can ship a new adapter without re-reading it:

- **Model wiring is a role, not a slug.** The extractor is wired as the **`dual-model-extractor`** Paperclip role. Anthropic = `anthropic/claude-opus-4-7`; OpenAI = the latest GPT-5.x on AI Gateway, resolved at wire-up. Your adapter does not pick models, hard-code slugs, or hint at provider behavior — write to the manifest contract and let the role decide.
- **Edits hit the real wiki, gated by the audit-row barrier.** There is no `wiki-staging/` clone. Every edit derived from your adapter's candidates must clear the per-edit audit-row write barrier in [HMI-12](/HMI/issues/HMI-12). That barrier is the defensibility surface — your adapter contributes `source_document`, `retrieval_date`, and provenance fields to it, and that is the entire integration.
- **Cost is capped at the role level.** The `dual-model-extractor` role has a weekly Paperclip budget cap. When the cap is hit, the extractor stops pulling from the queue and your adapter's candidates back up gracefully. Do not add per-adapter sleeps or rate-limiters in response to cost concerns; that is what the cap exists for.

## Worked example: adding the FDA Total Diet Study adapter

We will pretend FDA TDS is a brand-new source. The contract is identical for any new adapter — only the search/fetch logic changes.

### Step 0 — Confirm scope

Three checks before writing code:

1. **License.** Is the source open-source? V1 of the continuous system is **open-source-only**. If the adapter would require login, API key under NDA, or scraping behind a paywall, stop and escalate.
2. **Stable external id.** Does the source expose a stable per-record id you can hash? PubMed PMIDs and OpenAlex work IDs qualify. A search-engine result URL does not.
3. **Retrieval timestamp.** Can you record an exact `retrieval_date` for each fetched document? The hard requirement is non-negotiable; if the source obscures retrieval timing, surface the constraint before writing the adapter.

If any of these is uncertain, ask in the [HMI-9](/HMI/issues/HMI-9) thread before writing code. None of these are softer than they look.

### Step 1 — Implement `SourceAdapter`

Create `tools/discovery/sources/fda-tds.ts`:

```ts
// tools/discovery/sources/fda-tds.ts

import {
  type DiscoveryCandidate,
  type DiscoveryCandidateDraft,
  type FetchedDoc,
  type Gap,
  type SourceAdapter,
} from "./types"
import { uploadBlob } from "../../runtime/blob"
import { candidateIdFor } from "./id"

const ADAPTER_NAME = "fda-tds"

async function* searchTds(gap: Gap): AsyncIterable<DiscoveryCandidateDraft> {
  const url = new URL("https://www.fda.gov/food/total-diet-study/search")
  url.searchParams.set("metal", gap.metal)
  if (gap.matrix) url.searchParams.set("matrix", gap.matrix)

  let cursor: string | null = null
  do {
    const res = await fetch(`${url.toString()}${cursor ? `&cursor=${cursor}` : ""}`, {
      headers: { accept: "application/json" },
    })
    const page = await res.json()
    for (const row of page.results) {
      yield {
        external_id: row.document_id, // FDA stable doc id
        url: row.permalink,
        title: row.title,
        abstract: row.summary ?? null,
        doi: null, // FDA TDS documents do not carry DOIs
        study_type: "surveillance",
        sample_size: row.n_samples ?? null,
        methodology_grade: "B", // agency surveillance, see docs/conventions
      }
    }
    cursor = page.next_cursor ?? null
  } while (cursor)
}

async function fetchTds(candidate: DiscoveryCandidate): Promise<FetchedDoc> {
  const res = await fetch(candidate.url, { headers: { accept: "application/pdf" } })
  const raw = new Uint8Array(await res.arrayBuffer())
  const retrievedAt = new Date().toISOString()
  return {
    external_id: candidate.external_id,
    raw_bytes: raw,
    content_type: res.headers.get("content-type") ?? "application/pdf",
    metadata: { etag: res.headers.get("etag") ?? null },
    retrieved_at: retrievedAt,
  }
}

function manifestRowTds(doc: FetchedDoc): DiscoveryCandidate {
  // populated upstream by the discovery worker, which knows the gap
  throw new Error("manifestRow is populated by the discovery worker, not the adapter directly")
}

export const fdaTdsAdapter: SourceAdapter = {
  name: ADAPTER_NAME,
  license: "open-source-only",
  search: searchTds,
  fetch: fetchTds,
  manifestRow: manifestRowTds,
}
```

Notes:

- The `methodology_grade` for FDA TDS surveillance data is **B** per [[docs/conventions]] evidence grading. RCTs and prospective cohorts are A; surveillance and cross-sectional are B; opinion / single observations are C. Pick the grade that matches the source's strongest study type and let downstream sessions override per-paper.
- `manifestRow` is intentionally a stub here. The discovery worker pairs the `FetchedDoc` with the originating `Gap` and computes the canonical `candidate_id` before appending to `data/discovery/candidates.jsonl`. Adapters do not write JSONL directly.
- The adapter does **not** call the ranker, extractor, or queue. It returns drafts; the worker handles the rest.

### Step 2 — Register the adapter

Add it to `tools/discovery/sources/index.ts`:

```ts
import { pubmedAdapter } from "./pubmed"
import { openalexAdapter } from "./openalex"
import { fdaTdsAdapter } from "./fda-tds"
import { type SourceAdapter } from "./types"

export const adapters: SourceAdapter[] = [
  pubmedAdapter,
  openalexAdapter,
  fdaTdsAdapter, // ← new
]
```

That single edit is the only place outside `tools/discovery/sources/<name>.ts` that you touch. No other file in the system needs to know FDA TDS exists.

### Step 3 — Add fixture + integration test

Create `tests/discovery/fda-tds.test.ts`:

```ts
import { describe, it, expect, vi } from "vitest"
import { fdaTdsAdapter } from "../../tools/discovery/sources/fda-tds"

describe("fda-tds adapter", () => {
  it("yields surveillance candidates for a Pb × rice gap", async () => {
    const gap = {
      gap_id: "test-gap-1",
      page: "wiki/ingredients/rice.md",
      metal: "Pb",
      matrix: "rice",
      population: null,
      why: "no_cited_evidence" as const,
    }

    const fetchMock = vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          results: [
            {
              document_id: "TDS-2024-Pb-rice",
              permalink: "https://www.fda.gov/.../TDS-2024-Pb-rice.pdf",
              title: "TDS 2024 — Pb in rice products",
              summary: "Survey of Pb in 412 rice products, 2023-2024.",
              n_samples: 412,
            },
          ],
          next_cursor: null,
        }),
        { headers: { "content-type": "application/json" } },
      ),
    )

    const drafts = []
    for await (const draft of fdaTdsAdapter.search(gap)) drafts.push(draft)

    expect(fetchMock).toHaveBeenCalledOnce()
    expect(drafts).toHaveLength(1)
    expect(drafts[0].external_id).toBe("TDS-2024-Pb-rice")
    expect(drafts[0].study_type).toBe("surveillance")
    expect(drafts[0].methodology_grade).toBe("B")
  })

  it("fetches PDF bytes and records retrieved_at", async () => {
    const candidate = {
      candidate_id: "fixture",
      gap_id: "test-gap-1",
      source_adapter: "fda-tds",
      external_id: "TDS-2024-Pb-rice",
      url: "https://www.fda.gov/.../TDS-2024-Pb-rice.pdf",
      title: "TDS 2024 — Pb in rice products",
      abstract: null,
      doi: null,
      retrieval_date: "1970-01-01T00:00:00Z",
      study_type: "surveillance",
      sample_size: 412,
      methodology_grade: "B" as const,
      blob_key: "",
      status: "discovered" as const,
    }

    vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
      new Response(new Uint8Array([0x25, 0x50, 0x44, 0x46]), {
        headers: { "content-type": "application/pdf", etag: "abc123" },
      }),
    )

    const doc = await fdaTdsAdapter.fetch(candidate)

    expect(doc.content_type).toBe("application/pdf")
    expect(doc.raw_bytes.byteLength).toBe(4)
    expect(doc.metadata.etag).toBe("abc123")
    expect(new Date(doc.retrieved_at).toString()).not.toBe("Invalid Date")
  })
})
```

The test does **not** touch the queue, the extractor, or the audit barrier. If you find yourself wanting to assert anything beyond the adapter's outputs in this test, you are testing the wrong layer — write a spine-level integration test in `tests/discovery/spine.test.ts` instead.

### Step 4 — Run the adapter against the local queue

With `HMI_RUNTIME=local`, the runtime uses the SQLite-backed queue at `tools/runtime/local-queue.mjs`. Run:

```bash
# 1. Seed a fixture gap
node tools/discovery/seed-fixture-gap.mjs \
  --page wiki/ingredients/rice.md --metal Pb --matrix rice

# 2. Run discovery one tick against the fixture gap; this exercises your new adapter
HMI_RUNTIME=local node tools/discovery/run-once.mjs --adapter fda-tds

# 3. Confirm the candidate is in the manifest
tail -n 1 data/discovery/candidates.jsonl | jq .

# 4. Confirm the raw artifact landed in the local blob store
ls data/.local-blob/hmi/raw/fda-tds/TDS-2024-Pb-rice/
```

If steps 1–4 succeed, the adapter is correctly wired into the spine. Steps 5+ (ranking, `dual-model-extractor` role, audit-row barrier) are the spine's job and do not require any new code from you.

### Step 5 — Deploy

The adapter ships with the rest of the system. There is no separate deploy step — it is picked up automatically by the discovery worker once it is registered in `tools/discovery/sources/index.ts`. Confirm in the coverage dashboard that the `source_mix` widget shows non-zero candidates for `fda-tds` within the first hour of production.

## Checklist

Before opening a PR for a new adapter, confirm:

- [ ] License is open-source (no auth wall, no paywall, no NDA).
- [ ] `external_id` is stable for the source's records.
- [ ] `retrieval_date` is captured at fetch time, not derived later.
- [ ] `methodology_grade` matches the source's strongest study type per [[docs/conventions]].
- [ ] No edits outside `tools/discovery/sources/` except the one-line registration.
- [ ] No edits to ranker, `dual-model-extractor` role, disagreement detector, audit-row barrier, or any wiki content.
- [ ] Adapter has a unit test for `search` and a unit test for `fetch`.
- [ ] Local fixture run produces a manifest row + a raw artifact in `data/.local-blob/`.
- [ ] If you added any new environment variable, it is documented in this guide and added to `.env.example`.

If any of these are not checked, the PR is not ready to ship. None of these are stylistic — the spine's "add a source without spine changes" guarantee depends on each one.

## Anti-patterns

These come up often enough to call out:

- **"My adapter needs to call the extractor for a quick sanity check."** No. The extractor consumes manifest rows. If your adapter cannot prove its output without round-tripping the extractor, the manifest schema is wrong; raise an issue on [HMI-11](/HMI/issues/HMI-11).
- **"I want to dedupe across sources inside my adapter."** No. Dedup belongs in the ranker, not in the adapter. Sources can emit candidates the ranker rejects; that is fine.
- **"My source rate-limits me; I'll add a sleep inside `search`."** Use the queue's backoff and the worker's concurrency settings, not in-process sleeps. The worker is what the system schedules.
- **"I want to write directly to `data/evidence/values.jsonl` from my adapter."** No. The adapter writes manifest rows. The `dual-model-extractor` role produces structured findings. Crossing that wire defeats the dual-model cross-check.
- **"My adapter should write to a staging copy of the wiki first."** No. There is no `wiki-staging/` tier. Every wiki edit goes through the audit-row write barrier in [HMI-12](/HMI/issues/HMI-12) and lands on the real wiki when (and only when) the barrier accepts it. If you think your source needs a staging layer, what you actually need is stricter `methodology_grade` and disagreement-queue gating.


## PubMed adapter notes (first real adapter — HMI-19)

`tools/discovery/sources/pubmed.ts` is the first real `SourceAdapter`
implementation. These notes are specific to PubMed; the FDA TDS walkthrough
above covers the general pattern.

### Query construction

The adapter builds a query from gap fields in priority order:
`metal + matrix` → `page + population` → `why` → `gap_id`.

MeSH terms (e.g. `lead[MeSH Terms]`) would improve recall precision for
known metals, but are omitted in v1 because gap fields are free-text. Future
work: map canonical metal names to MeSH headings.

### Open-access filter

Every ESearch query appends ` AND pubmed pmc open access[filter]`. This
qualifier restricts results to PMC OA articles — records with full-text
available under an open license. Paywalled records have no raw artifact to
store; they must never enter the pipeline.

Example query for lead in spices:
```
lead spices AND pubmed pmc open access[filter]
```

### Methodology grade

Extracted from `<PublicationType>` tags in the EFetch XML. Cochrane-grade
rule applied in order:

| Publication types | Grade |
|---|---|
| Randomized Controlled Trial, Systematic Review, Meta-Analysis | A |
| Observational Study, Cohort Study, Case-Control Study, Cross-Sectional Study | B |
| Anything else | `unknown` |

Do not infer grade from titles, keywords, or abstracts. If no
`<PublicationType>` matches the table, emit `"unknown"`.

### Sample size

Parsed from `n=<int>` in `<AbstractText>`. Conservative pattern
(`\bn\s*=\s*([0-9,]+)`) — matches only unambiguous point estimates. Falls
back to `null` if absent or ambiguous.

### Rate limits

| Mode | Limit |
|---|---|
| No `NCBI_API_KEY` | ~3 req/s |
| With `NCBI_API_KEY` | ~10 req/s |

Set `NCBI_API_KEY` in `.env.local` (or Vercel project env). The adapter
reads `process.env.NCBI_API_KEY` by default and emits a single warning if
absent. 429 responses are retried once after 1 s; the calling queue owns
overall throughput.

### Live smoke run output

PMID `30207593` (lead-in-spices systematic review), verified 2026-05-27:

```json
{
  "gap_id": "smoke-test-lead-spices",
  "source_adapter": "pubmed",
  "external_id": "30207593",
  "url": "https://pubmed.ncbi.nlm.nih.gov/30207593/",
  "candidate_id": "e5febd4bedd20a58",
  "retrieval_date": "2026-05-27T12:05:48.184Z",
  "blob_key": "hmi/raw/pubmed/30207593/source.xml",
  "methodology_grade": "unknown",
  "status": "discovered"
}
```

Blob key layout confirmed: `hmi/raw/pubmed/<pmid>/source.xml`.

## OpenAlex adapter notes (second real adapter — HMI-20)

`tools/discovery/sources/openalex.ts` is the second real `SourceAdapter`
implementation. These notes cover OpenAlex-specific behaviour; the general
pattern and FDA TDS walkthrough above apply to all adapters.

### Polite pool

OpenAlex throttles anonymous requests aggressively. Set `OPENALEX_POLITE_EMAIL`
to an operational email address to join the polite pool (~5× higher throughput):

```
OPENALEX_POLITE_EMAIL=hmi@yourorg.example
```

The adapter sends this via both the `User-Agent` header and the `mailto=`
query parameter, which are the two forms the OpenAlex documentation accepts.
If the variable is absent, the adapter emits a loud `console.warn` at startup
so production misconfiguration surfaces immediately.

### Gap → query mapping

The adapter builds an OpenAlex `search=` query from gap fields in the same
priority order as PubMed:
`metal + matrix` → `page + population` → `why` → `gap_id`.

The `search` parameter searches across title and abstract. OpenAlex also
supports concept-level filtering (`concepts.id:<id>`), but that requires
mapping gap field text to OpenAlex concept IDs — a future enhancement. The
current approach uses free-text search matching the PubMed convention so
both adapters cover the same gap space.

### Open-access filter

Every query appends `filter=is_oa:true`. This is applied at search time —
closed-source records never enter the pipeline even transiently.

Example query for lead in rice:
```
search=lead rice&filter=is_oa:true
```

### Methodology grade

Extracted from the `type` field of each OpenAlex work. Cochrane-grade
rule applied in order:

| OpenAlex type | Grade |
|---|---|
| `review` (covers systematic reviews and meta-analyses) | A |
| `journal-article`, `article` | B |
| Anything else | `unknown` |

`cited_by_count` is stored in `FetchedDoc.metadata` for future ranking
([HMI-21](/HMI/issues/HMI-21)) but is **not** used for the `methodology_grade` field.
Methodology grade is a provenance signal; citation count is a relevance signal.
Do not conflate them.

### Fetch path

The adapter re-fetches the single work from `https://api.openalex.org/works/<id>`
to resolve the OA URL at fetch time, then downloads the artifact:

1. Prefer `best_oa_location.pdf_url` (direct PDF download).
2. Fall back to `open_access.oa_url`.
3. If neither is set, throw — the candidate is unusable, don't write a half-row.

Note: some `oa_url` values are DOI redirects (`https://doi.org/…`) that return
403 for automated requests even though the paper is technically OA. If
`best_oa_location.pdf_url` is null and `open_access.oa_url` is a DOI URL, the
fetch will fail. The correct response is to skip this candidate (the adapter
throws, the caller catches and logs). Works with direct PMC/EuropePMC PDF URLs
are the most reliably fetchable class.

### Stable id

The OpenAlex work ID stripped of the URL prefix (e.g. `W4402700521` from
`https://openalex.org/W4402700521`). Blob key:
`hmi/raw/openalex/<id>/source.<ext>`.

### Live smoke run output

Work `W4402700521` ("Mitigating toxic metals contamination in foods"), verified 2026-05-27:

```json
{
  "gap_id": "smoke-test-lead-rice",
  "source_adapter": "openalex",
  "external_id": "W4402700521",
  "url": "https://openalex.org/W4402700521",
  "title": "smoke test placeholder",
  "abstract": null,
  "doi": null,
  "study_type": null,
  "sample_size": null,
  "methodology_grade": "unknown",
  "candidate_id": "76d36120b216bc88",
  "retrieval_date": "2026-05-27T12:23:21.075Z",
  "blob_key": "hmi/raw/openalex/w4402700521/source.pdf",
  "status": "discovered"
}
```

Blob key layout confirmed: `hmi/raw/openalex/<id>/source.pdf`.

## Related issues

- [HMI-9](/HMI/issues/HMI-9) — continuous data-gap-fill ingest system (orchestrator parent)
- [HMI-10](/HMI/issues/HMI-10) — architecture doc + add-a-source guide (parent)
- [HMI-11](/HMI/issues/HMI-11) — `SourceAdapter` interface + provenance contract
- [HMI-13](/HMI/issues/HMI-13) — gap detector v1 → `open_gaps.jsonl` (feeds your adapter)
- [HMI-19](/HMI/issues/HMI-19) — PubMed source adapter (first real implementation)
- [HMI-20](/HMI/issues/HMI-20) — OpenAlex source adapter (second real implementation)
