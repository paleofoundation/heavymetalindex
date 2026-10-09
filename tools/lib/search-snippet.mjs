// HTML titles and meta descriptions for search snippets.
//
// Metal pages store a one-word `title` (the on-page heading). The document
// title and meta description are derived here from that heading plus the
// Overview prose, so a rebuild picks up page edits without a hand-written
// title for each metal. Every document title is then capped at a word
// boundary so a long source title cannot ship as the <title>.

export const HTML_TITLE_MAX = 70
export const META_DESCRIPTION_MIN = 120
export const META_DESCRIPTION_MAX = 160

const TRAILING = new Set([
  "a", "an", "the", "of", "on", "in", "to", "for", "and", "or", "with", "from",
  "by", "as", "at", "into", "over", "via", "its", "their", "that", "which",
  "whose", "than", "per", "between", "this", "these", "those", "is", "are",
  "was", "were", "be", "been", "has", "have", "had", "where", "when", "while",
  "because", "although", "within", "under", "about", "across", "after",
  "before", "during", "without", "including", "particularly", "primarily",
  "treat", "treats", "treated", "encountered", "overwhelmingly", "can", "could",
  "produce", "produces",
])

const MONTHS = new Set([
  "january", "february", "march", "april", "may", "june", "july", "august",
  "september", "october", "november", "december",
])

const CHEMICAL_SYMBOL = /^(?:[A-Z][a-z]?|iAs|tAs|tHg|MeHg|Cr-VI)$/

function normalizeSpaces(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim()
}

function scrubDashes(value) {
  return String(value ?? "")
    .replace(/\s*[—–]\s*/g, ", ")
    .replace(/[—–]/g, ", ")
}

function tidy(value) {
  let text = scrubDashes(value)
  text = text.replace(/\(\s*\)/g, "")
  text = text.replace(/\s+,/g, ",")
  text = text.replace(/(?:,\s*){2,}/g, ", ")
  text = text.replace(/\s+([,.;:])/g, "$1")
  text = text.replace(/^\s*[,;:]+\s*/, "")
  text = normalizeSpaces(text)
  return text
}

function stripMarkup(value) {
  let text = String(value ?? "")
  text = text.replace(/<!--[\s\S]*?-->/g, " ")
  text = text.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
  text = text.replace(/\[\[([^\]]+)\]\]/g, (_, target) => {
    const leaf = String(target).split("#")[0].split("/").filter(Boolean).pop() || target
    return String(leaf).replace(/-/g, " ")
  })
  text = text.replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
  text = text.replace(/`([^`]*)`/g, "$1")
  text = text.replace(/[*_]+/g, "")
  return tidy(text)
}

// Author-year parentheticals and "Surname 2021" / "Surname & Surname 2021"
// belong in the bibliography, not in a document title.
function stripAuthorYear(value) {
  let text = String(value ?? "")
  text = text.replace(/\s*\([^()]*\b(?:19|20)\d{2}\b[^()]*\)/g, " ")
  text = text.replace(
    /\b([A-Z][a-z'’.-]{1,})(?:\s+(?:&|and)\s+[A-Z][a-z'’.-]{1,})?(?:\s+et al\.)?\s+(?:19|20)\d{2}\b/g,
    (match, name) => (MONTHS.has(String(name).toLowerCase()) ? match : " "),
  )
  text = text.replace(/\b(?:by|from)\s+(?=among\b|in\b|as\b|for\b|through\b|on\b)/gi, "")
  return tidy(text)
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

export function capHtmlTitle(title, max = HTML_TITLE_MAX) {
  let text = normalizeSpaces(title)
  if (!text) return text
  if (text.length <= max) return unmatchedParenCut(text)
  let cut = text.lastIndexOf(" ", max)
  if (cut < 40) {
    text = text.slice(0, max).replace(/[\s,;:]+$/g, "")
    return trimTrail(unmatchedParenCut(text), 24)
  }
  text = text.slice(0, cut).replace(/[\s,;:]+$/g, "")
  text = unmatchedParenCut(text)
  return trimTrail(text, 45)
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
  return stripMarkup(next < 0 ? after : after.slice(0, next))
}

export function isMetalArticle(slug, type) {
  const kind = String(type ?? "").toLowerCase()
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
  const re = /([.!?])\s+(?=[A-Z])/g
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

function usableSentences(overview) {
  return splitSentences(stripMarkup(overview)).filter((sentence) => {
    return !/^(?:this page draws|chapter-level)\b/i.test(sentence)
  })
}

function nameVariants(title, name) {
  const variants = []
  const push = (value) => {
    const text = tidy(value)
    if (text && !variants.some((item) => item.toLowerCase() === text.toLowerCase())) variants.push(text)
  }
  push(title)
  push(name)
  const comma = String(title ?? "").match(/^([^,]+),\s*(.+)$/)
  if (comma) push(`${comma[2]} ${comma[1]}`)
  const nameComma = String(name ?? "").match(/^([^,]+),\s*(.+)$/)
  if (nameComma) push(`${nameComma[2]} ${nameComma[1]}`)
  return variants.sort((a, b) => b.length - a.length)
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function stripLeadingParenthetical(value) {
  let text = String(value ?? "").trim()
  if (!text.startsWith("(")) return text
  let depth = 0
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "(") depth++
    else if (text[i] === ")") {
      depth--
      if (depth === 0) return text.slice(i + 1).trim()
    }
  }
  return text
}

function stripLongParentheticals(value) {
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
    if (inner.length >= 28) {
      i = j - 1
      continue
    }
    out += inner
    i = j - 1
  }
  return tidy(out)
}
function clauseFromSentence(sentence, title, name) {
  let text = stripAuthorYear(sentence).replace(/[.!?]+$/g, "").trim()
  const variants = nameVariants(title, name)
  if (variants.length) {
    const alt = variants.map(escapeRegExp).join("|")
    const lead = new RegExp(`^(?:the toxicology of\\s+)?(?:${alt})(?:'s)?\\s+`, "i")
    if (lead.test(text)) {
      let stripped = stripLeadingParenthetical(text.replace(lead, ""))
      if (!/^(?:and|or|but|,)\b/i.test(stripped)) {
        text = stripped.replace(/^(?:is|are|was|were)\s+/i, "")
      }
    }
  }
  return tidy(text).replace(/[.!?]+$/g, "").trim()
}

