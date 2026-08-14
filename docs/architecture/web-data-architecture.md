# Heavy Metals Ecosystem — Web & Data Architecture

**Status:** Working architecture, agreed in principle 2026-06-16. Some naming decisions
are OPEN (flagged ⬚). This document is binding once those resolve; until then it is the
shared design of record.

**Purpose:** Define how the heavy-metals certification ecosystem is structured across web
properties and data layers, so the standards can be published defensibly, the firewall
holds mechanically, and a fresh session (Claude or human) can pick this up with full
context. It is the answer to: *where does each thing live, why, and what protects it.*

**Read first for context:** `docs/governance/hmtc-governing-principles.md`, `CLAUDE.md`
Parts 1 / 2 / 19, and the memories `project_standards_publication_architecture`,
`project_standards_pool_completeness`, `project_standards_readiness_monitor_defect`.
Two audit runs underlie this doc (a firewall audit and a domain/naming panel, 2026-06-16);
their findings are summarized inline below.

---

## 1. The core idea in one paragraph

The heavy-metals ecosystem is **one operation behind the scenes, several independent public
faces in front.** A single canonical data platform feeds everything through an API. But the
public splits into distinct properties by *role*, and the split is not cosmetic — it is the
**defensibility moat.** The independent literature index (HMI) and the certifier must be
separate public faces with a hard data-class firewall between them, because the entire
commercial value (litigation insurance for certified brands, regulator credibility,
Cochrane-grade authority) rests on the index being an *independent reference the certifier
merely operates*, never the certifier's self-published justification.

---

## 2. The firewall — the load-bearing rule (do not violate)

From CLAUDE.md Part 2 and Governing Principle 4, confirmed by the 2026-06-16 audit:

- **The wiki/index (HMI) reports what the literature says. The certifier sets standards.**
  They are separate properties by design. One-way linking only (the certifier cites the
  index; the index never endorses or justifies the certifier).
- **Standards arithmetic never lives on the index.** P97/P45 percentiles, clean/dirty
  designations, pooling math, candidate values, and final thresholds are the certifier's.
  Any of those rendered on a `heavymetalindex.com` URL = the *"self-published justification
  on the certifier's own website"* attack — the single thing this architecture exists to
  deny. It collapses the independence the moat depends on.
- **The firewall is about which DATA CLASS lands on which URL — not about repos or APIs.**
  One database and one API can feed every surface safely, *if and only if* the literature
  data class is the only thing that ever renders on the index, and the derivation data class
  only ever renders on the certifier properties.
- **Common ownership does not break independence; a firewall breach does.** A heavy-metals
  parent brand can own both the index and the certifier (this is already the model — the
  Paleo Foundation operates both today). Independence is preserved by (a) the index's
  editorial register (it reports the *complete* literature honestly, including evidence
  unfavorable to HMTc thresholds, and names the gap rather than hiding it) and (b) the
  data-class firewall — **not** by corporate separation. Maximizing the index's editorial
  independence is what keeps the moat; it is a discipline enforced in code, not org charts.

**Enforcement:** because the standards will publish per-subcategory on independent schedules
(see §6), the firewall cannot be a per-page human review — the volume removes the human from
the loop. It must be a **build-blocking lint**: no threshold / P-value / clean-dirty token
may render on any index URL. The current honey page proves this is necessary — it already
leaks derivation-rationale tags (`step0_basis`) onto the public index page, and its evidence
table is broken (empty despite 20 cited studies), proving the generators silently misfire.

---

## 3. The brand & property structure

Heavy Metals becomes its **own parent brand** (distinct from the Paleo Foundation as a brand;
the legal operator remains Paleo Certified Inc. dba The Paleo Foundation, or a successor
entity — a legal decision, see §9). Three public tiers plus an authenticated portal:

