---
type: health
title: "Cat 2 (Children Personal Care) non-ingestion exposure pathways"
audience: [regulator, educator, researcher, brand-legal]
updated: 2026-05-14
sources: 5
created_by: claude_opus_47_session
note: "Methodology supplement for HMTc Category 2. Describes the toxicokinetic / exposure-pathway differences between food (Cat 1) and personal-care products (Cat 2) that govern how the HMTc Cat 2 thresholds will be calibrated. Per OPERATING.md Part 7 initiative 3.1, this supplement is a prerequisite for defensible Cat 2 certification. The supplement reports what the literature supports; the staff Standards Workbench applies these factors to specific Cat 2 thresholds (CLAUDE.md Part 2 firewall)."
---

# Cat 2 (Children Personal Care) non-ingestion exposure pathways

## Overview

The HMTc certification program covers Category 2 (Children Personal Care): toothpaste, lipstick and other lip products, baby talcum powder, baby lotion/oil, sunscreen, shampoo and other rinse-off products, wet wipes, disposable diapers, and children's makeup. These products differ from Category 1 (food) in how heavy metals reach the child's body. Food is ingested; personal-care products reach the body via at least four mechanisms — and each mechanism has a different absorption fraction, a different time profile, and different vulnerable-population implications. This page documents those mechanisms so the Cat 2 threshold methodology is interpretable and defensible against expert cross-examination.

## The four exposure pathways for Cat 2 products

**Dermal absorption.** Most leave-on personal-care products (lotions, sunscreens, lip products, body paints) absorb a fraction of their heavy-metal load through intact skin. The absorption fraction depends on the metal (organic forms cross the stratum corneum more efficiently than inorganic), the vehicle (lipophilic carriers enhance penetration), the application duration (overnight leave-on > 30-minute application), and the skin condition (broken skin and infant thin-stratum-corneum substantially raise absorption). For Pb, the dermal absorption fraction is typically reported in the 0.1-1 % range for inorganic forms and 5-20 % for organic forms ([[sources/attard2022-heavy-metals-cosmetics-review|Attard 2022]]). Cumulative dermal exposure also concentrates in the stratum corneum, which acts as a reservoir releasing into systemic circulation over hours to days.

**Inhalation.** Powders, sprays, and aerosols (talcum, hair spray, sunscreen spray, perfume) deliver heavy metals into the airways. Talcum powder applied to the diaper area carries a 1-5 % aerosolization fraction during typical use, and the deposited fraction in the lower respiratory tract reaches 10-30 % of inhaled mass for particles in the 1-5 µm aerodynamic-diameter range ([[sources/rashmi2020-baby-talcum-powder-heavy-metals-india|Rashmi 2020]] notes mesothelioma and talcosis risks from chronic talc inhalation). Sprays present similar concerns for finer aerosol fractions. Pulmonary absorption of deposited heavy metals approaches 80-100 % for soluble forms (vs the typically 5-15 % oral absorption from food).

**Accidental ingestion via product mediation.** Several Cat 2 product classes are ingested partially during normal use:

- **Toothpaste**: 27.6-35.5 % of dispensed amount in children aged 2-12 ([[sources/massarsky2025-heavy-metals-toothpaste-health-risk|Massarsky 2025]] citing Belknap 2014 and Sjögren 1995). Younger children (2-4 yr) ingest a higher fraction.
- **Lip products** (lipstick, lip gloss, lip balm): an estimated 24-87 mg/day swallowed in adult women (Hepp et al. 2009), with the lower end likely for balms (thinner spread) and higher end for lipsticks. Pediatric data is sparser; children with frequent lip-licking and "play" application may approach or exceed adult ingestion ([[sources/li2021-lead-lip-cosmetics-china-ecommerce|Li 2021]]).
- **Talcum powder**: pica behavior and accidental aspiration during application can deliver gram-level ingestion in infants ([[sources/rashmi2020-baby-talcum-powder-heavy-metals-india|Rashmi 2020]] citing Pairaudeau 1991 case studies).
- **Hand-to-mouth transfer** from any leave-on body product (makeup, body paint, sunscreen). The Sprinkle 1995 study cited in [[sources/li2021-lead-lip-cosmetics-china-ecommerce|Li 2021]] documented elevated blood-Pb levels in Pakistani and Indian children in California associated with eye-makeup imports — a classic hand-to-mouth pathway.

