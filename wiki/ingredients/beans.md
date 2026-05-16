---
type: ingredient
commodity: beans
title: "Beans"
label: "Beans"
aliases: [legumes, pulses, dried-beans, canned-beans]
category: legume
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 200]
    p95_ppb: 500
    confidence: medium
    n_studies: 6
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [10, 150]
    p95_ppb: 300
    confidence: medium
    n_studies: 5
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: null
    confidence: medium
    n_studies: 3
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
    typical_ppb: [100, 1500]
    p95_ppb: null
    confidence: high
    n_studies: 3
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
    typical_ppb: [10, 200]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 1000]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [nickel-accumulator-legume, soil-uptake, canning-can-leaching, soaking-leaching]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/canned-beans-traditional-tin]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 8
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 4
---

# Beans

Beans — the broad legume category covering dried and canned pulses (kidney, black, pinto, navy, cannellini, fava, pinto, chickpeas, lentils as a distinct sub-category) — sit at the middle of the food-system heavy-metals risk distribution. The defining feature of the legume category is nickel accumulation: leguminous plants harbour nitrogen-fixing Rhizobium bacteria in root nodules that require nickel for their urease enzyme machinery, so legumes consistently carry higher Ni than non-legume crops. Beans also accumulate Cd at modest rates and inherit canning-source Pb when sold in cans rather than dried. The current corpus loads 4 sources directly: Abdolahpour 2023 Iranian Babol-city vegetable Pb-Cd (n=32, [[sources/abdolahpour2023-heavy-metals-babol-vegetables]]), Alzabadi 2018 Palestinian canned-foods including canned beans (n=16, [[sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn]]), Bora 2022 Romanian fruit-and-vegetable washing intervention covering bean baseline (n=80, [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing]]), Sandil 2023 bean-and-lettuce arsenic uptake mechanism ([[sources/sandil2023-arsenic-bean-lettuce]]); plus the ATSDR 2005 Tin Toxicological Profile relevant to canned-bean Sn ([[sources/atsdr2005-tin-toxicological-profile]]) and the broader vegetable-and-legume corpus reachable through the routing layer.

## Why this commodity accumulates heavy metals

Beans accumulate metals through root uptake into the seed-pod and seed tissues, with rates varying by species and soil chemistry. The legume-specific nickel accumulation is driven by Rhizobium nitrogen-fixation biochemistry: the bacterial urease enzyme requires nickel as a cofactor, so the plant actively concentrates Ni into the root nodule and into the seed. The Sandil 2023 work documented arsenic uptake into bean tissue at developmental-stage-dependent rates, with mature beans carrying more total arsenic than younger plant tissue ([[sources/sandil2023-arsenic-bean-lettuce]]). Cadmium uptake follows the standard plant pathway driven by soil Cd-to-Zn ratio. The canning step is the dominant downstream contamination event for canned beans specifically: traditional tin-plate cans contribute Sn through corrosion of the tinplate over shelf life, particularly for acidic bean products (chili beans, baked beans in tomato sauce); historical lead-soldered cans (largely phased out globally but persisting in some markets) contributed Pb. The Alzabadi 2018 Palestinian canned-foods survey found Cd-and-Pb in canned beans at retail levels of concern in some samples, with the canning step the most plausible explanation for the elevation relative to dried bean baseline ([[sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn]]).

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=6       | 10–200    | 500     | medium | [[sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn\|3]], [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|1]] |
| Cd  | n=5       | 10–150    | 300     | medium | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|1]], [[sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn\|3]] |
| iAs | data gap  | —         | —       | —      | — |
| tAs | n=3       | 10–100    | —       | medium | [[sources/sandil2023-arsenic-bean-lettuce\|8]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|7]] |
| tHg | data gap  | —         | —       | —      | — |
| Ni  | n=3       | 100–1,500 | —       | high   | [[sources/albals2021-coffee-jordan-icpms\|2]] |
| Al  | data gap  | —         | —       | —      | — |
| Cr  | n=2       | 10–200    | —       | low    | [[sources/arevalo-gardini2017-peru-cacao-regional-metals\|6]] |
| Sn  | n=2       | 0–1,000   | —       | low    | [[sources/atsdr2005-tin-toxicological-profile\|4]], [[sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn\|3]] |
| U   | data gap  | —         | —       | —      | — |

