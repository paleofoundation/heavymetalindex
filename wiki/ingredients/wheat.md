---
title: Wheat
type: ingredient
commodity: wheat
aliases: [wheat grain, wheat flour, whole wheat flour, wheat bran, wheat germ, semolina, durum wheat, hard red wheat, soft white wheat, wheat protein, vital wheat gluten]
category: grain
contamination_profile:
  Pb:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cd:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  iAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tHg:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Ni:
    status: in_progress
    typical_ppb: [100, 800]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-11
  Al:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Cr:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  Sn:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  tAs:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
  U:
    status: pending
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: null
drivers: [soil-uptake, cultivar, zinc-status, phosphate-fertilization, geography]
lower_risk_variants: ["[[ingredients/refined-white-flour]]"]
higher_risk_variants: ["[[ingredients/wheat-bran]]", "[[ingredients/wheat-germ]]", "[[ingredients/whole-wheat-flour]]", "[[ingredients/wheat-protein-concentrate]]"]
used_in_products: ["[[products/bread]]", "[[products/pasta]]", "[[products/cereals]]", "[[products/baked-goods]]", "[[products/baby-cereal]]", "[[products/wheat-based-snacks]]", "[[products/crackers]]", "[[products/couscous]]", "[[products/bulgur]]"]
audience: [regulator, educator, consumer, app]
updated: 2026-04-24
---

# Wheat

_Stub page. Contamination profile populates on the next ingest wave. Wheat is identified across [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] and [[sources/jecfa-91st-cadmium-2022|JECFA 91st 2022]] as one of the top population-level dietary cadmium contributors, with the bran and germ fractions carrying higher cadmium than refined endosperm._

## Why this commodity accumulates cadmium

Wheat takes up cadmium from soil through its root system, with uptake efficiency influenced by soil cadmium concentration, zinc status, soil pH, and cultivar. Durum wheat has been documented as a more efficient cadmium accumulator than common bread wheats, producing elevated cadmium in pasta-grade wheat products. Within the wheat kernel, cadmium partitions preferentially to the bran and germ rather than the endosperm, so refined white flour carries the lowest cadmium among common wheat derivatives and whole-wheat products carry the highest.

## Ranges by source, region, and variety

_Pending ingest of commodity-level occurrence data. EFSA 2009 Table 1 reports a mean cadmium concentration for wheat grain and flour of 0.030 mg/kg and for wheat bran and germ of 0.065 mg/kg, reflecting the approximately two-fold bran-over-endosperm concentration factor. Durum wheat, rice bran, and whole-wheat products in cadmium-elevated growing regions carry values above the category mean._

## Processing effects

_Pending. Milling that removes bran and germ lowers the cadmium content of the resulting flour relative to whole grain; fermentation and baking do not remove cadmium. Wheat-protein isolation (vital wheat gluten) concentrates cadmium from the source grain proportionally with protein enrichment._

## Ingredient-derivative risk

Derivative wheat products vary substantially in cadmium content by the fraction of the kernel they represent. Refined white flour, semolina, and pasta made from refined wheat are at or near the endosperm-level mean; whole wheat flour, bran-enriched cereals, wheat bran supplements, and wheat germ products are above the whole-grain mean by the bran-concentration factor. Wheat protein products (vital wheat gluten, seitan) concentrate cadmium from the source grain; per-product characterization is necessary.

## Mitigation options

_Pending. Cultivar selection (non-accumulator lines), zinc amendment of soils (zinc-cadmium antagonism reduces plant cadmium uptake), soil pH management, and milling practices that remove bran and germ are the primary mitigation levers._

## Other metals of concern

_Some metals not listed in this section because no ingested source yet covers their commodity-level concern; those will populate when the corresponding source pages are ingested._

- **Pb**: the FDA Closer to Zero 20 ppb Pb action level for dry infant cereals applies to wheat-based infant cereal ([[sources/fda-ctz-Pb-babyfood-2025|FDA CTZ Pb 2025]]; see [[regulations/fda-ctz-Pb-cereal-20ppb]]).

## Regulatory limits that apply

