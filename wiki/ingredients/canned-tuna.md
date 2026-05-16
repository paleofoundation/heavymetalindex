---
type: ingredient
commodity: canned-tuna
title: "Canned Tuna"
label: "Canned Tuna"
aliases: [tuna-in-water, tuna-in-oil, albacore-tuna, skipjack-tuna]
category: seafood
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [5, 100]
    p95_ppb: 300
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  Cd:
    status: populated
    typical_ppb: [5, 50]
    p95_ppb: 150
    confidence: medium
    n_studies: 4
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [1, 20]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  tAs:
    status: populated
    typical_ppb: [500, 5000]
    p95_ppb: 10000
    confidence: medium
    n_studies: 3
    last_reviewed: 2026-05-16
  tHg:
    status: populated
    typical_ppb: [100, 500]
    p95_ppb: 1500
    confidence: high
    n_studies: 5
    last_reviewed: 2026-05-16
  Ni:
    status: populated
    typical_ppb: [50, 500]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Al:
    status: populated
    typical_ppb: [100, 2000]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  Cr:
    status: populated
    typical_ppb: [10, 200]
    p95_ppb: null
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-16
  Sn:
    status: populated
    typical_ppb: [0, 500]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-16
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-16
drivers: [methylmercury-bioaccumulation, species, trophic-position, canning-can-leaching, arsenic-speciation]
lower_risk_variants: ["[[ingredients/canned-skipjack-tuna-light]]"]
higher_risk_variants: ["[[ingredients/canned-albacore-tuna-white]]", "[[ingredients/canned-bigeye-tuna]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
updated: 2026-05-16
sources: 6
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 4
---

# Canned Tuna

Canned tuna is the dominant retail-market form of tuna globally and the largest single dietary methylmercury source for many Western populations. The defining heavy-metals concern is mercury — specifically methylmercury (MeHg), the bioaccumulated organomercury form that concentrates up the marine food chain from microalgae to small forage fish to predatory tuna. Tuna species sit at differing trophic levels: skipjack tuna (Katsuwonus pelamis, the small "light tuna" species, ~1-2 year lifespan, lower trophic position) carries roughly one-third the methylmercury of albacore tuna (Thunnus alalunga, the "white tuna" species, ~5-15 year lifespan, higher trophic position), and yellowfin and bigeye tuna sit at or above the albacore level. Beyond mercury, canned tuna carries elevated total arsenic (mostly as low-toxicity organoarsenic forms; the iAs fraction is small but should be characterised separately per the program governance framework), and the canning step contributes Pb, Sn, and Al from the can interior. The current corpus loads 6 sources spanning Ecuador (Aguilar-Miranda 2024 n=60, [[sources/aguilar-miranda2024-thg-canned-tuna-ecuador]]), global ICP method development (Ali 2025 aluminum-cobalt sensor), Brazil (DeLima 2021 multi-metal n=20, [[sources/delima2021-metals-canned-tuna-sardines-brazil]]), Mexico (Rodriguez-Mendivil 2019 Tijuana n=68, [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana]]), the US (Shim 2004 n=272, [[sources/shim2004-mercury-fatty-acids-canned-tuna-salmon-mackerel]]), and the 36-jurisdiction Ulusoy 2023 multinational comparison (n=222, [[sources/ulusoy2023-canned-tuna-toxic-metals]]).

## Why this commodity accumulates heavy metals

Mercury in canned tuna originates from the marine biogeochemical cycle: atmospheric mercury deposition into ocean waters, methylation to MeHg by marine bacteria and archaea (predominantly in low-oxygen zones), uptake into phytoplankton, then progressive biomagnification up the food chain. Tuna are mid-to-high trophic-level predators, and their tissue mercury concentration is roughly proportional to age and trophic position. Species selection is the dominant variable: skipjack (the "light" canned tuna species) sits at trophic level ~3.5-4.0 with shorter lifespan and lower per-fish mercury; albacore (the "white" canned tuna species) at trophic level ~4.0-4.3 with longer lifespan accumulates 2-4× more MeHg. The Shim 2004 US-market dataset (n=272 canned tuna, salmon, mackerel samples) is the largest single-jurisdiction US dataset and confirms the species-specific pattern ([[sources/shim2004-mercury-fatty-acids-canned-tuna-salmon-mackerel]]). The Ulusoy 2023 multinational comparison covered 36 jurisdictions and characterised the global within-canned-tuna distribution by species and origin, finding consistent species differentiation across all jurisdictions ([[sources/ulusoy2023-canned-tuna-toxic-metals]]). Cadmium and lead in tuna come from a combination of marine uptake into prey species and post-harvest canning contributions. The canning step adds Pb, Sn, and Al through can-interior contact during the multi-year shelf life typical of commercial canned tuna; the DeLima 2021 Brazilian work and the Ali 2025 aluminum-cobalt sensor development specifically address the canned-product Al pathway ([[sources/delima2021-metals-canned-tuna-sardines-brazil]], [[sources/ali2025-carbon-dots-aluminum-cobalt-canned-food]]).

