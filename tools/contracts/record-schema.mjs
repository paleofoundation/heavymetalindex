import { z } from "zod";
const text = z.string().trim().min(1);
const date = z.iso.date();
const scope = z.strictObject({
  analytes: text,
  material_form: text,
  basis: text,
  geography_market: text,
  period: text,
  stage: text,
  population_route: text,
  comparator_outcome: text,
});
const search = z.strictObject({
  status: z.enum([
    "not_started",
    "in_progress",
    "complete",
    "access_blocked",
    "not_applicable",
  ]),
  scope: text.nullable(),
  protocol_ref: text.nullable(),
  record_refs: z.array(text),
  screening_ref: text.nullable(),
  searched_through: date.nullable(),
  limitations: z.array(text),
  unresolved_access: z.array(text),
});
const certainty = z.strictObject({
  judgment: z.enum([
    "high",
    "moderate",
    "low",
    "very_low",
    "not_assessed",
    "not_applicable",
  ]),
  method: text.nullable(),
  assessment_ref: text.nullable(),
  rationale: text.nullable(),
});
const review = z.strictObject({
  kind: z.enum(["ai", "human", "combined"]),
  reviewer: text,
  date,
  record_ref: text,
});
const answer = z.strictObject({
  question_id: text,
  scope,
  workflow_state: z.enum([
    "unassessed",
    "searching",
    "access_blocked",
    "extracting",
    "assessing",
    "reviewed",
    "stale",
  ]),
  evidence_state: z.enum([
    "not_assessed",
    "available",
    "conflicting",
    "insufficient",
    "no_eligible_evidence",
    "inaccessible",
    "not_applicable",
  ]),
  answer: text.nullable(),
  search,
  evidence_refs: z.array(text),
  synthesis_refs: z.array(text),
  applicability: text.nullable(),
  limits_of_inference: text.nullable(),
  certainty,
  review: review.nullable(),
  not_applicable_reason: text.nullable(),
  revision: z.number().int().positive(),
  supersedes: z.number().int().positive().nullable(),
  dependent_pages: z.array(text),
});
export const PageQuestionRecord = z.strictObject({
  contract_version: z.literal("1.0.0"),
  family: z.enum(["metal", "ingredient", "product"]),
  page_slug: text,
  coverage_state: z.enum(["partial", "complete"]),
  answers: z.array(answer).min(1),
});
export function recordJSONSchema() {
  const schema = z.toJSONSchema(PageQuestionRecord);
  schema.title = "HMI page-question record v1.0.0";
  schema.description =
    "Structural schema. tools/contracts/validate.mjs additionally enforces register membership, search-gap, review, applicability, certainty and completeness invariants.";
  const a = schema.properties.answers.items;
  a.allOf = [
    {
      if: {
        properties: { workflow_state: { const: "reviewed" } },
        required: ["workflow_state"],
      },
      then: {
        properties: {
          answer: { type: "string", minLength: 1 },
          applicability: { type: "string", minLength: 1 },
          limits_of_inference: { type: "string", minLength: 1 },
          review: { type: "object" },
        },
      },
    },
    {
      if: {
        properties: { evidence_state: { const: "no_eligible_evidence" } },
        required: ["evidence_state"],
      },
      then: {
        properties: {
          evidence_refs: { maxItems: 0 },
          search: {
            properties: {
              status: { const: "complete" },
              unresolved_access: { maxItems: 0 },
              record_refs: { minItems: 1 },
              protocol_ref: { type: "string", minLength: 1 },
              screening_ref: { type: "string", minLength: 1 },
              searched_through: { type: "string", format: "date" },
            },
          },
        },
      },
    },
  ];
  return schema;
}
export function scaffoldRecord(register, family, slug) {
  if (!register.families[family]) throw Error(`Unknown family ${family}`);
  if (!/^[a-z0-9]+(?:[a-z0-9-]*[a-z0-9])?$/.test(slug))
    throw Error(
      "Use an existing lowercase page slug, without a path or extension.",
    );
  return {
    contract_version: register.contract_version,
    family,
    page_slug: `${register.families[family].directory.replace("wiki/", "")}/${slug}`,
    coverage_state: "partial",
    answers: register.questions
      .filter((q) => q.family === family)
      .map((q) => ({
        question_id: q.id,
        scope: Object.fromEntries(
          Object.keys(scope.shape).map((k) => [k, "unassessed"]),
        ),
        workflow_state: "unassessed",
        evidence_state: "not_assessed",
        answer: null,
        search: {
          status: "not_started",
          scope: null,
          protocol_ref: null,
          record_refs: [],
          screening_ref: null,
          searched_through: null,
          limitations: [],
          unresolved_access: [],
        },
        evidence_refs: [],
        synthesis_refs: [],
        applicability: null,
        limits_of_inference: null,
        certainty: {
          judgment: "not_assessed",
          method: null,
          assessment_ref: null,
          rationale: null,
        },
        review: null,
        not_applicable_reason: null,
        revision: 1,
        supersedes: null,
        dependent_pages: [],
      })),
  };
}
