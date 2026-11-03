// node tools/engine/page/build-product-v3.mjs <engine-built.html> <out.html> [slug]
// Pilot 3: adds the product universal core to an engine-built product page.
import fs from 'node:fs';
import { injectCore, validateCore } from './product-core.mjs';
const [src, out, slug = 'infant-formula-powder-non-soy'] = process.argv.slice(2);
const core = JSON.parse(fs.readFileSync(`data/evidence/products/${slug}/product-core.json`, 'utf8'));
const errors = validateCore(core);
if (errors.length) { console.error(errors); process.exit(1); }
const html = injectCore(fs.readFileSync(src, 'utf8'), core, { label: 'non-soy powdered infant formula' });
fs.writeFileSync(out, html);
console.log(JSON.stringify({ out, bytes: html.length, recalls: core.recalls.length, limits: core.limits.length, benchmark_rows: core.benchmark.length }));
