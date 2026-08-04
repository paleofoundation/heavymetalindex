---
title: "Pasta"
type: ingredient
commodity: pasta
label: "Pasta"
aliases: [pasta]
category: grain-product
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 41]
    p95_ppb: 84
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Cd:
    status: populated
    typical_ppb: [0, 21.8]
    p95_ppb: 39.8
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  tHg:
    status: populated
    typical_ppb: [0, 3.3]
    p95_ppb: 17.9
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-13
  Ni:
    status: populated
    typical_ppb: [260, 1040]
    p95_ppb: 1790
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [873.4, 4994]
    p95_ppb: 5503
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
    typical_ppb: [6.9, 480.9]
    p95_ppb: 909.4
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
updated: 2026-05-16
sources: 8
---

# Pasta

FSA/Fera measured this ingredient or non-infant-specific food composite in Table 6 of the FS102048 survey. Exact concentration values remain in progress until Table 6 is parsed into structured ingredient rows with less-than and semi-quantitative flags preserved. [[sources/fsa2016-infant-food-formula-metals-survey]]

## Why this commodity accumulates heavy metals

Pasta is manufactured primarily from durum wheat semolina (Triticum turgidum subsp. durum), a hard wheat variety that accumulates cadmium in grain at systematically higher concentrations than bread wheat (Triticum aestivum). The mechanistic basis lies in the allelic composition of the HMA3 gene (Heavy Metal ATPase 3), a vacuolar sequestration transporter that controls cadmium loading into the grain endosperm. Durum wheat lacks the high-affinity TdHMA3-B1 allele variant that in bread wheat retains cadmium in root vacuoles and prevents translocation to the shoot and grain; as a result, durum wheat grain accumulates Cd that would otherwise be held in root tissue ([[sources/maccaferri2019-durum-wheat-genome-cadmium]]). This is a species-level genetic difference, not a soil or management artefact, and it means that all pasta manufactured from conventional durum semolina carries an inherent Cd burden relative to wheat-flour products made from bread wheat.

Semolina is produced by milling durum wheat to separate the starchy endosperm from the outer bran layers and germ. Because cadmium in wheat grain is concentrated in the bran and aleurone layers to a degree, this milling step partially reduces the Cd content relative to whole-grain durum. However, because durum grain baseline Cd concentrations are already elevated above bread wheat, semolina Cd still exceeds equivalent bread-wheat white flour values in practice. Lead contamination in pasta is primarily a function of soil lead in the wheat-producing region and any processing or packaging contribution; it does not share the genetic amplification mechanism that drives Cd in durum.

<!-- BEGIN: hmi-completeness-scorecard -->
## Completeness scorecard

A deterministic gap audit. No status is a composite score and no cell is judged; every one is a function of this page's committed frontmatter and re-derives when the scorecard is rebuilt. This is the page saying where it is thin before it is read.

| Dimension | Status | What is there | What is missing |
| --- | --- | --- | --- |
| Analyte coverage | OK | 10 of 10 profiled analytes populated | — |
| Pooling depth | THIN | 7 below 5 | below pooling depth: Pb, Cd, iAs, tHg, Ni, Al, Sn |
| Speciation transparency | OK | iAs, tHg, tAs | — |
| Basis declaration | GAP | 0 of 10 populated analytes declare a basis | no wet/dry basis declared: Pb, Cd, iAs, tHg, Ni, Al, Cr, Sn, tAs, U |
| Review recency | OK | 10 of 10 carry last_reviewed; oldest 2026-05-12 | — |
| Mitigation evidence | OK | mitigation section present | — |
| Regulatory coverage | GAP | — | no instrument in the register names this commodity by matrix |

OK means the dimension's threshold is met, THIN means data exists but sits below pooling depth, and GAP means a required declaration or link is absent. A page can be heavily cited and still carry gaps.

Not computed here: consumption-weighted depth, regional coverage, and the split between anthropogenic and background contamination evidence. Those need a curated consumption tier and a partitioned upstream source set, neither of which is in the repository yet. They are named rather than omitted, because a scorecard that leaves a dimension out reads as that dimension being fine.
<!-- END: hmi-completeness-scorecard -->

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=1 | 0–41 | low | [[sources/fera2015-uk-tds-metals\|1]] |
| Cd | n=2 | 0–21.8 | low | [[sources/maccaferri2019-durum-wheat-genome-cadmium\|1]], [[sources/fera2015-uk-tds-metals\|2]] |
| iAs | n=1 | 0 | low | [[sources/fera2015-uk-tds-metals\|1]] |
| tAs | data gap | — | — | — |
| tHg | n=1 | 0–3.3 | low | [[sources/fera2015-uk-tds-metals\|1]] |
| Ni | n=2 | 260–1040 | low | [[sources/mania2020-nickel-cereal-grains-poland\|1]], [[sources/fera2015-uk-tds-metals\|2]] |
| Al | n=1 | 873.4–4994 | low | [[sources/fera2015-uk-tds-metals\|1]] |
| Cr | data gap | — | — | — |
| Sn | n=1 | 6.9–480.9 | low | [[sources/fera2015-uk-tds-metals\|1]] |
| U | data gap | — | — | — |

