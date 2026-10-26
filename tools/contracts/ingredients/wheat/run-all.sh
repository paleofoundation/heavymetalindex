#!/bin/sh
# Reproduce the wheat candidate end to end and run every gate on the preview HTML.
set -e
cd "$(dirname "$0")/../../../.."
A=data/evidence/contracts/ingredient-rollout-2026-10-22/wheat
python3 -I tools/contracts/ingredients/wheat/prepare-datasets.py
python3 -I tools/contracts/ingredients/wheat/compose.py
python3 -I tools/contracts/ingredients/wheat/pin-sources.py
node tools/contracts/ingredients/wheat/build.mjs
node tools/contracts/ingredients/wheat/build.mjs --check
node tools/contracts/ingredients/wheat/preview.mjs > $A/preview.log 2>&1
node tools/contracts/ingredients/wheat/fullness.mjs $A/preview/ingredients/wheat.html > $A/gates-fullness.json
node -e "import('./tools/audit-ingredient-presentation.mjs').then(m=>{const r=m.inspectIngredientPresentation(require('fs').readFileSync('$A/preview/ingredients/wheat.html','utf8'));require('fs').writeFileSync('$A/gates-presentation.json',JSON.stringify(r,null,1));if(r.errors.length)process.exit(1)})"
node --import tsx tools/audit-public-processing.mjs --output $A/preview > $A/gates-public-processing.log 2>&1
node -e "import('./tools/contracts/validate.mjs').then(m=>{const e=m.validateRecord(JSON.parse(require('fs').readFileSync('data/evidence/questions/ingredient/wheat.json','utf8')));console.log('validateRecord',JSON.stringify(e));if(e.length)process.exit(1)})"
node tools/contracts/ingredients/wheat/thin-page.mjs
python3 -I tools/contracts/ingredients/wheat/finalize.py
