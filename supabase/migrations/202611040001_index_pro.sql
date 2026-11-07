-- Clerk must be configured as a Supabase third-party authentication provider.
-- Private records never enter the public findings store or static build.
begin;

create table public.pro_users (
  user_id text primary key,
  stripe_account_id text not null,
  stripe_livemode boolean not null default false check (stripe_livemode = false),
  stripe_customer_id text not null unique,
  stripe_subscription_id text unique,
  status text not null default 'incomplete' check (status in (
    'incomplete', 'incomplete_expired', 'trialing', 'active', 'past_due', 'canceled', 'unpaid', 'paused'
  )),
  access_until timestamptz,
  billing_hold boolean not null default false,
  last_event_created bigint not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.lab_results (
  id uuid primary key default gen_random_uuid(),
  user_id text not null references public.pro_users(user_id) on delete cascade,
  lot text not null check (length(lot) between 1 and 120),
  ingredient_slug text not null check (ingredient_slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  analyte text not null check (analyte in ('Pb','Cd','tAs','iAs','tHg','MeHg','Ni','Al','Cr','Cr-VI','Sn','Sb','U','Co','Cu','Fe','Mn','Zn','V','Se')),
  value numeric check (value >= 0 and value < 1e12),
  unit text not null check (unit in ('ppb','ppm','ug/kg','µg/kg','mg/kg')),
  basis text not null check (basis in ('dry','native','cooked')),
  moisture_percent numeric check (moisture_percent >= 0 and moisture_percent < 100),
  result_kind text not null check (result_kind in ('quantified','below_lod','below_loq')),
  lod numeric check (lod >= 0 and lod < 1e12),
  loq numeric check (loq >= 0 and loq < 1e12),
  lab text not null check (length(lab) between 1 and 200),
  sample_date date not null,
  created_at timestamptz not null default now(),
  unique (user_id, id),
  check (lod is null or loq is null or lod <= loq),
  check (
    (result_kind = 'quantified' and value is not null and (loq is null or value >= loq) and (lod is null or value >= lod)) or
    (result_kind = 'below_lod' and value is null and lod is not null) or
    (result_kind = 'below_loq' and value is null and loq is not null)
  )
);
create index lab_results_user_history on public.lab_results(user_id, sample_date desc, id);

create table public.comparisons (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  lab_result_id uuid not null,
  reference_id text not null,
  reference_sha256 text not null check (reference_sha256 ~ '^[0-9a-f]{64}$'),
  engine_version text not null,
  source_ids text[] not null check (cardinality(source_ids) > 0),
  output jsonb not null check (jsonb_typeof(output) = 'object'),
  created_at timestamptz not null default now(),
  foreign key (user_id, lab_result_id) references public.lab_results(user_id, id) on delete cascade,
  unique (user_id, lab_result_id, reference_sha256, engine_version)
);
create index comparisons_user_history on public.comparisons(user_id, created_at desc);

alter table public.pro_users enable row level security;
alter table public.pro_users force row level security;
alter table public.lab_results enable row level security;
alter table public.lab_results force row level security;
alter table public.comparisons enable row level security;
alter table public.comparisons force row level security;

revoke all on public.pro_users, public.lab_results, public.comparisons from anon, authenticated;
grant select on public.pro_users to authenticated;
grant select, insert, delete on public.lab_results to authenticated;
grant select, delete on public.comparisons to authenticated;
grant all on public.pro_users, public.lab_results, public.comparisons to service_role;

create policy pro_users_self on public.pro_users for select to authenticated
  using (user_id = (select auth.jwt()->>'sub'));
create policy lab_results_self_read on public.lab_results for select to authenticated
  using (user_id = (select auth.jwt()->>'sub'));
create policy lab_results_self_delete on public.lab_results for delete to authenticated
  using (user_id = (select auth.jwt()->>'sub'));
create policy lab_results_self_insert on public.lab_results for insert to authenticated
  with check (user_id = (select auth.jwt()->>'sub') and exists (
    select 1 from public.pro_users p where p.user_id = (select auth.jwt()->>'sub')
    and p.status = 'active' and p.access_until > now() and not p.billing_hold
    and p.stripe_account_id = 'acct_1U8brQIFZvqbznGs' and p.stripe_livemode = false
  ));
create policy comparisons_self_read on public.comparisons for select to authenticated
  using (user_id = (select auth.jwt()->>'sub'));
create policy comparisons_self_delete on public.comparisons for delete to authenticated
  using (user_id = (select auth.jwt()->>'sub'));

-- Service-only event application, idempotent and monotonic per customer.
create function public.apply_pro_subscription(
  customer_id text, subscription_id text, subscription_status text,
  expires_at timestamptz, event_created bigint
) returns void language sql security invoker set search_path = '' as $$
  update public.pro_users set stripe_subscription_id = subscription_id,
    status = subscription_status, access_until = expires_at,
    last_event_created = event_created, updated_at = now()
  where stripe_customer_id = customer_id and last_event_created <= event_created;
$$;
revoke all on function public.apply_pro_subscription(text,text,text,timestamptz,bigint) from public, anon, authenticated;
grant execute on function public.apply_pro_subscription(text,text,text,timestamptz,bigint) to service_role;

commit;
