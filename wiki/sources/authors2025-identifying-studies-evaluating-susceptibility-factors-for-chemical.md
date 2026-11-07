---
type: source
raw_handle: RPMEHG_10-1016-j-envint-2025-109331
cite_key: authors2025-identifying-studies-evaluating-susceptibility-factors-for-chemical
title: "Identifying studies evaluating susceptibility factors for chemical health assessments: A case study focused on methylmercury developmental neurotoxicity"
authors: [Segal D, Nachman R, Nweke O, Radke E, Brunson G, Khoshhal B, Helguero GN, Kopylev L]
year: 2025
publication: "Environment International"
doi: 10.1016/j.envint.2025.109331
source_type: peer-reviewed
evidence_tier: A
evidence_fitness:
  supports: [systematic-review-methodology, literature-search-strategy-design, methylmercury-susceptibility-factor-landscape, effect-modifier-identification-in-methylmercury-DNT]
  does_not_support: [food-concentration-data, occurrence-estimates, certification-limits, brand-level-comparisons, dietary-exposure-quantification]
public_evidence_label: Context only
review_state: machine_extracted
claim_classes: [literature_finding]
license: cc by-nc-nd
access_url: "https://doi.org/10.1016/j.envint.2025.109331"
raw_path: "raw/RPMEHG/10-1016-j-envint-2025-109331.pdf"
raw_sha256: "7507b4c89262f858cbfe57beeb1e64e77e14f1b730987b3405fe9e92dfbeafa1"
metals: [MeHg, tHg]
ingredients: ["[[ingredients/fish]]", "[[ingredients/seafood]]"]
products: []
matrices: []
jurisdictions: [US]
near_duplicates: []
sample_n: null
sample_population: "Not applicable; this is a methodology study evaluating literature search approaches for identifying susceptibility-relevant epidemiology studies. No primary human or food samples were collected."
audience: [regulator, researcher]
sources: 0
updated: 2026-11-07
hero_image: /static/heroes/research-glassware-notebook-sampling-spoon.webp
hero_image_alt: "Unmarked glass laboratory vessels, a closed notebook, sampling spoon and empty specimen dish illustrating a 2025 systematic review methods study."
---

# Segal et al. 2025 - Identifying Studies Evaluating Susceptibility Factors for Chemical Health Assessments

Segal and colleagues at the US Environmental Protection Agency and the University of Maryland School of Public Health compared two general approaches for efficiently identifying epidemiology studies that contain susceptibility information for chemical health assessments, using methylmercury (MeHg) developmental neurotoxicity (MeHg DNT) as a case study. The paper does not measure MeHg concentrations in food or biological specimens; it evaluates systematic review screening strategies. The recommended approach is a broad literature search followed by a human filter and a dose-response filter but not a susceptibility keyword filter, combined with backward citation searching. This approach (Approach 1B) captures 96% of PECO-relevant studies while reducing screening by approximately 40% compared to screening all retrieved studies.

## Key numbers

The initial literature search covered 1998 to 2022 across five databases (PubMed, ToxLine, ScienceDirect, Web of Science, SCOPUS) and identified 17,661 unique records. After application of a human filter in SWIFT Review, 7,531 studies remained as potentially relevant human studies (Table 2).

**Literature search volume (Table 2):**

| Study set | Studies identified | Studies passing human filter | Studies passing both human and dose-response filter |
| --- | ---: | ---: | ---: |
| 1998-2017 a and b | 13,469 | 5,533 | 3,259 |
| 2017-2019 | 1,792 | 817 | 523 |
| 2019-2022 | 2,400 | 1,181 | 731 |
| All searches | 17,661 | 7,531 | 4,513 |

**Approach 1 screening results (Table 3):**

| Study set | Number screened | PECO-relevant | PECO and potentially dose-response |
| --- | ---: | ---: | ---: |
| 2019-2022 | 1,181 | 31 | 30 |
| 2017-2019 | 817 | 28 | 27 |
| 1998-2017a | 800 | 15 | 14 |
| 1998-2017b (dose-response subset) | 2,859 | 97 | 97 |
| Total | 5,657 | 171 | 169 |

