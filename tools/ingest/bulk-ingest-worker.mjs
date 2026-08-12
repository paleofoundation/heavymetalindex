#!/usr/bin/env node
// Bulk source-page ingest worker.
//
// Successor to tmp/codex-bulk-ingest-worker-batch.mjs, whose mechanical extractors
// fabricated analyte and provenance frontmatter across 2,200 committed pages (removed in
// e8e2c8158). What changed, and why:
//
//   1. Analyte scope comes from tools/ingest/metal-evidence.mjs, which asserts a metal
//      only on its spelled-out name appearing on a measurement-bearing line. The old
//      `/\bal\b/` against lowercased text matched "et al." and put Aluminium on 99.3% of
//      pages. Symbols can corroborate but never assert.
//   2. Author and year come from Crossref via tools/ingest/crossref-mint.mjs and FAIL
//      CLOSED. The old scrape fell back to the literal token "authors" (86% of keys) and
//      to `year: 2026` (91%). A skipped PDF is recoverable; a fabricated cite-key is not.
//   3. The "Key numbers" quoted on the page are the same lines that justified the
//      analyte assertion, so evidence and assertion cannot diverge by construction.
//   4. Product routing no longer matches the file PATH, and /cod/ is anchored. The
//      unanchored pattern matched the "Codex ..." folder name and routed papers to
//      fish-marine-non-predatory.
//
// Usage: node tools/ingest/bulk-ingest-worker.mjs [root] [--limit N] [--dry-run]

import { execFileSync, spawnSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { metalEvidenceGate } from "./metal-evidence.mjs";
import { resolveWork, mintCiteKey, normalizeDoi } from "./crossref-mint.mjs";

const repo = process.env.HMI_REPO || "/Users/karenpendergrass/Desktop/heavy-metal-index";
const argv = process.argv.slice(2);
const flags = new Set(argv.filter(a => a.startsWith("--")));
const positional = argv.filter(a => !a.startsWith("--"));
const root = positional[0] || "/Volumes/HMI-Library/heavy-metal-index-raw";
const limitArg = argv.find(a => a.startsWith("--limit"));
const LIMIT = limitArg ? Number(limitArg.split("=")[1] || positional[1] || 0) : 0;
const DRY_RUN = flags.has("--dry-run");
const batchSize = Number(process.env.HMI_BULK_BATCH_SIZE || 200);

const today = new Date().toISOString().slice(0, 10);
const reportPath = path.join(repo, `wiki/batch-reports/bulk-ingest-${today}.md`);
const auditQueue = path.join(repo, "data/evidence/audit-queue.csv");
const wikiEditAudit = path.join(repo, "data/evidence/wiki_edit_audit.jsonl");
const routingFiles = [
  "data/evidence/product_source_routing_audit.csv",
  "data/evidence/routing_unresolved.csv",
  "data/evidence/routing_malformed.csv",
];

function run(cmd, args, opts = {}) {
  return execFileSync(cmd, args, {
    cwd: repo, encoding: "utf8",
    stdio: opts.stdio || ["ignore", "pipe", "pipe"],
    maxBuffer: opts.maxBuffer || 80 * 1024 * 1024,
    env: { ...process.env, ...(opts.env || {}) },
  });
}

function tryRun(cmd, args, opts = {}) {
  return spawnSync(cmd, args, {
    cwd: repo, encoding: "utf8",
    maxBuffer: opts.maxBuffer || 80 * 1024 * 1024,
    env: { ...process.env, ...(opts.env || {}) },
  });
}

function appendReport(line) {
  // A dry run must leave no trace. The report doubles as dedup state (reportRecordedShas
  // treats any SHA in it as already-seen), so writing skip lines during a dry run would
  // make the real run silently skip those PDFs.
  if (DRY_RUN) return;
  if (!fs.existsSync(reportPath)) {
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, `# Bulk ingest report - ${today}\n\n## Progress\n\n`, "utf8");
  }
  fs.appendFileSync(reportPath, `${line}\n`, "utf8");
}