| Tier | Property | Role |
|---|---|---|
| **Parent / authority** ⬚name TBD | (institutional umbrella) | Operator and source of truth. Master registry, certificate **verification**, governance, mark-use rules, public enforcement notices, the apply hub. The "who stands behind this." (NSF / UL / foundation analog.) |
| **Certifier / standards** | `heavymetalcertified.com` | Where the **standards/derivation are published** — drawn via API from the staff workbench, one-way-citing the index. The certification program's authority surface. |
| **Program / mark** | `heavymetaltested.com` | The existing **Heavy Metal Tested & Certified (HMT&C)** mark and marketing face — "what the mark means," requirements, apply landing, filtered directory. Keep the equity; "Tested" is the most defensible verb (a process, not an outcome). |
| **Index / evidence** | `heavymetalindex.com` | The **independent literature reference** (HMI). Occurrence data, regulations as reported, contaminant evidence. Literature-only, forever. The moat. |
| **Portal** | `portal.{parent}` | The **authenticated application** + accounts, billing, renewals, asset/mark downloads. `noindex`, behind auth. This is the "application on the parent." |
| **Education** (optional) | `heavymetalfacts.org` | Plain-language consumer education (.org credibility). No standards math, no safety verdicts; same consumer-language discipline (no undefined "safe"/"dangerous"). |

### Domain dispositions (from the naming panel, 2026-06-16)

> **Superseded 2026-08-14 (Karen): `heavymetaltested.com` is being RETIRED.** The
> program/mark consolidates onto `heavymetalcertified.com`; every HMTc-program link
> (the footer, the standards-firewall disclaimers, the Journal path) now points to
> `heavymetalcertified.com`. The "keep both as distinct marks" rows below are the
> 2026-06-16 record and no longer the operative plan — treat `heavymetaltested.com`
> as a 301 → `heavymetalcertified.com`.

| Domain | Disposition |
|---|---|
| `heavymetalindex.com` | **INDEX** (in use; independent literature). |
| `heavymetalcertified.com` | **Certifier / standards** property (or the parent — see §9 open decision). |
| `heavymetaltested.com` | **RETIRED 2026-08-14 (Karen); 301 → `heavymetalcertified.com`.** Program/mark consolidated onto the certifier domain. (Was: keep as the established HMT&C mark — superseded.) |
| `heavymetalsafe.com` | **Park / 301 → certifier. NEVER a mark.** "Safe" is an absolute-outcome claim — a false-advertising/UDAP magnet that contradicts the program's own honest "tested-to-a-threshold, gap-stated" record (a damaging admission in discovery). Unanimous across all audit lenses. |
| `heavymetaldataindex.com` | Defensive hold → 301 to HMI. Do **not** name the certifier "dataindex" — it blurs against the independent index and undermines the firewall's perceived separation. |
| `heavymetalfacts.org` | Education front, or hold. |
| `heavymetalfacts.com` | Defensive hold → 301 to `.org` or HMI. |
| `heavymetalawareness.com`, `heavymetalsproject.com` | Defensive holds. "Project"/"awareness" undercut the institutional-authority posture; don't operate as brands. |

---

## 4. Data architecture (one platform, two source-of-truth stores)

```
                         ┌───────────────────────────────────────────┐
                         │  CANONICAL OPERATIONAL DB (Postgres)        │
                         │  brands · products · programs · standard    │
                         │  versions · applications · quotes · invoices│
                         │  certifications · certificates · renewals   │
                         │  assets · enforcement                        │
                         └───────────────┬─────────────────────────────┘
                                         │ Public + authenticated API (namespaced)
        ┌────────────────────────────────┼────────────────────────────────────┐
        │ LITERATURE namespace            │ DERIVATION + REGISTRY namespace      │
        │ (from wiki/ + data/evidence/)   │ (from data/workbench/ + the DB)      │
        ▼                                 ▼                                      ▼
  heavymetalindex.com              heavymetalcertified.com / heavymetaltested.com
  INDEX (literature only)          standards, registry, verification, mark, apply
                                                  │
                                                  ▼  portal.{parent} (auth, noindex)
                                            applications · billing · renewals · assets
```

**Two canonical stores, never merged:**

1. **Literature source of truth** = the HMI build: `wiki/` pages + `data/evidence/`
   (occurrence registers, regulatory caps *as reported*, the literature-native product /
   ingredient / metal views). Served read-only as the **literature API**; renders only on
   the index.
2. **Derivation source of truth** = the staff workbench: `data/workbench/standards/` +
   the briefings + the pooled distributions (P97/P45, clean/dirty, pooling math, candidate
   values, sensitivity bands, rationale tags, the outlier-adjudication register). This is
   the **only** place thresholds exist, and it renders only on the certifier properties.

