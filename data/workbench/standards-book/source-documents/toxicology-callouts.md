# Toxicology Callouts — Reusable Template for Program Manual

**Purpose.** This file holds the canonical one-paragraph toxicology callouts for each of the eight priority heavy metals in the HMTc panel. The Program Manual reuses these callouts in three places:

1. **Part 2 — Scope and Analyte Tiering chapter:** the Tier 1 / Tier 2 table cells reference these callouts by metal.
2. **Part 3 — Per-product chapters:** each chapter's per-analyte section opens with the relevant callout for that metal in that product context.
3. **Part 5 — Glossary:** each metal entry cross-references its callout and the full review on heavymetalindex.com.

**Source of truth.** Each callout is drawn from the canonical toxicology section of the corresponding metal page on heavymetalindex.com (under `wiki/metals/<metal>.md` in this repo). When the wiki page updates, the callout updates here and propagates to the Program Manual on the next regeneration. The wiki page remains the single source of toxicology truth; this file is a curated subset for the manual's reader-relevant framing.

**Format.** Each callout follows the same three-element structure:

1. **Banner.** A one-sentence framing statement that lands hard for a reader without toxicology background. Drawn from the most quotable line in the wiki's Toxicology section.
2. **Substantive paragraph.** The defensible toxicology in one paragraph — mechanism, key benchmark, regulatory anchor, and the why-this-matters-for-children framing where applicable. Sourced citations are wikilinks resolving to `wiki/sources/<cite-key>.md`.
3. **Cross-reference.** A trailing line pointing to the full Toxicology review on heavymetalindex.com.

The banner uses **bold callout formatting** so the reader's eye lands on it before the prose. In the bound print version, the wikilink resolves to a footnote citing the URL + section anchor.

---

## Tier 1 Metals

### Lead (Pb)

