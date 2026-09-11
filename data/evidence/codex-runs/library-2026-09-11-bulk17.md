# LIBRARY CHECKPOINT COMPLETE — 17 sources, 15 whole PDFs

One substantive scoped commit under the user's later draining and batch-commit instruction, superseding the original four-paper/per-page cadence. This checkpoint is not a completed library drain: all eight authorized research-pull roots remain in scope (4,107 inventoried PDFs). Of 198 claimed file entries, 15 whole documents are complete and 183 entries still require work. Two completed sources are individual SETAC abstracts within a 1,280-page proceedings container; 2,290 of its 2,292 indexed abstract headings remain unreviewed. Whole-container ingestion remains false. The earlier 20-source batch is separate; file-level reconciliation of prior DOI matches is still pending.

## Evidence and routing

- 17 source ingests: 10 new canonical source pages and 7 existing-page deep-read rewrites. One verified same-work duplicate source page consolidated; raw files retained.
- 5,307 new structured records: 5,294 source observations plus 13 attributed qualitative claims. All 4,804 existing register rows preserved as JSON objects, including pre-existing duplicate IDs.
- 99 routes across 27 destinations: 16 metal pages, 5 supply-chain pages, 3 product pages, 1 ingredient page, 1 mitigation page and 1 health page. All 94 authored destination blocks preserved. The animal-feed supply-chain destination was created before routing.
- Product pages: fish-freshwater, pet-food-canned-wet and pet-food-dry-kibble. Ingredient page: catfish. No ingredient contamination-profile YAML was changed.
- Source indexes, navigation, wiki log, routing audit, reingest queue and affected generated exports refreshed. Unsupported old product/species routes removed for repaired sources. Fourteen obsolete legend descriptions repaired through an audited input register and the maintained generator, with independent review and idempotency verification.

| Source | Scope / geography | New records | Audit | Commit |
| --- | --- | ---: | --- | --- |
| ghimire2026-jacaranda-carbon-chromium-removal | thesis; NP | 93 | PROMOTE | containing checkpoint commit¹ |
| khalid2008-islamabad-chromium-electrokinetic-remediation | peer-reviewed; PK | 58 | PROMOTE | containing checkpoint commit¹ |
| ibikunle2025-functionalized-nanotubes-chromium-removal | peer-reviewed; NG | 917 | PROMOTE | containing checkpoint commit¹ |
| saha2022-chromium-sources-remediation-editorial | editorial; SN, CI | 24 | PROMOTE | containing checkpoint commit¹ |
| sharafi2026-nahavand-soil-water-crop-metals | peer-reviewed; IR | 569 | PROMOTE | containing checkpoint commit¹ |
| bedrossiantz2025-seabass-cadmium-ciprofloxacin-behavior | conference-abstract;  | 9 | PROMOTE | containing checkpoint commit¹ |
| skin2010-significant-risks-for-dermal-oral-lead-exposures-despite | peer-reviewed; US | 177 | PROMOTE | containing checkpoint commit¹ |
| authors2017-risk-assessment-for-children-exposed-to-arsenic | peer-reviewed; US | 478 | PROMOTE | containing checkpoint commit¹ |
| agwaramgbo2012-there-is-a-growing-global-concern-for-the | peer-reviewed; US | 97 | PROMOTE | containing checkpoint commit¹ |
| pille2021-foamed-hydrogels-metal-removal | thesis; CA | 355 | PROMOTE | containing checkpoint commit¹ |
| authors2019-spatial-contamination-and-health-risks-of-heavy-metal | peer-reviewed; DZ | 378 | PROMOTE | containing checkpoint commit¹ |
| cat2024-individual-and-combined-contamination-of-the-heavy-metals | preprint; CN | 262 | PROMOTE | containing checkpoint commit¹ |
| kim2018-dry-dog-food-heavy-metals | peer-reviewed; US | 76 | PROMOTE | containing checkpoint commit¹ |
| nica2012-banat-soil-nettle-snail-metals | peer-reviewed; RO | 475 | PROMOTE | containing checkpoint commit¹ |
| dai2016-texas-animal-feed-metals | peer-reviewed; US | 670 | PROMOTE | containing checkpoint commit¹ |
| authors2019-toxicology-reports-6-2019-472-481 | peer-reviewed; IN | 660 | PROMOTE | containing checkpoint commit¹ |
| gawra2025-zebrafish-cadmium-ciprofloxacin-endpoints | conference-abstract;  | 9 | PROMOTE | containing checkpoint commit¹ |

