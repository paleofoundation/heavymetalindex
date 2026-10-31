// Byte comparison of the protected Rice surfaces (hero with byline and page
// snapshot, persistent right sidebar) between two server-rendered HTML files.
import fs from 'node:fs';
import crypto from 'node:crypto';
export function lockedSurfaces(html) {
  const slice = (start, tag) => { const i = html.indexOf(start); if (i < 0) return null; let d = 0; const re = new RegExp(`<${tag}\\b|</${tag}>`, 'g'); re.lastIndex = i; let m;
    while ((m = re.exec(html))) { d += m[0][1] === '/' ? -1 : 1; if (d === 0) return html.slice(i, re.lastIndex); } return null; };
  const sha = s => s == null ? null : crypto.createHash('sha256').update(s, 'utf8').digest('hex');
  const hero = slice('<div class="hero-band', 'div'), rail = slice('<aside class="rail"', 'aside');
  const snapshot = hero && hero.slice(hero.indexOf('<section class="hero-snapshot"'), hero.indexOf('</section>', hero.indexOf('<section class="hero-snapshot"')) + 10);
  const byline = hero && hero.slice(hero.indexOf('<div class="hero-author-panel"'), hero.indexOf('<section class="hero-snapshot"'));
  return { hero: { length: hero?.length ?? null, sha256: sha(hero) }, byline: { length: byline?.length ?? null, sha256: sha(byline) }, snapshot: { length: snapshot?.length ?? null, sha256: sha(snapshot) }, rail: { length: rail?.length ?? null, sha256: sha(rail) }, text: { hero, rail } };
}
if (process.argv[2]) { const r = lockedSurfaces(fs.readFileSync(process.argv[2], 'utf8')); delete r.text; console.log(JSON.stringify(r, null, 1)); }