> **Lead has no safe exposure threshold in children.**
>
> EFSA's 2010 risk assessment derived a Benchmark Dose Lower Confidence Limit (BMDL01) of 12 µg/L blood lead for a one-point IQ decrement in children, with cognitive deficits documented below the BMDL ([[sources/efsa-lead-contam-2010|EFSA 2010]]). JECFA (2011) withdrew its prior Provisional Tolerable Weekly Intake because conventional tolerable-intake values were no longer health-protective ([[sources/jecfa-lead-ptwi-withdrawal|JECFA 2011]]). FDA's current Interim Reference Level for dietary lead in young children is 2.2 µg/day, derived with safety factors and intended for risk-management prioritization rather than as a safe dose ([[sources/fda-irl-lead-2022|FDA IRL Lead]]). The molecular mechanism operates through substitution for divalent cations in zinc-finger transcription factors essential for brain development, disruption of glutamatergic signaling, oxidative stress, and inhibition of heme biosynthesis via ALAD enzyme inhibition.
>
> *Full toxicological review:* [[metals/lead#Toxicology]] (heavymetalindex.com).

### Cadmium (Cd)

> **Cadmium accumulates in the human body over a 10-30 year half-life, with disproportionate consequences for children.**
>
> Cadmium is nephrotoxic, with the renal cortex as the primary target organ. EFSA established a Tolerable Weekly Intake of 2.5 µg/kg bw/week ([[sources/efsa-cadmium-twi-2009|EFSA 2009]]); JECFA set a Provisional Tolerable Monthly Intake of 25 µg/kg bw/month ([[sources/jecfa-cadmium-ptmi|JECFA Cadmium]]). The long half-life means that body burden accumulates from exposures during infancy and early childhood through adulthood — early-life exposure contributes to lifetime burden in a way that exposure later in life does not. Cadmium is also a Group 1 carcinogen (IARC), bioaccumulative, and disproportionately associated with renal and bone effects in long-term cohort studies. ATSDR's 2012 toxicological profile and EFSA's 2024 reassessment converge on the conclusion that contemporary dietary exposures, particularly in vulnerable populations, sit closer to benchmark exposures than is comfortable from a margin-of-exposure perspective.
>
> *Full toxicological review:* [[metals/cadmium#Toxicology]] (heavymetalindex.com).

### Inorganic Arsenic (iAs)

> **Inorganic arsenic is a genotoxic human carcinogen with no known safe threshold.**
>
> EFSA's most recent reassessment derived a conservative cancer reference point of approximately 0.06 µg/kg bw/day from human data, concluding that margins of exposure at current dietary intake levels remain low and indicating a persistent public-health concern ([[sources/efsa-arsenic-2024|EFSA 2024]]). iAs is classified by IARC as Group 1 (carcinogenic to humans) on the basis of lung, skin, and bladder cancer evidence ([[sources/iarc-arsenic|IARC Arsenic]]). For infants and young children, higher food consumption per kilogram body weight causes low single-digit ppb concentrations in food to translate into disproportionately higher per-kg-bw doses — making rice-containing products, where iAs concentrates through paddy-water uptake, a particular concern. The HMTc-mandated speciation for rice-containing products distinguishes iAs from the less-toxic organic arsenic species ubiquitous in seafood; total-arsenic measurements alone are not sufficient for compliance determination.
>
> *Full toxicological review:* [[metals/arsenic-inorganic#Toxicology]] (heavymetalindex.com).

### Methylmercury (MeHg)

> **Methylmercury crosses the blood-brain barrier and concentrates in developing neural tissue.**
>
> MeHg is the primary form of mercury concern in food, formed via microbial methylation of inorganic mercury in aquatic environments and bioaccumulating up the food chain — meaning predatory fish and marine mammals carry the highest concentrations. EFSA proposed a Tolerable Weekly Intake of 1.3 µg/kg bw/week for methylmercury ([[sources/efsa-methylmercury-twi|EFSA MeHg TWI]]); the EPA Reference Dose for chronic oral exposure is 0.1 µg/kg bw/day ([[sources/epa-iris-methylmercury-rfd|EPA IRIS MeHg]]). Prenatal and early postnatal exposure windows are most critical because MeHg crosses both the placenta and the blood-brain barrier and accumulates in developing brain tissue. The HMTc-mandated speciation for fish-containing products distinguishes MeHg from the much smaller inorganic-mercury fraction; for non-fish matrices, total mercury serves as a conservative bound (MeHg ≤ tHg by chemistry, since methylation in dairy and plant supply chains is negligible).
>
> *Full toxicological review:* [[metals/mercury-methyl#Toxicology]] (heavymetalindex.com).

---

## Tier 2 Metals

### Nickel (Ni)

> **Nickel has an established tolerable daily intake but warrants surveillance for chronic exposure in children.**
>
> EFSA established a Tolerable Daily Intake of 13 µg/kg bw/day for chronic nickel exposure ([[sources/efsa-nickel-tdi|EFSA Nickel TDI]]), with reproductive and developmental effects identified as the critical endpoints. Nickel is also a recognized contact allergen and a Group 1 IARC carcinogen for inhalation exposure, though dietary exposure is not the primary cancer risk route. Controllable via ingredient sourcing (cocoa, leafy greens, and certain grains accumulate Ni from soil) and process controls (Ni alloy contact surfaces in food processing equipment can contribute through migration). The Tier 2 classification reflects a chronic TDI rather than a no-threshold framing.
>
> *Full toxicological review:* [[metals/nickel#Toxicology]] (heavymetalindex.com).

### Tin (Sn)

> **Tin's primary food-safety concern is acute gastrointestinal irritation, with a very large margin to chronic effect levels.**
>
> JECFA's Provisional Tolerable Weekly Intake for tin is 14 mg/kg bw/week ([[sources/jecfa-tin-ptwi|JECFA Tin]]). The dominant concern is canned-product packaging migration; the HMTc-monitored matrices (fruit juice not-canned, baby food in glass or pouch packaging) are not the canonical high-exposure pathway, but tin serves as a sentinel for packaging integrity and inadvertent contact-surface migration. Acute GI effects are the operative endpoint; chronic systemic effects are observed only at exposures well above typical food-system levels. The Tier 2 classification reflects the acute-but-bounded toxicity profile.
>
> *Full toxicological review:* [[metals/tin#Toxicology]] (heavymetalindex.com).

### Aluminum (Al)

> **Aluminum has an established tolerable weekly intake and is controllable through water-treatment and process specifications.**
>
> JECFA established a Provisional Tolerable Weekly Intake of 2 mg/kg bw/week for aluminum ([[sources/jecfa-aluminum-ptwi|JECFA Aluminum]]), with potential neurological and bone effects as the canonical endpoints at exposures well above typical dietary levels. Primary food-system sources are water (especially treated drinking water and water used in product reconstitution) and process aids (aluminum-based food additives, some packaging contact). Controllable via water-treatment specifications and supplier verification. The Tier 2 classification reflects the established TDI and the engineering controllability of the exposure pathway.
>
> *Full toxicological review:* [[metals/aluminum#Toxicology]] (heavymetalindex.com).

### Chromium (Cr)

> **Trivalent chromium (Cr(III)) is an essential nutrient; hexavalent chromium (Cr(VI)) is a Group 1 carcinogen — speciation matters.**
>
> Cr(III) is the form ubiquitous in food and is recognized as a nutritionally essential trace element with no chronic-toxicity concern at dietary exposures. Cr(VI) is the form of concern: a Group 1 IARC carcinogen by ingestion (the cancer designation hardened from "inhalation only" in the 2014 reassessment) with an established cancer reference dose from EPA IRIS. HMTc tests total chromium routinely and triggers Cr(VI) speciation only when a credible pathway for Cr(VI) formation exists (certain water-treatment processes, specific industrial contamination scenarios). The Tier 2 classification reflects the assumption that ingested chromium is predominantly Cr(III) in compliant food systems; Cr(VI) speciation upgrades the analyte to effectively Tier 1 treatment when triggered.
>
> *Full toxicological review:* [[metals/chromium#Toxicology]] (heavymetalindex.com) and [[metals/chromium-hexavalent#Toxicology]] for Cr(VI) specifically.

---

## Aggregate exposure framing (cross-callout)

The single most important framing for brand legal and regulatory readers, drawn from the Certification-as-a-Framework preprint Section 2 (doi: 10.5281/zenodo.18905821):

> **Even compliant foods can exceed reference doses when a child eats across categories.**
>
> A day's consumption at the **FDA action level** across four common categories — 800 mL of ready-to-feed formula at the 10 ppb FDA action level, one 20 ppb serving of dry infant cereal (FDA action level for dry cereals), one 10 ppb fruit puree (FDA action level), and one 20 ppb root-vegetable puree (FDA action level for root vegetables) — yields approximately **10.4 µg lead per day**, more than **4.7 times** the FDA Interim Reference Level of 2.2 µg/day for young children. Even at full compliance with FDA action levels across all four food categories, aggregate intake at typical infant consumption patterns substantially exceeds the IRL.
>
> This is why HMTc category limits sit below applicable regulatory action levels rather than at them. Aggregate exposure across categories — not single-product compliance — is the relevant exposure metric for infants and young children. The Program drives every product, in every category, steadily and measurably closer to the lowest achievable levels of contamination, simultaneously.

This callout belongs in:
- Part 2, Scope and Analyte Tiering chapter (after the Tier 1 / Tier 2 table).
- The Standards Architect's preface or the "Why HMTc Limits Are Tighter Than FDA Action Levels" framing.
- The Program-Level Adversarial Read chapter in Part 5, as the response to "Why don't you just align with FDA?"

---

## Usage notes for Part 3 chapter authors

When a Part 3 chapter retemplates a briefing for the bound manual, each per-analyte section should:

1. Open with the metal's banner (one bold sentence).
2. Pull the substantive paragraph if the analyte is one of the chapter's top-three concerns for that product category (high-PoL or close-to-cap analytes); otherwise summarize in two sentences and reference the full callout in this file.
3. Close with the wiki cross-reference footnote.

When a Part 3 chapter is extracted as a licensing exhibit (`build-exhibit-pdf --product=<slug>`), the toxicology callouts travel with the chapter so the exhibit stands alone without the bound manual in hand. The glossary appendix (2 pages) ships with every exhibit for the same reason.

---

## Document control

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-05-14 | Initial draft. Eight priority-metal callouts plus aggregate-exposure cross-callout. Banner-paragraph-reference format standardized. |
