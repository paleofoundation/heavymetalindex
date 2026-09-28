---
type: source
raw_handle: AUTO_auto-game-meats-pb-product-2018-10-1371-journal-pone-0200792
cite_key: gerofke2018-wild-game-lead
title: "Lead content in wild game shot with lead or non-lead ammunition - Does state of the art consumer health protection require non-lead ammunition?"
authors: ["Gerofke A", "Ulbig E", "Martin A", "Müller-Graf C", "Selhorst T", "Gremse C", "Spolders M", "Schafft H", "Heinemeyer G", "Greiner M", "Lahrssen-Wiederholt M", "Hensel A"]
year: 2018
publication: "PLOS ONE"
doi: 10.1371/journal.pone.0200792
source_type: peer-reviewed
evidence_tier: A
license: "open-access PDF"
raw_path: "raw/manual-fetch/seasonal-geographic-variance/auto-fetched/auto-game-meats-pb-product_2018_10-1371-journal-pone-0200792.pdf"
metals: [Pb]
ingredients: ["[[ingredients/meat]]"]
products: ["[[products/game-meats]]"]
matrices: [wild-game-meat]
jurisdictions: [DE]
near_duplicates: []
sample_n: 2108
sample_population: "1,254 roe deer (Capreolus capreolus) and 854 wild boar (Sus scrofa) from six German regions stratified by topsoil lead content; shot with either lead or non-lead ammunition"
updated: 2026-05-29
---
# Gerofke et al. 2018 - Lead in wild game shot with lead and non-lead ammunition

## Overview

Gerofke and colleagues measured lead in wild game meat and compared animals shot with lead versus non-lead ammunition. The study is routeable for game-meat lead occurrence because it reports lead concentration distributions and explicitly ties the concentration difference to ammunition type. It supports the game-meat page's distinction between environmental uptake and projectile-derived contamination.

## Key numbers

All values are total lead in mg/kg wet weight (muscle samples were digested without prior drying). Sub-LOD/LOQ values were substituted at 0.5 × LOD or LOQ (middle-bound) before mean and median calculation.

Roe deer (Capreolus capreolus), pooled across haunch, saddle, and close-to-wound-channel subsamples (Table 5):

- Lead-shot animals (n = 2,235 subsamples from 745 animals): arithmetic mean 5.032; geometric mean 0.0072 (95% CI 0.0036–0.013); median 0.011; P95 0.582; P97 1.713; max 4,727.979 mg/kg.
- Non-lead-shot animals (n = 1,527 subsamples from 509 animals): arithmetic mean 0.276; geometric mean 0.0014 (95% CI 0.001–0.0018); median 0.003; P95 0.052; P97 0.084; max 190.400 mg/kg.

Wild boar (Sus scrofa), pooled across haunch, saddle, and close-to-wound-channel subsamples (Table 6):

- Lead-shot animals (n = 1,542 subsamples from 514 animals): arithmetic mean 5.367; geometric mean 0.0109 (95% CI 0.0047–0.075); median 0.025; P95 1.446; P97 5.809; max 1,582.060 mg/kg.
- Non-lead-shot animals (n = 1,020 subsamples from 340 animals): arithmetic mean 0.883; geometric mean 0.0017 (95% CI 0.0012–0.0074); median 0.0025; P95 0.058; P97 0.125; max 351.932 mg/kg.

Lead ammunition produced a statistically significant increase in median lead content across all three subsamples in both species (Tobit regression, P < 0.001). Lead content rose with proximity to the wound channel: in lead-shot roe deer, mean values were 0.169 mg/kg in the haunch, 0.968 mg/kg in the saddle, and 13.958 mg/kg close to the wound channel; the corresponding wild-boar means were 0.086, 1.716, and 14.302 mg/kg. The percentage of samples above LOD/LOQ exceeded 50% only for the area close to the wound channel.

One within-paper anomaly: in the wild-boar saddle subsample the arithmetic mean for non-lead animals (1.904 mg/kg) slightly exceeded that for lead-shot animals (1.716 mg/kg), a result the authors flag as inconsistent with the overall pattern. Median, P95, and maximum at this same site remained higher for lead-shot animals.

The authors place these values within the range reported by other European studies on roe deer and wild boar (Table 8).

## Methods (brief)

Licensed hunters shot game during the regular German hunting season using preselected lead-based (semi-jacketed) or non-lead (monolithic copper or copper-alloy) bullets. Six regions were stratified by topsoil lead content (low <30, medium 30–75, high >75 mg Pb/kg soil) to separate ammunition-derived from background contamination. From each carcass, trained game traders collected three 100 g subsamples from the marketable meat: haunch, saddle, and the area close to the wound channel after the bullet path was trimmed by standard hygienic practice. Samples were frozen at -18 °C and distributed across 12 laboratories.

Lead in muscle was measured after high-pressure microwave digestion in line with EN 13805:2014, with detection by inductively coupled plasma mass spectrometry (ICP-MS) or inductively coupled plasma optical emission spectrometry (ICP-OES). The study reports total lead only; no isotopic or chemical-species differentiation was performed. Arithmetic mean, median, geometric mean, 95th and 97th percentiles, and maxima are reported per species and per subsample, with sub-LOD/LOQ values substituted at 0.5 × LOD or LOQ (middle bound). Geometric means with 95% confidence intervals were estimated by Tobit regression to accommodate left-censoring; the underlying Tobit estimates were previously reported by the same group (Müller-Graf et al. 2017). Violin plots and statistical comparisons were produced in R 3.3.1 with ggplot2.

## Implications

Certification: This source supports direct game-meat Pb evidence and an ammunition-source note.

Courses: It is a core example for explaining why non-lead ammunition is a contamination-control intervention.

App: Game-meat risk scoring can treat ammunition type as a meaningful exposure modifier where known.

## Related evidence

- [[products/game-meats]]
- [[ingredients/meat]]
- [[metals/lead]]
- [[regulations/efsa-lead-contam-2010]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added |
| [3171d069e](https://github.com/paleofoundation/heavymetalindex/commit/3171d069e) | 2026-08-02 | major | 1 section added |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 section added and 1 removed |
| [eaa8eeeed](https://github.com/paleofoundation/heavymetalindex/commit/eaa8eeeed) | 2026-07-27 | major | 1 section added and 1 removed |
| [7a6fbaa64](https://github.com/paleofoundation/heavymetalindex/commit/7a6fbaa64) | 2026-06-09 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
