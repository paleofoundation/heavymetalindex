# Checkpoint 17 release review

Reviewed 2026-09-11, read-only, `/private/tmp/hmi-drain-release`, branch `codex/library-drain-bulk-17-20260911`. Comparison baseline is release HEAD (`origin/main` base supplied by parent), plus the 53-path edit plan and 94-section manifest. Parent's generators were running during inspection; this is an intermediate release snapshot, not proof that their eventual outputs passed.

## Verdict

**PASS — bounded release-content review.** The earlier generated-route and description defects were repaired and independently rechecked, including the final Esswein qualification. The intended source, value and authored-route changes pass preservation checks. The parent reports all eight shared commands passed; final raw render/check, artifact scoping and the substantive scoped commit remain separate release-completion gates. This review does not certify a completed commit or the full Library drain. Earlier intermediate findings below are retained as audit history and are superseded by the final verification.

## Preservation and coverage checks — pass

- All **94 planned authored blocks**, across **27 destination pages**, are present verbatim in the release. Comparing the planned destination bodies with HEAD found no removed nonblank earlier lines except updated timestamps and explicitly repointed Ibikunle duplicate references. Earlier/unrelated authored destination evidence is preserved.
- All **17 source drafts** are present, and each packet `draft_markdown` is included in its canonical page (whitespace-normalized comparison). This includes seven existing-page rewrites and ten new source pages. The full authored source bodies were not replaced by abbreviated staging summaries.
- The existing **4,804 value records** are all retained, unchanged as JSON objects. There are **5,307 additions**: **5,294 observations plus 13 qualitative claims**. All original fields on all 5,294 packet observations survive compilation unchanged, apart from the intended `review_state: needs_review → reviewed`. No observation is missing.
- The packet declares **99 distinct source/destination routes**. The destination-coverage artifact contains exactly the same 99 pairs, with no missing or extra pair, and every destination exists and contains its source citation.
- Only the verified same-work Ibikunle legacy source page is deleted. No Markdown references to the deleted old citekey remain. However, repointing its legacy rows does not repair their incorrect descriptions; see below.
- The two SETAC abstracts remain distinct sources despite their shared proceedings-container hash. Full-container coverage remains partial. The current status honestly records 17 reviewed drafts, 198 claimed files, 4,107 files in overall scope, zero batch-completed ingests/commits pending gates. This checkpoint is not the full drain.

## Maurya muscle-route correction — pass

Independently checked the parent's mapping adjustment: exactly **70** records use `product_matrix: fish-freshwater`; all are Table 4 muscle mean/SD records, retain `source_matrix: fish-freshwater-muscle`, `tissue: muscle`, fish-species identity and `basis_conflict: true`, and have `eligible_for_empirical_synthesis: false`. No water, gill, liver or modeled-risk observations were included in that product-key adjustment. Source quantities remain unchanged.

## Authored scientific routing — pass

The added product and ingredient blocks distinguish finished pet foods, freshwater muscle, feed materials and environmental matrices. Du preprint rows remain broad product context and a shared cohort with the later publication. Kim remains mg/Mcal, without invented inverse energy conversion or ingredient contamination claims. Maurya muscle basis uncertainty is explicit. Treatment studies do not become baby-wipe/food occurrence; Cr(VI) signal loss does not become measured Cr(III) formation or total-Cr removal. Total As/Hg and unspeciated Cr are not promoted to iAs/MeHg/Cr(VI) in the new blocks. Lab nominal doses, models, chart approximations and duplicate time points remain qualified. No new brand contamination ranking or HMTc threshold arithmetic was identified in the inspected authored additions.

## Blocking issue — stale generated literature tables

The following incorrect references remained in the live release snapshot after source metadata and authored routes were repaired. These rows still assert old titles/authors/years, US geography, unrelated analytes or occurrence in inappropriate products. The generated tables need reconciliation with the corrected canonical source identities and scope; preserve unrelated rows.

Product pages with unintended source references:

| Source | Remaining inappropriate product references |
|---|---|
| Ibikunle 2025 nanotubes | `fish-marine-non-predatory` |
| Esswein 2011 (`skin2010` stable key) | `fish-marine-predatory`, `baby-wipes` |
| Ferguson 2018 (`authors2017` stable key) | `baby-wipes`, `fish-marine-non-predatory` |
| Agwaramgbo 2012 extracts | `seaweed-kelp-foods`, `root-vegetable-purees`, `baby-wipes`, `fish-marine-non-predatory` |
| Boudia 2019 soils | `root-vegetable-purees`, `baby-wipes` |
| Du 2024 pet-food preprint | `fish-marine-predatory`, `fish-marine-non-predatory` |
| Maurya 2019 freshwater fish | `fish-marine-predatory`, `canned-seafood`, `shellfish`, `fish-marine-non-predatory` |

Examples inspected in full context:

- `wiki/products/fish-marine-non-predatory.md` still labels the repointed Ibikunle source “authors 2025”, “OPEN Removal of hexavalent chromium”, and “US Pb, Ni, Al, Cr occurrence”. The citekey was fixed but the scientific claim was not.
- `wiki/products/baby-wipes.md` still labels Esswein “Skin 2010” with a truncated title and “US Cd, Pb, tAs, Ni, Cr occurrence”. The actual study supports controlled lead-removal context, not retail wipe contamination.