const sha256File = f => crypto.createHash("sha256").update(fs.readFileSync(f)).digest("hex");
const csvEscape = s => (/[",\n]/.test(String(s ?? "")) ? `"${String(s).replaceAll('"', '""')}"` : String(s ?? ""));
const cleanText = s => String(s ?? "").replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim();
const yamlQuote = s => JSON.stringify(cleanText(s));

function getAllPdfs(dir) {
  return run("find", [dir,
    "(", "-path", "*/microbiome-medicine", "-o", "-path", "*/markdown", "-o", "-path", "*/lab-data", ")",
    "-prune", "-o", "-type", "f", "-iname", "*.pdf", "-print",
  ], { maxBuffer: 80 * 1024 * 1024 }).split("\n").filter(Boolean).sort((a, b) => a.localeCompare(b));
}

function sourceFolderFor(pdf) {
  const parts = path.relative(root, pdf).split(path.sep);
  return parts.length >= 2 ? parts.slice(0, 2).join("/") : (parts[0] || path.basename(root));
}

// Read the corpus ONCE. The old worker re-read every source page after every single
// ingest, which is quadratic; new identities are added to these sets incrementally.
function collectExisting() {
  const files = run("find", ["wiki/sources", "-type", "f", "-name", "*.md"], { maxBuffer: 30 * 1024 * 1024 })
    .split("\n").filter(Boolean);
  const dois = new Set(), shas = new Set(), handles = new Set(), citeKeys = new Set();
  for (const f of files) {
    const txt = fs.readFileSync(path.join(repo, f), "utf8");
    const cite = txt.match(/^cite_key:\s*"?([^"\n]+)"?/m)?.[1]?.trim();
    const doi = txt.match(/^doi:\s*"?([^"\n]+)"?/m)?.[1]?.trim().toLowerCase();
    const sh = txt.match(/^raw_sha256:\s*"?([a-f0-9]{64})"?/m)?.[1]?.trim();
    const rh = txt.match(/^raw_handle:\s*"?([^"\n]+)"?/m)?.[1]?.trim();
    if (cite) citeKeys.add(cite);
    if (doi && !["null", "unknown"].includes(doi)) dois.add(normalizeDoi(doi));
    if (sh) shas.add(sh);
    if (rh) handles.add(rh);
  }
  return { dois, shas, handles, citeKeys };
}

function reportRecordedShas() {
  if (!fs.existsSync(reportPath)) return new Set();
  return new Set([...fs.readFileSync(reportPath, "utf8").matchAll(/[a-f0-9]{64}/g)].map(m => m[0]));
}

function extractText(pdf) {
  const out = path.join(os.tmpdir(), `hmi-pdf-${process.pid}-${crypto.randomUUID()}.txt`);
  const r = tryRun("pdftotext", ["-layout", pdf, out], { maxBuffer: 5 * 1024 * 1024 });
  if (r.status !== 0 || !fs.existsSync(out)) throw new Error(`pdftotext failed: ${r.stderr || r.stdout}`);
  const txt = fs.readFileSync(out, "utf8");
  fs.unlinkSync(out);
  return txt;
}

function parseDoi(text, file) {
  const hay = `${path.basename(file)}\n${text.slice(0, 25000)}`;
  const m = hay.match(/\b10\.\d{4,9}\/[-._;()/:A-Z0-9]+/i);
  return m ? normalizeDoi(m[0]) : null;
}

// Product routing from the source TEXT only. The old version also matched the file path,
// which is how the "Codex ..." directory name reached the unanchored /cod/ pattern.
function detectProducts(text) {
  const lower = String(text).toLowerCase();
  const products = new Set();
  if (/infant formula|milk formula|formula powder|powdered formula|follow[- ]?up milk|follow[- ]?on formula/.test(lower)) products.add("infant-formula-powder");
  if (/canned (tuna|fish|seafood)|tin(?:ned)? (tuna|fish|seafood)/.test(lower)) products.add("canned-seafood");
  if (/\btuna\b|\bshark\b|swordfish|marlin|king mackerel|predatory fish|large pelagic/.test(lower)) products.add("fish-marine-predatory");
  if (/\bsalmon\b|\bsardine\b|anchov|\bherring\b|\bcod\b|\bhake\b|\bmackerel\b|marine fish|fish muscle|\bseafood\b/.test(lower)) products.add("fish-marine-non-predatory");
  if (/\bshrimp\b|\bprawn\b|\bcrab\b|\blobster\b|\bclam\b|\boyster\b|\bmussel\b|shellfish|crustacean|mollusc|cephalopod/.test(lower)) products.add("shellfish");
  if (/home meal replacement|ready[- ]to[- ]eat|ready[- ]to[- ]heat|prepared meal|mixed meal/.test(lower)) products.add("mixed-meals-prepared-foods");
  if (/seaweed|\bkelp\b|\bnori\b|wakame|kombu/.test(lower)) products.add("seaweed-kelp-foods");
  return [...products];
}

