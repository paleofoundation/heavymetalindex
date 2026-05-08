---
title: Infant Formula, Powder (Non-Soy)
type: product-category
category: infant-formula-powder-non-soy
hmtc_row: 1
hmtc_category: 1
category_label: Infant and Child Foods
age_range: "0-5"
evidence_fitness: EF-3
public_evidence_label: Modeled or limited evidence
review_state: published
evidence_register: data/evidence/category1_register.csv
hmtc_threshold_status: excluded_from_index_evidence
label: "Infant formula, powder (non-soy)"
base_taxonomy: infant-formula-powder
variant_type: clean_benchmark
provenance: split_from_base
ingredient_targets: [infant-formula-powder, non-soy-protein-source, vitamin-mineral-premix]
primary_metals_of_concern: [Pb, Cd, tAs, iAs, MeHg, tHg, Ni, Al, Cr-VI, Sn]
hmtc_tested_metals: [Pb, Cd, tAs, tHg]
vulnerable_population: infants-0-12mo
applicable_regulations: []
cc_relationship:
  role: clean_benchmark
  scope: within_row
  partners:
    - slug: infant-formula-powder-soy-based
      partner_type: row
      role_of_partner: contamination_platform
      metals: [Al, Ni, Cd]
audience: [regulator, educator, consumer, app]
updated: 2026-05-08
sources: 16
---

# Infant Formula, Powder (Non-Soy)

<div class="hmi-quick-read">
  <div class="hmi-quick-read-label">Quick read</div>
  <p>Powdered non-soy infant formula has usable but incomplete heavy-metal occurrence evidence. Structured rows summarize published concentration data; they do not establish certification limits.</p>
  <ul>
    <li><strong>Evidence status:</strong> modeled or limited evidence, with one reconstructable FDA prepared-for-feeding dataset for total arsenic, lead, cadmium, and total mercury.</li>
    <li><strong>Main concern:</strong> infants are the exposed population, so row-fit, basis matching, and non-detect handling matter before any standards interpretation.</li>
    <li><strong>Best use:</strong> read the summaries first, then use the source tables below only when you need the underlying evidence.</li>
  </ul>
  <div class="hmi-pill-row">
    <span class="hmi-pill">Pb</span>
    <span class="hmi-pill">Cd</span>
    <span class="hmi-pill">tAs</span>
    <span class="hmi-pill">tHg</span>
  </div>
</div>

This page is the public evidence page for powdered non-soy infant formula. It is organized around source-backed product concentration evidence, with exposure estimates and broad formula studies separated so they do not get mistaken for direct ppb product measurements.

<!-- BEGIN: hmi-hmtc-evidence-summary -->
## CC Candidate Summary (Part 19 framework)

<!-- audience: regulator, educator, app -->

This block was rebuilt 2026-05-08 in Phase 3 against the [Part 19 clean/dirty subcategory framework](../../CLAUDE.md). Clean and dirty are per-analyte empirical designations within the parent category (Infant and Child Foods → infant formula powder). The milk-based / non-soy subcategory is classified clean or dirty per analyte by comparing its empirical distribution against the sibling subcategory on [[products/infant-formula-powder-soy-based]] (cc_relationship: clean_benchmark vs contamination_platform partner). The clean subcategory standard is p90 (lenient bar). The dirty subcategory standard is p30 (strict bar; 70% of samples in the dirtier subcategory currently fail it). Both standards are reported alongside p100. Final HMT&C values must remain no higher than the lowest applicable loaded regulatory cap.

Pb, Cd, tAs, and tHg p30/p50/p90/p100 computed directly from FDA 2026 special-survey sample-level data (`data/evidence/category1_formula_special_survey_samples.csv`, prepared-for-feeding basis, lower-bound `<LOD`=0). Other A-tier sources (Dabeka 2011, Kazi 2009, Almeida 2022, Pandelova 2012, FSA 2016) supply summary statistics that count toward n_a_tier but cannot be merged into the FDA 2026 sample-level pool without basis matching (FDA 2026 is prepared-for-feeding, others are powder-as-sold or as-consumed).

