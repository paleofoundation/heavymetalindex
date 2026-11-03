// node tools/engine/page/build-product-v4.mjs <engine-built.html> <out.html> [slug]
// Pilot 4: assembles the product universal core with an engine-built product page.
import fs from 'node:fs';
import { assemble, validateCore } from './product-core.mjs';
const [src, out, slug = 'infant-formula-powder-non-soy'] = process.argv.slice(2);
const core = JSON.parse(fs.readFileSync(`data/evidence/products/${slug}/product-core.json`, 'utf8'));
const errors = validateCore(core);
if (errors.length) { console.error(errors); process.exit(1); }
const html = assemble(fs.readFileSync(src, 'utf8'), core, {
  label: 'non-soy powdered infant formula',
  updateNote: '3 November 2026: Rebuilt to the product canonical rules v2: overview before scope; linked government limits with the Prop 65 inorganic arsenic dose added; why high-risk, ingredient drivers and testing as prose with questions; product test results folded into the contamination profile; evidence-based mitigation table; one reference list.',
});
fs.writeFileSync(out, html);
console.log(JSON.stringify({ out, bytes: html.length, limits: core.limits.length, recalls: core.recalls.length, mitigation_rows: core.mitigation.rows.length }));
