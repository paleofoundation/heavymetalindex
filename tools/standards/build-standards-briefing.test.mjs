// Regression guards for the Standards Briefing generator.
//
// Two classes of bug have already been caught in this build:
//
//   1. Percentile-fraction inversion. The author wrote "the cleanest 3% of
//      the clean platform already meet" the P97 standard. P97 means 97% of
//      the distribution falls at or below the value — i.e., 97% PASS, not
//      3% pass. Karen caught this twice. This test fails if any
//      known-wrong phrasing appears in the generated briefing.
//
//   2. Phantom co-authors. The hmtc-standards skill's project-knowledge
//      instruction named "K. Pendergrass (CEO), K. Eyer, D. Aleru" as the
//      authors of every briefing. Those names came from a different build
//      context. Naming people who haven't worked on the briefing they're
//      credited on is a Daubert vulnerability (named authors can't defend
//      the methodology on the stand) and a false-attribution problem.
//      This test fails if those phantom names appear in any generated
//      briefing UNLESS an explicit --authors=... override is used.
//
// Run with: npm test

import test, { describe } from "node:test"
import assert from "node:assert"
import { spawnSync } from "node:child_process"
import { readFileSync, existsSync, statSync } from "node:fs"
import { join } from "node:path"

const repoRoot = process.cwd()
const generatorPath = join(repoRoot, "tools/standards/build-standards-briefing.mjs")
const pooledCsv = join(repoRoot, "data/evidence/hmtc_aggregate_distributions.csv")
const briefingPath = join(
  repoRoot,
  "data/workbench/briefings/infant-formula-powder-non-soy.md",
)

// Skip the whole suite if the inputs aren't there — we don't want CI to fail
// on a clean checkout that hasn't run the pooling engine yet.
const inputsReady = existsSync(generatorPath) && existsSync(pooledCsv)

function regenerate() {
  const r = spawnSync(
    "node",
    [generatorPath, "--product=infant-formula-powder-non-soy"],
    { cwd: repoRoot, encoding: "utf8" },
  )
  if (r.status !== 0) {
    throw new Error(
      `Briefing generator failed (status ${r.status}):\nSTDOUT: ${r.stdout}\nSTDERR: ${r.stderr}`,
    )
  }
  return readFileSync(briefingPath, "utf8")
}