function jurisdiction(text) {
  const map = [
    ["United States|USA|U\\.S\\.|California|New Bedford", "US"], ["Peru|Lima", "PE"], ["Brazil|Amazon", "BR"],
    ["Korea|Daejeon", "KR"], ["China|Chinese", "CN"], ["Norway|Norwegian", "NO"], ["Sri Lanka", "LK"],
    ["Mediterranean", "EU"], ["Turkey|Turkish", "TR"], ["India|Indian", "IN"], ["Nigeria", "NG"],
    ["Portugal", "PT"], ["Spain", "ES"], ["Italy", "IT"], ["Japan", "JP"],
  ];
  for (const [re, code] of map) if (new RegExp(re, "i").test(text)) return [code];
  return [];
}

function methodLines(text) {
  return text.split(/\n/).map(l => l.replace(/\s+/g, " ").trim()).filter(l =>
    l.length > 20 && l.length < 220 &&
    /(ICP|AAS|HPLC|atomic absorption|mass spectrometry|digestion|LOD|LOQ|mercury analyzer|DMA|cold vapor|CVAFS|CV-AAS)/i.test(l)
  ).slice(0, 18);
}

// Brand firewall (CLAUDE.md Part 12): never reproduce brand-level tables.
function brandSensitive(lines) {
  return lines.some(l => /\bbrand\b|manufacturer|commercial name|trademark/i.test(l));
}

const metalPage = m => ({
  Pb: "lead", Cd: "cadmium", iAs: "arsenic", tAs: "arsenic", MeHg: "mercury",
  tHg: "mercury", Ni: "nickel", Al: "aluminum", Sn: "tin", Cr: "chromium",
  Sb: "antimony", U: "uranium",
}[m] || m.toLowerCase());

