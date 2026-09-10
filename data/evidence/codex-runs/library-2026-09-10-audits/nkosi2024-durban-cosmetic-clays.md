# Audit report — nkosi2024-durban-cosmetic-clays

Source: RPIS_3; DOI 10.1002/ansa.202300062; local 12-page primary PDF at the source page's `raw_path`
Audited: 2026-09-10

## Check 1 — Numerical fidelity
✅ clean

- Independently extracted and read the full PDF; independently rendered PDF p. 6 and visually checked all 20 Table 6 cells. SHA-256 matches the source page and detailed extraction: `37970146fd8c72a9e19f1b060776b773ced457d0c309b1b2d1c0ef42649b77ec`.
- Table 6, red / white, ppm: Ti **119 / 159** ✅; V **240 / 570** ✅; Cr **130 / 560** ✅; Mn **850 / dash** ✅; Fe **1730 / 153** ✅; Ni **340 / dash** ✅; Zn **60 / 29** ✅; Y **24 / 6** ✅; Zr **136 / 156** ✅; Pb **27 / 16** ✅. No rounding or transposition.
- White Mn and Ni are correctly represented as nondetections with unknown numerical limits, not zeros. Section 3.1.9, p. 6 explicitly states that Mn and Ni were detected only in red clay.
- Preparation and location numbers match Section 2.1, p. 2: **40°C**, **about 48 h**, **50 µm** sieve, **29°30′0″ S, 30°56′0″ E**. The page preserves preparation basis and explicitly declines an as-sold moisture conversion.
- **Two samples** agrees with the abstract, p. 1; one result per clay in Table 6 is not represented as a population mean, uncertainty interval, or known replicate count.
- Table 7, p. 7: red illite **56.7%**, quartz **31.3%**, albite **9.9%**, vermiculite **2.0%**; white illite **34.5%**, albite **33.8%**, montmorillonite **31.7%** — all exact. Detailed mineral-context records also preserve the three source-tabulated zeros as mineral phases, not elemental nondetections.
- All **20** detailed `table6` records and the **20** matching generic `values.jsonl` records agree with the rendered source. All **18** numerical ppm-to-µg/kg conversions equal source value × **1000**, with explicit conversion notation and dry-prepared-clay units; the **2** censored entries stay null. All **12** qualitative As/Hg/Cd/Se/Th/U absence statements remain nonnumeric and disallowed as numerical public claims.
- The source's Ni/Zn prose is garbled, and SPF/bulk-density prose reverses table assignments. The page explicitly records these contradictions and uses Table 6 for metal values without publishing the disputed secondary numeric measures.

## Check 2 — Slug vocabulary
✅ clean

- All linked destinations exist: `ingredients/cosmetic-clay`, `products/sun-suntan-products`, and metals `lead`, `chromium`, `nickel`, `titanium`, `vanadium`, `manganese`, `iron`, `zinc`.
- Product and eight metal slugs are in the taxonomy snapshot. `cosmetic-clay` is absent from the older snapshot, but its new provisional destination is explicitly documented in Verification notes and exists with `provisional_scaffold: true`; this is a traceable scaffold addition, not an invented nonexistent destination.
- Products and ingredients use quoted wikilinks; metals, `matrices: [cosmetic-clay]`, and `jurisdictions: [ZA]` correctly use bare classifiers. The matrix descriptor matches the documented new cosmetic-clay scope, and ZA matches the sampling site. The common-matrices list does not specifically cover market cosmetic clay; its guidance permits a documented new term.
- Missing Y and Zr metal pages are disclosed in Verification notes and in the detailed routing gaps; all four measured values remain preserved. Every route target listed in the detailed extraction exists.
- Specific route judgment: **accept `sun-suntan-products` plus `cosmetic-clay`**. Section 2.1, p. 2 reports hardened clay balls purchased from informal traders and sold for sunscreen and cultural uses. This supports a broad direct topical sun-protection route, while the page and records explicitly exclude formulated or infant sunscreen. General background about historical newborn use on p. 4 does not establish an infant sunscreen sample frame.

## Check 3 — Speciation and methods
✅ clean

- Section 2.2, p. 2 directly supports the **Vanta handheld C Series XRF**, **50 keV Rh anode tube**, and **silicon drift detector** description. Preparation matches Section 2.1.
- Total elemental Cr is labeled `Cr`; no Cr(VI) measurement is claimed. No arsenic or mercury species values are inferred from the paper's qualitative absence prose. XRF totals are not converted to bioavailable, dermally released, or absorbed metal.
- The PDF supplies no XRF LOD/LOQ, calibration reference materials, recoveries, metal-specific replicate count, or precision; the page accurately discloses these limits. Triplicate language is in the spectrophotometry passage; duplicate language is in the microbiology passage. Neither establishes XRF replication.
- XRD, FTIR, SEM, physicochemical measurements, UV spectrophotometry, and disk diffusion are correctly described. The conclusion, pp. 9–10, explicitly calls for future work on mineral binding/exchangeability and human patch/SPF testing; the page does not claim those tests were completed.

## Check 4 — Part 12 brand firewall
✅ clean

- No consumer brand or brand-associated contamination value appears. Red/white clay are material descriptors. Vanta is a scientific instrument/model reference permitted by the audit's methods exception.

## Check 5 — Part 2 wiki/HMTc firewall
✅ clean

- No certification threshold, proposal, pooled-percentile calculation, brand endorsement, cross-paper consensus claim, or consumer advisory appears.
- The page describes source-local occurrence and limitations. It does not repeat the paper's speculative clinical consequences or secondary legal ceilings as independently established claims.
- Proposed/new destination explanation stays in Verification notes. The broad product route does not turn prepared clay concentrations into finished-formulation or infant-sunscreen values.

## Verdict
PROMOTE

## Recommended next action
Accept this source page and its 20 elemental records without a source-fidelity correction. Complete the parent ingest's downstream regeneration, required checks, and scoped commit; this five-check audit does not itself certify full ingest completion or audit generated product-page synthesis.
