# Pooled HMI descriptive references — v2

Specified 19 October 2026 for rice; supersedes the FDA-only v1 admission policy. This is an observational concentration index, not a certification limit, health-risk classification, meta-analysis of effects, or claim of Cochrane certification.

## Question and unit of synthesis

Where does the row's reported concentration sit relative to the compatible historical evidence assembled by HMI?

The grain reference is a **pooled distribution of subgroup medians**, with equal total weight per sampling family and equal subgroup weight within each family. Its median describes a typical subgroup in this evidence library; it is not the median of all sampled grains, a population-weighted market estimate, or a representative world rice median. Country, township and rice-category subgroups retain their identities and differing sampling frames. This choice is a deliberate summary layer that permits primary sample records and summary-only sources to contribute without pretending that a published median is an individual measurement.

Raw sample records first produce subgroup medians using the maintained engine. Published subgroup medians enter once as summary units. No maximum, mean, range, standard deviation, analytical replicate or modelled pseudo-sample is inserted as an observed rice measurement. No distribution is reconstructed from an assumed coefficient of variation. Original row means/medians remain the target statistic and remain visible: comparing a mean with the reference distribution does not turn it into a median. Skewness can give a mean and median different positions. The information icon names the target statistic and numerical target explicitly.

## Actual cross-study pools

| Basis and analyte | Admitted reference families | Units |
|---|---|---:|
| Dry-weight tAs | FDA 2013 rice categories + Myat Soe Myanmar townships | 8 + 5 subgroup medians |
| Dry-weight iAs | FDA 2013 rice categories + Carey geographic groups | 8 + 29 |
| Dry-weight DMA | FDA 2013 rice categories + Carey geographic groups | 8 + 29 |
| Dry-weight Cd | Myat Soe townships + Shi countries | 5 + 32 |
| Native-moisture tAs, Cd, Pb | Myat Soe townships + Alrashdi reported origins | 5 + 6 per analyte |

Each family receives 50% of these two-family reference weights. FDA 2012 observations are already included in the 2013 release and are not added twice. Shi's compilation remains one family; its component publications are not added again. Species are separate, including tAs/iAs/DMA and tHg/MeHg. Neither market nor sampling year is assumed equal: the declared target is an international historical evidence library, explicitly not a US or current-market benchmark. Market/farm subgroups are deliberately included to summarize ordinary rice occurrence; the heterogeneous coverage and unknown collection dates are limitations.

The raw recovery contains 481 FDA rice records per arsenic analyte, 120 Myanmar rice samples with analyte-specific missingness, 33 Saudi samples (not 99 laboratory replicates), country summaries, and deposited Vietnamese genotype estimates. `tools/contracts/extract-rice-baseline-data.py` recreates the frozen extraction from preserved primary files, with original cells, locators, URLs, hashes, missingness and conversions. `baseline-primary-data.json` is the build input.

## Basis decisions and external comparisons

- FDA full analytical rice columns explicitly state dry weight. Myanmar grain was oven-dried to constant weight. Carey and Shi freeze-dried grain is admitted to the dry-weight layer, retaining different preparation methods as a limitation.
- Myanmar reports 6–7% moisture loss. For the **native-grain** reference, multiply its dry concentrations by 0.93–0.94, retaining an interval. Saudi grain was ground and weighed without a documented dry-mass correction. It joins this native-grain layer, not the dry-mass pool. There is no generic assumed rice moisture percentage.
- Hao's mining-area findings are external targets, excluded from setting the ordinary-occurrence reference. Its reported <13% residual moisture supports dry-mass target bounds of C to C/0.87. These bounds are assumptions about the reported moisture interval, not analytical confidence intervals.
- Song's fresh-weight rice mean is compared with the native-grain Cd reference. Tran's air-dried field-grain means are compared with the native-grain tAs/Cd reference. Neither supplies primary reference units: the Song mean cannot be expanded into observations, and Tran's selected genotypes/adjusted estimates differ from market sampling. These external comparisons retain residual-moisture, design and statistic limitations. The recovered Tran dataset has 184 brown and 181 nonmissing white genotype estimates; missing entries are not zeros.
- Yan's half-LOD medians become target bounds of 0–LOD: Cd 0–4 µg/kg is classifiable against the native-grain reference; Pb 0–50 remains unresolved. Chromium and mercury lack a sufficiently compatible reference. Yan does not set these references.
- Native-moisture iAs currently has only Alrashdi's six origin summaries; dry-weight Ni and Cr have only Myanmar's five township summaries. These are explicitly single-family fallbacks, not described as multi-study evidence. Their limitations appear in the sidebar.
- Cooked FDA TDS rice remains a separate prepared-food reference of individual composites. No unsupported cooking yield or dry-to-cooked conversion is applied. Most analytes have 54 composites, but iAs has one. The cooked row target remains its sample median because its displayed finding is a detected range.

