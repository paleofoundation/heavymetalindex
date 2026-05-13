---
type: product-category
category: plant-milks-soy-based
hmtc_category: 5
hmtc_row: 6
label: "Plant milks, soy-based"
base_taxonomy: plant-milks
variant_type: contamination_platform
platform_metals: [Al, Ni, Cd]
provenance: category_5_step_0_locked
ingredient_targets: [plant-milk, soy]
primary_metals_of_concern: [Al, Ni, Cd]
vulnerable_population: general_population
applicable_regulations: []
evidence_fitness: EF-3
public_evidence_label: Approaching the bar (Al, Ni, Pb)
review_state: phase3_part19
audience: [regulator, educator, consumer, app]
updated: 2026-05-09
sources: 2
---

# Plant Milks, Soy-Based

This page is HMTc Category 5 row 6. It is no longer a pure scaffold: the row has early finished-product occurrence evidence, but the evidence is still insufficient for HMTc threshold-setting.

<!-- BEGIN: hmi-stakeholder-guide -->
<div class="hmi-stakeholder-guide">
  <div class="hmi-stakeholder-guide-label">Who this page is for</div>
  <p>Heavy Metal Index pages are written for several audiences at once. Each entry point below names where to start if you are reading this page with a specific question in mind.</p>
  <dl>
    <div>
      <dt>Brand legal and regulatory affairs</dt>
      <dd>Cherry-pick attack vectors on soy-based plant milks typically center on cadmium uptake by the soy crop. Geographic and growing-region context are the defensive core. Compare with <a href="/products/plant-milks-non-soy-non-rice">Plant Milks Non Soy Non Rice</a> for the within-pair sibling. The cited sources at the bottom of this page are the citations list, written to be quoted into a Daubert brief without further editing.</dd>
    </div>
    <div>
      <dt>Retailer quality and compliance</dt>
      <dd>The Federal / Regulatory Limits vs Field Findings section compares the applicable regulatory cap to cited field evidence on a like-for-like basis, with basis conversion shown when conversion is well-defined and a methodology anchor when speciation differs. The Literature Evidence Summary gives source count and confidence rating per analyte.</dd>
    </div>
    <div>
      <dt>Brand QA and product development</dt>
      <dd>Use the <a href="/certification/lab-result-comparator?category=plant-milks-soy-based">Lab Result Comparator</a> to position a single lab value inside the cited literature. The comparator positions a single lab value inside the cited literature for soy-based plant milks.</dd>
    </div>
    <div>
      <dt>Regulators, journalists, and adversarial readers</dt>
      <dd>Every numeric claim on this page traces to a source page. The Evidence Governance note explains what this page is and is not (literature evidence, not HMT&amp;C certification thresholds).</dd>
    </div>
    <div>
      <dt>HMT&amp;C staff (internal)</dt>
      <dd>The threshold-selection arithmetic (percentile statistics, clean / dirty subcategory designation, pooling math) lives in the local staff Standards Workbench tool and under <code>data/workbench/standards/</code>, never on this public page or anywhere else under <code>wiki/</code>. See CLAUDE.md Part 19.</dd>
    </div>
  </dl>
</div>
<!-- END: hmi-stakeholder-guide -->
## Decision Snapshot

| Field                 | Status                                                                             |
| --------------------- | ---------------------------------------------------------------------------------- |
| Row state             | Early occurrence evidence promoted                                                 |
| Best current source   | [[sources/milani2023-trace-elements-soy-based-beverages]]                          |
| Support source        | [[sources/marques2021-trace-elements-milks-plant-based-drinks]]                    |
| Computation readiness | Context-ready for Al, Ni, Pb, Cd, Sn, Cr, Sb; not threshold-ready                  |
| Ingredient routing    | [[ingredients/plant-milk]], [[ingredients/soy]]                                    |
| HMTc use              | Occurrence prioritization only; no certified-brand, compliance, or threshold claim |

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

## Occurrence Evidence

[[sources/milani2023-trace-elements-soy-based-beverages]] analyzed 18 soy-based beverages from Brazil by ICP-OES. The paper is directly relevant to this product row because it measures finished soy beverages rather than soy ingredient powders or isolated soy raw materials.

