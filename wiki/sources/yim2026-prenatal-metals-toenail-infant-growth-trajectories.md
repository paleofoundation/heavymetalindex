---
type: source
raw_handle: PMC12930931
cite_key: yim2026-prenatal-metals-toenail-infant-growth-trajectories
title: "Prenatal exposure to essential and toxic elements in relation to infant growth trajectories"
authors: [Yim G, Heggeseth BC, Gilbert-Diamond D, Peacock JL, Margetaki K, Baker ER, Palys TJ, Jackson BP, Madan JC, Romano ME, Karagas MR, Howe CG]
year: 2026
publication: "Environmental Health 25: 17"
doi: 10.1186/s12940-025-01252-w
source_type: peer-reviewed
evidence_tier: A
license: "CC BY 4.0"
raw_path: "deposits/HMI-FILL-0052/10.1186_s12940-025-01252-w.pdf"
raw_sha256: 887ef4b5af955ebb927fb90015d8a5c9368b9c4a37935f898867f93605c47381
access_url: https://doi.org/10.1186/s12940-025-01252-w
metals: [tHg, Pb, Mn, Cd, tAs, iAs, Se, Cr, Co, Ni, Zn, Sb, Al, Mo, V]
ingredients: []
products: []
matrices: [biomonitoring-toenail]
jurisdictions: [US]
near_duplicates: []
sample_n: 783
sample_population: "783 mother-infant pairs from the New Hampshire Birth Cohort Study (NHBCS), a rural pregnancy cohort in northern New England where homes are served by private unregulated drinking water. Maternal toenail clippings collected approximately 3 weeks postpartum to reflect metal exposures during pregnancy. Infant weight and length measured from birth to 18 months."
wiki_doi: null
sampling_locations: ["New Hampshire US"]
sampling_year_range: null
updated: 2026-11-05
hero_image: /static/heroes/research-glassware-notebook-sampling-spoon.webp
hero_image_alt: "Unmarked glass laboratory vessels, a closed notebook, sampling spoon and empty specimen dish illustrating Yim and colleagues 2026 source research context."
---

# Yim et al. 2026 -- Prenatal mercury and lead exposure (toenail biomarker) associated with accelerated infant growth trajectories in male infants (New Hampshire Birth Cohort)

This study used maternal toenail clippings collected approximately 3 weeks postpartum as a biomarker of prenatal metal exposures in 783 mother-infant pairs from the New Hampshire Birth Cohort Study. Using Gaussian Growth Mixture Modeling, four weight-for-length growth trajectories were identified for male and female infants (Stable-slow, Late-moderate, Stable-moderate, Rapid). Among male infants, higher prenatal mercury (toenail tHg) and higher prenatal lead (toenail Pb) were each associated with increased likelihood of following a growth pattern that deviated from the reference (Stable-slow, most closely aligned with WHO infant growth curve). Male infants with the lowest manganese tertile were more likely to follow the Stable-moderate (above-reference) growth trajectory. No statistically significant associations were identified for female infants.

## Key numbers

- Toenail metals measured by ICP-MS (Trace Element Analysis Core Facility, Dartmouth, Agilent 7800): Al, Sb, tAs, iAs, Cd, Co, Cr, Ni, Se, Zn, Mn, Mo, V plus tHg and Pb. Elemental concentrations reported as natural log-transformed in modeling.
- Key finding (male infants; Gaussian Growth Mixture Model):
  - Higher maternal toenail tHg: increased likelihood of following growth patterns deviating from the Stable-slow (reference) trajectory toward Rapid or Late-moderate (accelerated growth).
  - Higher maternal toenail Pb: associated with higher likelihood of following growth pattern deviating from Stable-slow reference.
  - Lowest vs middle manganese tertile: male infants more likely to follow Stable-moderate rather than Stable-slow reference.
- No statistically significant associations for female infants.
- Relative risk ratios (RRR) estimated using GMM with 95% confidence intervals; RRR for each element estimated for doubling of element concentration (continuous metals) or for low versus middle tertile (Mn).
- Growth trajectory group sizes reported in Supplementary Tables S3 and S4; Stable-slow was selected as reference because it most closely matched WHO median growth standards.
- Sensitivity analyses adjusting for pre-pregnancy BMI, maternal seafood intake, breastfeeding duration, and residence in Chichigalpa (a CKDu-risk municipality) showed consistent results.
- Accelerated growth during infancy is noted as a risk factor for obesity later in life; the authors propose male infants exposed to higher Hg or Pb may be more susceptible to obesity.

## Methods (brief)

NHBCS prospective rural pregnancy cohort; homes served by private unregulated drinking water (a source of As, Mn). Toenail clippings collected approximately 3 weeks postpartum (reflecting pregnancy-window exposure). ICP-MS analyses at Dartmouth Trace Element Analysis Core Facility. Weight and length from medical records between birth and 18 months; knot points at 3.5 and 9 months for growth spline. Gaussian Growth Mixture Model (GMM) package gigs (R) applying WHO and INTERGROWTH-21st standards; four-trajectory model selected by BIC, high group membership probability (greater than 80% per trajectory), and class size greater than 5%. Covariates: maternal age, educational attainment (high school vs not), child sex, gestational age, parity, pre-pregnancy BMI, seafood intake, breastfeeding duration, urinary arsenic concentration as covariate for arsenobetaine confounding.

## Evidence fitness

This paper uses maternal toenails as a prenatal metal exposure biomarker (reflecting 6-12 months of exposure during pregnancy). It does not measure metals in food products. The study population lives in rural New Hampshire with private wells, a recognized exposure pathway for arsenic and manganese. The growth outcome (weight-for-length trajectory) is relevant to understanding postnatal consequences of prenatal metal exposure; findings for mercury and lead in male infants are consistent with existing literature on prenatal metal exposures and growth. The paper contributes to the wiki's coverage of prenatal metal exposure pathways and health effects of lead and mercury.

## Limitations

Toenails collected 3 weeks postpartum reflect a window ending approximately at delivery; early pregnancy exposures may not be fully captured if metal excretion patterns change across trimesters. The proportion of male infants in the smallest growth group (Stable-slow, 30.6%) was notably smaller than in other groups, warranting post hoc sex-specific sensitivity analysis. Arsenic measures include arsenobetaine (seafood-derived organic arsenic) which is not toxicologically active; the authors used urinary As as a covariate to adjust, but speciated dietary arsenic was not available for all participants. Breastfeeding duration was included as a covariate because it may be on the causal pathway between metal exposure and growth; this may underadjust for postnatal exposure.

## Related evidence

- [[health/biomonitoring]]
- [[health/prenatal-exposure]]
- [[metals/mercury-total]]
- [[metals/lead]]
- [[metals/manganese]]

<!-- BEGIN: hmi-page-history -->
## Update history

No substantive edit history is available in this build. The full commit record is available in [git](https://github.com/paleofoundation/heavymetalindex).
<!-- END: hmi-page-history -->
