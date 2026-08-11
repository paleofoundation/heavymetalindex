---
title: "Primary-source reconciliation — worldwide infant-food limits"
type: workbench-reconciliation
audience: [internal]
noindex: true
updated: 2026-08-03
---

# Primary-source reconciliation

Karen supplied six primary regulatory documents to verify/upgrade the worldwide limits ingested
earlier from secondary sources. Files archived at `raw/regulatory/worldwide-primary/`. Extraction
run (6 agents, exact printed-text per row) at `2026-08-03-primary-source-extraction.json`.

## Headline: the primaries confirm the fleet's secondary values, with two corrections and one flag.

High agreement across China, Brazil, US-FDA, India, Codex. No wholesale errors in the earlier
secondary ingest. Two data corrections and one flag below; none of them change a "strictest
worldwide" standard, but they matter for register accuracy.

## Corrections applied

| Cell | Was (secondary) | Now (primary) | Source |
|---|---:|---:|---|
| Brazil, Pb, cereal-based infant food | 20 | **50** | ANVISA IN 88/2021 Annex I §1.3 (0.05 mg/kg, as sold) |
| Brazil, Pb, transition/weaning food | 20 | **150** | ANVISA IN 88/2021 Annex I §1.3 (0.15 mg/kg, as sold) |

The Brazil correction was trusted because I read the adjacent cadmium (0.05→50) and inorganic-arsenic
(0.15→150) cereal rows in the same IN 88 table directly, and both matched the agent's extraction —
verifying the agent's Brazil reads before overwriting.

## Additions

| Cell | Value | Source |
|---|---:|---|
| China, Pb, FSMP for 1–10 year olds (excl. infant FSMP) | **150** | GB 2762-2022 Table 1 (0.15 mg/kg, solid product) |

## The Codex conflict — resolved by direct read

The extraction agent reported Codex **infant-formula lead = 20** from the volume's
`Codex_CXS193_2023.pdf`. That is wrong — it grabbed the *cereal-based foods* row (20) above the
formula row. I read the current Codex CXS 193 (amended 2025) lead table directly (page 64):

- **Infant formula / FSMP for infants / follow-up formula: 0.01 mg/kg = 10 µg/kg**, "the ML applies
  to the formula as consumed" (CXS 72-1981 & 156-1987).
- Cereal-based foods for infants and young children: 0.02 = 20 µg/kg (as sold; not reconstituted).
- Ready-to-eat meals for infants: 0.02 = 20 µg/kg.
- Fruit juices (incl. for infants): 0.03 = 30; grape juice: 0.04 = 40.

The register's existing Codex formula value (10) is correct and stands; the agent's 20 is rejected.
This is the third agent misread caught by direct verification, and the reason discrepancies get read,
not trusted.

## Flag — India

The FSSAI 2011 primary sets **Infant Milk substitute / Infant foods: Pb 200, tAs 50, Cd 100, Sn 5000**
(as sold, "ppm by weight"). It does **not** contain the "infant formula, ready-to-use, Pb 20" value the
secondary pass reported — that is likely a later FSSAI amendment (2016+). The register's India Pb 20 row
is flagged; the 200 (as-sold, 2011 primary) is authoritative. Karen should confirm whether a post-2011
FSSAI amendment sets 20 ready-to-use before relying on it.

## Switzerland — no data

`Switzerland_VHK_Kontaminantenverordnung_2026.pdf` is a ~9 KB German excerpt (cover/fragment) with no
metal-limit tables; the agent found nothing and I confirmed the file is too small to hold the schedule.
No Swiss limits ingested. If the full VHK is available, it's worth a re-run — Switzerland tracks EU and
occasionally tightens.

## Provenance upgrade

China, Brazil, India, US-FDA and Codex infant-food rows in `regulatory_limits.csv` are marked
`PRIMARY-CONFIRMED 2026-08-03`. US-FDA rows now trace to the Jan-2025 final Closer-to-Zero lead action
levels (fruits/vegetables 10, root vegetables 20, dry infant cereal 20; infant rice cereal iAs 100).

## Net effect on standards

None of the confirmed/corrected values changes a strictest-worldwide standard for the flagship product
forms: powder infant formula stays EU-bound; ready-to-feed formula lead stays a 10 µg/kg multi-jurisdiction
consensus; baby-cereal lead stays 20 (Codex/EU/US). The value of this pass is **defensibility** — the
worldwide floor is now anchored to primary government texts, not search summaries.