One additional PECO-relevant study was identified by backward citation searching, for a final total of 172 PECO-relevant studies across all literature searches.

**Susceptibility filter performance (Table 4 and results section):**

| Filter version | Applied to | PECO studies detected | Total studies detected | Screening reduction |
| --- | --- | --- | --- | --- |
| Filter 1 (a priori) | 2019-2022 set (1,181 studies; 31 PECO) | 31 of 31 (100%) | 1,179 | minimal |
| Filter 2 (revised) | 2017-2019 set (817 studies; 28 PECO) | 17 of 28 (61%) | 306 | 63% |
| Filter 3 (further revised) | 1998-2017 set (5,533 studies; 113 PECO) | 84 of 113 (74%) | 2,638 | 52% |

Approach 1B, which applied a dose-response filter before manual title-abstract and full-text screening, reduced screening by approximately 40% compared to Approach 1A while capturing 96% of true PECO-relevant studies. The SWIFT-Active Screener AI and machine learning component in Approach 1B further reduced manual screening by approximately 52% within the dose-response-filtered subset.

## Study design

This is a methodology comparison study. No food samples or biological specimens were collected. The goal was to compare two general approaches for identifying epidemiology studies with susceptibility information for chemical health assessments, using the US EPA systematic review of methylmercury (MeHg) DNT effects as a case study (U.S. EPA, 2020).

Approach 1 began with a comprehensive literature search and filtered studies for potential human relevance using SWIFT Review. Approach 1A conducted manual title-abstract and full-text screening of all retrieved studies in DistillerSR for PECO-relevant susceptibility content. Approach 1B modified this by first applying a dose-response filter in SWIFT Review and then using SWIFT-Active Screener, an AI-assisted active-learning tool, for title-abstract screening of the dose-response-filtered subset, before manual full-text screening in DistillerSR.

Approach 2 developed an a priori susceptibility keyword filter (search string) and applied it to the same corpus of retrieved studies in SWIFT Review to reduce the number of studies requiring manual screening. Four sequential versions of the susceptibility filter were developed and evaluated.

PECO criteria (Table 1) required: (P) human populations exposed from fetal period through early adulthood (less than 25 years when the brain is considered fully developed); (E) quantitative MeHg biomonitoring via hair, nails, or blood, or measurements of total mercury; (C) data on effect modification of MeHg DNT, including interaction terms in analyses or stratification for a potential effect modifier; (O) DNT outcomes including but not limited to cognition, motor function, behavior, vision, hearing, decreased brain weight or head circumference, or structural brain alterations.

## Methods (brief)

The literature search strategy was developed to support the US EPA systematic review protocol for the methylmercury IRIS assessment (U.S. EPA, 2020). The initial literature search was conducted in 2017 (covering 1998 to 2017) across four databases: PubMed (National Library of Medicine), Web of Science (Clarivate Analytics), ToxLine (National Library of Medicine), and ScienceDirect (Elsevier). An update was conducted in 2019 covering 2017 to 2019 using PubMed, Web of Science, and ToxLine; because ToxLine was subsequently incorporated into PubMed, a 2022 update covering 2019 to 2022 used PubMed, Web of Science, and SCOPUS (Elsevier), with a retroactive SCOPUS search completed for 2017 to 2019. Search terms included variations of "methylmercury" (methylmercury, methyl-mercury, MeHg) and mercury combined with food sources (mercury and fish, mercury and seafood).

Studies retrieved from the literature search were filtered in SWIFT Review using a human filter to identify potential human epidemiology studies. SWIFT Review is a freely available text-mining tool operating on title-abstract content. A second filter was applied in SWIFT Review to identify studies with potential dose-response data (exposure modeled as a function of continuous exposure), creating separate subsets for Approach 1 and Approach 2.

For Approach 1A, independent dual reviewers screened each study title and abstract in DistillerSR for susceptibility information using PECO criteria and a screening form with example susceptibility factors. Full-text screening was then conducted with a comprehensive evaluation form. A third reviewer resolved conflicts. For Approach 1B, SWIFT-Active Screener, an AI and machine learning software tool, was used for title-abstract screening of the dose-response-filtered subset to prioritize studies estimated to be relevant; studies were screened until an estimated 95% of relevant studies had been identified. Backward citation searching was conducted as a final step in Approach 1 to check for missed studies.

