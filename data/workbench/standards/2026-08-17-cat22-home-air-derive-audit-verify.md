# Category 22 — Home Air and Inhalation-Adjacent Products — derive → audit → verify trail

- Method: HMTc Method v2.0 (government-limit-only initial setting). Compiler: `tools/standards/compile-category.mjs` with `tools/standards/cat22-config.json`. Output: `data/workbench/standards/cat22-compiled/`.
- Version: `cat22-v1.0 (2026-08-17)`. Category number 22; 15 subcategories; 11-analyte panel on every row.
- Direction (CLAUDE.md Part 2 / Part 19): toward the literature and toward the instruments. No cell is softened toward HMTc convenience and no cell is strengthened beyond what a sovereign instrument supports. No occurrence, percentile, feasibility or precautionary input touches any number in either direction.
- Firewall (Part 19): staff / HMTc output only. Everything here lives under `data/workbench/standards/`; nothing is written to `wiki/`.
- This document is the human-decision record. `cat22-compiled/derivation-report.md` is machine output and carries none of what follows.

## The defining fact: inhalation is the route, and the panel is still a content screen

Every row in this category is used by aerosolisation, evaporation or combustion, so the exposure of concern is respiratory. A limit expressed per kilogram of product is not an inhalation exposure limit and is not presented as one. HMTc publishes no emission-rate limit, no per-actuation dose limit and no indoor-air concentration limit anywhere in this category, because no credible sovereign government sets one for any of these product forms. No occupational exposure limit and no ambient- or indoor-air guideline is converted into a product ceiling. What the panel governs is the content of the material that is put into the air, plus the components in the emission path.

## DERIVE — the compiled standard (native basis, µg/kg)

All 15 rows resolve identically, because the anchor is taken on the route axis rather than on the matrix axis and every row shares the route. `RA` = disclosed read-across. `screen` = recorded sovereign value published as a tripwire, excluded from the firm-limit count. `ctrl` = mandatory analytical control, no number invented. `n/m` = substantiated not-material.

| Analyte | Value | Kind | Binding register row |
|---|---|---|---|
| Pb | 500 | RA | `co2022_pb_cannabis_inhaled_nasal_500` (US-CO), corroborated at 500 by `us_ca_dcc_2026_pb_inhalable_cannabis_0_5ugg` (US-CA) |
| Cd | 200 | RA | `co2022_cd_cannabis_inhaled_nasal_200` (US-CO), corroborated at 200 by `us_ca_dcc_2026_cd_inhalable_cannabis_0_2ugg` (US-CA) |
| tAs | 200 | RA | `co2022_tas_cannabis_inhaled_nasal_200` (US-CO), corroborated at 200 by `us_ca_dcc_2026_tas_inhalable_cannabis_0_2ugg` (US-CA) |
| tHg | 100 | RA | `co2022_thg_cannabis_inhaled_nasal_100` (US-CO), corroborated at 100 by `us_ca_dcc_2026_thg_inhalable_cannabis_0_1ugg` (US-CA) |
| Cr | 600 | RA, screen | `md2025_cr_total_cannabis_inhalation_600` (US-MD) |
| iAs, Ni, Sn, Al, Cr-VI | — | ctrl | no sovereign content maximum in any inhaled consumer product |
| MeHg | — | n/m (12 rows) / ctrl (3 rows) | speciation-bounded by tHg on the 12 manufactured-formulation rows; control on incense, potpourri and the residual row |

75 numeric cells (15 rows × Pb, Cd, tAs, tHg, Cr). The publication gate counts all 75 as firm cells. The 15 total-chromium cells additionally carry `screen: true` with a `screen_note`, which the cert renderer understands and excludes from its own firm-limit count: total chromium is dominated by trivalent chromium and is recorded as the tripwire for hexavalent-chromium speciation, not as a standalone protective ceiling.

Total chromium is never satisfied by a hexavalent-chromium result and hexavalent chromium is never satisfied by a total-chromium result. Inorganic arsenic never satisfies total arsenic and methylmercury never satisfies total mercury.

## AUDIT — the three human decisions this build made

### 1. Widening the credible-regulator set to US-CA, US-CO, US-MD, US-MA, US-NV and IL

