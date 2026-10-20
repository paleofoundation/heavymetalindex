import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { recordJSONSchema } from "./record-schema.mjs";
export const root = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
export const register = JSON.parse(
  fs.readFileSync(
    path.join(root, "data/evidence/contracts/question-register.json"),
    "utf8",
  ),
);
// Presentation titles may name the page subject without changing question roles.
export const sectionHeading = (section, titles = {}) => titles?.[section.id] || section.heading;
const escape = (s) => s.replaceAll("|", "\\|").replaceAll("\n", " ");
export function generatedFiles() {
  const out = new Map();
  out.set(
    path.join(root, "data/evidence/contracts/page-question-record.schema.json"),
    JSON.stringify(recordJSONSchema(), null, 2) + "\n",
  );
  let readable =
    "# Universal question register\n\nVersion " +
    register.contract_version +
    " · " +
    register.effective_date +
    ". Generated from [question-register.json](../../data/evidence/contracts/question-register.json); do not edit this projection directly.\n\nEach ID is a required assessment on every page of that family. These are question templates, not completed answers. Default workflow: `unassessed`. Use the [shared evidence and answer contract](evidence-and-answers.md) for scope, search, applicability, certainty, review and completion. An answer can remain uncertain without disappearing from the inventory.\n\n";
  for (const [family, spec] of Object.entries(register.families)) {
    let block = "";
    readable += `## ${family[0].toUpperCase() + family.slice(1)}\n\n`;
    for (const [i, section] of spec.sections.entries()) {
      block += `### ${i + 1}. ${section.heading}\n\nRequired public heading: \`## ${section.heading}\`.\n\n| ID | Required question |\n| --- | --- |\n`;
      readable += `### ${i + 1}. ${section.heading}\n\n| ID | Question | Evidence class |\n| --- | --- | --- |\n`;
      for (const id of section.question_ids) {
        const q = register.questions.find((q) => q.id === id);
        if (!q) throw Error(`Unresolved question ${id}`);
        block += `| ${id} | ${escape(q.question)} |\n`;
        readable += `| ${id} | ${escape(q.question)} | ${q.evidence_class} |\n`;
      }
      block += `\nRequired output: ${section.required_output}\n\nExisting HMI material to map: ${section.legacy_mapping}.\n\n`;
      readable += `\nRequired output: ${section.required_output}\n\n`;
    }
    const target = path.join(root, spec.contract_document);
    const old = fs.readFileSync(target, "utf8");
    const marker =
      /<!-- BEGIN: hmi-contract-questions -->[\s\S]*?<!-- END: hmi-contract-questions -->/;
    if (!marker.test(old)) throw Error(`Missing generation markers: ${target}`);
    out.set(
      target,
      old.replace(
        marker,
        `<!-- BEGIN: hmi-contract-questions -->\n${block.trim()}\n<!-- END: hmi-contract-questions -->`,
      ),
    );
  }
  out.set(path.join(root, "docs/contracts/question-register.md"), readable);
  return out;
}
if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const check = process.argv.includes("--check");
  let failed = false;
  for (const [file, content] of generatedFiles()) {
    if (check) {
      if (!fs.existsSync(file) || fs.readFileSync(file, "utf8") !== content) {
        console.error(`Out of date: ${path.relative(root, file)}`);
        failed = true;
      }
    } else fs.writeFileSync(file, content);
  }
  if (failed) process.exitCode = 1;
  else
    console.log(
      `Contracts ${check ? "synchronized" : "generated"}: ${register.questions.length} questions, ${Object.keys(register.families).length} families.`,
    );
}
