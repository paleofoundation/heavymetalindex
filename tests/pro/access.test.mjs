import test from 'node:test';
import assert from 'node:assert/strict';
import { isPro, requirePro } from '../../lib/pro/auth.mjs';
import { STRIPE_ACCOUNT_ID } from '../../lib/pro/config.mjs';
import { referenceHandler } from '../../api/pro/reference/[ingredient].mjs';
import { proPageHandler } from '../../api/pro/page.mjs';
import { response, database } from './support.mjs';

const row = { user_id:'user_a', stripe_account_id:STRIPE_ACCOUNT_ID, stripe_livemode:false, status:'active', billing_hold:false, access_until:'2030-01-01T00:00:00Z' };

test('all logged-out Pro requests fail before reading private data', async () => {
  for (const method of ['GET','POST','OPTIONS']) {
    const res = response();
    await referenceHandler({ read: () => assert.fail('Reference read without auth') })({ method, headers:{}, query:{ingredient:'rice-protein'} },res);
    assert.equal(res.statusCode,401);
    assert.equal(res.headers['cache-control'],'private, no-store');
    assert.equal(res.headers['access-control-allow-origin'],undefined);
  }
  const res = response();
  await proPageHandler()({method:'GET',headers:{}},res);
  assert.equal(res.statusCode,303);
  assert.equal(res.headers.location,'/account');
});

test('the one Pro gate rejects expiry, billing hold, wrong account, live mode and every unpaid status', async () => {
  const now = Date.parse('2026-11-04T00:00:00Z');
  assert.equal(await isPro({id:'user_a',db:database([{...row}])},now),true);
  for (const change of [
    ...['trialing','past_due','canceled','unpaid','incomplete','incomplete_expired','paused'].map(status=>({status})),
    {access_until:'2026-11-04T00:00:00Z'}, {access_until:null}, {billing_hold:true},
    {stripe_livemode:true}, {stripe_account_id:'acct_other'}, {user_id:'user_b'},
  ]) assert.equal(await isPro({id:'user_a',db:database([{...row,...change}])},now),false,JSON.stringify(change));
  await assert.rejects(isPro({id:'user_a',db:database([],{error:Error('offline')})}),e=>e.status===503);
});

test('authenticated unpaid users get 403; paid users can read only a known committed ingredient',async()=>{
  for (const [status,expected] of [['past_due',403],['active',200]]) {
    const user={id:'user_a',db:database([{...row,status}])};
    const authorize=req=>requirePro(req,async()=>user);
    const res=response();
    await referenceHandler({authorize})({method:'GET',headers:{},query:{ingredient:'rice-protein'}},res);
    assert.equal(res.statusCode,expected);
    if(expected===200) {
      assert.ok(res.body.references.every(r=>!('members' in r)));
      assert.ok(res.body.references.every(r=>r.sources.length));
    }
    const bad=response();
    await referenceHandler({authorize})({method:'GET',headers:{},query:{ingredient:'../../secrets'}},bad);
    assert.equal(bad.statusCode,status==='active'?404:403);
  }
});
