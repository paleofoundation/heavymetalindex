---
title: Organ Meats (Kidney and Liver)
type: ingredient
commodity: organ-meats
aliases: [kidney, liver, offal, "variety meats", pate, liverwurst, "kidney pie", "liver pate", calves-liver, beef-liver, pork-kidney, sweetbreads, beef-kidney]
category: organ-meat
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [100, 800]
    p95_ppb: 4600
    confidence: medium
    n_studies: 9
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [50, 230]
    p95_ppb: 1500
    confidence: high
    n_studies: 11
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [10, 280]
    p95_ppb: 500
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [100, 220]
    p95_ppb: 300
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [290, 14000]
    p95_ppb: 18000
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [110, 600]
    p95_ppb: 1422
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [bioaccumulation-in-target-organ, animal-age, species, feed-cadmium]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/older-animal-organ-meat]]", "[[ingredients/horsemeat-offal]]"]
used_in_products: ["[[products/pate]]", "[[products/sausages]]", "[[products/organ-meat-pies]]", "[[products/liver-based-baby-food]]", "[[products/nutritional-supplements]]", "[[products/pet-food]]"]
audience: [regulator, educator, consumer, app]
sources: 18
wiki_doi: null
updated: 2026-05-16
---

# Organ Meats (Kidney and Liver)

