#!/usr/bin/env node
// build-required-analytes.mjs — validate the required-testing-panel registry and (optionally)
// emit the cert-side copy the panel-completeness lint reads.
//
// The registry (data/workbench/standards/required-analytes.json) records, per (category, standard,
// analyte), the per-lot TESTING OBLIGATION — distinct from the published LIMIT, which is complete
// for every analyte (Certification-Readiness Ruling). This tool enforces the invariants of the
// Required-Testing-Panel Ruling (docs/governance/hmtc-governing-principles.md §5):
//   1. Every compiled analyte cell in a referenced standard carries exactly one obligation, and the
//      registry names no analyte absent from the compiled record (no drift either direction).
//   2. Every obligation is in-vocabulary.
//   3. Each reflex/mandatory speciation names a parent_total that is itself per_lot_total, whose
//      limit exists; a reflex trigger is > 0 and <= 50% of that parent limit.
//   4. Each conditional carries a condition string.
//   5. No Tier-1 total is not_applicable; the four Tier-1 totals (Pb, Cd, tAs, tHg) are per_lot_total.
//
// Usage:
//   node tools/standards/build-required-analytes.mjs            # validate only
//   node tools/standards/build-required-analytes.mjs --emit <dir>   # also copy to <dir>/required-analytes.json
//                                                                   # (e.g. ../heavymetalcertified/data/standards)

import fs from "node:fs";
import path from "node:path";

const REPO = process.cwd();
const REGISTRY = path.join(REPO, "data/workbench/standards/required-analytes.json");

const VOCAB = new Set([
  "per_lot_total", "reflex_speciation", "mandatory_speciation",
  "conditional", "baseline_monitor", "not_applicable",
]);
const TIER1_TOTALS = new Set(["Pb", "Cd", "tAs", "tHg"]);
const REFLEX_MAX_FRACTION = 0.5;

const fail = [];
let standardsChecked = 0;
let analytesChecked = 0;

function compiledCells(refPath) {
  const abs = path.join(REPO, refPath);
  if (!fs.existsSync(abs)) return null;
  const j = JSON.parse(fs.readFileSync(abs, "utf8"));
  const variant = j.variants ? (j.variants.default || j.variants[Object.keys(j.variants)[0]]) : j.cells;
  return variant ? new Set(Object.keys(variant)) : null;
}

const reg = JSON.parse(fs.readFileSync(REGISTRY, "utf8"));

for (const [catId, cat] of Object.entries(reg.categories || {})) {
  for (const [slug, std] of Object.entries(cat.standards || {})) {
    const where = `cat${catId}/${slug}`;
    const analytes = std.analytes || {};
    const keys = Object.keys(analytes);

    // 1. drift against the compiled standard record
    const compiled = std.standard_ref ? compiledCells(std.standard_ref) : null;
    if (std.standard_ref && !compiled) {
      fail.push(`${where}: standard_ref not found or unreadable: ${std.standard_ref}`);
    } else if (compiled) {
      for (const k of compiled) if (!(k in analytes)) fail.push(`${where}: compiled analyte "${k}" has NO testing obligation in the registry`);
      for (const k of keys) if (!compiled.has(k)) fail.push(`${where}: registry analyte "${k}" is not a compiled cell of ${std.standard_ref}`);
    }

    for (const [code, a] of Object.entries(analytes)) {
      analytesChecked++;
      const at = `${where}.${code}`;

      // 2. vocabulary
      if (!VOCAB.has(a.obligation)) { fail.push(`${at}: obligation "${a.obligation}" not in vocabulary`); continue; }

      // 5. Tier-1 total discipline
      if (TIER1_TOTALS.has(code) && a.obligation !== "per_lot_total")
        fail.push(`${at}: Tier-1 total must be per_lot_total, got "${a.obligation}" (litigation-shield guardrail)`);
      if (a.obligation === "not_applicable" && a.tier === 1)
        fail.push(`${at}: not_applicable is never permitted on a Tier-1 analyte`);

      // 3. speciation obligations
      if (a.obligation === "reflex_speciation") {
        const parent = a.parent_total;
        const p = parent ? analytes[parent] : undefined;
        if (!p) { fail.push(`${at}: reflex_speciation names parent_total "${parent}" which is not an analyte on this standard`); }
        else {
          if (p.obligation !== "per_lot_total") fail.push(`${at}: parent_total "${parent}" must be per_lot_total so the screen always runs (got "${p.obligation}")`);
          if (typeof p.limit_ppb !== "number") fail.push(`${at}: parent_total "${parent}" has no numeric limit to screen against`);
          const trg = a.reflex_trigger_ppb;
          if (typeof trg !== "number" || trg <= 0) { fail.push(`${at}: reflex_trigger_ppb must be a positive number (got ${trg})`); }
          else {
            // corrected trigger: min(species limit if published, 50% of parent limit)
            const cap = [];
            if (typeof p.limit_ppb === "number") cap.push(REFLEX_MAX_FRACTION * p.limit_ppb);
            if (typeof a.limit_ppb === "number") cap.push(a.limit_ppb); // published species limit
            const ceiling = cap.length ? Math.min(...cap) : Infinity;
            if (trg > ceiling)
              fail.push(`${at}: reflex trigger ${trg} exceeds min(species limit, 50% parent) = ${ceiling} — under-catches; §4 corrected trigger`);
          }
        }
      }
      if (a.obligation === "mandatory_speciation") {
        // valid EITHER via a per_lot_total parent (defining-pathway case) OR structurally
        // (a published species limit with no bounding parent total, e.g. apple-juice iAs).
        const parent = a.parent_total;
        const p = parent ? analytes[parent] : undefined;
        if (parent && !p) fail.push(`${at}: mandatory_speciation names parent_total "${parent}" which is not an analyte on this standard`);
        else if (p && p.obligation !== "per_lot_total") fail.push(`${at}: parent_total "${parent}" must be per_lot_total (got "${p.obligation}")`);
        else if (!p && typeof a.limit_ppb !== "number") fail.push(`${at}: mandatory_speciation with no parent_total must carry its own numeric species limit_ppb (structural condition)`);
      }

      // 4. conditional needs a condition
      if (a.obligation === "conditional" && !(typeof a.condition === "string" && a.condition.trim()))
        fail.push(`${at}: conditional obligation requires a non-empty "condition"`);

      // rationale hygiene
      if (!(typeof a.rationale === "string" && a.rationale.trim()))
        fail.push(`${at}: missing rationale (every obligation must record its corpus/pathway basis)`);
    }
    standardsChecked++;
  }
}

if (fail.length) {
  console.error(`\nbuild-required-analytes: ${fail.length} PROBLEM(S):`);
  for (const x of fail) console.error(`  ✗ ${x}`);
  process.exit(1);
}

console.log(`build-required-analytes: OK — ${standardsChecked} standard(s), ${analytesChecked} analyte obligation(s) validated.`);

const emitIdx = process.argv.indexOf("--emit");
if (emitIdx >= 0) {
  const dir = process.argv[emitIdx + 1];
  if (!dir) { console.error("--emit requires a target directory"); process.exit(1); }
  if (!fs.existsSync(dir)) { console.error(`--emit target does not exist: ${dir}`); process.exit(1); }
  const out = path.join(dir, "required-analytes.json");
  fs.writeFileSync(out, JSON.stringify(reg, null, 2) + "\n");
  console.log(`build-required-analytes: emitted cert copy -> ${out}`);
}
