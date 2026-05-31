---
type: ingredient
commodity: olives
title: "Olives"
label: "Olives"
aliases: [table-olives, canned-olives]
category: fruit
contamination_profile:
  Pb:
    status: populated
    typical_ppb: [10, 250]
    p95_ppb: 350
    confidence: low
    n_studies: 3
    last_reviewed: 2026-05-15
  Cd:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-16
  iAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-15
  tAs:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-15
  tHg:
    status: populated
    typical_ppb: [0, 0]
    p95_ppb: 0
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-15
  Ni:
    status: populated
    typical_ppb: [20, 200]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-15
  Al:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-15
  Cr:
    status: populated
    typical_ppb: [10, 100]
    p95_ppb: null
    confidence: low
    n_studies: 2
    last_reviewed: 2026-05-15
  Sn:
    status: populated
    typical_ppb: [0, 100]
    p95_ppb: null
    confidence: low
    n_studies: 1
    last_reviewed: 2026-05-15
  U:
    status: populated
    typical_ppb: [null, null]
    p95_ppb: null
    confidence: null
    n_studies: 0
    last_reviewed: 2026-05-15
drivers: [soil-uptake, geography, canning-can-leaching, processing-fraction]
lower_risk_variants: []
higher_risk_variants: ["[[ingredients/canned-olives]]"]
used_in_products: []
audience: [regulator, educator, consumer, app]
wiki_doi: null
updated: 2026-05-16
sources: 4
created_by: autonomy_v0
created_from: routing_unresolved
created_routed_sources: 3
---

# Olives

Olive (Olea europaea) is a Mediterranean tree fruit consumed primarily after curing (table olives) or pressing (olive oil; see [[ingredients/olive-oil]]). For table olives, the dominant heavy-metals concerns are lead (Pb) — driven by canning and to a lesser extent by atmospheric deposition on the fruit surface — and the cluster of soil-mobile metals (Ni, Cr) accumulated through root uptake. The currently loaded corpus on olives is three peer-reviewed studies spanning Turkey, Malta, and Iran ([[sources/karatasli2018-radionuclide-heavy-metal-turkey-olives]], [[sources/vella2024-malta-olive-cultivars-aas]], [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran]]). The corpus has a methodological gap for cadmium: the Maltese cultivar study measured Cd by FAAS at concentrations near the analytical floor, producing standard errors equal to or larger than the measured values; the Turkish table-olive study did not measure Cd or As at all; the Iranian canned-olive study did report Cd but the values are not yet extracted into structured form. Sample sizes are small (n=4, n=26, and 49 split across three product types), so the loaded picture is anchored on a few dozen samples rather than a representative-market distribution.

## Why this commodity accumulates heavy metals

Olive trees take metals from soil into the fruit through root uptake, with the rate dependent on soil pH, soil organic matter, and the bioavailability of the metal in question. Lead is the metal whose surface deposition on the olive fruit during fruit-set and ripening (from atmospheric particulates near roadways, industrial sources, and historical leaded-fuel residue in Mediterranean soils) supplements the root-uptake pathway with a direct-deposition pathway; washing and brining reduce surface lead but do not eliminate it. Nickel and chromium move through olive tissue at higher rates than lead because they are more soluble in the root zone; the Maltese cultivar work found roughly an order-of-magnitude variation in Ni and Cu across the skin, pit, solid waste, and liquid waste fractions of the same olive, with the liquid waste (the curing brine) carrying disproportionately high concentrations of the more soluble metals ([[sources/vella2024-malta-olive-cultivars-aas]]). The canning step adds a separate metal-load pathway: lead-soldered seams (rare in modern production but historically significant), tin-plate corrosion, and any contamination from the canning line itself. The Iranian canned-olive survey ([[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran]]) found mean Pb concentrations across canned pickled olives above the Codex Alimentarius permissible limit of 0.10 mg/kg for canned products, with the canning step the most plausible explanation for the elevated lead relative to fresh table olives.

## Heavy metal contamination profile

Per-analyte snapshot derived from the machine-readable `contamination_profile` in the frontmatter above. `data gap` indicates the literature has been reviewed for this commodity-analyte combination and no usable occurrence data was found (a finding, not a placeholder). The Key sources column shows the top 2-3 contributing sources by year and sample size, with numbered wikilink aliases.

| Analyte | Coverage | Typical (ppb) | p95 (ppb) | Confidence | Key sources |
|---------|----------|---------------|-----------|------------|-------------|
| Pb | n=3 | 10–250 | 350 | low | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]], [[sources/karatasli2018-radionuclide-heavy-metal-turkey-olives\|2]] |
| Cd | n=2 | 10–100 | — | low | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]], [[sources/vella2024-malta-olive-cultivars-aas\|2]] |
| iAs | data gap | — | — | — | — |
| tAs | data gap | — | — | — | — |
| tHg | n=1 | 0 | 0 | low | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]] |
| Ni | n=2 | 20–200 | — | low | [[sources/vella2024-malta-olive-cultivars-aas\|1]], [[sources/karatasli2018-radionuclide-heavy-metal-turkey-olives\|2]] |
| Al | data gap | — | — | — | — |
| Cr | n=2 | 10–100 | — | low | [[sources/karatasli2018-radionuclide-heavy-metal-turkey-olives\|1]] |
| Sn | n=1 | 0–100 | — | low | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|1]] |
| U | data gap | — | — | — | — |

