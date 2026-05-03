# Local Evidence Extraction Task

Source ID: chuchu2013-aluminium-in-infant-formulas
Source title: The aluminium content of infant formulas remains too high
Product target: infant-formula-powder-non-soy
Local PDF: ../../../../Desktop/heavy-metal-index/raw/Digest/Added Manually /1471-2431-13-162.pdf

## Task
Extract source-stated product concentration values into candidate rows only.

## Required output
Return JSON with this shape:

```json
{
  "source_id": "chuchu2013-aluminium-in-infant-formulas",
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
 RESEARCH ARTICLE                                                                                                                                   Open Access

The aluminium content of infant formulas
remains too high
Nancy Chuchu1, Bhavini Patel1, Blaise Sebastian1 and Christopher Exley2*



---


  Abstract
  Background: Recent research published in this journal highlighted the issue of the high content of aluminium in
  infant formulas. The expectation was that the findings would serve as a catalyst for manufacturers to address a
  significant problem of these, often necessary, components of infant nutrition. It is critically important that parents
  and other users have confidence in the safety of infant formulas and that they have reliable information to use in
  choosing a product with a lower content of aluminium. Herein, we have significantly extended the scope of the

---

  Abstract
  Background: Recent research published in this journal highlighted the issue of the high content of aluminium in
  infant formulas. The expectation was that the findings would serve as a catalyst for manufacturers to address a
  significant problem of these, often necessary, components of infant nutrition. It is critically important that parents
  and other users have confidence in the safety of infant formulas and that they have reliable information to use in
  choosing a product with a lower content of aluminium. Herein, we have significantly extended the scope of the
  previous research and the aluminium content of 30 of the most widely available and often used infant formulas has

---

  infant formulas. The expectation was that the findings would serve as a catalyst for manufacturers to address a
  significant problem of these, often necessary, components of infant nutrition. It is critically important that parents
  and other users have confidence in the safety of infant formulas and that they have reliable information to use in
  choosing a product with a lower content of aluminium. Herein, we have significantly extended the scope of the
  previous research and the aluminium content of 30 of the most widely available and often used infant formulas has
  been measured.
  Methods: Both ready-to-drink milks and milk powders were subjected to microwave digestion in the presence of

---

  significant problem of these, often necessary, components of infant nutrition. It is critically important that parents
  and other users have confidence in the safety of infant formulas and that they have reliable information to use in
  choosing a product with a lower content of aluminium. Herein, we have significantly extended the scope of the
  previous research and the aluminium content of 30 of the most widely available and often used infant formulas has
  been measured.
  Methods: Both ready-to-drink milks and milk powders were subjected to microwave digestion in the presence of
  15.8 M HNO3 and 30% w/v H2O2 and the aluminium content of the digests was measured by TH GFAAS.

---

  and other users have confidence in the safety of infant formulas and that they have reliable information to use in
  choosing a product with a lower content of aluminium. Herein, we have significantly extended the scope of the
  previous research and the aluminium content of 30 of the most widely available and often used infant formulas has
  been measured.
  Methods: Both ready-to-drink milks and milk powders were subjected to microwave digestion in the presence of
  15.8 M HNO3 and 30% w/v H2O2 and the aluminium content of the digests was measured by TH GFAAS.
  Results: Both ready-to-drink milks and milk powders were contaminated with aluminium. The concentration of

---

  previous research and the aluminium content of 30 of the most widely available and often used infant formulas has
  been measured.
  Methods: Both ready-to-drink milks and milk powders were subjected to microwave digestion in the presence of
  15.8 M HNO3 and 30% w/v H2O2 and the aluminium content of the digests was measured by TH GFAAS.
  Results: Both ready-to-drink milks and milk powders were contaminated with aluminium. The concentration of
  aluminium across all milk products ranged from ca 100 to 430 μg/L. The concentration of aluminium in two
  soya-based milk products was 656 and 756 μg/L. The intake of aluminium from non-soya-based infant formulas

---

  been measured.
  Methods: Both ready-to-drink milks and milk powders were subjected to microwave digestion in the presence of
  15.8 M HNO3 and 30% w/v H2O2 and the aluminium content of the digests was measured by TH GFAAS.
  Results: Both ready-to-drink milks and milk powders were contaminated with aluminium. The concentration of
  aluminium across all milk products ranged from ca 100 to 430 μg/L. The concentration of aluminium in two
  soya-based milk products was 656 and 756 μg/L. The intake of aluminium from non-soya-based infant formulas
  varied from ca 100 to 300 μg per day. For soya-based milks it could be as high as 700 μg per day.

---

  Methods: Both ready-to-drink milks and milk powders were subjected to microwave digestion in the presence of
  15.8 M HNO3 and 30% w/v H2O2 and the aluminium content of the digests was measured by TH GFAAS.
  Results: Both ready-to-drink milks and milk powders were contaminated with aluminium. The concentration of
  aluminium across all milk products ranged from ca 100 to 430 μg/L. The concentration of aluminium in two
  soya-based milk products was 656 and 756 μg/L. The intake of aluminium from non-soya-based infant formulas
  varied from ca 100 to 300 μg per day. For soya-based milks it could be as high as 700 μg per day.
  Conclusions: All 30 infant formulas were contaminated with aluminium. There was no clear evidence that

---

  15.8 M HNO3 and 30% w/v H2O2 and the aluminium content of the digests was measured by TH GFAAS.
  Results: Both ready-to-drink milks and milk powders were contaminated with aluminium. The concentration of
  aluminium across all milk products ranged from ca 100 to 430 μg/L. The concentration of aluminium in two
  soya-based milk products was 656 and 756 μg/L. The intake of aluminium from non-soya-based infant formulas
  varied from ca 100 to 300 μg per day. For soya-based milks it could be as high as 700 μg per day.
  Conclusions: All 30 infant formulas were contaminated with aluminium. There was no clear evidence that
  subsequent to the problem of aluminium being highlighted in a previous publication in this journal that

---

  Results: Both ready-to-drink milks and milk powders were contaminated with aluminium. The concentration of
  aluminium across all milk products ranged from ca 100 to 430 μg/L. The concentration of aluminium in two
  soya-based milk products was 656 and 756 μg/L. The intake of aluminium from non-soya-based infant formulas
  varied from ca 100 to 300 μg per day. For soya-based milks it could be as high as 700 μg per day.
  Conclusions: All 30 infant formulas were contaminated with aluminium. There was no clear evidence that
  subsequent to the problem of aluminium being highlighted in a previous publication in this journal that
  contamination had been addressed and reduced. It is the opinion of the authors that regulatory and other non-

---

  aluminium across all milk products ranged from ca 100 to 430 μg/L. The concentration of aluminium in two
  soya-based milk products was 656 and 756 μg/L. The intake of aluminium from non-soya-based infant formulas
  varied from ca 100 to 300 μg per day. For soya-based milks it could be as high as 700 μg per day.
  Conclusions: All 30 infant formulas were contaminated with aluminium. There was no clear evidence that
  subsequent to the problem of aluminium being highlighted in a previous publication in this journal that
  contamination had been addressed and reduced. It is the opinion of the authors that regulatory and other non-
  voluntary methods are now required to reduce the aluminium content of infant formulas and thereby protect

---

  soya-based milk products was 656 and 756 μg/L. The intake of aluminium from non-soya-based infant formulas
  varied from ca 100 to 300 μg per day. For soya-based milks it could be as high as 700 μg per day.
  Conclusions: All 30 infant formulas were contaminated with aluminium. There was no clear evidence that
  subsequent to the problem of aluminium being highlighted in a previous publication in this journal that
  contamination had been addressed and reduced. It is the opinion of the authors that regulatory and other non-
  voluntary methods are now required to reduce the aluminium content of infant formulas and thereby protect
  infants from chronic exposure to dietary aluminium.

---

  varied from ca 100 to 300 μg per day. For soya-based milks it could be as high as 700 μg per day.
  Conclusions: All 30 infant formulas were contaminated with aluminium. There was no clear evidence that
  subsequent to the problem of aluminium being highlighted in a previous publication in this journal that
  contamination had been addressed and reduced. It is the opinion of the authors that regulatory and other non-
  voluntary methods are now required to reduce the aluminium content of infant formulas and thereby protect
  infants from chronic exposure to dietary aluminium.


---

  subsequent to the problem of aluminium being highlighted in a previous publication in this journal that
  contamination had been addressed and reduced. It is the opinion of the authors that regulatory and other non-
  voluntary methods are now required to reduce the aluminium content of infant formulas and thereby protect
  infants from chronic exposure to dietary aluminium.


Background                                                                               as evidenced by the paper being accessed via the journal

---

  contamination had been addressed and reduced. It is the opinion of the authors that regulatory and other non-
  voluntary methods are now required to reduce the aluminium content of infant formulas and thereby protect
  infants from chronic exposure to dietary aluminium.


Background                                                                               as evidenced by the paper being accessed via the journal
In 2010 we published the aluminium content of 15 well                                    website more than 20,000 times to-date [1] as well as

---


Background                                                                               as evidenced by the paper being accessed via the journal
In 2010 we published the aluminium content of 15 well                                    website more than 20,000 times to-date [1] as well as
known infant formula products [1]. We chose to identify                                  myriad direct enquiries through email and other forms
the specific brands in order that consumers (more practic-                               of communication. We should, perhaps, have not been
ally purchasers) of infant formulas might adopt a precau-                                surprised by the interest as according to a recent report
tionary approach and choose those formulas with lower                                    by The Caroline Walker Trust [4], 25% of parents in the

---

Background                                                                               as evidenced by the paper being accessed via the journal
In 2010 we published the aluminium content of 15 well                                    website more than 20,000 times to-date [1] as well as
known infant formula products [1]. We chose to identify                                  myriad direct enquiries through email and other forms
the specific brands in order that consumers (more practic-                               of communication. We should, perhaps, have not been
ally purchasers) of infant formulas might adopt a precau-                                surprised by the interest as according to a recent report
tionary approach and choose those formulas with lower                                    by The Caroline Walker Trust [4], 25% of parents in the
contents of aluminium. However, the range of values                                      UK use formulas as the only source of ‘breast’ milk for

---

known infant formula products [1]. We chose to identify                                  myriad direct enquiries through email and other forms
the specific brands in order that consumers (more practic-                               of communication. We should, perhaps, have not been
ally purchasers) of infant formulas might adopt a precau-                                surprised by the interest as according to a recent report
tionary approach and choose those formulas with lower                                    by The Caroline Walker Trust [4], 25% of parents in the
contents of aluminium. However, the range of values                                      UK use formulas as the only source of ‘breast’ milk for
obtained was skewed towards high content and we were                                     infants from birth while 35% of parents use infant formu-
left to conclude that the aluminium content of infant                                    las from birth and more than 50% of infants of 4–10 weeks

---

ally purchasers) of infant formulas might adopt a precau-                                surprised by the interest as according to a recent report
tionary approach and choose those formulas with lower                                    by The Caroline Walker Trust [4], 25% of parents in the
contents of aluminium. However, the range of values                                      UK use formulas as the only source of ‘breast’ milk for
obtained was skewed towards high content and we were                                     infants from birth while 35% of parents use infant formu-
left to conclude that the aluminium content of infant                                    las from birth and more than 50% of infants of 4–10 weeks
formulas were too high, for example as compared to                                       of age are fed solely on formulas. Given the high rate of
aluminium exposure through breast milk [2]. A recent                                     use of infant formulas in the UK it was clear to us that a

---

contents of aluminium. However, the range of values                                      UK use formulas as the only source of ‘breast’ milk for
obtained was skewed towards high content and we were                                     infants from birth while 35% of parents use infant formu-
left to conclude that the aluminium content of infant                                    las from birth and more than 50% of infants of 4–10 weeks
formulas were too high, for example as compared to                                       of age are fed solely on formulas. Given the high rate of
aluminium exposure through breast milk [2]. A recent                                     use of infant formulas in the UK it was clear to us that a
report on Canadian infant formulas [3] has confirmed                                     more comprehensive survey of the aluminium content of
that this is likely to be a global as opposed to UK only                                 infant formulas was warranted. Herein we have reported

---

left to conclude that the aluminium content of infant                                    las from birth and more than 50% of infants of 4–10 weeks
formulas were too high, for example as compared to                                       of age are fed solely on formulas. Given the high rate of
aluminium exposure through breast milk [2]. A recent                                     use of infant formulas in the UK it was clear to us that a
report on Canadian infant formulas [3] has confirmed                                     more comprehensive survey of the aluminium content of
that this is likely to be a global as opposed to UK only                                 infant formulas was warranted. Herein we have reported
problem. The interest in these data was overwhelming                                     the aluminium content of 30 infant formulas which are
                                                                                         widely available in the UK.

---

formulas were too high, for example as compared to                                       of age are fed solely on formulas. Given the high rate of
aluminium exposure through breast milk [2]. A recent                                     use of infant formulas in the UK it was clear to us that a
report on Canadian infant formulas [3] has confirmed                                     more comprehensive survey of the aluminium content of
that this is likely to be a global as opposed to UK only                                 infant formulas was warranted. Herein we have reported
problem. The interest in these data was overwhelming                                     the aluminium content of 30 infant formulas which are
                                                                                         widely available in the UK.
* Correspondence: c.exley@keele.ac.uk

---

aluminium exposure through breast milk [2]. A recent                                     use of infant formulas in the UK it was clear to us that a
report on Canadian infant formulas [3] has confirmed                                     more comprehensive survey of the aluminium content of
that this is likely to be a global as opposed to UK only                                 infant formulas was warranted. Herein we have reported
problem. The interest in these data was overwhelming                                     the aluminium content of 30 infant formulas which are
                                                                                         widely available in the UK.
* Correspondence: c.exley@keele.ac.uk
2

---

report on Canadian infant formulas [3] has confirmed                                     more comprehensive survey of the aluminium content of
that this is likely to be a global as opposed to UK only                                 infant formulas was warranted. Herein we have reported
problem. The interest in these data was overwhelming                                     the aluminium content of 30 infant formulas which are
                                                                                         widely available in the UK.
* Correspondence: c.exley@keele.ac.uk
2
 The Birchall Centre, Lennard-Jones Laboratories, Keele University,
```
