# Products coverage methodology

Sibling document to [[docs/coverage-priorities-methodology]]. This document defines how Heavy Metal Index decides which product-category pages must exist and to what depth. The list itself lives at [[wiki/products-coverage]] and is the lint target enforced by `tools/audit-products-coverage.mjs`.

## Why this list exists, and why it can't be the same as the ingredients list

The ingredients coverage list is exposure-science-driven: which raw commodities feed the heavy-metals burden of populations globally, weighted by dietary epidemiology and staple status. Products coverage answers a different question and uses a different driver: which finished-product categories must the wiki cover to back the HMTc certification scope and to defend the wiki's authority on consumer-product heavy-metals claims.

The two lists overlap on consumer relevance but diverge in three structural ways. First, ingredients have one canonical commodity (cassava is cassava); products have governance shape (clean/dirty subcategory splits, within-pair partners, contamination-platform classification) that lives in HMTc Step 0 Lock documents, not in exposure science. Second, ingredient coverage gaps are closed by ingesting more peer-reviewed literature; product coverage gaps are closed by HMTc category-lock decisions plus targeted ingest, in that order. Third, the failure modes are different: ingredient pages fail by being incomplete; product pages also fail by being scaffolded without a governance lock (the 2026-05-14 face-paint / lipstick / skin-lightening-cream incident documented in [[docs/order-of-operations]] Part 1 Failure Mode 4), or by being locked without routed sources (Failure Mode 1).

## The two coverage drivers

Products coverage has two drivers, applied additively. A product category is in scope for required coverage if it qualifies under either.

### Driver A — HMTc certification scope

Every product row in a locked HMTc category is a required-coverage product page. The Step 0 Lock document for each HMTc category is the canonical scope definition: it enumerates the within-category rows, names the within-row clean/dirty splits, fixes the contamination-platform classification, and binds the page to a Cat number plus row number. The wiki page exists to hold the literature evidence that informs the certification threshold; the certification threshold itself lives in `data/workbench/standards/` per Part 19 of CLAUDE.md.

A locked HMTc row is required-coverage regardless of how much literature exists. If the page is locked and the corpus contains zero sources, the lint failure surfaces the gap as a routing-starvation problem (per Failure Modes 1 and 2 in `docs/order-of-operations.md`), not as a coverage-list defect. The list says the page must exist; the routing audit and ingest queue say what's needed to populate it.

### Driver B — Public-wiki defensibility

A small number of consumer product categories belong on the coverage list even when they're outside the current HMTc scope. These are categories with active class-action litigation history, FDA Closer to Zero scope, sustained Consumer Reports or HBBF reporting, or state-AG enforcement activity. Coverage of these categories is required so the wiki maintains independent authority on consumer-product heavy-metals claims, not so HMTc can certify them. Driver B coverage is what lets a journalist or plaintiff's expert cite the wiki on, say, applesauce or dark chocolate without that citation implying HMTc certification of those products.

Driver B categories that are not yet in HMTc scope but belong on the list anyway include: dark chocolate, applesauce and other fruit purees in jurisdictions outside HMTc's current infant-food scope, drinking water, herbal supplements broadly, recall-prone seasonal categories (cinnamon-applesauce 2023, lead-paint-derived spice cases). Driver B categories migrate to Driver A coverage when an HMTc Cat lock brings them into certification scope.

## Scoring within Driver A

Driver A categories don't need a 0-13 scoring rubric the way ingredients do — the HMTc Cat lock decision is the inclusion gate. But scoring is still useful for prioritizing within Driver A when ingest capacity is finite. Each Driver A row carries a coverage-urgency score:

**Routed-source count** (negative weight): rows with zero routed sources are highest priority because they're the most visible gap. Rows with 10-plus routed sources are lower priority because their evidence base exists and only synthesis is needed.

**Vulnerable-population proximity** (positive weight): rows whose `vulnerable_population` frontmatter names infants, young children, or pregnant women score higher. Cat 1 (infant and child foods) and Cat 2 (infant personal care 0-5) rows are categorically high-priority.

**Litigation-exposure proximity** (positive weight): rows whose product type has recent class-action history (dark chocolate Cd 2022-2024, fruit purees Pb 2023, infant-formula heavy metals 2019-2022, baby food rice cereal iAs ongoing) score higher. This is the brand-legal-defensibility surface.

**Regulatory-attention proximity** (positive weight): rows in FDA Closer to Zero scope, EU 2023/915 active revision scope, or active state-AG attorney-general action score higher.

The urgency score determines order, not inclusion. Every Driver A row must be covered; urgency determines which gets covered first.

## Scoring within Driver B

