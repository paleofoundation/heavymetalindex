CREATE TYPE "public"."access_status" AS ENUM('open', 'gated', 'proprietary');--> statement-breakpoint
CREATE TYPE "public"."analytical_method" AS ENUM('icp-ms', 'icp-oes', 'gfaas', 'faas', 'hg-cv-afs', 'xrf', 'hplc-icp-ms', 'other');--> statement-breakpoint
CREATE TYPE "public"."basis" AS ENUM('wet-weight', 'dry-weight', 'as-consumed', 'as-sold', 'as-placed-on-market', 'oil-fraction');--> statement-breakpoint
CREATE TYPE "public"."certification_status" AS ENUM('pending', 'in-review', 'certified', 'revoked', 'suspended', 'expired');--> statement-breakpoint
CREATE TYPE "public"."evidence_tier" AS ENUM('A', 'B', 'C');--> statement-breakpoint
CREATE TYPE "public"."finding_confidence" AS ENUM('high', 'medium', 'low');--> statement-breakpoint
CREATE TYPE "public"."methodology_grade" AS ENUM('a', 'b', 'c');--> statement-breakpoint
CREATE TYPE "public"."product_form" AS ENUM('powder', 'ready-to-feed', 'dry', 'puree', 'oil', 'beverage', 'supplement', 'solid-food', 'personal-care', 'other');--> statement-breakpoint
CREATE TYPE "public"."source_type" AS ENUM('peer-reviewed', 'agency-report', 'regulatory-filing', 'dataset', 'recall-notice', 'third-party-testing', 'news', 'other');--> statement-breakpoint
CREATE TYPE "public"."statistic_type" AS ENUM('single-sample', 'mean', 'median', 'p50', 'p75', 'p90', 'p95', 'p97', 'p99', 'max', 'min', 'range-low', 'range-high', 'lod-censored-mean');--> statement-breakpoint
CREATE TYPE "public"."study_design" AS ENUM('market-survey', 'total-diet-study', 'controlled-experiment', 'longitudinal-cohort', 'regulatory-sampling', 'recall-investigation', 'method-validation', 'meta-analysis', 'other');--> statement-breakpoint
CREATE TABLE "certification" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"manufacturer_id" uuid NOT NULL,
	"product_id" uuid NOT NULL,
	"testing_lab_id" uuid,
	"status" "certification_status" DEFAULT 'pending' NOT NULL,
	"standard_version" text NOT NULL,
	"certified_at" timestamp with time zone,
	"expires_at" timestamp with time zone,
	"revoked_at" timestamp with time zone,
	"revocation_reason" text,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "contamination_finding" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"study_id" uuid NOT NULL,
	"metal_id" uuid NOT NULL,
	"product_id" uuid,
	"ingredient_id" uuid,
	"matrix" text,
	"value_ppb" numeric(14, 6),
	"value_low_ppb" numeric(14, 6),
	"value_high_ppb" numeric(14, 6),
	"basis" "basis" NOT NULL,
	"statistic_type" "statistic_type" NOT NULL,
	"sample_n" integer,
	"detection_limit_ppb" numeric(14, 6),
	"below_lod_count" integer,
	"analytical_method" "analytical_method",
	"confidence" "finding_confidence" NOT NULL,
	"confidence_notes" text,
	"collected_on" date,
	"jurisdiction" text,
	"recall_or_enforcement" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "contamination_finding_product_or_ingredient_chk" CHECK (("contamination_finding"."product_id" IS NOT NULL) OR ("contamination_finding"."ingredient_id" IS NOT NULL))
);
--> statement-breakpoint
CREATE TABLE "ingredient" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"common_names" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"description" text,
	"wiki_ingredient_slug" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "lab" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"accreditation" text,
	"country" text,
	"methods" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"contact_url" text,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "manufacturer" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"legal_name" text,
	"country" text,
	"url" text,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "metal" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"code" text NOT NULL,
	"symbol" text NOT NULL,
	"name" text NOT NULL,
	"parent_metal_id" uuid,
	"is_hmtc_analyte" boolean DEFAULT false NOT NULL,
	"description" text,
	"toxicology_summary" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"slug" text NOT NULL,
	"name" text NOT NULL,
	"form" "product_form" NOT NULL,
	"is_class" boolean DEFAULT true NOT NULL,
	"manufacturer_id" uuid,
	"hmtc_category" text,
	"hmtc_row" text,
	"description" text,
	"wiki_product_slug" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "product_ingredient" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"product_id" uuid NOT NULL,
	"ingredient_id" uuid NOT NULL,
	"proportion_pct" numeric(6, 3),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "source_document" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"cite_key" text NOT NULL,
	"title" text NOT NULL,
	"authors" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"year" integer,
	"publication" text,
	"doi" text,
	"url" text,
	"source_type" "source_type" NOT NULL,
	"evidence_tier" "evidence_tier" NOT NULL,
	"access_status" "access_status" DEFAULT 'open' NOT NULL,
	"license" text,
	"raw_path" text,
	"wiki_source_slug" text,
	"retrieved_on" date,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "study" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"source_document_id" uuid NOT NULL,
	"label" text,
	"design" "study_design" NOT NULL,
	"sample_n" integer,
	"sample_population" text,
	"sampling_frame" text,
	"geography_country" text,
	"geography_region" text,
	"collection_started_on" date,
	"collection_ended_on" date,
	"methodology_grade" "methodology_grade" NOT NULL,
	"methods_summary" text,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "certification" ADD CONSTRAINT "certification_manufacturer_id_manufacturer_id_fk" FOREIGN KEY ("manufacturer_id") REFERENCES "public"."manufacturer"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "certification" ADD CONSTRAINT "certification_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "certification" ADD CONSTRAINT "certification_testing_lab_id_lab_id_fk" FOREIGN KEY ("testing_lab_id") REFERENCES "public"."lab"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contamination_finding" ADD CONSTRAINT "contamination_finding_study_id_study_id_fk" FOREIGN KEY ("study_id") REFERENCES "public"."study"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contamination_finding" ADD CONSTRAINT "contamination_finding_metal_id_metal_id_fk" FOREIGN KEY ("metal_id") REFERENCES "public"."metal"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contamination_finding" ADD CONSTRAINT "contamination_finding_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "contamination_finding" ADD CONSTRAINT "contamination_finding_ingredient_id_ingredient_id_fk" FOREIGN KEY ("ingredient_id") REFERENCES "public"."ingredient"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "metal" ADD CONSTRAINT "metal_parent_metal_id_fk" FOREIGN KEY ("parent_metal_id") REFERENCES "public"."metal"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product" ADD CONSTRAINT "product_manufacturer_id_manufacturer_id_fk" FOREIGN KEY ("manufacturer_id") REFERENCES "public"."manufacturer"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_ingredient" ADD CONSTRAINT "product_ingredient_product_id_product_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."product"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_ingredient" ADD CONSTRAINT "product_ingredient_ingredient_id_ingredient_id_fk" FOREIGN KEY ("ingredient_id") REFERENCES "public"."ingredient"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "study" ADD CONSTRAINT "study_source_document_id_source_document_id_fk" FOREIGN KEY ("source_document_id") REFERENCES "public"."source_document"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "ingredient_slug_idx" ON "ingredient" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "metal_code_idx" ON "metal" USING btree ("code");--> statement-breakpoint
CREATE UNIQUE INDEX "product_slug_idx" ON "product" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "source_document_cite_key_idx" ON "source_document" USING btree ("cite_key");--> statement-breakpoint
CREATE UNIQUE INDEX "source_document_doi_idx" ON "source_document" USING btree ("doi");