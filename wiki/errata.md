---
title: Errata and corrections
description: How to submit a correction to a Heavy Metal Index page, what the Index does on receipt, and the public log of substantiated corrections.
audience: [regulator, brand-legal, brand-qa, researcher, journalist, consumer]
wiki_doi: null
updated: 2026-05-28
hero_image: /static/heroes/research-glassware-notebook-sampling-spoon.webp
hero_image_alt: "Unmarked glass laboratory vessels, a closed notebook, sampling spoon and empty specimen dish illustrating errata and corrections research context."
---

# Errata and corrections

## Overview

The Heavy Metal Index is a curated reference. The corpus is large (over a thousand source pages and growing) and the underlying literature is fast-moving; substantive errors are inevitable. This page documents how corrections are submitted, what the Index does on receipt, and the public log of substantiated changes. It is the public-facing complement to the version history stored in [git](https://github.com/paleofoundation/heavymetalindex) and rendered on every page in the "Page history" footer.

This commitment is part of the [[methodology|editorial methodology]] and [[editorial-standards|editorial standards]]. It is also one of the structural requirements for the defensibility argument the Index rests on: a curated reference whose errors are visibly tracked and corrected is more credible than one whose errors are silently fixed or never acknowledged.

## How to submit a correction

Use the form below. The Foundation acknowledges every submission within 5 business days. Email to **karen@paleofoundation.com** with the subject line **"Heavy Metal Index correction: [page slug]"** remains a supported backup if you prefer email or your submission needs attachments.

Required fields:

1. The page URL and the specific claim, number, or citation you are challenging.
2. The correction you believe is warranted.

Strongly preferred:

3. The source that supports your correction. The Index is a literature-grounded reference; corrections that cite verifiable primary sources (peer-reviewed papers, agency documents, formal datasets) are actionable immediately. Corrections that argue from authority alone receive a slower review.
4. Your relationship to the subject matter if it is relevant. The Foundation tracks but does not require this; it helps calibrate the review.

<form class="hmi-correction-form" data-hmi-correction-form="/api/corrections" novalidate>
 <fieldset>
 <legend>Submit a correction</legend>
 <label>
 <span class="hmi-correction-label">Page URL or slug <span class="hmi-correction-hint">(required — e.g. <code>ingredients/turmeric</code> or the full https URL)</span></span>
 <input type="text" name="page" required maxlength="400" autocomplete="off" />
 </label>
 <label>
 <span class="hmi-correction-label">The claim, number, or citation you are challenging <span class="hmi-correction-hint">(required — quote the specific text on the page)</span></span>
 <textarea name="claim" required rows="3" maxlength="4000"></textarea>
 </label>
 <label>
 <span class="hmi-correction-label">The correction you believe is warranted <span class="hmi-correction-hint">(required)</span></span>
 <textarea name="correction" required rows="3" maxlength="4000"></textarea>
 </label>
 <label>
 <span class="hmi-correction-label">Supporting source <span class="hmi-correction-hint">(strongly preferred — peer-reviewed paper, agency document, or formal dataset; include the DOI or URL)</span></span>
 <textarea name="source" rows="2" maxlength="4000"></textarea>
 </label>
 <label>
 <span class="hmi-correction-label">Your name <span class="hmi-correction-hint">(optional)</span></span>
 <input type="text" name="submitter_name" maxlength="200" autocomplete="name" />
 </label>
 <label>
 <span class="hmi-correction-label">Your email <span class="hmi-correction-hint">(optional — needed only if you want a written reply)</span></span>
 <input type="email" name="submitter_email" maxlength="320" autocomplete="email" />
 </label>
 <label>
 <span class="hmi-correction-label">Your relationship to the subject matter <span class="hmi-correction-hint">(optional — e.g. "academic researcher in food toxicology", "brand QA lead", "regulator at FDA")</span></span>
 <input type="text" name="submitter_relationship" maxlength="400" autocomplete="off" />
 </label>
 <div class="hmi-correction-honeypot" aria-hidden="true">
 <label>Leave this field empty<input type="text" name="hp" tabindex="-1" autocomplete="off" /></label>
 </div>
 <div class="hmi-correction-actions">
 <span data-hmi-correction-status role="status" aria-live="polite"></span>
 <button type="submit">Submit correction</button>
 </div>
 </fieldset>
</form>

## What happens on receipt

The Index's correction workflow operates in three states.

**Acknowledged** (within 5 business days of receipt). The Foundation confirms receipt and, where the correction is obvious (a transposed digit, a misattributed source, a broken link), applies the fix and replies with the commit hash. Acknowledged corrections that are not obvious are routed to substantive review.

**Substantive review.** The Foundation re-reads the underlying source page or pages, verifies the disputed claim against the originating literature, and decides on one of three actions: (a) apply the correction; (b) reject the correction with a written rationale to the submitter; (c) note the dispute on the page and proceed to external review if the issue is significant.

**External review.** For corrections that touch synthesis claims, regulatory interpretation, or anything load-bearing for the Heavy Metal Tested & Certified (HMT&C) program, the Foundation engages an external domain expert before applying or rejecting. The external review takes longer (typically 2–6 weeks) and the outcome is logged whether the correction is upheld or rejected.

In every case the submitter receives a written reply with the decision and the rationale.

## Disagreements

If the Foundation rejects a correction and the submitter believes the rejection is itself an error, the dispute escalates to the [[editorial-standards|editorial-standards governance process]]. The disposition of escalated disputes is logged below alongside applied corrections.

The Foundation does not promise to apply every correction submitted. It does promise to (a) reply, (b) state the rationale, and (c) record both upheld and rejected corrections in the public log below.

## Public log of substantiated corrections

This section is the auditable record of corrections that were applied or formally addressed. It is maintained chronologically with most-recent at the top. Each entry names the page, the change, the date, and the originating commit. The full version history of every page also renders at the bottom of the page itself (see "Page history" footer).

The log records two kinds of correction in the same chronological stream. Reader-submitted corrections arrive through the form above and are marked as such. Self-corrections are changes the Index makes to its own published numbers after an internal audit of its pipeline finds an error; these are not waited-for, they are sought out, and the Index publishes them on the same footing as externally-reported errors. A curated reference that audits itself and discloses what it finds is more credible than one that corrects only what readers catch. The table below is generated directly from the Index's structured correction log, so it is complete by construction rather than maintained by hand.

<!-- BEGIN: hmi-errata-log -->
| Date | Page | Change | Originating commit | Status |
| --- | --- | --- | --- | --- |
| 2026-05-31 | [[ingredients/non-root-vegetables]] | Retracted the lead estimate (was 0.004–11.4 ppb (n=2)); returned to pending re-synthesis. Unit-inconsistency artifact: the prior value came from a v0 autonomy-extractor pool whose distribution spanned more than four orders of magnitude (a mixed-unit signature). The cleaned v1 extraction does not support it. Cell returned to pending re-synthesis. | [history](https://github.com/paleofoundation/heavymetalindex/commits/main/wiki/ingredients/non-root-vegetables.md) | Applied (self-correction) |
| 2026-05-31 | [[ingredients/non-root-vegetables]] | Retracted the cadmium estimate (was 0.007–62 ppb (n=3)); returned to pending re-synthesis. Unit-inconsistency artifact: the prior value came from a v0 autonomy-extractor pool whose distribution spanned more than four orders of magnitude (a mixed-unit signature). The cleaned v1 extraction does not support it. Cell returned to pending re-synthesis. | [history](https://github.com/paleofoundation/heavymetalindex/commits/main/wiki/ingredients/non-root-vegetables.md) | Applied (self-correction) |
| 2026-05-31 | [[ingredients/spices]] | Retracted the cadmium estimate (was 0.001–80.8 ppb (n=7)); restored to 30–500 ppb (n=6). Unit-inconsistency artifact: the v0 pooling writer had overwritten the frontmatter with an implausible range (0.001-80.8 ppb) whose low end is a mixed-unit signature. Restored the direct-source-read value (30-500 ppb, n=6) that the page's sourced contamination table preserved. | [history](https://github.com/paleofoundation/heavymetalindex/commits/main/wiki/ingredients/spices.md) | Applied (self-correction) |
| 2026-05-31 | [[ingredients/infant-formula-powder]] | Retracted the total mercury estimate (was 112–990.2 ppb (n=2)); returned to pending re-synthesis. Superseded: the cleaned v1 extraction supports fewer than two independent sources for this cell. The prior value is withdrawn pending additional evidence. | [history](https://github.com/paleofoundation/heavymetalindex/commits/main/wiki/ingredients/infant-formula-powder.md) | Applied (self-correction) |
| 2026-05-31 | [[ingredients/infant-formula]] | Retracted the aluminium estimate (was 9–715.7 ppb (n=3)); returned to pending re-synthesis. Superseded: the cleaned v1 extraction supports fewer than two independent sources for this cell. The prior value is withdrawn pending additional evidence. | [history](https://github.com/paleofoundation/heavymetalindex/commits/main/wiki/ingredients/infant-formula.md) | Applied (self-correction) |
| 2026-05-31 | [[ingredients/spices]] | Retracted the lead estimate (was 0.003–23.7 ppb (n=15)); restored to 100–3000 ppb (n=8). Unit-inconsistency artifact: the v0 pooling writer overwrote the frontmatter with a range whose 0.003 ppb floor is below any analytical limit of detection (a mixed-unit signature). Restored the direct-source-read value (100-3000 ppb, n=8) the page's sourced contamination table preserved. | [history](https://github.com/paleofoundation/heavymetalindex/commits/main/wiki/ingredients/spices.md) | Applied (self-correction) |
| 2026-05-31 | [[ingredients/chocolate]] | Retracted the nickel estimate (was 5.94–1184 ppb (n=3)); restored to 700–1900 ppb (n=2). v0 autonomy-extractor mis-grab: a grains-category nickel value (mean 359 ug/kg under a "Nickel concentrations by food group" header) was mislabeled as chocolate nickel and pooled into an implausible range. The v1 extractor fix removed the mis-grab; the prior direct-source-read value was restored. | [4929e59](https://github.com/paleofoundation/heavymetalindex/commit/4929e59) | Applied (self-correction) |
<!-- END: hmi-errata-log -->

When a value is retracted to "pending re-synthesis," the page shows the analyte as pending and the number is removed until the corrected pipeline re-derives it from the contributing sources. Retraction never silently substitutes a new number for an old one; the prior value and the reason are recorded here.

## What is in scope for an erratum

- A factual error in a published claim (wrong number, wrong unit, wrong species).
- A misattributed source (a claim citing a paper that does not support it).
- A broken link to a primary source, or a stale `access_url:` that no longer resolves.
- A retraction of a source paper that the Index has not yet propagated to dependent pages.
- A regulatory value that has changed and the Index has not yet updated.
- A unit-conversion error.

## What is not an erratum

- A disagreement with the [[methodology]] or [[editorial-standards]] of the Index. These are open to discussion via the same channel but are not "corrections" in the per-page sense.
- A request that the Index reach a different synthesis conclusion in the absence of new evidence. The Index will revisit a synthesis when the contributing evidence base changes substantially; a request to revisit absent new evidence is logged but does not trigger a re-synthesis.
- A request to soften or strengthen a claim to align with a particular policy position. The Index reports what the literature supports; alignment with policy is not its job.
- A request to remove or alter brand-identifying information. There is none in the Index by design (see [[editorial-standards]] § Brand-level data: hard firewall); requests in this category are out of scope and are forwarded to the relevant Foundation contact.

## Why this page exists

Cochrane, the canonical curated medical reference, treats erratum management as load-bearing infrastructure. Its corrections process is documented, its outcomes are logged, and its credibility is partly the cumulative result of decades of visibly handled disputes. The Heavy Metal Index inherits that model — both because it is the right epistemic stance and because the [[methodology|defensibility argument]] the Index rests on requires it.
