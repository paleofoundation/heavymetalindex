---
title: Category 5 Step 0 beverage taxonomy ingest audit
description: Routing audit for the locked HMTc Category 5 beverage Step 0 output.
audience: [researcher, regulator]
updated: 2026-05-01
sources: 0
---

# Category 5 Step 0 Beverage Taxonomy Ingest Audit

## Trigger

Locked Step 0 artifact: `raw/reports/category5-step-0-output-locked-20260428.md`.

This audit records how the locked Category 5 beverage row architecture was turned into wiki nodes. The raw artifact is taxonomy infrastructure, not an occurrence source, so it creates structural product and ingredient links rather than concentration claims.

## Pages Created

The Category 5 hub is [[products/category-5-beverages]]. The sixteen locked row pages are:

1. [[products/fruit-juices-non-apple|Fruit juices, non-apple]]
2. [[products/fruit-juices-apple-containing|Fruit juices, apple-containing]]
3. [[products/vegetable-juices-non-root|Vegetable juices, non-root]]
4. [[products/vegetable-juices-root-vegetable-containing|Vegetable juices, root-vegetable-containing]]
5. [[products/plant-milks-non-soy-non-rice|Plant milks, non-soy/non-rice]]
6. [[products/plant-milks-soy-based|Plant milks, soy-based]]
7. [[products/plant-milks-rice-based|Plant milks, rice-based]]
8. [[products/flavored-waters|Flavored waters]]
9. [[products/sports-energy-drinks|Sports/energy drinks]]
10. [[products/herbal-botanical-infusions|Herbal/botanical infusions]]
11. [[products/true-tea-camellia-sinensis|True tea (Camellia sinensis)]]
12. [[products/matcha|Matcha]]
13. [[products/coffee|Coffee]]
14. [[products/soft-drinks-carbonated-beverages|Soft drinks/carbonated beverages]]
15. [[products/fermented-beverages-non-tea-based|Fermented beverages, non-tea-based]]
16. [[products/kombucha-tea-based|Kombucha (tea-based)]]

## Ingredient Node Rule

Ingredient-level evidence belongs on [[ingredients/index|ingredient pages]]. Product-category pages may describe finished-product routing, but ingredient-only values should populate the linked ingredient node's machine-readable `contamination_profile`. If a linked ingredient does not exist, the ingest must create it as a wiki node before considering the product page complete.

## Prevention Rule

Category Step 0 files should not remain as flat Markdown artifacts. They should create a category hub, row pages, ingredient nodes, and index links so Obsidian and the public site can traverse the taxonomy as a wiki.
