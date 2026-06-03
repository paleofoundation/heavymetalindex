---
type: source
raw_handle: MFK_pub1-eng
cite_key: health-canada2021-aluminum-drinking-water-guideline
title: "Guidelines for Canadian Drinking Water Quality: Guideline Technical Document - Aluminum"
authors: ["Health Canada", "Federal-Provincial-Territorial Committee on Drinking Water"]
year: 2021
publication: "Health Canada, Water and Air Quality Bureau, Healthy Environments and Consumer Safety Branch, March 2021"
source_type: gov-report
evidence_tier: A
raw_path: "raw/Manual Fetch Kimi /June 3 Folder/pub1-eng.pdf"
raw_sha256: dc9e5927524573763b69ddd2b7360564cf363b4a7439449ccf8a108885bd0c53
doi: null
no_doi_assigned: true
access_url: "https://www.canada.ca/en/health-canada/services/environmental-workplace-health/reports-publications/water-quality.html"
license: crown-copyright-open-government
metals: [Al, tAs, Cr, Mn, Ni, Pb, Cu]
ingredients: ["[[ingredients/water]]"]
products: ["[[products/water-filters]]"]
matrices: [drinking-water, tap-water, source-water, treated-water, distribution-system, groundwater, surface-water, premise-plumbing, water-treatment-chemicals, activated-alumina-treatment, residential-treatment-devices]
jurisdictions: [CA]
near_duplicates: []
sample_n: null
sample_population: "Health Canada guideline technical document for aluminum in Canadian drinking water, including Canadian occurrence monitoring, exposure, analytical methods, treatment-chemical and activated-alumina evidence, distribution-system behavior, and toxicology derivation; not a new primary sampling study."
updated: 2026-06-03
---

# Health Canada 2021 - Aluminum drinking water guideline

Health Canada's 2021 guideline technical document sets a maximum acceptable concentration (MAC) of 2.9 mg/L, or 2,900 ug/L, for total aluminum in Canadian drinking water, calculated as a locational running annual average from at least quarterly distribution-system samples. It also sets an operational guidance (OG) value of 0.100 mg/L, or 100 ug/L, because aluminum residuals can accumulate in distribution systems, interfere with corrosion control, trap or release co-occurring metals, and create turbidity, discoloration, pressure, and meter problems even below the health-based MAC. The document is valuable for the wiki because it connects Canadian occurrence data, food/water exposure shares, analytical method limits, coagulation control, activated-alumina treatment residuals, treatment-chemical impurities, and lead/copper/arsenic/chromium/manganese/nickel co-contaminant behavior in one auditable regulatory source.

## Key numbers

Guideline and toxicology derivation:

| Parameter | Value | Notes |
| --- | ---: | --- |
| Canadian drinking-water MAC for total aluminum | 2.9 mg/L | Equivalent to 2,900 ug/L |
| MAC sampling basis | Locational running annual average | Minimum quarterly samples in the distribution system |
| Operational guidance value | 0.100 mg/L | Equivalent to 100 ug/L; intended to optimize treatment and distribution management |
| AWWA target cited for treated/distributed water | 0.050 mg/L | Recommended to reduce accumulation/release, orthophosphate interference, and aesthetic issues |
| Critical study | Poirier et al. 2011 | Aluminum citrate developmental neurotoxicity study in rats |
| Doses in key study | 30, 100, and 300 mg Al/kg bw/day | Exposure in utero, through lactation, and then in drinking water post-weaning |
| Point of departure | NOAEL 30 mg Al/kg bw/day | Based on neuromuscular effects and other observations |
| Uncertainty factor | 100 | 10x interspecies and 10x intraspecies |
| Tolerable daily intake | 0.30 mg/kg bw/day | 30 mg/kg bw/day divided by 100 |
| Drinking-water allocation | 20% | Floor value because food is the dominant source and drinking water is a small contributor |
| Adult body weight | 74 kg | Canadian adult assumption |
| Adult drinking-water intake | 1.53 L/day | Canadian adult assumption |
| Health-based value calculation | 0.30 mg/kg-day x 74 kg x 0.20 / 1.53 L/day | Rounds to 2.9 mg/L |

International comparator values cited by Health Canada:

| Jurisdiction / agency | Drinking-water aluminum value |
| --- | ---: |
| Health Canada MAC | 2.9 mg/L |
| Health Canada operational guidance | 0.100 mg/L |
| WHO non-regulatory health-based value | 0.9 mg/L |
| WHO practicable level | 0.1-0.2 mg/L |
| Other agencies' aesthetic/operational guidance range | 0.05-0.2 mg/L |
| U.S. EPA, European Union, and Australia | No health-based regulatory limit cited |

Canadian exposure estimates:

| Age group | Drinking water | Food and beverages | Soil | Total mean daily intake | Notes |
| --- | ---: | ---: | ---: | ---: | --- |
| Infant, breastfed exclusively | 0 ug/kg bw/day | 12.2 ug/kg bw/day | 166 ug/kg bw/day | 179 ug/kg bw/day | Direct drinking-water intake only; breast-milk transfer not included |
| Infant, non-breastfed | 11.84 ug/kg bw/day | 85.0 ug/kg bw/day | 166 ug/kg bw/day | 268 ug/kg bw/day | Drinking-water concentration assumed 111 ug/L |
| Toddler, 0.5-4 years | 5.01 ug/kg bw/day | 268 ug/kg bw/day | 268 ug/kg bw/day | 544 ug/kg bw/day | Ambient and indoor air are minor contributors |
| Child, 5-11 years | 3.94 ug/kg bw/day | 341 ug/kg bw/day | 87 ug/kg bw/day | 434 ug/kg bw/day | Food is the main source |
| Teen, 12-19 years | 2.24 ug/kg bw/day | 270 ug/kg bw/day | 21 ug/kg bw/day | 295 ug/kg bw/day | Food is the main source |
| Adult, 20-59 years | 2.35 ug/kg bw/day | 143 ug/kg bw/day | 18 ug/kg bw/day | 165 ug/kg bw/day | Food is the main source |
| Senior, >60 years | 2.47 ug/kg bw/day | 113 ug/kg bw/day | 17 ug/kg bw/day | 134 ug/kg bw/day | Food is the main source |
| Drinking-water share of total intake | 0%-4.4% | - | - | - | 0.8%-1.8% for non-infant categories |

Selected Canadian occurrence values, total aluminum in water, 2012-2017:

| Dataset | Median | Mean | p90 | Max | Notes |
| --- | ---: | ---: | ---: | ---: | --- |
| Newfoundland surface-distribution | 0.070 mg/L | 0.129 mg/L | 0.280 mg/L | 6.660 mg/L | 2,820 detects / 3,178 samples |
| Nova Scotia surface-distribution | 0.025 mg/L | 0.078 mg/L | 0.110 mg/L | 5.700 mg/L | 197 detects / 204 samples |
| Ontario treated/distributed water | 0.023-0.024 mg/L | 0.042-0.047 mg/L | 0.096-0.109 mg/L | 1.340-1.500 mg/L | Ground and surface water not split |
| Manitoba surface-raw | 0.133 mg/L | 0.407 mg/L | 0.664 mg/L | 32.400 mg/L | 392 detects / 413 samples |
| Manitoba surface-treated | 0.035 mg/L | 0.169 mg/L | 0.330 mg/L | 7.970 mg/L | 396 detects / 443 samples |
| Manitoba surface-distribution | 0.022 mg/L | 0.150 mg/L | 0.284 mg/L | 3.900 mg/L | 71 detects / 72 samples |
| Alberta surface-raw | 0.180 mg/L | 0.626 mg/L | 1.732 mg/L | 6.200 mg/L | 147 detects / 148 samples |
| Alberta surface-treated | 0.059 mg/L | 0.072 mg/L | 0.130 mg/L | 0.301 mg/L | 278 detects / 286 samples |
| Alberta surface-distribution | 0.060 mg/L | 0.067 mg/L | 0.119 mg/L | 0.304 mg/L | 462 detects / 474 samples |
| British Columbia non-municipal, water type not specified | 0.020 mg/L | 0.059 mg/L | 0.050 mg/L | 3.000 mg/L | 313 detects / 352 samples |
| Canada weighted mean, surface-treated | - | 0.120 mg/L | - | - | Weighted mean across submitted provincial/territorial data |
| Canada weighted mean, surface-distribution | - | 0.111 mg/L | - | - | Exposure estimate uses this 111 ug/L value |

Analytical method and treatment values:

| Topic | Value | Notes |
| --- | ---: | --- |
| EPA 200.5 ICP-AES MDL | 2.2 ug/L | Axially viewed inductively coupled plasma atomic emission spectrometry |
| EPA 200.7 ICP-AES MDL | 20 ug/L | Total dissolved solids interference noted |
| EPA 200.8 ICP-MS MDL | 1-1.7 ug/L | Scanning to selected-ion monitoring mode |
| EPA 200.9 graphite-furnace AAS MDL | 7.8 ug/L | Chloride and palladium-matrix interferences noted |
| Standard Methods 3111D/3111E flame AAS MDL | 100 ug/L | 3111E applicable below 900 ug/L |
| Standard Methods 3113B electrothermal AAS MDL | 3 ug/L | Total aluminum method |
| Standard Methods 3120B ICP-AES MDL | 40 ug/L | Total dissolved solids interference noted |
| Standard Methods 3125 ICP-MS MDL | 0.03 ug/L | Total dissolved solids interference noted |
| Online/portable colorimetric analyzers | 5-1,500 ug/L measurement range; 1-10 ug/L detection limits | Typically dissolved aluminum unless digestion is included |
| Optimum alum coagulation pH | 6.5-7 in cold water; 6.0-6.5 in warm water | Cold water is less than 10 C |
| Optimum PACl coagulation pH | 6.8-7.3 in cold water; 6.3-6.8 in warm water | Pre-hydrolyzed coagulant |
| Soluble aluminum expected at pH of minimum alum solubility | 0.005-0.014 mg/L | Source-modelled equilibrium range |
| Soluble aluminum at pH 9.7 and 20 C | 27 mg/L | Demonstrates high-pH solubility risk |
| Aluminum-based coagulant use in Canada | 69.2% of surface waters; 6.7% of groundwater/GUDI | Statistics Canada 2013 |
| Filter-effluent turbidity goal for optimized coagulation | 0.1 NTU | Recommended to minimize residual aluminum |

Treatment-chemical and activated-alumina values:

| Matrix or treatment context | Aluminum finding | Notes |
| --- | ---: | --- |
| NSF-certified calcium hypochlorite chemicals | median 223 mg/kg; p95 437 mg/kg; max 485 mg/kg | 21 detects / 23 samples |
| NSF-certified calcium hydroxide chemicals | median 11 mg/kg; p95 33 mg/kg; max 93 mg/kg | 30 detects / 31 samples |
| NSF-certified sodium silicate chemicals | median 99 mg/kg; p95 392 mg/kg; max 550 mg/kg | 31 detects / 36 samples |
| Normalized calcium hydroxide contribution at maximum use level | median 8 ug/L; p95 21 ug/L; max 28 ug/L | Estimated, not measured in treated drinking water |
| Normalized sodium silicate contribution at maximum use level | median 3.9 ug/L; p95 15 ug/L; max 23 ug/L | Estimated, not measured in treated drinking water |
| Calcium hydroxide plus sodium silicate possible contribution | up to 51 ug/L | Estimated combined contribution |
| Full-scale activated alumina, ambient pH about 7.4-8.7 | average 0.032-0.040 mg/L; max 0.112-0.190 mg/L | Semi-public systems in Wang et al. 2000 |
| Full-scale activated alumina, near-neutral pH | average below 0.010 mg/L; max 0.018 mg/L | Small-community study in Valigore et al. 2007 |
| Activated alumina excursions after media regeneration/replacement | about 7.5 mg/L and 1-10 mg/L reported | Operational-event values; excluded from some study averages |

Distribution-system and monitoring values:

| Topic | Value | Notes |
| --- | ---: | --- |
| Aluminum in lead-pipe dissolution tests | 2-7 mg/L | Dissolved aluminum at pH 9-10 in cited batch tests |
| Pipe-loop total aluminum | 1,060-4,610 ug/L | Eight-month study using harvested lead service lines |
| Unidirectional flushing, pilot velocity 0.7 m/s | 0.423-5.85 mg/L | Total aluminum released |
| Unidirectional flushing, pilot velocity 1.3 m/s | 1.64-38.2 mg/L | Total aluminum released |
| Orthophosphate/lead interference range | 29-110 ug/L Al | Residual aluminum range in Wasserstrom et al. study |
| Onsite cement-lining bench specimen after 56 days | about 8 mg/L | Stagnation condition; compared with about 0.03 mg/L for prefabricated coating |
| Full-scale cement-mortar lining | 0.043 to 0.293 mg/L after 3 h, then 0.052 mg/L after 11 h | 500 mm steel pipe, 614.5 m length |
| Cement-mortar ductile iron pipe after six weeks | 650 ug/L | Reported after 2,200 m of pipe coating |
| Monitoring for aluminum-based coagulants | daily or more frequent total aluminum | Online or portable analyzer; QA/QC and lab verification recommended |
| Distribution monitoring for MAC | minimum quarterly locational running annual average | Free-flowing samples at critical distribution points |
| Distribution monitoring for OG, coagulant facilities | minimum monthly locational running annual average | Best approach for systems using aluminum-based coagulants |

