---
type: product-category
category: coffee
hmtc_category: 5
hmtc_row: 13
label: Coffee
base_taxonomy: coffee
variant_type: independent_no_split
provenance: category_5_step_0_locked
ingredient_targets: []
primary_metals_of_concern:
  - Pb
  - Cd
  - tAs
vulnerable_population: general_population
applicable_regulations: []
evidence_fitness: EF-5
public_evidence_label: Data gap with documented rationale
review_state: phase3
audience:
  - regulator
  - educator
  - consumer
  - app
wiki_doi: null
updated: 2026-05-15T00:00:00.000Z
sources: 17
kind: Subcategory
dek: >-
  A category profile assembled from its inputs. It reports what the routed
  literature says about the ingredients that drive it, not brand-by-brand
  product tests.
snapshot:
  - k: Corpus sources
    v: '17'
  - k: Ingredient inputs
    v: '1'
---

# Coffee

<!-- BEGIN: hmi-subcategory-v3 -->
## Overview

<div class="hmi-category-framing"><div class="hmi-category-framing-kicker">Category framing</div><p>This is a category risk profile assembled from the ingredients that drive it. It does not test products, name brands, or publish brand-by-brand tables. The metals that govern it, in the routed corpus, are Lead, Cadmium and Total arsenic.</p></div>

## Ingredient drivers

The inputs below are ordered by their share of the routed occurrence evidence for the metal each drives; the bar shows relative position within this category, not a comparison against any limit.

<div class="hmi-driver"><div class="hmi-driver-head"><a class="hmi-driver-name" href="/ingredients/coffee">Coffee</a><span class="hmi-driver-metal">Lead</span></div><div class="hmi-driver-track"><div class="hmi-driver-bar hmi-driver-bar--1" style="width: 92%"></div></div><p class="hmi-driver-desc">Leading lead driver among this category's routed inputs — p95 800 ppb, 5 sources, medium confidence.</p></div>

## Testing and verification posture

Occurrence values in this category are measured by ICP-MS in the source literature, the same method the FDA Toxic Elements Program uses for the survey data behind its action levels.

<div class="hmi-posture-note"><p>Where third-party testing programs are cited as sources, the category-level signal is summarized and the reader is pointed at the original document for anything brand-specific. The Index does not reproduce brand-by-brand tables.</p></div>
<!-- END: hmi-subcategory-v3 -->

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in roasted and ground coffee. The summary tables and inventories below are governed by a fixed set of methodology rules.

**Speciation is treated as non-substitutable.** Total arsenic (tAs) and inorganic arsenic (iAs) are reported separately; most coffee studies report only tAs. Total chromium is not treated as Cr-VI unless the source explicitly speciates hexavalent chromium.

**Basis is preserved and labeled, never silently converted.** Concentrations may be reported on a dry-matter (DM) basis for roasted bean material, or as brewed beverage. The conversion factor from bean DM to cup depends on extraction yield and brew ratio and is not standardized; this page preserves the source's native basis and notes it explicitly.

**Non-detect handling.** Where a source reports a value below its LOD or LOQ, this page preserves the source's reported handling convention.

**Source pooling is avoided.** Aggregate statistics are not computed by pooling across sources with different LOQs, sampling periods, geographies, and analytical bases.

**Row-fit.** The current contributing source reports roasted Arabica coffee beans, which maps directly to this row. Coffee extracts, instant coffee, and decaffeinated coffee are considered partial-fit variants.

**Evidence tiers.** A-tier: peer-reviewed primary studies and government reports. B-tier: NGO reports and trade publications. The single contributing source is A-tier.

**Confidence rating.** Low: 1–2 sources. The current evidence base is n=1 study with n=8 coffee samples; this is very low confidence for population-level inference.

## Decision Snapshot

