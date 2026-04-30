---
type: regulation
rule_id: atsdr-cadmium-mrls
jurisdiction: US
agency: ATSDR
program: Toxicological Profile series
metal: Cd
matrix: inhalation-and-oral
limit_value: 0.1
limit_unit: µg/kg-bw/day
status: in-force
effective_date: 2012-09-01
sunset_date: null
source_refs: ["[[sources/atsdr-cadmium-toxprofile-2012]]"]
title: "ATSDR — Minimal Risk Levels for Cadmium"
updated: 2026-04-24
audience: [regulator, educator]
---

# ATSDR — Minimal Risk Levels for Cadmium

The US Agency for Toxic Substances and Disease Registry has derived four minimal risk levels for cadmium in its September 2012 Toxicological Profile, covering inhalation and oral routes across acute and chronic durations ([[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]]). The chronic-duration oral MRL of 0.1 µg Cd/kg/day is the value most directly comparable to the EFSA TWI, the JECFA PTMI, and the EPA IRIS oral reference dose; it is the tightest of the internationally-circulating dietary cadmium reference values when all are expressed on a daily per-body-weight basis ([[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]]). ATSDR MRLs are used in US public health assessments at hazardous waste sites under CERCLA Section 104(i) and in community exposure investigations; they are not enforceable standards but are routinely referenced by state agencies and in litigation ([[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]]).

## Minimal Risk Levels

MRL values from [[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]]:

| Route | Duration | MRL | Equivalent |
| --- | --- | --- | --- |
| Inhalation | Acute (≤14 days) | 3 × 10⁻⁵ mg Cd/m³ | 0.03 µg Cd/m³ |
| Inhalation | Intermediate (15–364 days) | Not derived | ATSDR states the value would be lower than the chronic MRL and therefore not protective to cite separately |
| Inhalation | Chronic (≥1 year) | 1 × 10⁻⁵ mg Cd/m³ | 0.01 µg Cd/m³ |
| Oral | Acute (≤14 days) | Not derived | Uncertainty associated with the most sensitive endpoint (developmental effects at low dose) |
| Oral | Intermediate (15–364 days) | 5 × 10⁻⁴ mg/kg/day | 0.5 µg Cd/kg/day |
| Oral | Chronic (≥1 year) | 1 × 10⁻⁴ mg/kg/day | 0.1 µg Cd/kg/day |

## Chronic oral MRL: derivation

The chronic oral MRL rests on a meta-analysis of environmental exposure studies relating urinary cadmium to the prevalence of abnormal low-molecular-weight proteinuria (biomarkers beta-2-microglobulin, protein HC, retinol binding protein) ([[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]]). The point of departure is the 95 percent lower confidence limit on the urinary cadmium concentration associated with a 10 percent increase in the prevalence of abnormal biomarker levels, denoted UCDL10, at 0.5 µg Cd per gram creatinine ([[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]]). A pharmacokinetic model translates that urinary concentration to a dietary cadmium intake that would produce it under lifetime constant-intake conditions, peaking in the renal cortex at age 55; the corresponding dietary intake in females is 0.33 µg Cd/kg/day, the more conservative of the female (0.33) and male (0.70) values ([[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]]). An uncertainty factor of 3 is applied for human variability, specifically to account for the exclusion of diabetics from several of the contributing studies. The resulting MRL is 0.1 µg Cd/kg/day (1 × 10⁻⁴ mg Cd/kg/day) ([[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]]).

The endpoint class (renal tubular dysfunction biomarkered by low-molecular-weight proteinuria) is the same as the EFSA CONTAM 2009 TWI derivation ([[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]]). Both agencies treated urinary cadmium as the exposure metric and fit dose-response relationships to biomarker-prevalence data. The agencies differ in the specific percentile used as the population-level trigger (ATSDR uses UCDL10 at 0.5 µg/g creatinine ([[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]]); EFSA uses a BMDL5-based reference of 1.0 µg/g creatinine with a chemical-specific adjustment factor of 3.9 for inter-individual variation ([[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]])), in the toxicokinetic model (ATSDR fits to peak renal cortex at age 55; EFSA fits to non-smoking Swedish women age 58-70 to get the 95th-percentile-below-reference at age 50), and in the uncertainty factor (ATSDR applies 3; EFSA applies no additional uncertainty factor beyond the CSAF). These methodological differences compound to produce the approximately 3.6x gap between the two daily-equivalent values.

## Intermediate oral MRL: derivation

Derivation parameters from [[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]]:

