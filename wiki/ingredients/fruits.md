---
type: ingredient
commodity: fruits
title: "Fruits"
label: "Fruits"
aliases: [fruit]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
    typical_ppb: [0, 4]
    p95_ppb: 88
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
    typical_ppb: [59, 97]
    p95_ppb: 293
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
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
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [soil-uptake, geography, atmospheric-deposition, processing]
lower_risk_variants: []
higher_risk_variants: []
used_in_products: ["[[products/fruit-purees]]", "[[products/fruit-juice-not-canned]]", "[[products/fruit-juices-apple-containing]]", "[[products/fruit-juices-non-apple]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 6
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 4
---

# Fruits

Fruits is the category-level page covering whole fresh fruits and fruit-based composites as a food group. It serves as the umbrella under which commodity-specific pages such as [[ingredients/apple]], [[ingredients/banana]], [[ingredients/grapes]], [[ingredients/mango]], [[ingredients/strawberries]], [[ingredients/watermelon]], [[ingredients/raspberries]], and [[ingredients/guava]] sit. Where a commodity has its own dedicated page, the per-commodity contamination profile takes precedence; this page summarizes group-level findings from total diet studies and broad market surveys that report aggregate fruit-category values rather than per-fruit measurements. A separate per-commodity placeholder exists at [[ingredients/fruit]] for sources framed in the singular; the two pages are kept in sync until a curator-approved merge resolves the duplication.

## Why this commodity accumulates heavy metals

Fruits accumulate heavy metals through three primary routes. The first is soil uptake via the root system, which delivers Pb, Cd, Ni, and other metals from orchard, vineyard, and field soils into vascular tissue and fruit flesh; the magnitude depends on soil-metal availability, soil pH, organic matter content, and crop physiology. The second is atmospheric deposition on fruit surfaces during the growing season, which deposits Pb and other particulate metals directly onto the skin from industrial activity, vehicle exhaust, and dust resuspension; washing and peeling can remove a portion of this surface load. The third is irrigation water, particularly in regions where wastewater or contaminated surface water reaches orchards and vineyards; this pathway is documented as a significant route in developing-country agricultural studies reviewed by [[sources/afonne2020-heavy-metals-plant-foods|Afonne and Ifediba 2020]] and [[sources/munir2022-heavy-metals-natural-foods-review|Munir et al. 2022]]. Historical pesticide legacies, especially lead arsenate used in North American and European orchards through the mid-twentieth century, contribute persistent residual Pb and arsenic in older orchard soils.

Despite these exposure routes, fruits as a category sit toward the lower end of the heavy-metal-load spectrum for plant foods. The Hong Kong First Total Diet Study found that fruits contributed only 3.3 percent of dietary inorganic arsenic exposure for the average Hong Kong adult, compared with 53.5 percent from cereals ([[sources/cfs2012-hktds-inorganic-arsenic|CFS 2012]]). The Zhejiang Province nickel occurrence study similarly reported that fruits showed 100 percent detection but zero overstandard rate against the Chinese GB 2762-2022 limit of 1 mg/kg, with mean nickel of 0.097 mg/kg across 136 samples ([[sources/han2024-nickel-zhejiang-china|Han et al. 2024]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable group-level occurrence data was found in the contributing sources. Commodity-specific pages may carry richer per-analyte coverage; consult [[ingredients/apple]], [[ingredients/grapes]], [[ingredients/mango]], and related pages for fruit-specific values.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | data gap | — | — | — | — |
| Cd  | data gap | — | — | — | — |
| iAs | n=1 | 0–4 | 88 | low | [[sources/cfs2012-hktds-inorganic-arsenic\|6]] |
| tAs | data gap | — | — | — | — |
| tHg | data gap | — | — | — | — |
| Ni  | n=1 | 59–97 | 293 | low | [[sources/han2024-nickel-zhejiang-china\|2]] |
| Al  | data gap | — | — | — | — |
| Cr  | data gap | — | — | — | — |
| Sn  | data gap | — | — | — | — |
| U   | data gap | — | — | — | — |

## Ranges by source, region, and variety

The Hong Kong First Total Diet Study sampled 68 composite fruit samples representing the fruits commonly consumed by Hong Kong adults, with inorganic arsenic measured directly by hydride generation ICP-MS rather than estimated from total arsenic ([[sources/cfs2012-hktds-inorganic-arsenic|CFS 2012]]). Seventy-eight percent of composites fell below the 3 µg/kg method LOD, with a group mean of 4 µg/kg and a maximum of 88 µg/kg. The Hong Kong dietary picture treats fruits as a low-contribution iAs vector at 3.3 percent of total adult exposure.

The Zhejiang Province nickel survey provides the most granular fruit-category dataset in the current corpus: 136 samples collected from 11 cities in 2018–2019, analyzed by ICP-MS with a 3.5 µg/kg LOD ([[sources/han2024-nickel-zhejiang-china|Han et al. 2024]]). Fruits showed 100 percent detection, a range of 4 to 750 µg/kg, a median of 59 µg/kg, a mean of 97 µg/kg, and a 95th percentile of 293 µg/kg. No fruit sample exceeded the 1 mg/kg national standard for nickel in plant foods. The same study established that fruits, along with cereal products and pickled vegetables, are the lowest-Ni plant-food categories in the Zhejiang market, with beans (mean 3,094 µg/kg) and canned fish (mean 647 µg/kg) far exceeding the fruit-category mean.

Regional and varietal variation is not resolved at the category level from the current corpus. [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi|Chen et al. 2025]] uses fruits as one of ten consumption categories in a cumulative-risk Monte Carlo model but does not report fruit-specific concentration distributions in the contributing data slice extracted here. Per-fruit ranges live on the relevant commodity pages.

## Processing effects

Processing-state effects on fruit metal load are dominated by three transformations. Juicing extracts metals into the juice fraction and leaves part of the load in the pomace; juice concentrate further elevates concentration relative to single-strength juice. Drying concentrates all components by water loss and proportionally elevates metal concentration per gram of dried fruit. Canning, particularly in tin-plate containers, can introduce tin migration into the fruit matrix, which is why fruit juices and canned fruit carry distinct product-page treatments at [[products/fruit-juice-not-canned]] and the canned-fruit category. Washing and peeling remove a portion of surface-deposited Pb but do not affect metals taken up systemically through roots. The contributing sources for this page do not provide quantitative processing-effect data at the fruits-category level; commodity-specific pages and the [[products/fruit-juices-apple-containing]] and [[products/fruit-juices-non-apple]] product pages carry the empirical processing-state evidence where it exists.

## Ingredient-derivative risk

Fruits as a category produce a wide range of derivatives with distinct metal profiles. Juice and juice concentrate are the highest-concentration liquid derivatives because juicing transfers soluble metals from multiple servings of fruit into a single drinkable volume. Purée and applesauce-style products retain the full fruit matrix in cooked form with no concentration or dilution step. Dried fruit (raisins, dried apricot, dried mango, dried apple) concentrates metals by mass loss and carries a higher per-gram metal content than fresh fruit. Canned fruit, particularly in syrup, can pick up tin from the can lining; the [[ingredients/raisins]] page illustrates the dried-product concentration effect for the related grape category. Fruit-based baby food purées are a critical exposure route for infants because the typical serving size is large relative to body weight, which is why the regulatory framework treats infant fruit purées at [[products/fruit-purees]] with tighter thresholds than the fruits category as a whole.

## Mitigation options

Sourcing levers carry the most leverage for fruit-category metal load. Geographic provenance is the primary discriminant: orchards and vineyards in industrially polluted regions, in mining-impacted catchments, or on soils with historical lead arsenate use carry materially higher Pb and arsenic risk than fruit from modern commercial production in low-background regions. The Zhejiang dataset establishes that whole-region fruit sourcing from a Chinese coastal province produces 100 percent detection but zero exceedance of the 1 mg/kg Ni standard ([[sources/han2024-nickel-zhejiang-china|Han et al. 2024]]), which sets a useful reference point for sourcing specifications.

Agronomic levers operate on the fruit producer rather than the buyer. Soil pH management to reduce metal bioavailability, irrigation-water testing to exclude wastewater-contaminated supplies, and avoidance of phosphate fertilizers contaminated with Cd are the documented practices reviewed by [[sources/afonne2020-heavy-metals-plant-foods|Afonne and Ifediba 2020]]. These are upstream of brand-level sourcing decisions and require supplier engagement to verify.

Processing levers are limited at the fruits-category level. Washing removes surface-deposited Pb but does not affect systemically-taken-up metals. Peeling removes the skin where atmospheric deposition concentrates, at the cost of nutritional content. Discarding pomace rather than reincorporating it into juice reduces metal carryover from solids into liquid products.

Formulation levers operate on the brand. Diluting a higher-metal-load fruit ingredient with a lower-metal-load fruit, or substituting fruit-category derivatives that test cleaner, are the standard formulation responses to category-wide metal pressure.

Testing and QC levers are the brand-level backstop. Lot-level ICP-MS testing of incoming fruit raw material against a sourcing specification is the gold standard; spot-check programs and finished-product testing catch ingredient drift but at higher unit cost per defect detected. The [[testing/icp-ms]] page covers the analytical method.

Packaging and storage levers are most relevant for canned fruit, where can-lining choice (lacquered vs unlacquered tin-plate) determines tin migration into the product over shelf life.

## Regulatory limits that apply

The Codex Alimentarius FAO/WHO maximum levels for plant foods, summarized in the reviews by [[sources/afonne2020-heavy-metals-plant-foods|Afonne and Ifediba 2020]] and [[sources/munir2022-heavy-metals-natural-foods-review|Munir et al. 2022]] from Codex CXS 193-1995, establish Pb in fruits at 0.1 mg/kg (100 ppb) on a wet-weight basis as placed on the market. Codex does not currently specify a Cd or arsenic ML at the fruits-category level for whole fresh fruit. The European Union Regulation (EU) 2023/915 establishes maximum levels for Pb in fresh fruit (excluding cranberries, currants, elderberries, and strawberry tree fruits) of 0.10 mg/kg (100 ppb) and for Cd of 0.050 mg/kg (50 ppb) for fruits and tree nuts, with stricter values for specific subcategories ([[regulations/eu2023-contaminants-maximum-levels]]). The Chinese national standard GB 2762-2022 establishes Ni in plant foods at 1 mg/kg (1,000 ppb), used as the reference for the Zhejiang dataset exceedance analysis. The United States FDA has no commodity-specific Pb action level for whole fresh fruit under the current Closer to Zero framework ([[regulations/fda-closer-to-zero]]); FDA action levels target processed infant and toddler food categories rather than raw whole fruit.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/chen2025-cumulative-dietary-heavy-metals-chongqing-mrpi\|Chen et al. 2025]]. *Probabilistic assessment of the cumulative risk from dietary heavy metal exposure in Chongqing, China using a hazard-driven approach*, Scientific Reports 15:2229 | 2025 | Peer-reviewed | Chongqing cumulative dietary-exposure modeling using fruits as one of ten consumption categories; provides mRPI/Monte Carlo framework context but no fruit-specific concentration values |
| 2 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | Primary Ni occurrence data for fruits as a category (n=136 samples, 11 cities, ICP-MS); mean 97 ppb, p95 293 ppb, 100 percent detection, zero exceedance of GB 2762-2022 1 mg/kg standard |
| 3 | [[sources/munir2022-heavy-metals-natural-foods-review\|Munir et al. 2022]]. *Heavy Metal Contamination of Natural Foods Is a Serious Health Issue: A Review*, Sustainability | 2022 | Review | Toxicology and regulatory background for heavy metals in plant foods; Codex ML summary for fruits and vegetables; B-tier secondary source |
| 4 | [[sources/afonne2020-heavy-metals-plant-foods\|Afonne et al. 2020]]. *Heavy metals risks in plant foods – need to step up precautionary measures*, Current Opinion in Toxicology | 2020 | Review | Reviewed evidence on soil-irrigation-fertilizer routes for heavy metals into plant foods globally, with Codex ML table for fruits, vegetables, and cereals |
| 5 | [[sources/cfs2013-hktds-metallic-contaminants\|Centre for Food Safety 2013]]. *The First Hong Kong Total Diet Study: Metallic Contaminants*, Centre for Food Safety, Food and Environmental Hygiene Department, Government of the Hong Kong Special Administrative Region | 2013 | Government report | Hong Kong Total Diet Study category-level metallic contaminant data (Al, Sb, Cd, Pb, MeHg, Ni, Sn); fruits group reported as low-contribution vector in dietary exposure aggregation |
| 6 | [[sources/cfs2012-hktds-inorganic-arsenic\|Centre for Food Safety 2012]]. *The First Hong Kong Total Diet Study: Inorganic Arsenic*, Hong Kong Centre for Food Safety, Food and Environmental Hygiene Department | 2012 | Government report | Primary iAs occurrence data for fruits group (n=68 composites, hydride generation ICP-MS); mean 4 ppb, range ND–88 ppb, 78 percent below LOD; fruits contribute 3.3 percent of adult dietary iAs exposure |
<!-- END: hmi-source-legend -->
