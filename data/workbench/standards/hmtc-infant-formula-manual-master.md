# Heavy Metal Tested & Certified (HMTc)

## Infant Formula Program Manual

### 2026 Edition · Method v3.0

---

**Institute of Contaminant Standards** — Program Operator

Paleo Certified, Inc. dba The Paleo Foundation
Orlando, Florida

---

*The certification limit for each analyte is the lowest maximum level set by any government in the world, in the product form's own basis.*

# Table of Contents

TYPSTOUTLINEPLACEHOLDER

The Heavy Metal Tested & Certified (HMTc) program certifies infant formula against **the single
strictest maximum level set by any government in the world** for each heavy metal, in the product's
own basis. Where two governments regulate the same metal, the tighter number binds; where the
strictest limit is set as a ready-to-feed (as-consumed) value, it is converted to powder basis
across the 1:7 reconstitution ratio before comparison, and vice versa. The certification limit is
therefore never looser than any national law, and in most cells it is tighter than the law a given
brand's home market would apply.

This document shows every government's limit, per subcategory, so that a brand, a retailer, a
regulator, or opposing counsel can check the derivation directly. Each certification number is the
lowest comparable value in its row; nothing is asserted that a sovereign government has not already
put in force. The prior occurrence-percentile methodology is retired: it repeatedly produced
defects (basis mis-conversions, poisoned pools, dead branches), and a lookup against sovereign law
is both faster and unimpeachable.

# The standard — the lowest government limit in the world (µg/kg)

One number per analyte, per product form: **the strictest maximum level any government sets, anywhere.** The cow-milk and soy formulations are an internal calculation step, not a published distinction. Where the law splits them (cadmium, nickel), the published limit is the **lower** of the two, so the single category number sits at or below every national law for both formulations and never certifies a product above its own legal ceiling. Aluminium is the one exception — soy formula is inherently aluminium-rich, so it keeps the law's own cow / soy split rather than penalise soy for a trait its regulator already accounts for (see the table note).

| Analyte | Powder (as-sold) | Ready-to-feed (as-consumed) |
|---|--:|--:|
| Lead (Pb) | 20 | 10 |
| Inorganic arsenic (iAs) | 20 | 10 |
| Cadmium (Cd) | 10 | 5 |
| Mercury (tHg) | ≤5ᴸ | ≤5ᴸ |
| Nickel (Ni) | 250 | 100 |
| Aluminium (Al) | 3500 cow / 7000 soy | 500 cow / 1000 soy |
| Tin (Sn) | 5000 | 714 |
| Total chromium (Cr) | 2000ᵈ | ≤LOQ ᴸ |

*ᴸ = LOQ ceiling: no government sets a formula limit for this analyte, so HMTc publishes a non-detect ceiling at the method limit of quantification (values in method-loq-ceilings.json, confirm against the testing method), with reflex speciation on any detection. ᵈ = broad-dairy fallback, no formula-specific limit exists. Tin is the FSSAI (India) as-sold value, confirmed against the 2011 primary text. **Aluminium is published as the law's own cow / soy split**: soy formula is inherently aluminium-rich — which is why regulators set the soy limit at 2× cow — so adopting the lower number would penalise soy for a trait its own regulator already accounts for. Every other analyte is a single lowest-worldwide number. The per-country derivation for every number — including the cow/soy split that feeds it — is the matrix that follows.*

# How certification works against these limits

**Tier 1 metals — lead, inorganic arsenic, cadmium, mercury — are zero-tolerance.** A single lot
over the limit blocks certification. These are the metals with no safe intake for infants, so the
program holds them to the strictest world limit with no transitional allowance.

**Tier 2 metals — nickel, aluminium, tin, hexavalent chromium — carry a transitional allowance.**
A product measuring up to **150 % of the limit** earns transitional certification (Status B) while
it remediates, because these metals have established tolerable intakes and their elevations are
often supply-chain-driven rather than avoidable at will. Above 150 % is probation; the allowance is
transitional, not permanent.

**A legal violation always blocks certification, regardless of HMTc status.** Because every limit
here is a government maximum level, any lot that fails the *program* limit by more than the Tier 2
allowance is at or near a real legal exceedance in the strictest jurisdiction — the certification
gate and the regulatory gate move together.

| Certification status | Meaning |
|---|---|
| A — Full | All analytes ≤ 100 % of limit |
| B — Transitional | A Tier 2 metal between 100–150 % of limit, under a remediation plan |
| C — Probation | 150–200 %, or any Tier 1 exceedance |
| D — Suspension | > 200 % of limit |
| E — Revocation | Repeated or unremediated failure |

