#!/usr/bin/env node
/**
 * V1 percentile methodology — RETIREMENT GUARD (single source of truth in code).
 *
 * The V1 limit-setting occurrence-percentile methodology — the pooling
 * "calculator" that took P10 / P20 / P30 / P45 / P90 / P95 / P97 of a pooled
 * occurrence distribution to SET a per-analyte limit — was officially retired
 * on 2026-09-08.
 *
 *   Decision record: docs/governance/2026-09-08-retire-v1-percentile-methodology.md
 *   Constitution:    CLAUDE.md Part 19 ("Method v2.0")
 *   Principles:      docs/governance/hmtc-governing-principles.md ("The Locked Standards Math")
 *
 * Under Method v2.0 every published limit is the strictest applicable
 * government maximum level (native basis), a disclosed read-across, a species
 * bounded by its parent total, or a documented baseline-screen / precautionary
 * value — never a computed occurrence percentile.
 *
 * Tools that COMPUTE or SERVE the retired percentile path call
 * `refuseRetiredV1()` at their entrypoint so they fail closed rather than
 * silently producing a V1 number. Deliberate historical reproduction is still
 * possible by exporting HMTC_ALLOW_RETIRED_V1=1 — the override is logged to
 * stderr so it is auditable, and it never ships a value on its own.
 *
 * NOT covered by this guard (intentionally retained):
 *   - The Standards Ratchet trigger (80th percentile of Status A internal
 *     lot results). That is a SEPARATE mechanism, on program lot data, that
 *     tightens a limit after publication; it is retained. See the Governing
 *     Principles "Ratchet trigger" section.
 *   - Literature-native reported percentiles/ranges displayed to brands (the
 *     Lab Result Comparator, build-percentile-context.ts). That is source
 *     display data, not threshold selection.
 */

export const V1_RETIREMENT_DATE = "2026-09-08"
export const V1_DECISION_RECORD =
  "docs/governance/2026-09-08-retire-v1-percentile-methodology.md"

export const V1_RETIRED_MESSAGE = [
  "",
  "  HMTc V1 PERCENTILE METHODOLOGY — RETIRED (2026-09-08)",
  "  ----------------------------------------------------",
  "  This tool computes or serves the retired V1 limit-setting occurrence",
  "  percentiles (P10/P45/P90/P95/P97 pooling — the 'calculator').",
  "",
  "  Method v2.0 sets every limit from the strictest applicable government",
  "  limit (native basis), a disclosed read-across, a bounded species, or a",
  "  documented baseline-screen / precautionary value — never a computed",
  "  percentile. Refusing to run so a V1 number is never produced by accident.",
  "",
  `  Why:  ${V1_DECISION_RECORD}`,
  "  Run for historical reproduction ONLY:  HMTC_ALLOW_RETIRED_V1=1",
  "",
].join("\n")

/**
 * Abort a tool that would run the retired V1 percentile path.
 * @param {string} toolName - name shown in the refusal, e.g. the script path.
 * @returns {void} returns only when the audited override is set.
 */
export function refuseRetiredV1(toolName = "this tool") {
  if (process.env.HMTC_ALLOW_RETIRED_V1 === "1") {
    process.stderr.write(
      `[v1-retired] OVERRIDE: ${toolName} is running the RETIRED V1 percentile path ` +
        `under HMTC_ALLOW_RETIRED_V1=1. This is for historical reproduction only; ` +
        `no value it produces may be published (see ${V1_DECISION_RECORD}).\n`,
    )
    return
  }
  process.stderr.write(`[v1-retired] ${toolName} refused.\n${V1_RETIRED_MESSAGE}\n`)
  process.exit(2)
}