function sourcePage({ citeKey, work, handle, pdf, hash, metals, evidence, products, jurs, methods }) {
  const productLinks = products.map(p => `"[[products/${p}]]"`).join(", ");
  // Quote the lines that justified each assertion, grouped by the analyte they support.
  const evidenceBlock = metals.map(m =>
    `### ${m}\n\n` + evidence[m].slice(0, 12)
      .map(l => `- ${l.replaceAll("[", "(").replaceAll("]", ")")}`).join("\n")
  ).join("\n\n");

  return `---
type: source
raw_handle: ${handle}
cite_key: ${citeKey}
title: ${yamlQuote(work.title)}
authors: [${yamlQuote(work.surname)}]
year: ${work.year}
publication: ${yamlQuote(work.container || "Peer-reviewed article")}
doi: ${yamlQuote(work.doi)}
source_type: peer-reviewed
evidence_tier: B
license: "PDF-local extraction; verify publisher license before reuse"
access_url: ${yamlQuote(`https://doi.org/${work.doi}`)}
raw_path: ${yamlQuote(pdf)}
raw_sha256: ${yamlQuote(hash)}
metals: [${metals.join(", ")}]
ingredients: []
products: [${productLinks}]
matrices: [${products.join(", ")}]
jurisdictions: [${jurs.join(", ")}]
sample_n: null
sample_population: ${yamlQuote("Not mechanically resolved from the PDF; see Key numbers for source-reported sample descriptors.")}
updated: ${today}
---

# ${cleanText(work.title)}

This source page is a mechanical bulk-ingest record for a PDF in the Heavy Metal Index raw corpus. It preserves source-level identity, routeable analyte and product scope, and the exact extracted numeric lines that justify that scope, for later human or fresh-context audit. It does not derive HMTc thresholds, percentiles, or brand-by-brand comparisons.

Author, year, and title are taken from the Crossref record for the DOI, not scraped from the PDF text.

## Key numbers

Each analyte named in \`metals:\` is listed below with the measurement-bearing lines that caused it to be asserted. Lines are copied from the verified extraction and retain the source units and wording where legible. An analyte with no lines here would not appear in the frontmatter.

${evidenceBlock || "- No routeable numeric line was safely extracted."}

## Methods (brief)

${methods.map(l => `- ${l.replaceAll("[", "(").replaceAll("]", ")")}`).join("\n") || "- Analytical method details were not mechanically resolved from extracted text."}

## Implications

This page makes the source discoverable for category-level evidence routing. Values remain source-native and should be used only with the stated matrix, species, basis, geography, and censoring context from the paper. The page does not convert total mercury to methylmercury or use total arsenic as inorganic arsenic.

## Wiki pages this source may touch

${products.map(p => `- [[products/${p}]]`).join("\n")}
${metals.map(m => `- [[metals/${metalPage(m)}]]`).join("\n")}

## Verification notes

- Identity check: DOI, raw handle, cite-key, and SHA-256 were compared against existing \`wiki/sources/\` pages before creation.
- Provenance: first author and publication year resolved from Crossref for DOI \`${work.doi}\`. PDFs whose DOI does not resolve are skipped, not given a fallback key.
- Full-PDF read: \`pdftotext -layout\` was run twice and the extraction hashes compared before the page was written.
- Analyte scope: each metal is asserted only where its spelled-out name appears on a line carrying a measurement. Element symbols alone never assert an analyte.
- Brand firewall: the worker skips PDFs whose numeric lines appear brand-sensitive; this page contains category-level or species-level evidence only.
- HMTc firewall: no certification limit, status, or ratchet calculation is stated; any occurrence values remain descriptive only.
`;
}

function gitCommit(files, msg) {
  run("git", ["add", "--", ...files]);
  for (let i = 0; i < 5; i++) {
    const r = tryRun("git", ["commit", "-m", msg, "--", ...files], { maxBuffer: 60 * 1024 * 1024 });
    if (r.status === 0) return run("git", ["rev-parse", "--short=9", "HEAD"]).trim();
    if (/index\.lock|another git process|commit lock/i.test(`${r.stderr}\n${r.stdout}`)) {
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 3000);
      continue;
    }
    throw new Error(`git commit failed:\n${r.stdout}\n${r.stderr}`);
  }
  throw new Error("git commit failed after retries");
}

function routeCount(citeKey) {
  const p = path.join(repo, "data/evidence/product_source_routing_audit.csv");
  if (!fs.existsSync(p)) return 0;
  return fs.readFileSync(p, "utf8").split("\n").filter(l => l.includes(citeKey)).length;
}

// Routing is validated once per batch rather than after every page. The old worker ran
// the full audit per ingest, which dominated wall-clock on a 12k-PDF corpus.
function validateRoutingOrThrow() {
  const r = tryRun("npm", ["run", "evidence:source-routes"], { maxBuffer: 120 * 1024 * 1024 });
  if (r.status !== 0) throw new Error(`routing audit failed:\n${r.stdout}\n${r.stderr}`);
  // Read the `severity` column rather than substring-matching the line. The header
  // itself contains the column name `missing_blocking`, so a naive /blocking/i test
  // flags the header on every run and stops a healthy batch from committing.
  const p = path.join(repo, "data/evidence/routing_malformed.csv");
  if (!fs.existsSync(p)) return;
  const [header, ...rows] = fs.readFileSync(p, "utf8").split("\n").filter(l => l.trim());
  const cols = (header || "").split(",");
  const sevIdx = cols.indexOf("severity");
  const missIdx = cols.indexOf("missing_blocking");
  const blocking = rows.filter(l => {
    const f = l.split(",");
    return (sevIdx >= 0 && f[sevIdx]?.trim().toLowerCase() === "blocking") ||
           (missIdx >= 0 && (f[missIdx] || "").trim() !== "");
  });
  if (blocking.length) throw new Error(`blocking malformed rows:\n${blocking.slice(0, 10).join("\n")}`);
}

