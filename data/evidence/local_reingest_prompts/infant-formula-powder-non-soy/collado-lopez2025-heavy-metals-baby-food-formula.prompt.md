# Local Evidence Extraction Task

Source ID: collado-lopez2025-heavy-metals-baby-food-formula
Source title: Concentrations of Heavy Metals in Processed Baby Foods and Infant Formulas Worldwide: A Scoping Review
Product target: infant-formula-powder-non-soy
Local PDF: ../../../../Desktop/heavy-metal-index/raw/studies/nuaf138.pdf

## Task
Extract source-stated product concentration values into candidate rows only.

## Required output
Return JSON with this shape:

```json
{
  "source_id": "collado-lopez2025-heavy-metals-baby-food-formula",
  "product_slug": "infant-formula-powder-non-soy",
  "candidate_values": [
    {
      "source_product_label": "",
      "metal_species": "Pb|Cd|tAs|iAs|tHg|MeHg|Al|Ni|Sn|Cr-total|Cr-VI",
      "basis": "as_sold|prepared_for_feeding|as_consumed|as_sold_or_source_reported|not_reported",
      "n": "",
      "n_text": "",
      "statistic_type": "source_reported_mean|source_reported_median|source_reported_range|source_reported_percentile|sample_value|other",
      "mean_ppb": "",
      "median_ppb": "",
      "min_ppb": "",
      "max_ppb": "",
      "p50_ppb": "",
      "p90_ppb": "",
      "p95_ppb": "",
      "censoring_status": "",
      "row_fit": "direct_category1_row|literature_summary_row|broad_formula_context|context_only|needs_review",
      "quote_trace": "",
      "notes": ""
    }
  ],
  "blocked_items": [
    {
      "reason": "",
      "quote_trace": ""
    }
  ]
}
```

## Guardrails
- Do not infer p50, p90, or p95.
- Do not convert total arsenic into inorganic arsenic.
- Do not convert total mercury into methylmercury.
- Do not pool powder/liquid or soy/non-soy rows unless the source explicitly does so.
- Keep broad formula rows as candidates needing row-fit review.
- Include a quote trace for every candidate.
- If a value is not source-stated or reconstructable from a table row, put it in blocked_items.

## Packet context

