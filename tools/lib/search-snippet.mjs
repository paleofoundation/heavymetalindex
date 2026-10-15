import { METAL_NAMES, plainMetalText } from "./metal-names.mjs"

// HTML titles and meta descriptions for search snippets.
//
// Metal pages store a one-word `title` (the on-page heading). The document
// title is a complete phrase from a fixed template, and the meta description
// is one or more whole Overview sentences. A shortfall is filled with a
// sentence built from the page's name and whatever complete sentence the
// Overview actually yielded. Every other document title is capped at a word
// boundary. Em dashes and en dashes are rewritten before the cap.

export const HTML_TITLE_MAX = 70
export const META_DESCRIPTION_MIN = 120
export const META_DESCRIPTION_MAX = 160

const BRAND_SUFFIX = " | Heavy Metal Index"
const ELEMENT_TAIL = " in Food: Sources, Limits and Evidence"
const FORM_TAIL = " in Food: Form and Evidence"
const TOTAL_TAIL = " in Food: Measurement and Evidence"

const FORM_SYMBOLS = new Set(["iAs", "MeHg", "Cr-VI"])
const TOTAL_SYMBOLS = new Set(["tAs", "tHg"])

const TRAILING = new Set([
  "a", "an", "the", "of", "on", "in", "to", "for", "and", "or", "with", "from",
  "by", "as", "at", "into", "over", "via", "its", "their", "that", "which",
  "whose", "than", "per", "between", "this", "these", "those", "is", "are",
  "was", "were", "be", "been", "has", "have", "had", "where", "when", "while",
  "because", "although", "within", "under", "about", "across", "after",
  "before", "during", "without", "including", "particularly", "primarily",
])

const MONTHS = new Set([
  "january", "february", "march", "april", "may", "june", "july", "august",
  "september", "october", "november", "december",
])

const CHEMICAL_SYMBOL = /^(?:[A-Z][a-z]?|iAs|tAs|tHg|MeHg|Cr-VI)$/

const PROCESS = /\b(?:this node|source-map|essentials chapter|this page draws|the index nevertheless|does not provide a (?:detailed|dedicated)|attaches?\b.{0,80}\bto the wiki|species pages|cross-metal context|not a food occurrence dataset)\b/i

const VERB = /\b(?:is|are|was|were|has|have|had|denotes|splits|occurs|occur|enters|enter|produces|produce|covers|forms|form|dominates|treats|treat|includes|include|remains|carries|carry|means|binds|crosses|accumulates|describes|listed|named|found|sets|reports|classifies|established)\b/i

const PRONOUN_START = /^(?:it|this|these|those|they|that|such|both|which|whose)\b/i

function normalizeSpaces(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim()
}

// Spaced dashes become a colon. A numeric range becomes "to" so the endpoints
// stay a range. No em dash or en dash remains.
function replaceDashes(value) {
  let text = String(value ?? "")
  text = text.replace(/(\d)\s*[—–]\s*(\d)/g, "$1 to $2")
  text = text.replace(/\s*[—–]\s*/g, ": ")
  text = text.replace(/[—–]/g, ": ")
  return text
}

function tidy(value) {
  let text = replaceDashes(value)
  text = text.replace(/\(\s*(?:,\s*)*\)/g, " ")
  text = text.replace(/\s+,/g, ",")
  text = text.replace(/(?:,\s*){2,}/g, ", ")
  text = text.replace(/\s+([,.;:])/g, "$1")
  text = text.replace(/:\s{2,}/g, ": ")
  text = text.replace(/^\s*[,;:]+\s*/, "")
  text = normalizeSpaces(text)
  return text
}

