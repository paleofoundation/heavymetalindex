# Local Evidence Extraction Task

Source ID: burrell2010-aluminium-in-infant-formulas
Source title: There is (still) too much aluminium in infant formulas
Product target: infant-formula-powder-non-soy
Local PDF: ../../../../Desktop/heavy-metal-index/raw/Digest/Added Manually /1471-2431-10-63.pdf

## Task
Extract source-stated product concentration values into candidate rows only.

## Required output
Return JSON with this shape:

```json
{
  "source_id": "burrell2010-aluminium-in-infant-formulas",
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
 RESEARCH ARTICLE                                                                                                                                Open Access

There is (still) too much aluminium in infant
formulas
Shelle-Ann M Burrell1, Christopher Exley2*



---


  Abstract
  Background: Infant formulas are sophisticated milk-based feeds for infants which are used as a substitute for
  breast milk. Historically they are known to be contaminated by aluminium and in the past this has raised health
  concerns for exposed infants. We have measured the aluminium content of a number of widely used infant
  formulas to determine if their contamination by aluminium and consequent issues of child health persists.
  Methods: Samples of ready-made milks and powders used to make milks were prepared by microwave digestion

---

  Abstract
  Background: Infant formulas are sophisticated milk-based feeds for infants which are used as a substitute for
  breast milk. Historically they are known to be contaminated by aluminium and in the past this has raised health
  concerns for exposed infants. We have measured the aluminium content of a number of widely used infant
  formulas to determine if their contamination by aluminium and consequent issues of child health persists.
  Methods: Samples of ready-made milks and powders used to make milks were prepared by microwave digestion
  of acid/peroxide mixtures and their aluminium content determined by THGA.

---

  Background: Infant formulas are sophisticated milk-based feeds for infants which are used as a substitute for
  breast milk. Historically they are known to be contaminated by aluminium and in the past this has raised health
  concerns for exposed infants. We have measured the aluminium content of a number of widely used infant
  formulas to determine if their contamination by aluminium and consequent issues of child health persists.
  Methods: Samples of ready-made milks and powders used to make milks were prepared by microwave digestion
  of acid/peroxide mixtures and their aluminium content determined by THGA.
  Results: The concentration of aluminium in ready-made milks varied from ca 176 to 700 μg/L. The latter

---

  breast milk. Historically they are known to be contaminated by aluminium and in the past this has raised health
  concerns for exposed infants. We have measured the aluminium content of a number of widely used infant
  formulas to determine if their contamination by aluminium and consequent issues of child health persists.
  Methods: Samples of ready-made milks and powders used to make milks were prepared by microwave digestion
  of acid/peroxide mixtures and their aluminium content determined by THGA.
  Results: The concentration of aluminium in ready-made milks varied from ca 176 to 700 μg/L. The latter
  concentration was for a milk for preterm infants. The aluminium content of powders used to make milks varied

---

  concerns for exposed infants. We have measured the aluminium content of a number of widely used infant
  formulas to determine if their contamination by aluminium and consequent issues of child health persists.
  Methods: Samples of ready-made milks and powders used to make milks were prepared by microwave digestion
  of acid/peroxide mixtures and their aluminium content determined by THGA.
  Results: The concentration of aluminium in ready-made milks varied from ca 176 to 700 μg/L. The latter
  concentration was for a milk for preterm infants. The aluminium content of powders used to make milks varied
  from ca 2.4 to 4.3 μg/g. The latter content was for a soya-based formula and equated to a ready-to-drink milk

---

  formulas to determine if their contamination by aluminium and consequent issues of child health persists.
  Methods: Samples of ready-made milks and powders used to make milks were prepared by microwave digestion
  of acid/peroxide mixtures and their aluminium content determined by THGA.
  Results: The concentration of aluminium in ready-made milks varied from ca 176 to 700 μg/L. The latter
  concentration was for a milk for preterm infants. The aluminium content of powders used to make milks varied
  from ca 2.4 to 4.3 μg/g. The latter content was for a soya-based formula and equated to a ready-to-drink milk
  concentration of 629 μg/L. Using the manufacturer’s own guidelines of formula consumption the average daily

---

  Methods: Samples of ready-made milks and powders used to make milks were prepared by microwave digestion
  of acid/peroxide mixtures and their aluminium content determined by THGA.
  Results: The concentration of aluminium in ready-made milks varied from ca 176 to 700 μg/L. The latter
  concentration was for a milk for preterm infants. The aluminium content of powders used to make milks varied
  from ca 2.4 to 4.3 μg/g. The latter content was for a soya-based formula and equated to a ready-to-drink milk
  concentration of 629 μg/L. Using the manufacturer’s own guidelines of formula consumption the average daily
  ingestion of aluminium from infant formulas for a child of 6 months varied from ca 200 to 600 μg of aluminium.

---

  of acid/peroxide mixtures and their aluminium content determined by THGA.
  Results: The concentration of aluminium in ready-made milks varied from ca 176 to 700 μg/L. The latter
  concentration was for a milk for preterm infants. The aluminium content of powders used to make milks varied
  from ca 2.4 to 4.3 μg/g. The latter content was for a soya-based formula and equated to a ready-to-drink milk
  concentration of 629 μg/L. Using the manufacturer’s own guidelines of formula consumption the average daily
  ingestion of aluminium from infant formulas for a child of 6 months varied from ca 200 to 600 μg of aluminium.
  Generally ingestion was higher from powdered as compared to ready-made formulas.

---

  Results: The concentration of aluminium in ready-made milks varied from ca 176 to 700 μg/L. The latter
  concentration was for a milk for preterm infants. The aluminium content of powders used to make milks varied
  from ca 2.4 to 4.3 μg/g. The latter content was for a soya-based formula and equated to a ready-to-drink milk
  concentration of 629 μg/L. Using the manufacturer’s own guidelines of formula consumption the average daily
  ingestion of aluminium from infant formulas for a child of 6 months varied from ca 200 to 600 μg of aluminium.
  Generally ingestion was higher from powdered as compared to ready-made formulas.
  Conclusions: The aluminium content of a range of well known brands of infant formulas remains high and

---

  from ca 2.4 to 4.3 μg/g. The latter content was for a soya-based formula and equated to a ready-to-drink milk
  concentration of 629 μg/L. Using the manufacturer’s own guidelines of formula consumption the average daily
  ingestion of aluminium from infant formulas for a child of 6 months varied from ca 200 to 600 μg of aluminium.
  Generally ingestion was higher from powdered as compared to ready-made formulas.
  Conclusions: The aluminium content of a range of well known brands of infant formulas remains high and
  particularly so for a product designed for preterm infants and a soya-based product designed for infants with
  cow’s milk intolerances and allergies. Recent research demonstrating the vulnerability of infants to early exposure

---

  concentration of 629 μg/L. Using the manufacturer’s own guidelines of formula consumption the average daily
  ingestion of aluminium from infant formulas for a child of 6 months varied from ca 200 to 600 μg of aluminium.
  Generally ingestion was higher from powdered as compared to ready-made formulas.
  Conclusions: The aluminium content of a range of well known brands of infant formulas remains high and
  particularly so for a product designed for preterm infants and a soya-based product designed for infants with
  cow’s milk intolerances and allergies. Recent research demonstrating the vulnerability of infants to early exposure
  to aluminium serves to highlight an urgent need to reduce the aluminium content of infant formulas to as low a

---

  ingestion of aluminium from infant formulas for a child of 6 months varied from ca 200 to 600 μg of aluminium.
  Generally ingestion was higher from powdered as compared to ready-made formulas.
  Conclusions: The aluminium content of a range of well known brands of infant formulas remains high and
  particularly so for a product designed for preterm infants and a soya-based product designed for infants with
  cow’s milk intolerances and allergies. Recent research demonstrating the vulnerability of infants to early exposure
  to aluminium serves to highlight an urgent need to reduce the aluminium content of infant formulas to as low a
  level as is practically possible.

---

  Generally ingestion was higher from powdered as compared to ready-made formulas.
  Conclusions: The aluminium content of a range of well known brands of infant formulas remains high and
  particularly so for a product designed for preterm infants and a soya-based product designed for infants with
  cow’s milk intolerances and allergies. Recent research demonstrating the vulnerability of infants to early exposure
  to aluminium serves to highlight an urgent need to reduce the aluminium content of infant formulas to as low a
  level as is practically possible.


---

  Conclusions: The aluminium content of a range of well known brands of infant formulas remains high and
  particularly so for a product designed for preterm infants and a soya-based product designed for infants with
  cow’s milk intolerances and allergies. Recent research demonstrating the vulnerability of infants to early exposure
  to aluminium serves to highlight an urgent need to reduce the aluminium content of infant formulas to as low a
  level as is practically possible.



---

  particularly so for a product designed for preterm infants and a soya-based product designed for infants with
  cow’s milk intolerances and allergies. Recent research demonstrating the vulnerability of infants to early exposure
  to aluminium serves to highlight an urgent need to reduce the aluminium content of infant formulas to as low a
  level as is practically possible.


Background                                                                              the potentially compounded issue of both the contami-

---


Background                                                                              the potentially compounded issue of both the contami-
Infant formulas are milk-based feeds for infants which                                  nation by aluminium and the heightened vulnerability,
have been developed as alternatives to breast milk.                                     from the point of view of a newborn’s developing phy-
Though cow’s milk is the main ingredient of many                                        siology, of infants fed such formulas. There have been
infant formulas they are sophisticated products which                                   similar warnings over several decades in relation to alu-
have been designed to meet the specific nutritional                                     minium toxicity and parenteral nutrition of preterm and

---

have been developed as alternatives to breast milk.                                     from the point of view of a newborn’s developing phy-
Though cow’s milk is the main ingredient of many                                        siology, of infants fed such formulas. There have been
infant formulas they are sophisticated products which                                   similar warnings over several decades in relation to alu-
have been designed to meet the specific nutritional                                     minium toxicity and parenteral nutrition of preterm and
needs of children from babies born pre-term through to                                  term infants [14-17]. To these ends the expectation
infants of several years of age [1]. There are also non-                                would be that the aluminium content of current infant
cow’s milk-based formulas, often made from soya, for                                    formulas would at the very least be historically low and

---

have been designed to meet the specific nutritional                                     minium toxicity and parenteral nutrition of preterm and
needs of children from babies born pre-term through to                                  term infants [14-17]. To these ends the expectation
infants of several years of age [1]. There are also non-                                would be that the aluminium content of current infant
cow’s milk-based formulas, often made from soya, for                                    formulas would at the very least be historically low and
infants with intolerances or allergies to cow’s milk [2].                               at best would be as low as might be achieved for a pro-
  There has been a long and significant history docu-                                   cessed product. We have tested this premise and we
menting the contamination of infant formulas by alumi-                                  have found that the aluminium content of a range of

---

needs of children from babies born pre-term through to                                  term infants [14-17]. To these ends the expectation
infants of several years of age [1]. There are also non-                                would be that the aluminium content of current infant
cow’s milk-based formulas, often made from soya, for                                    formulas would at the very least be historically low and
infants with intolerances or allergies to cow’s milk [2].                               at best would be as low as might be achieved for a pro-
  There has been a long and significant history docu-                                   cessed product. We have tested this premise and we
menting the contamination of infant formulas by alumi-                                  have found that the aluminium content of a range of
nium [3-9] and consequent health effects in children                                    branded infant formulas remains too high.

---

infants with intolerances or allergies to cow’s milk [2].                               at best would be as low as might be achieved for a pro-
  There has been a long and significant history docu-                                   cessed product. We have tested this premise and we
menting the contamination of infant formulas by alumi-                                  have found that the aluminium content of a range of
nium [3-9] and consequent health effects in children                                    branded infant formulas remains too high.
[10-13]. Through these and other publications manufac-
turers of infant formulas have been made fully aware of                                 Methods
                                                                                        We have chosen 15 different branded infant formula

---

  There has been a long and significant history docu-                                   cessed product. We have tested this premise and we
menting the contamination of infant formulas by alumi-                                  have found that the aluminium content of a range of
nium [3-9] and consequent health effects in children                                    branded infant formulas remains too high.
[10-13]. Through these and other publications manufac-
turers of infant formulas have been made fully aware of                                 Methods
                                                                                        We have chosen 15 different branded infant formula
* Correspondence: c.exley@chem.keele.ac.uk                                              products. These include powdered and ready-made

---

nium [3-9] and consequent health effects in children                                    branded infant formulas remains too high.
[10-13]. Through these and other publications manufac-
turers of infant formulas have been made fully aware of                                 Methods
                                                                                        We have chosen 15 different branded infant formula
* Correspondence: c.exley@chem.keele.ac.uk                                              products. These include powdered and ready-made
2
 The Birchall Centre, Lennard-Jones Laboratories, Keele University,                     liquid formulas based on cow’s milk and a soya-based

---

[10-13]. Through these and other publications manufac-
turers of infant formulas have been made fully aware of                                 Methods
                                                                                        We have chosen 15 different branded infant formula
* Correspondence: c.exley@chem.keele.ac.uk                                              products. These include powdered and ready-made
2
 The Birchall Centre, Lennard-Jones Laboratories, Keele University,                     liquid formulas based on cow’s milk and a soya-based
Staffordshire, UK

---

turers of infant formulas have been made fully aware of                                 Methods
                                                                                        We have chosen 15 different branded infant formula
* Correspondence: c.exley@chem.keele.ac.uk                                              products. These include powdered and ready-made
2
 The Birchall Centre, Lennard-Jones Laboratories, Keele University,                     liquid formulas based on cow’s milk and a soya-based
Staffordshire, UK
Full list of author information is available at the end of the article                  product. The categories of formulas included those for

---

* Correspondence: c.exley@chem.keele.ac.uk                                              products. These include powdered and ready-made
2
 The Birchall Centre, Lennard-Jones Laboratories, Keele University,                     liquid formulas based on cow’s milk and a soya-based
Staffordshire, UK
Full list of author information is available at the end of the article                  product. The categories of formulas included those for

                                          © 2010 Burrell and Exley; licensee BioMed Central Ltd. This is an Open Access article distributed under the terms of the Creative
```
