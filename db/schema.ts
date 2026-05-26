import { sql } from "drizzle-orm"
import {
  boolean,
  check,
  date,
  foreignKey,
  integer,
  jsonb,
  numeric,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
  uuid,
} from "drizzle-orm/pg-core"

// Reusable timestamp columns.
const timestamps = {
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
}

// ---------------------------------------------------------------------------
// Enums
// ---------------------------------------------------------------------------

export const sourceTypeEnum = pgEnum("source_type", [
  "peer-reviewed",
  "agency-report",
  "regulatory-filing",
  "dataset",
  "recall-notice",
  "third-party-testing",
  "news",
  "other",
])

export const evidenceTierEnum = pgEnum("evidence_tier", ["A", "B", "C"])

export const accessStatusEnum = pgEnum("access_status", [
  "open",
  "gated",
  "proprietary",
])

export const studyDesignEnum = pgEnum("study_design", [
  "market-survey",
  "total-diet-study",
  "controlled-experiment",
  "longitudinal-cohort",
  "regulatory-sampling",
  "recall-investigation",
  "method-validation",
  "meta-analysis",
  "other",
])

export const methodologyGradeEnum = pgEnum("methodology_grade", [
  "a",
  "b",
  "c",
])

export const productFormEnum = pgEnum("product_form", [
  "powder",
  "ready-to-feed",
  "dry",
  "puree",
  "oil",
  "beverage",
  "supplement",
  "solid-food",
  "personal-care",
  "other",
])

export const basisEnum = pgEnum("basis", [
  "wet-weight",
  "dry-weight",
  "as-consumed",
  "as-sold",
  "as-placed-on-market",
  "oil-fraction",
])

export const statisticTypeEnum = pgEnum("statistic_type", [
  "single-sample",
  "mean",
  "median",
  "p50",
  "p75",
  "p90",
  "p95",
  "p97",
  "p99",
  "max",
  "min",
  "range-low",
  "range-high",
  "lod-censored-mean",
])

export const analyticalMethodEnum = pgEnum("analytical_method", [
  "icp-ms",
  "icp-oes",
  "gfaas",
  "faas",
  "hg-cv-afs",
  "xrf",
  "hplc-icp-ms",
  "other",
])

export const findingConfidenceEnum = pgEnum("finding_confidence", [
  "high",
  "medium",
  "low",
])

export const certificationStatusEnum = pgEnum("certification_status", [
  "pending",
  "in-review",
  "certified",
  "revoked",
  "suspended",
  "expired",
])

// ---------------------------------------------------------------------------
// Reference data
// ---------------------------------------------------------------------------

// metal — controlled vocabulary of analytes the Index tracks. Includes both
// elemental metals (Pb) and species distinctions that matter toxicologically
// (Cr-VI vs total Cr, MeHg vs total Hg, iAs vs total As). The HMTc analyte
// vocabulary in CLAUDE.md Part 14 is the canonical list.
export const metal = pgTable(
  "metal",
  {
    id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
    // Stable analyte code — e.g. "Pb", "Cd", "iAs", "tAs", "MeHg", "tHg",
    // "Ni", "Al", "Cr", "Cr-VI", "Sn", "Sb", "U". Used as the FK target in
    // contamination_finding so codes survive renames.
    code: text("code").notNull(),
    symbol: text("symbol").notNull(),
    name: text("name").notNull(),
    // For species: which parent metal this is a species of. Cr-VI -> Cr,
    // MeHg -> tHg, iAs -> tAs. Null for elemental rows.
    parentMetalId: uuid("parent_metal_id"),
    // True if this row is part of the official HMTc certification analyte
    // panel (the 10 analytes brands are certified against).
    isHmtcAnalyte: boolean("is_hmtc_analyte").notNull().default(false),
    description: text("description"),
    toxicologySummary: text("toxicology_summary"),
    ...timestamps,
  },
  (table) => ({
    codeIdx: uniqueIndex("metal_code_idx").on(table.code),
    parentFk: foreignKey({
      columns: [table.parentMetalId],
      foreignColumns: [table.id],
      name: "metal_parent_metal_id_fk",
    }).onDelete("set null"),
  }),
)

// ingredient — food/material commodity rows that products are built from.
// Findings can be associated with an ingredient (e.g. "lead in rice") in
// addition to or instead of a specific product.
export const ingredient = pgTable(
  "ingredient",
  {
    id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
    slug: text("slug").notNull(),
    name: text("name").notNull(),
    commonNames: jsonb("common_names").$type<string[]>().notNull().default([]),
    description: text("description"),
    // Pointer to the canonical wiki page if one exists.
    wikiIngredientSlug: text("wiki_ingredient_slug"),
    ...timestamps,
  },
  (table) => ({
    slugIdx: uniqueIndex("ingredient_slug_idx").on(table.slug),
  }),
)

