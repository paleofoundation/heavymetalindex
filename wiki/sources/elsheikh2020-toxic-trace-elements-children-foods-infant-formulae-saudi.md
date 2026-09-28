---
routing_input_gaps: []
routing_input_disposition: "AI scope adjudication from existing source text; existing declarations preserved. All originally missing declarations resolved, including intentional empty context-only fields where applicable."
ingredients: ["infant-formula", "baby-cereals-dry", "potato-chips", "popcorn", "biscuits", "chocolate", "cream-cheese", "noodles"]
type: source
cite_key: elsheikh2020-toxic-trace-elements-children-foods-infant-formulae-saudi
title: "Evaluation of Some Toxic and Essential Trace Elements in Children Foods and Infant Formulae by Using ICP-OES"
authors: ["Elsheikh MA", "Ali DMH", "Alotaibi SH"]
year: 2020
publication: "Asian Journal of Chemistry 32(6):1273-1278"
doi: "10.14233/ajchem.2020.22499"
source_type: peer-reviewed
evidence_tier: A
evidence_fitness: EF-3
journal_impact: lower-tier (Asian J Chem is below Q1 food-safety venues; methodology reasonable but reporting density lower than premier journals)
method_quality_caveat: "ICP-OES at LOD/LOQ ppm: Al 0.0055/0.064; Pb 0.0062/0.086; Cd 0.0051/0.013; As 0.0054/0.046. Recovery 92.3-101.6%. Formula subset n=3 brands and Cerelac n=1 brand are below the 10-sample defensibility floor; outlier Al values (brand 19 baby powder milk 391 µg/kg/day daily intake; biscuit brand 6 291,900 ppb total Al) flagged as possibly real Saudi-market signal or possibly method-sensitivity artefact pending brand-level follow-up."
tier_rationale: "Per A-tier = peer-reviewed primary studies; Asian J Chem is peer-reviewed. Journal-impact concern is captured in journal_impact field; method/sample-size concerns are captured in method_quality_caveat and Limitations section; not used to demote tier."
license: "CC BY 4.0"
access_url: "https://doi.org/10.14233/ajchem.2020.22499"
raw_path: "raw/external-fetch/elsheikh2020.pdf"
metals: [Al, Pb, Cd, tAs, Mn, Ni, V, Si, Ba]
products: [infant-formula-powder-non-soy, baby-cereals-dry-rice-based, baby-cereals-dry-non-rice, "[[products/snacks-crackers-biscuits]]", "[[products/root-tuber-vegetables]]", "[[products/chocolate]]"]
matrices: [infant-formula-powder, baby-powder-milk, infant-cereal-cerelac, biscuits, potato-chips, popcorn, cocoa-sweets, cream-cheese, indomie-noodles]
jurisdictions: [SA]
sample_n: 57
sample_population: "Fifty-seven samples covering 19 different brands purchased in Turabah province, Saudi Arabia: 3 brands of infant formula (including baby powder milk) + 16 brands of children's foods (potato chips, popcorn, biscuits, cocoa sweets, cream cheese, baby powder milk, indomie noodles, cerelac). Triplicate analysis per brand. Toxic elements (Al, Ba, Pb, Cd, As) and essential trace elements (Mn, Ni, V, Si) by ICP-OES (Plasma Quant PQ 9000, Analytik Jena) after microwave digestion in HNO3+H2O2. LOD/LOQ in ppm: Al 0.0055/0.064; Pb 0.0062/0.086; Cd 0.0051/0.013; As 0.0054/0.046. Recovery 92.3-101.6%."
acquired_via: "Karen externally fetched 2026-05-09 (raw/external-fetch/elsheikh2020.pdf). CC BY 4.0 OA."
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-09-10
routing_input_adjudication: data/evidence/audits/2026-09-10-fda-tds/routing-input-adjudication.json
---

# Elsheikh et al. 2020 — Toxic and essential trace elements in Saudi children's foods and infant formulae

## Overview

