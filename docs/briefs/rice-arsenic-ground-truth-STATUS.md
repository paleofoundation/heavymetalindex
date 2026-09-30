# Rice arsenic Ground Truth status

Staff note for draft pull request 167. This file is not a public wiki page. It does not set a limit.

Operated by the Institute of Contaminant Standards.

© 2026 Paleo Certified, Inc. All rights reserved.

Head under review: the commit that cites the qualifying summary rows and records the held-out printed means. Branch `cursor/rice-arsenic-ground-truth-5369`. Base `cursor/geo-hist-evidence-fields-e169` (draft pull request 163).

## Merge-ready on this branch

The public page `wiki/baselines/rice-arsenic.md` lists 223 qualifying rows (168 concentration, 55 count-only) and cites each summary concentration that already has a sampling country and a sampling year. Count-only rows are marked as counts. Gaps are named on the page, including numbers that were read and then held out. China by province is named as absent. The Lu 2023 manifest lists Cd, Cr, and iAs only. The Noh 2023 matrix slug is flagged and was not relabeled. Non-rice slugs are excluded before the rice rule runs.

A literature dossier path is started at `data/evidence/rice-arsenic-dossier-path.json`. It traces one qualifying row (Shao et al., 2023, Nepal, 2019, geometric mean total arsenic 43.4 µg/kg, n=170) from the source page to the baseline download. It is not a certification threshold and it is not a rebuilt defense-dossier index.

## What still blocks a live baseline on heavymetalindex.com

The page is not on heavymetalindex.com until this draft is merged and a human deploys. Pull request 167 is stacked on draft pull request 163. The geography ledger that this baseline reads is on that base branch. Merging 167 before 163 does not publish the dependency.

These printed facts are still not country-year rows:

- Yuliani et al. (2025) Indonesia total arsenic mean 106 µg/kg dry basis. The sampling year is not stated.
- Yuliani et al. (2025) inorganic arsenic mean 63 µg/kg. It is calculated from other countries' published pairs, not measured in these samples.
- Hasan et al. (2022) rice arsenic 0.075, 0.031, and 0.048 mg/kg at three sites, collected April to August 2021. No Bangladesh mean is printed.
- Shaheen et al. (2024) average arsenic 0.18 mg/kg fresh weight in Dhaka markets. The purchase year is not stated.
- TatahMentan et al. (2020) median total arsenic 131 µg/kg (United States white rice) and 217 µg/kg (United States brown rice). The sampling year is not stated. A pooled Thailand, India, and Italy median of 155 µg/kg is not split.
- Guo et al. (2025), Journal of Environmental Management, 388, 126024, https://doi.org/10.1016/j.jenvman.2025.126024, remains the China-by-province lead. No qualifying row has sampling country CN.

FDA baby-food compliance rows, WHO GEMS/Food region names, and FDA 2016 rows marked Not Specified still have no sampling country. That rule is on the geography ledger. This branch does not relax it.

## Next human ask

1. Review draft pull request 163, then draft pull request 167. Leave both drafts until that review.
2. Merge 163 first, then merge 167, then deploy heavymetalindex.com. That deploy is the step that makes the baseline page live. This branch does not merge, deploy, or mint.
3. Do not run `node tools/build-defense-dossier.mjs rice-bulk-grain` alone. That command rewrites `wiki/static/defense-dossier-index.json` to the single named product. A full dossier rebuild, if wanted after the merge, has to cover every locked product row in one run.

## Days-risk note for 10 October 2026

The note is dated 30 September 2026. The kill-gate date is about 10 October 2026, ten calendar days out. The literature page and the started dossier path can be reviewed inside that window. The live page cannot appear on heavymetalindex.com inside that window unless a human merges both drafts, in order, and deploys. A dossier index rebuild is a separate step after that deploy and is not required for the baseline page itself to be live.
