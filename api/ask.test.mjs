import assert from "node:assert/strict";
import test from "node:test";

import handler from "./ask.js";

delete process.env.OPENAI_API_KEY;

async function ask(
  question,
  { verb = "explain", role = "standards", pageSlug = "" } = {},
) {
  const req = {
    method: "POST",
    headers: { host: "127.0.0.1:9", "x-forwarded-proto": "http" },
    body: { question, verb, role, pageSlug },
  };
  const res = {
    headers: {},
    setHeader(name, value) {
      this.headers[name] = value;
    },
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(data) {
      this.body = data;
      return this;
    },
    end() {
      return this;
    },
  };

  await handler(req, res);
  assert.equal(res.statusCode, 200);
  return res.body;
}

test("cocoa nickel average is reported as a public evidence gap, not contact-material regulation", async () => {
  const body = await ask("what is the average amount of nickel in cocoa");

  assert.equal(body.status, "limited");
  assert.match(body.direct_answer, /No cocoa-specific average nickel value/i);
  assert.match(body.answer, /cocoa-specific average nickel/i);
  assert.doesNotMatch(body.answer, /piercing post/i);
  assert.ok(
    body.citations.some((citation) => citation.slug === "ingredients/cocoa"),
  );
  assert.ok(
    body.citations.some((citation) => citation.slug === "metals/nickel"),
  );
  assert.ok(body.pages.some((page) => page.slug === "ingredients/cocoa"));
  assert.ok(body.follow_up_questions.length >= 3);
  assert.equal(
    body.evidence_gap.evidence_type_needed,
    "occurrence_distribution",
  );
  assert.match(body.evidence_gap.claim_needed, /Cocoa.*Nickel/i);
  assert.ok(
    body.evidence_gap.suggested_source_slots.some((slot) =>
      /Occurrence dataset/i.test(slot),
    ),
  );
});

test("food contamination ranking uses structured FDA TDS food-metal rows", async () => {
  const body = await ask("Which foods are the most contaminated?");

  assert.equal(body.status, "limited");
  assert.match(
    body.answer,
    /Oat ring cereal \/ Nickel: p90 3,040 ppb equivalent/,
  );
  assert.match(
    body.answer,
    /Fish sticks or patties \/ Arsenic \(total\): p90 810 ppb equivalent/,
  );
  assert.ok(
    body.citations.some(
      (citation) =>
        citation.title === "Oat ring cereal — Nickel occurrence summary",
    ),
  );
});

test("metal coverage question returns page-mention coverage rather than generic retrieval fallback", async () => {
  const body = await ask("What metals are covered the most?");

  assert.equal(body.status, "supported");
  assert.match(body.answer, /most-covered metal pages/i);
  assert.match(body.answer, /public pages/);
  assert.ok(
    body.citations.some((citation) => citation.slug === "metals/index"),
  );
});

test("nickel country regulation question refuses to infer a country list from outside the wiki", async () => {
  const body = await ask("What countries currently regulate nickel?");

  assert.equal(body.status, "limited");
  assert.match(
    body.direct_answer,
    /not a current country-by-country nickel regulation list/i,
  );
  assert.match(body.answer, /EU-level nickel material/);
  assert.ok(
    body.citations.some(
      (citation) =>
        citation.slug === "regulations/eu-nickel-directive-94-27-ec",
    ),
  );
});

test("public cocoa remediation guidance gives prose, pages, citations, and follow-ups", async () => {
  const body = await ask(
    "How do we remediate cocoa contamination and choose better suppliers?",
    { role: "supplier" },
  );

  assert.equal(body.status, "limited");
  assert.match(body.answer, /supplier evidence/i);
  assert.match(body.answer, /COA\/evidence packet/i);
  assert.doesNotMatch(body.status, /private_mode_required/);
  assert.ok(
    body.citations.some((citation) => citation.slug === "ingredients/cocoa"),
  );
  assert.ok(
    body.citations.some(
      (citation) =>
        citation.slug === "supply-chain/ingredient-supplier-evidence-workflow",
    ),
  );
  assert.ok(
    body.pages.some(
      (page) =>
        page.slug === "supply-chain/ingredient-supplier-evidence-workflow",
    ),
  );
  assert.ok(body.follow_up_questions.some((prompt) => /cocoa/i.test(prompt)));
  assert.equal(
    body.evidence_gap.evidence_type_needed,
    "mitigation_intervention",
  );
  assert.equal(body.evidence_gap.priority, "high");
  assert.match(body.evidence_gap.claim_needed, /mitigation|remediation/i);
});

test("public additive question refuses unsupported additive cleanup and cites detoxification boundary", async () => {
  const body = await ask(
    "Are there specific additives I can use to reduce contamination exposure in my product?",
    { role: "brand" },
  );

  assert.equal(body.status, "limited");
  assert.match(body.answer, /does not support naming a specific additive/i);
  assert.match(body.answer, /chemical detoxification/i);
  assert.ok(
    body.citations.some(
      (citation) =>
        citation.slug === "regulations/eu2023-contaminants-maximum-levels",
    ),
  );
  assert.ok(body.follow_up_questions.length >= 3);
  assert.equal(
    body.evidence_gap.evidence_type_needed,
    "additive_or_bioaccessibility_intervention",
  );
  assert.match(body.evidence_gap.claim_needed, /additives|formulation/i);
  assert.ok(
    body.evidence_gap.suggested_source_slots.some((slot) =>
      /bioaccessibility|detoxification/i.test(slot),
    ),
  );
});

test("supported normal range answer does not create an evidence gap record", async () => {
  const body = await ask(
    "what is a normal amount of contamination in chocolate cake",
  );

  assert.equal(body.status, "supported");
  assert.equal(body.evidence_gap, null);
  assert.ok(
    body.pages.some((page) => page.slug === "ingredients/chocolate-cake"),
  );
});
