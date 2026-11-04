---
title: "Mixed fruit"
dek: "A cross-commodity summary of heavy metal occurrence in diverse fruit types. The evidence covers dried fruits, citrus, and tropical climacteric fruits, with concentrations varying widely by commodity, processing state, and agricultural practice."
rail_highlights:
  - label: Cadmium
    text: Dried fruits showed frequent cadmium exceedances above FAO/WHO limits
    source: sources/hadi2025-dried-fruits-heavy-metals-iraq
    source_label: Hadi et al. 2025
  - label: Chemical ripening
    text: Calcium carbide treatment sharply increased arsenic in banana, mango, and plantain
    source: sources/mode2026-calcium-carbide-ripening-climacteric-fruits
    source_label: Mode et al. 2026
type: ingredient
commodity: fruit-mixed
label: "Mixed fruit"
aliases: [mixed-fruit, fruit-assorted]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 642]
    p95_ppb: 1951
    confidence: low
    n_studies: 3
    last_reviewed: 2026-11-04
    basis: "mixed; dried fruit wet weight (Hadi), fresh fruit dry weight (Ashfaq, Mode)"
    notes: "Wide range reflects commodity and processing heterogeneity. Dried fruits carry higher concentrations than fresh citrus."
  tAs:
    status: populated
    typical_ppb: [957, 2337]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-11-04
    basis: "fresh weight (Mode 2026, naturally ripened controls only)"
    notes: "Single study; values from Nigerian market fruit. CaC2-treated fruit excluded from baseline."
  Cd:
    status: populated
    typical_ppb: [1, 191]
    p95_ppb: 897
    confidence: low
    n_studies: 2
    last_reviewed: 2026-11-04
    basis: "mixed; dried fruit wet weight (Hadi), fresh fruit fresh weight (Mode)"
    notes: "Dried fruits dominate the upper range. Fresh tropical fruit cadmium is near detection limits."
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
literature_scope: thin-with-evidence
sources: 4
wiki_doi: null
updated: 2026-11-04
hero_image: /static/heroes/melons-watermelon-cantaloupe-mixed-fruit.webp
hero_image_alt: "Cantaloupe, honeydew, watermelon and a bowl of mixed fruit illustrating fruit Mixed ingredient context."
quick_read:
  summary: "Mixed fruit is a cross-commodity grouping spanning dried fruits, citrus, and tropical climacteric fruits. Heavy metal concentrations vary widely by commodity type, drying or processing state, and agricultural practices including irrigation source and chemical ripening."
  points:
    - label: Metals of concern
      text: "lead, cadmium, and total chromium in dried fruits; total arsenic in calcium carbide-treated tropical fruits"
    - label: Main drivers
      text: "drying concentrates metals present in fresh fruit; wastewater irrigation modestly elevates uptake in citrus; calcium carbide ripening introduces arsenic, cadmium, and lead directly from chemical impurities"
    - label: Practical framing
      text: "dried fruits carry higher metal loads per kilogram than fresh equivalents; chemical ripening is a controllable contamination pathway"
---

# Mixed fruit

<!-- BEGIN: hmi-opening -->
<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Mixed fruit is a cross-commodity grouping spanning dried fruits, citrus, and tropical climacteric fruits. Heavy metal concentrations vary widely by commodity type, drying or processing state, and agricultural practices including irrigation source and chemical ripening.</p>
  <ul>
    <li><strong>Metals of concern:</strong> lead, cadmium, and total chromium in dried fruits; total arsenic in calcium carbide-treated tropical fruits</li>
    <li><strong>Main drivers:</strong> drying concentrates metals present in fresh fruit; wastewater irrigation modestly elevates uptake in citrus; calcium carbide ripening introduces arsenic, cadmium, and lead directly from chemical impurities</li>
    <li><strong>Practical framing:</strong> dried fruits carry higher metal loads per kilogram than fresh equivalents; chemical ripening is a controllable contamination pathway</li>
  </ul>
</div>

This page draws on evidence from 3 peer-reviewed studies and 1 other cited source. The complete citation list is at the bottom of the page.
<!-- END: hmi-opening -->

## Why this commodity accumulates heavy metals

