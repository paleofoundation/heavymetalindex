import test from 'node:test';
import assert from 'node:assert/strict';
import { Readable } from 'node:stream';
import Stripe from 'stripe';
import { applyStripeEvent, createCheckout, stripeClient, verifyStripeAccount } from '../../lib/pro/stripe.mjs';
import { webhookHandler } from '../../api/billing/webhook.mjs';
import { STRIPE_ACCOUNT_ID } from '../../lib/pro/config.mjs';
import { database, response } from './support.mjs';

const priceId='price_mock_pro', customerId='cus_mock_a', subscriptionId='sub_mock_a';
const owner={user_id:'user_a',stripe_customer_id:customerId,stripe_subscription_id:subscriptionId};
const subscription={id:subscriptionId,livemode:false,customer:customerId,status:'active',items:{data:[{price:{id:priceId},current_period_end:1893456000}]}};
const event=(type='customer.subscription.updated')=>({id:'evt_mock',livemode:false,type,created:1793750400,data:{object:{id:subscriptionId}}});

test('subscription updates use current Stripe state, support invoice lifecycle events, and propagate DB failures for retry',async()=>{
  for(const type of ['customer.subscription.created','customer.subscription.updated','customer.subscription.deleted','invoice.paid','invoice.payment_failed']) {
    const db=database([{...owner}]);
    const e=event(type);
    if(type.startsWith('invoice.')) e.data.object.parent={subscription_details:{subscription:subscriptionId}};
    const stripe={subscriptions:{retrieve:async id=>{assert.equal(id,subscriptionId);return {...subscription,status:type.endsWith('deleted')?'canceled':'active'};}}};
    await applyStripeEvent({event:e,stripe,db,priceId});
    const call=db.calls[0]; assert.equal(call.rpc,'apply_pro_subscription');
    assert.equal(call.args.expires_at,type.endsWith('deleted')?null:'2030-01-01T00:00:00.000Z');
  }
  await assert.rejects(applyStripeEvent({event:event(),stripe:{subscriptions:{retrieve:async()=>subscription}},db:database([{...owner}],{rpcError:Error('DB down')}),priceId}),/DB down/);
});

test('unpaid, paused, unrelated-price, live, and unknown-owner events do not grant access',async()=>{
  for(const patch of [{status:'past_due'},{status:'trialing'},{pause_collection:{behavior:'void'}},{items:{data:[{price:{id:'price_other'},current_period_end:1893456000}]}}]) {
    const db=database([{...owner}]);
    await applyStripeEvent({event:event(),stripe:{subscriptions:{retrieve:async()=>({...subscription,...patch})}},db,priceId});
    assert.equal(db.calls[0].args.expires_at,null);
  }
  await assert.rejects(applyStripeEvent({event:{...event(),livemode:true},stripe:{},db:database(),priceId}),e=>e.status===400);
  const db=database();
  await applyStripeEvent({event:event(),stripe:{subscriptions:{retrieve:async()=>subscription}},db,priceId});
  assert.equal(db.calls.length,0);
});

test('refund, dispute and fraud events hold the mapped customer without trusting metadata',async()=>{
  for(const type of ['charge.refunded','charge.dispute.created','radar.early_fraud_warning.created']) {
    const db=database([{...owner}]);
    const e=event(type); e.data.object={id:'ch_mock',charge:'ch_mock',customer:customerId,metadata:{user_id:'user_b'}};
    await applyStripeEvent({event:e,stripe:{charges:{retrieve:async()=>({customer:customerId})}},db,priceId});
    assert.equal(db.rows[0].billing_hold,true);
  }
});

test('webhook verifies exact raw bytes and rejects invalid signatures before DB access',async()=>{
  process.env.STRIPE_WEBHOOK_SECRET='whsec_mock_only'; process.env.STRIPE_PRICE_ID_PRO=priceId;
  const sdk=new Stripe('sk_test_mock_only');
  const payload=JSON.stringify(event());
  const signature=sdk.webhooks.generateTestHeaderString({payload,secret:process.env.STRIPE_WEBHOOK_SECRET});
  const stripe={webhooks:sdk.webhooks,accounts:{retrieve:async()=>({id:STRIPE_ACCOUNT_ID})},subscriptions:{retrieve:async()=>subscription}};
  for(const [body,expected] of [[payload,200],[payload+' ',400]]) {
    const req=Readable.from([body]); Object.assign(req,{method:'POST',headers:{'stripe-signature':signature}});
    const res=response();
    await webhookHandler({stripe:()=>stripe,db:()=>{if(expected===400)assert.fail('DB access before signature verification');return database([{...owner}]);}})(req,res);
    assert.equal(res.statusCode,expected);
  }
});

test('checkout uses only the configured test price and account, with repeat-safe parameters',async()=>{
  process.env.STRIPE_PRICE_ID_PRO=priceId; process.env.HMI_APP_URL='https://heavymetalindex.com';
  const db=database([{user_id:'user_a',stripe_customer_id:customerId}]);
  const calls=[];
  const stripe={accounts:{retrieve:async()=>({id:STRIPE_ACCOUNT_ID})},prices:{retrieve:async()=>({id:priceId,livemode:false,active:true,type:'recurring',recurring:{interval:'month'}})},subscriptions:{list:async()=>({data:[]})},checkout:{sessions:{list:async()=>({data:[]}),create:async(...args)=>{calls.push(args);return {url:'https://checkout.stripe.com/mock'};}}}};
  for(let i=0;i<2;i++) await createCheckout({db,stripe,userId:'user_a'});
  assert.deepEqual(calls[0],calls[1]);
  assert.deepEqual(calls[0][0].line_items,[{price:priceId,quantity:1}]);
  assert.equal(calls[0][0].payment_method_types,undefined);
  assert.match(calls[0][0].integration_identifier,/^hmi-pro-[a-z]{8}$/);
  stripe.subscriptions.list=async()=>({data:[{status:'active'}]});
  await assert.rejects(createCheckout({db,stripe,userId:'user_a'}),e=>e.status===409);
  await assert.rejects(verifyStripeAccount({accounts:{retrieve:async()=>({id:'acct_other'})}}),/Wrong/);
  process.env.STRIPE_SECRET_KEY='sk_live_mock_only'; assert.throws(stripeClient,/test-mode/); delete process.env.STRIPE_SECRET_KEY;
});