## Primary discrepancies retained

Carey's geographic table counts total 1,093 versus 1,180 in its overall report. Shi's country counts total 2,277 versus 2,270 overall. These do not invalidate the listed subgroup medians, but prohibit treating the tables as a fully reconciled sample register. Primary subgroup weights do not use these counts; the count-weighted sensitivity retains and discloses the discrepancy. No missing observations are invented.

Carey's withdrawn atmospheric-arsenic column is excluded. Medians at/below 3 µg/kg are bounded 0–3 because the abstract and methods report different limits. Shi half-LOD medians become 0–9.8; its inconsistent Mauritius Q1 is unused rather than silently corrected. Myanmar parentheses are bounded by LOQ, inequalities by their stated bound, and unconfirmed analyses excluded. FDA non-speciated species are bounded by total As rather than accepting half-total proxies as measurements; trace estimates remain reported analytical estimates with unresolved analytical uncertainty.

Saudi Table 5 imported tAs values average 137.4167, while the narrative rounds to 140; the table maximum 269 differs from prose 223. The original published mean remains the finding, while HMI computes reference medians from Table 5. Mercury values near zero with roughly 3 µg/kg analytical dispersion and no recovered quantitative reporting bound remain unresolved.

## Quantiles, sensitivity and classification

All quantiles use `buildDescriptiveReference` in `tools/evidence/build-hmtc-aggregate-distributions.mjs`: inverse weighted empirical CDF, averaging adjacent values at exact cumulative-weight boundaries. Required scope dimensions, source identities, locators and valid bounds fail closed. Recovered grain reference definitions also reject any changed source basis pending reassessment.

Calculate Q1, median and Q3 at lower and upper reporting endpoints. These are identification bounds, not confidence intervals. The compact display requires at least four reference units and definitely positive Q1–Q3 spread; this is a display rule, not statistical adequacy or precision. Low: target upper < Q1 lower. High: target lower > Q3 upper. Moderate: target lower >= Q1 upper and target upper <= Q3 lower. Otherwise retain a neutral Limited data result with an explicit reason.

The sidebar reports primary and alternative quartiles, category under subgroup-count weighting (still equal total family weights), and category after removing each family. Changed results expose sensitivity; the primary category is not claimed robust to every analytical choice. Cooked references retain their equal-rice-form sensitivity. No significance test, confidence interval or population trend is manufactured from these descriptive references.

Reference membership is frozen before filtering. A source can contribute to its reference; this is descriptive position, not independent predictive validation. The sidebar distinguishes contributing findings from external targets. A reference ID hashes method, scope and actual units. Revisions need a new reference ID. No other ingredient inherits rice thresholds: `applyHmiBaselines` accepts explicit definitions and independently supplied reference units for reuse elsewhere.

## Audit and user interface

`hmi-rice-baselines.json` retains all subgroup units, member identities, weights, locators, conversions, sensitivity distributions, admission decisions and input/implementation hashes. `rice-depth/baseline-expansion-audit.json` audits **all 46** previously limited findings against a preserved v1 finding snapshot. The updated table has **38 rated / 21 unresolved** findings: **25 previously limited findings now have a rating**. Seven reference scopes pool two sampling families. Existing colored Low / Moderate / High buttons are unchanged; numerical references, contributions, methods and limitations stay in the information icon and right sidebar.

Remaining 21: ten cooked FDA findings (nine unresolved censoring/spread, one iAs sample); four Ethiopian non-detect/LOQ findings without numerical bounds; two unreconciled mixed-product mercury ranges; two Saudi mercury findings with unresolved reporting limits; and three Henan findings (Pb median spans categories; Cr/Hg reference unresolved). Missingness is neither Low nor automatically Moderate.

## Methodological grounding

[Cochrane Chapter 10](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-10) informs comparability and sensitivity; [Chapter 12](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-12) supports explicit descriptive synthesis when conventional meta-analysis is inappropriate. [EFSA left-censoring guidance](https://www.efsa.europa.eu/en/efsajournal/pub/1557) informs non-detect treatment. These do not endorse this specific index or certify the library. Formal systematic-review coverage and independent risk-of-bias appraisal remain separate work.

## Verification of this revision

125 contract tests pass, including cross-study membership/weighting, known pooled quartiles, all 46 prior dispositions, raw-table counts and missingness, moisture/censoring bounds, filter invariance, source-removal sensitivity, and the existing 1.7 MB table payload ceiling. TypeScript, structural checks, build drift checks, primary-extraction reproducibility and the isolated 82-page Quartz render pass. Live browser verification confirms 38 ratings / 21 unresolved, fixed reference values after source filtering, working cloned reference tables and source weights, Low/Moderate/High color gradation, no blank buttons, Escape/reset behavior, no browser errors and a 390 px layout without horizontal overflow. Desktop proof: `previews/contracts-pilot/hmi-pooled-rice-2026-10-19.png`.
