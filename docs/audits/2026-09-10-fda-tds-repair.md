# FDA TDS page and corpus repair

This implements the eight repairs requested after the [page audit](2026-09-10-fda-tds-corpus-audit.md). The historical audit remains unchanged; its counts describe the earlier snapshot.

## Data and source reconciliation

The FDA analytical TXT and independent summary XLSX were recovered from the agency, preserved append-only in the mounted primary-source library, and hashed. The former 29,148-row extract is an exact prefix of the full file, ending in the middle of a food's analyte panel.

The corrected register contains **68,993 results, 307 foods, 3,276 composites and 6,479 food/analyte summaries**. The independent FDA workbook reconciles all 6,449 nonspeciation summary groups, including counts, extrema and rounded means/standard deviations. Speciation contributes another 30 derived summary groups, explicitly distinguished from workbook-reported statistics. There are **54 inorganic-arsenic results**, and the full data still do not support the 14 ingredient attributions identified in the audit. No food routes or source-statistic differences remain unresolved in this dataset.

The public source and companion report now distinguish full analytical evidence, narrative context, original units, reporting limits, preparation and sample scope. Download links serve actual samples, summaries, routes and the reconciliation receipt. Seventeen heuristic candidate rows were superseded with an audit copy; the heuristic extractor respects primary-structured extraction authority so they cannot regenerate.

Primary evidence: [FDA TDS results](https://www.fda.gov/food/fda-total-diet-study-tds/fda-total-diet-study-tds-results). Reproducible scope and hashes: [reconciliation receipt](../../data/evidence/fda_tds_fy2018_2020_reconciliation.json).

## Ingredient evidence and exports

All 307 foods route to 246 ingredient destinations, including 103 new provisional pages. The route map preserves composite foods and preparation; it does not assign a mixed food's concentrations to its component ingredients. Two additional provisional destinations, sage and whey, resolve older source declarations without inventing isolated-whey measurements.

**299 unique profile cells** were adjudicated. Of these, 256 carry source-specific non-detect evidence and 43 retain source context or unresolved observations. Population typical ranges and upper percentiles remain null where unsupported. Non-detects carry actual composite counts and reporting limits, and never become measured zero. WHO GEMS observations remain traceable under their own provenance; unresolved basis conflicts are retained rather than silently selecting the largest-N duplicate.

The table generator now updates only its own profile section. This also repairs a discovered collision that could overwrite a following FDA or Sources table on a new stub. The JSON/CSV exporters preserve the same value kind, evidence, censoring and source scope as the pages; study counts and composite sample counts are separate. The export drift gate checks these distinctions.

Evidence: [profile adjudications](../../data/evidence/fda_tds_profile_adjudications.json), [food routes](../../data/evidence/fda_tds_fy2018_2020_ingredient_routes.csv).

## Publication and recurrence prevention

Evidence packets now distinguish verified Git pins from unpinned working content. A shared verifier hashes authored Markdown plus semantic metadata; only generated history/reference displays are excluded from the authored hash, with separate checksums for the exact published body and full Markdown. A Gitless build may preserve a previously verified matching pin; changed scientific content or semantic metadata invalidates it. PDF requests no longer masquerade as JSON downloads. The API bundles its deployment's own manifest.

The source-body repair removes local paths, execution identities and internal section labels while retaining scientific measurements, corrections and missing-source caveats. Full originals and the individual substitutions are preserved in `data/evidence/source_editorial_provenance/`, with per-page edit audit records. Proper names, analytical OPUS software and Codex Alimentarius remain intact.

The source template and ingest workflow now follow the compiled-wiki completion gate, automatic provisional routing destinations, explicit Evidence Fitness and the current government-based standards method. Historical policy changelog entries remain intact. Obsolete occurrence-based tools are explicitly historical; no certification threshold was set or altered. Routing schema failures and unresolved destinations block publication. Pending source records are excluded from both pages and manifest exports; ingredient destination stubs remain available.

## Remaining corpus recovery work

The source contract audit produces a machine-readable [metadata recovery queue](../../data/evidence/source_contract_gaps.json). These are missing or unstructured metadata fields, not a claim that every source is scientifically unfit. Existing sources were not assigned invented hashes, access rights or fitness judgments to clear a validator. Explicitly declaring an incomplete source ingest complete now fails the build.

The 73 records with undeclared routing inputs were reviewed against their existing source text: 55 fields were filled and 24 fields received an explicit reviewed-empty context disposition. WHO GEMS retains two product/ingredient routing gaps because its full food-level mapping remains unresolved; that broader recovery is tracked separately. See the [routing-input adjudication](../../data/evidence/audits/2026-09-10-fda-tds/routing-input-adjudication.json).

## Validation and release

Local validation passed: 396 tests; TypeScript check; complete prebuild and production build; primary FDA reconciliation; committed-output corruption checks; source routing (zero malformed/unresolved); local reingest queue; standards-gap/descriptive regeneration; AI adjudication; profile integrity and open-data drift checks. The repaired local reingest scan now inventories each root/source once instead of recursively rescanning for every routed row. Independent archive review verified all 3,109 original hashes and reproduced 2,550 of 2,551 cleaned scientific bodies exactly; FDA is the intentional complete-data rewrite. Cleanup touched 2,551 source pages with 5,648 recorded substitutions. The full source regeneration is checked against the mounted FDA primary files locally; the deployment build independently checks the committed normalized artifacts and their reconciliation hashes without needing the mounted library.
