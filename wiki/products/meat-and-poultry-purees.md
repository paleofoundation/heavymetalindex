---
title: Meat and Poultry Purees
type: product-category
category: meat-and-poultry-purees
hmtc_row: 10
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
label: "Meat and poultry purees"
base_taxonomy: meat-and-poultry-purees
variant_type: independent_added_step_0c
provenance: added_step_0c_no_existing_home
ingredient_targets: [meat-and-poultry-purees, poultry, beef, turkey]
primary_metals_of_concern: [Pb, Cd, tAs, tHg]
vulnerable_population: infants-0-24mo
applicable_regulations: [fda-ctz-Pb-babyfood-10ppb]
cc_relationship:
  role: independent
  scope: none
  partners: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-03
sources: 16
---

# Meat And Poultry Purees

This page is a structural scaffold for HMTc Category 1 row 10. Broad baby-food analytical sources and a small Meli 2024 meat-homogenate summary are promoted; meat-and-poultry puree-specific distributions are still pending.

## Who this page is for

<!-- BEGIN: hmi-stakeholder-guide -->
<div class="hmi-stakeholder-guide">
 <div class="hmi-stakeholder-guide-label">Who this page is for</div>
 <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
 <dl>
 <div>
 <dt>Brand legal and regulatory affairs</dt>
 <dd>Cherry-pick attack vectors on meat and poultry purees typically center on lead in livestock liver and kidney products and on cadmium accumulation in older animals. Sourcing transparency (cut, age, region) is the defensive core; the Methodology section's species-vs-species rule (total Hg vs MeHg, etc.) keeps non-comparable values out of the read. The cited sources at the bottom of this page are the citations list, written to be quoted into a Daubert brief without further editing.</dd>
 </div>
 <div>
 <dt>Retailer quality and compliance</dt>
 <dd>The Federal / Regulatory Limits vs Field Findings section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined and a methodology anchor when speciation differs. The Literature Evidence Summary gives source count and confidence rating per analyte.</dd>
 </div>
 <div>
 <dt>Brand QA and product development</dt>
 <dd>Use the <a href="/certification/lab-result-comparator?category=meat-and-poultry-purees">Lab Result Comparator</a> to position a single lab value inside the cited literature. The comparator positions a single lab value inside the cited literature for meat and poultry purees, against the FDA 2025 baby-food lead cap.</dd>
 </div>
 <div>
 <dt>Regulators, journalists, and adversarial readers</dt>
 <dd>Every numeric claim on this page traces to a source page. The Evidence Governance note explains what this page is and is not (literature evidence, not HMT&amp;C certification thresholds).</dd>
 </div>
 <div>
 <dt>HMT&amp;C staff (internal)</dt>
 <dd>HMT&amp;C certification thresholds for products in this row are developed under the certification program at <a href="https://heavymetaltested.com">heavymetaltested.com</a>, not on this public page. The Index and HMT&amp;C operate on the same evidence base but apply different publication rules; see the <a href="/methodology">methodology</a> for the separation.</dd>
 </div>
 </dl>
</div>
<!-- END: hmi-stakeholder-guide -->

## Methodology

This page reports what the cited sources say about heavy-metal concentrations in meat and poultry purees. The summary tables and inventories below are governed by a fixed set of methodology rules so the evidence is interpretable and auditable.

**Speciation is treated as non-substitutable.** Inorganic arsenic (iAs) and total arsenic (tAs) are reported separately; the toxicology and regulatory ceilings differ. Total chromium (Cr) is not interpreted as hexavalent chromium (Cr-VI) unless the source explicitly speciates Cr-VI.

**Basis is preserved and labeled, never silently converted.** Concentrations may be reported as wet weight (as consumed/ready-to-eat) or dry weight, or on other bases. Each table below labels the source basis explicitly.

**Non-detect handling.** Where a source reports a value below its LOD or LOQ, this page preserves the source's reported handling convention.

**Source pooling is avoided.** Aggregate statistics are not computed by pooling across sources with different LOQs, sampling periods, geographies, and analytical bases.

**Row-fit.** Sources are classified by how cleanly their reported scope matches this product row. Direct row-fit means the author's stated scope matches this matrix. Partial or unknown fit means the author uses a broader category.

