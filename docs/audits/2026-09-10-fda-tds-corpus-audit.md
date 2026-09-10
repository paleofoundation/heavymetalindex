# FDA TDS page audit and systemic corpus failures

Audit date: 2026-09-10. Page: https://heavymetalindex.com/sources/fda2022-tds-elements-fy2018-fy2020.

**Result: the page fails the ingest-completion and public traceability contracts. The audit demonstrates recurring extraction, synthesis, publication, and validation failures.** An A-tier source does not make its local extraction complete or its downstream claims correct.

This is an audit, not a completed reingest or a corpus repair. No source page, ingredient value, product page, standard, or publishing configuration was changed. Findings below distinguish verified failures from candidates requiring further review. Eight repair items were recorded in the outstanding-items ledger; their exact records are also preserved in [repair-items.json](../../data/evidence/audits/2026-09-10-fda-tds/repair-items.json). Policy reconciliation is recorded for governance review; the other items are assigned to routine AI/code remediation.

## Scope and evidence

The audit inspected the live source page and its linked evidence packet, the live export of 4,077 public records, the preserved FDA supplement, the 29,148-row normalized extract, its 1,884 summary rows, all 90 ingredient destinations, and the relevant generators and validators. Two example ingredient defects were also verified live. The corpus pattern scan covered 3,058 local `type: source` pages; the live export contains 3,060 source records. These are distinct snapshots, not interchangeable denominators.

Local HEAD at inspection: `55d5fad21b1dfd7623d74feb32701a3ca676fd20`. The workspace already had 4,855 modified tracked paths. The live source's Markdown-body hash matches that HEAD's body, although the working copy has regenerated history text. Broad generators were not run against this shared workspace.

Evidence receipts and full affected-item lists are in [the audit record directory](../../data/evidence/audits/2026-09-10-fda-tds/). Counts are reproducible snapshots, not a claim to have semantically reviewed every source in the corpus.

The source-pattern counts below preserve the initial scan at approximately 08:36 UTC. A later check found three source-file replacements by concurrent work, with no changed predicates among surviving records: the same 3,058-page denominator then yielded 1,535 internal-path matches, 751 missing access URLs, 1,169 missing hash keys and 2,943 missing fitness markers. The exact [snapshot differences](../../data/evidence/audits/2026-09-10-fda-tds/concurrent-source-snapshot-differences.json) are retained so changing workspace state is not mistaken for a reproducibility failure.

## A1 — P1: partial extraction was accepted as a complete dataset

The source presents 29,148 analytical rows across 90 foods as the FY2018–FY2020 dataset. Its June 2 verification note says the 83-page FDA supplement supplies the same statistical view already captured and therefore needs no new structured layer. That conclusion is false.

The preserved supplement contains **307 distinct food IDs**. Only 90 appear in this source's normalized sample, summary, and ingredient-route files: **217 food IDs are absent from this registered extraction**. The extract ends during food 183, chocolate-chip cookies, after nine analyte records, including total chromium, ending at potassium. Later analytes and subsequent foods are absent. This is strong evidence of truncation, with no documented subset rule or incomplete status.

The omitted coverage includes baby foods, beverages and cocoa. Supplement page 83, food 910, reports cocoa powder with N=1 and Cd 400, Pb 63, and Ni 10,600 ppb. Those are source observations, not proposed limits. They are absent from this extract. The companion narrative FDA report, page 16, reports 68,831 element results plus 162 speciation results, or 68,993 total; the companion wiki source already describes the larger 307-food scope.

This is **not** a claim that all 217 foods have no mention anywhere in the corpus: separate category extractions contain a few recovered observations. It is a failure to reconcile the primary source against its own purportedly complete extract. Likewise, all 90 currently loaded food routes have ingredient destinations; they did not disappear.

Two related completion failures remain:

