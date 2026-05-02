---
type: regulation
rule_id: fda2025-lead-processed-baby-foods
jurisdiction: US
agency: FDA
program: Closer to Zero
metal: Pb
status: final guidance action level
binding_status: nonbinding-recommendations
legal_authority: "21 CFR 109.6(d); FD&C Act section 402(a)(1)"
source_refs: ["[[sources/fda-ctz-Pb-babyfood-2025]]"]
title: "FDA 2025 Lead Action Levels for Processed Food Intended for Babies and Young Children"
updated: 2026-05-02
audience: [standards-development, regulator, retailer, brand, legal, educator]
---

# FDA 2025 Lead Action Levels for Processed Food Intended for Babies and Young Children

This is the canonical Heavy Metal Index regulation node for FDA's January 2025 final guidance, [[sources/fda-ctz-Pb-babyfood-2025|Action Levels for Lead in Processed Food Intended for Babies and Young Children]]. Product pages link here when they need a single decision surface for the three lead action levels established under [[regulations/fda-closer-to-zero|FDA Closer to Zero]].

## Decision Read

| Question | Index handling |
| --- | --- |
| What is it? | Final FDA guidance for industry, issued January 2025 under docket FDA-2022-D-0278. |
| Is it binding law? | No. FDA guidance documents contain nonbinding recommendations unless a statute or regulation is cited. |
| Does it matter legally? | Yes. Consistent with 21 CFR 109.6(d), FDA says these are lead levels at which it may regard a covered food as adulterated under FD&C Act section 402(a)(1), considering the action level with other factors such as analytical confidence. |
| How should product pages show it? | "Federal FDA final action level" or "FDA final guidance action level," not "legal limit" and not "HMTc limit." |
| How should HMTc use it? | External federal context and an enforcement-relevant benchmark. It is not automatically an HMTc pass/fail value; any HMTc value must be separately justified, auditable, and source-fit. |

## Covered Products

The guidance applies to packaged processed foods represented or purported to be for babies and young children less than two years old. It includes ready-to-eat foods such as purees and semi-prepared foods such as dry infant cereals.

The guidance does not apply to raw agricultural commodities, homemade foods, snack foods including grain-based or freeze-dried snacks, infant formula, beverages including toddler drinks, or juices. Grain-based snacks and juices sit on separate FDA evidence or guidance tracks, so product pages must not silently borrow these action levels for excluded categories.

## Action Levels

| Covered category | Lead action level | Product-page comparison rule | HMTc standards handling |
| --- | ---: | --- | --- |
| Fruits; vegetables excluding single-ingredient root vegetables; mixtures including grain- and meat-based mixtures; yogurts; custards/puddings; single-ingredient meats | 10 ppb Pb | Compare only when the product is within the processed baby/young-child food scope and the field value is Pb on a comparable basis. | Use as external FDA context. A stricter HMTc criterion needs a separate rationale and evidence-fitness record. |
| Single-ingredient root vegetables | 20 ppb Pb | Applies to foods consisting of carrots or sweet potatoes, with or without water or preservatives. A carrot plus white potato puree or sweet potato plus apple puree is a mixture, not this category. | Use as external FDA context and preserve the scope distinction, because mixed-root products may belong under the 10 ppb mixture category. |
| Dry infant cereals | 20 ppb Pb | Applies to dried infant cereals with or without dried fruit or vegetable additions. Do not substitute this for rice snacks, teething biscuits, or non-cereal grain snacks. | Use as external FDA context. Pair with the separate infant-rice-cereal inorganic arsenic node where rice cereal is involved. |

Parts per billion equals micrograms per kilogram for this guidance.

## Evidence Base

FDA based the achievability analysis on 1,452 Toxic Elements Program and FDA survey samples collected from FY 2009 through FY 2024, with 689 Total Diet Study samples from FY 2014 through FY 2020 used as complementary evidence. The Total Diet Study values are composites, so FDA did not use them for achievability percentiles.

