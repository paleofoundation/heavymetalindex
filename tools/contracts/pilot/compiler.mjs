import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import matter from "gray-matter";
import { renderReferenceEntry } from "../../lib/citation-format.mjs";
import { escapeHTML, renderAnalyteTable } from "./analyte-table.mjs";
import { compactSentenceCitations, finalizeCompactCitations } from "./compact-citations.mjs";
import { renderControlMap } from "./control-map.mjs";
import { renderSentenceCitations, validateSentenceCitationPlacements } from "./sentence-citations.mjs";
import { register, root, sectionHeading } from "../generate.mjs";
import { scaffoldRecord } from "../record-schema.mjs";
import { interventionRecords } from "./mitigation-table.mjs";
import { riceBaselineDataPath } from './rice-pooled-baselines.mjs';
import { riceHmiBaselines } from "./hmi-baseline.mjs";
import { riceOccurrencePath } from "./source-occurrence.mjs";
import { validateRecord, checkSections } from "../validate.mjs";
import {
  renderControls,
  occurrenceRows,
  renderObservations,
  formulaPath,
  ricePath,
  riceSamplesPath,
} from "./observations.mjs";

export const pilotDir = "data/evidence/contracts/pilot-2026-10-17";
export const pilotSlugs = ["cadmium", "rice", "infant-formula-powder-non-soy"];
export const hash = (value) =>
  crypto.createHash("sha256").update(value).digest("hex");
export function sourceFingerprint(raw) {
  const p = matter(raw);
  const fm = { ...p.data };
  delete fm.updated;
  delete fm.sources;
  const body = p.content
    .replace(
      /<!-- BEGIN: hmi-page-history -->[\s\S]*?<!-- END: hmi-page-history -->/g,
      "",
    )
    .trim();
  return hash(JSON.stringify({ metadata: fm, body }));
}
export const anchor = (s) =>
  s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s/g, "-");
const readJSON = (base, file) =>
  JSON.parse(fs.readFileSync(path.join(base, file), "utf8"));