| Analyte | Subcategory designation | Standard target | n | n_a_tier | Sources | Confidence | CC eligibility | Regulatory cap |
| --- | --- | ---: | ---: | ---: | --- | --- | --- | --- |
| [[metals/lead\|Pb]] | non-soy **[clean]** (non-soy p90 0.40 ppb vs soy p90 0.50 ppb; non-soy p50 0.20 vs soy p50 0.30) | clean p90 = **0.4 ppb** (p100 = 0.6 ppb) | 230 | 5 | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] (FDA 2026 sample-level n=230); [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] (Canadian non-soy n=44 summary as-consumed); [[sources/kazi2009-toxic-elements-in-infant-formulae]] (Pakistani milk-based n=13 summary); [[sources/almeida2022-brazil-infant-formula-toxic-metals]] (Brazilian cow-milk n=44 summary); [[sources/pandelova2012-eu-baby-food-formula-elements]] (EU milk-formula pooled baskets summary) | medium (Part 6: 3-10 studies = medium; n_a_tier=5) | **At readiness bar.** Path A n_a_tier=5 with medium confidence. FDA 2026 sample-level pool is prepared-for-feeding basis; basis-matched aggregate not yet pooled across the 5 sources. | 20 ug/kg ([[regulations/eu2023-contaminants-maximum-levels]]) |
| [[metals/cadmium\|Cd]] | non-soy **[clean]** (non-soy p90 0.40 ppb vs soy p90 1.20 ppb; non-soy p50 0.20 vs soy p50 0.80 — soy plants accumulate Cd more than cow milk) | clean p90 = **0.4 ppb** (p100 = 1.3 ppb) | 230 | 6 | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] (n=230); [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]]; [[sources/kazi2009-toxic-elements-in-infant-formulae]]; [[sources/almeida2022-brazil-infant-formula-toxic-metals]]; [[sources/pandelova2012-eu-baby-food-formula-elements]]; [[sources/dabeka1987-canada-infant-formula-lead-cadmium]] | medium (n_a_tier=6) | **At readiness bar.** Path A n_a_tier=6 with medium confidence. | 10 ug/kg ([[regulations/eu-2023-915-cadmium]]) |
| [[metals/arsenic-total\|tAs]] | non-soy **[clean]** (non-soy p90 1.30 ppb vs soy p90 1.43 ppb — marginal; non-soy p50 0.40 vs soy p50 1.15) | clean p90 = **1.3 ppb** (p100 = 4.7 ppb) | 230 | 3 | [[sources/fda2026-infant-formula-toxic-elements-special-survey]]; [[sources/almeida2022-brazil-infant-formula-toxic-metals]] (Brazilian cow-milk n=44 range 12-34 ppb); [[sources/fsa2016-infant-food-formula-metals-survey]] (UK first/hungrier dry milk category) | medium (n_a_tier=3) | **At readiness bar.** Path A. Total arsenic; iAs covered separately below. | No loaded cap |
| [[metals/arsenic-inorganic\|iAs]] | non-soy **[likely clean]** (FSA 2016 UK dry first/hungrier milk category 0.7-1.8 ppb iAs; rice-cereal subcategory of the parent baby-food parent for context: 124.90 ppb. Soy-based formula iAs not measured in any A-tier source.) | data gap (UK summary only; no sample-level pool) | 0 sample-level | 1 | [[sources/fsa2016-infant-food-formula-metals-survey]] (category average/range only) | low (n_a_tier=1) | **Below readiness bar.** Path A blocked by lack of sample-level pool. Phase 3b ingest needed for sample-level iAs in milk-based formula powder; rationale: only one A-tier summary-only source exists in the current corpus. | 20 ug/kg ([[regulations/eu2023-contaminants-maximum-levels]]) |
| [[metals/mercury-methyl\|MeHg]] | (no measured-MeHg source for either powder subcategory) | data gap | 0 | 0 | none | data gap | **Below readiness bar.** Speciation source required (tHg cannot substitute). Rationale: raw/reports/+studies/+Digest/ filename scan returned no MeHg-in-formula candidate; broader markdown corpus may have candidates. | No loaded cap |
| [[metals/mercury-total\|tHg]] | non-soy **[clean (data-thin)]** (non-soy p90 0.000 vs soy p90 0.024; both subcategories show sparse detection — only 3/230 non-soy and ~1/38 soy detected) | clean p90 = **0 ppb** (p100 = 0.3 ppb); detection sparse | 230 | 3 | [[sources/fda2026-infant-formula-toxic-elements-special-survey]]; [[sources/almeida2022-brazil-infant-formula-toxic-metals]] (below LOQ); [[sources/pandelova2012-eu-baby-food-formula-elements]] (summary) | data-thin | Path A formal but sparse detection (3/230 non-soy). Aggregate p90 = 0 honestly reflects the population. | No loaded cap |
| [[metals/nickel\|Ni]] | non-soy **[clean]** (FSA 2016 UK dry first/hungrier milk Ni 18-54 ppb; soy-based shows higher Ni signals in Pandelova pooled baskets per the broader formula context. No sample-level non-soy-vs-soy comparison.) | clean p90 candidate ≈ 54 ppb (FSA 2016 UK category range upper bound); not a true sample-level distribution | 47 broad formula | 2 | [[sources/fsa2016-infant-food-formula-metals-survey]] (n=47 broad formula, 18-54 ppb range); [[sources/pandelova2012-eu-baby-food-formula-elements]] (pooled baskets) | low (n_a_tier=2; both summary-only) | **Below readiness bar.** Path B candidate: FSA 2016 LOQ for Ni in milk powder is ~5 ppb wet weight per the UK report; 5×LOQ ≈ 25 ppb on a comparable wet basis. Sample-level non-soy distribution required to firm Path A. | No loaded cap |
| [[metals/aluminum\|Al]] | non-soy (qualitative; multiple summary sources; no sample-level non-soy-only distribution) | summary range 432-1241 ppb (Almeida 2022 cow-milk) and 446.8/1004 ppb means (Burrell 2010 / Dabeka 2011) | n=44 cow-milk + n=18 + n=7 + n=57 = ~126 across sources, but summary-only | 5 | [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]]; [[sources/kazi2009-toxic-elements-in-infant-formulae]]; [[sources/almeida2022-brazil-infant-formula-toxic-metals]]; [[sources/burrell2010-aluminium-in-infant-formulas]]; [[sources/chuchu2013-aluminium-in-infant-formulas]] | medium (n_a_tier=5; multiple A-tier summaries; values consistent within order of magnitude) | **Approaching readiness bar.** Path A n_a_tier=5 with medium confidence by source count, but no single sample-level distribution; aggregate p90 across sources requires basis matching (powder-as-sold vs as-consumed). Phase 3b: pull sample-level data extraction from Burrell/Chuchu/Almeida tables. | No loaded cap |
| [[metals/chromium-hexavalent\|Cr-VI]] | non-soy **[likely dirty signal in summary; n_a_tier=1]** (Soares 2000 Portugal powdered milk infant formulas n=7, mean 24 ppb, range <10-75 ppb; follow-up milks n=5 mean 12 ppb; dietetic milks n=8 mean 33 ppb. No soy-based Cr-VI source for comparison.) | summary range <10-75 ppb (Soares 2000 group means); not sample-level | 7 milk-formula | 1 | [[sources/soares2000-chromium-vi-powdered-milk-formulas]] | low (n_a_tier=1) | **Below readiness bar.** Path B candidate: Soares 2000 LOD is 1.8 ug/L in reconstituted milk ≈ 1.8 ppb wet; powder-as-sold equivalent depends on dilution factor. 5×LOQ = ~10 ppb wet. Sample-level non-soy Cr-VI distribution required for Path A. Speciation needed (total Cr cannot substitute per CLAUDE.md Part 14). | No loaded cap |
| [[metals/tin\|Sn]] | non-soy (Almeida 2022 Brazilian cow-milk n=44 range 7-95 ppb; FSA 2016 broad formula Sn lumped) | summary range 7-95 ppb | 44 cow-milk | 2 | [[sources/almeida2022-brazil-infant-formula-toxic-metals]]; [[sources/fsa2016-infant-food-formula-metals-survey]] | low (n_a_tier=2) | **Approaching.** Path A n_a_tier=2 but at low confidence per Part 6 (1-2 studies = low). Sample-level extraction from Almeida 2022 table would firm Path A. | No loaded cap |

