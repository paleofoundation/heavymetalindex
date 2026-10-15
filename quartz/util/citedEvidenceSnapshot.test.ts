import test from "node:test";
import assert from "node:assert/strict";
import type { Root, Element } from "hast";
import type { QuartzPluginData } from "../plugins/vfile";
import type { FullSlug } from "./path";
import { citedEvidenceSnapshot } from "./citedEvidenceSnapshot";

const heading = (id: string): Element => ({
  type: "element",
  tagName: "h2",
  properties: { id },
  children: [],
});
const link = (slug: string): Element => ({
  type: "element",
  tagName: "a",
  properties: { "data-slug": `sources/${slug}` },
  children: [],
});
const source = (
  slug: string,
  sourceType: string,
  extra = {},
): QuartzPluginData =>
  ({
    slug: `sources/${slug}` as FullSlug,
    frontmatter: {
      title: slug,
      type: "source",
      source_type: sourceType,
      ...extra,
    },
  }) as QuartzPluginData;

test("counts only cited references, separates reports/guidance, and never calls all peer-reviewed papers primary studies", () => {
  const tree: Root = {
    type: "root",
    children: [
      link("inventory-only"),
      heading("references"),
      {
        type: "element",
        tagName: "ol",
        properties: {},
        children: [
          link("study"),
          link("study"),
          link("review"),
          link("report"),
          link("guidance"),
          link("textbook"),
        ],
      },
      heading("sources"),
      link("inventory-only"),
    ],
  };
  const files = [
    source("study", "peer-reviewed"),
    source("review", "systematic_review"),
    source("report", "government_report"),
    source("guidance", "gov-guidance"),
    source("textbook", "textbook-chapter"),
    source("inventory-only", "peer-reviewed"),
  ];
  assert.deepEqual(citedEvidenceSnapshot(tree, files), {
    research: 2,
    government: 1,
    guidance: 1,
    other: 1,
    total: 5,
  });
});

test("canonical duplicate references count once; pending, broken and unresolved records do not inflate counts", () => {
  const tree: Root = {
    type: "root",
    children: [
      heading("references"),
      link("duplicate"),
      link("study"),
      link("pending"),
      link("missing"),
      link("untitled"),
      link("cycle"),
    ],
  };
  const files = [
    source("duplicate", "peer-reviewed", {
      canonical_source: "[[sources/study]]",
      status: "duplicate",
    }),
    source("study", "peer-reviewed"),
    source("pending", "peer-reviewed", { evidence_tier: "pending" }),
    source("untitled", "peer-reviewed", { title: "Unknown" }),
    source("cycle", "peer-reviewed", {
      canonical_source: "sources/cycle",
    }),
  ];
  assert.deepEqual(citedEvidenceSnapshot(tree, files), {
    research: 1,
    government: 0,
    guidance: 0,
    other: 0,
    total: 1,
  });
});

test("two papers sharing a DOI are not merged without a canonical identity record", () => {
  const tree: Root = {
    type: "root",
    children: [heading("references"), link("one"), link("two")],
  };
  assert.equal(
    citedEvidenceSnapshot(tree, [
      source("one", "peer-reviewed", { doi: "10.1/shared" }),
      source("two", "peer-reviewed", { doi: "10.1/shared" }),
    ]).total,
    2,
  );
});

test("a page without References has no cited counts even when it links to many sources", () => {
  const tree: Root = {
    type: "root",
    children: [heading("sources"), link("study")],
  };
  assert.equal(
    citedEvidenceSnapshot(tree, [source("study", "peer-reviewed")]).total,
    0,
  );
});
