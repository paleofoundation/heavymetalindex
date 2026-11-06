---
title: Tap water lead sampling
dek: "Lead concentrations measured in residential, school, and institutional tap water. Coverage includes Lead and Copper Rule first-draw sampling protocols, the effect of flushing on measured concentrations, corrosion control approaches, and evidence from vulnerable settings including schools, private wells, and underserved communities."
rail_highlights:
  - label: Vulnerable setting
    text: 48 percent of Illinois private well first-draw samples had detectable lead
    source: sources/geiger2021-illinois-private-wells-lead
    source_label: Geiger et al. 2021
  - label: Flushing limitation
    text: 30-second flush did not reduce lead in a high-LSL-prevalence city; 52 percent of homes still had detectable lead after 6 minutes
    source: sources/katner2018-flush-guidelines-lead-tap-water
    source_label: Katner et al. 2018
  - label: Corrosion control
    text: Orthophosphate dosing reduced Pittsburgh Tier I 90th percentile from 22 to 5.1 µg/L over four years
    source: sources/vijayashanthar2023-pittsburgh-lead-sampling-programs
    source_label: Vijayashanthar et al. 2023
type: testing
analyte_class: lead
metals_addressed: [Pb]
matrix_types: [drinking-water, tap-water, well-water]
audience: [regulator, educator, researcher, qa, app]
updated: 2026-11-06
sources: 15
---

# Tap water lead sampling

## Overview

Lead enters tap water from distribution and plumbing materials rather than from most source waters, which are naturally low in lead. Lead service lines connecting the water main to individual properties, lead-tin solder used in residential plumbing installed before 1986, brass fixtures, and leaded flux are the operative sources. The concentration measured at the tap depends on the lead content of the plumbing materials, the stagnation time of the water in contact with those materials, the corrosivity of the water (pH, alkalinity, temperature, chloride-to-sulfate mass ratio), the corrosion control treatment applied by the utility, and whether the sample is collected before or after flushing.

This page synthesizes peer-reviewed evidence on measured tap water lead concentrations across a range of settings, examines how sampling protocol choices (stagnation time, sample volume, flush duration) affect what is measured, reviews the evidence on corrosion control approaches, and identifies settings where elevated lead is most consistently found. Sources are limited to independent peer-reviewed studies and government publications; supplier data and commercial certification notices are excluded. The analytical method underlying nearly all post-2000 field measurements is ICP-MS, as described on [[testing/icp-ms]].

The regulatory context for tap water lead is discussed on [[metals/lead]] and in the referenced regulatory instruments. The absence of a recognized safe blood lead level for children, documented across WHO, EFSA, JECFA, and EPA IRIS, is the reason minimizing tap water lead exposure matters even at concentrations well below any single regulatory threshold.

## Regulatory thresholds and sampling protocols

The US Environmental Protection Agency Lead and Copper Rule (LCR), in force since 1991, requires community water systems to test a set of Tier I high-risk residential sites using a first-draw protocol: 1 L of cold tap water collected after 6 h or more of stagnation at the kitchen or bathroom faucet, before any water is run. The LCR action level of 15 µg/L (15 ppb) requires remedial action when the 90th percentile of Tier I samples exceeds this threshold. The 2021 Lead and Copper Rule Revisions established a Trigger Level of 10 µg/L; the 2024 Lead and Copper Rule Improvements lowered the action level itself to 10 µg/L and require proactive lead service line replacement programs.

The LCR maximum contaminant level goal (MCLG) for lead is 0 µg/L, reflecting the agency's judgment that no level in drinking water is demonstrably safe. The FDA allows up to 5 µg/L in bottled water. The WHO provisional guideline value is 10 µg/L. Health Canada revised its maximum acceptable concentration for lead in drinking water from 10 µg/L to 5 µg/L in 2019, with the revised standard based on first-draw sampling after 6 h stagnation ([[sources/schwartz2021-first-nations-canada-drinking-water|Schwartz et al. 2021]]).

For school drinking water, US EPA guidance (3Ts for Reducing Lead, 2018) recommends first-draw samples of approximately 250 mL per fixture after 8 to 18 h of stagnation, with a cleanup action level of 15 µg/L and an investigation level of 5 µg/L. The American Academy of Pediatrics recommends a school remediation threshold of 1 µg/L ([[sources/katner2018-flush-guidelines-lead-tap-water|Katner et al. 2018]]). These thresholds differ from each other and from the community water system LCR by virtue of the stagnation protocol, sample volume, and policy objective underlying each.

