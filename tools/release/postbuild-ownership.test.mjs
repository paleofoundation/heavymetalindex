import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
test('breadcrumb injection preserves ownership payloads and still enriches content documents',()=>{
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'hmi-ownership-'));
 fs.mkdirSync(path.join(root,'public'));
 const token='googlea1b2.html',payload=`google-site-verification: ${token}`;
 fs.writeFileSync(path.join(root,'public',token),payload);
 fs.writeFileSync(path.join(root,'public','reference.html'),'<html><head><title>Reference</title></head><body><h1>Reference</h1></body></html>');
 execFileSync(process.execPath,[new URL('../postbuild-inject-breadcrumbs.mjs',import.meta.url).pathname],{cwd:root});
 assert.equal(fs.readFileSync(path.join(root,'public',token),'utf8'),payload);
 assert.match(fs.readFileSync(path.join(root,'public/reference.html'),'utf8'),/BreadcrumbList/);
 fs.rmSync(root,{recursive:true,force:true});
});