### Per-analyte clean/dirty classification record

For audit traceability, the within-row classification used the central-tendency comparison below. FDA 2026 special-survey provides explicit non-soy and soy powder labels and is the primary basis for the clean/dirty call.

| Analyte | Non-soy p50 | Soy p50 | Non-soy p90 | Soy p90 | Non-soy role | Comparator basis |
| --- | ---: | ---: | ---: | ---: | --- | --- |
| Pb | 0.20 | 0.30 | 0.40 | 0.50 | clean | FDA 2026 sample-level (n=230 vs n=38) |
| Cd | 0.20 | 0.80 | 0.40 | 1.20 | clean | FDA 2026 sample-level; soy plants accumulate Cd from soil |
| tAs | 0.40 | 1.15 | 1.30 | 1.43 | clean (marginal at p90) | FDA 2026 sample-level |
| tHg | 0.00 | 0.00 | 0.00 | 0.024 | clean (data-thin) | FDA 2026 sample-level; both sparse detection |
| iAs | n/a | n/a | n/a | n/a | likely clean (qualitative) | only summary data; FSA 2016 UK milk formula 0.7-1.8 ppb |
| MeHg | n/a | n/a | n/a | n/a | unclassifiable | both data gap |
| Ni | n/a | n/a | n/a | n/a | unclassifiable from sample-level | FSA 2016 broad formula only |
| Al | n/a | n/a | n/a | n/a | unclassifiable from sample-level | summary-only on both sides |
| Cr-VI | n/a | n/a | n/a | n/a | unclassifiable | only Soares 2000 milk-based; no soy comparator |
| Sn | n/a | n/a | n/a | n/a | unclassifiable from sample-level | Almeida 2022 cow-milk only |

<!-- END: hmi-hmtc-evidence-summary -->

<!-- BEGIN: hmi-product-crosswalk -->
## Federal / Regulatory Limits vs Field Findings

<!-- audience: regulator, educator, consumer, app -->

This is the fast comparison view for standards developers, regulators, retailers, brands, and legal teams. It shows the applicable federal or regulatory limit next to the current field-evidence state. It is not an HMTc pass/fail table; technical distributions remain in the evidence sections below.