## Ranges by source, region, and variety

The three loaded sources span three Mediterranean jurisdictions: Turkey (Adana, Osmaniye, Hatay provinces, southern Turkey, 26 table olive samples from 26 distinct districts), Malta (4 cultivars — Carolea, Cipressina, Leccino, Bidni — from a single cultivator), and Iran (Tehran market, 49 samples of canned tomato paste, canned olives, and pickled cucumbers from the 5 most popular brands). The Turkish data did not measure cadmium or arsenic, limiting comparative-regulatory interpretation. The Maltese cultivar work found no significant concentration differences between the four cultivars but significant differences across olive fractions (skin, pit, solid waste, liquid waste), suggesting cultivar choice is not a primary lever but processing-fraction handling is. The Iranian canned-olive data is the only quantitative anchor for the canning-driven lead elevation; values for canned olives specifically are not extracted from the paper's tables into this profile yet. Variety-level breakdowns across the Mediterranean basin (Spanish Manzanilla, Greek Kalamata, Italian Castelvetrano, Tunisian olive varieties) are not represented in the current corpus and are flagged for future ingestion.

## Processing effects

The transition from fresh olive to table olive passes through brining, curing, and frequently canning. Brine curing in plastic or glass vessels does not add metal load; brine curing in lead-glazed ceramic or improperly sealed metal containers can add measurable Pb, though the corpus does not currently quantify this for olives specifically. The Maltese cultivar study reports that processing fractions concentrate metals unevenly: the liquid waste fraction (the spent brine) carries disproportionately high concentrations of soluble metals, and the solid waste (pomace) carries metals at intermediate levels between the skin and the pit ([[sources/vella2024-malta-olive-cultivars-aas]]). Canning is the single largest processing intervention for the lead profile. The Iranian survey found canned pickled olives carrying mean Pb above the Codex Alimentarius limit for canned products (0.10 mg/kg), with the same elevation observed in companion canned tomato paste and pickled cucumbers from the same brand cohort ([[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran]]). The canning-driven Pb elevation is not olive-specific; it is a canned-product feature. Olive oil pressing is a separate processing pathway with a different metal profile (most of the metal load partitions into the pomace rather than the oil); see [[ingredients/olive-oil]].

## Ingredient-derivative risk

Table olives sold whole (fresh or jarred in brine) represent the baseline. Canned olives carry elevated lead per the Iranian survey above. Olive paste (tapenade), spreads, and pre-pitted olives undergo additional mechanical handling that could introduce trace metals from equipment surfaces, though this is not quantified in the current corpus. Olive pomace and spent brine — the processing waste streams — concentrate metals on a per-unit-mass basis and are sometimes re-used as soil amendment in olive-growing regions, creating a potential return-loop for metals back into the next harvest. Olive leaf extract, sold as a dietary supplement, draws on a different tissue type and carries its own (largely uncharacterised in the loaded corpus) heavy-metals profile.

## Mitigation options

### Sourcing levers

Sourcing from origin regions with documented low soil lead background and away from major roadway corridors is the highest-impact lever for the surface-deposition Pb pathway. The Mediterranean basin has wide regional variance in soil lead from historical leaded-fuel deposition, and producers in heavily-trafficked coastal corridors carry higher baseline Pb than inland-mountain producers. Specifying compliance with Codex Alimentarius and EU 2023/915 limits (Pb 0.10 mg/kg for canned products, 0.30 mg/kg for other prepared olives) at the supplier level is the standard intervention.

### Agronomic levers

Soil pH management around 6.5–7.0 maintains Pb in poorly-bioavailable forms; calcium amendment reduces root uptake of cadmium and to a lesser extent lead. Olive groves on historically leaded-fuel-corridor soils benefit from in-row soil testing and, where elevated Pb is confirmed, from phytostabilisation with companion ground cover that immobilises Pb in surface soil. Irrigation water source matters where groundwater carries dissolved cadmium or nickel.

### Processing levers

Discard the curing brine (rather than re-using it for subsequent batches) to prevent accumulation of soluble metals in the liquid fraction documented in the Maltese cultivar work ([[sources/vella2024-malta-olive-cultivars-aas]]). For canned product specifically, switching from older lead-soldered cans to fully welded modern cans eliminates the historical canning-Pb pathway; for premium product, glass-jar packaging removes the can-leaching pathway entirely. The Iranian data ([[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran]]) implicates the canning step itself as a Pb source even in modern Iranian production, which suggests the choice of can supplier and can-coating technology remains a brand-controlled lever.

### Formulation levers