## Ranges by source, region, and variety

Durum wheat Cd concentrations vary substantially by origin, reflecting differences in soil cadmium levels and cultivar composition. European production regions show a north-to-south gradient, with Southern European durum from Italy, Greece, and Turkey showing more variable Cd than Northern European production. Moroccan and other North African durum, grown on soils that can have elevated cadmium from parent rock geology, contributes to supply chains where the sourcing provenance is not controlled by contract. Canadian durum from the Prairie provinces is generally lower in Cd than Mediterranean counterparts, reflecting lower baseline soil Cd in Canadian prairie soils, though Canadian production is predominantly for domestic and North American markets. A comprehensive multi-origin comparison of semolina Cd is not available in the current corpus but is documented in the broader durum wheat literature referenced by [[sources/maccaferri2019-durum-wheat-genome-cadmium]].

Within durum cultivar populations, the presence or absence of favorable HMA3 alleles creates within-species variance in grain Cd accumulation. Cultivar selection programmes oriented toward low-Cd durum exist in several European breeding programs, and their commercial-scale uptake would be expected to reduce semolina Cd over time as adoption spreads.

## Processing effects

The milling of durum wheat to semolina is the most consequential processing step for cadmium. Bran and aleurone layers removed during milling carry higher Cd concentrations than the starchy endosperm; whole-grain durum pasta therefore has higher Cd than refined semolina pasta. This relationship is the inverse of the nutritional argument (whole-grain pasta is nutritionally richer but higher in Cd), and product-category pages should note this trade-off.

Cooking pasta in water leaches a fraction of water-soluble metals, primarily cadmium, into the cooking water. Discarding pasta cooking water (as opposed to retaining it for sauces) provides a modest reduction in dietary Cd exposure from this food. The magnitude of this leaching effect depends on cooking time, water volume relative to pasta mass, and particle size; no quantified leaching factor specific to pasta is available in the current corpus.

Drying, the final manufacturing step for shelf-stable pasta, does not affect metal concentrations on a dry-weight basis but changes the concentration on a wet-weight basis (fresh pasta versus dry pasta comparisons must account for this). Fortification additions (iron, B-vitamins) used in enriched pasta do not introduce heavy metal contamination at regulated addition levels.

## Ingredient-derivative risk

Pasta as a finished product is the primary form on this page. Whole-grain pasta (retaining bran) elevates Cd relative to refined semolina pasta. Pasta flour (re-ground dried pasta) and pasta flakes used as binders or extenders in processed foods carry the same Cd burden as the semolina of origin. Fresh pasta, which typically uses a blend of durum semolina and egg, does not dilute the semolina Cd contribution significantly. Gluten-free pasta substitutes based on rice, corn, or legume flours have different metal profiles and are not addressed here.

## Mitigation options

### Sourcing levers

Specifying durum wheat origin is the primary lever: preferring Canadian Prairie durum or verified low-Cd Italian cultivars over unspecified North African or Eastern Mediterranean sourcing reduces the baseline Cd in semolina. Requiring Cd specifications from semolina suppliers and testing incoming lots is the supply-chain verification mechanism for this lever.

### Agronomic levers

Liming of acidic durum-growing soils to pH above 6.5 reduces cadmium bioavailability and is a documented lever in European wheat production systems. Cultivar selection favouring low-Cd HMA3 allele variants is emerging as a plant-breeding lever for the longer term; these varieties are not yet widely available commercially but represent the highest-impact agronomic intervention if adopted at scale.

### Processing levers

Milling to remove bran and aleurone (producing refined semolina rather than whole-grain flour) reduces Cd in the finished pasta. Advising consumers or food-service operators to discard pasta cooking water provides a modest additional reduction in dietary Cd exposure.

### Formulation levers

Blending durum semolina with bread-wheat flour (which accumulates less Cd) reduces per-serving Cd, though at the cost of changing the pasta's texture characteristics. In processed products where pasta is a minor ingredient by weight, the Cd contribution from pasta is proportional to its inclusion level.

### Testing and QC levers

Lot-level ICP-MS testing of incoming semolina with Cd acceptance criteria is the standard QA approach for manufacturers selling into EU markets where the 0.10 mg/kg ML for Cd in semolina applies. Third-party laboratory verification of supplier Cd results is advisable when semolina origin includes high-variability regions.

### Packaging and storage levers

_No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested._

## Regulatory limits that apply

Under EU Regulation (EU) 2023/915 ([[regulations/eu2023-contaminants-maximum-levels]]), the maximum level for cadmium in cereals is 0.10 mg/kg fresh weight for cereal-based products including pasta. The parallel EU limit for lead in cereal-based foods for general consumption is 0.20 mg/kg. The specific EU Cd ML for durum wheat grain (not semolina) is 0.20 mg/kg, reflecting that the ML is applied at the grain stage before milling removes bran; the semolina/pasta ML (0.10 mg/kg) applies after milling ([[regulations/eu-2023-915-cadmium]]).

