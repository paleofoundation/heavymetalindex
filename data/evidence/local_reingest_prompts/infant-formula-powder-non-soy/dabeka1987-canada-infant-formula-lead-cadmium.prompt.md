# Local Evidence Extraction Task

Source ID: dabeka1987-canada-infant-formula-lead-cadmium
Source title: Lead, cadmium, and fluoride levels in market milk and infant formulas in Canada
Product target: infant-formula-powder-non-soy
Local PDF: raw/studies/dabeka1987.pdf

## Task
Extract source-stated product concentration values into candidate rows only.

## Required output
Return JSON with this shape:

```json
{
  "source_id": "dabeka1987-canada-infant-formula-lead-cadmium",
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


Lead, Cadmium, and Fluoride Levels in Market Milk and Infant Formulas in Canada

ROBERT W. DABEKA and ARTHUR D. McKENZIE
Health and Welfare Canada, Health Protection Branch, Bureau of Chemical Safety, Food Directorate,
Ottawa, Ontario K1A 0L2, Canada

---

Ottawa, Ontario K1A 0L2, Canada

Lead, cadmium, and fluoride were determined in 68 samples of mar-           eluded ready-to-use, concentrated liquid, powder, evapo-
ket milk and about 115 infant formulas. Mean and median levels              rated milk, water containing either electrolytes or glucose,
(ranges) in ng/g found for cow milk were as follows: lead, 1.12, 1.19       and glass-bottled formulas prepared commercially for use in
(0.01-2.48); cadmium, 0.10, 0.039 (0.005-0.74); and fluoride, 41, 40        hospitals. Additional powdered formulas were purchased in
(7-86). In canned, ready-to-use formulas, lead, cadmium, and fluoride       late 1985.

---


Lead, cadmium, and fluoride were determined in 68 samples of mar-           eluded ready-to-use, concentrated liquid, powder, evapo-
ket milk and about 115 infant formulas. Mean and median levels              rated milk, water containing either electrolytes or glucose,
(ranges) in ng/g found for cow milk were as follows: lead, 1.12, 1.19       and glass-bottled formulas prepared commercially for use in
(0.01-2.48); cadmium, 0.10, 0.039 (0.005-0.74); and fluoride, 41, 40        hospitals. Additional powdered formulas were purchased in
(7-86). In canned, ready-to-use formulas, lead, cadmium, and fluoride       late 1985.
levels averaged 37.3,1.50, and 840 ng/g, respectively. In concentrated

---

Lead, cadmium, and fluoride were determined in 68 samples of mar-           eluded ready-to-use, concentrated liquid, powder, evapo-
ket milk and about 115 infant formulas. Mean and median levels              rated milk, water containing either electrolytes or glucose,
(ranges) in ng/g found for cow milk were as follows: lead, 1.12, 1.19       and glass-bottled formulas prepared commercially for use in
(0.01-2.48); cadmium, 0.10, 0.039 (0.005-0.74); and fluoride, 41, 40        hospitals. Additional powdered formulas were purchased in
(7-86). In canned, ready-to-use formulas, lead, cadmium, and fluoride       late 1985.
levels averaged 37.3,1.50, and 840 ng/g, respectively. In concentrated
liquid formulas, the respective levels were 21, 3.54, and 600 ng/g. In         Numerical differences in the number of samples analyzed

---

ket milk and about 115 infant formulas. Mean and median levels              rated milk, water containing either electrolytes or glucose,
(ranges) in ng/g found for cow milk were as follows: lead, 1.12, 1.19       and glass-bottled formulas prepared commercially for use in
(0.01-2.48); cadmium, 0.10, 0.039 (0.005-0.74); and fluoride, 41, 40        hospitals. Additional powdered formulas were purchased in
(7-86). In canned, ready-to-use formulas, lead, cadmium, and fluoride       late 1985.
levels averaged 37.3,1.50, and 840 ng/g, respectively. In concentrated
liquid formulas, the respective levels were 21, 3.54, and 600 ng/g. In         Numerical differences in the number of samples analyzed
powder formula concentrates, respective levels were 73.7, 6.78, and         for the different elements were due primarily to sampling

---

(ranges) in ng/g found for cow milk were as follows: lead, 1.12, 1.19       and glass-bottled formulas prepared commercially for use in
(0.01-2.48); cadmium, 0.10, 0.039 (0.005-0.74); and fluoride, 41, 40        hospitals. Additional powdered formulas were purchased in
(7-86). In canned, ready-to-use formulas, lead, cadmium, and fluoride       late 1985.
levels averaged 37.3,1.50, and 840 ng/g, respectively. In concentrated
liquid formulas, the respective levels were 21, 3.54, and 600 ng/g. In         Numerical differences in the number of samples analyzed
powder formula concentrates, respective levels were 73.7, 6.78, and         for the different elements were due primarily to sampling
1130 ng/g. On the basis of this study and literature data, lead levels      differences for the methods used. In one analytical series,

---

levels averaged 37.3,1.50, and 840 ng/g, respectively. In concentrated
liquid formulas, the respective levels were 21, 3.54, and 600 ng/g. In         Numerical differences in the number of samples analyzed
powder formula concentrates, respective levels were 73.7, 6.78, and         for the different elements were due primarily to sampling
1130 ng/g. On the basis of this study and literature data, lead levels      differences for the methods used. In one analytical series,




---

liquid formulas, the respective levels were 21, 3.54, and 600 ng/g. In         Numerical differences in the number of samples analyzed
powder formula concentrates, respective levels were 73.7, 6.78, and         for the different elements were due primarily to sampling
1130 ng/g. On the basis of this study and literature data, lead levels      differences for the methods used. In one analytical series,





---


                                                                                                                                              Downloaded from https://academic.oup.com/jaoac/article/70/4/754/5699411 by guest on 26 October 2020
in market milk exceeding 5 ng/g appeared to signify contamination           however, contamination of the perchloric acid with cadmium
of the milk either directly or via the cow. For formulas considered         resulted in detection limits of 2 ng/g for 6 glass-bottled for-
on an as-consumed basis, lead levels exceeding about 10-15 ng/g             mulas, and the results from this series, all less than 2 ng/g,
were attributed to contamination from either the can used to store          were omitted from this study. Omissions also resulted from
the formula or the formula ingredients. Infant formulas in lead-free        periodic sample loss during analysis.

---

in market milk exceeding 5 ng/g appeared to signify contamination           however, contamination of the perchloric acid with cadmium
of the milk either directly or via the cow. For formulas considered         resulted in detection limits of 2 ng/g for 6 glass-bottled for-
on an as-consumed basis, lead levels exceeding about 10-15 ng/g             mulas, and the results from this series, all less than 2 ng/g,
were attributed to contamination from either the can used to store          were omitted from this study. Omissions also resulted from
the formula or the formula ingredients. Infant formulas in lead-free        periodic sample loss during analysis.
cans contained about 1.7 ng/g of lead on a ready-to-use basis. Milk-
based formulas contained about 0.26 ng/g of cadmium on a ready-

---

on an as-consumed basis, lead levels exceeding about 10-15 ng/g             mulas, and the results from this series, all less than 2 ng/g,
were attributed to contamination from either the can used to store          were omitted from this study. Omissions also resulted from
the formula or the formula ingredients. Infant formulas in lead-free        periodic sample loss during analysis.
cans contained about 1.7 ng/g of lead on a ready-to-use basis. Milk-
based formulas contained about 0.26 ng/g of cadmium on a ready-
                                                                            Analytical   Methodology
to-use basis. Soy-based or milk-free formulas contained about 8-15

---

were attributed to contamination from either the can used to store          were omitted from this study. Omissions also resulted from
the formula or the formula ingredients. Infant formulas in lead-free        periodic sample loss during analysis.
cans contained about 1.7 ng/g of lead on a ready-to-use basis. Milk-
based formulas contained about 0.26 ng/g of cadmium on a ready-
                                                                            Analytical   Methodology
to-use basis. Soy-based or milk-free formulas contained about 8-15
times more cadmium than did milk-based formulas. Canadian and                  Methods and instrumentation used for lead and cadmium

---

the formula or the formula ingredients. Infant formulas in lead-free        periodic sample loss during analysis.
cans contained about 1.7 ng/g of lead on a ready-to-use basis. Milk-
based formulas contained about 0.26 ng/g of cadmium on a ready-
                                                                            Analytical   Methodology
to-use basis. Soy-based or milk-free formulas contained about 8-15
times more cadmium than did milk-based formulas. Canadian and                  Methods and instrumentation used for lead and cadmium
U.S. ready-to-use formulas contained 900 and 230 ng/g fluoride,             in formulas (6) and cow milk (7, 8) and fluoride (8, 9) de-

---

based formulas contained about 0.26 ng/g of cadmium on a ready-
                                                                            Analytical   Methodology
to-use basis. Soy-based or milk-free formulas contained about 8-15
times more cadmium than did milk-based formulas. Canadian and                  Methods and instrumentation used for lead and cadmium
U.S. ready-to-use formulas contained 900 and 230 ng/g fluoride,             in formulas (6) and cow milk (7, 8) and fluoride (8, 9) de-
respectively, and this difference was attributed to the level of fluoride   terminations were described previously, and experimental
in the processing water used by the manufacturers.                          detection limits, based on whole milk, were approximately

---

                                                                            Analytical   Methodology
to-use basis. Soy-based or milk-free formulas contained about 8-15
times more cadmium than did milk-based formulas. Canadian and                  Methods and instrumentation used for lead and cadmium
U.S. ready-to-use formulas contained 900 and 230 ng/g fluoride,             in formulas (6) and cow milk (7, 8) and fluoride (8, 9) de-
respectively, and this difference was attributed to the level of fluoride   terminations were described previously, and experimental
in the processing water used by the manufacturers.                          detection limits, based on whole milk, were approximately
                                                                            0.05, 0.01, and 4 ng/g, respectively. Five lead and cadmium

---

to-use basis. Soy-based or milk-free formulas contained about 8-15
times more cadmium than did milk-based formulas. Canadian and                  Methods and instrumentation used for lead and cadmium
U.S. ready-to-use formulas contained 900 and 230 ng/g fluoride,             in formulas (6) and cow milk (7, 8) and fluoride (8, 9) de-
respectively, and this difference was attributed to the level of fluoride   terminations were described previously, and experimental
in the processing water used by the manufacturers.                          detection limits, based on whole milk, were approximately
                                                                            0.05, 0.01, and 4 ng/g, respectively. Five lead and cadmium
Milk and infant formulas constitute a major source of food                  blanks and 2 fluoride blanks were included with each ana-

---

respectively, and this difference was attributed to the level of fluoride   terminations were described previously, and experimental
in the processing water used by the manufacturers.                          detection limits, based on whole milk, were approximately
                                                                            0.05, 0.01, and 4 ng/g, respectively. Five lead and cadmium
Milk and infant formulas constitute a major source of food                  blanks and 2 fluoride blanks were included with each ana-
for infants and children, and even relatively low levels of                 lytical series. Results were calculated and reported as de-
toxic elements in them can be expected to contribute signif-                scribed in reference 8.
icantly to dietary intakes. Furthermore, absorption of some                    Liquid formulas and evaporated milk were analyzed with-

---

in the processing water used by the manufacturers.                          detection limits, based on whole milk, were approximately
                                                                            0.05, 0.01, and 4 ng/g, respectively. Five lead and cadmium
Milk and infant formulas constitute a major source of food                  blanks and 2 fluoride blanks were included with each ana-
for infants and children, and even relatively low levels of                 lytical series. Results were calculated and reported as de-
toxic elements in them can be expected to contribute signif-                scribed in reference 8.
icantly to dietary intakes. Furthermore, absorption of some                    Liquid formulas and evaporated milk were analyzed with-
elements, such as lead, is known to be greater for children                 in 3 months of sample collection to minimize effects of mi-

---

toxic elements in them can be expected to contribute signif-                scribed in reference 8.
icantly to dietary intakes. Furthermore, absorption of some                    Liquid formulas and evaporated milk were analyzed with-
elements, such as lead, is known to be greater for children                 in 3 months of sample collection to minimize effects of mi-
than for adults (1), contributing to the additional significance            gration of contaminants from the can. For determinations of
of low levels of elements.                                                  lead and cadmium in canned formulas, the lid of the can was
   Unfortunately, even recent literature estimates for lead and             wiped with moist cellulose prior to puncturing 2 apertures
cadmium in milk give values ranging 2-3 orders of magni-                    with a steel V-shape opener. After cans were opened, the first

---

icantly to dietary intakes. Furthermore, absorption of some                    Liquid formulas and evaporated milk were analyzed with-
elements, such as lead, is known to be greater for children                 in 3 months of sample collection to minimize effects of mi-
than for adults (1), contributing to the additional significance            gration of contaminants from the can. For determinations of
of low levels of elements.                                                  lead and cadmium in canned formulas, the lid of the can was
   Unfortunately, even recent literature estimates for lead and             wiped with moist cellulose prior to puncturing 2 apertures
cadmium in milk give values ranging 2-3 orders of magni-                    with a steel V-shape opener. After cans were opened, the first
tude (2-4), and an interlaboratory study on one milk sample                 portion of the liquid was poured into the sink, and imme-

---

elements, such as lead, is known to be greater for children                 in 3 months of sample collection to minimize effects of mi-
than for adults (1), contributing to the additional significance            gration of contaminants from the can. For determinations of
of low levels of elements.                                                  lead and cadmium in canned formulas, the lid of the can was
   Unfortunately, even recent literature estimates for lead and             wiped with moist cellulose prior to puncturing 2 apertures
cadmium in milk give values ranging 2-3 orders of magni-                    with a steel V-shape opener. After cans were opened, the first
tude (2-4), and an interlaboratory study on one milk sample                 portion of the liquid was poured into the sink, and imme-
yielded results ranging 3-4 orders of magnitude (5). There-                 diately afterward a second portion was poured into a flask

---

than for adults (1), contributing to the additional significance            gration of contaminants from the can. For determinations of
of low levels of elements.                                                  lead and cadmium in canned formulas, the lid of the can was
   Unfortunately, even recent literature estimates for lead and             wiped with moist cellulose prior to puncturing 2 apertures
cadmium in milk give values ranging 2-3 orders of magni-                    with a steel V-shape opener. After cans were opened, the first
tude (2-4), and an interlaboratory study on one milk sample                 portion of the liquid was poured into the sink, and imme-
yielded results ranging 3-4 orders of magnitude (5). There-                 diately afterward a second portion was poured into a flask
fore, the need existed to obtain accurate information on con-               for weighing. One lead and cadmium determination and 2

---

of low levels of elements.                                                  lead and cadmium in canned formulas, the lid of the can was
   Unfortunately, even recent literature estimates for lead and             wiped with moist cellulose prior to puncturing 2 apertures
cadmium in milk give values ranging 2-3 orders of magni-                    with a steel V-shape opener. After cans were opened, the first
tude (2-4), and an interlaboratory study on one milk sample                 portion of the liquid was poured into the sink, and imme-
yielded results ranging 3-4 orders of magnitude (5). There-                 diately afterward a second portion was poured into a flask
fore, the need existed to obtain accurate information on con-               for weighing. One lead and cadmium determination and 2
centrations of these elements in milk.                                      fluoride determinations were made on each sample of milk

---

tude (2-4), and an interlaboratory study on one milk sample                 portion of the liquid was poured into the sink, and imme-
yielded results ranging 3-4 orders of magnitude (5). There-                 diately afterward a second portion was poured into a flask
fore, the need existed to obtain accurate information on con-               for weighing. One lead and cadmium determination and 2
centrations of these elements in milk.                                      fluoride determinations were made on each sample of milk
   This paper presents results of a survey of lead, cadmium,                or formula.
and fluoride in 68 market milk samples and about 115 infant                    The market milk samples were opened in a conventional
formulas and oral electrolytes. The purpose of the survey was               manner (steel scissors for the plastic bags and manually for
```