Method v2.0 requires the strictest applicable maximum set by a credible sovereign government. For products administered by inhalation, the only governments that have set heavy-metal content maxima at all are US state cannabis regulators and the Israeli Ministry of Health medical-cannabis unit. The US federal government sets none, because federal law prohibits the underlying commodity rather than regulating it, which makes the states the only sovereign regulator on the subject. The default credible set (`EU, UK, CODEX, international, US, AU-NZ, CA, HK`) is therefore widened for this category to admit `US-CA`, `US-CO`, `US-MD`, `US-MA`, `US-NV` and `IL`.

This is the same governance ruling already made for HMTc Category 25 (Cannabis) and it is recorded here rather than assumed. It is confined to route-scoped inhaled-product instruments: the audit scan reaches only register rows whose product scope is written in route terms, and the non-route-scoped instruments from these same jurisdictions (the Massachusetts all-uses protocol, the Nevada unspeciated action levels, the Israeli IMC-GMP Procedure 152 table) are dispositioned explicitly in prose in every numeric cell's substantiation rather than silently ignored. The widening is recorded in `_category.credible` with the mandatory `_category.credible_note`; the compiler refuses to run when `credible` is set without it.

The read-across is taken on the route axis because the regulators themselves used that axis. Colorado and Maryland each publish a route LADDER over the same underlying matrices, so the value is a function of the route of administration rather than of the source matrix's chemistry. Maryland's route gap is the sharpest available evidence: inhalation-route total chromium is 600 µg/kg while the oral and cutaneous values for the same products are 1,100,000 µg/kg, a factor of about 1,833.

### 2. Excluding the two Australian candle-wick register rows, and the fact that it changes no number

`au_customs_1956_pb_candles_wicks_0_06pct` and `au_customs_1956_pb_candle_wicks_0_06pct` carry register jurisdiction code `AU`, which sits outside the credible set for this category (the default set admits `AU-NZ`, not bare `AU`). They were not admitted. The exclusion is inconsequential, and this was verified rather than assumed:

```
au_customs_1956_pb_candles_wicks_0_06pct  value=600000  jur=AU  basis_guard_pass=false  stricter_than_Pb_binding_500=false
au_customs_1956_pb_candle_wicks_0_06pct   value=600000  jur=AU  basis_guard_pass=false  stricter_than_Pb_binding_500=false
```

Both are 600,000 µg/kg on a wick-core-metal basis. They fail the scented-candles row's `basis_guard` (`(product as tested|cannabis or cannabis product)`) because a wick-core-metal basis is not this row's basis, and they are four orders of magnitude looser than the 500 µg/kg lead binding, so they could not have been selected under either test. Admitting `AU` would change no published number on any Category 22 row.

The substantive Australian and United States prohibition is nevertheless carried, and carried correctly: the US CPSC prohibition at 16 CFR 1500.17(a)(13) (`us_16cfr1500_17a13_pb_lead_cored_candle_wicks_600ppm`), mirrored by Australia's Customs (Prohibited Imports) Regulations 1956, is published on the scented-candles lead cell as a `binding_control`, an independent regulatory hard stop enforced as a pass/fail component test on the wick-core metal. It is never republished as the row's lead ceiling, because putting a 600,000 µg/kg number on a scented candle would misrepresent a prohibition as a permission.

### 3. Open register gap — Ni, Sn and Al in the admitted inhaled-product instruments

Nickel, tin and aluminium resolve to mandatory control on all 15 rows. That is correct on the register as it stands, and it was checked rather than assumed:

```
US-CO  Ni/Sn/Al rows on register: 0
US-CA  Ni/Sn/Al rows on register: 2  (us_ca_swrcb_2024_al_aluminum_mcl_1000ugl, us_ca_swrcb_2024_ni_nickel_mcl_100ugl)
US-MD  Ni/Sn/Al rows on register: 0
US-MA  Ni/Sn/Al rows on register: 0
US-NV  Ni/Sn/Al rows on register: 0
IL     Ni/Sn/Al rows on register: 3  (il_fcs2016_sn_1_canned_foods..., il_fcs2016_sn_1_1_ready_to_eat_canned_foods..., il_fcs2016_sn_1_2_canned_beverages...)
```

