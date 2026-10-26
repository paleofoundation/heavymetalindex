#!/bin/sh
# Reproduce the corn candidate and every gate from the preserved inputs.
# Order: universe dump -> datasets -> sample aggregation -> compose -> pin -> build -> check -> preview -> gates -> finalize.
set -e
cd "$(dirname "$0")/../../../.."
A=data/evidence/contracts/ingredient-rollout-2026-10-22/corn
node tools/contracts/ingredients/corn/dump-universe.mjs
python3 -I tools/contracts/ingredients/corn/prepare-datasets.py
python3 -I tools/contracts/ingredients/corn/aggregate-samples.py
python3 -I tools/contracts/ingredients/corn/compose.py
python3 -I tools/contracts/ingredients/corn/pin-sources.py
node tools/contracts/ingredients/corn/build.mjs
node tools/contracts/ingredients/corn/build.mjs --check
node tools/contracts/ingredients/corn/preview.mjs > $A/preview.log 2>&1
node tools/contracts/ingredients/corn/fullness.mjs $A/preview/ingredients/corn.html
node --import tsx tools/audit-public-processing.mjs --output $A/preview
python3 -I tools/contracts/ingredients/corn/finalize.py
