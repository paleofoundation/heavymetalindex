---
type: product-category
category: plant-milks-soy-based
hmtc_category: 5
hmtc_row: 6
label: 'Plant milks, soy-based'
base_taxonomy: plant-milks
variant_type: higher-contamination-sibling
platform_metals:
  - Al
  - Ni
  - Cd
provenance: category_5_step_0_locked
ingredient_targets:
  - plant-milk
  - soy
primary_metals_of_concern:
  - Al
  - Ni
  - Cd
vulnerable_population: general_population
applicable_regulations: []
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: phase3
audience:
  - regulator
  - educator
  - consumer
  - app
wiki_doi: null
updated: 2026-05-09T00:00:00.000Z
sources: 8
kind: Subcategory
dek: "Drinks made from soy, with evidence on trace elements in finished beverages and differences among soy input types."
rail_highlights:
  - label: Exposure
    text: Aluminum measured in finished Brazilian soy beverages
    source: sources/milani2023-trace-elements-soy-based-beverages
    source_label: Study data
  - label: Key distinction
    text: Study measured finished beverages rather than soy ingredient powders
    source: sources/milani2023-trace-elements-soy-based-beverages
    source_label: Study data
snapshot:
  - k: Corpus sources
    v: '8'
  - k: Ingredient inputs
    v: '2'
---

# Plant Milks, Soy-Based

<!-- BEGIN: hmi-subcategory-v3 -->
## Overview

<div class="hmi-category-framing"><div class="hmi-category-framing-kicker">Category framing</div><p>This is a category risk profile assembled from the ingredients that drive it. It does not test products, name brands, or publish brand-by-brand tables. The metals that govern it, in the routed corpus, are Aluminium, Nickel and Cadmium.</p></div>

## Ingredient drivers

The inputs below are ordered by their share of the routed occurrence evidence for the metal each drives; the bar shows relative position within this category, not a comparison against any limit.

<div class="hmi-driver"><div class="hmi-driver-head"><a class="hmi-driver-name" href="/ingredients/soy">Soy</a><span class="hmi-driver-metal">Cadmium</span></div><div class="hmi-driver-track"><div class="hmi-driver-bar hmi-driver-bar--1" style="width: 92%"></div></div><p class="hmi-driver-desc">Leading cadmium driver among this category's routed inputs — p95 15 ppb, 7 sources, medium confidence.</p></div>

<div class="hmi-driver"><div class="hmi-driver-head"><a class="hmi-driver-name" href="/ingredients/plant-milk">Plant milk base</a><span class="hmi-driver-metal">Inorganic arsenic</span></div><div class="hmi-driver-track"><div class="hmi-driver-bar hmi-driver-bar--2" style="width: 92%"></div></div><p class="hmi-driver-desc">Leading inorganic arsenic driver among this category's routed inputs — p95 24 ppb, 1 source, low confidence.</p></div>

## Testing and verification posture

Occurrence values in this category are measured by ICP-MS in the source literature, the same method the FDA Toxic Elements Program uses for the survey data behind its action levels.

<div class="hmi-posture-note"><p>Where third-party testing programs are cited as sources, the category-level signal is summarized and the reader is pointed at the original document for anything brand-specific. The Index does not reproduce brand-by-brand tables.</p></div>
<!-- END: hmi-subcategory-v3 -->

## Methodology

This page reports what the peer-reviewed and regulatory literature states about heavy-metal concentrations in soy-based plant milks. HMT&C certification thresholds for products in this row are developed under the certification program at heavymetalcertified.com, not on this page.

**Speciation is non-substitutable.** Inorganic arsenic (iAs) and total arsenic (tAs) are separate analytes. Total mercury (tHg) and methylmercury (MeHg) are separate analytes. Total chromium (Cr) and hexavalent chromium (Cr-VI) are separate analytes. Values are never interchanged across speciation boundaries.

**Basis is preserved and labeled.** Concentration values are reported as the source states them (as consumed, as placed on market, dry weight). Conversion between bases is shown explicitly when performed; silent conversion is never done.

**Row-fit follows author scope.** A source's matrix and format classification is determined by what the authors state, not by re-derivation. Vague author scope receives a partial row-fit designation; sources silent on matrix receive an unknown designation.

**Non-detect handling preserves source convention.** Sources that report non-detects as zero, as LOD/2, or as `<LOD` are recorded as stated. The convention is noted in the Source Evidence Inventory.

