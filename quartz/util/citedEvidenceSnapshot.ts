import type { Element, Node } from "hast";
import type { QuartzPluginData } from "../plugins/vfile";
import { citationReviewIssue } from "../../tools/lib/source-publication.mjs";

export type EvidenceCounts = {
  research: number;
  government: number;
  guidance: number;
  other: number;
  total: number;
};

// Count the References section, not the much larger routed Sources inventory.
// The rendered bibliography is the same source trail the reader can inspect.
export function citedEvidenceSnapshot(
  tree: Node,
  allFiles: QuartzPluginData[],
): EvidenceCounts {
  const counts: EvidenceCounts = {
    research: 0,
    government: 0,
    guidance: 0,
    other: 0,
    total: 0,
  };
  const sources = new Map(
    allFiles
      .filter((f) => f.slug?.startsWith("sources/"))
      .map((f) => [String(f.slug).toLowerCase(), f]),
  );
  const seen = new Set<string>();
  let inReferences = false;
  let referenceLevel = 2;

  function countLink(node: Node) {
    const element = node as Element;
    if (element.type === "element" && element.tagName === "a") {
      const slug = element.properties?.["data-slug"];
      if (typeof slug === "string" && slug.startsWith("sources/")) {
        let key = slug.toLowerCase();
        let source = sources.get(key);
        const resolving = new Set<string>();
        while (source?.frontmatter?.canonical_source && !resolving.has(key)) {
          resolving.add(key);
          const canonical = String(source.frontmatter.canonical_source)
            .replace(/^\[\[/, "")
            .replace(/[|#\]].*$/, "")
            .replace(/^sources\//, "");
          key = `sources/${canonical}`.toLowerCase();
          source = sources.get(key);
        }
        if (
          source?.frontmatter &&
          !source.frontmatter.canonical_source &&
          !seen.has(key) &&
          !citationReviewIssue(source.frontmatter)
        ) {
          seen.add(key);
          const type = String(source.frontmatter.source_type ?? "")
            .trim()
            .toLowerCase()
            .replace(/_/g, "-");
          // A research-paper count includes reviews. It does not claim unique
          // primary studies/cohorts merely because a source is peer reviewed.
          if (
            [
              "peer-reviewed",
              "study",
              "systematic-review",
              "review",
              "review-chapter",
              "meta-analysis",
            ].includes(type)
          )
            counts.research++;
          else if (type.startsWith("gov") && type.includes("guidance"))
            counts.guidance++;
          else if (["gov-report", "government-report"].includes(type))
            counts.government++;
          else counts.other++;
          counts.total++;
        }
      }
    }
    if ("children" in node)
      for (const child of node.children as Node[]) countLink(child);
  }

  if (!("children" in tree)) return counts;
  for (const node of tree.children as Node[]) {
    const element = node as Element;
    if (element.type === "element" && /^h[1-6]$/.test(element.tagName)) {
      const level = Number(element.tagName[1]);
      if (element.properties?.id === "references") {
        inReferences = true;
        referenceLevel = level;
        continue;
      }
      if (level <= referenceLevel) inReferences = false;
    }
    if (inReferences) countLink(node);
  }
  return counts;
}