For ingested fractions, the gastrointestinal absorption applies (typically 5-15 % for inorganic Pb, 50-90 % for Cd, 90+ % for soluble iAs). The "no first-pass metabolism" cosmetic-specific framing applies only to the dermal and inhalation routes; ingested fractions of personal-care products are pharmacokinetically equivalent to ingestion of the same dose from food.

**Trans-placental and breast-milk transfer.** Personal-care products applied to parents (specifically pregnant or lactating mothers) deliver heavy metals to the fetus or breast-fed infant indirectly. This pathway is documented for Pb in maternal skin-lightening creams (mercury and lead) and for organotin in maternal dermal-contact products ([[sources/smajgl2015-tin-baby-diapers-croatia|Šmajgl 2015]] notes that organotin in diapers and maternal-application products may cumulatively affect the developing child). For HMTc Cat 2, this pathway is most relevant for products applied frequently and with high body-surface coverage (lotion, sunscreen, fragrance).

## Vulnerable-population considerations specific to Cat 2

Children aged 0-5 are the principal vulnerable population for Cat 2. Compared to adults:
- Higher surface-area-to-mass ratio increases dermal-delivered dose per kg-bw by ~3-4x
- Thinner stratum corneum (especially infants 0-12 months) doubles dermal absorption fraction for many metals
- Immature renal function delays Pb and Cd excretion, increasing systemic accumulation
- Developing neural tissues are more sensitive to Pb, Hg, and organotin neurotoxicity
- Behavioral patterns: hand-to-mouth, lip-licking, accidental aspiration during product application all elevate ingested fractions

Children 6-12 face a different mix: lower per-application dose factors than infants but increased product variety (makeup, body paint, fragrance) and increased "play" application motivation, with the [[sources/li2021-lead-lip-cosmetics-china-ecommerce|Medley 2023]] survey documenting 70 % of US children ≤12 have used CMBPs at least once.

Adolescents 13-18 approach adult exposure factors but retain elevated sensitivity for endocrine-active metals (Cd, organotin) during the puberty window.

## How HMTc Cat 2 thresholds use this supplement

This page reports the toxicokinetic and exposure-pathway evidence. The staff Standards Workbench (`data/workbench/standards/<cat2-row>.md`, not yet generated) applies these factors per row to convert literature concentration ranges into estimated systemic doses, then compares against analyte-specific Reference Doses (RfD) and Tolerable Daily Intakes (TDI) per the same methodology as Cat 1. The Cat 2 thresholds will be calibrated so that under realistic upper-bound use scenarios, the systemic dose stays below the analyte's RfD/TDI with the safety margin defined in the HMTc Governing Principles v2.0.

The gap between literature evidence (this page reports it) and HMTc Cat 2 thresholds (set on the workbench) is named honestly on the workbench per CLAUDE.md Part 2 firewall. The four CLAUDE.md Part 19 rationale tags (literature-baseline, regulatory-alignment, feasibility-driven, precautionary) apply equally to Cat 2 as to Cat 1.

## Open questions

- **Per-row dermal absorption fraction**: published values for Pb, Cd, Hg through intact infant skin are sparse. Where the Cat 2 thresholds depend critically on this factor, the workbench should document the assumed value and the source.
- **Per-row aerosolization fraction for talcum**: similarly sparse for the specific particle-size distribution of commercial baby talc.
- **Organotin pharmacokinetics in infants**: ([[sources/smajgl2015-tin-baby-diapers-croatia|Šmajgl 2015]]) cites the 20-100 % of TDI estimate for diaper organotin, but this rests on conservative absorption assumptions. A targeted toxicokinetics study would tighten the estimate.
- **Hand-to-mouth transfer factor** for product-mediated ingestion of body lotions, body paints, sunscreens. Surrogate data from soil-Pb hand-to-mouth modelling is the typical fallback; cosmetic-specific transfer factors are not yet a published consensus.

<!-- BEGIN: hmi-page-references -->
## References

Works cited in this page's text, in first-appearance order. This is not the full corpus for this page; it is only what the prose above draws on. The complete set of sources is listed under [Sources](#sources) below. Each title links to its source record, which carries the ingest receipt, the extracted values, and the file hash of the document it was built from.

