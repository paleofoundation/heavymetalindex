---
type: batch-report
batch_id: seasonal-geographic-variance-ingest-2026-05-12
date: 2026-05-12
source_folder: raw/manual-fetch/seasonal-geographic-variance/
papers_in_scope: 95
source_pages_created: 78
source_pages_skipped: 7
source_pages_deduplicated: 3
cumulative_source_pages: 384
noindex: true
---

# Batch report: seasonal and geographic variance ingest — 2026-05-12

## Overview

Processed 95 PDFs from `raw/manual-fetch/seasonal-geographic-variance/` (59 in the main folder, 36 in the `auto-fetched/` subfolder). Six parallel agents handled non-overlapping file sets across batches A–F. Final result: 78 new source pages created, 7 skips (pre-existing or out-of-scope), 2 within-batch duplicates resolved post-completion.

The files are thematically dense: rice arsenic geographic and seasonal variance, cocoa cadmium by origin, tea metals by country, and supply-chain agronomic data (soil Cd drivers in cacao, fertilizer standards, processing contamination). This is the first large ingest specifically designed to populate the `geographic_breakdown` and `seasonal_variance` sub-fields added to the ingredient schema on 2026-05-12.

---

## Source pages created (78 total)

### Batch A — Government reports and broad surveys (12 pages)

| Cite-key | Year | Subject | Tier |
|---|---|---|---|
| `cfia2025-toxic-metals-selected-foods-2022-23` | 2025 | CFIA targeted survey of toxic metals in selected Canadian foods, 2022–23 | A |
| `fda2025-cp7304-019-toxic-elements-food-foodware` | 2025 | FDA CP 7304.019 — Toxic Elements in Food, Foodware and Radionuclides | A |
| `fsanz2019-25th-australian-total-diet-study` | 2019 | FSANZ 25th Australian Total Diet Study | A |
| `li2015-green-tea-jiangxi-al-heavy-metals` | 2015 | Al and heavy metals in Jiangxi green tea leaves and infusion | A |
| `hands2024-multiyear-dark-chocolate-cocoa-usa` | 2024 | Multi-year Pb/Cd in 72 US dark chocolate and cocoa products | A |
| `zhang2018-tea-puan-guizhou-heavy-metals` | 2018 | Heavy metals in Puan County, Guizhou tea; health risk assessment | A |
| `garciaporras2025-cadmium-cacao-farmland` | 2025 | Pathways and mitigation of Cd in cacao farmland | A |
| `fda2011-arsenic-apple-juice-2005-2011` | 2011 | FDA arsenic in apple juice 2005–2011 TEFP monitoring | A |
| `zavala2008-arsenic-speciation-usa-rice` | 2008 | iAs speciation in USA rice by ICP-MS; iAs/tAs ratios by state | A |
| `fda2016-arsenic-rice-risk-assessment` | 2016 | FDA Arsenic in Rice and Rice Products risk assessment report | A |
| `fda2016-arsenic-rice-cereal-analytic-results` | 2016 | FDA analytic results for iAs in infant/toddler rice cereals (2016 assignment) | A |
| `ccopi2026-heavy-metals-andean-crops-peru` | 2026 | Heavy metals in Andean crops, Peru: irrigated vs dry systems | A |

### Batch B — Cocoa, tuna, tea, and Peru mining (10 pages)

