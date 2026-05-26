import { eq, sql } from "drizzle-orm"

import { DEFAULT_DEV_DB_DIR, type DevDb, schema } from "./client"
import { runMigrations } from "./migrate"

const {
  certification,
  contaminationFinding,
  ingredient,
  lab,
  manufacturer,
  metal,
  product,
  productIngredient,
  sourceDocument,
  study,
} = schema

// Real values cited from existing wiki source pages so the seed exercises
// provenance end-to-end. Each finding traces to a study, which traces to a
// source_document with a real DOI/URL/cite_key.

export async function seed(dbDir: string = DEFAULT_DEV_DB_DIR) {
  // Apply migrations to a fresh-or-existing dev DB, then truncate and reseed.
  const { db, pglite } = await runMigrations(dbDir)

  // Truncate idempotently. Order respects FK dependencies.
  await db.execute(sql`
    TRUNCATE TABLE
      certification,
      contamination_finding,
      product_ingredient,
      study,
      source_document,
      product,
      ingredient,
      manufacturer,
      metal,
      lab
    RESTART IDENTITY CASCADE
  `)

  // -----------------------------------------------------------------
  // metals
  // -----------------------------------------------------------------
  const [tAs] = await db
    .insert(metal)
    .values({
      code: "tAs",
      symbol: "As",
      name: "Total arsenic",
      isHmtcAnalyte: true,
      description:
        "Total elemental arsenic. Toxicologically meaningful only when species are also reported; iAs is the regulatory-relevant species for most foods.",
    })
    .returning()

  const [tHg] = await db
    .insert(metal)
    .values({
      code: "tHg",
      symbol: "Hg",
      name: "Total mercury",
      isHmtcAnalyte: true,
      description:
        "Total elemental mercury. MeHg (methylmercury) is the species of concern in seafood; tHg is reported here because the dietary literature is dominated by tHg measurements.",
    })
    .returning()

  const [crTotal] = await db
    .insert(metal)
    .values({
      code: "Cr",
      symbol: "Cr",
      name: "Total chromium",
      isHmtcAnalyte: false,
      description:
        "Total chromium. Cr-VI is the toxicologically relevant species; total Cr is the more commonly reported measurement.",
    })
    .returning()

  await db.insert(metal).values([
    {
      code: "Pb",
      symbol: "Pb",
      name: "Lead",
      isHmtcAnalyte: true,
      description:
        "Lead. No safe exposure level for infants and children. Regulated under FDA Closer to Zero (US), EU 1881/2006, and equivalents globally.",
    },
    {
      code: "Cd",
      symbol: "Cd",
      name: "Cadmium",
      isHmtcAnalyte: true,
      description:
        "Cadmium. Carcinogen and renal toxicant. Bioconcentrates in cocoa, leafy greens, rice, and shellfish.",
    },
    {
      code: "iAs",
      symbol: "As",
      name: "Inorganic arsenic",
      parentMetalId: tAs.id,
      isHmtcAnalyte: true,
      description:
        "Inorganic arsenic, the species of toxicological concern for most food matrices. Routinely separated from total As in rice, juice, and infant cereal.",
    },
    {
      code: "MeHg",
      symbol: "Hg",
      name: "Methylmercury",
      parentMetalId: tHg.id,
      isHmtcAnalyte: true,
      description:
        "Methylmercury, the bio-accumulating organomercury species in fish and shellfish. Distinguished from tHg in seafood-focused literature.",
    },
    {
      code: "Cr-VI",
      symbol: "Cr",
      name: "Hexavalent chromium",
      parentMetalId: crTotal.id,
      isHmtcAnalyte: true,
      description:
        "Hexavalent chromium. The carcinogenic Cr species. Total Cr is not a substitute under HMTc analyte rules.",
    },
    {
      code: "Ni",
      symbol: "Ni",
      name: "Nickel",
      isHmtcAnalyte: true,
      description:
        "Nickel. HMTc analyte. Allergenic and a contributor to total dietary metal load in cocoa and chocolate.",
    },
  ])

  // -----------------------------------------------------------------
  // ingredients
  // -----------------------------------------------------------------
  const [rice, cocoa, fruit, rootVeg] = await db
    .insert(ingredient)
    .values([
      {
        slug: "rice",
        name: "Rice",
        commonNames: ["Oryza sativa"],
        description:
          "Staple cereal grain. Bioconcentrates inorganic arsenic from paddy water; cadmium accumulation is cultivar- and soil-dependent.",
        wikiIngredientSlug: "rice",
      },
      {
        slug: "cocoa",
        name: "Cocoa",
        commonNames: ["cacao", "Theobroma cacao"],
        description:
          "Cocoa bean and derived products. Cd uptake driven by volcanic soils (Latin America); Pb contamination driven by post-harvest handling.",
        wikiIngredientSlug: "cocoa",
      },
      {
        slug: "fruit",
        name: "Fruit",
        commonNames: [],
        description:
          "Whole fruits used in baby food and juice products. Lead exposure typically reflects soil contamination at the growing site.",
        wikiIngredientSlug: "fruit",
      },
      {
        slug: "root-vegetable",
        name: "Root vegetables",
        commonNames: ["carrots", "sweet potato", "beets"],
        description:
          "Underground storage organs (carrots, sweet potato, beet). Accumulate Pb and Cd from soil more aggressively than above-ground vegetables.",
        wikiIngredientSlug: "root-vegetables",
      },
    ])
    .returning()

  // -----------------------------------------------------------------
  // products (≥5 classes)
  // -----------------------------------------------------------------
  const [
    babyCerealRice,
    babyCerealNonRice,
    fruitPurees,
    rootPurees,
    darkChocolate,
    milkChocolate,
    cocoaPowder,
    riceWhiteUS,
  ] = await db
    .insert(product)
    .values([
      {
        slug: "baby-cereals-dry-rice-based",
        name: "Baby cereals, dry, rice-based",
        form: "dry",
        isClass: true,
        hmtcCategory: "infant-and-toddler-foods",
        hmtcRow: "baby-cereals-dry-rice",
        description:
          "Single-grain or rice-dominant dry infant cereals. The category FDA targets at 100 ppb iAs (2020) and 20 ppb Pb (2025).",
        wikiProductSlug: "baby-cereals-dry-rice-based",
      },
      {
        slug: "baby-cereals-dry-non-rice",
        name: "Baby cereals, dry, non-rice",
        form: "dry",
        isClass: true,
        hmtcCategory: "infant-and-toddler-foods",
        hmtcRow: "baby-cereals-dry-non-rice",
        description:
          "Oat, multigrain, barley, and other non-rice dry infant cereals. FDA Pb action level 20 ppb (2025).",
        wikiProductSlug: "baby-cereals-dry-non-rice",
      },
      {
        slug: "fruit-purees",
        name: "Fruit purees (baby food)",
        form: "puree",
        isClass: true,
        hmtcCategory: "infant-and-toddler-foods",
        hmtcRow: "fruit-purees",
        description:
          "Single-ingredient and mixed fruit purees marketed for infants. FDA Pb action level 10 ppb (2025).",
        wikiProductSlug: "fruit-purees",
      },
      {
        slug: "root-vegetable-purees",
        name: "Root vegetable purees (baby food)",
        form: "puree",
        isClass: true,
        hmtcCategory: "infant-and-toddler-foods",
        hmtcRow: "root-vegetable-purees",
        description:
          "Carrot, sweet potato, and beet purees marketed for infants. FDA Pb action level 20 ppb (2025) — higher than other categories because of root-uptake biology.",
        wikiProductSlug: "root-vegetable-purees",
      },
      {
        slug: "dark-chocolate",
        name: "Dark chocolate",
        form: "solid-food",
        isClass: true,
        description:
          "Dark chocolate bars and confections. Cd burden driven by cocoa content and growing region.",
        wikiProductSlug: "dark-chocolate",
      },
      {
        slug: "milk-chocolate",
        name: "Milk chocolate",
        form: "solid-food",
        isClass: true,
        description:
          "Milk chocolate confections. Lower Cd burden than dark chocolate because milk dilutes cocoa fraction.",
        wikiProductSlug: "milk-chocolate",
      },
      {
        slug: "cocoa-powder",
        name: "Cocoa powder",
        form: "powder",
        isClass: true,
        description:
          "Unsweetened cocoa powder for baking and beverages. Highest Cd and Pb among cocoa-derived products in US market surveys.",
        wikiProductSlug: "cocoa-powder",
      },
      {
        slug: "rice-white-southeast-us",
        name: "Rice, white, Southeast US",
        form: "dry",
        isClass: true,
        description:
          "White rice grown in the Southeast US. Subgroup distinguished by HBBF 2025 because of elevated iAs vs California-grown white rice.",
        wikiProductSlug: "rice",
      },
    ])
    .returning()

  // product ↔ ingredient links
  await db.insert(productIngredient).values([
    { productId: babyCerealRice.id, ingredientId: rice.id, proportionPct: "95.000" },
    { productId: babyCerealNonRice.id, ingredientId: rice.id },
    { productId: fruitPurees.id, ingredientId: fruit.id, proportionPct: "98.000" },
    { productId: rootPurees.id, ingredientId: rootVeg.id, proportionPct: "98.000" },
    { productId: darkChocolate.id, ingredientId: cocoa.id, proportionPct: "70.000" },
    { productId: milkChocolate.id, ingredientId: cocoa.id, proportionPct: "30.000" },
    { productId: cocoaPowder.id, ingredientId: cocoa.id, proportionPct: "100.000" },
    { productId: riceWhiteUS.id, ingredientId: rice.id, proportionPct: "100.000" },
  ])

  // -----------------------------------------------------------------
  // source documents (real cite-keys from wiki/sources/)
  // -----------------------------------------------------------------
  const [fdaCtzPb, hbbfChiger, abtCocoa, hbbfRice] = await db
    .insert(sourceDocument)
    .values([
      {
        citeKey: "fda-ctz-Pb-babyfood-2025",
        title:
          "Action Levels for Lead in Processed Food Intended for Babies and Young Children: Guidance for Industry",
        authors: ["U.S. Food and Drug Administration"],
        year: 2025,
        publication: "FDA Human Foods Program",
        doi: null,
        url: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-action-levels-lead-processed-food-intended-babies-and-young-children",
        sourceType: "agency-report",
        evidenceTier: "A",
        accessStatus: "open",
        license: "us-government-work",
        rawPath:
          "raw/reports/FDA-Guidance-Jan2025-LeadProcessedFoodBabyChildren-12312024.pdf",
        wikiSourceSlug: "fda-ctz-Pb-babyfood-2025",
        retrievedOn: "2026-05-02",
      },
      {
        citeKey: "chiger2017-iAs-rice-cereal-neurodevelopment-hbbf",
        title:
          "Effects of Inorganic Arsenic in Infant Rice Cereal on Children's Neurodevelopment",
        authors: ["Chiger A", "Lynch MT"],
        year: 2017,
        publication: "Abt Associates report prepared for HBBF",
        doi: null,
        url: "https://www.healthybabyfood.org/sites/healthybabyfoods.org/files/2017-12/HBBF_InorganicArsenicReport_Dec2017.pdf",
        sourceType: "agency-report",
        evidenceTier: "B",
        accessStatus: "open",
        license: "publicly distributed",
        wikiSourceSlug: "chiger2017-iAs-rice-cereal-neurodevelopment-hbbf",
      },
      {
        citeKey: "abt2018-cadmium-lead-cocoa-chocolate-us-market",
        title:
          "Cadmium and Lead in Cocoa Powder and Chocolate Products in the U.S. Market",
        authors: [
          "Eileen Abt",
          "Jennifer Fong Sam",
          "Patrick Gray",
          "Lauren Posnick Robin",
        ],
        year: 2018,
        publication: "Food Additives & Contaminants: Part B Surveillance",
        doi: "10.1080/19393210.2017.1420700",
        url: "https://doi.org/10.1080/19393210.2017.1420700",
        sourceType: "peer-reviewed",
        evidenceTier: "A",
        accessStatus: "gated",
        license: "taylor-francis",
        wikiSourceSlug: "abt2018-cadmium-lead-cocoa-chocolate-us-market",
      },
      {
        citeKey: "hbbf2025-rice-arsenic-cadmium-145-samples",
        title:
          "What's in your family's rice? Arsenic, Cadmium, and Lead in Popular Rice Brands - Plus 9 Safer Grains to Try",
        authors: ["Houlihan J", "Naumoff K"],
        year: 2025,
        publication: "Healthy Babies Bright Futures (HBBF) report",
        doi: null,
        url: "https://www.healthybabyfood.org/",
        sourceType: "third-party-testing",
        evidenceTier: "B",
        accessStatus: "open",
        license: "cite-and-link only",
        wikiSourceSlug: "hbbf2025-rice-arsenic-cadmium-145-samples",
      },
    ])
    .returning()

  // -----------------------------------------------------------------
  // studies — one per source for v0
  // -----------------------------------------------------------------
  const [fdaStudy, chigerStudy, abtStudy, hbbfStudy] = await db
    .insert(study)
    .values([
      {
        sourceDocumentId: fdaCtzPb.id,
        label: "FDA CtZ occurrence base 2009-2024",
        design: "regulatory-sampling",
        samplePopulation:
          "US-market processed baby food occurrence data 2009-2024 aggregated by FDA for action-level derivation.",
        geographyCountry: "US",
        collectionStartedOn: "2009-01-01",
        collectionEndedOn: "2024-12-31",
        methodologyGrade: "a",
        methodsSummary:
          "Aggregated FDA Total Diet Study + targeted surveillance using ICP-MS; action levels chosen at the 90-95th percentile of achievable industry occurrence.",
      },
      {
        sourceDocumentId: hbbfChiger.id,
        label: "Abt/HBBF infant rice cereal iAs exposure model",
        design: "meta-analysis",
        samplePopulation:
          "US children aged 0-6 modelled using NHANES + FITS + Karagas + Carignan occurrence and consumption distributions.",
        geographyCountry: "US",
        methodologyGrade: "b",
        methodsSummary:
          "Cost-benefit modelling applying CalEPA/MassDEP RfDs to estimated iAs intakes from infant rice cereal.",
      },
      {
        sourceDocumentId: abtCocoa.id,
        label: "FDA US chocolate market survey 2015",
        design: "market-survey",
        sampleN: 144,
        samplePopulation:
          "144 cocoa products from 67 manufacturers, purchased Dec 2015 from Prince George's County MD retail and online.",
        geographyCountry: "US",
        collectionStartedOn: "2015-12-01",
        collectionEndedOn: "2015-12-31",
        methodologyGrade: "a",
        methodsSummary: "ICP-MS for Cd and Pb in cocoa powder, nibs, dark and milk chocolate.",
      },
      {
        sourceDocumentId: hbbfRice.id,
        label: "HBBF 2025 US retail rice market survey",
        design: "market-survey",
        sampleN: 145,
        samplePopulation:
          "145 rice samples across 105 brands, purchased from retailers in 20 US metro areas, 2024-2025.",
        geographyCountry: "US",
        collectionStartedOn: "2024-01-01",
        collectionEndedOn: "2025-04-30",
        methodologyGrade: "b",
        methodsSummary:
          "Brooks Applied Labs analysed total As, iAs, Cd, Pb, tHg in 211 retail grain containers.",
      },
    ])
    .returning()

  // -----------------------------------------------------------------
  // Look up metals we need for findings by code.
  // -----------------------------------------------------------------
  const metals = Object.fromEntries(
    (await db.select().from(metal)).map((m) => [m.code, m]),
  )

  // -----------------------------------------------------------------
  // contamination findings (≥10 hand-curated)
  // -----------------------------------------------------------------
  await db.insert(contaminationFinding).values([
    // FDA action levels — regulatory thresholds expressed as findings against
    // the corresponding product class.
    {
      studyId: fdaStudy.id,
      metalId: metals.Pb.id,
      productId: babyCerealRice.id,
      ingredientId: rice.id,
      matrix: "dry infant cereal, as-sold",
      valuePpb: "20.000000",
      basis: "as-sold",
      statisticType: "p95",
      analyticalMethod: "icp-ms",
      confidence: "high",
      confidenceNotes:
        "FDA-derived action level at 90-95th percentile of US-market occurrence 2009-2024; A-tier agency provenance.",
      jurisdiction: "US",
    },
    {
      studyId: fdaStudy.id,
      metalId: metals.Pb.id,
      productId: babyCerealNonRice.id,
      matrix: "dry infant cereal, as-sold",
      valuePpb: "20.000000",
      basis: "as-sold",
      statisticType: "p95",
      analyticalMethod: "icp-ms",
      confidence: "high",
      jurisdiction: "US",
    },
    {
      studyId: fdaStudy.id,
      metalId: metals.Pb.id,
      productId: fruitPurees.id,
      ingredientId: fruit.id,
      matrix: "fruit puree, as-consumed",
      valuePpb: "10.000000",
      basis: "as-consumed",
      statisticType: "p95",
      analyticalMethod: "icp-ms",
      confidence: "high",
      jurisdiction: "US",
    },
    {
      studyId: fdaStudy.id,
      metalId: metals.Pb.id,
      productId: rootPurees.id,
      ingredientId: rootVeg.id,
      matrix: "root-vegetable puree, as-consumed",
      valuePpb: "20.000000",
      basis: "as-consumed",
      statisticType: "p95",
      analyticalMethod: "icp-ms",
      confidence: "high",
      confidenceNotes:
        "Higher than fruit puree because root vegetables uptake Pb more aggressively from soil.",
      jurisdiction: "US",
    },

    // Chiger/HBBF iAs in infant rice cereal — modelled mean exposure.
    {
      studyId: chigerStudy.id,
      metalId: metals.iAs.id,
      productId: babyCerealRice.id,
      ingredientId: rice.id,
      matrix: "infant rice cereal, as-sold",
      valuePpb: "103.000000",
      basis: "as-sold",
      statisticType: "mean",
      analyticalMethod: "hplc-icp-ms",
      confidence: "medium",
      confidenceNotes:
        "Modelled mean iAs concentration used in Abt/HBBF exposure model; derived from Karagas + FDA-CFSAN occurrence data, not direct measurement here.",
      jurisdiction: "US",
    },

    // Abt 2018 cocoa & chocolate (mean concentrations from the paper, mg/kg
    // converted to ppb).
    {
      studyId: abtStudy.id,
      metalId: metals.Cd.id,
      productId: cocoaPowder.id,
      ingredientId: cocoa.id,
      matrix: "cocoa powder, as-sold",
      valuePpb: "700.000000",
      basis: "as-sold",
      statisticType: "mean",
      sampleN: 36,
      analyticalMethod: "icp-ms",
      confidence: "high",
      confidenceNotes: "Mean of subset; SD ±830 ppb across cocoa-powder samples.",
      jurisdiction: "US",
    },
    {
      studyId: abtStudy.id,
      metalId: metals.Pb.id,
      productId: cocoaPowder.id,
      ingredientId: cocoa.id,
      matrix: "cocoa powder, as-sold",
      valuePpb: "110.000000",
      basis: "as-sold",
      statisticType: "mean",
      sampleN: 36,
      analyticalMethod: "icp-ms",
      confidence: "high",
      jurisdiction: "US",
    },
    {
      studyId: abtStudy.id,
      metalId: metals.Cd.id,
      productId: darkChocolate.id,
      ingredientId: cocoa.id,
      matrix: "dark chocolate, as-sold",
      valuePpb: "270.000000",
      basis: "as-sold",
      statisticType: "mean",
      sampleN: 40,
      analyticalMethod: "icp-ms",
      confidence: "high",
      jurisdiction: "US",
    },
    {
      studyId: abtStudy.id,
      metalId: metals.Cd.id,
      productId: milkChocolate.id,
      ingredientId: cocoa.id,
      matrix: "milk chocolate, as-sold",
      valuePpb: "60.000000",
      basis: "as-sold",
      statisticType: "mean",
      sampleN: 32,
      analyticalMethod: "icp-ms",
      confidence: "high",
      jurisdiction: "US",
    },

    // HBBF 2025 rice — Southeast US white rice and category averages.
    {
      studyId: hbbfStudy.id,
      metalId: metals.iAs.id,
      productId: riceWhiteUS.id,
      ingredientId: rice.id,
      matrix: "white rice, Southeast US, as-purchased",
      valuePpb: "118.000000",
      basis: "as-sold",
      statisticType: "mean",
      analyticalMethod: "hplc-icp-ms",
      confidence: "high",
      confidenceNotes:
        "Category average from HBBF 2025 Figure 1; sum of iAs + Cd + Pb + tHg reported in source but here decomposed for iAs only — see secondary findings.",
      jurisdiction: "US",
    },
    {
      studyId: hbbfStudy.id,
      metalId: metals.iAs.id,
      productId: babyCerealRice.id,
      ingredientId: rice.id,
      matrix: "rice grain, as-purchased",
      valuePpb: "84.800000",
      basis: "as-sold",
      statisticType: "mean",
      sampleN: 145,
      analyticalMethod: "hplc-icp-ms",
      confidence: "high",
      confidenceNotes:
        "All-rice mean iAs from HBBF 2025 (84.8 µg/kg). Routed to baby-cereals-dry-rice-based because >25% of samples exceeded the FDA 100 ppb action level for infant rice cereal.",
      jurisdiction: "US",
    },
    {
      studyId: hbbfStudy.id,
      metalId: metals.Cd.id,
      productId: riceWhiteUS.id,
      ingredientId: rice.id,
      matrix: "rice grain, as-purchased",
      valuePpb: "18.800000",
      basis: "as-sold",
      statisticType: "mean",
      sampleN: 145,
      analyticalMethod: "icp-ms",
      confidence: "high",
      jurisdiction: "US",
    },
    {
      studyId: hbbfStudy.id,
      metalId: metals.Pb.id,
      productId: riceWhiteUS.id,
      ingredientId: rice.id,
      matrix: "saffron-seasoned yellow rice, as-purchased",
      valuePpb: "36.000000",
      basis: "as-sold",
      statisticType: "max",
      sampleN: 1,
      analyticalMethod: "icp-ms",
      confidence: "medium",
      confidenceNotes:
        "Single saffron-seasoned product (HBR-174 Dixie Lily) reported at 36 µg/kg — ~32x the average of other rice samples. Outlier flagged in HBBF 2025 Appendix A.",
      jurisdiction: "US",
      recallOrEnforcement: false,
    },
  ])

  // -----------------------------------------------------------------
  // labs + certifications (HMTc surface — schema present, no real
  // brand data; placeholder rows for end-to-end demonstration).
  // -----------------------------------------------------------------
  const [exampleLab] = await db
    .insert(lab)
    .values({
      name: "Example Accredited Lab (placeholder)",
      accreditation: "ISO/IEC 17025",
      country: "US",
      methods: ["ICP-MS", "GFAAS", "HPLC-ICP-MS"],
      notes:
        "Placeholder row demonstrating the lab-certification linkage. No real lab is seeded in v0 to avoid implying an actual partnership.",
    })
    .returning()

  const [exampleManufacturer] = await db
    .insert(manufacturer)
    .values({
      name: "Example Brand (placeholder)",
      legalName: null,
      country: "US",
      notes:
        "Placeholder row demonstrating the certification linkage. No real brand is seeded in v0 — see docs/data-model.md 'Brand firewall'.",
    })
    .returning()

  await db.insert(certification).values({
    manufacturerId: exampleManufacturer.id,
    productId: babyCerealNonRice.id,
    testingLabId: exampleLab.id,
    status: "pending",
    standardVersion: "HMTc-2026-v1-draft",
    notes:
      "Placeholder pending certification to demonstrate the certification surface. Not a real submission.",
  })

  // Summary counts for callers (used by tests + CLI report).
  const counts = {
    metals: (await db.select({ n: sql<number>`count(*)::int` }).from(metal))[0].n,
    ingredients: (
      await db.select({ n: sql<number>`count(*)::int` }).from(ingredient)
    )[0].n,
    products: (await db.select({ n: sql<number>`count(*)::int` }).from(product))[0].n,
    sourceDocuments: (
      await db.select({ n: sql<number>`count(*)::int` }).from(sourceDocument)
    )[0].n,
    studies: (await db.select({ n: sql<number>`count(*)::int` }).from(study))[0].n,
    findings: (
      await db.select({ n: sql<number>`count(*)::int` }).from(contaminationFinding)
    )[0].n,
    certifications: (
      await db.select({ n: sql<number>`count(*)::int` }).from(certification)
    )[0].n,
  }

  return { db, pglite, counts }
}

// Sample query used by the seed CLI to prove the model is queryable.
export async function sampleQuery(db: DevDb) {
  return db
    .select({
      metalName: metal.name,
      productName: product.name,
      valuePpb: contaminationFinding.valuePpb,
      basis: contaminationFinding.basis,
      statistic: contaminationFinding.statisticType,
      citeKey: sourceDocument.citeKey,
      evidenceTier: sourceDocument.evidenceTier,
    })
    .from(contaminationFinding)
    .innerJoin(metal, eq(metal.id, contaminationFinding.metalId))
    .innerJoin(product, eq(product.id, contaminationFinding.productId))
    .innerJoin(study, eq(study.id, contaminationFinding.studyId))
    .innerJoin(sourceDocument, eq(sourceDocument.id, study.sourceDocumentId))
    .where(eq(metal.code, "Pb"))
    .orderBy(product.name)
}

if (import.meta.url === `file://${process.argv[1]}`) {
  seed()
    .then(async ({ pglite, counts, db }) => {
      console.log("seed complete")
      console.table(counts)

      const rows = await sampleQuery(db)
      console.log("\nSample query — lead findings traced to provenance:")
      console.table(rows)

      await pglite.close()
    })
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
}