**Evidence tiers.** A-tier: peer-reviewed primary studies and government reports. B-tier: NGO reports and trade publications. Synthesis leans on A-tier.

**Confidence rating.** Low: 1–2 sources. Medium: 3–10 sources. High: more than 10 sources.

**HMT&C threshold-setting is separate.** HMT&C certification thresholds for products in this row are developed under the certification program at heavymetaltested.com, not on this page.

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/fda2025-lead-processed-baby-foods]]: Federal FDA final action level: 10 ug/kg Pb. Scope: fruits; vegetables excluding single-ingredient root vegetables; mixtures including grain- and meat-based mixtures; yogurts; custards/puddings; single-ingredient meats for children under 2. Basis: as sold or ready-to-eat as applicable. | Meli 2024 reports Pb <100 ug/kg wet weight in four homogenized meat products; the reporting limit is above the FDA 10 ug/kg and EU 20 ug/kg Pb reference values. | Regulatory value loaded; comparison blocked because the source Pb reporting limit is higher than the reference value. | [[regulations/fda2025-lead-processed-baby-foods]]; [[sources/meli2024-chemical-characterization-baby-food-italy]] |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: baby food and processed cereal-based food for infants and young children, except covered infant drinks and formula/medical foods. Basis: product as placed on market. | Meli 2024 reports Pb <100 ug/kg wet weight in four homogenized meat products; the reporting limit is above the FDA 10 ug/kg and EU 20 ug/kg Pb reference values. | EU maximum level loaded; comparison blocked because the source Pb reporting limit is higher than the reference value. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/meli2024-chemical-characterization-baby-food-italy]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 40 ug/kg Cd. Scope: baby food and processed cereal-based food for infants and young children. Basis: product as placed on market. | Meli 2024 reports Cd <5 ug/kg wet weight in four homogenized meat products; this is a censored small-N source summary. | EU maximum level loaded; censored upper bound is below 40 ug/kg but remains summary evidence only. | [[regulations/eu-2023-915-cadmium]]; [[sources/meli2024-chemical-characterization-baby-food-italy]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level tracking is maintained in the staff Standards Workbench.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in Meat and poultry purees. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/lead\|Pb]] | Meat and poultry purees (direct row-fit) | highest reported 0 ppb | 0% detected (0/4, Meli 2024, wet-weight) | [[regulations/fda2025-lead-processed-baby-foods]]: 10 ppb (as sold or ready-to-eat as applicable) | 1 cited | low (1-2 sources) | wet-weight |
| [[metals/cadmium\|Cd]] | Meat and poultry purees (direct row-fit) | highest reported 0 ppb | 0% detected (0/4, Meli 2024, wet-weight) | [[regulations/eu-2023-915-cadmium]]: 40 ppb (product as placed on market) | 1 cited | low (1-2 sources) | wet-weight |
| [[metals/arsenic-total\|tAs]] | Meat and poultry purees (direct row-fit) | highest reported 0 ppb | 0% detected (0/4, Meli 2024, wet-weight) | No applicable cap loaded | 1 cited | low (1-2 sources) | wet-weight |
| [[metals/mercury-total\|tHg]] | Meat and poultry purees (direct row-fit) | mean 4 ppb (1 source); highest reported 4 ppb | Sample-level detection rate not reported | No applicable cap loaded | 1 cited | low (1-2 sources) | wet-weight |
<!-- END: hmi-hmtc-evidence-summary -->

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current [[regulations/fda-closer-to-zero|FDA Closer to Zero]] | 10 ppb (FDA final guidance action level) | ready-to-eat processed baby food | Single-ingredient meats and meat-based mixtures for babies and young children under 2 |
| [[regulations/eu-2023-915|EU 2023/915]] | 20 ppb | baby food as placed on market | EU maximum level. |
| [[regulations/california-prop65|Prop 65]] MADL screen | 4.5 ppb | 21 CFR 101.12 strained/junior ready-to-serve infant food RACC of 110 g | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | FDA is 10 ppb and EU is 20 ppb, while the Prop 65 serving-equivalent screen is about 4.5 ppb at 110 g/day. | Use FDA 10 ppb as regulatory cap/context, then rely on meat/poultry occurrence evidence and ingredient drivers for any tighter HMTc threshold. |

