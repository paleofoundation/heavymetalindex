#!/bin/sh
# Reproduce the black pepper candidate end to end and run every gate on the preview HTML.
set -e
cd "$(dirname "$0")/../../../.."
A=data/evidence/contracts/most-studied-rollout-2026-10-22/black-pepper
python3 -I tools/contracts/ingredients/black-pepper/prepare-datasets.py
python3 -I tools/contracts/ingredients/black-pepper/compose.py
python3 -I tools/contracts/ingredients/black-pepper/pin-sources.py
node tools/contracts/ingredients/black-pepper/build.mjs
node tools/contracts/ingredients/black-pepper/build.mjs --check
node tools/contracts/ingredients/black-pepper/preview.mjs > $A/preview.log 2>&1
node tools/contracts/ingredients/black-pepper/fullness.mjs $A/preview/ingredients/black-pepper.html > $A/gates-fullness.json
node -e "import('./tools/audit-ingredient-presentation.mjs').then(m=>{const r=m.inspectIngredientPresentation(require('fs').readFileSync('$A/preview/ingredients/black-pepper.html','utf8'));require('fs').writeFileSync('$A/gates-presentation.json',JSON.stringify(r,null,1));if(r.errors.length)process.exit(1)})"
node --import tsx tools/audit-public-processing.mjs --output $A/preview > $A/gates-public-processing.log 2>&1
node -e "import('./tools/contracts/validate.mjs').then(m=>{const e=m.validateRecord(JSON.parse(require('fs').readFileSync('data/evidence/questions/ingredient/black-pepper.json','utf8')));console.log('validateRecord',JSON.stringify(e));if(e.length)process.exit(1)})"
node tools/contracts/ingredients/black-pepper/thin-page.mjs
python3 -I tools/contracts/ingredients/black-pepper/finalize.py
