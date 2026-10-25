// Release lints every release runs, whatever pages it ships, and the gate report that
// counts them (HMI-CROSS-INGREDIENT-1, review fixes on #437).
// - ALWAYS_STAGED: stage.mjs copies these into every release, including legacy-only ones
//   that do not otherwise bring tools/engine/gates.
// - gateReport: both the full build and --gates-only include every always-run lint, so a
//   failing lint fails the release status and its exit code.
export const ALWAYS_STAGED = ['tools/engine/gates/cross-ingredient.mjs'];

export function gateReport({ pages, status, gatesOnly }) {
  const fullness_pages = pages.every(p => p.fullness === 'pass') ? 'pass' : 'fail';
  const always = { cross_ingredient: status(/cross-ingredient/) };
  if (gatesOnly) return { fullness_pages, fullness_site: status(/lint:ingredient-fullness/), ...always };
  return {
    fullness_pages,
    fullness_site: status(/lint:ingredient-fullness/), presentation: status(/lint:ingredient-presentation/), public_processing: status(/audit-public-processing/),
    hero_preservation: status(/audit-hero-preservation/), dead_hrefs: status(/audit-dead-internal-hrefs/), historical_links: status(/lint:historical-links/),
    contextual_links: status(/lint:contextual-links/), live_preservation: status(/lint:ingredient-live-preservation/), ...always, postbuild_all: status(/^postbuild/),
  };
}

export const releaseStatus = gates => Object.values(gates).every(v => v === 'pass') ? 'pass' : 'fail';