Inappropriate species/metal references also remain: Ferguson on `arsenic-inorganic`/`mercury-total` and unrelated Ni/Cr/Cd/Al pages; Du on `arsenic-inorganic`/`mercury-methyl` and unrelated Ni/Al/Sn pages; Maurya on Ni/Al/Hg pages; Ibikunle on Pb/Ni/Al pages; Esswein on Ni/Cr/Cd/As pages; Agwaramgbo on Cr/As/Al pages. Generic-versus-total As/Hg alias destinations are not inherently errors, but any inherited row there must carry correct analyte, identity and source scope.

## Required next action

Complete generated-route cleanup and recheck that the 17 sources occur on only scientifically supported product/species surfaces, with corrected descriptions. Then finish all shared gates and inspect the final diff before one scoped commit. The auditor did not run generators or modify repository files.

## Post-prebuild recheck

Prebuild removed every listed inappropriate product/source pair and unsupported species-page pair. Legitimate generic/total-metal alias routes remain. **Fourteen existing generated row descriptions still carry obsolete scientific metadata**, despite repaired source frontmatter and correct authored sections. All are in `## Sources`; the telltale text is `Not mechanically resolved from the PDF` following the obsolete US/analyte occurrence summary:

- Boudia: `wiki/metals/nickel.md:987`, `chromium.md:919`, `cadmium.md:1723`, `lead.md:1554`, `arsenic-total.md:1022`.
- Du preprint: `wiki/metals/chromium.md:447`, `cadmium.md:857`, `lead.md:754`, `mercury-total.md:502`.
- Maurya: `wiki/metals/chromium.md:922`, `cadmium.md:1725`, `lead.md:1556`.
- Agwaramgbo: `wiki/metals/lead.md:1903`.
- Esswein: `wiki/metals/lead.md:1943`.

Line numbers describe the inspected snapshot and may move after regeneration. Match source citekeys and the `## Sources` section, not line numbers alone. These are the sole currently identified blocking content defects; replace their descriptions using corrected source-specific geography, analytes and experimental/environmental scope. Preserve unrelated rows. Full final gates remain outside this read-only audit.

### Post-prebuild preservation check

Rechecked all changed product, metal, ingredient, health, mitigation and supply-chain pages after stripping matching generated BEGIN/END blocks. Removals outside generated content were limited to two category-count descriptions and an empty Sources heading; no earlier authored evidence was lost. All 94 new blocks remain. An exact JSON-object **multiset** comparison verifies all 4,804 baseline rows, including pre-existing duplicate IDs, remain unchanged, with exactly 5,307 additions.

## Maintained description-generator repair review

The repair adds `data/evidence/source-legend-descriptions.json` as an audited input to `tools/autonomy/populate-source-legends.mjs`. The register contains exactly the 14 previously identified page/source pairs (six metal pages, five sources). Each corresponding row inside the generated `hmi-source-legend` markers matches its registered description, and the obsolete `Not mechanically resolved` string is absent for all 17 checkpoint source keys across product, metal, ingredient, health, mitigation and supply-chain pages.

The bounded code change validates nonempty single-line descriptions without pipes, selects overrides by exact page and citekey, and replaces only the final description column inside source-legend markers. Non-target populated rows retain the existing behavior. Descriptions therefore survive regeneration without handwritten edits to generated wiki blocks.

Read-only verification command: `node tools/autonomy/populate-source-legends.mjs --dry-run`. Result: 815 pages scanned, **0 pages modified**, 0 cells filled. The “cells repaired” counter reports 14 because the tool processes 14 overrides even when their rendered text is already identical; this does not indicate non-idempotent file output. No write-mode generator was run by the auditor.

Boudia now has Algerian soil context without Sn or invented speciation; Du has China pet-food, total-element and shared-cohort qualification; Maurya has Indian freshwater, basis conflict and synthesis-exclusion qualification; Agwaramgbo has laboratory aqueous treatment without retail-food/wipe occurrence. One final wording refinement was requested for Esswein: replace “supporting dermal-to-oral exposure prevention” with explicit mechanistic-transfer context and state that ingestion/clinical outcomes were not measured. The experiment measured sampled residual lead, not prevention outcomes.

## Final verification — PASS

Independently re-read the source-description input and regenerated lead-page row. Esswein now reads: “Controlled hand-cleaning experiments after lead loading, providing mechanistic context for reducing dermal-to-oral transfer; ingestion and clinical outcomes were not measured.” Exactly one source row exists and its final column matches the registered text. This resolves the last wording concern.

All previously reported content defects are resolved. **PASS** applies to the bounded checkpoint content: 17 reviewed sources, 5,307 added records and 99 intended routes, preserving the previously checked baseline evidence. The parent reports all eight shared commands passed, including build/postbuild; those runtime results are parent-reported, not independently rerun by this read-only auditor. Final raw Quartz render/check, exclusion of unrelated generator fanout, and the substantive scoped commit still require the parent's completion verification. No full-drain or post-commit completion claim is made here.
