# Quality/relevance ranker — methodology rationale (HMI-9.7)

**Locked by:** CTO, 2026-05-27.
**Weights file:** `tools/discovery/rank-weights.json` (v1.0.0).
**Consumed by:** the dual-model extractor queue (HMI-9.8) to prioritise which fetched candidates get model time first.

## Why this ranker exists

The discovery pipeline fans out across many sources (PubMed, OpenAlex, future FDA/EFSA/preprint feeds) and produces far more candidates than the extractor can profitably read. The ranker is the throttle: it orders the queue so the extractor reads the strongest evidence first. The ranking does **not** filter — every fetched candidate stays in `data/discovery/candidates.jsonl` with `ranked_score` attached. The methodology call is about *what order to read in*, not *what to discard*.

This document explains the weight choices so that a regulator, plaintiff's expert, or auditor reading `rank-weights.json` cold can reconstruct the reasoning. Per Governing Principle 4 (Legal defensibility), the weights and their justification must be inspectable and the math must be deterministic.

## The four signals, in order

The score is a sum of four contributions: peer-review status, methodology grade, study type, and a log-scaled sample-size bonus. Each contribution has its own weight in `rank-weights.json`. The score is otherwise just addition — no learned model, no opaque transform.

### Peer-review status (+3 if peer-reviewed)

This is the dominant signal because it is the one that survives adversarial scrutiny in a courtroom or regulatory comment. A peer-reviewed study has at least passed editorial and reviewer triage; a pre-print or gray-literature source has not. We do not treat pre-prints as evidence-free — they are still ingestable — but the extractor should reach peer-reviewed evidence first so that the Index's defensible spine is the peer-reviewed corpus and the pre-print layer is supplementary. Adapter identity determines this: PubMed/OpenAlex/Crossref/Semantic Scholar are peer-reviewed; bioRxiv/medRxiv/arXiv are pre-prints; FDA/EFSA/WHO/EPA are gray literature treated like pre-prints for ranking purposes (their authority is in regulatory weight, not statistical strength, and they get scored through other channels). Weight: +3 peer-reviewed, 0 otherwise. The gap is wide on purpose.

### Methodology grade (+3/+2/+1/0 for A/B/C/unknown)

Grade A on the existing adapter ladder is "RCT, systematic review, meta-analysis"; B is "observational/cohort/case-control/cross-sectional"; C is "gray literature"; "unknown" is the explicit carrier for "adapter couldn't tell". Cochrane methodology weights A above B above C; we follow that ladder rather than re-inventing it. The gap A→B (+1) is intentionally narrower than peer-reviewed→pre-print (+3): grade reflects the strength of the inference within a peer-reviewed paper, whereas peer-review status reflects whether the paper has been vetted at all. "unknown" gets 0 rather than a guess: silent inference of methodology is the failure mode adapter authors guard against, and the ranker must not reintroduce it.

### Study type (+2/+1/0/0 for primary/review/opinion/unknown)

The extractor pulls findings (concentrations, sample sizes, species, units) out of papers. Primary studies (RCT, cohort, cross-sectional, surveillance, case-control) contain the raw values we extract; systematic reviews and meta-analyses contain pooled values, valuable but second-order to primary data; narrative reviews summarise without re-pooling; editorials/commentaries/letters/perspectives contain opinions, not findings, and rank last. The issue spec says "primary > review > opinion"; this implements that ordering. The mapping from adapter-emitted `study_type` strings to the four buckets lives in `rank-weights.json` under `study_type_mapping` so the methodology is one config edit away — not buried in code. The gap primary→review (+1) is deliberately small: a Cochrane-quality meta-analysis on heavy metals in infant rice is not far behind the primary studies it pools.

### Sample size (log-scaled tie-breaker, capped at +1.5)

Sample size is real signal — a 5,000-sample cross-sectional study tells us more than a 12-sample one — but it must not dominate. A naïve linear weighting would float megastudies above smaller but methodologically tighter work, which is the wrong call for evidence synthesis. The ranker uses `0.5 × log10(max(n, 1))`, capped at +1.5, so the contribution rises from 0 at n=10 (the floor for credit) to a +1.5 ceiling around n=1,000 and then plateaus. The cap matters: it ensures sample size acts as a tie-breaker between otherwise equivalent rows, not as a path to the top of the queue independent of methodology. Candidates whose `sample_size` is null (OpenAlex doesn't expose it; PubMed's abstract parse can miss it) get 0 — silent absence is not a penalty, but it's not a bonus either.

## What the ranker deliberately does **not** do

- **No relevance-to-gap signal.** The ranker scores intrinsic quality, not topical match. Topical match is enforced at search time by each adapter's query against the gap. Re-scoring relevance here would conflate two failure modes and obscure the audit trail.
- **No citation-count signal in v1.** OpenAlex exposes `cited_by_count`, but citation counts are popularity, not quality, and they bias the queue toward older work. If we add it later it goes in as a small, separately-weighted, capped contribution with its own rationale.
- **No learned model.** v1 is a transparent linear sum of four declared signals. A learned ranker would be more accurate at the cost of being indefensible in a regulator/court setting where the methodology has to be inspectable. Move to ML only after the heuristic has a long enough operational track record that we know what "good" looks like.
- **No silent type inference.** If `study_type` is null and the abstract looks like a primary study, the ranker still scores it as `unknown`. The adapter is the only place inference can happen, and adapter authors are accountable for that call.

## Score scale and use

The maximum achievable score is `3 + 3 + 2 + 1.5 = 9.5`. The minimum is 0. The extractor (HMI-9.8) reads rows in descending `ranked_score` order; ties are broken by `retrieval_date` descending (newer first) so re-running the ranker after a fresh ingest naturally surfaces new evidence. Every contribution is preserved in the `why[]` array on the in-memory result so the rationale for any given score is reconstructible without re-running the ranker.

## When to change the weights

The methodology is intentionally locked. Edits to `rank-weights.json` require: (a) a CTO sign-off comment in the PR, (b) a re-run of the fixture-ordering test in `tools/discovery/rank.test.ts` to confirm no unintended reordering on the hand-graded fixture, (c) an updated entry in this document explaining the change and what it serves (which Governing Principle it is responding to). Drift here propagates downstream into every wiki edit, so the weights move slowly and visibly.
