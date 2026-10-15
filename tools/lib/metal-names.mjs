// Shared by the ingredient generator and Quartz rendering. Species stay distinct.
export const METAL_NAMES = Object.freeze({
  Pb: "lead",
  Cd: "cadmium",
  iAs: "inorganic arsenic",
  tAs: "total arsenic",
  As: "arsenic",
  Hg: "mercury",
  tHg: "total mercury",
  MeHg: "methylmercury",
  Ni: "nickel",
  Al: "aluminum",
  "Cr-VI": "hexavalent chromium",
  Cr: "chromium",
  Sn: "tin",
  U: "uranium",
})

export function metalLabel(symbol) {
  const name = METAL_NAMES[symbol]
  return name
    ? `${name.charAt(0).toUpperCase()}${name.slice(1)} (${symbol})`
    : symbol
}

export function metalSymbol(label) {
  const text = String(label ?? "").trim()
  if (Object.hasOwn(METAL_NAMES, text)) return text
  const symbol = text.match(/\(([^)]+)\)$/)?.[1]
  return symbol &&
    Object.hasOwn(METAL_NAMES, symbol) &&
    text.toLowerCase() === metalLabel(symbol).toLowerCase()
    ? symbol
    : undefined
}

const SYMBOLS = Object.keys(METAL_NAMES)
  .sort((a, b) => b.length - a.length)
  .join("|")
const TOKEN = new RegExp(
  `(?<![\\p{L}\\p{N}_])(\\(\\s*)?(${SYMBOLS})(\\s*\\))?(?![\\p{L}\\p{N}_])`,
  "gu",
)
const URL = /(?:https?:\/\/|www\.|mailto:)[^\s<>]+/g
const ENGLISH_AS =
  /^\s+(?:a|an|the|this|that|these|those|it|they|we|you|with|for|in|of|from|at|by|expected|shown|noted|reported|above|below|discussed|described|previously|part|observed)\b/i

// Text only. Callers exclude code, formulas, URLs, and non-label table cells.
// A seen set is shared across prose nodes, and is fresh for each metadata field.
export function expandMetalSymbols(value, seen = new Set(), preceding = "") {
  const text = String(value ?? "")
  const urls = Array.from(text.matchAll(URL), (m) => [
    m.index,
    m.index + m[0].length,
  ])
  return text.replace(TOKEN, (match, open, symbol, close, offset) => {
    const before = preceding + text.slice(0, offset)
    const after = text.slice(offset + match.length)
    if (urls.some(([start, end]) => offset >= start && offset < end))
      return match
    // Ionic charges, molecular groups, and isotope/chemical notation are literal.
    if (
      /^[+\-\u2212\u207a\u207b\u2080-\u2089\u2070-\u2079]/u.test(after) ||
      /^\((?:[A-Z][A-Za-z\d]*|[IVX]+)\)\d*/.test(after) ||
      /[\p{L}\p{N}][+\-]$/u.test(before) ||
      /[\u2080-\u2089\u2070-\u2079]$/u.test(before)
    )
      return match
    if (symbol === "U" && /^\.[A-Z]\./.test(after)) return match
    if (symbol === "As" && ENGLISH_AS.test(after)) return match
    const name = METAL_NAMES[symbol]
    // Already named occurrences count as introductions and remain idempotent.
    const named = new RegExp(`\\b${name}\\s*\\(?\\s*$`, "i").test(before)
    if (named) {
      seen.add(symbol)
      return match
    }
    if (seen.has(symbol)) return match
    if (Boolean(open) !== Boolean(close)) return match
    seen.add(symbol)
    return `${name} (${symbol})`
  })
}

export function expandCitationShorthand(value) {
  return String(value ?? "").replace(
    new RegExp(`\\bEFSA\\s+(${SYMBOLS})\\s+((?:19|20)\\d{2})\\b`, "g"),
    (_match, symbol, year) => `EFSA ${year} ${METAL_NAMES[symbol]} opinion`,
  )
}

export function plainMetalText(value, seen = new Set(), preceding = "") {
  return expandMetalSymbols(expandCitationShorthand(value), seen, preceding)
}
