---
title: "Salt"
dek: "Edible salt is covered through lead measurements from Indonesian warehouses and a method validation study reporting lead and cadmium. The page separates occurrence results from analytical performance measurements."
rail_highlights:
  - label: Exposure
    text: Lead measured in Indonesian warehouse salt
    source: sources/samsiyah2019-indonesia-salt-lead
    source_label: Salt study
  - label: Key distinction
    text: Edible salt method validation differs from market surveillance
    source: sources/wu2021-edible-salt-soy-sauce-pb-cd
    source_label: Method study
type: ingredient
commodity: salt
aliases: []
category: condiment
provisional_scaffold: true
provisional_created: 2026-05-30
provisional_reason: "Auto-fetched salt occurrence source needs a stable ingredient routing target"
provisional_source: "[[sources/samsiyah2019-indonesia-salt-lead]]"
contamination_profile:
  Pb:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  tAs:
    status: populated
    typical_ppb: [7.42, 8.76]
    p95_ppb: 8.94
    confidence: low
    n_studies: 1
    last_reviewed: 2026-07-27
    basis: null
    notes: null
  Cd:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  MeHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  tHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  iAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  Ni:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  Al:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  Cr-VI:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
  Sn:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
    basis: null
    notes: null
literature_scope: cited
sources: 11
updated: 2026-10-15
hero_image: /static/heroes/salt-white-crystals.webp
hero_image_alt: "White salt crystals in a dark dish and an unmarked glass container illustrating salt ingredient context."
---

# Salt

> **Provisional scaffold.** This page was created automatically on 2026-05-30 so that an ingested source could route to it. Aliases, category, and the contamination profile have not yet been populated. Content below is minimal until a synthesis pass consolidates the literature for this ingredient.
>
> **Reason:** Auto-fetched salt occurrence source needs a stable ingredient routing target
>
> **Triggering source:** [[sources/samsiyah2019-indonesia-salt-lead]]

## Literature scope

Reported measurements from source notes are below. No typical or upper-tail value is calculated here, and no certification limit is stated. The contamination profile in the page frontmatter is unchanged.

<!-- BEGIN: hmi-cited-measurements -->

## Reported measurements

The 2019 note reports lead in salt from 28 salt-storage warehouses in 28 villages of Pamekasan Regency, Indonesia. The lowest lead concentration was 0.066 ppm and the highest was 0.162 ppm. The authors' comparators are SNI 3556-2010 and SNI 7387-2009, both a maximum of 10 ppm lead. The discussion cites an earlier salt result near a landfill, average 12.2 mg/kg, against a 10 mg/kg standard. That figure is another setting and is not the Pamekasan result. [[sources/samsiyah2019-indonesia-salt-lead]]

The 2021 note is an electrothermal atomic absorption method-validation study, not a market survey. Unspiked edible salt was 0.021 mg/kg lead and 0.017 mg/kg cadmium. The abstract reports limits of detection of 0.0140 mg/kg lead and 0.0015 mg/kg cadmium in edible salt. Spiked recoveries are not occurrence concentrations and are not repeated here. Soy sauce rows from the same note are not this salt result and are not repeated here. [[sources/wu2021-edible-salt-soy-sauce-pb-cd]]

<!-- END: hmi-cited-measurements -->

## Edible salt, lead cohorts, and cadmium exposure models

The salt notes on this page report lead, and one method note reports lead and cadmium in unspiked edible salt. The gut studies below used infant tooth lead, maternal blood lead, rat cadmium chloride, and mouse drinking water. Salt was not the vehicle. A salt specification should keep the warehouse or method result separate from those exposure models.

[[sources/sitarik2020-fetal-postnatal-lead-gut-microbiota|Sitarik et al. 2020]] measured tooth lead and stool microbiota at 1 month and 6 months in 146 maternal-child pairs in the Detroit-area WHEALS cohort. In utero tooth lead was associated with fungal community composition at 1 month. Lead was not associated with overall bacterial community structure. Taxon-level bacterial shifts were higher Collinsella at 1 month, higher Bilophila at 6 months, and lower Bacteroides. The direction is lead exposure toward microbiota composition. Tooth lead is a biomarker, not a concentration in this ingredient.

[[sources/eggers2023-prenatal-lead-exposure-gut-microbiome-childhood|Eggers et al. 2023]], per WikiBiome source summary, DOI 10.3389/fmicb.2023.1193919, followed 123 children in the Mexico City PROGRESS cohort. Maternal blood lead means were 33.6 µg/L in the second trimester and 34.9 µg/L in the third. Stool metagenomes at ages 9 to 11 showed lower Bacteroides caccae with lead exposure. Weighted quantile sum regression gave a negative overall mixture effect (beta = -0.17) in both trimesters. The direction is prenatal lead toward the childhood gut microbiota. The summary does not support a lead concentration in food.