| Parameter | Value |
| --- | --- |
| Critical study | Brzóska and Moniuszko-Jakoniuk 2005d |
| Critical endpoint | Decreased bone mineral density, lumbar spine, in young female rats exposed to cadmium chloride in drinking water for 6 to 12 months |
| Point of departure | BMDLsd1 of 0.05 mg Cd/kg/day, derived from 9-month lumbar spine data |
| Uncertainty factor | 100 (10 for animal-to-human extrapolation, 10 for human variability) |
| MRL | 0.5 µg Cd/kg/day |

## Acute inhalation MRL: derivation

Derivation parameters from [[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]]:

| Parameter | Value |
| --- | --- |
| Critical study | NTP 1995 |
| Critical endpoint | Alveolar histiocytic infiltrate, focal inflammation, minimal fibrosis in alveolar septa in F344 rats exposed to cadmium oxide 6.2 hours/day, 5 days/week for 2 weeks |
| LOAEL | 0.088 mg Cd/m³ |
| Duration-adjusted LOAEL (LOAELADJ) | 0.016 mg Cd/m³ |
| Regional deposited dose ratio (pulmonary) | 0.617 |
| LOAELHEC (human equivalent concentration) | 0.01 mg Cd/m³ |
| Uncertainty factor | 300 (10 for LOAEL-to-NOAEL, 3 for animal-to-human with dosimetric adjustment, 10 for human variability) |
| MRL | 3 × 10⁻⁵ mg Cd/m³ (0.03 µg Cd/m³) |

## Chronic inhalation MRL: derivation

The chronic inhalation MRL uses the same UCDL10 of 0.5 µg Cd/g creatinine as the chronic oral MRL, translated through the toxicokinetic model to a corresponding inhalation exposure rather than a dietary intake. The resulting MRL is 0.01 µg Cd/m³ after application of an uncertainty factor of 3 for human variability and a modifying factor of 3 ([[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]]).

## Relationship to EPA IRIS

The ATSDR chronic oral MRL of 0.1 µg/kg/day ([[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]]) is tighter than the operative EPA IRIS oral RfD values for cadmium (5 × 10⁻⁴ mg/kg/day for water and 1 × 10⁻³ mg/kg/day for food, both last revised October 1, 1989) ([[sources/epa-iris-cadmium-1989|EPA IRIS Cd 1989]]). ATSDR and EPA use overlapping but not identical science bases and procedural frameworks; the IRIS oral RfD operates through an EPA-specific uncertainty-factor calculation that produced a less conservative value than ATSDR's 2012 meta-analysis yielded. This is not a disagreement in science so much as a difference in agency methodology and in the vintage of the underlying assessment (1989 IRIS versus 2012 ATSDR) ([[sources/epa-iris-cadmium-1989|EPA IRIS Cd 1989]]; [[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]]).

## Comparison to other reference values

| Body / Jurisdiction | Value (original units) | Daily equivalent (µg/kg b.w./day) | Ratio to ATSDR chronic oral MRL | Source |
| --- | --- | --- | --- | --- |
| ATSDR chronic oral MRL (US, 2012) | 0.1 µg/kg/day | 0.1 | 1 | [[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]] |
| EFSA TWI (EU, 2009) | 2.5 µg/kg b.w./week | ≈ 0.36 | 3.6x | [[sources/efsa-cadmium-contam-2009|EFSA Cd 2009]] |
| JECFA PTMI (international, 2010) | 25 µg/kg b.w./month | ≈ 0.83 | 8.3x | [[sources/jecfa-73rd-cadmium-2010|JECFA 73rd 2010]] |
| US EPA IRIS oral RfD, food (1989, operative) | 1 × 10⁻³ mg/kg/day | 1.0 | 10x | [[sources/epa-iris-cadmium-1989|EPA IRIS Cd 1989]] |
| US California OEHHA Prop 65 MADL (oral) | 4.1 µg/day | Not directly comparable (per-day not per-kg) | n/a | [[sources/oehha-cadmium-prop65-madl-2001|OEHHA 2001]] |

## Interpretation: ATSDR chronic oral MRL is below typical US dietary cadmium intake

ATSDR itself states in the 2012 profile that the chronic oral MRL of 0.1 µg Cd/kg/day is lower than the estimated age-weighted US dietary cadmium intake of approximately 0.3 µg Cd/kg/day derived from Choudhury et al. 2001 ([[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]]). The UCDL10 point of departure of 0.5 µg Cd/g creatinine is approximately twofold above the CDC 2011 US adult geometric mean urinary cadmium concentration of 0.247 µg/g creatinine ([[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]]). This is a load-bearing finding: the most conservative US public-health agency reference value for dietary cadmium is below typical US exposure, and the biomarker value at which renal effects become measurable at the 10 percent population-prevalence level is only twofold above what the median US adult already excretes.

## Sources

- [[sources/atsdr-cadmium-toxprofile-2012|ATSDR 2012]] — ATSDR, September 2012. Toxicological Profile for Cadmium.