function batchCommit(batch, reason) {
  if (batch.length === 0) return null;
  validateRoutingOrThrow();
  const sourceFiles = batch.map(b => b.outRel);
  const files = [...sourceFiles, "data/evidence/audit-queue.csv", "data/evidence/wiki_edit_audit.jsonl", ...routingFiles];
  const rows = batch.reduce((sum, b) => sum + routeCount(b.citeKey), 0);
  const msg = `ingest batch: ${batch.length} source pages from heavy-metal-index-raw

- Create source pages ${batch[0].citeKey} through ${batch[batch.length - 1].citeKey}.
- Author/year resolved from Crossref; analyte scope gated on measurement-bearing evidence lines.
- Batch reason: ${reason}.

Routing: ${rows} product-page rows generated across batch.

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>`;
  const commit = gitCommit(files, msg);
  for (const item of batch) appendReport(`- COMMITTED ${item.citeKey} | batch commit ${commit}`);
  return commit;
}

async function main() {
  appendReport(`\n### Worker launch ${new Date().toISOString()}\n- Root: \`${root}\`\n- Batch size: ${batchSize}${DRY_RUN ? "\n- DRY RUN: no pages written, no commits" : ""}`);
  const pdfs = getAllPdfs(root);
  console.log(`Found ${pdfs.length} PDFs under ${root}${LIMIT ? ` (limit ${LIMIT})` : ""}`);

  const existing = collectExisting();
  const reportShas = reportRecordedShas();
  const skipReasons = new Map();
  let made = 0, skipped = 0, considered = 0;
  let batch = [];

  const note = reason => skipReasons.set(reason, (skipReasons.get(reason) || 0) + 1);

  for (const pdf of pdfs) {
    if (LIMIT && considered >= LIMIT) break;
    const rel = path.relative(root, pdf);
    try {
      const hash = sha256File(pdf);
      if (existing.shas.has(hash) || reportShas.has(hash)) { skipped++; note("duplicate-sha"); continue; }
      considered++;

      const text1 = extractText(pdf);
      const text2 = extractText(pdf);
      if (crypto.createHash("sha256").update(text1).digest("hex") !== crypto.createHash("sha256").update(text2).digest("hex")) {
        appendReport(`- SKIP extraction-unstable | \`${rel}\` | sha256 ${hash}`);
        skipped++; note("extraction-unstable"); continue;
      }

      const doi = parseDoi(text1, pdf);
      if (!doi) { appendReport(`- SKIP no-doi | \`${rel}\` | sha256 ${hash}`); skipped++; note("no-doi"); continue; }
      if (existing.dois.has(doi)) { skipped++; note("duplicate-doi"); continue; }

      // Analyte gate BEFORE the network call, so a non-metal paper costs no Crossref quota.
      const gate = metalEvidenceGate(text1);
      if (!gate.ok) {
        appendReport(`- SKIP no-metal-evidence | \`${rel}\` | doi ${doi} | sha256 ${hash} | ${gate.reason}`);
        skipped++; note("no-metal-evidence"); continue;
      }
      const quoted = gate.metals.flatMap(m => gate.evidence[m]);
      if (brandSensitive(quoted)) {
        appendReport(`- SKIP brand-firewall | \`${rel}\` | doi ${doi} | sha256 ${hash} | brand-sensitive numeric line detected.`);
        skipped++; note("brand-firewall"); continue;
      }

      const products = detectProducts(text1);
      if (products.length === 0) {
        appendReport(`- SKIP no-product-route | \`${rel}\` | doi ${doi} | sha256 ${hash} | no taxonomy product slug resolved.`);
        skipped++; note("no-product-route"); continue;
      }

      // Fail closed: no Crossref record means no page, never a fabricated key.
      const work = await resolveWork(doi);
      if (!work) {
        appendReport(`- SKIP unresolvable-doi | \`${rel}\` | doi ${doi} | sha256 ${hash} | Crossref gave no usable author/year; not minting a fallback key.`);
        skipped++; note("unresolvable-doi"); continue;
      }

      let citeKey;
      try { citeKey = mintCiteKey(work); }
      catch (err) {
        appendReport(`- SKIP unmintable-cite-key | \`${rel}\` | doi ${doi} | sha256 ${hash} | ${err.message}`);
        skipped++; note("unmintable-cite-key"); continue;
      }
      let unique = citeKey, n = 2;
      while (existing.citeKeys.has(unique) || fs.existsSync(path.join(repo, "wiki/sources", `${unique}.md`))) unique = `${citeKey}-${n++}`;
      citeKey = unique;

      const handle = `HMIRAW_${doi.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase()}`;
      if (existing.handles.has(handle)) { skipped++; note("duplicate-handle"); continue; }

      if (DRY_RUN) {
        console.log(`WOULD INGEST ${citeKey} | metals=${gate.metals.join("/")} | products=${products.join("/")}`);
        made++;
        existing.citeKeys.add(citeKey); existing.dois.add(doi); existing.shas.add(hash); existing.handles.add(handle);
        continue;
      }

      const outRel = `wiki/sources/${citeKey}.md`;
      fs.writeFileSync(path.join(repo, outRel), sourcePage({
        citeKey, work, handle, pdf, hash,
        metals: gate.metals, evidence: gate.evidence, products,
        jurs: jurisdiction(text1), methods: methodLines(text1),
      }), "utf8");

      const ts = new Date().toISOString();
      fs.appendFileSync(auditQueue, `${[citeKey, sourceFolderFor(pdf), handle, "pending", ts, "pending", "", "", "bulk worker fresh source-page ingest; Crossref-minted key; evidence-gated analytes"].map(csvEscape).join(",")}\n`, "utf8");
      fs.appendFileSync(wikiEditAudit, JSON.stringify({
        edit_id: crypto.randomUUID(), page: outRel, span_id: "source_page:create",
        source_document: `${citeKey} | https://doi.org/${doi}`, retrieval_date: today,
        models_used: ["anthropic/claude-opus-5"], model_agreement_state: "single_model",
        applied_at: ts, commit_sha: "pending",
      }) + "\n", "utf8");

      // Incremental identity update — no full corpus rescan per page.
      existing.citeKeys.add(citeKey); existing.dois.add(doi); existing.shas.add(hash); existing.handles.add(handle);
      reportShas.add(hash);

      batch.push({ citeKey, outRel });
      appendReport(`- STAGED ${citeKey} | \`${rel}\` | doi ${doi} | sha256 ${hash} | metals ${gate.metals.join("/")}`);
      console.log(`STAGED ${citeKey} metals=${gate.metals.join("/")} batch=${batch.length}/${batchSize}`);
      made++;

      if (batch.length >= batchSize) {
        const commit = batchCommit(batch, `batch size ${batchSize} reached`);
        console.log(`BATCH COMMIT ${commit} count=${batch.length}`);
        batch = [];
      }
    } catch (err) {
      appendReport(`- SKIP worker-exception | \`${rel}\` | ${String(err.message || err).replace(/\n/g, " ").slice(0, 500)}`);
      console.error(`SKIP ${rel}: ${err.message || err}`);
      skipped++; note("worker-exception");
    }
  }

  if (batch.length > 0 && !DRY_RUN) {
    const commit = batchCommit(batch, "root exhausted");
    console.log(`FINAL BATCH COMMIT ${commit} count=${batch.length}`);
  }

  const breakdown = [...skipReasons.entries()].sort((a, b) => b[1] - a[1]).map(([r, n]) => `  - ${r}: ${n}`).join("\n");
  appendReport(`\n### Worker complete ${new Date().toISOString()}\n- Ingested: ${made}\n- Skipped: ${skipped}\n${breakdown}\n`);
  console.log(`DONE ingested=${made} skipped=${skipped}\n${breakdown}`);
}

main().catch(err => { console.error(err); process.exit(1); });
