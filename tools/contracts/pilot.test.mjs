import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";
import matter from "gray-matter";
import { root, register, sectionHeading } from "./generate.mjs";
import {
  loadPilot,
  compilePage,
  buildPilot,
  questionRecord,
  pilotDir,
  hash,
  sourceFingerprint,
  verifyInputs,
  anchor,
  answerText,
  answerSourceIds,
  pageSourceIds,
} from "./pilot/compiler.mjs";
import {
  occurrenceRows,
  formulaObservations,
  riceObservations,
  readCSV,
  formulaPath,
  ricePath,
} from "./pilot/observations.mjs";
import { contractOwnsPage } from "./page-owner.mjs";
import { regenerate } from "../build-ingredient-contamination-tables.mjs";

// The pilot's pinned raw inputs (publisher PDFs and supplements under raw/manual-fetch/) are
// gitignored third-party files, so CI never has them. These two tests need them; without them
// they are skipped with this reason, never passed silently.
const PILOT_RAW = path.join(root, "raw/manual-fetch/mitigation-pilot-20261018");
const rawSkip = fs.existsSync(PILOT_RAW) ? false : "pilot raw inputs (raw/manual-fetch/mitigation-pilot-20261018) are gitignored third-party files and absent here";
import { checkSections, validateRecord } from "./validate.mjs";
const pilots = loadPilot();
const baseline = JSON.parse(
  fs.readFileSync(path.join(root, pilotDir, "baseline.json"), "utf8"),
);
const withoutCitationGroups = text => text.replace(/ ?\((?:\[\[sources\/[^\]]+\]\]\s*)+\)/g, "");
const cites = (raw) =>
  new Set([...raw.matchAll(/\[\[sources\/([^\]|\\]+)/g)].map((m) => m[1]));
test("all pilot outputs are reproducible and current", { skip: rawSkip }, () =>
  assert.deepEqual(buildPilot({ check: true }), []));
for (const s of pilots) {
  test(`${s.family}: all 36 answers resolve and 12 sections remain ordered`, () => {
    const p = compilePage(s);
    assert.deepEqual(validateRecord(p.record), []);
    assert.deepEqual(checkSections(p.content, s.family), []);
    assert.equal(p.record.answers.length, 36);
    assert.equal(p.record.coverage_state, "partial");
    assert.ok(
      p.record.answers.every(
        (a) =>
          a.answer &&
          a.certainty.judgment === "not_assessed" &&
          a.workflow_state !== "reviewed",
      ),
    );
    assert.equal(
      (p.content.match(/<a id="hmi-(?:met|ing|prd)-\d+"><\/a>/g) || []).length,
      36,
    );
  });
  test(`${s.family}: every legacy source candidate survives without inclusion claims`, () => {
    const p = compilePage(s),
      entry = baseline.pages.find((x) => x.path === p.page),
      links = cites(p.content);
    if(s.source_catalogue) {
      const catalogue=JSON.parse(fs.readFileSync(path.join(root,'wiki/static/data/source-index.json'),'utf8'));
      const excluded=new Set(JSON.parse(fs.readFileSync(path.join(root,'data/evidence/source-index/build-audit.json'),'utf8')).excluded.map(entry=>entry.source));
      for(const id of entry.candidate_source_ids) {
        const row=catalogue.sources.find(row=>row.id.toLowerCase()===id.toLowerCase()||row.aliases.some(alias=>alias.toLowerCase()===id.toLowerCase()));
        assert.ok((row&&[...row.uses,...row.candidates].some(edge=>edge.page===s.source_catalogue.topic))||excluded.has(id),id);
      }
      assert.ok(p.content.includes('sources/index?topic='+encodeURIComponent(s.source_catalogue.topic)));
      assert.doesNotMatch(p.content,/Legacy candidates cited outside/);
    } else for (const id of entry.candidate_source_ids) assert.ok(links.has(id), id);
  });
  test(`${s.family}: prose carries every answer and precedes its evidence explorer`, () => {
    const { content } = compilePage(s);
    assert.doesNotMatch(content, /^### .+\?$/m);
    assert.doesNotMatch(content, /\*Decision requirement \/ interpretation\.\*/);
    assert.doesNotMatch(content, /\*Selected-source finding;/);
    s.sections.forEach((section, i) => {
      const spec = register.families[s.family].sections[i];
      const start = content.indexOf(`## ${sectionHeading(spec,s.section_headings)}\n`);
      const end = content.indexOf("\n## ", start + 4);
      const body = content.slice(start, end < 0 ? undefined : end);
      section.answers.forEach((answer, j) => {
        const question = register.questions.find(q => q.id === spec.question_ids[j]);
        if(answer.presentation==='record_only') {
          assert.ok(!body.includes(answer.text),question.id);
          assert.ok(s.sections.some(section=>section.id===answer.public_context_section));
        } else if(section.presentation?.narrative==='overview_and_questions') {
          const introduction=body.slice(0,body.indexOf('<details class="qa"'));
          assert.ok(withoutCitationGroups(introduction).includes(section.presentation.text.replace(/[.!?]$/,'')));
          assert.ok(!withoutCitationGroups(introduction).includes(answer.text.replace(/[.!?]$/,'')),question.id);
        } else assert.ok(withoutCitationGroups(body).includes(answer.text.replace(/[.!?]$/, "")), question.id);
        assert.ok(body.includes(`<a id="${anchor(question.question)}"></a>`), question.id);
        for (const source of answer.citation_spans?.flatMap(span=>span.source_keys) ?? answer.source_keys)
          assert.ok((answer.presentation==='record_only'?content:body).includes(`[[sources/${source}]]`), source);
      });
      if (section.observations || section.controls) {
        const table = body.indexOf('<div class="hmi-analyte-explorer');
        if(section.presentation?.narrative==='evidence_drawer') {
          const prose=withoutCitationGroups(body);
          assert.ok(prose.indexOf('<div class="hmi-analyte-explorer') > prose.indexOf(section.presentation.text.replace(/[.!?]$/, "")),spec.heading);
          assert.ok(body.includes('data-explorer-context-content'),spec.heading);
        } else {
          const prose=withoutCitationGroups(body);
          assert.ok(prose.indexOf('<div class="hmi-analyte-explorer') > prose.indexOf(section.answers.at(-1).text.replace(/[.!?]$/, "")), spec.heading);
        }
      }
    });
  });
  test(`${s.family}: immutable comparison includes the pre-existing working text`, () => {
    const entry = baseline.pages.find((x) =>
      x.path.endsWith("/" + s.slug + ".md"),
    );
    assert.equal(
      hash(fs.readFileSync(path.join(root, entry.baseline))),
      entry.sha256,
    );
  });
}
test("expanded rice narratives keep paragraph and supplementary citations in their question records and bibliography", () => {
  const s=pilots.find(p=>p.slug==="rice"), compiled=compilePage(s);
  const bibliography=compiled.content.match(/<!-- BEGIN: hmi-page-references -->[\s\S]*?<!-- END: hmi-page-references -->/)[0];
  for (const section of s.sections) for (const a of section.answers) {
    const question=compiled.record.answers.find(r=>r.answer===answerText(a));
    assert.ok(question);
    for(const id of answerSourceIds(a)) {
      assert.ok(question.evidence_refs.includes(`wiki/sources/${id}.md`),id);
      assert.ok(bibliography.includes(`[[sources/${id}|`),id);
    }
    const uncited=withoutCitationGroups(compiled.content);
    for(const passage of a.passages||[])assert.ok(uncited.includes(passage.text.replace(/[.!?]$/,"")));
  }
  assert.equal(cites(bibliography).size,pageSourceIds(s).length);
  assert.equal((compiled.content.match(/data-hmi-faq="1"/g)||[]).length,s.sections.flatMap(sec=>sec.answers.flatMap(a=>(a.passages||[]).filter(p=>p.question))).length);
});
test("table-only sources survive the expanded rice citation ledger without changing table columns", () => {
  const s=structuredClone(pilots.find(p=>p.slug==="rice"));
  const id="sun2023-biochar-rice-cadmium-field";
  for(const sec of s.sections)for(const a of sec.answers) {
    a.source_keys=a.source_keys.filter(k=>k!==id);
    for(const p of a.passages||[])p.source_keys=p.source_keys.filter(k=>k!==id);
    for(const p of [a,...(a.passages||[])])if(p.citation_spans)p.citation_spans=p.citation_spans.map(span=>({...span,source_keys:span.source_keys.filter(k=>k!==id)})).filter(span=>span.source_keys.length);
  }
  assert.ok(pageSourceIds(s).includes(id));
  const {content}=compilePage(s);
  assert.match(content,new RegExp(`\\[\\[sources/${id}\\|`));
  assert.match(content,/data-label="Finding \(µg\/kg\)"/);
  assert.match(content,/data-label="Evidence"/);
  assert.doesNotMatch(content,/data-label="Considerations"/);
});
test("reference-table evidence stays in question records and the shared citation ledger", () => {
  const s=pilots.find(p=>p.slug==="rice"), compiled=compilePage(s);
  const tables=s.sections.flatMap(sec=>sec.answers.filter(a=>a.table));
  assert.ok(tables.length >= 4);
  for(const a of tables) {
    const record=compiled.record.answers.find(r=>r.answer===answerText(a));
    for(const row of a.table.rows) {
      for(const cell of row.cells) assert.ok(record.answer.includes(cell));
      for(const source of row.source_keys) assert.ok(record.evidence_refs.includes(`wiki/sources/${source}.md`));
    }
    if(a.table.presentation==='record_only')assert.ok(!compiled.content.includes(`<caption class="hmi-sr-only">${a.table.title}</caption>`));
  }
  assert.match(compiled.content,/<div data-hmi-citation-ledger>/);
  assert.equal((compiled.content.match(/class="hmi-analyte-explorer hmi-reference-table"/g)||[]).length,tables.filter(a=>a.table.presentation!=='record_only').length);
  for(const sec of s.sections) {
    const spec=register.families.ingredient.sections.find(x=>x.id===sec.id);
    const start=compiled.content.indexOf(`## ${sectionHeading(spec,s.section_headings)}\n`), end=compiled.content.indexOf('\n## ',start+4);
    const body=compiled.content.slice(start,end<0?undefined:end);
    const firstFaq=body.indexOf('<details class="qa"');
    if(firstFaq!==-1) {
      if(sec.presentation?.narrative==='overview_and_questions') {
        assert.ok(withoutCitationGroups(body.slice(0,firstFaq)).includes(sec.presentation.text.replace(/[.!?]$/,'')));
        assert.doesNotMatch(body,/<table\b/);
        assert.ok((body.match(/<details class="qa"/g)||[]).length<=5);
      } else {
        const prose=withoutCitationGroups(body), faq=prose.indexOf('<details class="qa"');
        assert.ok(sec.answers.every(a=>prose.indexOf(a.text.replace(/[.!?]$/,''))<faq));
      }
      assert.doesNotMatch(body.slice(firstFaq),/data-mitigation-explorer|data-analyte-explorer|id="hmi-ing-/);
    }
  }
});
test("expanded rice subsection navigation remains one or two words without hiding scientific conclusions", () => {
  const s=pilots.find(p=>p.slug==="rice"), {content}=compilePage(s);
  const fm=matter(content).data;
  for(const sec of s.sections)for(const a of sec.answers) {
    for(const p of [a,...a.passages||[]])if(p.heading) {
      assert.ok(fm.toc_labels[p.heading],p.heading);
      assert.ok(fm.toc_labels[p.heading].split(/\s+/).length<=2,p.heading);
    }
  }
  const carey=occurrenceRows("rice",root).filter(r=>r.source==="carey2020-global-low-ias-rice-sourcing");
  assert.deepEqual(carey.map(r=>[r.analyte,r.statistic,r.value]),[["iAs","median",66],["DMA","median",21]]);
  assert.match(content,/data-source="carey2020-global-low-ias-rice-sourcing"/);
  assert.match(content,/11-infant paired subset/);
  assert.match(content,/separate 2018 New Hampshire study follows 15 paired infants/);
  assert.doesNotMatch(content,/187-pair|global mean inorganic arsenic/);
  assert.ok(compilePage(s).record.answers.every(a=>a.certainty.judgment==="not_assessed"));
});
test("Rice review presents methods before requirements and retains critical legal and gap context",()=>{
  const s=pilots.find(p=>p.slug==='rice'),sec=s.sections.find(x=>x.id==='assessment');
  const {content,record}=compilePage(s);
  const start=content.indexOf(`## ${s.section_headings.assessment}\n`),end=content.indexOf('\n## ',start+4);
  const body=content.slice(start,end<0?undefined:end),plain=withoutCitationGroups(body);
  assert.ok(body.indexOf(sec.answers[1].text)<body.indexOf('id="rice-review-methods-and-gaps"'));
  assert.ok(body.indexOf('id="rice-review-methods-and-gaps"')<body.indexOf('### Requirements and toxicological context'));
  assert.ok(body.indexOf('### Requirements and toxicological context')<body.indexOf('id="rice-requirements"'));
  assert.doesNotMatch(body,/<details class="qa"|References identify the sources used in these answers/);
  const requirements=JSON.parse(fs.readFileSync(path.join(root,pilotDir,'rice-depth/regulatory-findings.json'),'utf8'));
  for(const entry of requirements.records)assert.ok(plain.includes(entry.table_text),entry.table_label);
  for(const phrase of ['Article 3','Article 4','Nickel rice entries apply from 1 July 2026','margin-of-exposure','independent field units','food and waste streams','individual health effect','discovery records not accepted'])assert.ok(body.includes(phrase),phrase);
  assert.deepEqual(sec.answers[1].table.headers,['Review area','Current basis','Remaining gap']);
  assert.equal(sec.answers[0].table.rows.length,8);
  assert.ok(sec.answers[0].passages[0].citation_spans.every(span=>plain.includes(span.after)));
  assert.ok(body.indexOf('Article 4')<body.indexOf('id="rice-requirements"'));
  const unresolved=record.answers.find(a=>a.question_id==='HMI-ING-036');
  assert.ok(unresolved.answer.includes(sec.answers[2].text));
  for(const id of s.section_aliases.assessment)assert.ok(body.includes(`id="${id}"`));
  const broken=structuredClone(s);
  broken.sections.find(x=>x.id==='assessment').presentation.answer_order=[1,1,0];
  assert.throws(()=>compilePage(broken),/retain every canonical answer/);
  const mismatched=structuredClone(s);
  mismatched.sections.find(x=>x.id==='assessment').answers[1].table.rows[0].cells.pop();
  assert.throws(()=>compilePage(mismatched),/matching two- or three-column rows/);
});
test("Rice reveals cited conclusions first while retaining visible reader answers and supplementary FAQs", () => {
  const s=pilots.find(p=>p.slug==='rice'), {content,record}=compilePage(s);
  assert.equal(s.sections[0].id,'summary');
  assert.match(content,/data-hmi-quick-read/);
  assert.ok(content.indexOf('data-hmi-quick-read')<content.indexOf('## Rice overview'));
  assert.ok(withoutCitationGroups(content).includes(s.quick_read.text.slice(0,-1)));
  assert.deepEqual(s.quick_read.facets.map(f=>f.label),['Metals of concern','Main drivers','Practical framing']);
  for(const item of [s.quick_read,...s.quick_read.facets])for(const id of item.source_keys)assert.ok(pageSourceIds(s).includes(id));
  assert.ok(content.indexOf('## Rice overview')<content.indexOf('## Rice identity and scope'));
  assert.ok(!content.includes(s.lede));
  assert.equal((content.match(/<h3 data-hmi-prose-question="true"/g)||[]).length,s.sections.flatMap(sec=>sec.answers.filter(a=>a.prose_heading)).length);
  assert.equal((content.match(/data-hmi-faq="1"/g)||[]).length,s.sections.flatMap(sec=>sec.answers.flatMap(a=>(a.passages||[]).filter(p=>p.question))).length);
  assert.match(content,/aria-label="Key reader questions"/);
  const summary=s.sections[0];
  assert.ok(summary.answers.every(a=>a.source_keys.length));
  assert.doesNotMatch(content,/class="hmi-control-map"/);
  for(const section of ['controls','tradeoffs']) {
    const heading=sectionHeading(register.families.ingredient.sections.find(sec=>sec.id===section),s.section_headings);
    const start=content.indexOf(`## ${heading}\n`),end=content.indexOf('\n## ',start+4);
    const body=content.slice(start,end<0?undefined:end);
    assert.doesNotMatch(body,/<details class="qa"/);
    const prose=withoutCitationGroups(body),table=prose.indexOf('<table');
    for(const answer of s.sections.find(sec=>sec.id===section).answers)
      assert.ok(prose.indexOf(answer.text.replace(/[.!?]$/,''))<table);
    for(const alias of s.section_aliases[section])assert.ok(body.includes(`id="${alias}"`));
  }
  assert.equal(record.answers.length,36);
  assert.equal(pageSourceIds(s).length,51);
  const fm=matter(content).data;
  assert.equal(fm.display_title,'Heavy metal contamination in rice');
  assert.equal(fm.section_headings.summary,'Rice overview');
  for(const [id,title] of Object.entries(s.section_headings)) {
    const original=register.families.ingredient.sections.find(section=>section.id===id).heading;
    assert.ok(content.includes(`## ${title}\n`));
    assert.ok(content.includes(`<a id="${anchor(original)}"></a>`));
    assert.ok(fm.toc_labels[title].split(/\s+/).length<=2);
  }

});
test("formula keeps 230 distinct products per analyte with censoring and exact format", () => {
  const rows = formulaObservations(readCSV(root, formulaPath));
  assert.deepEqual(
    rows.map((x) => [x.analyte, x.n, x.detected, x.non_detect, x.max]),
    [
      ["tAs", 230, 212, 18, 4.7],
      ["Pb", 230, 169, 61, 0.6],
      ["Cd", 230, 145, 85, 1.3],
      ["tHg", 230, 3, 227, 0.3],
    ],
  );
});
test("duplicate formula sample/analyte fails rather than inflating counts", () => {
  const rows = readCSV(root, formulaPath);
  assert.throws(
    () =>
      formulaObservations([
        ...rows,
        rows.find((x) => x.row_slug === "infant-formula-powder-non-soy"),
      ]),
    /Duplicate/,
  );
});
test("an incorrectly routed soy label fails the exact-scope filter", () => {
  const rows = readCSV(root, formulaPath);
  const row = rows.find((x) => x.row_slug === "infant-formula-powder-non-soy");
  row.simplified_product_label = "Infant Formula, Powder, Soy-based";
  assert.throws(() => formulaObservations(rows), /scope mismatch/);
});
test("rice non-detects remain missing concentrations and iAs keeps its own count", () => {
  const rows = riceObservations(readCSV(root, ricePath));
  for (const r of rows.filter((x) => x.analyte === "U")) {
    assert.equal(r.detected, 0);
    assert.equal(r.min, null);
    assert.equal(r.max, null);
    assert.equal(r.rl_min, 1);
  }
  assert.equal(rows.find((x) => x.analyte === "iAs").n, 1);
  assert.equal(
    rows.find((x) => x.analyte === "tHg" && x.food_number === "50").detected,
    1,
  );
});
test("legacy scalar profile is retired without erasing observed evidence", () => {
  const p = compilePage(pilots.find((x) => x.family === "ingredient"));
  const fm = matter(p.content).data;
  for (const cell of Object.values(fm.contamination_profile)) {
    assert.equal(cell.confidence, null);
    assert.deepEqual(cell.typical_ppb, [null, null]);
    assert.equal(cell.status, "in_progress");
  }
  assert.ok(!fm.aliases.includes("rice protein"));
  assert.match(p.content, /41\.6/);
});
test("legacy contamination renderer cannot replace the source-scoped table", () => {
  const p = compilePage(pilots.find((x) => x.family === "ingredient"));
  assert.equal(regenerate(p.content), p.content);
});
test("unowned contract migration fails closed; legacy pages are unaffected", () => {
  assert.equal(contractOwnsPage("---\ntitle: Legacy\n---\nText"), false);
  assert.throws(
    () => contractOwnsPage('---\npage_contract_version: "1.0.0"\n---\nText'),
    /no registered/,
  );
  for (const s of pilots)
    assert.equal(contractOwnsPage(compilePage(s).content), true);
});
test("missing evidence reference blocks compilation", () => {
  const s = structuredClone(pilots[0]);
  s.sections[0].answers[0].source_keys = ["does-not-exist-contract-test"];
  assert.throws(() => questionRecord(s), /Unresolved evidence reference/);
});
test("missing or misordered question sections block compilation", () => {
  const s = structuredClone(pilots[0]);
  s.sections.reverse();
  assert.throws(() => questionRecord(s), /Invalid section/);
});
test("real legacy metal FAQ CLI leaves adopted pilot unchanged", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "hmi-pilot-faq-"));
  try {
    fs.mkdirSync(path.join(dir, "wiki/metals"), { recursive: true });
    fs.mkdirSync(path.join(dir, "tools/metal-faq"), { recursive: true });
    const p = compilePage(pilots[0]);
    const dest = path.join(dir, "wiki/metals/cadmium.md");
    fs.writeFileSync(dest, p.content);
    fs.writeFileSync(
      path.join(dir, "tools/metal-faq/cadmium.json"),
      JSON.stringify({
        questions: [{ question: "Old question?", answer: "Legacy answer" }],
      }),
    );
    execFileSync(
      process.execPath,
      [path.join(root, "tools/build-metal-faq.mjs")],
      { cwd: dir },
    );
    assert.equal(fs.readFileSync(dest, "utf8"), p.content);
  } finally {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});
test("all delegated writers compile and carry the ownership guard", () => {
  const owners = JSON.parse(
    fs.readFileSync(path.join(root, pilotDir, "generator-owners.json"), "utf8"),
  );
  for (const file of owners.legacy_writers_delegated) {
    const raw = fs.readFileSync(path.join(root, file), "utf8");
    assert.match(raw, /contractOwnsPage\(/, file);
    execFileSync(process.execPath, ["--check", path.join(root, file)]);
  }
});

test("generated history changes do not trigger false scientific source updates", () => {
  const s =
    "---\ntitle: Source\nupdated: 2026-01-01\n---\nClaim.\n<!-- BEGIN: hmi-page-history -->old<!-- END: hmi-page-history -->";
  assert.equal(
    sourceFingerprint(s),
    sourceFingerprint(
      s.replace("2026-01-01", "2026-10-17").replace("-->old", "-->new"),
    ),
  );
  assert.notEqual(
    sourceFingerprint(s),
    sourceFingerprint(s.replace("Claim.", "Changed claim.")),
  );
});
test("pinned source and dataset inputs match the reviewed pilot inputs", { skip: rawSkip }, () =>
  assert.doesNotThrow(() => verifyInputs()));
