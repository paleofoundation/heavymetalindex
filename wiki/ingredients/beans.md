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
wiki_doi: null
updated: 2026-05-16
sources: 12
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 4
---

# Beans

Beans — the broad legume category covering dried and canned pulses (kidney, black, pinto, navy, cannellini, fava, pinto, chickpeas, lentils as a distinct sub-category) — sit at the middle of the food-system heavy-metals risk distribution. The defining feature of the legume category is nickel accumulation: leguminous plants harbour nitrogen-fixing Rhizobium bacteria in root nodules that require nickel for their urease enzyme machinery, so legumes consistently carry higher Ni than non-legume crops. Beans also accumulate Cd at modest rates and inherit canning-source Pb when sold in cans rather than dried. The current corpus loads 4 sources directly: Abdolahpour 2023 Iranian Babol-city vegetable Pb-Cd (n=32, [[sources/abdolahpour2023-heavy-metals-babol-vegetables]]), Alzabadi 2018 Palestinian canned-foods including canned beans (n=16, [[sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn]]), Bora 2022 Romanian fruit-and-vegetable washing intervention covering bean baseline (n=80, [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing]]), Sandil 2023 bean-and-lettuce arsenic uptake mechanism ([[sources/sandil2023-arsenic-bean-lettuce]]); plus the ATSDR 2005 Tin Toxicological Profile relevant to canned-bean Sn ([[sources/atsdr2005-tin-toxicological-profile]]) and the broader vegetable-and-legume corpus reachable through the routing layer.

## Why this commodity accumulates heavy metals

Beans accumulate metals through root uptake into the seed-pod and seed tissues, with rates varying by species and soil chemistry. The legume-specific nickel accumulation is driven by Rhizobium nitrogen-fixation biochemistry: the bacterial urease enzyme requires nickel as a cofactor, so the plant actively concentrates Ni into the root nodule and into the seed. The Sandil 2023 work documented arsenic uptake into bean tissue at developmental-stage-dependent rates, with mature beans carrying more total arsenic than younger plant tissue ([[sources/sandil2023-arsenic-bean-lettuce]]). Cadmium uptake follows the standard plant pathway driven by soil Cd-to-Zn ratio. The canning step is the dominant downstream contamination event for canned beans specifically: traditional tin-plate cans contribute Sn through corrosion of the tinplate over shelf life, particularly for acidic bean products (chili beans, baked beans in tomato sauce); historical lead-soldered cans (largely phased out globally but persisting in some markets) contributed Pb. The Alzabadi 2018 Palestinian canned-foods survey found Cd-and-Pb in canned beans at retail levels of concern in some samples, with the canning step the most plausible explanation for the elevation relative to dried bean baseline ([[sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn]]).

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | Confidence | Key sources |
|---------|----------|---------------|------------|-------------|
| Pb | n=6 | 10–200 | medium | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|1]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|2]] |
| Cd | n=5 | 10–150 | medium | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|1]], [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|2]] |
| iAs | data gap | — | — | — |
| tAs | n=3 | 10–100 | medium | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|1]], [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|2]] |
| tHg | data gap | — | — | — |
| Ni | n=3 | 100–1500 | high | [[sources/han2024-nickel-zhejiang-china\|1]] |
| Al | data gap | — | — | — |
| Cr | n=2 | 10–200 | low | — |
| Sn | n=2 | 0–1000 | low | [[sources/trandafir2012-tin-canned-foods-icp-ms\|1]] |
| U | data gap | — | — | — |

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

Lot-level ICP-MS testing for Pb (detection floor ≤ 5 ppb), Cd (≤ 1 ppb), Sn (≤ 50 ppb for canned), and Ni (≤ 50 ppb) [[testing/icp-ms]] is the standard intervention.

### Packaging and storage levers

