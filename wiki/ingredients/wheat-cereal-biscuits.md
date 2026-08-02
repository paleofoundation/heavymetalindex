---
title: "Wheat cereal biscuits"
type: ingredient
commodity: wheat-cereal-biscuits
label: "Wheat cereal biscuits"
aliases: [wheat cereal biscuit]
category: grain-product
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 15.4]
    p95_ppb: 20.5
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 30]
    p95_ppb: 42
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [0, 230]
    p95_ppb: 260
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 1]
    p95_ppb: 2.3
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [0, 4292]
    p95_ppb: 6160
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 67.3]
    p95_ppb: 267
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-12
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-13
sources: 1
---

# Wheat cereal biscuits

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: unset) | tier-unset | 6/10 HMTc analytes, total n=6 | consumption tier unset; depth bar uncheckable |
| D2 Regional coverage | below-tier | 1 jurisdictions, top IQ 100% | only 1 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, iAs THIN, tHg THIN, Al THIN, Sn THIN | Pb: needs 2 more study(ies); Cd: needs 2 more study(ies); iAs: needs 2 more study(ies); tHg: needs 2 more study(ies); Al: needs 2 more study(ies); Sn: needs 2 more study(ies) |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 10 claims checked, 10 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming wheat-cereal-biscuits: fsa2016-infant-food-formula-metals-survey |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 4 rule link(s), 6 metal(s) covered | unmapped analytes: Al |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tHg, Al, Sn; pairing 0 paired, 6 single, 0 unpaired | Pb: THIN, needs 2 more study(ies); Cd: THIN, needs 2 more study(ies); iAs: THIN, needs 2 more study(ies); tHg: THIN, needs 2 more study(ies); Al: THIN, needs 2 more study(ies); Sn: THIN, needs 2 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; consumption tier unset (depth bar uncheckable) |
| **Principle balance** | **flag** | consumer-protection 1.00, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 1.00 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Wheat cereal biscuits (typified by the Weetabix format) are whole-wheat products that retain the bran and germ fractions of the wheat grain. This is the defining characteristic for metal accumulation risk: cadmium partitions preferentially to the bran and germ rather than the starchy endosperm, so whole-wheat products consistently carry higher Cd concentrations than refined wheat products made from the same grain. The bran-to-endosperm Cd concentration ratio in wheat is approximately two-fold, as documented in EFSA's 2009 cadmium opinion, which reports mean Cd in wheat bran and germ of 0.065 mg/kg compared to 0.030 mg/kg for wheat grain and flour overall. Nickel, manganese, and other transition metals also partition to the bran fraction. In addition to whole-wheat base metal inheritance, commercial wheat cereal biscuits commonly contain vitamin and mineral fortification premixes; the iron, folic acid, and B-vitamin additions in standard fortification are of food-grade purity and contribute negligible metals, but this ingredient pathway should be verified for any specific formulation. Baking does not remove cadmium or other heavy metals; the final biscuit form carries essentially the same metal concentration on a dry-weight basis as the whole-wheat ingredient from which it is made.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0–15.4 | low | — |
| Cd | n=1 | 0–30 | low | — |
| iAs | n=1 | 0–230 | low | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–1 | low | — |
| Ni | data gap | — | — | — |
| Al | n=1 | 0–4292 | low | — |
| Cr | data gap | — | — | — |
| Sn | n=1 | 0–67.3 | low | — |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

FSA/Fera FS102048 (2016) includes wheat cereal biscuits in Table 6 of the UK infant and child food survey, providing the single current source for this product ([[sources/fsa2016-infant-food-formula-metals-survey]]). Quantified values remain in progress until the Table 6 structured data is fully parsed with censoring flags preserved. Geographic variation is expected to follow wheat grain sourcing patterns: durum and hard wheat varieties from high-Cd growing regions (parts of Southern Europe, North Africa) will produce higher-Cd biscuits than biscuits made from lower-Cd wheat varieties grown in Northern Europe or the UK. Most major UK and European wheat cereal biscuit brands source wheat domestically or from established European agricultural regions where Cd concentrations are within typical temperate-zone ranges.

## Processing effects