Codex Alimentarius has set Cd maximum levels for cereal grains; the current Codex Cd ML for cereal grains generally is 0.10 mg/kg, with a higher ML of 0.40 mg/kg for wheat grain specifically in some Codex frameworks ([[regulations/codex-cadmium-mls]]). No specific US FDA action level for Cd in pasta applies under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]), which has focused on infant-specific food categories rather than general cereal products.

## Routing

This node is linked from the ingredient index and source routing list.

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/fsa2016-infant-food-formula-metals-survey|Survey of metals in commercial infant foods, infant formula and non-infant specific foods]]<span class="hmi-ref-meta">Food Standards Agency / Fera Science Ltd · UK Food Standards Agency report FS102048 · 2016 · [www.food.gov.uk](https://www.food.gov.uk/research/chemical-hazards-in-food-and-feed/infant-metals-survey)</span><span class="hmi-ref-tag">Government</span>
2. [[sources/maccaferri2019-durum-wheat-genome-cadmium|A high-density, SNP-based consensus map of tetraploid wheat as a bridge to integrate durum and bread wheat genomics and breeding]]<span class="hmi-ref-meta">Maccaferri M, Harris NS, Twardziok SO, Pasam RK, Gundlach H, Spannagl M, et al. · Nature Genetics · 2019 · [doi.org/10.1038/s41588-019-0381-3](https://doi.org/10.1038/s41588-019-0381-3)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/masri2025-toxicant-foods-california\|Masri et al. 2025]]. *Assessing Dietary Consumption of Toxicant-Laden Foods and Beverages by Age and Ethnicity in California: Implications for Proposition 65*, Nutrients | 2025 | Peer-reviewed | US Pb, Cd, tAs, MeHg occurrence in Cross-sectional online dietary survey (Qualtrics) administered between 1 March and 15 June 2023 to Southern California residents (adults... (n=186) |
| 2 | [[sources/salaheldin2025-multimatrix-foods-egypt\|Salahel et al. 2025]]. *Assessment of toxic heavy metals in commonly consumed foods in Egypt and their implications for public health and safety*, Scientific Reports | 2025 | Peer-reviewed | EG Pb, Cd, Cr, tAs occurrence in Fifty-four food and beverage samples collected January-December 2022 from local markets in Qena Governorate, southern Egypt: beverages (n=20;... (n=54) |
| 3 | [[sources/jakkielska2023-noodles-toxic-metals\|Jakkielska et al. 2023]]. *Risk profiling of exposures to potentially toxic metals PTM(s) through noodles consumption. A case study of human health risk assessment*, Acta Universitatis Cibiniensis Series E: Food Technology | 2023 | Peer-reviewed | PL Pb, Cd, tAs, iAs, tHg occurrence in Twenty commercially available 500 g noodle/pasta products collected from markets in Poland, covering wheat, durum wheat, corn-flour gluten-free,... (n=20) |
| 4 | [[sources/kongta2023-noodle-products-aluminum-thailand\|Kongta et al. 2023]]. *Assessment of Exposure to Aluminum through Consumption of Noodle Products*, Foods | 2023 | Peer-reviewed | TH Al occurrence in Twenty samples each of rice stick noodles, egg noodles, wide rice noodles, and Thai rice noodles collected from... (n=80) |
| 5 | [[sources/mania2020-nickel-cereal-grains-poland\|Mania et al. 2020]]. *Assessment of exposure to nickel intake with selected cereal grains and cereal-based products*, Roczniki Panstwowego Zakladu Higieny (Annals of the National Institute of Hygiene) | 2020 | Peer-reviewed | Ni in 11 Polish-market pasta samples within a cereal-grain and grain-product Ni occurrence survey |
| 6 | [[sources/maccaferri2019-durum-wheat-genome-cadmium\|Maccaferri et al. 2019]]. *A high-density, SNP-based consensus map of tetraploid wheat as a bridge to integrate durum and bread wheat genomics and breeding*, Nature Genetics | 2019 | Peer-reviewed | Durum wheat reference genome identifying TdHMA3-B1 gene as the primary locus controlling grain Cd accumulation; molecular basis for cultivar-level Cd variance relevant to pasta ingredients |
| 7 | [[sources/stahl2017-aluminum-food-contact-part1\|Stahl et al. 2017]]. *Migration of aluminum from food contact materials to food - a health risk for consumers? Part I of III: exposure to aluminum, release of aluminum, tolerable weekly intake (TWI), toxicological effects of aluminum, study design, and methods*, Environmental Sciences Europe | 2017 | Peer-reviewed | DE/EU Al occurrence in Hessian State Laboratory aluminum results for 1,825 foodstuff samples across 30 product groups, plus Part I study-design context... (n=1825) |
| 8 | [[sources/fera2015-uk-tds-metals\|Baxter et al. 2015]]. *Total Diet Study of metals and other elements in food*, Food and Environment Research Agency report for the UK Food Standards Agency, Fera report 15/06, project FS102081 | 2015 | Government report | UK TDS as-consumed pasta concentrations for Pb, Cd, iAs, tAs, tHg, Ni, Al, Cr, Sn, and Sb |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 1 source added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