| Metal | Federal / regulatory limit | Actual field finding | Decision read | Evidence |
| --- | --- | --- | --- | --- |
| [[metals/lead]] (Pb) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg Pb. Scope: infant formulae, follow-on formulae, and young-child formulae placed on the market as powder. Basis: product as placed on market. | FDA 2026 prepared-for-feeding cow-milk powder subset: N=230; Pb detected 0.1-0.6 ug/kg; values are not powder-as-placed. | EU maximum level loaded; comparison blocked because occurrence row is prepared-for-feeding while EU powder ML is product-as-placed. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium]] (Cd) | [[regulations/eu-2023-915-cadmium]]: EU European Commission maximum level: 10 ug/kg Cd. Scope: infant formulae, follow-on formulae, food for special medical purposes intended for infants and young children, and young-child formulae placed on the market as powder and manufactured from cow's milk proteins or cow's milk protein hydrolysates. Basis: product as placed on market. | FDA 2026 prepared-for-feeding cow-milk powder subset: N=230; Cd detected 0.1-1.3 ug/kg; values are not powder-as-placed. | EU maximum level loaded; comparison blocked because occurrence row is prepared-for-feeding while EU powder ML is product-as-placed. | [[regulations/eu-2023-915-cadmium]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/arsenic-inorganic]] (iAs) | [[regulations/eu2023-contaminants-maximum-levels]]: EU European Commission maximum level: 20 ug/kg iAs. Scope: infant formulae, follow-on formulae, food for special medical purposes intended for infants and young children, and young-child formulae placed on the market as powder. Basis: product as placed on market. | FDA 2026 reports total arsenic for this formula subset; no comparable inorganic arsenic field row is loaded. | EU maximum level loaded; comparison blocked because occurrence row is total arsenic and prepared-for-feeding while EU value is inorganic arsenic and product-as-placed. | [[regulations/eu2023-contaminants-maximum-levels]]; [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

<!-- END: hmi-product-crosswalk -->

## Evidence Governance

Public evidence label: **Modeled or limited evidence**.

This page is part of the Category 1 Evidence Fitness pilot. It summarizes source-backed occurrence evidence, partial distributions, and data gaps for this product row. Existing cited tables remain public page-level synthesis; value-level extraction and standards review are tracked separately in staff tooling.

This page does not publish or justify HMT&C certification limits. Public Index pages show what the cited sources say, what is still uncertain, and where readers can verify the evidence trail.

## Lead Benchmark Context

<!-- audience: regulator, educator, consumer, app -->
<!-- lead-benchmark-context:start -->

HMI normalizes this row's lead benchmarks to ppb so regulatory ceilings, exposure screens, and occurrence values can be compared on one concentration scale. The values below do not all mean the same thing: FDA and EU entries are regulatory context, Prop 65 is a serving-based exposure screen, and source tables on this page remain occurrence evidence.

| Reference point | Lead ppb view | Basis | How to use it |
| --- | --- | --- | --- |
| Current FDA | Not established | No current formula-specific FDA lead action level | FDA 2025 processed-baby-food lead guidance excludes infant formula |
| EU 2023/915 | 20 ppb | as placed on market as powder | EU maximum level. |
| Prop 65 MADL screen | 5 ppb | Illustrative 100 g/day powder-intake screen; formula-specific exposure model required | Derived from the 0.5 ug/day lead MADL using `500 ÷ grams/day`; not a product-specific food limit. |
| HMTc standards use | ppb-normalized context | All values are shown in ppb, but the FDA entry is a not-established status and the Prop 65 value is an exposure conversion, not a commodity limit. | Do not borrow FDA processed-baby-food action levels for formula; use basis-matched occurrence data and the EU powder ceiling as external legal context. |

No U.S. FDA formula-specific lead action level is currently established; the EU powder ceiling is a legal backstop, not a clean-product target.

Full crosswalk: [[products/lead-benchmark-context]].

<!-- lead-benchmark-context:end -->

## Scaffold Status

- Page state: corrected pilot product-category evidence format.
- Strongest current row-fit evidence: cow-milk formula concentration ranges from China, Brazil, the UK, Canada, and pooled EU formula baskets.
- Main gap: the current corpus still does not provide enough comparable product-level occurrence data for every analyte.
- Next ingest target: datasets that distinguish powder from ready-to-feed liquid, non-soy from soy-based formula, and individual-product concentrations from pooled baskets or exposure estimates.

## Source Evidence Inventory

<!-- audience: regulator, educator, app -->

This table lists what each source actually reports. Highest values are source-scope observations, not public certification limits or cross-source standards.

| Metal | Evidence scope | N | Statistic type | Reported values | Highest value in source scope | Evidence note | Citation |
| --- | --- | ---: | --- | --- | ---: | --- | --- |
| [[metals/lead|Pb]] | China cow milk-based formulas | 93 | mean and range | mean 2.03 ppb; range 0.36 to 5.75 ppb | 5.75 ppb | Row-fit: matrix axis exact (cow milk-based / non-soy per source TL;DR); format axis unknown (powder vs RTF not split per author). Counts toward non-soy matrix CC pool, not the format-narrowed non-soy-powder pool. Direct cow-milk formula evidence. | [[sources/chung2021-china-infant-formula-toxic-elements|1]] |
| [[metals/cadmium|Cd]] | China cow milk-based formulas | 93 | mean and range | mean 0.98 ppb; range 0.13 to 3.58 ppb | 3.58 ppb | Row-fit: matrix axis exact (cow milk-based / non-soy); format axis unknown. Counts toward non-soy matrix CC pool only. | [[sources/chung2021-china-infant-formula-toxic-elements|1]] |
| [[metals/arsenic-total|tAs]] | China cow milk-based formulas | 93 | mean and range | mean 3.32 ppb; range 0.89 to 7.87 ppb | 7.87 ppb | Row-fit: matrix axis exact (cow milk-based / non-soy); format axis unknown. Counts toward non-soy matrix CC pool only. Total arsenic, not iAs. | [[sources/chung2021-china-infant-formula-toxic-elements|1]] |
| [[metals/chromium|Cr]] | China cow milk-based formulas | 93 | mean and range | mean 27.38 ppb; range 2.51 to 83.80 ppb | 83.80 ppb | Row-fit: matrix axis exact (cow milk-based / non-soy); format axis unknown. Total chromium only; do not interpret as Cr-VI unless speciation present. | [[sources/chung2021-china-infant-formula-toxic-elements|1]] |
| [[metals/chromium-hexavalent|Cr(VI)]] | Portugal powdered milk infant, follow-up, and dietetic formulas | 20 grouped as 7 / 5 / 8 | mean and range | infant formulas mean 24 ppb, range <10 to 75; follow-up milks mean 12 ppb, range <10 to 26; dietetic milks mean 33 ppb, range <10 to 75 | 75 ppb | Direct dairy/powdered-milk formula Cr(VI) context; source reports group means/ranges rather than sample-level values for benchmark-pool math. | [[sources/soares2000-chromium-vi-powdered-milk-formulas|13]] |
| [[metals/aluminum|Al]] | Brazil cow-milk phase 1/2 formulas | not extracted | range | 432 to 1241 ppb | 1241 ppb | Direct cow-milk powder evidence; supports occurrence review but does not establish a full distribution by itself. | [[sources/almeida2022-brazil-infant-formula-toxic-metals|2]] |
| [[metals/arsenic-total|tAs]] | Brazil cow-milk phase 1/2 formulas | not extracted | range | 12 to 34 ppb | 34 ppb | Direct cow-milk powder evidence; total arsenic only. | [[sources/almeida2022-brazil-infant-formula-toxic-metals|2]] |
| [[metals/tin|Sn]] | Brazil cow-milk phase 1/2 formulas | not extracted | range | 7 to 95 ppb | 95 ppb | Direct cow-milk powder evidence; supports occurrence review but does not establish a full distribution by itself. | [[sources/almeida2022-brazil-infant-formula-toxic-metals|2]] |
| [[metals/mercury-total|tHg]] | Brazil cow-milk phase 1/2 formulas | not extracted | non-detect / below LOQ | not detected or below LOQ | below LOQ | Total mercury only; MeHg not measured. | [[sources/almeida2022-brazil-infant-formula-toxic-metals|2]] |
| [[metals/arsenic-inorganic|iAs]] | UK dry first/hungrier milk, as sold | 47 formula total; category n not reported | category average/range | 0.7 to 1.8 ppb | 1.8 ppb | UK category value; supports context but not an individual-product distribution. | [[sources/fsa2016-infant-food-formula-metals-survey|3]] |
| [[metals/cadmium|Cd]] | UK dry first/hungrier milk, as sold | 47 formula total; category n not reported | category average/range | 3 to 4 ppb | 4 ppb | UK category value; supports context but not an individual-product distribution. | [[sources/fsa2016-infant-food-formula-metals-survey|3]] |
| [[metals/lead|Pb]] | UK dry first/hungrier milk, as sold | 47 formula total; category n not reported | category average/range | 1 to 4 ppb | 4 ppb | UK category value; supports context but not an individual-product distribution. | [[sources/fsa2016-infant-food-formula-metals-survey|3]] |
| [[metals/nickel|Ni]] | UK dry first/hungrier milk, as sold | 47 formula total; category n not reported | category average/range | 18 to 54 ppb | 54 ppb | UK category value; supports nickel context but not an individual-product distribution. | [[sources/fsa2016-infant-food-formula-metals-survey|3]] |
| [[metals/cadmium|Cd]] | Canada milk-base infant formula powder, historical | 17 | median and range | median 0.6 ppb; range not detected to 4.3 ppb | 4.3 ppb | Direct milk-base powder evidence, but historical Canadian data. | [[sources/dabeka1987-canada-infant-formula-lead-cadmium|4]] |
| [[metals/cadmium|Cd]] | EU milk-formula pooled baskets | 42 formula products pooled into baskets | pooled basket values | milk formula baskets 3.3 to 4.5 ppb | 4.5 ppb | Pooled baskets are contextual; they cannot produce individual-product percentiles. | [[sources/pandelova2012-eu-baby-food-formula-elements|5]] |
| [[metals/lead|Pb]] | EU milk-formula pooled baskets | 42 formula products pooled into baskets | pooled basket values | milk formula baskets 8.2 to 43.9 ppb | 43.9 ppb | Pooled baskets are contextual; they cannot produce individual-product percentiles. | [[sources/pandelova2012-eu-baby-food-formula-elements|5]] |
| [[metals/arsenic-total|tAs]] | Infant formulas without organic brown rice syrup | 15 | range | 2 to 12 ppb | 12 ppb | Broad infant-formula evidence; powder/non-soy/soy not split. | [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup|6]] |