## Heavy metal contamination profile

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb  | n=4       | 5–100      | 300       | medium | [[sources/delima2021-metals-canned-tuna-sardines-brazil\|3]], [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|4]] |
| Cd  | n=4       | 5–50       | 150       | medium | [[sources/delima2021-metals-canned-tuna-sardines-brazil\|3]], [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|4]] |
| iAs | n=1       | 1–20       | —         | low    | [[sources/ulusoy2023-canned-tuna-toxic-metals\|6]] |
| tAs | n=3       | 500–5,000  | 10,000    | medium | [[sources/delima2021-metals-canned-tuna-sardines-brazil\|3]], [[sources/ulusoy2023-canned-tuna-toxic-metals\|6]] |
| tHg | n=5       | 100–500    | 1,500     | high   | [[sources/shim2004-mercury-fatty-acids-canned-tuna-salmon-mackerel\|5]], [[sources/aguilar-miranda2024-thg-canned-tuna-ecuador\|1]], [[sources/ulusoy2023-canned-tuna-toxic-metals\|6]] |
| Ni  | n=2       | 50–500     | —         | low    | [[sources/delima2021-metals-canned-tuna-sardines-brazil\|3]] |
| Al  | n=2       | 100–2,000  | —         | low    | [[sources/delima2021-metals-canned-tuna-sardines-brazil\|3]], [[sources/ali2025-carbon-dots-aluminum-cobalt-canned-food\|2]] |
| Cr  | n=3       | 10–200     | —         | low    | [[sources/delima2021-metals-canned-tuna-sardines-brazil\|3]], [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|4]] |
| Sn  | n=1       | 0–500      | —         | low    | [[sources/ali2025-carbon-dots-aluminum-cobalt-canned-food\|2]] |
| U   | data gap  | —          | —         | —      | — |

## Ranges by source, region, and variety

The Ulusoy 2023 multinational dataset is the largest single-study cross-jurisdiction comparison at n=222 samples from 36 countries (US, EU member states, Canada, Australia, Japan, Saudi Arabia, North African, Latin American, and Caucasus jurisdictions) ([[sources/ulusoy2023-canned-tuna-toxic-metals]]). The Shim 2004 US-market work (n=272 across canned tuna, salmon, and mackerel) is the largest single-jurisdiction tuna-mercury dataset in the loaded corpus and establishes the species-specific pattern at scale ([[sources/shim2004-mercury-fatty-acids-canned-tuna-salmon-mackerel]]). The Ecuadorian Aguilar-Miranda 2024 work (n=60 canned tuna in water) characterises the Quito retail-market mercury distribution and identifies meaningful per-can variance suggesting species or origin variability within commercial product ([[sources/aguilar-miranda2024-thg-canned-tuna-ecuador]]). The Mexican Rodriguez-Mendivil 2019 Tijuana work (n=68) provides the Mexican border-market context ([[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana]]). The Brazilian DeLima 2021 dataset (n=20) provides the multi-metal panel including the rarely-measured Al specifically ([[sources/delima2021-metals-canned-tuna-sardines-brazil]]). Species-level pattern: skipjack ("light tuna") consistently sits at the lower end of the mercury distribution (typical 100-200 ppb tHg); albacore ("white tuna") sits at 300-500 ppb tHg with worst-case-tail above 1,000 ppb; yellowfin and bigeye sit at or above the albacore level. Pacific-origin product can carry slightly higher Hg than Atlantic-origin in some studies. Tuna packed in water versus oil does not produce different per-fish-meat metal loads but does affect serving-size considerations.

## Processing effects

The processing chain from caught fish to retail canned product (heading, gutting, pre-cooking, can-filling, retort-sterilising, sealing) does not change the per-mass mercury or arsenic content of the fish meat itself. The canning step does introduce Pb, Sn, and Al through can-interior contact during the multi-year shelf life; the magnitude of can-derived contributions depends on the interior coating, the pH of the canning medium (water-packed versus oil-packed), and the storage temperature. Pre-cooking and steam-blanching before canning do not affect metal load on a per-mass basis. The product as consumed includes drained meat plus residual liquid; analytical work typically reports concentrations in drained tuna meat, which is the relevant exposure metric for consumer estimation.

## Ingredient-derivative risk

Canned skipjack tuna (light tuna) in water packed in modern fully-welded steel cans with food-grade interior coatings represents the lowest-mercury commercial form. Canned albacore tuna (white tuna) carries 2-4× the methylmercury of skipjack at the same serving size. Canned yellowfin and bigeye carry the highest mercury among commonly canned species. Tuna pouches (used by some brands as alternative to cans) carry the same fish-meat mercury load with negligible packaging-source metal contribution. Tuna salads, tuna casseroles, and prepared tuna dishes inherit the canned tuna's mercury load at the inclusion ratio. Pet-grade tuna (used in cat foods) inherits the same fish-meat profile; this is out of scope for the human-food page but relevant context.

