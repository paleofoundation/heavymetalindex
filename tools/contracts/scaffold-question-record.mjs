import fs from "node:fs";
import path from "node:path";
import { register, root } from "./generate.mjs";
import { scaffoldRecord } from "./record-schema.mjs";
const [family, slug, output] = process.argv.slice(2);
if (!family || !slug || !output)
  throw Error(
    "Usage: node tools/contracts/scaffold-question-record.mjs <metal|ingredient|product> <slug> <output.json>",
  );
if (
  !fs.existsSync(
    path.join(
      root,
      register.families[family]?.directory ?? "invalid",
      `${slug}.md`,
    ),
  )
)
  throw Error(
    "Page must already exist; this tool does not create or promote public pages.",
  );
const record = scaffoldRecord(register, family, slug);
const target = path.resolve(output);
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, JSON.stringify(record, null, 2) + "\n", {
  flag: "wx",
});
console.log(
  `Created ${record.answers.length} unassessed questions at ${target}. No public page modified.`,
);