function metalLabel(title, symbol) {
  const heading = tidy(title)
  const sym = tidy(symbol)
  if (!heading) return sym
  if (!CHEMICAL_SYMBOL.test(sym)) return heading
  if (heading.includes(`(${sym})`)) return heading
  const labeled = `${heading} (${sym})`
  return labeled.length <= 40 ? labeled : heading
}

function fitClause(clause, budget) {
  const text = tidy(clause)
  if (!text) return ""
  if (text.length <= budget) return trimTrail(unmatchedParenCut(text), Math.min(18, Math.max(text.length - 8, 8)))
  let cut = text.lastIndexOf(" ", budget + 1)
  if (cut < 12) cut = Math.min(budget, text.length)
  let slice = text.slice(0, cut)
  const opens = (slice.match(/\(/g) || []).length
  const closes = (slice.match(/\)/g) || []).length
  if (opens > closes) {
    const paren = slice.lastIndexOf("(")
    if (paren >= 18) slice = slice.slice(0, paren)
  }
  return trimTrail(slice.replace(/[\s,;:]+$/g, ""), 12)
}

function metalTitleFromOverview({ title, symbol, name, overview }) {
  const label = metalLabel(title, symbol)
  const sep = ": "
  const budget = HTML_TITLE_MAX - label.length - sep.length
  if (budget < 16) return capHtmlTitle(label)
  const sentences = usableSentences(overview)
  let chosen = ""
  for (const sentence of sentences.slice(0, 2)) {
    const clause = fitClause(clauseFromSentence(sentence, title, name), budget)
    if (clause.length >= 18) {
      chosen = clause
      break
    }
    if (clause.length > chosen.length) chosen = clause
  }
  if (chosen.length < 12) return capHtmlTitle(`${label} in food and water`)
  return capHtmlTitle(`${label}${sep}${chosen}`)
}

function withTerminalPeriod(value) {
  let text = tidy(value).replace(/[,:;]+$/g, "")
  if (!text) return ""
  if (!/[.!?]$/.test(text)) text += "."
  return text
}

function fitWords(base, extra) {
  const words = tidy(extra).replace(/[.!?]+$/g, "").split(" ").filter(Boolean)
  let acc = base
  let best = ""
  for (const word of words) {
    const trial = acc ? `${acc} ${word}` : word
    const shown = withTerminalPeriod(unmatchedParenCut(trial))
    if (shown.length > META_DESCRIPTION_MAX) break
    acc = trial
    if (shown.length < META_DESCRIPTION_MIN || TRAILING.has(lastWordKey(shown.replace(/[.!?]+$/g, "")))) continue
    best = shown
  }
  return best
}

function extensionOptions(sentence) {
  const body = tidy(sentence).replace(/[.!?]+$/g, "")
  const parts = body.split(/[,;]\s+/).map((part) => part.trim()).filter(Boolean)
  const options = [{ text: body, tail: false }]
  if (parts.length > 1) {
    options.push({ text: parts[0], tail: false })
    const tail = parts[parts.length - 1].replace(/^(?:so|and|but)\s+/i, "")
    if (tail.split(" ").length >= 4) options.push({ text: tail, tail: true })
  }
  return options
}

// Keep a complete sentence when it already fits. Otherwise extend with the
// next sentence, preferring a whole clause that lands inside 120-160 characters.
function clipToDescription(text) {
  const sentences = splitSentences(stripLongParentheticals(text)).filter(Boolean)
  if (!sentences.length) return ""
  let out = ""
  for (const sentence of sentences) {
    const next = withTerminalPeriod(out ? `${out} ${tidy(sentence)}` : sentence)
    if (next.length <= META_DESCRIPTION_MAX) {
      out = next
      if (out.length >= META_DESCRIPTION_MIN) return out
      continue
    }
    if (out.length >= META_DESCRIPTION_MIN) return out
    let best = ""
    let bestScore = -1
    for (const option of extensionOptions(sentence)) {
      if (option.tail && out === "") continue
      const text = option.tail ? option.text.replace(/^[a-z]/, (letter) => letter.toUpperCase()) : option.text
      const fitted = fitWords(out, text)
      if (!fitted) continue
      const whole = withTerminalPeriod(`${out ? out + " " : ""}${text}`)
      const complete = whole.length <= META_DESCRIPTION_MAX && whole.length >= META_DESCRIPTION_MIN
      const score = (complete ? 1000 : 0) + fitted.length + (option.tail ? 0 : 50)
      if (score > bestScore) {
        best = fitted
        bestScore = score
      }
    }
    if (best) return best
    return ""
  }
  return out.length >= META_DESCRIPTION_MIN ? out : ""
}

export function metalMetaDescription(overview) {
  return clipToDescription(usableSentences(overview).join(" "))
}

export function metalSearchFields({ title, symbol, name, overview } = {}) {
  const prose = stripMarkup(overview)
  if (!prose) return null
  return {
    title: metalTitleFromOverview({ title, symbol, name, overview: prose }),
    description: metalMetaDescription(prose),
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