// manufacturer — the entity responsible for a branded product. Lives in the
// schema so the certification program can attach to it. Public Heavy Metal
// Index queries MUST NOT join through manufacturer for contamination findings
// (see docs/data-model.md, "Brand firewall"). This table exists for the
// certification surface, not the wiki.
export const manufacturer = pgTable("manufacturer", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  legalName: text("legal_name"),
  country: text("country"),
  url: text("url"),
  notes: text("notes"),
  ...timestamps,
})

// product — a real consumer product or product class. is_class=true means
// the row represents a category (e.g. "infant formula powder, non-soy")
// rather than a specific branded SKU. Wiki product-category pages are
// is_class=true. Manufacturer is nullable because public Index rows are
// almost always product classes with no brand attached.
export const product = pgTable(
  "product",
  {
    id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
    slug: text("slug").notNull(),
    name: text("name").notNull(),
    form: productFormEnum("form").notNull(),
    isClass: boolean("is_class").notNull().default(true),
    manufacturerId: uuid("manufacturer_id").references(() => manufacturer.id, {
      onDelete: "restrict",
    }),
    hmtcCategory: text("hmtc_category"),
    hmtcRow: text("hmtc_row"),
    description: text("description"),
    wikiProductSlug: text("wiki_product_slug"),
    ...timestamps,
  },
  (table) => ({
    slugIdx: uniqueIndex("product_slug_idx").on(table.slug),
  }),
)

// product_ingredient — many-to-many. Proportion is optional; most public
// rows will not have proportions until a brand-intelligence ingest provides
// them.
export const productIngredient = pgTable("product_ingredient", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  productId: uuid("product_id")
    .notNull()
    .references(() => product.id, { onDelete: "cascade" }),
  ingredientId: uuid("ingredient_id")
    .notNull()
    .references(() => ingredient.id, { onDelete: "restrict" }),
  proportionPct: numeric("proportion_pct", { precision: 6, scale: 3 }),
  ...timestamps,
})

// ---------------------------------------------------------------------------
// Provenance: source_document -> study -> contamination_finding
// ---------------------------------------------------------------------------

// source_document — the verifiable, citable origin of any claim. A study, an
// FDA report, a regulatory filing, a press release. Every contamination
// finding must trace back to a row here via study. cite_key matches the
// markdown wiki cite-key convention (docs/conventions).
export const sourceDocument = pgTable(
  "source_document",
  {
    id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
    citeKey: text("cite_key").notNull(),
    title: text("title").notNull(),
    authors: jsonb("authors").$type<string[]>().notNull().default([]),
    year: integer("year"),
    publication: text("publication"),
    doi: text("doi"),
    url: text("url"),
    sourceType: sourceTypeEnum("source_type").notNull(),
    evidenceTier: evidenceTierEnum("evidence_tier").notNull(),
    accessStatus: accessStatusEnum("access_status")
      .notNull()
      .default("open"),
    license: text("license"),
    // Pointer to the raw artifact (PDF or marker-converted markdown) under
    // raw/. Filesystem path, not a URL.
    rawPath: text("raw_path"),
    // Pointer to wiki/sources/{slug}.md when a wiki source page exists.
    wikiSourceSlug: text("wiki_source_slug"),
    retrievedOn: date("retrieved_on"),
    ...timestamps,
  },
  (table) => ({
    citeKeyIdx: uniqueIndex("source_document_cite_key_idx").on(table.citeKey),
    doiIdx: uniqueIndex("source_document_doi_idx").on(table.doi),
  }),
)

// study — a specific measurement effort within a source document. One source
// document can contain multiple studies (e.g. a meta-analysis bundling
// several cohorts), and a finding belongs to exactly one study.
export const study = pgTable("study", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  sourceDocumentId: uuid("source_document_id")
    .notNull()
    .references(() => sourceDocument.id, { onDelete: "restrict" }),
  // Free-form label so a multi-study paper can disambiguate.
  label: text("label"),
  design: studyDesignEnum("design").notNull(),
  sampleN: integer("sample_n"),
  samplePopulation: text("sample_population"),
  samplingFrame: text("sampling_frame"),
  geographyCountry: text("geography_country"), // ISO-3166-1 alpha-2
  geographyRegion: text("geography_region"),
  collectionStartedOn: date("collection_started_on"),
  collectionEndedOn: date("collection_ended_on"),
  methodologyGrade: methodologyGradeEnum("methodology_grade").notNull(),
  methodsSummary: text("methods_summary"),
  notes: text("notes"),
  ...timestamps,
})

