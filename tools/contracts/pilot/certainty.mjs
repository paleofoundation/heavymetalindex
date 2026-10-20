export const domains = [
  "sampling_selection", "analytical_validity_censoring", "applicability",
  "consistency", "precision", "selective_reporting",
];
export const levels = ["very_low", "low", "moderate", "high"];
export const certaintyLabels = {
  high: "High", moderate: "Moderate", low: "Low", very_low: "Very low",
  not_assessed: "Not assessed", not_applicable: "Not applicable",
};
const filled = (x) => typeof x === "string" && x.trim().length > 0;

// This is assessment bookkeeping, not an automatic appraisal of a paper.
// Unresolved inputs never receive a default favorable judgment.
export function calculateCertainty(assessment, scopeKey, sourceFamilies, referenceExists = () => false) {
  const pending = (reasons) => ({ judgment: "not_assessed", reasons });
  if (!assessment) return pending([
    "Search and eligibility assessment are incomplete.",
    "Sampling, analytical validity, applicability, consistency, precision and selective reporting have not received a complete scoped appraisal.",
  ]);
  const reasons = [];
  if (assessment.scope_key !== scopeKey) reasons.push("The assessment does not match this finding's scope.");
  if (JSON.stringify([...(assessment.source_families || [])].sort()) !== JSON.stringify([...sourceFamilies].sort())) reasons.push("The included source families do not match this finding.");
  if (assessment.status !== "reviewed" || assessment.search_status !== "complete") reasons.push("Search, eligibility and review must be complete.");
  if (!filled(assessment.search_ref) || !filled(assessment.eligibility_ref)) reasons.push("Search execution and eligibility records are required.");
  if (assessment.method !== "hmi-occurrence-profile-v1" || !filled(assessment.method_ref)) reasons.push("A supported, documented occurrence appraisal method is required.");
  if (!filled(assessment.review?.reviewer) || !["ai", "human"].includes(assessment.review?.kind) || !/^\d{4}-\d{2}-\d{2}$/.test(assessment.review?.date || "") || !filled(assessment.review?.record_ref)) reasons.push("Review attribution and a dated review record are required.");
  if (!levels.includes(assessment.starting_level) || !filled(assessment.starting_rationale)) reasons.push("A justified starting certainty is required.");
  for (const domain of domains) {
    const d = assessment.domains?.[domain];
    if (!d || ![0, -1, -2].includes(d.change) || !filled(d.rationale) || !filled(d.evidence_ref)) reasons.push(`Unresolved appraisal: ${domain.replaceAll("_", " ")}.`);
  }
  const refs = [assessment.method_ref, assessment.search_ref, assessment.eligibility_ref, assessment.review?.record_ref, ...domains.map(d => assessment.domains?.[d]?.evidence_ref)];
  if (refs.some(ref => !filled(ref) || !referenceExists(ref))) reasons.push("Every method, search, eligibility, review and appraisal reference must resolve.");
  if (reasons.length) return pending(reasons);
  const change = domains.reduce((n, key) => n + assessment.domains[key].change, 0);
  return {
    judgment: levels[Math.max(0, levels.indexOf(assessment.starting_level) + change)],
    reasons: [assessment.starting_rationale, ...domains.map((key) => `${key.replaceAll("_", " ")}: ${assessment.domains[key].rationale} (${assessment.domains[key].change}).`)],
    method: assessment.method, method_ref: assessment.method_ref, review: assessment.review,
  };
}