Organ meats, particularly kidney and liver, are identified by [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] as among the highest-cadmium food commodities because these are the organs in food animals where cadmium preferentially accumulates, mirroring the accumulation pattern in humans.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=9 | 100–800 | medium | [[sources/marcelino2026-liver-trace-metals-netherlands-herbivores\|1]], [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|2]], [[sources/zhao2024-toxic-metals-metalloids-food-review\|3]] |
| Cd | n=11 | 50–230 | high | [[sources/marcelino2026-liver-trace-metals-netherlands-herbivores\|1]], [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|2]], [[sources/zhao2024-toxic-metals-metalloids-food-review\|3]] |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | n=2 | 10–280 | low | [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|1]], [[sources/codex-cxs-193-1995\|2]] |
| Ni | n=2 | 100–220 | low | [[sources/marcelino2026-liver-trace-metals-netherlands-herbivores\|1]], [[sources/kamaly2023-egypt-poultry-metals\|2]] |
| Al | n=1 | 290–14000 | low | [[sources/kamaly2023-egypt-poultry-metals\|1]] |
| Cr | n=5 | 110–600 | medium | [[sources/marcelino2026-liver-trace-metals-netherlands-herbivores\|1]], [[sources/meligy2024-camel-meat-toxic-elements\|2]], [[sources/kamaly2023-egypt-poultry-metals\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Why this commodity accumulates cadmium

Kidney and liver are the two tissues in mammals where cadmium preferentially accumulates, bound to metallothionein, over the animal's lifetime. This is the same accumulation pattern that drives human cadmium body burden. Food-animal organs therefore carry cadmium concentrations that reflect the animal's lifetime dietary cadmium exposure, with older animals, animals raised on cadmium-rich feed, and animals from cadmium-polluted regions producing higher-cadmium offal. Horsemeat offal is particularly notable because horses are typically slaughtered at older ages than other food animals, giving more years of cadmium accumulation; Equus kidney is one of the highest-cadmium items in the EFSA European occurrence dataset.

## Ranges by source, region, and variety

_Pending ingest of commodity-level occurrence data. EFSA 2009 Table 1 reports mean cadmium concentrations of 0.201 mg/kg for kidney and 0.116 mg/kg for liver across European samples. Horsemeat (muscle, not offal) separately carries a mean of 0.172 mg/kg, reflecting the same age-accumulation pattern._

## Processing effects

_Pending. Cadmium is incorporated into the organ tissue and is not meaningfully affected by cooking, curing, or processing into pates and sausages. Processed organ-meat products inherit the cadmium of their source organs._

## Ingredient-derivative risk

Pates, liverwurst, and organ-meat-based prepared foods carry cadmium at the concentration of the source organ. Liver-containing baby foods and nutritional supplements built around liver (traditionally iron-rich and vitamin-A-rich, historically recommended for pregnant women and children) warrant particular attention because the populations targeted are the ones most affected by iron-deficiency-enhanced cadmium absorption and by developmental sensitivity to cadmium.

## Mitigation options

_Pending. Organ meats from younger animals, animals raised on documented lower-cadmium feed, and animals from non-hotspot regions carry lower cadmium than alternatives. Given the accumulation pattern, there is no processing intervention that removes cadmium from organ meat after slaughter._

## Other metals of concern

_Pending dedicated Pb, iAs, tHg, Ni, and Al ingest waves. The contamination_profile YAML block tracks all six metals; commodity-specific narrative for non-cadmium metals will populate when the corresponding source pages are ingested._

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for edible offal (pending ingest of CXS 193-1995); offal-specific MLs are historically higher than muscle-meat MLs reflecting the biological reality of accumulation.
- [[regulations/eu-2023-915-cadmium]] and [[regulations/eu2023-contaminants-maximum-levels]] — EU Cd maximum levels are 0.50 mg/kg (500 ug/kg) for liver and 1.0 mg/kg (1000 ug/kg) for kidney of bovine animals, sheep, pig, poultry, and horse. EU Pb offal maximum levels are 0.20 mg/kg for bovine animals and sheep, 0.15 mg/kg for pig, and 0.10 mg/kg for poultry.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter, with the "Used on this page for" column populated by per-page synthesis._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/marcelino2026-liver-trace-metals-netherlands-herbivores\|Marcelino et al. 2026]]. *Monitoring trace minerals and heavy metals in liver of free-living large herbivores in the Netherlands*, Frontiers in Veterinary Science | 2026 | Peer-reviewed | NL Pb, Cd, As, tAs, Cr, Ni, Co, Cu, Fe, Mn, Mo, Se, V, Zn occurrence in Heck cattle (n=167), red deer (n=96), Konik horses (n=83) at Oostvaardersplassen nature reserve, Netherlands, 2003–2023 (n=346) |
| 2 | [[sources/rabeey2025-bovine-meat-organs-hg-pb-cd-egypt\|Rabeey et al. 2025]]. *Health risk assessment of heavy metals in imported frozen bovine meat and organs marketed in Sohag, Egypt*, Scientific Reports (in press 2025) | 2025 | Peer-reviewed | EG/BR/IN Pb, Cd, tHg occurrence in 315 imported frozen bovine samples (105 muscle + 105 liver + 105 kidney) from local markets in Sohag... (n=315) |
| 3 | [[sources/meligy2024-camel-meat-toxic-elements\|Meligy et al. 2024]]. *Concentrations of toxic and essential elements in camel (Camelus dromedarius) tissues: muscle, offal, hair, and blood from Saudi Arabia*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | SA Co, Cr, Mn, Se, As occurrence in Camelus dromedarius tissue samples (muscle, liver, kidney, spleen, lung, hair, blood) from three breeds in Saudi Arabia (n=225) |
| 4 | [[sources/zhao2024-toxic-metals-metalloids-food-review\|Zhao et al. 2024]]. *Toxic Metals and Metalloids in Food: Current Status, Health Risks, and Mitigation Strategies*, Current Opinion in Environmental Science & Health | 2024 | Peer-reviewed | AU/BR/FR tAs, iAs, Cd, Pb occurrence in Global occurrence synthesis: Table 1 aggregates national mean occurrence data from Total Diet Studies across Australia, Brazil, France,... |
| 5 | [[sources/hossain2023-bangladesh-chicken-metals\|Hossain et al. 2023]]. *Human health risk assessment of edible body parts of chicken through heavy metals and trace elements quantitative analysis*, PLoS ONE | 2023 | Peer-reviewed | BD Pb, Cd, Cr occurrence in 108 samples from 18 broiler chickens (6 body parts × 3 chickens × 6 Dhaka North City Corporation... (n=108) |
| 6 | [[sources/kamaly2023-egypt-poultry-metals\|Kamaly et al. 2023]]. *Health risk assessment of metals in chicken meat and liver in Egypt*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | EG Al, Cd, Pb, Ni, Cr occurrence in Broiler chicken chest muscle, thigh muscle, and liver from 6 commercial brands in Assiut, Egypt (n=20 per brand... (n=360) |
| 7 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | JECFA global Cd dietary exposure assessment; organ meats (especially kidney) identified as a high-Cd category in national food-basket contributions |
| 8 | [[sources/khatemeh2022-pb-cd-sheep-liver-flukes\|Khatemeh et al. 2022]]. *Evaluation of bioaccumulation of some heavy metals in liver flukes (Fasciola hepatica and Dicrocoelium dendriticum) and liver samples of sheep*, Veterinary Research Forum | 2022 | Peer-reviewed | IR Pb, Cd, Cr occurrence in 50 samples: F. hepatica (n=10), D. dendriticum (n=10), infected sheep livers (n=10 each parasite), and uninfected sheep livers... (n=50) |
| 9 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology chapter; explains the mechanism of Cd accumulation in mammalian kidney and liver and its implications for organ-meat dietary exposure |
| 10 | [[sources/jecfa-73rd-cadmium-2010\|JECFA 2011]]. *Cadmium (Addendum), 73rd Meeting of the Joint FAO/WHO Expert Committee on Food Additives — Safety Evaluation of Certain Food Additives and Contaminants*, WHO Food Additives Series No. 64 (Cadmium addendum, pp. 305-380) | 2011 | Government report | JECFA Cd dietary exposure evaluation; organ meats considered among the leading per-serving Cd sources in food-basket models |
| 11 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EFSA Pb exposure assessment; organ meats included in the dietary Pb occurrence dataset as a contributing source for European populations |
| 12 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Cd opinion; kidney and liver reported as the highest-mean-Cd organ meats in the European occurrence dataset (kidney 0.201 mg/kg, liver 0.116 mg/kg) |
| 13 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Codex international Cd and Pb maximum levels for edible offal matrices; organ-specific MLs are higher than muscle-meat MLs across Codex tables |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [83afba8](https://github.com/paleofoundation/heavymetalindex/commit/83afba8) | 2026-05-18 | autonomy: daemon tick 2026-05-18T20-18-55Z — gap-healing + extraction + pooling + briefings |
| [ca4d875](https://github.com/paleofoundation/heavymetalindex/commit/ca4d875) | 2026-05-17 | build: regenerate audits + routing artifacts after locked-product fix |
| [b6455e1](https://github.com/paleofoundation/heavymetalindex/commit/b6455e1) | 2026-05-17 | wiki: retire awaiting-synthesis caption from source-legend tables |
| [c027e29](https://github.com/paleofoundation/heavymetalindex/commit/c027e29) | 2026-05-17 | source-legend: programmatic baseline fill (2026-05-17) |
| [f907793](https://github.com/paleofoundation/heavymetalindex/commit/f907793) | 2026-05-17 | sweep: regenerate body tables and trim stub-marker prose on touched pages |
<!-- END: hmi-page-history -->