| Cite-key | Year | Subject | Tier |
|---|---|---|---|
| `cr-fsasc2014-arsenic-rice-grains` | 2014 | Consumer Reports 697-sample rice arsenic survey with full geographic stratification | A |
| `meter2019-cadmium-cacao-lac-review` | 2019 | Bioversity/CAF review; 21-study Annex on cacao Cd Africa vs LAC — strongest geographic variance source for cocoa | A |
| `liu2023-beibu-gulf-ptes-seawater` | 2023 | PTEs in Beibu Gulf seawater/sediment — matrix is marine water, not food (**scope note: routing target should be supply-chain only**) | A |
| `salmani2023-herbal-teas-metals-review` | 2023 | Systematic review, 49 studies 2012–2023; Cd elevated in black tea and chamomile | B |
| `romero-estevez2019-ecuador-cocoa-cd-ni-pb` | 2019 | Ecuadorian cocoa 9 provinces; Cd mean 0.753 mg/kg; 33.3% exceed EU 0.8 mg/kg | A |
| `hu2023-china-tea-heavy-metals` | 2023 | CC-BY meta-analysis 227 papers; national Chinese tea averages for As/Cd/Cr/Cu/Hg/Pb | A |
| `bedoya-perales2023-moquegua-peru-mining-dataset` | 2023 | Scientific Data CC-BY; 13,828 observations from Peruvian mining-region food crops | A |
| `li2013-tea-chemical-contaminants-review` | 2013 | Tea chemical contaminants review — primarily pesticide/mycotoxin methods; limited metals concentration data | B |
| `rosales-huamani2023-quinoa-peru-ptes` | 2023 | Quinoa soils, Huánuco Peru; **soil concentrations only, not grain**; 100% Cd exceedance of Peruvian soil standards | B |
| `ulusoy2023-canned-tuna-toxic-metals` | 2023 | 222 canned tuna, 36 countries; Cd/Pb within limits; Hg THQ concern at >1×/week; **uses 3% iAs/tAs assumption — not speciating** | A |

### Batch C — EFSA, FDA, rice arsenic geography (9 pages; 1 skip)

| Cite-key | Year | Subject | Tier |
|---|---|---|---|
| `cantoral2024-cadmium-foodstuffs-mexico` | 2024 | n=143 Mexican foodstuffs; cocoa powder 0.289 mg/kg Cd; school children exceed TWI 53% | A |
| `fechner2019-cocoa-origin-al-cd-exposure` | 2019 | BfR; Al and Cd in cocoa powder by origin; P95×P95 dietary exposure assessment; n=12,482 | A |
| `carey2018-rice-dilution-infant-food-eu-arsenic` | 2018 | UK n=106 infant rice foods; multi-grain dilution drops iAs from median 66 to 10 µg/kg | A |
| `efsa2021-chronic-exposure-iAs` | 2021 | EFSA; 23 EU countries 2013–2018; mean LB toddler exposure 0.30 µg/kg bw/day; rice primary contributor | A |
| `efsa2024-risk-assessment-iAs-update` | 2024 | EFSA; new RP BMDL₀₅ = 0.06 µg iAs/kg bw/day; **all adult MOEs <1** — current limits may be insufficient | A |
| `pompa2021-durum-wheat-cd-pb-hg-italy` | 2021 | n=346 imported durum wheat 2015–2020; Cd mean 0.032 mg/kg; temporal and origin variance | A |
| `zergui2023-coffee-metals-origin-icp-ms` | 2023 | n=44 Algeria coffee; **anomalous Cd mean 9.92 mg/kg** (10× literature) — B-tier, do not use as primary data | B |
| `fda2018-iAs-infant-rice-cereals-fy2018` | 2018 | FDA FY2018; n=149 infant rice cereals; mean 85 ppb; all 149/149 below 100 ppb proposed action level | A |
| `meharg2009-geographic-variation-arsenic-white-rice` | 2009 | n=901 white rice, 10 countries; 30-fold cancer risk range; iAs/tAs slopes by country | A |
| `signes-pastor2016-iAs-rice-iberian-peninsula` | 2016 | n=164, 8 Iberian paddy regions; ~26% exceeded EU infant ML; Extremadura/Portugal highest | A |

Skipped: `EFSA Journal - 2010 - Scientific Opinion on Lead in Food.pdf` — `efsa-lead-contam-2010.md` already exists.

### Batch D — Rice arsenic geography, cacao Peru, tea, FDA 2023 guidance (11 pages)

