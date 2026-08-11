// Shared helpers for the mass-fetch app. normalizeDoi/normalizeTitle mirror
// tools/wishlist/find-candidates.mjs and tools/discovery/build-corpus-index.mjs
// so dedup keys stay byte-compatible with the corpus index.

export function normalizeDoi(doi) {
  return String(doi || "")
    .toLowerCase()
    .replace(/^https?:\/\/(dx\.)?doi\.org\//, "")
    .trim()
}

export function normalizeTitle(title) {
  return String(title || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
}

export function slugify(text, max = 60) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, max)
    .replace(/-+$/g, "")
}

// Filename minting follows the Manual Fetch Discovery convention
// (<author><year>-<title-slug>.pdf, e.g. afzal2024-camel-milk-heavy-metals.pdf).
// Honest minting: the author segment is used only when the source API actually
// returned an author surname; otherwise fall back to the DOI slug, then the
// bare title slug. Never fabricate an author.
export function mintFilename({ author, year, title, doi }) {
  const y = /^\d{4}$/.test(String(year)) ? String(year) : ""
  const surname = slugify(String(author || "").split(/[,\s]+/)[0], 24).replace(/-/g, "")
  const titleSlug = slugify(title, 60)
  if (surname && y && titleSlug) return `${surname}${y}-${titleSlug}.pdf`
  const doiSlug = slugify(normalizeDoi(doi), 60)
  if (doiSlug && y) return `doi-${y}-${doiSlug}.pdf`
  if (doiSlug) return `doi-${doiSlug}.pdf`
  if (titleSlug) return `${y ? y + "-" : ""}${titleSlug}.pdf`
  return `untitled-${Date.now()}.pdf`
}

export function formatBytes(n) {
  if (n > 1024 * 1024) return `${(n / 1024 / 1024).toFixed(1)} MB`
  if (n > 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${n} B`
}

export function csvCell(value) {
  const text = value === null || value === undefined ? "" : String(value)
  if (/[",\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`
  return text
}

export function toCsv(rows, columns) {
  const lines = [columns.join(",")]
  for (const row of rows) lines.push(columns.map((c) => csvCell(row[c])).join(","))
  return lines.join("\n") + "\n"
}

export const USER_AGENT =
  "HeavyMetalIndex/0.1 (https://heavymetalindex.com; karen@paleofoundation.com)"

export function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

// fetch with a hard deadline; returns the Response or throws.
export async function fetchWithTimeout(url, options = {}, timeoutMs = 20000) {
  return Promise.race([
    fetch(url, { headers: { "User-Agent": USER_AGENT }, ...options }),
    new Promise((_, rej) => setTimeout(() => rej(new Error("hard-timeout")), timeoutMs)),
  ])
}
