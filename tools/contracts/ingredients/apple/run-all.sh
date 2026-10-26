#!/bin/sh
# Reproduce the apple candidate end to end and run every gate on the preview HTML.
set -e
cd "$(dirname "$0")/../../../.."
A=data/evidence/contracts/ingredient-rollout-2026-10-22/apple
python3 -I tools/contracts/ingredients/apple/prepare-datasets.py
python3 -I tools/contracts/ingredients/apple/patch-extractions.py
python3 -I tools/contracts/ingredients/apple/compose.py
python3 -I tools/contracts/ingredients/apple/pin-sources.py
node tools/contracts/ingredients/apple/build.mjs
node tools/contracts/ingredients/apple/build.mjs --check
node tools/contracts/ingredients/apple/preview.mjs > $A/preview.log 2>&1
node tools/contracts/ingredients/apple/fullness.mjs $A/preview/ingredients/apple.html > $A/gates-fullness.json
node -e "import('./tools/audit-ingredient-presentation.mjs').then(m=>{const r=m.inspectIngredientPresentation(require('fs').readFileSync('$A/preview/ingredients/apple.html','utf8'));require('fs').writeFileSync('$A/gates-presentation.json',JSON.stringify(r,null,1));if(r.errors.length)process.exit(1)})"
node --import tsx tools/audit-public-processing.mjs --output $A/preview > $A/gates-public-processing.log 2>&1
node -e "import('./tools/contracts/validate.mjs').then(m=>{const e=m.validateRecord(JSON.parse(require('fs').readFileSync('data/evidence/questions/ingredient/apple.json','utf8')));require('fs').writeFileSync('$A/gates-validate-record.json',JSON.stringify(e));console.log('validateRecord',JSON.stringify(e));if(e.length)process.exit(1)})"
node tools/contracts/ingredients/apple/thin-page.mjs
python3 -I tools/contracts/ingredients/apple/finalize.py
