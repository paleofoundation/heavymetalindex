# Audit report — mahmood2026-nanomaterial-water-remediation

Source: RPIS_6; original 11-page PDF, SHA-256 `0670fc90001f9e94bcf3e19be0e2168e3bbb1ca94538fe944031bd61adbd7c81`; full text `/tmp/hmi-library-text/RPIS_6-full.txt`; structured record `data/evidence/library-ingests/mahmood2026-nanomaterial-water-remediation.json`.
Audited: 2026-09-10

## Check 1 — Numerical fidelity
✅ clean

- Approximately **11.4 nm**: exact value and approximate qualifier match printed p. 1307 / PDF p. 3, left column. This is a CuO particle-size example in an antimicrobial passage, correctly distinguished from concentration, capacity, or metal-removal efficacy. Alhalili 2023 and Siddeeg et al. 2020 are the attached citations and have no matching bibliography entries on pp. 1313–1315.
- Magnetite **pH 9**: matches printed p. 1308 / PDF p. 4, left column. The wiki and structured record preserve the surfactant-removal context; they do not assign the value to a metal-removal trial.
- Zeolite **pH 10**: same paragraph and correct material attribution. No invented species, adsorbent dose, influent concentration, or efficacy result.
- Contact time **10–60 minutes**: both endpoints match printed p. 1308 / PDF p. 4. The qualification for longer times for some compounds is preserved; the range is not assigned to a particular metal or experiment.
- **Greater than 100 nm**: matches the descriptive nanostructure boundary on printed p. 1309 / PDF p. 5, left column. Both outputs preserve the strict greater-than meaning, distinguish a boundary from an observed size distribution, and avoid implying an efficacy result.
- The six structured scalar records match the five wiki table rows. Units and statistic types remain source-native; normalized values/units are null, and no analytical censoring is inferred.
- Table **01**, printed p. **1310** / PDF p. **6**, was inspected in full. The description is accurate: properties, applications, historical/regional assertions, and citations, with no measured concentration, adsorption capacity, or removal efficiency. Article byline, volume **4**, issue **5**, pages **1305–1315**, dates, and DOI also match the PDF. Raw-file hash matches the recorded hash.

## Check 2 — Slug vocabulary
✅ clean

- `metals/lead`, `metals/cadmium`, `metals/arsenic-total`, `metals/chromium`, and `metals/mercury-total` all occur in the supplied repository taxonomy snapshot and resolve to live pages.
- `mitigation/remediation-evidence` resolves to an existing live page. The May 2026 snapshot has no mitigation section, so this is a snapshot coverage limitation, not an invented or missing destination.
- `water-remediation` and `wastewater` are bare matrix classifiers with existing committed usage, verified in HEAD source pages `wei2021-eggshell-bacteria-pb-cd-remediation` and `mostafa2022-chitosan-copolymer-mercury-removal`. They correctly describe this review's scope; the older GPT common-matrices list is not exhaustive of the current repository.
- Frontmatter metal abbreviations are valid; product, ingredient, and jurisdiction arrays are empty. No malformed quoted-wikilink fields or unsupported food, sunscreen-product, shellfish-product, or US sampling routes remain.

## Check 3 — Speciation and methods
✅ clean

- Narrative-review classification is supported by the abstract and the complete text (printed pp. 1305–1315). No original analytical experiment, sampled population, reproducible review search, included-study count, risk-of-bias assessment, or quantitative synthesis is presented. The source page invents no instrument, LOD/LOQ, recovery measurement, analytical sample preparation, or sample size.
- `tAs`, `Cr`, and `tHg` are used only as qualified generic element-topic routes. Illustrative Cr(+6) and As(+5) ion examples on printed p. 1306 do not establish measured species. Both outputs explicitly avoid interpreting them as measured iAs, Cr(VI), or MeHg; numeric records have null `metal_species`.
- Adsorption, complexation, electrostatic interactions, ion exchange, magnetic recovery, and regeneration are discussed on printed pp. 1306–1307. Aggregation, recovery, scale-up, and environmental-fate limitations match printed pp. 1308 and 1312–1313.
- B-tier retention is explicitly justified as attributed secondary context. The wiki says receipt/acceptance dates do not establish peer review; the JSON likewise records peer-review verification as not independently established. No verified-peer-review or primary-experiment claim is invented.
- Missing citations are disclosed accurately. The review's contact-time paragraph pools Barton 2014, Ciurcanu 2023, and Popescu et al. 2018; the bibliography omits Ciurcanu's year. Raul et al. 2022 is correctly treated only as an unverified primary-study retrieval lead.

## Check 4 — Part 12 brand firewall
✅ clean

- No sampled-product brands, brand-value tables, or brand rankings occur in the source page or structured record.
- Table 01's corporate examples are not reproduced as wiki brand content. Generic sunscreen/electronics descriptions remain application context only.

## Check 5 — Part 2 wiki/HMTc firewall
✅ clean

- No certification limit, percentile calculation, certification endorsement, consumer risk advisory, or cross-source consensus assertion is present.
- The page attributes claims to this review and states that primary experiments have not been independently verified. Broad environmental-benefit and superiority assertions are explicitly not adopted.
- Structured admission flags exclude product occurrence and threshold input. All six routes are qualitative secondary remediation context; no application example becomes product contamination or a sampled market.

## Verdict
PROMOTE

## Recommended next action
Record this audit with the bounded correction. Retain the existing context-only qualifiers and explicit primary-source retrieval gaps; this verdict confirms fidelity to the review, not the validity of its unverified underlying claims.
