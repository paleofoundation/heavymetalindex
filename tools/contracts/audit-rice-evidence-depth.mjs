#!/usr/bin/env node
// Reproducible, internal planning map of existing records, not study eligibility
// or scientific approval. Canonical source/evidence identities are reused.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import matter from "gray-matter";
import { root, register } from "./generate.mjs";
import { parseCsv } from "../evidence/lib/csv.mjs";

const output = "data/evidence/contracts/pilot-2026-10-17/rice-depth";
const readJSON = file => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const hash = s => crypto.createHash("sha256").update(s).digest("hex");
const baseline = readJSON("data/evidence/contracts/pilot-2026-10-17/rice-depth-inventory-audit.json");
const retained = new Set(baseline.rows.map(r => r.id));
const synthesis = readJSON("data/evidence/syntheses/pilot-rice-v1.json");
const cited = new Set(synthesis.sections.flatMap(s => s.answers.flatMap(a => a.source_keys)));
const clean = s => String(s ?? "").replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, "$2$1").replace(/\s+/g, " ").trim();
const topics = {
  occurrence: /concentrations?|occurrence|contamination|market|survey|diet study|monitoring|content|distribution|samples/i,
  pathways: /uptake|transport|translocat|root|soil|paddy|irrigat|redox|rhizosphere|microb|methylat|demethylat|deposition/i,
  variation: /geograph|region|origin|cultivar|variet|genotyp|gwas|country|countries|season|harvest|variability/i,
  processing: /cook|rins|wash|soak|mill|polish|bran|parboil|ferment|sprout|fraction|protein|syrup|flour|extract|starch/i,
  controls: /mitigat|remov|reduc|remediat|immobili|biochar|amendment|silicon|selenium|water management|intervention|fertili|breeding|low.accumulation/i,
  tradeoffs: /trade.off|yield|nutrient|nutriti|quality|waste|cost|mass.balance|co.accumul|antagon|simultaneous|arsenic and cadmium|cadmium and arsenic|as and cd|cd and as/i,
  testing: /analyt|method|detection|speciation|icp|spectro|sensor|validation|bioaccessib|reporting limit|lod|loq/i,
  procurement: /sourc|supply|supplier|traceab|lot|market|retail|quality control|guidance/i,
  exposure: /exposure|intake|consumption|bioavailab|bioaccessib|human|infant|child|pregnan|cohort|biomarker|urinary|risk assess|health/i,
  regulation: /regulat|guidance|maximum level|action level|food code|standard|benchmark/i,
};
function sectionsOf(raw) {
  const lines = raw.split(/\r?\n/), sections = [];
  let current = { heading: "Preamble", line: 1, text: "" };
  lines.forEach((line, i) => {
    const match = line.match(/^#{1,3}\s+(.+)$/);
    if (match) {
      if (current.text.trim()) sections.push(current);
      current = { heading: match[1], line: i + 1, text: "" };
    } else current.text += line + "\n";
  });
  if (current.text.trim()) sections.push(current);
  return sections.filter(s => !/update history|related evidence|related pages|references|works cited/i.test(s.heading));
}
const candidates = [], errors = [], scanManifest = [];
let scanned = 0;
for (const name of fs.readdirSync(path.join(root, "wiki/sources")).filter(n => n.endsWith(".md")).sort()) {
  const id = name.slice(0, -3), file = "wiki/sources/" + name;
  let raw, parsed;
  try { raw = fs.readFileSync(path.join(root, file), "utf8"); parsed = matter(raw); }
  catch (e) { errors.push({file, error: String(e)}); continue; }
  if (parsed.data.type !== "source") continue;
  scanned++;
  scanManifest.push({record_path:file,sha256:hash(raw)});
  const d = parsed.data;
  const reasons = [];
  if (retained.has(id)) reasons.push("retained-page-candidate");
  if (/\brice\b|oryza\s+sativa/i.test(String(d.title ?? ""))) reasons.push("rice-in-title");
  const ingredientSlugs = (d.ingredients ?? []).flatMap(v => [...String(v).matchAll(/ingredients\/([^\]|/]+)/g)].map(m=>m[1]));
  if (ingredientSlugs.some(slug => /rice/i.test(slug) && !/^non-rice/i.test(slug))) reasons.push("rice-material-ingredient-link");
  if (ingredientSlugs.some(slug => /^non-rice/i.test(slug))) reasons.push("non-rice-comparator-ingredient-link");
  if ((d.matrices ?? []).some(v => /rice|oryza/i.test(String(v)))) reasons.push("rice-matrix-metadata");
  if (!reasons.length) continue;
  const sections = sectionsOf(raw);
  const overview = sections.find(s => /overview|summary|abstract/i.test(s.heading)) ?? sections.find(s=>s.heading!=="Preamble");
  const key = sections.filter(s => /key (numbers|findings|results)|results|findings|concentrations|occurrence|effects/i.test(s.heading));
  const methods = sections.filter(s => /method|limitation|evidence fitness|scope|caveat|uncertainty|review note|correction/i.test(s.heading));
  const topicText = [d.title, JSON.stringify(d.matrices), overview?.text, ...key.map(s => s.text)].join("\n");
  const tags = Object.entries(topics).filter(([,regex]) => regex.test(topicText)).map(([name]) => name);
  const fullText = parsed.content.replace(/<!-- BEGIN: hmi-page-history -->[\s\S]*?<!-- END: hmi-page-history -->/g, "");
  candidates.push({
    source_id: id, canonical_cite_key: d.cite_key ?? id, record_path: file,
    source_sha256: hash(raw), title: d.title ?? null, year: d.year ?? null,
    doi: d.doi ?? null, source_type: d.source_type ?? null, evidence_tier: d.evidence_tier ?? null,
    candidate_reasons: reasons, cited_in_pilot: cited.has(id),
    ingredients: d.ingredients ?? [], matrices: d.matrices ?? [], analytes: d.metals ?? [],
    jurisdictions: d.jurisdictions ?? [], sample_n_as_recorded: d.sample_n ?? null,
    sample_population: d.sample_population ?? null, access_url: d.access_url ?? null,
    raw_path: d.raw_path ?? null,
    declared_raw_path_available: d.raw_path ? fs.existsSync(path.resolve(root, String(d.raw_path))) : false,
    topic_flags: tags, disposition: "planning-candidate; question-specific eligibility and primary verification not completed",
    overview: overview ? {heading: overview.heading, line: overview.line, text: overview.text.trim()} : null,
    finding_sections: key.map(s => ({...s, text: s.text.trim()})),
    methods_and_limits: methods.map(s => ({...s, text: s.text.trim()})),
    source_record_characters: fullText.length,
    record_form: /mechanical bulk-ingest record/.test(parsed.content) ? "mechanical-bulk-record-needs-scientific-adjudication" : "source-summary; scientific-adequacy-not-established",
    warning_flags: [
      ...(/rice husk|rice straw|paddy soil|rice root|seedling|hydroponic/i.test(topicText) ? ["non-edible-material-or-experimental-context-requires-row-fit-review"] : []),
      ...(/review|meta.analysis|textbook|book.chapter/i.test(String(d.title)+" "+String(d.source_type)) ? ["secondary-source; overlap-with-primary-studies-unresolved"] : []),
      ...(/certification:|hmt&c|hmtc|percentile.*limit/i.test(fullText) ? ["legacy-certification-framing; do-not-promote-to-scientific-conclusion"] : []),
    ],
    structured_evidence: {},
  });
}
const aliases = new Map();
for (const c of candidates) for (const key of [c.source_id, c.canonical_cite_key]) aliases.set(key, c);
for (const filename of ["values.jsonl", "claims.jsonl", "review_events.jsonl"]) {
  const full = path.join(root, "data/evidence", filename);
  if (!fs.existsSync(full)) continue;
  for (const line of fs.readFileSync(full,"utf8").split("\n").filter(Boolean)) {
    let value; try { value = JSON.parse(line); } catch { continue; }
    const c = aliases.get(value.source_id ?? value.cite_key);
    if (!c) continue;
    c.structured_evidence[filename] = (c.structured_evidence[filename] ?? 0) + 1;
  }
}
// Join existing factual registers by identity only. A match can concern a
// different food or scope and is never treated as an eligible rice finding.
const csvErrors = [];
for (const filename of fs.readdirSync(path.join(root,"data/evidence")).filter(n=>n.endsWith(".csv")).sort()) {
  if (/routing|reingest|audit|queue|standard|hmtc|claim-provenance|adjudication|readiness|crosswalk|candidate|ledger|backlog/.test(filename)) continue;
  const file="data/evidence/"+filename;
  try {
    const raw=fs.readFileSync(path.join(root,file),"utf8");
    if(!/\b(?:source_id|cite_key|source_key)\b/.test(raw.split("\n")[0])) continue;
    for(const value of parseCsv(raw)) {
      for(const field of ["source_id","cite_key","source_key"]) {
        const key=String(value[field]??"").replace(/^sources\//,"");
        const c=aliases.get(key);if(!c)continue;
        c.structured_evidence.csv_registers??={};
        c.structured_evidence.csv_registers[file]=(c.structured_evidence.csv_registers[file]??0)+1;
      }
    }
  } catch(error) {csvErrors.push({file,error:String(error)});}
}
const csvJoins=Object.fromEntries(candidates.filter(c=>c.structured_evidence.csv_registers).map(c=>[c.source_id,c.structured_evidence.csv_registers]));
const countBy = fn => Object.fromEntries([...new Set(candidates.flatMap(fn))].sort().map(v => [v, candidates.filter(c=>fn(c).includes(v)).length]));
const doiGroups = new Map();
for (const c of candidates) if(c.doi) {
  const doi=String(c.doi).toLowerCase().replace(/^https?:\/\/(dx\.)?doi.org\//,"").trim();
  if(!doiGroups.has(doi))doiGroups.set(doi,[]);doiGroups.get(doi).push(c.source_id);
}
const questionMap = register.families.ingredient.sections.map(section => ({
  section_id: section.id, heading: section.heading, question_ids: section.question_ids,
  mapping_method: "Section-level keyword/metadata planning triage, not question-specific scientific eligibility. Summary/assessment retain the whole candidate set for synthesis and search/appraisal accounting; identity retains records with material metadata or a rice title.",
  candidate_source_ids: candidates.filter(c =>
    ["summary","assessment"].includes(section.id) ? true :
    section.id === "identity" ? c.ingredients.length || c.matrices.length || c.candidate_reasons.includes("rice-in-title") :
    c.topic_flags.includes(section.id === "product" ? "exposure" : section.id)
  ).map(c=>c.source_id),
}));
const summary = {
  date: "2026-10-18", purpose: "Broaden the planning evidence base before article redesign or scientific expansion",
  method: "Full local source-record inventory; retained candidates plus rice title, ingredient-link and matrix matches. Extracted existing summary sections and metadata; no new scientific approval or completed search claimed.",
  source_records_scanned: scanned, candidate_records: candidates.length,
  local_source_inventory_sha256: hash(JSON.stringify(scanManifest)),
  planning_input_pins: [
    "data/evidence/contracts/pilot-2026-10-17/rice-depth-inventory-audit.json",
    "data/evidence/contracts/question-register.json",
    "data/evidence/syntheses/pilot-rice-v1.json",
  ].map(file=>({file,sha256:hash(fs.readFileSync(path.join(root,file)))})),
  retained_inventory_records: candidates.filter(c=>retained.has(c.source_id)).length,
  additional_candidates: candidates.filter(c=>!retained.has(c.source_id)).length,
  pilot_references: cited.size,
  candidate_records_with_local_declared_raw_path: candidates.filter(c=>c.declared_raw_path_available).length,
  candidate_records_with_registered_values: candidates.filter(c=>c.structured_evidence["values.jsonl"]).length,
  candidate_records_with_registered_claims: candidates.filter(c=>c.structured_evidence["claims.jsonl"]).length,
  candidate_records_with_csv_register_join: Object.keys(csvJoins).length,
  candidate_records_with_any_jsonl_or_csv_values: candidates.filter(c=>c.structured_evidence["values.jsonl"]||c.structured_evidence.csv_registers).length,
  mechanical_bulk_records: candidates.filter(c=>c.record_form.startsWith("mechanical")).length,
  counts_by_reason: countBy(c=>c.candidate_reasons), counts_by_topic_flag: countBy(c=>c.topic_flags),
  counts_by_analyte: countBy(c=>c.analytes.map(String)),
  duplicate_doi_candidates: [...doiGroups].filter(([,v])=>v.length>1).map(([doi,ids])=>({doi,source_ids:ids,disposition:"identity-check-required; not automatically merged"})),
  read_errors: errors,
  csv_join_errors: csvErrors,
  limits: ["Keyword topic counts are overlapping triage counts, never eligible-study counts or certainty grades.","Stored summaries are candidate evidence and can contain extraction or inference errors.","Declared raw-path checks do not exhaust alternate locations or public full text.","JSONL join counts do not audit all CSV registers or prove reviewed row-fit.","No independent human scientific review performed."],
};
fs.mkdirSync(path.join(root,output),{recursive:true});
for(const [name,data] of [["summary.json",summary],["source-map.json",candidates],["question-map.json",questionMap],["csv-register-join.json",csvJoins],["scan-manifest.json",scanManifest]]) fs.writeFileSync(path.join(root,output,name),JSON.stringify(data,null,2)+"\n");
console.log(JSON.stringify(summary,null,2));
