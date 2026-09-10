export function publicDataDownloads(value) {
  if (!Array.isArray(value)) return []
  return value.filter((entry) => entry && typeof entry.label === "string" && entry.label.trim() &&
    typeof entry.path === "string" && /^static\/data\/[a-z0-9][a-z0-9_-]*\.(?:csv|json)$/i.test(entry.path))
    .map(({ label, path }) => ({ label: label.trim(), path }))
}
