// Fixture-based ordering test for the HMI-9.7 quality/relevance ranker.
//
// Ten hand-graded candidates spanning the realistic combinations the ranker
// will see in production: peer-reviewed + grade A primary with large N (gold),
// peer-reviewed reviews, preprints, opinion pieces, candidates with no
// methodology, etc.
//
// The CTO graded the expected ordering inline. A failure here means either:
//   (a) someone changed `rank-weights.json` without updating the rationale
//       doc, or
//   (b) the ranker logic regressed.
// Either way, this test gates the methodology lock.

import test, { describe } from "node:test"
import assert from "node:assert"
import { readFile } from "node:fs/promises"

import { applyRankings, loadRankWeights, rankCandidate } from "./rank"
import type { RankWeights } from "./rank"
import type {
  DiscoveryCandidate,
  DiscoveryCandidateDraft,
} from "./sources/schema"
import { DiscoveryCandidateSchema } from "./sources/schema"

// ---------------------------------------------------------------------------
// Fixture
// ---------------------------------------------------------------------------

interface FixtureCandidate {
  id: string
  note: string
  candidate: Pick<
    DiscoveryCandidate,
    "source_adapter" | "methodology_grade" | "study_type" | "sample_size"
  >
}

// CTO hand-graded fixture (2026-05-27). Order in this array is NOT the
// expected ranking — `expectedOrderIds` below is. Mixing the two makes the
// test harder to game.
const FIXTURE: FixtureCandidate[] = [
  {
    // C: PubMed RCT with n=5000 — peer-reviewed + grade A + primary + huge N.
    // Should sit at the top.
    id: "C",
    note: "PubMed RCT, n=5000 — gold standard for extraction",
    candidate: {
      source_adapter: "pubmed",
      methodology_grade: "A",
      study_type: "Randomized Controlled Trial",
      sample_size: 5000,
    },
  },
  {
    id: "A",
    note: "PubMed RCT, n=150 — peer-reviewed + A + primary, smaller N",
    candidate: {
      source_adapter: "pubmed",
      methodology_grade: "A",
      study_type: "Randomized Controlled Trial",
      sample_size: 150,
    },
  },
  {
    id: "G",
    note: "PubMed cohort study (B), n=2000 — peer-reviewed + B + primary, large N",
    candidate: {
      source_adapter: "pubmed",
      methodology_grade: "B",
      study_type: "Cohort Study",
      sample_size: 2000,
    },
  },
  {
    id: "B",
    note: "PubMed systematic review (A), no abstract-parseable N",
    candidate: {
      source_adapter: "pubmed",
      methodology_grade: "A",
      study_type: "Systematic Review",
      sample_size: null,
    },
  },
  {
    id: "F",
    note: "OpenAlex journal-article (B), grade B primary, no N",
    candidate: {
      source_adapter: "openalex",
      methodology_grade: "B",
      study_type: "journal-article",
      sample_size: null,
    },
  },
  {
    id: "D",
    note: "PubMed editorial (unknown), peer-reviewed but opinion, no methodology",
    candidate: {
      source_adapter: "pubmed",
      methodology_grade: "unknown",
      study_type: "Editorial",
      sample_size: null,
    },
  },
  {
    id: "H",
    note: "OpenAlex unknown type, unknown grade — peer-reviewed shell, nothing else",
    candidate: {
      source_adapter: "openalex",
      methodology_grade: "unknown",
      study_type: null,
      sample_size: null,
    },
  },
  {
    id: "E",
    note: "bioRxiv preprint, grade A RCT, n=200 — strong methodology but not peer-reviewed",
    candidate: {
      source_adapter: "biorxiv",
      methodology_grade: "A",
      study_type: "Randomized Controlled Trial",
      sample_size: 200,
    },
  },
  {
    id: "I",
    note: "bioRxiv preprint, unknown grade, opinion — bottom of the queue",
    candidate: {
      source_adapter: "biorxiv",
      methodology_grade: "unknown",
      study_type: "Commentary",
      sample_size: null,
    },
  },
  {
    id: "J",
    note: "Unknown adapter, unknown grade, unknown type — should score 0",
    candidate: {
      source_adapter: "some-other-adapter",
      methodology_grade: "unknown",
      study_type: null,
      sample_size: null,
    },
  },
]

