# Local Evidence Extraction Task

Source ID: marques2021-trace-elements-milks-plant-based-drinks
Source title: Essential and Non-essential Trace Elements in Milks and Plant-Based Drinks
Product target: infant-formula-powder-non-soy
Local PDF: ../../../../Desktop/heavy-metal-index/raw/markdown/FM_9439980_Essential_and_Non-essential_Trace_Elements_in_Milks_and_Plan/FM_9439980_Essential_and_Non-essential_Trace_Elements_in_Milks_and_Plan.md

## Task
Extract source-stated product concentration values into candidate rows only.

## Required output
Return JSON with this shape:

```json
{
  "source_id": "marques2021-trace-elements-milks-plant-based-drinks",
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
No packet text found.
```
