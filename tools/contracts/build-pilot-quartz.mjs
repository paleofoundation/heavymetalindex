#!/usr/bin/env node
import { verifyRendered } from "./pilot/verify-rendered.mjs";
import { buildSourceIndex } from "../sources/build-source-index.mjs";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { root } from "./generate.mjs";
import { buildPilot, pilotDir, hash, loadPilot, pageSourceIds } from "./pilot/compiler.mjs";
import { collectPreviewContext, copyPreviewAssets, verifyPreviewContext } from "./pilot/preview-context.mjs";
buildPilot({ check: true });
buildSourceIndex({ base: root });
const staging = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-contract-quartz-"));
const out = path.join(root, "previews/contracts-pilot/quartz");
try {
  const pages = JSON.parse(
    fs.readFileSync(path.join(root, pilotDir, "baseline.json"), "utf8"),
  ).pages.map((p) => p.path);
  const syntheses = loadPilot();
  const sources = [...new Set([...JSON.parse(
    fs.readFileSync(path.join(root, pilotDir, "review.json"), "utf8"),
  ).source_checks.map(s => s.source_id), ...syntheses.flatMap(s => pageSourceIds(s))])].map(id => `wiki/sources/${id}.md`);
  const coverage = collectPreviewContext({ base: root, pages, syntheses, sources, extraTargets: ["authors/karen-pendergrass", "sources/index"] });
  const catalogue = JSON.parse(fs.readFileSync(path.join(root, "wiki/static/data/source-index.json"), "utf8"));
  // Reuse already rendered public source destinations. Only source records
  // without a cached public page need compilation in this local preview.
  const catalogueSources = catalogue.sources.filter(record => !fs.existsSync(path.join(root, "public/sources", record.id + ".html")))
    .map(record => "wiki/sources/" + record.id + ".md").filter(file => !sources.includes(file));
  const stagedFiles = [...pages, ...sources, ...catalogueSources, ...coverage.context_pages.map(page => page.path)];
  for (const file of stagedFiles) {
    const dest = path.join(staging, file.replace(/^wiki\//, ""));
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(path.join(root, file), dest);
  }
  fs.writeFileSync(
    path.join(staging, "index.md"),
    "---\ntitle: HMI contract pilot\n---\n# HMI contract pilot\n\nLocal review build of three assessed pilot pages, selected sources and their direct contextual destinations. Further navigation can leave this preview's coverage.\n\n" +
      pages
        .map(
          (p) => "- [[" + p.replace(/^wiki\//, "").replace(/\.md$/, "") + "]]",
        )
        .join("\n") +
      "\n",
  );
  copyPreviewAssets({ base: root, staging, outerPreview: path.join(root, "previews/contracts-pilot"), files: stagedFiles, manifest: coverage });
  execFileSync(
    process.execPath,
    [
      path.join(root, "quartz/bootstrap-cli.mjs"),
      "build",
      "-d",
      staging,
      "-o",
      out,
      "--concurrency",
      "1",
    ],
    { cwd: root, stdio: "inherit" },
  );
  const destinations = [...catalogue.sources.map(record => 'sources/' + record.id), ...catalogue.pages.map(page => page.slug)];
  let reused = 0;
  const unavailable = [];
  for (const slug of new Set(destinations)) {
    const target = path.join(out, slug + '.html');
    if (fs.existsSync(target)) continue;
    const cached = path.join(root, 'public', slug + '.html');
    if (!fs.existsSync(cached)) { unavailable.push(slug); continue; }
    fs.mkdirSync(path.dirname(target), {recursive:true});
    fs.copyFileSync(cached, target);
    reused++;
  }
  coverage.source_catalogue = {records:catalogue.sources.length, newly_compiled_source_destinations:catalogueSources.length, reused_public_destinations:reused, unavailable_destinations:unavailable, limitation:'Reused public destinations retain their existing rendered content; copying does not imply a new scientific review.'};
  // A persistent browser preview must not reuse yesterday's script/style bundle.
  const assets = ["postscript.js"].map(name => [name, hash(fs.readFileSync(path.join(out, name))).slice(0, 12)]);
  function versionAssets(dir) {
    for (const entry of fs.readdirSync(dir, {withFileTypes:true})) {
      const file=path.join(dir,entry.name);
      if(entry.isDirectory()) versionAssets(file);
      else if(entry.name.endsWith('.html')) {
        let html=fs.readFileSync(file,'utf8');
        for(const [name,version] of assets) html=html.replaceAll(name+'"',name+'?v='+version+'"');
        fs.writeFileSync(file,html);
      }
    }
  }
  versionAssets(out);
  verifyPreviewContext(out, coverage);
  const verification=verifyRendered(out);
  fs.writeFileSync(path.join(root,pilotDir,"render-verification.json"),JSON.stringify(verification,null,2)+"\n");
  fs.writeFileSync(path.join(root,pilotDir,"preview-coverage.json"),JSON.stringify(coverage,null,2)+"\n");
  console.log("Isolated Quartz pilot: " + out);
} finally {
  fs.rmSync(staging, { recursive: true, force: true });
}
