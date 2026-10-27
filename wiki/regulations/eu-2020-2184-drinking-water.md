---
type: regulation
rule_id: eu-2020-2184-drinking-water
jurisdiction: EU
agency: "European Union"
program: "Drinking Water Directive"
metal: [Sb, tAs, Cd, Cr-total, Pb, tHg, Ni, Al]
matrix: drinking-water
limit_value: multiple
limit_unit: "µg/l"
status: active
effective_date: 2021-01-12
sunset_date: null
source_refs: ["[[sources/europeancommission2020-drinking-water-directive]]"]
updated: 2026-08-06
audience: [regulator, educator, commercial, app, legal]
hero_image: /static/heroes/clear-solution-unmarked-bottle.webp
hero_image_alt: "A sealed unmarked clear solution bottle and a separate closed vial containing colorless liquid illustrating eu 2020 2184 drinking water research context."
dek: "An EU drinking water directive setting metal parametric values, analytical performance requirements and transitional provisions for lead and chromium."
---

# EU Directive 2020/2184 - drinking-water parametric values

## Scope

Directive (EU) 2020/2184 sets minimum requirements for the quality of water intended for human consumption in the European Union. Article 5 requires Member States to set values for the parameters in Annex I that are no less stringent than the directive's values. The directive covers drinking water supplied to consumers and also requires producers of water put into bottles or containers to comply with Articles 1 to 5 and Annex I Parts A and B, while preserving separate treatment for natural mineral and spring waters where EU law provides it.

## Exact limit and units

The values below are transcribed from Annex I. Arsenic is recorded as total arsenic (`tAs`) because the directive states "arsenic" without speciation; mercury is recorded as total mercury (`tHg`) for the same reason; chromium is recorded as `Cr-total` because the directive states "chromium" without a hexavalent-chromium split.

| Metal | Matrix | Limit | Unit | Basis |
| --- | --- | ---: | --- | --- |
| Antimony | Water intended for human consumption | 10 | µg/l | water intended for human consumption |
| Arsenic | Water intended for human consumption | 10 | µg/l | water intended for human consumption |
| Cadmium | Water intended for human consumption | 5,0 | µg/l | water intended for human consumption |
| Chromium | Water intended for human consumption | 25 | µg/l | water intended for human consumption |
| Lead | Water intended for human consumption | 5 | µg/l | water intended for human consumption |
| Mercury | Water intended for human consumption | 1,0 | µg/l | water intended for human consumption |
| Nickel | Water intended for human consumption | 20 | µg/l | water intended for human consumption |
| Uranium | Water intended for human consumption | 30 | µg/l | water intended for human consumption |
| Aluminium | Indicator parameter for water intended for human consumption | 200 | µg/l | water intended for human consumption |

The chromium value of 25 µg/l and lead value of 5 µg/l must be met by 12 January 2036. Until that date, the directive states transitional values of 50 µg/l for chromium and 10 µg/l for lead.

Uranium is shown for completeness because the directive lists it, but it is not loaded into `data/evidence/regulatory_limits.csv` because `U` is outside the controlled `metal_species` vocabulary for this ingest.

## How tested

Annex III gives performance characteristics for methods of analysis rather than prescribing one named method for each metal. For the metals above, Annex III Part B lists uncertainty-of-measurement requirements for aluminium, antimony, arsenic, cadmium, chromium, lead, mercury, nickel, and uranium. The directive's testing provisions are water-analysis provisions and do not substitute for food-matrix digestion, speciation, or recovery requirements.

## Enforcement posture

The directive binds EU Member States to transpose and enforce drinking-water quality requirements through national law. Article 5 requires Member State parametric values to be at least as stringent as Annex I. Article 14 requires remedial action when parametric values are not met, and Article 23 requires Member States to establish penalties for infringements of national provisions adopted under the directive.

## History of changes

Directive (EU) 2020/2184 was adopted on 16 December 2020, published in the Official Journal on 23 December 2020, and entered into force on 12 January 2021. Member States were required to transpose most provisions by 12 January 2023. The directive repealed Directive 98/83/EC with effect from 13 January 2023, while allowing existing derogations to continue under the transitional rules stated in Article 26.

## How it compares

The EU drinking-water values are concentration limits for water, not food maximum levels. They are therefore most comparable to other drinking-water rules such as Canadian maximum acceptable concentrations or US EPA maximum contaminant levels. They should not be substituted for food-specific EU Regulation 2023/915 contaminant maximum levels or for bottled-water rules from jurisdictions that regulate packaged water through food law.

## Sources

- [[sources/europeancommission2020-drinking-water-directive]]

## Additional instrument directories

- [[regulations/eu-drinking-water-directive-98-83-ec|EU drinking-water Directive 98/83/EC: historical record]]

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [19f96492d](https://github.com/paleofoundation/heavymetalindex/commit/19f96492d) | 2026-08-06 | major | 1 source added; contamination-profile values revised; 8 sections added |
<!-- END: hmi-page-history -->
