---
type: regulation
rule_id: oehha-lead-prop65
jurisdiction: US-CA
agency: OEHHA
program: Proposition 65
metal: Pb
matrix: all-consumer-products
limit_value: multiple
limit_unit: ug/day
status: in-force
effective_date: null
sunset_date: null
source_refs: ["[[sources/oehha-lead-prop65-listing]]"]
title: "California Proposition 65 — Lead and Lead Compounds Listing"
updated: 2026-05-03
audience: [regulator, educator]
---

# California Proposition 65 — Lead and Lead Compounds Listing

Lead and lead compounds are listed under California's Proposition 65 in two separate categories: as chemicals known to the state to cause cancer, and as chemicals known to the state to cause reproductive toxicity (developmental, male, and female endpoints) ([[sources/oehha-lead-prop65-listing|OEHHA Prop 65 Pb]]). OEHHA lists an oral No Significant Risk Level (NSRL) of 15 ug/day for cancer and a Maximum Allowable Dose Level (MADL) of 0.5 ug/day for reproductive toxicity. Consumer products sold in California that expose a consumer above the relevant threshold must carry a Prop 65 warning unless another valid safe-harbor or exposure showing applies.

For infant and child foods, HMI uses the 0.5 ug/day lead MADL as the operative screening value because it is far stricter than the oral cancer NSRL. Prop 65 does not set food-category ppb limits, so HMI converts the MADL into a ppb equivalent only when a daily intake assumption is stated.

## Listing categories

Listing status from [[sources/oehha-lead-prop65-listing|OEHHA Prop 65 Pb]]:

| Category | Status / value |
| --- | --- |
| Cancer | Currently listed |
| Reproductive toxicity (developmental) | Currently listed |
| Reproductive toxicity (male) | Currently listed |
| Reproductive toxicity (female) | Currently listed |
| NSRL (cancer, oral) | 15 ug/day |
| MADL (reproductive toxicity) | 0.5 ug/day |

## Food ppb conversion

For food comparisons, HMI uses:

```text
lead ppb equivalent = 500 ÷ grams consumed per day
```

This is a transparent exposure conversion, not a Prop 65 food-category concentration limit. Example: at 110 g/day of puree, the 0.5 ug/day MADL corresponds to about 4.5 ppb lead.

## Sources

- [[sources/oehha-lead-prop65-listing|OEHHA Prop 65 Pb]] — OEHHA. Lead and Lead Compounds, Proposition 65 chemical listing.