| FDA category | Samples | Mean Pb (ppb) | 90th percentile (ppb) | 95th percentile (ppb) |
| --- | ---: | ---: | ---: | ---: |
| Fruits | 215 | 1.2 | 2.4 | 4.1 |
| Mixtures | 551 | 2.7 | 6.0 | 9.1 |
| Yogurts, custards/puddings, single-ingredient meats | 55 | 1.1 | 2.6 | 2.9 |
| Vegetables, all | 220 | 4.5 | 11.4 | 18.6 |
| Vegetables excluding single-ingredient root vegetables | 130 | 2.1 | 4.2 | 7.0 |
| Single-ingredient root vegetables | 90 | 8.2 | 20.9 | 23.9 |
| Dry infant cereals | 411 | 7.8 | 20.0 | 23.0 |

These percentile values belong on source and regulation pages as FDA achievability evidence. Product pages should prioritize the action level, the observed comparable field finding, and the comparison status rather than leading with percentile tables that are not directly useful to every audience.

## Exposure And Achievability Rationale

FDA selected action levels that reduce dietary lead exposure while maintaining achievability near the 90th to 95th percentile range of the occurrence data. FDA evaluated exposure against its dietary lead Interim Reference Level of 2.2 ug/day for children, derived from CDC's blood lead reference value with an additional safety factor. FDA also states that no safe level of lead exposure has been identified for children's health.

| Category | Action level | Achievability | Estimated exposure reduction at 90th percentile intake |
| --- | ---: | ---: | ---: |
| Fruits, non-root vegetables, mixtures, yogurts, custards/puddings, single-ingredient meats | 10 ppb | 97% | 19% |
| Single-ingredient root vegetables | 20 ppb | 88% | 29% |
| Dry infant cereals | 20 ppb | 91% | 24% |

## Nonbinding Recommendations Handling

The phrase "Contains Nonbinding Recommendations" should be preserved as a regulatory-status field and a legal caveat, not treated as a reason to ignore the guidance.

For the Index:

- Do not call these values statutory maximum levels, legal limits, or HMTc standards.
- Do call them FDA final guidance action levels and enforcement-relevant federal context.
- Preserve that FDA may consider them when evaluating adulteration, but decides enforcement case by case.
- Preserve exclusions so formulas, beverages, juices, snacks, and raw agricultural commodities are not compared against the wrong action level.

For HMTc standards development:

- Treat these values as a federal context floor and not as the end of standards work.
- Allow stricter HMTc thresholds where evidence, method comparability, product fit, analytical achievability, and public-health rationale support them.
- Require any stricter HMTc threshold to identify whether its basis is precautionary, market-ratcheting, feasibility-driven, or regulatory-alignment.
- Keep public wiki pages separate from HMTc certification decisions: the Index can show regulatory context and field findings, but it should not publish brand pass/fail determinations.

## Why This Makes HMTc Important

The guidance supports the need for a program like HMTc rather than replacing it. FDA explicitly says the action levels are nonbinding recommendations, are part of an iterative reduction program, and are not intended to direct consumer choices. The guidance covers lead only for selected processed baby-food categories and excludes infant formula, beverages, toddler drinks, juices, snacks, raw commodities, and homemade foods. It also does not establish HMTc-style lot-level certification, multi-metal criteria, public product evidence packages, or a transparent standard that brands and retailers can use for procurement.

HMTc can therefore serve a distinct role: converting a fragmented regulatory landscape into auditable product-category standards, documenting species and basis comparability, requiring routine testing, capturing categories FDA excludes or handles separately, and creating a defensible record for standards developers, regulators, retailers, brands, and legal review.

## Internal Links

- Source node: [[sources/fda-ctz-Pb-babyfood-2025]]
- Program node: [[regulations/fda-closer-to-zero]]
- 10 ppb rule detail: [[regulations/fda-ctz-Pb-babyfood-10ppb]]
- 20 ppb root vegetable rule detail: [[regulations/fda-ctz-Pb-rootveg-20ppb]]
- 20 ppb dry infant cereal rule detail: [[regulations/fda-ctz-Pb-cereal-20ppb]]
- Lead metal page: [[metals/lead]]
- Product comparison layer: [[products/regulatory-crosswalk-field-findings]]