## Mitigation options

### Sourcing levers

Species selection is the single highest-impact lever. Source skipjack ("light tuna") over albacore ("white tuna") for the lowest-mercury commercial form. Specify supplier transparency on species (some brands blend skipjack and albacore; transparency on the blend ratio enables more accurate per-serving mercury estimation). For premium positioning, smaller-fish species (mackerel, sardines, anchovies) consistently sit at lower mercury than even skipjack tuna.

### Agronomic levers

Not applicable to wild-caught seafood. Marine biogeochemistry drives the upstream mercury distribution and is not directly intervenable at the brand level.

### Processing levers

For canners, modern fully-welded steel cans with food-grade interior coatings eliminate the historical lead-soldered-can Pb pathway. Tuna pouches eliminate the can-leaching pathway entirely. Water-packed versus oil-packed does not meaningfully shift the mercury profile.

### Formulation levers

For finished products using tuna as an ingredient (tuna salads, ready-meals, casseroles, dips), the inclusion ratio caps per-serving mercury exposure. Substitution with lower-mercury seafood (canned salmon, canned mackerel, canned sardines) shifts the mercury profile significantly lower.

### Testing and QC levers

Lot-level ICP-MS testing for Hg (detection floor ≤ 50 ppb), Pb (≤ 5 ppb), and Cd (≤ 1 ppb) is the standard intervention. For mercury, the regulatory-grade testing should include methylmercury speciation by HPLC-ICP-MS for the most accurate exposure assessment, though total Hg is often used as a proxy.

### Packaging and storage levers

Pouches eliminate the can-leaching pathway. Modern fully-welded steel cans with food-grade interior coatings are acceptable. Lead-soldered cans (historical) are the primary packaging risk. Storage temperature and shelf life do not affect mercury content but can affect can-derived metals over multi-year storage.

## Regulatory limits that apply

The Codex Alimentarius General Standard CXS 193-1995 sets a methylmercury maximum of 1.2 mg/kg fresh weight for predatory fish including tuna, with the implicit application to canned tuna meat as consumed. The EU Regulation 2023/915 sets a tuna-specific mercury maximum of 1.0 mg/kg fresh weight for tuna and 0.30 mg/kg fresh weight for other fish; this is the EU's tightest fish-mercury cap that explicitly addresses tuna. The FDA Action Level for methylmercury in seafood is 1.0 mg/kg, applied to commercial product. The FDA "Net Effects" Tool and consumer-advice frameworks recommend limiting canned albacore to 1 serving (6 oz) per week for pregnant and nursing women, and canned light tuna to 2-3 servings per week; the underlying mercury data align with the Shim 2004 distribution and the broader literature. The Ulusoy 2023 cross-jurisdiction work found commercial canned tuna generally compliant with the 1.0 mg/kg fresh-weight regulatory limit but with substantial within-product variance ([[sources/ulusoy2023-canned-tuna-toxic-metals]]).

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/aguilar-miranda2024-thg-canned-tuna-ecuador\|Aguilar-Miranda et al. 2024]]. *Total mercury exposure through canned tuna in water sold in Quito, Ecuador*, Scientific Reports | 2024 | Peer-reviewed | Ecuadorian Quito retail canned-tuna-in-water mercury distribution (n=60) |
| 2 | [[sources/delima2021-metals-canned-tuna-sardines-brazil\|de et al. 2021]]. *Data on metals, nonmetal, and metalloid in the samples of the canned tuna and canned sardines sold in Brazil*, Data in Brief | 2021 | Peer-reviewed | Brazilian canned-tuna-and-sardines 6-metal panel including rarely-measured Al (n=20) |
| 3 | [[sources/rodriguez-mendivil2019-heavy-metals-canned-tuna-tijuana\|Rodriguez-Mendivil et al. 2019]]. *Health Risk Assessment of Some Heavy Metals from Canned Tuna and Fish in Tijuana, Mexico*, Health Scope | 2019 | Peer-reviewed | Mexican Tijuana retail canned-tuna 4-metal panel with health-risk assessment (n=68) |
| 4 | [[sources/shim2004-mercury-fatty-acids-canned-tuna-salmon-mackerel\|Shim et al. 2004]]. *Mercury and Fatty Acids in Canned Tuna, Salmon, and Mackerel*, Journal of Food Science | 2004 | Peer-reviewed | US-market canned-tuna-salmon-mackerel mercury distribution (n=272); largest US-jurisdiction tuna-mercury dataset |
<!-- END: hmi-source-legend -->