Regulatory alignment alone does not show whether a meat puree is low relative to measured category occurrence.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: evidence-backed scaffold; row-specific synthesis remains incomplete.
- Source coverage: measured-values table populated from promoted A-tier sources; row-fit caveats remain in the table.
- Next ingest target: meat and poultry baby-food monitoring data across the Category 1 metal panel.
- Ingredient targets are unresolved app-taxonomy placeholders, not source-backed typical-ingredient findings.

## Source Evidence Inventory

<!-- audience: regulator, educator, consumer, app -->

Meat and poultry puree evidence is currently grouped with meat/fish infant foods or homogenized meat foods; poultry-specific values are not yet resolved.

| Analyte | Evidence scope | Reported value | Approximate ppb equivalent | Source | Row-fit caveat |
| --- | --- | --- | --- | --- | --- |
| [[metals/arsenic-total|Total arsenic]] | UK meat and fish based infant foods/dishes | 15 ug/kg | 15 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Combines meat and fish; not poultry-specific. |
| [[metals/arsenic-inorganic|Inorganic arsenic]] | UK meat and fish based infant foods/dishes | 2 to 4 ug/kg | 2 to 4 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Combines meat and fish; not poultry-specific. |
| [[metals/cadmium|Cadmium]] | UK meat and fish based infant foods/dishes | 9 ug/kg | 9 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Combines meat and fish; not poultry-specific. |
| [[metals/lead|Lead]] | UK meat and fish based infant foods/dishes | 4 to 5 ug/kg | 4 to 5 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Combines meat and fish; not poultry-specific. |
| [[metals/nickel|Nickel]] | UK meat and fish based infant foods/dishes | 43 to 72 ug/kg | 43 to 72 ppb | [[sources/fsa2016-infant-food-formula-metals-survey]] | Combines meat and fish; not poultry-specific. |
| [[metals/aluminum|Aluminum]], [[metals/arsenic-total|total arsenic]], [[metals/mercury-total|total mercury]], [[metals/nickel|nickel]], [[metals/tin|tin]], [[metals/cadmium|cadmium]], and [[metals/lead|lead]] | Italian homogenized meat products | Al 753 ppb; tAs <17 ppb; tHg 4 ppb; Ni 86 ppb; Sn 267 ppb; Cd <5 ppb; Pb <100 ppb | same numeric ppb wet weight | [[sources/meli2024-chemical-characterization-baby-food-italy]] | Small N=4 wet-weight category means/censored values; summary evidence only. |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports a French meat/fish-based ready-to-eat infant-meal category with N=45. The table does not split meat, poultry, fish, or rice-containing meals, so these rows are broad context for meat and poultry purees. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Meat/fish-based ready-to-eat meals | 45 | as consumed | 597 / 2590 ppb | 27.5 / 411 ppb | 9.31 / 30 ppb | 68.9 / 155 ppb | 75.7 / 143 ppb | 49.3 / 83 ppb |

## Row Relationship

This row is independent in the locked row architecture and has no clean-counterpart partner.

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2024 analytical study of European baby foods reported wet-weight Table 5 summary rows for four homogenized meat products, including Al 753 ppb, tAs <17 ppb, tHg 4 ppb, Ni 86 ppb, Sn 267 ppb, Cd <5 ppb, and Pb <100 ppb; these are small-N category means or censored values, not percentile distributions. [[sources/meli2024-chemical-characterization-baby-food-italy]]

A 2025 global scoping review reported Pb detection in 83% and Cd detection in 84% of meat and meat-mix baby-food determinations, but the review grouping does not isolate poultry purees or finished puree format. [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]

Risk characterization for this row remains limited. <!-- UNCITED: Need meat and poultry puree datasets or regulatory monitoring reports before assigning metals of concern or describing relative risk. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

