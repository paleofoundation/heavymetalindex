#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { fromHtml } from "hast-util-from-html";
import { readDescriptionPage } from "./audit-meta-descriptions.mjs";

// Publisher controls, journal headers and extracted body text seen in source
// metadata. Match the rendered title, including its author/year suffix.
export const JUNK_TITLE =
  /ACCESS Metrics\s*&\s*More Article Recommendations|^OPEN ACCESS\b|^healthy eating patterns should include|Access this article online|Elsevier after peer review|^Interdiscip Toxicol\.|^nutritional deficiencies\./i;

export function readTitlePage(html, file = "index.html") {
  const tree = fromHtml(html);
  let title = "";
  function text(node) {
    return node.type === "text"
      ? node.value
      : (node.children ?? []).map(text).join("");
  }
  function walk(node) {
    if (node.tagName === "title") title = text(node).trim();
    for (const child of node.children ?? []) walk(child);
  }
  walk(tree);
  // Use the same robots, refresh, 404 and ownership-verification exclusions as
  // the description audit so both inventories measure the same content set.
  const verification = html.match(
    /^\s*google-site-verification:\s*(google[a-f0-9]+\.html)(?:\s*<script\b[\s\S]*)?\s*$/i,
  );
  const ownership = verification && path.basename(file) === verification[1];
  return {
    file,
    title,
    indexable: !ownership && readDescriptionPage(html, file, tree).indexable,
  };
}

export function summarizeTitles(pages) {
  const indexed = pages.filter((page) => page.indexable);
  const groups = new Map();
  for (const page of indexed) {
    if (!page.title) continue;
    if (!groups.has(page.title)) groups.set(page.title, []);
    groups.get(page.title).push(page.file);
  }
  const duplicates = Array.from(groups, ([title, files]) => ({
    title,
    files,
  })).filter((group) => group.files.length > 1);
  const junk = indexed.filter((page) => JUNK_TITLE.test(page.title));
  return {
    scanned_files: pages.length,
    indexable_files: indexed.length,
    counts: {
      under_30: indexed.filter((page) => page.title.length < 30).length,
      over_60: indexed.filter((page) => page.title.length > 60).length,
      duplicate_groups: duplicates.length,
      junk_matches: junk.length,
      missing: indexed.filter((page) => !page.title).length,
    },
    duplicates,
    junk,
    // Unreviewed sources are already noindexed. Keep their defects visible
    // without misreporting them as indexable or changing indexing policy.
    all_junk: pages.filter((page) => JUNK_TITLE.test(page.title)),
    pages,
  };
}

export function auditTitles(directory) {
  const pages = [];
  function walk(dir) {
    for (const entry of fs
      .readdirSync(dir, { withFileTypes: true })
      .sort((a, b) => a.name.localeCompare(b.name))) {
      const file = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(file);
      else if (entry.isFile() && file.endsWith(".html"))
        pages.push(
          readTitlePage(
            fs.readFileSync(file, "utf8"),
            path.relative(directory, file),
          ),
        );
    }
  }
  walk(directory);
  if (!pages.length) throw new Error(`No built HTML in ${directory}`);
  return summarizeTitles(pages);
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  try {
    const directory =
      process.argv.find((arg) => arg.startsWith("--dir="))?.slice(6) ??
      "public";
    const report = auditTitles(directory);
    if (process.argv.includes("--json"))
      console.log(JSON.stringify(report, null, 2));
    else {
      // Duplicate publications can be legitimate. Unconfirmed junk must stay
      // unchanged under the source-verification rule. List both for review.
      console.log(
        `audit-html-titles: ${report.counts.missing ? "FAIL" : "PASS"} (${report.indexable_files} indexable of ${report.scanned_files} HTML files)`,
      );
      console.log(JSON.stringify(report.counts));
      for (const group of report.duplicates)
        console.log(
          `  duplicate (${group.files.length} pages): ${group.title}\n    ${group.files.join(", ")}`,
        );
      for (const page of report.all_junk)
        console.log(
          `  junk (${page.indexable ? "indexable" : "noindex/excluded"}): ${page.file}: ${page.title}`,
        );
    }
    process.exitCode = report.counts.missing ? 1 : 0;
  } catch (error) {
    console.error(`audit-html-titles: ${error.message}`);
    process.exitCode = 1;
  }
}