The only hits are a California drinking-water maximum contaminant level expressed per litre and Israeli canned-food tin maximum levels. Neither reaches an inhaled home-air product, and neither is in this category's basis family. Nothing was added to the register to close this, because the register is the only source of numbers and a value that is not in it is not available to a config.

What remains genuinely unverified is whether the Colorado 2022 table or the California DCC section 15723 schedule publishes a nickel, tin or aluminium value that the register simply does not yet carry. Retrieving the two primary instruments and reconciling them against the register is a source-retrieval task, not an adjudication.

- Owner: standards register maintenance (regulatory fetch pathway, `tools/central-library` + `data/evidence/regulatory_limits.csv`).
- Resolution date: 2026-09-30.
- Consequence if a value is found: the affected Ni, Sn or Al cell moves from `control` to `read-across` at the sovereign number. The published totals for Pb, Cd, tAs, tHg and Cr are unaffected either way.

## VERIFY

```
$ node tools/standards/compile-category.mjs --config=tools/standards/cat22-config.json
COMPILE EXIT=0

$ node tools/standards/audit-compiled-standards.mjs --dir=data/workbench/standards/cat22-compiled
## data/workbench/standards/cat22-compiled — 15 record(s), 75 firm cell(s), 0 FAIL, 0 WARN
=== 15 record(s) across 1 dir(s): 75 firm cells, 0 FAIL, 0 WARN ===
AUDIT EXIT=0
```

Zero stricter-unselected warnings: no credible-regulator register row passing a row's basis guard is stricter than the value that row selected.

```
$ node tools/standards/sync-not-material.mjs --dir=data/workbench/standards/cat22-compiled --check
sync-not-material --check: 0 to add, 0 to update, 12 not-material cell(s) total
CHECK EXIT=0

$ node tools/evidence/audit-not-material-substantiation.mjs
Not-material substantiation audit — 448 determinations
    8  WARN
  440  PASS
EXIT=0        (all 12 Category 22 determinations PASS; none of the 8 WARNs is a Category 22 row)

$ node tools/evidence/audit-not-material-integrity.mjs
EXIT=1        (136 pre-existing contradictions, none of them a Category 22 row)
```

## Disposition of the 2026-08-17 adversarial audit findings

### Finding 1 (major) — mandatory analyses with no acceptance criterion. ACCEPTED AND FIXED.

The finding was correct and was verified independently before it was applied. All 75 numeric cells mandated at least one analysis beyond the published test ("the article's non-emitting components digested and screened separately per this row's component plan", plus post-burn residue and ash on the combustion rows and reservoir residue film or wetted-path rinsate on the heated rows), and none published a criterion, a threshold or a lot disposition for it. Because the published value is scoped to the emitting material, a candle whose lead sits in a lustred glaze or a plug-in evaporator whose lead sits in solder joints or plated plug pins could pass with no stated consequence. The control cells in the same records already published dispositions, which made the omission on the numeric cells conspicuous.

Every one of the 75 numeric cells now carries a `DISPOSITION OF THE ADDITIONAL ANALYSES THIS CELL MANDATES` block with a criterion and a lot consequence for every analysis it orders.

Component results are dispositioned in three ordered branches, and the finding's first suggested wording was deliberately not adopted. Applying "the same published ceiling of 500 µg/kg to each component result individually" would fail every compliant article: a tinplate candle vessel, an aluminium evaporator housing, a plated plug pin and a solder joint are substantially metal by construction, and reading an emitting-material ceiling against a structural component's bulk content is precisely the basis conflation this row's `basis_guard` exists to prevent. The finding's second option, a named alternative component criterion with its instrument, is what was built:

- **(a) A sovereign instrument that reaches the component and the analyte is the criterion**, applied in its own basis at its own threshold, and an exceedance blocks certification outright. This branch is live and analyte-accurate. EU RoHS 2011/65/EU reaches the powered sub-assembly of the five electrical rows for lead (1,000,000 µg/kg), cadmium (100,000) and mercury (1,000,000), and restricts arsenic in no form and total chromium in no form, so it does not reach the tAs or Cr cells. Regulation (EU) 2023/1542 reaches any supplied cell for lead (100,000), cadmium (20,000) and mercury (5,000). 16 CFR 1500.17(a)(13) reaches a metal wick core for lead only. Where the branch is empty, the instruments checked before saying so are named individually rather than waved at.
- **(b) An emission-path component is governed through the published value itself**, applied where its basis makes it meaningful: the published test is performed on emitting material sampled from the finished, filled and assembled article rather than from a pre-fill bulk batch, at the end of the declared shelf life or after the declared maximum run, burn or heat condition, so element transferred out of an emission-path component is carried into the published result rather than escaping it. A result at or above the ceiling fails the lot. On the total-chromium cells the screen is a tripwire and not a pass/fail: a result reaching half the screen (300 µg/kg) orders reflex hexavalent-chromium speciation and the Cr-VI cell's zero-tolerance disposition then governs the lot.
- **(c) Everything else** is dispositioned under the HMTc control-and-escalation rule in the same words the control cells already used: ALARA against demonstrated process capability, CAPA and named raw-material traceback on an unexplained step change, and a block on certification where an uncontrolled source is confirmed. No component ceiling is invented in this branch.

The residue and ash analyses are dispositioned as mass-balance checks rather than as second ceilings, because a concentration expressed per kilogram of ash or of recovered film carries a denominator one to two orders of magnitude smaller than the published basis and is not comparable to it. On the combustion rows the residue is reconciled to the unburnt article, and a reconciliation that cannot be closed within the combined expanded uncertainty of the two determinations means the published test was run on an unrepresentative sample: the lot is held, re-sampled through the full burn depth and re-tested, and a confirmed unrepresentative test fails the lot. On the heated and nebulising rows the criterion is additive rather than representational, because a heated or wetted component can add element to the charge: any excess of the recovered film or rinsate over the sealed charge's own content, beyond the combined expanded uncertainty, is pick-up from the reservoir, transducer, mesh, nozzle or glaze, and that excess is added to the charge content before the published value is applied, so a reconciled total at or above the ceiling fails the lot even where the sealed charge alone was compliant. On the vacuum-additive row the friable fines fraction is not treated as a separate matrix at all: it is the emitting material in its most respirable form, the published value applies to it directly, and the bulk result never averages the fines away.

The component-level sampling plan was additionally promoted out of `scope_note` prose into the structured `material` and `components` fields the compiler now carries onto each record, so the component obligation the disposition rests on is enumerated on the record itself rather than only in narrative. This also cleared the gate's `W3` hollow-control warning, which fired on all 15 records before the change.

Nothing in this remediation moves a number. No published value changed; what changed is that every analysis the standard orders now has a stated outcome.

### Finding 2 (major) — the 12 MeHg not-material determinations shipped unregistered. ACCEPTED AND FIXED.

The finding was correct: `data/evidence/standards-not-material.csv` carried no Category 22 slug, so neither the build-blocking substantiation gate nor the occurrence-contradiction integrity gate could evaluate the 12 methylmercury claims, even though the compiled cells themselves carried a complete contract. `sync-not-material.mjs --check` reported "12 to add" and exited 1.

The 12 `(row_slug|MeHg)` determinations were upserted at `--date=2026-08-17`. Verified: exactly 12 rows appended, zero existing rows removed or altered (the registry is shared across categories, so the delta was diffed against a pre-run snapshot rather than assumed). `--check` now exits 0. The substantiation audit returns PASS on all 12, not WARN. The integrity audit reports no Category 22 contradiction; its non-zero exit is a pre-existing 136-item backlog in other categories and is not attributable to this build.

One tool behaviour worth recording, because it will bite the next category: `sync-not-material.mjs` compares `cross_sourced` when deciding whether a row needs updating, and `--check` always uses the default `--cross` string. Writing with a custom `--cross` therefore leaves `--check` permanently reporting "to update". The Category 22 rows were rewritten with the default string so the check is stable and idempotent.

### Finding 3 (minor) — no derive/audit/verify audit-trail document. ACCEPTED AND FIXED.

This document.

## Notes / next

- The Ni/Sn/Al register gap above is the only open item on this category. It cannot change a published total.
- Vape and inhalation hardware remains reserved (see the Category 25 reservation, OI-20260817); nothing in this category covers a device whose emitting material is inhaled by the user through a mouthpiece.
- The scented-candles lead `binding_control` is the template for any future row in this category that acquires a component prohibition: enforce it as a pass/fail on the component in the instrument's own basis, never as the row's ceiling.
