---
title: How to add a new source to the continuous gap-fill system
audience: [engineer, claude, codex]
updated: 2026-05-26
anchor_issue: HMI-9
---

# How to add a new source

This walkthrough adds a new external source (e.g. FDA, EFSA, JECFA, a national surveillance dataset) to the continuous gap-fill system **without changing the spine** — no edits to the ranker, the dual-model extractor, the disagreement detector, the audit barrier, the queue topology, or any wiki content.

If you are adding a fixture, mock, or one-off backfill, this guide is overkill — write a script and commit. This guide is for adding a source that will run continuously.

Companion architecture: [continuous-ingest-architecture](./continuous-ingest-architecture.md).

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

If steps 1–4 succeed, the adapter is correctly wired into the spine. Steps 5+ (ranking, dual-model extraction, audit) are the spine's job and do not require any new code from you.

### Step 5 — Deploy

The adapter ships with the rest of the system. There is no separate deploy step — it is picked up automatically by the discovery worker once it is registered in `tools/discovery/sources/index.ts`. Confirm in the coverage dashboard that the `source_mix` widget shows non-zero candidates for `fda-tds` within the first hour of production.

## Checklist

Before opening a PR for a new adapter, confirm:

- [ ] License is open-source (no auth wall, no paywall, no NDA).
- [ ] `external_id` is stable for the source's records.
- [ ] `retrieval_date` is captured at fetch time, not derived later.
- [ ] `methodology_grade` matches the source's strongest study type per [[docs/conventions]].
- [ ] No edits outside `tools/discovery/sources/` except the one-line registration.
- [ ] No edits to ranker, extractor, disagreement detector, audit barrier, or any wiki content.
- [ ] Adapter has a unit test for `search` and a unit test for `fetch`.
- [ ] Local fixture run produces a manifest row + a raw artifact in `data/.local-blob/`.
- [ ] If you added any new environment variable, it is documented in this guide and added to `.env.example`.

If any of these are not checked, the PR is not ready to ship. None of these are stylistic — the spine's "add a source without spine changes" guarantee depends on each one.

## Anti-patterns

These come up often enough to call out:

- **"My adapter needs to call the extractor for a quick sanity check."** No. The extractor consumes manifest rows. If your adapter cannot prove its output without round-tripping the extractor, the manifest schema is wrong; raise an issue on [HMI-11](/HMI/issues/HMI-11).
- **"I want to dedupe across sources inside my adapter."** No. Dedup belongs in the ranker, not in the adapter. Sources can emit candidates the ranker rejects; that is fine.
- **"My source rate-limits me; I'll add a sleep inside `search`."** Use the queue's backoff and the worker's concurrency settings, not in-process sleeps. The worker is what the system schedules.
- **"I want to write directly to `data/evidence/values.jsonl` from my adapter."** No. The adapter writes manifest rows. The dual-model extractor produces structured findings. Crossing that wire defeats the dual-model cross-check.

## Related issues

- [HMI-9](/HMI/issues/HMI-9) — continuous data-gap-fill ingest system (orchestrator parent)
- [HMI-10](/HMI/issues/HMI-10) — architecture doc + add-a-source guide (parent)
- [HMI-11](/HMI/issues/HMI-11) — `SourceAdapter` interface + provenance contract
- [HMI-13](/HMI/issues/HMI-13) — gap detector v1 → `open_gaps.jsonl` (feeds your adapter)
