---
type: doc
purpose: GPT-5.5 QA audit prompt — second set of eyes on Claude-produced wiki source pages
audience: [karen, chatgpt, claude-code]
updated: 2026-05-17
---

# GPT-5.5 source-page audit prompt

GPT-5.5 fast mode runs as a fresh-eyes QA auditor on wiki source pages produced by Claude Code (manual-fetch ingest or otherwise). It does not draft, does not edit, does not synthesize. It produces a structured audit report that Claude can act on.

This is the second-pair-of-eyes safety net. Every Claude-produced source page should ideally get audited before it's relied on for HMTc threshold work, course content, or app data. At minimum, every page produced by autonomous loops (`/loop /ingest-next-manual-fetch-pdf folder=...`) should be audited before that folder is treated as Cochrane-complete.

## When to invoke

- Right after Claude commits a new or enhanced source page, while the source PDF or markdown is still loaded in your workflow.
- On any existing wiki source page you have suspicions about.
- As a batch sweep over a folder Claude has marked complete.

## How to invoke

Open ChatGPT 5.5 fast mode in the project with the GPT-collaboration docs loaded. Paste the prompt below. Replace the bracketed sections with the actual content.

---

```
You are running a QA audit on a wiki source page produced by Claude Code for the Heavy Metal Index. Your job is to find errors, not to draft or fix. The wiki aims to be Cochrane Library quality for heavy metals in food, so the data must be defensible against hostile expert review. Treat your role as that role: a defense expert reviewing whether the wiki's claims about this paper are accurate, faithful to the source, and free of policy contamination.

INPUTS

Below the line that says "=== WIKI SOURCE PAGE ===" I will paste the current contents of a wiki source page (the Markdown file from wiki/sources/).

Below the line that says "=== SOURCE EVIDENCE ===" I will provide one of:
  (a) The full Marker-converted markdown of the original paper (for FM_-handle sources), OR
  (b) The original PDF attached to this conversation (for MFK_/MR_/PCMF_-handle sources). When PDF is attached, treat that as the source evidence.

Below the line "=== TAXONOMY SNAPSHOT ===" I will paste the four lists from taxonomy-snapshot.md (Ingredients, Products, Metals, Regulations). If absent, use the snapshot already in your project files.

Below the line "=== AUDIT SCOPE ===" I may name a narrower scope (e.g., "numerical fidelity only" or "brand firewall only"). Default: run all five checks.

YOUR JOB: RUN THESE FIVE CHECKS

Check each independently. For each check, report ✅ clean, ⚠️ concerns, or ❌ definite errors with the specific finding and source citation (page number, table number, or paragraph quote).

## CHECK 1 — Numerical fidelity

For every numeric value in the wiki page's `## Key numbers` section, find the corresponding value in the source. Report:
- ✅ if every number is exactly as the source reports (same value, same units, same sample size attribution)
- ⚠️ if any number is technically present in the source but ambiguously attributed, or if units differ (the source uses µg/g but the wiki page uses µg/kg without conversion notation)
- ❌ if any number is wrong, transposed, rounded silently, or invented

List every numeric value you checked and its verification status. Pay particular attention to:
- Transpositions between two columns (e.g., Pb and Cd exceedance percentages swapped between species rows)
- Mixed-up species/group attributions (the right number assigned to the wrong group)
- Misread decimals or significant figures
- Statistics types confused (means reported as medians, or mean ± SD reported as 95% CI)
- Wet weight vs dry weight basis silently conflated

## CHECK 2 — Slug vocabulary

For every wikilink in the frontmatter (`metals:`, `ingredients:`, `products:`, `matrices:`, `jurisdictions:`) and in the `## Wiki pages this source may touch` section, check whether the slug exists in the current taxonomy snapshot.

Report:
- ✅ if every slug is in the snapshot
- ⚠️ if a slug is plausible but not in the snapshot AND no `## Verification notes` entry flags it as a missing-slug proposal
- ❌ if a slug is invented (clearly not in the snapshot and not flagged) OR if a slug is malformed (e.g., bare wikilink in a frontmatter page-reference field where quoted-wikilink is required per Part 14)

Also check matrices vocabulary against the system-prompt list (rice, infant-formula, fish, etc.); matrices is bare strings, not wikilinks, and uses its own controlled vocabulary.

## CHECK 3 — Speciation and methods

Speciation discipline is non-negotiable (CLAUDE.md Part 14). Check:
- Does `metals:` use the correct abbreviations? Specifically:
  - If the paper does not separate inorganic vs total arsenic, the page should say `tAs` not `iAs`
  - If the paper does not separate methylmercury from total mercury, the page should say `tHg` not `MeHg`
  - If the paper measures total Cr without hexavalent speciation, the page should say `Cr` not `Cr-VI`
- Does the `## Methods (brief)` section accurately reflect what the source describes? Look for:
  - Invented analytical methods ("Cold vapor AAS for Hg" when the source does not specify)
  - Invented reference materials, LODs, or sample-prep details
  - Misattributed instruments (graphite furnace AAS claimed when the source actually used flame AAS)
  - Speciation falsely claimed (paper measured tAs but methods section implies iAs speciation)

Report each finding with the exact source-evidence support or absence thereof.

## CHECK 4 — Part 12 brand firewall (strict reading, locked 2026-05-17)