- [[regulations/codex-cadmium-mls]] — Codex matrix-level Cd ML for cereal grains (pending ingest of CXS 193-1995). The CCCF17 2024 discussion on quinoa (held separate from cereals at 0.15 mg/kg) recorded that one Member delegation cited cereals as a "serious contributor to exposure to cadmium" in their region, consistent with the wiki's cross-source synthesis.
- [[regulations/eu-2023-915-cadmium]] — EU Cd maximum levels for cereals: 0.10 mg/kg (100 ug/kg) for cereals except listed rows; 0.050 mg/kg (50 ug/kg) for barley and rye; 0.15 mg/kg (150 ug/kg) for rice, quinoa, wheat bran, and wheat gluten; 0.18 mg/kg (180 ug/kg) for durum wheat; 0.20 mg/kg (200 ug/kg) for wheat germ.
- [[regulations/fda-ctz-Pb-cereal-20ppb]] — FDA CTZ 20 ppb lead action level for dry infant cereals is the adjacent Pb rule; any future Cd analogue under the CTZ program would apply similarly to wheat-based infant cereal.

## Nickel in wheat

[[sources/flyvholm1984-nickel-content-food-dietary-intake|Flyvholm et al. 1984]] reports wheat flour mean Ni at 0.13 µg/g (range 0.03 to 0.3 µg/g, n=32 samples) and whole wheat at 0.33 µg/g (range 0.1 to 0.8 µg/g, n=85). The roughly 2.5x concentration gap between whole-grain wheat and refined flour reflects the bran fraction's accumulation of Ni, parallel to the bran-effect on Cd and Mn. In the Danish average diet model, wheat flour contributes 14.7 µg Ni/day (10 percent of total dietary Ni) at a load factor F = 1.9; wheat is therefore a meaningful per-day Ni source by volume, though not a high per-gram contributor on the order of cocoa, soy, or oats. Whole wheat at 0.33 µg/g is roughly 5x higher than white bread (0.27 µg/g, n=65 samples), supporting the bran-versus-endosperm pattern.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/ozkutlu2026-wheat-cd-zinc-mitigation\|Ozkutlu et al. 2026]]. *Roles of Soil and Foliar Spray of Zinc Nutrition in Cadmium Reduction of Wheat Grain*, ACS Omega | 2026 | Peer-reviewed | Greenhouse trial quantifying Zn-based Cd mitigation in durum wheat grain; establishes practical ceiling of combined soil + foliar Zn fertilization across four Cd dose levels |
| 2 | [[sources/asaditouranlou2025-bread-wheat-mashhad\|Asadi et al. 2025]]. *Human health risk assessment of arsenic and potentially toxic elements exposure in bread and wheat flour in Northeast Iran*, PLoS ONE | 2025 | Peer-reviewed | Multi-metal (tAs, Al, Cr, Cd, Ni, Pb, Hg) occurrence in wheat flour, dough, and bread from 90 Mashhad bakeries; As dominates carcinogenic and non-carcinogenic risk |
| 3 | [[sources/cantoral2024-cadmium-foodstuffs-mexico\|Cantoral et al. 2024]]. *Dietary Risk Assessment of Cadmium Exposure Through Commonly Consumed Foodstuffs in Mexico*, Foods | 2024 | Peer-reviewed | Cd concentrations in 143 commonly consumed Mexican foodstuffs including cereals and wheat-based products; dietary exposure modelling by age group |
| 4 | [[sources/cantoral2024-lead-levels-mexican-foods\|Cantoral et al. 2024]]. *Lead Levels in the Most Consumed Mexican Foods: First Monitoring Effort*, Toxics | 2024 | Peer-reviewed | Pb concentrations across 103 Mexican foods including cereals; whole wheat bread flagged at 0.447 mg/kg, exceeding FAO/WHO ML |
| 5 | [[sources/kumar2024-arsenic-breast-milk-bihar-gangetic\|Kumar et al. 2024]]. *High Arsenic Contamination in the Breast Milk of Mothers Inhabiting the Gangetic Plains of Bihar: A Major Health Risk to Infants*, Environmental Health 23(1) | 2024 | Peer-reviewed | tAs and iAs in wheat grain as part of multi-matrix arsenic exposure study in high-As Bihar groundwater area; provides supply-chain context for As transfer through diet |
| 6 | [[sources/alharbi2023-baby-foods-saudi-arabia-heavy-metals\|Alharbi et al. 2023]]. *Occurrence and Dietary Exposure Assessment of Heavy Metals in Baby Foods in the Kingdom of Saudi Arabia*, Food Science & Nutrition | 2023 | Peer-reviewed | As, Cd, Pb in wheat-containing cereal-based baby meals and biscuits from Saudi Arabia (n=111 products); dry-weight basis, ICP-MS |
| 7 | [[sources/jecfa-91st-cadmium-2022\|JECFA 2022]]. *Cadmium: dietary exposure assessment*, WHO Food Additives Series, No. 82 (Safety evaluation of certain contaminants in food, prepared by the 91st meeting of JECFA) | 2022 | Government report | International Cd dietary exposure assessment identifying wheat and cereals as major population-level Cd contributors; underpins PTMI of 25 µg/kg BW/month |
| 8 | [[sources/pompa2021-durum-wheat-cd-pb-hg-italy\|Pompa et al. 2021]]. *Evaluation and Dietary Exposure Assessment of Selected Toxic Trace Elements in Durum Wheat (Triticum durum) Imported into the Italian Market: Six Years of Official Controls*, Foods | 2021 | Peer-reviewed | Cd, Pb, and Hg in 346 imported durum wheat grain samples (Italy 2015–2020, six origin countries); documents temporal and geographic Cd variance by country of origin |
| 9 | [[sources/tian2021-magnetic-purification-cadmium-lead-grain\|Tian et al. 2021]]. *A rapid magnetic-based purification of Cd2+ and Pb2+ prior to portable electrochemical determination for grain*, Food Chemistry: X | 2021 | Peer-reviewed | Cd and Pb detection method validated on naturally contaminated wheat, rice, and corn from Chinese markets; occurrence values cross-validated against ICP-MS |
| 10 | [[sources/chekri2019-french-infant-toddler-tds-trace-elements\|Chekri et al. 2019]]. *Trace element contents in foods from the first French Total Diet Study on infants and toddlers*, Journal of Food Composition and Analysis | 2019 | Peer-reviewed | Multi-element (Al, Sb, tAs, Cd, Cr, Co, Ni, Sn, V) occurrence in 291 French infant foods including wheat-based cereals; category-level data for cereal-based infant products |
| 11 | [[sources/maccaferri2019-durum-wheat-genome-cadmium\|Maccaferri et al. 2019]]. *A high-density, SNP-based consensus map of tetraploid wheat as a bridge to integrate durum and bread wheat genomics and breeding*, Nature Genetics | 2019 | Peer-reviewed | Durum wheat reference genome identifying TdHMA3-B1 as the primary genetic determinant of grain Cd accumulation; underpins the cultivar-selection mitigation strategy |
| 12 | [[sources/nordberg2015-cadmium-chapter\|Nordberg et al. 2015]]. *Cadmium (Chapter 32), in Handbook on the Toxicology of Metals, Fourth Edition, Volume II: Specific Metals*, Academic Press / Elsevier, Amsterdam | 2015 | Textbook chapter | Canonical Cd toxicology reference chapter covering environmental occurrence including wheat/cereals as major dietary Cd sources; anchors the toxicokinetic frame |
| 13 | [[sources/efsa-cadmium-contam-2009\|EFSA 2009]]. *Scientific Opinion of the Panel on Contaminants in the Food Chain on a request from the European Commission on cadmium in food*, The EFSA Journal | 2009 | Government report | EU Cd exposure assessment establishing TWI of 2.5 µg/kg BW/week; reports mean Cd in wheat grain and flour at 0.030 mg/kg and in wheat bran/germ at 0.065 mg/kg |
| 14 | [[sources/codex-cxs-193-1995\|Codex 1995]]. *General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995)*, Codex Alimentarius (Joint FAO/WHO Food Standards Programme) | 1995 | Government report | Operative international Codex standard setting matrix-specific maximum levels for Cd, Pb, and other contaminants in cereals including wheat |
| 15 | [[sources/flyvholm1984-nickel-content-food-dietary-intake\|Flyvholm et al. 1984]]. *Nickel Content of Food and Estimation of Dietary Intake*, Zeitschrift für Lebensmittel-Untersuchung und -Forschung 179(6):427-431 | 1984 | Peer-reviewed | Ni concentrations in wheat flour (mean 0.13 µg/g, n=32) and whole wheat (0.33 µg/g, n=85) by AAS; foundational Danish dietary Ni intake model |
<!-- END: hmi-source-legend -->