## Structured Concentration Rows

<!-- audience: regulator, educator, app -->

The FDA 2026 special survey is the first source in this row that gives a reconstructable product-label subset for several metals. These values are expressed as prepared for feeding, so they should not be silently pooled with dry-powder-as-sold ppb values. The extraction below is included as a traceability appendix, not as a public standard. The full sample-level extraction is in `data/evidence/category1_formula_special_survey_samples.csv`, with summary rows in `data/evidence/category1_formula_concentration_summary.csv`. [[sources/fda2026-infant-formula-toxic-elements-special-survey]]

| Metal | N | Detected | <LOD | Basis | Highest value in this extraction | Citation |
| --- | ---: | ---: | ---: | --- | ---: | --- |
| [[metals/arsenic-total|tAs]] | 230 | 212 | 18 | prepared for feeding; <LOD=0 lower-bound | 4.7 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/lead|Pb]] | 230 | 169 | 61 | prepared for feeding; <LOD=0 lower-bound | 0.6 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/cadmium|Cd]] | 230 | 145 | 85 | prepared for feeding; <LOD=0 lower-bound | 1.3 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |
| [[metals/mercury-total|tHg]] | 230 | 3 | 227 | prepared for feeding; <LOD=0 lower-bound | 0.3 ug/kg | [[sources/fda2026-infant-formula-toxic-elements-special-survey]] |

The Digest formula papers add useful source-scope rows, but they mostly report means, medians, ranges, or maxima rather than full product-level distributions. These rows support the evidence pool and show high-end source context; they do not by themselves set public limits.

| Source | Metal | N | Basis | Mean | Median | Highest value | Use note |
| --- | --- | ---: | --- | ---: | ---: | ---: | --- |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/aluminum|Al]] | 57 | as consumed | 177 | 44 | 1004 | Source reports summary statistics, not a full distribution. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/cadmium|Cd]] | 57 | as consumed | 0.17 | 0.06 | 1.21 | Source reports summary statistics, not a full distribution. |
| [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]] | [[metals/lead|Pb]] | 57 | as consumed | 0.65 | 0.34 | 3.46 | Source reports summary statistics, not a full distribution. |
| [[sources/kazi2009-toxic-elements-in-infant-formulae]] | [[metals/aluminum|Al]] | 13 milk-based rows in pasted Table 3 | dried powder | 1018.5 |  | 1520 | Direct milk-based formula context; source text has subgroup-count conflict. |
| [[sources/kazi2009-toxic-elements-in-infant-formulae]] | [[metals/cadmium|Cd]] | 13 milk-based rows in pasted Table 3 | dried powder | 7.86 |  | 12.3 | Direct milk-based formula context; source text has subgroup-count conflict. |
| [[sources/kazi2009-toxic-elements-in-infant-formulae]] | [[metals/lead|Pb]] | 13 milk-based rows in pasted Table 3 | dried powder | 64.2 |  | 97 | Direct milk-based formula context; source text has subgroup-count conflict. |
| [[sources/burrell2010-aluminium-in-infant-formulas]] | [[metals/aluminum|Al]] | 7 | prepared estimate from powder | 446.8 |  | 592.4 | Source reports product means/ranges and prepared estimates; non-soy powder products are grouped. |
| [[sources/chuchu2013-aluminium-in-infant-formulas]] | [[metals/aluminum|Al]] | 18 | prepared estimate from powder | 194.8 |  | 411 | Source reports product means and prepared estimates; non-soy powder products are grouped. |

