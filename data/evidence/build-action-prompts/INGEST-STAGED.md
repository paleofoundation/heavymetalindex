# Session prompt: ingest staged PDFs

You have 95 PDFs in `raw/manual-fetch/seasonal-geographic-variance/` (some at the top level from Karen's manual drops, some in the `auto-fetched/` subfolder from `npm run wishlist:fetch`).

Your job: produce source pages per CLAUDE.md Part 6 and Part 8.

## Workflow

For each PDF:

1. Read the file (Marker-converted markdown if available, otherwise extract from PDF).
2. Tell Karen the TL;DR (3-5 sentences) IF she is in the session; otherwise just write the source page.
3. Create the source page at `wiki/sources/<cite-key>.md` using the template in Part 6. Frontmatter must include: cite_key, title, authors, year, publication, doi (if findable), source_type, evidence_tier, license (if known), raw_path, metals, ingredients (as wikilinks), products (as slugs), matrices, jurisdictions.
4. Move the original PDF from the manual-fetch folder into `raw/studies/` or `raw/reports/` per CLAUDE.md Part 4 directory conventions.

Routing fan-out happens automatically per Part 5b; the watcher in `npm run watch:sources` picks up new source pages and refreshes the routing audit within seconds.

Synthesis (contamination_profile updates on ingredient pages) is a SEPARATE workflow per Part 9. Do NOT update ingredient `contamination_profile` blocks during this ingest. The routing audit identifies which cells become eligible for synthesis after these sources land.

## What NOT to do

- Do not update ingredient `contamination_profile` blocks during ingest.
- Do not edit `data/evidence/product_source_routing_audit.csv` by hand.
- Do not edit inside `<!-- BEGIN: ... -->` / `<!-- END: ... -->` markers on product pages.
- Do not invent new product or ingredient pages mid-ingest. If a source declares an unresolved target, surface it in your batch report; Karen approves new pages per Part 10.

## At the end

Append a batch report at `wiki/batch-reports/<batch-id>-<date>.md` per CLAUDE.md Part 17 format, listing source pages created, any new-page proposals, any contradictions flagged, and any papers that failed to ingest.

## Files in scope (95)

1. raw/manual-fetch/seasonal-geographic-variance/2022-23_toxic metals in selected foods_report_en.pdf
2. raw/manual-fetch/seasonal-geographic-variance/20250922_CP 7304.019 Toxic Elements in Food, Foodware and Radionuclides in Food 508-Compliant.pdf
3. raw/manual-fetch/seasonal-geographic-variance/25th-ATDS.pdf
4. raw/manual-fetch/seasonal-geographic-variance/A comparison of the potential health risk of aluminum and heavy metals in tea leaves and tea infusion of commercially available green tea in Jiangxi, China.pdf
5. raw/manual-fetch/seasonal-geographic-variance/A multi-year heavy metal analysis of 72 dark chocolate and cocoa products in the USA.pdf
6. raw/manual-fetch/seasonal-geographic-variance/Accumulation of Heavy Metals in Tea Leaves and Potential Health Risk Assessment: A Case Study from Puan County, Guizhou Province, China.pdf
7. raw/manual-fetch/seasonal-geographic-variance/Addressing Cadmium in Cacao Farmland: A Path to Safer, Sustainable Chocolate.pdf
8. raw/manual-fetch/seasonal-geographic-variance/Arsenic in Apple Juice Analytical Results from the 2005-2011 Toxic Elements Food and Foodware Program _ FDA.pdf
9. raw/manual-fetch/seasonal-geographic-variance/Arsenic in Rice: II. Arsenic Speciation in USA Grain and Implications for Human Health.pdf
10. raw/manual-fetch/seasonal-geographic-variance/Arsenic, Organic Foods, and Brown Rice Syrup.pdf
11. raw/manual-fetch/seasonal-geographic-variance/Arsenic-in-Rice-and-Rice-Products-Risk-Assessment-Report-PDF.pdf
12. raw/manual-fetch/seasonal-geographic-variance/ArsenicAnalyticResults-RiceCereal-2016.pdf
13. raw/manual-fetch/seasonal-geographic-variance/Bioaccumulation of heavy metals in high Andean crops of the Peruvian Andes: comparative evaluation between irrigated and dry systems.pdf
14. raw/manual-fetch/seasonal-geographic-variance/CR_FSASC_Arsenic_Analysis_Nov2014.pdf
15. raw/manual-fetch/seasonal-geographic-variance/Cadmium and Lead in Cocoa Powder and Chocolate Products in the U.S. Market.pdf
16. raw/manual-fetch/seasonal-geographic-variance/Cadmium_in_Cacao_From_Latin_America_and_The_Caribbean.pdf
17. raw/manual-fetch/seasonal-geographic-variance/Can nitrifiers from the sidestream deammonification process be a remedy for the N-overload of the mainstream reactor?.pdf
18. raw/manual-fetch/seasonal-geographic-variance/Characterization-source-identification-risk-assessment-of-potentially-toxic-elements-PTEs.pdf
19. raw/manual-fetch/seasonal-geographic-variance/Comparison-of-Essential-and-Toxic-Metals-Levels-in-some-Herbal-Teas-a-Systematic-Review (1).pdf
20. raw/manual-fetch/seasonal-geographic-variance/Comparison-of-Essential-and-Toxic-Metals-Levels-in-some-Herbal-Teas-a-Systematic-Review.pdf
21. raw/manual-fetch/seasonal-geographic-variance/Content and the relationship between cadmium, nickel, and lead 2 concentrations in Ecuadorian cocoa beans from nine provinces.pdf
22. raw/manual-fetch/seasonal-geographic-variance/Current Status and Health Risk Assessment of Heavy Metals Contamination in Tea across China.pdf
23. raw/manual-fetch/seasonal-geographic-variance/Dataset of metals and metalloids in food crops and soils sampled across the mining region of Moquegua in Peru.pdf
24. raw/manual-fetch/seasonal-geographic-variance/Determination for major chemical contaminants in tea (Camellia sinensis) matrices: A review.pdf
25. raw/manual-fetch/seasonal-geographic-variance/Determination of Potentially Toxic Elements in Quinoa Crops Located in the Huacaybamba–Huanuco-Peru Area.pdf
26. raw/manual-fetch/seasonal-geographic-variance/Determination-of-toxic-metals-in-canned-tuna-sold-in-developed-and-developing-countries-Health.pdf
27. raw/manual-fetch/seasonal-geographic-variance/Dietary Risk Assessment of Cadmium Exposure Through Commonly Consumed Foodstuffs in Mexico.pdf
28. raw/manual-fetch/seasonal-geographic-variance/Dietary exposure assessment of aluminium and cadmium from cocoa in relation to cocoa origin pone.0217990.pdf
29. raw/manual-fetch/seasonal-geographic-variance/Dilution of rice with other gluten free grains to lower inorganic arsenic in foods for young children in response to European Union regulations provides impetus to setting stricter standards.pdf
30. raw/manual-fetch/seasonal-geographic-variance/EFSA Journal - 2010 -  - Scientific Opinion on Lead in Food.pdf
31. raw/manual-fetch/seasonal-geographic-variance/EFSA Journal - 2021 -  - Chronic dietary exposure to inorganic arsenic.pdf
32. raw/manual-fetch/seasonal-geographic-variance/EFSA Journal - 2024 -  - Update of the risk assessment of inorganic arsenic in food.pdf
33. raw/manual-fetch/seasonal-geographic-variance/Evaluation and Dietary Exposure Assessment of Selected Toxic Trace Elements in Durum Wheat (Triticum durum) Imported into the Italian Market: Six Years of Official Controls.pdf
34. raw/manual-fetch/seasonal-geographic-variance/Evaluation-of-trace-metallic-element-levels-in-coffee-by-icp-ms-a-comparative-study-among.pdf
35. raw/manual-fetch/seasonal-geographic-variance/FiscalYear2018_ArsenicInInfantRiceCerealsAssignmentData (1).pdf
36. raw/manual-fetch/seasonal-geographic-variance/FiscalYear2018_ArsenicInInfantRiceCerealsAssignmentData.pdf
37. raw/manual-fetch/seasonal-geographic-variance/Geographical Variation in Total and Inorganic Arsenic Content of Polished (White) Rice meharg2009.pdf
38. raw/manual-fetch/seasonal-geographic-variance/Geographical variation in inorganic arsenic in paddy field samples and commercial rice from the Iberian Peninsula.pdf
39. raw/manual-fetch/seasonal-geographic-variance/Global Sourcing of Low‑Inorganic Arsenic Rice Grain.pdf
40. raw/manual-fetch/seasonal-geographic-variance/Heavy metal accumulation in leaves and beans of cacao (Theobroma cacao L.) in major cacao growing regions in Peru 10.1016@j.scitotenv.2017.06.122.pdf
41. raw/manual-fetch/seasonal-geographic-variance/Heavy metal contamination and health risk assessment in grains and grain-based processed food in Arequipa region of Peru.pdf
42. raw/manual-fetch/seasonal-geographic-variance/Heavy-metal-loid-s-in-agricultural-soil-from-main-grain-production-regions-of-China-Bioaccessibility.pdf
43. raw/manual-fetch/seasonal-geographic-variance/InorganicArsenicAppleJuice-FinalGuidance-June2023-05312023.pdf
44. raw/manual-fetch/seasonal-geographic-variance/MITIGATION OF CADMIUM ACCUMULATION IN COCOA BEANS USING ARBUSCULAR MYCORRHIZAL FUNGI, BIOCHAR AND Callisia repens.pdf
45. raw/manual-fetch/seasonal-geographic-variance/Market Basket Survey Shows Elevated Levels of As in South Central U.S. Processed Rice Compared to California: Consequences for Human Dietary Exposure williams2007.pdf
46. raw/manual-fetch/seasonal-geographic-variance/Monitoring and risk assessment due to presence of heavy metals and pesticides in tea samples.pdf
47. raw/manual-fetch/seasonal-geographic-variance/Monitoring of essential and heavy metals in green tea from different geographical origins.pdf
48. raw/manual-fetch/seasonal-geographic-variance/Occurrence, accumulation, and risk assessment of trace metals in tea (Camellia sinensis): A national reconnaissance.pdf
49. raw/manual-fetch/seasonal-geographic-variance/Occurrence, exposure and health risk assessment of heavy metals in green tea samples cultivated in Hangzhou area.pdf
50. raw/manual-fetch/seasonal-geographic-variance/Perspective on Cadmium and Lead in Cocoa and Chocolate.pdf
... and 45 more

## Reference

- CLAUDE.md Part 6 (source-page template), Part 8 (ingest workflows)
- OPERATING.md Part 3 (act without asking for routine ingest decisions)
- Per Karen's standing rule: do not introduce approval gates for decisions you can make on your own.
