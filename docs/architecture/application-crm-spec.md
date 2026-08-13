<!-- Generated 2026-06-18 via the application-crm-design Ultracode workflow (5 design lenses + adversarial red-team). Companion: docs/architecture/web-data-architecture.md + plan at ~/.claude/plans/users-karenpendergrass-desktop-deep-res-tender-robin.md -->

# ICS Central Application & CRM — Design of Record

> **Methodology note (2026-08-12):** Any occurrence-selected certification arithmetic in this 2026-06 architecture spec is superseded. Initial HMTc limits are government-limit-only; post-publication tightening uses eligible HMTc certified-lot data under Governance Policy §12. The remaining CRM and application-lifecycle design is retained for reference.

**Document status:** v1.0 specification, synthesized from five design slices (account-identity, program/cert/version, pricing-engine, application-lifecycle, firewall-SEO-safety) and reconciled against two rounds of adversarial red-team findings (F-series, A/B/C/D-series, P/S-series).

**Owner:** The Institute of Contaminant Standards (ICS), parent at `contaminantstandards.com`.

**Scope:** the single authenticated backend where every brand's certification applications, priced relationships, and certification records live, across all per-contaminant verticals and all years. This is commercial infrastructure; defensibility (Daubert/audit reconstructability) and the public-site SEO/data-class firewall are co-equal first-order constraints, not afterthoughts.

---

## 0. The three reconciliation decisions that drive the whole design

The red-team surfaced three places where the slices contradicted each other or the repo's own governance. Those are resolved here as load-bearing decisions; everything downstream obeys them.

