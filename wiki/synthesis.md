---
type: synthesis
updated: 2026-04-24
audience: [regulator, educator]
---

# Current synthesis

This page is the evolving statement of the Heavy Metal Index's current best understanding across the metals in scope. It is updated when ingests move the needle, and it is always behind the primary-source pages it draws from.

The first substantive synthesis entry will cover cadmium in food, integrating the regulatory tox documents currently in ingest (EFSA 2009, JECFA 2010, EPA IRIS, ATSDR, OEHHA Prop 65, Codex CCCF17) with the textbook chapters that provide the canonical toxicological frame (Handbook on the Toxicology of Metals chapter 32 by Nordberg, Nogawa, and Nordberg 2015, Casarett & Doull's Essentials chapter 23 by Ufelle and Barchowsky 2021, and Patty's Toxicology chapter 7 by Jakubowski 2012). The full cadmium synthesis will be posted after the regulatory-tox ingests complete and the textbook chapters are integrated. Readers should treat any claim here as provisional and trace it upward to the source page before citing.

## Gaps and load-bearing questions surfaced during ingest

Issues raised by completed ingests that must be resolved or explicitly acknowledged in the eventual synthesis.

### EFSA TWI versus JECFA PTMI for cadmium

Raised during ingest of [[sources/efsa-cadmium-contam-2009]] on 2026-04-24.

The EFSA Panel on Contaminants in the Food Chain established a tolerable weekly intake for cadmium of 2.5 µg/kg body weight per week in January 2009, anchored on renal tubular dysfunction biomarkered by urinary beta-2-microglobulin, with a reference point of 1.0 µg cadmium per gram creatinine in urine at age 50. The Joint FAO/WHO Expert Committee on Food Additives subsequently adopted a provisional tolerable monthly intake of 25 µg/kg b.w./month in 2010, which expressed on a weekly basis is approximately 5.8 µg/kg b.w./week, a factor of approximately 2.3 higher than the EFSA TWI. EFSA issued a reaffirming statement in 2011 explaining the derivation differences between the two bodies; that 2011 statement is not yet in the corpus and is flagged for future ingest.

The two bodies drew from overlapping primary literature. The divergence reflects different methodological choices including the selection of pivotal studies, the treatment of the urinary-cadmium-to-dietary-cadmium translation, and the choice of averaging window (EFSA uses a weekly window rounded from a 2.52 µg/kg b.w./week derivation; JECFA uses a monthly window specifically to reflect cadmium's long biological half-life). The synthesis cannot average or pick one; it must present both with derivation transparency and let readers see where the methodological choices led to the gap. HMT&C certification-threshold decisions that calibrate to one reference value or the other need to name the rationale per the CLAUDE.md firewall rule.

To resolve before the cadmium synthesis is written:
- Ingest the EFSA 2011 statement (pending raw PDF availability).
- Ingest the JECFA 2010 monograph (pending — next several steps of current batch).
- Compare the critical study selections side by side and identify the specific methodological choices that drive the numeric gap.

### Dietary cadmium carcinogenicity dose-response

Raised during ingest of [[sources/efsa-cadmium-contam-2009]] on 2026-04-24.

The International Agency for Research on Cancer classifies cadmium as a Group 1 human carcinogen on the basis of occupational inhalation studies. General-population epidemiology has produced statistical associations between cadmium exposure and cancers of the lung, endometrium, bladder, and breast. EFSA judged these data insufficient for quantitative dose-response modeling and anchored the TWI on the renal endpoint instead. The open question is whether sufficient data have since accumulated to support a quantitative carcinogenic risk assessment for dietary cadmium at general-population exposure levels, or whether the renal endpoint remains the defensible anchor.

The synthesis will need to state clearly what IARC says, what EFSA concluded in 2009, and what the more recent primary literature shows, without overclaiming on cancer risk (because the dose-response is not yet quantitative) and without underclaiming (because the Group 1 classification is durable and the general-population associations are replicating). Consumer-facing sections require particular care given the dose-and-population specificity rule in CLAUDE.md.

To resolve before the cadmium synthesis is written:
- Ingest the operative 1985 EPA IRIS chemical record 0141 for cadmium, which carries the US-side oral RfD and its critical endpoint. The 1999 reassessment draft in `raw/reports/` is a draft that never became Agency position and is deferred for a later historical ingest.
- Ingest the ATSDR toxicological profile, which synthesizes the carcinogenicity literature through approximately 2012.
- Note that the OEHHA Prop 65 documents ingested on 2026-04-24 address reproductive toxicity, not carcinogenicity; the separate Prop 65 carcinogenicity listing for cadmium and its No Significant Risk Level are pending ingest.
- Scan recent general-population studies flagged during textbook-chapter ingest for any that have since produced credible quantitative dose-response estimates.

### EPA IRIS Cd assessment provenance gap

Raised during attempted ingest of `EPA_IRIS_Cadmium_ToxicologicalReview.pdf` on 2026-04-24.

The raw file in `raw/reports/` with this name is a March 4, 1999 external review draft marked "DO NOT QUOTE" and does not represent Agency position. The operative EPA IRIS cadmium assessment is the 1985 record (IRIS chemical record 0141), which is understood from secondary citations to establish oral RfD values of roughly 5 × 10⁻⁴ mg/kg/day (water) and 1 × 10⁻³ mg/kg/day (food), anchored to a kidney-cortex concentration of 200 µg/g. The wiki cannot state those values as verified until the primary 1985 IRIS record is in the corpus with SHA-256 provenance on its own source page; recording them from secondary citations would violate CLAUDE.md's numeric-verification rule.

To resolve:
- Obtain the primary 1985 IRIS chemical record 0141 document (likely accessible via EPA's IRIS portal at epa.gov/iris) and ingest it as a source page with full provenance.
- Separately ingest the 1999 reassessment draft as historical context, with explicit "DRAFT, NOT ADOPTED" flagging throughout its source page.
