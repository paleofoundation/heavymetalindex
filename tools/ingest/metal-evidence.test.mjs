// Regression tests for the analyte-scope detector.
// Every FALSE-POSITIVE case below is a real string class from the 2026-07-29 bulk run
// that produced 2,200 pages with unsupported `metals:` frontmatter (removed in e8e2c8158).
// Run: node --test tools/ingest/metal-evidence.test.mjs

import test from "node:test";
import assert from "node:assert/strict";
import { detectMetalEvidence, metalEvidenceGate } from "./metal-evidence.mjs";

const metalsOf = t => detectMetalEvidence(t).metals;

test("'et al.' never asserts aluminium — the defect that hit 2,184 of 2,200 pages", () => {
  const t = `
    Smith et al. (2020) reported similar findings.
    As reviewed by Jones et al., the mean value was 3.4 and the median was 2.1.
    Devos et al. Microbiology 2024 170 001451 concentration of interest.
  `;
  assert.ok(!metalsOf(t).includes("Al"), "Al must not be asserted from 'et al.'");
});

test("'lead to' never asserts Pb", () => {
  const t = `
    These mechanisms lead to increased intestinal permeability.
    Dysbiosis may lead to necrotizing enterocolitis in preterm infants.
    Such changes lead to a mean reduction of 12% (n = 45).
  `;
  assert.ok(!metalsOf(t).includes("Pb"), "Pb must not be asserted from the verb 'lead'");
});

test("a generic results table asserts nothing", () => {
  const t = `
    Table 2. Mean gestational age was 28.4 weeks (n = 45).
    The median birth weight was 1120 g and the range was 640-1890 g.
    Table 3. Detected in 18 of 32 samples.
  `;
  assert.deepEqual(metalsOf(t), [], "no analyte should be asserted");
});

test("sentence-initial 'As' never asserts arsenic", () => {
  const t = `
    As shown in Figure 1, the mean concentration was 3.2 mg/kg.
    As discussed above, levels varied. As a result, detection improved.
  `;
  assert.ok(!metalsOf(t).includes("tAs"), "tAs must not be asserted from the word 'As'");
});

test("CD immunology markers never assert cadmium", () => {
  const t = `
    CD4 and CD8 counts were measured; the mean CD4 level was 320 cells/uL.
    CD3 concentration detected in all samples. CD14 range 12-88.
  `;
  assert.ok(!metalsOf(t).includes("Cd"), "Cd must not be asserted from CD markers");
});

test("real lead measurements ARE asserted", () => {
  const t = `
    Lead (Pb) concentrations ranged from 12.4 to 88.1 ug/kg in rice samples.
    Mean lead content was 34.2 ug/kg dry weight across 120 samples.
  `;
  assert.ok(metalsOf(t).includes("Pb"), "genuine Pb evidence must be asserted");
});

test("real aluminium measurements ARE asserted", () => {
  const t = `
    Aluminium content averaged 3.4 mg/kg in the infant formula samples.
    The aluminium concentration exceeded 5 mg/kg in two of the powders.
  `;
  assert.ok(metalsOf(t).includes("Al"), "genuine Al evidence must be asserted");
});

test("real mercury / methylmercury measurements ARE asserted", () => {
  const t = `
    Total mercury concentration was 0.12 mg/kg wet weight in muscle tissue.
    Methylmercury accounted for 0.09 mg/kg of the mercury measured.
    Methylmercury concentrations ranged 0.02-0.31 mg/kg across species.
  `;
  const m = metalsOf(t);
  assert.ok(m.includes("tHg"), "tHg must be asserted");
  assert.ok(m.includes("MeHg"), "MeHg must be asserted");
});

test("gate rejects a non-metal paper and accepts a real one", () => {
  const nec = `
    Necrotizing enterocolitis is a devastating bowel disease of premature infants.
    Probiotics may lead to reduced incidence (n = 240, mean 12.4 weeks).
    Table 1. Gestational age range 24-32 weeks.
  `;
  assert.equal(metalEvidenceGate(nec).ok, false, "NEC paper must be gated out");

  const real = `
    Cadmium concentrations ranged from 4.1 to 22.8 ug/kg in cocoa powder.
    Mean cadmium content was 11.3 ug/kg across 88 samples.
    Lead (Pb) concentration averaged 8.2 ug/kg in the same samples.
  `;
  assert.equal(metalEvidenceGate(real).ok, true, "real occurrence paper must pass");
});

test("asserted metals always have quotable evidence lines", () => {
  const t = `
    Nickel concentration was 415 ug/kg in the oat samples.
    Mean nickel content reached 1267 ug/kg in one composite.
  `;
  const { metals, evidence } = detectMetalEvidence(t);
  for (const m of metals) {
    assert.ok(evidence[m]?.length >= 2, `${m} must carry its justifying lines`);
  }
});

test("bibliography lines are never evidence", () => {
  // Both strings are real extractions from kubwabo2009 and paranjape2023, produced by
  // the first fixed run before reference-stripping was added.
  const t = `
    Some body text about baby bottles and migration.

    References

    Smith A. levels of lead or cadmium. 20:614-619.
    Jones B. removal of aluminium ( III ) from polluted. J Chem Pharm Sci 2011;12:44-51.
    Doe C. cadmium concentration in food. doi:10.1016/j.foodchem.2019.01.001
  `;
  assert.deepEqual(metalsOf(t), [], "reference-list metals must not be asserted");
});

test("a prose mention with no number is not evidence", () => {
  const t = `
    Elevated levels of lead or cadmium have been reported in the literature.
    Cadmium exposure remains a public health concern worldwide.
  `;
  assert.deepEqual(metalsOf(t), [], "numberless prose must not assert an analyte");
});

test("real false positives from the 2026-07-30 bounded run stay out", () => {
  // Verbatim lines the previous detector accepted as measurements.
  const cases = [
    ["Liu et al. (3) administered CdCl2 to mice by oral route for Lead (Pb) exposure results in a variety of dysfunctions", "Pb"],
    ["microbiome and its functional metagenome. Toxicol Sci against lead (Pb) toxicity in mice. Front Microbiol 10:3161", "Pb"],
    ["Abbreviations: As, arsenic; C, control; Cd, cadmium; Hg, mercury; HM, human milk; LOD, limit of detection; MeHg, methylmercury; NR, not reported; Pb, lead", "MeHg"],
    ["42 S. Yamazaki, et al., Dietary intake of methylmercury by 0-5 years Total Environ. 551-552 (2016) 344-356. 108", "MeHg"],
    ["the content of the manuscript. removal of aluminium ( III ) from polluted. J Chem Pharm Sci", "Al"],
  ];
  for (const [line, metal] of cases) {
    // Duplicate the line so it would clear the two-line threshold if not filtered.
    assert.ok(
      !metalsOf(`${line}\n${line}`).includes(metal),
      `must not assert ${metal} from: ${line.slice(0, 60)}...`,
    );
  }
});

test("a genuine table row still counts even without a unit on the line", () => {
  const t = `
    Cadmium concentration mean 0.012 median 0.009 max 0.045
    Cadmium content detected in 28 of 30 samples, range 0.003-0.045
  `;
  assert.ok(metalsOf(t).includes("Cd"), "real table rows must survive the filters");
});
