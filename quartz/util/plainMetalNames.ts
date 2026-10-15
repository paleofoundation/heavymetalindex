import type { Root, RootContent } from "hast"
import { toString } from "hast-util-to-string"
import { plainMetalText } from "../../tools/lib/metal-names.mjs"

const SKIP = new Set([
  "code",
  "pre",
  "script",
  "style",
  "math",
  "svg",
  "sub",
  "sup",
])

export function expandArticleMetals(tree: Root): Map<string, string> {
  const seen = new Set<string>()
  const headings = new Map<string, string>()
  let preceding = ""
  function walk(
    node: Root | RootContent,
    inTable = false,
    label = false,
    parent?: Root | Extract<RootContent, { type: "element" }>,
  ): void {
    if (node.type === "text") {
      const siblings = parent?.children ?? []
      const at = siblings.indexOf(node)
      const formula = (child: RootContent | undefined) =>
        child?.type === "element" &&
        ["sub", "sup"].includes(child.tagName) &&
        !child.properties.className?.toString().includes("cite")
      const prefix = formula(siblings[at - 1])
        ? (node.value.match(/^\S*/)?.[0] ?? "")
        : ""
      const suffix = formula(siblings[at + 1])
        ? (node.value.slice(prefix.length).match(/\S*$/)?.[0] ?? "")
        : ""
      node.value =
        prefix +
        plainMetalText(
          node.value.slice(prefix.length, node.value.length - suffix.length),
          inTable ? new Set() : seen,
          inTable ? "" : preceding,
        ) +
        suffix
      if (!inTable) preceding = (preceding + node.value).slice(-160)
      return
    }
    if (node.type !== "root" && node.type !== "element") return
    if (node.type === "element") {
      const siblings = parent?.children ?? []
      const at = siblings.indexOf(node)
      const neighborIsFormula = [siblings[at - 1], siblings[at + 1]].some(
        (child) =>
          child?.type === "element" &&
          ["sub", "sup"].includes(child.tagName) &&
          !child.properties.className?.toString().includes("cite"),
      )
      if (neighborIsFormula && /^(?:[A-Z][a-z]?\d*)+$/.test(toString(node)))
        return
      if (/^(?:p|h[1-6]|li|blockquote|div|section|table)$/.test(node.tagName))
        preceding = ""
      if (SKIP.has(node.tagName)) return
      const classes = node.properties.className
      if (
        Array.isArray(classes) &&
        classes.some((name) => /^(?:katex|math)/.test(String(name)))
      )
        return
      if (
        node.tagName === "a" &&
        /^(?:https?:\/\/|www\.|mailto:)/.test(toString(node))
      )
        return
      if (node.tagName === "table") inTable = true
      if (inTable && ["td", "th"].includes(node.tagName) && !label) return
    }
    if (node.type === "element" && node.tagName === "tr") {
      let first = true
      for (const child of node.children) {
        if (child.type === "element" && ["td", "th"].includes(child.tagName)) {
          walk(child, true, first, node)
          first = false
        }
      }
    } else {
      for (const child of node.children) walk(child, inTable, label, node)
    }
    if (
      node.type === "element" &&
      /^h[1-6]$/.test(node.tagName) &&
      typeof node.properties.id === "string"
    ) {
      headings.set(node.properties.id, toString(node))
    }
  }
  walk(tree)
  return headings
}
