import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { register, root, generatedFiles } from "./generate.mjs";
import { scaffoldRecord } from "./record-schema.mjs";
import {
  validateRegister,
  validateRecord,
  checkSections,
  validateAdoptedPage,
} from "./validate.mjs";
import { assessLegacyCoverage, PROFILE_METALS } from "./legacy-coverage.mjs";
const fresh = () => scaffoldRecord(register, "ingredient", "rice");
function reviewed(record, index = 0) {
  const a = record.answers[index];
  a.scope = Object.fromEntries(
    Object.keys(a.scope).map((k) => [k, "Explicit test-only scope"]),
  );
  a.workflow_state = "reviewed";
  a.evidence_state = "available";
  a.answer = "Test fixture conclusion, not scientific evidence.";
  a.search = {
    status: "complete",
    scope: "Fixture scope",
    protocol_ref: "fixture:protocol",
    record_refs: ["fixture:search"],
    screening_ref: "fixture:screening",
    searched_through: "2026-10-17",
    limitations: [],
    unresolved_access: [],
  };
  a.evidence_refs = ["fixture:source#table-1"];
  a.synthesis_refs = ["fixture:synthesis-v1"];
  a.applicability = "Test material only";
  a.limits_of_inference = "Does not apply outside the fixture.";
  a.certainty = {
    judgment: "low",
    method: "fixture-method",
    assessment_ref: "fixture:assessment",
    rationale: "Fixture limitations",
  };
  a.review = {
    kind: "ai",
    reviewer: "test fixture",
    date: "2026-10-17",
    record_ref: "fixture:review",
  };
  return a;
}
test("register has 108 uniquely owned required questions", () =>
  assert.deepEqual(validateRegister(register), []));