<!-- BEGIN: hmi-broad-context-sources -->
## Broad Product Context — Author-Scope Index

<!-- audience: regulator, educator, app -->

The sources below are catalogued as product-context candidates for this row. The "Author-scope row-fit" column states what the authors actually resolved (matrix axis: cow-milk-based / soy-based / unresolved; format axis: powder / RTF / concentrate / unresolved) per CLAUDE.md Part 6. A source counts toward this row's CC candidate n only once; sources marked "Cross-reference" already appear as direct evidence elsewhere on this page and are not counted again.

| Source | Title | Source scope | Metals | Author-scope row-fit | Canonical appearance |
| --- | --- | --- | --- | --- | --- |
| [[sources/akhtar2017-pakistan-infant-formula-nickel-aflatoxin]] | Determination of aflatoxin M1 and heavy metals in infant form... | infant-formula-powder | Ni; Pb; Cd; Fe; Zn | Matrix axis exact (milk-based / non-soy by author scope; raw-paper title and abstract use "infant formula milk (IFM)" throughout, sample-prep defatting confirms milk-based, no soy-based formulas in the design — verified 2026-05-08). Format axis: powder (exact). Source reports brand-level ranges, not a percentile distribution. | (none — context only) |
| [[sources/amarh2023-ghana-infant-food-heavy-metals]] | Health risk assessment of some selected heavy metals in infan... | infant-foods; infant-formula | tAs; Cd; Cr; tHg; Mn; Ni; Pb; Sb | Both matrix and format axes unresolved by author (broad infant-foods/formula scope, no subgroup splits in source TL;DR). | (none — context only) |
| [[sources/astolfi2021-italy-powdered-infant-formula-elements]] | Determination of 40 Elements in Powdered Infant Formulas and ... | infant-formula-powder | Al; tAs; Cd; Cr; Mn; Ni; Pb; Sn; Zn | Format axis: powder (resolved). Matrix axis: not split (author scope is "powdered infant formulas authorized in Italy" without soy/non-soy split). | (none — context only) |
| [[sources/chekri2019-french-infant-toddler-tds-trace-elements]] | Trace element contents in foods from the first French Total D... | infant-formula; baby-cereals; fruit-purees; fruit-juice-not-canned | Al; Sb; tAs; Cd; Cr; Co; Ni; Sn; V | French TDS scope; matrix and format axes both not split for the formula category. Cross-reference. | § French TDS Category Rows |
| [[sources/chung2021-china-infant-formula-toxic-elements]] | Content and Dietary Exposure Assessment of Toxic Elements in ... | infant-formula | Cr; tAs; Cd; Pb | Matrix axis exact (cow milk-based / non-soy per source TL;DR); format axis unknown (powder vs RTF not split per author). Cross-reference. | § Source Evidence Inventory |
| [[sources/collado-lopez2025-heavy-metals-baby-food-formula]] | Concentrations of Heavy Metals in Processed Baby Foods and In... | infant-formula; baby-cereals-dry-rice-based; baby-cereals-dry-non-rice; fruit-purees | Pb; Cd; tAs; tHg | Matrix axis: scoping review with primary-protein-source subgroups (cow-based, soy-based, specialty, nonspecified) per author; cow-based subset isolates non-soy. Format axis: not consistently split in review tables. | (none — context only) |
| [[sources/efsa-cadmium-contam-2009]] | Scientific Opinion of the Panel on Contaminants in the Food C... | chocolate; infant-formula; breast-milk | Cd | EFSA scientific opinion on cadmium toxicology; broad infant-formula context, no occurrence subsets. Both axes unresolved. | (none — context only) |
| [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]] | Lead and cadmium contamination in a large sample of United St... | infant-formula; baby-cereals; toddler-formula; fruit-juice | Pb; Cd | U.S. baby-foods/formula scope; matrix and format axes not split in published table. Cross-reference. | § Exposure Estimates From Formula Consumption |
| [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]] | Arsenic, Organic Foods, and Brown Rice Syrup | infant-formula; toddler-formula; rice-containing-products | tAs; iAs | Subset scoped by ingredient (without organic brown rice syrup); matrix and format axes not split by author. Cross-reference. | § Source Evidence Inventory |
| [[sources/lutfullah2014-peshawar-dried-fluid-milk-metals]] | Comparative study of heavy metals in dried and fluid milk in ... | infant-formula-powder; powdered-milk; liquid-milk | Pb; Cd; Cr; Ni; Ca; Mg; Cu; Zn; Fe; Mn | Matrix axis exact (milk-based / non-soy by author scope; "dried and fluid milk" is the paper's title scope; soy is not in scope). Format axis: dried infant formula resolved; the milk subsets include both dried and fluid forms. | (none — context only) |
| [[sources/marques2021-trace-elements-milks-plant-based-drinks]] | Essential and Non-essential Trace Elements in Milks and Plant... | plant-milks-soy-based; plant-milks-rice-based; plant-milks-non-soy-non-rice; infant-formula | Pb; tHg; Ni; U | Mixed scope spanning plant-milks subcategories and infant-formula; the infant-formula subset's matrix and format axes are not extracted in the source page. | (none — context only) |
| [[sources/meli2024-chemical-characterization-baby-food-italy]] | Chemical characterization of baby food consumed in Italy | infant-formula-powder; fruit-purees; meat-and-poultry-purees; fish-containing-baby-foods | Al; tAs; Cd; tHg; Ni; Pb; Sn | Matrix axis: powdered-milk subset is milk-based (= non-soy) per author scope. Format axis: powder resolved. | (none — context only) |
| [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]] | Infants' dietary arsenic exposure during transition to solid ... | infant-formula-powder; rice-cereal; fruit-purees; vegetable-purees | iAs; tAs | Format axis: powder (resolved). Matrix axis: soy/non-soy not split per author scope. | (none — context only) |
| [[sources/spungen2024-fda-tds-infant-lead-cadmium]] | Infants' and young children's dietary exposures to lead and c... | processed-baby-food; infant-formula; root-vegetable-purees; teething-biscuits | Pb; Cd | FDA TDS scope; both matrix and format axes unresolved for the formula category. | (none — context only) |
| [[sources/tatsuta2024-methylmercury-intake-children-duplicate-diet]] | Dietary intake of methylmercury by 0-5 years children using t... | fish-containing-baby-foods; infant-formula; baby-foods; toddler-meals | tHg; MeHg | Duplicate-diet exposure method; product-level matrix and format axes not isolated. | (none — context only) |