The IEUBK model context from two independent studies illustrates why regulatory thresholds do not bracket a "safe" range. At 7 µg/L, an estimated 25 percent of 1 to 2 year old children drinking 500 mL per day would exceed a blood lead level of 5 µg/dL ([[sources/stratton2023-newark-lead-copper-rule|Stratton et al. 2023]]). At 4 µg/L, an estimated 5 percent of infants consuming 800 mL per day of reconstituted formula would exceed the same threshold ([[sources/stratton2023-newark-lead-copper-rule|Stratton et al. 2023]]). Both values are well below the LCR action level as it stood through 2024.

## Measured concentrations in residential and community water settings

### Community water system compliance monitoring

Pittsburgh, Pennsylvania provides a well-documented multi-year record of a utility responding to an LCR action level exceedance. LCR Tier I 90th percentile concentrations peaked at 22 µg/L in June 2016, fell to 5.1 µg/L after orthophosphate dosing was implemented and stabilized, and tracked between 7.6 and 15.8 µg/L at customer-requested sites (non-Tier-I homes) over the same interval. Customer-requested sampling at non-Tier-I sites found medians consistently below laboratory reporting limits (1 to 4 µg/L), with 56 to 76 percent of samples non-detect depending on year ([[sources/vijayashanthar2023-pittsburgh-lead-sampling-programs|Vijayashanthar et al. 2023]]). This contrast illustrates that LCR Tier I sites, selected for high plumbing-lead risk, overrepresent worst-case concentrations compared with the broader service area.

Newark, New Jersey provides a complementary case study in which regulatory design limitations concealed an emerging exceedance. The combined-utility 90th percentile did not cross 15 µg/L until 2017, but a retrospective analysis estimated that the higher-lead Pequannock subsystem would have crossed the action level in 2015 had it been monitored independently. The exceedance was traced to a pH drop from 8.08 (2015) to 7.33 (2016) that destabilized pre-existing lead scale, releasing soluble lead carbonate species from service line walls ([[sources/stratton2023-newark-lead-copper-rule|Stratton et al. 2023]]).

Community-wide sampling across four Massachusetts municipalities using portable voltammetric sensors found that 7 of 317 first-liter samples (2.2 percent) exceeded 10 µg/L, with geographic clustering: Andover accounted for 4 of those 7 samples, and Andover also had 3 fifth-liter samples (service line indicator) above 10 µg/L, suggesting lead service line presence ([[sources/bozkurt2025-massachusetts-lead-monitoring-sensors|Bozkurt et al. 2025]]). The highest single first-liter sample measured 168.2 µg/L (sensor) in Andover, confirmed at 25.1 µg/L in the fifth liter by ICP-MS.

### Private wells

Private domestic wells are unregulated for lead at the US federal level. In a cross-sectional study of 151 private well households across three Illinois counties, lead was detected above 0.76 µg/L in 48.3 percent of first-draw stagnation samples. 3.3 percent of homes exceeded 15 µg/L on first draw; none exceeded it after aggressive flushing (7th-liter protocol). The strongest predictor was home age (pre-1986) combined with corrosive water chemistry, with an odds ratio of 11.07 (95% CI: 3.47 to 35.31) for detectable lead relative to newer homes with less corrosive water ([[sources/geiger2021-illinois-private-wells-lead|Geiger et al. 2021]]). The finding that flushing reduced detection from 48.3 to 22.5 percent confirms in-home plumbing as the primary source rather than the aquifer.

### First Nations communities in Canada

A large cross-sectional survey of 1,516 First Nations households across 91 communities in Canada found that 8.4 percent of first-draw (4-hour stagnation) samples exceeded the Health Canada MAC of 5 µg/L. Five-minute flushing reduced exceedance to 0.7 percent, an approximately 12-fold reduction. Ontario, Manitoba, and Atlantic Canada showed higher concentrations, consistent with older plumbing infrastructure ([[sources/schwartz2021-first-nations-canada-drinking-water|Schwartz et al. 2021]]). The 4-hour stagnation used in this survey is shorter than the standard 6-hour LCR protocol, so the 8.4 percent figure is likely a lower bound on what a standard protocol would yield.

