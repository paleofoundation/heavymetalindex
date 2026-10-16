import type { Element, Node } from "hast";
import type { QuartzPluginData } from "../plugins/vfile";
import { toString } from "hast-util-to-string";
import { citationReviewIssue } from "../../tools/lib/source-publication.mjs";

type Fact = { text: string; href: string };

// Re-present complete existing evidence paragraphs, never generate or truncate
// scientific claims. Citations must resolve to eligible records on this page.
export function citedKeyFacts(
  tree: Node,
  files: QuartzPluginData[],
  fm: Record<string, unknown>,
  ownSource = false,
): Fact[] {
  if (fm.evidence_tier === "pending" || fm.status === "tier1-stub") return [];
  const sourceRecord = ownSource && !citationReviewIssue(fm);
  const eligible = new Set(
    files
      .filter(
        (f) =>
          f.slug?.startsWith("sources/") &&
          f.frontmatter &&
          !citationReviewIssue(f.frontmatter),
      )
      .map((f) => String(f.slug)),
  );
  const facts: Fact[] = [];
  let heading = "";
  let blocked = false;
  function links(node: Node): string[] {
    const element = node as Element;
    const slug = element.properties?.["data-slug"];
    return [
      typeof slug === "string" ? slug : "",
      ...("children" in node ? (node.children as Node[]).flatMap(links) : []),
    ].filter(Boolean);
  }
  // A compact contamination row preserves its existing headers (including
  // units and confidence) and links back to the full cited evidence table.
  // No frontmatter range is promoted into a newly worded occurrence claim.
  function elements(node: Node, tag: string): Element[] {
    const e = node as Element;
    return [
      ...(e.type === "element" && e.tagName === tag ? [e] : []),
      ...("children" in node
        ? (node.children as Node[]).flatMap((n) => elements(n, tag))
        : []),
    ];
  }
  if (
    ["ingredient", "product", "product-category"].includes(String(fm.type)) &&
    "children" in tree
  ) {
    let tableHeading = "";
    for (const node of tree.children as Node[]) {
      const e = node as Element;
      if (e.type === "element" && /^h[1-6]$/.test(e.tagName))
        tableHeading = String(e.properties?.id ?? "");
      if (!/contamination-profile/.test(tableHeading)) continue;
      for (const table of elements(node, "table")) {
        const headers = elements(table, "th").map((cell) =>
          toString(cell).trim(),
        );
        if (
          !headers.includes("Typical (ppb)") ||
          !headers.includes("Key sources")
        )
          continue;
        for (const row of elements(table, "tr")) {
          const cells = elements(row, "td");
          const citations = links(row).filter((s) => s.startsWith("sources/"));
          if (
            cells.length !== headers.length ||
            !citations.length ||
            citations.some((s) => !eligible.has(s))
          )
            continue;
          const text = cells
            .flatMap((cell, i) =>
              headers[i] === "Key sources"
                ? []
                : [`${headers[i]}: ${toString(cell).trim()}`],
            )
            .join("; ");
          facts.push({ text, href: `#${tableHeading}` });
          if (facts.length === 3) return facts;
        }
      }
    }
  }
  if (!("children" in tree)) return facts;
  for (const node of tree.children as Node[]) {
    const element = node as Element;
    if (element.type !== "element") continue;
    if (/^h[1-6]$/.test(element.tagName)) {
      heading = String(element.properties?.id ?? "");
      blocked = /references|sources|update-history|related|see-also/.test(
        heading,
      );
    }
    if (blocked || !heading) continue;
    // A source page's own evidence summary is already attributed to that
    // record. Pending/incomplete records cannot supply source-record facts.
    const ownEvidence =
      sourceRecord &&
      /^(key-|findings|results|methods|limitations|evidence-fitness)/.test(
        heading,
      );
    if (
      element.tagName !== "p" &&
      !(ownEvidence && ["ul", "ol"].includes(element.tagName))
    )
      continue;
    const candidates =
      element.tagName === "p"
        ? [element]
        : elements(element, "li").filter(
            (li) => elements(li, "li").length === 1,
          );
    for (const candidate of candidates) {
      const citations = links(candidate).filter((s) =>
        s.startsWith("sources/"),
      );
      const text = toString(candidate).replace(/\s+/g, " ").trim();
      // A long paragraph stays in the body: cutting it can discard a qualifier.
      if (
        text.length < 45 ||
        text.endsWith(":") ||
        text.length > (ownEvidence ? 420 : 240) ||
        (!citations.length && !ownEvidence) ||
        citations.some((s) => !eligible.has(s))
      )
        continue;
      if (facts.some((f) => f.text === text || f.href === `#${heading}`))
        continue;
      facts.push({ text, href: `#${heading}` });
      if (facts.length === 3) return facts;
    }
  }
  return facts;
}
