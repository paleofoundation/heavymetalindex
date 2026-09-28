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
sources: 33
wiki_doi: null
updated: 2026-05-16
---

# Organ Meats (Kidney and Liver)

## Overview

Organ meats, particularly kidney and liver, are identified by [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] as among the highest-cadmium food commodities because these are the organs in food animals where cadmium preferentially accumulates, mirroring the accumulation pattern in humans.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=9 | 100–800 | medium | [[sources/marcelino2026-liver-trace-metals-netherlands-herbivores\|1]], [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|2]], [[sources/zhao2024-toxic-metals-metalloids-food-review\|3]] |
| Cd | n=11 | 50–230 | high | [[sources/marcelino2026-liver-trace-metals-netherlands-herbivores\|1]], [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|2]], [[sources/zhao2024-toxic-metals-metalloids-food-review\|3]] |
| iAs | data gap | — | — | — |
| tAs | data gap | — | — | — |
| tHg | n=2 | 10–280 | low | [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|1]], [[sources/codex-cxs-193-1995\|2]] |
| Ni | n=2 | 100–220 | low | [[sources/marcelino2026-liver-trace-metals-netherlands-herbivores\|1]], [[sources/kamaly2023-egypt-poultry-metals\|2]] |
| Al | n=1 | 290–14000 | low | [[sources/kamaly2023-egypt-poultry-metals\|1]] |
| Cr | n=5 | 110–600 | medium | [[sources/marcelino2026-liver-trace-metals-netherlands-herbivores\|1]], [[sources/meligy2024-camel-meat-toxic-elements\|2]], [[sources/kamaly2023-egypt-poultry-metals\|3]] |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Why this commodity accumulates cadmium

Kidney and liver are the two tissues in mammals where cadmium preferentially accumulates, bound to metallothionein, over the animal's lifetime. This is the same accumulation pattern that drives human cadmium body burden. Food-animal organs therefore carry cadmium concentrations that reflect the animal's lifetime dietary cadmium exposure, with older animals, animals raised on cadmium-rich feed, and animals from cadmium-polluted regions producing higher-cadmium offal. Horsemeat offal is particularly notable because horses are typically slaughtered at older ages than other food animals, giving more years of cadmium accumulation; Equus kidney is one of the highest-cadmium items in the EFSA European occurrence dataset.

## Ranges by source, region, and variety

EFSA 2009 Table 1 reports mean cadmium concentrations of 0.201 mg/kg for kidney and 0.116 mg/kg for liver across European samples. Horsemeat (muscle, not offal) separately carries a mean of 0.172 mg/kg, reflecting the same age-accumulation pattern._

## Processing effects

_Pending. Cadmium is incorporated into the organ tissue and is not meaningfully affected by cooking, curing, or processing into pates and sausages. Processed organ-meat products inherit the cadmium of their source organs._

## Ingredient-derivative risk

Pates, liverwurst, and organ-meat-based prepared foods carry cadmium at the concentration of the source organ. Liver-containing baby foods and nutritional supplements built around liver (traditionally iron-rich and vitamin-A-rich, historically recommended for pregnant women and children) warrant particular attention because the populations targeted are the ones most affected by iron-deficiency-enhanced cadmium absorption and by developmental sensitivity to cadmium.

## Mitigation options

_Pending. Organ meats from younger animals, animals raised on documented lower-cadmium feed, and animals from non-hotspot regions carry lower cadmium than alternatives. Given the accumulation pattern, there is no processing intervention that removes cadmium from organ meat after slaughter._

## Other metals of concern

_Pending dedicated Pb, iAs, tHg, Ni, and Al ingest waves. The contamination_profile YAML block tracks all six metals; commodity-specific narrative for non-cadmium metals will populate when the corresponding source pages are ingested._

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for edible offal; offal-specific MLs are historically higher than muscle-meat MLs reflecting the biological reality of accumulation.
- [[regulations/eu-2023-915-cadmium]] and [[regulations/eu2023-contaminants-maximum-levels]] — EU Cd maximum levels are 0.50 mg/kg (500 ug/kg) for liver and 1.0 mg/kg (1000 ug/kg) for kidney of bovine animals, sheep, pig, poultry, and horse. EU Pb offal maximum levels are 0.20 mg/kg for bovine animals and sheep, 0.15 mg/kg for pig, and 0.10 mg/kg for poultry.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record.