For Approach 2, an a priori susceptibility filter was developed based on terminology used to describe susceptibility factors in the introduction and in related published susceptibility search filters (Hosking et al., 2019; Prady et al., 2018). The filter was iteratively revised by evaluating its performance against the PECO-relevant studies identified by Approach 1A, adding terms that improved sensitivity and removing terms that reduced specificity. The final validated version for the conclusions was Filter 3.

No food samples were analyzed. No analytical instrument was used. No limits of detection, limits of quantification, or certified reference material recovery data are applicable or reported by this paper.

## Evidence fitness

This paper is a methodology study. It does not report methylmercury or total mercury concentrations in any food, biological specimen, or environmental matrix. Its value to the wiki is contextual: it documents the landscape of susceptibility factors studied in the methylmercury DNT epidemiology literature, and it provides validated literature search strategies for systematic reviews of chemical susceptibility.

The 172 PECO-relevant studies identified collectively address susceptibility factors including sex, genetics and genetic polymorphisms, nutrition (selenium, polyunsaturated fatty acids and fish consumption), co-exposures (polychlorinated biphenyls, cadmium, lead), socioeconomic status, indigenous status, race and ethnicity, and other non-biological factors. This paper cannot support food occurrence estimates, dietary exposure quantification, certification limits, or brand-level comparisons. It supports understanding of which effect modifiers have been examined in the methylmercury DNT literature and the efficiency of different search strategies for identifying susceptibility-relevant studies.

## Limitations

The susceptibility keyword filter (Approach 2) missed 26% of PECO-relevant studies (Filter 3 captured 74%) primarily because studies providing susceptibility information through stratified regression analyses or interaction terms often did not describe that content in their titles or abstracts. Studies evaluating sex as an effect modifier, home quality and vegetable intake, fish consumption, toxicokinetic differences, and polyunsaturated fatty acid co-exposure were among those missed. One study missed had no abstract at all.

The dose-response filter used in Approach 1B was developed specifically for methylmercury and may require adaptation for other chemicals. The approaches were designed only for epidemiology studies in humans; modifications would be required to include informative animal studies.

The approaches identified existing studies with susceptibility information rather than conducting a full synthesis or risk-of-bias assessment of those studies. The PRISMA reporting guidelines were followed for applicable items, but the effort does not constitute a completed systematic review.

Standardization of susceptibility terminology in the published literature would improve filter performance. As of publication, no universally accepted language exists for describing susceptibility factors across different categories of effect modification.

Because SWIFT-Active Screener cannot read full text, manual full-text screening in DistillerSR was still required for studies that passed the AI-assisted title-abstract step in Approach 1B.

## Regulatory context

The paper is conducted in support of the US EPA IRIS systematic review protocol for methylmercury (U.S. EPA, 2020) and is relevant to EPA's methodology for characterizing susceptibility and variability in IRIS chemical health assessments. It references the standard EPA practice of applying a default Uncertainty Factor of 10 for interindividual variation (UFH) when adjusting reference doses for susceptible populations (U.S. EPA, 2002), and discusses the National Research Council (2009) recommendation that EPA develop better methods for quantifying population variability from susceptibility factors in dose-response analyses.

The World Health Organization (2021) health risk assessment toolkit principle that sensitive populations must be accounted for by some mechanism to reduce the likelihood that their risk will be underestimated is cited as context for why comprehensive identification of susceptibility factors matters for reference value derivation.

The paper does not establish regulatory limits, reference doses, or certification thresholds. It does not report methylmercury concentrations in fish or any other food.

## Related evidence

- [[metals/mercury]]
- [[ingredients/fish]]
- [[ingredients/seafood]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex).

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [b01ec52c31](https://github.com/paleofoundation/heavymetalindex/commit/b01ec52c31) | 2026-08-04 | major | 2 sections added |
| [9df161fe24](https://github.com/paleofoundation/heavymetalindex/commit/9df161fe24) | 2026-08-03 | major | 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
