import type { Element, Root } from "hast"
import { toString } from "hast-util-to-string"
import { METAL_NAMES } from "../../tools/lib/metal-names.mjs"

const PILOT_METAL_NAMES: Record<string, string> = {
  ...METAL_NAMES,
  Sb: "antimony", Fe: "iron", V: "vanadium", Sr: "strontium",
  Zn: "zinc", Cu: "copper", Co: "cobalt", Mn: "manganese", Mo: "molybdenum",
}

/** Pilot presentation rules apply to text only, never links or identifiers. */
export function normalizeEvidencePilotText(tree: Root, slug: string) {
  if (!isEvidencePilot(slug)) return
  const names = Object.entries(PILOT_METAL_NAMES)
  const symbols = names.map(([symbol]) => symbol).sort((a, b) => b.length - a.length).join("|")
  const token = new RegExp(`(?<![\\p{L}\\p{N}_])(${symbols})(?![\\p{L}\\p{N}_])`, "gu")
  function walk(node: Root | Root["children"][number]) {
    if (node.type === "text") {
      let value = node.value.replace(/\s*—\s*/g, " - ")
      for (const [symbol, name] of names) {
        value = value.replace(new RegExp(`\\b(${name})\\s*\\(${symbol}\\)`, "gi"), "$1")
      }
      node.value = value.replace(token, (symbol, _capture, offset: number) => {
        const after = value.slice(offset + symbol.length)
        if (symbol === "U" && /^\.[A-Z]\./.test(after)) return symbol
        if (symbol === "As" && /^\s+(?:paddy soil develops|a\b|an\b|the\b|this\b|that\b|these\b|those\b|it\b|they\b|we\b|you\b|expected\b|shown\b|noted\b|reported\b|discussed\b)/i.test(after)) return symbol
        return PILOT_METAL_NAMES[symbol]
      })
    } else if (node.type === "root" || node.type === "element") {
      if (node.type === "element" && ["code", "pre", "script", "style", "math", "svg", "sub", "sup"].includes(node.tagName)) return
      if (node.type === "element" && node.tagName === "a" && /^(?:https?:\/\/|www\.|mailto:)/.test(toString(node))) return
      // The FDA occurrence table prints "Cadmium (Cd)". Leave that column intact.
      if (node.type === "element" && node.tagName === "table" && toString(node).includes("FDA food and preparation")) return
      node.children.forEach(walk)
    }
  }
  walk(tree)
}

export function isEvidencePilot(slug: string): boolean {
  return slug === "ingredients/spinach" || slug === "mitigation/remediation-evidence"
}

/** Add a static reading map without moving or removing any article evidence. */
export function addEvidencePilotContents(tree: Root, slug: string, hasLeftSidebar: boolean) {
  if (!isEvidencePilot(slug)) return
  const headings = tree.children.filter((node): node is Element =>
    node.type === "element" && node.tagName === "h2" && Boolean(node.properties.id),
  )
  if (!headings.length) return
  const nav: Element = {
    type: "element",
    tagName: "nav",
    properties: {
      className: ["hmi-article-contents", ...(hasLeftSidebar ? ["hmi-article-contents-mobile"] : [])],
      ariaLabel: "Article contents",
    },
    children: [{
      type: "element", tagName: "details", properties: {}, children: [
        { type: "element", tagName: "summary", properties: {}, children: [{ type: "text", value: "On this page" }] },
        {
          type: "element", tagName: "ul", properties: {}, children: headings.map((heading) => ({
            type: "element", tagName: "li", properties: {}, children: [{
              type: "element", tagName: "a", properties: { href: `#${heading.properties.id}` },
              children: [{ type: "text", value: toString(heading).replace(/\s*#\s*$/, "").trim() }],
            }],
          })),
        },
      ],
    }],
  }
  // Overview is the introduction on both pilots. Put the menu after that
  // section, or before the first heading if an introduction has no heading.
  const first = headings[0]
  const afterIntro = /^overview$/i.test(toString(first).replace(/\s*#\s*$/, "").trim()) && headings.length > 1
    ? tree.children.indexOf(headings[1])
    : tree.children.indexOf(first)
  tree.children.splice(afterIntro, 0, nav)
}