# Per-country government limits, by subcategory

CX = Codex · CA = Canada · CN = China · IN = India · BR = Brazil · KR = South Korea · GS = Gulf (GSO) · AN = Australia/NZ · US = US-FDA.

Each cell is that government's infant-formula limit **normalized to the subcategory's basis** so the columns are comparable. ᶜ = converted across the 1:7 powder↔as-consumed reconstitution boundary (the government's own limit is in the other basis; see the provenance table). Blank = that government sets no formula limit for the analyte. **The HMTc limit is the lowest comparable value in the row.**

## Powder · cow-milk (powder, as-sold basis, µg/kg)

| Analyte | EU | UK | CX | CA | CN | IN | BR | GS | AN | **HMTc limit** | Binding source |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|---|
| Lead (Pb) | 20 | 50 | 70ᶜ | 70ᶜ | 80 | 200 | 70ᶜ | 70ᶜ | 70ᶜ | **20** | EU |
| Inorganic arsenic (iAs) | 20 |  |  |  |  |  | 140ᶜ |  |  | **20** | EU |
| Cadmium (Cd) | 10 | 10 |  |  |  | 100 | 70ᶜ |  |  | **10** | EU |
| Mercury (tHg) |  |  |  |  |  |  |  |  |  | **≤5ᴸ** | LOQ ceiling — non-detect (no government limit worldwide) |
| Nickel (Ni) | 250 |  |  |  |  |  |  |  |  | **250** | EU |
| Aluminium (Al) |  |  |  |  |  |  |  |  | 3500ᶜ | **3500** | AN (500 as-consumed ×7) |
| Tin (Sn) |  |  |  |  |  | 5000 |  |  |  | **5000** | IN |
| Total chromium (Cr) |  |  |  |  | 2000ᵈ |  |  |  |  | **2000** | CN *(broad-dairy fallback)* |

*Canned formula tin (separate product form): EU 50000, UK 50000 µg/kg. ᵈ = broad-dairy fallback (no formula-specific limit exists). ᶜ = basis-converted.*

## Powder · soy (powder, as-sold basis, µg/kg)

| Analyte | EU | UK | CX | CA | CN | IN | BR | AN | **HMTc limit** | Binding source |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|---|
| Lead (Pb) | 20 | 50 | 70ᶜ | 70ᶜ | 80 | 200 | 70ᶜ | 70ᶜ | **20** | EU |
| Inorganic arsenic (iAs) | 20 |  |  |  |  |  | 140ᶜ |  | **20** | EU |
| Cadmium (Cd) | 20 | 20 |  |  |  | 100 | 70ᶜ |  | **20** | EU |
| Mercury (tHg) |  |  |  |  |  |  |  |  | **≤5ᴸ** | LOQ ceiling — non-detect (no government limit worldwide) |
| Nickel (Ni) | 400 |  |  |  |  |  |  |  | **400** | EU |
| Aluminium (Al) |  |  |  |  |  |  |  | 7000ᶜ | **7000** | AN (1000 as-consumed ×7) |
| Tin (Sn) |  |  |  |  |  | 5000 |  |  | **5000** | IN |
| Total chromium (Cr) |  |  |  |  | 2000ᵈ |  |  |  | **2000** | CN *(broad-dairy fallback)* |

*Canned soy formula tin (separate product form): EU 50000, UK 50000 µg/kg. ᵈ = broad-dairy fallback (no formula-specific limit exists). ᶜ = basis-converted.*

## Ready-to-feed · cow-milk (as-consumed basis, µg/kg)

| Analyte | EU | UK | CX | CA | CN | IN | BR | GS | AN | **HMTc limit** | Binding source |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|---|
| Lead (Pb) | 10 | 10 | 10 | 10 | 10 | 20 | 10 | 10 | 10 | **10** | EU |
| Inorganic arsenic (iAs) | 10 |  |  |  |  |  | 20 |  |  | **10** | EU |
| Cadmium (Cd) | 5 | 5 |  |  |  | 14ᶜ | 10 |  |  | **5** | EU |
| Mercury (tHg) |  |  |  |  |  |  |  |  |  | **≤5ᴸ** | LOQ ceiling — non-detect (no government limit worldwide) |
| Nickel (Ni) | 100 |  |  |  |  |  |  |  |  | **100** | EU |
| Aluminium (Al) |  |  |  |  |  |  |  |  | 500 | **500** | AN |
| Tin (Sn) |  |  |  |  |  | 714ᶜ |  |  |  | **714** | IN (5000 powder ÷7) |
| Total chromium (Cr) |  |  |  |  |  |  |  |  |  | **≤LOQ ᴸ** | LOQ ceiling — pending method LOQ |

*Canned formula tin (separate product form): EU 50000, UK 50000 µg/kg. ᵈ = broad-dairy fallback (no formula-specific limit exists). ᶜ = basis-converted.*

## Ready-to-feed · soy (as-consumed basis, µg/kg)

| Analyte | EU | UK | CX | CA | CN | IN | BR | AN | **HMTc limit** | Binding source |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|---|
| Lead (Pb) | 10 | 10 | 10 | 10 | 10 | 20 | 10 | 10 | **10** | EU |
| Inorganic arsenic (iAs) | 10 |  |  |  |  |  | 20 |  | **10** | EU |
| Cadmium (Cd) | 10 | 10 |  |  |  | 14ᶜ | 10 |  | **10** | EU |
| Mercury (tHg) |  |  |  |  |  |  |  |  | **≤5ᴸ** | LOQ ceiling — non-detect (no government limit worldwide) |
| Nickel (Ni) | 100 |  |  |  |  |  |  |  | **100** | EU |
| Aluminium (Al) |  |  |  |  |  |  |  | 1000 | **1000** | AN |
| Tin (Sn) |  |  |  |  |  | 714ᶜ |  |  | **714** | IN (5000 powder ÷7) |
| Total chromium (Cr) |  |  |  |  |  |  |  |  | **≤LOQ ᴸ** | LOQ ceiling — pending method LOQ |

*Canned soy formula tin (separate product form): EU 50000, UK 50000 µg/kg. ᵈ = broad-dairy fallback (no formula-specific limit exists). ᶜ = basis-converted.*

# Cells no government regulates — set at the LOQ, not left open

HMTc sets a limit for every analyte. Where the tightest-government lookup returns nothing and no
occurrence pool exists to compute a percentile, the limit is the analytical limit of quantification:
the analyte must be non-detectable. This is the ratchet doing its job precisely where regulators have
not — the same mechanism the seafood standards already use — not an omission.

1. **Mercury (all subcategories) — LOQ ceiling ≤5 µg/kg.** No government sets an
   infant-formula mercury limit anywhere (the nearest is China's 20 µg/kg for *canned complementary
   foods*, a different product). Mercury — as methylmercury — is a Tier-1 zero-tolerance toxic, so the
   correct posture is non-detect: the certification ceiling is the method LOQ (5
   µg/kg total mercury), with reflex methylmercury speciation on any detection. *Provisional pending confirmation against the testing method LOQ.*

2. **Hexavalent chromium — LOQ ceiling ≤10 µg/kg.** No government sets a Cr-VI
   food limit worldwide (the only Cr-VI limits are for drinking water — e.g. US-CA 10 µg/kg,
   the reference point). Cr-VI largely reduces to Cr-III in the formula matrix, so a non-detect ceiling
   is both protective and near-always met. Total chromium is separately held to the government value
   (China 2,000 µg/kg for milk powder, ᵈ) with reflex Cr-VI speciation on a 100 µg/kg total-chromium
   anomaly screen. *Provisional pending confirmation against the speciated Cr-VI method LOQ.*

3. **Tin — 5,000 µg/kg (India, FSSAI), as-sold.** India is the only government setting a non-canned
   infant-formula tin limit. Its basis is now settled against the FSSAI 2011 primary text: the metal
   table header reads "Parts per Million by weight" (as-sold), and the regulation carries no
   reconstitution instruction. Canned formula is separately held to the 50,000 µg/kg world consensus
   (a container-migration limit).

Every other analyte is a firm, citable government maximum level. No cell is left unset.

# Provenance — every limit exactly as its government states it

| Analyte | Gov | Limit (µg/kg) | Basis (as stated) | Product scope | Source |
|---|---|--:|---|---|---|
| Pb | AU-NZ | 10 | portion ordinarily consumed | infant formula products | regulations/au-nz-food-standards-code-sc |
| Pb | BR | 10 | as consumed | Pediatric formula for enteral nutrition (fórmula pediátrica para nutri | regulations/br-infant-food-contaminants |
| Pb | BR | 10 | as consumed | Nutrient formulas for high-risk newborns (fórmulas de nutrientes para  | regulations/br-infant-food-contaminants |
| Pb | BR | 10 | as consumed | Follow-up / follow-on infant formulas (fórmulas infantis de seguimento | regulations/br-infant-food-contaminants |
| Pb | BR | 10 | as consumed | Infant formulas for special dietary/dietotherapeutic purposes (necessi | regulations/br-infant-food-contaminants |
| Pb | BR | 10 | as consumed | Infant formulas for infants / starter (fórmulas infantis para lactente | regulations/br-infant-food-contaminants |
| Pb | BR | 10 | as consumed | Other foods specially formulated for infants and young children (outro | regulations/br-infant-food-contaminants |
| Pb | CA | 10 | as consumed | Infant formula (all types); two former limits — concentrated/powdered  | regulations/ca-infant-food-contaminants |
| Pb | CN | 80 | product as placed on market | Formula food for infants and young children (powdered infant/follow-up | regulations/cn-infant-food-contaminants |
| Pb | CN | 10 | as consumed | Liquid (ready-to-feed) infant formula | regulations/cn-infant-food-contaminants |
| Pb | CN | 150 | product as placed on market | Formulas for special medical purposes (FSMP), products for children 1- | regulations/cn-infant-food-contaminants |
| Pb | CN | 500 | product as placed on market | Formulas for special medical purposes (FSMP), products for children ov | regulations/cn-infant-food-contaminants |
| Pb | CN | 150 | product as placed on market | Formulas for special medical purposes (excl. infant FSMP), products fo | regulations/cn-gb2762-2022 |
| Pb | CODEX | 10 | as consumed | Infant formula, formula for special medical purposes intended for infa | regulations/codex-infant-food-contaminan |
| Pb | EU | 20 | product as placed on market | infant formulae, follow-on formulae, and young-child formulae placed o | regulations/eu2023-contaminants-maximum- |
| Pb | EU | 10 | product as placed on market | infant formulae, follow-on formulae, and young-child formulae placed o | regulations/eu2023-contaminants-maximum- |
| Pb | EU | 20 | ready to use | drinks for infants and young children placed on the market and labelle | regulations/eu2023-contaminants-maximum- |
| Pb | GSO | 10 | as consumed | Infant formula, formula for special medical purposes intended for infa | regulations/gso-infant-food-contaminants |
| Pb | IN | 200 | as consumed | Infant Milk substitute and Infant foods | regulations/in-infant-food-contaminants |
| Pb | IN | 20 | as consumed | Infant formula (ready to use) | regulations/in-infant-food-contaminants |
| Pb | UK | 50 | product as placed on market | Infant formulae and follow-on formulae, marketed as powder | regulations/uk-infant-food-contaminants |
| Pb | UK | 10 | as consumed | Infant formulae and follow-on formulae, marketed as liquid (ready-to-f | regulations/uk-infant-food-contaminants |
| iAs | BR | 20 | as consumed | Pediatric formula for enteral nutrition (fórmula pediátrica para nutri | regulations/br-infant-food-contaminants |
| iAs | BR | 20 | as consumed | Nutrient formulas for high-risk newborns (fórmulas de nutrientes para  | regulations/br-infant-food-contaminants |
| iAs | BR | 20 | as consumed | Follow-up / follow-on infant formulas (fórmulas infantis de seguimento | regulations/br-infant-food-contaminants |
| iAs | BR | 20 | as consumed | Infant formulas for special dietary/dietotherapeutic purposes (necessi | regulations/br-infant-food-contaminants |
| iAs | BR | 20 | as consumed | Infant formulas for infants / starter (fórmulas infantis para lactente | regulations/br-infant-food-contaminants |
| iAs | BR | 20 | as consumed | Other foods specially formulated for infants and young children (outro | regulations/br-infant-food-contaminants |
| iAs | EU | 20 | product as placed on market | infant formulae, follow-on formulae, food for special medical purposes | regulations/eu2023-contaminants-maximum- |
| iAs | EU | 10 | product as placed on market | infant formulae, follow-on formulae, food for special medical purposes | regulations/eu2023-contaminants-maximum- |
| tAs | CN | 500 | product as placed on market | Milk powder and modified milk powder (general dairy category, distinct | regulations/cn-infant-food-contaminants |
| tAs | IN | 50 | as consumed | Infant Milk substitute and Infant foods | regulations/in-infant-food-contaminants |
| Cd | BR | 10 | as consumed | Pediatric formula for enteral nutrition (fórmula pediátrica para nutri | regulations/br-infant-food-contaminants |
| Cd | BR | 10 | as consumed | Nutrient formulas for high-risk newborns (fórmulas de nutrientes para  | regulations/br-infant-food-contaminants |
| Cd | BR | 10 | as consumed | Follow-up / follow-on infant formulas (fórmulas infantis de seguimento | regulations/br-infant-food-contaminants |
| Cd | BR | 10 | as consumed | Infant formulas for special dietary/dietotherapeutic purposes (necessi | regulations/br-infant-food-contaminants |
| Cd | BR | 10 | as consumed | Infant formulas for infants / starter (fórmulas infantis para lactente | regulations/br-infant-food-contaminants |
| Cd | BR | 10 | as consumed | Other foods specially formulated for infants and young children (outro | regulations/br-infant-food-contaminants |
| Cd | EU | 10 | product as placed on market | infant formulae, follow-on formulae, food for special medical purposes | regulations/eu-2023-915-cadmium |
| Cd | EU | 5 | product as placed on market | infant formulae, follow-on formulae, food for special medical purposes | regulations/eu-2023-915-cadmium |
| Cd | EU | 20 | product as placed on market | infant formulae, follow-on formulae, food for special medical purposes | regulations/eu-2023-915-cadmium |
| Cd | EU | 10 | product as placed on market | infant formulae, follow-on formulae, food for special medical purposes | regulations/eu-2023-915-cadmium |
| Cd | EU | 20 | ready to use | drinks for infants and young children labelled and placed on the marke | regulations/eu-2023-915-cadmium |
| Cd | IN | 100 | as consumed | Infant Milk substitute and Infant foods | regulations/in-infant-food-contaminants |
| Cd | UK | 10 | product as placed on market | Infant formulae and follow-on formulae, powdered formulae manufactured | regulations/uk-infant-food-contaminants |
| Cd | UK | 5 | product as placed on market | Infant formulae and follow-on formulae, liquid formulae manufactured f | regulations/uk-infant-food-contaminants |
| Cd | UK | 20 | product as placed on market | Infant formulae and follow-on formulae, powdered formulae manufactured | regulations/uk-infant-food-contaminants |
| Cd | UK | 10 | product as placed on market | Infant formulae and follow-on formulae, liquid formulae manufactured f | regulations/uk-infant-food-contaminants |
| Ni | EU | 250 | product as placed on market | infant/young-child formula, powder, except soy-isolate | regulations/eu-2024-1987-nickel-maximum- |
| Ni | EU | 400 | product as placed on market | infant/young-child formula, powder, soy protein isolate | regulations/eu-2024-1987-nickel-maximum- |
| Ni | EU | 100 | product as placed on market | infant/young-child formula, liquid | regulations/eu-2024-1987-nickel-maximum- |
| Al | AU-NZ | 500 | portion ordinarily consumed | infant formula, follow-on formula, and special medical purpose product | regulations/au-nz-food-standards-code-sc |
| Al | AU-NZ | 1000 | portion ordinarily consumed | soy-based infant formula products | regulations/au-nz-food-standards-code-sc |
| Sn | EU | 50000 | product as placed on market | canned infant formulae, canned follow-on formulae, and canned young-ch | regulations/eu2023-contaminants-maximum- |
| Sn | IN | 5000 | as sold | Infant Milk substitute and Infant foods | regulations/in-infant-food-contaminants |
| Sn | UK | 50000 | as consumed | Canned infant formulae and follow-on formulae, including infant milk a | regulations/uk-infant-food-contaminants |
| Cr-total | CN | 2000 | product as placed on market | Milk powder and modified milk powder (general dairy category, distinct | regulations/cn-infant-food-contaminants |

# Provenance and review status

Every value above is drawn from `data/evidence/regulatory_limits.csv` (250-row worldwide
regulatory register). China, Brazil, India, US-FDA, and Codex infant-food rows are confirmed against
primary government instruments (marked PRIMARY-CONFIRMED in the register, 2026-08-03); the remaining
jurisdictions (EU, UK, Australia/NZ, Canada, Gulf, South Korea) are web-verified against the official
instrument and pending a primary-text cross-check. The two provisional cells above (India tin basis;
the Cr-VI/mercury monitored-not-limited determinations) and the primary-text cross-check on the
remaining jurisdictions are the items outstanding before external publication. **This standard is
ready for legal-counsel review; it is not yet counsel-cleared.**

*The Institute of Contaminant Standards operates the Heavy Metal Tested & Certified program. This is
certification-program material, published separately from the Heavy Metal Index literature reference
at heavymetalindex.com.*