| Cite-key | Year | Subject | Tier |
|---|---|---|---|
| `carey2020-global-low-ias-rice-sourcing` | 2020 | n=1,180 polished white rice, 29 regions/6 continents; South American rice universally high (Paraguay median 198 µg/kg); East Africa/Bali <20 µg/kg — strongest global geographic variance paper for rice iAs | A |
| `arevalo-gardini2017-peru-cacao-regional-metals` | 2017 | n=70 Peruvian cacao plantations, 8 regions; >57% bean samples exceed EU Cd 0.8 mg/kg; Tumbes/Amazonas/Piura worst, Cuzco cleanest | A |
| `roman-ochoa2021-arequipa-grains-health-risk` | 2021 | Arequipa grains; **processed rice Pb spikes to mean 5.08 mg/kg** (25× raw grain) — equipment/processing contamination signal | A |
| `wang2023-china-grain-soil-bioaccessibility` | 2023 | 509-site Chinese grain-province soil meta-analysis; Cd mean 0.47 mg/kg; **soil-only, no grain concentrations** | A |
| `fda2023-ias-apple-juice-guidance` | 2023 | FDA June 2023 final guidance; action level **10 ppb iAs** for apple juice/cider | A |
| `vega-jara2025-cocoa-cd-mitigation-amf-biochar` | 2025 | AMF alone −40% bean Cd; **biochar not significant** — contradicts extension literature | B |
| `williams2007-rice-arsenic-us-market-basket` | 2007 | n=134 US retail rice; South Central mean 0.30 µg/g vs California 0.17 µg/g (−41%); cotton-soil pesticide legacy | A |
| `yaqub2018-tea-metals-pesticides-pakistan` | 2018 | Pakistan tea; **Pb/Cd/As not measured** — zero weight for HMT&C priority analytes | B |
| `brzezicha-cirocka2016-green-tea-geographic-origins` | 2016 | 41 green teas; Cd leaching: India 44% vs China 9%; chemometrics discriminates origin | A |
| `li2021-china-national-tea-reconnaissance` | 2021 | n=225 samples, 15 Chinese provinces; 26.7% mature leaf exceed organic tea Pb threshold; young leaves compliant | A |
| `fan2025-hangzhou-green-tea-metals` | 2025 | n=120 Hangzhou green tea by ICP-MS; all below Chinese limits; Mn dominates HI | A |

### Batch E — Peru cacao soil, rice supply-chain, iAs methods review (9 pages)

| Cite-key | Year | Subject | Tier |
|---|---|---|---|
| `fu2022-sunflower-cd-cultivar-transcriptomics` | 2022 | Sunflower Cd accumulation: cultivar comparison + transcriptomic mechanism | A |
| `hao2022-probabilistic-risk-rice-mining-county` | 2022 | Probabilistic risk assessment for iAs and heavy metals in rice from a mining county | A |
| `xie2023-sb-smelter-soil-hunan` | 2023 | Hunan smelter-area soils; As/Sb/Cd supply-chain context for China-origin ingredients | A |
| `scaccabarozzi2020-cacao-soil-cd-peru` | 2020 | Soil and management factors affecting Cd in Peru cacao-growing soils | A |
| `wang2023-hangzhou-industrial-soil` | 2023 | Hangzhou industrial soil metals distribution — supply-chain context | A |
| `canada-t4-93-fertilizer-heavy-metal-standards` | 2024 | Canadian CFIA fertilizer heavy metal safety standards T-4-93 (**year uncertain; 2024 per page header — Karen to verify**) | A |
| `thomas2023-peru-cacao-cd-distribution` | 2023 | National Peru cacao Cd predictive map; n=2,194 samples, 563 farms; Piura 89% above EU threshold; dry-season Cd spike in Las Lomas irrigation water | A |
| `fda2013-ias-rice-products-sampling` | 2013 | FDA September 2013 iAs in rice and rice products sampling | A |
| `llorente-mirandes2016-ias-food-analytical-review` | 2016 | Review of analytical proposals for iAs in food; EU MLs in Table 1 are 2015-era — superseded by EU 2023/915 | A |

### Batch F — Auto-fetched wishlist papers (19 pages; 6 out-of-scope, 11 duplicate DOIs skipped)

