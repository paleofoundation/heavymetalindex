# Manual-fetch stops — 2026-05-30

## STOP — gap-fermented-beverages-non-tea-based-cd_2025_10-18805-ajdfr-dr-2287.pdf

**Folder:** `raw/manual-fetch/seasonal-geographic-variance/auto-fetched/`
**Suggested handle:** `AF_gap-fermented-beverages-non-tea-based-cd-2025-10-1`
**DOI:** 10.18805/ajdfr.DR-2287
**Citation:** Ghose, Duarah, Nongrum, Singha, Laloo (2025). Sensory Assessment, Nutritional and Antibacterial Effect of Kombucha Incorporated with *Citrus grandis* (L.) Extract. *Asian Journal of Dairy and Food Research.*

**Reason:** No heavy-metal occurrence data reported. The abstract methods state "Safety analysis included testing for the presence of heavy metals, specifically lead and cadmium," but neither Pb nor Cd values appear anywhere in the body, in Table 3 (physical parameters), in Table 4 (nutritive analysis — only Fe, Mn, Zn, Cu), in figures, or in the discussion. Classic "claimed in abstract, never reported in results" pattern.

**Duplicate-skip cleanup:** The same paper was auto-fetched twice by the discover skill — once under the `cd` gap label and once under the `pb` gap label (same DOI, identical SHA `fcac8087…d63b0`). A previous tick correctly routed both copies to `skipped/skip_no-heavy-metal-data/`, but the original `cd`-labeled copy in `auto-fetched/` was not deleted, so the daemon kept re-encountering it. This tick deletes the orphaned `auto-fetched/` copy. No information loss — identical bytes remain in the skip folder for audit-trail purposes.

**No wiki source page written. No routing audit run. No audit-queue entry.**

Pattern note for daemon: when a paper is adjudicated as a skip, the source PDF in `auto-fetched/` should be removed (or moved) in the same tick that creates the skip-folder copy, not left in place. Otherwise the daemon loops on the same PDF on every subsequent tick.