```text

Concentrations of Heavy Metals in Processed Baby Foods and
Infant Formulas Worldwide: A Scoping Review
Sonia Collado-L�opez 1; Mar�ıa Fernanda Rodr�ıguez Hern�andez2; Rosa Mar�ıa Mariscal-Moreno�,2;
Martha Mar�ıa T�ellez-Rojo1; Larissa Betanzos-Robledo 3; Mois�es Reyes Luna4; Alejandra Cantoral-
Preciado 2
1

---


                    The aim of this study was to synthesize the global evidence of heavy metal (HM)
                    concentrations in baby foods and infant formulas. The toxic HMs lead (Pb), cad­
                    mium (Cd), arsenic (As), and mercury (Hg) have been detected in baby foods and
                    infant formulas, raising health concerns. Advanced searches were performed. Baby
                    foods were classified into 7 groups according to their primary ingredient. Infant for­
                    mulas were classified as: Stage 1 (<6 months), stage 2 (6–12 months), stage 3

---

                    The aim of this study was to synthesize the global evidence of heavy metal (HM)
                    concentrations in baby foods and infant formulas. The toxic HMs lead (Pb), cad­
                    mium (Cd), arsenic (As), and mercury (Hg) have been detected in baby foods and
                    infant formulas, raising health concerns. Advanced searches were performed. Baby
                    foods were classified into 7 groups according to their primary ingredient. Infant for­
                    mulas were classified as: Stage 1 (<6 months), stage 2 (6–12 months), stage 3
                    (>12–36 months), and specialty. Median concentrations and interquartile ranges

---

                    concentrations in baby foods and infant formulas. The toxic HMs lead (Pb), cad­
                    mium (Cd), arsenic (As), and mercury (Hg) have been detected in baby foods and
                    infant formulas, raising health concerns. Advanced searches were performed. Baby
                    foods were classified into 7 groups according to their primary ingredient. Infant for­
                    mulas were classified as: Stage 1 (<6 months), stage 2 (6–12 months), stage 3
                    (>12–36 months), and specialty. Median concentrations and interquartile ranges
                    were calculated for each classification. The percentage of items by category exceed­

---

                    foods were classified into 7 groups according to their primary ingredient. Infant for­
                    mulas were classified as: Stage 1 (<6 months), stage 2 (6–12 months), stage 3
                    (>12–36 months), and specialty. Median concentrations and interquartile ranges
                    were calculated for each classification. The percentage of items by category exceed­
                    ing the International Maximum Levels (MLs) was obtained. Seventy-five studies
                    were included in the scoping review, which in total examined 580 baby foods and
                    251 infant formulas. Pb, Cd, and As were detected in over 60% of baby foods. The

---

                    ing the International Maximum Levels (MLs) was obtained. Seventy-five studies
                    were included in the scoping review, which in total examined 580 baby foods and
                    251 infant formulas. Pb, Cd, and As were detected in over 60% of baby foods. The
                    highest Pb median was found in rice mixes and fish mixes (0.008 mg/kg each),
                    with >20% of their items exceeding the Pb ML. The highest Cd median was found
                    in cereals (0.013 mg/kg) and mixes of various foods (0.008 mg/kg), with >17% of
                    their items exceeding the Cd ML. For As, the highest median was found in mixed

---

                    were included in the scoping review, which in total examined 580 baby foods and
                    251 infant formulas. Pb, Cd, and As were detected in over 60% of baby foods. The
                    highest Pb median was found in rice mixes and fish mixes (0.008 mg/kg each),
                    with >20% of their items exceeding the Pb ML. The highest Cd median was found
                    in cereals (0.013 mg/kg) and mixes of various foods (0.008 mg/kg), with >17% of
                    their items exceeding the Cd ML. For As, the highest median was found in mixed
                    fish (0.165 mg/kg) and rice mixes (0.048 mg/kg), with 89% and 30% of items

---

                    251 infant formulas. Pb, Cd, and As were detected in over 60% of baby foods. The
                    highest Pb median was found in rice mixes and fish mixes (0.008 mg/kg each),
                    with >20% of their items exceeding the Pb ML. The highest Cd median was found
                    in cereals (0.013 mg/kg) and mixes of various foods (0.008 mg/kg), with >17% of
                    their items exceeding the Cd ML. For As, the highest median was found in mixed
                    fish (0.165 mg/kg) and rice mixes (0.048 mg/kg), with 89% and 30% of items
                    exceeding the As ML, respectively. For infant formulas, Pb, Cd, and As were

---

                    highest Pb median was found in rice mixes and fish mixes (0.008 mg/kg each),
                    with >20% of their items exceeding the Pb ML. The highest Cd median was found
                    in cereals (0.013 mg/kg) and mixes of various foods (0.008 mg/kg), with >17% of
                    their items exceeding the Cd ML. For As, the highest median was found in mixed
                    fish (0.165 mg/kg) and rice mixes (0.048 mg/kg), with 89% and 30% of items
                    exceeding the As ML, respectively. For infant formulas, Pb, Cd, and As were
                    detected in >60% of items. The highest Pb median concentrations were found in

---

                    with >20% of their items exceeding the Pb ML. The highest Cd median was found
                    in cereals (0.013 mg/kg) and mixes of various foods (0.008 mg/kg), with >17% of
                    their items exceeding the Cd ML. For As, the highest median was found in mixed
                    fish (0.165 mg/kg) and rice mixes (0.048 mg/kg), with 89% and 30% of items
                    exceeding the As ML, respectively. For infant formulas, Pb, Cd, and As were
                    detected in >60% of items. The highest Pb median concentrations were found in
                    stages 1 and 2 (0.015 mg/kg each), with >60% of their items exceeding the Pb

---

                    in cereals (0.013 mg/kg) and mixes of various foods (0.008 mg/kg), with >17% of
                    their items exceeding the Cd ML. For As, the highest median was found in mixed
                    fish (0.165 mg/kg) and rice mixes (0.048 mg/kg), with 89% and 30% of items
                    exceeding the As ML, respectively. For infant formulas, Pb, Cd, and As were
                    detected in >60% of items. The highest Pb median concentrations were found in
                    stages 1 and 2 (0.015 mg/kg each), with >60% of their items exceeding the Pb
                    MLs. For As, without-stage (0.052 mg/kg) had the highest median, with >71% of

---

                    their items exceeding the Cd ML. For As, the highest median was found in mixed
                    fish (0.165 mg/kg) and rice mixes (0.048 mg/kg), with 89% and 30% of items
                    exceeding the As ML, respectively. For infant formulas, Pb, Cd, and As were
                    detected in >60% of items. The highest Pb median concentrations were found in
                    stages 1 and 2 (0.015 mg/kg each), with >60% of their items exceeding the Pb
                    MLs. For As, without-stage (0.052 mg/kg) had the highest median, with >71% of
                    items exceeding the As ML. Fifteen studies reported the health risks related to

---

                    fish (0.165 mg/kg) and rice mixes (0.048 mg/kg), with 89% and 30% of items
                    exceeding the As ML, respectively. For infant formulas, Pb, Cd, and As were
                    detected in >60% of items. The highest Pb median concentrations were found in
                    stages 1 and 2 (0.015 mg/kg each), with >60% of their items exceeding the Pb
                    MLs. For As, without-stage (0.052 mg/kg) had the highest median, with >71% of
                    items exceeding the As ML. Fifteen studies reported the health risks related to
                    intake of various foods: significant risks were identified for infants ≥6 months for

---

                    exceeding the As ML, respectively. For infant formulas, Pb, Cd, and As were
                    detected in >60% of items. The highest Pb median concentrations were found in
                    stages 1 and 2 (0.015 mg/kg each), with >60% of their items exceeding the Pb
                    MLs. For As, without-stage (0.052 mg/kg) had the highest median, with >71% of
                    items exceeding the As ML. Fifteen studies reported the health risks related to
                    intake of various foods: significant risks were identified for infants ≥6 months for
                    rice products, and ≤12 months stage 1 and 2 formulas. This review highlights

---

                    detected in >60% of items. The highest Pb median concentrations were found in
                    stages 1 and 2 (0.015 mg/kg each), with >60% of their items exceeding the Pb
                    MLs. For As, without-stage (0.052 mg/kg) had the highest median, with >71% of
                    items exceeding the As ML. Fifteen studies reported the health risks related to
                    intake of various foods: significant risks were identified for infants ≥6 months for
                    rice products, and ≤12 months stage 1 and 2 formulas. This review highlights
                    widespread HM presence in baby foods and infant formulas. Exceedances of the

---

                    intake of various foods: significant risks were identified for infants ≥6 months for
                    rice products, and ≤12 months stage 1 and 2 formulas. This review highlights
                    widespread HM presence in baby foods and infant formulas. Exceedances of the
                    ML were particularly notable in rice products for infants >6 months and infant for­
                    mulas for babies ≤12 months of age.
                    Key words: heavy metals, baby food, infant formulas, lead, cadmium, arsenic, mercury.


---

                    rice products, and ≤12 months stage 1 and 2 formulas. This review highlights
                    widespread HM presence in baby foods and infant formulas. Exceedances of the
                    ML were particularly notable in rice products for infants >6 months and infant for­
                    mulas for babies ≤12 months of age.
                    Key words: heavy metals, baby food, infant formulas, lead, cadmium, arsenic, mercury.



---

                    ML were particularly notable in rice products for infants >6 months and infant for­
                    mulas for babies ≤12 months of age.
                    Key words: heavy metals, baby food, infant formulas, lead, cadmium, arsenic, mercury.





---

                        INTRODUCTION                         International Maximum Levels (MLs) for specific con­
                                                             taminants like Pb, Cd, and As in some baby foods and
Heavy metals (HMs), like lead (Pb), cadmium (Cd),            infant formulas.19–22
mercury (Hg), and the metalloid arsenic (As) (all                 Given the international concern about the presence
referred to as HMs in this study), are toxic elements        of HMs in food, their toxic effects on children’s health,
widely distributed in the environment.1 Due to their         and the substantial growth in global sales of baby foods
high toxicity, these elements are prioritized as critical    and infant formulas, we identified a critical need to

---

                                                             taminants like Pb, Cd, and As in some baby foods and
Heavy metals (HMs), like lead (Pb), cadmium (Cd),            infant formulas.19–22
mercury (Hg), and the metalloid arsenic (As) (all                 Given the international concern about the presence
referred to as HMs in this study), are toxic elements        of HMs in food, their toxic effects on children’s health,
widely distributed in the environment.1 Due to their         and the substantial growth in global sales of baby foods
high toxicity, these elements are prioritized as critical    and infant formulas, we identified a critical need to
public human and environmental health concerns.2 As          compile the evidence for the presence of HMs in this

---

referred to as HMs in this study), are toxic elements        of HMs in food, their toxic effects on children’s health,
widely distributed in the environment.1 Due to their         and the substantial growth in global sales of baby foods
high toxicity, these elements are prioritized as critical    and infant formulas, we identified a critical need to
public human and environmental health concerns.2 As          compile the evidence for the presence of HMs in this
systemic toxicants, they can cause damage to multiple        type of food product. Therefore, this scoping review
organ systems, even at low exposure levels.3 The risk        (ScR) aimed to synthesize the scope of the global evi­
associated with HM exposure is of particular concern in      dence for the presence of HMs, specifically Pb, Cd, As,

---

and (compared with adults) their higher food consump­        global evidence distribution; second, we identified the
tion per kilogram of body weight.4 During infancy, HM        HM most frequently studied, and the specific types of
exposure is linked to mental retardation, neurocognitive     baby foods and infant formulas containing HMs; and
and behavioral disorders, respiratory issues, and cardio­    third, we quantified the reported concentrations of
vascular diseases.5                                          these HMs in each product and compared these concen­
     Exposure to HMs in infancy can occur as early as        trations with the ML established by international regu­
during the prenatal stage, through the diet and environ­     latory guidelines. Additionally, we identified the studies

---

intake becomes one of an infant’s primary sources of
exposure.7,8                                                 The design of this ScR followed the Joanna Briggs
     The high presence of HMs in processed baby foods        Institute (JBI) methodology guidelines for conducting
(referred to as baby foods in this study) and infant for­    ScRs23 and the PRISMA Extension for ScR (PRISMA-
mula has raised concerns about dietary exposure in           ScR) 2020 Checklist.24 These guidelines were applied
babies and toddlers.9,10 In this regard, in 2019, a non­     across all sections and aspects of the process, including
profit organization identified toxic HMs in 95% of 168       defining objectives, formulating review questions, meth­

---

mula has raised concerns about dietary exposure in           ScR) 2020 Checklist.24 These guidelines were applied
babies and toddlers.9,10 In this regard, in 2019, a non­     across all sections and aspects of the process, including
profit organization identified toxic HMs in 95% of 168       defining objectives, formulating review questions, meth­
foods tested from a wide range of brands consumed by         ods, data extraction, evidence analysis, and results pre­
babies and toddlers.11 There was particularly concern        sentation. In October 2024, the ScR Protocol was
about rice-based foods, commonly used in baby food           registered in the Open Science Framework (OSF) (osf.
production, which often contain elevated As concentra­       io/xt2gv).

---

babies and toddlers.9,10 In this regard, in 2019, a non­     across all sections and aspects of the process, including
profit organization identified toxic HMs in 95% of 168       defining objectives, formulating review questions, meth­
foods tested from a wide range of brands consumed by         ods, data extraction, evidence analysis, and results pre­
babies and toddlers.11 There was particularly concern        sentation. In October 2024, the ScR Protocol was
about rice-based foods, commonly used in baby food           registered in the Open Science Framework (OSF) (osf.
production, which often contain elevated As concentra­       io/xt2gv).
tions and are often among the first solid foods to be

---

demand for infant and toddler foods, including formula       concepts investigated were the concentrations of HMs
and other processed foods, has risen, with market reve­      (specifically Pb, Cd, As, and Hg) and the types of baby
nue expected to exceed $120 billion by 2030.15 While         foods and infant formulas identified as containing these
the nutritional composition of infant formula is regu­       HMs; the context encompassed global research from
lated under the International Code of Marketing of           any country with information on this topic.
Breast Milk Substitutes16 and other global agencies,17,18         Eligible studies included peer-reviewed research
there is no strict global monitoring for HM content in       articles (eg, toxicological studies, analytical, cross-

---

and other processed foods, has risen, with market reve­      (specifically Pb, Cd, As, and Hg) and the types of baby
nue expected to exceed $120 billion by 2030.15 While         foods and infant formulas identified as containing these
the nutritional composition of infant formula is regu­       HMs; the context encompassed global research from
lated under the International Code of Marketing of           any country with information on this topic.
Breast Milk Substitutes16 and other global agencies,17,18         Eligible studies included peer-reviewed research
there is no strict global monitoring for HM content in       articles (eg, toxicological studies, analytical, cross-
baby foods and infant formulas. However, international       sectional or longitudinal studies, or laboratory-based
```