| Cite-key | Year | Subject | Tier |
|---|---|---|---|
| `muehe2019-rice-climate-arsenic` | 2019 | iAs in California rice doubles under +5°C climate warming — within-region temporal variance finding | A |
| `liu2020-rice-gwas-ionomics` | 2020 | GWAS of Cd/As/Ni/Mn in 191 USDA rice accessions; TdHMA3-B1 discussion | A |
| `iqbal2015-rice-lead-salt-soil` | 2015 | Pb in Pakistani rice under spiked-soil conditions; B-tier | B |
| `carey2015-rice-arsenic-percolating-cooking` | 2015 | Percolating cooking reduces iAs 50–85%; n=41 rice samples | A |
| `signes-pastor2017-infant-arsenic-rice-weaning` | 2017 | iAs exceeds EU limits in rice-based infant products; 79-infant Spanish cohort | A |
| `meyer2018-hydrolysed-rice-formula-arsenic` | 2018 | iAs 10–34 µg/L as-prepared in hydrolysed rice formula — 2–7× higher than dairy-based formula; no EU cap at time of publication | A |
| `barraza2019-ecuador-cacao-cadmium-isotope` | 2019 | Cd isotope fractionation in Ecuador soil-cacao system; 3 farms | A |
| `sounigo2023-climaloca-cocoa-cadmium` | 2023 | ClimaLOCA low-Cd cacao germplasm trial; Colombia/Ecuador/Peru | B |
| `ametepey2018-ghana-vegetables-heavy-metals` | 2018 | Cd/Pb/Cr in 5 vegetables from Tamale, Ghana | A |
| `tonska2020-carrots-lead-cadmium-organic` | 2020 | Pb/Cd in conventional vs organic carrots, n=36, Poland | A |
| `rusin2021-vegetables-fruits-cadmium-lead-poland` | 2021 | Cd/Pb in 370 fresh/frozen/dried/processed fruits and vegetables, Poland | A |
| `romero-crespo2023-ecuador-mining-crops-metals` | 2023 | As/Cd/Pb/Cr in crops from Ecuador mining area | A |
| `el-batal2023-carrot-wastewater-selenium-nanoparticles` | 2023 | Ni/Cd/Pb/Co in Egyptian carrots irrigated with wastewater | A |
| `maccaferri2019-durum-wheat-genome-cadmium` | 2019 | Nature Genetics; TdHMA3-B1 gene controls grain Cd in durum wheat; explains 80–90% of variance | A |
| `gul2024-quinoa-cadmium-lead-stress` | 2024 | Cd/Pb phytotoxicity and accumulation in quinoa; B-tier | B |
| `kazeminia2023-tea-heavy-metals-review` | 2023 | Systematic review 157 articles on heavy metals in tea | B |
| `fan2025-green-tea-hangzhou-metals` | 2025 | **DUPLICATE** — same paper as `fan2025-hangzhou-green-tea-metals`; **deleted** |  |
| `ramtahal2016-cacao-cadmium-trinidad` | 2016 | Cd in cacao nibs 0.35–3.82 µg/g across 45 plantations in Trinidad | A |

Batch F skips:
- 11 duplicate DOI files (same content as another file in the batch)
- 6 out-of-scope: wl-0011_2019_jsbbs (cacao genetics, no concentration data), wl-0011_2024 (cocoa production review, no data), wl-0013_2018 (sunflower soilborne pathogens, no metals), wl-0022_2020 (micronutrient fertilization, not contamination), wl-0032_2017 (Al physiology in acid soils, no food data), wl-0040_2022 (aquatic life criteria for Cd, not food)

---

## Pre-session skips (7 files)

| File | Reason |
|---|---|
| `Cadmium and Lead in Cocoa Powder and Chocolate Products in the U.S. Market.pdf` | `abt2018-cadmium-lead-cocoa-chocolate-us-market.md` already exists |
| `Perspective on Cadmium and Lead in Cocoa and Chocolate.pdf` | `abt2020-perspective-cadmium-lead-cocoa-chocolate.md` already exists |
| `EFSA Journal - 2010 - Scientific Opinion on Lead in Food.pdf` | `efsa-lead-contam-2010.md` already exists |
| `Arsenic, Organic Foods, and Brown Rice Syrup.pdf` | `jackson2012-arsenic-organic-foods-brown-rice-syrup.md` already exists |
| `Comparison-of-Essential-and-Toxic-Metals-Levels-in-some-Herbal-Teas-a-Systematic-Review (1).pdf` | Filename-space duplicate of the non-(1) version |
| `FiscalYear2018_ArsenicInInfantRiceCerealsAssignmentData (1).pdf` | Filename-space duplicate of the non-(1) version |
| `Can nitrifiers from the sidestream deammonification process be a remedy for the N-overload of the mainstream reactor?.pdf` | Out of scope — wastewater treatment, no food metal content |

---

## Post-completion deduplication (2 pairs resolved)

**carey2019 / carey2020:** Both agents independently processed the same paper (DOI 10.1007/s12403-019-00330-y, SHA256 identical). `carey2019-global-rice-arsenic-sourcing` deleted. `carey2020-global-low-ias-rice-sourcing` retained as canonical with `near_duplicates` updated.

