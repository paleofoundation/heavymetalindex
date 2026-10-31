export function buildDate(): Date {
  const v = process.env.HMI_BUILD_DATE
  if (!v) return new Date()
  const d = new Date(/^\d{4}-\d{2}-\d{2}$/.test(v) ? `${v}T12:00:00Z` : v)
  if (Number.isNaN(d.getTime())) throw new Error(`Invalid HMI_BUILD_DATE: ${v}`)
  return d
}
