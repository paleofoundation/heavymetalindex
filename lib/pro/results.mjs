import { billingDatabase } from "./database.mjs";

// The privileged client can only write this already-computed cache through this wrapper.
// Result/history reads always use the verified user's client and RLS.
export async function writeComparisonCache(userId, resultId, output) {
  const { error } = await billingDatabase().rpc("cache_pro_comparison", {
    owner_id: userId,
    result_id: resultId,
    ref_id: output.reference_id,
    ref_hash: output.reference_sha256,
    version: output.engine_version,
    sources: output.source_ids,
    payload: output,
  });
  if (error) throw error;
}

export async function readResults(user, ingredient) {
  let query = user.db
    .from("lab_results")
    .select("*,comparisons(*)")
    .eq("user_id", user.id)
    .order("sample_date", { ascending: false })
    .limit(100);
  if (ingredient) query = query.eq("ingredient_slug", ingredient);
  const { data, error } = await query;
  if (error) throw error;
  return data;
}