The certifier site **reads the workbench-derived standard and one-way-cites the HMI
literature URL** — so the published standard is "the certifier applying the independent
evidence," never "the index publishing a threshold." HMI never reads back from the
derivation store. The API splits these into separate namespaces; **the index endpoint is
hard-denied the derivation namespace.**

**Biggest leak vector (all audit lenses flagged it):** a shared generator or page template
silently pulling a workbench threshold into an index-rendered page. Defended by the
build-blocking firewall lint (§2), not by hoping the generators behave.

### Canonical entity model (fixes the old Paleo Foundation duplicate-content problem)

One **canonical Brand page and one canonical Product page**, hosted once on the **parent**.
Each program shows a **filtered directory** of cards that *link to* the parent's canonical
entity page — never a duplicated brand biography. A multi-certified brand therefore has one
page with multiple program chips, not copies across properties. (Full relational model —
Program, StandardVersion, Brand, Product, Application/Line/Product, Quote, Invoice,
Certification vs Certificate, Renewal, Asset/Grant, EnforcementAction — is in the
deep-research report on Karen's desktop; reproduce it into a data-dictionary doc at build
time.) Certification (the live status relationship) and Certificate (the issued document)
are distinct objects.

---

## 5. Why these names (and the one that's forbidden)

- **`heavymetalsafe.com` is forbidden as a mark or consumer claim.** "Safe" asserts an
  absolute outcome the program explicitly does not claim. It triggers false-advertising /
  UDAP exposure and contradicts the internal honest posture — opposing counsel gets both the
  over-claim attack *and* a documented admission that the mark over-promises. Park it
  defensively only.
- **"Certified" and "Tested" are both defensible** — bounded status / process verbs. Keep
  `heavymetaltested.com` as the established mark; use `heavymetalcertified.com` as the
  standards/certifier authority. Do not run them as two competing marks (brand dilution +
  duplicate content); give each a distinct role under the parent.
- **The index name stays clean and singular.** Do not create "dataindex"-style siblings as
  operating brands — proximity to the index name blurs the firewall's separation.

---

## 6. Standards publication model (how standards reach the certifier site)

From the firewall/subcategory audit (2026-06-16):

- **Publish per-subcategory, not per-category.** Ship a subcategory's standard the moment it
  is defensibly ready; bundle subcategories into a category manual later. The standards are
  already computed per locked row in native basis, and the Cat 1 manual already treats each
  chapter as a detachable licensing exhibit — so this is the existing architecture, made the
  publication unit.
- **Five gates before any subcategory ships** (a row that fails a gate is held, not shipped):
  1. **Pairing resolved** — `variant_type: independent`, no pending within-pair partner, and
     **no ACTIVE `across_row_review_hook`** (clean/dirty P45 is a category-level judgment).
  2. **Methodology-version uniform** — build-blocking lint; no two shipped sheets may encode
     different percentile framings (`salt.md` still has the deprecated P90/P30 — fix).
  3. **Per-analyte readiness** — block `needs_review` or floating values (e.g. honey Al
     10,000 ppb against a 139,113 ppb pool with no cap).
  4. **Analyte-scope disclosed** — covered vs uncovered analytes travel *with the mark* to
     the consumer (a brand must not be silently uncontrolled on uncovered analytes).
  5. **Category-completeness ledger** — honest "Oils: 1 of 6 subcategories published."
- **Standards are living, versioned, DOI'd iterations.** Each edition ships with an honest
  evidence-state note + update changelog; pools are recovered/adjudicated progressively
  (the recover-and-adjudicate workflow). Outlier cells are flagged in
  `data/evidence/standards-outlier-adjudication.csv` and render "adjudication pending,"
  never a firm value.
- **Transparency is a Daubert asset but raises the QC bar.** A fully reproducible derivation
  (open engine, per-source contribution logs, sensitivity bands, cited WHO/JECFA/EFSA
  lineage, reproduce-from-commit) is the strongest defensive posture — *if every published
  number is clean.* It multiplies the damage of a defective one. So the recover-and-adjudicate
  + outlier-flag work is the prerequisite to publishing, not optional polish.