Milani reports chromium as total/unspecified Cr and antimony as Sb in the finished beverage groups. Those values are useful occurrence context, but they are not Cr-VI evidence, not a compliance determination, and not an HMTc threshold input.

[[sources/marques2021-trace-elements-milks-plant-based-drinks]] measured Spanish retail plant-based drinks and supports the broader row architecture, but it does not resolve the Al/Cd/iAs gaps for this row.

## Ingredient Handling

Ingredient-only values belong on [[ingredients/soy]] or [[ingredients/plant-milk]]. Milani's values are finished beverage values, so they remain here and in the structured occurrence data layer.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## Literature Evidence Summary

<!-- audience: regulator, educator, consumer, app -->

The table below summarizes what the peer-reviewed and government literature cited on this page reports for heavy-metal concentrations in soy-based product. Values are pulled directly from cited sources without re-aggregation; pooling, percentile selection, and threshold math sit in the staff Standards Workbench rather than this public page.

Methodology rules for speciation, basis preservation, non-detect handling, and source pooling are stated in the [Methodology](#methodology) section above and apply to every row below.

| Analyte | Subcategory | Reported concentration range | Detection rate | Applicable regulatory cap | Sources | Confidence | Basis |
| --- | --- | --- | --- | --- | --- | --- | --- |
| [[metals/aluminum\|Al]] | soy-based (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/nickel\|Ni]] | soy-based (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
| [[metals/cadmium\|Cd]] | soy-based (no contributing evidence loaded) | No concentration data loaded for this analyte | Sample-level detection rate not reported | No applicable cap loaded | 0 | data gap | Basis not reported |
<!-- END: hmi-hmtc-evidence-summary -->

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/milani2023-trace-elements-soy-based-beverages\|Milani et al. 2023]]. *Trace Elements in Soy-Based Beverages: A Comprehensive Study of Total Content and In Vitro Bioaccessibility*, International Journal of Environmental Research and Public Health | 2023 | Peer-reviewed | ICP-OES measurement of Al, tAs, Cd, Cr, Ni, Pb, Sb, and Sn in 18 Brazilian soy-based beverages by soy-source group; primary multi-metal occurrence source for the soy plant-milk row (Al group means 176–758 µg/L; most others <LOQ) |
| 2 | [[sources/marques2021-trace-elements-milks-plant-based-drinks\|Marques et al. 2021]]. *Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks*, Biological Trace Element Research | 2021 | Peer-reviewed | ICP-MS survey of Pb, tHg, Ni, and U in retail plant-based drinks from Spain including soy drink; tHg not detected; provides multi-metal occurrence context and Ni comparison for the soy plant-milk row |
<!-- END: hmi-source-legend -->

## CC candidate evidence map

| Analyte | Distribution sources (sample-level) | Summary sources | Total source count |
| --- | --- | --- | --- |
| Pb | — | Milani 2023 (group means; mostly <LOQ), Marques 2021 (n=42 plant-drinks) | 2 summary |
| Cd | — | Milani 2023 (all <LOQ; Path B candidate at 5×LOQ=19 ppb) | 1 summary (Path B) |
| tAs | — | Milani 2023 (all <LOQ; Path B candidate at 5×LOQ=191 ppb; high ICP-OES LOQ) | 1 summary (Path B) |
| iAs | — | — | 0 (Milani measured tAs only) |
| MeHg | — | — | 0 |
| tHg | — | Marques 2021 (not detected) | 1 summary |
| **Al** | — | **Milani 2023 (group means 176-758 ppb; range 45-1822 ppb)** | 1 summary (Path A thin; closing requires 2nd Al source) |
| Ni | — | Milani 2023 (soybean group mean 29 ppb), Marques 2021 | 2 summary |
| Cr-VI | — | inference-cascade only (Hernandez/Saraiva chemistry; milk-like matrix) | 1 cascade |
| Sn | — | Milani 2023 (isolate-protein group mean 4.3 ppb at LOD-zero; max 26 ppb; Path B candidate at 5×LOQ=90 ppb) | 1 summary (Path B) |
