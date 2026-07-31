---
title: n_studies inflation backlog
date: 2026-07-31
generated_by: tools/evidence/build-n-studies-inflation-backlog.mjs
---

# n_studies inflation backlog — cells written by fe6ad96e1 and never re-pooled

`fe6ad96e1` (2026-05-17, "synthesis: overnight wiki refresh") raised `n_studies` and `confidence`
across the wiki **without re-pooling the underlying values** — the admission is in its own corrective
commit, `8e90aa2b8`. This file is the actionable register of what that pass wrote.

- **Cells inflated:** 372
- **Pages affected:** 79
- **`0 → n` cells** (no studies to some): 185
- **`confidence: high` cells:** 72

**What "inflated" means here, precisely:** `n_studies` rose at that commit. Given the commit's own
admission that it did not re-pool, that is a strong signal — but it is **not proof any individual count
is wrong**. Some cells may have had genuine sources routed that night. Establishing which requires
reading each cell's cited sources, which is the re-pooling work itself.

**How a row drains:** `tools/audit-contamination-profile-integrity.mjs` flags a cell only while its
current `typical_ppb`/`p95_ppb` still match what this pass left. Re-pool the cell and it drains
automatically. Editing `n_studies` alone does **not** drain it — that is the same move that created
this backlog.

**Do not "fix" a row by lowering the count to look plausible.** Re-pool against the cited sources, or
report the cell.

## Worst by magnitude

| page | metal | before → after | confidence | 0→n |
| --- | --- | --- | --- | --- |
| `ingredients/rice.md` | tAs | 2 → 95 | high | no |
| `ingredients/rice.md` | Cd | 2 → 86 | high | no |
| `ingredients/rice.md` | iAs | 2 → 74 | high | no |
| `ingredients/fish.md` | tHg | 0 → 70 | high | yes |
| `ingredients/rice.md` | Pb | 2 → 61 | high | no |
| `ingredients/fish.md` | Pb | 0 → 49 | high | yes |
| `ingredients/fish.md` | Cd | 0 → 48 | high | yes |
| `ingredients/rice.md` | tHg | 2 → 45 | high | no |
| `ingredients/seafood.md` | tHg | 5 → 44 | high | no |
| `ingredients/wheat.md` | Cd | 0 → 39 | high | yes |
| `ingredients/fish.md` | tAs | 0 → 37 | high | yes |
| `ingredients/freshwater-fish.md` | tHg | 0 → 33 | high | yes |
| `ingredients/seafood.md` | tAs | 5 → 35 | high | no |
| `ingredients/rice.md` | Cr | 2 → 30 | high | no |
| `ingredients/wheat.md` | Pb | 0 → 28 | high | yes |
| `ingredients/cocoa.md` | Cd | 5 → 32 | high | no |
| `ingredients/seafood.md` | Cd | 5 → 31 | high | no |
| `ingredients/cereals.md` | Cd | 0 → 23 | high | yes |
| `ingredients/seafood.md` | Pb | 5 → 28 | high | no |
| `ingredients/freshwater-fish.md` | Pb | 0 → 22 | high | yes |
| `ingredients/leafy-greens.md` | Cd | 0 → 22 | high | yes |
| `ingredients/rice.md` | Ni | 2 → 23 | high | no |
| `ingredients/cereals.md` | Pb | 0 → 20 | high | yes |
| `ingredients/freshwater-fish.md` | Cd | 0 → 19 | high | yes |
| `ingredients/herbal-botanicals.md` | Pb | 0 → 19 | high | yes |

Full register: [`n-studies-inflation-backlog.csv`](n-studies-inflation-backlog.csv)

