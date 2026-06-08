---
type: lint
title: Audit quarantines
updated: 2026-06-09
---

# Audit quarantines

Pages listed here should not be used for downstream HMT&C threshold setting, course content, or app data until Karen has reviewed the cited issue.

## 2026-05-17

- [[sources/sushila2024-heavy-metals-human-milk-review]] - QUARANTINE. The source text has an unresolved cadmium country-label contradiction: it reports Iraq as having the highest Cd concentration (Ci=57.33 mg/L), assigns the matching EDI/HQ/CR values (EDI=4.7 mg/kg/day, HQ=4.7, CR=3.62) to Iran, and then states that Lebanon, Cyprus, and Iraq exceeded the recommended allowance. Codex corrected metadata and units that could be verified, but the country-specific Cd outlier should not be used until checked against the figures or underlying primary data.

## 2026-06-09

- [[sources/bhat2022-brick-kilns-milk-rice-heavy-metals]] - QUARANTINE. Autonomous audit found two cross-row transpositions in the original `## Key numbers` section: rice-bran Pb values were populated from the soil-Cd row, and soil-Cd values were populated from the soil-Cr row with one fabricated D1 value (23.89±0.27) that does not exist in Table 1. All transposed values have been corrected against Table 1 (p. 385) and Mean±SE labelling has been added, but the page is quarantined for Karen to confirm the corrected values before downstream HMTc/courses/app use because the underlying ingest-time PDF-table extraction was unreliable. The frontmatter `publication` field was also corrected from "International Journal of Agriculture, Environment and Biotechnology" to "Journal of Animal Research" (the actual journal per the PDF header).