- The declared original CSV and key-PDF paths do not resolve. The supplement exists with a verified hash; the key PDF exists under an alternate `raw/Digest/` path. A mounted-library filename search did not locate the declared original CSV. This demonstrates broken recorded provenance, not proof that no recoverable copy can exist under another name.
- The supplement reports means, standard deviations, and detect/non-detect counts. The current summary schema lacks mean/SD fields, contradicting the claim that it already captures the same statistical view and the requirement to preserve every reportable statistic.

Evidence: `wiki/sources/fda2022-tds-elements-fy2018-fy2020.md:134`, `:145`, `:288`; `wiki/sources/fda-tds-elements-2018-2020.md:55`; [307-food coverage audit](../../data/evidence/audits/2026-09-10-fda-tds/supplement-food-coverage.csv); [primary counts](../../data/evidence/audits/2026-09-10-fda-tds/primary-evidence-counts.json). Supplement SHA-256: `f4c28e22c3bbeb083b9be60303b6ee20d141f29d9cd2c6d9b7630c0df8fa11a3`.

**System repair:** require primary-to-extract reconciliation by food/analyte/statistic, including an end-of-file completeness check and an explicit disposition for every excluded item. An artifact/hash match cannot substitute for content coverage. Recover the official full CSV, preserve it, reconcile the related source records, extract remaining statistics, and regenerate audited destinations before marking this ingest complete.

## A2 — P1: profiles lose provenance and measurement basis

The source correctly limits its inorganic-arsenic results to rice and crisped rice cereal. Nevertheless, **14 ingredient iAs tables cite this dataset for foods without corresponding iAs rows**. Nine historical synthesis events also count this source as an iAs contributor to unmeasured foods.

Two examples confirmed on the live site:

| Ingredient | Published iAs typical range | Sole table citation | Traceable numeric match elsewhere |
| --- | --- | --- | --- |
| Cucumber | 0.5–680.2 ppb | This FDA dataset | WHO GEMS EURO, as-is, N=11 |
| Strawberries | 21.4–66.3 ppb | This FDA dataset | WHO GEMS EURO, N=5; both dry-weight and as-is records exist |

The numbers are **not proven invented**. They match another dataset, but appear under false FDA provenance. The strawberry selection also demonstrates basis loss: the WHO selector keys on food and metal, picks the largest N, keeps the first on ties, and discards basis metadata. The first tied strawberry row is dry-weight. The public ingredient profile then carries a generic ppb value with an FDA citation.

The mechanism is visible in `tools/populate_contamination_profiles.py:39` and `:329`: numeric selection and profile replacement omit the source's full basis/geography/time context. `tools/build-ingredient-contamination-tables.mjs:114` and `:134` rebuild numbers from frontmatter while preserving old per-metal citation strings. The generator does not join citations to supporting evidence rows.

Affected ingredients: fish-fingers, peanut-butter, peanuts, white-bread, oranges, banana, pear, strawberries, avocado, apple-juice, broccoli, celery, cucumber, potatoes. Exact rows and historical events are preserved in [routing and profile findings](../../data/evidence/audits/2026-09-10-fda-tds/routing-and-profile-findings.json). Representative files: `wiki/ingredients/cucumber.md:23` and `:109`; `wiki/ingredients/strawberries.md:23` and `:107`; `data/evidence/who_gemsfood_heavy_metals_summary_by_food_contaminant.csv:1402` and `:1073`.

**System repair:** derive each displayed value and citation from the same evidence record, retaining source ID, food ID, species, basis, statistic, geography, time and any conversion. Reject unsupported source-food-species combinations. Do not create measurement evidence by crossing a source's separate ingredient and metal arrays. Re-adjudicate the affected profiles before publishing corrected claims.

## A3 — P1: non-detects still appear as exact-zero occurrence profiles

The FDA supplement explicitly identifies whole-milk Pb, Cd, tAs, tHg, Ni, Cr and U as 27 non-detects out of 27, with minimum/maximum `ND` and mean/SD `N/A`. The reporting limits are positive. Whole-milk tAs and U nevertheless remain populated as typical `[0,0]`, P95 `0` in the ingredient profile.

