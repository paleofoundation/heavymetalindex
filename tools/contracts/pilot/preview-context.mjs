import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { parse } from "parse5";
import { slug as slugAnchor } from "github-slugger";

// The isolated preview needs the same vocabulary as the real transformer. Read
// its string records without evaluating TypeScript or maintaining a second map.
function stringRecord(file, name) {
  const source = fs.readFileSync(file, "utf8");
  const body = source.match(new RegExp(`(?:export )?const ${name}: Record<string, string> = \\{([\\s\\S]*?)\\n\\}`))?.[1];
  if (body === undefined) throw Error(`Cannot read ${name} vocabulary from ${file}`);
  const result = {};
  for (const line of body.split("\n")) {
    const match = line.match(/^\s*("(?:[^"\\]|\\.)*"|[a-zA-Z_$][\w$]*):\s*("(?:[^"\\]|\\.)*")\s*,?\s*$/);
    if (match) result[match[1].startsWith('"') ? JSON.parse(match[1]) : match[1]] = JSON.parse(match[2]);
  }
  if (!Object.keys(result).length) throw Error(`Empty ${name} vocabulary in ${file}`);
  return result;
}

export function readAutoLinkVocabulary(base) {
  return {
    ...stringRecord(path.join(base, "quartz/plugins/transformers/autolink-terms.generated.ts"), "GENERATED_TERMS"),
    ...stringRecord(path.join(base, "quartz/plugins/transformers/autolink.ts"), "METALS"),
  };
}

const OMIT_TEXT_KEYS = new Set(["source_keys", "source_ids", "id", "slug", "synthesis_id", "method_ref", "research_review_ref", "toc_labels", "section_aliases"]);
function authoredText(value, key = "") {
  if (OMIT_TEXT_KEYS.has(key)) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(item => authoredText(item)).join("\n");
  if (value && typeof value === "object") return Object.entries(value).map(([k, v]) => authoredText(v, k)).join("\n");
  return "";
}