Potential variance drivers for meat and poultry purees should be documented only after sources distinguish meat type, organ-meat inclusion if relevant, feed or environmental inputs, processing, and analytical method. <!-- UNCITED: Need product-category or ingredient-level sources that report meat and poultry puree metal concentrations and methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/meat-and-poultry-purees]], [[ingredients/poultry]], and [[ingredients/beef]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

See the page-level crosswalk above and [[products/regulatory-crosswalk-field-findings]] for current regulatory context; row-specific enforcement events remain pending.

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Levers to reduce contamination

Meat and poultry purees present a different contamination profile from plant-based baby foods. Cadmium, mercury, and lead in meat products are primarily driven by animal dietary exposure during rearing and by organ-tissue distribution (liver concentrates Cd, kidney concentrates Pb and Cd). Levers are ordered by approximate impact.

| # | Category | Specific lever | Magnitude | Source |
|---|---|---|---|---|
| 1 | Sourcing | Specify muscle meat (not organ meat) for infant puree formulation. Organ meats — particularly liver and kidney — concentrate Pb and Cd at significantly higher levels than muscle tissue; if organ meats are included, source from certified-low-metal suppliers. | _Quantified magnitude data not yet ingested from cited sources; section will be expanded when organ-vs-muscle concentration data is available._ | — |
| 2 | Agronomic | Animal feed quality control at farm level reduces heavy metal accumulation in muscle and organs. Grain- or forage-based feeds from high-Cd soils increase tissue Cd concentrations. | _Quantified magnitude data not yet ingested; section will be expanded when feed-to-tissue transfer data is available._ | — |
| 3 | Processing | Trimming fat and connective tissue reduces some heavy metal concentrations; muscle-only processing provides cleaner product than whole-carcass approaches for some metals. | _Quantified magnitude data not yet ingested from cited sources._ | — |
| 4 | Formulation | Avoid disproportionate use of liver or kidney puree where Cd is a concern. | _Quantified magnitude data not yet ingested._ | — |
| 5 | Testing and QC | Lot-level ICP-MS on incoming meat ingredients with particular attention to Cd and Pb in organ-meat components. | _Quantified magnitude data not yet ingested for detection-power modeling._ | — |
| 6 | Packaging and storage | Not a primary lever for retort-pouched or glass-jarred meat purees under normal conditions. | — | — |

Cross-links: relevant ingredient pages where they exist.

## How standards math uses this page

This page documents what the cited sources report. The row-standard percentile in the Heavy Metal Tested and Certified (HMT&C) staff workbench is derived from the aggregate across all contributing sources after basis adjustment and row-fit review — it is not a decoration on any individual source row, and it is not published on this public page.

Citing this page at a single source's maximum value as if it were a threshold justification misreads the evidence architecture: the maximum observed in one study is not the same as a representative value across the full source pool. HMT&C certification threshold decisions are made separately under the certification program and are not published on this public page.

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context: Author-Scope Index

<!-- audience: regulator, educator, app -->

The sources below are catalogued as product-context candidates for this row. The "Author-scope row-fit" column states what the authors actually resolved on each axis: matrix (cow milk-based, soy-based, rice-based, non-rice, or unresolved) and format (powder, ready-to-feed liquid, concentrated liquid, dry, or unresolved). A source counts toward this row's evidence pool only once; rows marked "Cross-reference" already appear as direct evidence elsewhere on this page and are not counted again here.

| Source | Title | Source scope | Metals | Author-scope row-fit | Canonical appearance |
| --- | --- | --- | --- | --- | --- |
| [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] | Trace element contents in foods from the first French Total D... | infant-formula; baby-cereals; fruit-purees; fruit-juice-not-canned | Al; Sb; tAs; Cd; Cr; Co; Ni; Sn; V | Matrix axis: unresolved (declares infant formula broadly). Format axis: unresolved (powder vs RTF not split). Source is broader than this row; authors do not narrow to this exact matrix/format pair. | Cross-reference - section: French TDS Category Rows |
| [[sources/fsa2016-infant-food-formula-metals-survey]] | Survey of metals in commercial infant foods, infant formula a... | infant-formula-powder; infant-formula-rtf-liquid; baby-cereals; fruit-purees | Al; Sb; tAs; iAs; Cd; Cr; Cu; I; Fe; Pb; Mn; tHg; Ni; Se; Sn; Zn | Matrix axis: unresolved (declares powder generally; soy/non-soy not split). Format axis: partial (covers multiple formats without splitting). Source is broader than this row; authors do not narrow to this exact matrix/format pair. | Cross-reference - section: Source Evidence Inventory |

<!-- END: hmi-broad-context-sources -->

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Trace element contents in foods from the first French Total Diet Study on infants and toddlers]]<span class="hmi-ref-meta">Rachida Chekri, Emilie Le Calvez, Julie Zinck, Jean-Charles Leblanc, Veronique Sirot, Marion Hulin, et al. · Journal of Food Composition and Analysis · 2019 · [doi.org/10.1016/j.jfca.2019.02.002](https://doi.org/10.1016/j.jfca.2019.02.002)</span><span class="hmi-ref-tag">Review</span>
2. [[sources/meli2024-chemical-characterization-baby-food-italy|Chemical characterization of baby food consumed in Italy]]<span class="hmi-ref-meta">Meli MA, Desideri D, Sisti D, Fagiolino I, and Roselli C · PLOS ONE · 2024 · [doi.org/10.1371/journal.pone.0297158](https://doi.org/10.1371/journal.pone.0297158)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review]]<span class="hmi-ref-meta">Sonia Collado-Lopez, Maria Fernanda Rodriguez Hernandez, Rosa Maria Mariscal-Moreno, Martha Maria Tellez-Rojo, Larissa Betanzos-Robledo, Moises Reyes Luna, et al. · Nutrition Reviews · 2025 · [doi.org/10.1093/nutrit/nuaf138](https://doi.org/10.1093/nutrit/nuaf138)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/napier2024-wanabana-lead-apple-cinnamon|Childhood Lead Exposure Linked to Apple Cinnamon Fruit Puree Pouches — North Carolina, June 2023–January 2024]]<span class="hmi-ref-meta">Napier MD and et al. · MMWR Morbidity and Mortality Weekly Report · 2024 · [doi.org/10.15585/mmwr.mm7328a2](https://doi.org/10.15585/mmwr.mm7328a2)</span><span class="hmi-ref-tag">Government</span>
5. [[sources/troeschel2024-cinnamon-applesauce-lead|Investigation of Lead and Chromium Exposure After Consumption of Contaminated Cinnamon-Containing Applesauce — United States, November 2023–April 2024]]<span class="hmi-ref-meta">Troeschel AN, Buser MC, Winquist A, Ruckart P, Yeh M, Kuai D, et al. · Morbidity and Mortality Weekly Report (MMWR) · 2024 · [doi.org/10.15585/mmwr.mm7414a2](https://doi.org/10.15585/mmwr.mm7414a2)</span><span class="hmi-ref-tag">Government</span>
6. [[sources/fda-import-alert-99-42-spice-lead|FDA Import Alert 99-42: Detention Without Physical Examination of Spices Due to Lead Contamination]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · FDA Import Alerts · 2024 · [www.accessdata.fda.gov](https://www.accessdata.fda.gov/cms_ia/importalert_1167.html)</span><span class="hmi-ref-tag">Regulation</span>
7. [[sources/houlihan2019-hbbf-whats-in-baby-food|What's in My Baby's Food? A National Investigation Finds 95 Percent of Baby Foods Tested Contain Toxic Chemicals That Lower Babies' IQ, Including Arsenic and Lead]]<span class="hmi-ref-meta">Jane Houlihan and Charlotte Brody · Healthy Babies Bright Futures · 2019 · [www.hbbf.org](https://www.hbbf.org/research/whats-my-babys-food)</span><span class="hmi-ref-tag">NGO</span>
8. [[sources/fda-ctz-Pb-babyfood-2025|Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program · 2025 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children)</span><span class="hmi-ref-tag">Guidance</span>
9. [[sources/fda-iAs-rice-cereal-2020|Inorganic Arsenic in Rice Cereals for Infants: Action Level; Guidance for Industry]]<span class="hmi-ref-meta">U.S. Food and Drug Administration · 2020 · [www.fda.gov](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-level-inorganic-arsenic-rice-cereals-infants)</span><span class="hmi-ref-tag">Government</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/collado-lopez2025-heavy-metals-baby-food-formula\|Collado-Lopez et al. 2025]]. *Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review*, Nutrition Reviews | 2025 | Peer-reviewed | Global scoping review reporting Pb detected in 83% and Cd in 84% of meat and meat-mix baby-food determinations worldwide; does not isolate poultry purees or finished puree format, so used as broad meat-category monitoring context |
| 2 | [[sources/fda-ctz-Pb-babyfood-2025\|FDA 2025]]. *Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry*, U.S. Department of Health and Human Services, Food and Drug Administration, Human Foods Program | 2025 | Government guidance | FDA Closer to Zero final guidance establishing the 10 ppb Pb action level for single-ingredient meats for children under two, the regulatory benchmark loaded in the crosswalk section |
| 3 | [[sources/fda2024-lead-baby-food-fy2023-guidance-basis\|FDA 2024]]. *Analytical Results for Lead in Processed Food Intended for Babies and Young Children (FY2023)*, FDA analytical results table | 2024 | Government dataset | 386-sample FY2023 FDA Pb survey including meat-bearing baby food rows, the most recent analytical dataset directly supporting the 2025 final guidance 10 ppb action level for single-ingredient meats |
| 4 | [[sources/garuba2024-heavy-metals-commercial-baby-foods\|Garuba et al. 2024]]. *Evaluation of Heavy Metals in Commercial Baby Foods*, Archives of Food and Nutritional Science | 2024 | Peer-reviewed | US Pb, Cd, tAs, Al, Zn, Cr, Ni occurrence in 10 commercial baby and toddler food products across 7 anonymized brands, purchased from a local retail store in... (n=10) |
| 5 | [[sources/meli2024-chemical-characterization-baby-food-italy\|Meli et al. 2024]]. *Chemical characterization of baby food consumed in Italy*, PLOS ONE | 2024 | Peer-reviewed | Italian market multi-element characterization of four homogenized meat baby food products by ICP-OES/ICP-MS, reporting Al 753 ppb, Ni 86 ppb, Sn 267 ppb, Cd <5 ppb, and Pb <100 ppb (wet weight); Pb reporting limit blocks comparison against the 10-20 ppb action levels |
| 6 | [[sources/henriquez_hernandez2023-elemental-infant-purees\|Henríquez-Hernández et al. 2023]]. *Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market*, Nutrients | 2023 | Peer-reviewed | ES tHg, As, Cr, Ni, Mn, Mo, Tl occurrence in Infants aged 6-12 months in Spain consuming ready-to-eat purees (102 name brand, 57 store brand samples) (n=159) |
| 7 | [[sources/henriquez-hernandez2023-baby-purees-spain-elements\|Henríquez-Hernández et al. 2023]]. *Concentration of Essential, Toxic, and Rare Earth Elements in Ready-to-Eat Baby Purees from the Spanish Market*, Nutrients 15(14):3251 | 2023 | Peer-reviewed | 159 Spanish ready-to-eat baby purees across four food types (fruit, chicken N=39, fish N=40, beef N=40) analyzed by ICP-MS for 38 elements including tAs, tHg, Pb, Cd, Ni, Al, Cr, and U; provides the most matrix-specific meat/poultry puree multi-metal occurrence data on this page |
| 8 | [[sources/zmudzinska2022-rte-baby-foods-poland\|Zmudzinska et al. 2022]]. *Health Safety Assessment of Ready-to-Eat Products Consumed by Children Aged 0.5–3 Years on the Polish Market*, Nutrients 14(11):2325 | 2022 | Peer-reviewed | 397 Polish ready-to-eat baby food products including dinners and meat-bearing products analyzed for As, Cd, Hg, and Pb by ICP-MS and AAS; provides Eastern European market meat-containing baby food occurrence context |
| 9 | [[sources/fda2021-lead-baby-food-fy2020-fy2021\|FDA 2021]]. *Analytical Results for Lead in Food Intended for Babies and Young Children (FY2020-FY2021)*, FDA analytical results table | 2021 | Government dataset | 416-sample FY2020-FY2021 FDA Pb survey including meat-bearing baby food rows, contributing to the multi-year evidence base behind the 2025 final guidance for single-ingredient meats |
| 10 | [[sources/saraiva2021-chromium-speciation-milk-meat-cooking-france\|Saraiva et al. 2021]]. *Chromium speciation analysis in raw and cooked milk and meat samples by species-specific isotope dilution and HPLC-ICP-MS*, Food Additives & Contaminants Part A 38(2):304-314 | 2021 | Peer-reviewed | SS-ID-HPLC-ICP-MS speciation of Cr(III)/Cr(VI) in 10 bovine meat samples finding Cr(VI) not quantified at LOQ 0.049 µg/kg, with no oxidation to Cr(VI) during cooking; supports the Cr(VI) data-gap designation and total-Cr-only reporting for meat puree matrices |
| 11 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | French TDS reporting multi-element concentrations in a meat/fish-based ready-to-eat infant meal category (N=45); meat, poultry, and fish are not split, so used as broad meat-and-fish context rather than poultry-puree-specific evidence |
| 12 | [[sources/fsa2016-infant-food-formula-metals-survey\|FSA 2016]]. *Survey of metals in commercial infant foods, infant formula and non-infant specific foods*, UK Food Standards Agency report FS102048 | 2016 | Government report | UK survey providing category-average tAs (15 ppb), iAs (2-4 ppb), Cd (9 ppb), Pb (4-5 ppb), and Ni (43-72 ppb) for UK meat and fish based infant foods; meat and fish combined, not poultry-specific |
| 13 | [[sources/mania2015-toxic-elements-infant-food-poland\|Mania et al. 2015]]. *Toxic Elements in Commercial Infant Food, Estimated Dietary Intake, and Risk Assessment in Poland*, Polish Journal of Environmental Studies | 2015 | Peer-reviewed | PL/EU Pb, Cd, tAs, tHg occurrence in Approximately 1,000 commercial infant-food samples collected from retail markets in all Polish provinces during the 2009-2013 sanitary-epidemiological monitoring... (n=1000) |
| 14 | [[sources/cot2013-uk-aluminium-infant-diet\|UK Committee on Toxicity 2013]]. *Statement on the potential risks from aluminium in the infant diet*, Committee on Toxicity (COT), Statement 2013/01, June 2013 | 2013 | Government report | UK Al occurrence in Synthesis of UK Drinking Water Inspectorate 2011 tap-water survey (n=42,400 England/Wales, n=1,730 Northern Ireland, n=5,020 Scotland); FSA 2006... |
| 15 | [[sources/kirkpatrick1980-trace-elements-canadian-baby-foods\|Kirkpatrick et al. 1980]]. *The Trace Element Content of Canadian Baby Foods and Estimation of Trace Element Intake by Infants*, Canadian Institute of Food Science and Technology Journal 13(4):154-161 | 1980 | Peer-reviewed | 1980 Canadian national baseline measuring nine metals in strained and junior meats by AAS (LOD 10 ppb); used as historical context for the decades-long reduction in meat-puree metal concentrations, not as a modern occurrence source |
<!-- END: hmi-source-legend -->
## Historical recalls and enforcement

FDA Closer to Zero infant-and-young-child food enforcement actions are the dominant Cat 1 regulatory-event context: the 2023 WanaBana cinnamon-applesauce Pb-chromate adulteration outbreak (detailed in [[ingredients/herbal-botanicals]] and the [[sources/napier2024-wanabana-lead-apple-cinnamon|Napier 2024 MMWR]] / [[sources/troeschel2024-cinnamon-applesauce-lead|Troeschel 2024]] reports) prompted FDA Import Alert 99-42 ([[sources/fda-import-alert-99-42-spice-lead|FDA 2024]]). Other Cat 1 regulatory events of note: the longstanding HBBF "Baby Food Heavy Metals" reports ([[sources/houlihan2019-hbbf-whats-in-baby-food|Houlihan 2019]]) and 2021 US House Subcommittee report drove FDA's Closer to Zero action-level rulemaking ([[sources/fda-ctz-Pb-babyfood-2025|FDA 2025]], [[sources/fda-iAs-rice-cereal-2020|FDA 2020]]). Individual brand recall actions are not enumerated here; the recalls are framed as regulatory events that established the action-level framework currently in effect.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 6 sources added; 2 sections added and 1 removed; narrative text revised |
| [10eef01a0](https://github.com/paleofoundation/heavymetalindex/commit/10eef01a0) | 2026-05-28 | correction | 1 section added |
| [8530c3e2e](https://github.com/paleofoundation/heavymetalindex/commit/8530c3e2e) | 2026-05-17 | major | 6 sources added; narrative text revised |
| [a7ef14ee6](https://github.com/paleofoundation/heavymetalindex/commit/a7ef14ee6) | 2026-05-17 | minor | Narrative text revised |
| [4e2cdd0cc](https://github.com/paleofoundation/heavymetalindex/commit/4e2cdd0cc) | 2026-05-17 | minor | Narrative text revised |
<!-- END: hmi-page-history -->