## Schools and other institutional settings

New Jersey public school drinking water fountains sampled in 1991 to 1992 had first-draw median lead of 0.010 mg/L (10 µg/L) at 100 fountains across 50 buildings. A 10-minute flush reduced the median to 0.007 mg/L (7 µg/L), but by lunchtime (3 to 5 hours after the flush), lead had rebounded to the same median as first draw. Single morning flushing does not provide lasting protection in schools where children return to fountains throughout the day ([[sources/murphy1993-school-drinking-water-flushing-lead|Murphy 1993]]).

The 2023 machine learning study across four US states found that geographic distance to the nearest school with a known elevated result was the strongest predictor of which untested schools would exceed 15 µg/L, implying that elevated school water lead clusters geographically within municipalities sharing infrastructure age and plumbing material profiles ([[sources/shrivatsa2023-schools-lead-water-prediction|Shrivatsa et al. 2023]]).

Thailand primary school tap water (sampled after a 5-minute flush, not at first draw) had 18.2 percent of samples exceeding the WHO provisional guideline of 10 µg/L, despite the post-flush protocol that biases the data toward lower concentrations ([[sources/decharat2020-thailand-school-water-lead|Decharat and Pan-in 2020]]). Filtered tap water at the same schools had all samples at or below 5 µg/L, demonstrating point-of-use filtration efficacy.

During the COVID-19 pandemic low-occupancy period, four Indiana institutional buildings (offices and academic facilities) showed lead as high as 45.4 µg/L in first-draw samples, alongside elevated copper and manganese, attributable to extended stagnation during the 40 to 75 percent reduction in building water use. In the largest building (constructed 1952), no detectable residual chlorine remained even after 125 minutes of flushing at the fixture nearest the building entry, illustrating the breakdown of corrosion control under low-use conditions ([[sources/ra2024-buildings-stagnation-water-lead|Ra et al. 2024]]).

## Effect of flushing on measured lead concentrations

Flushing displaces stagnant water from premise plumbing and service lines, replacing it with fresher distribution system water. Its effectiveness depends on the volume flushed relative to the volume of pipe between the main and the tap, and on where along the pipe the principal lead source is located.

In New Orleans (65 to 80 percent lead service line prevalence), 30-second flushing did not reduce lead relative to first draw; median concentrations actually increased slightly (1.4 µg/L first draw versus 1.7 µg/L at 30 to 45 seconds), presumably because the initial flush mobilized lead from service line segments not captured in the smaller first-draw volume. No statistically significant reduction appeared until 6 minutes of flushing, and even after 6 minutes, 52 percent of sites retained detectable lead at or above 1 µg/L ([[sources/katner2018-flush-guidelines-lead-tap-water|Katner et al. 2018]]).

The repeated simulation study showed that a single first-draw sample has only 6.4 percent sensitivity for identifying a home with episodic particulate lead spikes (defined as at least one sample at or above 15 µg/L) when spikes occur in 2 percent of homes in the population. Seven rounds of sampling were required to reach 50 percent sensitivity ([[sources/dorevitch2024-drinking-water-lead-spikes|Dorevitch et al. 2024]]). This is a fundamental constraint of the LCR sampling protocol: it was designed to monitor corrosion control at the population level, not to identify individual high-risk homes.

The Flint emergency documented the most extreme version of this limitation. In two intensively monitored homes, one-time high-velocity flushing produced rapid reduction in lead followed by rebound within 2 weeks as loose deposits re-equilibrated. Lead service line replacement was the only durable intervention, but even after replacement, residual disturbance-related release from adjacent plumbing kept concentrations elevated for months ([[sources/mantha2020-flint-water-lead-reduction|Mantha et al. 2020]]).

For private wells in Illinois, a 7th-liter flush reduced detection prevalence from 48.3 to 22.5 percent, confirming that lead is primarily in premise plumbing rather than the aquifer. No wells exceeded 15 µg/L after flushing, though 3.3 percent did at first draw ([[sources/geiger2021-illinois-private-wells-lead|Geiger et al. 2021]]).

## Corrosion control: treatment approaches