| Field | Status |
| --- | --- |
| Row state | Locked row node; structured occurrence extraction pending |
| Category hub | [[products/category-5-beverages]] |
| Crosswalk hub | [[products/regulatory-crosswalk-field-findings]] |
| HMTc use | Routing and evidence-gap tracking only; not a certification threshold |

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| No loaded row | No federal or product-specific regulatory limit loaded yet | Comparable field finding extraction pending | Evidence-gap tracking only; do not infer a pass/fail status | [[products/regulatory-crosswalk-field-findings]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Handling

Finished-product findings belong on this product page. Ingredient-only findings belong on ingredient pages before they are used for product inference.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in Coffee. Values are pulled directly from cited sources without re-aggregation. This page publishes literature evidence only, not certification thresholds.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/lead\|Pb]] | Coffee (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/cadmium\|Cd]] | Coffee (summary-only / supporting context) | mean 51.4 to 9920 ppb (3 sources); highest reported 9920 ppb | Sample-level detection rate not reported | No applicable cap loaded | 3 cited | medium (3 sources) | dry-as-sold |
| [[metals/arsenic-total\|tAs]] | Coffee (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
<!-- END: hmi-hmtc-evidence-summary -->

## Source Evidence Inventory

The table below records what each contributing source actually measures. Row-fit is determined by author-stated scope, not re-derivation. Measured product concentrations and intake/exposure estimates are separated; this section covers measured concentrations only. No sources on this page report intake or exposure estimates.

| Metal | Subcategory | n | Statistic | Value | Units | LOD/LOQ | Row-fit | Basis | Source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cd | Roasted Arabica coffee | 8 | Range | <LOQ–0.088; mean 0.058 | mg/kg | LOQ 0.02 mg/kg | exact (roasted Arabica beans) | dry matter | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|1]] |
| Pb | Roasted Arabica coffee | 8 | Range | 0.021–0.791; mean 0.140 | mg/kg | LOQ 0.01 mg/kg | exact | dry matter | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|1]] |
| tAs | Roasted Arabica coffee | 8 | Range | <LOQ | mg/kg | LOQ 0.1 mg/kg | exact | dry matter | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|1]] |
| tHg | Roasted Arabica coffee | 8 | Range | <LOQ–0.007; mean ~LOQ | mg/kg | LOQ 0.005 mg/kg | exact | dry matter | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|1]] |

**Evidence note:** n=8 is a small convenience sample from a single Polish study (2015–2018 collection, Lublin supermarkets and eastern Polish farms). The Pb range 0.021–0.791 mg/kg DM is notable for having one high-end value at 0.791 mg/kg; the sample is too small to determine whether this is a genuine outlier or reflects real supply-chain variation. Cd mean 0.058 mg/kg and As below LOQ in all samples are consistent with the published range from other European surveys. Hg is uniformly negligible. No exceedances of applicable limits were found in this study. The source author notes a noncarcinogenic risk ratio (TTHQmax) of ≤0.125 at Polish average coffee consumption (7.8 g/day), well below the threshold of 1.

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context: Author-Scope Index

<!-- audience: regulator, educator, app -->

The sources below are catalogued as context candidates for this row. The source scope column states what the authors reported; matrix-axis and format-axis row-fit classify how cleanly the scope maps to this row.

| Source | Title | Source scope | Metals | Author-scope row-fit | Canonical appearance |
| --- | --- | --- | --- | --- | --- |
| [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|1]] | The Safety Assessment of Toxic Metals in Commonly Used Herbs, Spices, Tea, and Coffee in Poland | herbs; spices; tea; coffee (Arabica roasted beans, n=8) | Cd, Pb, tAs, tHg | Matrix axis: exact (Arabica roasted coffee). Format axis: bean-as-sold (dry matter). | Direct evidence (Source Evidence Inventory above) |

<!-- END: hmi-broad-context-sources -->

## Levers to reduce contamination

Heavy-metal concentrations in roasted coffee are driven by soil-to-plant uptake in the green bean, with additional secondary contributions from processing equipment and packaging. The evidence base for coffee-specific magnitude estimates is thin; the levers below reflect general literature on coffee supply-chain metals.