<!-- END: hmi-broad-context-sources -->

## Internal Standards Boundary

<!-- audience: regulator, educator, app -->

This public page stops at evidence inventory and traceability. Percentile calculations, clean/dirty comparator selection, LOQ fallback decisions, confidence review, regulatory-ceiling adjudication, and final standards decisions are tracked in the staff standards workbench rather than published as public page content.

The values above should therefore be read as source-reported or structured evidence context. They are not HMT&C candidate standards, final limits, or brand pass/fail criteria.

## Evidence Used For This Row

<!-- audience: regulator, educator, app -->

The direct row-fit evidence is strongest when a study measures cow-milk, milk-base, or powdered milk formula as a product concentration. Chung 2021, Almeida 2022, FSA 2016, Dabeka 1987, Pandelova 2012, and Soares 2000 are therefore more useful for this row than broad baby-food papers, but each still has limitations that require AI adjudication before standards use.

The largest interpretive issue is scope. China-market, Brazil-market, UK-market, Canada-historical, EU-pooled-basket, and U.S. prepared-for-feeding values should not be silently merged without basis matching, AI row-fit adjudication, and jurisdiction metadata. They can show what has been observed in formula, and they may contribute to an aggregate evidence pool when the standards workflow can document comparability and 95% confidence.

## Exposure Estimates From Formula Consumption

<!-- audience: regulator, educator, consumer, app -->

Gardener 2019 is useful because it reports infant exposure estimates from formula consumption. It is not a product concentration table and should not be used as ppb product-limit evidence.

| Metal | Product or exposure scope | N | Highest exposure estimate | Unit | Interpretation use | Citation |
| --- | --- | ---: | ---: | --- | --- | --- |
| [[metals/lead|Pb]] | Formula exposure estimate for 4-month-old infant consuming 31 oz/day | 91 | 2.68 | ug/day | Exposure context only, not ppb product concentration. | [[sources/gardener2019-lead-cadmium-infant-formula-baby-food|7]] |
| [[metals/cadmium|Cd]] | Formula exposure estimate for 4-month-old infant consuming 31 oz/day | 91 | 23.33 | ug/day | Exposure context only, not ppb product concentration. | [[sources/gardener2019-lead-cadmium-infant-formula-baby-food|7]] |

## French TDS Category Rows

<!-- audience: regulator, educator, app -->

Chekri 2019 reports French infant formula, follow-on formula, and growing-up milk values as consumed after preparation; it does not separate powder from ready-to-feed, soy from non-soy, or cow-milk from other formulas, so these rows support broad formula occurrence context rather than a row-specific product distribution. [[sources/chekri2019-french-infant-toddler-tds-trace-elements|Chekri 2019]]

| French TDS row | N | Basis | Al mean / max | tAs mean / max | Cd mean / max | Cr-total mean / max | Ni mean / max | Sn mean / max |
| --- | ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Infant formulae | 28 | as consumed | 196 / 585 ppb | 1.61 / 4 ppb | 0.39 / 1 ppb | 20.8 / 38 ppb | 25.9 / 50 ppb | 42 / 42 ppb |
| Follow-on formulae | 34 | as consumed | 276 / 1140 ppb | 1.68 / 3 ppb | 0.43 / 2 ppb | 22.1 / 78 ppb | 26.5 / 50 ppb | 42 / 42 ppb |
| Growing-up milks | 9 | as consumed | 189 / 724 ppb | 2.11 / 4 ppb | 0.71 / 4 ppb | 27.7 / 61 ppb | 25 / 25 ppb | 42 / 42 ppb |

## Row Relationship

This row is the clean-benchmark counterpart to [[products/infant-formula-powder-soy-based]] for the row architecture relationship covering [[metals/aluminum|Al]], [[metals/nickel|Ni]], and [[metals/cadmium|Cd]].

## Why This Category Is High-Risk

<!-- audience: regulator, educator, consumer, app -->

A 2025 global scoping review of baby foods and infant formulas reported heavy-metal detections in 63 percent of evaluated infant-formula determinations, with [[metals/lead|Pb]], [[metals/cadmium|Cd]], [[metals/arsenic-total|As]], and [[metals/mercury-total|Hg]] each detected in formula items; in the review's primary-protein-source subgrouping, Pb was detected in 73 percent of cow-based formula items and Cd in 44 percent of cow-based formula items. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|8]]

A 2012 arsenic speciation study reported total arsenic concentrations of 2 to 12 ng/g in 15 infant formulas without organic brown rice syrup; because 1 ng/g equals 1 ug/kg, this corresponds to 2 to 12 ppb total arsenic in formula powder, though the study does not isolate non-soy formula powder as a row-specific category. [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup|6]]

A 2018 infant biomarker study cited prior work reporting total arsenic in formula powder up to 12.6 ug/kg, but the study does not separate soy-based from non-soy powdered formula. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food|9]]