Driver B inclusion is the gate. Scoring is binary: either the category meets at least one of the four Driver B criteria (litigation history, FDA Closer to Zero, sustained third-party testing reporting, state-AG action) or it does not. Driver B is deliberately conservative; if a category doesn't meet at least one criterion, it stays out of the required list and gets covered organically as the corpus grows.

The Driver B list is reviewed quarterly alongside the Driver A list. Categories enter Driver B when class-action filings, FDA action, or major third-party testing reports surface them; they exit Driver B when they migrate to Driver A (HMTc scope) or when sustained attention has faded for at least 18 months.

## Tier structure

**Tier 1 (Must-have, no exceptions).** Every Driver A row in a locked HMTc category, plus every Driver B category currently meeting at least two of the four criteria. Lint fails the build if a Tier 1 page is missing or is in `pending_category_lock: true` state without a Step 0 Lock authored within the past 60 days. Tier 1 pages must be `complete` (all ten mandatory product-page sections per [[docs/page-templates]]) within 90 days of Step 0 Lock or Driver B inclusion.

**Tier 2 (High priority).** Driver A rows in HMTc categories that are in active scoping but not yet Step 0 Locked, plus Driver B categories meeting one of the four criteria. Pages required within 180 days of either the lock or inclusion date; lint warns but does not block builds.

**Tier 3 (Priority backlog).** Driver A rows in HMTc categories that are in early scoping (named but no Step 0 Lock draft started) and Driver B candidate categories under quarterly review. Tracked but not lint-enforced.

## Lock-state lint rules

Products coverage is unique because product pages can exist in a structurally invalid state (auto-stub without governance lock) that the ingredients model has no analog for. The lint pass enforces:

1. **No `pending_category_lock: true` page persists more than 60 days.** Either the Step 0 Lock is authored and the scaffold runs (clearing the flag), or the page is retired with explicit documentation. The 2026-05-14 auto-stub incident is the canonical failure case this rule prevents.

2. **No locked product page (has `hmtc_category` and `hmtc_row`) lacks at least one declaring source within 30 days of scaffold.** If the routing audit shows zero sources after 30 days, lint surfaces this as routing starvation and the orchestrator escalates ingest priority for the row's matrix terms. This is the canonical Failure Mode 1 detection.

3. **No Tier 1 page sits in the stub-exempt state of `tools/audit-product-mandatory-sections.mjs`.** Stub exemption is intended for pages with genuine zero-source evidence bases; it is not intended to mask Tier 1 gaps. Tier 1 pages are not exempt from the mandatory-sections audit even when they have zero routed sources.

## Relationship to ingredients coverage

A given product page draws on multiple ingredients (chocolate draws on cocoa, milk, sugar, lecithin; infant rice cereal draws on rice and added vitamins/minerals). The ingredients coverage list and the products coverage list together describe a complete coverage map: ingredients say "these commodities must have contamination profiles"; products say "these finished-product categories must have certification-ready synthesis pages built on top of those profiles."

A Tier 1 product page cannot be marked `complete` until its primary input ingredients are at least Tier 2 `complete` on the ingredients list. This dependency is enforced by the products lint pass: if `chocolate.md` (Tier 1) names cocoa as its primary input and `ingredients/cocoa.md` is `partial`, the chocolate page status caps at `partial` regardless of how complete its product-level synthesis is. This dependency rule is what keeps the two coverage lists structurally consistent.

## Relationship to HMTc standards

Products coverage does not set HMTc thresholds. The wiki product page provides the literature evidence base; the certification threshold is computed in the workbench per [[docs/standards-methodology]]. Coverage completeness is a precondition for threshold publication (an HMTc category cannot publish thresholds for a row whose wiki page is incomplete), but coverage completeness alone does not authorize threshold publication. The threshold-publication gate lives in the standards methodology, not here.

## Maintenance cadence

Quarterly review aligned to the ingredients-coverage review. Triggers between reviews: HMTc category Step 0 Lock authoring (immediate update); new class-action filing in any consumer-product category (Driver B inclusion evaluation); FDA Closer to Zero scope changes (Driver B evaluation); HMTc Cat scoping decisions that promote a category from "named" to "active scoping" (tier reassignment).

Logged in `log.md` with `op: products-coverage-update`.

## What this methodology does not do

It does not set HMTc certification thresholds (`docs/standards-methodology.md`). It does not define ingredient coverage (`docs/coverage-priorities-methodology.md`). It does not authorize Step 0 Lock decisions (those live with Karen and the governance documents in `docs/governance/`). It does not define synthesis rules (Part 9 of CLAUDE.md). Its sole job is to name which product-category pages must exist, in what state, by when, and with what lint enforcement.