Orthophosphate is the most widely deployed and best-evidenced corrosion inhibitor for lead in drinking water systems. Pittsburgh reduced its LCR Tier I 90th percentile from 22 µg/L to 5.1 µg/L using zinc orthophosphate after pH adjustment alone proved insufficient; Newark's shift from sodium silicate to zinc orthophosphate was the corrosion control intervention that resolved its 2017 exceedance ([[sources/vijayashanthar2023-pittsburgh-lead-sampling-programs|Vijayashanthar et al. 2023]], [[sources/stratton2023-newark-lead-copper-rule|Stratton et al. 2023]]). Orthophosphate promotes formation of hydroxypyromorphite scale on lead pipe surfaces, reducing dissolution rates.

Polyphosphate blends, commonly used for iron and manganese sequestration, are problematic for lead control. Bench-scale experiments found that trimetaphosphate increased dissolved lead by 54 percent and total lead by 22 percent relative to orthophosphate-only controls ([[sources/hood2025-orthophosphate-silicate-lead-corrosion|Hood et al. 2025]]). An orthophosphate-silicate blend produced a smaller but still detectable increase in dissolved lead (+30 percent), which is the bioavailable fraction most relevant to exposure assessment.

Granular activated carbon (GAC) filtration reduces natural organic matter (NOM) in treated water, which improves the effectiveness of downstream orthophosphate treatment by removing NOM that would otherwise complex with lead and inhibit protective scale formation. In bench-scale experiments, GAC-treated water combined with zinc orthophosphate reduced galvanic lead solder corrosion relative to anthracite-sand filtration with the same orthophosphate dose. The same study found that polyaluminum chloride (PACl) coagulation elevated the chloride-to-sulfate mass ratio (CSMR) of treated water, increasing galvanic corrosion risk relative to alum coagulation; zinc orthophosphate at 1 to 2 mg PO4/L mitigated this effect ([[sources/hood2026-granular-activated-carbon-lead|Hood et al. 2026]]).

Disinfectant type also affects solder lead. Free chlorine can form a protective lead(IV) oxide scale on 50:50 Pb/Sn solder through an electrochemical reversal mechanism, in which the solder becomes cathodic (protected) rather than anodic (corroding). Chloramine does not support this mechanism; pipe-loop experiments found up to 100-fold more lead release from lead solder under chloramine versus free chlorine over comparable periods ([[sources/mazzola2024-chlorine-lead-solder-corrosion|Mazzola et al. 2024]]). Orthophosphate inhibits lead(IV) scale formation, so utilities using orthophosphate do not benefit from electrochemical reversal; the interaction between disinfectant choice and corrosion inhibitor type is a system-specific variable that requires site-specific evaluation.

Elevated pH reduces lead solubility and is confirmed as the dominant control in Atlantic Canada source water (bench-scale data showing -24 percent total lead at pH 9.5 versus pH 7.5) ([[sources/hood2025-orthophosphate-silicate-lead-corrosion|Hood et al. 2025]]). The Newark exceedance was initiated by a pH drop from 8.08 to 7.33, underscoring pH as a primary stability parameter for pre-existing lead scale ([[sources/stratton2023-newark-lead-copper-rule|Stratton et al. 2023]]).

## Implications for infant formula reconstitution

Infants consuming formula reconstituted with tap water are a priority subpopulation because they receive essentially all of their drinking water exposure through that single pathway at the highest dose (mL per kg body weight per day) of any life stage. The IEUBK model estimates that at 4 µg/L in tap water, 5 percent of infants consuming 800 mL per day of reconstituted formula would exceed a blood lead level of 5 µg/dL ([[sources/stratton2023-newark-lead-copper-rule|Stratton et al. 2023]]). This threshold is below the former LCR action level of 15 µg/L and below the current 2024 action level of 10 µg/L. It is in the range of concentrations that occur routinely in first-draw samples from homes with lead service lines or pre-1986 lead solder, as documented in New Orleans (median 1.4 µg/L first draw), Illinois private wells (many samples in this range), and during the Pittsburgh compliance exceedance period (90th percentile above 5 µg/L even at customer-requested non-Tier-I sites from 2016 to 2018).

## Limitations of current monitoring

The LCR first-draw protocol was designed to monitor the effectiveness of utility corrosion control across a large sampling pool, not to identify individual high-risk homes. The simulation study by Dorevitch et al. ([[sources/dorevitch2024-drinking-water-lead-spikes|Dorevitch et al. 2024]]) showed that a single round of first-draw sampling has only 6.4 percent sensitivity for detecting homes with episodic particulate lead spikes at 2 percent population prevalence. Seven rounds of sampling were required to reach 50 percent sensitivity, illustrating the fundamental mismatch between a population-level corrosion control metric and individual home risk assessment.

