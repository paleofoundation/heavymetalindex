begin;
-- Pin the selected reference to an immutable submission so retrying its ID
-- cannot change the meaning of its cached comparison.
alter table public.lab_results add column reference_id text;
create function public.cache_pro_comparison(
  owner_id text, result_id uuid, ref_id text, ref_hash text, version text, sources text[], payload jsonb
) returns void language sql security invoker set search_path = '' as $$
  insert into public.comparisons(user_id,lab_result_id,reference_id,reference_sha256,engine_version,source_ids,output)
  values(owner_id,result_id,ref_id,ref_hash,version,sources,payload)
  on conflict (user_id,lab_result_id,reference_sha256,engine_version) do nothing;
$$;
revoke all on function public.cache_pro_comparison(text,uuid,text,text,text,text[],jsonb) from public,anon,authenticated;
grant execute on function public.cache_pro_comparison(text,uuid,text,text,text,text[],jsonb) to service_role;
commit;
