# Local Evidence Extraction Task

Source ID: pandelova2012-eu-baby-food-formula-elements
Source title: Ca, Cd, Cu, Fe, Hg, Mn, Ni, Pb, Se, and Zn contents in baby foods from the EU market: Comparison of assessed infant intakes with the present safety limits for minerals and trace elements
Product target: infant-formula-powder-non-soy
Local PDF: raw/studies/pandelova2012.pdf

## Task
Extract source-stated product concentration values into candidate rows only.

## Required output
Return JSON with this shape:

```json
{
  "source_id": "pandelova2012-eu-baby-food-formula-elements",
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
A R T I C L E I N F O                                    A B S T R A C T

Article history:                                         In this study calcium (Ca), cadmium (Cd), copper (Cu), iron (Fe), mercury (Hg), manganese (Mn), nickel
Received 17 October 2011                                 (Ni), lead (Pb), selenium (Se), and zinc (Zn) were determined in most consumed baby foods in Europe
Received in revised form 9 March 2012                    including infant formulae and solid foods and beverages (SFB). Additionally, Cd and Zn contents were
Accepted 25 April 2012
                                                         determined in baby foods from the ‘‘national baskets’’ of four selected countries (Italy, Spain, Slovakia,

---


Article history:                                         In this study calcium (Ca), cadmium (Cd), copper (Cu), iron (Fe), mercury (Hg), manganese (Mn), nickel
Received 17 October 2011                                 (Ni), lead (Pb), selenium (Se), and zinc (Zn) were determined in most consumed baby foods in Europe
Received in revised form 9 March 2012                    including infant formulae and solid foods and beverages (SFB). Additionally, Cd and Zn contents were
Accepted 25 April 2012
                                                         determined in baby foods from the ‘‘national baskets’’ of four selected countries (Italy, Spain, Slovakia,
                                                         and Sweden). Overall, highest element levels were found in the soy-based infant formulae. Furthermore,

---

Article history:                                         In this study calcium (Ca), cadmium (Cd), copper (Cu), iron (Fe), mercury (Hg), manganese (Mn), nickel
Received 17 October 2011                                 (Ni), lead (Pb), selenium (Se), and zinc (Zn) were determined in most consumed baby foods in Europe
Received in revised form 9 March 2012                    including infant formulae and solid foods and beverages (SFB). Additionally, Cd and Zn contents were
Accepted 25 April 2012
                                                         determined in baby foods from the ‘‘national baskets’’ of four selected countries (Italy, Spain, Slovakia,
                                                         and Sweden). Overall, highest element levels were found in the soy-based infant formulae. Furthermore,
Keywords:                                                the assessed daily/weekly intakes of the 0–9-month-old non-breast-fed infants were compared with the

---

Accepted 25 April 2012
                                                         determined in baby foods from the ‘‘national baskets’’ of four selected countries (Italy, Spain, Slovakia,
                                                         and Sweden). Overall, highest element levels were found in the soy-based infant formulae. Furthermore,
Keywords:                                                the assessed daily/weekly intakes of the 0–9-month-old non-breast-fed infants were compared with the
Minerals
                                                         current safety limits of the 10 elements here analyzed. Assessment to Cd exposure to infants consuming
Micronutrients

---

Trace element
                                                         commercial SFB was found to exceed the limit established by the European Food Safety Authority (EFSA)
Heavy metal contamination in food                        of a tolerable weekly intake (TWI) of 2.5 mg Cd/kg bw. Furthermore, mercury acquisition higher than the
Recommended dietary allowance                            Joint FAO/WHO Expert Committee of Food Additives (JECFA) established provisional tolerable weekly
Food analysis                                            intake (PTWI) of 4 mg Hg/kg bw was determined for infants fed speciﬁcally with ‘‘follow on’’ milk infant
Infant                                                   formula. In regard to the estimated infant intakes of the non-essential (Pb and Ni) and the essential (Ca,
Infant formula                                           Cu, Fe, Mn, Se and Zn) elements the values were within the safety limits.

---

Food analysis                                            intake (PTWI) of 4 mg Hg/kg bw was determined for infants fed speciﬁcally with ‘‘follow on’’ milk infant
Infant                                                   formula. In regard to the estimated infant intakes of the non-essential (Pb and Ni) and the essential (Ca,
Infant formula                                           Cu, Fe, Mn, Se and Zn) elements the values were within the safety limits.
Baby food                                                                                                                ß 2012 Elsevier Inc. All rights reserved.
Exposure
Europe
Food safety

---

                                                                                          women breastfeed their infants exclusively at 6 months of age, and
                                                                                          only 33% of infants in the USA are exclusively breastfed up to 3
   During infancy, breast milk and infant formulae are the major
                                                                                          months of age (Cattaneo, 2004). An increasing number of mothers
source of nutrients for infants (Ikem et al., 2002). Although the
                                                                                          feed their babies with industrially processed formula milk or solids
World Health Organization (WHO) recommends breastfeeding as

---

                                                                                          feed their babies with industrially processed formula milk or solids
World Health Organization (WHO) recommends breastfeeding as
                                                                                          such as vegetables and meat or ﬁsh purée, so that in recent years
the best feeding choice (WHO, 2008), infant formulae are an
                                                                                          the baby food market and the assortment of products offered have
alternative to breast-milk that often play an important role in the
                                                                                          grown signiﬁcantly. Since the ﬁrst year of life is a sensitive period

---

World Health Organization (WHO) recommends breastfeeding as
                                                                                          such as vegetables and meat or ﬁsh purée, so that in recent years
the best feeding choice (WHO, 2008), infant formulae are an
                                                                                          the baby food market and the assortment of products offered have
alternative to breast-milk that often play an important role in the
                                                                                          grown signiﬁcantly. Since the ﬁrst year of life is a sensitive period
                                                                                          in the human development of the nervous, reproductive, digestive,

---

                                                                                          in the human development of the nervous, reproductive, digestive,
Abbreviations: ATSDR, Agency for Toxic Substance and Disease Registry; bw, body           respiratory and immune systems, the composition of baby foods
weight; Ca, calcium; Cd, cadmium; Cu, copper; dw, dry weight; EFSA, European              and their consumption pattern are crucial.
Food Safety Authority; EU, European Union; Fe, iron; fHAf, ‘‘follow-on’’ hypoaller-           Despite the beneﬁts of infant formulas as a major source of food
genic-based infant formula; fMf, ‘‘follow-on’’ milk-based infant formula; fSf,            for infants, the presence of contaminants, such as heavy metals,
‘‘follow-on’’ soy-based infant formula; fw, fresh weight; HAf, hypoallergenic-based
                                                                                          may pose health risks to children (Souad et al., 2006; Tripathi et al.,

---

Abbreviations: ATSDR, Agency for Toxic Substance and Disease Registry; bw, body           respiratory and immune systems, the composition of baby foods
weight; Ca, calcium; Cd, cadmium; Cu, copper; dw, dry weight; EFSA, European              and their consumption pattern are crucial.
Food Safety Authority; EU, European Union; Fe, iron; fHAf, ‘‘follow-on’’ hypoaller-           Despite the beneﬁts of infant formulas as a major source of food
genic-based infant formula; fMf, ‘‘follow-on’’ milk-based infant formula; fSf,            for infants, the presence of contaminants, such as heavy metals,
‘‘follow-on’’ soy-based infant formula; fw, fresh weight; HAf, hypoallergenic-based
                                                                                          may pose health risks to children (Souad et al., 2006; Tripathi et al.,
infant formula; HFCS, high fructose corn syrup; Hg, mercury; JECFA, Joint FAO/WHO

---

weight; Ca, calcium; Cd, cadmium; Cu, copper; dw, dry weight; EFSA, European              and their consumption pattern are crucial.
Food Safety Authority; EU, European Union; Fe, iron; fHAf, ‘‘follow-on’’ hypoaller-           Despite the beneﬁts of infant formulas as a major source of food
genic-based infant formula; fMf, ‘‘follow-on’’ milk-based infant formula; fSf,            for infants, the presence of contaminants, such as heavy metals,
‘‘follow-on’’ soy-based infant formula; fw, fresh weight; HAf, hypoallergenic-based
                                                                                          may pose health risks to children (Souad et al., 2006; Tripathi et al.,
infant formula; HFCS, high fructose corn syrup; Hg, mercury; JECFA, Joint FAO/WHO
Expert Committee of Food Additives; Mf, milk-based infant formula; Mn,                    2001). Moreover, infants tend to be exposed to relatively higher

---

Food Safety Authority; EU, European Union; Fe, iron; fHAf, ‘‘follow-on’’ hypoaller-           Despite the beneﬁts of infant formulas as a major source of food
genic-based infant formula; fMf, ‘‘follow-on’’ milk-based infant formula; fSf,            for infants, the presence of contaminants, such as heavy metals,
‘‘follow-on’’ soy-based infant formula; fw, fresh weight; HAf, hypoallergenic-based
                                                                                          may pose health risks to children (Souad et al., 2006; Tripathi et al.,
infant formula; HFCS, high fructose corn syrup; Hg, mercury; JECFA, Joint FAO/WHO
Expert Committee of Food Additives; Mf, milk-based infant formula; Mn,                    2001). Moreover, infants tend to be exposed to relatively higher
manganese; Ni, nickel; Pb, lead; PTWI, provisional tolerable weekly intake; RDI,          levels of food chemicals, since they consume more food than adults

---

‘‘follow-on’’ soy-based infant formula; fw, fresh weight; HAf, hypoallergenic-based
                                                                                          may pose health risks to children (Souad et al., 2006; Tripathi et al.,
infant formula; HFCS, high fructose corn syrup; Hg, mercury; JECFA, Joint FAO/WHO
Expert Committee of Food Additives; Mf, milk-based infant formula; Mn,                    2001). Moreover, infants tend to be exposed to relatively higher
manganese; Ni, nickel; Pb, lead; PTWI, provisional tolerable weekly intake; RDI,          levels of food chemicals, since they consume more food than adults
recommended daily intake; RF, radio frequency; SCF, Scientiﬁc Committee for Food;         relative to their body weight. Thus, a child can absorb as much as
Se, selenium; Sf, soy-based infant formula; TDI, tolerable daily intake; TWI,

---

                                                                                          may pose health risks to children (Souad et al., 2006; Tripathi et al.,
infant formula; HFCS, high fructose corn syrup; Hg, mercury; JECFA, Joint FAO/WHO
Expert Committee of Food Additives; Mf, milk-based infant formula; Mn,                    2001). Moreover, infants tend to be exposed to relatively higher
manganese; Ni, nickel; Pb, lead; PTWI, provisional tolerable weekly intake; RDI,          levels of food chemicals, since they consume more food than adults
recommended daily intake; RF, radio frequency; SCF, Scientiﬁc Committee for Food;         relative to their body weight. Thus, a child can absorb as much as
Se, selenium; Sf, soy-based infant formula; TDI, tolerable daily intake; TWI,
                                                                                          50% of the lead present in food, whereas an adult takes up only 10%

---

infant formula; HFCS, high fructose corn syrup; Hg, mercury; JECFA, Joint FAO/WHO
Expert Committee of Food Additives; Mf, milk-based infant formula; Mn,                    2001). Moreover, infants tend to be exposed to relatively higher
manganese; Ni, nickel; Pb, lead; PTWI, provisional tolerable weekly intake; RDI,          levels of food chemicals, since they consume more food than adults
recommended daily intake; RF, radio frequency; SCF, Scientiﬁc Committee for Food;         relative to their body weight. Thus, a child can absorb as much as
Se, selenium; Sf, soy-based infant formula; TDI, tolerable daily intake; TWI,
                                                                                          50% of the lead present in food, whereas an adult takes up only 10%
tolerable weekly intake; UL, tolerable upper limit; WHO, World Health Organiza-

---

manganese; Ni, nickel; Pb, lead; PTWI, provisional tolerable weekly intake; RDI,          levels of food chemicals, since they consume more food than adults
recommended daily intake; RF, radio frequency; SCF, Scientiﬁc Committee for Food;         relative to their body weight. Thus, a child can absorb as much as
Se, selenium; Sf, soy-based infant formula; TDI, tolerable daily intake; TWI,
                                                                                          50% of the lead present in food, whereas an adult takes up only 10%
tolerable weekly intake; UL, tolerable upper limit; WHO, World Health Organiza-
tion; Zn, zinc.
                                                                                          (CEC, 2003). There is evidence that vegetables are able to

---

recommended daily intake; RF, radio frequency; SCF, Scientiﬁc Committee for Food;         relative to their body weight. Thus, a child can absorb as much as
Se, selenium; Sf, soy-based infant formula; TDI, tolerable daily intake; TWI,
                                                                                          50% of the lead present in food, whereas an adult takes up only 10%
tolerable weekly intake; UL, tolerable upper limit; WHO, World Health Organiza-
tion; Zn, zinc.
                                                                                          (CEC, 2003). There is evidence that vegetables are able to
   * Corresponding author. Tel.: +49 89 3187 2932; fax: +49 89 3187 3371.                 accumulate mercury, lead, cadmium, zinc, and copper in their

---

tolerable weekly intake; UL, tolerable upper limit; WHO, World Health Organiza-
tion; Zn, zinc.
                                                                                          (CEC, 2003). There is evidence that vegetables are able to
   * Corresponding author. Tel.: +49 89 3187 2932; fax: +49 89 3187 3371.                 accumulate mercury, lead, cadmium, zinc, and copper in their
     E-mail address: pandelova@helmholtz-muenchen.de (M. Pandelova).                      edible and inedible parts at various concentration levels (Zheng

0889-1575/$ – see front matter ß 2012 Elsevier Inc. All rights reserved.

---

tion; Zn, zinc.
                                                                                          (CEC, 2003). There is evidence that vegetables are able to
   * Corresponding author. Tel.: +49 89 3187 2932; fax: +49 89 3187 3371.                 accumulate mercury, lead, cadmium, zinc, and copper in their
     E-mail address: pandelova@helmholtz-muenchen.de (M. Pandelova).                      edible and inedible parts at various concentration levels (Zheng

0889-1575/$ – see front matter ß 2012 Elsevier Inc. All rights reserved.
http://dx.doi.org/10.1016/j.jfca.2012.04.011

---



et al., 2007). Mercury, and in particular methylmercury, poses a                tion according to age in months of the non-breast-fed infant (solids
risk to public health; for example, it can affect the development of            and beverages).
the infant brain and can cause neurological changes in adults
(Jedrychowski et al., 2006). Negative effects on the behavior and               2.1.1. ‘‘EU basket’’
intelligence of children are found at lower levels of lead exposure                To identify the holding companies and their main brands from

---

the infant brain and can cause neurological changes in adults
(Jedrychowski et al., 2006). Negative effects on the behavior and               2.1.1. ‘‘EU basket’’
intelligence of children are found at lower levels of lead exposure                To identify the holding companies and their main brands from
than those commonly associated with lead poisoning (Tripathi                    which products would have to be sampled, the companies that
et al., 2001). Furthermore, recent studies show that cadmium and                constitute, altogether, over 80% of the market were selected
zinc can act as endocrine disruptors in ﬁsh, either in vivo or through          (Piccinelli et al., 2010). Finally, 42 different infant formulae
a direct action on steroidogenic cells, as it has been demonstrated             products were sampled from 6 different countries including
```
