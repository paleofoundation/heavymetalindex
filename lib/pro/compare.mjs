import { z } from "zod";

export const ENGINE_VERSION = "hmi-pro-compare-1";
const finite = z.number().finite().min(0).max(1e11);
export const labInput = z
  .object({
    id: z.uuid(),
    ingredient_slug: z.enum(["rice-protein", "pea-protein"]),
    reference_id: z.string().min(1).max(300),
    analyte: z.string().min(1).max(10),
    lot: z.string().trim().min(1).max(120),
    lab: z.string().trim().min(1).max(200),
    sample_date: z.iso.date(),
    value: finite.nullable(),
    unit: z.enum(["ppb", "ppm", "ug/kg", "µg/kg", "mg/kg"]),
    basis: z.enum(["dry", "native", "cooked"]),
    result_kind: z.enum(["quantified", "below_lod", "below_loq"]),
    moisture_percent: finite.lt(100).nullable().default(null),
    lod: finite.nullable().default(null),
    loq: finite.nullable().default(null),
  })
  .strict()
  .superRefine((x, ctx) => {
    const issue = (message) => ctx.addIssue({ code: "custom", message });
    if (x.lod !== null && x.loq !== null && x.lod > x.loq)
      issue("LOD must not exceed LOQ.");
    if (
      x.result_kind === "quantified" &&
      (x.value === null ||
        (x.loq !== null && x.value < x.loq) ||
        (x.lod !== null && x.value < x.lod))
    )
      issue(
        "A quantified value must meet the reported LOD and LOQ. Choose not quantified for a result below LOQ.",
      );
    if (x.result_kind !== "quantified" && x.value !== null)
      issue("A result below a reporting limit has no quantified value.");
    if (x.result_kind === "below_lod" && x.lod === null)
      issue("Enter the LOD for this result.");
    if (x.result_kind === "below_loq" && x.loq === null)
      issue("Enter the LOQ for this result.");
  });

export function normalize(input, reference) {
  let factor = ["ppm", "mg/kg"].includes(input.unit) ? 1000 : 1;
  const steps = [`${input.unit} to ug/kg: multiply by ${factor}.`];
  if (input.basis !== reference.basis) {
    if (input.basis === "cooked" || reference.basis === "cooked")
      return {
        error:
          "Cooked and uncooked material cannot be matched by moisture alone.",
      };
    if (input.moisture_percent === null)
      return {
        error:
          "Measured native-sample moisture is required to match dry and native bases.",
      };
    const solids = 1 - input.moisture_percent / 100;
    factor *= input.basis === "dry" ? solids : 1 / solids;
    steps.push(
      `Converted ${input.basis} to ${reference.basis} using native-sample moisture of ${input.moisture_percent}%.`,
    );
  }
  return {
    value: input.value === null ? null : input.value * factor,
    lod: input.lod === null ? null : input.lod * factor,
    loq: input.loq === null ? null : input.loq * factor,
    unit: "ug/kg",
    basis: reference.basis,
    steps,
  };
}

// Weighted empirical midrank. Interval-censored members yield rank bounds.
// This ranks the committed reference units; it is not a population percentile.
export function percentileBounds(value, members) {
  let lower = 0,
    upper = 0,
    total = 0;
  for (const m of members) {
    total += m.weight;
    if (m.lower === m.upper) {
      const rank = m.lower < value ? 1 : m.lower === value ? 0.5 : 0;
      lower += rank * m.weight;
      upper += rank * m.weight;
    } else {
      if (m.upper < value) lower += m.weight;
      if (m.lower <= value) upper += m.weight;
    }
  }
  const round = (x) => Math.round((x / total) * 10000) / 100;
  return {
    lower: round(lower),
    upper: round(upper),
    method:
      "Weighted empirical midrank of committed reference units; censoring bounds retained.",
  };
}

export function compare(input, data) {
  const ref = data.references.find(
    (r) =>
      r.reference_id === input.reference_id &&
      r.analyte === input.analyte &&
      r.ingredient_slug === input.ingredient_slug,
  );
  if (!ref)
    throw new Error("Choose a matching analyte and committed reference.");
  const result = {
    engine_version: ENGINE_VERSION,
    reference_id: ref.reference_id,
    reference_sha256: data.sha256,
    source_ids: ref.sources.map((s) => s.source_id),
    sources: ref.sources,
    reference: { ...ref, members: undefined },
    normalized: null,
    percentile: null,
    quartile: null,
    bounds_flag: null,
    status: "unavailable",
    message: "",
    limitations: ref.limitations,
  };
  if (input.result_kind !== "quantified")
    return {
      ...result,
      status: "not_quantified",
      message:
        "Not quantified. No percentile, quartile or in-bounds decision is assigned.",
    };
  const normalized = normalize(input, ref);
  if (normalized.error)
    return { ...result, status: "basis_mismatch", message: normalized.error };
  result.normalized = normalized;
  if (!ref.eligible)
    return {
      ...result,
      status: "insufficient_reference",
      message:
        "The committed reference is below its display minimum. This result is saved without a percentile or quartile.",
    };
  const value = normalized.value;
  const cuts = [ref.quartiles.q1, ref.median, ref.quartiles.q3];
  const quartileAt = (bound) => 1 + cuts.filter((c) => value > c[bound]).length;
  const low = quartileAt("upper"),
    high = quartileAt("lower");
  const minLower = Math.min(...ref.members.map((m) => m.lower)),
    minUpper = Math.min(...ref.members.map((m) => m.upper));
  const maxLower = Math.max(...ref.members.map((m) => m.lower)),
    maxUpper = Math.max(...ref.members.map((m) => m.upper));
  const flag =
    value < minLower || value > maxUpper
      ? "out_of_bounds"
      : value >= minUpper && value <= maxLower
        ? "in_bounds"
        : "indeterminate";
  return {
    ...result,
    status: "compared",
    message:
      "Position among the cited reference units. This is not a safety rating or a compliance decision.",
    percentile: percentileBounds(value, ref.members),
    quartile: low === high ? low : null,
    bounds_flag: flag,
    bounds_description:
      "Bounds are the observed reference range, including reporting-limit intervals.",
  };
}