CLAUDE.md Part 12: brand names do not belong in the wiki. The strict reading: ZERO brand naming in source-page content. Product-form descriptors (preterm, soya-based, ready-made, powdered, follow-on, growing-up, hypoallergenic) carry the same identifying information without naming the brand. The wiki defaults to no brand attribution.

ONE EXPLICIT EXCEPTION carved out by Part 12 itself: brands MAY be named when documenting a public-record regulatory event (Congressional investigation, FDA recall, agency enforcement action) where the brand is the subject of the action. Frame as a regulatory event, not a brand ranking. Naming the manufacturers investigated by a Congressional subcommittee is documenting a regulatory event; reporting per-manufacturer percentile rankings would still violate Part 12 even inside that exception.

Scan the wiki page for:
- ANY brand names in the body text, Key numbers, or tables (other than the regulatory-event exception above)
- Tables or bulleted lists naming branded products with values attached
- Statements like "Brand X had 65% of products above the limit; Brand Y had 80%"
- Brand names used as format identifiers (e.g., "the soya-based powder (Wysoy)" or "the preterm formula (Nutriprem 1)") — these are NOT permitted under the strict reading; the product-form descriptor alone ("the soya-based powder") is sufficient
- Any wording that converts the source's brand-level data into a wiki-side brand ranking

Report each finding with the quoted text from the wiki page. Suggest the aggregation it should become (e.g., "Seven manufacturers investigated by the Subcommittee; range of exceedance proportions across the group was X to Y" with the seven names ONLY if the source documents the investigation; otherwise simply "the preterm formula was the highest at N µg/L" without naming the brand).

## CHECK 5 — Part 2 wiki/HMTc firewall

CLAUDE.md Part 2: the wiki reports what the literature supports, not what HMTc certifies at. Common slips:
- Synthesis claims that compare this paper to other literature ("consistent with the consensus that...", "supports prior findings by...")
- HMTc threshold proposals or justifications ("this suggests an HMTc certification level of N ppb")
- Consumer-audience risk advisories ("this means parents should consider...", "the safer choice is...")
- New-page suggestions in the body rather than in `## Verification notes`

Note: the `## Implications` section is allowed to describe what the paper's findings contribute to threshold work, but must not propose threshold values. The boundary is between "contributes occurrence data for product category X" (allowed) and "suggests HMTc should certify at Y ppb" (not allowed).

Report each finding with the quoted text.

OUTPUT FORMAT

Reply with this exact structure. Use ✅/⚠️/❌ literally. Be terse — bullet points, no preamble.

# Audit report — <cite-key>

Source: <source identifier — FM_id or MFK_/MR_/PCMF_ handle>
Audited: <today's date>

## Check 1 — Numerical fidelity
<status>

<bulleted findings>

## Check 2 — Slug vocabulary
<status>

<bulleted findings>

## Check 3 — Speciation and methods
<status>

<bulleted findings>

## Check 4 — Part 12 brand firewall
<status>

<bulleted findings>

## Check 5 — Part 2 wiki/HMTc firewall
<status>

<bulleted findings>

## Verdict
<one of: PROMOTE (all five clean), REVISE (one or more checks show ⚠️ or ❌ that Claude should address), QUARANTINE (Check 1 has ❌ on three or more values, OR Check 4 has ❌, OR Check 5 has ❌ — these indicate the page is unsafe to rely on as-is)>

## Recommended next action
<one or two sentences describing what Claude or Karen should do next>
```

---

## How to use the audit report

When GPT returns an audit:

- **Verdict PROMOTE**: The page is clean. No further action needed. Karen can mark the page as audited (no schema field yet — add `audited: <date>` to frontmatter if/when desired) and move on.

- **Verdict REVISE**: Paste the audit report back to Claude with the request "apply this audit to <cite-key>." Claude reads the audit, verifies each finding against the source independently (the audit could be wrong; treat it as a second opinion, not a verdict), and either applies corrections or pushes back on each finding with reasoning.

- **Verdict QUARANTINE**: Stop relying on this page for any downstream work (HMTc threshold setting, course content, app data) until Karen has personally reviewed. Move the page to `wiki/sources/_quarantine/<cite-key>.md` (or set `quarantined: true` in frontmatter — schema decision pending) and add a `wiki/lint/audit-quarantines.md` entry.

## What this audit does NOT cover

- **Cross-source contradictions.** This audit checks one source page against its source. It does not check whether the page's claims contradict claims on other source pages or on metal/ingredient pages. That's the Part 9 synthesis-pass workflow's job.
- **Synthesis correctness.** This audit does not validate ingredient `contamination_profile` values, product-page Literature Evidence Summary tables, or any downstream aggregation. Those are generator outputs derived from source pages; this audit is upstream of that.
- **Completeness.** This audit checks fidelity of what's on the page, not whether everything from the source that should be on the page actually is. A page that omits half the source's findings can still pass this audit if what IS on the page is accurate.

The audit is necessary, not sufficient. Karen's eyes remain the final QA.

## What to do if GPT's audit is wrong

GPT-5.5 fast mode can produce false positives (flagging a number as wrong when it's actually correct in the source) or false negatives (missing a real error). When you suspect a finding is wrong:

- For false positives: Claude pushes back on the audit with reasoning when applying it. Don't blindly accept GPT's findings as correct — the audit is a second opinion that needs verification.
- For false negatives: If you spot an error GPT missed, that's a signal the audit prompt needs tightening. Tell Claude what was missed; Claude updates this prompt.

The audit is a tool, not an oracle.