The milling step that produces whole-wheat flour for biscuit manufacture retains the bran and germ fractions, preserving their higher metal concentrations relative to refined flour. If wheat cereal biscuit manufacturers used refined white flour instead of whole wheat, Cd concentrations would be approximately halved. Toasting and baking at high temperatures (typical oven temperatures for biscuit production are 200 to 250 degrees Celsius) do not volatilise cadmium, lead, or other heavy metals under food-processing conditions; the metal content of the finished biscuit equals that of the flour and other dry ingredients minus any negligible transfer to the baking surface. Water addition during dough mixing and subsequent drying during baking bring the finished product back to the low-moisture state of the dry ingredients, so concentrations on a dry-weight basis are preserved through processing.

## Ingredient-derivative risk

Wheat cereal biscuits are themselves a derivative of whole-wheat flour. The primary downstream risk gradient is between whole-wheat products (biscuits, whole-grain crackers, bran-enriched breads) and refined-wheat products (white bread, pasta from refined semolina); the biscuit format is at the higher end of the wheat-product Cd gradient because it preserves the bran fraction. Crushed wheat cereal biscuits are used as a porridge ingredient, a coating for other foods, and occasionally as a breadcrumb substitute; in all these applications the metal burden follows the mass fraction of biscuit in the finished dish.

## Mitigation options

### Sourcing levers

Sourcing whole-wheat flour from varieties and growing regions with documented lower Cd is the primary lever. Durum wheat from high-Cd soils (parts of North Africa, Mediterranean basin) should be avoided in favour of bread wheats from lower-Cd European growing regions. Supplier wheat testing for Cd at commodity intake is the most direct quality gate.

### Agronomic levers

Cultivar selection (preferring non-accumulator bread wheat varieties over durum or other high-accumulator types) and supplier-side soil pH management and zinc fertilisation reduce Cd in the grain before it reaches the mill. These levers operate at the wheat-growing level and require supplier specification.

### Processing levers

Substituting whole-wheat flour with partially refined flour reduces Cd but changes the product definition (a whole-grain cereal biscuit is defined by its bran content). For products where partial bran reduction is acceptable, milling to a higher extraction rate than standard whole wheat achieves a Cd reduction proportional to the fraction of bran removed.

### Formulation levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Testing and QC levers

Lot-level ICP-MS testing of incoming whole-wheat flour for Cd is the most cost-effective quality gate for wheat cereal biscuit manufacturers. The EU ML of 0.10 mg/kg for Cd in cereals provides the operative threshold for supplier release criteria.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

The European Union sets a maximum level for Cd in cereal-based products under [[regulations/eu-2023-915-cadmium]] and [[regulations/eu2023-contaminants-maximum-levels]]: 0.10 mg/kg (100 ppb) for cereal products generally, with the caveat that wheat bran and wheat gluten carry a higher specific ML of 0.15 mg/kg under the 2023 regulation revisions. Wheat cereal biscuits, as a whole-wheat cereal product, fall under the general 0.10 mg/kg Cd limit. For Pb in cereals, the EU limit is 0.20 mg/kg (200 ppb). [[regulations/codex-cadmium-mls]] provides the international Codex Cd ML for cereal grains. [[regulations/fda-closer-to-zero]] Pb guidance (20 ppb for dry infant cereals) applies when wheat cereal biscuits are labelled or sold as infant or toddler food.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/taher2023-biscuits-iraqi-markets\|Taher et al. 2023]]. *Assessment of Heavy Metals in Biscuit Samples Available in Iraqi Markets*, Biological Trace Element Research | 2023 | Peer-reviewed | IQ Pb, Cd occurrence in Biscuit products marketed for infants (stated age range 6–24 months) collected from local markets in Iraq, July 2023,... (n=13) |
<!-- END: hmi-source-legend -->

## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [8707c66](https://github.com/paleofoundation/heavymetalindex/commit/8707c66) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84e](https://github.com/paleofoundation/heavymetalindex/commit/140e84e) | 2026-06-03 | refresh manual fetch generated outputs |
| [315a7b8](https://github.com/paleofoundation/heavymetalindex/commit/315a7b8) | 2026-06-02 | chore: refresh generated outputs after June 2 ingest |
| [566c7b2](https://github.com/paleofoundation/heavymetalindex/commit/566c7b2) | 2026-06-02 | codex sprint 2026-06-02 10:03: end-of-fire cleanup |
| [c3909aa](https://github.com/paleofoundation/heavymetalindex/commit/c3909aa) | 2026-06-02 | codex sprint 2026-06-02 01:35: end-of-fire cleanup |
<!-- END: hmi-page-history -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [aca5e2155](https://github.com/paleofoundation/heavymetalindex/commit/aca5e2155) | 2026-06-09 | major | 1 source removed; 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
<!-- END: hmi-page-history -->