1. [[sources/efsa-cadmium-contam-2009|Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food]]<span class="hmi-ref-meta">EFSA Panel on Contaminants in the Food Chain (CONTAM) · The EFSA Journal · 2009 · [doi.org/10.2903/j.efsa.2009.980](https://doi.org/10.2903/j.efsa.2009.980)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/marcelino2026-liver-trace-metals-netherlands-herbivores\|Marcelino et al. 2026]]. *Monitoring trace minerals and heavy metals in liver of free-living large herbivores in the Netherlands*, Frontiers in Veterinary Science | 2026 | Peer-reviewed | NL Pb, Cd, As, tAs, Cr, Ni, Co, Cu, Fe, Mn, Mo, Se, V, Zn occurrence in Heck cattle (n=167), red deer (n=96), Konik horses (n=83) at Oostvaardersplassen nature reserve, Netherlands, 2003–2023 (n=346) |
| 2 | [[sources/qvarfort2025-game-meat-lead-bioaccessibility\|Qvarfort et al. 2025]]. *Lead in game meat: a study of bioaccessibility of lead metal fragments*, Journal of Analytical Techniques and Research | 2025 | Peer-reviewed | SE/EU Pb occurrence in Seventeen lead-positive tissue samples from two free-living wild boars shot under normal hunting conditions, deliberately sampled from wound-channel... (n=17) |
| 3 | [[sources/rabeey2025-bovine-hg-pb-cd-egypt\|Rabeey et al. 2025]]. *Health risk assessment of heavy metals in imported frozen bovine meat and organs marketed in Sohag, Egypt*, Scientific Reports | 2025 | Peer-reviewed | EG/BR/IN tHg, Pb, Cd occurrence in 315 imported frozen bovine samples (105 muscle, 105 liver, 105 kidney) collected from local markets in Sohag governorate,... (n=315) |
| 4 | [[sources/baptista2024-wild-boar-metals-spain\|Baptista et al. 2024]]. *Heavy metals and metalloids in wild boars (Sus Scrofa) - a silent but serious public health hazard*, Veterinary Research Communications | 2024 | Peer-reviewed | ES/EU tAs, Cd, Co, Cr, Cu, Ni, Pb, Zn occurrence in Twenty-eight hunted wild boars from Castile and Leon, Spain, sampled in February 2021; liver and kidney tissues were... (n=28) |
| 5 | [[sources/boisteanu2024-wild-boar-romania-metals\|P-C et al. 2024]]. *Essential and toxic elements analysis of wild boar tissues from north-eastern Romania and health risk implications*, Frontiers in Sustainable Food Systems | 2024 | Peer-reviewed | RO Pb, Cd, Cu, Zn, Mn occurrence in wild boar harvested in north-eastern Romania |
| 6 | [[sources/meligy2024-camel-meat-toxic-elements\|Meligy et al. 2024]]. *Concentrations of toxic and essential elements in camel (Camelus dromedarius) tissues: muscle, offal, hair, and blood from Saudi Arabia*, Environmental Science and Pollution Research | 2024 | Peer-reviewed | SA Co, Cr, Mn, Se, As occurrence in Camelus dromedarius tissue samples (muscle, liver, kidney, spleen, lung, hair, blood) from three breeds in Saudi Arabia (n=225) |
| 7 | [[sources/morshed2024-heavy-metals-poultry-organs-bangladesh\|Morshed et al. 2024]]. *Heavy Metals Accumulation in Different Organs of Poultry and Hypothetical Risk Analysis: Evidence from Experimental Feeding with Assorted Metal Feed*, Research Square (preprint) | 2024 | Preprint | BD Pb, Cd, Cr occurrence in 24 day-old broiler chickens divided into 8 experimental groups (C0-C7; 3 birds per group) in Bangladesh and fed... (n=24) |
| 8 | [[sources/zhao2024-toxic-metals-metalloids-food-review\|Zhao et al. 2024]]. *Toxic Metals and Metalloids in Food: Current Status, Health Risks, and Mitigation Strategies*, Current Opinion in Environmental Science & Health | 2024 | Peer-reviewed | AU/BR/FR tAs, iAs, Cd, Pb occurrence in Global occurrence synthesis: Table 1 aggregates national mean occurrence data from Total Diet Studies across Australia, Brazil, France,... |
| 9 | [[sources/faraj2023-backyard-chicken-metals-iraq\|Faraj et al. 2023]]. *Determination of Heavy Metal Residue in Backyard Chicken at Various Regions in Sulaymaniyah Province*, Tikrit Journal for Agricultural Sciences | 2023 | Peer-reviewed | IQ Cd, Cu, Pb occurrence in Sixty backyard chickens collected from four Sulaymaniyah Province regions in Kurdistan Region-Iraq, with 15 chickens from each of... (n=120) |
| 10 | [[sources/hossain2023-bangladesh-chicken-metals\|Hossain et al. 2023]]. *Human health risk assessment of edible body parts of chicken through heavy metals and trace elements quantitative analysis*, PLoS ONE | 2023 | Peer-reviewed | BD Pb, Cd, Cr occurrence in 108 samples from 18 broiler chickens (6 body parts × 3 chickens × 6 Dhaka North City Corporation... (n=108) |
| 11 | [[sources/iqbal2023-poultry-feed-pakistan\|Iqbal et al. 2023]]. *Evaluation of Heavy Metals Concentration in Poultry Feed and Poultry Products*, Saudi Journal of Medical and Pharmaceutical Sciences 9(7): 489-495 | 2023 | Peer-reviewed | PK Pb, Cd, Cr, tHg, Fe occurrence in 6 solid feeds, 6 liquid feeds (water), 33 livers (composite from 6 farms), 33 breast muscles (composite), 33... (n=39) |
| 12 | [[sources/kamaly2023-egypt-poultry-metals\|Kamaly et al. 2023]]. *Health risk assessment of metals in chicken meat and liver in Egypt*, Environmental Science and Pollution Research | 2023 | Peer-reviewed | EG Al, Cd, Pb, Ni, Cr occurrence in Broiler chicken chest muscle, thigh muscle, and liver from 6 commercial brands in Assiut, Egypt (n=20 per brand... (n=360) |
| 13 | [[sources/fechner2022-bfr-meal-hg-cd-pb-ni-germany\|Fechner et al. 2022]]. *Results of the BfR MEAL Study: In Germany, mercury is mostly contained in fish and seafood while cadmium, lead, and nickel are present in a broad spectrum of foods*, Food Chemistry: X | 2022 | Peer-reviewed | DE/EU tHg, Cd, Pb, Ni occurrence in 869 pooled samples from 356 foods representing 90%+ of German food consumption; adults and adolescents N=13,926 (NVS II... (n=869) |
| 14 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | JECFA global Cd dietary exposure assessment; organ meats (especially kidney) identified as a high-Cd category in national food-basket contributions |
| 15 | [[sources/khatemeh2022-pb-cd-sheep-liver-flukes\|Khatemeh et al. 2022]]. *Evaluation of bioaccumulation of some heavy metals in liver flukes (Fasciola hepatica and Dicrocoelium dendriticum) and liver samples of sheep*, Veterinary Research Forum | 2022 | Peer-reviewed | IR Pb, Cd, Cr occurrence in 50 samples: F. hepatica (n=10), D. dendriticum (n=10), infected sheep livers (n=10 each parasite), and uninfected sheep livers... (n=50) |
| 16 | [[sources/palka2022-rabbit-meat-feed-metals\|Palka et al. 2022]]. *Effect of a Diet Supplemented with Nettle (Urtica dioica L.) or Fenugreek (Trigonella Foenum-Graecum L.) on the Content of Selected Heavy Metals in Liver and Rabbit Meat*, Animals | 2022 | Peer-reviewed | PL/EU Zn, Cu, Ni, Fe, Mn, Pb, Cd occurrence in 60 Termond White rabbits in Poland, split into control feed, 1% nettle-leaf feed, and 1% fenugreek-seed feed groups (n=60) |
| 17 | [[sources/prevendar-crnic2022-rasa-coal-birds-htes\|Prevendar et al. 2022]]. *Enhanced levels of hazardous trace elements (Cd, Cu, Pb, Se, Zn) in bird tissues in the context of environmental pollution by Raša coal*, Rudarsko-geološko-naftni zbornik (The Mining-Geology-Petroleum Engineering Bulletin) | 2022 | Peer-reviewed | HR/EU Cd, Pb, Cu, Zn, Se occurrence in 20 wild birds collected December 2019 – January 2020 in eastern Istria, Croatia. Raša coal-polluted area (n=12) comprised... (n=20) |
| 18 | [[sources/ali2020-chicken-liver-heavy-metals-erbil\|Ali et al. 2020]]. *Determination of heavy metals and selenium content in chicken liver at Erbil city, Iraq*, Italian Journal of Food Safety 9:8659 | 2020 | Peer-reviewed | IQ Cd, Pb, tHg, Cr, Cu, Mn, Ni, Zn, Se, Co occurrence in Twenty chicken liver samples — five frozen retail-market livers (one local Erbil pair plus imported Iran, Turkey, UAE)... (n=20) |
| 19 | [[sources/buba2020-domestic-pig-metals-nigeria\|Buba et al. 2020]]. *Determination of Some Heavy Metals in Kidney, Liver and Muscle of Domestic Pig (Sus scrofa domesticus) in Guyuk Metropolis, Adamawa State, Nigeria*, International Journal of Research and Scientific Innovation | 2020 | Peer-reviewed | NG Pb, Fe, Cd, Ni, Cu occurrence in Domestic pig kidney, liver, and muscle samples bought from ten (10) commercial sellers in Guyuk Metropolis, Adamawa State,... (n=10) |
| 20 | [[sources/gutierrez-ravelo2020-sarpa-salpa-metals-canary\|Gutierrez-Ravelo et al. 2020]]. *Toxic Metals (Al, Cd, Pb) and Trace Element (B, Ba, Co, Cu, Cr, Fe, Li, Mn, Mo, Ni, Sr, V, Zn) Levels in Sarpa Salpa from the North-Eastern Atlantic Ocean Region*, International Journal of Environmental Research and Public Health | 2020 | Peer-reviewed | ES Al, Cd, Pb, B, Ba, Co, Cu, Cr, Fe, Li, Mn, Mo, Ni, Sr, V, Zn occurrence in Thirty Sarpa salpa specimens from three Tenerife coastal zones, with ten fish from each metropolitan, south, and north... (n=30) |
| 21 | [[sources/wang2020-jilin-total-diet-metals\|Wang et al. 2020]]. *Contamination and health risk assessment of lead, arsenic, cadmium, and aluminum from a total diet study of Jilin Province, China*, Food Science & Nutrition | 2020 | Peer-reviewed | CN Pb, tAs, Cd, Al occurrence in Jilin Province total-diet-study composites across 12 food groups and 48 product groups, with consumption inputs for 7700 residents... |
| 22 | [[sources/rudy2019-hunted-animals-toxic-elements-review\|Rudy et al. 2019]]. *Content of toxic elements in tissues of hunted animals on the basis of research results of 2003–2017*, Medycyna Weterynaryjna | 2019 | Peer-reviewed | PL/HR/IT Pb, Cd, tAs, tHg occurrence in Narrative literature review of 2003–2017 publications reporting Pb, Cd, As, and Hg in tissues of wild boar (Sus... |
| 23 | [[sources/gasparik2017-wild-boar-slovakia-metals\|Gašparík et al. 2017]]. *Levels of Metals in Kidney, Liver, and Muscle Tissue and their Influence on the Fitness for the Consumption of Wild Boar from Western Slovakia*, Biological Trace Element Research | 2017 | Peer-reviewed | SK/EU Cd, Pb, tHg, Cu, Zn, Co occurrence in 40 wild boars (Sus scrofa; 20 females, 20 males) hunter-collected in November–December 2009 and 2010 from the Nitra... (n=40) |
| 24 | [[sources/song2017-china-dietary-cadmium-exposure\|Song et al. 2017]]. *Dietary cadmium exposure assessment among the Chinese population*, PLoS ONE 12(5): e0177978 | 2017 | Peer-reviewed | CN Cd occurrence in 228,687 food samples collected from supermarkets, local markets, and field harvest sites across 31 provinces, autonomous regions, and... (n=228687) |
| 25 | [[sources/zarski2017-mallard-mercury\|Żarski et al. 2017]]. *The Presence of Mercury in the Tissues of Mallards (Anas platyrhynchos L.) from Włocławek Reservoir in Poland*, Biological Trace Element Research | 2017 | Peer-reviewed | PL tHg occurrence in adult mallards from Włocławek Reservoir in Poland |
| 26 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology chapter; explains the mechanism of Cd accumulation in mammalian kidney and liver and its implications for organ-meat dietary exposure |
| 27 | [[sources/buculei2012-tin-iron-migration-canned-food-romania\|Buculei et al. 2012]]. *Study regarding the tin and iron migration from metallic cans into foodstuff during storage*, Journal of Agroalimentary Processes and Technologies, 18(4), 299-303 | 2012 | Peer-reviewed | RO Sn, Fe occurrence in Four canned product types (peas, tomato paste, pork in own juice, pork liver pate) packed in three-piece tinplate... (n=4) |
| 28 | [[sources/jecfa-73rd-cadmium-2010\|JECFA 2011]]. *Cadmium (Addendum), 73rd Meeting of the Joint FAO/WHO Expert Committee on Food Additives — Safety Evaluation of Certain Food Additives and Contaminants*, WHO Food Additives Series No. 64 (Cadmium addendum, pp. 305-380) | 2011 | Government report | JECFA Cd dietary exposure evaluation; organ meats considered among the leading per-serving Cd sources in food-basket models |
| 29 | [[sources/khalafalla2011-beef-carcasses-metals-egypt\|Khalafalla et al. 2011]]. *Heavy metal residues in beef carcasses in Beni-Suef abattoir, Egypt*, Veterinaria Italiana | 2011 | Peer-reviewed | EG Pb, Cd, tAs, tHg, Ni, Cr occurrence in 300 fresh-weight cattle tissue samples from animals slaughtered at the Beni-Suef abattoir in Egypt: 100 muscle, 100 liver,... (n=300) |
| 30 | [[sources/mahmud2011-crvi-chicken-pakistan\|Mahmud et al. 2011]]. *Estimation of Chromium (VI) in various body parts of Local Chicken*, Journal of the Chemical Society of Pakistan | 2011 | Peer-reviewed | PK Cr-VI occurrence in Local chicken parts (meat: sternum, leg, arm, gizzard, neck, heart, liver; bones: chest cage, neck, leg, head, arm)... |
| 31 | [[sources/efsa-lead-contam-2010\|EFSA 2010]]. *Scientific Opinion on Lead in Food*, EFSA Journal 2010;8(4):1570 | 2010 | Government report | EFSA Pb exposure assessment; organ meats included in the dietary Pb occurrence dataset as a contributing source for European populations |
| 32 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EFSA CONTAM Cd opinion; kidney and liver reported as the highest-mean-Cd organ meats in the European occurrence dataset (kidney 0.201 mg/kg, liver 0.116 mg/kg) |
| 33 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Codex international Cd and Pb maximum levels for edible offal matrices; organ-specific MLs are higher than muscle-meat MLs across Codex tables |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 section added and 1 removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | minor | Narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
