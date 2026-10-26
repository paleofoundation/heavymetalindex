import {z} from 'zod';
const text=z.string().trim().min(1);
const hash=z.string().regex(/^[a-f0-9]{64}$/);
export const terminalReasons=['no_numeric_value_or_bound','basis_incompatible_with_all_references','species_or_material_without_compatible_reference_after_full_ledger','bounds_span_categories','reference_below_display_minimum_after_full_ledger','value_fails_source_integrity_check'];
export const modes=['hmi_rating','within_study_direct','bounded_classification'];
const locator=z.strictObject({artifact:text,sha256:hash,kind:z.enum(['page','table','cell']),location:text});
const scope=z.strictObject({analyte:text,material:text,basis:text,unit:text});
const attempt=z.strictObject({mode:z.enum(modes),outcome:z.enum(['rated','direct','bounded','unavailable','not_selected']),reason:text});
const retrieval=z.strictObject({channel:z.enum(['mounted_library','raw','publisher_or_open_access','backup_library']),attempted_at:z.iso.datetime(),location:text,outcome:text,mounted:z.boolean().optional()});
export const evidenceLedgerSchema=z.strictObject({
 schema_version:z.literal(1),ingredient:text,completed_at:z.iso.datetime(),
 items:z.array(z.strictObject({id:text,source_id:text,family_id:text,content_sha256:hash,
  disposition:z.string().regex(/^(occurrence_extracted|mitigation_extracted|exposure_or_regulatory_used|context_only|out_of_scope|access_blocked|duplicate_of:.+)$/),
  decision_basis:z.literal('primary_text'),rationale:text,locators:z.array(locator).min(1),
  result_ids:z.array(text),extraction_complete:z.boolean(),
  retrieval_attempts:z.array(retrieval).optional(),retrieval_request:z.strictObject({requested_at:z.iso.datetime(),request:text}).optional()
 })),
 results:z.array(z.strictObject({id:text,item_ids:z.array(text).min(1),family_id:text,scope,
  form:text,origin_or_market:text,year:text,species:text,statistic:text,basis:text,n:z.number().int().nonnegative().nullable(),n_note:text,sample_unit:text,
  censoring:text,unit:text,value:z.number().nullable(),lower_bound:z.number().nullable(),upper_bound:z.number().nullable(),locator,
  reference_unit_ids:z.array(text),
  comparison:z.strictObject({state:z.enum(['rated','direct','bounded','unavailable']),reason_code:z.enum(terminalReasons).optional(),reference_id:text.optional(),attempts:z.array(attempt).length(3)})
 })),
 reference_units:z.array(z.strictObject({id:text,item_id:text,family_id:text,scope,statistic:z.literal('median'),value:z.number().nullable(),lower_bound:z.number().nullable(),upper_bound:z.number().nullable(),locator})),
 references:z.array(z.strictObject({id:text,scope,unit_ids:z.array(text),family_ids:z.array(text),
  exclusions:z.array(z.strictObject({unit_id:text.optional(),result_id:text.optional(),scientific_reason:text,locator})),
  method:z.literal('applyHmiBaselines'),weighting:z.literal('equal_family_equal_subgroup'),bounds:z.literal('no_imputation'),frozen_membership_sha256:hash,
  sensitivity:z.strictObject({artifact:text,sha256:hash}),leave_one_out:z.strictObject({artifact:text,sha256:hash}),limitations:z.array(text).min(1)
 }))
});
export const ledgerJSONSchema=z.toJSONSchema(evidenceLedgerSchema,{$id:'https://heavymetalindex.com/internal/schemas/ingredient-evidence-ledger-v1'});
