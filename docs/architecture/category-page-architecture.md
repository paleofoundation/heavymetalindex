---
title: Category-Page Architecture — fixed schemas for predictable evidence display
status: proposed
created: 2026-06-23
owner: Karen Pendergrass
author: Claude
related: ["[[docs/page-templates]]", "[[docs/architecture/wiki-ia-redesign-plan]]"]
---

# Category-Page Architecture

## The problem this fixes

There is no standard architecture. Empirically, across the 36 metals pages: `Sources` and `Page history` appear on all 36, but `Regulatory limits` on only 10, `Toxicology` on 11, `Vulnerable populations` on 11 — and section names drift (`Regulatory limits` vs `Regulatory Limits` vs `Regulatory and advisory framework`). Each page can say anything, in any order. A reader, a regulator, or a plaintiff's expert cannot predict where a given fact lives. That unpredictability is the opposite of the "complete, defensible reference" the project exists to be.

The fix is the Examine model: **a fixed template per content category.** Every metals page renders the same core sections in the same order with the same sidebar; only the *sub-questions under each section* vary by metal. A reader who learns one metals page can read all 36. The same principle defines a second template for **regulatory-body pages**, which do not exist yet but are referenced everywhere.

Two rules govern both:
1. **Core sections are mandatory and consistent.** A core section appears on every page in its category, in fixed order, with a fixed sidebar label, even when its evidence is thin (then it renders "Limited evidence" — the section still exists, so absence is itself information).
2. **Each core section displays evidence in one fixed format.** Regulatory limits is always the same table shape; occurrence is always the same table shape. Predictable structure = predictable evidence.

---

## A. Metals category page — the fixed schema

**Core sidebar (identical on all 36 metals pages, this order):**

| # | Section | What it always answers | Fixed evidence format |
|---|---------|------------------------|-----------------------|
| 1 | **Overview** | What the metal is; the one-paragraph quick-read; "at a glance" | quick-read card + key-question accordion |
| 2 | **How it enters food** (food-system focus) | Pathways into the food system; exposure routes | prose + per-route sub-questions |
| 3 | **Where it's found** (occurrence) | Which food categories carry it, and how much | table: food category · evidence tier · typical → P95 · n studies |
| 4 | **Health effects** | Critical endpoints + mechanism | prose; critical-endpoint callout |
| 5 | **Highest-risk groups** | Who is most exposed/susceptible, and why | table: group · why · relative risk |
| 6 | **Regulatory limits** | What every body sets, and whether a limit = a safe level | table: **Body** · Type · Value · **Instrument** (Body→`/regulators/`, Instrument→`/regulations/`) |
| 7 | **Testing** | How exposure/contamination is measured | prose; biomarkers/methods |

Then, consistent but secondary:
- **Further detail** (collapsed): Microbiome effects · Historical context · Open questions · App-layer integration. Present on every page; collapsed by default.
- **References** (collapsed): the full corpus source set.
- **Update history** (collapsed): the page changelog.

Utility group (fixed, Examine-style): **Evidence Database · Research Feed · FAQ**.
Cross-link group "**In this metal**": **Products N · Ingredients N · Regulations N** — each links to the real filtered list of pages that cite this metal. (The current build's gavel "Regulations" linked to nothing; it must link to this metal's regulatory pages. It is distinct from section 6, which is on-page content.)

**Rules:**
- Every metals page MUST contain sections 1–7 by their canonical heading id, in order. A new build-blocking lint (`audit-category-architecture.mjs`) fails if a metals page is missing a core section or uses a non-canonical label. Thin sections render a "Limited evidence — N sources" stub, never a missing section.
- The **variable layer** is sub-questions nested under a core section (arsenic's speciation under Overview/Health; nickel's SNAS under Highest-risk). These are the only thing that differs page to page.
- **Inline citations are mandatory** and render as superscript chips linked to the source page (reusing Quartz popovers). Removing inline citations is a defensibility regression and is lint-blocked.
- Reading order is consumer-first (Overview → food → health → who → limits → testing); specialist depth nests or collapses.

This generalizes to other categories (ingredients, product-categories) — each gets its own fixed core schema; the *concept* is shared, the *section list* is per-category.

---

## B. Regulatory-body pages — a new parent layer (`/regulators/`)

Today `JECFA`, `EFSA`, `US FDA Closer to Zero`, `US EPA IRIS` are named in prose and tables across dozens of pages but resolve to nothing. There are per-instrument `/regulations/` pages (e.g. `efsa-aluminium-twi`, `atsdr-cadmium-mrls`) but no page for the **body itself**. Without a body page, you cannot track a body's updates, surface where it contradicts another body, or give every mention a real link.

**Create one `/regulators/<body>` page per recurring body.** Initial set (each referenced by ≥3 metals pages): `efsa`, `atsdr`, `jecfa`, `us-fda`, `us-epa-iris`, `codex`, `us-cdc`, `oehha`, `eu-commission`.

**Fixed schema per body page:**

| Section | Content |
|---------|---------|
| **Mandate & scope** | What the body is; jurisdiction; whether it sets *binding limits* or *health-based guidance*; how to read its values |
| **Positions across metals** | Table: Metal · value-type · value · instrument · date — the body's stance on every HMTc analyte, each row linking to the `/regulations/` instrument and the metal page |
| **Where it diverges** | Contradictions/divergences vs other bodies (e.g. EFSA: no PTWI; JECFA: withdrew the PTWI in 2010; FDA: action levels not health-based) — auto-surfaced from the regulatory dataset |
| **Update log** | The body's changes over time (a withdrawn PTWI, a new max level), so regulatory drift is tracked per body |
| **Key documents** | The body's primary documents, linked to their source pages |

**Rules:**
- A body is the **parent** of its `/regulations/` instruments; instruments link up to the body, the body lists its instruments.
- Every prose mention of a body links to `/regulators/<body>`. Every metals-page Regulatory-limits row links its Body cell to `/regulators/<body>` and its Instrument to `/regulations/<instrument>`.
- **Functions the body page unlocks:** (1) contradiction surfacing — when two bodies' values on the same metal/endpoint diverge, both pages show it; (2) update tracking — a body's changelog lives here; (3) a single citable authority node for the regulatory graph, strengthening the SEO/LLMO entity model.
- Created when a body is referenced by ≥3 pages; the 9 above qualify immediately. Generation of the "Positions across metals" table is mechanical from the existing regulatory dataset (`build-regulations-dataset`), so these pages are largely generated, not hand-authored.

---

## Enforcement (so the architecture can't silently rot)

- `tools/audit-category-architecture.mjs` (build-blocking): every metals page has the 7 core sections with canonical labels/ids; inline citations present; Regulatory-limits row bodies resolve to a `/regulators/` page. Warn-only during migration, then blocking.
- The fixed schema lives in a `tools/schema/metals-page.json` (the canonical section list + labels + formats) that both the lint and the theme read — one source of truth.
- New ingests and fanning are unaffected: they write markdown + data as before; the schema/theme/lint are presentation + validation, downstream of content.
