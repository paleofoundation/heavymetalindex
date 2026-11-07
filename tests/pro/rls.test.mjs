import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { PGlite } from '@electric-sql/pglite';
import { STRIPE_ACCOUNT_ID } from '../../lib/pro/config.mjs';

let db;
before(async()=>{
  db=new PGlite();
  await db.exec(`create role anon; create role authenticated; create role service_role bypassrls;
    create schema auth; grant usage on schema auth to authenticated;
    create function auth.jwt() returns jsonb language sql stable as $$ select coalesce(nullif(current_setting('request.jwt.claims',true),''),'{}')::jsonb $$;`);
  await db.exec(fs.readFileSync(new URL('../../supabase/migrations/202611040001_index_pro.sql',import.meta.url),'utf8'));
  await db.query(`insert into pro_users(user_id,stripe_account_id,stripe_customer_id,status,access_until) values
    ('user_a',$1,'cus_a','active',now()+interval '1 day'),('user_b',$1,'cus_b','active',now()+interval '1 day')`,[STRIPE_ACCOUNT_ID]);
});
after(async()=>{await db?.close();});

async function asUser(id,fn) {
  await db.exec('begin; set local role authenticated;');
  await db.query(`select set_config('request.jwt.claims',$1,true)`,[JSON.stringify({sub:id})]);
  try {return await fn();} finally {await db.exec('rollback');}
}
const insert=`insert into lab_results(user_id,lot,ingredient_slug,analyte,value,unit,basis,result_kind,lab,sample_date) values ($1,'synthetic-lot','rice-protein','tAs',100,'ppb','native','quantified','Synthetic test laboratory','2026-11-04') returning id`;

test('Postgres RLS is enabled and forced on all three tables; only the owner reads their entitlement',async()=>{
  const flags=await db.query(`select relrowsecurity,relforcerowsecurity from pg_class where relname in ('pro_users','lab_results','comparisons')`);
  assert.equal(flags.rows.length,3); assert.ok(flags.rows.every(r=>r.relrowsecurity&&r.relforcerowsecurity));
  await asUser('user_a',async()=>{assert.deepEqual((await db.query('select user_id from pro_users')).rows,[{user_id:'user_a'}]);});
});

test('a Pro user can save their own lab result but cannot write another owner or escalate entitlement',async()=>{
  await asUser('user_a',async()=>{assert.equal((await db.query(insert,['user_a'])).rows.length,1);});
  await assert.rejects(asUser('user_a',()=>db.query(insert,['user_b'])),/row-level security/);
  await assert.rejects(asUser('user_a',()=>db.exec(`update pro_users set status='active'`)),/permission denied/);
  await assert.rejects(asUser('user_a',()=>db.exec(`select apply_pro_subscription('cus_a','sub_fake','active',now()+interval '100 years',99)`)),/permission denied/);
});

test('cross-user result and comparison reads/deletes are invisible; cached outputs cannot be forged',async()=>{
  const {rows:[result]}=await db.query(insert,['user_a']);
  await db.query(`insert into comparisons(user_id,lab_result_id,reference_id,reference_sha256,engine_version,source_ids,output) values ('user_a',$1,'ref',$2,'test',array['source-test'],'{}')`,[result.id,'a'.repeat(64)]);
  await asUser('user_b',async()=>{
    assert.equal((await db.query('select * from lab_results')).rows.length,0);
    assert.equal((await db.query('select * from comparisons')).rows.length,0);
    assert.equal((await db.query('delete from lab_results returning id')).rows.length,0);
  });
  await assert.rejects(asUser('user_a',()=>db.exec(`update comparisons set output='{"percentile":0}'`)),/permission denied/);
  assert.equal((await db.query('select * from lab_results')).rows.length,1);
});

test('below-LOQ values cannot be stored as zeros and inactive users cannot insert',async()=>{
  await assert.rejects(db.query(`insert into lab_results(user_id,lot,ingredient_slug,analyte,value,unit,basis,result_kind,loq,lab,sample_date) values ('user_a','lot','pea-protein','Pb',0,'ppb','native','below_loq',10,'Synthetic lab','2026-11-04')`),/check constraint/);
  await db.exec(`update pro_users set status='past_due' where user_id='user_b'`);
  await assert.rejects(asUser('user_b',()=>db.query(insert,['user_b'])),/row-level security/);
});

test('older webhook events cannot overwrite a newer subscription state',async()=>{
  await db.exec(`set role service_role; select apply_pro_subscription('cus_a','sub_a','canceled',null,200); select apply_pro_subscription('cus_a','sub_a','active',now()+interval '1 day',100); reset role;`);
  const {rows:[row]}=await db.query(`select status,last_event_created from pro_users where user_id='user_a'`);
  assert.equal(row.status,'canceled'); assert.equal(Number(row.last_event_created),200);
});
