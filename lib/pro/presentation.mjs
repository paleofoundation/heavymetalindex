export const escapeHtml = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export const numberText = (value) =>
  Number(value).toLocaleString("en-US", { maximumFractionDigits: 3 });
export const intervalText = (x) =>
  x.lower === x.upper
    ? numberText(x.lower)
    : `${numberText(x.lower)} to ${numberText(x.upper)}`;

export function resultText(input, output) {
  return {
    value:
      input.result_kind === "quantified"
        ? `${numberText(input.value)} ${input.unit}`
        : `Not quantified (below ${input.result_kind === "below_loq" ? "LOQ" : "LOD"}: ${numberText(input.result_kind === "below_loq" ? input.loq : input.lod)} ${input.unit})`,
    percentile: output.percentile
      ? `${intervalText(output.percentile)}%`
      : "Not assigned",
    quartile: output.quartile ? `Quartile ${output.quartile}` : "Not assigned",
    bounds:
      {
        in_bounds: "Within observed range",
        out_of_bounds: "Outside observed range",
        indeterminate: "Uncertain due to reporting bounds",
      }[output.bounds_flag] || "Not assigned",
  };
}
