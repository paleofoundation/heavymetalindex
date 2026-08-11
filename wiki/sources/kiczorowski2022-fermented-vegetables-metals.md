---
type: source
raw_handle: AUTO_auto-mineral-water-pb-product_2022_10-1038-s41598-022-17782-z
cite_key: kiczorowski2022-fermented-vegetables-metals
title: "Effect of fermentation of chosen vegetables on the nutrient, mineral, and biocomponent profile in human and animal nutrition"
authors: [Kiczorowski P, Kiczorowska B, Samolinska W, Szmigielski M, Winiarska-Mieczan A]
year: 2022
publication: "Scientific Reports"
doi: 10.1038/s41598-022-17782-z
source_type: peer-reviewed
evidence_tier: A
license: "CC BY"
raw_path: raw/manual-fetch/seasonal-geographic-variance/auto-fetched/auto-mineral-water-pb-product_2022_10-1038-s41598-022-17782-z.pdf
metals: [Pb, Cd]
ingredients: ["[[ingredients/broccoli]]", "[[ingredients/carrot]]", "[[ingredients/cucumber]]", "[[ingredients/beet]]"]
products: ["[[products/non-root-vegetables]]", "[[products/root-tuber-vegetables]]"]
matrices: [raw-vegetables, fermented-vegetables]
jurisdictions: [PL]
near_duplicates: []
sample_n: 40
sample_population: "Raw and fermented broccoli, carrot, cucumber, pepper, and red beet, four repetitions per vegetable combination"
updated: 2026-05-30
sources: 1
audience: [regulator, educator, consumer, app]
---

# Kiczorowski et al. 2022 - lead and cadmium in raw and fermented vegetables

## Overview

Kiczorowski and coauthors compared raw and fermented vegetables for nutrients, minerals, vitamins, phenols, lead, and cadmium. The paper is directly useful for processing-effect evidence because the same vegetable types were compared before and after fermentation. It does not support the mineral-water row named in the fetched filename.

## Key numbers

Table 6 reports Pb and Cd in fresh matter (Table 5 is macroelements Na, K, Ca, Mg, P; Table 6 is microelements and heavy metals). Raw vegetables contained Pb from 4.28 ug/g fresh matter in pepper to 8.28 ug/g fresh matter in carrot, and Cd from 0.031 ug/g fresh matter in red beet to 0.057 ug/g fresh matter in cucumber. The authors report that fermentation reduced Pb most strongly in carrot, cucumber, and red beet, with an average 18.5% lower Pb content than raw material in those vegetables. Cd reductions were smaller; carrot, pepper, and red beet showed the highest Cd decline, averaging 12% lower than raw vegetables.

Extracted Table 6 examples:

| Matrix | Pb | Cd |
|---|---:|---:|
| Broccoli, raw | 4.39 +/- 0.71 ug/g fresh matter | 0.041 +/- 0.37 ug/g fresh matter |
| Broccoli, fermented | 3.78 +/- 0.23 ug/g fresh matter | 0.039 +/- 0.64 ug/g fresh matter |
| Carrot, raw | 8.28 +/- 0.51 ug/g fresh matter | 0.043 +/- 0.26 ug/g fresh matter |
| Carrot, fermented | 6.73 +/- 0.34 ug/g fresh matter | 0.038 +/- 0.44 ug/g fresh matter |
| Cucumber, raw | 5.30 +/- 0.45 ug/g fresh matter | 0.057 +/- 0.53 ug/g fresh matter |
| Cucumber, fermented | 4.32 +/- 0.18 ug/g fresh matter | 0.054 +/- 0.24 ug/g fresh matter |

## Methods (brief)

The experiment used five vegetables from a Polish vegetable farm in southeast Poland (Lublin area, 2019): broccoli (Brassica oleracea var. italica), carrot (Daucus carota), cucumber (Cucumis), pepper (Capsicum annuum, color not specified), and red beet (Beta vulgaris subsp. vulgaris). Fermentation used 1-L glass jars with approx. 600 g of shredded raw vegetable, a spice mix (horseradish, garlic, pepper [Piper nigrum], white mustard, dill), and 2.5% NaCl brine at 24 deg C for 3 weeks followed by refrigeration at 6 deg C. Four fermentation repetitions were carried out per vegetable, with each chemical analysis performed in three replications (n=4 for the means and SDs in Tables 5-7; n=3 for the internal chemistry replication).

For Pb and Cd, 3 g of sample was incinerated at 480 deg C in a muffle furnace, solubilized with 6 mol/L hydrochloric acid, and quantified by ICP mass spectrometry on a Varian 820 MS spectrometer (Varian, Melbourne, Australia). The certified reference material was INCT-TL-1 Tea Leaves (containing 0.030 mg Cd and 1.78 mg Pb per kg). Pb and Cd are reported as total metal in ug/g fresh matter; the paper does not address speciation, which is consistent with HMI's vocabulary treating Pb and Cd as unspeciated.

## Implications

Certification: Useful as processing evidence for vegetable fermentation effects on Pb and Cd, but not as a pooled benchmark for a single product row without separating vegetable type and basis.

Courses: Demonstrates that fermentation can change measured heavy-metal content along with nutrient composition.

App: Supports a processing qualifier for fermented vegetables after synthesis.

## Wiki pages this source may touch

- [[products/non-root-vegetables]]
- [[products/root-tuber-vegetables]]
- [[ingredients/broccoli]]
- [[ingredients/carrot]]
- [[ingredients/cucumber]]
- [[ingredients/beet]]
- [[metals/lead]]
- [[metals/cadmium]]

## Verification notes

The source reports ug/g fresh matter for Pb and Cd in Table 6. The Cd standard-deviation values are unusually large relative to the means as printed (e.g., BR.R 0.041 +/- 0.37, where the SD is roughly 9x the mean); the values are preserved as printed in the paper and should be treated as a paper-level data-quality flag during synthesis.

The raw Pb values themselves are also high for fresh vegetables: 4.28 to 8.28 ug/g fresh matter equals 4.28 to 8.28 mg/kg, which is roughly 40x the EU 2023/915 maximum level for leafy and other vegetables (0.10 mg/kg). The values are also higher than the certified Pb load of the INCT-TL-1 Tea Leaves CRM (1.78 mg/kg). Pb concentrations of this magnitude in farm-grown Polish vegetables are not consistent with comparable Polish vegetable surveys; the paper offers no explanation. The wiki records the values as the source reports them, but synthesis passes should treat this paper as an outlier on level, not on the fermentation-effect direction, until corroborated.

The paper calls its Capsicum annuum sample only "pepper" without specifying color. The HMI ingredient vocabulary has `green-bell-pepper` and `black-pepper` but no generic `pepper` or `bell-pepper` slug; the green-bell-pepper slug was removed from frontmatter rather than overspecify the source. The Capsicum annuum ingredient is flagged here for routing's attention.

The matrices values `raw-vegetables` and `fermented-vegetables` are not in the canonical example list in the system prompt; they are added here because none of the canonical examples (leafy-vegetable, root-vegetable, vegetable-puree) faithfully describes a fermentation before/after pair across multiple vegetable types.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [434c53603](https://github.com/paleofoundation/heavymetalindex/commit/434c53603) | 2026-06-09 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
