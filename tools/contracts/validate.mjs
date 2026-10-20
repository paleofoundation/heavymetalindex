import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";
import { register, root, generatedFiles, sectionHeading } from "./generate.mjs";
import { PageQuestionRecord, recordJSONSchema } from "./record-schema.mjs";

export function validateRegister(r) {
  const errors = [],
    seen = new Set(),
    used = new Set();
  for (const q of r.questions) {
    if (seen.has(q.id)) errors.push(`Duplicate ID ${q.id}`);
    seen.add(q.id);
    if (!/^HMI-(MET|ING|PRD)-\d{3}$/.test(q.id))
      errors.push(`Malformed ID ${q.id}`);
    if (!r.families[q.family]) errors.push(`Unknown family ${q.id}`);
    if (q.default_workflow_state !== "unassessed")
      errors.push(`Premature default ${q.id}`);
    if (!q.question?.trim() || !q.answer_requirements?.trim())
      errors.push(`Missing question/requirements ${q.id}`);
  }
  for (const [family, spec] of Object.entries(r.families)) {
    if (spec.sections.length !== 12)
      errors.push(`${family}: expected 12 sections`);
    for (const section of spec.sections)
      for (const id of section.question_ids) {
        const q = r.questions.find((q) => q.id === id);
        if (!q || q.family !== family || q.section !== section.id)
          errors.push(`Bad section mapping ${id}`);
        if (used.has(id)) errors.push(`Question mapped twice ${id}`);
        used.add(id);
      }
    if (r.questions.filter((q) => q.family === family).length !== 36)
      errors.push(`${family}: expected 36 questions in v1`);
  }
  for (const id of seen) if (!used.has(id)) errors.push(`Unmapped ${id}`);
  return errors;
}
export function validateRecord(record, r = register) {
  const parsed = PageQuestionRecord.safeParse(record);
  if (!parsed.success)
    return parsed.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`);
  record = parsed.data;
  const errors = [],
    expected = new Set(
      r.questions.filter((q) => q.family === record.family).map((q) => q.id),
    ),
    seen = new Set();
  const prefix = r.families[record.family].directory.replace("wiki/", "") + "/";
  if (
    !record.page_slug.startsWith(prefix) ||
    !new RegExp("^" + prefix + "[a-z0-9][a-z0-9-]*$").test(record.page_slug)
  )
    errors.push("page_slug does not match family or canonical slug format");
  for (const a of record.answers) {
    const fail = (message) => errors.push(`${a.question_id}: ${message}`);
    if (!expected.has(a.question_id)) fail("not a question for this family");
    if (seen.has(a.question_id)) fail("duplicate question assessment");
    seen.add(a.question_id);
    if (a.supersedes !== null && a.supersedes >= a.revision)
      fail("supersedes must precede revision");
    const searched = () =>
      a.search.status === "complete" &&
      a.search.scope &&
      a.search.protocol_ref &&
      a.search.record_refs.length &&
      a.search.screening_ref &&
      a.search.searched_through &&
      !a.search.unresolved_access.length;
    if (a.evidence_state === "no_eligible_evidence") {
      if (!searched())
        fail(
          "a searched evidence gap needs a completed protocol/search/screening record with no unresolved access",
        );
      if (a.evidence_refs.length)
        fail(
          "no-eligible-evidence cannot also include eligible supporting evidence",
        );
    }
    if (a.evidence_state === "not_applicable" && !a.not_applicable_reason)
      fail("not-applicable requires a scope rationale");
    if (
      ["high", "moderate", "low", "very_low"].includes(a.certainty.judgment)
    ) {
      if (
        !a.certainty.method ||
        !a.certainty.rationale ||
        !a.certainty.assessment_ref
      )
        fail(
          "certainty needs method, assessment and rationale; counts are not a grade",
        );
      if (
        [
          "not_assessed",
          "no_eligible_evidence",
          "inaccessible",
          "not_applicable",
        ].includes(a.evidence_state)
      )
        fail(
          "cannot grade an unassessed, absent, inaccessible or inapplicable evidence body",
        );
    }
    if (
      a.workflow_state === "access_blocked" &&
      (a.search.status !== "access_blocked" ||
        !a.search.unresolved_access.length)
    )
      fail("access-blocked needs an unresolved source-access record");
    if (a.workflow_state === "reviewed") {
      if (!a.review || !a.answer || !a.applicability || !a.limits_of_inference)
        fail(
          "reviewed answer needs actual review, direct answer, applicability and limits",
        );
      if (Object.values(a.scope).some((v) => v === "unassessed"))
        fail("reviewed scope cannot remain unassessed");
      if (["not_assessed", "inaccessible"].includes(a.evidence_state))
        fail(
          "unassessed or inaccessible evidence is not a reviewed disposition",
        );
      if (a.evidence_state !== "not_applicable" && !searched())
        fail("reviewed answer needs a completed search of its declared scope");
      if (
        ["available", "conflicting", "insufficient"].includes(
          a.evidence_state,
        ) &&
        (!a.evidence_refs.length || !a.synthesis_refs.length)
      )
        fail("reviewed evidence needs source and synthesis references");
      if (a.certainty.judgment === "not_assessed")
        fail(
          "reviewed answer needs a certainty disposition; use justified not-applicable for non-effect questions",
        );
      if (a.certainty.judgment === "not_applicable" && !a.certainty.rationale)
        fail("not-applicable certainty needs a rationale");
    }
    if (record.coverage_state === "complete" && a.workflow_state !== "reviewed")
      fail("complete page has an unfinished or stale question");
  }
  for (const id of expected)
    if (!seen.has(id)) errors.push(`Missing question ${id}`);
  return errors;
}
export function checkSections(content, family, r = register, titles = matter(content).data.section_headings || {}) {
  const errors = [];
  if(!titles || typeof titles!=='object' || Array.isArray(titles))return ['Invalid section heading map'];
  const roles=new Set(r.families[family].sections.map(s=>s.id));
  for(const [role,title] of Object.entries(titles))if(!roles.has(role)||typeof title!=='string'||!title.trim()||/[\r\n<>]/.test(title))errors.push(`Invalid section heading: ${role}`);
  const headings = [...content.matchAll(/^## (.+)\r?$/gm)];
  let previous = -1;
  for (const s of r.families[family].sections) {
    const title=sectionHeading(s,titles);
    const matches = headings.filter((h) => h[1].trim() === title);
    if (matches.length !== 1) {
      errors.push(`Expected exactly one H2: ${s.heading}`);
      continue;
    }
    const h = matches[0];
    if (h.index <= previous) errors.push(`Out-of-order section: ${s.heading}`);
    previous = h.index;
    const next = headings.find((n) => n.index > h.index);
    const body = content
      .slice(h.index + h[0].length, next?.index ?? content.length)
      .replace(/<!--[\s\S]*?-->/g, "")
      .trim();
    if (!body || /^_?Pending[\s\S]*?_?$/i.test(body))
      errors.push(`Empty/placeholder section: ${s.heading}`);
  }
  return errors;
}
export function validateAdoptedPage(
  content,
  pagePath,
  r = register,
  base = root,
) {
  const fm = matter(content).data;
  if (!fm.page_contract_version) return [];
  const family = Object.keys(r.families).find(
    (f) => r.families[f].frontmatter_type === fm.type,
  );
  if (!family) return ["Unknown page family for adopted contract"];
  const errors = [];
  try {
    const inventory = JSON.parse(
      fs.readFileSync(
        path.join(base, "data/evidence/contracts/adopted-pages.json"),
        "utf8",
      ),
    );
    if (!inventory.pages?.includes(pagePath))
      errors.push("Adopted page is missing from the adoption inventory");
  } catch {
    errors.push("Missing adoption inventory");
  }
  if (fm.page_contract_version !== r.contract_version)
    errors.push("Unknown page contract version");
  if (
    !fm.question_record ||
    typeof fm.question_record !== "string" ||
    !/^data\/evidence\/questions\/(metal|ingredient|product)\/[a-z0-9-]+\.json$/.test(
      fm.question_record,
    )
  )
    errors.push("Missing or invalid question_record path");
  else {
    const ref = path.join(base, fm.question_record);
    try {
      const record = JSON.parse(fs.readFileSync(ref, "utf8"));
      if (
        record.family !== family ||
        `wiki/${record.page_slug}.md` !== pagePath.replaceAll("\\", "/")
      )
        errors.push("Question record belongs to another page/family");
      errors.push(...validateRecord(record, r));
    } catch (e) {
      errors.push(`Unreadable question record: ${e.message}`);
    }
  }
  errors.push(...checkSections(matter(content).content, family, r, fm.section_headings));
  return errors;
}
export function checkAll() {
  const errors = validateRegister(register);
  for (const [file, content] of generatedFiles())
    if (!fs.existsSync(file) || fs.readFileSync(file, "utf8") !== content)
      errors.push(`Generated document differs: ${path.relative(root, file)}`);
  const schemaPath = path.join(
    root,
    "data/evidence/contracts/page-question-record.schema.json",
  );
  if (
    !fs.existsSync(schemaPath) ||
    fs.readFileSync(schemaPath, "utf8") !==
      JSON.stringify(recordJSONSchema(), null, 2) + "\n"
  )
    errors.push("Generated record schema differs");
  const inventory = JSON.parse(
    fs.readFileSync(
      path.join(root, "data/evidence/contracts/adopted-pages.json"),
      "utf8",
    ),
  );
  if (inventory.contract_version !== register.contract_version)
    errors.push("Adoption inventory version mismatch");
  const pages = inventory.pages;
  if (!Array.isArray(pages) || new Set(pages).size !== pages.length)
    errors.push("Invalid or duplicate adoption entries");
  let adopted = 0,
    legacy = "not scanned";
  for (const rel of Array.isArray(pages) ? pages : []) {
    if (!/^wiki\/(metals|ingredients|products)\/[a-z0-9-]+\.md$/.test(rel)) {
      errors.push(`Invalid adopted path ${rel}`);
      continue;
    }
    try {
      const content = fs.readFileSync(path.join(root, rel), "utf8");
      if (!matter(content).data.page_contract_version)
        errors.push(`${rel}: missing adoption metadata`);
      errors.push(
        ...validateAdoptedPage(content, rel).map((e) => `${rel}: ${e}`),
      );
      adopted++;
    } catch (e) {
      errors.push(`${rel}: ${e.message}`);
    }
  }
  return { errors, adopted, legacy };
}
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const result = checkAll();
  console.log(
    `HMI contracts: ${register.questions.length} templates; ${result.adopted} adopted pages; legacy pages not assessed by v1 checks.`,
  );
  for (const e of result.errors) console.error(e);
  if (result.errors.length) process.exitCode = 1;
  else
    console.log(
      "Structural checks PASS. Scientific support and search adequacy require evidence review.",
    );
}
