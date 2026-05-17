---
name: apply-gpt-audit
description: Apply a GPT-5.5 audit report to the corresponding wiki source page. Karen invokes this skill after pasting a GPT audit report into the conversation. Claude reads the audit, verifies each finding against the source independently, applies corrections where the finding is correct, pushes back where the finding is wrong, runs the routing audit, commits, and updates data/evidence/audit-queue.csv with the verdict. Use when Karen types `/apply-gpt-audit <cite-key>` or pastes an audit report and says "apply this audit."
version: 1.0.0
---

# apply-gpt-audit

Applies a GPT-5.5 audit report to a wiki source page. Each audit finding is treated as a second opinion that needs independent verification, not as a verdict. False positives are pushed back on with reasoning; false negatives that Claude spots during verification are also fixed.

## Arguments

- `<cite-key>` (required): the cite-key of the source page being audited. Must match a file at `wiki/sources/<cite-key>.md`.

## Inputs

1. The skill argument names the cite-key.
2. Karen pastes the audit report into the conversation. The audit follows the format in `docs/gpt-collaboration/audit-prompt.md` — five checks (Numerical fidelity, Slug vocabulary, Speciation/methods, Brand firewall, wiki/HMTc firewall), each with ✅/⚠️/❌ status and findings, plus a final PROMOTE/REVISE/QUARANTINE verdict.

## Workflow

1. **Read the wiki source page** at `wiki/sources/<cite-key>.md` in full.
2. **Read the source evidence:**
   - For FM_ handles: read `raw/markdown/<FM_id>/<FM_id>.md`.
   - For MFK_/MR_/PCMF_ handles: read the PDF at `raw_path` directly via Read tool with `pages` parameter.
3. **For each ❌ definite-error finding in the audit:**
   - Verify the finding against the source independently. Quote the source-citation evidence.
   - If the finding is correct: apply the correction to the wiki page. Document in the verification notes section what was changed and that it was a GPT-audit-applied correction.
   - If the finding is wrong (false positive): document the false positive in the conversation with the source-citation evidence that disproves it. Do NOT change the wiki page on this finding. Add a one-line note to the verification notes section: "GPT audit (date) flagged X as an error; verified against source — finding was a false positive because Y."
4. **For each ⚠️ concern finding:**
   - Verify against the source. Apply the change if it's a real concern; document false positives same as above.
   - Concerns are typically lower-stakes (slug not in snapshot but already flagged in verification notes; statistic type ambiguous in source; etc.). Use judgment about whether to escalate to a fix.
5. **Independent re-check while reading:** while reading the source for verification, watch for errors GPT missed (false negatives). Catch any of: numbers GPT didn't flag that are wrong; invented method detail GPT didn't flag; brand-firewall violations GPT missed; etc. Apply those fixes too. Document them as "independent verification caught:".
6. **Run the routing audit:** `npm run evidence:source-routes`. Confirm 0 unresolved, source not in malformed.
7. **Commit per audit application** with message:

   ```
   audit: <cite-key> [promoted|revised|quarantined] per GPT-5.5 audit

   GPT findings applied:
   - <list of corrections actually applied with source citations>

   GPT findings rejected (false positives):
   - <list of GPT findings that didn't survive verification, with reasoning>

   Independent verification caught:
   - <list of additional errors found while verifying GPT's findings>

   Routing: <N> rows (no change|N added|N removed).

   Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>
   ```

8. **Update audit queue:** edit `data/evidence/audit-queue.csv` for this cite-key:
   - Set `status` to `audited-promote`, `audited-revised`, or `audited-quarantine` based on the GPT verdict adjusted for false positives.
   - Set `audit_verdict` to the GPT verdict (PROMOTE, REVISE, or QUARANTINE).
   - Set `audit_applied_at` to today's ISO date.
   - In `notes`, append a short summary: e.g., "5 findings; 4 applied, 1 rejected as false positive; 1 independent catch."

## Verdict-handling

- **PROMOTE (GPT says clean):** Still independently re-check the page (in step 5 above). If clean confirmed, set status to `audited-promote`. No content changes needed but the audit-queue update commit still goes through.
- **REVISE (GPT flags issues):** Apply findings per workflow above. Status flips to `audited-revised`.
- **QUARANTINE (GPT flags severe issues):** Apply findings per workflow above AND additionally: append a row to `wiki/lint/audit-quarantines.md` naming the cite-key, the date, and the unresolved issues; flag the page to Karen for personal review. Status flips to `audited-quarantine`. Do NOT delete the page; do NOT move it; do NOT block downstream use — just surface for Karen to confirm before HMTc/courses/app consumption.

## Push-back discipline

The audit is a second opinion. Treat it that way:

- Do not apply a finding without independent source verification.
- Do not change a value GPT says is wrong unless you can quote the source location that proves GPT correct.
- When GPT is wrong, say so explicitly with the source citation that disproves the finding. False positives are useful signal — they reveal where the audit prompt could be tightened or where the page is more nuanced than GPT could parse from the abstract.
- Surface false-positive patterns to Karen in the response (not just in the commit message). If GPT keeps flagging the same type of false positive across multiple audits, the audit prompt needs adjustment.

## What this skill does NOT do

- Does NOT trust the audit blindly. Independent verification on every finding.
- Does NOT create new ingredient/product/regulation pages even if the audit asks for them (Part 10).
- Does NOT delete or move pages even on QUARANTINE verdict.
- Does NOT modify the audit prompt or the audit-queue schema (those are separate evolution paths).
- Does NOT chain to the next queue entry (each audit application is one cite-key; Karen invokes again for the next).

## Operator notes

Invoke as `/apply-gpt-audit <cite-key>` followed by pasting the audit report. Or paste the audit and say "apply this audit to <cite-key>" — Claude recognizes the audit format and runs this skill.

This skill is the consumer side of the GPT-audit loop. The producer side is `tools/gpt/build-audit-packet.sh <cite-key>` which Karen runs to build the packet she pastes into ChatGPT.