## Methods (brief)

This is a Health Canada guideline technical document, not a single field survey. It compiles Canadian provincial and territorial drinking-water occurrence data, exposure estimates from food, water, soil, and air, analytical-method performance, coagulation and treatment-chemical evidence, activated-alumina treatment studies, distribution-system and premise-plumbing evidence, international comparators, and animal toxicology. Health Canada uses total aluminum as the comparison basis for the MAC and OG, including dissolved and particulate fractions.

The health-based value is derived from the Poirier et al. developmental neurotoxicity study using aluminum citrate in rats. Health Canada retains the study NOAEL rather than fitting a benchmark dose because the dose set and variable water-consumption-driven exposure were not considered suitable for modelling. The operational guidance value is not a second health-based limit; it is a process and distribution-system value meant to minimize residual aluminum entering the distribution system and reduce accumulation, co-contaminant release, corrosion-control interference, and aesthetic problems.

## Implications

Certification: This source is a Canadian drinking-water regulatory and treatment-context anchor for aluminum. The 2.9 mg/L MAC, 0.100 mg/L OG, and 0.050 mg/L AWWA target are useful comparators for water, water-as-input, and water-treatment contexts. The Canadian occurrence tables should remain jurisdiction- and matrix-specific; source, treated, distribution, non-municipal groundwater, and activated-alumina-treated water are not interchangeable benchmark pools.

Courses: The document is a strong example of why a high health-based MAC can coexist with a much lower operational target. It also teaches that coagulation under-dosing can both worsen pathogen removal and increase residual aluminum, so "less aluminum coagulant" is not automatically safer.

App: Use this source to explain that food is the main aluminum exposure source for most Canadians, while drinking water matters for treatment residuals, private wells, activated-alumina systems, and distribution-system events. App language should preserve the total-aluminum basis and avoid presenting the 0.100 mg/L OG as a toxicological threshold.

## Wiki pages this source may touch

- [[metals/aluminum]]
- [[metals/arsenic-total]]
- [[metals/chromium]]
- [[metals/manganese]]
- [[metals/nickel]]
- [[metals/lead]]
- [[metals/copper]]
- [[ingredients/water]]
- [[products/water-filters]]

## Verification notes

The PDF was read from the June 3 manual-fetch folder, including the guideline summary, exposure tables, Canadian occurrence Table 2, health-effect and key-study sections, HBV derivation, analytical-method Table 4, coagulation/treatment tables, treatment-chemical impurity tables, activated-alumina treatment section, distribution-system and monitoring sections, international considerations, and rationale. Page count is 72. No DOI is assigned. The canonical raw file `raw/Manual Fetch Kimi /June 3 Folder/pub1-eng.pdf` and duplicate file `raw/Manual Fetch Kimi /June 3 Folder/pub1-eng 2.pdf` are byte-identical with SHA-256 `dc9e5927524573763b69ddd2b7360564cf363b4a7439449ccf8a108885bd0c53`; the duplicate is recorded in the tracker as a duplicate rather than a second source.

Scope note: this guideline compiles drinking-water occurrence, treatment, and toxicology evidence. It is not a food-occurrence study, bottled-water market survey, or finished water-filter product survey. `[[products/water-filters]]` is included because the source discusses residential-scale treatment and activated-alumina media/system context; downstream routing should treat those values as treatment/context evidence, not as finished-product contamination values. The source text prints the WHO/JECFA provisional tolerable weekly intake comparator with "per day" units in the executive-summary discussion; because that appears inconsistent with PTWI convention, this page uses the Health Canada TDI/HBV derivation values as the controlling quantitative toxicology record.