function stripMarkup(value) {
  let text = String(value ?? "")
  text = text.replace(/<!--[\s\S]*?-->/g, " ")
  text = text.replace(/\[\[(?:sources|regulations)\/[^\]|]*\|[^\]]+\]\]/g, " ")
  text = text.replace(/\[\[(?:sources|regulations)\/[^\]]+\]\]/g, " ")
  text = text.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
  text = text.replace(/\[\[([^\]]+)\]\]/g, (_, target) => {
    const leaf = String(target).split("#")[0].split("/").filter(Boolean).pop() || target
    return String(leaf).replace(/-/g, " ")
  })
  text = text.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
  text = text.replace(/`([^`]*)`/g, "$1")
  text = text.replace(/[*_]+/g, "")
  text = text.replace(/\[(?:\d+\s*(?:[,–—-]\s*\d+)*)\]/g, " ")
  return text
}

function stripAuthorYear(value) {
  let text = String(value ?? "")
  text = text.replace(/\s*\((?:[^()]|\([^()]*\))*\b(?:19|20)\d{2}\b(?:[^()]|\([^()]*\))*\)/g, " ")
  text = text.replace(
    /\b([A-Z][a-z'’.-]{1,})(?:\s+(?:&|and)\s+[A-Z][a-z'’.-]{1,})?(?:\s+et al\.)?,?\s+(?:19|20)\d{2}[a-z]?\b/g,
    (match, name) => (MONTHS.has(String(name).toLowerCase()) ? match : " "),
  )
  text = text.replace(/\b[A-Z]{2,}(?:\s*[/&]\s*[A-Z]{2,})?\s+(?:19|20)\d{2}[a-z]?\b/g, " ")
  return text
}

function repairCitationGap(value) {
  let text = String(value ?? "")
  text = text.replace(/\bnamed\s+by\s+(?=in\b)/gi, "named ")
  text = text.replace(/\b(?:listed|named|cited|described|reported|reviewed|supported)\s+by\b/gi, "")
  text = text.replace(/\b(?:by|from)\s+(?=among\b|in\b|as\b|for\b|through\b|on\b)/gi, "")
  text = text.replace(/\bchapter-level\s+/gi, "")
  text = text.replace(/\s+to this wiki\b/gi, "")
  text = text.replace(/,?\s*so this node is source-map context only\.?/gi, "")
  text = text.replace(/\.\s*This node is source-map context only\.?/gi, ".")
  return text
}

function dropLongParentheticals(value) {
  let text = String(value ?? "")
  let out = ""
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== "(") {
      out += text[i]
      continue
    }
    let depth = 0
    let j = i
    for (; j < text.length; j++) {
      if (text[j] === "(") depth++
      else if (text[j] === ")") {
        depth--
        if (depth === 0) {
          j++
          break
        }
      }
    }
    const inner = text.slice(i, j)
    if (inner.length >= 24) {
      i = j - 1
      continue
    }
    out += inner
    i = j - 1
  }
  return tidy(out)
}

function indexAtDepth(text, marker) {
  let depth = 0
  for (let i = 0; i <= text.length - marker.length; i++) {
    const ch = text[i]
    if (ch === "(") depth++
    else if (ch === ")") depth = Math.max(0, depth - 1)
    else if (depth === 0 && text.startsWith(marker, i)) return i
  }
  return -1
}

// When a lead sentence is longer than the description budget, keep its main
// clause (the part before a colon or a trailing relative clause) and finish
// it as its own sentence. The elaboration after that boundary stays out.
function clauseOk(clause) {
  if (!clause || !VERB.test(clause) || PRONOUN_START.test(clause)) return false
  if (TRAILING.has(lastWordKey(clause.replace(/[.!?]+$/, "")))) return false
  return acceptableSentence(clause)
}

function leadClause(sentence) {
  const stripped = withTerminalPeriod(dropLongParentheticals(sentence))
  const body = sentence.replace(/[.!?]+$/g, "")
  const cuts = []
  for (const marker of [": ", "; ", ", where ", ", which ", ", in which ", ", whose ", ", but ", ", and ", " through "]) {
    const at = indexAtDepth(body, marker)
    if (at >= 40) cuts.push(at)
  }
  const comma = indexAtDepth(body, ", ")
  if (comma >= 80) cuts.push(comma)
  let best = clauseOk(stripped) ? stripped : ""
  for (const at of cuts) {
    const clause = withTerminalPeriod(body.slice(0, at))
    if (!clauseOk(clause)) continue
    if (clause.length > best.length) best = clause
  }
  return best
}

function lastWordKey(value) {
  const parts = String(value).trim().split(" ")
  return (parts[parts.length - 1] || "").toLowerCase().replace(/[^a-z0-9-]/g, "")
}

function trimTrail(value, floor) {
  let chunk = String(value).replace(/[\s,;:]+$/g, "")
  for (let i = 0; i < 6; i++) {
    const parts = chunk.split(" ")
    if (parts.length <= 3) break
    const last = lastWordKey(chunk)
    const shorter = parts.slice(0, -1).join(" ").replace(/[\s,;:]+$/g, "")
    const dropShort = last.length > 0 && last.length <= 2 && last === last.toLowerCase() && !/\d/.test(last)
    if ((TRAILING.has(last) || dropShort) && shorter.length >= floor) {
      chunk = shorter
      continue
    }
    break
  }
  return chunk.replace(/[\s,;:]+$/g, "")
}

function unmatchedParenCut(value) {
  const opens = (value.match(/\(/g) || []).length
  const closes = (value.match(/\)/g) || []).length
  if (opens <= closes) return value
  const idx = value.lastIndexOf("(")
  if (idx >= 24) return value.slice(0, idx).replace(/[\s,;:]+$/g, "")
  return value
}

export function normalizeTitle(title) {
  const text = tidy(title)
  if (!text) return text
  return unmatchedParenCut(text)
}

export function capHtmlTitle(title, max = HTML_TITLE_MAX) {
  let text = normalizeTitle(title)
  if (!text) return text
  if (text.length <= max) return text
  let cut = text.lastIndexOf(" ", max)
  if (cut < 40) {
    text = text.slice(0, max).replace(/[\s,;:]+$/g, "")
    return trimTrail(unmatchedParenCut(text), 24)
  }
  text = text.slice(0, cut).replace(/[\s,;:]+$/g, "")
  text = unmatchedParenCut(text)
  return trimTrail(text, 45)
}

// Source search titles describe the topic, while citation_title retains the
// complete bibliographic title. Keep the first author's supplied spelling.
function sourceTitleCandidate(frontmatter = {}, preserveTopic = false) {
  if (frontmatter.type !== "source") return undefined
  const authors = Array.isArray(frontmatter.authors)
    ? frontmatter.authors
    : [frontmatter.authors]
  const author = authors
    .find(
      (value) =>
        typeof value === "string" &&
        value.trim() &&
        !/^(?:unknown(?:\s+authors?)?|authors?|not\s+(?:mechanically\s+)?resolved|tbd|n\/a|null|undefined)$/i.test(
          value.trim(),
        ),
    )
    ?.trim()
  const year = String(frontmatter.year ?? "").trim()
  const plainTopic = normalizeTitle(
    plainMetalText(
      String(
        (preserveTopic ? frontmatter.title : frontmatter.search_topic ?? frontmatter.topic ?? frontmatter.title) ?? "",
      ),
    ),
  )
  const topic = plainTopic.replace(/\s*\(([^()]+)\)/g, (match, symbol) =>
    METAL_NAMES[symbol] ? "" : match,
  ).replace(/^./, (letter) => letter.toUpperCase())
  if (!topic || !author || !/^(?:18|19|20)\d{2}$/.test(year)) return undefined
  const attribution = `: ${normalizeTitle(author)} ${year}`
  const budget = HTML_TITLE_MAX - attribution.length
  if (preserveTopic || topic.length <= budget) return topic + attribution

  // A subtitle or a trailing prepositional qualifier gives a complete topic
  // phrase. Never slice words to fill the remaining character budget.
  const mainPhrase = topic.split(/[:;]|\s+-\s+/)[0]
  const candidates = [mainPhrase]
  const qualifier =
    /\s+(?:in|on|from|using|with|among|through|during|after|for|at)\s+/gi
  for (const match of mainPhrase.matchAll(qualifier))
    candidates.push(mainPhrase.slice(0, match.index))
  const complete = candidates
    .map((value) => value.trim().replace(/[,;:]+$/, ""))
    .filter(
      (value) =>
        value.length >= 12 &&
        value.length <= budget &&
        !TRAILING.has(lastWordKey(value)) &&
        !/[([]/.test(value),
    )
    .sort((a, b) => b.length - a.length)[0]
  if (complete) return complete + attribution

  // Existing scope metadata supplies a short topic when the paper title has
  // no short main phrase. These are topic labels, never replacement paper titles.
  const metals = Array.isArray(frontmatter.metals) ? frontmatter.metals : []
  const names = [
    ...new Set(metals.map((symbol) => METAL_NAMES[symbol]).filter(Boolean)),
  ]
  const scopes = [
    frontmatter.ingredients,
    frontmatter.matrices,
    frontmatter.products,
  ]
    .flatMap((values) => (Array.isArray(values) ? values : []))
    .filter((value) => typeof value === "string" && value.trim())
  const scope = normalizeTitle(
    String(scopes[0] ?? "")
      .replace(/^\[\[/, "")
      .replace(/\]\]$/, "")
      .split("|")[0]
      .split("/")
      .at(-1)
      .replace(/-/g, " "),
  )
  const labels = []
  for (let count = names.length; count > 0; count--) {
    const selected = names.slice(0, count)
    const label =
      selected.length === 1
        ? selected[0]
        : `${selected.slice(0, -1).join(", ")} and ${selected.at(-1)}`
    if (scope) labels.push(`${label} in ${scope}`)
    labels.push(label)
  }
  const short = labels.find((label) => label.length <= budget)
  if (short)
    return short.charAt(0).toUpperCase() + short.slice(1) + attribution
  // If even an intact topic label cannot fit beside the supplied author, keep
  // the complete topic and attribution. The audit exposes the excess length.
  return topic + attribution
}

// A whole short topic can still collide across different papers by the same
// author in the same year. Build one index per Quartz content list, and retain
// the fuller supplied topic for every collision. Genuine duplicate source
// records remain visible to the audit; never invent a bibliographic suffix.
const sourceTitleIndexes = new WeakMap()

export function sourceSearchTitle(frontmatter = {}, pages) {
  if (!pages) return sourceTitleCandidate(frontmatter)
  if (!sourceTitleIndexes.has(pages)) {
    const titles = new Map()
    const groups = new Map()
    for (const page of pages) {
      const fm = page.frontmatter
      if (!fm) continue
      const title = sourceTitleCandidate(fm)
      if (!title) continue
      titles.set(fm, title)
      if (!groups.has(title)) groups.set(title, [])
      groups.get(title).push(fm)
    }
    for (const members of groups.values()) {
      if (members.length < 2) continue
      for (const fm of members) titles.set(fm, sourceTitleCandidate(fm, true))
    }
    sourceTitleIndexes.set(pages, titles)
  }
  return sourceTitleIndexes.get(pages).get(frontmatter)
}

export function auditSearchTitle(slug, title) {
  const match = String(slug ?? "").match(
    /^audits\/(\d{4}-\d{2}-\d{2})-baseline$/,
  )
  if (!match) return undefined
  const heading = normalizeTitle(title || "Audit dashboard")
  return heading.includes(match[1]) ? heading : `${heading}: ${match[1]}`
}

export function extractOverview(markdown) {
  const source = String(markdown ?? "").replace(/^\uFEFF/, "")
  const body = source.startsWith("---")
    ? source.replace(/^---[\s\S]*?\n---\s*/, "")
    : source
  const start = body.search(/^## Overview[^\n]*\n/m)
  if (start < 0) return ""
  const after = body.slice(start).replace(/^## Overview[^\n]*\n/, "")
  const next = after.search(/\n## |\n# /)
  return next < 0 ? after : after.slice(0, next)
}

export function isMetalArticle(slug, type) {
  const kind = String(type ?? "").toLowerCase()
  if (kind === "metal-evidence") return false
  const path = String(slug ?? "")
  if (path === "metals" || path === "metals/index" || path.endsWith("/index")) return false
  if (kind === "metal") return path.startsWith("metals/") || path.length > 0
  return path.startsWith("metals/")
}

export function isRegulationArticle(slug, type) {
  const kind = String(type ?? "").toLowerCase()
  const path = String(slug ?? "")
  if (!path.startsWith("regulations/")) return false
  if (path === "regulations/index" || path.endsWith("/index")) return false
  return kind === "regulation" || kind === "regulation-program"
}

function splitSentences(text) {
  const parts = []
  const re = /([.!?])\s+(?=[A-Za-z])/g
  let last = 0
  let match
  while ((match = re.exec(text))) {
    const chunk = text.slice(last, match.index + 1)
    const token = (chunk.trim().split(/\s+/).pop() || "")
    const abbreviated = /^(?:[A-Z]\.)+$/.test(token) ||
      /^(?:U\.S|U\.K|E\.U|Dr|Mr|Mrs|Ms|Prof|vs|etc|Fig|No|al|e\.g|i\.e|b\.w|approx)\.$/i.test(token)
    if (abbreviated) continue
    const sentence = chunk.trim()
    if (sentence) parts.push(sentence)
    last = match.index + match[0].length
  }
  const tail = text.slice(last).trim()
  if (tail) parts.push(tail)
  return parts
}

function displayName(title) {
  const text = tidy(title)
  const comma = text.match(/^([^,]+),\s*(.+)$/)
  if (!comma) return text
  const qualifier = comma[2].trim()
  const pretty = qualifier.charAt(0).toUpperCase() + qualifier.slice(1)
  return tidy(`${pretty} ${comma[1].trim()}`)
}

function metalLabel(title, symbol) {
  const heading = displayName(title)
  const sym = tidy(symbol)
  if (!heading) return sym
  if (!CHEMICAL_SYMBOL.test(sym)) return heading
  if (heading.includes(`(${sym})`)) return heading
  return `${heading} (${sym})`
}

function titleKind(title, symbol) {
  const sym = tidy(symbol)
  if (TOTAL_SYMBOLS.has(sym)) return "total"
  if (FORM_SYMBOLS.has(sym)) return "form"
  if (sym && !CHEMICAL_SYMBOL.test(sym)) return "form"
  return "element"
}

function metalTitle(label, kind) {
  const tail = kind === "total" ? TOTAL_TAIL : kind === "form" ? FORM_TAIL : ELEMENT_TAIL
  const withBrand = `${label}${tail}${BRAND_SUFFIX}`
  if (withBrand.length <= HTML_TITLE_MAX) return withBrand
  return `${label}${tail}`
}

function withTerminalPeriod(value) {
  let text = tidy(value).replace(/[,:;]+$/g, "")
  if (!text) return ""
  if (!/[.!?]$/.test(text)) text += "."
  return text
}

function cleanProse(overview) {
  let text = stripMarkup(overview)
  text = stripAuthorYear(text)
  text = repairCitationGap(text)
  return tidy(text)
}

function isTeaser(sentence) {
  return /\b(?:one|two|three|four|five|several)\s+(?:pathways|routes|reasons|ways)\b/i.test(sentence) &&
    !sentence.includes(":")
}

function acceptableSentence(sentence) {
  const text = tidy(sentence)
  if (!text || text.length > META_DESCRIPTION_MAX || text.length < 40) return false
  if (!/^[A-Z0-9]/.test(text)) return false
  if (!/[.!?]$/.test(text)) return false
  if (PRONOUN_START.test(text)) return false
  if (PROCESS.test(text)) return false
  if (isTeaser(text)) return false
  if (/\b(?:by|from)\s+(?:among|in|as|for|through|on)\b/i.test(text)) return false
  if (/[—–]/.test(text)) return false
  if (/\[\d/.test(text)) return false
  return true
}

function openingSentences(overview) {
  const cleaned = cleanProse(overview)
  const usable = []
  for (const sentence of splitSentences(cleaned)) {
    let repaired = withTerminalPeriod(repairCitationGap(sentence))
    if (!repaired) continue
    if (/^[a-z]/.test(repaired)) repaired = repaired.charAt(0).toUpperCase() + repaired.slice(1)
    if (PROCESS.test(repaired)) continue
    if (PRONOUN_START.test(repaired) || isTeaser(repaired)) {
      if (usable.length) break
      continue
    }
    if (acceptableSentence(repaired)) {
      const next = usable.concat(repaired).join(" ")
      if (usable.length && next.length > META_DESCRIPTION_MAX) break
      usable.push(repaired)
      if (next.length >= META_DESCRIPTION_MIN) return usable
      continue
    }
    if (repaired.length > META_DESCRIPTION_MAX) {
      const clause = leadClause(repaired)
      if (clause) usable.push(clause)
      break
    }
  }
  return usable
}

function packSentences(sentences) {
  return sentences.join(" ").trim()
}

function copula(label) {
  const name = String(label).replace(/\s*\([^)]*\)\s*$/, "")
  if (/s$/i.test(name) && !/(?:ss|us|is|as)$/i.test(name)) return "are"
  return "is"
}

function inRange(value) {
  const text = tidy(value)
  return text.length >= META_DESCRIPTION_MIN &&
    text.length <= META_DESCRIPTION_MAX &&
    !/[—–]/.test(text) &&
    /[.!?]$/.test(text)
}

function genericOptions(label, plain) {
  const name = plain.toLowerCase()
  const be = copula(label)
  return [
    `${label} ${be} covered by the Heavy Metal Index as a reference on ${name} in food, including the evidence reviewed in the literature.`,
    `${label} ${be} the Heavy Metal Index reference on ${name} in food, including occurrence and the evidence reviewed.`,
    `The Heavy Metal Index reference on ${name} in food covers occurrence and the evidence reviewed in the literature.`,
    `${label} in food ${be} summarized from the literature, including occurrence and the evidence reviewed for ${name}.`,
  ]
}

function templateDescription(fact, label, plain) {
  const name = plain.toLowerCase()
  const core = tidy(fact).replace(/[.!?]+$/g, "")
  const pads = [
    `The reference covers ${name} in food.`,
    `The food literature on ${name} is reviewed.`,
    `Occurrence in food is reviewed.`,
    `The Heavy Metal Index covers ${name}.`,
    `The Heavy Metal Index reference covers ${name} in food.`,
    `The literature reviewed here covers ${name} in food.`,
    `Occurrence and the evidence for ${name} in food are reviewed.`,
    `Occurrence and the evidence for ${name} in food are reviewed in the literature.`,
  ]
  let best = ""
  let bestScore = -1
  if (core) {
    for (const pad of pads) {
      const joined = `${withTerminalPeriod(core)} ${pad}`
      if (!inRange(joined)) continue
      const score = (pad.toLowerCase().includes(name) ? 1000 : 0) + joined.length
      if (score > bestScore) {
        best = joined
        bestScore = score
      }
    }
    if (best) return best
  }
  return genericOptions(label, plain).find((option) => inRange(option)) || ""
}

export function metalMetaDescription(overview, plainName = "", label = "") {
  const plain = tidy(plainName) || "this metal"
  const heading = tidy(label) || plain
  const packed = packSentences(openingSentences(overview))
  if (packed && inRange(packed)) return packed
  return templateDescription(packed, heading, plain)
}

export function metalSearchFields({ title, symbol, name, overview } = {}) {
  const heading = tidy(title) || tidy(name)
  if (!heading) return null
  const label = metalLabel(heading, symbol)
  const kind = titleKind(heading, symbol)
  const plain = displayName(heading)
  const prose = overview ? cleanProse(overview) : ""
  return {
    title: metalTitle(label, kind),
    description: metalMetaDescription(prose, plain, label),
  }
}

export function citationDoi(frontmatter) {
  if (!frontmatter || typeof frontmatter !== "object") return undefined
  for (const key of ["wiki_doi", "doi", "citation_doi"]) {
    const raw = frontmatter[key]
    if (raw == null) continue
    const value = String(raw).trim()
    if (!value || /^(?:null|none|undefined|~)$/i.test(value)) continue
    const match = value.match(/10\.\d{4,9}\/\S+/)
    if (match) return match[0].replace(/[.,;]+$/g, "")
  }
  return undefined
}