| # | Category | Specific lever | Magnitude | Source |
| --- | --- | --- | --- | --- |
| 1 | Sourcing | Select green coffee from origins and farms with documented low soil Pb and Cd; altitude, volcanic soil type, and proximity to industrial activity are the primary drivers of origin-level variance. | Quantified magnitude requires additional origin-stratified studies; current evidence base (n=8, one Polish origin study) insufficient for magnitude estimate. | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|1]] |
| 2 | Agronomic | Soil amendment and pH management at origin farms reduces Cd and Pb uptake; upstream supplier lever, not within roaster control. | Magnitude not quantified in current evidence base for coffee specifically; analogy to other crops suggests soil pH raising reduces Cd uptake. | — |
| 3 | Processing | Wet processing (washed method) vs. natural/dry processing affects the residual parchment and mucilage; the direct effect on Pb and Cd in the final roasted bean is not well quantified in the current source set. Metallic processing equipment (grinders, mills) can contribute trace metal contamination if equipment is worn or improperly maintained. | Magnitude not quantified. Equipment contamination is generally considered minor for standard food-grade stainless steel machinery. | — |
| 4 | Testing and QC | Lot-level ICP-MS on incoming green coffee beans and on roasted/ground product. The analyte priority for coffee is Pb, Cd, and tAs; Hg and Ni are secondary. Bean-DM basis testing is standard for green coffee. | Testing identifies lots above specification before blending or consumer delivery; magnitude of contamination reduction depends on supplier diversity and specification tightness. | — |
| 5 | Packaging and storage | Modern food-contact packaging for roasted coffee (multi-layer foil, paper, HDPE) does not contribute metal migration at levels of regulatory concern under standard storage conditions. Avoid legacy tin containers with internal lacquer not certified for food contact. | Migration from compliant modern packaging is not a demonstrated concern at current evidence levels. | — |

## How standards math uses this page

This page documents what the cited sources report. The row-standard is an aggregate across all contributing sources after basis adjustment and row-fit review — not a decoration on any individual source row — and is set separately under the certification program, not published on this public page.

Citing this page at a single source's maximum value as if it were a threshold justification misreads the evidence architecture. The current evidence base for this row is a single study with n=8 samples; a single-sample range cannot stand in for a representative distribution across the full source pool. HMT&C certification threshold decisions are made separately under the certification program and are not published on this public page.

## Historical recalls and enforcement

<!-- audience: regulator, educator -->