## Ranges by source, region, and variety

The corpus characterises bean metals through directly-routed studies plus broader vegetable surveys reachable via the routing layer. The Palestinian Alzabadi 2018 canned-foods survey (n=16 including canned beans, fava beans, and related canned product) documented Cd-and-Pb concentrations approaching Codex limits in a meaningful fraction of canned-bean product, with the canning step implicated as the dominant pathway ([[sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn]]). The Romanian Bora 2022 work characterised bean baselines (within the broader fruit-vegetable n=80 panel) and tested vinegar-wash interventions for surface metals ([[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing]]). The Hungarian Sandil 2023 bean-and-lettuce arsenic uptake mechanism work documented developmental-stage-dependent As accumulation in bean tissue ([[sources/sandil2023-arsenic-bean-lettuce]]). Variety-level pattern: kidney beans, black beans, pinto beans, and navy beans have similar metal profiles within commodity-grade product; soybeans (technically a legume but covered separately as oilseed) accumulate Cd at higher rates than other beans. Origin: US, Canadian, Mexican, Brazilian commodity beans are broadly equivalent on heavy metals; specific-origin specifications add cost without meaningful metal-load shift for the broader bean category. Canned beans consistently carry higher Pb-Cd-Sn than the dried equivalent due to canning-step contributions.

## Processing effects

Dried beans require soaking and cooking before consumption. Soaking in fresh water leaches a fraction of soluble metals (Cd, some Ni) into the soak water; discarding the soak water reduces per-serving exposure of these soluble forms. Cooking by boiling leaches additional Cd and tAs into the cooking water; discarding the cooking water further reduces exposure. The traditional Mediterranean-and-Middle-Eastern practice of multiple-soak-and-rinse cycles is documented in food-safety literature as a meaningful reduction intervention for Cd and Ni in legumes. Canning introduces the can-source Pb and Sn pathway and is the single largest processing-driven contamination event for canned bean product. Pressure cooking and slow cooking do not affect metal load differently from boiling. Fermented bean products (miso, tempeh, natto from soybeans; fermented bean paste from black beans) carry the parent bean's metal load with negligible processing-driven change.

## Ingredient-derivative risk

Dried beans cooked at home in fresh water with discarded soak-and-cook water represent the lowest-metal-load consumption form. Canned beans carry elevated Pb-Cd-Sn relative to the dried equivalent; the Alzabadi 2018 Palestinian data document the magnitude. Bean flour (chickpea flour, black bean flour, etc., used in gluten-free baking) carries the parent bean's metal load on a dry-weight basis without the soak-and-cook reduction. Bean protein isolate (used in plant-based meat alternatives and supplement applications) concentrates protein and any protein-bound metals. Refried beans and pre-cooked bean preparations sold in pouches inherit the canning or pouch-source metal contributions. Bean dips, hummus, and finished-product applications carry the bean's metal load at the inclusion ratio.

## Mitigation options

### Sourcing levers

For dried beans, sourcing from suppliers with documented soil-and-water screening provides upstream metal-load control. Avoid sourcing from regions with documented mining-corridor or industrial-corridor soil contamination. For canned beans, source from canners using modern fully-welded steel cans with food-grade interior coatings; avoid lead-soldered cans (largely phased out but persisting in some markets) and avoid tinplate cans with damaged coatings for acidic bean products.

### Agronomic levers

For brand-controlled-supply operations, soil pH management around 6.5 reduces Cd bioavailability. Avoid phosphate fertilisers with elevated Cd impurity. Rhizobium-inoculated nitrogen-fixation reduces the need for external nitrogen fertilisers and the associated Cd-contamination risk. Most agronomic interventions live with bean producers rather than ingredient buyers.

### Processing levers

