# Local Evidence Extraction Task

Source ID: gardener2019-lead-cadmium-infant-formula-baby-food
Source title: Lead and cadmium contamination in a large sample of United States infant formulas and baby foods
Product target: infant-formula-powder-non-soy
Local PDF: raw/studies/gardener2019.pdf

## Task
Extract source-stated product concentration values into candidate rows only.

## Required output
Return JSON with this shape:

```json
{
  "source_id": "gardener2019-lead-cadmium-infant-formula-baby-food",
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


Lead and cadmium contamination in a large sample of United States
infant formulas and baby foods
Hannah Gardener a, Jaclyn Bowen b,⁎, Sean P. Callan c
a
    Department of Neurology, University of Miami, Miami, FL, USA

---


Lead and cadmium contamination in a large sample of United States
infant formulas and baby foods
Hannah Gardener a, Jaclyn Bowen b,⁎, Sean P. Callan c
a
    Department of Neurology, University of Miami, Miami, FL, USA
b

---

• Data is limited on heavy metal levels in
  food for babies, a sensitive population.
• We examined lead and cadmium in
  baby food in relation to regulatory
  limits.
• 0/91 infant formulas exceeded FDA lead
  guidelines in 31 oz, 22% exceeded Prop

---

  baby food in relation to regulatory
  limits.
• 0/91 infant formulas exceeded FDA lead
  guidelines in 31 oz, 22% exceeded Prop
  65.
• 23% infant formulas exceeded Prop 65
  cadmium guidelines, 14% exceeded

---

  guidelines in 31 oz, 22% exceeded Prop
  65.
• 23% infant formulas exceeded Prop 65
  cadmium guidelines, 14% exceeded
  WHO PTMI.
• 3% food exceeded FDA lead consump-
  tion limit in 300 cal, 34% exceeded

---

  65.
• 23% infant formulas exceeded Prop 65
  cadmium guidelines, 14% exceeded
  WHO PTMI.
• 3% food exceeded FDA lead consump-
  tion limit in 300 cal, 34% exceeded
  Prop 65.

---

  cadmium guidelines, 14% exceeded
  WHO PTMI.
• 3% food exceeded FDA lead consump-
  tion limit in 300 cal, 34% exceeded
  Prop 65.



---

a r t i c l e            i n f o                            a b s t r a c t

Article history:                                            Data is limited on lead and cadmium contamination in baby food, a population uniquely susceptible to the toxic ef-
Received 27 April 2018                                      fects of heavy metals. The goal of this study was to examine lead and cadmium concentrations in a large convenience
Received in revised form 2 September 2018                   sample of US baby foods. We identiﬁed the number of baby food product samples that exceeded US FDA and Cali-
Accepted 3 September 2018
                                                            fornia Proposition 65 limits for daily lead consumption across a range of servings/calories, and the number of sam-

---


Article history:                                            Data is limited on lead and cadmium contamination in baby food, a population uniquely susceptible to the toxic ef-
Received 27 April 2018                                      fects of heavy metals. The goal of this study was to examine lead and cadmium concentrations in a large convenience
Received in revised form 2 September 2018                   sample of US baby foods. We identiﬁed the number of baby food product samples that exceeded US FDA and Cali-
Accepted 3 September 2018
                                                            fornia Proposition 65 limits for daily lead consumption across a range of servings/calories, and the number of sam-
Available online 04 September 2018

---

Received in revised form 2 September 2018                   sample of US baby foods. We identiﬁed the number of baby food product samples that exceeded US FDA and Cali-
Accepted 3 September 2018
                                                            fornia Proposition 65 limits for daily lead consumption across a range of servings/calories, and the number of sam-
Available online 04 September 2018
                                                            ples that exceeded World Health Organization and California Proposition 65 limits for daily cadmium consumption
Editor: Jay Gan                                             across a range of servings/calories. In total, 564 baby foods were tested across infant and toddler formula, cereals,
                                                            meals, juices/drinks, jars, pouches, snacks, and electrolyte water. ICP-MS analysis of lead and cadmium was com-

---

                                                            fornia Proposition 65 limits for daily lead consumption across a range of servings/calories, and the number of sam-
Available online 04 September 2018
                                                            ples that exceeded World Health Organization and California Proposition 65 limits for daily cadmium consumption
Editor: Jay Gan                                             across a range of servings/calories. In total, 564 baby foods were tested across infant and toddler formula, cereals,
                                                            meals, juices/drinks, jars, pouches, snacks, and electrolyte water. ICP-MS analysis of lead and cadmium was com-
Keywords:                                                   pleted using a modiﬁed version of EPA method 6020A. Samples were analyzed using kinetic energy distribution
Cadmium                                                     mode. Lead was detected in 37% of samples (median = non-detect, 75% = 5.6, maximum = 183.6 μg/kg), and cad-

---

Available online 04 September 2018
                                                            ples that exceeded World Health Organization and California Proposition 65 limits for daily cadmium consumption
Editor: Jay Gan                                             across a range of servings/calories. In total, 564 baby foods were tested across infant and toddler formula, cereals,
                                                            meals, juices/drinks, jars, pouches, snacks, and electrolyte water. ICP-MS analysis of lead and cadmium was com-
Keywords:                                                   pleted using a modiﬁed version of EPA method 6020A. Samples were analyzed using kinetic energy distribution
Cadmium                                                     mode. Lead was detected in 37% of samples (median = non-detect, 75% = 5.6, maximum = 183.6 μg/kg), and cad-
Baby food                                                   mium in 57% (25% = non-detect, median = 2.8, 75% = 9.5, maximum = 103.90 μg/kg). Of 91 infant formula sam-

---

                                                            ples that exceeded World Health Organization and California Proposition 65 limits for daily cadmium consumption
Editor: Jay Gan                                             across a range of servings/calories. In total, 564 baby foods were tested across infant and toddler formula, cereals,
                                                            meals, juices/drinks, jars, pouches, snacks, and electrolyte water. ICP-MS analysis of lead and cadmium was com-
Keywords:                                                   pleted using a modiﬁed version of EPA method 6020A. Samples were analyzed using kinetic energy distribution
Cadmium                                                     mode. Lead was detected in 37% of samples (median = non-detect, 75% = 5.6, maximum = 183.6 μg/kg), and cad-
Baby food                                                   mium in 57% (25% = non-detect, median = 2.8, 75% = 9.5, maximum = 103.90 μg/kg). Of 91 infant formula sam-
Infant                                                      ples, none exceeded FDA lead consumption guidelines in 31 oz, but 22% exceeded the Proposition 65 lead guidelines,

---

                                                            meals, juices/drinks, jars, pouches, snacks, and electrolyte water. ICP-MS analysis of lead and cadmium was com-
Keywords:                                                   pleted using a modiﬁed version of EPA method 6020A. Samples were analyzed using kinetic energy distribution
Cadmium                                                     mode. Lead was detected in 37% of samples (median = non-detect, 75% = 5.6, maximum = 183.6 μg/kg), and cad-
Baby food                                                   mium in 57% (25% = non-detect, median = 2.8, 75% = 9.5, maximum = 103.90 μg/kg). Of 91 infant formula sam-
Infant                                                      ples, none exceeded FDA lead consumption guidelines in 31 oz, but 22% exceeded the Proposition 65 lead guidelines,
Lead                                                        23% exceeded the Proposition 65 cadmium guidelines, and 14% exceeded the WHO tolerable cadmium intake levels
Rice

---

Keywords:                                                   pleted using a modiﬁed version of EPA method 6020A. Samples were analyzed using kinetic energy distribution
Cadmium                                                     mode. Lead was detected in 37% of samples (median = non-detect, 75% = 5.6, maximum = 183.6 μg/kg), and cad-
Baby food                                                   mium in 57% (25% = non-detect, median = 2.8, 75% = 9.5, maximum = 103.90 μg/kg). Of 91 infant formula sam-
Infant                                                      ples, none exceeded FDA lead consumption guidelines in 31 oz, but 22% exceeded the Proposition 65 lead guidelines,
Lead                                                        23% exceeded the Proposition 65 cadmium guidelines, and 14% exceeded the WHO tolerable cadmium intake levels
Rice
                                                            for a four-month-old baby. In the solid baby food samples, 1% exceeded FDA lead guidelines in two servings (26%

---

Cadmium                                                     mode. Lead was detected in 37% of samples (median = non-detect, 75% = 5.6, maximum = 183.6 μg/kg), and cad-
Baby food                                                   mium in 57% (25% = non-detect, median = 2.8, 75% = 9.5, maximum = 103.90 μg/kg). Of 91 infant formula sam-
Infant                                                      ples, none exceeded FDA lead consumption guidelines in 31 oz, but 22% exceeded the Proposition 65 lead guidelines,
Lead                                                        23% exceeded the Proposition 65 cadmium guidelines, and 14% exceeded the WHO tolerable cadmium intake levels
Rice
                                                            for a four-month-old baby. In the solid baby food samples, 1% exceeded FDA lead guidelines in two servings (26%
                                                            exceeded CA Proposition 65 limits), 3% in 300 cal (34% exceeded CA Proposition 65 limits). For cadmium, 6%

---

Baby food                                                   mium in 57% (25% = non-detect, median = 2.8, 75% = 9.5, maximum = 103.90 μg/kg). Of 91 infant formula sam-
Infant                                                      ples, none exceeded FDA lead consumption guidelines in 31 oz, but 22% exceeded the Proposition 65 lead guidelines,
Lead                                                        23% exceeded the Proposition 65 cadmium guidelines, and 14% exceeded the WHO tolerable cadmium intake levels
Rice
                                                            for a four-month-old baby. In the solid baby food samples, 1% exceeded FDA lead guidelines in two servings (26%
                                                            exceeded CA Proposition 65 limits), 3% in 300 cal (34% exceeded CA Proposition 65 limits). For cadmium, 6%
                                                            exceeded Proposition 65 guidelines in two servings, 8% in 300 cal. There was no association between whether the

---

Lead                                                        23% exceeded the Proposition 65 cadmium guidelines, and 14% exceeded the WHO tolerable cadmium intake levels
Rice
                                                            for a four-month-old baby. In the solid baby food samples, 1% exceeded FDA lead guidelines in two servings (26%
                                                            exceeded CA Proposition 65 limits), 3% in 300 cal (34% exceeded CA Proposition 65 limits). For cadmium, 6%
                                                            exceeded Proposition 65 guidelines in two servings, 8% in 300 cal. There was no association between whether the
                                                            product was certiﬁed organic and its heavy metal concentration. Products containing rice were higher in both
                                                            lead and cadmium concentrations. Further research is needed to understand the long-term health effects of this

---

Rice
                                                            for a four-month-old baby. In the solid baby food samples, 1% exceeded FDA lead guidelines in two servings (26%
                                                            exceeded CA Proposition 65 limits), 3% in 300 cal (34% exceeded CA Proposition 65 limits). For cadmium, 6%
                                                            exceeded Proposition 65 guidelines in two servings, 8% in 300 cal. There was no association between whether the
                                                            product was certiﬁed organic and its heavy metal concentration. Products containing rice were higher in both
                                                            lead and cadmium concentrations. Further research is needed to understand the long-term health effects of this
                                                            chronic daily low level heavy metal exposure in babies.

---

                                                            exceeded Proposition 65 guidelines in two servings, 8% in 300 cal. There was no association between whether the
                                                            product was certiﬁed organic and its heavy metal concentration. Products containing rice were higher in both
                                                            lead and cadmium concentrations. Further research is needed to understand the long-term health effects of this
                                                            chronic daily low level heavy metal exposure in babies.
                                                                                                                                        © 2018 Elsevier B.V. All rights reserved.



---


1. Introduction                                                                        consumer sources. Fifty-two week US national sales data compiled
                                                                                       Nielson Holdings, a leading global data, measurement, and information
    Lead is a potent neurotoxin and reproductive toxin with permanent ir-              company, was used to identify the top selling infant formulas and baby
reversible effects, and the brains of infants and children are particularly            foods according to mainstream retail sales. The convenience sample was
susceptible to its deleterious effects (Bellinger, 2008; Téllez-Rojo et al.,           expanded to also include top sellers within the natural/organic retail
2006). It is well-established that there is no safe lead exposure level                channel and brands promoted online as direct to consumer. These prod-

---

1. Introduction                                                                        consumer sources. Fifty-two week US national sales data compiled
                                                                                       Nielson Holdings, a leading global data, measurement, and information
    Lead is a potent neurotoxin and reproductive toxin with permanent ir-              company, was used to identify the top selling infant formulas and baby
reversible effects, and the brains of infants and children are particularly            foods according to mainstream retail sales. The convenience sample was
susceptible to its deleterious effects (Bellinger, 2008; Téllez-Rojo et al.,           expanded to also include top sellers within the natural/organic retail
2006). It is well-established that there is no safe lead exposure level                channel and brands promoted online as direct to consumer. These prod-
(Joint FOA/WHO Expert Committee on Food Additives, 2011). Although                     ucts were purchased with the intent of modeling the consumer shopping

---

reversible effects, and the brains of infants and children are particularly            foods according to mainstream retail sales. The convenience sample was
susceptible to its deleterious effects (Bellinger, 2008; Téllez-Rojo et al.,           expanded to also include top sellers within the natural/organic retail
2006). It is well-established that there is no safe lead exposure level                channel and brands promoted online as direct to consumer. These prod-
(Joint FOA/WHO Expert Committee on Food Additives, 2011). Although                     ucts were purchased with the intent of modeling the consumer shopping
the removal of lead from house paint and gasoline has reduced the occur-               experience and were chosen from popular brands across a range of price
rence of very high lead poisoning, low-level lead exposure remains ubiq-               points. Baby foods were divided into seven categories: infant formula (N
uitous, and diet is a relevant source (US Food and Drug Administration,                = 91), cereals (N = 30), kids' meals (N = 23), toddler formula (N =

---

2006). It is well-established that there is no safe lead exposure level                channel and brands promoted online as direct to consumer. These prod-
(Joint FOA/WHO Expert Committee on Food Additives, 2011). Although                     ucts were purchased with the intent of modeling the consumer shopping
the removal of lead from house paint and gasoline has reduced the occur-               experience and were chosen from popular brands across a range of price
rence of very high lead poisoning, low-level lead exposure remains ubiq-               points. Baby foods were divided into seven categories: infant formula (N
uitous, and diet is a relevant source (US Food and Drug Administration,                = 91), cereals (N = 30), kids' meals (N = 23), toddler formula (N =
2018a, 2018b). Contaminated food is also an exposure source for cad-                   22), juices/drinks (N = 30), jars/ﬁrst meals (N = 107), pouches (N =
mium, a heavy metal that is a neurotoxin, renal toxin, and reproductive                140), snacks (N = 107), and electrolyte solutions (N = 14). No prescrip-
```