¹All source/tracker/audit/event records use `batch:library-drain-bulk17-20260911`. Resolve the exact shared commit with `git log --diff-filter=A --format=%H -- data/evidence/codex-runs/library-2026-09-11-bulk17.md`. This avoids a second bookkeeping commit merely to store the first commit's hash. The introducing commit is the completion record; an uncommitted draft of this report does not satisfy the commit gate.

## Verification

All eight required commands passed:

- `npm run evidence:source-routes`: 3,088 source pages; 6,439 product routes; zero unresolved or malformed routes. None of these 17 keys remains in the unresolved/malformed files.
- `npm run evidence:local-reingest`: 4,856 global queue rows; zero for these 17 sources.
- `npm run evidence:standards-gaps`: command passed. Its legacy validator removed 392 unrelated Category 7 rows during generation; all 392 were restored byte-for-byte and that unrelated quarantine/output mutation was excluded. No certification limit changes are included.
- `npm run evidence:ai-adjudication`: passed; zero queue entries for these 17 sources.
- `npm run prebuild`: passed, including the final full build. Source-contract audit reports zero false-complete declarations; all 17 completed-source contracts pass. Global pre-existing metadata recovery gaps remain.
- `npm test`: 402 passing tests, 48 suites, zero failures; repeated successfully after the bounded legend-generator repair.
- `npm run check`: passed.
- `npm run build`: passed with prebuild/postbuild, 4,365 input files, 25 synthesis and 10 metal PDFs rendered. Existing Sass/LaTeX warnings were nonblocking.

After excluding unrelated generator fanout and finalizing completion metadata, regenerated the source-contract audit and evidence-packet index and rendered the exact scoped wiki again using `npm --ignore-scripts run build`: passed, 4,364 inputs, 5,099 emitted files. The one-input difference excludes an unrelated generated audit page. Verified all 4,213 evidence-packet Markdown hashes against final files, all 17 raw SHA-256 hashes, all new record IDs and original packet fields, all 99 authored routes, all existing value records and the restored Category 7 register. Whitespace-only cleanup was applied to trailing spaces in the regenerated claim-provenance CSV.

Independent release-content review: PASS. Reviewed source-draft audits are retained in `data/evidence/library-drain/batch-01-audit.md`; the final release review is adjacent to the extraction packet.

## Source limitations and remaining work

Every source's specific gaps and dispositions remain in the extraction packet. Approximate chart readings, null/unreadable values, synthetic treatment matrices, elemental-versus-speciated measurements, mixed or unresolved bases, modeled exposure endpoints and secondary summaries remain explicitly qualified. They are not live certification limits. Full observed and summary facts were preserved without requiring source percentiles.

Maurya's 70 muscle mean/SD rows map to the maintained freshwater-fish product key, retaining muscle identity and the source's wet/dry basis conflict; they remain ineligible for empirical synthesis. Du's preprint remains linked to the later published study with no duplicate cohort counting; full published-version reconciliation remains pending. Pille's hydrogel uptake accounting includes absorbed liquid and does not prove binding or metal desorption/reuse; related-version reconciliation remains pending. SETAC source pages complete only their named abstracts.

The checkpoint was prepared from remote base `70e164c26892e9564cf209039385a2a03079e1e1` in isolated branch `codex/library-drain-bulk-17-20260911`. The shared canonical checkout's unrelated dirty work and divergent local commits were preserved. Excluded 4,932 unrelated tracked generator changes and four unrelated new generated files, backed up outside the repository. Included the maintained legend-generator input repair and only the checkpoint's evidence, tracking, source/destination pages and related generated outputs. GitHub synchronization is backup only; no deployment occurred.

Next primary source: McFadden 2021 arsenic-remediation thesis (batch position 12), with full extraction still pending. Continue the remaining claimed sources in substantive checkpoints. Do not mark the full goal or proceedings container complete.
