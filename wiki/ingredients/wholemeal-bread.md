---
title: "Wholemeal bread"
type: ingredient
commodity: wholemeal-bread
label: "Wholemeal bread"
aliases: [wholemeal bread]
category: grain-product
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [31.6, 65.5]
    p95_ppb: 70.8
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [11, 31]
    p95_ppb: 35.5
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  iAs:
    status: populated
    typical_ppb: [22.6, 25]
    p95_ppb: 25
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 1.7]
    p95_ppb: 2.1
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
    typical_ppb: [0.7, 6.0]
    p95_ppb: 6.4
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
sources: 0
---

# Wholemeal bread

<!-- hmi-completeness-scorecard -->

## Completeness scorecard

_Deterministic gap audit — no score is composite, no cell is LLM-judged. Each chip is re-derivable by re-running `tools/evidence/build-ingredient-scorecard.mjs`. `review:` residuals and missing data are worked autonomously via `data/evidence/ingredient-scorecard-review-flags.csv` and `wiki/completeness-gaps.md`._

| Dimension | Status | What's there (auditable counts) | What's missing |
|---|---|---|---|
| D1 Analyte coverage (tier: staple) | below-tier | 6/10 HMTc analytes, total n=6 | staple tier expects total n>=40; have 6 |
| D2 Regional coverage | below-tier | 0 jurisdictions | only 0 distinct jurisdiction(s) |
| D3 Anthropogenic evidence | GAP | no upstream/attribution sources | link a supply-chain/ hub page |
| D4 Background mechanism | GAP | section present, 0 drivers, 0 upstream source(s) | drivers[] empty; no upstream source to substantiate |
| D5 Pooling depth | THIN | Pb THIN, Cd THIN, iAs THIN, tHg THIN, Al THIN, Sn THIN | Pb: needs 2 more study(ies); Cd: needs 2 more study(ies); iAs: needs 2 more study(ies); tHg: needs 2 more study(ies); Al: needs 2 more study(ies); Sn: needs 2 more study(ies) |
| D6 Speciation | OK | iAs, tHg, tAs declared | — |
| D7 Basis declaration | GAP | 0/10 populated cells declare a basis token | 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| D8 Provenance integrity | GAP | 8 claims checked, 8 supported; 1 citations, 0 orphan, 1 foreign | 1 foreign citation(s) not naming wholemeal-bread: fsa2016-infant-food-formula-metals-survey |
| D9 Mitigation | GAP | 0 cited lever(s), 0 mitigation/ link(s) | section present but no source-cited lever |
| D10 Regulatory coverage | OK | 3 rule link(s), 6 metal(s) covered | unmapped analytes: Al |
| D11 Standards-readiness | NOT-READY | priority: Pb, Cd, iAs, tHg, Al, Sn; pairing 0 paired, 6 single, 0 unpaired | Pb: THIN, needs 2 more study(ies); Cd: THIN, needs 2 more study(ies); iAs: THIN, needs 2 more study(ies); tHg: THIN, needs 2 more study(ies); Al: THIN, needs 2 more study(ies); Sn: THIN, needs 2 more study(ies); basis: 10 populated cell(s) lack a basis token: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U; depth below staple bar |
| **Principle balance** | **flag** | consumer-protection 0.83, contamination-reduction 0.00, brand-value 0.00, legal-defensibility 0.38, scale 0.25 | spread 0.83 — starved: contamination-reduction |

<!-- /hmi-completeness-scorecard -->


FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Wholemeal bread is the British English designation for bread made from flour that retains the complete wheat kernel, including bran and germ, at a statutory extraction rate of 100 percent. The metal risk profile is therefore identical in mechanism to whole wheat bread as defined in US terminology, and the underlying accumulation pathway is the same: cadmium is taken up by wheat roots from soil solution via divalent cation transporters and partitions preferentially into the metabolically active bran fraction rather than the starchy endosperm. Because UK bread surveys distinguish wholemeal from brown and white grades, the FSA dietary intake literature on Cd exposure consistently identifies wholemeal bread as the highest-Cd bread grade available to consumers, with Cd concentrations per gram materially exceeding those of white or brown bread made from the same wheat source. Nickel follows the same bran-preferential distribution. Lead is poorly translocated into the grain interior across all extraction grades and remains low in finished bread regardless of bran content. The FSA/Fera FS102048 survey captured wholemeal bread as a discrete food composite in Table 6 of the study design, providing a baseline measurement point for the UK market ([[sources/fsa2016-infant-food-formula-metals-survey|1]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 31.6–65.5 | low | — |
| Cd | n=1 | 11–31 | low | — |
| iAs | n=1 | 22.6–25 | low | — |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–1.7 | low | — |
| Ni | data gap | — | — | — |
| Al | n=1 | 0–4292 | low | — |
| Cr | data gap | — | — | — |
| Sn | n=1 | 0.7–6 | low | — |
| U | data gap | — | — | — |

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Ranges by source, region, and variety

Cadmium in wholemeal bread reflects the soil Cd content and pH of the wheat's growing region. UK wheat supply chains draw on domestic production from England and Scotland as well as imported grain from continental Europe, Canada, and occasionally harder wheat sources; the Cd loading of UK wholemeal bread therefore reflects a blended grain supply rather than a single origin, and market-level surveys capture this supply-chain averaging. Continental European wheat, particularly durum from Mediterranean growing regions, is documented to carry higher Cd than soft wheat from northern Europe, and blending practices at the mill level mean that within-market variation in finished bread Cd can be meaningful. UK adults who consume wholemeal bread as a significant daily staple represent a dietary Cd intake pathway that EFSA dietary exposure assessments for cereal-based Cd have highlighted as a relevant contributor at the population level, particularly for high consumers. Geographic and variety data specific to UK wholemeal bread in the current corpus are limited to the FSA FS102048 survey composite values; additional range data for continental European and Australian wholemeal bread markets will be integrated as further sources are ingested.

## Processing effects

The defining processing characteristic of wholemeal bread is the retention of the entire wheat kernel in the flour, a statutory definition in the UK under the Bread and Flour Regulations 1998. This means the Cd, Ni, and other bran-associated metals in the finished bread cannot be reduced by changing milling parameters within the wholemeal category. Partial reformulation, blending wholemeal flour with refined white flour in a product sold as "wholemeal blend" or "50 percent wholemeal," reduces Cd content roughly proportionally to the blend fraction, but such a product can no longer be labeled as wholemeal under UK regulations. The fermentation process, whether commercial yeast or sourdough, does not remove cadmium from the bread matrix; sourdough's extended acidification may marginally reduce phytate-bound Cd bioaccessibility in the gastrointestinal tract, but the total metal concentration in the finished loaf is not altered. Baking temperatures are non-volatile for any of the relevant metals, so the oven step is equally neutral with respect to concentration.

## Ingredient-derivative risk

Wholemeal bread's risk profile generalises to other high-extraction wheat products made in the UK market, including wholemeal crackers, wholemeal pasta, wholemeal pitta, and high-bran breakfast cereals. Wheat bran sold separately, a common dietary supplement marketed for fiber content, concentrates the bran-fraction metals further than wholemeal flour because it removes the endosperm contribution entirely; Cd in isolated wheat bran is materially higher per gram than in wholemeal flour. Wholemeal wheat flour sold for home baking carries the same metal loading as the flour used in commercial wholemeal bread. Wholemeal flour used in mixed products, such as wholemeal flour in a biscuit or pastry application, contributes Cd to the finished product in proportion to the flour fraction.

## Mitigation options

### Sourcing levers

Grain procurement specifications that cap incoming wheat Cd are the highest-leverage sourcing action for wholemeal bread producers. Because wholemeal retains all fractions, low-Cd incoming grain directly produces low-Cd finished bread without any downstream reformulation. Preference for UK domestic soft wheat over imported durum or high-Cd continental sources, where agronomically and commercially feasible, reduces average input Cd. Suppliers with documented soil-pH monitoring and fertilizer management programs for Cd reduction provide additional assurance.

### Agronomic levers

Soil pH management above 6.5 suppresses Cd bioavailability in wheat-growing soils; this lever applies at the farm level and requires long-term programme investment by producers or their contracted growers. Phosphate fertilizer selection, preferring low-Cd phosphate rock sources, reduces cumulative cadmium input to soils used for cereal production. Low-Cd accumulator wheat cultivars have been identified in European breeding programmes; uptake of these varieties into UK commercial production is ongoing but not yet universal. _No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

### Processing levers

Within the wholemeal category, processing levers are limited because the bran must be retained. Blending wholemeal flour with refined white flour reduces Cd proportionally but changes the product's legal classification. Partial-wholemeal formulations at 70 to 85 percent extraction, sold without a wholemeal label, occupy a middle position that reduces Cd while retaining more dietary fibre and nutrients than fully refined white bread; this is a commercially available reformulation path in markets where the label does not require 100 percent whole grain.

### Formulation levers

For product developers not bound to the wholemeal label, reducing the wholemeal fraction and supplementing with fibre from lower-Cd sources (oat bran, pea fibre, inulin) can deliver comparable fibre content with reduced Cd input from wheat bran. This lever is primarily relevant for manufactured bread products where reformulation is feasible rather than for traditional bakery products positioned on wholemeal content.

### Testing and QC levers

Incoming wheat lot testing by ICP-MS or ICP-OES for Cd, with lot-level rejection or blending decisions before milling, is the most direct QC lever. Finished bread testing against the EU Cd limit of 0.10 mg/kg provides compliance confirmation. Surveillance frequency should reflect supply chain diversity; brokers blending multiple grain origins require higher surveillance rates than single-origin purchasers.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

European Union Regulation 2023/915 sets a Cd maximum level of 0.10 mg/kg (100 ppb) for bread and other cereal products, applicable on a wet-weight, as-placed-on-market basis. For wheat bran intended for direct consumption the EU Cd limit is 0.15 mg/kg (150 ppb), recognising the higher bran-fraction Cd inherent to the commodity. The Pb maximum level for bread and cereal products under the same regulation is 0.20 mg/kg (200 ppb). See [[regulations/eu2023-contaminants-maximum-levels]] and [[regulations/eu-2023-915-cadmium]]. The UK retained the EU maximum levels in domestic law following Brexit via the Contaminants in Food (England) Regulations and the Food Standards Agency's retained-EU-law framework; UK maximum levels for bread Cd and Pb are equivalent to the EU values as of 2026. Codex STAN 193-1995 sets a Cd ML of 0.10 mg/kg for wheat grain for direct consumption; see [[regulations/codex-cadmium-mls]]. No US federal maximum level exists for Cd or Pb in bread or cereal products outside the FDA Closer to Zero baby-food framework, which does not apply to adult bread categories.

## Sources

- [[sources/fsa2016-infant-food-formula-metals-survey]]

<!-- BEGIN: hmi-page-references -->
## References

The work cited in this page's text, numbered in the order the citations appear. Each entry links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document the record was built from. The wider set of sources routed to this page, including those not yet cited in the text, is listed under [Sources](#sources).

1. Food Standards Agency / Fera Science Ltd (2016). *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*. UK Food Standards Agency report FS102048. [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey). Government report, A-tier. [[sources/fsa2016-infant-food-formula-metals-survey|Source record]]
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [1ccaea44e](https://github.com/paleofoundation/heavymetalindex/commit/1ccaea44e) | 2026-06-14 | major | Contamination-profile values revised; narrative text revised |
| [df0616078](https://github.com/paleofoundation/heavymetalindex/commit/df0616078) | 2026-06-11 | major | 1 section added; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [fe6ad96e1](https://github.com/paleofoundation/heavymetalindex/commit/fe6ad96e1) | 2026-05-17 | major | Contamination-profile values revised; narrative text revised |
| [19891512a](https://github.com/paleofoundation/heavymetalindex/commit/19891512a) | 2026-05-13 | major | Contamination-profile values revised |
<!-- END: hmi-page-history -->