const sourceRef = (k) => `wiki/sources/${k}.md`;
export const answerSourceIds = (a) => [...new Set([...(a.source_keys || []), ...(a.passages || []).flatMap(p => p.source_keys || []), ...(a.diagram?.source_keys || []), ...(a.table?.rows || []).flatMap(r => r.source_keys || [])])];
export const answerText = (a) => [a.text, ...(a.passages || []).map(p => `${p.question ? p.question + " " : ""}${p.text}`), ...(a.diagram ? [a.diagram.title,...a.diagram.stages.map(s=>`${s.label}: ${s.text}`),a.diagram.caption] : []), ...(a.table?.rows || []).map(r => r.cells.map((c,i) => `${a.table.headers[i]}: ${c}`).join("; "))].join("\n\n");
export function pageSourceIds(s, base = root) {
  return [...new Set([...s.sections.flatMap(sec => [
    ...sec.answers.flatMap(a => [...a.source_keys, ...(a.passages || []).filter(p => !p.question).flatMap(p => p.source_keys)]),
    ...sec.answers.flatMap(a => a.diagram?.source_keys || []),
    ...sec.answers.flatMap(a => (a.table?.rows || []).flatMap(r => r.source_keys)),
    ...(sec.observations ? occurrenceRows(sec.observations, base).map(r => r.source) : []),
    ...(sec.controls ? interventionRecords(s.family, base).map(r => r.source_id) : []),
    ...sec.answers.flatMap(a => (a.passages || []).filter(p => p.question).flatMap(p => p.source_keys)),
  ]), ...(s.quick_read?[s.quick_read,...s.quick_read.facets]:[]).flatMap(p=>p.source_keys || [])])];
}
function block(text, name) {
  return (
    text.match(
      new RegExp(`<!-- BEGIN: ${name} -->[\\s\\S]*?<!-- END: ${name} -->`),
    )?.[0] || ""
  );
}
export function loadPilot(base = root) {
  return pilotSlugs.map((slug) =>
    readJSON(base, `data/evidence/syntheses/pilot-${slug}-v1.json`),
  );
}
function requireLocalRef(base, ref) {
  const file = ref.split("#")[0];
  if (
    !file ||
    path.isAbsolute(file) ||
    file.split("/").includes("..") ||
    !fs.existsSync(path.join(base, file))
  )
    throw Error(`Unresolved evidence reference: ${ref}`);
}
export function questionRecord(s, base = root) {
  const result = scaffoldRecord(register, s.family, s.slug);
  const family = register.families[s.family];
  if (s.sections.length !== family.sections.length)
    throw Error("Missing synthesis section");
  s.sections.forEach((section, i) => {
    const spec = family.sections[i];
    if (
      spec.id !== section.id ||
      section.answers.length !== spec.question_ids.length
    )
      throw Error(`Invalid section ${section.id}`);
    section.answers.forEach((a, j) => {
      if (
        !a.text?.trim() ||
        !["evidence", "interpretation", "unresolved"].includes(a.kind)
      )
        throw Error("Invalid answer");
      if (a.kind === "evidence" && !a.source_keys.length)
        throw Error("Evidence claim without sources");
      for (const passage of a.passages || []) {
        if (!passage.text?.trim() || !Array.isArray(passage.source_keys)) throw Error("Invalid narrative passage");
        if (passage.question && !passage.question.endsWith("?")) throw Error("Supplementary Q&A needs a reader question");
      }
      if (a.table && (
        !a.table.title || !Array.isArray(a.table.headers) ||
        ![2, 3].includes(a.table.headers.length) ||
        a.table.headers.some(h => typeof h !== "string" || !h.trim()) ||
        !a.table.rows?.length || a.table.rows.some(r =>
          r.cells?.length !== a.table.headers.length ||
          r.cells.some(c => typeof c !== "string" || !c.trim()) ||
          !Array.isArray(r.source_keys))
      )) throw Error("Invalid reference table: expected matching two- or three-column rows");
      if (a.table?.presentation !== undefined && a.table.presentation !== 'record_only') throw Error('Unknown reference-table presentation');
      if (a.diagram && (!a.diagram.title || (typeof a.diagram.caption !== "string") || !Array.isArray(a.diagram.source_keys) || a.diagram.stages?.length !== 3 || a.diagram.stages.some(s=>!s.label || !s.text || !/^[a-z0-9-]+$/.test(s.anchor)))) throw Error("Invalid control-stage diagram");
      answerSourceIds(a).forEach((k) => requireLocalRef(base, sourceRef(k)));
      (a.evidence_refs || []).forEach(ref => requireLocalRef(base, ref));
      const out = result.answers.find(
        (x) => x.question_id === spec.question_ids[j],
      );
      Object.assign(out, {
        scope: { ...s.scope, ...a.scope },
        workflow_state: a.kind === "unresolved" ? "unassessed" : "assessing",
        evidence_state:
          a.kind === "unresolved"
            ? "not_assessed"
            : answerSourceIds(a).length
              ? "available"
              : "not_assessed",
        answer: answerText(a),
        revision: s.version,
        search: s.search || {
          status: "in_progress",
          scope:
            "Purposive verification of selected existing sources for a three-page pilot; not a systematic search",
          protocol_ref: `${pilotDir}/review.json`,
          record_refs: [`${pilotDir}/baseline.json`, `${pilotDir}/review.json`],
          screening_ref: `${pilotDir}/review.json`,
          searched_through: null,
          limitations: [
            "Full routed corpus not screened",
            "External primary texts checked only for selected existing sources",
            "Mounted raw-PDF library unavailable; selected public originals used",
            "No completed question-level systematic search",
          ],
          unresolved_access: [],
        },
        evidence_refs: [...answerSourceIds(a).map(sourceRef), ...(a.evidence_refs || [])],
        synthesis_refs: [
          `data/evidence/syntheses/${s.synthesis_id}.json#${spec.id}/${j + 1}`,
        ],
        applicability:
          a.kind === "interpretation"
            ? "HMI proposed decision requirement or inference; not a measured intervention effect"
            : a.kind === "unresolved"
              ? "Scope remains unassessed; statement describes the limit of this pilot"
              : "Applies only to the source-specific material, period, preparation and endpoint stated in the answer and attached evidence records",
        limits_of_inference:
          "Selected-source pilot; no whole-literature completeness, commercial effectiveness, individual risk or lot compliance is established",
        dependent_pages: [`wiki/${result.page_slug}.md`],
        certainty: {
          judgment: "not_assessed",
          method: null,
          assessment_ref: null,
          rationale:
            "No completed outcome-level body-of-evidence appraisal; source counts and tiers are not a certainty grade.",
        },
      });
    });
  });
  const errors = validateRecord(result);
  if (errors.length) throw Error(errors.join("\n"));
  return result;
}
function references(s, base, orderedIds = null) {
  const ids = orderedIds || (s.research_review_ref ? pageSourceIds(s, base) : [...new Set(s.sections.flatMap(sec => sec.answers.flatMap(answerSourceIds)))]);
  return (
    "<!-- BEGIN: hmi-page-references -->\n" + (s.research_review_ref ? '<div data-hmi-citation-ledger>\n\n' : '') + "## References\n\n" +
    "Works cited on this page, in citation-number order. See [Sources](#sources) for this page's source inventory. Each title links to a source record with bibliographic details, reported findings, and document provenance.\n\n" +
    ids
      .map((k, i) => {
        const fm = matter(
          fs.readFileSync(path.join(base, sourceRef(k)), "utf8"),
        ).data;
        return `${i + 1}. ${renderReferenceEntry(fm, k)}`;
      })
      .join("\n") +
    (s.research_review_ref ? '\n\n</div>\n' : '\n') + "<!-- END: hmi-page-references -->"
  );
}
const ownerMarkers = {
  metal: { assessment: ["hmi-metal-faq"] },
  ingredient: { occurrence: ["hmi-fda-tds-occurrence"] },
  product: {
    identity: ["hmi-subcategory-v3"],
    occurrence: ["hmi-hmtc-evidence-summary"],
    regulation: ["hmi-product-crosswalk"],
    assessment: ["hmi-broad-context-sources", "hmi-contradiction-watch"],
  },
};
export function compilePage(s, base = root) {
  validateSentenceCitationPlacements(s);
  if (s.history_note && (!s.history_note.title || !s.history_note.text)) throw Error("History note needs a title and text");
  const page = `${register.families[s.family].directory}/${s.slug}.md`;
  const manifest = readJSON(base, `${pilotDir}/baseline.json`);
  const entry = manifest.pages.find((p) => p.path === page);
  if (!entry) throw Error("Page is not in frozen pilot allowlist");
  const before = fs.readFileSync(path.join(base, entry.baseline), "utf8");
  if (hash(before) !== entry.sha256) throw Error("Baseline changed");
  const parsed = matter(before);
  const fm = {
    ...parsed.data,
    page_contract_version: "1.0.0",
    question_record: `data/evidence/questions/${s.family}/${s.slug}.json`,
    synthesis_record: `data/evidence/syntheses/${s.synthesis_id}.json`,
    evidence_coverage: "partial",
    updated: s.date,
    audience: ["brands", "suppliers", "retailers", "legal", "researchers"],
  };
  if (s.slug === "rice") fm.presentation_lock = "rice-2026-10-19";
  if(s.section_headings)fm.section_headings=s.section_headings;
  if(s.display_title)fm.display_title=s.display_title;
  if(s.search_title)fm.search_title=s.search_title;
  // Article headings retain their full scientific scope; navigation keeps the
  // established grouped treatment and one- or two-word editorial labels.
  const sectionLabels = {
    identity: "Scope", summary: "Summary", entry: "Sources",
    transfer: "Accumulation", occurrence: "Profile", health: "Health",
    variation: "Variation", controls: "Mitigation", measurement: "Testing",
    regulation: "Regulations", decisions: "Operations", assessment: "Review",
    pathways: "Pathways", processing: "Processing", tradeoffs: "Trade-offs",
    testing: "Testing", procurement: "Procurement", product: "Exposure",
    contributors: "Ingredients", exposure: "Exposure", events: "Enforcement",
  };
  fm.toc_labels = {
    ...fm.toc_labels,
    ...Object.fromEntries(register.families[s.family].sections.map(section => [
      sectionHeading(section,s.section_headings), sectionLabels[section.id],
    ])),
    ...s.toc_labels,
  };
  if (s.family === "ingredient") {
    fm.aliases = (fm.aliases || []).filter((x) =>
      ["white rice", "brown rice", "polished rice", "husked rice"].includes(x),
    );
    fm.distinct_materials = [
      "rice flour",
      "rice bran",
      "rice syrup",
      "rice protein",
      "rice starch",
    ];
    fm.contamination_profile = Object.fromEntries(
      Object.entries(fm.contamination_profile || {}).map(([k, v]) => [
        k,
        {
          ...v,
          status: "in_progress",
          typical_ppb: [null, null],
          p95_ppb: null,
          confidence: null,
          n_studies: null,
          reviewed: null,
        },
      ]),
    );
    fm.occurrence_record = `${pilotDir}/observations.json`;
  }
  if (s.family === "product") {
    fm.review_state = "partial";
    fm.public_evidence_label = "Partial evidence assessment";
    fm.dek = s.lede;
    fm.description = s.lede;
  }
  if (s.shareText) { fm.shareText = s.shareText; fm.shareHashtags = s.shareHashtags; }
  if (s.description) fm.description = s.description;
  if (s.article_lede === false) fm.dek = s.description || s.lede;
  return renderContractArticle(s, base, { page, before, entry, fm, record: questionRecord(s, base) });
}