Fruits accumulate heavy metals primarily through root uptake from soil, with translocation through the vascular system into the developing fruit. The degree of accumulation depends on soil metal concentration, soil pH, organic matter content, and species-specific physiology. Thick-skinned fruits such as citrus and banana present a natural barrier that limits direct atmospheric deposition on the edible flesh, but root-mediated uptake still delivers metals to the pulp.

Three pathways are documented in the current evidence corpus. First, agricultural water quality affects soil metal loading and subsequent plant uptake. Citrus orchards irrigated with domestic wastewater in Sargodha, Pakistan, showed higher zinc, chromium, and iron in fruit tissue than orchards irrigated with canal water, though all values remained below permissible limits ([[sources/ashfaq2026-citrus-heavy-metals-pakistan-irrigation|1]]). Second, drying concentrates all metals present in the fresh fruit proportionally to the water removed, so dried fruits carry higher per-kilogram concentrations than their fresh equivalents. A market survey of 15 dried fruit commodities from Iraqi markets found cadmium and chromium above FAO/WHO limits in multiple samples ([[sources/hadi2025-dried-fruits-heavy-metals-iraq|2]]). Third, chemical ripening with calcium carbide introduces arsenic, cadmium, and lead directly from impurities in the industrial-grade chemical. The commercial calcium carbide used in one Nigerian study contained 21.75 mg/kg arsenic, 0.052 mg/kg cadmium, and 0.881 mg/kg lead ([[sources/mode2026-calcium-carbide-ripening-climacteric-fruits|3]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=3 | 10 to 642 | low | [[sources/hadi2025-dried-fruits-heavy-metals-iraq\|2]], [[sources/ashfaq2026-citrus-heavy-metals-pakistan-irrigation\|1]], [[sources/mode2026-calcium-carbide-ripening-climacteric-fruits\|3]] |
| Cd | n=2 | 1 to 191 | low | [[sources/hadi2025-dried-fruits-heavy-metals-iraq\|2]], [[sources/mode2026-calcium-carbide-ripening-climacteric-fruits\|3]] |
| tAs | n=1 | 957 to 2337 | low | [[sources/mode2026-calcium-carbide-ripening-climacteric-fruits\|3]] |
| tHg | data gap | n/a | n/a | n/a |
| iAs | data gap | n/a | n/a | n/a |
| MeHg | data gap | n/a | n/a | n/a |
| Ni | data gap | n/a | n/a | n/a |
| Al | data gap | n/a | n/a | n/a |
| Cr (total) | n=2 | 11 to 354 | low | [[sources/hadi2025-dried-fruits-heavy-metals-iraq\|2]], [[sources/ashfaq2026-citrus-heavy-metals-pakistan-irrigation\|1]] |
| Sn | data gap | n/a | n/a | n/a |

The wide ranges for lead, cadmium, and chromium reflect the heterogeneity of the "mixed fruit" grouping. Dried-fruit values from Hadi et al. ([[sources/hadi2025-dried-fruits-heavy-metals-iraq|2]]) dominate the upper end of each range, while fresh citrus from Ashfaq et al. ([[sources/ashfaq2026-citrus-heavy-metals-pakistan-irrigation|1]]) sits at the lower end. These values should not be read as a single population distribution; they span fundamentally different commodity types and processing states.

The total arsenic values from Mode et al. ([[sources/mode2026-calcium-carbide-ripening-climacteric-fruits|3]]) are from naturally ripened controls of banana, mango, and plantain purchased from one market in Sokoto, Nigeria. The study does not report detection limits or certified reference material recovery for arsenic, so the absolute values carry uncertainty even though the within-study pattern (increase with calcium carbide dose) is internally consistent. These values should be treated as context for the calcium carbide contamination pathway rather than as representative baseline concentrations for tropical fruits generally.

## Ranges by source, region, and variety

The three studies in the current corpus span distinct geographies, commodity types, and analytical bases, limiting direct cross-study comparison.

| Study / location | Material / design | Metal species | Value (units and basis) | n | Interpretation / limitation |
| --- | --- | --- | --- | --- | --- |
| [[sources/hadi2025-dried-fruits-heavy-metals-iraq\|2]], Iraq (Iranian-origin products) | 15 dried fruit types, market survey, AAS, wet weight inferred | lead | ND to 1951 ppb; mean 642 ppb | 15 | All below FAO/WHO 10 mg/kg limit; single sample per commodity limits generalizability |
| [[sources/hadi2025-dried-fruits-heavy-metals-iraq\|2]], Iraq (Iranian-origin products) | 15 dried fruit types, market survey, AAS, wet weight inferred | cadmium | ND to 897 ppb; mean 191 ppb | 15 | 10 of 15 exceeded FAO/WHO 0.05 mg/kg limit; apple (897 ppb) was highest |
| [[sources/hadi2025-dried-fruits-heavy-metals-iraq\|2]], Iraq (Iranian-origin products) | 15 dried fruit types, market survey, AAS, wet weight inferred | total chromium | ND to 1289 ppb; mean 354 ppb | 15 | Multiple samples exceeded 0.12 mg/kg limit; peach (1289 ppb) was highest |
| [[sources/ashfaq2026-citrus-heavy-metals-pakistan-irrigation\|1]], Sargodha, Pakistan | 3 citrus species, field study, AAS, dry weight | lead | 10 to 31 ppb | 18 | All below 0.1 mg/kg permissible limit; wastewater irrigation did not raise lead above canal water |
| [[sources/ashfaq2026-citrus-heavy-metals-pakistan-irrigation\|1]], Sargodha, Pakistan | 3 citrus species, field study, AAS, dry weight | total chromium | 11 to 100 ppb (= 0.011 to 0.10 mg/kg) | 18 | All below 2.3 mg/kg permissible limit; wastewater site showed higher values |
| [[sources/mode2026-calcium-carbide-ripening-climacteric-fruits\|3]], Sokoto, Nigeria | Banana, mango, plantain, naturally ripened controls, AAS | total arsenic | 957 to 2337 ppb (controls only) | 9 | No LOD or CRM recovery reported for arsenic; absolute values uncertain |
| [[sources/mode2026-calcium-carbide-ripening-climacteric-fruits\|3]], Sokoto, Nigeria | Banana, mango, plantain, naturally ripened controls, AAS | lead | 52 to 253 ppb (controls only) | 9 | Banana and mango lead exceeded WHO/FAO 0.1 mg/kg accepted safety limit |
| [[sources/mode2026-calcium-carbide-ripening-climacteric-fruits\|3]], Sokoto, Nigeria | Banana, mango, plantain, naturally ripened controls, AAS | cadmium | 1 to 4 ppb (controls only) | 9 | All well below WHO/FAO 0.05 mg/kg accepted safety limit |

Dried fruits (Hadi et al.) represent Iranian-origin products sold in Iraqi markets, sampled in February 2025 as a convenience sample of one unit per commodity. The cadmium exceedances in that dataset are severe (67 percent of samples above the FAO/WHO limit) but should be interpreted with caution given the single-sample design. Fresh citrus (Ashfaq et al.) was grown in Pakistani orchards under controlled irrigation conditions and presents a low-metal profile even under wastewater irrigation. Naturally ripened tropical fruits (Mode et al.) from a Nigerian market showed lead concentrations above the WHO/FAO 0.1 mg/kg threshold in banana and mango controls, but arsenic and cadmium analytical methods were incompletely described.

## Processing effects

Drying is the dominant processing pathway that alters metal concentrations in fruit. Because drying removes water while retaining minerals and metals, the per-kilogram concentration of all metals in dried fruit is higher than in the corresponding fresh fruit. The magnitude depends on the moisture content of the fresh fruit, which typically ranges from 75 to 90 percent for most fruits. A fruit with 85 percent moisture would concentrate metals by roughly 6.7-fold upon complete drying.

Calcium carbide ripening represents a distinct processing effect. Mode et al. ([[sources/mode2026-calcium-carbide-ripening-climacteric-fruits|3]]) demonstrated dose-dependent increases in arsenic, lead, and cadmium when banana, mango, and plantain were treated with 10 or 30 g/kg of industrial-grade calcium carbide. Arsenic showed the largest increase: banana total arsenic rose from 2337 ppb (naturally ripened) to 17653 ppb at the 30 g/kg treatment level (Table 3). The commercial calcium carbide itself contained 21750 ppb arsenic, confirming that the chemical is a direct source of contamination. Cadmium increases were smaller in absolute terms (mango from 2 to 6 ppb at 30 g/kg) but remain relevant as a mechanism.

## Ingredient-derivative risk

The primary derivative forms relevant to food safety include dried fruit snacks, fruit purees for infant food, fruit juice concentrates, and blended fruit products. Dried fruits carry the highest metal concentrations per kilogram because of moisture removal. Fruit purees for baby food retain the full pulp metal load of the fresh fruit and are of concern given the higher sensitivity of infants to metal exposure. Blended fruit products may dilute or concentrate metals depending on the proportions of high-burden and low-burden fruit ingredients.

The calcium carbide contamination pathway is most relevant in markets where the practice persists, particularly in parts of West Africa, South Asia, and the Middle East. Regulatory enforcement against calcium carbide use is variable; Nigeria's National Agency for Food and Drug Administration and Control (NAFDAC) lists it as a restricted chemical, but enforcement gaps allow continued use ([[sources/mode2026-calcium-carbide-ripening-climacteric-fruits|3]]).

## Mitigation options

### Sourcing levers

Irrigation water quality influences metal uptake in orchard fruit. Canal-irrigated citrus in Sargodha showed lower zinc, chromium, and iron than wastewater-irrigated fruit, though all values remained below permissible limits ([[sources/ashfaq2026-citrus-heavy-metals-pakistan-irrigation|1]]). Sourcing fruit from orchards with clean irrigation water is a general risk-reduction strategy, though quantitative data on the magnitude of benefit are limited in the current corpus.

### Agronomic levers

Soil pH management, organic matter amendment, and avoidance of contaminated irrigation water are standard agronomic strategies for reducing metal uptake. The Ashfaq et al. study ([[sources/ashfaq2026-citrus-heavy-metals-pakistan-irrigation|1]]) documented that soil type (sandy alluvial vs alluvial loam) and irrigation source jointly influenced fruit metal concentrations, though the two factors were confounded. No controlled agronomic intervention data are available in the current corpus.

### Processing levers

Avoiding calcium carbide for artificial ripening eliminates the direct chemical contamination pathway. Ethephon, a regulatory-approved ethylene-releasing compound, is a practical alternative that does not introduce arsenic or heavy metal impurities ([[sources/mode2026-calcium-carbide-ripening-climacteric-fruits|3]]). For dried fruits, no processing lever is available to reduce metals once drying has concentrated them; control must occur at the fresh-fruit stage.

### Formulation levers

Blending lower-burden fruits with higher-burden fruits can dilute the overall metal concentration in multi-fruit products. This lever is most relevant for fruit pouch and puree products where ingredient proportions are controlled by the manufacturer.

### Testing and QC levers

Lot testing for cadmium and chromium is warranted for dried fruit ingredients, given the frequency of limit exceedances in the Hadi et al. market survey ([[sources/hadi2025-dried-fruits-heavy-metals-iraq|2]]). For tropical fruits in markets where calcium carbide use persists, arsenic screening of incoming fruit may be appropriate.

### Packaging and storage levers

No quantified data on this lever in the current corpus; section will be expanded when relevant evidence is ingested.

## Regulatory limits that apply

The FAO/WHO Codex Alimentarius sets general maximum levels for lead in certain fruits and for cadmium in selected commodities. Hadi et al. ([[sources/hadi2025-dried-fruits-heavy-metals-iraq|2]]) applied a 10 mg/kg lead limit and a 0.05 mg/kg cadmium limit for dried fruits, citing FAO/WHO permissible levels. For chromium, the referenced limit was 0.12 mg/kg. The European Union Regulation (EU) 2023/915 sets lead and cadmium maximum levels for various fruit categories on a wet-weight basis. No specific dried-fruit maximum level for cadmium is harmonized across all jurisdictions; the applicable limit depends on the commodity and jurisdiction. Calcium carbide is a restricted or banned ripening agent in most regulatory frameworks, including India (FSSAI) and Nigeria (NAFDAC), though enforcement varies.

## What remains uncertain

The current evidence corpus for mixed fruit is heterogeneous and sparse. The following gaps and uncertainties remain.

Whether the cadmium and chromium exceedances in Iranian-origin dried fruits ([[sources/hadi2025-dried-fruits-heavy-metals-iraq|2]]) are representative of dried fruit products in other markets is unknown. The study used a single sample per commodity, so the variability within any one dried fruit type cannot be assessed.

The absolute total arsenic concentrations in naturally ripened Nigerian tropical fruits ([[sources/mode2026-calcium-carbide-ripening-climacteric-fruits|3]]) are high compared to other literature on banana and mango. Whether this reflects genuine environmental contamination, analytical method factors (no detection limit or certified reference material recovery was reported for arsenic), or an artifact of the sample population cannot be determined from the available data.

No data on mercury (total or methylmercury), inorganic arsenic, nickel, aluminum, or tin in the mixed-fruit matrix are available in the current corpus. Nickel and tin data from other fruit-specific pages (such as [[ingredients/banana]]) are not carried here because this page aggregates across commodity types rather than substituting for single-ingredient pages.

The citrus fruit data from Ashfaq et al. ([[sources/ashfaq2026-citrus-heavy-metals-pakistan-irrigation|1]]) are reported on a dry-weight basis without moisture-content data, preventing direct conversion to the wet-weight basis used by most food safety standards.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record.

1. [[sources/ashfaq2026-citrus-heavy-metals-pakistan-irrigation|Comparative assessment of heavy metal accumulation and associated ecological and health risks in citrus orchards under canal and domestic wastewater irrigation]]<span class="hmi-ref-meta">Ashfaq A, Bashir R, Khan ZI, Khalofah A, and AL-Ruzayza S . BMC Plant Biology 26:1581 . 2026 . [doi.org/10.1186/s12870-026-09351-7](https://doi.org/10.1186/s12870-026-09351-7)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/hadi2025-dried-fruits-heavy-metals-iraq|Health Impact of Heavy Metals in Samples of Dried Fruits in Iraq]]<span class="hmi-ref-meta">Hadi QM, Mahdi FA, Hamood FJ, Abbas SH, and Abojassim AA . International Journal of Analytical Chemistry 2025:3934929 . 2025 . [doi.org/10.1155/ianc/3934929](https://doi.org/10.1155/ianc/3934929)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/mode2026-calcium-carbide-ripening-climacteric-fruits|Effects of Chemical Ripening With Calcium Carbide on Nutritional Composition, Antioxidant Capacity and Heavy Metal Accumulation in Climacteric Fruits]]<span class="hmi-ref-meta">Mode AM, Magaji UF, Babatunde MS, Dandare A, Dabai IA, and Dandare SU . International Journal of Food Science 2026:7226409 . 2026 . [doi.org/10.1155/ijfo/7226409](https://doi.org/10.1155/ijfo/7226409)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/henriquez-hernandez2023-baby-purees-spain-elements|Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market]]<span class="hmi-ref-meta">Henriquez-Hernandez LA, Acosta-Dacal AC, Boada LD, Zumbado M, Serra-Majem L, and Luzardo OP . Nutrients 15(14):3251 . 2023 . [doi.org/10.3390/nu15143251](https://doi.org/10.3390/nu15143251)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/ashfaq2026-citrus-heavy-metals-pakistan-irrigation\|Ashfaq et al. 2026]]. *Comparative assessment of heavy metal accumulation and associated ecological and health risks in citrus orchards under canal and domestic wastewater irrigation*, BMC Plant Biology | 2026 | Journal article | Citrus fruit metal concentrations, irrigation effects |
| 2 | [[sources/hadi2025-dried-fruits-heavy-metals-iraq\|Hadi et al. 2025]]. *Health Impact of Heavy Metals in Samples of Dried Fruits in Iraq*, Int. J. Anal. Chem. | 2025 | Journal article | Dried fruit lead, cadmium, chromium concentrations |
| 3 | [[sources/mode2026-calcium-carbide-ripening-climacteric-fruits\|Mode et al. 2026]]. *Effects of Chemical Ripening With Calcium Carbide on Nutritional Composition, Antioxidant Capacity and Heavy Metal Accumulation in Climacteric Fruits*, Int. J. Food Sci. | 2026 | Journal article | Calcium carbide contamination pathway, tropical fruit baseline metals |
| 4 | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|Henriquez-Hernandez et al. 2023]]. *Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market*, Nutrients | 2023 | Journal article | Routing source for mixed fruit in baby purees |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| n/a | 2026-11-04 | major | Evidence fill from HMI-FILL-0008: 3 papers; contamination profile populated for lead, cadmium, total arsenic, total chromium; 8 mandatory body sections added |
| [aa06ad499](https://github.com/paleofoundation/heavymetalindex/commit/aa06ad499) | 2026-08-09 | correction | 1 source added and 1 removed; narrative text revised |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 1 source removed; 1 section removed; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