// CTO-graded expected ordering, descending by score, ties broken by id.
//
// Derivation against the locked v1.0.0 weights (peer +3, A +3, primary +2,
// log-sample-size capped at +1.5; review +1; pre-print 0):
//   C: 3 + 3 + 2 + 1.5  = 9.5   (PubMed RCT, n=5000; cap binds)
//   A: 3 + 3 + 2 + ~1.09 = 9.09  (PubMed RCT, n=150; log10(150)≈2.18 → 1.09)
//   G: 3 + 2 + 2 + 1.5  = 8.5   (PubMed cohort B, n=2000; cap binds at n≥1000)
//   B: 3 + 3 + 1 + 0    = 7     (PubMed systematic review, no N)
//   F: 3 + 2 + 2 + 0    = 7     (OpenAlex journal-article B, no N) — tie with B,
//                                 broken alphabetically (B<F).
//   D: 3 + 0 + 0 + 0    = 3     (PubMed editorial — opinion, peer-reviewed only)
//   H: 3 + 0 + 0 + 0    = 3     (OpenAlex unknown — peer-reviewed shell only)
//                                 tie with D, alphabetical (D<H).
//   E: 0 + 3 + 2 + ~1.15 = 6.15  (bioRxiv RCT, n=200) — actually outranks D, H, B, F?
//
// Recomputed: E=6.15 sits between G(8.5) and B(7). Reflecting that in the
// expected order below. The point: a preprint RCT with real methodology can
// outrank a peer-reviewed editorial or a peer-reviewed unknown — by design.
//
// Final expected order, descending:
//   C (9.5) > A (9.09) > G (8.5) > B (7) = F (7) > E (6.15) > D (3) = H (3) > I (0) = J (0)
//
// Ties broken alphabetically by id below for determinism.
const EXPECTED_ORDER_IDS = ["C", "A", "G", "B", "F", "E", "D", "H", "I", "J"]

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("rankCandidate — locked methodology against hand-graded fixture", async () => {
  const weights = await loadRankWeights()

  test("fixture orders match the CTO grading", () => {
    const scored = FIXTURE.map((f) => ({
      id: f.id,
      note: f.note,
      score: rankCandidate(f.candidate, weights).score,
    }))

    scored.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      return a.id.localeCompare(b.id)
    })

    const actualIds = scored.map((s) => s.id)
    assert.deepEqual(
      actualIds,
      EXPECTED_ORDER_IDS,
      `Ranker ordering regressed. Got:\n${scored
        .map((s) => `  ${s.id} (${s.score}) — ${s.note}`)
        .join("\n")}`,
    )
  })

  test("gold-standard candidate hits the cap (max score 9.5)", () => {
    const gold = FIXTURE.find((f) => f.id === "C")!
    const { score } = rankCandidate(gold.candidate, weights)
    assert.equal(score, 9.5)
  })

  test("a candidate with no signals at all scores 0", () => {
    const empty = FIXTURE.find((f) => f.id === "J")!
    const { score, why } = rankCandidate(empty.candidate, weights)
    assert.equal(score, 0)
    assert.equal(why.length, 4)
  })

  test("preprint RCT outranks peer-reviewed editorial", () => {
    const preprintRct = FIXTURE.find((f) => f.id === "E")!
    const peerReviewedEditorial = FIXTURE.find((f) => f.id === "D")!
    const a = rankCandidate(preprintRct.candidate, weights).score
    const b = rankCandidate(peerReviewedEditorial.candidate, weights).score
    assert.ok(a > b, `preprint RCT (${a}) should outrank peer-reviewed editorial (${b})`)
  })

  test("sample size acts as tie-breaker but does not dominate methodology", () => {
    // Identical fields except sample size; the larger N should win, but the
    // delta is bounded by the log cap, not linear in N.
    const small = {
      source_adapter: "pubmed",
      methodology_grade: "B" as const,
      study_type: "Cohort Study",
      sample_size: 10,
    }
    const huge = { ...small, sample_size: 100_000 }
    const sSmall = rankCandidate(small, weights).score
    const sHuge = rankCandidate(huge, weights).score
    assert.ok(sHuge > sSmall)
    assert.ok(sHuge - sSmall <= weights.sample_size.cap + 0.01)
  })

  test("`why` array names each of the four contributions", () => {
    const c = FIXTURE.find((f) => f.id === "A")!
    const { why } = rankCandidate(c.candidate, weights)
    assert.equal(why.length, 4)
    assert.ok(why[0].startsWith("peer_review["))
    assert.ok(why[1].startsWith("methodology_grade["))
    assert.ok(why[2].startsWith("study_type["))
    assert.ok(why[3].startsWith("sample_size["))
  })

  test("weights config exists and is the path the methodology doc names", async () => {
    const raw = await readFile("tools/discovery/rank-weights.json", "utf8")
    const parsed = JSON.parse(raw) as RankWeights
    assert.equal(parsed.rationale_doc, "tools/discovery/rank-methodology.md")
    assert.equal(parsed.version, "1.0.0")
  })
})