// Shared article owner: the frozen pilot and new ingredient adapters supply
// evidence/metadata here; neither reconstructs article or explorer markup.
export const ingredientPresentationVersion = "rice-shared-v1";
export function renderContractArticle(s, base, { page, before, entry, fm, record }) {
  validateSentenceCitationPlacements(s);
  const citationNumbers = s.citation_style === "compact" ? new Map() : null;
  const citationOrder = s.research_review_ref ? pageSourceIds(s, base) : null;
  // Authored sentence anchors keep each source with its supported claim.
  // Legacy passages retain their existing presentation until explicitly mapped.
  const cited = passage => citationNumbers
    ? compactSentenceCitations(passage, citationNumbers, base)
    : renderSentenceCitations(passage, citationOrder);

  let body = `# ${s.display_title || s.title}\n\n${s.article_lede === false ? '' : s.lede + '\n\n'}`;
  if(s.quick_read) {
    const q=s.quick_read;
    if(!q.text || q.facets?.length!==3 || [q,...q.facets].some(p=>!p.source_keys?.length))throw Error('Quick read requires a cited introduction and three cited facets');
    const facetBody = q.layout === 'prose'
      ? q.facets.map(f => `<p>${cited(f)}</p>`).join('\n\n')
      : `<ul>\n${q.facets.map(f=>`<li>\n<strong>${escapeHTML(f.label)}:</strong>\n\n${cited(f)}\n\n</li>`).join('\n')}\n</ul>`;
    body += `<section class="hmi-quick-read" id="${escapeHTML(s.slug)}-quick-read" data-hmi-quick-read aria-labelledby="${escapeHTML(s.slug)}-quick-read-label"><div class="hmi-quick-read-label" id="${escapeHTML(s.slug)}-quick-read-label">Quick read</div>\n\n${cited(q)}\n\n${facetBody}\n</section>\n\n`;
  }
  const currentAnchors = new Set(
    register.families[s.family].sections.map((x) => anchor(x.heading)),
  );
  const oldAnchors = [...new Set(entry.legacy_headings.map(anchor))].filter(
    (x) =>
      !currentAnchors.has(x) &&
      !["references", "sources", "update-history"].includes(x) &&
      !Object.values(s.section_aliases || {}).flat().includes(x),
  );
  // Keep incoming legacy anchors resolvable, but explain the reorganization.
  const legacySection = (name) => {
    if (/overview|at-a-glance|direct-answer/.test(name)) return "summary";
    if (/toxicology|vulnerable|exposure|consumption/.test(name))
      return "exposure";
    if (/regulat|limits|benchmark|standards/.test(name)) return "regulation";
    if (/test|sampling/.test(name)) return "testing";
    if (/mitigation|remediation|levers/.test(name)) return "controls";
    if (/processing|derivative|manufactur/.test(name)) return "processing";
    if (/range|variance/.test(name)) return "variation";
    if (/recall|enforcement/.test(name)) return "events";
    if (/food-sources|concentration|fda-tds/.test(name)) return "occurrence";
    return "assessment";
  };
  const universalFaqs=[];
  for (let i = 0; i < s.sections.length; i++) {
    const sec = s.sections[i],
      spec = register.families[s.family].sections[i];
    const markers = ownerMarkers[s.family]?.[sec.id] || [];
    body += markers.map((x) => `<!-- BEGIN: ${x} -->\n`).join("");
    const validIds = new Set(s.sections.map((x) => x.id));
    const aliases = oldAnchors.filter((x) => {
      const id = legacySection(x);
      return (validIds.has(id) ? id : "assessment") === sec.id;
    });
    body += aliases.map((x) => `<a id="${x}"></a>`).join("\n") + "\n";
    const title=sectionHeading(spec,s.section_headings);
    if(title!==spec.heading)body += `<a id="${anchor(spec.heading)}"></a>\n`;
    body += `## ${title}\n\n`;
    body += (s.section_aliases?.[sec.id] || []).map(id => `<a id="${escapeHTML(id)}"></a>\n`).join("");
    // Question records drive coverage, while the public article reads as prose.
    // Preserve both stable question IDs and the former question-heading links.
    // Keeping the answer and its citations together avoids a second narrative
    // store that could drift from the assessed answer.
    const faqs = [], referenceTables = [], diagrams = [];
    const narrativeStart = body.length;
    const answerOrder=sec.presentation?.answer_order || sec.answers.map((_,j)=>j);
    if(answerOrder.length!==sec.answers.length||new Set(answerOrder).size!==sec.answers.length||answerOrder.some(j=>!Number.isInteger(j)||j<0||j>=sec.answers.length))throw Error('Public answer order must retain every canonical answer exactly once');
    if(sec.presentation?.omit_default_footer&&!sec.presentation.footer_omission_reason)throw Error('Omitting the assessment footer requires an editorial reason');
    answerOrder.forEach(j => {
      const a=sec.answers[j];
      const id = spec.question_ids[j],
        q = register.questions.find((x) => x.id === id);
      const passageHeading = p => !p.heading ? '' : p.prose_heading ? `<h3 data-hmi-prose-question="true" id="${escapeHTML(p.heading_anchor || anchor(p.heading))}">${escapeHTML(p.heading)}</h3>\n\n` : `### ${p.heading}\n\n`;
      const answerAnchors = `<a id="${id.toLowerCase()}"></a>\n<a id="${anchor(q.question)}"></a>`;
      if(a.presentation==='record_only') {
        if(!s.sections.some(section=>section.id===a.public_context_section))throw Error('Record-only answer needs an existing public context section');
        body += `${answerAnchors}\n\n`;
      } else if (a.continue_paragraph && j > 0 && !a.heading)
        body = body.trimEnd() + ` ${answerAnchors}\n${cited(a)}\n\n`;
      else
        body += `${answerAnchors}\n\n${passageHeading(a)}${cited(a)}\n\n`;
      for (const passage of a.passages || []) {
        const prose = `${passageHeading(passage)}${cited(passage)}\n\n`;
        if (passage.question) {
          const faqId = anchor(passage.question);
          const target=passage.placement==='universal_faq'?universalFaqs:faqs;
          if(target===universalFaqs&&!s.universal_faqs)throw Error('Universal FAQ needs a dedicated section');
          target.push(`<details class="qa" data-hmi-faq="1" id="${faqId}" data-anchor="${faqId}" data-question="${escapeHTML(passage.question)}">\n<summary><span class="mk" aria-hidden="true"></span>${escapeHTML(passage.question)}</summary>\n<div class="ans" data-hmi-faq-answer="1">\n\n${prose}</div>\n</details>\n\n`);
        } else body += prose;
      }
      if (a.diagram) diagrams.push(renderControlMap(a.diagram, cited));
      // A useful checklist can remain in the assessment record without
      // duplicating the section's public explanatory questions.
      if (a.table && a.table.presentation !== 'record_only') {
        const { title, headers, rows } = a.table;
        const markup = `<div class="hmi-analyte-explorer hmi-reference-table"${headers.length === 3 ? ' data-columns="3"' : ''}${a.table.id ? ` id="${escapeHTML(a.table.id)}"` : ''}>\n\n<table class="hmi-analyte-table"><caption class="hmi-sr-only">${escapeHTML(title)}</caption><thead><tr>${headers.map(h => `<th scope="col">${escapeHTML(h)}</th>`).join("")}</tr></thead><tbody>\n${rows.map(r => `<tr>${r.cells.map((cell,i) => `<td data-label="${escapeHTML(headers[i])}">\n\n${cited({text:cell,source_keys:i===(r.citation_column ?? r.cells.length-1)?r.source_keys:[],...(i===(r.citation_column ?? r.cells.length-1)?{citation_spans:r.citation_spans,citation_omission_reason:r.citation_omission_reason}:{})})}\n\n</td>`).join("")}</tr>`).join("\n")}\n</tbody></table>\n\n</div>\n\n`;
        if (a.table.placement === 'after_answer') body += markup;
        else referenceTables.push(markup);
      }
    });
    let occurrenceOptions;
    if (sec.presentation?.narrative === 'evidence_drawer') {
      const narrative = body.slice(narrativeStart);
      const anchors = [...narrative.matchAll(/<a id="([^"]+)"><\/a>/g)].map(m=>m[1]);
      for(const a of sec.answers) if(a.heading) anchors.push(a.heading_anchor || anchor(a.heading));
      body = body.slice(0,narrativeStart) + [...new Set(anchors)].map(id=>`<a id="${escapeHTML(id)}"></a>`).join('\n') + '\n\n' + cited(sec.presentation) + '\n\n';
      occurrenceOptions = { contextHTML: (sec.presentation.context_intro ? cited(sec.presentation.context_intro)+'\n\n' : '') + narrative.replace(/<a id="[^"]+"><\/a>\s*/g,'').replace(/^### (.+)$/gm,'<p class="hmi-drawer-section-title" role="heading" aria-level="3">$1</p>') };
    }
    if (sec.presentation?.narrative === 'overview_and_questions') {
      // Summarize the findings once; accordions develop evidence and nuance.
      // Keep coverage anchors and canonical answers in their existing records.
      const narrative=body.slice(narrativeStart);
      const anchors=[...narrative.matchAll(/<a id="([^"]+)"><\/a>/g)].map(m=>m[1]);
      const overview=[sec.presentation,...(sec.presentation.passages||[])].map(cited).join('\n\n');
      body=body.slice(0,narrativeStart)+[...new Set(anchors)].map(id=>`<a id="${escapeHTML(id)}"></a>`).join('\n')+'\n\n'+overview+'\n\n';
    }
    if (sec.id === 'summary') {
      const readerQuestions = s.reader_links || s.sections.flatMap(section => section.answers.filter(a=>a.prose_heading));
      if (readerQuestions.length) body += `<nav class="hmi-reader-questions" aria-label="Key reader questions"><p>Find an answer</p><ul>${readerQuestions.map(a=>`<li><a data-no-popover="true" href="#${escapeHTML(a.heading_anchor || anchor(a.heading))}">${escapeHTML(a.heading)}</a></li>`).join('')}</ul></nav>\n\n`;
    }
    body += diagrams.join("") + referenceTables.join("");
    // Orient the reader before presenting the detailed evidence explorers.
    if (sec.observations)
      body += (typeof sec.observations === "object"
        ? renderAnalyteTable(sec.observations.rows, s.slug, { ...sec.observations.options, ...occurrenceOptions })
        : renderObservations(sec.observations, base, occurrenceOptions)) + "\n\n";
    if (sec.controls) body += renderControls(s.family, base) + "\n\n";
    if (sec.additional_markdown) body += sec.additional_markdown + "\n\n";
    body += faqs.join("");
    if (sec.id === "assessment" && !sec.presentation?.omit_default_footer)
      body +=
        "References identify the sources used in these answers. The Sources index preserves additional discovery links; inclusion there does not mean a source has been reviewed for this assessment. Corrections, completed searches, new direct evidence and changes in requirements should reopen the relevant answer.\n\n";
    body +=
      markers
        .toReversed()
        .map((x) => `<!-- END: ${x} -->\n`)
        .join("") + "\n";
  }
  // The dedicated ingredient FAQ section starts directly with up to 20 questions.
  if (s.universal_faqs) {
    const title = s.universal_faqs.title || 'Universal FAQs';
    if (anchor(title) !== 'universal-faqs') body += '<a id="universal-faqs"></a>\n';
    body += (s.universal_faqs.aliases || []).map(id=>`<a id="${escapeHTML(id)}"></a>\n`).join('');
    body += `## ${title}\n\n${universalFaqs.join('')}`;
  }
  if (s.uncertainty?.text) body += `## What remains uncertain\n\n${cited(s.uncertainty)}\n\n`;
  const compact = citationNumbers ? finalizeCompactCitations(body) : null;
  if (compact) body = compact.body;
  body += references(s, base, compact?.orderedIds || null) + "\n\n";
  let legend = block(before, "hmi-source-legend");
  if (legend)
    legend = legend
      .replace(
        /## Sources\s*/,
        `## Sources\n\nThis is the retained legacy discovery index, not an included-studies list or a count of reviewed evidence.\n\n<details>\n<summary>Open the legacy source index</summary>\n\n`,
      )
      .replace(
        "<!-- END: hmi-source-legend -->",
        "\n</details>\n<!-- END: hmi-source-legend -->",
      );
  const inLegend = new Set(
    [...legend.matchAll(/\[\[sources\/([^\]|\\]+)/g)].map((m) => m[1]),
  );
  const additional = entry.candidate_source_ids.filter((k) => !inLegend.has(k));
  if (additional.length)
    legend = legend.replace(
      "\n</details>",
      "\n\nLegacy candidates cited outside the previous index (not screened for this pilot):\n\n" +
        additional.map((k) => `- [[sources/${k}]]`).join("\n") +
        "\n\n</details>",
    );
  if (s.source_catalogue) {
    if (s.source_catalogue.topic !== `${s.family === 'ingredient' ? 'ingredients' : s.family === 'metal' ? 'metals' : 'products'}/${s.slug}`) throw Error('Source catalogue topic must match this page');
    legend = `<!-- BEGIN: hmi-source-legend -->\n## Sources\n\nBrowse [${s.title} Sources](../sources/index?topic=${encodeURIComponent(s.source_catalogue.topic)}) for sources cited on this page and additional discovery candidates. The searchable index distinguishes verified citation use from discovery relationships whose relevance has not been established.\n<!-- END: hmi-source-legend -->`;
  }
  body += legend + "\n\n";
  const history = s.retain_history_only ? block(before, "hmi-page-history") : block(before, "hmi-page-history").replace(
    /## Update history\s*/,
    `## Update history\n\n${s.history_note ? `**${s.history_note.title}** ${s.history_note.text}\n\n` : ""}**17 October 2026 — Evidence assessment updated.** Reorganized the evidence by question, retained source links, separated measurement bases and clarified the limitations of the assessment.\n\n`,
  );
  body += history + "\n";
  const errors = checkSections(body, s.family, register, s.section_headings);
  if (errors.length) throw Error(errors.join("\n"));
  return {
    page,
    record,
    content: matter.stringify(body, fm),
    questionPath: fm.question_record,
  };
}
export function verifyInputs(base = root) {
  const review = readJSON(base, `${pilotDir}/review.json`);
  for (const pin of review.input_pins) {
    if (hash(fs.readFileSync(path.join(base, pin.file))) !== pin.sha256)
      throw Error(
        `Evidence changed; reassess and repin before regeneration: ${pin.file}`,
      );
  }
  for (const source of review.source_checks) {
    const file = sourceRef(source.source_id),
      expected = source.semantic_sha256;
    if (
      sourceFingerprint(fs.readFileSync(path.join(base, file), "utf8")) !==
      expected
    )
      throw Error(`Source changed; reassess the dependent answers: ${file}`);
  }
  for (const s of loadPilot(base)) {
    if (!s.research_review_ref) continue;
    const additional = readJSON(base, s.research_review_ref);
    for (const source of additional.source_checks) {
      if (sourceFingerprint(fs.readFileSync(path.join(base, sourceRef(source.source_id)), "utf8")) !== source.semantic_sha256)
        throw Error(`Expanded synthesis source changed; reassess: ${source.source_id}`);
    }
    for (const id of pageSourceIds(s, base)) {
      if (!additional.source_checks.some(check => check.source_id === id)) throw Error(`Expanded synthesis source lacks a claim review: ${id}`);
    }
  }
}
export function buildPilot({ base = root, check = false } = {}) {
  verifyInputs(base);
  const changed = [];
  const outputs = [];
  for (const s of loadPilot(base)) {
    const p = compilePage(s, base);
    outputs.push(
      [p.page, p.content],
      [p.questionPath, JSON.stringify(p.record, null, 2) + "\n"],
    );
  }
  const observations = {
    version: 6,
    hmi_baseline_record: `${pilotDir}/hmi-rice-baselines.json`,
    comparison_method: "docs/contracts/relative-findings.md",
    formula: occurrenceRows("formula", base),
    rice: occurrenceRows("rice", base),
    inputs: [formulaPath, ricePath, riceSamplesPath, riceOccurrencePath, riceBaselineDataPath].map((file) => ({
      file,
      sha256: hash(fs.readFileSync(path.join(base, file))),
    })),
  };
  const riceBaselineRecord=riceHmiBaselines(observations.rice,base).record;
  const prior=readJSON(base,`${pilotDir}/rice-depth/baseline-v1-findings.json`);
  const reassessed=prior.filter(r=>!r.level).map(r=>riceBaselineRecord.admission.find(a=>a.finding===r.finding));
  if(reassessed.length!==46||reassessed.some(r=>!r))throw Error("Incomplete original limited-findings audit");
  outputs.push([`${pilotDir}/rice-depth/baseline-expansion-audit.json`,JSON.stringify({method:riceBaselineRecord.method,previous_limited:46,newly_rated:reassessed.filter(r=>r.level).length,still_unresolved:reassessed.filter(r=>!r.level).length,findings:reassessed},null,2)+"\n"]);
  outputs.push([`${pilotDir}/hmi-rice-baselines.json`, JSON.stringify({ ...riceBaselineRecord, inputs: observations.inputs, implementation: ["tools/contracts/pilot/hmi-baseline.mjs", "tools/contracts/pilot/rice-pooled-baselines.mjs", "tools/contracts/extract-rice-baseline-data.py", "tools/evidence/build-hmtc-aggregate-distributions.mjs"].map(file=>({ file, sha256: hash(fs.readFileSync(path.join(base,file))) })) }, null, 2) + "\n"]);
  outputs.push([
    `${pilotDir}/observations.json`,
    JSON.stringify(observations, null, 2) + "\n",
  ]);
  // Page outputs that later merged work edited belong to their new owners (superseded-outputs.json).
  const supersededFile = path.join(base, pilotDir, "superseded-outputs.json");
  const superseded = new Set(fs.existsSync(supersededFile) ? JSON.parse(fs.readFileSync(supersededFile, "utf8")).outputs.map((o) => o.file) : []);
  for (const [file, text] of outputs) {
    if (superseded.has(file)) continue;
    const dest = path.join(base, file);
    if (fs.existsSync(dest) && fs.readFileSync(dest, "utf8") === text) continue;
    changed.push(file);
    if (!check) {
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, text);
    }
  }
  if (check && changed.length)
    throw Error("Pilot outputs are stale: " + changed.join(", "));
  return changed;
}