[[sources/liu2023-cadmium-microbiota-metabolome-rats|Liu et al. 2023]], per WikiBiome source summary, DOI 10.3389/fvets.2023.1219729, exposed Sprague-Dawley rats to cadmium chloride for 30 days. The note states lower intestinal ZO-1, higher TNF-alpha and IL-6 in intestine and blood, and Muribaculaceae in blood that was absent in the unexposed group. The note does not print the dose or the number of rats. The direction is cadmium toward gut and blood microbiota and barrier markers.

[[sources/zhang-2015-cadmium-hepatic-energy-gut-microbiome|Zhang et al. 2015]], per WikiBiome source summary, DOI 10.1021/acs.chemrestox.5b00237, gave mice 10 mg/L cadmium in drinking water for 10 weeks. Firmicutes and gamma-proteobacteria decreased in feces after 4 weeks, and Firmicutes decreased in cecum contents after 10 weeks. The direction is cadmium toward gut microbiota, alongside hepatic energy-metabolism changes in the same animals. The summary does not name a food.

### Study table

| Study | Model | Metal and dose | Main finding | Limitation |
| --- | --- | --- | --- | --- |
| Sitarik et al. 2020 | Human infants; tooth lead and stool; n = 146 | Lead; tooth biomarker, not a food dose | Fungal composition at 1 month shifted; overall bacterial structure did not | Not this ingredient |
| Eggers et al. 2023 | Human children, ages 9 to 11; n = 123 | Maternal blood lead; means 33.6 and 34.9 µg/L | Lower Bacteroides caccae; mixture beta = -0.17 | Per WikiBiome source summary; not this ingredient |
| Liu et al. 2023 | Rats; cadmium chloride; 30 days | Cadmium; dose not printed in the source note | Lower intestinal ZO-1; Muribaculaceae appeared in blood | Per WikiBiome source summary; n and dose unstated |
| Zhang et al. 2015 | Mice; drinking water; 10 weeks | Cadmium; 10 mg/L | Lower fecal Firmicutes and gamma-proteobacteria by 4 weeks | Per WikiBiome source summary; not this ingredient |

### What remains uncertain

