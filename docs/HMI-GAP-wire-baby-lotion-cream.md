# HMI-GAP-wire-baby-lotion-cream

- **Logged:** 2026-09-14T11:46:00+03:00 by Reed Holloway
- **Product slug:** `baby-lotion-cream`
- **HMTc:** Cat 2 Infant and Child Personal Care — Row 1 — Baby Lotion / Baby Cream (leave-on skin care; ages 0–5; petrolatum-based and plant-extract-forward both route here per Step 0 lock)
- **Page:** wiki/products/baby-lotion-cream.md — sources:16; values.jsonl **0** / structured_sources **0** pre-turn (wiring-miss); LES scaffold empty Pb/Cd rows; exposure_pathway dermal (prolonged infant) + incidental ingestion (hand-to-mouth); panel_metals frontmatter Pb/Cd primary; true_pull Sn|U|iAs
- **Authority:** Elon WAVE16 #4 after #3 all-purpose-cleaners HYBRID COMPLETE; standing auto-advance; HMI P0; shellfish PARKED; pacifiers deferred; Reg Watch HOLD; no Sci-Hub; no paywall bypass; no product-cell mint; no MMed; no DataCite; no iAs-from-tAs
- **KEEP DISTINCT:** `body-hand-leave-on-skin-care` (WAVE16 #1 DONE — adult leave-on) / `baby-sunscreen-mineral` / `baby-sunscreen-chemical` / `baby-wipes` / `whitening-products` / `sun-suntan-products` / `diaper-cream-zno` / `diaper-cream-non-zno` / `baby-oil` / `baby-talcum-powder` / `baby-powder-cornstarch` / `baby-shampoo-body-wash` / `face-neck-leave-on-skin-care` / `bathing-soaps` / Hepp2014 adult lotions / Balogun2024 adult body creams / Moriceau2025 adult body milk / Almukainzi2022 baby oil+sunblock rows / Stone wipe/bib/body-wash/pacifier/petroleum-jelly rows

## Structured evidence found (do not re-pull wired / valued)

1. **Arshad2020** Saudi Pharm J doi:10.1016/j.jsps.2020.05.006 (OA PMC7335825; SHA 019cb9ac…) — PK markets n=189 (lotions n=90 / 30 brands) — **WIRE PRIMARY Johnson's baby lotion Italy L19** (Table 1; mg/kg ≡ ppm finished as-sold):
   - Cd **0.27 ± 0.02**; Cr **0.67 ± 0.03**; Fe **2.01 ± 0.72**; Ni **6.16 ± 0.33**; Pb **7.94 ± 0.10**
   - SUPPORTIVE note (same deposit; not labeled baby primary): Mother care L2 Cd **0.17** / Cr **0.42** / Fe **1.72** / Ni **6.11** / Pb **4.32** mg/kg — brand-name baby-adjacent only
   - KEEP DISTINCT: adult/general lotion brands in Table 1 → `body-hand-leave-on-skin-care`; sunblock → sunscreen rows; whitening creams → `whitening-products`; foundations/lipsticks/hair dyes → makeup/hair
   - Panel: Cd/Cr/Fe/Ni/Pb only — no Sn/U/As/iAs/Hg/Co/Sb

2. **Stone2021** WA Ecology Publication 14-04-014 (public; SHA 36db43e9…) — WA Children's Safe Product Act metals survey — **WIRE PRIMARY Bedtime Baby Cream DT033-b01** (Appendix 1 product metals; ppm):
   - Sb **0.0**; tAs **0.0**; Cd **1.1**; Cr **0.0**; Co **36.9**; Pb **2.6**; Hg **0.0**; Mo **0.0**
   - Narrative (p. 11 / Fig. 3): Cobalt found in one product, a baby cream (DT033 at **36.9 ppm**) at appreciable levels
   - Appendix 2 packaging row for DT033 **not** used as finished-product WIRE (column set differs; packaging ≠ product)
   - KEEP DISTINCT: baby wipes SF002/TR002/TR014 → `baby-wipes`; body wash TG062; bibs; pacifiers (deferred); petroleum jelly DT008; baby powder FM006 → powder rows
   - tAs **0.0** ND ≠ iAs — do not mint; no Sn/U on Stone panel

3. **EDQM2023** Safe cosmetics for young children 2nd ed (Council of Europe / EDQM; SHA 1d62c7ae…) — **REGULATORY CONTEXT** under-3 cosmetics impurity characterisation + safety-assessor guidance — **no** finished baby-lotion occurrence assay

4. **OPSS2023** Feasibility of action limits for heavy metals in cosmetics (UK OPSS; SHA 2e0d0250…) — **REGULATORY CONTEXT** action-limit feasibility framework; body/baby creams appear in product-group lists — **not** a baby-lotion primary numeric survey this turn

5. **WA Ecology 2024** Pub 24-04-036 Interim Policy on Lead in Cosmetics (TFCA; SHA 1315725d…) — **REGULATORY CONTEXT**:
   - Statutory TFCA Pb impurity **1 ppm** (intentional lead banned; impurities over 1 ppm restricted) effective 2025-01-01
   - Option 1 enforcement discretion: ≤**2 ppm** general cosmetics (**lotion** explicitly cited) / ≤**5 ppm** color cosmetics or clay masks
   - Option 2 path for higher color/clay batches with monitoring — see policy text
   - No occurrence measurements

6. **Jităreanu2025** Appl Sci doi:10.3390/app152412883 (CC BY 4.0; SHA 69624131…) — **SUPPORTIVE REVIEW** cosmetics HM toxicological overview (lit 1990–Nov 2025) — densify context; not baby-lotion primary assay

7. **Health Canada** Guidance on Heavy Metal Impurities in Cosmetics — **structured-first wiki REGULATORY** (Pb **10** / As **3** / Cd **3** / Hg **1** / Sb **5** ppm finished cosmetic impurity guidance). HTML fetch INTERNAL_ERROR this turn — not OA-PDF-deposited; do not invent ppb. As = tAs ≠ iAs.

| Analyte | Structured pre-OA | OA / corpus | Decision |
| --- | --- | --- | --- |
| **Sn** | values0; LES absent | No finished baby lotion/cream elemental Sn OA (Moriceau body milk → body-hand KEEP DISTINCT) | **TRUE EMPTY** |
| **U** | values0; LES absent | No elemental U concentration OA in finished baby lotion/cream | **TRUE EMPTY** |
| **iAs** | values0; panel context | Stone DT033 tAs **0.0** ND ≠ iAs; Arshad no As; HC/EDQM As = total — do not mint | **TRUE EMPTY** |
| Pb | values0 wiring-miss | Arshad L19 **7.94** + Stone DT033 **2.6** ppm | **WIRE** |
| Cd | values0 wiring-miss | Arshad L19 **0.27** + Stone DT033 **1.1** ppm | **WIRE** |
| Cr/Ni/Fe | values0 | Arshad L19 Cr **0.67** / Ni **6.16** / Fe **2.01** | **WIRE** |
| Co/Sb/tAs/Hg/Mo | values0 | Stone DT033 Co **36.9** / Sb **0.0** / tAs **0.0** / Hg **0.0** / Mo **0.0** | **WIRE** (tAs ND ≠ iAs) |

## Freeform deposit
`/Volumes/HMI-Library/research-pulls/heavy-metal-index/baby-lotion-cream/_freeform-iAs-Sn-U/`
OA **6/6** (see SHA256SUMS.txt / download-log.csv).

## Fitness
**HYBRID** (Arshad L19 + Stone DT033 PRIMARY WIRE panel Pb/Cd/Cr/Ni/Fe/Co/Sb/tAs/Hg/Mo + EDQM/OPSS/WA-TFCA REGULATORY + Jităreanu SUPPORTIVE review; Sn/U/iAs **TRUE EMPTY**)

## Do not
- Mint iAs from Stone tAs ND or Health Canada/EDQM total-As impurity limits
- Steal Hepp2014 / Balogun2024 / Moriceau2025 / Almukainzi body-lotion or baby-oil rows as baby-lotion primary (→ body-hand / baby-oil / sunscreen siblings)
- Steal Arshad sunblock / whitening / adult lotion brands as baby-lotion primary
- Steal Stone wipe/bib/pacifier/petroleum-jelly/body-wash rows
- Use Stone Appendix 2 packaging DT033 as finished-product WIRE
- Sci-Hub; cell mint; DataCite; invent ppb; shellfish; conflate baby-wipes or sunscreen