Preserving the raw zero code is correct. FDA also documents substituting zero for non-detects in certain mean calculations. The defect is presenting that code or an undisclosed lower-bound calculation as a measured zero concentration, especially when prose infers low contamination without the reporting-limit qualification.

A source-to-profile join found **258 all-zero profile pairs across 78 ingredient pages** whose corresponding FDA summaries contain only zero-coded results. These are a reproducible review population; attribution to FDA alone requires checking other contributors. Whole-milk tAs/U are primary-text-confirmed examples. The broader extract has 337 all-zero HMI food-metal summary cells.

The existing integrity check returned **zero failures**. Its predicate at `tools/audit-contamination-profile-integrity.mjs:70` only rejects these zeros when confidence is high or `n_studies >= 3`; the affected low-count/low-confidence profiles escape. A prospective skip in `tools/populate_contamination_profiles.py:295` does not retract older populated zeros.

Evidence: supplement page 1; `wiki/ingredients/whole-milk.md:30` and `:73`; [full profile review population](../../data/evidence/audits/2026-09-10-fda-tds/routing-and-profile-findings.json).

**System repair:** retain raw codes and explicit censoring semantics, display non-detection with its reporting limit, and label any LB/UB statistic. Validate those semantics regardless of confidence label or study count. Re-adjudicate existing profiles, rather than relying only on guards for new writes.

## A4 — P1: the entire live evidence export lacks the promised version pins

The live source packet says it pins the published text to a specific Git commit and can be verified at that commit. It returns `last_commit_sha: null`, `last_commit_date: null`, and `verify_command: null`. **All 4,077 records in the linked live export have both commit fields null**, including all 3,060 source records.

The export was generated at `2026-09-10T04:50:11.807Z`. Its SHA-256 and the audited record are saved in [live-export-audit.json](../../data/evidence/audits/2026-09-10-fda-tds/live-export-audit.json); the [source packet](../../data/evidence/audits/2026-09-10-fda-tds/live-source-packet.json) preserves the contradictory attestation. The body hash exists and matches a local committed version, so this is not a claim that the page is unrecoverable. The promised verification chain is absent from the delivered artifact.

`tools/build-evidence-packet-index.mjs:138` catches missing Git history and emits null attribution. `api/evidence-packet.mjs:107` still emits the unconditional commit-pinning attestation. In addition, the non-null `verify_command` branch at `:97` hashes the entire Markdown file, while the generator hashes only its body. Restoring commit IDs alone would therefore leave a second verification defect.

**System repair:** create provenance from the exact committed publication snapshot and carry it through deployment; verify the declared hash against that same snapshot using one canonical hash procedure. Fail or disclose incomplete provenance instead of issuing a false attestation. Include a real deployment verification check.

## A5 — P2: operational notes leak through a footer-only prose guard

The live page exposes internal CSV paths, Kimi corruption-recovery directories, frontmatter field names and duplicate-ingest commentary. These violate the public-reader contract in OPERATING.md Parts 3 and 6. They are useful internal audit records but are not a scientific explanation of the FDA dataset.

Across the **3,058 local source pages**, **1,538 bodies match internal-path patterns** and **452 match agent/toolchain vocabulary patterns**. These are candidate sets, not 1,538 or 452 individually adjudicated violations. The selected page and `wiki/sources/abedi2025-edible-oils-bleaching-review.md:134` provide confirmed examples.

`node tools/audit-page-history-leaks.mjs` passed after scanning 4,470 generated blocks. It only checks Update history/References blocks, leaving ordinary page prose unexamined. `strip-internal-manual-refs.mjs` only strips a narrow set of manual-reference tokens. The source template also requests Certification/Courses/App implications and an ingest-update list, encouraging this pattern.

**System repair:** separate public scientific applicability and limitations from private execution notes. Keep provenance records; change their public presentation. Update the source template and whole-page validation together so regeneration does not restore the leakage. [Candidate lists and filter definitions](../../data/evidence/audits/2026-09-10-fda-tds/source-corpus-candidates.json) are retained for a scoped review.