**Source pooling is avoided** across different LOQ thresholds, collection periods, geographies, and analytical-basis differences without explicit documentation of the pooling rationale.

## Decision Snapshot

| Field | Status |
| --------------------- | ---------------------------------------------------------------------------------- |
| Row state | Early occurrence evidence promoted |
| Best current source | [[sources/milani2023-trace-elements-soy-based-beverages]] |
| Support source | [[sources/marques2021-trace-elements-milks-plant-based-drinks]] |
| Computation readiness | Context-ready for Al, Ni, Pb, Cd, Sn, Cr, Sb; not threshold-ready |
| Ingredient routing | [[ingredients/plant-milk]], [[ingredients/soy]] |
| HMTc use | Occurrence prioritization only; no certified-brand, compliance, or threshold claim |

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/aluminum]] (Al) | No federal product-specific limit loaded in this crosswalk. | Milani 2023: Al means 758, 609, and 176 ug/L by soy source; max range endpoint 1822 ug/L. | Occurrence evidence only. Do not infer a federal exceedance or HMTc pass/fail result from this row. | [[sources/milani2023-trace-elements-soy-based-beverages]] |
| [[metals/arsenic-total]] (tAs); [[metals/cadmium]] (Cd); [[metals/lead]] (Pb); [[metals/tin]] (Sn) | No federal/product-specific limit loaded yet. Source-cited non-U.S. thresholds require direct legal-source, unit, basis, and species review. | tAs <38.2 ug/L; Cd <3.8 ug/L; Pb mostly <10.9 ug/L with soybean group mean 2.2 ug/L; Sn <18 ug/L except isolate mean 4.3 ug/L. | No compliance read yet. Load the direct legal text before using this row in regulatory or litigation analysis. | [[sources/milani2023-trace-elements-soy-based-beverages]] |
| Cr-total; Sb | No federal product-specific limit loaded in this crosswalk. | Milani 2023: Cr isolate mean 1.8 ug/L with range <10.9-11.0; hydrosoluble and soybean groups <10.9 ug/L. Sb means 6.2, 2.5, and 12 ug/L with range endpoints up to 61 ug/L. | Occurrence evidence only. Do not infer a federal exceedance or HMTc pass/fail result from this row. | [[sources/milani2023-trace-elements-soy-based-beverages]] |

<!-- END: hmi-product-crosswalk -->

## Broad Product Context: Author-Scope Index

<!-- BEGIN: hmi-broad-context-sources -->
_Broader-scope sources for this row will be listed here when they are catalogued._
<!-- END: hmi-broad-context-sources -->

## Source Evidence Inventory

Sources contributing measured soy-based plant milk concentrations are listed below. Intake and exposure estimates are kept separate from measured product concentrations.

[[sources/milani2023-trace-elements-soy-based-beverages]] analyzed 18 soy-based beverages from Brazil by ICP-OES. The paper is directly relevant to this product row because it measures finished soy beverages rather than soy ingredient powders or isolated soy raw materials.

Milani reports chromium as total/unspecified Cr and antimony as Sb in the finished beverage groups. Those values are useful occurrence context, but they are not Cr-VI evidence, not a compliance determination, and not an HMTc threshold input.

[[sources/marques2021-trace-elements-milks-plant-based-drinks]] measured Spanish retail plant-based drinks and supports the broader row architecture, but it does not resolve the Al/Cd/iAs gaps for this row.

## Ingredient Handling

Ingredient-only values belong on [[ingredients/soy]] or [[ingredients/plant-milk]]. Milani's values are finished beverage values, so they remain here and in the structured occurrence data layer.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in soy-based product. Values are pulled directly from cited sources without re-aggregation. This page publishes literature evidence only, not certification thresholds.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/aluminum\|Al]] | soy-based (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/nickel\|Ni]] | soy-based (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/cadmium\|Cd]] | soy-based (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
<!-- END: hmi-hmtc-evidence-summary -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record.

