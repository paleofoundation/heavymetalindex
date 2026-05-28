# Peer-review log directory

One JSONL file per external reviewer. Each line is a review event with the schema:

```json
{
  "reviewer": "alice-foodchem",
  "page_slug": "synthesis/organic-certification-not-protective",
  "verdict": "endorsed",
  "review_date": "2026-06-01",
  "notes": "Reviewed methods sections of contributing sources; finding is supported.",
  "conflicts_declared": [],
  "page_sha256_at_review": "abc123..."
}
```

Verdicts: `endorsed`, `contested`, `recused`, `pending`.

The verdict is rendered on the target synthesis page by `tools/build-peer-review-footers.mjs` on every prebuild. Each entry is append-only; corrections happen via a new entry that supersedes the prior one (per `review_date`).

The reviewer slug matches an `external_reviewers:` entry in `wiki/curators.md`. A review event from an unknown reviewer is logged as a lint failure.

This directory is part of the public corpus. The peer-review state is visible to readers because that is the audit signal Cochrane and EFSA both rely on.