## A6 — P2: download labels do not deliver the promised data

The page's Structured Data Extract section prints repository filenames as code, without download links to those samples or summaries. The shared rail's “Structured evidence export (JSON)” links to the corpus-wide manifest index, which contains page metadata and source lists, not this dataset's 29,148 analytical rows. Its “Evidence packet (PDF)” link returns JSON; the endpoint explicitly implements JSON only.

Evidence: live page; `quartz/components/Rail.tsx:173` and `:187`; `api/evidence-packet.mjs:62`. This is a shared component defect, separate from whether the underlying evidence files exist locally.

**System repair:** make the labels accurate and provide reachable, versioned sample/summary/routing downloads on dataset pages. Verify response type and schema, not just HTTP success or link existence.

## A7 — P2: the contracts disagree, and checks enforce only part of them

The mandatory source template omits access/hash/fitness fields required by the persistent-ingest contract. It also omits `audience`, although the surrounding template document and CLAUDE Part 7 require it. The local scan found 48 missing/falsey licenses and 2,967 missing audience fields. Another 748 lack `access_url`, 1,166 lack a top-level hash-named key, and 2,945 lack an explicit fitness marker; the latter groups are **review candidates**, because DOI/body links, external manifests, or Methods/Limitations may supply equivalent evidence.

The routing generator's blocking condition covers missing cite keys, although the documented contract says malformed/unresolved routing fails the build. Saved audit files contain 2,083 advisory malformed rows and five unresolved rows; these are saved-artifact counts, not a fresh generator run. The provenance check excludes source pages and checks for citation presence rather than whether a cited source supports a particular claim.

Required-reading guidance is also inconsistent: `wiki/methodology/persistent-wiki-ingest-rule.md:76` still describes retired P10/P20 limit-setting and excludes summary-only distributions; lower sections of AGENTS and the governing-principles document retain older percentile instructions. The newer method lock and CLAUDE Part 19 take precedence. This audit did not apply retired arithmetic or change any live limit. Policy wording should be reconciled through its documented governance process.

One latent hole was found without a current affected population: `RemoveDrafts` only checks `draft`, not `tier1-stub` or pending evidence tier. **No current local source records carried those pending statuses**, so this audit does not claim they are currently published.

**System repair:** reconcile policy and templates, then validate the same source contract across ingest, routing, synthesis, export and publication. Add fixtures for an incomplete dataset, unsupported species citation, mixed-basis selection, non-detect profile, absent commit pin, internal body notes and pending source admission. Green structural checks alone do not establish ingest completion.

## Verification and repair order

An additional internal candidate-only issue was recorded during the alias check: `data/evidence/category1_autonomy_extracted_summary.csv:199` and following rows use next-highest values as maxima, apply dataset-global N to narrower statistics, and place a canned-tuna mean in baby-food scope. These records explicitly require validation before promotion. They demonstrate a candidate-adjudication defect, not an observed public claim or threshold error, and are logged separately as `OI-20260910-tds-alias-candidate-adjudication`.

The audit ran the existing history-leak and contamination-integrity checks read-only. Both passed despite confirmed defects; their results are saved in [checks.json](../../data/evidence/audits/2026-09-10-fda-tds/checks.json). The source pattern scanner can be rerun from the repository root:

```sh
node data/evidence/audits/2026-09-10-fda-tds/scan-source-contract.cjs
```

Repair A1–A3 from primary evidence first, while fixing the shared provenance/export defects A4/A6. Resolve A5/A7 at the template and validation layer before a corpus-wide regeneration. Existing product-admission work is already tracked as `OI-20260910-gems-tds-product-row-admission-map`; this audit does not duplicate it or label the 88 recorded ingredient-only routes as silently lost foods.

Full ingest checks, regeneration, build, and source/ingredient commits belong to the repair runs. They were not executed or claimed complete in this audit.