The Stratton et al. Newark analysis ([[sources/stratton2023-newark-lead-copper-rule|Stratton et al. 2023]]) identified three additional structural limitations: reduced monitoring programs (50 samples per 3-year period instead of 100 samples per period) during apparent compliance periods can mask emerging problems; blending results from multiple subsystems with different water chemistries into a single compliance calculation dilutes signals from the worse-performing subsystem; and LCR Tier I site selection criteria do not guarantee that the highest-risk locations in a service area are included.

Private wells are excluded from federal lead regulation entirely. The 48.3 percent first-draw detection rate in Illinois ([[sources/geiger2021-illinois-private-wells-lead|Geiger et al. 2021]]) and elevated lead across multiple other state surveys of private wells indicate that this is a large and undercharacterized exposure pathway for rural households.

Extended building stagnation during low-occupancy periods (school summer closures, holiday shutdowns, pandemic-related closures) produces transient lead spikes that fall outside the normal LCR monitoring cycle. The COVID-19 building study ([[sources/ra2024-buildings-stagnation-water-lead|Ra et al. 2024]]) documented this for institutional buildings; comparable dynamics occur in schools returning from summer break.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record.

1. [[sources/katner2018-flush-guidelines-lead-tap-water|Effectiveness of Prevailing Flush Guidelines to Prevent Exposure to Lead in Tap Water]]<span class="hmi-ref-meta">Katner AL, Pieper KJ, Brown KW, et al. · Int J Environ Res Public Health · 2018 · [doi.org/10.3390/ijerph15071537](https://doi.org/10.3390/ijerph15071537)</span><span class="hmi-ref-tag">Peer-reviewed</span>
2. [[sources/schwartz2021-first-nations-canada-drinking-water|Metals in the drinking water of First Nations across Canada]]<span class="hmi-ref-meta">Schwartz H, Marushka L, Chan HM, et al. · Can J Public Health · 2021 · [doi.org/10.17269/s41997-021-00497-5](https://doi.org/10.17269/s41997-021-00497-5)</span><span class="hmi-ref-tag">Peer-reviewed</span>
3. [[sources/stratton2023-newark-lead-copper-rule|The lead and copper rule: Limitations and lessons learned from Newark, New Jersey]]<span class="hmi-ref-meta">Stratton GW, Ettinger AS, Doherty BT, Buckley JP · WIREs Water · 2023 · [doi.org/10.1002/wat2.1620](https://doi.org/10.1002/wat2.1620)</span><span class="hmi-ref-tag">Peer-reviewed</span>
4. [[sources/vijayashanthar2023-pittsburgh-lead-sampling-programs|Assessment of Lead in Drinking Water from Multiple Drinking Water Sampling Programs for a Midsize City]]<span class="hmi-ref-meta">Vijayashanthar V, Small MJ, VanBriesen JM · Environ Sci Technol · 2023 · [doi.org/10.1021/acs.est.2c06614](https://doi.org/10.1021/acs.est.2c06614)</span><span class="hmi-ref-tag">Peer-reviewed</span>
5. [[sources/dorevitch2024-drinking-water-lead-spikes|Lead in drinking water from particulate spike simulation: implications for exposure assessment]]<span class="hmi-ref-meta">Dorevitch S, Geiger SD, Kelly KM, et al. · J Expo Sci Environ Epidemiol · 2024 · [doi.org/10.1038/s41370-023-00534-0](https://doi.org/10.1038/s41370-023-00534-0)</span><span class="hmi-ref-tag">Peer-reviewed</span>
6. [[sources/mantha2020-flint-water-lead-reduction|Tracking reduction of water lead levels in two homes during the Flint Federal Emergency]]<span class="hmi-ref-meta">Mantha M, Tang M, Pieper KJ, et al. · Water Res X · 2020 · [doi.org/10.1016/j.wroa.2020.100047](https://doi.org/10.1016/j.wroa.2020.100047)</span><span class="hmi-ref-tag">Peer-reviewed</span>
7. [[sources/geiger2021-illinois-private-wells-lead|Predictors of Water Lead Levels in Drinking Water of Homes With Domestic Wells in 3 Illinois Counties]]<span class="hmi-ref-meta">Geiger SD, Bressler J, Kelly KM, et al. · J Public Health Manag Pract · 2021 · [doi.org/10.1097/phh.0000000000001255](https://doi.org/10.1097/phh.0000000000001255)</span><span class="hmi-ref-tag">Peer-reviewed</span>
8. [[sources/murphy1993-school-drinking-water-flushing-lead|Effectiveness of flushing on reducing lead and copper levels in school drinking water]]<span class="hmi-ref-meta">Murphy EA · Environ Health Perspect · 1993 · [doi.org/10.1289/ehp.93101240](https://doi.org/10.1289/ehp.93101240)</span><span class="hmi-ref-tag">Peer-reviewed</span>
9. [[sources/shrivatsa2023-schools-lead-water-prediction|Data-Sparse Prediction of High-Risk Schools for Lead Contamination in Drinking Water: Examples from Four U.S. States]]<span class="hmi-ref-meta">Shrivatsa A, Lobo GP, Gadgil AJ · Int J Environ Res Public Health · 2023 · [doi.org/10.3390/ijerph20196895](https://doi.org/10.3390/ijerph20196895)</span><span class="hmi-ref-tag">Peer-reviewed</span>
10. [[sources/decharat2020-thailand-school-water-lead|Risk Assessment of Lead and Cadmium in Drinking Water for School use in Nakhon Si Thammarat Province, Thailand]]<span class="hmi-ref-meta">Decharat S, Pan-in P · Environ Anal Health Toxicol · 2020 · [doi.org/10.5620/eaht.e2020002](https://doi.org/10.5620/eaht.e2020002)</span><span class="hmi-ref-tag">Peer-reviewed</span>
11. [[sources/ra2024-buildings-stagnation-water-lead|Four buildings and a flush: Lessons from degraded water quality and recommendations on building water management]]<span class="hmi-ref-meta">Ra K, Proctor CR, Ley C, et al. · Environ Sci Ecotechnol · 2024 · [doi.org/10.1016/j.ese.2023.100314](https://doi.org/10.1016/j.ese.2023.100314)</span><span class="hmi-ref-tag">Peer-reviewed</span>
12. [[sources/hood2025-orthophosphate-silicate-lead-corrosion|Evaluating Orthophosphate-Silicate Blend as an Alternative to Blended Phosphates for Corrosion Control and Sequestration]]<span class="hmi-ref-meta">Hood TM, Trueman BF, Gagnon GA · ACS EST Water · 2025 · [doi.org/10.1021/acsestwater.5c00159](https://doi.org/10.1021/acsestwater.5c00159)</span><span class="hmi-ref-tag">Peer-reviewed</span>
13. [[sources/hood2026-granular-activated-carbon-lead|Granular Activated Carbon Filtration as a Lead Control Strategy]]<span class="hmi-ref-meta">Hood TM, Lewis JT, Trueman BF, et al. · ACS EST Water · 2026 · [doi.org/10.1021/acsestwater.5c01094](https://doi.org/10.1021/acsestwater.5c01094)</span><span class="hmi-ref-tag">Peer-reviewed</span>
14. [[sources/mazzola2024-chlorine-lead-solder-corrosion|Free Chlorine Can Inhibit Lead Solder Corrosion via Electrochemical Reversal]]<span class="hmi-ref-meta">Mazzola P, Lopez MJ, Edwards MA · Environ Sci Technol · 2024 · [doi.org/10.1021/acs.est.4c07375](https://doi.org/10.1021/acs.est.4c07375)</span><span class="hmi-ref-tag">Peer-reviewed</span>
15. [[sources/bozkurt2025-massachusetts-lead-monitoring-sensors|Community-Wide Monitoring of Lead in Drinking Water Distribution Systems Using Hand-Held Voltammetric Sensors and Geographic Information Systems]]<span class="hmi-ref-meta">Bozkurt F, Haque MM, Sullivan EM, et al. · ACS Omega · 2025 · [doi.org/10.1021/acsomega.5c01580](https://doi.org/10.1021/acsomega.5c01580)</span><span class="hmi-ref-tag">Peer-reviewed</span>
<!-- END: hmi-page-references -->

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| initial | 2026-11-06 | major | 15 sources added; 7 sections written |
<!-- END: hmi-page-history -->
