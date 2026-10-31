# Source-first shared engine (owner instruction, 22 October 2026)

Karen approved replacing one-off page builds with one shared engine, run across every ingredient page (414) and product page (427). The fullness rules, the 7 gates, the brand firewall and the public-content boundary stay exactly as strict. What changes is how pages are made: each source is read **once** for every food and product it measures, and every page is generated from that shared store by one generic builder.

## Why

Today's per-page method copied honey's scripts into each ingredient folder (about 28,500 lines across 18 folders), re-extracted the same sources for every page that cites them (the GEMS/Food extraction exists under 15 slugs), and forced every page to be rebuilt by hand when shared code changed.

## Components and owners

| Part | Path | Owner |
|---|---|---|
| A. Findings store | `data/evidence/findings/` + `tools/engine/findings/` | findings-store session |
| B. Routing (material → page) | `data/evidence/findings/routing.json` | findings-store session |
| C. Generic page builder | `tools/engine/page/` | page-builder session |
| D. Product mode for the gates | `tools/engine/gates/` (wraps `tools/audit-ingredient-fullness.mjs`) | page-builder session |
| E. Deterministic build + one-command release | `tools/engine/release/` | release session |

Sessions write only their own paths. A shared file outside them goes through `shared-requests.json` in the session's own directory, as before.

## A. Findings store (the contract between the parts)

One file per source: `data/evidence/findings/sources/<source_id>.json`.

```json
{
  "source_id": "orisakwe2012-owerri-food-crops-fruits-metals",
  "primary_artifact": "raw/...pdf", "primary_sha256": "...",
  "extracted_at": "2026-10-22", "extractor": "engine-v1 | merged:<old path>",
  "disposition": "occurrence_extracted | context | out_of_scope | access_blocked | no_numeric_results",
  "disposition_reason": "...", "disposition_locator": "p. 4, Table 2",
  "study": {"design": "", "origin": "", "market": "", "period": {"from": 2010, "to": 2011, "as_reported": ""}, "method": "", "lod": [], "basis": "fresh|dry|as_sold|unknown", "qa": "", "site_context": "ordinary|mining|industrial|wastewater|experimental|market|monitoring"},
  "findings": [{
    "id": "<source_id>:<analyte>:<group>:<statistic>",
    "material": {"label_as_printed": "Plantain (Musa paradisiaca)", "page": "ingredients/plantain", "form": "raw|cooked|flour|...", "state": "as_sold|as_eaten|..."},
    "analyte": "Pb", "group": "", "group_kind": "region|site|variety|brand_category|...",
    "n": 6, "statistic": "mean|median|sample_value|range|max|min|percentile",
    "reported": "0.12 ± 0.03 mg/kg", "value_ugkg": 120, "min_ugkg": null, "max_ugkg": null, "sd_ugkg": 30,
    "unit_original": "mg/kg", "basis": "fresh", "censoring": "none|lt_lod|nd",
    "lod_ugkg": null, "locator": "Table 2, row 4", "integrity_flag": null, "notes": ""
  }],
  "sample_values": [], "controls": [], "unresolved": []
}
```

Rules:
- **Every food and product** the source measures is extracted, not only the page that triggered the read. `material.page` is filled from routing (B); unrouted materials keep `page: null` and are listed in `data/evidence/findings/unrouted.json` for routing review.
- Brand names never enter `group` or ids (CLAUDE.md Part 12): use category-level wording such as "US baby-food manufacturer".
- Monitoring datasets (WHO GEMS/Food, FDA TDS, EFSA) are ingested once from the existing shared tables (`data/evidence/who_gemsfood_*`, `fda_tds_*`, raw exports), as `data/evidence/findings/datasets/<dataset_id>.jsonl`, one row per sample or subgroup statistic, routed the same way. The honey/fish/rice pitfalls apply: zeros are non-detects, EURO/EU duplicates collapse, "Mercury (inorganic)" is not total mercury.
- Seed the store by merging the 3,319 existing per-ingredient extraction files (`data/evidence/contracts/*rollout-2026-10-22/<slug>/extraction/`, `cocoa/extractions/`) and `data/evidence/values.jsonl`; deduplicate per source, keep every finding, record `extractor: merged:<path>`. Then extract remaining sources.
- Extraction runs in parallel batches with a structured-output schema check; a sample of each batch is re-read against the primary text and the batch is rejected if the error rate exceeds 2%.
- `tools/engine/findings/validate.mjs` validates every file; `tools/engine/findings/index.mjs` writes `data/evidence/findings/by-page/<family>/<slug>.json` (all findings routed to that page).

## C. Generic page builder

`node tools/engine/page/build.mjs <family>/<slug> [--check]` replaces the per-ingredient folders. From `by-page/<family>/<slug>.json` it produces rows (one per finding, ids `hmi-occurrence-<slug>-<analyte>-<i>`, rendered in the canonical grouped contamination-profile table of `ingredient-canonical-style.md`: metal, then food form, with spread figures folded into their central row), references through the existing `applyHmiBaselines` with one generic scope rule (form × state × basis; mining, industrial, wastewater, experimental sites compared but never in references), comparisons in the order HMI → within-study → bounded with the owner's terminal codes, the shared-schema ledger and scorecard, and the synthesis. Prose is templated from the evidence, plus a short written summary per page; thin evidence gives a short page, not padded text. Existing hero, byline and locked surfaces are preserved; Rice's lock is unchanged. Output is a candidate plus preview, as today; the builds already shipped stay valid until the engine reproduces them.

## E. Release

One command stages, builds, diffs, overlays, gates and packages a release of any set of pages, automating the isolated route used for batches A and B. The time-dependent prebuild steps take a fixed `HMI_BUILD_DATE` so two builds of the same tree are byte-identical. Deploying stays behind Karen's go-ahead per batch.
