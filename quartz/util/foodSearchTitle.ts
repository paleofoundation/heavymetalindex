import {
  capHtmlTitle,
  HTML_TITLE_MAX,
  normalizeTitle,
} from "../../tools/lib/search-snippet.mjs"
import { METAL_NAMES, plainMetalText } from "../../tools/lib/metal-names.mjs"

const BRAND = " | Heavy Metal Index"
// Prioritize the principal toxic metals before additional species and elements.
const TITLE_METALS = [
  "Pb",
  "Cd",
  "iAs",
  "Hg",
  "tHg",
  "MeHg",
  "tAs",
  "As",
  "Ni",
  "Al",
  "Cr-VI",
  "Cr",
  "Sn",
  "U",
]
type Frontmatter = Record<string, unknown>

function isFoodPage(frontmatter: Frontmatter): boolean {
  return ["ingredient", "product", "product-category"].includes(
    String(frontmatter.type),
  )
}

function subject(frontmatter: Frontmatter): string {
  return normalizeTitle(String(frontmatter.title ?? "")).replace(
    /^heavy metals? in\s+/i,
    "",
  )
}

function list(names: string[]): string {
  if (names.length < 2) return names[0] ?? ""
  return `${names.slice(0, -1).join(", ")} and ${names.at(-1)}`
}

export function foodHeading(frontmatter: Frontmatter): string | undefined {
  if (!isFoodPage(frontmatter) || !subject(frontmatter)) return undefined
  if(typeof frontmatter.display_title==='string' && frontmatter.display_title.trim())return plainMetalText(normalizeTitle(frontmatter.display_title))
  return plainMetalText(`Heavy metals in ${subject(frontmatter)}`)
}

export function foodSearchTitle(frontmatter: Frontmatter): string | undefined {
  if (!isFoodPage(frontmatter) || !subject(frontmatter)) return undefined
  if(typeof frontmatter.search_title==='string' && frontmatter.search_title.trim()) {
    const title=capHtmlTitle(plainMetalText(normalizeTitle(frontmatter.search_title)))
    return title.length+BRAND.length<=HTML_TITLE_MAX?title+BRAND:title
  }
  let title = `Heavy Metals in ${subject(frontmatter)}`
  const profile = frontmatter.contamination_profile
  if (
    frontmatter.type === "ingredient" &&
    profile &&
    typeof profile === "object"
  ) {
    const names = TITLE_METALS.flatMap((symbol) => {
      const name = METAL_NAMES[symbol]
      const entry = (profile as Record<string, unknown>)[symbol]
      return entry &&
        typeof entry === "object" &&
        "status" in entry &&
        entry.status === "populated"
        ? [name.replace(/\b\w/g, (letter) => letter.toUpperCase())]
        : []
    })
    // Keep the ingredient visible within the budget before adding lower-priority metals.
    while (
      names.length &&
      `${list(names)} in ${subject(frontmatter)}`.length > HTML_TITLE_MAX
    )
      names.pop()
    if (names.length) title = `${list(names)} in ${subject(frontmatter)}`
  }
  title = capHtmlTitle(plainMetalText(title))
  return title.length + BRAND.length <= HTML_TITLE_MAX ? title + BRAND : title
}
