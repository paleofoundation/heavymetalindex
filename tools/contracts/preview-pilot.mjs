#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import { toHtml } from "hast-util-to-html";
import { build } from "esbuild";
import { root, register } from "./generate.mjs";
import { loadPilot, pilotDir, buildPilot, pageSourceIds } from "./pilot/compiler.mjs";
buildPilot({ check: true });
const out = path.join(root, "previews/contracts-pilot");
fs.mkdirSync(out, { recursive: true });
const baseline = JSON.parse(
  fs.readFileSync(path.join(root, pilotDir, "baseline.json"), "utf8"),
);
const sources = new Set(
  loadPilot().flatMap(s => pageSourceIds(s)),
);
const escape = (s) =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll('"', "&quot;");
const explorerStyle = fs.readFileSync(path.join(root, "quartz/components/styles/analyteExplorer.scss"), "utf8");
const explorerScript = (await build({ entryPoints: [path.join(root, "quartz/components/scripts/analyteExplorer.inline.ts")], bundle: true, write: false, platform: "browser", format: "iife" })).outputFiles[0].text;
const css = `:root{color-scheme:light;--ink:#2b1f24;--accent:#7b153b;--line:#e5dcd8}*{box-sizing:border-box}body{margin:0;color:var(--ink);background:#faf7f4;font:16px/1.65 system-ui,sans-serif}header{padding:18px 28px;border-bottom:1px solid var(--line);background:white}header strong{font-family:Georgia,serif;font-size:24px}header p{font-size:13px;margin:4px 0}a{color:var(--accent);text-underline-offset:3px;overflow-wrap:anywhere}main{max-width:1000px;padding:24px 32px 70px;margin:auto}h1,h2,h3{font-family:Georgia,serif;line-height:1.25}h1{font-size:38px}h2{font-size:27px;border-top:1px solid var(--line);padding-top:24px;margin-top:36px}h3{font-size:19px;margin:26px 0 10px}p{margin:10px 0 16px}blockquote{border-left:4px solid var(--accent);margin:22px 0;padding:8px 18px;background:#f2e8eb;font-size:14px}table{border-collapse:collapse;width:100%;font-size:13px;display:block;overflow-x:auto}th,td{padding:10px;border:1px solid var(--line);text-align:left;vertical-align:top}th{background:#f2ebed}details{padding:10px 12px;border:1px solid var(--line);margin:18px 0}summary{cursor:pointer;font-weight:600}nav{display:flex;flex-wrap:wrap;gap:12px;margin:14px 0}button,select{font:inherit;padding:9px 12px;border:1px solid #a68d96;border-radius:5px;color:var(--ink);background:white}button{cursor:pointer}button.active{background:var(--accent);color:white}.muted{color:#6e6267;font-size:13px}.status{display:inline-block;padding:2px 8px;background:#f2e8eb;font-size:12px}.split{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:0 24px 24px}.pane h2{border:0;font:600 15px system-ui;margin:12px 0;padding:0}iframe{width:100%;height:75vh;border:1px solid var(--line);background:white;border-radius:6px}.summary{margin:20px 24px;padding:16px 22px;border:1px solid var(--line);background:white}.summary p{margin:5px 0}.toolbar{padding:14px 24px 0}.toolbar nav{margin:0}.navlinks{font-size:13px}.toc{font-size:14px;columns:2;padding-left:20px}em{color:#6e6267;font-size:13px}@media(max-width:850px){.split{grid-template-columns:1fr}.pane:first-child{order:2}.pane:last-child{order:1}.toc{columns:1}main{padding:20px}h1{font-size:30px}}`;
const shell = (title, content) =>
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)}</title><style>${css}\n${explorerStyle}</style></head><body>${content}<script>${explorerScript}</script></body></html>`;
async function render(raw) {
  let text = matter(raw).content.replace(/\[\[([^\]]+)\]\]/g, (_, inner) => {
    const [target, ...rest] = inner.replaceAll("\\|", "|").split("|");
    const label = rest.join("|") || target.split("/").at(-1);
    const href =
      target.startsWith("sources/") && sources.has(target.slice(8))
        ? `source-${target.slice(8)}.html`
        : `https://heavymetalindex.com/${target}`;
    return `[${label}](${href})`;
  });
  text = text.replace(/href="\.\.\/sources\/([a-z0-9-]+)"/g, (_, key) => `href="${sources.has(key) ? `source-${key}.html` : `https://heavymetalindex.com/sources/${key}`}"`);
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug);
  return toHtml(await processor.run(processor.parse(text)));
}
const cards = [];
for (const s of loadPilot()) {
  const entry = baseline.pages.find((p) =>
    p.path.endsWith("/" + s.slug + ".md"),
  );
  for (const mode of ["before", "after"]) {
    const raw = fs.readFileSync(
      path.join(root, mode === "before" ? entry.baseline : entry.path),
      "utf8",
    );
    const label =
      mode === "before"
        ? "Previous working page — archived for comparison"
        : "Contract pilot — partial assessment";
    const toc =
      mode === "after"
        ? '<details><summary>Jump to a section</summary><ol class="toc">' +
          register.families[s.family].sections
            .map(
              (x) =>
                `<li><a href="#${x.heading
                  .toLowerCase()
                  .replace(/[^\p{L}\p{N}\s-]/gu, "")
                  .replaceAll(" ", "-")}">${escape(x.heading)}</a></li>`,
            )
            .join("") +
          "</ol></details>"
        : "";
    fs.writeFileSync(
      path.join(out, `${s.slug}-${mode}.html`),
      shell(
        `${s.title} — ${mode}`,
        `<header><strong>Heavy Metal Index</strong><p>${label} · Local content preview</p><a href="index.html" target="_top">Return to comparison</a></header><main>${toc}${await render(raw)}</main>`,
      ),
    );
  }
  cards.push({
    slug: s.slug,
    title: s.title,
    family: s.family,
    legacy_sections: entry.legacy_headings.length,
    questions: 36,
    reviewed: 0,
  });
}
for (const key of sources) {
  const raw = fs.readFileSync(
    path.join(root, "wiki/sources", key + ".md"),
    "utf8",
  );
  fs.writeFileSync(
    path.join(out, `source-${key}.html`),
    shell(
      matter(raw).data.title,
      `<header><strong>Heavy Metal Index</strong><p>Existing source record · local preview</p><a href="index.html">Comparison</a></header><main>${await render(raw)}</main>`,
    ),
  );
}
const notes = {
  cadmium:
    "Replaces accumulated study sections with 12 decision-focused sections. Separates food occurrence, dietary health context, controls and applicable requirements.",
  rice: "Replaces unsupported universal ranges and count-based confidence with scoped FDA observations. Corrects the uranium gap claim and separates grain from derivatives.",
  "infant-formula-powder-non-soy":
    "Keeps 230 cow-milk powder samples separate from other formula forms. Preserves censoring and prevents a direct comparison of prepared-for-feeding measurements with powder limits.",
};
const html = shell(
  "HMI · Compare the contract pilot",
  `<header><strong>Heavy Metal Index</strong><p>Three existing pages · Before and after · 17 October 2026</p><span class="status">LOCAL REVIEW · NO LIBRARY ROLLOUT</span></header><div class="toolbar"><nav aria-label="Choose a pilot page">${cards.map((c, i) => `<button data-slug="${c.slug}" class="${i === 0 ? "active" : ""}">${c.family[0].toUpperCase() + c.family.slice(1)}: ${escape(c.title)}</button>`).join("")}</nav></div><section class="summary"><strong id="name"></strong><p id="note"></p><p class="muted">Each new page addresses all 36 universal questions. Formal question-level review: 0/36 complete; source checks and useful answers do not substitute for a completed systematic assessment.</p><p class="navlinks"><a id="beforeLink" target="_blank">Open previous page</a> · <a id="afterLink" target="_blank">Open pilot page</a> · <a id="quartzLink" target="_blank">Production-layout preview</a> · <a href="review-record.json">Review record</a> · <a href="corrections.json">Correction log</a></p></section><div class="split"><section class="pane"><h2>BEFORE · Previous working page</h2><iframe id="before" title="Previous page"></iframe></section><section class="pane"><h2>AFTER · Contract pilot</h2><iframe id="after" title="Contract pilot page"></iframe></section></div><script>const cards=${JSON.stringify(cards)},notes=${JSON.stringify(notes)};function show(slug){const c=cards.find(x=>x.slug===slug);document.getElementById('name').textContent=c.title;document.getElementById('note').textContent=notes[slug];for(const mode of ['before','after']){const url=slug+'-'+mode+'.html';document.getElementById(mode).src=url;document.getElementById(mode+'Link').href=url}document.getElementById('quartzLink').href='quartz/'+({metal:'metals',ingredient:'ingredients',product:'products'}[c.family])+'/'+slug+'.html';for(const b of document.querySelectorAll('button[data-slug]'))b.classList.toggle('active',b.dataset.slug===slug);history.replaceState(null,'','#'+slug)}for(const b of document.querySelectorAll('button[data-slug]'))b.addEventListener('click',()=>show(b.dataset.slug));show(cards.some(c=>c.slug===location.hash.slice(1))?location.hash.slice(1):cards[0].slug);</script>`,
);
fs.writeFileSync(path.join(out, "index.html"), html);
fs.writeFileSync(path.join(out, "mobile-check.html"), shell("HMI narrow-screen verification", '<header><strong>HMI · 390 px layout check</strong><p>The actual Rice pilot page in a narrow viewport.</p></header><iframe title="Rice pilot at 390 pixels" src="quartz/ingredients/rice.html#heavy-metal-contamination-profile" style="display:block;width:390px;height:900px;margin:20px auto;max-width:100%;border:1px solid #dfd2d7"></iframe>'));
for (const [name, from] of [
  ["review-record.json", "review.json"],
  ["corrections.json", "corrections.json"],
])
  fs.copyFileSync(path.join(root, pilotDir, from), path.join(out, name));
fs.writeFileSync(
  path.join(out, "manifest.json"),
  JSON.stringify(
    {
      pages: cards,
      notice:
        "Content comparison only; uses scoped Markdown rendering, not the full production Quartz layout. No data is fetched at question time.",
    },
    null,
    2,
  ) + "\n",
);
console.log("Local comparison written: " + path.join(out, "index.html"));
