---
title: "HMT&C thresholds — public methodology"
type: methodology
audience: [regulator, educator, journalist, legal]
updated: 2026-05-14
---

# HMT&C thresholds — public methodology

This page is the public surface for HMT&C certification thresholds as they relate to the Heavy Metal Index literature corpus. It exists because the Ask the Index chatbot needs to render a "Where HMT&C draws the line" block on relevant queries without retrieving from the staff-only certification page library directly. The data displayed here is what the chatbot reads.

## The wiki/HMT&C firewall

Heavy Metal Index reports what the peer-reviewed literature supports. HMT&C is a separate certification program operated by the Paleo Foundation. The wiki and the certification program are evidentially separate, by design. The wiki is not HMT&C's marketing surface; HMT&C does not dictate what the wiki says about the literature.

Where the HMT&C certification program operates, it sets thresholds for the products it certifies. Those thresholds can be tighter than the literature floor by design. The certification program's purpose is to drive market change by certifying to standards tighter than status quo regulatory floors, so that certified products pull the category toward cleaner product over time. The gap between what the literature supports and what HMT&C certifies to is deliberate. It is how ratcheting works.

This page names the gap. It does not hide it.

## Rationale vocabulary

Every HMT&C threshold that deviates from the literature floor carries a labeled rationale. Four labels are valid:

**Precautionary.** The threshold is tighter than the literature floor because vulnerable populations, cumulative exposure considerations, or scientific uncertainty warrant a safety margin beyond what minimum-effect-level data supports.

**Market-ratcheting.** The threshold is tighter than the literature floor because the certification program's purpose is to move the market toward cleaner product. The threshold is a policy choice, not an assertion about where toxicological effects begin.

**Feasibility-driven.** The threshold is looser than the literature floor because current analytical methods, supply chain realities, or achievable agricultural practice do not yet support the tighter value. Paired with a sunset plan to tighten as feasibility improves.

**Regulatory-alignment.** The threshold matches an external regulatory framework (FDA, EU, Codex) for commercial or legal reasons, whether or not that framework aligns with the literature.

The rationale is labeled, not hidden. Readers and reviewers can see which kind of decision produced each threshold and evaluate it on those terms.

## Threshold surface

The data below is the literal content of `data/ask-the-index/hmtc-thresholds.json`, the file the Ask the Index chatbot reads. As HMT&C threshold-setting work progresses (per CLAUDE.md Part 19), entries move from "in development" to labeled values with named rationale.

### Inorganic arsenic (iAs) — Infant rice cereal

| Source of limit | Value | Basis |
|---|---|---|
| Heavy Metal Index literature floor | see [[metals/arsenic-inorganic]] and [[products/baby-cereals-dry-rice-based]] | per-source synthesis on those pages |
| FDA | 100 ppb | Closer to Zero action level, as-consumed basis, finalized 2023 |
| EU | no specific limit | broader iAs and Cd frameworks apply |
| Codex | no specific limit | — |
| HMT&C | in development | rationale will be labeled when the threshold is set |

### Lead (Pb) — Baby food (fruits and vegetables, single-ingredient)

| Source of limit | Value | Basis |
|---|---|---|
| Heavy Metal Index literature floor | see [[metals/lead]] and the relevant [[products/]] pages | per-source synthesis on those pages |
| FDA | 10 ppb | Closer to Zero draft guidance for processed baby foods, as-consumed basis, draft 2024 |
| EU | 20 ppb | EU 2023/915 maximum level for foods for infants and young children |
| Codex | no specific limit | — |
| HMT&C | in development | rationale will be labeled when the threshold is set |

### Cadmium (Cd) — Dark chocolate

| Source of limit | Value | Basis |
|---|---|---|
| Heavy Metal Index literature floor | see [[metals/cadmium]] and [[ingredients/cocoa]] | per-source synthesis on those pages |
| FDA | no specific limit | — |
| EU | 800 ppb | EU 2023/915 maximum level for chocolate with ≥50% total dry cocoa solids |
| Codex | no specific limit | — |
| HMT&C | in development | rationale will be labeled when the threshold is set; California Prop 65 settlements have set effective limits in litigation contexts |

## How thresholds are added

New metal-matrix combinations land here as HMT&C threshold-setting work completes. The workflow is in CLAUDE.md Part 19; the public-facing summary is that thresholds are derived from the Heavy Metal Index literature synthesis, compared against the applicable regulatory floors, and either matched to a regulatory framework or set tighter (with a labeled rationale) when ratcheting or precautionary reasoning supports it.

Entries marked "in development" are scopes where HMT&C is actively working on a threshold but has not yet published one. The Ask the Index chatbot honestly reports these as in-development on the answer surface; it does not invent values to fill the cell.

## How to use this page

If you are a brand legal or regulatory team auditing HMT&C's basis for a particular threshold, the table above tells you the literature anchor, the regulatory comparators, and the labeled rationale where applicable. The full certification methodology lives at [heavymetaltested.com](https://heavymetaltested.com); this page is the literature-to-certification crosswalk.

If you are a journalist or regulator looking for the gap between what the literature supports and what HMT&C certifies to, the table above shows the gap explicitly. The Foundation publishes the gap rather than hiding it because the certification program's market-ratcheting logic requires it.

If you are a brand QA lead evaluating whether to pursue certification, the table above tells you whether HMT&C's threshold for your product category is in development or labeled. Begin with the literature pages, read the regulatory pages, then read the HMT&C certification page at heavymetaltested.com.
