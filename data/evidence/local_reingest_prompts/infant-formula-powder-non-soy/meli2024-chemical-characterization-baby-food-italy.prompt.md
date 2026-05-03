# Local Evidence Extraction Task

Source ID: meli2024-chemical-characterization-baby-food-italy
Source title: Chemical characterization of baby food consumed in Italy
Product target: infant-formula-powder-non-soy
Local PDF: raw/studies/FM_10883532_Chemical_characterization_of_baby_food_consumed_in_Italy.pdf

## Task
Extract source-stated product concentration values into candidate rows only.

## Required output
Return JSON with this shape:

```json
{
  "source_id": "meli2024-chemical-characterization-baby-food-italy",
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
    OPEN ACCESS
                                                       lent contribution for Mn, Cu, Fe, Zn, Ca, K, and P, covering up to approximately 70% of the
Citation: Meli MA, Desideri D, Sisti D, Fagiolino I,   adequate intake (AI) for an infant aged 6–12 months. The intake of detectable toxic elements
Roselli C (2024) Chemical characterization of baby
food consumed in Italy. PLoS ONE 19(2):
                                                       was always below the safety limit: even the most concentrated toxic elements never
e0297158. https://doi.org/10.1371/journal.             exceeded about 86% of the Provisional Tolerable Weekly Intake (PTWI). This result indicates

---

                                                           While breast milk remains the optimal food for newborns due to its richness in immune
Copyright: © 2024 Meli et al. This is an open
access article distributed under the terms of the      defense proteins, powdered milk fully meets the nutritional needs [2]. However, according to a
Creative Commons Attribution License, which            survey conducted by the Italian National Institute of Health between December 2018 and
permits unrestricted use, distribution, and            April 2019, involving 29,492 mothers across 11 Italian Regions, findings revealed that less than
reproduction in any medium, provided the original      one quarter (23.6%) of children at 4–5 months were exclusively breastfed, and 11.7% of chil-
author and source are credited.

---

                                                       dren in the monitored age group had not been breastfed at all. Considering the widespread use
Data Availability Statement: All relevant data are     of infant foods in Italy and other industrialized countries, verifying the actual quality of these
within the manuscript and its Supporting               products is highly important [3].
Information files.
                                                           Physiological changes occurring in infants during the first six months enable them to tran-
Funding: The authors received no specific funding      sition from a solely liquid diet to solid foods, mainly comprising homogenized meat, vegeta-
for this work.                                         bles, cheese, fruits, and cereal flours. Initial complementary foods include rice cereal and

---

Funding: The authors received no specific funding      sition from a solely liquid diet to solid foods, mainly comprising homogenized meat, vegeta-
for this work.                                         bles, cheese, fruits, and cereal flours. Initial complementary foods include rice cereal and
Competing interests: The authors have declared         cereal cream, followed by the introduction of fruits and vegetables between 6 and 8 months.
that no competing interests exist.                     By 8 to 12 months, soft meat can also be introduced, highlighting the significance of assessing




---

for this work.                                         bles, cheese, fruits, and cereal flours. Initial complementary foods include rice cereal and
Competing interests: The authors have declared         cereal cream, followed by the introduction of fruits and vegetables between 6 and 8 months.
that no competing interests exist.                     By 8 to 12 months, soft meat can also be introduced, highlighting the significance of assessing



PLOS ONE | https://doi.org/10.1371/journal.pone.0297158 February 22, 2024                                                                                 1 / 14

---

                                           like children [6, 7]. Rapid development of children’s nervous, reproductive, digestive, and
                                           respiratory systems makes them more susceptible to potential risks from toxic elements, neces-
                                           sitating careful monitoring [8–12].
                                               Essential elements’ adequate intake is crucial for optimal bodily functions, as their defi-
                                           ciency can impact vital functions, while excessive intake over prolonged periods can lead to
                                           adverse effects [13]. Essential metals like Fe, Co, Cu, Mn, and Zn, although necessary, may
                                           exhibit toxic properties at higher concentrations [14], affecting enzyme metabolism and influ-

---

                                           sitating careful monitoring [8–12].
                                               Essential elements’ adequate intake is crucial for optimal bodily functions, as their defi-
                                           ciency can impact vital functions, while excessive intake over prolonged periods can lead to
                                           adverse effects [13]. Essential metals like Fe, Co, Cu, Mn, and Zn, although necessary, may
                                           exhibit toxic properties at higher concentrations [14], affecting enzyme metabolism and influ-
                                           encing susceptibility to various viral infections [4]. While essential, chromium (Cr) can exist
                                           in carcinogenic hexavalent forms [15], potentially affecting overall health.

---

                                           ciency can impact vital functions, while excessive intake over prolonged periods can lead to
                                           adverse effects [13]. Essential metals like Fe, Co, Cu, Mn, and Zn, although necessary, may
                                           exhibit toxic properties at higher concentrations [14], affecting enzyme metabolism and influ-
                                           encing susceptibility to various viral infections [4]. While essential, chromium (Cr) can exist
                                           in carcinogenic hexavalent forms [15], potentially affecting overall health.
                                               The presence of contaminants in baby food poses health risks, especially considering the
                                           rapid organ development during the first year of life, categorized into functional systems [2].

---

                                           adverse effects [13]. Essential metals like Fe, Co, Cu, Mn, and Zn, although necessary, may
                                           exhibit toxic properties at higher concentrations [14], affecting enzyme metabolism and influ-
                                           encing susceptibility to various viral infections [4]. While essential, chromium (Cr) can exist
                                           in carcinogenic hexavalent forms [15], potentially affecting overall health.
                                               The presence of contaminants in baby food poses health risks, especially considering the
                                           rapid organ development during the first year of life, categorized into functional systems [2].
                                           Infants, being the most vulnerable group, are highly sensitive to exposure due to increased

---

                                           exhibit toxic properties at higher concentrations [14], affecting enzyme metabolism and influ-
                                           encing susceptibility to various viral infections [4]. While essential, chromium (Cr) can exist
                                           in carcinogenic hexavalent forms [15], potentially affecting overall health.
                                               The presence of contaminants in baby food poses health risks, especially considering the
                                           rapid organ development during the first year of life, categorized into functional systems [2].
                                           Infants, being the most vulnerable group, are highly sensitive to exposure due to increased
                                           intestinal absorption and lower thresholds for adverse effects. Hence, determining the concen-

---

                                           rapid organ development during the first year of life, categorized into functional systems [2].
                                           Infants, being the most vulnerable group, are highly sensitive to exposure due to increased
                                           intestinal absorption and lower thresholds for adverse effects. Hence, determining the concen-
                                           tration of significant toxic elements in the common diet becomes crucial to assess infants’
                                           exposure and levels of essential macro and micronutrients necessary for optimum growth.
                                               This study conducted measurements to determine the levels of 30 elements, categorized
                                           into essential, major (K, Ca, Mg, P, S), minor or trace (Mn, Fe, Cu, Zn, Co, Cr, and Si), and

---

                                           non-essential or toxic (Al, Ba, Rb, Sr, As, Cd, Sn, Ce, La, Tl, Te, Ti, Th, U, Hg, Sb, Ni, and Pb)
                                           in various baby foods available in large-scale retail trade in Italy. The study aimed to: a) assess
                                           the suitability of the 25 analyzed baby foods for infant consumption by estimating the intake of
                                           toxic elements and comparing it with safety limits set by the Joint FAO/WHO Expert Commit-
                                           tee on Food Additives (JECFA) [16–20]; b) evaluate the benefits of baby food consumption by
                                           assessing the intake of essential elements and comparing it with nutritional requirements
                                           established by EFSA’s Population Reference Intake (PRI) and Adequate Intake (AI) [21]; c)

---

                                           These samples were purchased from major supermarket chains. Some of them indicated the
                                           manufacturing country (Italy, Germany, Spain, Holland, Switzerland), while others were
                                           labeled only as ’produced in the E.U.’ (Table 1). The food items were categorized into three
                                           groups: cream of rice [13], homogenized (3 fruits, 3 fish, 4 meat, 2 baby cheese), and powdered
                                           milk [14], which serves as the primary food for infants in the first 6 months, substituting
                                           human breast milk. Regarding the homogenized samples, approximately 100 g was frozen at
                                           -20˚C for 12 hours and then freeze-dried for 24 hours using the EDWARDS dryer module.

---

                                           manufacturing country (Italy, Germany, Spain, Holland, Switzerland), while others were
                                           labeled only as ’produced in the E.U.’ (Table 1). The food items were categorized into three
                                           groups: cream of rice [13], homogenized (3 fruits, 3 fish, 4 meat, 2 baby cheese), and powdered
                                           milk [14], which serves as the primary food for infants in the first 6 months, substituting
                                           human breast milk. Regarding the homogenized samples, approximately 100 g was frozen at
                                           -20˚C for 12 hours and then freeze-dried for 24 hours using the EDWARDS dryer module.
                                           The dehydrated samples were weighed, and the average ratio percent between dry and wet

---

                                           labeled only as ’produced in the E.U.’ (Table 1). The food items were categorized into three
                                           groups: cream of rice [13], homogenized (3 fruits, 3 fish, 4 meat, 2 baby cheese), and powdered
                                           milk [14], which serves as the primary food for infants in the first 6 months, substituting
                                           human breast milk. Regarding the homogenized samples, approximately 100 g was frozen at
                                           -20˚C for 12 hours and then freeze-dried for 24 hours using the EDWARDS dryer module.
                                           The dehydrated samples were weighed, and the average ratio percent between dry and wet
                                           weight (dw/ww) was 18.3 ± 3.30%.

---



Table 1. Baby food analysed, manufacturing country and, for powdered milk, metals concentration (mg kg-1) reported in the labels by manufactures, mean and
standard deviation (SD).
         Food                Identification         Manufacturing Country      K          Ca        Mg          P         Fe       Cu        Zn        Mn
                               Number
     Powder milk                    1                       Italy            4440        4810       330       3330        60       2.9       31       0.85

---

         Food                Identification         Manufacturing Country      K          Ca        Mg          P         Fe       Cu        Zn        Mn
                               Number
     Powder milk                    1                       Italy            4440        4810       330       3330        60       2.9       31       0.85
                                    2                     Germany            6960        4210       490       3260        32       2.8       38       0.96
                                    4                     Germany            5000        4800       460       3200        49       2.5       43       0.59
                                    5                    Switzerland         4800        4500       400       3000        59       2.9       59       0.30
                                    6                  European Union        4779        3382       375       1912        39       2.9       37       0.55

---

                                    9                     Germany            5850        4300       400       2400        46       2.9       52       0.51
                                   10                      Holland           5250        3300       440       1830        52       4.0       54       1.36
                                  Mean                                       5480        3480       340       2460        60       3.0       30       0.33
                                   SD                                        5264        4122       406       2615        48       3.0       43       0.65
  Homogenized food
         rabbit                    11                  European Union
         lamb                      12                  European Union

---

                                                        Measure methods. After dissolving the samples, three different methods were employed
                                                    for elemental analysis: ICP-AES, ICP-MS, and AAS for Hg [25, 26]. The broad spectrum of
                                                    analytical applications, extended dynamic concentration ranges, high selectivity and sensitiv-
                                                    ity, along with low analytical limits, establish ICP-AES and ICP-MS as the preferred instru-
                                                    mental methods for determining trace elements in various samples. The limits of detection
                                                    (LOD) (mg kg-1ww) are outlined in Table 2.
                                                        Mercury was identified using EPA 7470 1994, employing thermal decomposition, amalgam-

---

                                                    ity, along with low analytical limits, establish ICP-AES and ICP-MS as the preferred instru-
                                                    mental methods for determining trace elements in various samples. The limits of detection
                                                    (LOD) (mg kg-1ww) are outlined in Table 2.
                                                        Mercury was identified using EPA 7470 1994, employing thermal decomposition, amalgam-
                                                    ation, and atomic absorption spectrometry [27]. The LOD for mercury was 0.0001 mg kg-1ww.
                                                        Quality control measures were taken into consideration to address potential impurities from
                                                    reagents and container release. A blank sample was prepared by mixing all reagents and employ-

---

                                                    mental methods for determining trace elements in various samples. The limits of detection
                                                    (LOD) (mg kg-1ww) are outlined in Table 2.
                                                        Mercury was identified using EPA 7470 1994, employing thermal decomposition, amalgam-
                                                    ation, and atomic absorption spectrometry [27]. The LOD for mercury was 0.0001 mg kg-1ww.
                                                        Quality control measures were taken into consideration to address potential impurities from
                                                    reagents and container release. A blank sample was prepared by mixing all reagents and employ-
                                                    ing the same procedures without the addition to the samples. Interferences were assessed, and

---

                                                    (LOD) (mg kg-1ww) are outlined in Table 2.
                                                        Mercury was identified using EPA 7470 1994, employing thermal decomposition, amalgam-
                                                    ation, and atomic absorption spectrometry [27]. The LOD for mercury was 0.0001 mg kg-1ww.
                                                        Quality control measures were taken into consideration to address potential impurities from
                                                    reagents and container release. A blank sample was prepared by mixing all reagents and employ-
                                                    ing the same procedures without the addition to the samples. Interferences were assessed, and
                                                    necessary corrections were applied or data were flagged to indicate potential issues.
```