No study cited here fed salt or used a sodium chloride matrix as the dose. Liu and colleagues do not print the cadmium dose or the number of rats. Tooth lead and maternal blood lead are biomarkers, not salt concentrations.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. See [Sources](#sources) for this page's source inventory. Each title links to a source record with bibliographic details, reported findings, and document provenance.

1. [[sources/samsiyah2019-indonesia-salt-lead|The Quality of Indonesia Salt: Study of Heavy Metal Lead (Pb) Levels in the Salt]]<span class="hmi-ref-meta">Samsiyah N, Moelyaningrum A D, and Ningrum P T · Jurnal Ilmiah Perikanan dan Kelautan · 2019 · [doi.org/10.20473/jipk.v11i1.11058](https://doi.org/10.20473/jipk.v11i1.11058)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/wu2021-edible-salt-soy-sauce-pb-cd|Determination of Trace Cd and Pb in Edible Salt and Soy Sauce by ETAAS Using Fluorescent Carbon Nanoparticles (FCNs) as Matrix Modifier]]<span class="hmi-ref-meta">Wu Y, Liu S, Xu Y, Yu L, Yang Z, Wang H, et al. · Atomic Spectroscopy · 2021 · [doi.org/10.46770/AS.2020.196](https://doi.org/10.46770/AS.2020.196)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/sitarik2020-fetal-postnatal-lead-gut-microbiota|Fetal and early postnatal lead exposure measured in teeth associates with infant gut microbiota]]<span class="hmi-ref-meta">Sitarik AR, Arora M, Austin C, Bielak LF, Eggers S, Johnson CC, et al. · Environment International · 2020 · [doi.org/10.1016/j.envint.2020.106062](https://doi.org/10.1016/j.envint.2020.106062)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/eggers2023-prenatal-lead-exposure-gut-microbiome-childhood|Prenatal lead exposure is negatively associated with the gut microbiome in childhood]]<span class="hmi-ref-meta">Eggers S, Midya V, Bixby M, Gennings C, Torres-Olascoaga LA, Walker RW, et al. · Frontiers in Microbiology · 2023 · [doi.org/10.3389/fmicb.2023.1193919](https://doi.org/10.3389/fmicb.2023.1193919)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/liu2023-cadmium-microbiota-metabolome-rats|Environmental cadmium exposure alters the internal microbiota and metabolome of Sprague-Dawley rats]]<span class="hmi-ref-meta">Liu S, Deng X, Li Z, Zhou W, Wang G, Zhan J, et al. · Frontiers in Veterinary Science · 2023 · [doi.org/10.3389/fvets.2023.1219729](https://doi.org/10.3389/fvets.2023.1219729)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/zhang-2015-cadmium-hepatic-energy-gut-microbiome|Subchronic Exposure of Mice to Cadmium Perturbs Their Hepatic Energy Metabolism and Gut Microbiome]]<span class="hmi-ref-meta">Songbin Zhang, Yuanxiang Jin, Zhaoyang Zeng, Zhenzhen Liu, and Zhengwei Fu · Chemical Research in Toxicology · 2015 · [doi.org/10.1021/acs.chemrestox.5b00237](https://doi.org/10.1021/acs.chemrestox.5b00237)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/pribil2025-hot-sauce-food-safety-review\|Pribil et al. 2025]]. *Food safety considerations in hot sauce production: hazards, regulations, and industry challenges*, MOJ Food Processing & Technology | 2025 | Review | US Pb occurrence in Narrative review — no primary sampling. Metals content references Dhaneria et al. 2013 on imported hot sauces from... |
| 2 | [[sources/fsanz2024-schedule-19-contaminants\|Zealand 2024]]. *Australia New Zealand Food Standards Code - Schedule 19 - Maximum levels of contaminants and natural toxicants*, Federal Register of Legislation, Authorised Version F2024C00908 | 2024 | Government report | AU/NZ Al, tAs, iAs, Cd, Pb, tHg, Sn concentrations |
| 3 | [[sources/ammar2023-element-migration-aluminum-cookware\|Ammar et al. 2023]]. *Investigation of Element Migration from Aluminum Cooking Pots Using ICP-MS*, Applied Sciences (MDPI) | 2023 | Peer-reviewed | SA Al, Fe, As, Cd, Pb occurrence in Eight cooked-food test conditions (AC-1 through APP-5) using four aluminum cooking pots — two traditional pots (codes AC,... (n=16) |
| 4 | [[sources/eu-2023-915-contaminants-maximum-levels\|EU 2023]]. *Commission Regulation (EU) 2023/915 of 25 April 2023 on maximum levels for certain contaminants in food and repealing Regulation (EC) No 1881/2006*, Official Journal of the European Union | 2023 | Regulation | EU Pb, Cd, tHg, iAs, tAs, Sn concentrations |
| 5 | [[sources/eu-2021-1323-cadmium-foodstuffs-amendment\|EU 2021]]. *Commission Regulation (EU) 2021/1323 of 10 August 2021 amending Regulation (EC) No 1881/2006 as regards maximum levels of cadmium in certain foodstuffs*, Official Journal of the European Union (OJ L 288, 11.8.2021, p. 13–18) | 2021 | Regulation | EU Cd concentrations |
| 6 | [[sources/wu2021-edible-salt-soy-sauce-pb-cd\|Wu et al. 2021]]. *Determination of Trace Cd and Pb in Edible Salt and Soy Sauce by ETAAS Using Fluorescent Carbon Nanoparticles (FCNs) as Matrix Modifier*, Atomic Spectroscopy | 2021 | Peer-reviewed | CN Pb, Cd occurrence in Edible salt and soy sauce samples used for ETAAS method validation (n=2) |
| 7 | [[sources/ericson2020-georgian-spices-lead\|Ericson et al. 2020]]. *Elevated Levels of Lead (Pb) Identified in Georgian Spices*, Annals of Global Health | 2020 | Peer-reviewed | GE Pb occurrence in Spice samples from 25 homes and four bazaars in Georgia, with additional household media assessed during a lead-exposure... (n=128) |
| 8 | [[sources/samsiyah2019-indonesia-salt-lead\|Samsiyah et al. 2019]]. *The Quality of Indonesia Salt: Study of Heavy Metal Lead (Pb) Levels in the Salt*, Jurnal Ilmiah Perikanan dan Kelautan | 2019 | Peer-reviewed | ID Pb occurrence in Salt from Pamekasan Regency, Indonesia |
| 9 | [[sources/bergerritchie2013-hot-sauce-lead\|Berger Ritchie et al. 2013]]. *An evaluation of lead concentrations in imported hot sauces*, Journal of Environmental Science and Health, Part B: Pesticides, Food Contaminants, and Agricultural Wastes | 2013 | Peer-reviewed | US/MX/GT Pb occurrence in 25 bottles of imported hot sauces purchased Sep 2009–Jan 2010 at 5 ethnic markets, 2 grocery stores, and... (n=25) |
| 10 | [[sources/bassioni2012-aluminum-foil-meat-cooking-uae\|Bassioni et al. 2012]]. *Risk Assessment of Using Aluminum Foil in Food Preparation*, International Journal of Electrochemical Science | 2012 | Peer-reviewed | AE/EG Al occurrence in Six experimental cooking-solution recipes (variants on 40% minced-beef extract + tomato juice + citric acid + NaCl, with... (n=6) |
| 11 | [[sources/jecfa-67th-aluminium-methylmercury-2007\|JECFA 2007]]. *Evaluation of certain food additives and contaminants — Sixty-seventh report of the Joint FAO/WHO Expert Committee on Food Additives*, WHO Technical Report Series 940 (Sixty-seventh meeting of JECFA, Rome, 20-29 June 2006) | 2007 | Government report | international Al, MeHg, tHg occurrence in Aluminium: total dietary exposure derived from market-basket and duplicate-diet surveys in adults (France, Germany, UK, USA, China), Total... |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 source added; 1 section removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 1 source added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