1. [[sources/attard2022-heavy-metals-cosmetics-review|Heavy Metals in Cosmetics]]<span class="hmi-ref-meta">Attard T and Attard E · Environmental Impact and Remediation of Heavy Metals (IntechOpen book chapter) · 2022 · [doi.org/10.5772/intechopen.102406](https://doi.org/10.5772/intechopen.102406)</span><span class="hmi-ref-tag">Review</span>
2. [[sources/rashmi2020-baby-talcum-powder-heavy-metals-india|Determination of Toxic Heavy Metals in Commercially available brands of Baby Talcum Powder]]<span class="hmi-ref-meta">Rashmi V · IRIS – Journal for Young Scientists, Vol. X, pp. 25–29 · 2020 · [patnawomenscollege.in](https://patnawomenscollege.in/iris-vol-x2020/)</span><span class="hmi-ref-tag">Review</span>
3. [[sources/massarsky2025-heavy-metals-toothpaste-health-risk|Health risk implications of heavy metals in toothpaste]]<span class="hmi-ref-meta">Massarsky A, Unice KM, and Kreider ML · Public Health and Toxicology 5(2):9 · 2025 · [doi.org/10.18332/pht/207273](https://doi.org/10.18332/pht/207273)</span><span class="hmi-ref-tag">Review</span>
4. [[sources/li2021-lead-lip-cosmetics-china-ecommerce|Trace Metal Lead Exposure in Typical Lip Cosmetics From Electronic Commercial Platform: Investigation, Health Risk Assessment and Blood Lead Level Analysis]]<span class="hmi-ref-meta">Li Y, Fang Y, Liu Z, Zhang Y, Liu K, Jiang L, et al. · Frontiers in Public Health 9:766984 · 2021 · [doi.org/10.3389/fpubh.2021.766984](https://doi.org/10.3389/fpubh.2021.766984)</span><span class="hmi-ref-tag">Review</span>
5. [[sources/smajgl2015-tin-baby-diapers-croatia|Occurrence of tin in disposable baby diapers]]<span class="hmi-ref-meta">Šmajgl D and Obhođaš J · X-Ray Spectrometry · 2015 · [doi.org/10.1002/xrs.2609](https://doi.org/10.1002/xrs.2609)</span><span class="hmi-ref-tag">Review</span>
<!-- END: hmi-page-references -->

## Sources

- [[sources/rashmi2020-baby-talcum-powder-heavy-metals-india]] — talcum powder Pb/Cd/Hg + mesothelioma/talcosis risk
- [[sources/attard2022-heavy-metals-cosmetics-review]] — 16-category cosmetics meta-analysis + dermal absorption framework
- [[sources/massarsky2025-heavy-metals-toothpaste-health-risk]] — toothpaste ingestion fractions in children + HRA framework
- [[sources/smajgl2015-tin-baby-diapers-croatia]] — diaper organotin + infant dermal-contact exposure estimate
- [[sources/li2021-lead-lip-cosmetics-china-ecommerce]] — lip-cosmetic Pb + ALM/IEUBK blood-Pb modelling

<!-- BEGIN: hmi-page-history -->
## Update history

The five most recent substantive edits to this page, classified major (evidence or structure moved), correction (a published value or statement was wrong and has been fixed), or minor (narrative rewritten without changing the underlying evidence). Each description is derived from what the edit did to this page; the linked commit is the authoritative record, routine regeneration passes are excluded, and the full version history lives in [git](https://github.com/paleofoundation/heavymetalindex). When DOI minting comes online (see [[../docs/schemas/index.md|schema docs]]), each entry below will also link to a version-pinned DataCite DOI.

| Commit | Date | Change | Description |
| --- | --- | --- | --- |
| [90a2f9a38](https://github.com/paleofoundation/heavymetalindex/commit/90a2f9a38) | 2026-07-30 | major | 1 source added; 2 sections added; narrative text revised |
| [fd41c52c4](https://github.com/paleofoundation/heavymetalindex/commit/fd41c52c4) | 2026-05-15 | major | 5 sources added; 5 sections added; narrative text revised |
<!-- END: hmi-page-history -->
