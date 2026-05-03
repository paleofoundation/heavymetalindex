# Local Evidence Extraction Task

Source ID: spungen2024-fda-tds-infant-lead-cadmium
Source title: Infants' and young children's dietary exposures to lead and cadmium: FDA total diet study 2018-2020
Product target: infant-formula-powder-non-soy
Local PDF: raw/studies/Infants  and young children s dietary exposures to lead and cadmium  FDA total diet study 2018 2020.pdf

## Task
Extract source-stated product concentration values into candidate rows only.

## Required output
Return JSON with this shape:

```json
{
  "source_id": "spungen2024-fda-tds-infant-lead-cadmium",
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

Infants’ and young children’s dietary exposures to
lead and cadmium: FDA total diet study 2018–2020

Dana Hoﬀman-Pennesi, Sarah Winﬁeld, Alexandra Gavelek, Soﬁa M.
Santillana Farakos & Judith Spungen


---

To cite this article: Dana Hoﬀman-Pennesi, Sarah Winﬁeld, Alexandra Gavelek, Soﬁa M.
Santillana Farakos & Judith Spungen (2024) Infants’ and young children’s dietary exposures to
lead and cadmium: FDA total diet study 2018–2020, Food Additives & Contaminants: Part A,
41:11, 1454-1479, DOI: 10.1080/19440049.2024.2396910

To link to this article: https://doi.org/10.1080/19440049.2024.2396910


---



       Citing articles: 9 View citing articles





---



Infants’ and young children’s dietary exposures to lead and cadmium: FDA
total diet study 2018–2020
Dana Hoffman-Pennesi, Sarah Winfield, Alexandra Gavelek, Sofia M. Santillana Farakos                                                                and
Judith Spungen
Center for Food Safety and Applied Nutrition, U.S. Food and Drug Administration, College Park, MD, USA

---


    ABSTRACT                                                                                                                             ARTICLE HISTORY
    Food can be a source of lead and cadmium exposure for infants and children. Employing a                                              Received 24 June 2024
    semi-probabilistic approach, dietary exposures to lead and cadmium were assessed for infants                                         Revised 19 August 2024
    0–11 months (excluding human milk-fed infants) and children 1–6 years using U.S. total diet                                          Accepted 19 August 2024
    study data from 2018 to 2020 and food consumption data from 2015 to 2018. Estimated                                                  KEYWORDS
    mean lead and cadmium exposures range from 0.7–3.6 µg/day to 0.18–0.47 µg/kg bw/day,                                                 dietary exposure; lead;

---

    ABSTRACT                                                                                                                             ARTICLE HISTORY
    Food can be a source of lead and cadmium exposure for infants and children. Employing a                                              Received 24 June 2024
    semi-probabilistic approach, dietary exposures to lead and cadmium were assessed for infants                                         Revised 19 August 2024
    0–11 months (excluding human milk-fed infants) and children 1–6 years using U.S. total diet                                          Accepted 19 August 2024
    study data from 2018 to 2020 and food consumption data from 2015 to 2018. Estimated                                                  KEYWORDS
    mean lead and cadmium exposures range from 0.7–3.6 µg/day to 0.18–0.47 µg/kg bw/day,                                                 dietary exposure; lead;
    respectively, depending on the age group and method for handling non-detected values.                                                cadmium; infants; children

---

    0–11 months (excluding human milk-fed infants) and children 1–6 years using U.S. total diet                                          Accepted 19 August 2024
    study data from 2018 to 2020 and food consumption data from 2015 to 2018. Estimated                                                  KEYWORDS
    mean lead and cadmium exposures range from 0.7–3.6 µg/day to 0.18–0.47 µg/kg bw/day,                                                 dietary exposure; lead;
    respectively, depending on the age group and method for handling non-detected values.                                                cadmium; infants; children
    Dietary exposures to lead and cadmium are slightly lower and slightly higher than our
    estimates published in 2019. In addition to the use of more recent datasets for consumption
    and contamination, differences may be due to the use of refined exposure assessment

---

    study data from 2018 to 2020 and food consumption data from 2015 to 2018. Estimated                                                  KEYWORDS
    mean lead and cadmium exposures range from 0.7–3.6 µg/day to 0.18–0.47 µg/kg bw/day,                                                 dietary exposure; lead;
    respectively, depending on the age group and method for handling non-detected values.                                                cadmium; infants; children
    Dietary exposures to lead and cadmium are slightly lower and slightly higher than our
    estimates published in 2019. In addition to the use of more recent datasets for consumption
    and contamination, differences may be due to the use of refined exposure assessment
    methodology, particularly a new system of mapping contamination data to intake data. The

---

    mean lead and cadmium exposures range from 0.7–3.6 µg/day to 0.18–0.47 µg/kg bw/day,                                                 dietary exposure; lead;
    respectively, depending on the age group and method for handling non-detected values.                                                cadmium; infants; children
    Dietary exposures to lead and cadmium are slightly lower and slightly higher than our
    estimates published in 2019. In addition to the use of more recent datasets for consumption
    and contamination, differences may be due to the use of refined exposure assessment
    methodology, particularly a new system of mapping contamination data to intake data. The
    processed baby food and infant formula food group is the major contributor to lead and

---

    and contamination, differences may be due to the use of refined exposure assessment
    methodology, particularly a new system of mapping contamination data to intake data. The
    processed baby food and infant formula food group is the major contributor to lead and
    cadmium exposure, driven by intake, among infants who do not consume human milk. The
    food groups contributing most to children’s lead and cadmium exposure are grains/baking,
    dairy and fruit and grains/baking and vegetables, respectively. This work will inform FDA
    initiatives such as closer to zero, including research needs and regulatory priorities.

---

    methodology, particularly a new system of mapping contamination data to intake data. The
    processed baby food and infant formula food group is the major contributor to lead and
    cadmium exposure, driven by intake, among infants who do not consume human milk. The
    food groups contributing most to children’s lead and cadmium exposure are grains/baking,
    dairy and fruit and grains/baking and vegetables, respectively. This work will inform FDA
    initiatives such as closer to zero, including research needs and regulatory priorities.


---

    processed baby food and infant formula food group is the major contributor to lead and
    cadmium exposure, driven by intake, among infants who do not consume human milk. The
    food groups contributing most to children’s lead and cadmium exposure are grains/baking,
    dairy and fruit and grains/baking and vegetables, respectively. This work will inform FDA
    initiatives such as closer to zero, including research needs and regulatory priorities.



---

    cadmium exposure, driven by intake, among infants who do not consume human milk. The
    food groups contributing most to children’s lead and cadmium exposure are grains/baking,
    dairy and fruit and grains/baking and vegetables, respectively. This work will inform FDA
    initiatives such as closer to zero, including research needs and regulatory priorities.




---

Introduction                                                                               review of the literature identified full-scale IQ,
Infants and young children can be exposed to                                               nervous system and renal effects as potential
lead and cadmium through many sources, includ-                                             health outcomes from children’s cadmium expo-
ing food. Food is a source of environmental con-                                           sure; however, the authors concluded more
taminants such as lead and cadmium because                                                 research is needed (Flannery et al. 2022).
they occur in the soil, water or air where foods                                           Cadmium is excreted from the body slowly with
are grown, raised or processed (FDA 2024b).                                                accumulation starting at a young age and poten-

---

lead and cadmium through many sources, includ-                                             health outcomes from children’s cadmium expo-
ing food. Food is a source of environmental con-                                           sure; however, the authors concluded more
taminants such as lead and cadmium because                                                 research is needed (Flannery et al. 2022).
they occur in the soil, water or air where foods                                           Cadmium is excreted from the body slowly with
are grown, raised or processed (FDA 2024b).                                                accumulation starting at a young age and poten-
Lead exposure occurs primarily through inges-                                              tially resulting in serious health effects in later
tion, and children generally absorb a higher per-                                          life (Schoeters et al. 2006). In adults, oral expo-

---

ing food. Food is a source of environmental con-                                           sure; however, the authors concluded more
taminants such as lead and cadmium because                                                 research is needed (Flannery et al. 2022).
they occur in the soil, water or air where foods                                           Cadmium is excreted from the body slowly with
are grown, raised or processed (FDA 2024b).                                                accumulation starting at a young age and poten-
Lead exposure occurs primarily through inges-                                              tially resulting in serious health effects in later
tion, and children generally absorb a higher per-                                          life (Schoeters et al. 2006). In adults, oral expo-
centage of ingested lead compared to adults                                                sure to cadmium is associated with a decrease

---

taminants such as lead and cadmium because                                                 research is needed (Flannery et al. 2022).
they occur in the soil, water or air where foods                                           Cadmium is excreted from the body slowly with
are grown, raised or processed (FDA 2024b).                                                accumulation starting at a young age and poten-
Lead exposure occurs primarily through inges-                                              tially resulting in serious health effects in later
tion, and children generally absorb a higher per-                                          life (Schoeters et al. 2006). In adults, oral expo-
centage of ingested lead compared to adults                                                sure to cadmium is associated with a decrease
(ATSDR 2023). In the United States (U.S.) the                                              in bone mineral density and renal tubular

---

they occur in the soil, water or air where foods                                           Cadmium is excreted from the body slowly with
are grown, raised or processed (FDA 2024b).                                                accumulation starting at a young age and poten-
Lead exposure occurs primarily through inges-                                              tially resulting in serious health effects in later
tion, and children generally absorb a higher per-                                          life (Schoeters et al. 2006). In adults, oral expo-
centage of ingested lead compared to adults                                                sure to cadmium is associated with a decrease
(ATSDR 2023). In the United States (U.S.) the                                              in bone mineral density and renal tubular
primary source of cadmium exposure, other than                                             degeneration (Schaefer et al. 2023).

---

Lead exposure occurs primarily through inges-                                              tially resulting in serious health effects in later
tion, and children generally absorb a higher per-                                          life (Schoeters et al. 2006). In adults, oral expo-
centage of ingested lead compared to adults                                                sure to cadmium is associated with a decrease
(ATSDR 2023). In the United States (U.S.) the                                              in bone mineral density and renal tubular
primary source of cadmium exposure, other than                                             degeneration (Schaefer et al. 2023).
cigarette smoke, is food (ATSDR 2012).                                                        The current study updates previous lead and
   Lead is a health concern for fetuses, infants                                           cadmium dietary exposure estimates for young

---

centage of ingested lead compared to adults                                                sure to cadmium is associated with a decrease
(ATSDR 2023). In the United States (U.S.) the                                              in bone mineral density and renal tubular
primary source of cadmium exposure, other than                                             degeneration (Schaefer et al. 2023).
cigarette smoke, is food (ATSDR 2012).                                                        The current study updates previous lead and
   Lead is a health concern for fetuses, infants                                           cadmium dietary exposure estimates for young
and young children due to its effects on neuro-                                            children aged 1–6 years (Spungen 2019), using
development (ATSDR 2020; Flannery et al.                                                   improved methodology and more recent data

---

(ATSDR 2023). In the United States (U.S.) the                                              in bone mineral density and renal tubular
primary source of cadmium exposure, other than                                             degeneration (Schaefer et al. 2023).
cigarette smoke, is food (ATSDR 2012).                                                        The current study updates previous lead and
   Lead is a health concern for fetuses, infants                                           cadmium dietary exposure estimates for young
and young children due to its effects on neuro-                                            children aged 1–6 years (Spungen 2019), using
development (ATSDR 2020; Flannery et al.                                                   improved methodology and more recent data
2020). Exposure to lead can have negative cog-                                             on concentrations and food intakes. We also

---

primary source of cadmium exposure, other than                                             degeneration (Schaefer et al. 2023).
cigarette smoke, is food (ATSDR 2012).                                                        The current study updates previous lead and
   Lead is a health concern for fetuses, infants                                           cadmium dietary exposure estimates for young
and young children due to its effects on neuro-                                            children aged 1–6 years (Spungen 2019), using
development (ATSDR 2020; Flannery et al.                                                   improved methodology and more recent data
2020). Exposure to lead can have negative cog-                                             on concentrations and food intakes. We also
nitive effects not only in youth but also into                                             estimated dietary lead and cadmium exposures

---

and young children due to its effects on neuro-                                            children aged 1–6 years (Spungen 2019), using
development (ATSDR 2020; Flannery et al.                                                   improved methodology and more recent data
2020). Exposure to lead can have negative cog-                                             on concentrations and food intakes. We also
nitive effects not only in youth but also into                                             estimated dietary lead and cadmium exposures
adulthood in addition to hypertension and kid-                                             for infants 0–11 months, excluding infants who
ney dysfunction (Dolan et al. 2020). A scoping                                             consumed human milk, due to limited data


---

development (ATSDR 2020; Flannery et al.                                                   improved methodology and more recent data
2020). Exposure to lead can have negative cog-                                             on concentrations and food intakes. We also
nitive effects not only in youth but also into                                             estimated dietary lead and cadmium exposures
adulthood in addition to hypertension and kid-                                             for infants 0–11 months, excluding infants who
ney dysfunction (Dolan et al. 2020). A scoping                                             consumed human milk, due to limited data

CONTACT Dana Hoffman-Pennesi                   dana.hoffman-pennesi@fda.hhs.gov               Center for Food Safety and Applied Nutrition, U.S. Food and Drug

---

© 2024 U.S. FDA Center for Food Safety and Applied Nutrition. Published with license by Taylor & Francis Group, LLC.
This is an Open Access article distributed under the terms of the Creative Commons Attribution License (http://creativecommons.org/licenses/by/4.0/), which permits unrestricted
use, distribution, and reproduction in any medium, provided the original work is properly cited. The terms on which this article has been published allow the posting of the
Accepted Manuscript in a repository by the author(s) or with their consent.
                                                                    Food Additives & Contaminants: Part A   1455


```
