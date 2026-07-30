---
title: "Cream of wheat"
type: ingredient
commodity: cream-of-wheat
label: "Cream of wheat"
aliases: ["Cream of wheat (farina), enriched, cooked", "farina", "cream of wheat"]
category: grain
tds_food:
  number: 52
  description: "Cream of wheat (farina), enriched, cooked"
  source: fda2022-tds-elements-fy2018-fy2020
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [4.6, 4.9]
    p95_ppb: 4.9
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  tAs:
    status: populated
    typical_ppb: [0, 3.8]
    p95_ppb: 4.3
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  Cr:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [3.0, 5.3]
    p95_ppb: 5.4
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-13
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 1
---

# Cream of wheat

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 5/10 HMTc analytes, total n=14 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | below-tier | 0 jurisdictions | only 0 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, tAs THIN, tHg THIN, Ni THIN, Cr THIN, U THIN | Pb: needs 1 more study(ies); Cd: needs 1 more study(ies); tAs: needs 1 more study(ies); tHg: needs 1 more study(ies); Ni: needs 1 more study(ies); Cr: needs 1 more study(ies); U: needs 1 more study(ies) |
| D6 Speciation | OK | iAs, tAs, tHg declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U |
| D8 Provenance integrity | GAP | 21 claims checked, 21 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming cream-of-wheat: fda2022-tds-elements-fy2018-fy2020 |
| D9 Mitigation | OK | 1 cited lever(s), 0 mitigation/ link(s) | — |
| D10 Regulatory coverage | OK | 1 rule link(s), 6 metal(s) covered | unmapped analytes: Ni, Cr, U |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, tAs, tHg, Ni, Cr, U; pairing 0 paired, 7 single, 0 unpaired | Pb: THIN, needs 1 more study(ies); Cd: THIN, needs 1 more study(ies); tAs: THIN, needs 1 more study(ies); tHg: THIN, needs 1 more study(ies); Ni: THIN, needs 1 more study(ies); Cr: THIN, needs 1 more study(ies); U: THIN, needs 1 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 1.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: brand-value |

<!-- /hmi-completeness-scorecard -->