// ---------------------------------------------------------------------------
// applyRankings — manifest-rewriting driver
// ---------------------------------------------------------------------------

import { mkdtemp, writeFile, readFile as readFileFs, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"

function manifestRow(overrides: Partial<DiscoveryCandidate>): DiscoveryCandidate {
  return DiscoveryCandidateSchema.parse({
    candidate_id: "cid",
    gap_id: "gap-test",
    source_adapter: "pubmed",
    external_id: "1",
    url: "https://example.org/x",
    title: "x",
    abstract: null,
    doi: null,
    retrieval_date: "2026-05-27T00:00:00.000Z",
    study_type: null,
    sample_size: null,
    methodology_grade: "unknown",
    blob_key: "hmi/raw/pubmed/1/source.xml",
    status: "fetched",
    ...overrides,
  })
}

describe("applyRankings — manifest rewrite", async () => {
  const weights = await loadRankWeights()

  test("writes ranked_score and advances status to ranked", async () => {
    const dir = await mkdtemp(join(tmpdir(), "hmi-rank-"))
    const path = join(dir, "candidates.jsonl")
    try {
      const rows = [
        manifestRow({
          external_id: "1",
          methodology_grade: "A",
          study_type: "Randomized Controlled Trial",
          sample_size: 100,
        }),
        manifestRow({
          external_id: "2",
          source_adapter: "biorxiv",
          methodology_grade: "unknown",
          study_type: "Commentary",
          sample_size: null,
        }),
      ]
      await writeFile(path, rows.map((r) => JSON.stringify(r)).join("\n") + "\n", "utf8")

      const result = await applyRankings(path, weights)
      assert.equal(result.total, 2)
      assert.equal(result.ranked, 2)
      assert.equal(result.skipped, 0)

      const written = (await readFileFs(path, "utf8")).trim().split("\n").map((l) => JSON.parse(l))
      assert.equal(written[0].status, "ranked")
      assert.ok((written[0].ranked_score as number) > (written[1].ranked_score as number))
      assert.equal(typeof written[0].ranked_score, "number")
    } finally {
      await rm(dir, { recursive: true, force: true })
    }
  })

  test("re-running the ranker is idempotent (rows count as unchanged)", async () => {
    const dir = await mkdtemp(join(tmpdir(), "hmi-rank-"))
    const path = join(dir, "candidates.jsonl")
    try {
      const row = manifestRow({
        external_id: "1",
        methodology_grade: "A",
        study_type: "Randomized Controlled Trial",
        sample_size: 100,
      })
      await writeFile(path, JSON.stringify(row) + "\n", "utf8")

      const first = await applyRankings(path, weights)
      assert.equal(first.ranked, 1)
      assert.equal(first.unchanged, 0)

      const second = await applyRankings(path, weights)
      assert.equal(second.ranked, 0)
      assert.equal(second.unchanged, 1)
    } finally {
      await rm(dir, { recursive: true, force: true })
    }
  })

  test("missing manifest is a no-op (zero counts)", async () => {
    const dir = await mkdtemp(join(tmpdir(), "hmi-rank-"))
    const path = join(dir, "candidates.jsonl")
    try {
      const result = await applyRankings(path, weights)
      assert.deepEqual(result, { total: 0, ranked: 0, skipped: 0, unchanged: 0 })
    } finally {
      await rm(dir, { recursive: true, force: true })
    }
  })

  test("malformed rows are skipped, not fatal", async () => {
    const dir = await mkdtemp(join(tmpdir(), "hmi-rank-"))
    const path = join(dir, "candidates.jsonl")
    try {
      const goodRow = manifestRow({ external_id: "1", methodology_grade: "A" })
      const skipped: { line: string; error: unknown }[] = []
      await writeFile(
        path,
        [JSON.stringify(goodRow), "not-json{", JSON.stringify({ url: "" })].join("\n") + "\n",
        "utf8",
      )
      const result = await applyRankings(path, weights, {
        onSkip: (line, error) => skipped.push({ line, error }),
      })
      assert.equal(result.total, 3)
      assert.equal(result.ranked, 1)
      assert.equal(result.skipped, 2)
      assert.equal(skipped.length, 2)
    } finally {
      await rm(dir, { recursive: true, force: true })
    }
  })
})

// Suppress the unused-type warning — kept for documentation purposes.
void (null as unknown as DiscoveryCandidateDraft)