Substituting jarred or pouched olives for canned olives reduces the canning-driven Pb load; the magnitude of the reduction is implied by the difference between fresh-olive and canned-olive Pb levels in the literature but is not yet quantitatively pinned for this commodity.

### Testing and QC levers

Lot-level ICP-MS testing of canned product with detection floors of ≤ 5 ppb Pb (well below the Codex 100 ppb limit for canned products) is the standard intervention. For fresh and jarred olives, surface-vs-flesh testing distinguishes the surface-deposition Pb pathway from the root-uptake pathway and informs whether washing or brining adjustments are warranted.

### Packaging and storage levers

Glass jars eliminate can-leaching. Modern fully-welded steel cans with food-grade interior coatings are acceptable. Lead-soldered cans (largely phased out globally but persisting in some markets) and tin-plate cans with damaged coatings are the historical risk packages. Ceramic glazes used for premium-presentation olive packaging require certification against EU Regulation 84/500/EEC or 21 CFR 173.310.

## Regulatory limits that apply

The Codex Alimentarius General Standard for Contaminants and Toxins in Food and Feed (CXS 193-1995) sets a lead maximum of 0.10 mg/kg for canned products in the broader food contaminants framework. EU Regulation 2023/915 establishes the lead maximum for "vegetables, including fungi, root and tuber vegetables, leguminous vegetables, leaf vegetables and fresh herbs, excluding [exceptions]" at 0.10 mg/kg fresh weight, and for table olives specifically the EU applies general fruit-vegetable limits depending on the preparation. No olive-specific FDA action level has been established. The Iranian survey's finding that canned olives in the Tehran market commonly exceed the Codex 0.10 mg/kg canned-product Pb limit reflects an enforcement gap rather than the absence of a regulatory framework.

<!-- BEGIN: hmi-source-legend -->
## Sources

_Auto-generated from source-page frontmatter. The "Used on this page for" column is populated by the orchestrator's POPULATE-SOURCE-LEGEND action; pending entries appear as `*[awaiting synthesis]*`._

| # | Citation | Year | Type | Used on this page for |
| --- | --- | ---: | --- | --- |
| 1 | [[sources/shavali-gilani2025-canned-tomato-olive-pickle-iran\|Shavali-gilani et al. 2025]]. *Investigation of heavy metal levels in canned tomato paste, olives, and pickled cucumbers*, Scientific Reports | 2025 | Peer-reviewed | Canned-olive Pb elevation above the Codex 0.10 mg/kg limit in Iranian-market product; Sn and tHg in the canned-olive matrix |
| 2 | [[sources/shavalig2025-canned-tomato-olives-pickles-iran\|Shavali-gilani et al. 2025]]. *Investigation of heavy metal levels in canned tomato paste, olives, and pickled*, Scientific Reports | 2025 | Peer-reviewed | IR Cd, Cu, tAs, Fe, Pb, Sn, Zn, tHg occurrence in 49 canned samples (tomato paste, olives, pickled cucumbers) from five popular brands in Tehran, Iran (n=49) |
| 3 | [[sources/vella2024-malta-olive-cultivars-aas\|Vella et al. 2024]]. *Investigation on the Concentration of Heavy Metals found in Local Olives and Waste Material through AAS*, MCAST Journal of Applied Research & Practice, Vol. 8, Issue 2 | 2024 | Peer-reviewed | Maltese cultivar-vs-fraction Ni, Cu, Cr distribution across skin, pit, solid waste, and liquid waste; demonstrates processing-fraction lever |
| 4 | [[sources/karatasli2018-radionuclide-heavy-metal-turkey-olives\|Karatasli 2018]]. *Radionuclide and Heavy Metal Content in the Table Olive (Olea europaea L.) from the Mediterranean Region of Turkey*, Nuclear Technology & Radiation Protection | 2018 | Peer-reviewed | Turkish-Mediterranean table-olive Pb, Ni, Cr, and trace-metal occurrence distribution across 26 districts |
<!-- END: hmi-source-legend -->

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [6461a39](https://github.com/paleofoundation/heavymetalindex/commit/6461a39) | 2026-05-31 | codex sprint 2026-05-31 21:48: end-of-fire cleanup |
| [324868f](https://github.com/paleofoundation/heavymetalindex/commit/324868f) | 2026-05-31 | codex sprint 2026-05-31 1639: end-of-fire cleanup |
| [3f1f72d](https://github.com/paleofoundation/heavymetalindex/commit/3f1f72d) | 2026-05-31 | v0→v1 reconciliation complete: body-table regenerator (sources-preserving) + restore spices Pb + sync 242 tables |
| [9658f6b](https://github.com/paleofoundation/heavymetalindex/commit/9658f6b) | 2026-05-30 | codex sprint 2026-05-30 1055: post-ingest generated checks |
| [70ae1cc](https://github.com/paleofoundation/heavymetalindex/commit/70ae1cc) | 2026-05-30 | codex sprint 2026-05-30 22:30: end-of-fire cleanup |
<!-- END: hmi-page-history -->
