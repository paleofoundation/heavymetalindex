---
type: source
cite_key: efsa-nickel-contam-2020
title: "Update of the Risk Assessment of Nickel in Food and Drinking Water"
authors: ["EFSA Panel on Contaminants in the Food Chain (CONTAM)"]
year: 2020
publication: "EFSA Journal 2020;18(11):6268"
doi: 10.2903/j.efsa.2020.6268
source_type: gov-report
evidence_tier: A
raw_path: "raw/reports/EFSA Journal - 2020 -  - Update of the risk assessment of nickel in food and drinking water.pdf"
sha256: dd04aab5a259f92b64443640da22f6974b7c3ce1b2495b876e46d635729608dc
access_date: 2026-04-25
access_url: https://www.efsa.europa.eu/en/efsajournal/pub/6268
license: public-reference-only
metals: [Ni]
ingredients: ["[[ingredients/water]]", "[[ingredients/cocoa]]", "[[ingredients/peanuts]]", "[[ingredients/lentils]]", "[[ingredients/cereals]]"]
products: []
jurisdictions: [EU]
superseded_by: null
wiki_doi: null
sampling_locations: []
sampling_year_range: null
updated: 2026-06-03
---

# EFSA CONTAM 2020 — Nickel in Food and Drinking Water

## Summary

The EFSA CONTAM Panel update of the risk assessment of nickel in food and drinking water (adopted September 2020, EFSA Journal 2020;18(11):6268) establishes a tolerable daily intake (TDI) for chronic oral nickel exposure of **13 µg Ni/kg body weight per day**, anchored on increased post-implantation loss in rats with a BMDL10 of 1.3 mg Ni/kg/day as the reference point. For acute oral exposure, the Panel identified eczematous flare-up reactions in nickel-sensitized humans (systemic contact dermatitis) as the critical effect, with a LOAEL of 4.3 µg Ni/kg bw. The Panel applied a margin-of-exposure approach for acute exposure with MOE ≥ 30 considered low concern. The assessment used more than 47,000 European nickel occurrence data points.

The assessment's central regulatory conclusion is an exceedance: estimated chronic dietary nickel exposure exceeds the TDI in the youngest consumers. The 95th-percentile chronic exposure generally exceeded the TDI in toddlers and other children, and in infants in some surveys, while remaining below or at the TDI in adolescents and adults. The Panel concluded this exceedance may raise health concerns in those young age groups, noting that even though the post-implantation-loss endpoint that anchors the TDI is not itself relevant to children, the TDI is also protective for effects that are, such as neurotoxic effects. For the roughly 15 percent of the population who are nickel-sensitized, the margin of exposure of 30 needed to protect against acute eczematous flare-up reactions (systemic contact dermatitis) is not achieved at mean or 95th-percentile exposure, which the Panel concluded raises an acute health concern. This exceedance is the scientific basis the European Commission cited when it set maximum levels for nickel in food and issued [[regulations/eu-2024-907-nickel-monitoring|Commission Recommendation (EU) 2024/907]] directing Member States to monitor nickel across chocolate, cereals, tea, soy, nuts and other high-nickel foods through 2027.

_Provenance note (2026-06-03): the canonical ingested PDF is at the `raw_path` above (sha256 dd04aab…). Two further identical copies of this opinion were supplied 2026-06-03 in the June 3 manual-fetch batch — `raw/Manual Fetch Kimi /June 3 Folder/EFS2-18-e06268.pdf` (sha256 b83f35fd…) and `raw/Manual Fetch Kimi /June 3 Folder/EFSA Journal - 2020 -  - Update of the risk assessment of nickel in food and drinking water 2.pdf` (sha256 a7dac274…). Both are the same EFSA Journal 2020;18(11):6268 and required no separate ingest._

| Parameter | Value |
| --- | --- |
| TDI (chronic oral) | 13 µg Ni/kg b.w./day |
| Critical chronic endpoint | Increased post-implantation loss in rats |
| Chronic BMDL10 | 1.3 mg Ni/kg b.w./day |
| Critical acute endpoint | Eczematous flare-up (systemic contact dermatitis) in Ni-sensitized humans |
| Acute LOAEL | 4.3 µg Ni/kg b.w. |
| MOE threshold for low concern | ≥ 30 |
| Occurrence dataset | More than 47,000 European data points |
| Chronic exposure vs TDI | 95th-percentile exposure exceeds the TDI in toddlers, other children, and some infants |
| Nickel-sensitized population | ~15%; acute MOE of 30 not achieved at mean or 95th-percentile exposure |
| Downstream EU action | Maximum levels established for nickel in food; monitoring directed by Recommendation (EU) 2024/907 |

## Wiki pages updated on ingest

- [[metals/nickel]]
- [[regulations/efsa-nickel-tdi]]

## Verification notes

- Audit subagent (2026-06-03) flagged the "~15%" nickel-sensitised-prevalence framing as not anchored on the pages it read (pp. 1, 3–6); verified false positive against the source — the paper itself states "Nickel allergic contact dermatitis has a prevalence of around 15% in the EU, Asia and the USA" (EFSA 2020;18(11):6268, p. 65 of the assessment body, sensitisation prevalence chapter). The wiki summary is faithful to the source.
- Audit subagent (2026-06-03) flagged `[[regulations/eu-2024-907-nickel-monitoring]]` as a forward reference not in the taxonomy snapshot; verified false positive — the page `wiki/regulations/eu-2024-907-nickel-monitoring.md` exists in the live repo (the snapshot was simply not regenerated when the regulation page was added). The wikilink resolves.

<!-- BEGIN: hmi-page-history -->
## Page history

The five most recent substantive edits to this page. The full version history lives in [git](https://github.com/paleofoundation/heavymetalindex); when DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Description |
| --- | --- | --- |
| [aca5e21](https://github.com/paleofoundation/heavymetalindex/commit/aca5e21) | 2026-06-09 | frank: generated-layer + dashboard + gap-metric + ledger refresh |
| [c679df8](https://github.com/paleofoundation/heavymetalindex/commit/c679df8) | 2026-06-08 | chore: snapshot FRANK generated layer to clean baseline (mechanical history-table + evidence-register regen; no synthesis changes) |
| [8707c66](https://github.com/paleofoundation/heavymetalindex/commit/8707c66) | 2026-06-05 | frank: dashboard + gap-metric + ledger refresh |
| [140e84e](https://github.com/paleofoundation/heavymetalindex/commit/140e84e) | 2026-06-03 | refresh manual fetch generated outputs |
| [0aa71d5](https://github.com/paleofoundation/heavymetalindex/commit/0aa71d5) | 2026-06-03 | ingest: EU 2024/907 nickel-monitoring recommendation + EFSA exceedance; ground Brief 7 nickel in primaries |
<!-- END: hmi-page-history -->