1. [[sources/milani2023-trace-elements-soy-based-beverages|Trace Elements in Soy-Based Beverages: A Comprehensive Study of Total Content and In Vitro Bioaccessibility]]<span class="hmi-ref-meta">Milani RF, Mauri AA, Sanches VL, Morgano MA, and Cadore S · International Journal of Environmental Research and Public Health · 2023 · [doi.org/10.3390/ijerph20064986](https://doi.org/10.3390/ijerph20064986)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/marques2021-trace-elements-milks-plant-based-drinks|Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks]]<span class="hmi-ref-meta">Marques M, Correig E, Capdevila E, Gargallo E, Gonzalez N, Nadal M, et al. · Biological Trace Element Research · 2021 · [doi.org/10.1007/s12011-021-03021-5](https://doi.org/10.1007/s12011-021-03021-5)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Sources catalogued for this page. The last column says how each source is used here.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/good2026-plant-milk-heavy-metals\|Good et al. 2026]]. *Comparative exposure and risk assessment of heavy metals, nutrients, and organochlorine pesticides in cow and plant-based milks*, Scientific Reports | 2026 | Peer-reviewed | US Cr, tAs, Cd, Pb occurrence in Twenty-two commercially available milk products purchased from major grocery retailers in Houston, Texas, USA. Eight milk-type categories: cow... (n=22) |
| 2 | [[sources/zverina2025-plant-dairy-toxic-elements\|Zvěřina et al. 2025]]. *Essential and toxic elements in plant-based dairy alternatives: implications for vegan diets*, European Food Research and Technology | 2025 | Peer-reviewed | CZ/EU Pb, Cd occurrence in Fifty-four plant-based dairy alternative (PBDA) samples sourced from the Czech market in Brno, Czech Republic. Composition: 35 milk... (n=54) |
| 3 | [[sources/andrade2023-cow-milk-soy-metals\|Andrade et al. 2023]]. *Metals in Cow Milk and Soy Beverages: Is There a Concern?*, Toxics | 2023 | Peer-reviewed | PT Pb, Cd, Mn occurrence in Twenty-eight beverages purchased on the Portuguese retail market in Lisbon between February and May 2019: 14 cow milk... (n=28) |
| 4 | [[sources/hariono2023-soy-milk-cookware-metals\|Hariono et al. 2023]]. *Quality nutrition, metal content, and health risks in soy milk products using aluminum and stainless steel cookers*, Aceh Nutrition Journal, 8(4): 526-532 | 2023 | Peer-reviewed | ID Pb, Cu, Zn, tHg, tAs occurrence in Soy milk from one industrial-scale producer in Sumbersari District, Jember Regency, East Java, Indonesia, compared after processing in... (n=2) |
| 5 | [[sources/milani2023-trace-elements-soy-based-beverages\|Milani et al. 2023]]. *Trace Elements in Soy-Based Beverages: A Comprehensive Study of Total Content and In Vitro Bioaccessibility*, International Journal of Environmental Research and Public Health | 2023 | Peer-reviewed | ICP-OES measurement of Al, tAs, Cd, Cr, Ni, Pb, Sb, and Sn in 18 Brazilian soy-based beverages by soy-source group; primary multi-metal occurrence source for the soy plant-milk row (Al group means 176–758 µg/L; most others <LOQ) |
| 6 | [[sources/redan2023-plant-milk-alternatives-elements\|Redan et al. 2023]]. *Analysis of Eight Types of Plant-based Milk Alternatives from the United States Market for Target Minerals and Trace Elements*, Journal of Food Composition and Analysis | 2023 | Peer-reviewed | US tAs, Cd, Pb occurrence in Eighty-five plant-based milk alternative product units from 19 brands purchased from 10 retail markets and an online retailer... (n=85) |
| 7 | [[sources/marques2021-trace-elements-milks-plant-based-drinks\|Marques et al. 2021]]. *Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks*, Biological Trace Element Research | 2021 | Peer-reviewed | ICP-MS survey of Pb, tHg, Ni, and U in retail plant-based drinks from Spain including soy drink; tHg not detected; provides multi-metal occurrence context and Ni comparison for the soy plant-milk row |
| 8 | [[sources/maduabuchi2007-nigeria-beverages-arsenic-chromium\|Maduabuchi et al. 2007]]. *Arsenic and Chromium in Canned and Non-Canned Beverages in Nigeria: A Potential Public Health Concern*, International Journal of Environmental Research and Public Health | 2007 | Peer-reviewed | NG tAs, Cr occurrence in Fifty commonly consumed canned and non-canned beverages purchased in Nigeria in March 2005: 21 canned beverages and 29... (n=50) |
<!-- END: hmi-source-legend -->

## CC candidate evidence map

| Analyte | Distribution sources (sample-level) | Summary sources | Total source count |
| --- | --- | --- | --- |
| Pb | — | Milani 2023 (group means; mostly <LOQ), Marques 2021 (n=42 plant-drinks) | 2 summary |
| Cd | — | Milani 2023 (all <LOQ; below-LOQ candidate at 5×LOQ=19 ppb) | 1 summary (below-LOQ) |
| tAs | — | Milani 2023 (all <LOQ; below-LOQ candidate at 5×LOQ=191 ppb; high ICP-OES LOQ) | 1 summary (below-LOQ) |
| iAs | — | — | 0 (Milani measured tAs only) |
| MeHg | — | — | 0 |
| tHg | — | Marques 2021 (not detected) | 1 summary |
| **Al** | — | **Milani 2023 (group means 176-758 ppb; range 45-1822 ppb)** | 1 summary (single-source coverage; closing requires 2nd Al source) |
| Ni | — | Milani 2023 (soybean group mean 29 ppb), Marques 2021 | 2 summary |
| Cr-VI | — | inference-cascade only (Hernandez/Saraiva chemistry; milk-like matrix) | 1 cascade |
| Sn | — | Milani 2023 (isolate-protein group mean 4.3 ppb at LOD-zero; max 26 ppb; below-LOQ candidate at 5×LOQ=90 ppb) | 1 summary (below-LOQ) |

## Levers to reduce contamination

The levers below are ordered by estimated impact magnitude for finished soy-based plant milks as a product category. The primary metals of concern are aluminum (Al), nickel (Ni), and cadmium (Cd). Magnitude claims are cited; uncited lever rows carry a placeholder noting that quantified evidence has not yet been ingested.

| Lever category | Specific action | Estimated magnitude | Source |
|---|---|---|---|
| Sourcing | Source soy from low-Cd soils; US soybean-origin Al means (176–758 µg/L in beverage) vary by soy input type (hydrosoluble vs soybean vs isolate); isolate-protein sources yielded lower mean Al in Milani 2023 | Al group means 176–758 µg/L range by soy-source type | [[sources/milani2023-trace-elements-soy-based-beverages\|1]] |
| Sourcing | Supplier certificate of analysis for Cd and Pb on each soy lot; soy accumulates Cd from soil and cadmium burden varies by growing region | _Quantified magnitude data not yet ingested for finished beverage Cd reduction; section will be expanded when evidence is available._ | — |
| Agronomic | Soil Cd pre-screening at soy growing region; low-Cd cultivar selection where available | _Quantified magnitude data not yet ingested_ | — |
| Processing | For isolate-derived soy beverages: wet-process extraction reduces mineral carrythrough relative to whole-bean processing; affects Ni and Al | _Quantified magnitude data not yet ingested_ | — |
| Formulation | Where Al reduction is the target, hydrosoluble or isolate soy fractions may carry lower Al burden than whole-soybean inputs (see Milani 2023 group-mean comparison) | Al group means 176 µg/L (isolate-protein) vs 609–758 µg/L (hydrosoluble/soybean) | [[sources/milani2023-trace-elements-soy-based-beverages\|1]] |
| Testing/QC | Lot-level finished-product ICP-OES or ICP-MS testing for Al, Ni, Cd, and Pb; Milani 2023 ICP-OES LOQs for tAs and Cd were high (191 ppb and 19 ppb respectively), so method selection affects detection capability | _Quantified magnitude data not yet ingested for lot-level QC impact on Cd/tAs_ | — |
| Packaging/storage | Non-canned format; aluminum packaging contact is not a primary contamination pathway for soy beverages in Tetra-Pak or glass formats | _Not a primary lever for this product class_ | — |

## How standards math uses this page

This page reports what the peer-reviewed and government literature says about heavy-metal concentrations in this product category; it publishes no certification thresholds of its own. Certification criteria are set separately under the Heavy Metal Tested & Certified program at heavymetalcertified.com, which reads this page as its literature baseline. The two are kept apart by design, so this page remains an independent record of the evidence rather than a justification for any threshold.

## Historical recalls and enforcement

No public recalls or enforcement actions specifically targeting heavy metals in soy-based plant milks are documented in the wiki's source corpus as of the last review. This section will be populated when regulatory enforcement events are ingested.

_Frame: if FDA, EU, or national-agency enforcement actions involving heavy metals in this product category are identified in future ingest, they will appear here as regulatory events. This section does not rank brands._

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [ad172bca7](https://github.com/paleofoundation/heavymetalindex/commit/ad172bca7) | 2026-08-09 | correction | Narrative text revised |
| [b01ec52c3](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c3) | 2026-08-04 | major | 2 sources added; 1 section added; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 2 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