No confirmed metal-driven recalls or regulatory enforcement actions for coffee are documented in the current source set. California Proposition 65 has been used to challenge several coffee brands on lead content; the Proposition 65 Coffee and Lead Safe Harbor exemption established in 2019 reflects the determination that cancer risk from acrylamide in coffee (the primary Prop 65 concern) is outweighed by health benefits — this determination does not resolve lead-specific claims, which remain active. Public-record actions will be documented here as the synthesis pass identifies them. Recalls are framed as regulatory events, not brand rankings.

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/demir2025-coffee-elements-turkiye\|Demir et al. 2025]]. *Determination of Element Contents and Health Risk Assessment of Some Commercial Coffees in Turkiye*, Journal of Tekirdag Agricultural Faculty 22(3) | 2025 | Peer-reviewed | TR Al, Ba, Cr, Ni, Pb, tAs, Cd, Sb occurrence in Ten brewed commercial coffee samples from different product/brand types in Turkiye: classic, milicano, green, gold, decaffeinated, filter, and... (n=10) |
| 2 | [[sources/domagalska2025-instant-coffee-heavy-metals\|Joanna et al. 2025]]. *A quantitative assessment of heavy metal contamination in instant coffee beverages: A comparative analysis of toxic element content and public health risk implications*, Polish Annals of Medicine | 2025 | Peer-reviewed | PL Cd, Pb, Ni, Zn, tAs, Cr occurrence in Instant coffee beverages sold in Poland, including 3-in-1, 2-in-1, and cappuccino products (n=50) |
| 3 | [[sources/salaheldin2025-multimatrix-foods-egypt\|Salahel et al. 2025]]. *Assessment of toxic heavy metals in commonly consumed foods in Egypt and their implications for public health and safety*, Scientific Reports | 2025 | Peer-reviewed | EG Pb, Cd, Cr, tAs occurrence in Fifty-four food and beverage samples collected January-December 2022 from local markets in Qena Governorate, southern Egypt: beverages (n=20;... (n=54) |
| 4 | [[sources/pokorskaniewiada2024-polish-coffee-trace-elements\|Pokorska-Niewiada et al. 2024]]. *Tracking Trace Elements Found in Coffee and Infusions of Commercially Available Coffee Products Marketed in Poland*, Foods | 2024 | Peer-reviewed | PL Pb, Cd occurrence in Ground coffees from four producers (brands A-D) and instant coffees from four producers (brands E-H) available on the... (n=120) |
| 5 | [[sources/berego2023-sidama-coffee-metals\|Berego et al. 2023]]. *The contents of essential and toxic metals in coffee beans and soil in Dale Woreda, Sidama Regional State, Southern Ethiopia*, PeerJ | 2023 | Peer-reviewed | ET Cd, Pb, Cr, Ni, Cu, Zn, Mn occurrence in Coffee-bean samples from six farmer-farm sites and six coffee-washing-plant streams in Dale Woreda, Sidama, Ethiopia; tables report triplicate... (n=12) |
| 6 | [[sources/biondicfuckar2023-coffee-silverskin-metals\|Fuckar et al. 2023]]. *Coffee Silver Skin-Health Safety, Nutritional Value, and Microwave Extraction of Proteins*, Foods | 2023 | Peer-reviewed | HR Ni, Pb, tAs, Cd, Cr, Cu, Zn, Mn, Fe occurrence in One homogenized coffee-silverskin by-product sample from Croatian coffee roasting, analyzed in six parallel probes for reported heavy-metal concentrations. (n=1) |
| 7 | [[sources/guadalupe2023-peruvian-coffee-metals\|Guadalupe et al. 2023]]. *Probabilistic Risk Characterization of Heavy Metals in Peruvian Coffee: Implications of Variety, Region and Processing*, Foods | 2023 | Peer-reviewed | PE iAs, Cd, Cr, tHg, Pb occurrence in Parchment coffee bean samples collected from five Peruvian coffee-growing regions and five Arabica varieties, with a process-modeling subset... (n=159) |
| 8 | [[sources/noor2023-merapi-robusta-coffee-metals\|Noor et al. 2023]]. *Quality Characteristics of Merapi Robusta Coffee Products from the Traditional, Semi Modern, and Modern Process*, Proceedings of the 3rd International Conference on Smart and Innovative Agriculture | 2023 | Peer-reviewed | ID Pb, Cd occurrence in Merapi Robusta green coffee roasted by traditional, semi-modern, and modern methods at two roast times (n=6) |
| 9 | [[sources/zergui2023-coffee-metals-origin-icp-ms\|Zergui et al. 2023]]. *Evaluation of trace metallic element levels in coffee by ICP-MS: a comparative study among different origins, forms, and packaging types and consumer risk assessment*, Biological Trace Element Research | 2023 | Peer-reviewed | DZ Ni, Cr, Pb, Cd, tAs, Al, Mn concentrations (n=44) |
| 10 | [[sources/abraheem2022-tea-coffee-lead-cadmium\|Mohammad et al. 2022]]. *Determination of Lead and Cadmium Concentration in Different Samples of Tea and Coffee Circulating in the Libyan Market*, International Journal of Science and Research | 2022 | Peer-reviewed | LY Pb, Cd occurrence in Seventeen tea samples and eleven coffee samples circulating in Tripoli, Libya during 2018-2019 (n=28) |
| 11 | [[sources/winiarska-mieczan2022-cd-pb-instant-coffee-poland\|Winiarska-Mieczan et al. 2022]]. *Cadmium and Lead Concentration in Drinking Instant Coffee, Instant Coffee Drinks and Coffee Substitutes: Safety and Health Risk Assessment*, Biological Trace Element Research | 2022 | Peer-reviewed | PL Cd, Pb occurrence in 49 instant coffee, instant coffee drink, and coffee-substitute products bought in grocery stores in Chelm, Zamosc, and Lublin,... (n=49) |
| 12 | [[sources/albals2021-coffee-jordan-icpms\|Albals et al. 2021]]. *Multi-element determination of essential and toxic metals in green and roasted coffee beans: A comparative study among different origins using ICP-MS*, Science Progress | 2021 | Peer-reviewed | JO Pb, Cd, Al, Cr, Ni, U occurrence in Green and roasted coffee beans from five origins (Brazil, Colombia, Ethiopia, Guatemala, Yemen) sold on the Jordanian market (n=56) |
| 13 | [[sources/kowalska2021-metals-herbs-spices-tea-coffee-poland\|Kowalska 2021]]. *The Safety Assessment of Toxic Metals in Commonly Used Herbs, Spices, Tea, and Coffee in Poland*, International Journal of Environmental Research and Public Health | 2021 | Peer-reviewed | Cd, Pb, tAs, tHg in roasted Arabica coffee beans (n=8, Poland); the only current contributing source for this row; establishes baseline DM concentrations with all values within applicable limits at the time of publication |
| 14 | [[sources/adler2019-selected-metals-coffee-bosnia\|Adler et al. 2019]]. *Concentrations of selected metals (Na, K, Ca, Mg, Fe, Cu, Zn, Al, Ni, Pb, Cd) in coffee*, Zdravstveno Varstvo / Slovenian Journal of Public Health | 2019 | Peer-reviewed | BA Al, Ni, Pb, Cd, Cu, Zn, Fe, Mg occurrence in Two green coffee bean samples and six roasted coffee bean samples purchased in small local stores in Sarajevo,... (n=8) |
| 15 | [[sources/dasilva2017-heavy-metals-coffee-brazil\|Silva et al. 2017]]. *Determination of heavy metals in the roasted and ground coffee beans and brew*, African Journal of Agricultural Research | 2017 | Peer-reviewed | BR Cd, Cr, Cu, Mn, Ni, Pb, Zn occurrence in 50 Coffea arabica samples collected from farms and coffee marketing centers in the Alto Paranaiba region, Minas Gerais,... (n=50) |
| 16 | [[sources/stahl2017-aluminum-food-contact-part1\|Stahl et al. 2017]]. *Migration of aluminum from food contact materials to food - a health risk for consumers? Part I of III: exposure to aluminum, release of aluminum, tolerable weekly intake (TWI), toxicological effects of aluminum, study design, and methods*, Environmental Sciences Europe | 2017 | Peer-reviewed | DE/EU Al occurrence in Hessian State Laboratory aluminum results for 1,825 foodstuff samples across 30 product groups, plus Part I study-design context... (n=1825) |
| 17 | [[sources/efsa2015-nickel-food-water\|EFSA 2015]]. *Scientific Opinion on the risks to public health related to the presence of nickel in food and drinking water*, EFSA Journal 2015;13(2):4002, 202 pp. | 2015 | Government report | EU Ni occurrence in 18,885 food samples and 25,700 drinking water samples (final dataset after exclusions) submitted to EFSA from 15 European... (n=18885) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [68d063705a](https://github.com/paleofoundation/heavymetalindex/commit/68d063705a) | 2026-08-18 | major | 2 sections added and 1 removed; narrative text revised |
| [ad172bca7e](https://github.com/paleofoundation/heavymetalindex/commit/ad172bca7e) | 2026-08-09 | correction | Narrative text revised |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 1 section added; narrative text revised |
| [3a67e13071](https://github.com/paleofoundation/heavymetalindex/commit/3a67e13071) | 2026-08-02 | minor | Narrative text revised |
| [91c7d5591e](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591e) | 2026-08-02 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