// contamination_finding — one measurement: a value for a (metal, product
// or ingredient, sample basis) tuple, traced to a study. Provenance is
// non-negotiable: study_id is NOT NULL. Confidence/uncertainty is encoded
// as real fields (statistic type, sample n, detection limit, censoring,
// methodology grade) rather than yes/no.
export const contaminationFinding = pgTable("contamination_finding", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  studyId: uuid("study_id")
    .notNull()
    .references(() => study.id, { onDelete: "restrict" }),
  metalId: uuid("metal_id")
    .notNull()
    .references(() => metal.id, { onDelete: "restrict" }),
  // A finding is attached to a product, an ingredient, or both. At least
  // one must be set — enforced at the application layer in v0 because
  // Drizzle does not expose CHECK constraints ergonomically yet; a
  // migration-level CHECK is added in a follow-up SQL file.
  productId: uuid("product_id").references(() => product.id, {
    onDelete: "restrict",
  }),
  ingredientId: uuid("ingredient_id").references(() => ingredient.id, {
    onDelete: "restrict",
  }),
  matrix: text("matrix"),
  // µg/kg by convention (CLAUDE.md Part 14). Numeric to preserve precision.
  valuePpb: numeric("value_ppb", { precision: 14, scale: 6 }),
  valueLowPpb: numeric("value_low_ppb", { precision: 14, scale: 6 }),
  valueHighPpb: numeric("value_high_ppb", { precision: 14, scale: 6 }),
  basis: basisEnum("basis").notNull(),
  statisticType: statisticTypeEnum("statistic_type").notNull(),
  sampleN: integer("sample_n"),
  detectionLimitPpb: numeric("detection_limit_ppb", {
    precision: 14,
    scale: 6,
  }),
  belowLodCount: integer("below_lod_count"),
  analyticalMethod: analyticalMethodEnum("analytical_method"),
  confidence: findingConfidenceEnum("confidence").notNull(),
  confidenceNotes: text("confidence_notes"),
  collectedOn: date("collected_on"),
  jurisdiction: text("jurisdiction"),
  recallOrEnforcement: boolean("recall_or_enforcement")
    .notNull()
    .default(false),
  ...timestamps,
}, (table) => ({
  // A finding must attach to a product, an ingredient, or both. Enforced
  // in SQL so application code cannot drift away from provenance discipline.
  productOrIngredient: check(
    "contamination_finding_product_or_ingredient_chk",
    sql`(${table.productId} IS NOT NULL) OR (${table.ingredientId} IS NOT NULL)`,
  ),
}))

// ---------------------------------------------------------------------------
// Certification surface (HMTc) — present in schema, separate from the
// public Index query surface. Brand firewall enforced at the query layer.
// ---------------------------------------------------------------------------

// lab — an accredited testing facility used by the certification program.
export const lab = pgTable("lab", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  accreditation: text("accreditation"),
  country: text("country"),
  methods: jsonb("methods").$type<string[]>().notNull().default([]),
  contactUrl: text("contact_url"),
  notes: text("notes"),
  ...timestamps,
})

// certification — a brand's certification record for a specific product
// against a named standard version.
export const certification = pgTable("certification", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  manufacturerId: uuid("manufacturer_id")
    .notNull()
    .references(() => manufacturer.id, { onDelete: "restrict" }),
  productId: uuid("product_id")
    .notNull()
    .references(() => product.id, { onDelete: "restrict" }),
  testingLabId: uuid("testing_lab_id").references(() => lab.id, {
    onDelete: "restrict",
  }),
  status: certificationStatusEnum("status").notNull().default("pending"),
  // Free-form because HMTc versioning is its own concern; treat as opaque
  // string here.
  standardVersion: text("standard_version").notNull(),
  certifiedAt: timestamp("certified_at", { withTimezone: true }),
  expiresAt: timestamp("expires_at", { withTimezone: true }),
  revokedAt: timestamp("revoked_at", { withTimezone: true }),
  revocationReason: text("revocation_reason"),
  notes: text("notes"),
  ...timestamps,
})

// ---------------------------------------------------------------------------
// Inferred types — usable by application code without re-declaration.
// ---------------------------------------------------------------------------

export type Metal = typeof metal.$inferSelect
export type NewMetal = typeof metal.$inferInsert
export type Ingredient = typeof ingredient.$inferSelect
export type NewIngredient = typeof ingredient.$inferInsert
export type Manufacturer = typeof manufacturer.$inferSelect
export type NewManufacturer = typeof manufacturer.$inferInsert
export type Product = typeof product.$inferSelect
export type NewProduct = typeof product.$inferInsert
export type SourceDocument = typeof sourceDocument.$inferSelect
export type NewSourceDocument = typeof sourceDocument.$inferInsert
export type Study = typeof study.$inferSelect
export type NewStudy = typeof study.$inferInsert
export type ContaminationFinding = typeof contaminationFinding.$inferSelect
export type NewContaminationFinding = typeof contaminationFinding.$inferInsert
export type Lab = typeof lab.$inferSelect
export type NewLab = typeof lab.$inferInsert
export type Certification = typeof certification.$inferSelect
export type NewCertification = typeof certification.$inferInsert