test("all families scaffold entirely unassessed without fabricated dates or confidence", () => {
  for (const family of Object.keys(register.families)) {
    const r = scaffoldRecord(register, family, "example");
    assert.equal(r.answers.length, 36);
    assert.deepEqual(validateRecord(r), []);
    assert.ok(
      r.answers.every(
        (a) =>
          a.search.searched_through === null &&
          a.review === null &&
          a.certainty.judgment === "not_assessed",
      ),
    );
  }
});
test("missing, duplicate, and cross-family questions cannot pass", () => {
  for (const mutate of [
    (r) => r.answers.pop(),
    (r) => (r.answers[1] = r.answers[0]),
    (r) => (r.answers[0].question_id = "HMI-PRD-001"),
  ]) {
    const r = fresh();
    mutate(r);
    assert.ok(validateRecord(r).length);
  }
});
test("complete cannot be inferred from populated content or unfinished questions", () => {
  const r = fresh();
  r.coverage_state = "complete";
  assert.ok(validateRecord(r).some((e) => e.includes("unfinished")));
});
test("reviewed answer must identify its actual scope and review", () => {
  const r = fresh();
  reviewed(r);
  assert.deepEqual(validateRecord(r), []);
  r.answers[0].review = null;
  assert.ok(validateRecord(r).some((e) => e.includes("actual review")));
  r.answers[0].scope.analytes = "unassessed";
  assert.ok(validateRecord(r).some((e) => e.includes("scope")));
});
test("gap cannot be manufactured from zero sources or unresolved access", () => {
  const r = fresh();
  const a = r.answers[0];
  a.evidence_state = "no_eligible_evidence";
  assert.ok(validateRecord(r).some((e) => e.includes("completed protocol")));
  reviewed(r);
  a.evidence_state = "no_eligible_evidence";
  a.evidence_refs = [];
  a.certainty = {
    judgment: "not_applicable",
    method: null,
    assessment_ref: null,
    rationale: "No eligible evidence to grade.",
  };
  assert.deepEqual(validateRecord(r), []);
  a.search.unresolved_access = ["fixture:missing-full-text"];
  assert.ok(validateRecord(r).some((e) => e.includes("unresolved access")));
});
test("not-applicable is reviewed scope reasoning, not an empty search shortcut", () => {
  const r = fresh();
  const a = reviewed(r);
  a.evidence_state = "not_applicable";
  a.search.status = "not_applicable";
  a.certainty = {
    judgment: "not_applicable",
    method: null,
    assessment_ref: null,
    rationale: "Scope decision, not an effect grade.",
  };
  assert.ok(validateRecord(r).some((e) => e.includes("scope rationale")));
  a.not_applicable_reason = "The fixture concerns a non-food use route.";
  assert.deepEqual(validateRecord(r), []);
});
test("high certainty cannot be assigned without an assessment", () => {
  const r = fresh();
  const a = reviewed(r);
  a.certainty = {
    judgment: "high",
    method: null,
    assessment_ref: null,
    rationale: null,
  };
  assert.ok(
    validateRecord(r).some((e) => e.includes("counts are not a grade")),
  );
});
test("stale answer reopens previously complete page", () => {
  const r = fresh();
  r.answers.forEach((_, i) => reviewed(r, i));
  r.coverage_state = "complete";
  assert.deepEqual(validateRecord(r), []);
  r.answers[5].workflow_state = "stale";
  assert.ok(validateRecord(r).some((e) => e.includes("stale")));
});
test("conflicting evidence is a valid complete disposition with review", () => {
  const r = fresh();
  r.answers.forEach((_, i) => reviewed(r, i));
  r.coverage_state = "complete";
  r.answers[4].evidence_state = "conflicting";
  assert.deepEqual(validateRecord(r), []);
});
test("invalid dates and empty scope values fail shape validation", () => {
  const r = fresh();
  r.answers[0].scope.basis = " ";
  assert.ok(validateRecord(r).length);
  const other = fresh();
  reviewed(other).review.date = "2026-02-31";
  assert.ok(validateRecord(other).length);
});
test("contract headings must be present, ordered and nonempty", () => {
  const sections = register.families.product.sections;
  const body = sections
    .map((s) => `## ${s.heading}\n\nScoped fixture answer.\n`)
    .join("\n");
  assert.deepEqual(checkSections(body, "product"), []);
  assert.ok(
    checkSections(body.replace("Scoped fixture answer.", ""), "product").length,
  );
  assert.ok(
    checkSections(
      sections
        .toReversed()
        .map((s) => `## ${s.heading}\nAnswer.\n`)
        .join(""),
      "product",
    ).length,
  );
  assert.ok(
    checkSections(body + `\n## ${sections[0].heading}\nDuplicate.\n`, "product")
      .length,
  );
});
test("mixed legacy analyte states are legitimate and malformed states still fail", () => {
  const profile = Object.fromEntries(
    PROFILE_METALS.map((m) => [m, { status: "pending" }]),
  );
  profile.Pb.status = "populated";
  assert.deepEqual(assessLegacyCoverage(profile, true), {
    bucket: "mixed_research_states",
    errors: [],
  });
  assert.ok(assessLegacyCoverage(profile, false).errors.length);
  profile.Cd.status = "invented";
  assert.ok(assessLegacyCoverage(profile, true).errors.length);
});
test("coverage sweeper never advances unassessed analytes or fabricates review dates", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-coverage-contract-"));
  try {
    fs.mkdirSync(path.join(tmp, "wiki/ingredients"), { recursive: true });
    const content =
      "---\ntype: ingredient\nupdated: 2020-01-01\ncontamination_profile:\n" +
      PROFILE_METALS.map(
        (m) =>
          `  ${m}:\n    status: ${m === "Pb" ? "populated" : "pending"}\n    typical_ppb: [null, null]\n    p95_ppb: null\n    confidence: null\n    n_studies: 0\n    last_reviewed: null\n`,
      ).join("") +
      "---\n# Example\n\n## Heavy metal contamination profile\n\nExisting table.\n";
    const file = path.join(tmp, "wiki/ingredients/example.md");
    fs.writeFileSync(file, content);
    execFileSync(
      process.execPath,
      [path.join(root, "tools/sweep-ingredient-coverage.mjs"), "--apply"],
      { cwd: tmp },
    );
    assert.equal(fs.readFileSync(file, "utf8"), content);
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});
test("adopted page cannot silently point to another page question record", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-adoption-contract-"));
  try {
    fs.mkdirSync(path.join(tmp, "data/evidence/contracts"), {
      recursive: true,
    });
    fs.writeFileSync(
      path.join(tmp, "data/evidence/contracts/adopted-pages.json"),
      JSON.stringify({
        contract_version: "1.0.0",
        pages: ["wiki/ingredients/rice.md"],
      }),
    );
    const rel = "data/evidence/questions/ingredient/rice.json";
    fs.mkdirSync(path.dirname(path.join(tmp, rel)), { recursive: true });
    fs.writeFileSync(path.join(tmp, rel), JSON.stringify(fresh()));
    const content =
      `---\ntype: ingredient\npage_contract_version: "1.0.0"\nquestion_record: ${rel}\n---\n` +
      register.families.ingredient.sections
        .map((s) => `## ${s.heading}\nExplicitly unassessed.\n`)
        .join("\n");
    assert.deepEqual(
      validateAdoptedPage(content, "wiki/ingredients/rice.md", register, tmp),
      [],
    );
    assert.ok(
      validateAdoptedPage(
        content,
        "wiki/ingredients/cocoa.md",
        register,
        tmp,
      ).some((e) => e.includes("another page")),
    );
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
});
test("generated documents and schema are synchronized", () => {
  for (const [file, content] of generatedFiles())
    assert.equal(fs.readFileSync(file, "utf8"), content, file);
});


test('subject-specific headings preserve contract roles while rejecting malformed overrides',()=>{
 const titles={summary:'Rice overview',identity:'Rice identity and scope'};
 const sections=register.families.ingredient.sections;
 const body=sections.map(s=>`## ${titles[s.id]||s.heading}\nScoped fixture answer.\n`).join('\n');
 assert.deepEqual(checkSections(body,'ingredient',register,titles),[]);
 assert.ok(checkSections(body,'ingredient').length>0);
 assert.ok(checkSections(body,'ingredient',register,{...titles,unknown:'Extra'}).length>0);
 assert.ok(checkSections(body,'ingredient',register,{...titles,summary:'Rice\nExtra'}).length>0);
});
