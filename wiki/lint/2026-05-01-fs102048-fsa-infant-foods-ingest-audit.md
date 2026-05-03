---
title: FSA/Fera FS102048 infant-food metals ingest audit
description: Routing and prevention audit for the FSA/Fera 2014 survey of metals in infant foods, infant formula, and non-infant-specific foods.
audience: [researcher, regulator]
updated: 2026-05-01
sources: 1
---

# FSA/Fera FS102048 Infant-Food Metals Ingest Audit

## Trigger

Source PDF: `raw/reports/fsa-fs102048-metals-infant-foods-formula-2014.pdf`, promoted as [[sources/fera2014-fsa-metals-infant-foods-formula]].

This audit records the upfront routing decision for the FS102048 report, why the report is critical to the index, where the index was missing the information, and the rules that should prevent this evidence from being lost or misrouted again.

## Criticality

This is critical because it is a public government survey with a broad analytical panel across infant formula, manufactured infant foods, infant snacks, baby drinks, and common non-infant foods eaten by infants. It fills several Category 1 gaps left by narrower sources: aluminum, nickel, tin, total mercury, total arsenic, inorganic arsenic follow-up, and finished-product evidence for cereals, snacks, fruit, vegetables, meat, fish, mixed meals, and juices.

The report is also a taxonomy stress test. Some rows match the locked HMTc product pages cleanly; the non-infant-specific composites do not. Those composites are valuable, but they belong in future ingredient/app profiles unless an explicit row-level routing rule says otherwise.

## Page routing

| Source table/scope | Destination pages | Routing status |
| --- | --- | --- |
| Table 4a, ready-to-feed liquid infant formula | [[products/infant-formula-rtf-liquid-non-soy]] | Routed as RTF liquid formula evidence. The extracted table does not identify a soy-based RTF subgroup, so [[products/infant-formula-rtf-liquid-soy-based]] was not updated from this source. |
| Table 4b, powdered infant formula | [[products/infant-formula-powder-non-soy]], [[products/infant-formula-powder-soy-based]] | Routed by product form and soy/non-soy label; soy powders such as Infasoy/Wysoy stay separated. |
| Table 5, infant cereals and dry grain foods | [[products/baby-cereals-dry-rice-based]], [[products/baby-cereals-dry-non-rice]] | Routed by rice inclusion and product label. |
| Table 5, teething/snack foods | [[products/teething-and-snacks-rice-based]], [[products/teething-and-snacks-non-rice]] | Routed by rice inclusion and snack format. |
| Table 5, fruit foods and baby drinks | [[products/fruit-purees]], [[products/fruit-juice-not-canned]] | Routed as finished infant products; juice scope stays not-canned. |
| Table 5, vegetable foods | [[products/non-root-vegetable-purees]], [[products/root-vegetable-purees]] | Routed by root/tuber versus non-root vegetable content. |
| Table 5, meat/fish/mixed meals | [[products/meat-and-poultry-purees]], [[products/fish-containing-baby-foods]], [[products/mixed-meals-non-rice]], [[products/mixed-meals-rice-containing]] | Routed by finished-product label, fish inclusion, and rice inclusion. |
| Table 6, non-infant-specific foods often eaten by infants | [[ingredients/index]] | Ingredient/composite nodes created. Values should populate ingredient pages, not product rows, unless an existing product row scope exactly matches. |

## Where the information was missing

- Formula pages had FDA lead/cadmium/total arsenic/total mercury evidence, but still lacked a promoted public source for aluminum, nickel, tin, and inorganic arsenic screening in formula product forms.
- The baby cereal, mixed-meal, snack, fruit, vegetable, meat, fish, and juice pages had broad review evidence or placeholders, but not this government finished-product monitoring source.
- [[products/mixed-meals-non-rice]] and [[products/teething-and-snacks-non-rice]] had no promoted Category 1 source before this ingest.
- Ingredient pages were missing for the non-infant-specific composite food evidence. This has been corrected by creating ingredient/composite nodes and linking them from [[ingredients/index]].

## Handling rules

1. Preserve product form: powder, ready-to-feed liquid, dry cereal, snack, puree, mixed meal, juice, and non-infant composite are distinct routing scopes.
2. Preserve soy/non-soy status for formula. Do not infer soy status where the source table does not provide it.
3. Preserve rice inclusion. Rice-based cereal, rice-containing meals, and rice-based snacks do not collapse into their non-rice clean-counterpart rows.
4. Preserve root versus non-root vegetable routing. Carrot, parsnip, potato, and sweet potato go to root/tuber handling; squash, peas, leafy greens, and similar vegetables do not.
5. Preserve analyte identity: total arsenic is not inorganic arsenic, total mercury is not methylmercury, and total chromium is not chromium VI.
6. Preserve LoD/LoQ semantics. Values prefixed with `~` are semi-quantitative and should not be treated as exact quantified concentrations in app scoring.
7. Preserve basis. Results are reported as sold, not prepared-for-feeding or consumed, unless a future derived dataset explicitly performs that conversion.
8. Keep Table 6 composites out of direct infant-product row distributions unless a row-level rule explicitly admits them as comparator evidence.
9. Public pages may cite the report for category evidence, but must not publish brand rankings, current-market claims, certified-brand claims, HMTc threshold claims, or private COA-derived claims.

## Prevention rules

1. Raw report files must be promoted to `wiki/sources/` or queued in `wiki/lint/` before tests pass.
2. Every product page that cites this source must be mirrored in the source page's `Wiki pages updated on ingest` list.
3. Every source-page routing decision that leaves data out of a product row must explain why, especially for soy/non-soy, rice/non-rice, and infant-product versus non-infant-composite boundaries.
4. Future parser work should require explicit `row_slug`, `basis`, `analyte`, `speciation`, `matrix`, `product_form`, `rice_inclusion`, and `quantitation_flag` fields before a result can influence app scoring.

## Follow-up

- Populate the newly created Table 6 ingredient/composite nodes with structured concentrations after parsing the source tables, preserving less-than and semi-quantitative flags.
- Parse Tables 4-6 into structured rows only after the parser can preserve `~`, `<`, as-sold basis, sample identifiers, product labels, and the triggered inorganic arsenic subset.
- Decide whether finished mixed meals should get finer subrouting for pasta, risotto, meat meals, fish meals, and vegetable meals before any automated app scoring.
