import type { Element, Node } from "hast";
import { KAREN } from "./authorIdentity";
import {
  HMI_BASE,
  HMI_ORGANIZATION_ID,
  HMI_WEBSITE_ID,
  KAREN_PERSON_ID,
  karenEntity,
  organizationEntity,
} from "../../tools/lib/entity-graph.mjs";

export const PARTIAL_ASSESSMENT_SCOPE =
  "Partial comparative assessment. Systematic searching, eligibility screening and outcome-specific certainty appraisal remain incomplete.";

export const EDITORIAL_CONTRIBUTION =
  "Evidence-system design and editorial scope.";

function children(node: Node): Node[] {
  return "children" in node && Array.isArray(node.children)
    ? node.children
    : [];
}

function isElement(node: Node): node is Element {
  return node.type === "element";
}

// Count the works actually listed under References, never the separate Sources
// discovery index. The explicit ledger is preferred; the heading fallback also
// supports adopted pages whose bibliography predates the ledger wrapper.
export function citedWorkCount(tree: Node): number | undefined {
  let ledger: Node | undefined;
  function findLedger(node: Node) {
    if (
      isElement(node) &&
      ("dataHmiCitationLedger" in node.properties ||
        "data-hmi-citation-ledger" in node.properties)
    ) {
      ledger = node;
      return;
    }
    for (const child of children(node)) if (!ledger) findLedger(child);
  }
  findLedger(tree);

  let count = 0;
  let inReferences = Boolean(ledger);
  function countEntries(node: Node) {
    if (isElement(node)) {
      if (!ledger && node.tagName === "h2")
        inReferences = node.properties.id === "references";
      if (inReferences && node.tagName === "li") count += 1;
    }
    for (const child of children(node)) countEntries(child);
  }
  countEntries(ledger ?? tree);
  return count || undefined;
}

export function isAdoptedScientificPage(fm: Record<string, unknown>): boolean {
  return (
    fm.page_contract_version === "1.0.0" &&
    ["ingredient", "metal", "product", "product-category"].includes(
      String(fm.type),
    )
  );
}

export function visibleUpdatedDate(value: unknown): string | undefined {
  if (value === undefined || value === null) return undefined;
  const date =
    value instanceof Date
      ? value.toISOString().slice(0, 10)
      : String(value).slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(date) && !Number.isNaN(Date.parse(date))
    ? date
    : undefined;
}

// Adopted assessments identify editorial responsibility separately from a
// scientific review. No reviewedBy, inferred search cutoff, or publication
// date is manufactured from an edit date or the size of the discovery corpus.
export function scientificPageJsonLd({
  fm,
  url,
  headline,
  description,
}: {
  fm: Record<string, unknown>;
  url: string;
  headline: string;
  description: string;
}) {
  if (!isAdoptedScientificPage(fm)) return undefined;
  const modified = visibleUpdatedDate(fm.updated);
  const partial = fm.evidence_coverage === "partial";
  const publisher = organizationEntity();
  const author = {
    "@type": "Organization",
    "@id": HMI_ORGANIZATION_ID,
    name: "Heavy Metal Index",
    url: `${HMI_BASE}/`,
  };
  const person = {
    ...karenEntity(),
    url: `${HMI_BASE}/${KAREN.slug}`,
    description: KAREN.summary,
    image: `${HMI_BASE}${KAREN.portrait}`,
  };
  const dates = modified ? { dateModified: modified } : {};
  return {
    "@context": "https://schema.org",
    "@graph": [
      publisher,
      author,
      person,
      {
        "@type": "WebSite",
        "@id": HMI_WEBSITE_ID,
        name: "Heavy Metal Index",
        url: `${HMI_BASE}/`,
        publisher: { "@id": publisher["@id"] },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: headline,
        description,
        inLanguage: "en",
        isPartOf: { "@id": HMI_WEBSITE_ID },
        mainEntity: { "@id": `${url}#article` },
        ...dates,
      },
      {
        "@type": "Article",
        "@id": `${url}#article`,
        url,
        headline,
        description,
        inLanguage: "en",
        mainEntityOfPage: { "@id": `${url}#webpage` },
        isPartOf: { "@id": HMI_WEBSITE_ID },
        author: { "@id": HMI_ORGANIZATION_ID },
        editor: { "@id": KAREN_PERSON_ID },
        publisher: { "@id": publisher["@id"] },
        ...(partial
          ? {
              abstract: PARTIAL_ASSESSMENT_SCOPE,
              creativeWorkStatus: "Partial evidence assessment",
            }
          : {}),
        ...dates,
      },
    ],
  };
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