This B-tier peer-reviewed analytical study (Asian Journal of Chemistry; not Q1-tier journal) measures nine elements in 57 samples covering 19 brands of children's foods and infant formulae purchased in Turabah province, Saudi Arabia. The paper's scope is broader than HMTc Category 1 — most of the 16 children's-food brands are general snack products (potato chips, popcorn, biscuits, cocoa sweets, indomie noodles) that fall outside the IandC subcategory architecture. Three brands are infant formulae (including baby powder milk, brand 19) and one brand is Cerelac (infant cereal). The principal findings: Cd and As were mostly not detected (ND) across all sample types; Pb detected in some samples but generally low (highest in biscuit brand 6 at 0.230 ppm = 230 ppb); **Al was detected in many samples, with two notable outliers — biscuit brand 6 at 291.90 ppm = 291,900 ppb total Al concentration, and baby powder milk brand 19 yielding a daily Al intake of 391.12 µg/kg bw/day, both exceeding the FAO/WHO PTDI guidance of 285.7 µg/kg bw/day**. Author scope is partial on matrix axis (formula vs cereal vs general snacks distinguished but soy/non-soy formula not split, rice/non-rice cereal not enumerated for Cerelac) and partial on format axis. Per the corrected row-fit rule, this routes to HMTc Cat 1 only for the infant-formula and Cerelac subsets; the snack-food data is out-of-scope context.

## Key Numbers

### HMTc-routable subset

**Infant formula (3 brands, n=9 with triplicate analysis):**
- Pb, Cd, As: mostly ND across all formula samples
- Al: detected; baby powder milk brand 19 daily intake 391.12 µg/kg/day (HIGH — flagged outlier exceeding PTDI 285.7)
- Mn, Ni, V, Si: variable, within typical formula ranges

**Cerelac (infant cereal, brand TBD):** Sample composition not enumerated in the available extract; daily intake values per Tables 4-7 cover biscuit + cocoa subsets but Cerelac-specific values require deeper paper read.

### Out-of-scope-for-Cat-1 subset (children's snack foods)

| Subset | Brands | Notable Al | Notable Pb |
| --- | --- | --- | --- |
| Potato chips | 4 brands | 19.65-38.45 ppm range | 0.030-0.110 ppm (30-110 ppb) |
| Popcorn | 1 brand (4) | 24.05 ppm | 0.050 ppm |
| Biscuits | 3 brands | brand 6 outlier at 291.90 ppm (= 291,900 ppb, very high — likely high-Al baking-soda or processing input) | brand 5 0.080 ppm; brand 6 0.230 ppm; brand 7 ND |
| Cocoa sweets | 3 brands | 8.30-44.76 ppm | ND across all |
| Cocoa with additives | 4 brands | 5.76-143.49 ppm (brand 14 high outlier) | ND across all |

### Key outliers worth flagging

1. **Brand 19 baby powder milk: Al daily intake 391.12 µg/kg/day** — exceeds FAO/WHO PTDI of 285.7 µg/kg/day. Anomalous compared to other formula sources (Almeida 2022 cow-milk powder mean 432-1241 ppb total; Igweze 2020 Nigerian formula Al mean 1.70 mg/kg = 1700 ppb total). The Saudi brand 19 baby powder milk is a clear outlier worth specific brand-level follow-up if HMTc certification considers this brand for testing.
2. **Brand 6 biscuit: Al 291.90 ppm total** — unusually high Al for a baked product; likely high-Al baking soda (sodium aluminum sulfate) or processing input rather than ingredient contamination.

These outliers should be flagged in the rice-cereal Al cell discussion as evidence that Al in baby cereals/biscuits can be very brand-dependent due to processing inputs rather than just rice-flour sourcing.

## Routing to HMTc subcategories

| Subcategory | Route | n_a_tier impact |
| --- | --- | --- |
| [[products/infant-formula-powder-non-soy]] | Indirect: 3 infant formula brands; soy/non-soy not split. Per Part 6 default, milk-based powder routes to non-soy. | Adds n_a_tier=1 with low-Pb/Cd/As confirmation context; high-Al outlier (brand 19, 391 µg/kg/day intake) is a flagged anomaly rather than a representative value. |
| [[products/baby-cereals-dry-rice-based]] | Indirect: Cerelac brand routes here if rice-based per the typical Cerelac formulation; needs paper-level verification. | Adds n_a_tier=1 with caveat; sample-level Cerelac data not separated in the visible table excerpts. |
| [[products/baby-cereals-dry-non-rice]] | Same caveat. | Adds n_a_tier=1. |