**D-A. Tenure and pinning hang on the Certification, never on the Account or the whole StandardVersion.**
- Tenure is a *computed continuity interval per Certification* (cumulative paid-active time), not a wall-clock date on the Account (kills F2/A5/F12: ownership transfer, lapse-return, and the "buy one cycle, lapse 5 years, claim 5-year tenure" exploit).
- A Certification pins thresholds at **(analyte) granularity**, not whole-version (kills A1/F-ratchet: the repo's governance fires the ratchet *per analyte*, so whole-version pinning would drag un-triggered analytes into re-test). The immutable `StandardVersion` *document* still exists as the coherent snapshot; the cert references which cells of it bind.

**D-B. One `AccountBillingCycle` is the atomic pricing unit; co-term is mandatory; no two pricing-bearing Quotes may be in flight for one Account at once.**
- This kills the cycle-model contradiction (F3), the path-dependent gameable bundle (A4/F4/P1), and the "N concurrent Applications each pricing a different portfolio snapshot" double-charge. All adds/drops/refunds are prorated deltas against the one cycle that fire a single portfolio re-quote. "Staggered" exists only as a transitional onboarding state the system actively collapses via stub proration.

**D-C. The firewall is fail-closed and physically enforced, not tag-filtered or convention-based.**
- Index-class surfaces read only an **allow-by-projection published data plane** (a physically separate datastore), never the CRM database with a deny-by-tag filter (kills F1/C2/F6: the repo already lived the deny-open failure with the 250MB lambda incident, and `api/defense-dossier.mjs` already leaks cert-class data onto the index domain today).
- Link-cards carry a wire format that **omits body content entirely**, so copying is impossible regardless of developer intent (kills B1/F2/B3).
- A centralized post-deploy synthetic crawler is the enforcement keystone, owned by parent infra (kills C4: no single repo can lint N independently-deployed sites).

---

## 1. Data model

Multi-vertical-aware throughout. The **commercial spine** (Account, Brand, Product, Application, Quote, Certification, Certificate) is vertical-agnostic. The **measurement/evidence layer** (analytes, bases, methods, thresholds, checklists) is per-vertical-pluggable behind the `Vertical` config bundle. Drawing that line explicitly is what makes "add a vertical without shared-schema surgery" true (kills D2/D3/S2/S3/C1).

### 1.1 Identity & org

**`Account`** — the org-level commercial relationship. NOT the tenure or discount source of truth (those are derived; see `BillingGroup` and `Certification`).
| Field | Notes |
|---|---|
| `account_id` (PK, ULID) | |
| `legal_name`, `display_name`, `account_type` | enum: brand_owner / manufacturer / co_packer / retailer / distributor / agency_on_behalf |
| `billing_group_id` (FK) | the level discounts pool at — see D-C below for conglomerates |
| `billing_entity` (embedded) | legal_name, tax_id, billing_address, billing_country |
| `primary_jurisdiction` (ISO-3166) | drives default regulatory ceilings + tax determination |
| `status` | prospect / active / suspended / churned / archived (derived) |
| `external_billing_ref` | accounting-system customer id |

**`BillingGroup`** — sits above Account so a CPG conglomerate pools portfolio discounts across subsidiaries, or partitions them, without duplicating Accounts (resolves F2/C3/OQ-billing). Discount counters (breadth, tenure pooling) hang here. Default: one BillingGroup per Account.

**`User`** — global identity, one login across all verticals and all accounts. `user_id`, `email` (unique), `sso_subject` (OIDC), `mfa_enabled`, `is_staff`.

**`Membership`** — User↔Account with role + scope.
| Field | Notes |
|---|---|
| `membership_id` (PK) | |
| `user_id`, `account_id` (FK) | |
| `role` | external: account_owner / billing_admin / application_manager / product_editor / viewer / lab_uploader. internal: cert_admin / reviewer / pricing_admin / registry_steward / read_only_staff |
| `scope` (embedded) | vertical_ids[]? / program_ids[]? / brand_ids[]? / variant_ids[]? — null = whole account |
| `grant_basis` (FK, nullable) | the cert scope item this membership was granted *for* — when that scope item is removed or the cert lapses, the membership auto-expires (kills F14: stale co-packer access) |
| `status` | active / invited / revoked |

Staff act via a parallel `StaffGrant` table scoped by vertical/program, not by a single account. `registry_steward` is the **only** role that publishes or merges canonical Brand/Product entities.

### 1.2 Canonical registry entities (entered ONCE, parent-owned)

These are the public, self-canonical entities. They live once on the parent registry and are referenced — never copied — by every program and every vertical.

**`Brand`**
| Field | Notes |
|---|---|
| `brand_id` (PK, ULID) | ID-stable, never per-vertical |
| `canonical_name`, `slug`, `website`, `logo_asset_id` | |
| `canonical_url` | the ONE public entity page, on the parent registry, self-canonical |
| `parent_brand_id` (FK?) | brand houses |
| `registry_status` | draft / published / merged_into(brand_id) |
| `indexable` | default **false** — entity page is indexable only on brand opt-in (kills F10/B5: client-list scraping + EU database-right erosion) |
| `data_class` | non-nullable, no default: `public_registry` |

**`AccountBrand`** — membership/control join. `control_type` (owner / licensee / authorized_agent), `control_status` (claimed / verified / disputed / revoked). At most one `owner`+`verified` per Brand at a time.

**`Product`** — canonical, vertical-agnostic identity only.
| Field | Notes |
|---|---|
| `product_id` (PK), `brand_id` (FK) | |
| `canonical_name`, `canonical_url`, `gtin`/`upc` | GTIN is the hard dedup key |
| `product_category_ref` | maps to the shared taxonomy |
| `registry_status`, `indexable`, `data_class` | as Brand |

**`ProductVariant`** — the SKU-level identity. **Note the deliberate change from the draft slices:** `formulation_basis` is NOT here. Native basis is a property of the (vertical, program) assessment, not the product, so it lives on the scope item (kills F6/D2: a powder/RTF split is heavy-metals-shaped; microplastics may partition the same variant by packaging). Fields: `variant_id`, `product_id`, `variant_name`, `sku`/`gtin`, `status` (active/discontinued).

**Dedup is enforced at mint time, not steward review** (kills D1): a hard uniqueness constraint on strong keys (GTIN for products; normalized `legal_name`+`domain` for brands) blocks the second draft and forces a link to the existing entity. Above a fuzzy-similarity threshold, minting is *blocked* and routed to `registry_steward` for merge-or-distinguish — the same similarity-gated discipline the repo runs for DOI-collision dedup. The duplicate-canonical check is build-blocking.

**`Facility`** — first-class shared entity (not account-owned), so one co-packer facility audit satisfies many brands' facility-cardinality requirements without copying the document or leaking cross-account visibility (kills D3). Accounts hold a `FacilityGrant`; they inherit "audit on file, valid through X" without ever seeing the artifact or the other brands sharing it.

### 1.3 Vertical, Program, StandardVersion (the measurement layer)

**`Vertical`** — owns the entire per-vertical config bundle. Onboarding a vertical = populating these, not editing shared schemas (this is the conformance contract behind "more verticals will follow").
| Field | Notes |
|---|---|
| `vertical_id` (PK), `key`, `display_name` | heavy-metals / microplastics / pfas / … |
| `analyte_namespace` | controlled vocabulary id (HM = the HMTc-10; MP = polymer×size×morphology; PFAS = an open, versioned compound panel) |
| `measurement_basis_system` | the basis vocabulary (HM: powder/RTF/dry/puree; MP: particles per g/L; PFAS: ng/serving or surface-area) |
| `threshold_unit`, `has_regulatory_ceilings` (bool) | the flag switches the `min(percentile, cap)` rule and the `regulatory-alignment` rationale tag on/off where no cap exists |
| `evidence_capability_schema_ref` | the per-vertical `coverage_satisfies(document, requirement)` predicate (kills C1: cross-vertical reuse needs vertical-specific method semantics) |
| `site_registry_ref` (FK) | role→domain mapping |

**`Program`** — the certification offering for one contaminant class in one vertical. `program_id`, `vertical_id`, `key` (e.g. `hmtc`), `display_name`, `scope_taxonomy_ref`, `mark_asset_ref`, `current_standard_version_id`, `status` (draft / accepting_applications / paused / sunset).

**`StandardVersion`** — immutable published snapshot; the defensibility keystone.
| Field | Notes |
|---|---|
| `standard_version_id` (PK), `program_id` | |
| `semver` | PATCH = editorial (no numeric movement); MINOR = thresholds moved; MAJOR = methodology change |
| `methodology_version_ref` | pins the math doc (e.g. governing-principles P97/P45) for reconstruction |
| `effective_date`, `superseded_date`, `status` | draft / published / superseded / withdrawn |
| `threshold_set` | per-cell, each cell `{analyte, subcategory, basis, limit_expression, rationale_tag, cell_effective_from, step_cap_lineage}`. `limit_expression` is polymorphic: `single_analyte` / `aggregate_sum(set)` / `surrogate_with_confirmation` / `ratio` (kills F7: PFAS "sum of EPA-6" or "TOF surrogate" can't be a flat per-analyte map) |
| `public_label` | **non-numeric by construction** — version id + effective date only, never the limit value (kills B2/F5: a threshold laundered through a human-readable label) |
| `derivation_manifest_ref` | pointer into the staff workbench (pooled distributions, source list, percentile math) — Class C, never public |
| `content_hash`, `changelog` | tamper-evidence + what-changed |
| `data_class` | non-nullable: `cert_threshold` |

A `StandardVersion` is append-only-immutable once published. Errors spawn a new version, never an edit. `withdrawn` is only for a version that violated a regulatory floor; withdrawal force-flags every cert pinned to its affected cells for re-pin and surfaces a withdrawal notice on verification, without rewriting already-issued certificates.

### 1.4 Application container

**`AccountBillingCycle`** — the atomic pricing unit (D-B). `cycle_id`, `billing_group_id`, `cycle_index` (feeds tenure), `period_start`, `period_end`, `prior_cycle_id`, `governing_quote_id`, `status` (open / quoted / committed / invoiced / closed). A **DB exclusion constraint** forbids two non-terminal pricing-bearing Applications/Quotes for one billing group simultaneously.

**`Application`** — one open per BillingGroup per cycle. `application_id`, `billing_group_id`, `cycle_id`, `state` (§2), `entry_program_id` (analytics/return-context only, never a scope limiter), `created_by`, `quote_id`, `kind` (new / renewal / mid_cycle_addition / partial_renewal / true_up).

**`ApplicationLine`** — one per (Application, Program). `line_id`, `application_id`, `program_id`, `pinned_standard_version_id`, `line_state` (can run ahead of siblings so a slow lab review on Program B doesn't block Program A's issuance), `scope_summary`.

**`ApplicationProduct`** — the assignment join (add product once, assign to many program lines). `app_product_id`, `line_id`, `variant_id` (**non-nullable** — "whole product" expands to explicit variant rows at submit, killing D2's false-advertising hole), `native_basis` (resolved here from the line's Vertical, not from the Product), `intended_scope_items` (analytes/claims sought), `evidence_set_id`, `screening_result_id` (nullable), `ap_state`.

### 1.5 Evidence & checklist

**`Document`** — account-owned (or facility-owned), so it fans across programs and cycles without copying. `document_id`, `owner_ref` (account or facility), `doc_type`, `uploaded_by`, `file_ref`, `effective_date`, `expiry_date`, and the **shared Evidence Capability schema**: `{method, measured_quantities[], detection_basis, matrix, per_analyte_LOQ, lab_accreditation (ISO 17025), basis_conversion_provenance}`. `validity_state` (valid / expiring / expired / superseded). `data_class`: `private`.

**`ChecklistRequirement`** — program-defined requirement spec. `requirement_id`, `program_id`, `doc_type`, `applies_when` (predicate on category/scope), `coverage_required` (in the shared capability schema), `recency_window`, `cardinality` (per-variant / per-account / per-facility).

**`EvidenceSet`** — the checklist instance for an ApplicationProduct (or account/facility for broader cardinality). Items: `{requirement_id, satisfied_by_document_id?, status (unmet / auto_satisfied / user_attached / waived / failed_validation), auto_match_reason}`.

**The reuse predicate is vertical-pluggable and LOQ-aware** (kills B1/F8). An item auto-satisfies only when ALL hold: doc_type matches; `coverage_required ⊆ measured_quantities` at **variant + native-basis + per-analyte** granularity (no cross-basis fan-out); `per_analyte_LOQ ≤ k × applicable_threshold` for each analyte (a COA that can't measure below the certified limit is evidence of nothing); within recency; `lab_accreditation` present. Partial coverage leaves the item `unmet` with the precise gap surfaced ("covers Pb, Cd; LOQ insufficient for the 5 ppb As standard").

### 1.6 Screening (only where needed)

**`ScreeningCheck`** — per-ApplicationProduct, invoked only when a program/category rule demands an eligibility decision (uncovered category, open enforcement bar, regulatory ineligibility). Default is no screening. `screening_id`, `app_product_id`, `screen_type`, `result` (pass / needs_review / fail), `auto_decided`, `decided_by`.

### 1.7 Pricing objects

**`PricingPlan`** — versioned rate card, immutable once published. `pricing_plan_id`, `vertical_id`/`program_id` (nullable=global), `version`, `status`, `effective_from/to`, `currency_base` (USD), `unit_basis`, `list_unit_price`, `setup_fee`, `tier_breaks` (intra-program volume), `min_floor_price`.

**`DiscountPolicy`** — three families, each versioned with its own effective dates. `discount_policy_id`, `scope` (bundle / portfolio_breadth / tenure / cross_vertical_bonus), `version`, `effective_from/to`, `applies_to`, `rule` (jsonb), `stack_group`. **`composition_order` and `global_cap` are themselves first-class versioned policy objects** snapshotted onto every Quote (kills A2: silent re-ordering between cycles).

**`Quote` / `QuoteLine` / `QuoteDiscount`** — the frozen evaluation. `Quote` stores frozen `pricingplan_versions`, `discountpolicy_versions`, `composition_policy_version`, `fx_rate_snapshot`, `fx_policy`, and a full `portfolio_snapshot`. An accepted Quote is immutable; corrections supersede (`supersedes_quote_id`), never edit. `lock_at_accept` materializes a *new* superseding Quote at accept time rather than mutating the issued one (kills F11).

**`Invoice` / `Payment` / `CreditNote` / `Refund` / `Dispute`** — the money layer, with first-class reversal objects the draft slices omitted entirely (kills A4/F5/P3). `TaxDetermination` is computed after discount and after FX, keyed on billing-entity jurisdiction + buyer jurisdiction + place-of-supply (Cyprus operator selling globally — VAT/reverse-charge/US nexus). Any refund/credit that changes the active certification set fires the **same portfolio re-quote trigger as a renewal**, because it changes the portfolio every other line is priced against.

### 1.8 Output objects (Certification ≠ Certificate)

**`Certification`** — the live, durable, priced status relationship. Outlives any cycle or version bump; tenure measured here (D-A).
| Field | Notes |
|---|---|
| `certification_id` (PK), `account_id`, `program_id`, `brand_id` | |
| `pinned_cells[]` | one pin per in-scope analyte → a specific `StandardVersion` cell (D-A) |
| `cert_state` | active / suspended / expired / revoked / withdrawn |
| `tenure_intervals[]` | cumulative paid-active intervals; `tenure_years = Σ intervals` with a grace bridge for short lapses |
| `grandfather_until` (per pinned cell) | the date by which a ratcheted analyte must re-test |
| `originating_application_id`, `current_cycle_id` | |
| `data_class` | `private` |

**`CertificationScopeItem`** — granular what-is-certified. `scope_item_id`, `certification_id`, `variant_id`, `native_basis`, `analytes_covered`, `evidence_ref`, `status`.

**`Certificate`** — the issued, immutable document. Many over time per Certification. `certificate_id` (opaque, non-sequential), `certification_id`, `frozen_cell_pins[]`, `scope_snapshot` (frozen, variant-level), `issued_at`/`valid_from`/`valid_until`, `cert_doc_state` (issued / superseded / revoked), `verification_url` (registry-relative token, never a baked per-vertical domain — kills B3/F-label), `document_asset_ref`, `content_hash`. Brand display name/logo resolve **live** from the canonical Brand at verification render time, not frozen, so a brand rename doesn't make a valid certificate look fraudulent (kills D1-render).

**`Asset` / `AssetGrant`** — the mark and the revocable permission to use it. `embed_token` resolves to the cert-class verification subdomain with `rel="nofollow ugc"` + `noindex` in the shipped embed snippet, so thousands of brand-site badges pass no authority and create no rankable brand+cert association (kills C3).

**`EnforcementAction`** — `publication_state` (internal / public). Drives `cert_state` to suspended/revoked; revocation immediately revokes the `AssetGrant`. `Certificate.public_status` is a **runtime read** of live Certification state at verify time, never a build-time snapshot, so a suspension reflects instantly (kills D2-latency).

**`OwnershipTransfer`** — first-class event (kills F2): on brand sale, certifications carry their own `tenure_intervals` to the new Account (tenure travels with the cert — it's what the brand bought); the seller's breadth recomputes at next cycle with a contractual hold-harmless window; all downstream refs re-point without losing history. `AccountMerge` follows the same `merged_into` discipline, re-pointing in-flight Applications/Quotes too.

### 1.9 Site registry

**`SiteRegistry`** — role→domain, never hardcoded. `vertical_id`, `role` (parent_registry / research_index / cert_program / cert_program_interim / verify / portal_app / journal / courses), `domain`, `status` (live / interim / reserved / retired), `canonical_for_role` (bool), `index_policy` (index / noindex), `readable_data_plane` (**mandatory, no default**: `public_projection_only` / `cert_plane` / `none`), `redirect_to`. Binding the data plane to the role (not to per-domain config) is what makes the firewall scale to N verticals by construction (kills C4/F6).

---

## 2. Application lifecycle — states & transitions

### 2.1 Application (container)

```
DRAFT ──► READY_FOR_QUOTE ──► QUOTED ──► ACCEPTED ──► INVOICED ──► PAID ──► IN_REVIEW
  │              │               │                                              │
  └─► ABANDONED  └─(edit)─►DRAFT └─(decline)                          ┌─────────┼──────────┐
                                                                       ▼         ▼          ▼
                                                          CHANGES_REQUESTED  PARTIALLY_ISSUED  (line INELIGIBLE → drop)
                                                                  │(resubmit)     │
                                                                  └──► IN_REVIEW  ▼
                                                                              ISSUED ──► CLOSED
```

- **DRAFT → READY_FOR_QUOTE**: every line has ≥1 ApplicationProduct; required screening resolved; no `failed_validation` evidence items. A **provisional quote** can render while items are still `unmet` (pricing is a function of *scope*, not evidence completeness — an adoption lever).
- **READY_FOR_QUOTE → IN_REVIEW** requires evidence complete (hard gate).
- Adding a program after QUOTED triggers a portfolio **re-quote** (D-B), not a new Application; the UI warns "adding microplastics re-quotes your bundle."
- **Line-level states run independently**: `PARTIALLY_ISSUED` when ≥1 line issued and ≥1 still in review; `ISSUED` only when all lines terminally resolved. Pricing/invoicing stays at the Application level (one invoice per cycle); issuance is per line.

### 2.2 ApplicationLine
`PENDING → SCREENING(skipped if none) → EVIDENCE → READY → IN_REVIEW → APPROVED → ISSUED`, with branches to `INELIGIBLE` (no StandardVersion for the category → dropped from quote, flagged to staff) and `CHANGES_REQUESTED`.

### 2.3 ApplicationProduct
`ADDED → [SCREEN_REQUIRED?] → EVIDENCE_PENDING → EVIDENCE_COMPLETE → IN_SCOPE_FOR_REVIEW → CERTIFIED`, with `SCREEN_FAIL`/`EXCLUDED` drops.

### 2.4 Certification (post-issuance, lives beyond cycles)
`ACTIVE ⇄ SUSPENDED → REVOKED`; `ACTIVE → EXPIRED → (reinstate) → ACTIVE`; renewal completion keeps `ACTIVE` and issues a new Certificate revision. `SUSPENDED` immediately revokes the AssetGrant (mark pulled) while preserving the record. State transitions are driven by EnforcementAction, payment lapse, or renewal — never edited directly by the application workflow.

Every transition writes an immutable `workflow_event` (`from_state`, `to_state`, `actor`, `timestamp`, `reason`, `system_or_human`) — the same `review_events.jsonl` discipline the repo already uses, serving reconstruct-the-record-on-a-date.

---

## 3. Pricing & discount engine

**Core invariant (the founder's central requirement):** `total = f(portfolio_snapshot_at_quote_time) − discounts(f, portfolio)`, identical regardless of the *path* by which the portfolio was assembled. Bundle/breadth/tenure are portfolio-level functions, allocated back to lines for rev-rec but computed at the portfolio level.

### 3.1 The three families, re-based to be orthogonal (kills A8/D1 collinearity)

- **Tenure** — *time.* Per-Certification, from `Σ tenure_intervals`. Schedule e.g. {2y:3%, 4y:6%, 7y:10%}. Allocates only to the line that earned it (kills A3 cross-vertical smear).
- **Breadth** — *standing portfolio size.* Count of active certifications/scope-items across the BillingGroup, **trailing-12-month max** (not instantaneous), applied to the **full annualized portfolio value** (not "what renews this week"). Counted as **distinct (program) certifications** for the tier; within-vertical SKU volume is handled by intra-program `tier_breaks` (kills D1 incommensurability + A3 stagger-guts-breadth). Tier breaks recalibrate as a function of live-vertical count.
- **Bundle / cross-vertical** — *acquisition.* Net-new programs added this cycle, computed on standing portfolio composition over a trailing window (not the renewal-window snapshot), so two identical end-state portfolios cost the same regardless of acquisition path (kills P1/A4/F4). Cross-vertical bonus rewards spanning ≥2 verticals — **the flywheel**.

### 3.2 Composition (deterministic, versioned, monotonic)

```
remainder = list_subtotal
remainder ×= (1 − tenure_rate)      # per-line, summed
remainder ×= (1 − breadth_rate)
remainder ×= (1 − bundle_rate)
```
- Order is a versioned policy object snapshotted on the Quote. Multiplicative on the running remainder.
- **Cap reconciliation is a single constrained pass, not sequential** (kills A7): the displayed headline discount equals the realized invoice discount to the cent. Floors and the global cap are solved together; the quote shows "up to X%" only if floors can bind.
- **The cross-vertical bonus is exempt from the global cap** (kills P5): the strategic discount must keep biting precisely for the broadest accounts, or the flywheel stops turning when it matters most.
- **Monotonicity-under-shrinkage / hysteresis** (kills A1/P2): once a breadth tier is earned, dropping below the threshold holds the prior tier for the current cycle and steps down at most one tier per cycle. Shrinking the portfolio can never *raise* the unit price on retained certs within a cycle.

### 3.3 Currency (kills A6/P4)
PricingPlans authored in USD base. All discount math runs in base currency at the BillingGroup level via an `account_discount_ledger`; a single effective **rate** (not amount) crosses the currency boundary into each per-currency profile Quote, FX'd last. Tiers are earned once at the group level; no double-counting across currency profiles; FX never interacts with discount math. Tax computed after both.

### 3.4 Worked examples

**Schedules used:** tenure {2y:3%, 4y:6%, 7y:10%}; breadth on active certs {3:3%, 5:6%, 8:10%}; bundle net-new-this-cycle {2:5%, 3:10%}; cross-vertical +2% (cap-exempt); global cap 35%; order tenure→breadth→bundle.

**Example A — Year 1, new brand, 3 programs / 2 verticals (acquisition).**
"Aurora Foods" applies in one cycle: HM (12 SKUs, $9,000), MP (12 SKUs, $9,000), PFAS (6 SKUs, $4,500). list_subtotal = $22,500.
- Tenure: 0 (year 1).
- Breadth: 3 active certs → 3%, but year-1 standing book just established — applied to the trailing-max basis, which at first quote is the in-cycle book → 3% on $22,500.
- Bundle: 3 net-new programs → 10%; spans 2 verticals → +2%.
- Compose: 22,500 × 1.00 × 0.97 × 0.88 = **$19,206**. Cross-vertical +2% applied cap-exempt on the post-bundle remainder: 19,206 × 0.98 = **$18,821.88**. Total discount $3,678.12 (16.3% effective). Under cap.
- Allocated pro-rata by list for per-vertical rev-rec; tenure (here 0) would allocate only to its own line.

**Example B — Year 3 renewal, portfolio grew, co-termed (all three families fire).**
Same account, cycle 3, now 4 certs / 2 verticals, 52 scope-items, all co-termed. List (PricingPlan v8, ~+5%): HM $9,450, MP-b1 $9,450, MP-b2 $6,300, PFAS $4,725. list_subtotal = $29,925.
- Per-line tenure: HM/MP-b1/PFAS at 3y → 3%; MP-b2 at 1y → 0%.
  - 9,450×0.97 + 9,450×0.97 + 6,300×1.00 + 4,725×0.97 = 9,166.50 + 9,166.50 + 6,300 + 4,583.25 = **29,216.25**
- Breadth: 4 active certs → 3% tier… but breadth is **trailing-12-mo max** and applies to **full annualized value**, so on $29,216.25 at 3%: ×0.97 = 28,339.76. (Tier stays at the count-of-certs band; SKU breadth handled in tier_breaks, already in list.)
- Bundle: 0 net-new this cycle (all renewing) → 0%. Cross-vertical bonus still applies for *holding* ≥2 verticals (it is now a holding incentive, not acquisition-only): +2% → ×0.98 = **27,773.0**.
- Total ≈ **$27,773.00**, effective 7.2%. Tenure rewarded the 3 mature certs on their own lines; breadth rewarded the standing book without the stagger-guts-basis bug; holding-bonus kept the cross-vertical incentive alive. This is "one priced relationship re-quoted," not four renewals.

**Example C — staggered legacy account collapses to co-term; a lapse; honest re-price with hysteresis.**
Account inherited from a staggered import; HM renews Jan, MP×2 renew Apr; PFAS lapses (past grace). The system stub-prorates HM and MP to a single April co-term anchor (D-B), so by next cycle there is one window.
- PFAS lapse drops active certs 4→3. Under naive recompute, a breadth-tier drop would *raise* HM/MP unit prices. **Hysteresis holds the prior breadth tier through the current cycle** and steps down at most one tier next cycle → no within-cycle price increase on the certs the brand kept (kills P2).
- The lapse fires a portfolio re-quote (single, atomic — D-B), surfaced with an explicit diff: "PFAS lapsed; breadth held at prior tier this cycle, steps to {3-cert} tier next cycle; co-terming HM+MP saved the split-bundle penalty the old staggered schedule would have charged." A `CreditNote` issues for any prepaid PFAS remainder per the stated voluntary-lapse policy.

**Example D — mid-cycle add, no perverse penalty (kills A4/F4).**
Brand adds PFAS in month 10 of a 12-month cycle. A `true_up` Quote recomputes the bundle tier *including* PFAS, applies the resulting incremental bundle + cross-vertical rate to the **prorated 2-month stub**, and the stub fee credits toward the next renewal. Adding early is never more expensive than waiting.

---

## 4. Renewals

**Trigger:** cycle approaching `period_end`, or staff/Karen-initiated.

1. New `AccountBillingCycle` (`prior_cycle_id` set, `cycle_index++` → tenure ticks).
2. New `Application` in DRAFT, **prefilled by reference** (same variant_ids, same line→program mapping). Nothing copyable is copied.
3. **Carry forward still-valid Documents** automatically (re-mark items `auto_satisfied` if recency/expiry still valid against the new cycle start, and still LOQ-sufficient against the *current* StandardVersion).
4. **Delta UI presents four buckets only** (kills S1: never silently "unchanged" when a standard moved underneath): (a) expiring/expired evidence; (b) scope changes; (c) **grandfathered-and-expiring** — any line whose pinned analyte cell ratcheted and whose `grandfather_until` falls in this cycle, requiring re-test; (d) price delta (with "pricing *method* changed" surfaced separately from "portfolio changed," per A2).
5. A line is fast-trackable only if docs valid AND pinned cells still current (or within grandfather and not expiring this cycle). Never fast-track a line whose StandardVersion cell moved.
6. On issuance, each affected Certification advances `current_cycle_id` and gets a new Certificate revision; the relationship stays continuous, the document reissues — exactly why the two objects are distinct.

**Billing cycle is decoupled from certification term** (kills C2): tenure accrues on the billing relationship; re-test/grandfather obligations track each program's own standard calendar. Co-terming for bundle convenience never silently buys a soon-stale cert — the delta UI warns "renewing PFAS now; PFAS v-next publishes in 60 days; re-test will follow."

---

## 5. Firewall & SEO-safety posture

**Posture in one line:** the portal is an authenticated application that shares DATA, never RENDERED PAGES; it has no canonical URLs, emits no sitemap, is `noindex` + `Disallow: /` + edge-auth-walled on its own apex; the only public reads of central-system data are (a) opt-in canonical Brand/Product entity pages on the parent registry and (b) certificate verification by direct link on a cert-class subdomain.

### 5.1 Data-class boundary
| Class | Objects | Surface |
|---|---|---|
| **A — public_registry** | Brand, Product (identity only), opt-in | parent registry, self-canonical, indexable on opt-in |
| **B — public_verify** | Certificate public projection (cert number, program, opaque version token, scope, `public_status` runtime-read) | `verify.contaminantstandards.com`, noindex, rate-limited, single-record, no list view |
| **C — private** | Account, BillingGroup, Application*, Pricing*, Quote*, Invoice/Payment/Credit/Refund, Certification, CertificationScopeItem, Renewal, AssetGrant, EnforcementAction(internal), all COA/lab data | portal apex, auth-walled, never indexable |

`data_class` is a non-nullable column with no default — an object cannot persist without an explicit class decision (fail-closed, D-C).

### 5.2 The four SEO invariants, instantiated
1. **One object → one owner domain → one canonical.** Canonical Brand/Product live once on the parent registry. Verification is a *separate* cert-class subdomain (not the registry apex), so the parent is not simultaneously entity host and threshold-adjacent host (kills C1-classification).
2. **Self-canonical only.** Registry pages self-canonical; cert sites never cross-canonical.
3. **LINKS not COPIES — enforced in the wire format.** The registry exposes Brand/Product to cert sites only as a `LinkCard` projection `{display_name, canonical_url, mark_status, mark_link}` with **no body/description/spec fields in the payload at all**. Copying is impossible because the data isn't on the wire (kills B1/F2). Names appear only as anchor text of a link pointing *out* to the canonical (passing authority out, not competing).
4. **Shared backend shares DATA not pages — via separate planes.** Index-class domains read a physically separate `public_projection_only` published datastore (allow-by-projection, fail-closed). They cannot see cert-class rows because those rows are not in their plane (kills C2/F6 — the inverse of the 250MB lambda failure).

### 5.3 Structural enforcement (defense-in-depth, edge-auth as layer 0)
- **Edge auth is a deploy gate, not "layer 2."** The portal deployment fails CI if any route is reachable without an auth check (synthetic unauthenticated crawl returns 401/redirect on 100% of routes), because the repo's own history shows edge auth gets deferred and meta-tag-only is the live state (kills F1). SSO callback endpoints are `noindex` + non-cacheable + content-free-until-authenticated as a tested invariant.
- `robots.txt: Disallow: /` + `X-Robots-Tag: noindex, nofollow` on the portal apex (belt-and-suspenders behind auth).
- No sitemap, no inbound public links into the portal.

### 5.4 The centralized firewall lint (the enforcement keystone — kills C4)
A **post-deploy synthetic crawler owned by parent infra** (not any single repo's prebuild, since N verticals deploy independently) fetches live rendered output of every role-domain and blocks promotion on failure of named checks:
1. No numeric-ppb (or any vertical's threshold unit) pattern on any `research_index` or public surface — scans *rendered templates*, not just DB columns, catching the version-label leak (B2/F5).
2. Link-card text-overlap with the registry canonical below a shingle/near-duplicate threshold (B1/F2).
3. Every public entity self-canonicals to its owner domain; no cross-domain canonical targets.
4. Portal apex returns 401 unauthenticated on every route.
5. The existing `api/defense-dossier.mjs` leak on heavymetalindex.com is remediated (the assembled certification-defense package moves off the index domain to the cert/registry plane) before the multi-vertical build ships — the firewall is being added over an existing, contradicting substrate, not a clean one (F1).

### 5.5 Role→domain registry & interim-domain handling
Domains resolve through `SiteRegistry` at render/build time; no template carries a literal domain. **R-rules:** R1 one canonical live domain per (vertical, role); R2 portal role is structurally noindex and may hold no content role; R3 research_index and cert_program are distinct deployments per vertical; R4 interim→permanent is 301; R5 link-cards resolve role→canonical at render time; R6 no research_index domain links to or imports from a cert-class endpoint; R7 each role carries a mandatory `readable_data_plane` (onboarding can't create a role row without it).

**`heavymetalcertified.com` is PERMANENT + INDEXED** (decided 2026-06-20; supersedes the earlier interim-noindex framing). It is the indexed, Scholar-visible cert site from day one and is meant to rank #1 for the program term; cert/standards DOIs resolve to it as a permanent host. It does NOT 301 to `heavymetalcertified.com`; if `heavymetalcertified.com` is ever freed from PF it 301s *to* certified.com (reverse direction). Durable artifacts (certificate PDFs, badges) still encode only the **immortal parent verify token/QR** (`verify.contaminantstandards.com/<num>`), never a per-vertical cert domain, so any future domain change is a registry row, not a dead label. (R4's interim→permanent 301 rule still applies to genuinely interim domains; certified.com is no longer one. SiteRegistry role = `cert_program`, `index_policy: index`.)

### 5.6 Index/cert data-class firewall (CLAUDE.md Part 2/19 generalized)
No certification limit, status decision, or ratchet calculation — including via a human-readable StandardVersion label or a renewal "analytes-in-scope" message — ever reaches a research_index-role surface. Government-limit compilation and the certified-lot Standards Ratchet stay on the certification/staff plane; the public certificate proves *which* standard was met (opaque version token), never *what the number was*. Index occurrence evidence remains descriptive and cannot select an initial limit or later certification status.

---

## 6. How this realizes "one centralized place"

A brand applies once, at `app.contaminantstandards.com`, reachable from any program site via federated SSO. They enter their Brand and Products **once** as references to canonical parent-registry entities — never re-entered per vertical. Those entities fan out into many program lines through `ApplicationProduct` links, into many `Certification` relationships across many verticals, and into many `Certificate` documents over many years. A single multi-analyte COA, uploaded once and account-owned, satisfies every checklist item it legitimately covers — across programs, across cycles — gated by LOQ and native-basis so it never auto-certifies against evidence it can't support.

Because every Application, Quote, Certification, and Invoice rolls up to one `BillingGroup` through one `AccountBillingCycle`, pricing is computed over the *whole standing portfolio* and re-quoted each cycle: tenure rewards years paid-active per certification, breadth rewards the standing book, the cross-vertical bonus pulls the brand into new verticals, and hysteresis guarantees that contracting the portfolio never weaponizes the price against the certs the brand keeps. It is one priced, renewed relationship — not a stack of independent purchases — and the data model makes the per-purchase failure mode structurally unrepresentable (a DB exclusion constraint forbids two pricing-bearing quotes in flight at once).

Defensibility is preserved per-certificate by per-analyte version pins against immutable StandardVersions with retained derivation manifests and content hashes; the public never sees a threshold; the portal is structurally undiscoverable; and the public sites connect by links, share data through a fail-closed published plane, and are policed by a centralized crawler that blocks any deploy that would let one domain cannibalize another or leak a number onto an index surface.

---

## 7. Open decisions for Karen

### ✅ Resolved 2026-06-20 (Karen)

- **Legal entity:** ICS is a **DBA of Paleo Certified Inc.** (not a new entity) — preserves the Cyprus / EU database-rights posture. (Resolves the §9 open decision in `web-data-architecture.md` and the Part-5 carry-over.)
- **Pricing (supersedes #4 and the whole abstract engine):** ICS **adopts the existing paleofoundation.com pricing calculator** — `~/paleo-foundation/src/lib/pricing.ts`, model = **revenue-band × cert-count scaling × multi-year discount** (CP 1/2/3 = ×1.0/1.4/1.7; HMT lookup by bundled-CP count; 2yr 10%, 3yr 20%). The tenure/breadth/bundle/cross-vertical engine in §3 and the cap/bonus question in #4 are **moot** — do not build a parallel engine; adopt the existing structure. (Reference port + the two spec-example errors it caught live at `contaminantstandards/lib/pricing/`, marked superseded.)
- **Refund policy (#3):** Refunds occur **only if a brand cannot qualify.** Because certification has **two paths — public and non-public — every brand qualifies through one of them**, so refunds effectively never fire. No prorated-credit machinery needed at launch.
- **Defense dossier (#8):** Relocates to the **authenticated brand backend on `heavymetalcertified.com`** (shown in the brand's logged-in backend), **not** the public index. The `api/defense-dossier.mjs` endpoint relocation onto the cert brand-backend remains the live-endpoint action.

  **Correction, 2026-07-30.** This entry previously read "The public dossier pages + `for-brands` are already removed from the index (finding B1)." That was true when written and then silently false for five weeks. `b6c971f01` (2026-06-20) did remove 298 dossier pages plus `for-brands`, but `tools/build-defense-dossier.mjs` and `tools/build-brand-dossier-pages.mjs` were left in the `prebuild` chain, so `af9c97a50` ("reconcile: regenerate derived layer…") regenerated 351 of them straight back onto the index. `for-brands` stayed removed; the dossier pages did not. Both generators are now out of `prebuild` and the pages are removed again, in the same commit — **page removal without generator removal is guaranteed to regress**, and this entry is the record of it having done so once. The remaining exposure is the endpoint, not the pages: `api/defense-dossier.mjs` still serves the full manifest as public JSON with `cache-control: public`, and `robots.txt` disallows `/api/`, which stops crawlers and nothing else.
- **Registry posture (#6) + verification single-owner (#7):** Confirmed as recommended (search-only, opt-in, no browsable directory; one `verify.` owner). Implemented in the parent build.

The items below remain open or are carried by counsel.

1. **Discount-accrual level.** `BillingGroup` defaults to one-per-Account, pooling all of an account's brands. Confirm conglomerates should be able to *partition* (separate billing relationships per brand house), and whether breadth/tenure ever count across a multi-brand BillingGroup or only within a brand.

2. **Tenure-on-transfer vs tenure-on-lapse policy values.** The model uses cumulative paid-active intervals with a grace bridge. Set the numbers: grace-window length for a lapse that doesn't reset; on ownership transfer, does the *seller's* hold-harmless window run one cycle or longer; does a returning brand resume its prior intervals or start a new one after a long gap.

3. **Refund/credit policy per terminal state.** The objects exist; the *rules* are yours: revoke-for-cause (recommend no refund), voluntary withdrawal (prorated credit?), review-failed-after-payment (prorated refund or credit-only?), and whether a downgrade ever returns cash or only a renewal credit.

4. **Global cap magnitude and cross-vertical bonus size.** Cap defaulted to 35% with the cross-vertical bonus exempt; the bonus is the flywheel and may deserve to be materially larger. Set both.

5. **FX policy default** (`lock_at_issue` vs `lock_at_accept`) — who carries FX drift between issue and signature.

6. **Public registry posture.** Recommended default: verification-by-direct-link only, no browsable certified-brands directory, Brand entity pages indexable only on per-brand opt-in (protects the EU database right and the client book). Confirm — this is a commercial/marketing call against a competitive-intelligence and database-rights risk, not a technical one.

7. **Verification single-owner.** Recommended: one verification owner (`verify.contaminantstandards.com`); any cert-site `/verify` is a 302 to it, never a rendering client. Confirm you don't want per-cert-site verification surfaces (they reintroduce the cannibalization vector).

8. **Remediation sequencing.** The existing `api/defense-dossier.mjs` on heavymetalindex.com already serves cert-class data and must move off the index plane before the multi-vertical build ships. Confirm this is in-scope as a prerequisite, not a follow-up.

9. **Registry publish authority.** Only `registry_steward` (ICS staff) publishes/merges canonical Brand/Product; brand users only propose drafts. This keeps dedup and the firewall enforceable but adds staff load. Confirm acceptable.

---

*Grounding note carried from all five slices and both red-team rounds: `docs/architecture/web-data-architecture.md` named in the brief does not exist in the repo (`docs/architecture/` holds only `.DS_Store`). The load-bearing firewall facts live in `docs/seo-indexing-plan-2026-05.md` (which itself documents edge-auth as the unbuilt "only remaining leak path" and Google already overriding canonicals), `docs/governance/hmtc-governing-principles.md` (which proves the ratchet fires per-analyte, driving the per-analyte pinning decision D-A), and CLAUDE.md Parts 1/2/12/18/19. The repo's live `robots.txt`, `vercel.json`, `api/defense-dossier.mjs`, and `api/contamination.mjs` confirm the firewall is being asserted over an existing, partially-contradicting substrate — not a clean one.*