Glass jars eliminate the can-leaching pathway entirely. Modern fully-welded steel cans with food-grade interior coatings are acceptable. Lead-soldered cans (historical risk) and tinplate cans with damaged coatings for acidic bean products are the historical packaging risks. Pouches do not contribute meaningfully to the metal load.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 sets a Pb maximum of 0.10 mg/kg fresh weight for legumes (dry) and 0.10 mg/kg for canned vegetables; Cd at 0.10 mg/kg for legumes. The EU Regulation 2023/915 sets the legume Pb maximum at 0.10 mg/kg and Cd at 0.040 mg/kg for legumes (tighter than Codex). The Codex Sn maximum of 250 mg/kg applies to canned beans alongside the broader canned-food category. The FDA has not set bean-specific action levels but has issued recall notifications for canned-bean products with elevated Pb tied to historical packaging issues.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/imongben2026-kaduna-vegetables-hra\|Imongben et al. 2026]]. *Determination of some heavy metals and their potential risk in selected vegetables on sale within Kaduna Metropolis, Kaduna State, Nigeria*, World Nutrition | 2026 | Peer-reviewed | NG Cr, Mn, Fe, Co, Ni, Cu, Mo, Zn occurrence in 12 vegetable types (carrots, sweet potatoes, celery, lettuce, spinach, cabbage, broccoli, cauliflower, eggplant, avocado, peas, beans) purchased from... (n=60) |
| 2 | [[sources/ewubare2024-academic-review-heavy-metals-environment\|Ewubare et al. 2024]]. *An Academic Review on Heavy Metals in the Environment: Effects on Soil, Plants Human Health, and Possible Solutions*, American Journal of Environmental Economics 3(1) 70-81 | 2024 | Review | NG Pb, Cd, tHg, MeHg, Cr, Cr-VI, tAs, Ni, Cu, Zn, Mn, Co, Sb, Tl, Mo occurrence in Narrative review article; no primary samples. Synthesizes literature retrieved from Google Scholar, Frontier in Microbiology, AJOL, Scopus, Web... |
| 3 | [[sources/han2024-nickel-zhejiang-china\|Han et al. 2024]]. *Occurrence and Exposure Assessment of Nickel in Zhejiang Province, China*, Toxics | 2024 | Peer-reviewed | Ni in bean samples from Zhejiang Province with all samples above the GB 2762-2022 1 mg/kg national limit |
| 4 | [[sources/abdolahpour2023-heavy-metals-babol-vegetables\|Abdolahpour et al. 2023]]. *The health risk assessment of heavy metals in vegetables grown in Babol city, Iran*, International Archives of Health Sciences | 2023 | Peer-reviewed | Iranian Babol-city Pb-Cd vegetable panel including beans (n=32) |
| 5 | [[sources/bora2022-heavy-metals-fruits-vegetables-romania-vinegar-washing\|Bora et al. 2022]]. *Quantification and Reduction in Heavy Metal Residues in Some Fruits and Vegetables: A Case Study Galați County, Romania*, Horticulturae | 2022 | Peer-reviewed | Romanian fruit-vegetable Pb-Cd-tAs-Zn baseline including beans (n=80) |
| 6 | [[sources/clair-caliot2021-arsenic-irrigated-vegetables-burkina\|Clair-Caliot et al. 2021]]. *Uptake of Arsenic by Irrigated Vegetables and Cooked Food Products in Burkina Faso*, Frontiers in Water | 2021 | Peer-reviewed | Burkina Faso irrigation-water arsenic pathway in vegetables including bean crops (n=168) |
| 7 | [[sources/bulduk2020-vicia-faba-elements\|Ibrahim 2020]]. *Determination of trace element levels in flowers and leaves of vicia faba by ICP-MS*, Progress in Chemical and Biochemical Research | 2020 | Peer-reviewed | TR Cr, Fe, Zn, Al, Cu, Pb, Cd, Mn, Ni occurrence in Dried Vicia faba flowers and leaves analyzed as medicinal plant material in Turkey |
| 8 | [[sources/alzabadi2018-canned-foods-palestine-cd-pb-cu-zn\|Al et al. 2018]]. *Environmental exposure assessment of cadmium, lead, copper and zinc in different Palestinian canned foods*, Agriculture & Food Security 7:50 | 2018 | Peer-reviewed | PS Cd, Pb, Cu, Zn occurrence in 16 canned food samples (4 brand-product combinations each of beans, chickpeas, corn, mushroom) purchased from a single supermarket... (n=16) |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [676a09c](https://github.com/paleofoundation/heavymetalindex/commit/676a09c) | 2026-05-29 | daemon: empty-queue glob no longer aborts whole tick (12-hour silent death) |
| [cae015c](https://github.com/paleofoundation/heavymetalindex/commit/cae015c) | 2026-05-29 | state sync: 13h of daemon-stalled work — page-history tables rolled forward |
| [ce3e07c](https://github.com/paleofoundation/heavymetalindex/commit/ce3e07c) | 2026-05-28 | activation \| Vercel DATACITE env slots set, curators.md filled with founder entry + six scoped reviewer invitations, peer-review onboarding playbook drafted |
| [10eef01](https://github.com/paleofoundation/heavymetalindex/commit/10eef01) | 2026-05-28 | 10-year architecture \| schema discipline + future-proofing slots + per-page changelog + licensing/errata/roadmap + contamination API skeleton + JSON-LD ScholarlyArticle markup |
| [69e1bd7](https://github.com/paleofoundation/heavymetalindex/commit/69e1bd7) | 2026-05-28 | autonomy: commit pending sync-source-counts + tracker updates from stalled ticks |
<!-- END: hmi-page-history -->