This ingredient stub was created during the FDA FY2018-FY2020 Total Diet Study element-results ingest so future source ingests have a stable destination for this food matrix. FDA reports this item as TDS Food 52, "Cream of wheat (farina), enriched, cooked." [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Why this commodity accumulates heavy metals

Cream of wheat (farina) is a hot cereal made from the inner endosperm of durum or hard wheat, ground to a fine or medium granularity after the bran and germ have been removed. Because cadmium in wheat grain concentrates in the outer bran layers and the germ, this refined endosperm product carries substantially less cadmium than whole-wheat products such as whole-wheat flour or wheat bran. The refining step that defines farina is the principal reason this product sits at the lower end of wheat-derived metal risk.

Uranium shows consistent low-level detectability in the FDA TDS FY2018-FY2020 data for cream of wheat (n=3, TDS Food 52), ranging from 2.7 to 5.5 ppb with a median of 4.3 ppb [[sources/fda2022-tds-elements-fy2018-fy2020]]. Uranium in grain products reflects geogenic uranium in the soil from which the wheat was grown; wheat does not hyperaccumulate uranium but does take up trace amounts from soil water. The uranium signal in this product is consistent with background dietary uranium intake from grain consumption generally and is not specific to cream of wheat. Total arsenic shows episodic low-level detection (one sample at 4.8 ppb tAs), consistent with background wheat arsenic levels rather than rice-level accumulation. Cadmium is low but consistently detectable (4.6 to 4.9 ppb), and lead, chromium, nickel, and mercury are all at zero across the three TDS composites.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Cd | n=2 | 4.6–4.9 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| iAs | data gap | — | — | — |
| tAs | n=2 | 0–3.8 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| tHg | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Ni | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 0 | low | [[sources/fda2022-tds-elements-fy2018-fy2020\|1]] |
| Sn | data gap | — | — | — |
| U | n=2 | 3–5.3 | low | — |

## FDA TDS FY2018-FY2020 Evidence

The normalized row-level data for this TDS food is stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`, with per-food/per-analyte summaries in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. Concentrations are retained as FDA reported them, with the reporting-limit column preserved separately; reported zeroes are not rewritten as `<LOD` unless a source explicitly says to do so. [[sources/fda2022-tds-elements-fy2018-fy2020]]

## Routing

This node is linked from the ingredient index and the FDA TDS source routing table.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-fda-tds-occurrence -->
## FDA TDS FY2018-FY2020 Occurrence Values

<!-- audience: regulator, educator, app -->

FDA Total Diet Study FY2018-FY2020 reports prepared/composite-food concentration distributions for this ingredient as TDS food "Cream of wheat (farina), enriched, cooked" ([[sources/fda2022-tds-elements-fy2018-fy2020]]). Values are in ppb-equivalent on the basis FDA reported. The full sample-level data are stored in `data/evidence/fda_tds_fy2018_2020_element_results_samples.csv`; per-analyte distributions in `data/evidence/fda_tds_fy2018_2020_summary_by_food_analyte.csv`. These distributions count as one source under [[methodology/persistent-wiki-ingest-rule]] synthesis discipline; numerical values stay in body scratch until a second independent source is integrated.

| Metal | n | min | max | Schema |
| --- | ---: | ---: | ---: | --- |
| Cd | 3 | 4.6 | 4.9 | in profile |
| Cr | 3 | 0 | 0 | in profile |
| Ni | 3 | 0 | 0 | in profile |
| Pb | 3 | 0 | 0 | in profile |
| U | 3 | 2.7 | 5.5 | in profile |
| tAs | 3 | 0 | 4.8 | in profile |
| tHg | 3 | 0 | 0 | in profile |

<!-- END: hmi-fda-tds-occurrence -->

## Ranges by source, region, and variety

The FDA TDS FY2018-FY2020 dataset is the only structured occurrence source for cream of wheat currently integrated into this corpus (n=3 composites representing the US commercial market basket) [[sources/fda2022-tds-elements-fy2018-fy2020]]. Cd ranges from 4.6 to 4.9 ppb (median 4.7 ppb), U from 2.7 to 5.5 ppb (median 4.3 ppb), and tAs shows one detection at up to 4.8 ppb; all other analytes are at zero. The n=3 sample size is insufficient to characterize the upper tail of the distribution.

No peer-reviewed multi-region or multi-variety survey of heavy metals specifically in farina or cream of wheat is currently in this corpus. Wheat cadmium varies by growing region, soil type, and wheat variety, with some high-Cd soils (particularly in some European regions with elevated geogenic Cd or legacy phosphate application) producing wheat with higher Cd than US market averages. Uranium in wheat also varies geochemically with the uranium content of the source soils and irrigation water; regions with elevated groundwater uranium (parts of the western United States, South Asia) can produce grain with somewhat higher uranium content.

## Processing effects

The refining process for cream of wheat involves roller milling to separate the bran and germ from the endosperm, followed by granulation of the endosperm fraction. This single processing step is the dominant lever reducing cadmium relative to whole-wheat products, since Cd accumulates preferentially in the aleurone layer (bran) and germ. Studies of wheat milling fractions consistently show that bran carries several times more cadmium per gram than white flour or semolina.

Enrichment with iron, niacin, thiamine, and folic acid is standard for commercial enriched farina in the United States. These enrichments do not add cadmium, lead, or other toxic metals at levels relevant to this profile.

Cooking cream of wheat by boiling in water dilutes the dry-weight metal concentration as water is absorbed. The TDS values are for the cooked form and already reflect this dilution. Unlike rice, which releases inorganic arsenic into cooking water in a manner that is leveraged by rinsing, wheat products do not have documented cooking-water leaching of cadmium at levels that meaningfully reduce dietary exposure.

## Ingredient-derivative risk

Farina is used as a base for cream of wheat hot cereal and as an ingredient in some pasta-style products, puddings, and commercially fortified infant cereals. Wheat farina-based infant cereal products are a distinct regulatory and risk category from cream of wheat for adults: infant formula and infant cereal products specifically marketed for young children fall under stricter EU cadmium limits (0.040 mg/kg vs 0.10 mg/kg for general cereals). At the Cd levels observed in TDS cream of wheat (maximum 4.9 ppb), farina is well within even the stricter infant-food limit, though any infant-targeted use should be evaluated against the full analyte list including lead speciation.

## Mitigation options

### Sourcing levers

Sourcing wheat from origins with low background soil cadmium and low geogenic uranium is the primary lever for reducing Cd and U in the finished product. US commercial farina appears to be at low Cd levels in the TDS market basket [[sources/fda2022-tds-elements-fy2018-fy2020]], suggesting that current US supply-chain practices produce a low-Cd product. Monitoring supplier regions for soil uranium content is relevant given consistent uranium detectability in the TDS data.

### Agronomic levers

Liming acidic soils to raise pH above 6.5 reduces wheat cadmium uptake. Low-cadmium wheat cultivars are under active breeding development; selecting certified low-Cd cultivars where available is an emerging lever. These interventions are most relevant for regions with historically elevated soil Cd.

### Processing levers

Effective bran and germ removal through complete roller milling is the most important processing lever for cadmium reduction. Ensuring that the farina fraction does not contain residual bran contamination (cross-contamination from whole-wheat milling lines) maintains the low-Cd characteristic of the refined fraction.

### Formulation levers

_No quantified data on formulation substitution effects on cream of wheat metal content is in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Given the low and consistent Cd and U levels in the TDS data, routine spot-check testing of Cd, Pb, and U at incoming ingredient or finished-product level is appropriate for manufacturers using farina as a primary ingredient in products marketed to children. The small TDS sample size (n=3) means the upper distribution is uncharacterized; periodic more extensive lot-level testing is warranted until a larger evidence base is available.

### Packaging and storage levers

_No quantified data on packaging or storage effects on heavy metal content in cream of wheat is in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under the European Union [[regulations/eu2023-contaminants-maximum-levels]], the maximum level for cadmium in cereals is 0.10 mg/kg (100 ppb) wet weight for general cereal products and 0.040 mg/kg (40 ppb) for processed cereal-based foods specifically marketed for infants and young children. The maximum level for lead in cereals is 0.20 mg/kg (200 ppb). Codex Alimentarius (CXS 193-1995 and revisions) sets a cereal cadmium maximum of 0.10 mg/kg and lead maximum of 0.20 mg/kg. The FDA TDS Cd values of 4.6 to 4.9 ppb and Pb at zero are well within all applicable limits. No US federal maximum level for cadmium, lead, or uranium in cereal products (other than infant rice cereal for iAs) has been finalized as of 2026.

<!-- BEGIN: hmi-page-references -->
## References

The work cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. U.S. Food and Drug Administration (2022). *FY2018-FY2020 TDS Elements Analytical Results*. FDA Total Diet Study. [www.fda.gov](https://www.fda.gov/food/total-diet-study/total-diet-study-results). Government dataset, A-tier. [[sources/fda2022-tds-elements-fy2018-fy2020|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/fda2022-tds-elements-fy2018-fy2020\|FDA 2022]]. *FY2018-FY2020 TDS Elements Analytical Results*, FDA Total Diet Study | 2022 | Government dataset | FDA TDS FY2018–FY2020 multi-element occurrence distributions for Cream of wheat (farina), enriched, cooked (n=3); detectable concentrations for Cd, U, tAs |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | minor | Narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | minor | Narrative text revised |
| [8c4f23243](https://github.com/paleofoundation/heavymetalindex/commit/8c4f23243) | 2026-05-13 | major | Contamination-profile values revised |
<!-- END: hmi-page-history -->
