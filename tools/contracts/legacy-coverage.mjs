export const PROFILE_METALS = [
  "Pb",
  "Cd",
  "iAs",
  "tAs",
  "tHg",
  "Ni",
  "Al",
  "Cr",
  "Sn",
  "U",
];
export function assessLegacyCoverage(profile, hasTable) {
  const errors = [];
  if (!profile || typeof profile !== "object")
    return {
      bucket: "schema_issue",
      errors: ["missing contamination_profile"],
    };
  const states = PROFILE_METALS.map((m) => profile[m]?.status);
  PROFILE_METALS.forEach((m, i) => {
    if (!["pending", "in_progress", "populated"].includes(states[i]))
      errors.push(`missing/invalid state: ${m}`);
  });
  const pending = states.filter((s) => s === "pending").length;
  const advanced = states.some((s) => s === "in_progress" || s === "populated");
  if (advanced && !hasTable)
    errors.push("missing body contamination-profile table");
  return {
    bucket:
      pending === 10
        ? "unassessed"
        : pending > 0
          ? "mixed_research_states"
          : "all_cells_started",
    errors,
  };
}