A 2024 analytical study of European baby foods included powdered milk and reported that cadmium and lead were below the study LOD in all samples, while mercury was detectable in all samples and one powdered-milk sample had the highest estimated nickel intake in the study at 9.43 ug/kg body weight per day. [[sources/meli2024-chemical-characterization-baby-food-italy|10]]

Non-soy-specific risk characterization remains incomplete. <!-- UNCITED: Need additional non-soy powdered infant formula sources that measure Al, Ni, Cd, Pb, tAs/iAs, tHg/MeHg, Cr-VI, and Sn while distinguishing non-soy powder from soy-based powder and ready-to-feed liquid formula. Soares 2000 supplies summary-only Cr(VI) context but not a distribution. -->

## What Drives Variance Across Brands

<!-- audience: regulator, educator, app -->

The promoted formula scoping review separates cow-based, soy-based, specialty, and nonspecified formulas, but it does not resolve powder-versus-ready-to-feed differences for this row. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|8]]

The promoted powdered-milk analytical study resolves powder format but does not resolve soy versus non-soy formula. [[sources/meli2024-chemical-characterization-baby-food-italy|10]]

Pandelova 2012 reported higher cadmium values in pooled soy-formula baskets than in pooled milk-formula and hypoallergenic-formula baskets, but pooled market baskets cannot be used as an individual-product percentile distribution. [[sources/pandelova2012-eu-baby-food-formula-elements|5]]

Potential variance drivers for non-soy powdered formula should be documented only after sources distinguish formulation, ingredient inputs, processing equipment, packaging, and analytical method. <!-- UNCITED: Need comparative infant-formula sources that separate non-soy powder from soy-based powder and report methods such as [[testing/icp-ms]]. -->

## How The App Would Estimate Risk From An Ingredient List

<!-- audience: app, consumer -->

The app model placeholder for this row should treat [[ingredients/infant-formula-powder]] and [[ingredients/non-soy-infant-formula]] as unresolved ingredient targets until source-backed contamination profiles exist. <!-- UNCITED: Need source-backed ingredient mapping and concentration distributions before app risk inference is populated. -->

## Historical Recalls/Enforcement

<!-- audience: regulator, educator -->

See the page-level crosswalk above and [[products/regulatory-crosswalk-field-findings]] for current regulatory context; row-specific enforcement events remain pending.

No row-specific regulatory event has been added for this scaffold. <!-- UNCITED: Need agency records or enforcement notices before adding historical recalls or enforcement events; frame any future entries as regulatory events, not brand rankings. -->

## Source Legend

1. [[sources/chung2021-china-infant-formula-toxic-elements|Chung 2021]]: China cow milk-based infant formula concentrations for Pb, Cd, tAs, and total Cr.
2. [[sources/almeida2022-brazil-infant-formula-toxic-metals|Almeida 2022]]: Brazil cow-milk infant formula powder ranges for Al, tAs, Sn, and tHg.
3. [[sources/fsa2016-infant-food-formula-metals-survey|FSA 2016]]: UK dry first/hungrier milk category values for iAs, Cd, Pb, and Ni.
4. [[sources/dabeka1987-canada-infant-formula-lead-cadmium|Dabeka 1987]]: historical Canadian milk-base infant formula powder data for cadmium and lead.
5. [[sources/pandelova2012-eu-baby-food-formula-elements|Pandelova 2012]]: EU pooled market-basket formula values, including milk-formula and soy-formula baskets.
6. [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup|Jackson 2012]]: infant formula total arsenic values in products without organic brown rice syrup.
7. [[sources/gardener2019-lead-cadmium-infant-formula-baby-food|Gardener 2019]]: percentile-style infant exposure estimates from formula consumption.
8. [[sources/collado-lopez2025-heavy-metals-baby-food-formula|Collado-Lopez 2025]]: global scoping review of baby foods and infant formulas.
9. [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food|Signes-Pastor 2018]]: infant dietary arsenic and biomarker context.
10. [[sources/meli2024-chemical-characterization-baby-food-italy|Meli 2024]]: European baby-food and powdered-milk analytical context.
11. [[sources/spungen2024-fda-tds-infant-lead-cadmium|Spungen 2024]]: FDA Total Diet Study infant lead and cadmium context.
12. [[sources/efsa-cadmium-contam-2009|EFSA 2009]]: cadmium toxicology and regulatory context.
13. [[sources/soares2000-chromium-vi-powdered-milk-formulas|Soares 2000]]: Portugal powdered milk formula Cr(VI) method/application paper.

## Sources

- [[sources/chung2021-china-infant-formula-toxic-elements]]
- [[sources/almeida2022-brazil-infant-formula-toxic-metals]]
- [[sources/fsa2016-infant-food-formula-metals-survey]]
- [[sources/dabeka1987-canada-infant-formula-lead-cadmium]]
- [[sources/pandelova2012-eu-baby-food-formula-elements]]
- [[sources/jackson2012-arsenic-organic-foods-brown-rice-syrup]]
- [[sources/gardener2019-lead-cadmium-infant-formula-baby-food]]
- [[sources/collado-lopez2025-heavy-metals-baby-food-formula]]
- [[sources/signes-pastor2018-infants-dietary-arsenic-solid-food]]
- [[sources/meli2024-chemical-characterization-baby-food-italy]]
- [[sources/spungen2024-fda-tds-infant-lead-cadmium]]
- [[sources/efsa-cadmium-contam-2009]]
- [[sources/fda2026-infant-formula-toxic-elements-special-survey]]
- [[sources/dabeka2011-canada-infant-formula-lead-cadmium-aluminum]]
- [[sources/kazi2009-toxic-elements-in-infant-formulae]]
- [[sources/soares2000-chromium-vi-powdered-milk-formulas]]