function wikiLinks(text) {
  return [...text.matchAll(/!?\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)]
    .map(match => {
      const [target, anchor] = match[1].replace(/\\$/, "").trim().replace(/^wiki\//, "").replace(/\.md(?=#|$)/, "").split("#", 2);
      return { target, ...(anchor ? { anchor: slugAnchor(anchor) } : {}) };
    })
    .filter(link => link.target);
}

export function collectPreviewContext({ base, pages, syntheses, sources, vocabulary = readAutoLinkVocabulary(base), extraTargets = ["authors/karen-pendergrass"], maxContextPages = 80 }) {
  const selected = new Set([...pages, ...sources].map(file => file.replace(/^wiki\//, "").replace(/\.md$/, "")));
  const reasons = new Map(extraTargets.map(slug => [slug, new Set(["visible page attribution"])]));
  const direct = [];
  const escaped = Object.keys(vocabulary).sort((a, b) => b.length - a.length)
    .map(term => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/ /g, "\\s+"));
  const pattern = escaped.length ? new RegExp(`(?<![\\p{L}\\p{N}_])(${escaped.join("|")})(?![\\p{L}\\p{N}_])`, "giu") : null;
  const add = (slug, reason) => { if (!reasons.has(slug)) reasons.set(slug, new Set()); reasons.get(slug).add(reason); };
  for (const synthesis of syntheses) {
    const text = authoredText(synthesis);
    for (const link of wikiLinks(text)) { add(link.target, `authored link from ${synthesis.slug}`); direct.push({ from: synthesis.slug, ...link }); }
    if (pattern) for (const match of text.matchAll(pattern)) add(vocabulary[match[1].toLowerCase().replace(/\s+/g, " ")], `first-mention vocabulary in ${synthesis.slug}`);
  }
  const contextPages = [], unavailable = [];
  for (const [slug, why] of [...reasons].sort(([a], [b]) => a.localeCompare(b))) {
    if (selected.has(slug)) continue;
    // Source-record compilation remains restricted to the cited ledger. The
    // shared archive index is allowed without compiling the source corpus.
    if (slug.startsWith("sources/") && slug !== "sources/index") { unavailable.push({ target: slug, reason: "outside selected source ledger", from: [...why] }); continue; }
    const file = path.join(base, "wiki", `${slug}.md`);
    if (!fs.existsSync(file)) { unavailable.push({ target: slug, reason: "canonical page missing", from: [...why] }); continue; }
    const { data } = matter(fs.readFileSync(file, "utf8"));
    if (data.draft === true || data.draft === "true" || data.retired === true || data.provisional_scaffold === true || data.status === "tier1-stub" || data.evidence_tier === "pending") {
      unavailable.push({ target: slug, reason: "unpublished, retired or provisional destination", from: [...why] }); continue;
    }
    contextPages.push({ path: `wiki/${slug}.md`, slug, reasons: [...why] });
  }
  if (contextPages.length > maxContextPages) throw Error(`Scoped context preview exceeds ${maxContextPages} direct pages (${contextPages.length}); review its boundary before expanding it`);
  const staged = new Set([...selected, ...contextPages.map(page => page.slug)]);
  const unresolvedDirect = direct.filter(link => !staged.has(link.target));
  if (unresolvedDirect.length) throw Error(`Authored contextual link has no usable preview destination: ${JSON.stringify(unresolvedDirect)}`);
  return {
    schema_version: 1,
    scope: "Three assessed pilot pages, their selected source records, direct authored/contextual concept destinations and visible author attribution. No recursive context-page or source discovery expansion.",
    bounds: { context_depth: 1, maximum_context_pages: maxContextPages, actual_context_pages: contextPages.length, selected_sources: sources.length },
    pilot_pages: pages,
    context_pages: contextPages,
    authored_context_links: direct,
    unavailable_context_targets: unavailable,
    unresolved_direct_links: unresolvedDirect,
    assets: [],
    verification_limitations: ["Links reached after navigating into a contextual destination can leave this isolated preview's coverage. Context destinations are existing corpus pages and are not newly reviewed by staging them."],
  };
}

export function copyPreviewAssets({ base, staging, outerPreview, files, manifest }) {
  const assets = new Set(["static/icon.png", "static/og-image.png", "static/authors/karen-pendergrass-hmi-pink.webp"]);
  for (const file of files) {
    const text = fs.readFileSync(path.join(base, file), "utf8");
    for (const match of text.matchAll(/(?:^|[\s("'=])(?:\.\.\/)*\/?(static\/[^\s)"'<>{}?#]+)/gm)) assets.add(match[1]);
  }
  for (const asset of [...assets].sort()) {
    const source = path.resolve(base, "wiki", asset);
    if (!source.startsWith(path.resolve(base, "wiki", "static") + path.sep) || !fs.existsSync(source) || !fs.statSync(source).isFile()) continue;
    for (const dest of [path.join(staging, asset), path.join(outerPreview, asset)]) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(source, dest);
    }
    manifest.assets.push(asset);
  }
}

export function verifyPreviewContext(output, manifest) {
  for (const page of manifest.context_pages) {
    if (!fs.existsSync(path.join(output, `${page.slug}.html`))) throw Error(`Context page missing from rendered preview: ${page.slug}`);
  }
  for (const asset of manifest.assets) {
    if (!fs.existsSync(path.join(output, asset))) throw Error(`Context asset missing from rendered preview: ${asset}`);
  }
  const rendered = [];
  for (const file of manifest.pilot_pages) {
    const slug = file.replace(/^wiki\//, "").replace(/\.md$/, "");
    const links = [];
    function walk(node, inArticle = false) {
      const attrs = Object.fromEntries((node.attrs || []).map(attr => [attr.name, attr.value]));
      const article = inArticle || (node.tagName === "article" && (attrs.class || "").split(" ").includes("popover-hint"));
      if (article && node.tagName === "a" && attrs.href) links.push(attrs);
      for (const child of node.childNodes || []) walk(child, article);
    }
    walk(parse(fs.readFileSync(path.join(output, `${slug}.html`), "utf8")));
    const checked = [];
    for (const attrs of links.filter(link => (link.class || "").split(" ").includes("hmi-autolink"))) {
      const url = new URL(attrs.href, `https://preview.invalid/${slug}.html`);
      const target = decodeURIComponent(url.pathname).replace(/^\//, "").replace(/\.html$/, "").replace(/\/$/, "/index");
      if (!fs.existsSync(path.join(output, `${target}.html`))) throw Error(`Rendered first-mention link leaves preview coverage: ${slug} -> ${target}`);
      checked.push(target);
    }
    for (const link of manifest.authored_context_links.filter(link => link.from === path.posix.basename(slug))) {
      const found = links.some(attrs => {
        const url = new URL(attrs.href, `https://preview.invalid/${slug}.html`);
        return url.hostname === "preview.invalid" && decodeURIComponent(url.pathname).replace(/^\//, "").replace(/\.html$/, "").replace(/\/$/, "/index") === link.target && (!link.anchor || decodeURIComponent(url.hash.slice(1)) === link.anchor);
      });
      if (!found) throw Error(`Authored contextual link missing from rendered article: ${slug} -> ${link.target}`);
      if (link.anchor) {
        const targetHtml = fs.readFileSync(path.join(output, `${link.target}.html`), "utf8");
        let foundAnchor = false;
        function findAnchor(node) { if ((node.attrs || []).some(attr => attr.name === "id" && attr.value === link.anchor)) foundAnchor = true; for (const child of node.childNodes || []) findAnchor(child); }
        findAnchor(parse(targetHtml));
        if (!foundAnchor) throw Error(`Contextual destination anchor missing: ${slug} -> ${link.target}#${link.anchor}`);
      }
    }
    rendered.push({ page: slug, rendered_first_mention_links: checked.length, targets: [...new Set(checked)].sort(), result: "pass" });
  }
  manifest.rendered_context_verification = rendered;
}
