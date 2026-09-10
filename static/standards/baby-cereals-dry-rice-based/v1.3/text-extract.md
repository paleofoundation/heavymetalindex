# v1.3 PDF text extract — baby-cereals-dry-rice-based

Decoded from `standard.pdf` (sha256 `87b56ce70ec7ba14122dbb38be0ca28081e2eba1c46fc0ceb72212b99b729a22`) via pypdf. CID wrapping splits some register IDs; values cross-checked against compiled cells.

## Header (verbatim)

`Version 1.3  ·  Effective 2026-09-10  ·  Native basis: as_sold  ·  8/8 totals with a published limit · plus Inorganic arsenic (iAs)`

## Cap rule on page 1 (verbatim)

`When both a species and its parent total are numeric, the published species ceiling is min(species floor, parent total) by identity (iAs ≤ tAs, MeHg ≤ tHg, Cr-VI ≤ Cr); the uncapped species instrument remains in the derivation table.`

## Claim table (published ceilings)

| Analyte | Published limit (ppb) | Binding | Disposition | Notes |
| --- | ---: | --- | --- | --- |
| Lead (Pb) | 20 | EU | gov_floor | |
| Cadmium (Cd) | 40 | EU | gov_floor | |
| Total arsenic (tAs) | 50 | India | gov_floor | `in_tas_infant-milk-substitute-and-infant-foods_50` |
| Inorganic arsenic (iAs) | **50** | US-FDA | gov_floor | FDA 100 capped by India tAs 50 via iAs≤tAs |
| Mercury (tHg) | 8 | Israel | read_across | |
| Nickel (Ni) | 3000 | EU | gov_floor | |
| Aluminium (Al) | 500 | AU-NZ | read_across | |
| Tin (Sn) | 5000 | India | gov_floor | |
| Total chromium (Cr) | 1000 | HK | read_across | |

MeHg and Cr-VI are not printed as claim numbers (no worldwide infant-cereal species ML). They remain reflex metadata. The kill-gate still applies if they later become numeric.

## Before / after (this edition)

| Cell | v1.2 (#134 TAS-1) | v1.3 |
| --- | --- | --- |
| tAs | 50 India gov_floor | 50 India gov_floor (unchanged; instrument verified) |
| iAs | **100** FDA gov_floor | **50** = min(FDA 100, India tAs 50), cap disclosed |
| Header | `8/8 totals · plus Inorganic arsenic (iAs)` | same header; both rows printed; iAs now 50 |

Physics: a published iAs of 100 beside tAs 50 is impossible (iAs ≤ tAs). The derivation table still lists the uncapped FDA/CA/KR 100 instruments.