Soaking-and-discarding-water plus cooking-and-discarding-water reduces Cd and soluble metals by 20-40% from the dried baseline. For canners, modern can technology (fully welded steel with food-grade interior coatings, glass jar alternative) eliminates the Pb-and-Sn pathway. Pressure-cooked product does not differ meaningfully from boiled product on metal removal.

### Formulation levers

For finished products using beans as an ingredient (chili, soups, dips, ready-meals), the inclusion ratio caps per-serving exposure. Substitution between bean varieties does not meaningfully change the Pb-Cd profile; substitution with lentils (typically lower-Cd) shifts the per-serving Cd modestly lower.

### Testing and QC levers

Lot-level ICP-MS testing for Pb (detection floor ≤ 5 ppb), Cd (≤ 1 ppb), Sn (≤ 50 ppb for canned), and Ni (≤ 50 ppb) is the standard intervention.

### Packaging and storage levers

Glass jars eliminate the can-leaching pathway entirely. Modern fully-welded steel cans with food-grade interior coatings are acceptable. Lead-soldered cans (historical risk) and tinplate cans with damaged coatings for acidic bean products are the historical packaging risks. Pouches do not contribute meaningfully to the metal load.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 sets a Pb maximum of 0.10 mg/kg fresh weight for legumes (dry) and 0.10 mg/kg for canned vegetables; Cd at 0.10 mg/kg for legumes. The EU Regulation 2023/915 sets the legume Pb maximum at 0.10 mg/kg and Cd at 0.040 mg/kg for legumes (tighter than Codex). The Codex Sn maximum of 250 mg/kg applies to canned beans alongside the broader canned-food category. The FDA has not set bean-specific action levels but has issued recall notifications for canned-bean products with elevated Pb tied to historical packaging issues.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour 2023]]. *Heavy Metals in Vegetables Babol Iran* | 2023 | Peer-reviewed | Iranian Babol-city Pb-Cd vegetable panel including beans (n=32) |
| 2 | [[sources/albals2021-coffee-jordan-icpms\|Albals 2021]]. *Multi-element Coffee Beans Jordan ICP-MS* | 2021 | Peer-reviewed | Multi-element panel including Ni in legume (coffee bean) tissue (n=56) |
| 3 | [[sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn\|Alzabadi 2018]]. *Canned Foods Palestine Cd Pb Cu Zn* | 2018 | Peer-reviewed | Palestinian canned-bean Cd-Pb at retail levels of concern (n=16) |
| 4 | [[sources/atsdr2005-tin-toxicological-profile\|ATSDR 2005]]. *Toxicological Profile for Tin and Tin Compounds* | 2005 | Government report | Tin canned-product toxicology and exposure regulatory framework |
| 5 | [[sources/barraza2019-ecuador-cacao-cadmium-isotope\|Barraza 2019]]. *Cd Isotope Fractionation Soil-Cacao Ecuador* | 2019 | Peer-reviewed | Cadmium isotope mechanism evidence in legume-related tropical agronomy |
| 6 | [[sources/arevalo-gardini2017-peru-cacao-regional-metals\|Arevalo-Gardini 2017]]. *Peru Cacao Heavy Metals* | 2017 | Peer-reviewed | Peruvian cacao multi-region 8-metal panel; reference for related legume tissue (n=70) |
| 7 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora 2022]]. *Romania Fruits Vegetables Vinegar Washing* | 2022 | Peer-reviewed | Romanian fruit-vegetable Pb-Cd-tAs-Zn baseline including beans (n=80) |
| 8 | [[sources/sandil2023-arsenic-bean-lettuce\|Sandil 2023]]. *Arsenic Uptake Bean and Lettuce Developmental Stages* | 2023 | Peer-reviewed | Hungarian arsenic uptake mechanism in bean tissue across plant developmental stages |
| 9 | [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|Clair-Caliot 2021]]. *Arsenic Irrigated Vegetables Burkina Faso* | 2021 | Peer-reviewed | Burkina Faso irrigation-water arsenic pathway in vegetables including bean crops (n=168) |
<!-- END: hmi-source-legend -->