---

## 7. Application & portal UX (one cart, one account, one brand profile)

The applicant experiences one account even when entering from different public sites:
program site → "Apply" → SSO on the portal → select/create Brand → build a multi-program
bundle (cart) → add products **once**, assign to program lines → combined document checklist
(one COA satisfies multiple programs) → frozen quote with per-program line items + bundle
discounts → one invoice/payment → single status dashboard → issuance + asset/mark release →
renewal prefilled from last cycle (deltas only). The portal shows **one brand profile with
program chips**, not separate accounts per certification. Authenticated + `noindex`.

---

## 8. Build sequence (roadmap)

1. **Foundation** — finalize the parent name + legal entity; lock the URL map, data
   dictionary, content-ownership rules, redirect strategy. Exit: every content type has one
   canonical home.
2. **Firewall lint FIRST** — build-blocking check that no derivation token renders on an
   index URL, and methodology-version uniformity across shipped sheets. This protects
   everything downstream and is cheap; do it before any new public surface.
3. **Platform core** — canonical DB, namespaced API (literature vs derivation+registry),
   auth, billing, certificate model (Certification vs Certificate).
4. **Parent site** — governance, master registry, verification pages, canonical
   Brand/Product templates.
5. **Certifier site** — render the per-subcategory standards from the workbench, one-way
   citing HMI; apply hub.
6. **Program site (`tested`)** — mark explainer, requirements, apply landing, filtered
   directory linking to the parent's canonical entities.
7. **Portal** — the one-cart application + renewals.
8. **Migration + redirects** — park/redirect the held domains; per-property sitemaps +
   Search Console; 301s kept ≥1 year.

---

## 9. OPEN DECISIONS (the forks still to make)

- ⬚ **The parent brand NAME.** Karen is weighing it. Criteria: institutional/authority
  register (Foundation / Institute / Council / Standards / Authority archetype), conveys
  *operator and standards body*, NOT a claim and NOT a product; must not be confusingly
  close to the index or the cert names. None of the current domains is a strong
  parent-umbrella name (`project`/`awareness` undercut authority) — a new domain may be
  needed. **Claude to help shortlist once Karen sets the tone she wants (clinical-authority
  vs accessible-trust).**
- ⬚ **Parent vs certifier consolidation.** If a distinct parent brand exists, decide whether
  `heavymetalcertified.com` is (a) the standards/certifier property *under* the parent, or
  (b) folded into the parent (parent = certified). The naming panel, before the "own parent
  brand" decision, picked `certified` AS the parent; with a separate parent brand, `certified`
  becomes the standards property beneath it. Resolve once the parent name lands.
- ⬚ **Legal entity.** Does the heavy-metals parent brand operate as a DBA of Paleo Certified
  Inc. (preserving the Cyprus / EU database-rights posture per CLAUDE.md Part 1) or as a new
  entity? Legal counsel decision; affects the database-rights and independence framing.
- ⬚ **Education surface.** Operate `heavymetalfacts.org` as a consumer-education front, or
  hold it. Depends on appetite to staff a fourth content surface.

---

## 10. Context for a fresh session (so nothing is lost)

If you are a new Claude Code session picking this up:
- This document is the architecture of record. Read it, then the memories named at the top.
- The **firewall** (CLAUDE.md Part 1/2/19 + Governing Principle 4) is non-negotiable and is
  the reason for the property split — do not "simplify" by merging the index and certifier.
- The **two audits** behind this (firewall audit; domain/naming panel) live in the session
  task outputs; their conclusions are summarized here. Re-run a design panel only if a
  decision in §9 is being reopened.
- The **standards data** is in `data/workbench/` (derivation) and `data/evidence/` +
  `wiki/` (literature). The recover-and-adjudicate state, outlier register, and recovery
  worklist are in `data/evidence/standards-*`.
- Current honest status: the engine is corrected, the readiness signal is fixed, 14 briefings
  exist, but **0 categories are cleanly shippable yet** (even honey has an unresolved
  honey/syrup split + a contaminated tAs pool). The path to shippable is the
  recover-and-adjudicate campaign, not new architecture.