**fan2025 pair:** `fan2025-green-tea-hangzhou-metals` (Batch F, 61 lines) deleted. `fan2025-hangzhou-green-tea-metals` (Batch D, 68 lines, more complete metals list) retained as canonical.

---

## New-page proposals (routing will surface unresolved targets; Karen to approve)

These ingredient and product slugs appear in frontmatter but do not yet have wiki pages. Thresholds for creation: 5+ papers for ingredients, 3+ for products (CLAUDE.md Part 10).

| Proposed page | Contributing papers | Priority |
|---|---|---|
| `ingredients/sunflower-seed` | fu2022, iqbal2015 (sunflower Cd) | Medium — Batch F wishlist explicitly targeted this |
| `ingredients/carrots` | tonska2020, el-batal2023, rusin2021 (carrot Cd/Pb) | Medium — 3 papers, approaching threshold |
| `ingredients/quinoa` | rosales-huamani2023, gul2024, bedoya-perales2023 (quinoa Cd/Pb) | Medium — 3 papers, approaching threshold |
| `ingredients/coffee` | zergui2023 (coffee metals, but B-tier anomalous) | Low — 1 paper with quality concerns |
| `supply-chain/fertilizer-standards` | canada-t4-93 | Low — 1 document; add section to existing supply-chain page |

---

## Contradictions and notable flags

1. **efsa2024 vs current regulatory framing:** EFSA 2024 iAs update establishes all adult MOEs <1 at current EU dietary exposures. This is the strongest available statement that current EU rice MLs (now 0.15 mg/kg under 2023/915) may be insufficient even after tightening. Synthesis pass on `[[ingredients/rice]]` iAs sub-block should pick this up as a contradiction trigger.

2. **vega-jara2025 biochar null result:** Biochar had no significant effect on cacao bean Cd in this Huánuco field trial. Widely recommended in extension literature. Flag for the cacao mitigation section — the effect may be soil-pH dependent.

3. **roman-ochoa2021 processing Pb spike:** Processed rice mean Pb 5.08 mg/kg in Arequipa — 25× raw grain. Equipment contamination during processing, not a soil uptake signal. This is a product-layer concern, not an ingredient-level one.

4. **zergui2023 anomalous coffee Cd:** Mean 9.92 mg/kg is 10× the peer-reviewed literature range for coffee. B-tier; not suitable as primary data for `[[ingredients/coffee]]` contamination profile.

5. **meyer2018 hydrolysed rice formula gap:** HRF carries 2–7× higher iAs than dairy-based formula with no EU regulatory cap at the time of this paper. The regulatory gap is partially addressed by subsequent EU guidance on rice-based infant foods, but the HRF-specific exemption is worth tracking.

6. **maccaferri2019 durum wheat genetic driver:** TdHMA3-B1 explains 80–90% of grain Cd variance in durum wheat. All modern commercial durum varieties carry the non-functional allele (high-Cd phenotype). This is why pasta/semolina systematically carries higher Cd than bread wheat from the same field — mechanistic underpinning for the `[[ingredients/wheat]]` Cd profile.

7. **muehe2019 climate-arsenic interaction:** California rice iAs doubles under +5°C warming (RCP 8.5 scenario). California rice is currently recommended as a lower-iAs option in US sourcing guidance. This finding suggests the advantage is not climate-stable — relevant for long-horizon HMT&C sourcing criteria.

8. **liu2023-beibu-gulf scope:** Marine seawater/sediment matrix; health risk framed as dermal contact, not dietary ingestion. Routing should target `supply-chain/marine-environment-quality` only — not `[[ingredients/fish]]` or any food ingredient page.

9. **canada-t4-93 year uncertainty:** Document header suggests 2024 but canonical CFIA revision date is unverified. Karen to confirm before citing in certification context.

10. **thomas2023 Peru cacao map:** National-scale predictive Cd map with n=2,194, 563 farms. Piura up to 89% above EU threshold; dry-season Cd spike in Las Lomas irrigation water. Strongest single source for Peru cocoa geographic variance. Companion to scaccabarozzi2020 (soil factor analysis).

---

## Cumulative totals

- Source pages before this batch: ~306
- New source pages created this batch: 78
- Duplicates deleted post-completion: 2
- Cumulative source pages: 384