describe("Standards Briefing — percentile-fraction inversion guard", () => {
  test("the generated briefing does NOT contain inverted percentile phrases", { skip: !inputsReady }, () => {
    const text = regenerate()

    // Known-wrong phrases as POSITIVE CLAIMS. Regex form so a disavowing
    // construction like "NOT the cleanest 3%" doesn't trip the guard while
    // an asserted-wrong claim like "the cleanest 3% already meet" does.
    const inversions = [
      // P97 → 97% pass. "cleanest 3% already meet" would be the inverted claim.
      { pattern: /(?<!not the |not |isn't |is not |never )cleanest 3% (?:of[^.]*)?already (?:meet|pass)/i, label: "cleanest 3% ... already meet" },
      { pattern: /(?<!not the |not |isn't |is not |never )cleanest 10% (?:of[^.]*)?already (?:meet|pass)/i, label: "cleanest 10% ... already meet" },
      // P45 dirty → 45% pass. "dirtiest 55% already meet" or "dirtiest 70% already meet" would be inverted.
      { pattern: /(?<!not |never )dirtiest (?:55|70|90|97)% (?:of[^.]*)?(?:already (?:meet|pass)|qualify|are at-or-below)/i, label: "dirtiest >50% ... pass" },
      // "97% of brands fail" — inverse of "97% of brands pass at P97".
      { pattern: /\b97% of brands (?:fail|are above|exceed)/i, label: "97% of brands fail/exceed" },
      { pattern: /\b90% of brands (?:fail|are above|exceed)/i, label: "90% of brands fail/exceed" },
      // "only 3% of the clean platform meets/passes" — inverse of 97%.
      { pattern: /only 3% of (?:the )?clean (?:platform|subcategory) (?:meets|passes|qualifies)/i, label: "only 3% of clean ... meets" },
      { pattern: /only 10% of (?:the )?clean (?:platform|subcategory) (?:meets|passes|qualifies)/i, label: "only 10% of clean ... meets" },
    ]
    for (const { pattern, label } of inversions) {
      const hit = text.match(pattern)
      assert.ok(
        !hit,
        `Briefing contains inverted percentile claim matching "${label}". Matched text: ${hit?.[0]}. P97 means 97% pass (the cleanest 97%); P45 means 45% pass (the cleanest 45%). Re-check the prose.`,
      )
    }
  })

  test("the briefing DOES carry the correct positive framing", { skip: !inputsReady }, () => {
    const text = regenerate()
    // At minimum, the anti-circumvention section must say P97 → 97% meet it,
    // not the inverse. We look for the corrected phrasing.
    assert.match(
      text,
      /97% of brands in the clean platform's distribution already meet/,
      "Anti-Circumvention Move 1 should explicitly state '97% of brands in the clean platform's distribution already meet the per-analyte limit'. Karen has caught the inverse phrasing twice; the prose must affirmatively say 97%, not 3%.",
    )
  })
})

describe("Standards Briefing — phantom co-author guard", () => {
  test("the default byline contains the Standards Architect; no phantom co-authors leak through", { skip: !inputsReady }, () => {
    const text = regenerate()

    // The default authorship is Karen Pendergrass solo, by title, with the
    // dual-role disclosure in the Provenance Footer. No phantom co-authors
    // should leak in unless someone explicitly overrides --authors=...
    const phantomNames = [
      "K. Eyer",
      "K Eyer",
      "D. Aleru",
      "D Aleru",
      "Victor Eyer",
      "Oluwatobi Aleru",
    ]
    for (const phantom of phantomNames) {
      assert.ok(
        !text.includes(phantom),
        `Briefing contains phantom co-author "${phantom}" who has not worked on THIS build. Past collaborators on earlier standards work belong on those documents, not on this one. Override via --authors=... only when those people have actually contributed and consented.`,
      )
    }

    // The byline must name the actual Standards Architect.
    assert.match(
      text,
      /Karen Pendergrass.*Standards Architect/i,
      "The default byline must name 'Karen Pendergrass, Standards Architect, Institute of Contaminant Standards (ICS)'. Override via --authors=... requires explicit instruction.",
    )
  })

  test("the CEO dual-role disclosure appears in the Provenance Footer", { skip: !inputsReady }, () => {
    const text = regenerate()
    assert.match(
      text,
      /also serves as CEO of the Institute of Contaminant Standards \(ICS\)/,
      "The dual-role disclosure (Standards Architect + CEO of Institute of Contaminant Standards (ICS)) must appear in the Provenance Footer for transparency. Hiding the CEO role is worse than disclosing it because adversarial readers can find it trivially and weaponize the omission.",
    )
  })

  test("AI implementation acknowledgment is in the Provenance Footer, NOT in the byline", { skip: !inputsReady }, () => {
    const text = regenerate()
    // The byline (title block) should NOT credit Claude or Anthropic as an
    // author. Strip out file-path references (CLAUDE.md is a filename, not
    // an author credit) before checking.
    const titleBlockEnd = text.indexOf("## ")
    const titleBlock = text
      .slice(0, titleBlockEnd > 0 ? titleBlockEnd : text.length)
      // Strip file-path references to CLAUDE.md so the filename doesn't
      // false-positive the byline-author check.
      .replace(/CLAUDE\.md/g, "[methodology-policy-document]")
    assert.ok(
      !/claude|anthropic|\bai assistance\b/i.test(titleBlock),
      "The byline (title block) must not credit Claude/Anthropic as an author or mention 'AI assistance'. AI acknowledgment belongs in the Provenance Footer or methodology note, not the byline — putting AI in the byline creates a Daubert vulnerability without supplying a defense witness. (File-path references to CLAUDE.md are excluded from this check.)",
    )
    // The Provenance Footer or methodology note MUST acknowledge tooling honestly.
    // Pattern uses [\s\S] to match across newlines/whitespace.
    assert.match(
      text,
      /Methodology implementation:[\s\S]*pooling engine[\s\S]*Claude/i,
      "The Provenance Footer's methodology implementation note must honestly disclose the deterministic pooling engine and the AI assistance (Claude) used to draft engine code and templates. Honest disclosure in methodology is required; suppressing it would be worse than including it because adversarial readers will find git commits, CI logs, or this very test file.",
    )
  })
})

describe("Standards Briefing — basic structure", () => {
  test("all 10 HMTc-10 analytes appear in the Master Limit Table", { skip: !inputsReady }, () => {
    const text = regenerate()
    const required = ["Pb", "iAs", "tAs", "Sn", "Ni", "Cd", "Cr-VI", "Al", "tHg", "MeHg"]
    for (const a of required) {
      // Each analyte must have a row in the master limit table — look for "| Pb |" etc.
      assert.match(
        text,
        new RegExp(`\\| ${a.replace(/[.+*?^$()[\\]{}|]/g, "\\$&")} \\|`),
        `Master Limit Table is missing a row for ${a}. All ten HMTc-10 analytes must appear.`,
      )
    }
  })

  test("MeHg uses the four-anchor read-across (no silent 'no data' for the formula matrix)", { skip: !inputsReady }, () => {
    const text = regenerate()
    assert.match(
      text,
      /four-anchor read-across/i,
      "MeHg section must invoke the four-anchor read-across (empirical / analytical / regulatory / inferential). Silent 'no data' for the formula matrix is a quote-mineable gap.",
    )
    assert.match(
      text,
      /MeHg ≤ tHg by chemistry/i,
      "MeHg empirical anchor must explicitly state MeHg ≤ tHg by chemistry. This is the inequality that makes the read-across defensible for non-fish matrices.",
    )
  })
})