**Out-of-scope routing**: the 16 children's-snack-food brands (potato chips, popcorn, biscuits, sweets, cocoa products, indomie) do not map to HMTc Category 1 subcategories. They could inform broader regulatory context for general children's foods but are not HMTc IandC-relevant.

## Geographic-context flag

Saudi Arabian (Turabah province) market, 2019 sample collection. The high-Al outliers (brand 6 biscuit, brand 19 baby powder milk) suggest possible regional processing-input or sourcing differences. Jurisdiction-mix labeling required when this source contributes to a global aggregate.

## Methods (brief)

Total elements: 0.5 g sample digested in 12+2 mL HNO3+H2O2 in PTFE-TFM microwave digestion vessels; ICP-OES (Plasma Quant PQ 9000, Analytik Jena, dual-view) at 1200W plasma. Standards traceable; recovery 92.3-101.6%. Triplicate analysis per brand. ANOVA + Q-test + F-test for outlier detection.

## Evidence Fitness

EF-3 limited evidence with B-tier journal rating. The paper is published in *Asian Journal of Chemistry*, a smaller chemistry journal not on the Q1 list — methodology is reasonable (ICP-OES, microwave digestion, recovery validation) but reporting density is lower than premier food-safety journals. Sample size n=57 across 19 brands is reasonable but the rice-cereal-specific or formula-specific subset is small (3 formula brands, 1 Cerelac brand). The high-Al brand 19 outlier requires careful interpretation — could be real (Saudi processing) or reporting error.

## Limitations

- B-tier journal rating; methods reasonable but not the premier food-safety venues that drive regulatory decisions.
- Sample size for formula (n=3 brands) and Cerelac (n=1 brand) is below the 10-sample defensibility floor.
- The 16 children's-snack-food brands are out-of-scope for HMTc Category 1.
- Al unit reporting is in ppm (mg/kg) consistently; no internal unit ambiguity (unlike Sipahi 2014).
- High-Al outliers (brand 19 baby powder milk, brand 6 biscuit) are flagged anomalies; their consistency with other regional studies (e.g., Igweze 2020 Nigerian formula Al up to 1700 ppb) needs cross-validation. Brand 19's 391 µg/kg/day daily intake far exceeds typical formula Al PTDI usage and may indicate brand-specific quality issues or method sensitivity to a particular Al-rich ingredient.
- Cerelac brand-specific concentrations not enumerated in the visible Tables 3-7 extract; full paper read needed for HMTc rice-cereal n_a_tier addition.

## Implications

Certification: Adds n_a_tier=1 to multiple Pb/Cd/As cells in milk-based formula and infant cereal subcategories with Saudi-market context. The Pb/Cd/As mostly-ND finding is consistent with the broader pattern (FDA 2026 mean Pb 0.4 ppb in milk formula; FDA 2024 baby food Cd p90 22 in rice cereal). The high-Al outlier in baby powder milk (brand 19) is an anomalous data point worth flagging in HMTc review but should not drive standards math without independent confirmation.

Courses: Useful for teaching brand-to-brand variation in baby formula Al content, and the importance of method sensitivity for very-high-Al products (where total-Al values can vary by orders of magnitude based on ingredient sourcing).

App: Supports formula and infant-cereal contamination_profile values for Pb/Cd/As (mostly ND) and Al (high variability flagged).

Microbiome: No direct microbiome endpoint.

## Provenance Notes

Karen externally fetched this paper on 2026-05-09 and dropped it at the archived source file. CC BY 4.0 license per the publisher (Asian Publication Corporation); the wiki cites the article record (DOI 10.14233/ajchem.2020.22499).

## Related evidence

- [[products/infant-and-child-foods-master]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added; narrative text revised |
| [3a67e13071](https://github.com/paleofoundation/heavymetalindex/commit/3a67e13071) | 2026-08-02 | minor | Narrative text revised |
| [3171d069e3](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e3) | 2026-08-02 | major | 1 section added |
| [90a2f9a38e](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38e) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeedf](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeedf) | 2026-07-27 | major | 1 section added and 1 removed |
<!-- END: hmi-page-history -->
