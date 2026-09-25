---
type: source
cite_key: stone2012-wa-qapp-formaldehyde-voc-metals-childrens-products
title: "Quality Assurance Project Plan: Formaldehyde, Volatile Organic Compounds and Metals in Children's Products"
authors: ["Stone A"]
year: 2012
publication: "Washington State Department of Ecology, Publication 12-07-024 (April 2012)"
doi: null
no_doi_assigned: true
access_url: "https://apps.ecology.wa.gov/publications/documents/1207024.pdf"
retrieval_date: 2026-09-25
source_type: regulatory
evidence_tier: A
tier_rationale: "Washington Ecology quality-assurance plan for formaldehyde, volatile organics, and metals in children's products. The metals table matches the other 2012 plans and adds total chromium. It contains no wipe results."
license: "us-state-government-public-domain"
raw_path: "raw/studies/Ecology_2012_QAPP_12-07-024_formaldehyde_VOC_metals_childrens_products_2cfe.pdf"
raw_sha256: ffb061e130dad0a58d199019a4eeaf0758817d7b50325d0cf5b699f6d3cf396a
metals: [Sb, tAs, Cd, Cr, Pb, tHg]
ingredients: []
products: []
matrices: [childrens-product]
jurisdictions: [US-WA]
routing_input_gaps:
  - "products left empty: this plan does not name baby wipes and it reports no concentrations."
near_duplicates: ["[[sources/stone2012-wa-qapp-parabens-metals-childrens-cosmetics]]", "[[sources/stone2012-wa-qapp-phthalates-metals-packaging]]", "[[sources/stone2012-wa-qapp-phthalates-metals-childrens-products]]", "[[sources/stone2021-wa-metals-childrens-consumer-products]]"]
sample_n: null
sample_population: "Planning document only. No samples are analyzed in this plan."
evidence_fitness:
  supports:
    - the-digestion-and-reporting-limits-this-formaldehyde-and-metals-plan-specified
  does_not_support:
    - a-wipe-concentration
    - hexavalent-chromium
    - nickel
audience: [regulator, researcher]
sources: 0
updated: 2026-09-25
---

# Stone 2012. Ecology QAPP 12-07-024, formaldehyde, VOCs, and metals

This is a quality-assurance plan, not a results report. Alex Stone wrote it for the Washington State Department of Ecology. Publication 12-07-024, April 2012, 24 pages.

## Key numbers

The laboratory section says metals samples will be prepared following EPA 3052, microwave complete digestion, and measured using ICP-MS or cold-vapor atomic absorption for mercury. Table 7 lists antimony, arsenic, cadmium, chromium, cobalt, copper, lead, molybdenum, and zinc at a reporting limit of 1.0 ppm, each as EPA 3052, ICP-MS, EPA 6020. Mercury is 0.1 ppm on that same ICP-MS row. Formaldehyde on the plan is a separate HPLC method, reporting limit 5.0 ppm. That formaldehyde row is not a wipe result.

The plan does not mention wipes. The results report's bibliography lists this title, 24 pages, as Ecology 2012d. The results report's methods narrative calls the formaldehyde and VOC plan Ecology 2012c and the packaging plan Ecology 2012d. The letters in the narrative and the letters in the bibliography do not match. The four opened PDFs match the bibliography by title and page count.

## Methods (brief)

Results from the work that followed are in [[sources/stone2021-wa-metals-childrens-consumer-products]].

## Evidence fitness

The plan supports the metals method and reporting limits it prints. It does not support a concentration in a baby wipe.

## Limitations

The same sub-reporting-limit caveat applies as on the sibling plans. A printed value in the 2014 results table is the table value. It is not silently rewritten as less-than 1.0 ppm.

## Related evidence

- [[sources/stone2021-wa-metals-childrens-consumer-products]]
- [[synthesis/heavy-metals-in-baby-wipes]]
