---
title: "Plant milk base"
type: ingredient
commodity: plant-milk
label: "Plant milk base"
aliases: [plant-based milk, plant beverage]
category: beverage-ingredient
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [0, 13]
    p95_ppb: 13
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [7, 24]
    p95_ppb: 24
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [5, 29]
    p95_ppb: 46
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [176, 758]
    p95_ppb: 1822
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
    typical_ppb: [9, 58]
    p95_ppb: 58
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: []
lower_risk_variants: []
higher_risk_variants: []
used_in_products: [plant-milks-non-soy-non-rice, plant-milks-rice-based, plant-milks-soy-based]
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 8
---

# Plant milk base

This is a structural ingredient node created so product pages can link to a real wiki target. Occurrence values remain pending until a source is promoted for this ingredient.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=2 | 0–13 | low | [[sources/milani2023-trace-elements-soy-based-beverages\|1]], [[sources/marques2021-trace-elements-milks-plant-based-drinks\|2]] |
| Cd | data gap | — | — | — |
| iAs | n=1 | 7–24 | low | [[sources/damato2026-inorganic-arsenic-rice-based-beverages\|1]] |
| tAs | n=3 | 9–58 | medium | [[sources/damato2026-inorganic-arsenic-rice-based-beverages\|1]], [[sources/milani2023-trace-elements-soy-based-beverages\|2]], [[sources/walther2022-plantbased-drinks-arsenic\|3]] |
| tHg | data gap | — | — | — |
| Ni | n=2 | 5–29 | low | [[sources/milani2023-trace-elements-soy-based-beverages\|1]], [[sources/marques2021-trace-elements-milks-plant-based-drinks\|2]] |
| Al | n=1 | 176–758 | low | [[sources/milani2023-trace-elements-soy-based-beverages\|1]] |
| Cr | data gap | — | — | — |
| Sn | data gap | — | — | — |
| U | data gap | — | — | — |

## Routing

This node is linked from [[products/plant-milks-non-soy-non-rice]], [[products/plant-milks-rice-based]], [[products/plant-milks-soy-based]].

## Contamination Profile State

Per-analyte state — populated, in progress, or declared data gap — is carried authoritatively in the machine-readable `contamination_profile` frontmatter and the contamination-profile table above. Ingredient-level values belong here; finished-product values belong on the relevant product-category page.

## Related Finished-Product Evidence

The promoted Category 5 plant-milk sources are finished-beverage evidence, not ingredient-only evidence:

- [[sources/milani2023-trace-elements-soy-based-beverages]]
- [[sources/damato2026-inorganic-arsenic-rice-based-beverages]]
- [[sources/marques2021-trace-elements-milks-plant-based-drinks]]

Do not copy their values into the machine-readable `contamination_profile` until an ingest confirms that a value is ingredient-only rather than a finished beverage matrix.

<!-- BEGIN: hmi-page-references -->
<!-- BEGIN: hmi-v3-thin -->
## Where this page is thin

This page rests on 8 routed sources. Analytes with no rows are unreviewed rather than clean, and a gap in the table is a gap in the reading, not a finding of absence.

_Corrections and additions are logged publicly. See the correction route in the page rail._
<!-- END: hmi-v3-thin -->

## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/milani2023-trace-elements-soy-based-beverages|Trace Elements in Soy-Based Beverages: A Comprehensive Study of Total Content and In Vitro Bioaccessibility]]<span class="hmi-ref-meta">Milani RF, Mauri AA, Sanches VL, Morgano MA, and Cadore S · International Journal of Environmental Research and Public Health · 2023 · [doi.org/10.3390/ijerph20064986](https://doi.org/10.3390/ijerph20064986)</span><span class="hmi-ref-tag">Review</span>
2. [[sources/damato2026-inorganic-arsenic-rice-based-beverages|Inorganic Arsenic in Rice-Based Beverages: Occurrence in Products Available on the Italian Market and Dietary Exposure Assessment]]<span class="hmi-ref-meta">D'Amato M, Turco AC, D'Amore T, Vitale F, Marini F, Stacchini P, et al. · Foods · 2026 · [doi.org/10.3390/foods15020383](https://doi.org/10.3390/foods15020383)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/marques2021-trace-elements-milks-plant-based-drinks|Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks]]<span class="hmi-ref-meta">Marques M, Correig E, Capdevila E, Gargallo E, Gonzalez N, Nadal M, et al. · Biological Trace Element Research · 2021 · [doi.org/10.1007/s12011-021-03021-5](https://doi.org/10.1007/s12011-021-03021-5)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/walther2022-plantbased-drinks-arsenic|Comparison of nutritional composition between plant-based drinks and cow's milk]]<span class="hmi-ref-meta">Walther B, Guggisberg D, Badertscher R, Egger L, Portmann R, Dubois S, et al. · Frontiers in Nutrition · 2022 · [doi.org/10.3389/fnut.2022.988707](https://doi.org/10.3389/fnut.2022.988707)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-source-legend -->
## Sources

<p class="hmi-table-note">Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as <code>*[awaiting synthesis]*</code>.</p>

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/begday2026-plant-milk-heavy-metal-safety\|Begday et al. 2026]]. *Integral assessment of the environmental safety of plant-based milk alternatives based on heavy metal analysis*, Izvestiya KGTU (KSTU News) | 2026 | Peer-reviewed | RU Pb, Cd, Zn, Cu occurrence in Eight plant-based milk samples assessed on the Russian market: four commercial ready-to-drink beverages (one each of almond, rice,... (n=8) |
| 2 | [[sources/damato2026-inorganic-arsenic-rice-based-beverages\|D'Amato et al. 2026]]. *Inorganic Arsenic in Rice-Based Beverages: Occurrence in Products Available on the Italian Market and Dietary Exposure Assessment*, Foods | 2026 | Peer-reviewed | Measured iAs and tAs in 25 rice-based beverages from the Italian market by HPLC-ICP-MS; primary occurrence data for iAs in rice-based plant milks with EU regulatory comparison |
| 3 | [[sources/good2026-plant-milk-heavy-metals\|Good et al. 2026]]. *Comparative exposure and risk assessment of heavy metals, nutrients, and organochlorine pesticides in cow and plant-based milks*, Scientific Reports | 2026 | Peer-reviewed | US Cr, tAs, Cd, Pb occurrence in Twenty-two commercially available milk products purchased from major grocery retailers in Houston, Texas, USA. Eight milk-type categories: cow... (n=22) |
| 4 | [[sources/zverina2025-plant-dairy-toxic-elements\|Zvěřina et al. 2025]]. *Essential and toxic elements in plant-based dairy alternatives: implications for vegan diets*, European Food Research and Technology | 2025 | Peer-reviewed | CZ/EU Pb, Cd occurrence in Fifty-four plant-based dairy alternative (PBDA) samples sourced from the Czech market in Brno, Czech Republic. Composition: 35 milk... (n=54) |
| 5 | [[sources/milani2023-trace-elements-soy-based-beverages\|Milani et al. 2023]]. *Trace Elements in Soy-Based Beverages: A Comprehensive Study of Total Content and In Vitro Bioaccessibility*, International Journal of Environmental Research and Public Health | 2023 | Peer-reviewed | Measured Al, tAs, Cd, Cr, Ni, Pb, Sb, and Sn in 18 soy-based beverages from Brazil; Al ranged 176–1,822 µg/L by soy-source type; bioaccessibility fractions reported |
| 6 | [[sources/redan2023-plant-milk-alternatives-elements\|Redan et al. 2023]]. *Analysis of Eight Types of Plant-based Milk Alternatives from the United States Market for Target Minerals and Trace Elements*, Journal of Food Composition and Analysis | 2023 | Peer-reviewed | US tAs, Cd, Pb occurrence in Eighty-five plant-based milk alternative product units from 19 brands purchased from 10 retail markets and an online retailer... (n=85) |
| 7 | [[sources/walther2022-plantbased-drinks-arsenic\|Walther et al. 2022]]. *Comparison of nutritional composition between plant-based drinks and cow's milk*, Frontiers in Nutrition | 2022 | Peer-reviewed | tAs in 27 Swiss commercial plant-based drinks across eight species (oat, soy, almond, rice, coconut, hemp, spelt, cashew) compared to cow milk |
| 8 | [[sources/marques2021-trace-elements-milks-plant-based-drinks\|Marques et al. 2021]]. *Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks*, Biological Trace Element Research | 2021 | Peer-reviewed | Measured Pb, tHg, Ni, and U in retail cow milk, soy, almond, rice, and oat drinks from Spain; Pb detected in three samples including one oat drink; Hg, U below detection |
<!-- END: hmi-source-legend -->
## Why this commodity accumulates heavy metals

Plant milks (oat, almond, soy, coconut, rice, pea, hemp, cashew, and other plant-protein-based beverages) inherit their heavy-metal load from the source plant. The dominant driver is therefore the source-plant species and the soil-region where it was grown. Soy-based plant milk carries elevated Al, Ni, and Cd because soybean is an Al/Ni/Cd-accumulator plant; rice-based plant milk carries elevated iAs and Cd because rice is the canonical iAs accumulator (see [[ingredients/rice]]); oat-based plant milk typically carries the lowest baseline of the major plant-milk categories; almond-based plant milk inherits the almond Cd and Ni profile (see [[ingredients/almond]]); coconut-based plant milk carries the low coconut baseline (see [[ingredients/coconut]]).

The processing step (grinding, soaking, mixing with water, optional cooking, straining) does not change total plant-source metal load; it dilutes the per-mass metal concentration relative to the dry source plant by the water-mass ratio. Plant milks therefore typically carry 5-20× lower per-mass metal than the dry source plant, with the exact ratio depending on the manufacturer's water-to-solids ratio.

Additional metal contributors: fortifying mineral additives (the vitamin-mineral premix used to make plant milks nutritionally comparable to cow milk), packaging (Tetra Pak aluminum-foil-lined cartons can contribute trace Al), and processing-water hardness (water-Pb varies by source municipality).

The HMTc panel concerns for plant milks vary by source: soy-based is Al/Ni-elevated; rice-based is iAs/Cd-elevated; almond-based is Ni/Cd-elevated; oat-based is generally low across the panel; coconut-based is low across the panel.

## Ranges by source, region, and variety

The category "plant milk" spans substantially different metal profiles by source plant. The Cat 5 Step 0 lock therefore splits plant milk into three row categories: [[products/plant-milks-rice-based|rice-based]] (highest iAs concern; per [[sources/damato2026-inorganic-arsenic-rice-based-beverages|D'Amato 2026]]), [[products/plant-milks-soy-based|soy-based]] (Al/Ni concern; per [[sources/milani2023-trace-elements-soy-based-beverages|Milani 2023]]), and [[products/plant-milks-non-soy-non-rice|non-soy non-rice]] (oat, almond, coconut, pea, hemp; lower-baseline category). [[sources/marques2021-trace-elements-milks-plant-based-drinks|Marques 2021]] characterized multiple plant-milk types in the same survey and supports the within-category split.

Within rice-based plant milk, the iAs range tracks the source rice's iAs distribution (see [[ingredients/rice]]). Within soy-based plant milk, the Al range is more variable than expected from source-soy alone, suggesting processing-water and packaging-contribution effects.

[[sources/walther2022-plantbased-drinks-arsenic|Walther 2022]] specifically addresses arsenic in plant-based drinks and documents the iAs vs tAs partitioning across the major plant-milk categories.

## Processing effects

Plant milk manufacturing follows a standard sequence: grinding the source plant, soaking in water, blending to extract solubles, optional cooking or pasteurization, straining (for filtered plant milks like oat and almond) or homogenization (for non-strained plant milks), fortification, packaging.

The dominant metal-affecting step is **water dilution** during blending: a 1-part-plant-to-10-parts-water ratio yields a finished plant milk with 10× lower per-mass metal than the source plant. Different manufacturers use different ratios (commercial almond milk is typically 2-5 percent almonds by mass, oat milk 7-15 percent oats), and the per-serving metal load reflects this ratio plus the per-source plant metal content.

**Straining** removes some particulate-bound metal in the spent grain; the filtered plant milk carries the soluble-fraction metals plus any colloidal-suspended metal. Non-strained plant milks (homogenized whole-plant blends) carry the total plant-source metal.

**Fortification** adds vitamin and mineral compounds. The mineral premix can contribute trace Pb and Cd at parts-per-billion levels; supplier specifications control this.

**Heat treatment** (UHT pasteurization, retort sterilization for canned/cartoned products) does not change metal content.

**Packaging migration** can contribute Al from foil-lined cartons (Tetra Pak, brick-pack formats) over multi-month shelf life. Plastic and HDPE bottles are generally lower for migration considerations.

## Ingredient-derivative risk

Plant milk concentrates and powders carry per-mass metal at multiples of the as-fed liquid because water has been removed. Almond-milk powder, oat-milk concentrate, and similar concentrated forms inherit the plant-source metal load with concentration adjustments.

Plant-based yogurt, plant-based ice cream, and plant-based cheese inherit the source plant-milk profile with additional ingredient contributions. Plant-milk-based infant formulas (soy formula specifically per [[ingredients/infant-formula-powder]] and [[products/infant-formula-powder-soy-based]]) are separately regulated under infant-formula compositional requirements and route to Cat 1.

Plant-protein isolates (soy protein isolate, pea protein isolate) sold as standalone ingredients or in protein powders carry concentrated per-mass metal content and route to [[products/supplements-protein-collagen-powders|Cat 16 row 20]] when sold as dietary supplements.

## Mitigation options

**Sourcing levers** ([[mitigation/supply-chain-screening]]) are the dominant intervention. The single largest brand-side decision is the source-plant species (a brand can substantially reduce Al by formulating oat-based rather than soy-based; can reduce iAs by formulating non-rice-based rather than rice-based; can reduce Cd by sourcing low-Cd-origin almonds or low-Cd soy). Within a single source-plant species, geographic-segmented sourcing tracks the species-specific recommendations (low-Cd cocoa origins for cocoa milk; low-iAs rice for rice milk).

**Agronomic levers** ([[mitigation/agronomic]]) operate at the source-plant production stage and are addressed at the relevant ingredient pages ([[ingredients/rice]], [[ingredients/almond]], [[ingredients/soy]], [[ingredients/oat]], [[ingredients/coconut]]).

**Processing levers** ([[mitigation/processing]]) include water-source specification (testing of plant-milk plant feed water for Pb and Cd), equipment-contact specification (food-grade processing equipment, food-contact-substance compliance), and water-to-plant ratio formulation (higher water dilution reduces per-serving metal).

**Formulation levers** ([[mitigation/formulation]]) include species substitution (the largest single mitigation), water-to-plant ratio (commercial recipes vary 2-15 percent plant content), and fortification-source specification (mineral-premix supplier QC).

**Testing and QC levers** ([[mitigation/testing-and-qc]]) include lot-level testing on finished plant milk against the applicable regulatory cap. Speciation testing (iAs/tAs split) is operationally required for rice-based plant milk targeting EU markets. See [[testing/icp-ms]] and [[testing/arsenic-speciation]].

**Packaging and storage levers** ([[mitigation/packaging-and-storage]]) include carton-foil specification (low-Al-migration foil grades) and shelf-life storage condition controls.

## Regulatory limits that apply

- [[regulations/eu-2023-915]] — EU Reg. 2023/915 sets specific iAs maximum levels for rice-based plant milk (30 ppb iAs); general beverage MLs apply for Pb and Cd.
- Codex Alimentarius does not maintain plant-milk-specific MLs; the general beverage and source-ingredient MLs apply.
- FDA does not maintain a binding action level for Pb, Cd, or iAs in plant milks specifically. FDA juice action levels for Pb apply to plant-milk products labeled or marketed as juices.
- California Prop 65 ([[regulations/california-prop65]]) Pb MADL applies to plant milks sold in California; serving-based screen governs.

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [8dfcde584](https://github.com/paleofoundation/heavymetalindex/commit/8dfcde584) | 2026-08-02 | major | 1 section added; narrative text revised |
| [a0eb4e0e2](https://github.com/paleofoundation/heavymetalindex/commit/a0eb4e0e2) | 2026-08-02 | major | 1 section removed; narrative text revised |
| [91c7d5591](https://github.com/paleofoundation/heavymetalindex/commit/91c7d5591) | 2026-08-02 | minor | Narrative text revised |
| [33273ad69](https://github.com/paleofoundation/heavymetalindex/commit/33273ad69) | 2026-08-02 | major | 4 sources added; narrative text revised |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 2 sections added and 1 removed; narrative text revised |
<!-- END: hmi-page-history -->
