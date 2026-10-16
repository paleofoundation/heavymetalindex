import { METAL_NAMES, plainMetalText } from "./metal-names.mjs"
import { normalizeTitle } from "./search-snippet.mjs"

const PRIORITY = [
  "Pb",
  "Cd",
  "iAs",
  "tAs",
  "Hg",
  "tHg",
  "MeHg",
  "Ni",
  "Al",
  "Cr-VI",
  "Cr",
  "Sn",
  "U",
  "As",
]
const DETAIL_PRIORITY = [
  "iAs",
  ...PRIORITY.filter((symbol) => symbol !== "iAs"),
]
const list = (names) =>
  names.length < 2
    ? (names[0] ?? "")
    : `${names.slice(0, -1).join(", ")} and ${names.at(-1)}`

// A source count, reporting limit or upper-tail statistic is not a typical range.
function measuredRange(cell) {
  if (
    cell?.status !== "populated" ||
    (cell.value_kind && cell.value_kind !== "measured")
  )
    return null
  const range = cell.typical_ppb
  if (
    !Array.isArray(range) ||
    range.length !== 2 ||
    !range.every(
      (value) =>
        typeof value === "number" && Number.isFinite(value) && value >= 0,
    ) ||
    range[1] < range[0] ||
    range[1] === 0
  )
    return null
  return range
}

export function keyFacts(frontmatter = {}, slug = "", linkedRegulations = []) {
  if (
    !/^(?:ingredients|products)\/[^/]+$/.test(slug) ||
    slug.endsWith("/index") ||
    !["ingredient", "product", "product-category"].includes(
      String(frontmatter.type),
    )
  )
    return []
  const title = normalizeTitle(plainMetalText(frontmatter.title ?? "")).replace(
    /^heavy metals? in\s+/i,
    "",
  )
  if (!title) return []
  const profile = frontmatter.contamination_profile ?? {}
  const pendingPage =
    frontmatter.evidence_tier === "pending" ||
    frontmatter.status === "tier1-stub"
  const measured = pendingPage
    ? []
    : PRIORITY.filter((symbol) => measuredRange(profile[symbol]))
  const missing = PRIORITY.filter(
    (symbol) =>
      profile[symbol] &&
      !measured.includes(symbol) &&
      profile[symbol].value_kind !== "source_non_detect",
  )
  const nonDetect = PRIORITY.some(
    (symbol) => profile[symbol]?.value_kind === "source_non_detect",
  )
  const sentences = []
  if (measured.length) {
    sentences.push(
      `${title} can contain ${list(measured.slice(0, 3).map((symbol) => METAL_NAMES[symbol]))}.`,
    )
    const symbol = DETAIL_PRIORITY.find((symbol) => measured.includes(symbol))
    const cell = profile[symbol]
    const [low, high] = measuredRange(cell)
    const studies =
      typeof cell.n_studies === "number" &&
      Number.isInteger(cell.n_studies) &&
      cell.n_studies > 0
        ? `, based on ${cell.n_studies} ${cell.n_studies === 1 ? "study" : "studies"}`
        : ""
    const basis =
      typeof cell.basis === "string" && cell.basis.trim()
        ? ` on a ${normalizeTitle(cell.basis).replace(/_/g, " ")} basis`
        : ""
    sentences.push(
      `Typical ${METAL_NAMES[symbol]} is ${low === high ? low : `${low} to ${high}`} ppb (parts per billion)${basis}${studies}.`,
    )
    if (missing.length)
      sentences.push(
        `For ${list(missing.slice(0, 3).map((symbol) => METAL_NAMES[symbol]))}, there is no published data yet for a typical range in the summary profile.`,
      )
    else if (nonDetect)
      sentences.push(
        "Reported non-detects do not establish a typical concentration or absence.",
      )
  } else {
    const metals = missing.length
      ? `typical ${list(missing.slice(0, 3).map((symbol) => METAL_NAMES[symbol]))} concentrations`
      : "typical heavy metal concentrations"
    sentences.push(
      nonDetect && !missing.length
        ? `${title} has no quantified typical heavy metal concentrations in the summary profile.`
        : `${title}: no published data yet for ${metals} in the summary profile.`,
    )
    // Linked instrument metadata names analytes, never occurrence or numeric limits.
    const regulationMetals = new Set(
      linkedRegulations.flatMap((fm) => [
        fm.metal,
        ...(Array.isArray(fm.metals) ? fm.metals : []),
      ]),
    )
    const names = PRIORITY.filter((symbol) => regulationMetals.has(symbol))
      .slice(0, 3)
      .map((symbol) => METAL_NAMES[symbol])
    if (names.length)
      sentences.push(`Linked regulations address ${list(names)}.`)
    sentences.push(
      nonDetect
        ? "Reported non-detects do not establish absence; see the cited evidence below."
        : "Compare individual cited measurements below only when product form, measurement basis and metal species match.",
    )
  }
  return sentences
}
